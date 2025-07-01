"use client"

import { GraduationCap, BookOpen, Users, Target, Award, Clock, FileText } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-violet-600 to-blue-600 rounded-2xl mb-8 shadow-2xl">
            <GraduationCap className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            About CLSO
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
            CSE Lecture Sheets and Outlines (CLSO) is a comprehensive educational platform designed to organize and
            share university lecture materials for students in the Department of Computer Science and Engineering.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="px-4 pb-16">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 text-center hover:border-gray-700 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-violet-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Our Mission</h3>
              <p className="text-gray-400 leading-relaxed">
                To provide easy access to organized lecture materials and course outlines for university students,
                enhancing their learning experience and academic success.
              </p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 text-center hover:border-gray-700 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Our Vision</h3>
              <p className="text-gray-400 leading-relaxed">
                To become the premier platform for academic resources, fostering collaborative learning and academic
                excellence within the university community.
              </p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 text-center hover:border-gray-700 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Our Community</h3>
              <p className="text-gray-400 leading-relaxed">
                Built by students, for students. We believe in the power of shared knowledge and collaborative learning
                to achieve academic excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 pb-16">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose CLSO?</h2>
            <p className="text-gray-400 text-lg">
              Discover what makes our platform the ideal choice for your academic journey
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-to-br from-violet-600 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Organized Content</h3>
                  <p className="text-gray-400">
                    All lecture materials are systematically organized by course and topic for easy navigation and quick
                    access.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Always Updated</h3>
                  <p className="text-gray-400">
                    Regular updates ensure you have access to the latest lecture materials and course outlines for all
                    subjects.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Student-Centered</h3>
                  <p className="text-gray-400">
                    Designed with students in mind, focusing on usability and accessibility across all devices and
                    platforms.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Quality Assured</h3>
                  <p className="text-gray-400">
                    All materials are carefully curated and verified to ensure academic quality and relevance to course
                    objectives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maintainer Section */}
      <section className="px-4 pb-16">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-violet-600/10 to-blue-600/10 border border-violet-500/20 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-violet-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Maintained by Md Ismail</h3>
            <p className="text-gray-300 text-lg mb-4">Department of Computer Science and Engineering</p>
            <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto">
              As a dedicated student in the CSE department, I created CLSO to help fellow students access organized
              lecture materials and course outlines. This platform represents my commitment to fostering collaborative
              learning and academic excellence within our university community.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
