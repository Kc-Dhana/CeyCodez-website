import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="min-h-screen py-20 px-6 flex flex-col justify-center text-white relative overflow-hidden">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
          Get In Touch
        </h2>
        <p className="text-xl md:text-2xl text-cyan-400/90">
          Let’s build the future together.
        </p>
      </div>

      {/* Contact Grid */}
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 relative z-10">
        {/* Contact Form */}
        <div className="relative bg-gray-900/70 backdrop-blur-md border border-cyan-500/40 rounded-2xl shadow-[0_0_30px_-10px_#06b6d4] hover:shadow-[0_0_40px_-5px_#06b6d4] transition-all">
          <div className="p-8 sm:p-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-cyan-400">
              SEND MESSAGE
            </h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-gray-950/70 border border-gray-700 px-4 py-3 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-gray-950/70 border border-gray-700 px-4 py-3 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Phone
                </label>
                <input
                  type="text"
                  placeholder="Enter your phone"
                  className="w-full bg-gray-950/70 border border-gray-700 px-4 py-3 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Type your message..."
                  className="w-full bg-gray-950/70 border border-gray-700 px-4 py-3 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-cyan-400 hover:bg-cyan-500 text-black py-3.5 font-semibold rounded-lg text-lg tracking-wide transition-transform hover:scale-[1.02]"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>

        {/* Contact Info */}
        <div className="relative bg-gray-900/70 backdrop-blur-md border border-cyan-500/40 rounded-2xl shadow-[0_0_30px_-10px_#06b6d4] hover:shadow-[0_0_40px_-5px_#06b6d4] transition-all">
          <div className="p-8 sm:p-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-cyan-400">
              CONTACT INFORMATION
            </h3>

            <div className="space-y-7 mb-10">
              <div className="flex items-center gap-4">
                <div className="p-4 border border-cyan-400/50 bg-cyan-400/10 rounded-xl">
                  <Mail className="w-7 h-7 text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Email</p>
                  <p className="font-semibold">contact@ceycodez.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-4 border border-cyan-400/50 bg-cyan-400/10 rounded-xl">
                  <Phone className="w-7 h-7 text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Phone</p>
                  <p className="font-semibold">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-4 border border-cyan-400/50 bg-cyan-400/10 rounded-xl">
                  <MapPin className="w-7 h-7 text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Address</p>
                  <p className="font-semibold">
                    123 Tech Street, Digital City
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-6">
              <h4 className="text-lg font-bold mb-3 text-cyan-400">
                BUSINESS HOURS
              </h4>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
