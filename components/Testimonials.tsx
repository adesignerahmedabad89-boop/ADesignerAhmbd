import { Quote, Star } from "lucide-react";
import { CosmicSection, SectionHeading } from "@/components/cosmic/CosmicUI";

const testimonials = [
  { name: "Firdous Ansari", role: "Client", rating: 5, text: "Was a bit hesitant to pay & get a logo designed online but then this team helped me till I was completely satisfied — very enthusiastic, hardworking and excellent with their work! Thanks once again for delivering it within the time given. Great work!" },
  { name: "Victor Everystus", role: "Client", rating: 5, text: "I feel so fortunate to have found a team that I thoroughly enjoy working with, and I wanted to let you know that you're a big part of my name logo. Your enthusiasm and support make it a pleasure. You're doing a great job. Thank you!" },
  { name: "Iti Fatehpuria", role: "Client", rating: 5, text: "Found this page in a random Instagram search without much expectation. But it was a superb experience — amazing service at a very reasonable price. The designer was very patient, understood my requirements and designed the logo perfectly. I strongly recommend." },
  { name: "Emine Narxoz", role: "Client", rating: 5, text: "It was a great pleasure to work with this team who are very friendly, efficient and fast in delivering your requirement. Thank you for making the logo and a wonderful video for our cricket team. Hopefully we will have more collaborations in the future!" },
  { name: "Cheenti Enterprise", role: "Client", rating: 5, text: "Response was too fast. While the logo changed frequently, they prepared a wonderful logo within the day. Thank you for your quick response." },
];

/**
 * Client testimonials in the Scientific Astrology theme.
 *
 * **Swiper is gone.** It was pulling in three modules plus three stylesheets to
 * run one autoplaying carousel — a meaningful bundle cost on a page that only
 * needed to show five quotes. This is a native scroll-snap rail instead: it
 * costs zero JavaScript, gives touch users a real swipe rather than a hijacked
 * one, and lets this become a Server Component.
 *
 * The avatar images were dropped too — they were three stock photos reused
 * across five different named people, which reads as fake. Monogram discs in
 * the gold/violet gradient carry the same layout honestly.
 */
export default function Testimonials() {
  return (
    <CosmicSection tint="soft">
      <SectionHeading
        eyebrow="Client reviews"
        title="What Our"
        titleAccent="Clients Say"
        sub="Signals received from businesses we've helped transform through powerful branding."
      />

      <ul className="scrollbar-none -mx-5 mt-14 flex snap-x snap-mandatory list-none gap-6 overflow-x-auto px-5 pb-4 sm:-mx-6 sm:px-6">
        {testimonials.map((t, i) => (
          <li
            key={t.name}
            data-aos="fade-up"
            data-aos-delay={(i % 3) * 110}
            className="w-[86vw] shrink-0 snap-start sm:w-[58vw] lg:w-[31%]"
          >
            <figure className="cosmic-card m-0 flex h-full flex-col p-7">
              <div className="flex items-start justify-between">
                <div
                  className="flex gap-1"
                  aria-label={`${t.rating} out of 5 stars`}
                >
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star
                      key={s}
                      aria-hidden="true"
                      size={15}
                      className="fill-[#dfb15b] text-[#dfb15b]"
                    />
                  ))}
                </div>
                <Quote
                  aria-hidden="true"
                  size={34}
                  className="-mt-1 shrink-0 -scale-x-100 text-[#dfb15b]/20"
                />
              </div>

              <blockquote className="m-0 mt-5 flex-1 text-[14.5px] text-slate-400">
                &ldquo;{t.text}&rdquo;
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-3.5 border-t border-white/10 pt-5">
                <span
                  aria-hidden="true"
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#dfb15b] to-[#7c3aed] text-sm font-extrabold text-white shadow-[0_0_16px_rgba(223,177,91,0.35)]"
                >
                  {t.name
                    .split(" ")
                    .map((w) => w.charAt(0))
                    .slice(0, 2)
                    .join("")
                    .toUpperCase()}
                </span>
                <span className="flex flex-col">
                  <span className="text-[15px] font-bold text-white">{t.name}</span>
                  <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#dfb15b]">
                    {t.role}
                  </span>
                </span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </CosmicSection>
  );
}
