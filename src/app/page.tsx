"use client";
import { ChatWindow } from "@/components/ChatWindow";
import { ProjectNavigationMenu } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, SheetHeader, SheetTitle, Sheet } from "@/components/ui/sheet";
import { ArrowRight, Clock, Heart, MessageCircle, Shield, Users } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const FloatingElement = ({ children, delay = 0 }: { children: React.ReactNode, delay: number }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      {children}
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, description, delay }: {
  icon: React.ComponentType<{ className?: string }>,
  title: string,
  description: string,
  delay: number
}) => (
  <FloatingElement delay={delay}>
    <div className="border rounded-lg p-6 hover:shadow-md transition-all duration-300">
      <Icon className="h-8 w-8 text-primary mb-4" />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  </FloatingElement>
);

export default function Home() {
  return (
    <>
      <ProjectNavigationMenu />
      <div className="hero-container w-full" style={{ height: "calc(100vh - 70px)", overflow: "scroll" }}>
        {/* Main Hero Section */}
        <div className="container mx-auto px-4 py-24 ">
          <div className="max-w-4xl mx-auto text-center">
            <FloatingElement delay={0}>
              <div className="inline-flex items-center px-3 py-1 border rounded-full text-sm text-muted-foreground mb-8 font-bold">
                <Heart className="h-3 w-3 mr-2 fill-pink-400" />
                AI-Powered Mental Wellness Support
              </div>
            </FloatingElement>

            <FloatingElement delay={200}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                Your Safe Space for
                <br />
                Mental Wellness
              </h1>
            </FloatingElement>

            <FloatingElement delay={400}>
              <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                Connect with our compassionate AI companion for confidential support,
                guidance, and a listening ear whenever you need it.
              </p>
            </FloatingElement>

            <FloatingElement delay={600}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Link href={"/about-us"}>
                  <Button size="lg" className="text-lg px-8 py-6">
                    <Users className="" />
                    About Us
                  </Button>
                </Link>
                <Link href={"/project-report"}>
                  <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                    Learn More
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </FloatingElement>

            {/* Trust indicators */}
            <FloatingElement delay={800}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 fill-blue-400" />
                  <span>Completely Confidential</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>Available 24/7</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 fill-green-400" />
                  <span>Trusted by Thousands</span>
                </div>
              </div>
            </FloatingElement>
          </div>
        </div>


        {/* Features Section */}
        <div className="bg-muted/30 py-24">
          <div className="container mx-auto px-4">
            <FloatingElement delay={0}>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Why Choose Our Platform?
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Experience compassionate AI support designed specifically for your mental wellness journey
                </p>
              </div>
            </FloatingElement>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <FeatureCard
                icon={Heart}
                title="Compassionate Support"
                description="Our AI provides empathetic, non-judgmental support tailored to your unique needs and feelings."
                delay={200}
              />
              <FeatureCard
                icon={Shield}
                title="Complete Privacy"
                description="Your conversations are completely confidential and secure. Share freely in a protected environment."
                delay={400}
              />
              <FeatureCard
                icon={MessageCircle}
                title="Always Available"
                description="Get support whenever you need it, day or night. Your mental wellness companion is always here."
                delay={600}
              />
            </div>
          </div>
        </div>

        {/* CTA Section */}

        <div className="py-24">
          <div className="container mx-auto px-4">
            <FloatingElement delay={0}>
              <div className="max-w-2xl mx-auto text-center border rounded-lg p-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Start Your Journey?
                </h2>
                <p className="text-muted-foreground mb-8">
                  Take the first step towards better mental wellness. Your AI companion is ready to listen and support you.
                </p>
                <Sheet>
                  <SheetTrigger asChild>
                    <Button size="lg" className="text-lg px-12 py-6">
                      Begin Your Chat
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-[400px] sm:w-[540px]">
                    <SheetHeader>
                      <SheetTitle className="flex items-center gap-2">
                        <Heart className="h-5 w-5" />
                        Chat with AI Companion
                      </SheetTitle>
                    </SheetHeader>
                    <ChatWindow />
                  </SheetContent>
                </Sheet>
              </div>
            </FloatingElement>
          </div>
        </div>
      </div>
    </>
  );
}
