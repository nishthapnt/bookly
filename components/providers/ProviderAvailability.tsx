import { AvailabilitySlot } from "@/types/availability";

type ProviderAvailabilityProps = {
  slots: AvailabilitySlot[];
};

export default function ProviderAvailability({
  slots,
}: ProviderAvailabilityProps) {
  return (
    <section className="bg-white rounded-3xl shadow-lg p-6 md:p-8">
      {/* Heading */}
      <div className="flex items-center gap-3">
        <div className="h-1 w-10 rounded-full bg-emerald-600" />

        <h2 className="text-2xl font-bold text-gray-900">
          Availability
        </h2>
      </div>

      <p className="mt-2 text-gray-500">
        Select a date and time to book your session
      </p>

      {/* Empty state */}
      {slots.length === 0 ? (
        <div className="mt-8 rounded-2xl bg-gray-50 p-6 text-center">
          <p className="text-gray-500">
            No availability found for this provider.
          </p>
        </div>
      ) : (
        <div className="mt-8 grid gap-4">
          {slots.map((slot) => (
            <div
              key={slot.id}
              className="
                flex
                flex-col
                sm:flex-row
                sm:items-center
                sm:justify-between
                gap-3
                rounded-2xl
                border
                p-5
              "
            >
              {/* Date */}
              <div>
                <p className="text-sm text-gray-500">
                  Date
                </p>

                <p className="font-semibold text-gray-900">
                  {slot.date}
                </p>
              </div>

              {/* Time */}
              <div>
                <p className="text-sm text-gray-500">
                  Time
                </p>

                <p className="font-semibold text-gray-900">
                  {slot.startTime} - {slot.endTime}
                </p>
              </div>

              {/* Status */}
              <div>
                {slot.available ? (
                  <span
                    className="
                      inline-flex
                      rounded-full
                      bg-emerald-100
                      px-4
                      py-2
                      text-sm
                      font-medium
                      text-emerald-700
                    "
                  >
                    Available
                  </span>
                ) : (
                  <span
                    className="
                      inline-flex
                      rounded-full
                      bg-gray-100
                      px-4
                      py-2
                      text-sm
                      font-medium
                      text-gray-500
                    "
                  >
                    Booked
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Booking CTA */}
      <div className="mt-8 rounded-2xl bg-gradient-to-r from-emerald-500 to-blue-500 p-5 text-white">
        <p className="text-sm opacity-90">
          Ready to book?
        </p>

        <h4 className="text-xl font-bold mt-1">
          Choose an available slot to continue
        </h4>

        <button
          className="
            mt-4
            bg-white
            text-emerald-700
            font-semibold
            rounded-xl
            px-5
            py-2
            hover:bg-gray-100
            transition
          "
        >
          Continue Booking
        </button>
      </div>
    </section>
  );
}