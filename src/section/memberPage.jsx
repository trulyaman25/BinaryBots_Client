import React from 'react';
import { User, Mail, Linkedin, Instagram, Github, ArrowRight, MonitorSmartphone, PenTool, Code, HandshakeIcon } from 'lucide-react';
import amanPicture from '/teamMembers/amanImg.jpg';
import TechStackTicker from '../components/TechStackTicker';

function MemberPage() {
	const techStack = [
		"Sql",
		"Web Development",
		"Full-Stack Development",
		"Blockchain",
		"Smart Contracts",
		"Solidity",
		"C++",
		"Java",
		"JavaScript",
		"ReactJS",
		"Html",
		"Css",
		"Git",
		"Machine Learning",
		"Ai",
		"Ipfs",
		"Node.js",
		"Express.js",
		"MongoDB",
		"Rest Api's",
		"Docker",
		"Firebase",
		"Next.js",
	  ];
	  
	return (
		<>
			<div className='bg-[#eeedec]'>
				<div className="w-full h-[102vh] rounded-b-[70px] lg:rounded-b-[120px] border-b-1 bg-[#fcfcfc] border-b-slate-300">
					<div className='w-full h-[75vh] rounded-b-[70px] lg:rounded-b-[120px] border-b-1 border-b-slate-300 bg-[#eeedec]'>
						<div id="nav" className='w-full h-[130px] flex flex-row justify-between items-center px-4 sm:px-10 md:px-16 lg:px-24'>
							<div className='flex flex-row justify-between items-center gap-1 xs:gap-3'>	 
								<div className='bg-[#eeedec] border-1 border-gray-50 p-1 rounded-full md:pl-5 flex flex-row justify-between items-center gap-4'>
									<h1 className='text-sm text-[#131313] font-NoirProLight hidden md:block'>trulyaman25@gmail.com</h1>
									<button className='text-[12px] px-7 py-3 md:px-9 bg-[#131313] md:bg-white text-[#fcfcfc] md:text-[#131313] font-FreeZoneBold capitalize rounded-full hover:cursor-pointer transition-all ease-in-out duration-100'> <span className='hidden'>copy</span> email</button>
								</div>
								
								<div className='bg-[#eeedec] border-1 border-gray-50 p-1 rounded-full flex flex-row justify-between items-center gap-4'>
									<button className='text-[12px] px-7 py-3 md:px-9 bg-white font-FreeZoneBold uppercase rounded-full hover:cursor-pointer transition-all duration-300 ease-in-out'>cv</button>
								</div>
								
							</div>

							<div className='flex flex-row justify-between items-center gap-2 xs:gap-3 md:hidden'>	 
								<a href="" className='bg-[#fcfcfc] p-2 rounded-full capitalize'>
									<Linkedin className='w-[20px] h-[20px] m-1'/>
								</a>
								<a href="" className='bg-[#fcfcfc] p-2 rounded-full capitalize'>
									<Github className='w-[20px] h-[20px] m-1'/>
								</a>
								<a href="" className='bg-[#fcfcfc] p-2 rounded-full capitalize'>
									<Instagram className='w-[20px] h-[20px] m-1'/>
								</a>
							</div>

							<div className='flex-row justify-between items-center gap-2 hidden md:flex'>	 
								<a href="" className='text-base text-gray-700 font-FreeZoneMedium capitalize hover:text-gray-600 transition-all duration-300 ease-in-out'>linkedin</a>
								<span className='text-slate-400'>/</span>
								<a href="" className='text-base text-gray-700 font-FreeZoneMedium capitalize hover:text-gray-600 transition-all duration-300 ease-in-out'>github</a>
								<span className='text-slate-400'>/</span>
								<a href="" className='text-base text-gray-700 font-FreeZoneMedium capitalize hover:text-gray-600 transition-all duration-300 ease-in-out'>instagram</a>
							</div>
						</div>

						<div className='flex flex-col justify-center items-center gap-6 px-10'>
							<img src={amanPicture} alt="Aman's Picture" className='w-[200px] h-[200px] border-5 border-white rounded-full'/>
							<div className='flex flex-col justify-center items-center gap-3'>
								<h1 className='text-3xl sm:text-5xl capitalize font-FreeZoneBold tracking-wider mt-3'>aman  kumar</h1>
								<p className='text-2xl sm:text-4xl text-gray-500 font-FreeZoneRegular max-w-[600px] text-center'>Building digital experiences with Blockchain, AI, and Full-Stack Development.</p>
								
								<div className='flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-7 mt-4'>
									<button className='bg-[#131313] text-white font-NoirProRegular text-xs px-10 py-4 rounded-full hover:cursor-pointer hover:bg-[#302f2f] hover:scale-105 transition-all duration-300 ease-in-out'>
										coding profiles
									</button>
									<button className='bg-[#131313] text-white font-NoirProRegular text-xs px-10 py-4 rounded-full hover:cursor-pointer hover:bg-[#302f2f] hover:scale-105 transition-all duration-300 ease-in-out'>
										home
									</button>
								</div>

								{/* <div className='flex flex-row justify-between items-center gap-10 mt-10'>
									<button className='bg-[#131313] text-white font-NoirProRegular text-xs px-10 py-4 rounded-full hover:cursor-pointer hover:bg-[#302f2f] hover:scale-105 transition-all duration-300 ease-in-out'>
										leetcode
									</button>
									<button className='bg-[#131313] text-white font-NoirProRegular text-xs px-10 py-4 rounded-full hover:cursor-pointer hover:bg-[#302f2f] hover:scale-105 transition-all duration-300 ease-in-out'>
										codechef
									</button>
									<button className='bg-[#131313] text-white font-NoirProRegular text-xs px-10 py-4 rounded-full hover:cursor-pointer hover:bg-[#302f2f] hover:scale-105 transition-all duration-300 ease-in-out'>
										codolio
									</button>
									<button className='bg-[#131313] text-white font-NoirProRegular text-xs px-10 py-4 rounded-full hover:cursor-pointer hover:bg-[#302f2f] hover:scale-105 transition-all duration-300 ease-in-out'>
										devfolio
									</button>
								</div> */}
							</div>
						</div>
					</div>

					<div id='techStackBar' className='w-full h-[100px] sm:h-[230px] flex flex-row justify-center items-center'>
                        <TechStackTicker techStack={techStack} />
                    </div>
				</div>

				<div className='w-full h-[100vh] flex flex-col justify-center items-center'>
					
				</div>
			</div>
		</>
	);
}

export default MemberPage;