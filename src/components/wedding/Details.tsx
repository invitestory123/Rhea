import { CalendarPlus, MapPin } from "lucide-react";
import jaali from "@/assets/jaali.jpg";
import { invitation } from "@/config/invitation";
import { directionsUrl, googleCalendarUrl } from "@/lib/wedding";
import { Reveal } from "./Reveal";

export function Details() {
  const { event, venue } = invitation;

  return (
    <section className="relative overflow-hidden px-5 py-20">
      <div
        aria-hidden
        className="absolute inset-0 opacity-25"
        style={{ backgroundImage: `url(${jaali})`, backgroundSize: "260px" }}
      />
      <div aria-hidden className="absolute inset-0 bg-parchment/70" />

      <Reveal className="relative mx-auto max-w-md">
        <div className="relative rounded-t-[9rem] border border-gold/50 bg-parchment px-7 pt-16 pb-10 text-center shadow-[0_30px_60px_-45px_var(--color-ink)] paper-grain">
          <div className="pointer-events-none absolute inset-x-3 top-3 bottom-3 rounded-t-[8.4rem] border border-gold/30" />

          <p className="text-[0.65rem] tracking-[0.45em] text-ink/60 uppercase">Itinerary</p>
          <div className="mx-auto mt-4 w-20 gold-rule" />

          <div className="mt-8 space-y-5">
            {invitation.itinerary.map((item, idx) => (
              <div key={idx} className="relative">
                <p className="font-display text-2xl tracking-[0.06em] text-gold">
                  {item.date}
                </p>
                <p className="mt-1 text-xs sm:text-sm tracking-wide text-ink/85 leading-relaxed font-light">
                  {item.events}
                </p>
                {idx < invitation.itinerary.length - 1 && (
                  <div className="mx-auto mt-4 w-12 border-b border-gold/25" />
                )}
              </div>
            ))}
          </div>

          <div className="mx-auto mt-8 w-28 gold-rule" />

          <div className="mt-7 text-sm text-ink/80">
            <div className="flex items-start justify-center gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
              <span>
                {venue.name}
                <br />
                <span className="text-xs text-ink/60">{venue.address}</span>
              </span>
            </div>
          </div>

          <p className="mt-6 font-display text-lg italic text-ink/65">{event.note}</p>

          <div className="mt-8 flex flex-col gap-3">
            <a
              href={googleCalendarUrl()}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-pine px-6 py-3.5 text-[0.7rem] tracking-[0.24em] text-parchment uppercase transition-transform duration-200 active:scale-95"
            >
              <CalendarPlus className="size-4 transition-transform group-hover:rotate-6" />
              Add to calendar
            </a>
            <a
              href={directionsUrl()}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-gold/60 py-3 text-[0.65rem] tracking-[0.2em] text-ink/75 uppercase transition-colors hover:bg-gold/10"
            >
              Directions
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
