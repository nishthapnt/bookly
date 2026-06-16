import Link from "next/link";

const schedule = [
  {
    day: "MON",
    date: "10",
    slots: [
      {
        time: "9:00 AM",
        color: "bg-emerald-200 text-emerald-950",
      },
      {
        time: "2:00 PM",
        color: "bg-blue-200 text-blue-950",
      },
    ],
  },
  {
    day: "TUE",
    date: "11",
    slots: [
      {
        time: "10:30 AM",
        color: "bg-red-200 text-red-950",
      },
    ],
  },
  {
    day: "WED",
    date: "12",
    slots: [
      {
        time: "11:00 AM",
        color: "bg-amber-200 text-amber-950",
      },
      {
        time: "3:30 PM",
        color: "bg-emerald-200 text-emerald-950",
      },
    ],
  },
  {
    day: "THU",
    date: "13",
    slots: [
      {
        time: "9:30 AM",
        color: "bg-blue-200 text-blue-950",
      },
      {
        time: "5:00 PM",
        color: "bg-red-200 text-red-950",
      },
    ],
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-emerald-50 px-6 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* LEFT SIDE */}
        <div>

          <div className="mb-6 inline-flex rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-emerald-800 shadow-sm">
            Smart scheduling made simple
          </div>


          <h1 className="text-5xl font-bold leading-tight tracking-tight text-slate-900 md:text-7xl">
            Find the right professional and
            <br />
            <span className="text-emerald-600">
              book your time effortlessly.
            </span>
          </h1>


          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            Discover coaches, tutors, consultants, and specialists.
            Browse availability and reserve your ideal appointment
            slot within minutes.
          </p>


          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              href="/providers"
              className="
              rounded-full
              bg-emerald-500
              px-8 py-3.5
              font-semibold text-white
              shadow-lg shadow-emerald-200
              transition duration-300
              hover:-translate-y-1
              hover:bg-emerald-600
              "
            >
              Find Providers
            </Link>


            <Link
              href="/register"
              className="
              rounded-full
              bg-white
              px-8 py-3.5
              font-semibold text-slate-700
              shadow-lg
              transition duration-300
              hover:-translate-y-1
              hover:shadow-xl
              "
            >
              Become a Provider
            </Link>

          </div>


          {/* Stats */}

          <div className="mt-14 flex flex-wrap gap-5">

            {[
              ["100+", "Professionals"],
              ["1K+", "Appointments"],
              ["20+", "Categories"],
            ].map(([number, text]) => (

              <div
                key={text}
                className="
                rounded-3xl
                bg-white
                px-6 py-5
                shadow-xl
                "
              >
                <h3 className="text-3xl font-bold text-slate-900">
                  {number}
                </h3>

                <p className="mt-1 text-slate-500">
                  {text}
                </p>

              </div>

            ))}

          </div>

        </div>



        {/* RIGHT SIDE CALENDAR */}

        <div
          className="
          relative
          rounded-[40px]
          bg-white/80
          p-7
          backdrop-blur-sm
          shadow-[0_30px_80px_-20px_rgba(16,185,129,0.35)]
          "
        >

          {/* Header */}

          <div className="mb-8 flex items-center justify-between">

            <div>

              <p className="text-sm font-semibold text-slate-500">
                Appointment Calendar
              </p>

              <h2 className="text-3xl font-bold text-slate-900">
                June 2026
              </h2>

            </div>


            <div
              className="
              rounded-full
              bg-emerald-500
              px-5 py-2
              font-semibold text-white
              shadow-lg shadow-emerald-200
              "
            >
              Live
            </div>


          </div>


          {/* Appointment Cards */}

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">


            {schedule.map((item) => (

              <div
                key={item.date}
                className="
                group
                rounded-[32px]
                bg-slate-50
                p-5
                shadow-lg
                transition-all duration-300
                hover:-translate-y-2
                hover:bg-white
                hover:shadow-2xl
                "
              >

                {/* top */}

                <div className="flex items-start justify-between">

                  <h3
                    className="
                    text-lg
                    font-bold
                    tracking-wide
                    text-slate-500
                    "
                  >
                    {item.day}
                  </h3>


                  <div
                    className="
                    flex h-14 w-14
                    items-center justify-center
                    rounded-full
                    bg-white
                    text-xl font-bold
                    text-slate-900
                    shadow-lg
                    "
                  >
                    {item.date}
                  </div>

                </div>


                {/* Slots */}

                <div className="mt-6 space-y-4">


                  {item.slots.map((slot) => (

                    <div
                      key={slot.time}
                      className={`
                        rounded-2xl
                        px-5 py-4
                        text-xl
                        font-bold
                        shadow-sm
                        transition-all
                        duration-300
                        group-hover:scale-[1.02]
                        ${slot.color}
                      `}
                    >
                      {slot.time}
                    </div>

                  ))}


                </div>


              </div>

            ))}


          </div>


          {/* Status legend */}

          <div className="mt-8 flex flex-wrap gap-3">

            <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
              Available
            </span>

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              Confirmed
            </span>

            <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
              Pending
            </span>

            <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-700">
              Fully Booked
            </span>

          </div>


        </div>

      </div>
    </section>
  );
}