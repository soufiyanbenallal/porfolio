import React, { ReactElement, useEffect, useState } from 'react';
import { get } from '../../services/api.service';
import { useRouter } from 'next/router'
import { IPost } from '../../shared/interfaces';
import { motion, useScroll, useTransform } from 'framer-motion';
import useWindowSize from '../../shared/hooks/useWindowSize';

export default function Blog(): ReactElement {
  const {height} = useWindowSize()
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, height], [1, 3]);
  const y = useTransform(scrollY, [0, height], [0, height/2]);
  const router = useRouter()
  const {slug} = router.query
  const [post, setPost] = useState<any>({});

  const [procced, setProcced] = useState(false);
  const [loading, setLoading] = useState(true);
  /**
   * fetch articles
   * @return {Promise<void>}
   */
   const fetchPost = () => {

     const payload = {
      // 'key': '589db86ec9016868926b237fcf',
      // page
      // populate: 'author,category',
     }
    get(`posts/${slug}/`, payload)
    .then(({data}: any): void => {
      console.log(data);
      
        setPost(data);
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
        pre.classList.add('relative', 'bg-gray-800')
        
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
      })
    
    setProcced(true)
  }

  if (loading) {
    return <h1>loading...</h1>
  }
  const imgSrc = post.better_featured_image ? post.better_featured_image.source_url : ''

  return (
    <>
      <section  className='sticky top-0 py-5 w-full left-0 z-10'>
        <article className="container-lg flex justify-between">
          <h1 className='lg:text-3xl md:text-3xl text-xl text-gray-200 w-full max-w-3xl '>{post.title.rendered}</h1>
          <ul className='flex gap-6 w-1/3 justify-between'>
            <li className='text-gray-200'>
              <h6 className='uppercase tracking-wider'>Publication</h6>
              <small className='text-gray-600'>1 jauny</small>
            </li>
            <li className='text-gray-200'>
              <h6 className='uppercase tracking-wider'>Author</h6>
              <small className='text-gray-600'>Soufiyan Benallal</small>
            </li>
            <li className='text-gray-200'>
              <h6 className='uppercase tracking-wider'>Category</h6>
              <small className='text-gray-600'>React</small>
            </li>
          </ul>
        </article>
      </section>
      <section className="w-full h-[40vh] md:h-[80vw] lg:h-[40vw] flex items-center overflow-hidden -mt-28 relative bg-black text-center z-[-1]">
       
        <motion.img style={{scale, y}} className='w-full mx-auto max-w-screen-md max-h-[200px] h-full object-cover z-10' src={imgSrc} alt={post.title.rendered} />
      </section>
     <section className="sticky top-10 w-full bg-white z-10 py-32">
      <div 
          className="relative px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 prose lg:prose-lg mx-auto max-w-3xl" 
          dangerouslySetInnerHTML={{__html: post.content?.rendered}}></div>
      </section>
    </>
  );
}
