"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Shield,
  FlaskRound as Flask,
  Database,
  Users,
  ChartBar,
  Lock,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Enhanced Security",
    description:
      "Military-grade encryption and blockchain technology ensure your clinical data remains secure and immutable.",
    color: "text-blue-500", // Warna untuk fitur pertama
    bgColor: "bg-blue-500/10", // Warna latar belakang untuk fitur pertama
  },
  {
    icon: Flask,
    title: "Lab Integration",
    description:
      "Seamlessly integrate with existing laboratory systems and workflows for improved efficiency.",
    color: "text-green-500", // Warna untuk fitur kedua
    bgColor: "bg-green-500/10", // Warna latar belakang untuk fitur kedua
  },
  {
    icon: Database,
    title: "Data Management",
    description:
      "Advanced data management capabilities with real-time access and complete audit trails.",
    color: "text-purple-500", // Warna untuk fitur ketiga
    bgColor: "bg-purple-500/10", // Warna latar belakang untuk fitur ketiga
  },
  {
    icon: Users,
    title: "Patient Control",
    description:
      "Empower patients with complete control over their medical data and test results.",
    color: "text-yellow-500", // Warna untuk fitur keempat
    bgColor: "bg-yellow-500/10", // Warna latar belakang untuk fitur keempat
  },
  {
    icon: ChartBar,
    title: "Analytics",
    description:
      "Comprehensive analytics and reporting tools for better decision-making.",
    color: "text-pink-500", // Warna untuk fitur kelima
    bgColor: "bg-pink-500/10", // Warna latar belakang untuk fitur kelima
  },
  {
    icon: Lock,
    title: "Compliance",
    description:
      "Built-in compliance with HIPAA, GDPR, and other healthcare regulations.",
    color: "text-red-500", // Warna untuk fitur keenam
    bgColor: "bg-red-500/10", // Warna latar belakang untuk fitur keenam
  },
];

const steps = [
  {
    title: "Integration Setup",
    description:
      "Quick and seamless integration with your existing laboratory information systems (LIS) and workflows.",
  },
  {
    title: "Data Migration",
    description:
      "Secure migration of your existing data to our blockchain-powered platform with zero downtime.",
  },
  {
    title: "Staff Training",
    description:
      "Comprehensive training for your team to ensure smooth adoption and maximum efficiency.",
  },
  {
    title: "Go Live",
    description:
      "Launch your enhanced laboratory operations with ongoing support from our dedicated team.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen ">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-32 overflow-hidden"
        style={{ backgroundImage: "url('/bg3.jpg')" }}
        id="home"
      >
        {/* Background Decorative Layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-800/10 to-indigo-700/10 opacity-20"></div>
        {/* Optional: Additional decorative shapes or patterns */}
        <div className="absolute inset-0 [mask-image:radial-gradient(circle_at_center,transparent_20%,black_70%)] bg-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-indigo-200/20 rounded-full">
              <span className="text-indigo-200 font-semibold text-xs">
                Transforming Healthcare Data
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-6 text-white">
              Revolutionizing Clinical Labs with Blockchain
            </h1>
            <p className="text-xl text-indigo-200 mb-8 max-w-2xl mx-auto">
              Secure, transparent, and efficient clinical data management
              powered by Web3 technology. Built for the future of healthcare.
            </p>
            <div className="flex gap-4 justify-center">
              <Button
                size="lg"
                className="gap-2 bg-white text-indigo-900 hover:bg-indigo-100 transition-all"
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24" id="features">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Why Choose MediChain Labs?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our platform combines cutting-edge blockchain technology with
              healthcare expertise to deliver a secure, efficient, and compliant
              solution.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <div
                  className={`mb-4 ${feature.bgColor} w-14 h-14 rounded-lg flex items-center justify-center`}
                >
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-primary/5 py-24" id="how-it-works">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our streamlined process ensures seamless integration with your
              existing systems while maintaining the highest standards of
              security and compliance.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1572884267966-02340ebc90ac?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=0"
                alt="Laboratory Analysis"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold transition-all group-hover:scale-110">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-24 bg-cover bg-center bg-no-repeat relative overflow-hidden"
        style={{ backgroundImage: "url('/cta1.jpg')" }}
        id="contact"
      >
        {/* Optional: Add a semi-transparent overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Ready to Transform Your Lab?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Join the future of clinical laboratory management with MediChain
              Labs. Schedule a demo to see how we can help streamline your
              operations.
            </p>
            <Button
              size="lg"
              className="px-8 gap-2 bg-white text-primary hover:bg-white/90 transition-all shadow-lg hover:shadow-xl"
            >
              Schedule a Demo <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
