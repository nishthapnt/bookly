import { Provider } from "@/types/provider";

type ProviderAboutProps = {
  provider: Provider;
};

export default function ProviderAbout({
  provider,
}: ProviderAboutProps) {
  return (
    <section className="bg-white rounded-3xl shadow-lg p-6 md:p-8">
      <div className="flex items-center gap-3">
        <div className="h-1 w-10 rounded-full bg-emerald-600" />

        <h2 className="text-2xl font-bold text-gray-900">
          About
        </h2>
      </div>

      <p className="mt-6 text-gray-600 leading-8 text-base md:text-lg">
        {provider.bio}
      </p>
    </section>
  );
}