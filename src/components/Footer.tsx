import { site } from "@/content/site";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-olive text-chalk">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-12 px-5 py-16 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-12">
        <div>
          <p className="eyebrow">{site.footer.wordmark}</p>
          <p className="mt-4 font-heading text-3xl italic text-chalk/90 sm:text-4xl">
            {site.footer.line}
          </p>
        </div>
        <ul className="flex flex-wrap gap-x-8 gap-y-3 text-[12px] tracking-[0.16em] uppercase text-chalk/70">
          {site.footer.links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="transition-colors hover:text-chalk">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
