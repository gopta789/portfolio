import React from 'react';
import { Cpu, Globe, Server, Database } from 'lucide-react';
import { NavLinks } from '../types';
import { STUDENT_BIO, SKILLS } from '../constants';

export const About: React.FC = () => {
  return (
    <section id={NavLinks.ABOUT} className="py-20 bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="mb-6 flex items-center">
                <span className="text-primary text-2xl font-bold mr-2">{'>'}</span>
                <h2 className="text-2xl font-bold text-white uppercase tracking-widest">About_User</h2>
            </div>
            
            <div className="border-l border-primary/30 pl-4 mb-8">
              <p className="text-lg leading-relaxed mb-4 font-light text-gray-400">
                {STUDENT_BIO}
              </p>
              <p className="leading-relaxed font-light text-gray-400">
                <span className="text-primary">current_focus</span>: Competitive programming & Software development.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Cpu />, title: "ALGORITHMS", desc: "C++, STL, Graphs" },
                { icon: <Server />, title: "BACKEND", desc: "Go, Node, SQL" },
                { icon: <Globe />, title: "FRONTEND", desc: "React, TS, CSS" },
                { icon: <Database />, title: "SYSTEMS", desc: "Docker, Redis" }
              ].map((item, i) => (
                <div key={i} className="p-4 border border-gray-800 hover:border-primary hover:bg-primary/5 transition-colors group">
                  <div className="text-gray-500 group-hover:text-primary mb-2 transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-white text-sm tracking-wider">{item.title}</h3>
                  <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-gray-800 p-6 bg-surface">
            <div className="flex items-center mb-6 border-b border-gray-800 pb-2">
                <span className="text-primary mr-2">$</span>
                <h3 className="text-lg font-bold text-white uppercase">Skill_Matrix</h3>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {SKILLS.map((skill) => (
                <span 
                  key={skill} 
                  className="px-3 py-1 text-xs font-medium border border-primary/30 text-primary hover:bg-primary hover:text-black cursor-default transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
            
            <div className="space-y-6 font-mono text-xs">
               <div>
                   <div className="flex justify-between mb-1 text-gray-400">
                      <span>PROBLEM_SOLVING</span>
                      <span>95%</span>
                   </div>
                   <div className="w-full bg-gray-900 h-4 border border-gray-700 p-0.5">
                      <div className="h-full bg-primary w-[95%] relative overflow-hidden">
                          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.3)_25%,rgba(0,0,0,0.3)_50%,transparent_50%,transparent_75%,rgba(0,0,0,0.3)_75%,rgba(0,0,0,0.3))] bg-[size:8px_8px]"></div>
                      </div>
                   </div>
               </div>

               <div>
                   <div className="flex justify-between mb-1 text-gray-400">
                      <span>SYSTEM_DESIGN</span>
                      <span>85%</span>
                   </div>
                   <div className="w-full bg-gray-900 h-4 border border-gray-700 p-0.5">
                      <div className="h-full bg-primary w-[85%] relative overflow-hidden">
                        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.3)_25%,rgba(0,0,0,0.3)_50%,transparent_50%,transparent_75%,rgba(0,0,0,0.3)_75%,rgba(0,0,0,0.3))] bg-[size:8px_8px]"></div>
                      </div>
                   </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};