import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-6 bg-black border-t border-primary/20 text-center font-mono text-xs text-gray-600">
       <p>
         <span className="text-primary">© {new Date().getFullYear()}</span> Aashu Singh. 
         <span className="mx-2">|</span>
         Running on <span className="text-gray-400">React v19.2</span>
         <span className="mx-2">|</span>
         System status: <span className="text-primary">Stable</span>
       </p>
    </footer>
  );
};