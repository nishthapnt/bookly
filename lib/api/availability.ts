import { AvailabilitySlot } from "@/types/availability";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:9000";

export async function getAvailability(
  slug: string
): Promise<AvailabilitySlot[]> {
  const response = await fetch(
    `${API_BASE_URL}/api/providers/${slug}/availability`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch availability");
  }

  const availability: AvailabilitySlot[] = await response.json();

  return availability;
}