'use client';
import React, { useState } from 'react';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillLinkedin, AiFillGithub, AiFillMail, AiOutlineDoubleRight, AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import Image from 'next/image';
import devfr from '../public/devfr.png';
import project1 from '../public/follow.png';
import project2 from '../public/coin.png';
import project3 from '../public/captura-countries.png';
import project4 from '../public/chatproject.png';



export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const DownloadButton = () => {
    return (
      <a href="../public/resume.pdf" download>
        <button>Descargar PDF</button>
      </a>
    );
  };

  return (
      <div className={darkMode ? 'dark' : ''}>
        <main className=' bg-slate-800 px-4 md:px-8'>
          <div>
          <section className="min-h-screen">
            <nav className={'py-10 mb-12 flex justify-end font-anaheim'}>
              <button className='md:hidden z-50' onClick={toggleMenu}>
                {isMenuOpen ? (<p className='text-white text-2xl'><AiOutlineClose/></p>) : (<p className='text-white text-2xl'><AiOutlineMenu/></p>)}
              </button>
              {/* <h1 className='text-xl font-burtons'>welcome,</h1> */}
              <ul className={`md:flex md:justify-around md:gap-10 hidden absolute py-4 md:relative`}>
                {/* <li>
                  <BsFillMoonStarsFill className='cursor-pointer text-2xl' onClick={() => setDarkMode(!darkMode)}/>
                </li> */}
                <li className='text-zinc-400 cursor-pointer hover:text-white'><span className='text-amber-700 font-bold tracking-wide'>01.</span> About</li>
                <li className='text-zinc-400 cursor-pointer hover:text-white'><span className='text-amber-700 font-bold tracking-wide'>02.</span> Projects</li>
                <li className='text-zinc-400 cursor-pointer hover:text-white'><span className='text-amber-700 font-bold tracking-wide'>03.</span> Chat with AI</li>
                <li className='text-zinc-400 cursor-pointer hover:text-white'><span className='text-amber-700 font-bold tracking-wide'>04.</span> Contact</li>
                <li><a href="/resume.pdf" className='border-2 border-amber-700 rounded-sm text-white px-4 py-2 ml-4 hover:bg-amber-700 transition-bg cursor-pointer' download>Resume</a></li>
              </ul>
              {isMenuOpen && (
                <div
                className='md:hidden w-full h-full absolute inset-0 bg-slate-800 z-40'
                  onClick={toggleMenu}>
                    <ul className='flex flex-col justify-center items-center align-middle h-full gap-10'>
                      <li className='text-zinc-400 text-4xl cursor-pointer hover:text-white'><span className='text-amber-700 font-bold tracking-wide'>01.</span> About</li>
                      <li className='text-zinc-400 text-4xl cursor-pointer hover:text-white'><span className='text-amber-700 font-bold tracking-wide'>02.</span> Projects</li>
                      <li className='text-zinc-400 text-4xl cursor-pointer hover:text-white'><span className='text-amber-700 font-bold tracking-wide'>03.</span> Chat with AI</li>
                      <li className='text-zinc-400 text-4xl cursor-pointer hover:text-white'><span className='text-amber-700 font-bold tracking-wide'>04.</span> Contact</li>
                      <li className='py-20'><a href="/resume.pdf" className='border-2 border-amber-700 rounded-sm text-white text-4xl px-4 py-2 ml-4 hover:bg-amber-700 transition-bg'>Download Resume</a></li>
                    </ul>
                  </div>
              )}
            </nav>
            <div className='flex flex-col-reverse md:flex-row align-middle'>
              <div className='text-left p-10 flex flex-col justify-center'>
                <h4 className='text-3xl py-2 text-zinc-400 font-anaheim font-medium md:text-2xl'>Hi, my name is</h4>
                <h2 className='text-6xl py-2 text-zinc-100 font-firaSans font-bold md:text-6xl'>Francisco Di Nucci</h2>
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
              <div className='relative mx-auto rounded-[70%/60%_45%_80%_90%] md:rounded-[70%/60%_45%_65%_90%] drop-shadow-[0px_15px_3px_rgba(0,0,0,0.25)] w-40 h-40 md:my-20 overflow-hidden md:h-96 md:w-96'>
                <Image src={devfr} layout='fill' objectFit='cover' alt=''/>
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
            <div className='grid grid-cols-1 gap-10 py-10 relative md:grid-cols-2 md:gap-10 md:py-10'>
              <div className='relative group'>
                <Image src={project1} className='rounded-lg object-cover h-80 w-full transform transition-transform duration-500 group-hover:scale-105' layout='responsive' alt='' />
                <div className='rounded-lg absolute inset-0 bg-black bg-opacity-50 opacity-0 transform transition-opacity duration-500 group-hover:opacity-100 group-hover:scale-105 flex flex-col justify-end'>
                  <div className='flex flex-col md:gap-4 p-6 text-white'>
                    <h3 className='text-l md:text-2xl font-anaheim font-bold'>Follow The Money</h3>
                    <p className='font-firaSans text-xs md:text-l'>User fiendly app to track your incomes, expenses and delve into transaction details. Simplify money management on the go.</p>
                    <p className='font-firaSans text-xs md:text-l'>NextJS, React, Tailwindcss, Firebase Authentication and Firestore.</p>
                    <a href="http://followthemoney.vercel.app" className='font-anaheim font-bold text-amber-700'>followthemoney.vercel.app</a>
                  </div>
                </div>
              </div>
              <div className='relative group'>
                <Image src={project2} className='rounded-lg object-cover h-80 w-full transform transition-transform duration-500 group-hover:scale-105' layout='responsive' alt='' />
                <div className='rounded-lg absolute inset-0 bg-black bg-opacity-50 opacity-0 transform transition-transform transition-opacity duration-500 group-hover:opacity-100 group-hover:scale-105 flex flex-col justify-end'>
                  <div className='flex flex-col md:gap-4 p-6 text-white'>
                      <h3 className='text-l md:text-2xl font-anaheim font-bold'>Crypto Prices</h3>
                      <p className='font-firaSans text-xs md:text-l'>Handy Cryptocoin Price Tracker Connected to CoinGecko API</p>
                      <p className='font-firaSans text-xs md:text-l'>React Native</p>
                  </div>
                </div>
              </div>
              <div className='relative group'>
                <Image src={project3} className='rounded-lg object-cover h-80 w-full transform transition-transform duration-500 group-hover:scale-105' layout='responsive' alt='' />
                <div className='rounded-lg absolute inset-0 bg-black bg-opacity-50 opacity-0 transform transition-transform transition-opacity duration-500 group-hover:opacity-100 group-hover:scale-105 flex flex-col justify-end'>
                  <div className='flex flex-col md:gap-4 p-6 text-white'>
                      <h3 className='text-l md:text-2xl font-anaheim font-bold'>Countries</h3>
                      <p className='font-firaSans text-xs md:text-l'>PERN app made for Soy Henry Institution. Discover countries worldwide through an API-connected app. Access country info, sorted by continent. Create, store, and manage personalized activities for each country in a streamlined interface. </p>
                      <p className='font-firaSans text-xs md:text-l'>NodeJS, React, Express, Postgres, Redux.</p>
                      <a href="http://pi-countries-zeta-rosy.vercel.app" className='font-anaheim font-bold text-amber-700'>pi-countries-zeta-rosy.vercel.app</a>
                  </div>
                </div>
              </div>
              <div className='relative group'>
                <Image src={project4} className='rounded-lg object-cover h-80 w-full transform transition-transform duration-500 group-hover:scale-105' layout='responsive' alt='' />
                <div className='rounded-lg absolute inset-0 bg-black bg-opacity-50 opacity-0 transform transition-opacity duration-500 group-hover:opacity-100 group-hover:scale-105 flex flex-col justify-end'>
                  <div className='flex flex-col md:gap-4 p-6 text-white'>
                        <h3 className='text-l md:text-2xl font-anaheim font-bold'>Chat</h3>
                        <p className='font-firaSans text-l md:text-l'>Real time experimental chat. </p>
                        <p className='font-firaSans text-l md:text-l'>NodeJS, Express, React, Socket.io, Tailwindcss</p>
                    </div>
                </div>
              </div>
            </div>
          </section>
          </div>
        </main>
      </div>
  )
}
