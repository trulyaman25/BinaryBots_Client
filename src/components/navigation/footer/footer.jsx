import { Linkedin, Instagram, Github, Timer } from 'lucide-react';
import CodeIcon from '/icons/code.png';
import BrandIcon from '/icons/brand.png';

function Footer() {
    const services = [
		{
			title: "Web Development",
			icon: <img src={CodeIcon} className="w-6 h-6 invert" />,
			description: "We build fast, responsive websites using modern technologies like ReactJS, ensuring seamless functionality and great user experience."
		},
		{
			title: "Brand Identity",
			icon: <img src={BrandIcon} className="w-6 h-6 invert" />,
			description: "We design logos, brand elements, and digital experiences to establish a strong and consistent online presence."
		},
		{
			title: "Quick Delivery",
			icon: <Timer className="w-6 h-6" />,
			description: "We ensure high-quality, timely project completion with efficient workflows and agile methodologies."
		}
	];

    return (
        <>
            <div className='bg-[#eeedec]'>
                <div id='footer' className="w-full flex flex-col justify-between rounded-t-[70px] lg:rounded-t-[120px] bg-[#fcfcfc] pt-10 sm:pt-20 pr-4 sm:pr-20 pl-4 sm:pl-20 pb-10">
                    <div className='rounded-t-[70px] lg:rounded-t-[120px] flex flex-col justify-center items-center gap-10'>
                        <div className='flex flex-col justify-center items-center gap-3'>
                            <h1 className='font-FreeZoneBold text-4xl sm:text-5xl text-center px-4 bg-gradient-to-r from-[#1d1d1d] via-[#383837] to-[#5E5D5D] bg-clip-text text-transparent'>Let's Build Something Amazing Together</h1>
                            <p className='font-FreeZoneRegular text-xl sm:text-2xl text-gray-600 max-w-[600px] text-center px-4'>Transform your business ideas into reality with custom web solutions</p>
                        </div>

                        <span className='w-[70%] h-[1px] bg-gray-300'></span>

                        <div className='w-full flex flex-col lg:flex-row justify-between items-start gap-10 xl:px-12 2xl:px-24'>
                            <div className='w-full py-8 px-4 lg:w-1/2 flex flex-col gap-6'>
                                <h2 className='font-FreeZoneBold text-center lg:text-start text-3xl sm:text-4xl bg-gradient-to-r from-[#1d1d1d] via-[#383837] to-[#5E5D5D] bg-clip-text text-transparent'>Services We Offer</h2>
                                <div className='flex flex-col gap-4'>
                                    {services.map((service, index) => (
                                        <div key={index} className='bg-white p-6 rounded-2xl border-1 border-transparent transition-all duration-300'>
                                            <div className='bg-[#131313] w-fit p-3 rounded-xl mb-4'>
                                                {service.icon}
                                            </div>
                                            <h3 className='font-albulaBold text-xl mb-2 text-[#131313]'>{service.title}</h3>
                                            <p className='font-albulaRegular text-gray-600 text-sm sm:text-base'>{service.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <span className='w-[90%] h-[1px] bg-gray-200 sm:hidden'></span>

                            <div className='w-full lg:w-1/2'>
                                <div className='py-8 px-4 transition-all duration-300'>
                                    <h2 className='font-FreeZoneBold text-3xl sm:text-4xl text-center lg:text-start mb-6 bg-gradient-to-r from-[#1d1d1d] via-[#383837] to-[#5E5D5D] bg-clip-text text-transparent'>Contact Us</h2>
                                    <form className='flex flex-col gap-4'>
                                        <div className='flex flex-row gap-4'>
                                            <input type="text" placeholder="First Name" required className='flex w-[50%] p-4 border-2 border-[#eeedec] font-albulaRegular focus:outline-none focus:ring-2 focus:ring-gray-300' />
                                            <input type="text" placeholder="Last Name" required className='flex w-[50%] p-4 border-2 border-[#eeedec] font-albulaRegular focus:outline-none focus:ring-2 focus:ring-gray-300' />
                                        </div>
                                        
                                        <input type="email" placeholder="Email Address" required className='flex-1 p-4 border-2 border-[#eeedec] font-albulaRegular focus:outline-none focus:ring-2 focus:ring-gray-300' />
                                        
                                        {/* <div className='flex gap-4'>
                                            <select name="countryCode" className="p-4 border-2 border-[#eeedec] font-albulaRegular focus:outline-none focus:ring-2 focus:ring-gray-300 bg-white w-[100px]" >
                                                <option value="+91">+91</option>
                                                <option value="+1">+1</option>
                                            </select>
                                            <input type="tel" placeholder="Phone Number" required className='flex-1 p-4 border-2 border-[#eeedec] font-albulaRegular focus:outline-none focus:ring-2 focus:ring-gray-300' />
                                        </div> */}

                                        <input type="text" placeholder="Company (Optional)" className='p-4 border-2 border-[#eeedec] font-albulaRegular focus:outline-none focus:ring-2 focus:ring-gray-300' />
                                        
                                        <textarea placeholder="Tell me about your project" required rows={10} className='p-4 border-2 border-[#eeedec] font-albulaRegular focus:outline-none focus:ring-2 focus:ring-gray-300 resize-none' />
                                        
                                        <button type="submit"className='bg-[#FED685] text-[#131313] font-NoirProRegular text-xs px-10 py-4 hover:cursor-pointer hover:bg-yellow-400 transition-all duration-300 ease-in-out' >
                                            SEND MESSAGE
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <span className='w-[90%] h-[1px] bg-gray-200'></span>

                        <div className='w-[90%] sm:w-[100%] lg:w-[90%] flex flex-col-reverse sm:flex-row justify-between items-center gap-10'>
                            <h1 className='text-gray-500 font-albulaLight text-center'>&copy; 2025 Binary Bots. All rights reserved</h1>
                            <div className='flex flex-row justify-between items-center gap-2 xs:gap-3'>	 
                                <a href="" className='bg-[#131313] p-2 rounded-full capitalize'>
                                    <Linkedin className='w-[20px] h-[20px] m-1 invert'/>
                                </a>
                                <a href="" className='bg-[#131313] p-2 rounded-full capitalize'>
                                    <Github className='w-[20px] h-[20px] m-1 invert'/>
                                </a>
                                <a href="" className='bg-[#131313] p-2 rounded-full capitalize'>
                                    <Instagram className='w-[20px] h-[20px] m-1 invert'/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;