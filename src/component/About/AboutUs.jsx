import React from 'react'
import HistoryContainer from './HistoryContainer'
import aboutUs from "../../assets/aboutus.png"
import Footer from '../Footer/Footer'

const AboutUs = () => {
  return (
    <div>
      <div className=' flex items-center justify-between '>
        <div className='w-[960px] h-[660px] p-40'>
          <h1 className='text-6xl font-medium mb-[30px]'><span className='text-black'>About</span> <span className='text-blue-600'>us</span></h1>
          <p className='text-xl mb-[20px] leading-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, ab. Voluptates assumenda modi vero?</p>
          <p className='text-xl tracking-wide leading-10'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non recusandae expedita voluptatum. Doloremque odit, autem dolorum quibusdam nostrum at maiores nobis cum inventore veniam veritatis molestiae odio dolores nulla quisquam magnam expedita ipsam officiis accusantium facilis labore accusamus. Tempore dolor ducimus cum magni ratione voluptatem veniam dolore consequuntur distinctio consequatur?</p>
        </div>
        <div className='w-[837px] h-[630px] flex justify-between relative overflow-hidden'>
          <img src={aboutUs} alt="" className='shadow rounded-2xl border border-gray-400 w-[175px] h-[175px] rotate-45 flex-shrink-0 absolute top-40 left-56' />
          <img src={aboutUs} alt="" className='shadow rounded-2xl border border-gray-400 w-[275px] h-[275px] rotate-45 flex-shrink-0 absolute bottom-0 left-14' />
          <img src={aboutUs} alt="" className='shadow rounded-2xl border border-gray-400 w-[475px] h-[475px] rotate-45 flex-shrink-0 absolute -right-20 bottom-0' />
        </div>
      </div>

      {/* vision and mission */}
      <div className='p-40'>
        <h1 className='text-6xl font-medium flex gap-4 mb-20 justify-center'><span className='text-blue-600'>Vision</span><span>And</span><span className='text-blue-600'>Mission</span></h1>
        <ul className='flex gap-4 flex-wrap'>
          <li className=' shadow shadow-blue-400 rounded-md w-[700px] flex items-center gap-4 p-2'>
            <img src={aboutUs} alt="" className='w-[160px] h-[160px] flex-shrink-0' />
            <p className='text-xl leading-8'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, dicta!</p>
          </li>
          <li className=' shadow shadow-blue-400 rounded-md w-[700px] flex items-center gap-4 p-2'>
            <img src={aboutUs} alt="" className='w-[160px] h-[160px] flex-shrink-0' />
            <p className='text-xl leading-8'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, dicta!</p>
          </li>
        </ul>
      </div>

      {/* History */}
      <HistoryContainer />

      {/* Chairman's Message */}
      <div className='p-40'>
        <h1 className='text-6xl font-medium flex gap-4 mb-20 justify-center'><span>Chairman's</span> <span className='text-blue-600'>Message</span></h1>
        <div className='flex flex-col items-center gap-8 '>
          <div className='w-[400px] h-[400px] shadow rounded-lg overflow-hidden'>
            <img src={aboutUs} alt="" className='w-full h-full'/>
          </div>
          <div className='w-[800px] text-xl leading-8'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet fugit commodi recusandae itaque culpa voluptas dignissimos! Debitis laudantium saepe quos pariatur, in aspernatur voluptatibus maiores? Distinctio, aspernatur tempore! Dolores asperiores beatae totam nostrum debitis, inventore, fugiat distinctio nulla architecto quod eaque ab vitae aut cumque ipsa illo! Nam, vel possimus. Officiis voluptatum magnam numquam. Fugiat dolore nihil similique saepe eum dolorum adipisci, natus doloribus, placeat corporis debitis provident. Reprehenderit nihil at sint totam assumenda atque possimus iure accusamus, corporis vitae minus impedit distinctio explicabo incidunt quaerat fugiat. Repellendus totam ab dolor praesentium, esse doloremque, a voluptatibus nemo perferendis excepturi odio veniam itaque eius aut repudiandae vitae libero cupiditate sed sapiente! Impedit ducimus repudiandae sed quos modi vitae quaerat obcaecati soluta minus quas maiores nesciunt, pariatur quis ut optio ipsa adipisci beatae ab quidem aliquam dolorem. Veniam, iste. Veritatis quisquam quod iure maiores, iusto facilis non tenetur quia aspernatur consequatur ab tempore nostrum cupiditate, voluptates et. Alias, iure perspiciatis, quasi itaque nostrum illo delectus perferendis ex quidem esse iusto sint. Exercitationem explicabo maxime iste provident natus cumque rerum quam id impedit ipsam labore dicta aliquid et officia, accusantium vel eum quasi quo facere. Nostrum illo optio magni expedita quos quisquam sed.</p>
          </div>
        </div>

      </div>

      <Footer/>
    </div>
  )
}

export default AboutUs