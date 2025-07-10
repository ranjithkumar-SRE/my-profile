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
  Youtube,
} from "lucide-react"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

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
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
                About
              </a>
              <a href="#skills" className="text-gray-700 hover:text-blue-600 transition-colors">
                Skills
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-teal-600/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            >
              <div className="mb-6">
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent mb-4">
                  Ranjith Kumar
                </h1>
                <h2 className="text-xl md:text-2xl text-gray-600 mb-4 font-medium">Senior Site Reliability Engineer</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Transforming infrastructure challenges into scalable solutions. 6+ years of expertise in building
                  resilient, high-performance systems that power modern applications.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="mailto:bcranjithkumar9@gmail.com">
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

            <div
              className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl blur-2xl opacity-20 animate-pulse" />
                <div className="relative bg-white rounded-3xl p-2 shadow-2xl">
                  <Image
                    src="/images/ranjith-profile.jpg"
                    alt="Ranjith Kumar - Senior Site Reliability Engineer"
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

      {/* Achievements Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white">
                  {achievement.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{achievement.number}</div>
                <div className="text-gray-600 font-medium">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Card className="backdrop-blur-sm bg-white/70 border-0 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  As a passionate Site Reliability Engineer with over 6 years of hands-on experience, I've dedicated my
                  career to building and maintaining infrastructure that doesn't just work—it excels.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  My expertise spans across cloud platforms, containerization, infrastructure automation, and monitoring
                  solutions. I believe in proactive problem-solving and building systems that scale gracefully with
                  business growth.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  When I'm not optimizing infrastructure, you'll find me exploring new technologies, contributing to
                  open-source projects, and mentoring junior engineers.
                </p>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="backdrop-blur-sm bg-gradient-to-r from-blue-50 to-blue-100 border-0">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Shield className="w-8 h-8 text-blue-600 mr-3" />
                    <h4 className="text-xl font-bold text-gray-900">Security First</h4>
                  </div>
                  <p className="text-gray-700">
                    Implementing security best practices across all infrastructure layers.
                  </p>
                </CardContent>
              </Card>

              <Card className="backdrop-blur-sm bg-gradient-to-r from-purple-50 to-purple-100 border-0">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <TrendingUp className="w-8 h-8 text-purple-600 mr-3" />
                    <h4 className="text-xl font-bold text-gray-900">Performance Optimization</h4>
                  </div>
                  <p className="text-gray-700">
                    Continuously improving system performance and reducing operational costs.
                  </p>
                </CardContent>
              </Card>

              <Card className="backdrop-blur-sm bg-gradient-to-r from-teal-50 to-teal-100 border-0">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Users className="w-8 h-8 text-teal-600 mr-3" />
                    <h4 className="text-xl font-bold text-gray-900">Team Leadership</h4>
                  </div>
                  <p className="text-gray-700">
                    Leading cross-functional teams to deliver reliable, scalable solutions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technical Expertise</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              A comprehensive toolkit of modern DevOps and SRE technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {devopsTools.map((tool, index) => (
              <Card
                key={tool.name}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:-translate-y-1"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {tool.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">{tool.name}</h3>
                  <Badge variant="secondary" className="text-xs mb-2">
                    {tool.category}
                  </Badge>
                  <div className="text-sm text-gray-600 font-medium">{tool.level}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Let's Build Something Amazing</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              Ready to discuss your infrastructure challenges or explore new opportunities? I'd love to hear about your
              next project.
            </p>
          </div>

          <div className="grid grid-cols-1">
            {/* Contact Information */}
            <Card className="backdrop-blur-sm bg-white/80 border-0 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-center group hover:bg-blue-50 p-3 rounded-lg transition-colors">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <a
                        href="mailto:bcranjithkumar9@gmail.com"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        bcranjithkumar9@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center group hover:bg-green-50 p-3 rounded-lg transition-colors">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <a href="tel:+917795523655" className="text-green-600 hover:text-green-800 transition-colors">
                        +91 7795523655
                      </a>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Connect & Explore</h4>
                  <div className="grid grid-cols-1 gap-4">
                    <a
                      href="https://linkedin.com/in/ranjith-kumar-devops-engineer"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center group hover:bg-blue-50 p-3 rounded-lg transition-colors"
                    >
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center text-white mr-3 group-hover:scale-110 transition-transform">
                        <Linkedin className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Professional Network</p>
                        <p className="text-sm text-gray-600">Connect on LinkedIn</p>
                      </div>
                    </a>

                    <a
                      href="https://github.com/ranjithkumar-SRE"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center group hover:bg-gray-50 p-3 rounded-lg transition-colors"
                    >
                      <div className="w-10 h-10 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg flex items-center justify-center text-white mr-3 group-hover:scale-110 transition-transform">
                        <Github className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Code & Projects</p>
                        <p className="text-sm text-gray-600">Explore my repositories</p>
                      </div>
                    </a>

                    <a
                      href="https://youtube.com/@TheOldMonkRider"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center group hover:bg-red-50 p-3 rounded-lg transition-colors"
                    >
                      <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center text-white mr-3 group-hover:scale-110 transition-transform">
                        <Youtube className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Rides & Adventures</p>
                        <p className="text-sm text-gray-600">Watch my journey & places</p>
                      </div>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Ranjith Kumar
              </h3>
              <p className="text-gray-400 mt-1">Senior Site Reliability Engineer</p>
            </div>
            <div className="flex space-x-6">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <a href="https://github.com/ranjithkumar-SRE" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <a
                  href="https://linkedin.com/in/ranjith-kumar-devops-engineer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <a href="mailto:bcranjithkumar9@gmail.com">
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <a href="https://youtube.com/@TheOldMonkRider" target="_blank" rel="noopener noreferrer">
                  <Youtube className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Ranjith Kumar. Crafted with precision and passion for reliable systems.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
