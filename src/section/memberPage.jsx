import React from 'react';
import { User, Mail, Linkedin, Instagram, ArrowRight, MonitorSmartphone, PenTool, Code, HandshakeIcon } from 'lucide-react';
import amanPicture from '/teamMembers/amanImg.jpg';
import TechStackTicker from '../components/TechStackTicker';

function MemberPage() {
	const techStack = [
		"C++",
		"Solidity",
		"SQL",
		"Java",
		"JavaScript",
		"ReactJS",
		"HTML5",
		"CSS3",
		"Git",
		"Blockchain",
		"Smart Contracts",
		"Web Development",
		"Full-Stack Development",
		"Machine Learning",
		"AI",
		"IPFS",
		"Node.js",
		"Express.js",
		"MongoDB",
		"REST APIs",
		"GraphQL",
		"Docker",
		"Firebase",
		"Next.js",
	  ];
	  
	return (
		<>
			<div className='bg-[#eeedec]'>
				<div className="w-full h-[102vh] rounded-b-[120px] border-b-1 bg-[#fcfcfc] border-b-slate-300">
					<div className='w-full h-[75vh] rounded-b-[120px] border-b-1 border-b-slate-300 bg-[#eeedec]'>
						<div id="nav" className='w-full h-[130px] flex flex-row justify-between items-center px-24'>
							<div className='flex flex-row justify-between items-center gap-6'>	 
								<h1 className='text-sm text-[#131313] font-NoirProLight'>trulyaman25@gmail.com</h1>
								<div className='flex flex-row gap-5'>
									<button className='text-[12px] px-6 py-4 bg-white font-albulaBold capitalize rounded-full hover:cursor-pointer'>copy email</button>
									<button className='text-[12px] px-6 py-4 bg-white font-albulaBold capitalize rounded-full hover:cursor-pointer'>resume</button>
								</div>
							</div>

							<div className='flex flex-row justify-between items-center gap-2'>	 
								<a href="" className='text-sm font-albulaRegular capitalize'>linkedin</a>
								<span className='text-slate-400'>/</span>
								<a href="" className='text-sm font-albulaRegular capitalize'>github</a>
								<span className='text-slate-400'>/</span>
								<a href="" className='text-sm font-albulaRegular capitalize'>instagram</a>
							</div>
						</div>

						<div className='w-full h-full flex flex-row justify-center pb-[300px] items-center'>
							<div className='flex flex-col justify-center items-center gap-6'>
								<img src={amanPicture} alt="Aman's Picture" className='w-[200px] h-[200px] border-5 border-white rounded-full'/>
								<h1 className='text-5xl capitalize font-FreeZoneBold tracking-wider mt-3'>aman  kumar</h1>
								<p className='text-3xl text-gray-500 font-FreeZoneRegular max-w-[600px] text-center'>Building digital experiences with Blockchain, AI, and Full-Stack Development.</p>
								<div className='flex flex-row justify-between items-center gap-10 mt-10'>
									<button className='bg-[#131313] text-white font-NoirProRegular text-xs px-14 py-6 rounded-full hover:cursor-pointer hover:bg-[#302f2f] transition-all ease-in-out'>
										leetcode
									</button>
									<button className='bg-[#131313] text-white font-NoirProRegular text-xs px-14 py-6 rounded-full hover:cursor-pointer hover:bg-[#302f2f] transition-all ease-in-out'>
										codechef
									</button>
									<button className='bg-[#131313] text-white font-NoirProRegular text-xs px-14 py-6 rounded-full hover:cursor-pointer hover:bg-[#302f2f] transition-all ease-in-out'>
										codolio
									</button>
									<button className='bg-[#131313] text-white font-NoirProRegular text-xs px-14 py-6 rounded-full hover:cursor-pointer hover:bg-[#302f2f] transition-all ease-in-out'>
										devfolio
									</button>
								</div>
							</div>
						</div>
					</div>

					<div id='techStackBar' className='w-full h-[230px] flex flex-row justify-center items-center'>
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