/**
 * Single source of truth for one couple's invitation.
 * Duplicate the project, edit this file, swap the images in src/assets, deploy.
 */

export const invitation = {
  couple: {
    bride: "Rhea Badyal",
    brideShort: "Rhea",
    groom: "Shameek Dave",
    groomShort: "Shameek",
    hashtag: "#RheaAndShameek",
  },
  invite: {
    kicker: "Together with their families",
    line: "cordially invite you to celebrate their wedding",
  },
  event: {
    title: "The Wedding of Rhea & Shameek",
    label: "The Wedding",
    /** ISO with timezone offset — India Standard Time */
    startsAt: "2027-02-12T10:00:00+05:30",
    endsAt: "2027-02-12T23:00:00+05:30",
    dateLabel: "12 . 02 . 2027",
    dayLabel: "Friday",
    timeLabel: "Wedding Celebrations",
    dressCode: "Traditional / Festive Indian Attire",
    note: "Celebrations & dinner to follow",
  },
  venue: {
    name: "Mayfair Lake Resort, Raipur",
    address: "Jhanjh Lake, Sector 24, Tuta, Atal Nagar-Nava Raipur, Chhattisgarh 492101",
    mapsQuery:
      "Mayfair Lake Resort, Jhanjh Lake, Sector 24, Tuta, Atal Nagar-Nava Raipur, Chhattisgarh 492101",
    url: "https://share.google/MXAlmNJHjwyfxZ8Pc",
    lat: 21.155,
    lng: 81.792,
  },
  story: [],
  blessing: {
    line: "May your intentions be one, may your hearts beat as one.",
    translation:
      "Two families, one thread of gold — and a lifetime of happiness made luminous together.",
    source: "A blessing from both families",
  },
  footer: {
    families: "With love & warm wishes from the Badyal & Dave Families",
    contacts: [] as { name: string; phone: string }[],
  },
  meta: {
    title: "Rhea & Shameek — Wedding Invitation",
    description:
      "Rhea Badyal and Shameek Dave cordially invite you to celebrate their wedding on February 12, 2027 at Mayfair Lake Resort, Raipur.",
    url: "https://rhea-shameek.vercel.app",
    image: "https://media.invitestory.in/sage-parchment/og-image.jpg",
    siteName: "Rhea & Shameek Wedding",
  },
} as const;

export type Invitation = typeof invitation;
