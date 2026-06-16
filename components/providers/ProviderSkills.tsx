import { Provider } from "@/types/provider";

type ProviderSkillsProps = {
  provider: Provider;
};

export default function ProviderSkills({
  provider,
}: ProviderSkillsProps) {
  return (
    <section className="bg-white rounded-3xl shadow-lg p-6 md:p-8">
      {/* Section Heading */}
      <div className="flex items-center gap-3">
        <div className="h-1 w-10 rounded-full bg-emerald-600" />

        <h2 className="text-2xl font-bold text-gray-900">
          Areas of Expertise
        </h2>
      </div>

      {/* Skills Grid */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
        {provider.skills.map((skill) => (
          <div
            key={skill}
            className="
              rounded-2xl 
              bg-gradient-to-br 
              from-emerald-50 
              to-blue-50 
              p-5 
              text-center 
              border 
              border-emerald-100
              transition
              hover:shadow-md
            "
          >
            <div className="text-3xl mb-2">
              ✨
            </div>

            <h3 className="font-semibold text-gray-900">
              {skill}
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              Professional expertise
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}