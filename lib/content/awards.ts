export type Award = {
  index: string;
  title: string;
  organization: string;
  year: string;
  context: string;
  team?: boolean;
};

export const awards: Award[] = [
  {
    index: "01",
    title: "Outstanding Individual Project Award",
    organization: "STEM Youth Boot Camp 5, ProjeKt Inspire",
    year: "2020",
    context: "Recognised for individual project development during the boot camp.",
  },
  {
    index: "02",
    title: "1st Place — Scale-Up Project",
    organization: "STEM Youth Boot Camp, ProjeKt Inspire",
    year: "2021",
    context:
      "Awarded for the STEM Skills Training Model (power generation prototype).",
  },
  {
    index: "03",
    title: "Clare Elwell Scholarship — Young Scientist for Africa",
    organization: "ProjeKt Inspire / London International Youth Science Forum",
    year: "2022",
    context:
      "Scholarship to attend the 63rd LIYSF in London, representing ProjeKt Inspire, Tanzania, and Africa.",
  },
  {
    index: "04",
    title: "National Finalist — MAKISATU",
    organization: "National Competition on Science, Technology and Innovation",
    year: "2022",
    context: "One of 88 finalists selected from more than 800 applicants nationwide.",
  },
  {
    index: "05",
    title: "Second Place, Skills Development category — Saba Saba",
    organization: "Vocational Education and Training Authority (VETA)",
    year: "2022",
    context:
      "Team award. Received by the VETA team at the 46th Dar es Salaam International Trade Fair; I participated as a VETA student innovator exhibiting two prototypes.",
    team: true,
  },
  {
    index: "06",
    title: "Team Recognition — Habitat for Humanity construction support",
    organization: "Alfred University",
    year: "2026",
    context:
      "Team award. Recognised as part of an Alfred University student team contributing to a housing project supporting retired veterans.",
    team: true,
  },
];

/**
 * Media outlets that covered the Military Security Robot Prototype (2022–2023).
 * `url` stays null until a verified link is supplied — no dead actions.
 */
export const mediaOutlets = [
  { name: "Azam TV", programme: "Morning Trumpet", type: "Television", url: null },
  { name: "Millard Ayo TV", programme: null, type: "Television", url: null },
  { name: "Uhondo TV", programme: null, type: "Television", url: null },
  { name: "Mchuzi Mx TV", programme: null, type: "Television", url: null },
  { name: "Times FM", programme: "Wapambanaji", type: "Radio", url: null },
  { name: "Nipashe", programme: null, type: "Newspaper", url: null },
  { name: "Mwananchi", programme: null, type: "Newspaper", url: null },
  { name: "Tanzania Daima", programme: null, type: "Newspaper", url: null },
  { name: "Majira", programme: null, type: "Newspaper", url: null },
] as const;
