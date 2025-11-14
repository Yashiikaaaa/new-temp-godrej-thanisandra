export default function Amenities() {
  const Desktopamenities = [
    { 
      name: "Lush Greenery", 
      icon: '/lush-greenery.svg',
      colored: false
    },
    { 
      name: "CCTV Surveillance", 
      icon: '/cctv.svg',
      colored: true 
    },
    { 
      name: "Solar Street Lights", 
      icon: '/solar.svg',
      colored: false 
    },
    { 
      name: "24 x 7 Security", 
      icon: '/24x7.svg',
      colored: true 
    },
    { 
      name: "Open Spaces", 
      icon: '/open-spaces.svg',
      colored: true 
    },
    { 
      name: "Swimming Pools", 
      icon: '/pool.svg',
      colored: false 
    },
    { 
      name: "Luxury Clubhouse", 
      icon: '/clubhouse.svg',
      colored: true 
    },
    { 
      name: "Outdoor Courts", 
      icon: '/court.svg',
      colored: false 
    },
  ]
   const Mobileamenities = [
    { 
      name: "Lush Greenery", 
      icon: '/lush-greenery.svg',
      colored: false 
    },
    { 
      name: "CCTV Surveillance", 
      icon: '/cctv.svg',
      colored: true 
    },
    { 
      name: "24 x 7 Security", 
      icon: '/24x7.svg',
      colored: true 
    },
    { 
      name: "Solar Street Lights", 
      icon: '/solar.svg',
      colored: false 
    },
    { 
      name: "Swimming Pools", 
      icon: '/pool.svg',
      colored: false 
    },
    { 
      name: "Open Spaces", 
      icon: '/open-spaces.svg',
      colored: true 
    },
    { 
      name: "Luxury Clubhouse", 
      icon: '/clubhouse.svg',
      colored: true 
    },
    { 
      name: "Outdoor Courts", 
      icon: '/court.svg',
      colored: false 
    },
  ]

  const amenities = typeof window !== 'undefined' && window.innerWidth >= 768 ? Desktopamenities : Mobileamenities;

  return (
    <section id="amenities" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-0">
        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl lg:text-[44px] font-extrabold mb-3 md:mb-4 text-[#221628] font-['Urbanist']">
            Amenities & Facilities
          </h2>
          <p className="text-[#433F3E] text-[14px] md:text-lg font-medium font-['Urbanist'] max-w-3xl">
            It offers its residents access to an exclusive array of recreational and sporting facilities that could rival any resort.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          { amenities.map((amenity, index) => (
            <div
              key={index}
              className={`relative rounded-[4px]   border transition-all duration-300 hover:shadow-xl group cursor-pointer
                ${amenity.colored
                  ? "bg-primary text-white border-primary hover:bg-[#9a1751]"
                  : "bg-white text-[#221628] border-primary hover:border-[#9a1751]"
                }
              `}
            >
              <div className="flex flex-col md:flex-row justify-between items-center h-full p-4 md:px-5 md:py-4 gap-2">
                <div className="flex md:hidden justify-end items-end w-full">
                  <img 
                    src={amenity.icon} 
                    alt={amenity.name} 
                    className={`w-10 h-10 md:w-12 md:h-12 object-contain ${
                      amenity.colored ? 'filter brightness-0 invert' : ''
                    }`}
                  />
                </div>
                {/* Title */}
                <div className="w-full">
                <h3 className={`text-xl md:text-[28px] lg:text-[28pxl items-start font-bold font-['Urbanist']  w-[80%] md:w-full leading-tight ${
                  amenity.colored ? "text-white" : "text-[#221628]"
                }`}>
                  {amenity.name}
                </h3>
                </div>
                
                {/* Icon */}
                <div className="hidden md:flex justify-end items-end w-full md:w-auto">
                  <img 
                    src={amenity.icon} 
                    alt={amenity.name} 
                    className={`w-10 h-10 md:w-12 md:h-12 object-contain ${
                      amenity.colored ? 'filter brightness-0 invert' : ''
                    }`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}