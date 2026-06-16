const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const days = [
  { day: 1, available: false },
  { day: 2, available: false },
  { day: 3, available: true },
  { day: 4, available: false },
  { day: 5, available: true },
  { day: 6, available: false },
  { day: 7, available: true },
  { day: 8, available: false },
  { day: 9, available: true },
  { day: 10, available: false },
  { day: 11, available: true },
  { day: 12, available: false },
  { day: 13, available: false },
  { day: 14, available: true },
];

const slots = [
  "9:00 AM",
  "10:30 AM",
  "12:00 PM",
  "2:00 PM",
  "4:30 PM",
];

export default function ProviderAvailability() {
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

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Calendar */}
        <div>
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-semibold text-lg">
              June 2026
            </h3>

            <div className="flex gap-2">
              <button className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200">
                ←
              </button>

              <button className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200">
                →
              </button>
            </div>
          </div>

          {/* Week Days */}
          <div className="grid grid-cols-7 gap-2 text-center text-sm text-gray-500 mb-3">
            {weekDays.map((day) => (
              <div key={day}>
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Dates */}
          <div className="grid grid-cols-7 gap-2">
            {days.map((date) => (
              <button
                key={date.day}
                className={`
                  aspect-square rounded-xl text-sm font-medium transition
                  ${
                    date.available
                      ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
                      : "bg-gray-50 text-gray-400"
                  }
                `}
              >
                {date.day}
              </button>
            ))}
          </div>
        </div>

        {/* Time Slots */}
        <div>
          <h3 className="font-semibold text-lg">
            Available Time Slots
          </h3>

          <p className="text-gray-500 mt-1">
            Wednesday, June 3
          </p>

          <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {slots.map((slot) => (
              <button
                key={slot}
                className="
                  rounded-xl
                  border
                  border-emerald-200
                  bg-emerald-50
                  py-3
                  px-4
                  text-sm
                  font-medium
                  text-emerald-700
                  hover:bg-emerald-100
                  transition
                "
              >
                {slot}
              </button>
            ))}
          </div>

          {/* Booking Preview */}
          <div className="mt-8 rounded-2xl bg-gradient-to-r from-emerald-500 to-blue-500 p-5 text-white">
            <p className="text-sm opacity-90">
              Ready to book?
            </p>

            <h4 className="text-xl font-bold mt-1">
              Select your preferred slot
            </h4>

            <button className="mt-4 bg-white text-emerald-700 font-semibold rounded-xl px-5 py-2 hover:bg-gray-100 transition">
              Continue Booking
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}