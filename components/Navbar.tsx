import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 transition-transform duration-300 hover:scale-105"
        >
          <div
            className="
              flex h-11 w-11 items-center justify-center
              rounded-2xl bg-emerald-500
              text-lg font-bold text-white
              
            "
          >
            B
          </div>

          <span className="text-2xl font-bold tracking-tight text-slate-900">
            Bookly
          </span>
        </Link>


        {/* Navigation Links */}
        <div className="hidden items-center gap-10 md:flex">

          <Link
            href="/providers"
            className="
              font-medium text-slate-700
              transition duration-300
              hover:text-emerald-600
            "
          >
            Find Providers
          </Link>


          <Link
            href="/become-provider"
            className="
              font-medium text-slate-700
              transition duration-300
              hover:text-emerald-600
            "
          >
            Become a Provider
          </Link>

        </div>


        {/* Authentication */}
        <div className="flex items-center gap-3">

          <Link
            href="/login"
            className="
              rounded-full bg-white
              px-5 py-2.5
              font-medium text-slate-700
              shadow-md
              transition-all duration-300
              hover:-translate-y-0.5
              hover:shadow-lg
            "
          >
            Login
          </Link>


          <Link
            href="/register"
            className="
              rounded-full
              bg-emerald-500
              px-6 py-2.5
              font-semibold text-white
              
              transition-all duration-300
              hover:-translate-y-0.5
              hover:bg-emerald-600
              hover:shadow-xl
            "
          >
            Register
          </Link>

        </div>

      </nav>
    </header>
  );
}