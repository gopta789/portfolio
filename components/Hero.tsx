import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Terminal } from 'lucide-react';
import { NavLinks } from '../types';

// Resolve resume link from common env names (Vite, CRA, Next) with a safe fallback to Google
const RESUME_LINK: string =
  (typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_RESUME_LINK) ||
  (process.env.REACT_APP_RESUME_LINK as string | undefined) ||
  (process.env.NEXT_PUBLIC_RESUME_LINK as string | undefined) ||
  (process.env.RESUME_LINK as string | undefined) ||
  'https://google.com/';

export const Hero: React.FC = () => {
  const scrollToProjects = () => {
    document.getElementById(NavLinks.PROJECTS)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id={NavLinks.HOME} className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 max-w-7xl mx-auto sm:px-6 lg:px-8 relative">
      <div className="text-left lg:flex lg:items-start lg:justify-between gap-12">
        <div className="lg:w-1/2 space-y-8">
          <div className="inline-flex items-center px-2 py-1 border border-primary text-primary bg-primary/5 text-xs tracking-widest">
            <span className="w-2 h-2 bg-primary mr-2 animate-pulse"></span>
            SYSTEM STATUS: ONLINE
          </div>
          
          <div className="space-y-2">
            <p className="text-primary text-lg">user@portfolio:~$ whoami</p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tighter">
              Aashu Singh
            </h1>
            <p className="text-2xl text-gray-400 mt-2 font-light">
              <span className="text-primary">{'>'}</span> Software Engineer
            </p>
          </div>
          
          <div className="border-l-2 border-primary/50 pl-6 py-2">
            <p className="text-lg text-gray-300 leading-relaxed font-mono">
              // Competitive programmer & developer<br/>
              // Passionate about Algorithms & Engineering<br/>
              <span className="text-primary">const</span> mission = <span className="text-secondary">"Building scalable infrastructure"</span>;
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-start gap-4 mt-8">
            <button 
              onClick={scrollToProjects}
              className="w-full sm:w-auto px-8 py-3 bg-primary text-black font-bold border-2 border-primary hover:bg-transparent hover:text-primary transition-all rounded-none flex items-center justify-center group uppercase tracking-wider"
            >
              [ Execute_Projects ]
            </button>
            
            <button 
              onClick={() => window.open(RESUME_LINK, '_blank')}
            className="w-full sm:w-auto px-8 py-3 bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-black transition-all rounded-none font-bold flex items-center justify-center uppercase tracking-wider">
              [ Download_Resume ]
            </button>
          </div>

          <div className="flex items-center justify-start gap-6 pt-4 text-gray-500">
            <a href="https://github.com/gopta789" className="hover:text-primary transition-colors"><Github className="h-6 w-6" /></a>
            <a href="https://www.linkedin.com/in/aashu-singh-1860a6228/" className="hover:text-primary transition-colors"><Linkedin className="h-6 w-6" /></a>
            <a href="#" className="hover:text-primary transition-colors"><Terminal className="h-6 w-6" /></a>
          </div>
        </div>

        <div className="hidden lg:block lg:w-5/12 mt-12 lg:mt-0">
            <div className="bg-black border border-primary shadow-[4px_4px_0px_0px_rgba(245,158,11,0.3)] p-1">
                <div className="bg-primary/20 p-2 border-b border-primary flex justify-between items-center">
                    <span className="text-xs text-primary uppercase">vim solution.cpp</span>
                    <div className="flex space-x-2">
                        <div className="w-3 h-3 border border-primary bg-black"></div>
                        <div className="w-3 h-3 border border-primary bg-primary"></div>
                    </div>
                </div>
                <div className="p-4 font-mono text-sm text-gray-300 overflow-x-auto">
<pre>{`#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    vector<int> optimize(vector<int>& data) {
        // Optimizing system performance
        int n = data.size();
        vector<int> dp(n, 0);
        
        for(int i = 0; i < n; ++i) {
            if(is_valid(i)) {
                dp[i] = solve(i);
            }
        }
        return dp; 
    }
};

// Status: AC (0ms, 100%)`}</pre>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};