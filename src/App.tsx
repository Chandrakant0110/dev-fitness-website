import { Button } from "@/components/ui/button";
    import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
    import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
    import { Dumbbell, HeartPulse, BrainCircuit, MapPin, Phone, Star, CheckCircle, ArrowRight, Users, UserCheck, Check, Clock, Heart, Menu } from "lucide-react";
    import { cn } from "@/lib/utils";

    const navLinks = ["HOME", "ABOUT", "FEATURES", "PRICING", "CONTACT"];

    const featureDetails = [
      {
        title: "Professional Personal Training",
        highlight: "Personal Training",
        description: "Take your fitness to the next level with our certified personal trainers. Get personalized workout plans, proper form guidance, and motivation to achieve your goals faster and safer.",
        list: [
          "Customized workout programs",
          "Nutrition and diet planning",
          "Progress tracking and adjustments",
          "Motivation and accountability",
        ],
        image: "https://images.pexels.com/photos/317155/pexels-photo-317155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        title: "Premium Cardio Equipment",
        highlight: "Cardio Equipment",
        description: "Boost your cardiovascular health with our extensive range of cardio equipment. From treadmills to ellipticals, we have everything you need for an effective cardio workout.",
        list: [
          "Latest treadmills with touch screens",
          "Elliptical machines for low-impact cardio",
          "Stationary bikes and cycling equipment",
          "Heart rate monitoring systems",
        ],
        image: "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        title: "Extensive Strength Zone",
        highlight: "Strength Zone",
        description: "Build strength and muscle with our wide selection of free weights, resistance machines, and specialized bodybuilding equipment.",
        list: [
          "Full range of dumbbells and barbells",
          "Squat racks and bench presses",
          "Cable machines and functional trainers",
          "Dedicated deadlift platforms",
        ],
        image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
    ];

    const pricingPlans = [
      {
        icon: <Dumbbell className="w-10 h-10 text-red-500" />,
        title: "Hardcore",
        description: "Intense strength training and bodybuilding.",
        prices: [
          { duration: "1 Month", price: "900" },
          { duration: "3 Months", price: "2600" },
          { duration: "6 Months", price: "5000" },
          { duration: "12 Months", price: "9500" },
        ],
        features: [
          "Full weight training area access",
          "Free weights and machines",
          "Strength training equipment",
          "Bodybuilding focused environment",
        ],
        popular: false,
      },
      {
        icon: <HeartPulse className="w-10 h-10 text-blue-500" />,
        title: "Cardio",
        description: "Cardiovascular fitness and endurance.",
        prices: [
          { duration: "1 Month", price: "900" },
          { duration: "3 Months", price: "2600" },
          { duration: "6 Months", price: "5000" },
          { duration: "12 Months", price: "9500" },
        ],
        features: [
          "Treadmills and cardio machines",
          "Cycling and elliptical access",
          "Heart rate monitoring",
          "Endurance training programs",
        ],
        popular: false,
      },
      {
        icon: <Users className="w-10 h-10 text-orange-500" />,
        title: "Hardcore + Cardio",
        description: "Complete fitness solution.",
        prices: [
          { duration: "1 Month", price: "1300" },
          { duration: "3 Months", price: "3700" },
          { duration: "6 Months", price: "7200" },
          { duration: "12 Months", price: "14000" },
        ],
        features: [
          "Full gym access",
          "All equipment available",
          "Weight training + Cardio",
          "Most comprehensive package",
          "Best value for money",
        ],
        popular: true,
      },
      {
        icon: <UserCheck className="w-10 h-10 text-purple-500" />,
        title: "Personal Training",
        description: "One-on-one professional coaching.",
        prices: [
          { duration: "1 Month", price: "3000" },
          { duration: "3 Months", price: "8500" },
          { duration: "6 Months", price: "16000" },
          { duration: "12 Months", price: "30000" },
        ],
        features: [
          "Dedicated personal trainer",
          "Customized workout plans",
          "Nutrition guidance",
          "One-on-one sessions",
          "Faster results guaranteed",
        ],
        popular: false,
      },
    ];

    const testimonials = [
      {
        name: "Rohan Sharma",
        role: "Member",
        quote: "Dev Fitness has completely transformed my life. The trainers are knowledgeable and the community is incredibly supportive. I've never felt stronger or healthier!",
        avatar: "https://i.pravatar.cc/150?img=12"
      },
      {
        name: "Priya Singh",
        role: "Member",
        quote: "The best gym in Raipur, hands down. The equipment is top-notch and always clean. The variety of classes keeps me motivated. Highly recommend!",
        avatar: "https://i.pravatar.cc/150?img=5"
      },
      {
        name: "Amit Patel",
        role: "Member",
        quote: "I signed up for personal training and it was the best decision I've made. My trainer pushed me to my limits and helped me achieve results I never thought possible.",
        avatar: "https://i.pravatar.cc/150?img=7"
      },
    ];

    const Header = () => (
      <header className="fixed top-4 inset-x-0 z-50 max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20 px-6 bg-background/80 backdrop-blur-lg rounded-full border border-white/10 shadow-lg">
          <a href="#home" className="flex items-center gap-2 transition-transform hover:scale-105">
            <img src="/src/assets/logo.jpg" alt="Dev Fitness Logo" className="h-12 w-12 rounded-full" />
            <span className="text-xl font-bold text-white">DEV FITNESS & GYM</span>
          </a>
          
          {/* Desktop Nav & Button */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-6">
              {navLinks.map(link => (
                <a key={link} href={`#${link.toLowerCase()}`} className="text-muted-foreground hover:text-primary transition-colors font-medium">
                  {link}
                </a>
              ))}
            </nav>
            <a href="#pricing">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">Join Now</Button>
            </a>
          </div>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="secondary" size="icon" className="rounded-full">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background">
                <div className="flex flex-col h-full">
                  <nav className="flex flex-col gap-6 mt-8">
                    {navLinks.map(link => (
                      <SheetClose asChild key={link}>
                        <a href={`#${link.toLowerCase()}`} className="text-2xl text-muted-foreground hover:text-primary transition-colors font-medium">
                          {link}
                        </a>
                      </SheetClose>
                    ))}
                  </nav>
                  <SheetClose asChild>
                    <a href="#pricing" className="mt-auto">
                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg rounded-full">Join Now</Button>
                    </a>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    );

    const Hero = () => (
      <section id="home" className="relative h-screen flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Gym background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-20 container mx-auto px-4">
          <p className="text-xl text-white mb-4 tracking-widest">।। ॐ श्री गणेशाय नमः ।।</p>
          
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight uppercase">
            <span className="text-primary">Dev Fitness</span>
            <span className="text-white"> & Gym</span>
          </h1>

          <p className="mt-6 text-xl font-bold tracking-[0.3em] text-primary">UNISEX GYM</p>

          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            Transform your body, elevate your mind. Join Raipur's premier fitness destination with state-of-the-art equipment and expert training.
          </p>
          
          <div className="mt-8 flex justify-center gap-4">
            <a href="#pricing">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg rounded-full">Start Your Journey</Button>
            </a>
            <a href="#about">
              <Button size="lg" variant="outline" className="text-lg rounded-full">Learn More</Button>
            </a>
          </div>
        </div>
      </section>
    );

    const About = () => (
      <section id="about" className="py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="About Dev Fitness" className="rounded-lg shadow-2xl transition-transform duration-300 hover:scale-105" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-white">About Dev Fitness & Gym</h2>
            <p className="mt-4 text-muted-foreground">
              DEV FITNESS & GYM is a unisex fitness center dedicated to providing a premium workout experience. We believe in a holistic approach to fitness, combining physical strength with mental well-being. Our mission is to provide a clean, safe, and welcoming environment for everyone, from beginners to seasoned athletes.
            </p>
            <ul className="mt-6 space-y-4">
              <li className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-primary" />
                <span className="text-lg">Unisex gym with a comfortable environment for all.</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-primary" />
                <span className="text-lg">Wide range of hardcore and cardio equipment.</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-primary" />
                <span className="text-lg">Dedicated personal training for tailored results.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );

    const FeaturesSection = () => (
      <section id="features" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white">Why Choose Dev Fitness & Gym?</h2>
            <p className="mt-2 text-muted-foreground max-w-3xl mx-auto">
              Experience the difference with our world-class facilities, expert guidance, and commitment to your fitness success.
            </p>
          </div>
          <div className="space-y-24">
            {featureDetails.map((feature, index) => (
              <div key={feature.title} className="grid md:grid-cols-2 gap-16 items-center">
                <div className={cn("text-left", index % 2 !== 0 && "md:order-last")}>
                  <h3 className="text-3xl font-bold text-white">
                    {feature.title.split(feature.highlight)[0]}
                    <span className="text-primary">{feature.highlight}</span>
                    {feature.title.split(feature.highlight)[1]}
                  </h3>
                  <p className="mt-4 text-lg text-muted-foreground">{feature.description}</p>
                  <ul className="mt-6 space-y-3">
                    {feature.list.map((item) => (
                      <li key={item} className="flex items-center gap-4">
                        <div className="w-2.5 h-2.5 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="rounded-xl shadow-2xl aspect-video object-cover w-full h-auto transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );

    const PricingSection = () => (
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white">Flexible Plans for Every Goal</h2>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan that fits your fitness goals and budget.
          </p>
          <div className="my-8 max-w-sm mx-auto bg-primary/10 p-4 rounded-lg border border-primary/20">
            <p className="font-semibold text-primary">Entry Fee (One Time): ₹300/-</p>
            <p className="text-xs text-muted-foreground mt-1">*Paid fee not refundable</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingPlans.map((plan) => (
              <Card key={plan.title} className={cn("bg-secondary flex flex-col text-left relative transition-transform duration-300 hover:-translate-y-2", plan.popular && "border-2 border-primary shadow-lg shadow-primary/20")}>
                {plan.popular && (
                  <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <CardHeader className="items-center text-center">
                  {plan.icon}
                  <CardTitle className="mt-4 text-2xl text-white">{plan.title}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow space-y-6">
                  <div className="space-y-2">
                    {plan.prices.map(price => (
                      <div key={price.duration} className="flex justify-between items-baseline">
                        <span className="text-muted-foreground">{price.duration}</span>
                        <span className="font-bold text-white text-lg">₹{price.price}/-</span>
                      </div>
                    ))}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-3">INCLUDES:</h4>
                    <ul className="space-y-2">
                      {plan.features.map(feature => (
                        <li key={feature} className="flex items-center gap-3">
                          <Check className="w-5 h-5 text-green-500" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <a href="#contact" className="w-full">
                    <Button variant={plan.popular ? "default" : "outline"} className="w-full rounded-full">
                      Choose Plan <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );

    const TestimonialsSection = () => (
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center">What Our Members Say</h2>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-background transition-transform duration-300 hover:-translate-y-2">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full" />
                    <div className="ml-4">
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">"{testimonial.quote}"</p>
                  <div className="flex mt-4">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-primary fill-primary" />)}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );

    const ContactSection = () => (
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white">Ready to Start Your Transformation?</h2>
          <p className="mt-2 text-muted-foreground">Visit us today or get in touch with our team. We're excited to welcome you to the Dev Fitness family.</p>
          <div className="mt-12 grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-secondary p-8 rounded-lg transition-transform duration-300 hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-white">Contact Information</h3>
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white">Address</p>
                    <p className="text-muted-foreground">Nahar road, Near UMH Hospital, Above Chisty Light, Bhatagaon, Raipur, (C.G.)</p>
                    <a href="https://maps.app.goo.gl/5DcC2qcaKikvz4DR9" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline mt-1 inline-block">
                      Get Directions <ArrowRight className="inline w-4 h-4" />
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white">Phone</p>
                    <p className="text-muted-foreground">
                      <a href="tel:6232993864" className="hover:text-primary">6232993864</a>
                    </p>
                    <p className="text-muted-foreground">
                      <a href="tel:6232964774" className="hover:text-primary">6232964774</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.552398470191!2d81.6450130742118!3d21.20991988259914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dd62b3f5f2a9%3A0x4475547c8679ee4!2sDev%20Fitness%20%26%20Gym!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    );

    const Footer = () => (
      <footer className="bg-secondary border-t border-border">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-muted-foreground">
            {/* Column 1: Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <img src="/src/assets/logo.jpg" alt="Dev Fitness Logo" className="h-10 w-10 rounded-full" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">DEV FITNESS</h3>
                  <p className="text-sm">& GYM</p>
                </div>
              </div>
              <p className="mb-4">
                Transform your body, elevate your mind. Join Raipur's premier fitness destination with state-of-the-art equipment and expert training.
              </p>
              <p>।। ॐ श्री गणेशाय नमः ।।</p>
            </div>

            {/* Column 2: Contact Info */}
            <div>
              <h4 className="font-semibold text-primary mb-4">Contact Information</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <a href="tel:+916232993864" className="hover:text-primary">+91 62329 93864</a><br/>
                    <a href="tel:+916232964774" className="hover:text-primary">+91 62329 64774</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Nahar Road, Near UMH Hospital, Above Chisti Light, Bhatagaon, Raipur, Chhattisgarh 493222</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p>Mon-Sat: 5:00 AM - 10:30 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Column 3: Quick Actions */}
            <div>
              <h4 className="font-semibold text-primary mb-4">Quick Actions</h4>
              <ul className="space-y-3">
                <li><a href="tel:6232993864" className="hover:text-primary">Call Now for Membership</a></li>
                <li><a href="https://maps.app.goo.gl/5DcC2qcaKikvz4DR9" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Get Directions to Gym</a></li>
                <li><a href="#contact" className="hover:text-primary">Book Free Trial Session</a></li>
                <li><a href="#contact" className="hover:text-primary">Personal Training Consultation</a></li>
              </ul>
              <hr className="my-4 border-border" />
              <div>
                <p className="text-primary font-semibold">Entry Fee: ₹300/- (One Time)</p>
                <p className="text-xs">*Paid fee not refundable</p>
              </div>
            </div>
          </div>

          <hr className="my-8 border-border" />

          {/* Bottom Bar */}
          <div className="text-center text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} Dev Fitness & Gym. Built with <Heart className="inline w-4 h-4 text-red-500 fill-current" /> by{' '}
              <a
                href="https://github.com/Chandrakant0110"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary hover:underline"
              >
                Chandrakant Sahu
              </a>.
            </p>
            <p>All rights reserved. Terms & Conditions apply.</p>
          </div>
        </div>
      </footer>
    );

    export default function App() {
      return (
        <div className="bg-background">
          <Header />
          <main>
            <Hero />
            <About />
            <FeaturesSection />
            <PricingSection />
            <TestimonialsSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      )
    }
