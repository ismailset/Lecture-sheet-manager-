import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Helper function to generate and upload PDF
export async function generateAndUploadPDF(content: string, filename: string): Promise<string | null> {
  try {
    // Import jsPDF dynamically to avoid SSR issues
    const { jsPDF } = await import("jspdf")

    // Create new PDF document
    const doc = new jsPDF()

    // Set font and size
    doc.setFont("helvetica", "normal")
    doc.setFontSize(12)

    // Split content into lines that fit the page width
    const pageWidth = doc.internal.pageSize.getWidth()
    const margin = 20
    const maxLineWidth = pageWidth - margin * 2

    // Split content by lines and then by page width
    const lines = content.split("\n")
    const wrappedLines: string[] = []

    lines.forEach((line) => {
      if (line.trim() === "") {
        wrappedLines.push("")
        return
      }

      const words = line.split(" ")
      let currentLine = ""

      words.forEach((word) => {
        const testLine = currentLine + (currentLine ? " " : "") + word
        const textWidth = doc.getTextWidth(testLine)

        if (textWidth > maxLineWidth && currentLine) {
          wrappedLines.push(currentLine)
          currentLine = word
        } else {
          currentLine = testLine
        }
      })

      if (currentLine) {
        wrappedLines.push(currentLine)
      }
    })

    // Add content to PDF with page breaks
    let yPosition = margin
    const lineHeight = 7
    const pageHeight = doc.internal.pageSize.getHeight()
    const maxYPosition = pageHeight - margin

    wrappedLines.forEach((line, index) => {
      // Check if we need a new page
      if (yPosition > maxYPosition) {
        doc.addPage()
        yPosition = margin
      }

      // Handle headers (lines that end with :)
      if (line.endsWith(":") && line.length < 100) {
        doc.setFont("helvetica", "bold")
        doc.setFontSize(14)
      } else if (line.startsWith("•")) {
        doc.setFont("helvetica", "normal")
        doc.setFontSize(11)
      } else {
        doc.setFont("helvetica", "normal")
        doc.setFontSize(12)
      }

      doc.text(line, margin, yPosition)
      yPosition += lineHeight

      // Add extra space after headers
      if (line.endsWith(":") && line.length < 100) {
        yPosition += 3
      }
    })

    // Convert PDF to blob
    const pdfBlob = doc.output("blob")

    // Upload to Supabase Storage
    const { data, error } = await supabase.storage.from("pdfs").upload(`${filename}.pdf`, pdfBlob, {
      contentType: "application/pdf",
      upsert: true,
    })

    if (error) {
      console.error("Error uploading PDF:", error)
      return null
    }

    // Get public URL
    const { data: urlData } = supabase.storage.from("pdfs").getPublicUrl(`${filename}.pdf`)

    return urlData.publicUrl
  } catch (error) {
    console.error("Error generating PDF:", error)
    return null
  }
}

// Helper function to check if PDF exists in storage
export async function checkPDFExists(filename: string): Promise<string | null> {
  try {
    const { data, error } = await supabase.storage.from("pdfs").list("", {
      search: `${filename}.pdf`,
    })

    if (error || !data || data.length === 0) {
      return null
    }

    // Get public URL if file exists
    const { data: urlData } = supabase.storage.from("pdfs").getPublicUrl(`${filename}.pdf`)

    return urlData.publicUrl
  } catch (error) {
    console.error("Error checking PDF existence:", error)
    return null
  }
}
