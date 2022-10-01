import React, { ReactElement, useEffect, useState } from 'react';
import { get } from '../../services/api.service';
import { useRouter } from 'next/router'
export default function Blog(): ReactElement {
  const router = useRouter()
  const {slug} = router.query
  const [post, setPost] = useState<any>({ meta: {}, data: [] });
  // const [loading, setLoading] = useState(true);
  // const [page, setPage] = useState(1);
  const [procced, setProcced] = useState(false);
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
    .then(({data}) => {
        setPost(data.posts[0]);
        setTimeout(() => {
          handleCodeCopy()
        }, 300);
    })
    .catch(err => {
      console.log(err);
      
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
  return (
    <div className="relative py-32 bg-white overflow-hidden">

      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full ">
        <div
          className="relative h-full text-lg max-w-prose mx-auto"
          aria-hidden="true"
        >
          <svg
            className="absolute top-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
            />
          </svg>
          <svg
            className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            className="absolute bottom-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
            />
          </svg>
        </div>
      </div>
      <div className="relative px-4 sm:px-6 lg:px-8 prose lg:prose-xl mx-auto" dangerouslySetInnerHTML={{__html: post.html}}>
        
      </div>
    </div>
  );
}
