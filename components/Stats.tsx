import React from 'react';
import { Trophy, Target, Code, BookOpen } from 'lucide-react';
import { NavLinks } from '../types';
import { CODEFORCES_DATA } from '../constants';

export const Stats: React.FC = () => {
  const stats = [
    { label: 'MAX_RATING', value: '1610', sub: 'EXPERT', icon: <Trophy className="w-5 h-5" /> },
    { label: 'LEETCODE', value: '700+', sub: 'SOLVED', icon: <Code className="w-5 h-5" /> },
    { label: 'CODEFORCES', value: '120+', sub: 'CONTESTS', icon: <Target className="w-5 h-5" /> },
    { label: 'CODEFORCES', value: '650+', sub: 'SOLVED', icon: <Code className="w-5 h-5" /> },
  ];


  const maxRating = Math.max(...CODEFORCES_DATA.map(d => d.rating)) + 100;
  const minRating = Math.min(...CODEFORCES_DATA.map(d => d.rating)) - 100;
  const range = maxRating - minRating;
  const height = 200;
  const width = 600;
  
  const points = CODEFORCES_DATA.map((d, i) => {
    const x = (i / (CODEFORCES_DATA.length - 1)) * width;
    const y = height - ((d.rating - minRating) / range) * height;
    return `${x},${y}`;
  }).join(' ');

  return (
    <section id={NavLinks.STATS} className="py-20 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12 border-b border-primary/20 pb-4">
          <h2 className="text-2xl font-bold text-white uppercase tracking-wider">
            <span className="text-primary mr-2">./</span>Stats & Metrics
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            <div className="grid grid-cols-2 gap-4 lg:col-span-1">
                {stats.map((stat, idx) => (
                    <div key={idx} className="bg-black p-4 border border-gray-800 hover:border-primary transition-all group">
                        <div className="text-gray-500 group-hover:text-primary mb-2">
                            {stat.icon}
                        </div>
                        <h4 className="text-2xl font-bold text-white mb-1 font-mono">{stat.value}</h4>
                        <p className="text-xs font-bold text-primary uppercase">{stat.label}</p>
                        <p className="text-[10px] text-gray-600 uppercase mt-1">{stat.sub}</p>
                    </div>
                ))}
            </div>

            
            <div className="lg:col-span-2 bg-black border border-gray-800 p-6 relative">
                <div className="absolute top-0 left-0 bg-primary/10 px-2 py-1 text-[10px] text-primary uppercase">
                    Rating_History.svg
                </div>
                <div className="flex-grow relative min-h-[250px] w-full mt-4">
                    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full overflow-visible">
                        
                        {[0, 0.25, 0.5, 0.75, 1].map(t => (
                            <line 
                                key={t} 
                                x1="0" 
                                y1={t * height} 
                                x2={width} 
                                y2={t * height} 
                                stroke="#f59e0b" 
                                strokeWidth="1" 
                                strokeDasharray="2 2" 
                                opacity="0.2"
                            />
                        ))}
                        
                        
                        <polyline 
                            points={points}
                            fill="none"
                            stroke="#f59e0b"
                            strokeWidth="2"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                        />

                        
                        {CODEFORCES_DATA.map((d, i) => {
                            const x = (i / (CODEFORCES_DATA.length - 1)) * width;
                            const y = height - ((d.rating - minRating) / range) * height;
                            return (
                                <g key={i} className="group">
                                    <rect x={x-3} y={y-3} width="6" height="6" fill="black" stroke="#f59e0b" strokeWidth="1" />
                                    
                                    <g className="opacity-0 group-hover:opacity-100 transition-opacity">
                                        <rect x={x - 30} y={y - 40} width="60" height="20" fill="#f59e0b" />
                                        <text x={x} y={y - 26} textAnchor="middle" fill="black" fontSize="10" fontWeight="bold">
                                            {d.rating}
                                        </text>
                                    </g>
                                </g>
                            );
                        })}
                    </svg>
                </div>
                <div className="flex justify-between text-[10px] text-gray-600 mt-4 px-2 font-mono uppercase">
                    {CODEFORCES_DATA.filter((_, i) => i % 2 === 0).map((d, i) => (
                        <span key={i}>{d.date}</span>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};