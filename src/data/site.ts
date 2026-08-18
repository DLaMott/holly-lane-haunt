// ---------------------------------------------------------------------------
// Single source of truth for all editable facts on the site.
// Update this file each season instead of hunting through page markup.
// ---------------------------------------------------------------------------

export const site = {
  name: "The Holly Lane Haunt",
  shortName: "Holly Lane Haunt",
  tagline: "Mocksville's Free Community Haunted Trail",
  description:
    "A free, volunteer-run haunted trail in Mocksville, NC featuring 100+ animatronics, 30 scarers, and 13 terrifying scenes. Open to the public, free admission, donations welcome.",
  url: "https://holly-lane-haunt.vercel.app", // TODO: update once custom domain is connected
};

export const stats = [
  { label: "Animatronics", value: "100+" },
  { label: "Live Scarers", value: "30" },
  { label: "Scenes", value: "13" },
  { label: "Admission", value: "Free" },
];

export const location = {
  address1: "206 Holly Lane",
  addressCity: "Mocksville",
  addressState: "NC",
  addressZip: "27028",
  addressFull: "206 Holly Lane, Mocksville, NC 27028",
  neighborhood: "Garden Valley Subdivision, off Sanford Avenue",
  // Geocoded coordinates for 206 Holly Lane, Mocksville, NC 27028 (OpenStreetMap Nominatim), used for the map embed & structured data.
  lat: 35.8878108,
  lng: -80.5753564,
  parkingNotes:
    "Street parking is available along Holly Lane and neighboring streets. Please park courteously, avoid blocking driveways and mailboxes, and follow any signage or volunteer directions on event nights. Arrive a little early on busy nights (the weekend of Halloween) to find a spot close by.",
};

// Flip `announced` to true and fill in real dates once they're confirmed for the season.
export const eventDates = {
  announced: true,
  year: 2026,
  weekendBefore: [
    { date: "2026-10-23", label: "Friday, October 23" },
    { date: "2026-10-24", label: "Saturday, October 24" },
  ],
  weekendOf: [
    { date: "2026-10-30", label: "Friday, October 30" },
    { date: "2026-10-31", label: "Saturday, October 31" },
  ],
  hours: "6:30 PM – 10:00 PM",
  hoursNote:
    "Hours are subject to change based on weather and other conditions.",
};

export const links = {
  facebook: "https://www.facebook.com/people/The-Holly-Lane-Haunt/100069570661981/",
  // TODO: add Instagram or other socials here if/when they exist
  venmo: "", // TODO: add real Venmo handle, e.g. "@Holly-Lane-Haunt"
  cashapp: "", // TODO: add real Cash App handle, e.g. "$HollyLaneHaunt"
};

export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: "How much does it cost to get in?",
    answer:
      "The Holly Lane Haunt is completely free to the public. We're a volunteer, community-funded event, and donations are always appreciated (never required) and help us add new scenes and effects each year.",
  },
  {
    question: "Is it scary for young kids?",
    answer:
      "It can be! The front of the trail is a gentler experience with a separate inflatable trail for younger visitors, while the back trail is a much more intense experience with fog, strobes, loud sound, and live scarers. Parents know their kids best. If you're unsure, start at the front.",
  },
  {
    question: "Can we go through more than once?",
    answer:
      "Yes, you're welcome to go through the trail as many times as you'd like during open hours.",
  },
  {
    question: "Is there parking?",
    answer:
      "Free street parking is available along Holly Lane and neighboring streets. Please be courteous of residents, don't block driveways or mailboxes, and follow volunteer directions on busy nights.",
  },
  {
    question: "Do you accept donations?",
    answer:
      "Donations are optional and never required for entry. If you'd like to support the haunt, look for the donation jar on site, or give via Venmo/Cash App (see the footer of this site for links once available).",
  },
  {
    question: "What should we bring or wear?",
    answer:
      "Comfortable closed-toe shoes and weather-appropriate clothing. Most of the trail is outdoors at night. Flashlights aren't necessary; the trail is lit for the experience.",
  },
  {
    question: "Is the trail wheelchair/stroller accessible?",
    answer:
      "The front section is generally accessible, but the back trail crosses uneven, unpaved yard terrain and is not stroller or wheelchair friendly. Please ask a volunteer on site if you have accessibility questions.",
  },
  {
    question: "Can we take photos or videos?",
    answer:
      "Absolutely, tag us on Facebook, we love seeing your haunt photos! Just be mindful of other guests and our scarers while filming.",
  },
  {
    question: "Do you hand out candy?",
    answer: "Yes, candy is handed out at the end of the trail.",
  },
  {
    question: "What happens if it rains?",
    answer:
      "The haunt typically runs rain or shine, but severe weather (lightning, high winds) may cause a delay or closure for safety. Check our Facebook page for real-time updates on event nights.",
  },
];

export type Scene = { number: number; name: string; description: string; photoKey?: string };

// 13 scenes. A few have real photos (see photoKey -> src/pages/attractions.astro image map).
// The rest are placeholder names/descriptions until the full lineup is finalized.
export const scenes: Scene[] = [
  { number: 1, name: "Crowley's Crypt", description: "The gates to the Crowley family mausoleum, your welcome into Holly Lane, guarded by a pair of very unfriendly gargoyles.", photoKey: "crowleysCrypt" },
  { number: 2, name: "Pumpkin Patch", description: "A glowing patch of jack-o-lanterns hides more than just vegetables." },
  { number: 3, name: "The Inflatable Trail", description: "A separate, gentler path built just for our youngest guests." },
  { number: 4, name: "The Witch's Shack", description: "Flying lessons by appointment only. A glowing green witch and her crooked fence mark the edge of her territory.", photoKey: "witchShack" },
  { number: 5, name: "House of Horror", description: "Step into the blacklight clown maze, where everything glows and nothing is where you think it is.", photoKey: "clownMaze" },
  { number: 6, name: "The Butcher's Den", description: "You can smell this one before you see it." },
  { number: 7, name: "The Asylum", description: "Padded walls, flickering lights, and patients who won't stay in their rooms." },
  { number: 8, name: "The Fungal Trail", description: "Something in the dark has been growing. It notices you before you notice it.", photoKey: "fungalTrail" },
  { number: 9, name: "The Ritual Grounds", description: "Deep in the trees, a coven is finishing a ritual, and you've interrupted it." },
  { number: 10, name: "The Animatronic Gauntlet", description: "Dozens of animatronics packed into one corridor of chaos." },
  { number: 11, name: "The Crawlspace", description: "Low light, tight spaces, and things that crawl faster than you'd like." },
  { number: 12, name: "The Chainsaw Yard", description: "The trail's most intense scare zone, not for the faint of heart." },
  { number: 13, name: "The Exit... Or Is It?", description: "You made it out. Candy's waiting. Probably safe now." },
];
