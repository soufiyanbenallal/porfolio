// import HeroSection from './components/HeroSection'
// import RecentWork from './components/RecentWork'
// import ServicesSection from './components/ServicesSection'
import React, { ReactNode, useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { get } from '../../services/api.service';
// import Header from '../../components/Header';
// import classNames from 'classnames';
// import Image from 'next/image';
import HeroComponent from './components/HeroComponent';
import BgLayers from './components/BgLayers';
import BlogListComponent from '../home/components/BlogListComponent';

export default function BlogView() {
   // eslint-disable-next-line no-unused-vars
   const [articles, setArticles] = useState<any>({ meta: {}, data: [] });
   // const [loading, setLoading] = useState(true);
   const [page, setPage] = useState(0);
   // const [page] = useState(0);
   /**
    * fetch articles
    * @return {Promise<void>}
    */
    const fetchArticles = () => {
      const payload = {
       'key': process.env.NEXT_PUBLIC_ENV_TOKEN,
       'pagination[page]': page,
       'pagination[pageSize]': 1,
       // fields: title,
       populate: 'author,category',
      }
 
     get('content/posts', payload)
     .then(({data}) => {
         console.log(data);
         // setArticles(data);
     })
     .catch(err => {
         console.log(err);
     })
    }
 
   /**
    * lifecycle hook
    */
   useEffect(() => {
     console.log('process.env.API_URL', process.env.NEXT_PUBLIC_ENV_TOKEN);
     fetchArticles()
   }, []);
 
  return (
    <div className="bg-gray-100 dark:bg-gray-1000 block w-full">
      <HeroComponent />
      <BgLayers />
      <BlogListComponent />
        <div className="pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8 h-32">
          {/* <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-400 dark:divide-gray-800 lg:max-w-7xl">
            <div>
              <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 dark:text-gray-100 sm:text-4xl">
                Recent publications
              </h2>
              <p className="mt-3 text-xl text-gray-500 sm:mt-4">
                Nullam risus blandit ac aliquam justo ipsum. Quam mauris
                volutpat massa dictumst amet. Sapien tortor lacus arcu.
              </p>
            </div>
            <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
              {articles.data.map((post:any) => (
                <div key={post.title}>
                  <div>
                    {post.category && (
                      <a href={`/blogs/${post.slug}`} className="inline-block">
                        <span
                          className={classNames(
                            post.category.color,
                            'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium'
                          )}
                        >
                          {post.category.name}
                        </span>
                      </a>
                    )}
                  </div>
                  <a href={post.href} className="block mt-4">
                    <p className="text-xl font-semibold text-gray-900">
                      {post.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {post.description}
                    </p>
                  </a>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <a href={post.author.href}>
                        <span className="sr-only">{post.author.name}</span>
                        <Image
                          className="h-10 w-10 rounded-full"
                          src={post.author.imageUrl}
                          layout='fill'
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        <a href={post.author.href}>{post.author.name}</a>
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime={post.datetime}>{post.date}</time>
                        <span aria-hidden="true">&middot;</span>
                        <span>{post.readingTime} read</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        </div>
    </div>
  )
}
