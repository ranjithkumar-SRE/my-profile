"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import {
  Mail,
  Github,
  Linkedin,
  Server,
  Cloud,
  Database,
  Shield,
  Zap,
  Code,
  Monitor,
  GitBranch,
  Award,
  Users,
  TrendingUp,
  CheckCircle,
  MapPin,
  Phone,
} from "lucide-react"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const devopsTools = [
    { name: "Kubernetes", category: "Orchestration", icon: <Server className="w-5 h-5" />, level: "Expert" },
    { name: "Docker", category: "Containerization", icon: <Server className="w-5 h-5" />, level: "Expert" },
    { name: "AWS", category: "Cloud Platform", icon: <Cloud className="w-5 h-5" />, level: "Advanced" },
    { name: "Terraform", category: "IaC", icon: <Code className="w-5 h-5" />, level: "Expert" },
    { name: "Ansible", category: "Configuration", icon: <Shield className="w-5 h-5" />, level: "Advanced" },
    { name: "Jenkins", category: "CI/CD", icon: <GitBranch className="w-5 h-5" />, level: "Expert" },
    { name: "GitLab CI", category: "CI/CD", icon: <GitBranch className="w-5 h-5" />, level: "Advanced" },
    { name: "Prometheus", category: "Monitoring", icon: <Monitor className="w-5 h-5" />, level: "Expert" },
    { name: "Grafana", category: "Visualization", icon: <Monitor className="w-5 h-5" />, level: "Advanced" },
    { name: "ELK Stack", category: "Logging", icon: <Database className="w-5 h-5" />, level: "Advanced" },
    { name: "Redis", category: "Caching", icon: <Zap className="w-5 h-5" />, level: "Intermediate" },
  ]

  const achievements = [
    { number: "99.9%", label: "System Uptime", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "50+", label: "Projects Delivered", icon: <CheckCircle className="w-6 h-6" /> },
    { number: "6+", label: "Years Experience", icon: <Award className="w-6 h-6" /> },
    { number: "15+", label: "Team Members Led", icon: <Users className="w-6 h-6" /> },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200/50 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Ranjith Kumar
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#skills" className="text-gray-700 hover:text-blue-600 transition-colors">Skills</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-teal-600/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
              <div className="mb-6">
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent mb-4">
                  Manikanta
                </h1>
                <h2 className="text-xl md:text-2xl text-gray-600 mb-4 font-medium">DevOps Engineer</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Transforming infrastructure challenges into scalable solutions. 4+ years of expertise in building
                  resilient, high-performance systems that power modern applications.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="mailto:kuppalamaniofficial@gmail.com">
                  <Button
                    variant="outline"
                    size="lg"
                    className="px-8 py-3 rounded-full border-2 border-gray-300 hover:border-blue-500 hover:text-blue-600 bg-transparent"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Let's Connect
                  </Button>
                </a>
              </div>

              <div className="flex items-center space-x-6 text-gray-600">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Bangalore, Karnataka, India</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                  <span>Ready for Challenge</span>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl blur-2xl opacity-20 animate-pulse" />
                <div className="relative bg-white rounded-3xl p-2 shadow-2xl">
                  <Image
                    src="https://aquera.slack.com/files/U06LWAL70PP/F0985CDLNGP/img_0204.jpg"
                    alt="Manikanta - DevOps engineer"
                    width={500}
                    height={600}
                    className="rounded-2xl object-cover w-full h-[600px]"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements, About, Skills, Contact sections */}
      {/* ...Keep your existing sections from above here. No changes needed in that content... */}

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Manikanta
              </h3>
              <p className="text-gray-400 mt-1">DevOps Engineer</p>
            </div>
            <div className="flex space-x-6">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <a href="https://github.com/kuppalamani" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <a href="https://www.linkedin.com/in/manikanta-kuppala-118174179/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <a href="mailto:kuppalamaniofficial@gmail.com">
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Manikanta Kuppala. Crafted with precision and passion for reliable systems.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
