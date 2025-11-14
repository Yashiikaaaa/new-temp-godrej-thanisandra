
'use client'
import EnquiryModal from "@/components/EnquiryModal"
import { useState } from "react";

export default function Introduction() {
  const [isModalOpen, setIsModalOpen] =  useState(false);
  const [title, setTitle] = useState("Download Brochure");
  return (
    <>
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2  lg:gap-12 items-center">
          {/* Images */}
          <div className="relative h-[500px] md:h-[600px] hidden md:block">
            {/* Top Left Image - Aerial View */}
            <div className="absolute top-0 left-0 w-[80%] h-[80%] z-10">
              <img
                src="/assets/introduction/image1.jpg"
                alt="Godrej Aerial View"
                className="w-full h-full object-cover rounded-[4px] shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Bottom Right Image - Residential Building */}
            <div className="absolute bottom-0 right-0 w-[55%] h-[50%] z-20">
              <img
                src="/assets/introduction/image2.png"
                alt="Godrej Residential Building"
                className="w-full h-full object-cover rounded-[4px] shadow-xl  hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-extrabold mb-6 text-[#221628] font-['Urbanist']">
              Launching Soon! - Godrej Thanisandra
            </h2>
            
            <p className="text-[#575556] mb-4 leading-relaxed text-sm md:text-md font-['Urbanist']">
             Located in North Bengaluru’s prime growth corridor, just 10 minutes from Manyata Tech Park, with excellent connectivity to ORR, Hebbal, Airport Road, and upcoming metro stations. The project is close to schools, hospitals, IT parks, and shopping zones.       
            </p>
            
            <p className="text-[#575556] mb-8 leading-relaxed text-sm md:text-md font-['Urbanist']">
            Spanning 7 acres with 10 towers, the development offers 550+ residences, featuring 2B + G + 13 floors, green open spaces, and a clubhouse with wellness amenities.    
            </p>

            {/* Buttons */}
            <div className="flex gap-[11px] md:gap-4 flex-wrap mb-6 md:mb-8 w-full justify-between md:py-2 font-['Urbanist']">
              <button className="bg-primary text-md  text-white px-4 md:px-8 py-3 rounded-[4px] font-semibold transition-colors flex items-center justify-center gap-1 md:gap-2 shadow-md cursor-pointer min-w-[177px] flex-1 sm:flex-initial sm:w-auto md:min-w-[290px]"
                onClick={()=>{setIsModalOpen(true)
                  setTitle("Download Brochure")
                }}>
                <img src="/download.svg" alt="Brochure Icon" className="w-3.5 h-3.5 md:w-4.5 md:h-4.5" />
                Download Brochure
              </button>
              <button className="border text-md border-primary text-primary px-8 py-3 rounded-[4px] font-semibold transition-colors flex items-center justify-center gap-1 md:gap-2 cursor-pointer min-w-[177px] flex-1 sm:flex-initial sm:w-auto md:min-w-[290px]"
                  onClick={()=>{setIsModalOpen(true)
                  setTitle("Virtual Tour")
                  }}  >
                <img src="/camera.svg" alt="Virtual Tour Icon" className="w-3.5 h-3.5 md:w-4.5 md:h-4.5" />
                Virtual Tour
              </button>
            </div>

            <div  className='border mb-8'/>
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 font-['Urbanist']">
              <div className="text-center">
                <p className="text-lg md:text-[42px] font-bold text-gray-900 mb-2">125+</p>
                <p className="text-md text-[#575556]">Years of Legacy</p>
              </div>
              <div className="text-center">
                <p className="text-lg md:text-[42px] font-bold text-gray-900 mb-2">85+</p>
                <p className="text-md text-[#575556]">Projects Delivered</p>
              </div>
              <div className="text-center">
                <p className="text-lg md:text-[42px] font-bold text-gray-900 mb-2">100M+</p>
                <p className="text-md text-[#575556]">sqft Developed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <EnquiryModal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      title={title}
      subtitle={title === "Download Brochure" ? "Enter your name and number to get the brochure download instantly" : "Experience a virtual tour of our premium villa plots."}
      openedEventTitle = {title === "Download Brochure" ? "Contact_form_opend_overview_1" : "Contact_form_opend_overview_2"}
      submitEventTitle = {title === "Download Brochure" ? "Contact_form_submit_overview_1" : "Contact_form_submit_overview_2"}
    />
    </>
  )
}