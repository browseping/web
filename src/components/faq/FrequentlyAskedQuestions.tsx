'use client';

import React from 'react';
import { FaRegQuestionCircle } from 'react-icons/fa';
import { FiFileText, FiUsers, FiShield, FiGithub, FiMail, FiAlertTriangle } from 'react-icons/fi';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Image from 'next/image';
import Snap1 from '../../assets/Snap1.png'
import Snap2 from '../../assets/Snap2.png'
import Snap3 from '../../assets/Snap3.png'

const FrequentlyAskedQuestions = () => {
  return (
    <section className="py-20 bg-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 bg-purple-500/10 border border-purple-500/20 rounded-full px-6 py-3 mb-8">
            <FaRegQuestionCircle className="text-purple-400" size={20} />
            <span className="text-purple-300 font-medium">Frequently Asked Questions</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Questions</span>
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed">
           All the essential information you might be looking for, explained simply to help you make informed decisions without confusion or guesswork.
          </p>
{/* 
          <div className="mt-6 text-sm text-gray-400">
            <p>Last updated: October 2025</p>
          </div> */}
        </div>

        {/* Important Notice */}
        {/* <div className="bg-amber-900/20 border border-amber-500/30 rounded-2xl p-6 mb-12">
          <h2 className="text-xl font-bold text-amber-400 mb-4 flex items-center space-x-2">
            <FiAlertTriangle size={20} />
            <span>Important Notice</span>
          </h2>
          <div className="text-amber-300 space-y-2">
            <p>BrowsePing is a community-driven, open-source project. These terms are designed to protect both users and the project while maintaining the collaborative spirit of open source development.</p>
            <p className="text-sm">If you disagree with any part of these terms, please discontinue use of our service.</p>
          </div>
        </div> */}

        {/* Main Content */}
        <div className="space-y-12">

        {/* First Question */}
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl px-8">
            <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger className="text-2xl font-bold text-white">1. How can we download BrowserPing ?</AccordionTrigger>
                <AccordionContent className="space-y-4 text-gray-300 text-xl">
                <span>You can download BrowserPing by going to <a className='text-purple-500' target='./' href='https://www.browseping.com/download'>Download page.</a> There you can find links to download it for diffrent browser and versions. </span>
                </AccordionContent>
            </AccordionItem>
            </Accordion>
          </div>


        {/* Second Question */}
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl px-8">
            <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger className="text-2xl font-bold text-white">2. How can I add friends on BrowserPing ?</AccordionTrigger>
                <AccordionContent className="space-y-4 text-gray-300 text-xl">
                <div className='flex flex-col justify-center items-start'>
                    <h1 className='font-bold mb-6'>You can add a friend by following the steps below:</h1>
                    <div className='flex flex-col gap-2'>
                    <a>1. Click on extensions in your browser and find BrowserPing  </a>
                    <a>2. Open BrowserPing and go to Friends section in bottom navigation dock right next to "Home"</a>
                    <div className='flex justify-center w-full'>
                        <Image src={Snap1} alt="snapshot1" className='w-[300px] rounded-md m-4'/>
                    </div>
                    <a>3. In friends section select "Search" in top navigation bar </a>
                    <div className='flex justify-center w-full'>
                        <Image src={Snap2} alt="snapshot1" className='w-[300px] rounded-md m-4'/>
                    </div>
                    <a>4. Here you can search your friend by their name or username</a>
                    <div className='flex justify-center w-full'>
                        <Image src={Snap3} alt="snapshot1" className='w-[300px] rounded-md m-4'/>
                    </div>

                    </div>
                </div>
                </AccordionContent>
            </AccordionItem>
            </Accordion>
           </div>


        {/* Third Question */}
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl px-8">
            <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger className="text-2xl font-bold text-white">3. Do I have control over what information others see from my browsing?</AccordionTrigger>
                <AccordionContent className="space-y-4 text-gray-300 text-xl">
                <div className='flex flex-col justify-center items-start gap-3'>
                    <span>Yes. With Privacy Controls, you can decide who can see your data, including Online Status, Last Seen, Tab Activity, and more.</span>
                    <span>To manage your privacy, simply navigate to your account’s Privacy Settings section and review the available control options.</span>
                    <span className='w-full flex justify-center'>More {'->'}  Account {'->'} Privacy & Security</span>
                </div>
                </AccordionContent>
            </AccordionItem>
            </Accordion>
           </div>


        {/* Forth Question */}
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl px-8">
            <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger className="text-2xl font-bold text-white">4. How does the BrowserPing leaderboard works ?</AccordionTrigger>
                <AccordionContent className="space-y-4 text-gray-300 text-xl">
                <div className='flex flex-col justify-center items-start gap-3'>
                    <span>BrowserPing tracks each user’s total online hours throughout the month and uses this data to automatically generate a monthly leaderboard, ranking users based on their overall activity.</span>
                    <span>Access your leaderboard by visiting the Analytics section from the main menu</span>
                    <span className='w-full flex justify-center'>Analytics {'->'}  Account {'->'} Leaderboard</span>
                </div>
                </AccordionContent>
            </AccordionItem>
            </Accordion>
           </div>

    
        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">

          {/* General Contact */}
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                <FiMail className="text-blue-400" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Can't find your question</h3>
                <p className="text-gray-400">Contact Us on our mail address</p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-gray-300">
                For general questions, feedback, or support requests, reach out to us via email.
              </p>
              <a
                href="mailto:hello@browseping.com"
                className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <FiMail size={16} />
                <span>support@browseping.com</span>
              </a>
            </div>
          </div>

          {/* Development & Contributions */}
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gray-500/20 rounded-xl flex items-center justify-center">
                <FiGithub className="text-gray-400" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Found an Bug ? </h3>
                <p className="text-gray-400">Report the bug to out GitHub repo</p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-gray-300">
                Want to contribute? Check out our GitHub repository.
              </p>
              <a
                href="https://github.com/browseping"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <FiGithub size={16} />
                <span>GitHub Repository</span>
              </a>
            </div>
          </div>

        </div>

        </div>
      </div>
    </section>
  );
};

export default FrequentlyAskedQuestions;