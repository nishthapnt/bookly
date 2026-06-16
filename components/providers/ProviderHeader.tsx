import { Provider } from "@/types/provider";

type ProviderHeaderProps = {
  provider: Provider;
};

export default function ProviderHeader({
  provider,
}: ProviderHeaderProps) {
  return (
    <section className="relative mb-8">
      {/* Gradient Banner */}
      <div className="h-40 md:h-56 rounded-3xl bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-500" />

      {/* Profile Card */}
      <div className="relative -mt-16 md:-mt-20 mx-4 md:mx-8 bg-white rounded-3xl shadow-xl p-6 md:p-8">
        
        {/* Main Profile Section */}
        <div className="flex flex-col md:flex-row md:items-center gap-6">

          {/* Avatar */}
          <div className="w-32 h-32 md:w-40 md:h-40 mx-auto md:mx-0 rounded-full bg-gradient-to-br from-emerald-500 to-blue-500 border-4 border-white shadow-lg flex items-center justify-center">
            <span className="text-white text-5xl md:text-6xl font-bold">
              {provider.fullName.charAt(0)}
            </span>
          </div>

          {/* Provider Information */}
          <div className="flex-1 text-center md:text-left">

            <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
              {provider.fullName}
            </h1>

            <p className="mt-2 text-lg md:text-xl text-gray-600">
              {provider.title}
            </p>

            <p className="mt-2 text-gray-500">
              📍 {provider.location}
            </p>

            {/* Skill Tags */}
            <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-2">
              {provider.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Pricing + CTA */}
          <div className="flex flex-col items-center md:items-end gap-3">

            <div className="text-center md:text-right">
              <p className="text-sm text-gray-500">
                Session Fee
              </p>

              <p className="text-3xl font-bold text-emerald-600">
                ${provider.pricePerSession}
              </p>
            </div>

            <button className="w-full md:w-auto px-6 py-3 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition">
              Book Appointment
            </button>

          </div>
        </div>

        {/* Statistics */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">

          <div className="bg-gray-50 rounded-2xl p-4 text-center">
            <p className="text-2xl font-bold text-gray-900">
              {provider.experienceYears}+
            </p>

            <p className="text-sm text-gray-500">
              Years Experience
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-4 text-center">
            <p className="text-2xl font-bold text-gray-900">
              {provider.skills.length}
            </p>

            <p className="text-sm text-gray-500">
              Specialties
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-4 text-center col-span-2 md:col-span-1">
            <p className="text-2xl font-bold text-gray-900">
              ⭐ 4.9
            </p>

            <p className="text-sm text-gray-500">
              Rating
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}