import Link from "next/link";

type EventAnnouncementProps = {
  href: string;
  desktop: string;
  mobile: string;
  label: string;
};

export function EventAnnouncement({
  href,
  desktop,
  mobile,
  label,
}: EventAnnouncementProps) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="flex shrink-0 items-center justify-center bg-olive px-3 text-center text-chalk underline-offset-4 transition-opacity hover:opacity-80 hover:underline sm:px-6"
    >
      <span className="pt-[env(safe-area-inset-top,0px)]">
        <span className="eyebrow hidden h-9 items-center whitespace-nowrap !text-[11px] !tracking-[0.12em] sm:flex lg:!tracking-[0.18em] xl:!tracking-[0.22em]">
          {desktop}
        </span>
        <span className="eyebrow flex h-10 items-center whitespace-nowrap !text-[10px] !tracking-[0.14em] sm:hidden">
          {mobile}
        </span>
      </span>
    </Link>
  );
}
