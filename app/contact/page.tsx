"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  MapPinned,
} from "lucide-react";

const Particles = () => {
  const particles = Array.from({ length: 50 });
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-amber-400/30 rounded-full"
          initial={{
            x: Math.random() * 1000,
            y: Math.random() * 1000,
          }}
          animate={{
            x: Math.random() * 1000,
            y: Math.random() * 1000,
          }}
          transition={{
            duration: Math.random() * 10 + 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

function ContactHero() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className="relative min-h-[50vh] flex items-center justify-center overflow-hidden"
    >
      <Particles />
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-amber-700/20 mix-blend-overlay z-10" />
        <img
          src="/api/placeholder/2000/1000"
          alt="Contact Us Banner"
          className="object-cover w-full h-full"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="relative z-20 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="inline-block mb-6"
        >
          <MessageCircle className="w-16 h-16 text-amber-400" />
        </motion.div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600">
          Contact Us
        </h1>
        <p className="text-xl md:text-2xl text-amber-100/80 max-w-2xl mx-auto px-4">
          At Quality Food Distributors Ghana Ltd., we welcome inquiries from
          businesses and clients worldwide seeking premium processed cashews.
        </p>
      </motion.div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stone-950 to-transparent" />
    </section>
  );
}

function EnhancedContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      setStatus("error");
      setErrorMessage("Failed to submit form. Please try again later.");
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <Card className="bg-stone-900/50 backdrop-blur-lg border-amber-500/20">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-amber-100">
            Send Us a Message
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-stone-800/50 border-amber-500/20 focus:border-amber-500 focus:ring-amber-500 text-amber-100 placeholder:text-amber-100/50"
            />
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-stone-800/50 border-amber-500/20 focus:border-amber-500 focus:ring-amber-500 text-amber-100 placeholder:text-amber-100/50"
            />
            <Input
              type="text"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="bg-stone-800/50 border-amber-500/20 focus:border-amber-500 focus:ring-amber-500 text-amber-100 placeholder:text-amber-100/50"
            />
            <Textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="bg-stone-800/50 border-amber-500/20 focus:border-amber-500 focus:ring-amber-500 text-amber-100 placeholder:text-amber-100/50"
              rows={5}
            />
            <Button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-600 text-stone-900 font-semibold"
            >
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function EnhancedContactInfo() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <Card className="bg-stone-900/50 backdrop-blur-lg border-amber-500/20">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-amber-100">
            Company Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {[
            {
              icon: <Phone className="text-amber-400" />,
              text: "+233 24 000 0000",
            },
            {
              icon: <Mail className="text-amber-400" />,
              text: "export@qualityfoodghana.com",
            },
            {
              icon: <MapPin className="text-amber-400" />,
              text: "Drobo, Bono Region, Ghana",
            },
            {
              icon: <Clock className="text-amber-400" />,
              text: "Monday to Friday – 8:00 AM to 6:00 PM (GMT)",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center space-x-3 text-amber-100/80 hover:text-amber-100 transition-colors"
            >
              {item.icon}
              <span>{item.text}</span>
            </motion.div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
}

function EnhancedMap() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <Card className="bg-stone-900/50 backdrop-blur-lg border-amber-500/20 overflow-hidden">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-amber-100 flex items-center gap-2">
            <MapPinned className="text-amber-400" />
            Our Location
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15835.194553129592!2d-2.7854166744584957!3d7.583333299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfe13ded6fd61c2b%3A0x15a827c058a52c76!2sDrobo%2C%20Ghana!5e0!3m2!1sen!2s!4v1698247027099!5m2!1sen!2s"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function ContactPage() {
  return (
    <main className="bg-stone-950 min-h-screen">
      <ContactHero />
      <div className="relative">
        <Particles />
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-8">
              <EnhancedContactForm />
              <EnhancedContactInfo />
            </div>
            <EnhancedMap />
          </div>
        </div>
      </div>
    </main>
  );
}
