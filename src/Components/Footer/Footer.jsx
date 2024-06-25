import React from 'react';
import './footer.scss'
import footer1 from '../../Assets/footer1.jpg'
import footer2 from '../../Assets/footer2.jpg'
import footer3 from '../../Assets/footer3.jpg'

const Footer = () => {
  return (
    <footer class="pt-50 footer-section bg-[#000a1f]">
      <div class="container px-5 py-24 mx-auto flex md:!items-center lg:!items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img src='https://themes.ongoingthemes.com/gootravel/assets/img/logo/logo1.png' className='icon' alt="logo"/>
          </a>
          <p class="mt-2 text-sm text-gray-500 mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet perspiciatis sit voluptas quae</p>
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-5 justify-center sm:justify-start">
            <a class="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
        <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center md:!items-start">
          <div class="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Quick Links</h2>
            <div className='flex gap-6 justify-center'>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-gray-600 hover:text-gray-800">About Us</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Our Services</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Activities</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Contact</a>
                </li>
              </nav>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Blog</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Buy Tour</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Sell Your Activity</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Destinations</a>
                </li>
              </nav>
            </div>
          </div>
          <div class="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Blog And News</h2>
            <nav class="list-none mb-10">
            <div className="inner">
              <ul className='flex gap-2 !items-start'>
                <li className='rounded w-28 h-28'>
                <img src={footer1} alt="img" className='rounded-md'/>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">3 things guides should pay attention to</a>
                  <p class="text-gray-600 hover:text-gray-800">01 June 2021</p>
                </li>
              </ul>
            </div>
            <div className="inner">
              <ul className='flex gap-2 !items-start'>
                <li className='rounded w-28 h-28'>
                <img src={footer2} alt="img" className='rounded-md'/>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">How to become the best travel agency?</a>
                  <p class="text-gray-600 hover:text-gray-800">02 June 2021</p>
                </li>
              </ul>
            </div>
            <div className="inner">
              <ul className='flex gap-2 !items-start'>
                <li className='rounded w-28 h-28'>
                  <img src={footer3} alt="img" className='rounded-md'/>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">About The Louvre Museum hello world</a>
                  <p class="text-gray-600 hover:text-gray-800">03 June 2021</p>
                </li>
              </ul>
            </div>
            
            </nav>
          </div>
          <div class="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Contact Information</h2>
            <nav class="list-none mb-10 ">
              <li className='flex gap-2'>
                <span class="material-symbols-outlined text-[#FF6525] border border-orange-700 p-2 rounded-full">location_on</span>
                <a class="text-gray-600 hover:text-gray-800">1489 3rd Ave, Newyork, USA <br />Meet Us In Office</a>
              </li>
              <li className='flex gap-2 my-2'>
              <span class="material-symbols-outlined text-[#FF6525] border border-orange-700 p-2 rounded-full">call</span>
                <a class="text-gray-600 hover:text-gray-800">(0123) 456 7890
                <br />Make a Call</a>
              </li>
              <li className='flex gap-2 my-2'>
                <span class="material-symbols-outlined text-[#FF6525] border border-orange-700 p-2 rounded-full">markunread_mailbox</span>
                <a class="text-gray-600 hover:text-gray-800">info@example.com <br />Drop Us A Line</a>
              </li>
              <li className='flex gap-2 my-2'>
                <span class="material-symbols-outlined text-[#FF6525] border border-orange-700 p-2 rounded-full">schedule</span>
                <a class="text-gray-600 hover:text-gray-800">9 AM - 5 PM (Sun-Fri) <br />Office Hour</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div class="bg-[#000a1f]">
        <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p class="text-gray-500 text-sm text-center sm:text-left">© 2024 Shripad T —
            <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank">@knyttneve</a>
          </p>
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a class="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer