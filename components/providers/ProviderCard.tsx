import Link from "next/link";
import { Provider } from "@/types/provider";

interface ProviderCardProps {
  provider: Provider;
}

export default function ProviderCard({
  provider,
}: ProviderCardProps) {
  return (
    <article
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
      {/* Profile Image */}
      <div
        className="
          mb-6
          flex h-16 w-16
          items-center justify-center
          rounded-2xl
          bg-emerald-100
          text-2xl
        "
      >
        👤
      </div>


      {/* Name and title */}
      <h3 className="text-2xl font-semibold text-gray-900">
        {provider.fullName}
      </h3>

      <p className="mt-1 font-medium text-emerald-600">
        {provider.title}
      </p>


      {/* Information */}
      <div className="mt-6 space-y-2 text-gray-600">
        <p>📍 {provider.location}</p>

        <p>
          ⭐ {provider.experienceYears} years experience
        </p>

        <p>
          💵 ${provider.pricePerSession}/session
        </p>
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
        href={`/providers/${provider.slug}`}
        className="
          mt-8
          inline-block
          font-medium
          text-emerald-600
          transition
          hover:text-emerald-700
        "
      >
        View Profile →
      </Link>
    </article>
  );
}