import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { get } from '../../../services/api.service'
import Box from '../../../shared/animation/Box'
import BoxWithScroll from '../../../shared/animation/BoxWithScroll'
import { IPost } from '../../../shared/interfaces'

export default function BlogListComponent() {
    const [posts, setPosts] = useState({
        posts: [],
        meta: {}
    })
    const fetchPosts = () => {
        const payload = {
         'key': process.env.NEXT_PUBLIC_ENV_TOKEN,
         'pagination[pageSize]': 3,
        }
       get('content/posts', payload)
        .then(({data}) => {
            console.log(data);
            setPosts(data);
        })
        .catch(err => {
            console.log(err);
        })
    }
    useEffect(() => {
        fetchPosts()
    }, [])
    
  return (
    <section className="container-lg relative w-screen h-screen flex flex-col gap-20 mb-96">
        <Box type='slideVertical' y={300} duration={.8} className="col-span-1 md:col-span-2 lg:col-span-3 ">
            <h2 className='text-red-base text-2xl '>Check latest tips</h2>
{/* 
    letter-spacing: 5.6vw;
    margin-right: -4rem; */}

            <p className='dark:text-gray-200 text-[8rem] font-extrabold leading-[1] uppercase tracking-widest' >The Blog</p>
        </Box>
        {
            posts.posts.map((post: IPost)=>{

            return<Box type='slideVertical' key={post.id} >
                    <Link href={`/blogs/${post.id}`}>
                        <a className='flex gap-5'>
                            <img  src={post.feature_image} alt={post.feature_image_caption} width={500}  />
                            <div className='dark:text-gray-200 py-5'>
                                <h2 className='text-4xl uppercase'>{post.title}</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, reiciendis rerum eum nemo qui harum accusamus porro, dolorum neque, maiores facilis totam aperiam quis amet esse consequuntur expedita reprehenderit beatae.</p>
                            </div>
                        </a>
                    </Link>
                </Box>
                })
        }
    </section>
  )
}
