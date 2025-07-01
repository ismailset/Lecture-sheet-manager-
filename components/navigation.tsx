"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Menu, X, GraduationCap } from "lucide-react"
import Link from "next/link"

interface NavigationProps {
  searchTerm?: string
  setSearchTerm?: (term: string) => void
}

export default function Navigation({ searchTerm = "", setSearchTerm }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchFocused, setIsSearchFocused] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/90 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-violet-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              CLSO
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium">
              About
            </Link>
          </div>

          {/* Search Bar */}
          {setSearchTerm && (
            <div className="hidden md:block">
              <div
                className={`relative transition-all duration-300 ${
                  isSearchFocused ? "w-80 shadow-lg shadow-violet-500/20" : "w-64"
                }`}
              >
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  className={`pl-10 bg-gray-900/60 border-gray-700 text-gray-100 placeholder-gray-400 transition-all duration-300 ${
                    isSearchFocused
                      ? "border-violet-500 ring-2 ring-violet-500/20 shadow-lg shadow-violet-500/10"
                      : "hover:border-gray-600"
                  }`}
                />
              </div>
            </div>
          )}

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white hover:bg-gray-800"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4">
              {setSearchTerm && (
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search courses..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-gray-900/60 border-gray-700 text-gray-100 placeholder-gray-400 focus:border-violet-500 focus:ring-violet-500/20"
                  />
                </div>
              )}
              <Link
                href="/"
                className="text-gray-300 hover:text-white transition-colors duration-200 px-2 py-1 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-300 hover:text-white transition-colors duration-200 px-2 py-1 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
