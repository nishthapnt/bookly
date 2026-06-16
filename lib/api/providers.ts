import { Provider } from "@/types/provider";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:9000";

export async function getProviders(): Promise<Provider[]> {
  const response = await fetch(
    `${API_BASE_URL}/api/providers`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch providers");
  }

  const providers: Provider[] = await response.json();

  return providers;
}

export async function getProviderBySlug(
  slug: string
): Promise<Provider|null> {
  const response = await fetch(
    `${API_BASE_URL}/api/providers/${slug}`,
    {
      cache: "no-store",
    }
  );

  if (response.status === 404) {
  return null;
}

if (!response.ok) {
  throw new Error("Failed to fetch provider details");
}
  const provider: Provider = await response.json();

  return provider;
}