import { italy } from "@/content/italy";

/**
 * Zoom scheduler for an optional call. Booking a time here is not a ticket purchase.
 */
export function ItalyCallCalendar() {
  const { calendar } = italy.questions;

  return (
    <div
      id={calendar.id}
      className="mx-auto mt-12 w-full max-w-[750px] scroll-mt-32 bg-[#d6d1c5]"
    >
      <iframe
        src={calendar.src}
        title={calendar.title}
        className="block h-[560px] w-full border-0"
      />
    </div>
  );
}
