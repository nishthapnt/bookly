import Link from "next/link";

export default function CTASection() {
  return (
    <section className="px-6 py-24">
      <div
        className="
          mx-auto max-w-6xl
          rounded-[40px]
          bg-white
          px-8 py-16
          text-center
          shadow-2xl
          md:px-16
        "
      >
        <div className="mx-auto max-w-3xl">

          <div className="mb-6 inline-flex rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-emerald-800">
            Join Bookly today
          </div>


          <h2 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Let your schedule work for you.
          </h2>


          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Whether you are looking for a professional or sharing your own expertise,
            Bookly helps you connect and manage appointments effortlessly.
          </p>


          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Link
              href="/providers"
              className="
                rounded-full
                bg-emerald-500
                px-8 py-3.5
                font-semibold
                text-white
                shadow-lg
                shadow-emerald-200
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-emerald-600
                hover:shadow-xl
              "
            >
              Find Providers
            </Link>


            <Link
              href="/register"
              className="
                rounded-full
                bg-slate-100
                px-8 py-3.5
                font-semibold
                text-slate-700
                transition-all
                duration-300
                hover:bg-slate-200
              "
            >
              Become a Provider
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}