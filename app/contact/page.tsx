"use client"

import { Mail, MessageSquare, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-violet-600 to-blue-600 rounded-2xl mb-8 shadow-2xl">
            <MessageSquare className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
            Have questions, suggestions, or need help with accessing course materials? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="px-4 pb-16">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-8">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                    <p className="text-gray-400">ismail.cse@university.edu</p>
                    <p className="text-sm text-gray-500">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                    <p className="text-gray-400">+880 1XXX-XXXXXX</p>
                    <p className="text-sm text-gray-500">Available 9 AM - 6 PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Location</h3>
                    <p className="text-gray-400">Department of CSE</p>
                    <p className="text-gray-400">University Campus</p>
                    <p className="text-sm text-gray-500">Room 301, CSE Building</p>
                  </div>
                </div>
              </div>

              {/* Quick Help */}
              <div className="mt-12 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Quick Help</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                    <span className="text-gray-400">Can't find a specific lecture sheet?</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-400">Need help with course navigation?</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span className="text-gray-400">Want to suggest new features?</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-gray-400">Experiencing technical issues?</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-8">Send a Message</h2>

              <form className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      placeholder="Your first name"
                      className="bg-gray-900/50 border-gray-700 text-gray-100 placeholder-gray-400 focus:border-violet-500 focus:ring-violet-500/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      placeholder="Your last name"
                      className="bg-gray-900/50 border-gray-700 text-gray-100 placeholder-gray-400 focus:border-violet-500 focus:ring-violet-500/20"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-gray-900/50 border-gray-700 text-gray-100 placeholder-gray-400 focus:border-violet-500 focus:ring-violet-500/20"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="What is this about?"
                    className="bg-gray-900/50 border-gray-700 text-gray-100 placeholder-gray-400 focus:border-violet-500 focus:ring-violet-500/20"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    rows={6}
                    placeholder="Tell us more about your inquiry..."
                    className="bg-gray-900/50 border-gray-700 text-gray-100 placeholder-gray-400 focus:border-violet-500 focus:ring-violet-500/20 resize-none"
                  />
                </div>

                <Button className="w-full bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white border-0 py-3">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>

              <div className="mt-6 p-4 bg-violet-600/10 border border-violet-500/20 rounded-lg">
                <p className="text-sm text-gray-400">
                  <strong className="text-violet-400">Note:</strong> This is a demo contact form. In a real
                  implementation, this would be connected to a backend service to handle form submissions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
