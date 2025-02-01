import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Mail, Linkedin, Instagram, Github, ArrowRight, MonitorSmartphone, PenTool, Code, HandshakeIcon, Heart, MessageSquare, Building2, Timer } from 'lucide-react';
import amanPicture from '/teamMembers/amanImg.jpg';
import TechStackTicker from '../components/TechStackTicker';


function MemberPage() {
    const [likedProjects, setLikedProjects] = useState(new Set());
    
	const techStack = [
		"Sql",
		"Full-Stack Web Developer",
		"Blockchain",
		"Smart Contracts",
		"Solidity",
		"C++",
		"Java",
		"JavaScript",
		"ReactJS",
		"Github",
		"Ipfs",
		"Node.js",
		"Express.js",
		"MongoDB",
		"Rest Api's",
		"Docker",
		"Firebase",
	];

	const projects = [
		{
			title: "Check Mate",
			organization: "Binary Bots",
			description: "CheckMate automates document verification with AI and blockchain, storing verified files on IPFS and providing tamper-proof access, fast verification, and a secure document wallet.",
			likes: 25,
			icon: "https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fb6d5c300e40c4b46a7252ebc2e2ffa1e%2Fprojects%2Ff5dfd630bf984675b19a5d55f6d29e9c%2F6062ecbd-26a7-4d4e-b183-311e4850a832.jpeg&w=1440&q=75",
			projectLink: "https://devfolio.co/projects/check-mate-d1ea",
		},
		{
		  title: "Well Wise",
		  organization: "Binary Bots",
		  description: "Well Wise is a healthcare platform that emphasizes mental health detection and management through AI-driven tools. it aims to tackle the challenge of diagnosing and managing depression.",
		  likes: 0,
		  icon: "https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fdd6fb6207c72492cba2fa39d56197b71%2Fprojects%2Ff5dfd630bf984675b19a5d55f6d29e9c%2Fa444e1c0-cac9-4b6f-a7e2-ce584b5bc3cf.jpeg&w=1440&q=75",
		  projectLink: "https://devfolio.co/projects/well-wise-50a2",
		},
		{
			title: "Key Vault",
			organization: "Aman, Ansh",
			description: "KeyVault is a secure password manager built with ReactJS, Tailwind, MongoDB, Express, and Node.js. It enables biometric authentication such as (fingerprint, Face ID) and stores data in encrypted form.",
			likes: 0,
			icon: "https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fprojects%2Fcc472c87f93146df8d80414f355fb46e%2F9df516fc-b36b-42eb-8fde-a69545890aef.jpeg&w=1440&q=75",
			projectLink: "https://devfolio.co/projects/keyvault-825c",
		}
	]

    const handleLike = (projectTitle) => {
        setLikedProjects(prev => {
            const newLiked = new Set(prev);
            if (newLiked.has(projectTitle)) {
                newLiked.delete(projectTitle);
            } else {
                newLiked.add(projectTitle);
            }
            return newLiked;
        });
    };
	  
	return (
		<>
			<div className='bg-[#eeedec]'>
				<div className="w-full h-[118vh] xs:h-[102vh] rounded-b-[70px] lg:rounded-b-[120px] border-b-1 bg-[#fcfcfc] border-b-slate-300">
					<div className='w-full h-[100vh] xs:h-[75vh] flex flex-col rounded-b-[70px] lg:rounded-b-[120px] border-b-1 border-b-slate-300 bg-[#eeedec]'>
						<div id="nav" className='w-full min-h-[100px] sm:min-h-[130px] flex flex-row justify-between items-center px-4 sm:px-10 md:px-16 lg:px-24'>
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

						<div id='introSection' className='flex-grow flex flex-col justify-center items-center gap-3 sm:gap-6 px-4 sm:px-10'>
							<img src={amanPicture} alt="Aman's Picture" className='w-[200px] h-[200px] border-5 border-white rounded-full'/>
							<div className='flex flex-col justify-center items-center gap-1 sm:gap-3'>
							<h1 className="text-3xl sm:text-5xl capitalize font-FreeZoneBold tracking-wider mt-3 bg-gradient-to-r from-[#1d1d1d] via-[#383837] to-[#5E5D5D] bg-clip-text text-transparent">aman kumar</h1>

								<p className='text-2xl sm:text-4xl font-FreeZoneRegular max-w-[600px] text-center bg-gradient-to-r from-[#1d1d1d] via-[#383837] to-[#5E5D5D] bg-clip-text text-transparent'>Building digital experiences with Blockchain, AI, and Full-Stack Development.</p>
								
								<div className='flex flex-col sm:flex-row justify-between items-center gap-3 sm:border-1 border-gray-500 p-1 rounded-full sm:gap-7 mt-4 transition-none'>
									<button className='bg-[#131313] text-white font-NoirProRegular text-xs px-10 py-4 rounded-full hover:cursor-pointer hover:bg-[#302f2f] transition-all duration-300 ease-in-out'>
										coding profiles
									</button>
									<Link to='/' className='bg-[#131313] text-white font-NoirProRegular text-xs px-10 py-4 rounded-full hover:cursor-pointer hover:bg-[#302f2f] transition-all duration-300 ease-in-out'>
										home
									</Link>
								</div>
							</div>
						</div>
					</div>

					<div id='techStackBar' className='w-full h-[120px] xs:h-[230px] flex flex-row justify-center items-center'>
                        <TechStackTicker techStack={techStack} />
                    </div>
				</div>

				<div id='projects' className='w-full px-4 py-10 lg:py-24 lg:px-24 flex flex-col justify-start items-center'>
					<div className='flex flex-col justify-evenly items-center gap-3'>
						<h1 className='font-FreeZoneBold text-center text-4xl xs:text-[40px] sm:text-5xl bg-gradient-to-r from-[#1d1d1d] via-[#383837] to-[#5E5D5D] bg-clip-text text-transparent'>Projects by Aman Kumar</h1>
						<h1 className='font-FreeZoneMedium text-2xl sm:text-3xl text-center bg-gradient-to-r from-[#1d1d1d] via-[#383837] to-[#5E5D5D] bg-clip-text text-transparent'>Code. Create. Conquer.</h1>
					</div>

					<span className='w-[70%] h-[1px] bg-gray-300 mt-10'></span>

					<div id='devFolioCards'>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 mt-10">
							{projects.map((project, index) => (
								<div key={index} className="bg-white rounded-2xl p-7 xs:p-10 max-w-[500px] border-1 border-transparent hover:border-1 hover:border-gray-400 transition-none">
									<div className="flex justify-between items-start">
										<div className="flex gap-4">
											<img src={project.icon} alt={`${project.title} icon`} className="w-16 h-16 rounded-lg object-cover" />
											<div>
												<h3 className="text-xl sm:text-2xl font-albulaBold text-[#131313]">{project.title}</h3>
												<p className="text-xs sm:text-md lg:text-[15px] font-albulaRegular text-[#383837]">By {project.organization}</p>
											</div>

										</div>
										
										<div onClick={() => handleLike(project.title)}className="flex flex-col w-[60px] h-[60px] justify-center items-center gap-2 bg-white rounded-md shadow-sm border hover:shadow-md hover:cursor-pointer border-gray-100" >
                                            <Heart className={`w-4 h-4 ${likedProjects.has(project.title) ? 'text-red-500 fill-red-500' : 'text-gray-600'}`}/>
                                            <span className="text-sm font-albulaHeavy text-gray-900">
                                                {project.likes + (likedProjects.has(project.title) ? 1 : 0)}
                                            </span>
                                        </div>
									</div>

									<p className="text-gray-600 mt-6 mb-6 font-albulaRegular line-clamp-3 text-sm sm:text-md">{project.description}</p>

									<div>
										<a href={project.projectLink} className='px-6 sm:px-7 py-3 border-1 text-sm font-albulaRegular border-gray-300 hover:border-1 hover:border-gray-500 rounded-md hover:cursor-pointer'>Learn More...</a>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default MemberPage;