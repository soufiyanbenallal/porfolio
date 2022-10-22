import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { get } from '../../../services/api.service'
import Box from '../../../shared/animation/Box'
import BoxWithScroll from '../../../shared/animation/BoxWithScroll'
import { IPost } from '../../../shared/interfaces'
import { ApiEnum } from '../enums'

export default function BlogListComponent() {
    const [posts, setPosts] = useState([])
    const fetchPosts = () => {
        const payload = {
            _embed: true
        }
        console.log('test : ??/');
        
       get(ApiEnum.POSTS, payload)
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

            <p className='dark:text-gray-200 text-[3rem] font-extrabold leading-[1] uppercase tracking-widest' >The Blog</p>
        </Box>
        {
            posts.map((post: IPost)=>{
            const imgSrc = post.better_featured_image ? post.better_featured_image.media_details.sizes.medium_large.source_url : ''
            return<Box type='slideVertical' key={post.id} >
                    <Link href={`/blogs/${post.id}`}>
                        <a className='flex gap-5'>
                            <img src={imgSrc} alt={post.title.rendered} className='w-2/3'  />
                            <div className='dark:text-gray-200 py-5 w-1/3'>
                                <h2 className='text-4xl uppercase'>{post.title?.rendered}</h2>
                                <div dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}></div>
                            </div>
                        </a>
                    </Link>
                </Box>
                })
        }
    </section>
  )
}
