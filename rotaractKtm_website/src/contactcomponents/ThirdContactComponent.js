import React from 'react'
import messanger from '../assets/messenger_3128368.png'
import whatsapp from '../assets/whatsapp_1231202.png'
function ThirdContactComponent() {
    return (
        <div className="w-screen bg-[#F9FAFB] py-16 flex flex-col items-center">
            
            {/* Title */}
            <p className="font-outfit text-[36px] leading-[40px] font-bold text-[#3B519B] text-center">
                Let's Make a Difference Together
            </p>

            {/* Description */}
            <p className="font-inter text-[16px] leading-[24px] font-normal text-[#4B5563] 
                text-center max-w-[768px] mt-6">
                We welcome individuals who are passionate about community service and making a positive impact. 
                Reach out to us through any of our contact channels.
            </p>

            {/* Button Row */}
            <div className="flex gap-6 mt-10">

                {/* Button 1 */}
                <button
                    className="w-[363px] h-[58px] px-3 
                    flex items-center justify-center gap-5 
                    font-inter text-[18px] leading-[28px] font-medium text-[#374151] 
                    bg-white rounded-[10px] border border-[#E5E7EB]
                    shadow-[0px_0px_1px_rgba(23,26,31,0.87),0px_0px_2px_rgba(23,26,31,0.08)]
                    hover:bg-white active:bg-white disabled:opacity-40">

                     <a href="https://www.linkedin.com/company/rotaract-kathmandu/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
                                                        <div className='flex gap-4'>
                                                              <img src={whatsapp} alt="LinkedIn" className="w-9 h-9 rounded-full cursor-pointer" />
                         <span>Contact us on WhatsApp</span>                    
                                                            </div>          </a>
                   
                </button>

                {/* Button 2 */}
                <button
                    className="w-[363px] h-[58px] px-3 
                    flex items-center justify-center gap-5 
                    font-inter text-[18px] leading-[28px] font-medium text-[#374151] 
                    bg-white rounded-[10px] border border-[#E5E7EB]
                    shadow-[0px_0px_1px_rgba(23,26,31,0.87),0px_0px_2px_rgba(23,26,31,0.08)]
                    hover:bg-white active:bg-white disabled:opacity-40">

                    <a href="https://www.messenger.com/t/256744404356757" target="_blank" rel="noopener noreferrer">
                                                       <div className='flex gap-4 '>  <img src={messanger
                                                         } alt="LinkedIn" className="w-9 h-9 rounded-full cursor-pointer" />
                                                          <span>Contact us on Messanger</span></div>
                                                     </a>
                   
                </button>

            </div>

        </div>
    )
}

export default ThirdContactComponent
