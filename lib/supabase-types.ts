// Types for future Supabase integration

export interface Course {
  id: number
  title: string
  code: string
  description: string
  category: string
  semester: string
  total_sheets: number
  drive_link: string
  color: string
  last_updated: string
  created_at: string
  updated_at: string
}

export interface LectureSheet {
  id: number
  course_id: number
  title: string
  description: string
  drive_link: string
  file_size: string
  last_updated: string
  created_at: string
  updated_at: string
}

export interface DatabaseSchema {
  courses: Course
  lecture_sheets: LectureSheet
}

// Supabase client configuration (for future use)
export const supabaseConfig = {
  url: process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "",
}
