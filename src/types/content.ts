export type NavLink = {
  label: string;
  href: string;
};

export type Cta = {
  label: string;
  href: string;
};

export type MediaAsset = {
  src: string;
  alt: string;
  video?: string;
  width?: number;
  height?: number;
};

export type ExploreItem = {
  title: string;
  body: string;
};

export type ExperienceVisual = {
  title: string;
  image: MediaAsset;
};

export type ExperienceComponent = {
  id: string;
  title: string;
  body: string;
  image: MediaAsset;
};

export type FaqItem = {
  question: string;
  answer: string;
  href?: string;
  linkLabel?: string;
};

export type RetreatStatus = "upcoming" | "coming_soon" | "past";

export type Retreat = {
  id: string;
  name: string;
  status: RetreatStatus;
  startDate?: string;
  endDate?: string;
  location?: string;
  price?: string;
  capacity?: number;
  accommodation?: string;
  itinerarySummary?: string;
  inclusions?: string[];
  notes?: string;
  href?: string;
  applyHref?: string;
};

export type FeaturedEvent = {
  retreat: Retreat;
  name: string;
  href: string;
  applyHref: string;
  label: string;
  dateLabel: string;
  location: string;
  city: string;
  country: string;
  year: string;
  month: string;
  menuDetail: string;
  navLabel: string;
  applyLabel: string;
  seeLabel: string;
  waitlistLabel: string;
  heroDetail: string;
  announcement: {
    desktop: string;
    mobile: string;
    ariaLabel: string;
  };
  headline: readonly [string, string];
  notice: {
    eyebrow: string;
    body: string;
    link: string;
  };
};

export type FormField = {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea";
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
  rows?: number;
};
