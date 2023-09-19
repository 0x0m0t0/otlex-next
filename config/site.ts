export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Otlex",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Profile",
      href: "/pages/profile",
    },
  ],
  links: {
    twitter: "https://twitter.com/oxomoto",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
