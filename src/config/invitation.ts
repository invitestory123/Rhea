/**
 * Single source of truth for one couple's invitation.
 * Duplicate the project, edit this file, swap the images in src/assets, deploy.
 */

export const invitation = {
  couple: {
    groom: "Shameek Dave",
    groomShort: "Shameek",
    bride: "Rhea Badyal",
    brideShort: "Rhea",
    initials: "S & R",
    hashtag: "#ShameekAndRhea",
  },
  invite: {
    kicker: "Together with their families",
    line: "cordially invite you to celebrate their wedding",
  },
  event: {
    title: "The Wedding of Shameek & Rhea",
    label: "Itinerary",
    /** ISO with timezone offset — India Standard Time */
    startsAt: "2027-02-11T10:00:00+05:30",
    endsAt: "2027-02-13T23:00:00+05:30",
    dateLabel: "11th - 13th February 2027",
    gateDateLabel: "11th to 13th February 2027",
    heroDateLabel: "11th - 13th February 2027",
    dayLabel: "Thursday – Saturday",
    timeLabel: "11th – 13th February 2027",
    dressCode: "Traditional / Festive Indian Attire",
    note: "Celebrations & dinner to follow",
  },
  itinerary: [
    {
      date: "11th Feb",
      events: "Mehendi, Sangeet",
    },
    {
      date: "12th Feb",
      events: "Grahshanti & Mandap Muhurat, Haldi, Wedding",
    },
    {
      date: "13th Feb",
      events: "Reception",
    },
  ],
  venue: {
    name: "Mayfair Lake Resort",
    address: "Sector 24, Atal Nagar-Nava Raipur, Tuta, Raipur, Chhattisgarh 492101",
    mapsQuery:
      "Mayfair Lake Resort, Sector 24, Atal Nagar-Nava Raipur, Tuta, Raipur, Chhattisgarh 492101",
    url: "https://share.google/MXAlmNJHjwyfxZ8Pc",
    lat: 21.155,
    lng: 81.792,
  },
  story: [],
  blessing: {
    line: "Expect happy tears, loud laughter, endless pictures, embarrassing dance performances and memories that will last forever!",
    translation:
      "We have a wedding, a lot of excitement, and absolutely no plans of behaving ourselves. Come celebrate with us!",
    source: "",
  },
  footer: {
    families: "With love & warm wishes from the Dave & Badyal Family",
    contacts: [] as { name: string; phone: string }[],
  },
  meta: {
    title: "Shameek & Rhea — Wedding Invitation",
    description:
      "Shameek Dave and Rhea Badyal cordially invite you to celebrate their wedding from 11th to 13th February 2027 at Mayfair Lake Resort, Raipur.",
    url: "https://rhea-shameek.vercel.app",
    image: "https://media.invitestory.in/sage-parchment/og-image.jpg",
    siteName: "Shameek & Rhea Wedding",
  },
} as const;

export type Invitation = typeof invitation;
