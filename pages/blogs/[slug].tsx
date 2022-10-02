import React, { ReactElement, useEffect, useState } from 'react';
import { get } from '../../services/api.service';
import { useRouter } from 'next/router'
import { IPost } from '../../shared/interfaces';
import { motion, useScroll, useTransform } from 'framer-motion';
import useWindowSize from '../../shared/hooks/useWindowSize';

export default function Blog(): ReactElement {
  const {height} = useWindowSize()
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, height], [1, 1.3]);
  const y = useTransform(scrollY, [0, height], [0, -height]);
  const router = useRouter()
  const {slug} = router.query
  const [post, setPost] = useState<any>({ meta: {}, data: [] });
  // const [loading, setLoading] = useState(true);
  // const [page, setPage] = useState(1);
  const [procced, setProcced] = useState(false);
  const [loading, setLoading] = useState(true);
  // const [page] = useState(0);
  /**
   * fetch articles
   * @return {Promise<void>}
   */
   const fetchPost = () => {

     const payload = {
      'key': '589db86ec9016868926b237fcf',
      // page
      // populate: 'author,category',
     }
    get(`content/posts/${slug}`, payload)
    .then(({data}: {data:{posts: IPost[]}}) => {
        setPost(data.posts[0]);
        setTimeout(() => {
          handleCodeCopy()
        }, 300);
    })
    .catch(err => {
      console.log(err);
      
    })
    .finally(()=>{
      setLoading(false)
    })
   }

  /**
   * lifecycle hook
   */
  useEffect(() => {
    if (router.isReady) {
      // Code using query
      console.log(router.query);
      fetchPost();
    }
    
  }, [router.isReady]);
  const handleCodeCopy = ()=> {
    
    if (procced) {
        return;
      }
      
      const pres = document.querySelectorAll('pre') as unknown as HTMLElement[]|| []
      pres.forEach((pre)=>{
        if (pre.children.length > 1) {
          return;
        }
        pre.classList.add('relative')
        const span = document.createElement('span'); // is a node
        span.className =('absolute top-0 right-0 text-white px-3 py-2 block text-xs cursor-pointer hover:text-red-base active:scale-95')
        span.innerText = 'Copy';
        span.onclick = ()=>{
          span.innerText = 'Copied';
          const ct = pre.querySelector('code')?.innerText
          navigator.clipboard.writeText(ct|| '');
          setTimeout(() => {
            span.innerText = 'Copy';
          }, 2000);
          
        }
        pre.appendChild(span);
        // pre.append('<span class=\'\'>Copy</span>')

      })
    
    setProcced(true)
  }

  if (loading) {
    return <h1>loading...</h1>
  }
  return (
    <div className="relative pb-32   overflow-hidden">
      <section className=" w-full h-[40vh] md:h-[80vw] lg:h-[40vw]  overflow-hidden fixed top-0 bg-gray-1000 text-center z-[-1]">
        <article className='absolute py-10 bottom-0 w-full left-0 z-20 bg-gradient-to-t from-black via-gray-900 to-transparent'>
          <motion.h1 style={{scale, y}} className='lg:text-5xl md:text-3xl text-xl  text-red-base w-full max-w-3xl mx-auto'>{post.title}</motion.h1>
        </article>
        <motion.img style={{scale}} className='w-[80vw] mx-auto h-full object-cover z-10' src={post.feature_image} alt={post.feature_image_alt} />
      </section>
     <section className="w-full bg-white dark:bg-gray-900 z-10">
      <div 
          className="relative px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 prose lg:prose-lg mx-auto max-w-3xl dark:text-gray-300 mt-[40vh] md:mt-[80vw] lg:mt-[40vw]" 
          dangerouslySetInnerHTML={{__html: post.html}}></div>
      </section>
    </div>
  );
}
