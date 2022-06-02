import React from 'react';
// import { motion, useTransform, useViewportScroll } from "framer-motion"
import { Card } from '../motions/OnScroll';
export default function ServicesSection() {
  return (
    <section className="container grid grid-cols-1 gap-20 py-24 md:grid-cols-2 lg:grid-cols-3 rounded-b-xl overflow-hidden">
      <article className="col-span-1 md:col-span-2 lg:col-span-3">
        <h3 className="text-4xl dark:text-gray-100">Solutions for you</h3>
      </article>
      <Card>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-12 h-12 mb-4 text-indigo-700"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
        <h3 className="mb-3 text-lg font-medium leading-tight text-gray-900">
          Unify your payments stack
        </h3>
        <p className="text-base leading-relaxed text-gray-600">
          Manage all your online and offline sales in one place with a single
          integration, simplifying reporting and reconciliation. Terminal works
          seamlessly with Payments, Connect, and Billing.
        </p>
      </Card>
      <Card>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-12 h-12 mb-4 text-indigo-700"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
          />
        </svg>
        <h3 className="mb-3 text-lg font-medium leading-tight text-gray-900">
          Own your in-store experience
        </h3>
        <p className="text-base leading-relaxed text-gray-600">
          Provide a seamless customer experience across channels, like reserving
          online and picking up in store. Our SDKs make it easy to integrate
          into your own mobile and web applications to accept in-store payments.
        </p>
      </Card>
      <Card>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-12 h-12 mb-4 text-indigo-700"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"
          />
        </svg>
        <h3 className="mb-3 text-lg font-medium leading-tight text-gray-900">
          Grow your platforms revenue
        </h3>
        <p className="text-base leading-relaxed text-gray-600">
          Add in-person payments to your platform or marketplace. Using Terminal
          with Connect, you can onboard users for online and in-person payments,
          and unify their payouts across channels.
        </p>
      </Card>
    </section>
  );
}
