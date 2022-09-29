import React from 'react'
import BoxWithScroll from '../../../shared/animation/BoxWithScroll'

export default function BlogListComponent() {
  return (
    <section className="relative w-screen h-screen flex flex-col ">
        <BoxWithScroll >
            <div className='dark:text-gray-200'>
                <h2>lorem ipsum</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, reiciendis rerum eum nemo qui harum accusamus porro, dolorum neque, maiores facilis totam aperiam quis amet esse consequuntur expedita reprehenderit beatae.</p>
            </div>
        </BoxWithScroll>
    </section>
  )
}
