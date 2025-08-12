import React, { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import {
  FaFacebookSquare,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      alert(
        "Message sent!\nThank you for your message. I'll get back to you soon."
      );
      setIsSubmitting(false);
      e.target.reset();
    }, 1500);
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center mb-12">
          Have a project in mind or want to collaborate? Feel free to reach out.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8 bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex flex-col items-center">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mt-4">Email</h4>
                  <a
                    href="mailto:hello@gmail.com"
                    className=" hover:text-primary transition-colors"
                  >
                    mdalimzaman.23@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mt-4">Let's Talk</h4>
                  <a
                    href="tel:+11234567890"
                    className=" hover:text-primary transition-colors"
                  >
                    +88 01728784407
                  </a>
                </div>
              </div>
              <div className="flex  flex-col items-center">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mt-4">Address</h4>
                  <a className=" hover:text-primary transition-colors">
                    Bogura, Bangladesh
                  </a>
                </div>
              </div>
            </div>

            <div className="p-4 bg-background rounded-lg flex justify-center items-center">
              <div>
                {" "}
                <h4 className="font-medium mb-4">Connect With Me</h4>
                <div className="flex gap-4 justify-center">
                  <a
                    className="social-icon"
                    href="https://www.facebook.com/zamanpro"
                    target="_blank"
                  >
                    <FaFacebookSquare size={24} />
                  </a>
                  <a
                    className="social-icon"
                    href="https://wa.me/1784285427"
                    target="_blank"
                  >
                    <FaWhatsapp size={24} />
                  </a>
                  <a
                    className="social-icon"
                    href="https://www.linkedin.com/in/zaman-pro"
                    target="_blank"
                  >
                    <FaLinkedin size={24} />
                  </a>
                  <a
                    className="social-icon"
                    href="https://github.com/zaman-pro"
                    target="_blank"
                  >
                    <FaGithub size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="cosmic-button w-full flex items-center justify-center gap-2"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
