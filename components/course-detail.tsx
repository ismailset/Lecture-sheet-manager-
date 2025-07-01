"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Download, ExternalLink, Calendar, FileText } from "lucide-react"

interface CourseDetailProps {
  courseId: number
  onBack: () => void
}

// Mock lecture data - ready for Supabase integration
const lectureData = {
  1: [
    // Emergence of Bangladesh
    {
      id: 1,
      title: "Pre-Independence History",
      description: "Historical background before 1971",
      driveLink: "https://drive.google.com/file/d/example1",
      lastUpdated: "2024-01-15",
      fileSize: "2.1 MB",
    },
    {
      id: 2,
      title: "Language Movement 1952",
      description: "The significance of the Language Movement",
      driveLink: "https://drive.google.com/file/d/example2",
      lastUpdated: "2024-01-18",
      fileSize: "1.8 MB",
    },
  ],
  2: [
    // Introduction to Computers
    {
      id: 1,
      title: "Computer Fundamentals",
      description: "Basic concepts and components",
      driveLink: "https://drive.google.com/file/d/example3",
      lastUpdated: "2024-01-20",
      fileSize: "3.2 MB",
    },
    {
      id: 2,
      title: "Number Systems",
      description: "Binary, decimal, and hexadecimal systems",
      driveLink: "https://drive.google.com/file/d/example4",
      lastUpdated: "2024-01-22",
      fileSize: "2.5 MB",
    },
  ],
}

export default function CourseDetail({ courseId, onBack }: CourseDetailProps) {
  const lectures = lectureData[courseId as keyof typeof lectureData] || []

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-8">
        <Button variant="ghost" onClick={onBack} className="mb-4">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Courses
        </Button>

        <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Course Lecture Sheets</h1>
          <p className="text-slate-600 dark:text-slate-400">Access all available lecture materials for this course</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {lectures.map((lecture) => (
          <Card
            key={lecture.id}
            className="group hover:shadow-lg transition-all duration-300 border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm"
          >
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {lecture.title}
              </CardTitle>
              <CardDescription className="text-sm text-slate-600 dark:text-slate-400">
                {lecture.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="pt-0">
              <div className="flex items-center justify-between mb-4 text-xs text-slate-500 dark:text-slate-400">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-3 w-3" />
                  <span>{formatDate(lecture.lastUpdated)}</span>
                </div>
                <Badge variant="secondary" className="text-xs">
                  {lecture.fileSize}
                </Badge>
              </div>

              <div className="flex space-x-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1"
                  onClick={() => window.open(lecture.driveLink, "_blank")}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View
                </Button>
                <Button
                  size="sm"
                  className="flex-1 bg-blue-600 hover:bg-blue-700"
                  onClick={() => window.open(lecture.driveLink, "_blank")}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {lectures.length === 0 && (
        <div className="text-center py-16">
          <FileText className="h-16 w-16 text-slate-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-slate-600 dark:text-slate-400 mb-2">No lectures available</h3>
          <p className="text-slate-500 dark:text-slate-500">Lecture materials will be added soon</p>
        </div>
      )}
    </div>
  )
}
