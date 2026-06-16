import Link from "next/link";

const providers = [
  {
    name: "Sarah Williams",
    title: "Fitness Coach",
    location: "New York",
    experience: "8 years experience",
    skills: ["Strength", "Nutrition"],
    color: "bg-green-100",
  },
  {
    name: "David Chen",
    title: "Career Consultant",
    location: "San Francisco",
    experience: "12 years experience",
    skills: ["Career Growth", "Interview Prep"],
    color: "bg-blue-100",
  },
  {
    name: "Emma Parker",
    title: "Wellness Expert",
    location: "Chicago",
    experience: "6 years experience",
    skills: ["Yoga", "Meditation"],
    color: "bg-yellow-100",
  },
];

export default function FeaturedProviders() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-emerald-600">
            Featured Professionals
          </p>

          <h2 className="text-4xl font-bold text-gray-900">
            Meet professionals ready to help you
          </h2>

          <p className="mt-4 text-lg text-gray-500">
            Browse experts across different categories and book your time effortlessly.
          </p>
        </div>


        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {providers.map((provider) => (
            <article
              key={provider.name}
              className="
                rounded-[32px]
                bg-white
                p-8
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
              "
            >

              {/* Profile icon */}
              <div
                className={`
                  ${provider.color}
                  mb-6
                  flex h-16 w-16 items-center justify-center
                  rounded-2xl text-2xl
                `}
              >
                👤
              </div>


              <h3 className="text-2xl font-semibold text-gray-900">
                {provider.name}
              </h3>

              <p className="mt-1 text-emerald-600 font-medium">
                {provider.title}
              </p>


              <div className="mt-6 space-y-2 text-gray-600">
                <p>📍 {provider.location}</p>
                <p>⭐ {provider.experience}</p>
              </div>


              {/* Skills */}
              <div className="mt-6 flex flex-wrap gap-2">
                {provider.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      rounded-full
                      bg-gray-100
                      px-3
                      py-1
                      text-sm
                      text-gray-700
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>


              <Link
                href="/providers"
                className="
                  mt-8 inline-block
                  font-medium
                  text-emerald-600
                  transition
                  hover:text-emerald-700
                "
              >
                View Profile →
              </Link>

            </article>
          ))}
        </div>


        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/providers"
            className="
              inline-flex
              rounded-full
              bg-emerald-500
              px-6
              py-3
              font-medium
              text-white
              shadow-md
              transition
              hover:bg-emerald-600
            "
          >
            Explore All Providers
          </Link>
        </div>

      </div>
    </section>
  );
}