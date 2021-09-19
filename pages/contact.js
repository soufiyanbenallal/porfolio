import Head from 'next/head'
/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import useCart from '@bigcommerce/storefront-data-hooks/cart/use-cart'
import { getConfig } from '@bigcommerce/storefront-data-hooks/api'
import getAllProducts from '@bigcommerce/storefront-data-hooks/api/operations/get-all-products'
const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Home() {
  const countItem = (count, item) => count + item.quantity
const countItems = (count, items) =>
  items.reduce(countItem, count)
  const npm = async () => {
    const { products } = await getAllProducts({
      variables: { field: 'featuredProducts', first: 6 },
      config,
      preview,
    })
    console.log("products");
    console.log(products);
    const { data } = useCart()
  const itemsCount = Object.values(data?.line_items ?? {}).reduce(countItems, 0)
  console.log('data');
  console.log(data);
  return itemsCount > 0 ? <h1>{itemsCount}</h1> : "sdsdsds"
}
React.useEffect(() => {
  return () => {
  }
}, [])
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <div className="flex max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
        <div className="hidden bg-cover lg:block lg:w-1/2" style={{backgroundImage:"url('https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80')"}}></div>
        
        <CartNumber />
        </div>
      </main>

    </div>
  )
}
