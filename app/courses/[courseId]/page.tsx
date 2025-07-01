"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Download, ExternalLink, Calendar, FileText, BookOpen } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import TextMaterialModal from "@/components/text-material-modal"
import PDFDownloadButton from "@/components/pdf-download-button"
import { useState } from "react"

// Real course data with actual Google Drive links
const coursesData = {
  "cse-1101": {
    title: "Introduction to Computers",
    code: "CSE 1101",
    description: "Fundamental concepts of computer systems, hardware components, and basic programming principles.",
    category: "Computer Science",
    color: "from-blue-600 to-blue-800",
    materials: [
      {
        id: 1,
        title: "Lecture Sheet",
        description: "Comprehensive introduction to computer systems and fundamental concepts",
        driveLink: "https://drive.google.com/file/d/1_DFV0sxVZUZuqi-nen1jFEukFFSrFzob/view?usp=drivesdk",
        type: "document",
        lastUpdated: "2024-01-25",
        fileSize: "2.4 MB",
      },
    ],
  },
  "ged-1202": {
    title: "Emergence of Bangladesh",
    code: "GED 1202",
    description: "Historical context and events leading to the emergence of Bangladesh as an independent nation.",
    category: "General Education",
    color: "from-emerald-600 to-emerald-800",
    materials: [
      {
        id: 1,
        title: "Course Outline",
        description: "Complete course structure and learning objectives for Emergence of Bangladesh",
        driveLink: "https://drive.google.com/file/d/1_D-nqdO0VDxHN1fTO3-Ac5VktHQqGQ0H/view?usp=drivesdk",
        type: "document",
        lastUpdated: "2024-01-20",
        fileSize: "1.8 MB",
      },
      {
        id: 2,
        title: "Lecture Sheet – Ancient Bengal",
        description: "Historical overview of Ancient Bengal civilization and cultural development",
        driveLink:
          "https://docs.google.com/presentation/d/1_AdHt8tbHc3m4WET0k_ZMX0kDGYXwFkX/edit?usp=drivesdk&ouid=107402849376755719634&rtpof=true&sd=true",
        type: "presentation",
        lastUpdated: "2024-01-18",
        fileSize: "3.2 MB",
      },
      {
        id: 3,
        title: "Lecture Sheet – Muslim Ruling",
        description: "Muslim rule in Bengal and its impact on society, culture, and governance",
        driveLink:
          "https://docs.google.com/presentation/d/1_E873gwSb3HuF0un7I_PVNHc1hy90-RN/edit?usp=drivesdk&ouid=107402849376755719634&rtpof=true&sd=true",
        type: "presentation",
        lastUpdated: "2024-01-22",
        fileSize: "2.9 MB",
      },
      {
        id: 4,
        title: "Origin and Development of Ancient Bengal",
        description:
          "Comprehensive study of Ancient Bengal's region, language, ethnicity, and culture by Dr. Muhammad Obaidullah",
        driveLink: "#", // This will be a downloadable text-based material
        type: "lecture",
        lastUpdated: "2024-02-02",
        fileSize: "PDF Available",
        isTextBased: true,
        isDownloadable: true,
        filename: "origin_development_ancient_bengal",
        content: `Origin and Development of Ancient Bengal: Region, Language, Ethnicity, and Culture
Dr. Muhammad Obaidullah
Email: obaidiub@yahoo.com

Introduction:
• Overview of Ancient Bengal:
• Ancient Bengal refers to the period before the arrival of major foreign influences such as the Islamic and European powers.
• This presentation will discuss the geographical setting, language, ethnicity, and cultural aspects of Ancient Bengal, highlighting its development from prehistoric times to its early dynastic periods.

Geographical Origins of Ancient Bengal:
• Location and Natural Boundaries:
• Bengal is located in the eastern part of the Indian subcontinent, bordered by the Bay of Bengal to the south and the Himalayas to the north.
• The region's fertile soil and river systems (such as the Ganges and Brahmaputra) were significant for agriculture and settlement.
• Key Features:
• The Ganges-Brahmaputra Delta was crucial in shaping the geography and environment of Bengal.

Early Human Settlements in Bengal:
• Prehistoric Bengal:
• Evidence of early human settlements in Bengal dates back to the Palaeolithic period (c. 2.5 million years ago) and the Mesolithic period (c. 10,000 BCE).
• Archaeological findings, such as tools and cave paintings, indicate that early human societies engaged in hunting, gathering, and later, early forms of agriculture.
• Neolithic Revolution:
• By around 3000 BCE, the Neolithic Revolution brought about the shift from hunter-gatherer societies to settled agricultural communities in the region.

The Vedic and Epic Ages of Bengal:
• Vedic Bengal:
• Ancient Bengal was influenced by the Vedic traditions that spread from northern India.
• References to Bengal (Bengal in Vedic texts is called "Vanga") can be found in the Mahabharata (c. 1500–1000 BCE) and other ancient texts.
• Epic Period:
• The Mahabharata (c. 1500–1000 BCE) mentions the Vanga kingdom, establishing the region's early political and cultural significance.

The Maurya and Gupta Empires in Bengal:
• Bengal became part of the Maurya Empire under Emperor Ashoka in the 3rd century BCE (c. 268–232 BCE).
• Ashoka's influence is visible in Bengal through Buddhist sites and inscriptions.
Maurya Empire:
• During the Gupta Empire (c. 4th–6th century CE), Bengal saw cultural and economic prosperity. The spread of Hinduism and Sanskrit literature began during this time.
Gupta Period:

Ancient Bengal's Language:
• Bengali Language Origins:
• The precursor to the modern Bengali language was part of the Indo-Aryan language group.
• Sanskrit and Pali were significant in early literary traditions, but regional dialects began to emerge in the early centuries CE (c. 3rd–5th century CE).
• Scripts and Inscriptions:
• Early forms of writing in Bengal included Brahmi and Kharosthi scripts, with inscriptions found from the Maurya (c. 3rd century BCE) and Gupta (c. 4th–6th century CE) periods.

Ancient Bengal's Ethnic Composition:
• The majority of early Bengal's population belonged to Indo-Aryan ethnic groups, with influences from Aryan settlers (c. 1500 BCE onward).
Indo-Aryan Influence:
• Dravidian and Austroasiatic groups such as the Munda and Khasi people also played a role in Bengal's ancient ethnic composition, especially before 1500 BCE.
Dravidian and Austroasiatic Presence:
• The region saw significant ethnic blending from 1500 BCE to 500 CE, which resulted in a distinct Bengali identity that combined elements from various groups.
Cultural Synthesis:

Kingdoms of Ancient Bengal:
• Vanga Kingdom:
• The Vanga kingdom (c. 6th century BCE) is one of the earliest known kingdoms in Bengal.
• It existed during the time of the Mahabharata (c. 1500–1000 BCE) and later became part of the Maurya Empire.
• The Kingdom of Bengal (Bengal's Early Dynasties):
• Ancient Bengal saw a series of small kingdoms and republics, including the Samatata and Gangaridai kingdoms during the 3rd–5th centuries BCE.

Bengal and Buddhism:
• Early Spread of Buddhism:
• Buddhism played a significant role in shaping the culture of ancient Bengal, particularly during the reign of Emperor Ashoka (c. 268–232 BCE).
• Numerous Buddhist monasteries, stupas, and inscriptions from the Maurya (c. 3rd century BCE) and Gupta (c. 4th–6th century CE) periods can be found in Bengal.
• Famous Buddhist Centers:
• The region became a hub for Buddhist learning, particularly in places like Paharpur and Nalanda (c. 5th century CE onward).

Hindu Influence in Ancient Bengal:
• Spread of Hinduism:
• Hinduism flourished in Bengal during the Gupta period (c. 4th–6th century CE) and later periods.
• The establishment of Hindu temples and the development of regional Hindu rituals became an important cultural aspect.
• Bengali Hindu Culture:
• The influence of Hindu epics like the Ramayana and Mahabharata played a role in the development of regional Bengali culture and festivals.

The Beginning of Muslim Influence (12th-13th Century)
Turkish Invasions and Muslim Conquests:
• In 1204 CE, the Turkish Muslim armies, under Iltutmish, invaded Bengal. In 1211 CE, the Delhi Sultanate was established, bringing Bengal under Muslim rule.
• Bakhtiyar Khilji, in 1204, invaded Bengal and later established his rule over Gaur in 1211 CE, marking the beginning of Muslim political influence in Bengal.
Delhi Sultanate (1211-1556):
• The Delhi Sultanate established Muslim rule in Bengal, significantly influencing the culture, governance, and religious life. The sultans introduced Islamic administrative systems and patronized various Islamic arts, sciences, and culture.
• During this period, Bengal saw the spread of Islamic civilization, with Islamic rulers encouraging the construction of mosques, madrasas, and other religious institutions.

The Beginning of Muslim Influence (12th-13th Century)
Expansion of Muslim Influence and Culture (15th-17th Century)
1. Mughal Rule (1556-1740):
1. The Mughal emperor Akbar established Mughal rule in Bengal in 1556 CE, and during the Mughal era, Muslim influence in Bengal became even stronger. The Mughals brought their culture, architecture, and governance, which significantly impacted Bengal's social fabric.
2. Mughal rulers in Bengal built impressive mosques, administrative buildings, and encouraged Islamic art and education. The famous architectural style of the Mughals, which combined Persian, Central Asian, and Indian elements, became prominent in Bengal.

The Beginning of Muslim Influence (12th-13th Century)
1. Religious Influence:
1. The spread of Islam in Bengal continued, with many Hindus converting to Islam, especially during the Mughal period. Islamic scholars, missionaries, and Sufi saints played a crucial role in the spiritual and religious life of Bengal.
2. Sufi saints and their message of tolerance, spiritualism, and mysticism greatly influenced rural Bengal, with many adopting Islam due to their outreach and simple approach to spirituality.

The Beginning of Muslim Influence (12th-13th Century)...
1. Literature and Arts:
1. The influence of Muslim culture was also reflected in Bengali literature and arts. Islamic poetry, religious literature, and philosophical texts flourished, with significant contributions from poets, writers, and philosophers.
2. Kalidas, Kavi Kankan and other poets wrote in Bengali, blending Islamic themes with local traditions.
3. Bengali architecture was transformed by Islamic influences, with the construction of mosques, tombs, and other religious buildings like the famous Bara Mosque in Dhaka, combining Persian and local architectural styles.

Art and Architecture of Ancient Bengal:
• The Mauryan (c. 3rd century BCE) and Gupta (c. 4th–6th century CE) periods saw the development of intricate sculptures and architectural marvels, including temples, monasteries, and Buddhist stupas.
Sculpture and Temples:
• Early Bengali architecture reflects a blend of local traditions with influences from India, Southeast Asia, and the Middle East.
Early Bengali Architecture:

Trade and Economy in Ancient Bengal:
• Agricultural Economy:
• The fertile river deltas of Bengal allowed for extensive agricultural activity. Rice, jute, and sugarcane were significant crops, especially by the Gupta period (c. 4th century CE).
• Trade Routes:
• Bengal's position along the Ganges river and the Bay of Bengal made it a key player in both inland and maritime trade networks with Southeast Asia and the Middle East from 500 BCE onward.

Society and Culture in Ancient Bengal:
• Caste and Social Structure:
• Ancient Bengal had a caste system similar to other parts of India, with Brahmins, Kshatriyas, Vaishyas, and Shudras.
• Art, Music, and Festivals:
• Cultural life was enriched by music, dance, and religious festivals, many of which continue in modern-day Bengal.

Conclusion:
Summary of Ancient Bengal's Development:
• Bengal's origin and development in the ancient period were shaped by geography, ethnicity, language, religion, and trade.
• The synthesis of various cultural, ethnic, and religious influences laid the foundation for modern Bengal's rich heritage.
Legacy of Ancient Bengal:
• The legacies of ancient Bengal, including its literature, language, and artistic achievements, continue to influence the culture of Bengal today.

Short Questions:
1. What are the key geographical features that influenced the development of Ancient Bengal?
2. Which ancient text mentions the Vanga kingdom, and what role did it play in the region?
3. How did the Maurya Empire influence Ancient Bengal, particularly under Emperor Ashoka?
4. What language family does the modern Bengali language belong to, and what were the early influences on its development?
5. Which two major religious traditions, Buddhism and Hinduism, had a significant influence on Ancient Bengal?

Broad Question:
How did the interaction of geographical, cultural, linguistic, and religious factors contribute to the formation of the distinct identity of Ancient Bengal, and how did these factors shape its early civilization?`,
      },
    ],
  },
  "eng-1100": {
    title: "Sentence and Their Elements",
    code: "ENG 1100",
    description: "Fundamentals of English grammar focusing on sentence structure and language elements.",
    category: "English",
    color: "from-purple-600 to-purple-800",
    materials: [
      {
        id: 1,
        title: "Grammar Fundamentals",
        description: "Basic grammar rules and sentence structure principles",
        driveLink: "https://drive.google.com/file/d/placeholder-eng1100/view",
        type: "document",
        lastUpdated: "2024-01-15",
        fileSize: "1.5 MB",
      },
    ],
  },
  "eng-1203": {
    title: "Reading and Writing",
    code: "ENG 1203",
    description: "Advanced reading comprehension and academic writing skills development for university students.",
    category: "English",
    color: "from-orange-600 to-orange-800",
    materials: [
      {
        id: 1,
        title: "Cohesive Devices",
        description: "Understanding and using cohesive devices to improve writing flow and coherence",
        driveLink: "https://drive.google.com/file/d/1_PaH2qYQEFm94nub_FI7p5s1w_3YEJxE/view?usp=drivesdk",
        type: "document",
        lastUpdated: "2024-01-28",
        fileSize: "2.1 MB",
      },
      {
        id: 2,
        title: "Worksheet",
        description: "Practice exercises for reading comprehension and writing skills development",
        driveLink: "https://drive.google.com/file/d/1_izfBerQYFXyHMxyc25gJtMq-wVyeSXc/view?usp=drivesdk",
        type: "document",
        lastUpdated: "2024-01-30",
        fileSize: "1.7 MB",
      },
      {
        id: 3,
        title: "Reading Comprehension (T/F/NG)",
        description:
          "Practice passages with True/False/Not Given questions covering dreams, electric cars, and fiction benefits",
        driveLink: "#", // This will be a text-based material displayed inline
        type: "exercise",
        lastUpdated: "2024-02-01",
        fileSize: "PDF Available",
        isTextBased: true,
        isDownloadable: true,
        filename: "reading_comprehension_tfng",
        content: `Reading Comprehension (T/F/NG)

Passage 1: Why Do We Dream?
Dreams have fascinated people for thousands of years. Some ancient cultures believed that dreams were messages from the gods, while others thought they could predict the future. Today, scientists still don't fully understand why we dream, but they have a few ideas. One theory is that dreams help us process emotions and memories. For example, if you experienced something stressful during the day, your brain might "replay" the event in your dreams to help you deal with it. Another idea is that dreams allow us to rehearse future situations in a safe environment. If you're worried about a presentation, you might dream about giving a speech, which helps you prepare mentally. Most dreams occur during REM (Rapid Eye Movement) sleep, a stage where brain activity is high and similar to when we're awake. Interestingly, we often forget our dreams just minutes after waking up. While some people remember their dreams vividly, others rarely recall them. Whether or not we remember them, dreams remain one of the most mysterious parts of our sleep cycle.

Questions (Passage 1):
1. Scientists have discovered the exact reason why we dream.
2. Most dreams happen during REM sleep.
3. Some people believe that dreams can help process emotional experiences.
4. Dream research began in the 21st century.
5. All people clearly remember their dreams when they wake up.

Passage 2: The Rise of Electric Cars
Electric vehicles (EVs) are quickly gaining popularity around the world. Many governments are encouraging people to switch from traditional gasoline-powered cars to EVs to reduce air pollution and slow climate change. EVs run on electricity, which can come from renewable sources like wind and solar energy. Earlier electric models had limited battery range, but now many can travel over 300 kilometers on a single charge. However, some consumers are hesitant to switch due to concerns about charging stations and battery life. To address this, governments and private companies are expanding charging networks, especially in rural and suburban areas. In addition, some cities offer tax breaks or subsidies to make EVs more affordable for buyers. As technology continues to improve and production increases, experts predict that electric vehicles will eventually become cheaper than gasoline cars. Although challenges remain, the shift to electric transportation appears inevitable. With cleaner air and quieter roads, many believe EVs are the future of driving.

Questions (Passage 2):
1. Some people are worried about whether they can easily charge electric vehicles.
2. Electric cars are more expensive than gas-powered cars in every country.
3. Governments offer financial support to encourage people to buy EVs.
4. EVs are the most widely used vehicles in urban areas.
5. Many EVs can now travel farther than earlier models.

Passage 3: The Benefits of Reading Fiction
Reading fiction offers more than just entertainment—it can enhance your brain and emotional health. Research suggests that people who regularly read fiction have broader vocabularies and are more empathetic. Reading stories from a character's point of view can help you understand different perspectives, which strengthens emotional intelligence. Fiction can also reduce stress. Just a few minutes of reading can lower heart rate and relax your muscles. Unlike watching TV, reading actively engages your imagination, as you must picture the characters, settings, and events in your mind. This mental exercise helps keep your brain sharp and focused. Additionally, many fiction books deal with important social and cultural issues, offering insights into other people's lives and struggles. Reading also builds concentration and patience—skills that are valuable in daily life. While people read for different reasons, fiction continues to be a powerful tool for mental development and emotional awareness.

Questions (Passage 3):
1. Reading fiction improves empathy and vocabulary.
2. Reading requires the brain to visualize scenes.
3. Fiction books only focus on fantasy and imaginary themes.
4. People mostly read fiction to learn new words.
5. Stress levels can be lowered by reading for a short time.`,
      },
      {
        id: 4,
        title: "Additional Reading Material",
        description: "Supplementary reading and writing exercises for advanced practice",
        driveLink: "https://drive.google.com/file/d/1hCa2Mum85FMLF2OAghH4SLUp9g21XOZn/view?usp=drivesdk",
        type: "document",
        lastUpdated: "2024-02-03",
        fileSize: "1.9 MB",
      },
    ],
  },
}

export default function CourseDetailPage() {
  const params = useParams()
  const courseId = params.courseId as string
  const course = coursesData[courseId as keyof typeof coursesData]

  const [selectedMaterial, setSelectedMaterial] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  const getFileIcon = (type: string) => {
    return <FileText className="h-5 w-5 text-white" />
  }

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-950 text-gray-100 flex items-center justify-center">
        <div className="text-center">
          <BookOpen className="h-16 w-16 text-gray-600 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-white mb-2">Course Not Found</h1>
          <p className="text-gray-400 mb-6">The course you're looking for doesn't exist.</p>
          <Link href="/">
            <Button className="bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <Navigation />

      {/* Course Header Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8">
            <Link href="/">
              <Button variant="ghost" className="mb-6 text-gray-400 hover:text-white hover:bg-gray-800">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to All Courses
              </Button>
            </Link>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
            <div className="flex items-start space-x-6">
              <div
                className={`w-16 h-16 bg-gradient-to-br ${course.color} rounded-2xl flex items-center justify-center shadow-2xl`}
              >
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-3">
                  <h1 className="text-3xl md:text-4xl font-bold text-white">{course.title}</h1>
                  <Badge variant="secondary" className="bg-gray-800 text-gray-300 border-gray-700">
                    {course.code}
                  </Badge>
                </div>
                <p className="text-lg text-gray-400 mb-4 leading-relaxed">{course.description}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <FileText className="h-4 w-4" />
                    <span>
                      {course.materials.length} Study Material{course.materials.length !== 1 ? "s" : ""}
                    </span>
                  </div>
                  <Badge variant="outline" className="border-gray-700 text-gray-400">
                    {course.category}
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="px-4 pb-16">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-3">Available Study Materials</h2>
            <p className="text-gray-400">Access all lecture sheets and course materials for {course.title}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {course.materials.map((material) => (
              <Card
                key={material.id}
                className="group bg-gray-900/50 backdrop-blur-sm border-gray-800 hover:border-gray-700 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/10 hover:-translate-y-1"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between mb-3">
                    <div
                      className={`w-10 h-10 bg-gradient-to-br ${course.color} rounded-lg flex items-center justify-center shadow-lg`}
                    >
                      {getFileIcon(material.type)}
                    </div>
                    <Badge variant="secondary" className="text-xs bg-gray-800 text-gray-400 border-gray-700">
                      {material.fileSize}
                    </Badge>
                  </div>

                  <CardTitle className="text-lg font-semibold text-white mb-2 group-hover:text-violet-400 transition-colors">
                    {material.title}
                  </CardTitle>

                  <CardDescription className="text-sm text-gray-400 leading-relaxed">
                    {material.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="flex items-center justify-between mb-4 text-xs text-gray-500">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-3 w-3" />
                      <span>{formatDate(material.lastUpdated)}</span>
                    </div>
                    <Badge variant="outline" className="text-xs border-gray-700 text-gray-500 capitalize">
                      {material.type}
                    </Badge>
                  </div>

                  <div className="flex space-x-2">
                    {material.isTextBased ? (
                      <>
                        <Button
                          size="sm"
                          className="flex-1 bg-gray-700 hover:bg-gray-600 text-white border-0 transition-all duration-200 hover:scale-105"
                          onClick={() => {
                            setSelectedMaterial(material)
                            setIsModalOpen(true)
                          }}
                        >
                          <BookOpen className="h-4 w-4 mr-2" />
                          Read
                        </Button>
                        {material.isDownloadable && material.filename ? (
                          <PDFDownloadButton
                            content={material.content}
                            filename={material.filename}
                            title={material.title}
                            className="flex-1 bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white border-0"
                          />
                        ) : (
                          <Button
                            size="sm"
                            className="flex-1 bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white border-0"
                            onClick={() => {
                              setSelectedMaterial(material)
                              setIsModalOpen(true)
                            }}
                          >
                            <FileText className="h-4 w-4 mr-2" />
                            Practice
                          </Button>
                        )}
                      </>
                    ) : (
                      <>
                        <Button
                          size="sm"
                          className="flex-1 bg-gray-700 hover:bg-gray-600 text-white border-0 transition-all duration-200 hover:scale-105"
                          onClick={() => window.open(material.driveLink, "_blank")}
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View
                        </Button>
                        <Button
                          size="sm"
                          className="flex-1 bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white border-0"
                          onClick={() => window.open(material.driveLink, "_blank")}
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <TextMaterialModal
        material={selectedMaterial}
        course={course}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setSelectedMaterial(null)
        }}
      />

      <Footer />
    </div>
  )
}
