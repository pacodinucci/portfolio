'use client';
import React, { useState } from 'react';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillLinkedin, AiFillGithub, AiFillMail, AiOutlineDoubleRight} from 'react-icons/ai'
import Image from 'next/image';
import devfr from '../public/devfr.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';
import design from '../public/design.png';
import web1 from '../public/web1.png';
import web2 from '../public/web2.png';
import web3 from '../public/web3.png';
import web4 from '../public/web4.png';
import web5 from '../public/web5.png';
import web6 from '../public/web6.png';


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
      <div className={darkMode ? 'dark' : ''}>
        <main className='relative bg-slate-900 px-10 md:px-20 lg:px-40'>
          <div>
          <section className="min-h-screen">
            <nav className={'py-10 mb-12 flex justify-end font-anaheim'}>
              {/* <h1 className='text-xl font-burtons'>welcome,</h1> */}
              <ul className='flex justify-around gap-10'>
                {/* <li>
                  <BsFillMoonStarsFill className='cursor-pointer text-2xl' onClick={() => setDarkMode(!darkMode)}/>
                </li> */}
                <li className='text-zinc-400 cursor-pointer hover:text-white'><span className='text-amber-700 font-bold tracking-wide'>01.</span> About</li>
                <li className='text-zinc-400 cursor-pointer hover:text-white'><span className='text-amber-700 font-bold tracking-wide'>02.</span> Projects</li>
                <li className='text-zinc-400 cursor-pointer hover:text-white'><span className='text-amber-700 font-bold tracking-wide'>03.</span> Chat with AI</li>
                <li className='text-zinc-400 cursor-pointer hover:text-white'><span className='text-amber-700 font-bold tracking-wide'>04.</span> Contact</li>
                <li><a href="#" className='border-2 border-amber-700 rounded-sm text-white px-4 py-2 ml-4 hover:bg-amber-700 transition-bg'>Resume</a></li>
              </ul>
            </nav>
            <div className='flex align-middle'>
              <div className='text-left p-10 flex flex-col justify-center'>
                <h4 className='text-xl py-2 text-zinc-400 font-anaheim font-medium md:text-2xl'>Hi, my name is</h4>
                <h2 className='text-4xl py-2 text-zinc-100 font-firaSans font-bold md:text-6xl'>Francisco Di Nucci</h2>
                <h3 className='text-2xl py-2 text-zinc-200 font-firaSans md:text-3xl'>I am a Fullstack Developer.</h3>
                <p className='text-md py-5 leading-8 text-zinc-300 font-firaSans md:text-xl max-w-xl mx-auto'>I am a highly motivated individual with a passion for programming 
                                  and a strong foundation in JavaScript, Node.js, and React. 
                                  I am currently dedicated to specializing in the creation and sometimes design of innovative digital solutions.</p>
                <div className='text-5xl flex justify-end gap-16 py-3 text-gray-600'>
                  <AiFillLinkedin />
                  <AiFillGithub />
                  <AiFillMail />
                </div>
              </div>
              <div className='relative mx-auto rounded-[70%/60%_10%_65%_90%] drop-shadow-[0px_15px_3px_rgba(0,0,0,0.25)] w-100 h-80 my-20 overflow-hidden md:h-96 md:w-96'>
                <Image src={devfr} layout='fill' objectFit='cover'/>
              </div>
            </div>
            
           
          </section>

          <section>
            <div className='min-h-screen'>
              <h4 className='text-xl text-center py-3 text-zinc-100 font-anaheim font-medium md:text-2xl'><span className='text-amber-700 font-bold tracking-wide'>01.</span> About Me</h4>
              <p className='text-md py-5 leading-8 text-zinc-300 font-firaSans md:text-xl max-w-xl mx-auto'>I believe in technology as a way of freedom, individually and collectively. We are at the gate of the 4th industrial revolution and I want to be part of the transformative era of significant changes and advancements that are driving humanity to new horizons.</p>
              <p className='text-md py-5 leading-8 text-zinc-300 font-firaSans md:text-xl max-w-xl mx-auto'>I am convinced that now I have the tools to achieve my goals and contribute to the community in these times where technology plays a fundamental role in its development and I am glad to have made the decision to change my professional path towards something I am passionate about.</p>
              <p className='text-md py-5 leading-8 text-zinc-300 font-firaSans md:text-xl max-w-xl mx-auto'>Here are a few technologies I’ve been working with recently:</p>
              <div className='flex justify-center flex-wrap'>
                <ul className='grid grid-cols-2 gap-6 text-zinc-100'>
                  <li className='flex gap-2 items-center'><AiOutlineDoubleRight className='text-amber-700'/><span>Javascript</span></li>
                  <li className='flex gap-2 items-center'><AiOutlineDoubleRight className='text-amber-700'/><span>Typescript</span> </li>
                  <li className='flex gap-2 items-center'><AiOutlineDoubleRight className='text-amber-700'/><span>NodeJS</span> </li>
                  <li className='flex gap-2 items-center'><AiOutlineDoubleRight className='text-amber-700'/><span>React</span> </li>
                  <li className='flex gap-2 items-center'><AiOutlineDoubleRight className='text-amber-700'/><span>PostgresSQL</span></li>
                  <li className='flex gap-2 items-center'><AiOutlineDoubleRight className='text-amber-700'/><span>Docker</span></li>
                </ul>
              </div>
            </div>
          </section>
        
          <section>
            <div>
              <h4 className='text-xl text-center py-3 text-zinc-100 font-anaheim font-medium md:text-2xl'><span className='text-amber-700 font-bold tracking-wide'>02.</span> Projects</h4>
            </div>
            <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
              <div className='basis-1/3 flex-1'>
                <Image src={web1} className='rounded-lg object-cover' width={"100%"} height={"100%"} layout='responsive' />
              </div>
              <div className='basis-1/3 flex-1'>
                <Image src={web2} className='rounded-lg object-cover' width={"100%"} height={"100%"} layout='responsive' />
              </div>
              <div className='basis-1/3 flex-1'>
                <Image src={web3} className='rounded-lg object-cover' width={"100%"} height={"100%"} layout='responsive' />
              </div>
              <div className='basis-1/3 flex-1'>
                <Image src={web4} className='rounded-lg object-cover' width={"100%"} height={"100%"} layout='responsive' />
              </div>
              <div className='basis-1/3 flex-1'>
                <Image src={web5} className='rounded-lg object-cover' width={"100%"} height={"100%"} layout='responsive' />
              </div>
              <div className='basis-1/3 flex-1'>
                <Image src={web6} className='rounded-lg object-cover' width={"100%"} height={"100%"} layout='responsive' />
              </div>
            </div>
          </section>
          </div>
        </main>
      </div>
  )
}
