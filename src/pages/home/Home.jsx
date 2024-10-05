import {
    Hero,
    CustomerReviews,
    Footer,
    PopularProducts,
    Services,
    SpecialOffer,
    Subscribe,
    SuperQuality,
  } from "./sections";

const Home = () => {
  return (
    <main className="relative dark:bg-gray-900 dark:text-slate-200">
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x py-12">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffer />
    </section>
    <section className="padding bg-gray-50 dark:bg-gray-950">
      <CustomerReviews />
    </section>
    <section className="padding-x w-full py-16 sm:py-32">
      <Subscribe />
    </section>
    <section className="padding-x padding-t bg-black pb-8">
      <Footer />
    </section>
  </main>
  )
}

export default Home;