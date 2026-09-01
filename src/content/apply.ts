import type { FormField } from "@/types/content";

export const apply = {
  hero: {
    eyebrow: "APPLICATION",
    title: "APPLY FOR BODY KNOWS",
    body: "This is a small, individualized experience. The application helps determine whether BODY KNOWS is appropriate for you.",
  },
  note: "BODY KNOWS does not collect medical information through this form. Share only what you want the team to know when considering fit.",
  consent:
    "I understand that BODY KNOWS is not therapy or medical treatment and does not promise a specific outcome.",
  submit: "SUBMIT APPLICATION",
  confirmation: {
    title: "Application received.",
    body: "The BODY KNOWS team will review your submission and follow up with next steps.",
  },
  fields: [
    {
      name: "fullName",
      label: "Full name",
      type: "text",
      required: true,
      autoComplete: "name",
    },
    {
      name: "email",
      label: "Email address",
      type: "email",
      required: true,
      autoComplete: "email",
    },
    {
      name: "phone",
      label: "Phone number",
      type: "tel",
      required: true,
      autoComplete: "tel",
    },
    {
      name: "city",
      label: "City",
      type: "text",
      required: true,
      autoComplete: "address-level2",
    },
    {
      name: "country",
      label: "Country",
      type: "text",
      required: true,
      autoComplete: "country-name",
    },
    {
      name: "interest",
      label: "Why are you interested in BODY KNOWS?",
      type: "textarea",
      required: true,
      rows: 5,
    },
    {
      name: "currentlyExperiencing",
      label: "What are you currently experiencing?",
      type: "textarea",
      required: true,
      rows: 5,
    },
    {
      name: "explore",
      label: "What would you like to explore?",
      type: "textarea",
      required: true,
      rows: 4,
    },
    {
      name: "experienceDifferently",
      label: "What would you like to understand or experience differently?",
      type: "textarea",
      required: true,
      rows: 4,
    },
    {
      name: "priorExperiences",
      label:
        "Have you participated in intensive physical or emotional experiences before?",
      type: "textarea",
      required: true,
      rows: 4,
    },
    {
      name: "additionalContext",
      label:
        "Is there anything the team should know when considering whether this experience is appropriate for you?",
      type: "textarea",
      required: true,
      rows: 4,
    },
  ] satisfies FormField[],
  waitlist: {
    id: "waitlist",
    eyebrow: "WAITLIST",
    title: "Not this immersion. Still interested.",
    body: "Join the waitlist to hear when the next BODY KNOWS immersion is open to applications.",
    submit: "JOIN THE WAITLIST",
    confirmation: {
      title: "You’re on the list.",
      body: "We’ll follow up when the next immersion is open.",
    },
    fields: [
      {
        name: "fullName",
        label: "Full name",
        type: "text",
        required: true,
        autoComplete: "name",
      },
      {
        name: "email",
        label: "Email address",
        type: "email",
        required: true,
        autoComplete: "email",
      },
    ] satisfies FormField[],
  },
};
