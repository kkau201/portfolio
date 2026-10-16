import { contact } from "@/data/portfolioData";
import { DownloadCvButton } from "@/components/ui/DownloadCvButton";
import { Icon } from "@/components/ui/Icon";
import { RippleLink } from "@/components/ui/RippleLink";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="page-wrap py-16 md:py-24"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2
          id="contact-heading"
          className="font-display text-[40px] font-normal text-blueberry md:text-[48px]"
        >
          {contact.heading}
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-[15px] leading-6">{contact.body}</p>
        <div className="mt-8">
          <DownloadCvButton />
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs font-extrabold tracking-[0.16em] text-blueberry">
          {contact.social.map((link) => (
            <RippleLink
              key={link.label}
              href={link.href}
              className="focus-ring inline-flex items-center gap-1 rounded-sm px-1.5 py-1 hover:text-tangerine"
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
              aria-label={link.label}
            >
              {link.label} <Icon name="open" className="size-3.5" />
            </RippleLink>
          ))}
        </div>
      </div>
    </section>
  );
}
