"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Download, Loader2 } from "lucide-react"
import { generateAndUploadPDF, checkPDFExists } from "@/lib/supabase"

interface PDFDownloadButtonProps {
  content: string
  filename: string
  title: string
  className?: string
}

export default function PDFDownloadButton({ content, filename, title, className }: PDFDownloadButtonProps) {
  const [isGenerating, setIsGenerating] = useState(false)

  const handleDownload = async () => {
    setIsGenerating(true)

    try {
      // First check if PDF already exists
      let pdfUrl = await checkPDFExists(filename)

      // If not exists, generate new PDF
      if (!pdfUrl) {
        pdfUrl = await generateAndUploadPDF(content, filename)
      }

      if (pdfUrl) {
        // Create download link
        const link = document.createElement("a")
        link.href = pdfUrl
        link.download = `${filename}.pdf`
        link.target = "_blank"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      } else {
        // Fallback to text download if PDF generation fails
        const element = document.createElement("a")
        const file = new Blob([content], { type: "text/plain" })
        element.href = URL.createObjectURL(file)
        element.download = `${filename}.txt`
        document.body.appendChild(element)
        element.click()
        document.body.removeChild(element)
      }
    } catch (error) {
      console.error("Download error:", error)
      // Fallback to text download
      const element = document.createElement("a")
      const file = new Blob([content], { type: "text/plain" })
      element.href = URL.createObjectURL(file)
      element.download = `${filename}.txt`
      document.body.appendChild(element)
      element.click()
      document.body.removeChild(element)
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <Button size="sm" className={className} onClick={handleDownload} disabled={isGenerating}>
      {isGenerating ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <Download className="h-4 w-4 mr-2" />}
      {isGenerating ? "Generating..." : "Download PDF"}
    </Button>
  )
}
