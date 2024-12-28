import React, { useState } from 'react'
import homeImage from '../assets/HomeImage.png'
import saylaniimg from '../assets/Saylani-1.jpeg'
import smitlogo from '../assets/smitlogo.png'
import HeaderHome from './HeaderHome'
import SidebarHome from './SidebarHome'
function MainHome() {
 
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)  
    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
    }

  return (
    <div>
    <HeaderHome   OpenSidebar={OpenSidebar} />
    <SidebarHome  openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
    <main className='mainhome-container'>
        <br /> <br />
  {/* Main Home Page Section No 1 */}

        <div className='top-image'>
          <img src={homeImage} alt="" />
        </div>
  
  {/* Main Home Page Section No 2 */}   

        <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img
      className="smitImageOne lg:w-3/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
      alt="hero"
      src={saylaniimg}
    />
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
      Saylani welfare trust equipping young..
      </h1>
      <p className="mb-8 leading-relaxed">
      Saylani Welfare Trust is empowering the youth by providing 
      them with free training in modern skills like IT, programming,
       and freelancing. Through initiatives like the Saylani Mass
        IT Training Program, they aim to create a skilled workforce,
        enabling young individualsto secure better opportunities
         and contribute to Pakistan’s economic growth.
      </p>
      <div className="flex justify-center">
        <button className="inline-flex text-white btn-mainhome border-0 py-2 px-6 focus:outline-none hover:bg-indigo-500 rounded text-lg">
          Button
        </button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
          Button
        </button>
      </div>
    </div>
  </div>
</section>

  {/* Main Home Page Section No 3 */}
  
  <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4 text-center">
      <div class="p-4 sm:w-1/4 w-1/2">
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">2.7K</h2>
        <p class="leading-relaxed">Users</p>
      </div>
      <div class="p-4 sm:w-1/4 w-1/2">
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">1.8K</h2>
        <p class="leading-relaxed">Students</p>
      </div>
      <div class="p-4 sm:w-1/4 w-1/2">
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">35</h2>
        <p class="leading-relaxed">Courses</p>
      </div>
      <div class="p-4 sm:w-1/4 w-1/2">
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">14</h2>
        <p class="leading-relaxed">Teachers</p>
      </div>
    </div>
  </div>
</section>

  {/* Main Home Page Section No 4 */}

  <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex w-full mb-20 flex-wrap">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
      Master skills, transform your future.
      </h1>
      <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
      Mastering skills can transform your future by opening doors
       to endless opportunities. Equip yourself with in-demand expertise,
        excel in your career, 
      and achieve your goals with our specialized courses.
      </p>
    </div>
    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2">
          <img
            alt="gallery"
            className="w-full object-cover h-full object-center block"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQJ2D4qnYy6GqYvRhgZuDW1pW6GsT8s4-4Og&s"
          />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img
            alt="gallery"
            className="w-full object-cover h-full object-center block"
            src="data:image/png;base64,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"
          />
        </div>
        <div className="md:p-2 p-1 w-full">
          <img
            alt="gallery"
            className="w-full h-full object-cover object-center block"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR4-iEifhcrg4bDBhfRYFM2t_kIokM8vVwNw&s"
          />
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
          <img
            alt="gallery"
            className="w-full h-full object-cover object-center block"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Phy7LCeECwyT9sFn_jf5cKs_GeOyy9hjkw&s"
          />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img
            alt="gallery"
            className="w-full object-cover h-full object-center block"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrpe4ROBgqy-qHe_z4P_2FuZLsxb76SU0eXg&s"
          />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img
            alt="gallery"
            className="w-full object-cover h-full object-center block"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYwuSipPs6CYvtUUSjuJBkWyldyTv36ZZHUA&s"
          />
        </div>
      </div>
    </div>
  </div>
</section>

  {/* Main Home Page Section No 5 */}

  <footer className="home-pae-footer text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <img src={smitlogo} alt="smitlogo" className="w-10 h-10 text-white  bg-gray-500 rounded-full" />
      <span className="ml-3 text-xl">SMIT MANAGEMENT SYSTEM</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2024 SMIT  —
      <a
        href="https://twitter.com/knyttneve"
        className="text-gray-600 ml-1"
        rel="noopener noreferrer"
        target="_blank"
      >
        @OWAISRAZA...
      </a>
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a className="text-gray-500">
        <svg
          fill="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
        </svg>
      </a>
      <a className="ml-3 text-gray-500">
        <svg
          fill="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
        </svg>
      </a>
      <a className="ml-3 text-gray-500">
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
        </svg>
      </a>
      <a className="ml-3 text-gray-500">
        <svg
          fill="currentColor"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={0}
          className="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <path
            stroke="none"
            d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
          />
          <circle cx={4} cy={4} r={2} stroke="none" />
        </svg>
      </a>
    </span>
  </div>
</footer>

    </main>
  </div>
  )
}

export default MainHome