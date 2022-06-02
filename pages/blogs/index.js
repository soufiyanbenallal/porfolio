import React, { useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { get } from '../../services/api.service';
import { isUrlValid } from 'simple-form-validations';
import Layout from '../../layouts/Layout';
import Header from '../../components/Header';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Index() {
  // eslint-disable-next-line no-unused-vars
  const [articles, setArticles] = useState({ meta: {}, data: [] });
  // const [loading, setLoading] = useState(true);
  // const [page, setPage] = useState(0);
  // const [page] = useState(0);
  /**
   * fetch articles
   * @return {Promise<void>}
   */
  //  const fetchArticles = () => {
  //    const payload = {
  //     "pagination[page]": page,
  //     "pagination[pageSize]": 1,
  //     // fields: title,
  //     populate: "author,category",
  //    }

  //   get('articles', payload)
  //   .then(({data}) => {
  //       console.log(data);
  //       setArticles(data);
  //   })
  //   .catch(err => {
  //       console.log(err);
  //   })
  //  }

  /**
   * lifecycle hook
   */
  useEffect(() => {
    // console.log('process.env.API_URL', process.env.NEXT_PUBLIC_ENV_API_URL);
    console.log('isUrlValid :', isUrlValid('https://www.google.com'));
    // fetchArticles()
    return () => {};
  }, []);

  return (
    <Layout>
      <HeroContent>
        <div className="pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
          <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-400 dark:divide-gray-800 lg:max-w-7xl">
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
              {articles.data.map((post) => (
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
                        <img
                          className="h-10 w-10 rounded-full"
                          src={post.author.imageUrl}
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
          </div>
        </div>
      </HeroContent>
    </Layout>
  );
}

// eslint-disable-next-line react/prop-types
function HeroContent({ children }) {
  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      <div className="relative overflow-hidden">
        <Header />

        <div className="relative pt-12">
          <div className="absolute inset-0 flex flex-col" aria-hidden="true">
            <div className="flex-1" />
            <div className="flex-1 w-full dark:bg-gray-1000 bg-gray-300" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <div className="absolute top-1/2 left-1/2 w-full text-center transform -translate-x-1/2 -translate-y-1/2 z-10">
              <h2 className="text-white text-5xl font-extrabold mb-12">
                Frontend development roadmap.
              </h2>
              <h3 className="text-gray-100 text-xl font-medium max-w-xl mx-auto">
                Frontend is a skill that is not only about coding, but also
                about the way you approach the problem.
              </h3>
            </div>
            <img
              className="relative rounded-lg shadow-lg"
              src="/blogs-bg.png"
              alt="App screenshot"
            />
          </div>
        </div>
      </div>
      <div className="dark:bg-gray-1000 bg-gray-300">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <h2 className="text-center text-gray-500 text-sm font-semibold uppercase tracking-wide">
            Trusted by over 26,000 forward-thinking companies
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img
                className="h-12"
                src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
                alt="Tuple"
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img
                className="h-12"
                src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
                alt="Mirage"
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img
                className="h-12"
                src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                alt="StaticKit"
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
              <img
                className="h-12"
                src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                alt="Transistor"
              />
            </div>
            <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
              <img
                className="h-12"
                src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                alt="Workcation"
              />
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          {children}
        </div>
      </div>
    </div>
  );
}
