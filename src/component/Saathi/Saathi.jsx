import React, { useState } from 'react'
import Footer from '../Footer/Footer';

const Saathi = () => {

  const [open, setOpen] = useState(false);
  let strategic = [1, 2, 3, 4]
  const HandleOpen = (index) => {
    setOpen(prevIndex => prevIndex === index ? null : index);
  }


  return (
    <div>
      <div className='mt-20 m-20'>
        <div className='flex flex-col gap-10 m-auto  p-4 rounded-md mt-40 items-center '>
          <h1 className='flex gap-4 text-5xl font-bold'><span>Saathi</span><span className='text-blue-500'>Network</span></h1>

          <p className='text-2xl text-gray-900 font-medium leading-12'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem perspiciatis quisquam neque iusto quibusdam iure itaque laudantium eius eos amet. Vel ad a eaque nostrum odit facilis tenetur quos distinctio placeat ducimus reprehenderit vero consequatur, tempora enim suscipit iure aperiam possimus iste doloremque excepturi? Est incidunt velit nisi quibusdam labore.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nobis consectetur nostrum et, in commodi reprehenderit quia nisi consequuntur ipsa.
          </p>
        </div>

        {/* section 2 */}
        <div className='mt-10'>
          <div className='w-[80%] items-center justify-center m-auto min-h-[300px] p-4 flex gap-10'>
            <img src="" alt="" className='w-[500px] h-[300px] border flex-shrink-0' />
            <p className='text-gray-500 text-xl leading-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis repellat qui error consequuntur accusantium quae harum minus laboriosam atque nihil. Commodi quos perferendis nemo odit, tempora dolorum eum dolorem facere corporis deleniti inventore aliquam blanditiis fugiat accusamus reiciendis sunt voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni neque aliquid doloremque aspernatur reprehenderit officia hic unde voluptate accusamus reiciendis cupiditate, eos cumque tempore excepturi quae itaque, placeat repellat vel nemo maiores. Ex ea in repellendus a! Laudantium mollitia est atque ex numquam, magni modi quo ab sed ullam minus?
            </p>
          </div>
        </div>

        {/* section 3 */}
        <div className='mt-10'>
          <div className='w-[80%] items-center justify-center m-auto min-h-[300px] p-4 flex gap-10'>
            <p className='text-gray-500 text-xl leading-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis repellat qui error consequuntur accusantium quae harum minus laboriosam atque nihil. Commodi quos perferendis nemo odit, tempora dolorum eum dolorem facere corporis deleniti inventore aliquam blanditiis fugiat accusamus reiciendis sunt voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni neque aliquid doloremque aspernatur reprehenderit officia hic unde voluptate accusamus reiciendis cupiditate, eos cumque tempore excepturi quae itaque, placeat repellat vel nemo maiores. Ex ea in repellendus a! Laudantium mollitia est atque ex numquam, magni modi quo ab sed ullam minus?
            </p>
            <img src="" alt="" className='w-[500px] h-[300px] border flex-shrink-0' />
          </div>
        </div>

        {/* section 4 */}
        <div>
          <p className='text-gray-500 mt-20 w-[80%] m-auto text-xl leading-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis repellat qui error consequuntur accusantium quae harum minus laboriosam atque nihil. Commodi quos perferendis nemo odit, tempora dolorum eum dolorem facere corporis deleniti inventore aliquam blanditiis fugiat accusamus reiciendis sunt voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni neque aliquid doloremque aspernatur reprehenderit officia hic unde voluptate accusamus reiciendis cupiditate, eos cumque tempore excepturi quae itaque, placeat repellat vel nemo maiores. Ex ea in repellendus a! Laudantium mollitia est atque ex numquam, magni modi quo ab sed ullam minus?
          </p>
        </div>

        {/* section 5 */}
        <div className='mt-40 mb-20'>
          <div className='flex justify-around items-center min-h-[400px] '>
            {strategic.map((item, index) => (
              <div className={`flex flex-col items-center justify-center gap-4 w-[400px] min-h-[300px] p-4 border-2 border-blue-500 rounded-2xl shadow-xl shadow-blue-400 relative cursor-pointer  ${open === index && "h-[500px] "}`} key={item} onClick={() => HandleOpen(index)}>
                {open !== index && <h1 className='text-8xl font-bold text-blue-200' style={{
                  textShadow: "2px 3px 4px gray"
                }}>{item}</h1>}
                {open !== index && <p className='text-2xl font-medium'>Outreach</p>}
                {open === index && <p className='text-xl h-[300px] text-center font-medium text-gray-600 incHeight relative'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi placeat perspiciatis deleniti. Expedita corporis, minima labore maxime sequi ipsum omnis quibusdam animi. Dignissimos sequi eos iure fugiat adipisci eveniet corrupti.</p>}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* section 6 */}
      <div className='h-[110px] border-t-1 text-gray-800 mt-40 border-gray-600 flex items-center pl-10'>
        <h1 className='flex gap-2 text-5xl font-bold'>Become a Saathi and earn upto <span className='text-blue-600'>20k</span></h1>
      </div>
      <Footer />
    </div>
  )
}

export default Saathi