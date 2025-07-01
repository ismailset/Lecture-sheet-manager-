"use client"

import { GraduationCap, Mail, Github, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-950/90 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-violet-600 to-blue-600 rounded-lg flex items-center justify-center">
              <GraduationCap className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              CLSO
            </span>
          </div>

          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-gray-300 font-medium">Maintained by Md Ismail</span>
            <span className="text-gray-600">|</span>
            <span className="text-gray-400">Department of CSE</span>
          </div>

          <div className="flex items-center justify-center space-x-4 mb-6">
            <a
              href="mailto:ismail@example.com"
              className="text-gray-500 hover:text-violet-400 transition-colors duration-200"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://github.com"
              className="text-gray-500 hover:text-violet-400 transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              className="text-gray-500 hover:text-violet-400 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>

          <div className="pt-6 border-t border-gray-800">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} CLSO - CSE Lecture Sheets and Outlines. All educational materials are for
              academic use only.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
