import React from 'react';
import { Mail, MapPin, Send, Terminal } from 'lucide-react';
import { NavLinks } from '../types';

export const Contact: React.FC = () => {
  return (
    <section id={NavLinks.CONTACT} className="py-24 relative bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="border border-primary bg-black p-1 relative shadow-[4px_4px_0px_0px_rgba(245,158,11,0.3)]">
          
          <div className="bg-primary px-4 py-1 flex justify-between items-center mb-8">
             <span className="text-black font-bold text-sm uppercase">Message_Compose.exe</span>
             <div className="flex space-x-1">
                 <span className="w-3 h-3 bg-black border border-black"></span>
                 <span className="w-3 h-3 bg-black border border-black"></span>
             </div>
          </div>

          <div className="p-4 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-2 uppercase">Initial_Handshake</h2>
                  <p className="text-gray-400 text-sm">
                    Looking for efficient algorithms and scalable solutions? Let's connect.
                  </p>
              </div>

              <div className="space-y-6">
                  <div className="flex items-start space-x-4 group">
                    <div className="text-primary mt-1">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white uppercase">Email_Address</h3>
                      <p className="text-gray-400 text-sm font-mono mt-1 group-hover:text-primary transition-colors">rgopta13@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="text-primary mt-1">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white uppercase">Current_Location</h3>
                      <p className="text-gray-400 text-sm font-mono mt-1 group-hover:text-primary transition-colors">Varanasi India :: Open_Relocation</p>
                    </div>
                  </div>
              </div>
            </div>

            <form className="space-y-4 font-mono" onSubmit={(e) => e.preventDefault()}>
              <div className="relative group">
                <label htmlFor="email" className="block text-xs font-bold text-secondary mb-1 uppercase">
                  From:
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-black border border-gray-700 focus:border-primary outline-none text-white placeholder-gray-700 transition-all rounded-none"
                  placeholder="recruiter@company.com"
                />
              </div>
              <div className="relative group">
                <label htmlFor="message" className="block text-xs font-bold text-secondary mb-1 uppercase">
                  Body:
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-black border border-gray-700 focus:border-primary outline-none text-white placeholder-gray-700 transition-all resize-none rounded-none"
                  placeholder="> Type your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                disabled
                className=" w-full bg-secondary text-black font-bold py-3 hover:bg-secondary transition-colors flex items-center justify-center uppercase tracking-wider rounded-none"
              >
                [ Send_Packet (Coming Soon) ]
                <Send className="w-4 h-4 ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};