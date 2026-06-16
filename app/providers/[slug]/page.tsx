import { notFound } from "next/navigation";

import { getProviderBySlug } from "@/lib/api/providers";

import ProviderHeader from "@/components/providers/ProviderHeader";
import ProviderAbout from "@/components/providers/ProviderAbout";
import ProviderSkills from "@/components/providers/ProviderSkills";
import ProviderAvailability from "@/components/providers/ProviderAvailability";


type ProviderPageProps = {
  params: Promise<{
    slug: string;
  }>;
};


export default async function ProviderPage({
  params,
}: ProviderPageProps) {
  const { slug } = await params;

  const provider = await getProviderBySlug(slug);


  if (!provider) {
    notFound();
  }


  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 md:px-6 space-y-8">

        <ProviderHeader provider={provider} />

        <ProviderAbout provider={provider} />

        <ProviderSkills provider={provider} />

        <ProviderAvailability />

      </div>
    </main>
  );
}