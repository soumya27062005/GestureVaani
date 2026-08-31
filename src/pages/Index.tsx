import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FeatureCard } from "@/components/FeatureCard";
import { AnimatedHand, GestureIcon } from "@/components/AnimatedHand";
import { MobileMenu } from "@/components/MobileMenu";
import { 
  Hand, 
  Brain, 
  Users, 
  Award, 
  Video, 
  MessageSquare, 
  BookOpen, 
  Target, 
  Heart, 
  Globe, 
  Sparkles,
  Play,
  ChevronRight,
  Star
} from "lucide-react";
import heroImage from "@/assets/hero-learning.jpg";
import logoImage from "@/assets/gesture-vaani-logo.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src={logoImage} alt="GestureVaani Logo" className="h-10 w-auto" />
              <h1 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                GestureVaani
              </h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Features</a>
              <a href="#learning" className="text-muted-foreground hover:text-primary transition-colors">Learning</a>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
              <Button variant="hero" size="lg">Get Started</Button>
            </div>
            <MobileMenu />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
        <div className="container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  <Sparkles className="h-4 w-4 mr-2" />
                  Empowering Communication
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-hero bg-clip-text text-transparent">Voice</span> of{" "}
                  <span className="bg-gradient-secondary bg-clip-text text-transparent">Gestures</span>
                  <AnimatedHand className="ml-4" size="lg" />
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Transform sign language into voice and text with our AI-powered learning platform. 
                  Making education accessible, inclusive, and joyful for deaf and mute learners.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="xl" className="group">
                  <Play className="h-5 w-5 mr-2 group-hover:animate-bounce-gentle" />
                  Start Learning
                </Button>
                <Button variant="outline" size="xl">
                  <Video className="h-5 w-5 mr-2" />
                  Watch Demo
                </Button>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-warm border-2 border-background flex items-center justify-center text-sm font-semibold">
                      {['S', 'A', 'R', 'P'][i]}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-energy fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">Loved by 10,000+ learners</p>
                </div>
              </div>
            </div>

            <div className="relative animate-slide-up">
              <div className="absolute inset-0 bg-gradient-hero rounded-3xl blur-3xl opacity-20 animate-pulse-slow"></div>
              <img 
                src={heroImage} 
                alt="Students learning sign language with technology" 
                className="relative rounded-3xl shadow-large w-full h-auto"
              />
              <div className="absolute top-6 left-6 bg-card/90 backdrop-blur-sm rounded-xl p-4 shadow-medium">
                <div className="flex items-center space-x-3">
                  <GestureIcon gesture="👋" animated />
                  <div>
                    <p className="font-semibold">Hello</p>
                    <p className="text-sm text-muted-foreground">Sign detected</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">Inclusive Learning Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover powerful tools designed to make sign language learning accessible, engaging, and effective for everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Hand}
              title="Real-time Sign Detection"
              description="Advanced AI recognizes hand gestures and converts them instantly to text and speech with 95% accuracy."
              iconColor="text-primary"
            />
            <FeatureCard
              icon={Brain}
              title="Adaptive Learning"
              description="Personalized learning paths that adapt to each student's pace and learning style for maximum retention."
              iconColor="text-secondary"
            />
            <FeatureCard
              icon={Users}
              title="Collaborative Platform"
              description="Connect students, teachers, and parents in a supportive learning community with real-time progress sharing."
              iconColor="text-accent"
            />
            <FeatureCard
              icon={Award}
              title="Gamified Progress"
              description="Earn badges, complete challenges, and track achievements with our engaging reward system."
              iconColor="text-energy"
            />
            <FeatureCard
              icon={Globe}
              title="Multi-language Support"
              description="Learn in English, Gujarati, and expand to other Indian languages with cultural context integration."
              iconColor="text-primary"
            />
            <FeatureCard
              icon={Heart}
              title="Accessibility First"
              description="Designed with high contrast, large fonts, haptic feedback, and screen reader compatibility."
              iconColor="text-secondary"
            />
          </div>
        </div>
      </section>

      {/* Learning Modules */}
      <section id="learning" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">Interactive Learning Modules</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Structured learning paths from basic alphabets to advanced conversations, all with gamified elements.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[
                {
                  icon: BookOpen,
                  title: "Alphabet & Basic Signs",
                  description: "Master the fundamentals with interactive lessons and practice sessions.",
                  level: "Beginner"
                },
                {
                  icon: MessageSquare,
                  title: "Everyday Conversations",
                  description: "Learn practical communication for daily life situations and needs.",
                  level: "Intermediate"
                },
                {
                  icon: Target,
                  title: "Advanced Expression",
                  description: "Express complex thoughts, emotions, and professional communication.",
                  level: "Advanced"
                }
              ].map((module, index) => (
                <Card key={index} className="group hover:shadow-medium transition-all duration-300 cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <module.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xl font-semibold">{module.title}</h3>
                          <Badge variant="secondary">{module.level}</Badge>
                        </div>
                        <p className="text-muted-foreground">{module.description}</p>
                        <div className="flex items-center text-primary group-hover:text-primary-light transition-colors">
                          <span className="text-sm font-medium">Start Module</span>
                          <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="space-y-6">
              <Card className="bg-gradient-secondary text-secondary-foreground p-8">
                <div className="text-center space-y-4">
                  <div className="flex justify-center space-x-4">
                    <GestureIcon gesture="🤟" animated />
                    <GestureIcon gesture="👋" animated />
                    <GestureIcon gesture="✌️" animated />
                  </div>
                  <h3 className="text-2xl font-bold">Live Practice Sessions</h3>
                  <p className="text-secondary-foreground/90">
                    Join virtual classrooms with certified sign language instructors and practice with peers in real-time.
                  </p>
                  <Button variant="outline" size="lg" className="bg-secondary-foreground/10 text-secondary-foreground border-secondary-foreground/20 hover:bg-secondary-foreground/20">
                    Join Session
                  </Button>
                </div>
              </Card>

              <div className="grid grid-cols-2 gap-4">
                <Card className="p-6 text-center">
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-primary">15K+</div>
                    <div className="text-sm text-muted-foreground">Active Learners</div>
                  </div>
                </Card>
                <Card className="p-6 text-center">
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-secondary">500+</div>
                    <div className="text-sm text-muted-foreground">Sign Vocabulary</div>
                  </div>
                </Card>
                <Card className="p-6 text-center">
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-accent">95%</div>
                    <div className="text-sm text-muted-foreground">Accuracy Rate</div>
                  </div>
                </Card>
                <Card className="p-6 text-center">
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-energy">24/7</div>
                    <div className="text-sm text-muted-foreground">Support</div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Start Your Journey Today <AnimatedHand size="lg" />
            </h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Join thousands of students, teachers, and families who are transforming communication barriers into bridges of understanding.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="xl" className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20">
                Download App
              </Button>
              <Button variant="warm" size="xl">
                Try Web Version
              </Button>
            </div>
            <p className="text-sm opacity-75">Free to start • No credit card required • Available in English & Gujarati</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img src={logoImage} alt="GestureVaani Logo" className="h-8 w-auto" />
                <span className="text-xl font-bold">GestureVaani</span>
              </div>
              <p className="text-muted-foreground">
                Empowering communication through inclusive sign language technology and education.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Mobile App</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Web Dashboard</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Teacher Portal</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Learning</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Sign Language Basics</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Conversation Skills</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Cultural Context</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 GestureVaani. Made with <Heart className="h-4 w-4 inline text-red-500" /> for inclusive education.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
