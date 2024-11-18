import { IProduct, ISlider } from '@/types/slider'
import React from 'react'
import thumbnail from '@/images/slider/bg-thumbnail.png'
import avatar from '@/images/slider/avatar.png'
import icPara from '@/images/ic-para.svg'
import Slider from '../slider'
import Image from 'next/image'
import ProjectItem from './item'
import item1 from '@/images/projects/Main Image.png'
import item2 from '@/images/projects/Main Image (1).png'
import item3 from '@/images/projects/Main Image (2).png'
import item4 from '@/images/projects/Main Image (3).png'
import item5 from '@/images/projects/Main Image (4).png'
import item6 from '@/images/projects/Main Image (5).png'
import ic1 from '@/images/projects/image.png'
import ic2 from '@/images/projects/image (1).png'
import ic3 from '@/images/projects/image (2).png'
import ic4 from '@/images/projects/image (3).png'
import ic5 from '@/images/projects/image (4).png'
import ic6 from '@/images/projects/image (5).png'

const Projects = () => {

    const array: ISlider[] = [
        {
            thumbnail: thumbnail,
            logo: avatar.src,
            type: 'CoopHive',
            title: 'Trading floor for autonomous agents',
            desc: 'DeBio is the next evolution of research; onchain, unstoppable and powered by the most cutting-edge technology.',
            category: ['AI', 'Computer', 'Science Defi']
        },
        {
            thumbnail: thumbnail,
            logo: avatar.src,
            type: 'CoopHive',
            title: 'Trading floor for autonomous agents',
            desc: 'DeBio is the next evolution of research; onchain, unstoppable and powered by the most cutting-edge technology.',
            category: ['AI', 'Computer', 'Science Defi']
        }
    ]

    const products: IProduct[] = [
        {
            thumbnail: item1,
            logo: ic1,
            type: "Worldwide",
            title: "Follow the Black Hare",
            desc: "DeBio is the next evolution of research: onchain, unstoppable and powered by the most cutting-edge blockchain technology",
            category: ["Community", "NFT", "Space"]
        },
        {
            thumbnail: item2,
            logo: ic2,
            type: "Online",
            title: "OpenSpace",
            desc: "Web3 Solutions for Open Space Exploration",
            category: ["AI", "Data", "Ecosystem"]
        },
        {
            thumbnail: item3,
            logo: ic3,
            type: "Worldwide",
            title: "EcosynthesisX",
            desc: "EcosynthesisX: Driving Real-World Impact through Web3 and Blockchain",
            category: ["Blockchain Protocol", "Funding", "NFT"]
        },
        {
            thumbnail: item4,
            logo: ic4,
            type: "Worldwide",
            title: "Hippocrat",
            desc: "Decentralized healthcare platform",
            category: ["Health", "Blockchain", "DeFi"]
        },
        {
            thumbnail: item5,
            logo: ic5,
            type: "Decentralized",
            title: "Preprints",
            desc: "A Decentralized Research Repository",
            category: ["Publication", "Research", "Decentralized"]
        },
        {
            thumbnail: item6,
            logo: ic6,
            type: "UAE",
            title: "BitDoctor.ai",
            desc: "An AI Health App that Saves Lives",
            category: ["AI", "Healthcare", "Technology"]
        }
    ];

  return (
    <main className='text-white lg:w-[1008px] mx-auto'>
          <section className='lg:h-[390px]'>
            <Slider data={array} />
          </section>
          <section className='lg:w-[470px]'>
              <div className='flex items-center gap-x-3'>
                  <figure className='w-8 h-8'>
                      <Image src={icPara} alt='icon'/>
                  </figure>
                  <span className='text-[#F7FDFD] text-2xl font-normal uppercase'>DEBIO projects</span>
              </div>
              <p className='text-[#798675] text-sm font-semibold mt-4'>Filter and interact with the world of DeBio. All projects are listed by communities and approved by DeBioWorld.</p>
          </section>
          {/* filter */}
          <div></div>

          <section className='mt-6'>
              <p className='text-[#8CE339] text-sm font-semibold mb-6'>32 projects available</p>
              <div className='grid grid-cols-3 gap-4'>
                  {products.map((product, index) => {
                      return <ProjectItem key={index} product={product} />
                  })}
              </div>
          </section>
    </main>
  )
}

export default Projects