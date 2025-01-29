import React from 'react';
import { User, Mail, Linkedin, Instagram, ArrowRight, MonitorSmartphone, PenTool, Code, HandshakeIcon } from 'lucide-react';

function MemberPage() {
	return (
		<>
			<div className="min-h-screen bg-white">
				<header className="p-6 flex justify-between items-center max-w-7xl mx-auto">
					<div className="flex items-center space-x-2">
						<Mail className="w-5 h-5" />
						<span className="text-sm text-gray-600">contact@example.com</span>
					</div>
					
					<div className="flex items-center space-x-4">
						<a href="#" className="text-gray-600 hover:text-gray-900"><Linkedin className="w-5 h-5" /></a>
						<a href="#" className="text-gray-600 hover:text-gray-900"><Instagram className="w-5 h-5" /></a>
					</div>
				</header>

				<main className="max-w-7xl mx-auto px-6 py-20 text-center">
					<div className="mb-8">
						<img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80" alt="Profile" className="w-32 h-32 rounded-full mx-auto mb-6 object-cover" />
						<span className="inline-flex items-center bg-gray-100 px-4 py-1 rounded-full text-sm">
							<User className="w-4 h-4 mr-2" />
							Member Profile
						</span>
					</div>

					<h1 className="text-5xl font-bold mb-6">
						Building digital products, brands, <br /> and experience.
					</h1>

					<button className="bg-black text-white px-6 py-3 rounded-full inline-flex items-center hover:bg-gray-800 transition-colors">
						Latest Work <ArrowRight className="w-4 h-4 ml-2" />
					</button>

					<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mt-32 text-left">
						<div className="space-y-4">
							<MonitorSmartphone className="w-8 h-8" />
							<h3 className="font-semibold text-xl">UX & UI</h3>
							<p className="text-gray-600 text-sm">
								Designing interfaces that are intuitive, efficient, and enjoyable to use
							</p>
						</div>

						<div className="space-y-4">
							<Code className="w-8 h-8" />
							<h3 className="font-semibold text-xl">Web & Mobile App</h3>
							<p className="text-gray-600 text-sm">
								Transforming ideas into exceptional web and mobile app experiences
							</p>
						</div>

						<div className="space-y-4">
							<PenTool className="w-8 h-8" />
							<h3 className="font-semibold text-xl">Design & Creative</h3>
							<p className="text-gray-600 text-sm">
								Crafting visually stunning designs that connect with your audience
							</p>
						</div>

						<div className="space-y-4">
							<Code className="w-8 h-8" />
							<h3 className="font-semibold text-xl">Development</h3>
							<p className="text-gray-600 text-sm">
								Bringing your vision to life with the latest technology and design trends
							</p>
						</div>
					</div>

					<div className="mt-32 text-center">
						<HandshakeIcon className="w-12 h-12 mx-auto mb-6" />
						<h2 className="text-4xl font-bold mb-8">Tell me about your next project</h2>
						<div className="flex justify-center space-x-4">
							<button className="bg-black text-white px-6 py-3 rounded-full inline-flex items-center hover:bg-gray-800 transition-colors">
								Email Me
								<ArrowRight className="w-4 h-4 ml-2" />
							</button>

							<button className="bg-gray-100 text-gray-900 px-6 py-3 rounded-full inline-flex items-center hover:bg-gray-200 transition-colors">
								WhatsApp
							</button>
						</div>
					</div>
				</main>

				<footer className="max-w-7xl mx-auto px-6 py-8 mt-20 border-t">
					<div className="flex justify-between items-center">
						<p className="text-sm text-gray-600">© 2024 All rights reserved</p>
						<div className="flex items-center space-x-4">
							<a href="#" className="text-gray-600 hover:text-gray-900"><Linkedin className="w-5 h-5" /></a>
							<a href="#" className="text-gray-600 hover:text-gray-900"><Instagram className="w-5 h-5" /></a>
						</div>
					</div>
				</footer>
			</div>
		</>
	);
}

export default MemberPage;