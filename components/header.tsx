"use client";

import React from 'react';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { motion } from 'framer-motion';
import { Sparkles, Rocket } from 'lucide-react';

const HeaderCompo = () => {
  return (
    <div className="sticky top-0 z-50 backdrop-blur-md bg-white/30 dark:bg-gray-900/30 border-b border-gray-200/30 dark:border-gray-700/30">
      <nav className="container mx-auto">
        <div className="px-4 py-3 flex items-center justify-between">
          {/* Logo and Title Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <Rocket className="h-6 w-6 text-blue-500" />
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Exam Portal
            </h1>
          </motion.div>

          {/* Auth Section */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-4"
          >
            <SignedOut>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-200"></div>
                <button className="relative flex items-center px-4 py-2 bg-white dark:bg-gray-900 rounded-lg">
                  <Sparkles className="w-4 h-4 mr-2 text-blue-500" />
                  <SignInButton mode="modal">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent font-medium">
                      Sign In
                    </span>
                  </SignInButton>
                </button>
              </motion.div>
            </SignedOut>
            
            <SignedIn>
              <motion.div
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                className="relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-50"></div>
                <div className="relative">
                  <UserButton
                    appearance={{
                      elements: {
                        avatarBox: "w-10 h-10"
                      }
                    }}
                  />
                </div>
              </motion.div>
            </SignedIn>
          </motion.div>
        </div>
      </nav>
    </div>
  );
}

export default HeaderCompo;