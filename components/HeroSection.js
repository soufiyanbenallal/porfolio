export default function HeroSection() {
  return (
    <section className="container py-24">
      <div className="grid items-center grid-cols-1 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
        <div>
          <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-center text-black md:leading-tight sm:text-left md:text-4xl">Clear overview for efficient tracking</h2>
          <p className="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
            Handle your subscriptions and transactions efficiently with the clear overview in Dashboard. Features like the smart search option allow you to quickly find any data you&apos;re looking for.
          </p>
          <a href="#" className="w-full btn btn-dark btn-lg sm:w-auto">Learn More</a>
        </div>
        <div className="w-full h-full py-48 bg-gray-200"></div>
      </div>
      <div className="grid flex-col-reverse items-center grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
        <div className="order-none md:order-2">
          <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-center text-black md:leading-tight sm:text-left md:text-4xl">Decide how you integrate Payments</h2>
          <p className="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
            Love to code? Next to our ready-made and free plugins you can use our expansive yet simple API; decide how you integrate Payments and build advanced and reliable products yourself from
            scratch.
          </p>
          <a href="#" className="w-full btn btn-dark btn-lg sm:w-auto">Learn More</a>
        </div>
        <div className="w-full h-full py-48 bg-gray-200"></div>
      </div>
    </section>
  )
}
