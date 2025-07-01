"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, FileText, ArrowRight, GraduationCap, Clock, Users } from "lucide-react"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

// Real course data with actual Google Drive links
const courses = [
  {
    id: "cse-1101",
    title: "Introduction to Computers",
    code: "CSE 1101",
    description: "Fundamental concepts of computer systems, hardware components, and basic programming principles.",
    category: "Computer Science",
    totalSheets: 1,
    color: "from-blue-600 to-blue-800",
    lastUpdated: "2024-01-25",
  },
  {
    id: "ged-1202",
    title: "Emergence of Bangladesh",
    code: "GED 1202",
    description: "Historical context and events leading to the emergence of Bangladesh as an independent nation.",
    category: "General Education",
    totalSheets: 4,
    color: "from-emerald-600 to-emerald-800",
    lastUpdated: "2024-02-02",
  },
  {
    id: "eng-1100",
    title: "Sentence and Their Elements",
    code: "ENG 1100",
    description: "Fundamentals of English grammar focusing on sentence structure and language elements.",
    category: "English",
    totalSheets: 1,
    color: "from-purple-600 to-purple-800",
    lastUpdated: "2024-01-15",
  },
  {
    id: "eng-1203",
    title: "Reading and Writing",
    code: "ENG 1203",
    description: "Advanced reading comprehension and academic writing skills development for university students.",
    category: "English",
    totalSheets: 4,
    color: "from-orange-600 to-orange-800",
    lastUpdated: "2024-02-03",
  },
]

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const searchLower = searchTerm.toLowerCase()
      return (
        course.title.toLowerCase().includes(searchLower) ||
        course.code.toLowerCase().includes(searchLower) ||
        course.description.toLowerCase().includes(searchLower) ||
        course.category.toLowerCase().includes(searchLower)
      )
    })
  }, [searchTerm])

  const totalSheets = courses.reduce((sum, course) => sum + course.totalSheets, 0)

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <Navigation searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-violet-600 to-blue-600 rounded-2xl mb-8 shadow-2xl">
              <GraduationCap className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Welcome to CLSO
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
              Your organized hub for lecture sheets and course outlines
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <BookOpen className="h-4 w-4" />
                <span>{courses.length} Courses Available</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-gray-600 rounded-full"></div>
              <div className="flex items-center space-x-2">
                <FileText className="h-4 w-4" />
                <span>{totalSheets} Lecture Materials</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-gray-600 rounded-full"></div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Updated Regularly</span>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center hover:border-gray-700 transition-colors">
              <div className="text-3xl font-bold text-violet-400 mb-2">{courses.length}</div>
              <div className="text-gray-400">Active Courses</div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center hover:border-gray-700 transition-colors">
              <div className="text-3xl font-bold text-blue-400 mb-2">{totalSheets}</div>
              <div className="text-gray-400">Study Materials</div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center hover:border-gray-700 transition-colors">
              <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
              <div className="text-gray-400">Access Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="px-4 pb-16">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Available Courses</h2>
            <p className="text-gray-400 text-lg">
              {filteredCourses.length} course{filteredCourses.length !== 1 ? "s" : ""} found
              {searchTerm && ` for "${searchTerm}"`}
            </p>
          </div>

          {filteredCourses.length === 0 ? (
            <div className="text-center py-16">
              <BookOpen className="h-16 w-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">No courses found</h3>
              <p className="text-gray-500">Try adjusting your search criteria</p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredCourses.map((course) => (
                <Card
                  key={course.id}
                  className="group bg-gray-900/50 backdrop-blur-sm border-gray-800 hover:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/10 hover:-translate-y-2"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${course.color} rounded-xl flex items-center justify-center shadow-lg`}
                      >
                        <BookOpen className="h-6 w-6 text-white" />
                      </div>
                      <Badge variant="secondary" className="bg-gray-800 text-gray-300 border-gray-700">
                        {course.category}
                      </Badge>
                    </div>

                    <CardTitle className="text-xl font-bold text-white group-hover:text-violet-400 transition-colors mb-2">
                      {course.title}
                    </CardTitle>

                    <div className="flex items-center space-x-2 mb-3">
                      <Badge variant="outline" className="text-xs border-gray-700 text-gray-400">
                        {course.code}
                      </Badge>
                    </div>

                    <CardDescription className="text-gray-400 leading-relaxed">{course.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between mb-6 text-sm text-gray-500">
                      <div className="flex items-center space-x-2">
                        <FileText className="h-4 w-4" />
                        <span>
                          {course.totalSheets} material{course.totalSheets !== 1 ? "s" : ""}
                        </span>
                      </div>
                      <div className="text-xs">Updated {new Date(course.lastUpdated).toLocaleDateString()}</div>
                    </div>

                    <Link href={`/courses/${course.id}`}>
                      <Button className="w-full bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white border-0 group-hover:shadow-lg group-hover:shadow-violet-500/25 transition-all duration-300">
                        <span>View Sheets</span>
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="px-4 pb-16">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-gradient-to-r from-violet-600/10 to-blue-600/10 border border-violet-500/20 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-violet-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Academic Excellence</h3>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
              Access comprehensive lecture materials and course outlines designed to support your academic journey in
              Computer Science and Engineering.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                className="border-violet-500/50 text-violet-400 hover:bg-violet-500/10 hover:border-violet-400 bg-transparent"
              >
                <BookOpen className="h-4 w-4 mr-2" />
                Browse All Courses
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
