"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import {
  Brain,
  Code,
  Github,
  Linkedin,
  Mail,
  Phone,
  Trophy,
  User,
  Cpu,
  Eye,
  Network,
  Sparkles,
  Target,
  TrendingUp,
  Calendar,
  MapPin,
  GraduationCap,
  Menu,
  X,
  Quote,
  BookOpen,
  Coffee,
  Music,
  Camera,
  Gamepad2,
  ChevronRight,
  Globe,
  Code2
} from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

// Custom hook for intersection observer
function useInView(threshold = 0.1) {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold])

  return [ref, isInView] as const
}

// Animated Counter Component
function AnimatedCounter({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const [ref, isInView] = useInView()

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setCount(Math.floor(progress * end))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [isInView, end, duration])

  return (
    <div ref={ref} className="text-2xl sm:text-3xl lg:text-4xl font-bold text-emerald-300">
      {count}
      {suffix}
    </div>
  )
}

// Typewriter Effect Component
function TypewriterText({ text, delay = 100 }: { text: string; delay?: number }) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, delay)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, delay])

  return (
    <span>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

// Floating Particles Background
function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-emerald-400/20 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  )
}

// Neural Network Background
function NeuralNetwork() {
  return (
    <div className="absolute inset-0 opacity-5 sm:opacity-10">
      <svg className="w-full h-full" viewBox="0 0 800 600">
        <defs>
          <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#86efac" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
        <g stroke="url(#neuralGradient)" strokeWidth="1" fill="none">
          <line x1="100" y1="100" x2="300" y2="200" className="animate-pulse" />
          <line x1="100" y1="200" x2="300" y2="100" className="animate-pulse" />
          <line x1="100" y1="300" x2="300" y2="250" className="animate-pulse" />
          <line x1="300" y1="100" x2="500" y2="150" className="animate-pulse" />
          <line x1="300" y1="200" x2="500" y2="200" className="animate-pulse" />
          <line x1="300" y1="250" x2="500" y2="250" className="animate-pulse" />
          <line x1="500" y1="150" x2="700" y2="200" className="animate-pulse" />
          <line x1="500" y1="200" x2="700" y2="200" className="animate-pulse" />
          <line x1="500" y1="250" x2="700" y2="200" className="animate-pulse" />
        </g>
        <g fill="url(#neuralGradient)">
          <circle cx="100" cy="100" r="6" className="animate-pulse" />
          <circle cx="100" cy="200" r="6" className="animate-pulse" />
          <circle cx="100" cy="300" r="6" className="animate-pulse" />
          <circle cx="300" cy="100" r="6" className="animate-pulse" />
          <circle cx="300" cy="200" r="6" className="animate-pulse" />
          <circle cx="300" cy="250" r="6" className="animate-pulse" />
          <circle cx="500" cy="150" r="6" className="animate-pulse" />
          <circle cx="500" cy="200" r="6" className="animate-pulse" />
          <circle cx="500" cy="250" r="6" className="animate-pulse" />
          <circle cx="700" cy="200" r="6" className="animate-pulse" />
        </g>
      </svg>
    </div>
  )
}

// Mobile Navigation Component
function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "About", href: "#about", icon: User },
    { name: "Experience", href: "#experience", icon: Trophy },
    { name: "Projects", href: "#projects", icon: Code },
    { name: "Skills", href: "#skills", icon: Brain },
    { name: "Contact", href: "#contact", icon: Mail },
  ]

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-emerald-600/20">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-80 bg-slate-900/95 backdrop-blur-md border-emerald-500/20">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2">
              <Brain className="h-6 w-6 text-emerald-400" />
              <span className="text-lg font-bold text-white">Paras Garg</span>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-white">
              <X className="h-5 w-5" />
            </Button>
          </div>

          <nav className="flex-1">
            <ul className="space-y-2">
              {navItems.map((item, index) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-emerald-600/20 transition-all duration-300 group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <item.icon className="h-5 w-5 text-emerald-400 group-hover:text-emerald-300" />
                    <span className="font-medium">{item.name}</span>
                    <ChevronRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="border-t border-emerald-500/20 pt-6">
            <div className="flex space-x-4 justify-center">
              <Button variant="outline" size="sm" className="border-emerald-500 text-emerald-300 bg-transparent">
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </Button>
              <Button variant="outline" size="sm" className="border-emerald-500 text-emerald-300 bg-transparent">
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default function Portfolio() {
  const [heroRef, heroInView] = useInView()
  const [aboutRef, aboutInView] = useInView()
  const [educationRef, educationInView] = useInView()
  const [experienceRef, experienceInView] = useInView()
  const [projectsRef, projectsInView] = useInView()
  const [testimonialRef, testimonialInView] = useInView()
  const [skillsRef, skillsInView] = useInView()
  const [funFactsRef, funFactsInView] = useInView()
  const [contactRef, contactInView] = useInView()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 relative overflow-hidden">
      <FloatingParticles />
      <NeuralNetwork />

      {/* Enhanced Responsive Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-md border-b border-emerald-500/20 z-50">
        <div className="container mx-auto px-4 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Brain className="h-6 w-6 sm:h-8 sm:w-8 text-emerald-400 animate-pulse" />
                <div className="absolute inset-0 bg-emerald-400/20 rounded-full animate-ping" />
              </div>
              <span className="text-lg sm:text-xl font-bold text-white">Paras Garg</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6 lg:space-x-8">
              {["About", "Experience", "Projects", "Skills", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-emerald-400 transition-all duration-300 hover:scale-110 relative group text-sm lg:text-base"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Mobile Navigation */}
            <MobileNav />
          </div>
        </div>
      </nav>

      {/* Enhanced Responsive Hero Section */}
      <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 relative">
        <div ref={heroRef} className="container mx-auto text-center">
          <div
            className={`mb-8 transition-all duration-1000 ${heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-6 sm:mb-8 rounded-full bg-gradient-to-r from-emerald-400 via-teal-500 to-green-400 flex items-center justify-center relative group">
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 via-teal-500 to-green-400 animate-spin opacity-75"
                style={{ animationDuration: "3s" }}
              />
              <div className="relative z-10 w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-slate-900 flex items-center justify-center">
                <img
                  src="/0T2A6155.jpg"
                  alt="Paras Garg"
                  className="w-20 h-20 sm:w-28 sm:h-28 rounded-full object-cover"
                />
              </div>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 sm:mb-6 bg-gradient-to-r from-emerald-400 via-teal-400 to-green-400 bg-clip-text text-transparent">
              Paras Garg
            </h1>

            <div className="text-lg sm:text-2xl md:text-3xl text-emerald-300 mb-6 sm:mb-8 h-8 sm:h-12">
              <TypewriterText text="Intelligent Design: Where AI Meets Human Experience" delay={80} />
            </div>

            <p className="text-base sm:text-lg text-gray-300 max-w-2xl lg:max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4">
              Crafting <span className="text-emerald-400 font-semibold">human-centered AI solutions</span> that learn,
              adapt, and evolve. Specializing in <span className="text-teal-400 font-semibold">explainable AI</span> and
              <span className="text-green-400 font-semibold"> edge intelligence</span> for real-world impact.
            </p>

            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-4">
              {[
                { icon: Brain, text: "Human-Centered AI", color: "emerald" },
                { icon: Eye, text: "Explainable AI", color: "teal" },
                { icon: Cpu, text: "Real-Time ML", color: "emerald" },
                { icon: Globe, text: "Web AI", color: "blue" }, // Added
                { icon: Code, text: "Competitive Programming", color: "pink" }, // Added
              ].map((badge, index) => (
                <Badge
                  key={badge.text}
                  variant="secondary"
                  className={`bg-${badge.color}-600/20 text-${badge.color}-300 border-${badge.color}-500/30 px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm hover:scale-110 transition-all duration-300 animate-bounce`}
                  style={{ animationDelay: `${index * 0.2}s`, animationDuration: "2s" }}
                >
                  <badge.icon className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                  <span className="hidden sm:inline">{badge.text}</span>
                  <span className="sm:hidden">{badge.text.split(" ")[0]}</span>
                </Badge>
              ))}
            </div>


            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 px-4">
              <Button
                asChild
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25 w-full sm:w-auto"
              >
                <Link href="#contact">
                  <Mail className="h-4 w-4 mr-2" />
                  Get In Touch
                </Link>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-emerald-500 text-emerald-300 hover:bg-emerald-600/20 bg-transparent transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              >
                <Link href="https://github.com/ParasGarg2k" target="_blank">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className="py-12 sm:py-16 px-4 bg-slate-800/20 relative">
        <div ref={funFactsRef} className="container mx-auto">
          <div
            className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${funFactsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Fun Facts About Me
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {[
              { icon: Coffee, number: "500+", label: "Cups of Coffee", color: "yellow" },
              { icon: Music, number: "24/7", label: "Coding Playlist", color: "teal" },
              { icon: Camera, number: "3", label: "Side Projects", color: "emerald" },
              { icon: Gamepad2, number: "∞", label: "Problem Solving", color: "green" },
            ].map((fact, index) => (
              <Card
                key={fact.label}
                className={`bg-slate-800/50 border-${fact.color}-500/20 hover:border-${fact.color}-400/40 transition-all duration-500 transform hover:scale-105 text-center group ${funFactsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-4 sm:p-6">
                  <div
                    className={`p-3 rounded-full bg-gradient-to-r from-${fact.color}-500 to-${fact.color}-600 mx-auto mb-3 w-fit group-hover:scale-110 transition-transform`}
                  >
                    <fact.icon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-white mb-1">{fact.number}</div>
                  <div className="text-xs sm:text-sm text-gray-400">{fact.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      <section id="about" className="py-12 sm:py-20 px-4 relative">
        <div ref={aboutRef} className="container mx-auto">
          <div
            className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${aboutInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Intelligent Design Philosophy
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto rounded-full" />
          </div>

          {/* Main About Content - Responsive */}
          <div className="max-w-6xl mx-auto mb-12 sm:mb-16">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              {/* Left Side - Personal Story */}
              <div
                className={`space-y-4 sm:space-y-6 transition-all duration-1000 ${aboutInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
              >
                <div className="relative">
                  <div className="absolute -left-2 sm:-left-4 top-0 w-0.5 sm:w-1 h-full bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full" />
                  <div className="pl-6 sm:pl-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 flex items-center">
                      <Brain className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-400 mr-2 sm:mr-3" />
                      My Academic Journey
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                      I create{" "}
                      <span className="text-emerald-400 font-semibold">technology that empowers people</span>—from{" "}
                      <span className="text-teal-400 font-semibold">explainable AI systems</span> to{" "}
                      <span className="text-blue-400 font-semibold">scalable web platforms</span> and{" "}
                      <span className="text-pink-400 font-semibold">algorithmic problem-solving</span>. I combine research,
                      engineering, and logic to build solutions that are{" "}
                      <span className="text-green-400 font-semibold">transparent, efficient, and human-centered</span>.
                    </p>

                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      Previously led pioneering research at <span className="text-emerald-400 font-semibold">IIT Mandi</span>{" "}
                      in
                      <span className="text-teal-400 font-semibold"> autonomous navigation</span> and
                      <span className="text-green-400 font-semibold"> spatiotemporal recognition</span>, focusing on
                      developing AI that adapted to human behavior patterns and environmental contexts.

                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side - Stats & Highlights - Responsive */}
              <div
                className={`transition-all duration-1000 ${aboutInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
                style={{ transitionDelay: "0.3s" }}
              >
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {[
                    { number: "9.12", label: "CGPA", icon: GraduationCap, color: "emerald" },
                    { number: "2057", label: "LeetCode Rating", icon: Target, color: "teal" },
                    { number: "98.11%", label: "Best Model Accuracy", icon: Brain, color: "green" },
                    { number: "4+", label: "Research Projects", icon: Sparkles, color: "emerald" },
                  ].map((stat, index) => (
                    <Card
                      key={stat.label}
                      className={`bg-slate-800/50 border-${stat.color}-500/20 hover:border-${stat.color}-400/40 transition-all duration-500 transform hover:scale-105 text-center group`}
                      style={{ transitionDelay: `${0.4 + index * 0.1}s` }}
                    >
                      <CardContent className="p-3 sm:p-4">
                        <div
                          className={`p-2 sm:p-3 rounded-full bg-gradient-to-r from-${stat.color}-500 to-${stat.color}-600 mx-auto mb-2 sm:mb-3 w-fit group-hover:scale-110 transition-transform`}
                        >
                          <stat.icon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                        </div>
                        <div className="text-lg sm:text-2xl font-bold text-white mb-1">{stat.number}</div>
                        <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Expertise Areas - Responsive */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Brain,
                title: "Competitive Programming & Algorithm Design",
                description:
                  "Solving complex algorithmic challenges under time constraints. Specialized in data structures, number theory, and problem-solving strategies across platforms like Codeforces and LeetCode.",
                technologies: ["C++", "DP", "Graphs", "Number Theory", "Codeforces", "LeetCode"],
                gradient: "from-emerald-500 to-teal-500",
              },


              {
                icon: Target,
                title: "Intelligent Computer Vision",
                description:
                  "Creating vision systems that don't just see, but understand context and meaning. Real-time processing with 99%+ accuracy for human-centric applications.",
                technologies: ["Real-time CV", "Edge AI", "Contextual Understanding", "Privacy-First"],
                gradient: "from-teal-500 to-green-500",
              },
              {
                icon: Code,
                title: "Intelligent Web Applications",
                description:
                  "Building adaptive web platforms that learn from user behavior and provide personalized experiences through embedded AI.",
                technologies: [
                  "Adaptive UX/UI",
                  "Predictive Analytics",
                  "Real-time Personalization",
                  "Smart Recommendations",
                ],
                gradient: "from-teal-500 to-green-500",
              },
            ].map((area, index) => (
              <Card
                key={area.title}
                className={`bg-slate-800/50 border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20 group ${aboutInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                style={{ transitionDelay: `${0.6 + index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div
                      className={`p-3 sm:p-4 rounded-full bg-gradient-to-r ${area.gradient} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <area.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-emerald-300 text-lg sm:text-xl group-hover:text-emerald-200 transition-colors">
                    {area.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed mb-4 text-sm sm:text-base">{area.description}</p>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {area.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-emerald-600/20 text-emerald-300 hover:bg-emerald-600/30 transition-colors text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 px-4 bg-slate-800/30 relative">
        <div ref={educationRef} className="container mx-auto">
          <div
            className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${educationInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Academic Intelligence
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto rounded-full" />
            {/* <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
              Building foundational knowledge in AI/ML through rigorous academic training and research-driven learning
            </p> */}
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Mobile-First Timeline */}
            <div className="space-y-8 sm:space-y-12">
              {[
                {
                  degree: "B.Tech in Computer Science & Engineering",
                  period: "2022 – Present",
                  institution: "Dr. B. R. Ambedkar National Institute of Technology",
                  location: "Jalandhar, India",
                  grade: "9.12",
                  gradeType: "CGPA",
                  maxGrade: "10",
                  aiHighlights: [
                    "Specialized in Deep Learning & Neural Networks",
                    "Research in Computer Vision & Robotics",
                  ],
                  webHighlights: [
                    "Full-Stack Web Development with React, Next.js & Node.js",
                    "Built Scalable Web Apps with REST APIs & MongoDB Integration",
                  ],
                  cpHighlights: [
                    "Solved 1000+ problems across Codeforces, LeetCode, CodeChef & GFG.",
                    "Specialized in Algorithms, Data Structures & Problem-Solving Strategies",
                  ],
                  courses: [
                    "Data Structures & Algorithms",
                    "Database Management Systems",
                    "Machine Learning",
                    "Operating Systems",
                    "Computer Networks",
                    "Computer Programming",
                  ],
                  color: "emerald",
                  icon: Brain,
                },
                {
                  degree: "Senior Secondary (PCM + CS)",
                  period: "2020 – 2022",
                  institution: "Government Senior Secondary Smart School",
                  location: "Patiala, India",
                  grade: "97.2",
                  gradeType: "Percentage",
                  maxGrade: "100",
                  // No AI/web/cp highlights here
                  courses: ["Mathematics", "Physics", "Computer Science", "Statistics", "Chemistry"],
                  color: "teal",
                  icon: GraduationCap,
                },
              ].map((edu, index) => (
                <div
                  key={edu.degree}
                  className={`transition-all duration-1000 ${educationInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                  style={{ transitionDelay: `${index * 0.3}s` }}
                >
                  <Card
                    className={`bg-slate-800/50 border-${edu.color}-500/20 hover:border-${edu.color}-400/40 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-${edu.color}-500/20`}
                  >
                    <CardHeader className="pb-4">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                        <div className="flex items-start space-x-4">
                          <div
                            className={`p-3 sm:p-4 rounded-full bg-gradient-to-r from-${edu.color}-500 to-${edu.color}-600 flex-shrink-0`}
                          >
                            <edu.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <CardTitle className={`text-${edu.color}-300 text-lg sm:text-xl lg:text-2xl mb-2`}>
                              {edu.degree}
                            </CardTitle>
                            <p className="text-white font-semibold text-base sm:text-lg mb-1">{edu.institution}</p>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-400 text-sm">
                              <span className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                {edu.period}
                              </span>
                              <span className="hidden sm:inline">•</span>
                              <span className="flex items-center">
                                <MapPin className="h-4 w-4 mr-1" />
                                {edu.location}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="text-center lg:text-right flex-shrink-0">
                          <div className={`text-3xl sm:text-4xl font-bold text-${edu.color}-400 mb-1`}>{edu.grade}</div>
                          <div className="text-xs sm:text-sm text-gray-400">
                            {edu.gradeType}/{edu.maxGrade}
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      {/* AI/ML Highlights only for college */}
                      {edu.aiHighlights && (
                        <div>
                          <h4 className="text-emerald-300 font-semibold mb-3 flex items-center text-base sm:text-lg">
                            <Brain className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                            AI/ML Focus Areas
                          </h4>
                          <div className="grid sm:grid-cols-2 gap-2">
                            {edu.aiHighlights.map((highlight, hIndex) => (
                              <div key={hIndex} className="flex items-start space-x-2">
                                <Sparkles className="h-3 w-3 text-emerald-400 mt-1 flex-shrink-0" />
                                <span className="text-gray-300 text-sm leading-relaxed">{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Web Highlights only for college */}
                      {edu.webHighlights && (
                        <div>
                          <h4 className="text-blue-300 font-semibold mb-3 flex items-center text-base sm:text-lg">
                            <Globe className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                            Web Development Highlights
                          </h4>
                          <div className="grid sm:grid-cols-2 gap-2">
                            {edu.webHighlights.map((highlight, wIndex) => (
                              <div key={wIndex} className="flex items-start space-x-2">
                                <Sparkles className="h-3 w-3 text-blue-400 mt-1 flex-shrink-0" />
                                <span className="text-gray-300 text-sm leading-relaxed">{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* CP Highlights only for college */}
                      {edu.cpHighlights && (
                        <div>
                          <h4 className="text-pink-300 font-semibold mb-3 flex items-center text-base sm:text-lg">
                            <Code2 className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                            Competitive Programming Highlights
                          </h4>
                          <div className="grid sm:grid-cols-2 gap-2">
                            {edu.cpHighlights.map((highlight, cIndex) => (
                              <div key={cIndex} className="flex items-start space-x-2">
                                <Sparkles className="h-3 w-3 text-pink-400 mt-1 flex-shrink-0" />
                                <span className="text-gray-300 text-sm leading-relaxed">{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Core Curriculum */}
                      <div>
                        <h4 className="text-teal-300 font-semibold mb-3 flex items-center text-base sm:text-lg">
                          <Code className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                          Core Curriculum
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.courses.map((course) => (
                            <Badge
                              key={course}
                              variant="secondary"
                              className={`bg-${edu.color}-600/20 text-${edu.color}-300 text-xs sm:text-sm hover:bg-${edu.color}-600/30 transition-colors`}
                            >
                              {course}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="py-12 sm:py-20 px-4 relative">
        <div ref={experienceRef} className="container mx-auto">
          <div
            className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${experienceInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent">
              Professional Journey
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-teal-400 to-green-400 mx-auto rounded-full" />
          </div>

          <div className="max-w-5xl lg:max-w-6xl mx-auto">
            <div className="space-y-8 sm:space-y-12">
              {[
                {
                  title: "Research Intern",
                  period: "June 2025 – July 2025",
                  company: "Indian Institute of Technology, Mandi",
                  type: "Research",
                  status: "Completed",
                  description:
                    "Lead cutting-edge research in AI and robotics, focusing on autonomous navigation and computer vision applications.",
                  projects: [
                    {
                      name: "Robot Navigation Framework",
                      description: "Architected robot navigation using A*, RRT and Dynamic Window Approach with depth maps for clinical environments.",
                      technologies: ["Computer Vision", "Python", "ROS", "OpenAI Gym"],
                      impact: "Improved navigation accuracy by 5%",
                    },
                    {
                      name: "Spatiotemporal Action Recognition",
                      description:
                        "Trained and optimized MS-TCN, MS-TCN++, ASFormer, and FACT models with gated fusion and dual-dilation for improved accuracy.",
                      technologies: ["Transformers", "PyTorch", "Computer Vision"],
                      impact: "Achieved 97% classification accuracy",
                    },
                  ],
                  skills: ["Natural Language Processing", "Computer Vision", "PyTorch", "Research Methodology"],
                  icon: Brain,
                  gradient: "from-emerald-500 to-teal-500",
                },
                {
                  title: "Website Developer Intern",
                  period: "Aug 2024 – Nov 2024",
                  company: "Valoir Digital Solution",
                  type: "Development",
                  status: "Completed",
                  description:
                    "Developed responsive web applications with focus on user experience and modern technologies.",
                  projects: [
                    {
                      name: "E-commerce Platform",
                      description:
                        "Built responsive e-commerce interface with advanced filtering and search capabilities",
                      technologies: ["React.js", "Node.js", "MongoDB", "Stripe"],
                      impact: "Increased user engagement by 40%",
                    },
                    {
                      name: "Real-time Chat System",
                      description: "Implemented secure authentication and real-time messaging functionality",
                      technologies: ["Socket.io", "JWT", "Express.js", "Redis"],
                      impact: "Handled 1000+ concurrent users",
                    },
                  ],
                  skills: ["Full-Stack Development", "React.js", "Node.js", "Database Design"],
                  icon: Code,
                  gradient: "from-teal-500 to-green-500",
                },
              ].map((exp, index) => (
                <div
                  key={exp.title}
                  className={`transition-all duration-1000 ${experienceInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                  style={{ transitionDelay: `${index * 0.3}s` }}
                >
                  <Card className="bg-slate-800/50 border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-emerald-500/20 overflow-hidden">
                    <CardHeader className="pb-4">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                        <div className="flex items-center mb-4 sm:mb-0">
                          <div className={`p-3 sm:p-4 rounded-full bg-gradient-to-r ${exp.gradient} mr-4 sm:mr-6`}>
                            <exp.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                          </div>
                          <div>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                              <CardTitle className="text-emerald-300 text-lg sm:text-2xl">{exp.title}</CardTitle>
                              <Badge
                                variant="secondary"
                                className={`${exp.status === "Current" ? "bg-green-600/20 text-green-300" : "bg-teal-600/20 text-teal-300"} text-xs w-fit`}
                              >
                                {exp.status}
                              </Badge>
                            </div>
                            <p className="text-white font-semibold text-base sm:text-lg">{exp.company}</p>
                            <CardDescription className="text-gray-400 flex items-center mt-1 text-sm">
                              <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                              {exp.period}
                            </CardDescription>
                          </div>
                        </div>
                        <div className="text-left sm:text-right">
                          <Badge variant="outline" className="border-emerald-500/30 text-emerald-300 text-xs">
                            {exp.type}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4 sm:space-y-6">
                      <p className="text-gray-300 leading-relaxed text-sm sm:text-lg">{exp.description}</p>

                      <div>
                        <h4 className="text-emerald-300 font-semibold mb-3 sm:mb-4 flex items-center text-base sm:text-lg">
                          <Target className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                          Key Projects
                        </h4>
                        <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                          {exp.projects.map((project, pIndex) => (
                            <Card
                              key={project.name}
                              className="bg-slate-700/50 border-emerald-500/10 hover:border-emerald-400/30 transition-all duration-300"
                            >
                              <CardContent className="p-3 sm:p-4">
                                <h5 className="text-white font-semibold mb-2 text-sm sm:text-base">{project.name}</h5>
                                <p className="text-gray-300 text-xs sm:text-sm mb-3 leading-relaxed">
                                  {project.description}
                                </p>
                                <div className="flex flex-wrap gap-1 mb-3">
                                  {project.technologies.map((tech) => (
                                    <Badge
                                      key={tech}
                                      variant="secondary"
                                      className="bg-emerald-600/20 text-emerald-300 text-xs"
                                    >
                                      {tech}
                                    </Badge>
                                  ))}
                                </div>
                                <div className="flex items-center text-green-400 text-xs sm:text-sm font-medium">
                                  <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                                  {project.impact}
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-teal-300 font-semibold mb-3 flex items-center text-sm sm:text-base">
                          <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                          Skills Developed
                        </h4>
                        <div className="flex flex-wrap gap-1 sm:gap-2">
                          {exp.skills.map((skill) => (
                            <Badge
                              key={skill}
                              variant="secondary"
                              className="bg-teal-600/20 text-teal-300 hover:bg-teal-600/30 transition-colors text-xs"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-12 sm:py-20 px-4 bg-slate-800/30 relative">
  <div ref={testimonialRef} className="container mx-auto">
    <div
      className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
        testimonialInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
        Competitive Profiles
      </h2>
      <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-emerald-400 to-green-400 mx-auto rounded-full" />
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
      {[
        {
          name: "LeetCode",
          badge: "Knight",
          achievement: "Consistent top 10% problem solver with strong algorithm skills.",
          ranking: "Global Rank: 1200",
          image: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
        },
        {
          name: "Codeforces",
          badge: "Pupil",
          achievement: "Active participant with solid problem solving and rating growth.",
          ranking: "Rating: 1350",
          image: "https://i.pinimg.com/736x/b4/6e/54/b46e546a3ee4d410f961e81d4a8cae0f.jpg",
        },
        {
          name: "CodeChef",
          badge: "3*",
          achievement: "Achieved 3-star rating with steady performance in contests.",
          ranking: "Rating: 1650",
          image: "https://static.startuptalky.com/2021/04/codechef-logo-startuptalky.jpg",
        },
      ].map((profile, index) => (
        <Card
          key={profile.name}
          className={`bg-slate-800/50 border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20 group ${
            testimonialInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: `${index * 0.2}s` }}
        >
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <img
                src={profile.image || "/placeholder.svg"}
                alt={`${profile.name} logo`}
                className="w-12 h-12 rounded-full mr-4 object-contain bg-white p-1"
              />
              <div>
                <div className="text-white font-semibold">
                  {profile.name} <span className="text-emerald-400 font-bold">({profile.badge})</span>
                </div>
                <div className="text-gray-400 text-sm">{profile.ranking}</div>
              </div>
            </div>
            <div className="text-gray-300 leading-relaxed">{profile.achievement}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>



      <section id="projects" className="py-12 sm:py-20 px-4 bg-slate-800/30 relative">
        <div ref={projectsRef} className="container mx-auto">
          <div
            className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${projectsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
              Intelligent Solutions Portfolio
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-emerald-400 to-green-400 mx-auto rounded-full" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {[
              {
                title: "Urban Sound Classification System",
                category: "Human-Centered AI",
                description:
                  "AI system that understands urban soundscapes for smart city applications. Features explainable predictions and real-time edge processing for accessibility.",
                accuracy: "Acc: 98.11%",
                impact: "Improved urban accessibility for hearing-impaired users",
                technologies: ["Explainable AI", "Edge Computing", "Real-time Processing", "Accessibility AI"],
                icon: Brain,
                gradient: "from-emerald-500 to-teal-500",
                github: "https://github.com/ParasGarg2k/Urban-Sound-Classification-Web",
                deployment: "https://urban-sound-classification-web.onrender.com/",
              },

              {
                title: "SmartNav",
                category: "AI-powered Shopping Assistant",
                description:
                  "AI shopping assistant featuring real-time product recognition, multilingual voice interaction, personalized shopping lists, and intelligent store navigation.",
                accuracy: "Multilingual AI",
                impact: "Enhanced in-store user experience with real-time assistance and language support",
                technologies: ["TypeScript", "ReactJS", "TensorFlow", "NLP", "Web Speech API", "Tailwind CSS"],
                icon: Cpu,
                gradient: "from-green-500 to-emerald-500",
                github: "https://github.com/ParasGarg2k/SmartNav",
                deployment: "https://smart-nav-red.vercel.app/",
              },

              {
                title: "LID-ASFormer",
                category: "Temporal Action Segmentation",
                description:
                  "Enhanced ASFormer architecture integrating Linear-Index Dilated TCNs for improved temporal modeling in video action segmentation, achieving 82% accuracy on GTEA and 80% on Breakfast datasets.",
                accuracy: "Acc: 82%",
                impact: "Improved fine-grained action recognition for video understanding tasks",
                technologies: ["PyTorch", "I3D Features", "CUDA", "Temporal Convolutional Networks"],
                icon: Code,
                gradient: "from-blue-500 to-indigo-500",
                github: "https://github.com/ParasGarg2k/LID-AsFormer",
                deployment: "https://github.com/ParasGarg2k/LID-AsFormer",
              },



              {
                title: "Waste Samaritin",
                category: "AI-based Waste Management",
                description:
                  "AI-powered waste classification system with interactive segregation tools, personalized waste statistics, RFID-enabled smart collector interface, and voice rating using Whisper.",
                accuracy: "Smart Segregation",
                impact: "Promoted responsible waste disposal and streamlined collector workflows",
                technologies: ["JavaScript", "TypeScript", "Python", "Whisper", "TensorFlow", "FastAPI"],
                icon: Cpu,
                gradient: "from-yellow-500 to-orange-500",
                github: "https://github.com/ParasGarg2k/waste_samaritin",
                deployment: "https://waste-samaritin.vercel.app/",
              },

              {
                title: "Chattr",
                category: "Real-Time Chat Application",
                description:
                  "Feature-rich chat application supporting real-time messaging, user presence, and multimedia sharing with a clean and responsive UI.",
                accuracy: "Quick Connect",
                impact: "Improved user connectivity and communication",
                technologies: ["JavaScript", "NodeJS", "Socket.IO", "ReactJS", "CSS"],
                icon: Cpu,
                gradient: "from-purple-500 to-pink-500",
                github: "https://github.com/ParasGarg2k/Chattr",
                deployment: "https://chattr-theta.vercel.app/",
              },

              {
                title: "Adaptive Sign Language Interface",
                category: "Inclusive AI Design",
                description:
                  "Real-time sign language translation that learns user patterns and adapts to individual signing styles. Privacy-first edge processing.",
                accuracy: "99.3%",
                impact: "Enhanced communication accessibility",
                technologies: ["Adaptive Learning", "Privacy-First AI", "Edge Intelligence", "Inclusive Design"],
                icon: Eye,
                gradient: "from-teal-500 to-green-500",
                github: "https://github.com/ParasGarg2k/SignLanguageToText",
                deployment: "https://github.com/ParasGarg2k/SignLanguageToText",
              },
              {
                title: "RentACar",
                category: "Predictive User Experience",
                description:
                  "AI-powered platform that predicts user preferences, optimizes pricing dynamically, and provides personalized recommendations based on behavior patterns.",
                accuracy: "Smart UX",
                impact: "40% increase in user satisfaction",
                technologies: [
                  "Predictive Analytics",
                  "Dynamic Pricing AI",
                  "Behavioral Analysis",
                  "Smart Recommendations",
                ],
                icon: Code,
                gradient: "from-green-500 to-emerald-500",
                github: "https://github.com/ParasGarg2k/RentACar",
                deployment: "https://github.com/ParasGarg2k/RentACar",
              },

              {
                title: "A-R-D Nav",
                category: "Path Planning Algorithms Visualization",
                description:
                  "Modular 2D grid-based navigation system demonstrating A*, RRT, and DWA algorithms with support for static and dynamic obstacles and real-time optimal path visualization.",
                accuracy: "Path Planning",
                impact: "Educational tool for robotics and autonomous navigation",
                technologies: ["JavaScript", "HTML", "CSS"],
                icon: Code,
                gradient: "from-teal-500 to-green-500",
                github: "https://github.com/ParasGarg2k/A-R-D-Nav",
                deployment: "https://github.com/ParasGarg2k/A-R-D-Nav/blob/main/files/video.mkv",
              },

              {
                title: "GameZone",
                category: "Web-based Gaming Platform",
                description:
                  "Platform hosting eight web games built with HTML, CSS, and JavaScript featuring an intuitive UI for easy navigation and engaging user experience across browsers.",
                accuracy: "Web Arcade",
                impact: "Entertainment and skill development through casual gaming",
                technologies: ["HTML", "CSS", "JavaScript"],
                icon: Cpu,
                gradient: "from-pink-500 to-red-500",
                github: "https://github.com/ParasGarg2k/GameZone",
                deployment: "https://parasgarg2k.github.io/GameZone/",
              },


            ].map((project, index) => (
              <Card
                key={project.title}
                className={`bg-slate-800/50 border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20 group ${projectsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`p-3 rounded-full bg-gradient-to-r ${project.gradient} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <project.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-xl sm:text-2xl font-bold text-green-400">{project.accuracy}</div>
                      <div className="text-xs sm:text-sm text-gray-400">Highlight</div>
                    </div>
                  </div>
                  <CardTitle className="text-emerald-300 text-lg sm:text-xl group-hover:text-emerald-200 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400 text-sm">{project.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                    {project.description}
                  </p>

                  <div className="flex space-x-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:text-emerald-300 transition-colors"
                        aria-label="GitHub Link"
                      >
                        {/* GitHub SVG Icon */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          className="h-6 w-6"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.424 2.865 8.18 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.158-1.11-1.467-1.11-1.467-.908-.62.069-.607.069-.607 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.087 2.91.832.092-.647.35-1.087.636-1.337-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.03-2.688-.103-.253-.446-1.27.098-2.647 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.202 2.395.1 2.648.64.7 1.028 1.595 1.028 2.688 0 3.847-2.338 4.695-4.566 4.942.359.31.678.923.678 1.861 0 1.344-.012 2.427-.012 2.758 0 .268.18.58.688.482A10.02 10.02 0 0022 12.017C22 6.484 17.523 2 12 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    )}
                    {project.deployment && (
                      <a
                        href={project.deployment}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:text-emerald-300 transition-colors"
                        aria-label="Deployment Link"
                      >
                        {/* External Link SVG Icon */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                          className="h-6 w-6"
                        >
                          <path d="M18 13v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>

            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 sm:py-20 px-4 relative">
        <div ref={skillsRef} className="container mx-auto">
          <div
            className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${skillsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Intelligent Technology Stack
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto rounded-full" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {[
              {
                title: "Programming & Development",
                icon: Code,
                gradient: "from-blue-500 to-indigo-500",
                skills: [
                  { name: "C/C++", level: 90 },
                  { name: "Java", level: 75 },
                  { name: "R", level: 75 },
                  { name: "JavaScript", level: 80 },
                  { name: "TypeScript", level: 75 },
                  { name: "HTML & CSS", level: 88 },
                  { name: "SQL", level: 85 },
                ],
              },
              {
                title: "AI & Deep Learning",
                icon: Brain,
                gradient: "from-purple-500 to-pink-500",
                skills: [
                  { name: "CNNs", level: 90 },
                  { name: "RNNs & LSTMs", level: 88 },
                  { name: "Computer Vision", level: 85 },

                  { name: "Transformers", level: 90 },
                  { name: "Python Libraries", level: 88 },
                  { name: "NLP", level: 75 },
                ],
              },
              {
                title: "Full-Stack & DevOps",
                icon: Cpu,
                gradient: "from-green-500 to-emerald-500",
                skills: [
                  { name: "ReactJS", level: 80 },
                  { name: "NextJS", level: 75 },
                  { name: "NodeJS & Express", level: 75 },
                  { name: "Mongoose & MongoDB", level: 75 },
                  { name: "TailwindCSS & Bootstrap", level: 77 },
                  // { name: "Bootstrap", level: 87 },
                  { name: "Git & GitHub", level: 90 },
                  { name: "Windows & Linux", level: 85 },
                ],
              },
            ].map((skillSet, index) => (
              <Card
                key={skillSet.title}
                className={`bg-slate-800/50 border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20 group ${skillsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div
                      className={`p-3 rounded-full bg-gradient-to-r ${skillSet.gradient} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <skillSet.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-emerald-300 text-lg sm:text-xl group-hover:text-emerald-200 transition-colors">
                    {skillSet.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {skillSet.skills.map((skill) => (
                      <li key={skill.name} className="flex items-center justify-between">
                        <span className="text-gray-300 text-sm">{skill.name}</span>
                        <Progress value={skill.level} className="w-24 h-2 bg-slate-700 text-emerald-400" />
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-20 px-4 relative">
        <div ref={contactRef} className="container mx-auto">
          <div
            className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${contactInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto rounded-full" />
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {/* Contact Form */}
              <div className="bg-slate-800/50 border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20 p-6 rounded-md">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Send me a message</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-slate-700/50 border-emerald-500/20 text-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-slate-700/50 border-emerald-500/20 text-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      placeholder="Your Email"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full bg-slate-700/50 border-emerald-500/20 text-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      placeholder="Your Message"
                    />
                  </div>
                  <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25 w-full">
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="bg-slate-800/50 border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20 p-6 rounded-md">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-emerald-400 mr-2" />
                    <a href="mailto:parasgarg2k@gmail.com" className="text-gray-300 hover:text-emerald-400">
                      parasgarg2k@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-emerald-400 mr-2" />
                    <a href="tel:+919517474080" className="text-gray-300 hover:text-emerald-400">
                      +91 9041594574
                    </a>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-emerald-400 mr-2" />
                    <span className="text-gray-300">
                      Dr. B. R. Ambedkar National Institute of Technology, Jalandhar, India
                    </span>
                  </div>
                  <div className="flex space-x-4 justify-center mt-4">
                    <a href="https://github.com/ParasGarg2k" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="border-emerald-500 text-emerald-300 bg-transparent">
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </Button>
                    </a>
                    <a href="https://www.linkedin.com/in/paras-garg-2k" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="border-emerald-500 text-emerald-300 bg-transparent">
                        <Linkedin className="h-4 w-4 mr-2" />
                        LinkedIn
                      </Button>
                    </a>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-6 px-4 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Paras Garg. All rights reserved.
      </footer>
    </div>
  )
}
