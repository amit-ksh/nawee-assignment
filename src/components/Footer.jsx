import React from 'react'

const contacts = [
  "Logos State & Edo State, Nigeria",
  "contact@naweeng.com",
  "+2347025544587"
]

const services = [
  {
    title: "Send Parcel",
    url: "#"
  },
  {
    title: "Customers",
    url: "#"
  },
  {
    title: "Agents",
    url: "#"
  },
  {
    title: "Booths",
    url: "#"
  },  
]

const valueLinks = [
  {
    title: "Terms & Conditions",
    url: "#"
  },
  {
    title: "Privacy Policy",
    url: "#"
  },
  {
    title: "FAQ",
    url: "#"
  },
  {
    title: "Feeback",
    url: "#"
  },
  
]

const socials = [
  {
    name: "Twiiter",
    logo: "twitter.svg"
  },
  {
    name: "Youtube",
    logo: "yt.svg"
  },
  {
    name: "Facebook",
    logo: "fb.svg"
  },
  {
    name: "Instagram",
    logo: "instagram.svg"
  },
]

const Footer = () => {
  return (
    <div className='w-full'>
      <div className="bg-[#FA8832] p-[70px] text-white">
        <div className="grid grid-rows-3 grid-cols-10 place-content-center">

          <div className="logo mt-5 md:mt-0 md:row-start-2 md:row-span-3 md:col-span-2 col-span-4 row-start-3">
            <h1 className='text-xl'>NaWee Logistics</h1>
          </div>

          <div className="links row-span-2 col-span-10 md:col-start-3 md:col-end-8">
          {/* CONTACT INFO */}
            <div className='mb-5 text-center md:text-left md:grid md:grid-cols-5'>
              <h5 className='text-sm font-semibold'>Contacts Info</h5>
              <ul className='flex col-span-4 justify-center md:justify-start ml-1 divide-x-2 divide-white'>
                {
                  contacts.map(contact => (
                    <li key={contact} className='list-none text-sm px-2'>
                      {contact}
                    </li>
                  ))
                }
              </ul>
            </div>

          {/* VALUE LINKS */}
          <div className='mb-5 text-center md:text-left md:grid md:grid-cols-5 gap-4'>
            <h5 className='text-sm font-semibold'>Value Links</h5>
            <ul className='flex divide-x-2 justify-center md:justify-start col-span-4 divide-white'>
              {
                valueLinks.map(link => (
                  <li key={link.title} className='list-none text-sm px-2'>
                    <a href={link.url}>{ link.title }</a>
                  </li>
                ))
              }
            </ul>
          </div>
            
          {/* OUR SERVICES */}
          <div className='text-center md:text-left md:grid md:grid-cols-5 gap-4'>
            <h5 className='text-sm font-semibold'>Our Services</h5>
            <ul className='flex col-span-4 justify-center md:justify-start divide-x-2 divide-white'>
              {
                services.map(service => (
                  <li key={service.title} className='list-none text-sm px-2'>
                    <a href={service.url}>{ service.title }</a>
                  </li>
                ))
              }
            </ul>
          </div>
          </div>

          <div className="socials mt-5 md:mt-0 md:row-start-2 md:row-span-3 row-start-3 col-start-8 col-end-10">
            <div className="flex">
              {
                socials.map(social => (
                  <img key={social.name} className='float' src={`../assets/images/${social.logo}`} alt={social.name} />
                ))
              }
            </div>
          </div>
        </div>
      </div>
      <div className="text-white text-center p-[15px] bg-[#333333] ">
        <p>Copyright &copy; 2022 Nawee Services - All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer