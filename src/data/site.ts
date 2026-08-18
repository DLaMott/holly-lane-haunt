// ---------------------------------------------------------------------------
// Single source of truth for all editable facts on the site.
// Update this file each season instead of hunting through page markup.
// ---------------------------------------------------------------------------

export const site = {
  name: "The Holly Lane Haunt",
  shortName: "Holly Lane Haunt",
  tagline: "Mocksville's Free Community Haunted Trail",
  description:
    "A free, volunteer-run haunted trail in Mocksville, NC featuring 100+ animatronics, 30 scarers, and 14 terrifying scenes. Open to the public, free admission, donations welcome.",
  url: "https://holly-lane-haunt.vercel.app", // TODO: update once custom domain is connected
};

export const stats = [
  { label: "Animatronics", value: "100+" },
  { label: "Live Scarers", value: "30+" },
  { label: "Scenes", value: "14" },
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

// 14 scenes. A few have real photos (see photoKey -> src/pages/attractions.astro image map).
export const scenes: Scene[] = [
  { number: 1, name: "Crowley's Crypt", description: "The gates to the Crowley family mausoleum, your welcome into Holly Lane, guarded by a pair of very unfriendly gargoyles.", photoKey: "crowleysCrypt" },
  { number: 2, name: "Graveside Hollow", description: "A fog-choked hollow of leaning headstones, where the ground doesn't feel done settling." },
  { number: 3, name: "Swamp Water Cauldron", description: "A bubbling backwoods cauldron deep in the muck, tended by something that's been stirring far too long.", photoKey: "witchShack" },
  { number: 4, name: "Suicide By Spider", description: "Web after web after web. Turning back means admitting defeat; pressing on means finding out what's spinning them." },
  { number: 5, name: "Electrocution Alley", description: "Buzzing wires, sparking fixtures, and a corridor that hums louder the deeper you go." },
  { number: 6, name: "The House of Horror", description: "Step into the blacklight clown maze, where everything glows and nothing is where you think it is.", photoKey: "clownMaze" },
  { number: 7, name: "Derry Sewer System", description: "Down where the pipes echo, something's been waiting in the dark since long before you got here." },
  { number: 8, name: "Seventh Circus of Hell", description: "Ringmasters, red light, and performers who never actually clocked out." },
  { number: 9, name: "Insidious", description: "The lights flicker, the shadows don't match the room, and something's been following you since the entrance." },
  { number: 10, name: "Silent Woods", description: "The trail goes quiet here. Too quiet. Whatever's watching from the trees knows better than to make a sound.", photoKey: "fungalTrail" },
  { number: 11, name: "Gabe's Chop Shop", description: "A working butcher shop that stopped asking where the meat comes from a long time ago. Gabe just keeps sharpening." },
  { number: 12, name: "LaMott Industries", description: "A research lab that spent years dissecting things that shouldn't exist. Containment didn't hold, and neither did the specimens." },
  { number: 13, name: "NEW FOR 2026 (Name Not Released)", description: "Under construction and top secret. The name isn't out yet, but the crew building it hasn't slept much this fall." },
  { number: 14, name: "NEW FOR 2026 (Name Not Released)", description: "Another brand-new build for this season, kept under wraps until opening night." },
];
