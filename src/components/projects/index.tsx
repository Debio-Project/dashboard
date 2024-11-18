import { ISlider } from '@/types/slider'
import React from 'react'
import thumbnail from '@/images/slider/bg-thumbnail.png'
import avatar from '@/images/slider/avatar.png'
import Slider from '../slider'
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

  return (
    <main className='text-white lg:w-[1008px] mx-auto'>
          <section className='lg:h-[390px]'>
              <Slider data={array} />
          </section>
    </main>
  )
}

export default Projects