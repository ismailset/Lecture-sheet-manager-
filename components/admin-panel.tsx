"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Plus, Save } from "lucide-react"

// This component is ready for Supabase integration
export default function AdminPanel() {
  const [newLecture, setNewLecture] = useState({
    title: "",
    description: "",
    driveLink: "",
    fileSize: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Integrate with Supabase
    console.log("New lecture to add:", newLecture)

    // Reset form
    setNewLecture({
      title: "",
      description: "",
      driveLink: "",
      fileSize: "",
    })
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Plus className="h-5 w-5" />
            <span>Add New Lecture Sheet</span>
          </CardTitle>
          <CardDescription>
            Add a new lecture sheet to the collection. This will be integrated with Supabase for dynamic management.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">Lecture Title</Label>
                <Input
                  id="title"
                  placeholder="e.g., Lecture 6 – Input/Output Devices"
                  value={newLecture.title}
                  onChange={(e) => setNewLecture({ ...newLecture, title: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="fileSize">File Size</Label>
                <Input
                  id="fileSize"
                  placeholder="e.g., 2.5 MB"
                  value={newLecture.fileSize}
                  onChange={(e) => setNewLecture({ ...newLecture, fileSize: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Brief description of the lecture content..."
                value={newLecture.description}
                onChange={(e) => setNewLecture({ ...newLecture, description: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="driveLink">Google Drive Link</Label>
              <Input
                id="driveLink"
                type="url"
                placeholder="https://drive.google.com/file/d/..."
                value={newLecture.driveLink}
                onChange={(e) => setNewLecture({ ...newLecture, driveLink: e.target.value })}
                required
              />
            </div>

            <div className="flex space-x-4">
              <Button type="submit" className="flex items-center space-x-2">
                <Save className="h-4 w-4" />
                <span>Add Lecture Sheet</span>
              </Button>

              <Button
                type="button"
                variant="outline"
                onClick={() => setNewLecture({ title: "", description: "", driveLink: "", fileSize: "" })}
              >
                Clear Form
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Ready for Supabase Integration</h3>
        <p className="text-sm text-blue-700 dark:text-blue-300">
          This admin panel is structured to easily integrate with Supabase for dynamic content management. The form data
          can be directly sent to your Supabase database once configured.
        </p>
      </div>
    </div>
  )
}
