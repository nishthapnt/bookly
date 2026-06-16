import {
  Search,
  CalendarDays,
  CheckCircle2,
} from "lucide-react";

export default function FeatureCards() {
  const features = [
    {
      icon: Search,
      step: "01",
      title: "Discover Professionals",
      description:
        "Explore verified profiles of coaches, tutors, consultants, and specialists that match your needs.",
    },
    {
      icon: CalendarDays,
      step: "02",
      title: "Choose Your Time",
      description:
        "Browse real-time availability calendars and select the perfect appointment slot effortlessly.",
    },
    {
      icon: CheckCircle2,
      step: "03",
      title: "Book Instantly",
      description:
        "Confirm your session in seconds without endless back-and-forth scheduling conversations.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-emerald-50 to-white px-6 py-24">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto mb-16 max-w-2xl text-center">

          <p className="
            mb-4 inline-flex rounded-full
            bg-emerald-100 px-4 py-2
            text-sm font-semibold
            text-emerald-700
          ">
            How Bookly Works
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Schedule appointments in three simple steps
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Find professionals, view their availability, and secure your appointment—all in one seamless experience.
          </p>

        </div>


        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="
                  group relative overflow-hidden
                  rounded-[32px]
                  border border-emerald-100
                  bg-white
                  p-8
                  shadow-lg shadow-emerald-50
                  transition-all duration-300
                  hover:-translate-y-2
                  hover:shadow-2xl
                "
              >

                {/* Step Number */}
                <span className="
                  absolute right-6 top-6
                  text-4xl font-bold
                  text-emerald-50
                  transition-colors
                  group-hover:text-emerald-100
                ">
                  {feature.step}
                </span>


                {/* Icon */}
                <div className="
                  mb-6 flex h-14 w-14
                  items-center justify-center
                  rounded-2xl
                  bg-emerald-100
                  text-emerald-600
                ">

                  <Icon size={28} />

                </div>


                {/* Content */}
                <h3 className="
                  mb-3 text-2xl
                  font-semibold
                  text-slate-900
                ">
                  {feature.title}
                </h3>

                <p className="
                  leading-relaxed
                  text-slate-600
                ">
                  {feature.description}
                </p>


                {/* Hover accent line */}
                <div className="
                  mt-8 h-1 w-0
                  rounded-full
                  bg-emerald-500
                  transition-all duration-300
                  group-hover:w-20
                " />

              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
}