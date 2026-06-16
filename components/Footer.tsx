import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-6 pb-10">
      <div
        className="
          mx-auto flex max-w-7xl
          flex-col items-center justify-between
          gap-6
          rounded-3xl
          bg-white
          px-8 py-6
          shadow-lg
          md:flex-row
        "
      >

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">

          <div
            className="
              flex h-10 w-10 items-center justify-center
              rounded-2xl bg-emerald-500
              font-bold text-white
              shadow-md shadow-emerald-200
            "
          >
            B
          </div>


          <div>
            <h3 className="text-lg font-bold text-slate-900">
              Bookly
            </h3>

            <p className="text-sm text-slate-500">
              Smart scheduling made simple
            </p>
          </div>

        </Link>


        {/* Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-6">

          <Link
            href="/providers"
            className="font-medium text-slate-600 transition hover:text-emerald-600"
          >
            Find Providers
          </Link>


          <Link
            href="/register"
            className="font-medium text-slate-600 transition hover:text-emerald-600"
          >
            Become a Provider
          </Link>


          <Link
            href="/login"
            className="font-medium text-slate-600 transition hover:text-emerald-600"
          >
            Login
          </Link>

        </div>


        {/* Copyright */}
        <p className="text-sm text-slate-500">
          © 2026 Bookly. All rights reserved.
        </p>

      </div>
    </footer>
  );
}