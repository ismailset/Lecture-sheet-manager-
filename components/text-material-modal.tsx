"use client"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X, FileText } from "lucide-react"

interface TextMaterialModalProps {
  material: {
    id: number
    title: string
    description: string
    content?: string
    fileSize: string
    lastUpdated: string
    type: string
  }
  course: {
    title: string
    color: string
  }
  isOpen: boolean
  onClose: () => void
}

export default function TextMaterialModal({ material, course, isOpen, onClose }: TextMaterialModalProps) {
  if (!isOpen || !material.content) return null

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="w-full max-w-4xl max-h-[90vh] overflow-hidden bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <div className="flex items-center space-x-4">
            <div className={`w-10 h-10 bg-gradient-to-br ${course.color} rounded-lg flex items-center justify-center`}>
              <FileText className="h-5 w-5 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">{material.title}</h2>
              <p className="text-sm text-gray-400">{course.title}</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-gray-400 hover:text-white hover:bg-gray-800"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <Badge variant="secondary" className="bg-gray-800 text-gray-300 border-gray-700">
                {material.type}
              </Badge>
              <div className="text-sm text-gray-500">Updated {formatDate(material.lastUpdated)}</div>
            </div>
            <p className="text-gray-400 mb-6">{material.description}</p>
          </div>

          <div className="bg-gray-950/50 border border-gray-800 rounded-xl p-6">
            <pre className="whitespace-pre-wrap text-gray-200 font-mono text-sm leading-relaxed">
              {material.content}
            </pre>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-gray-700 bg-gray-900/50">
          <div className="text-sm text-gray-500">
            {material.fileSize} • {material.type}
          </div>
          <Button
            onClick={onClose}
            className="bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white"
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  )
}
