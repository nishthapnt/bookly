import ProviderCard from "@/components/providers/ProviderCard";
import { getProviders } from "@/lib/api/providers";

export default async function ProvidersPage() {
  const providers = await getProviders();

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-emerald-50 px-6 py-20">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-emerald-600">
            Find Professionals
          </p>

          <h1 className="text-4xl font-bold text-gray-900">
            Discover experts ready to help you
          </h1>

          <p className="mt-4 text-lg text-gray-500">
            Browse verified professionals and book your time effortlessly.
          </p>
        </div>


        {/* Providers Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {providers.map((provider) => (
            <ProviderCard
              key={provider.slug}
              provider={provider}
            />
          ))}
        </div>

      </div>
    </main>
  );
}