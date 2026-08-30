export const kageraSchools = [
  "Kashai Secondary School",
  "Bilele Secondary School",
  "Rumuli Secondary School",
  "Bukoba Secondary School",
  "Kolopingi English Medium Secondary and Primary School",
  "Kahororo High School",
  "Ihungo High School",
  "Nyanshenye Secondary School",
];

export const arushaSchools = ["St. Jude Arusha", "Kimaseki Secondary School"];

export type FieldNote = {
  index: string;
  title: string;
  place: string;
  date: string;
  body: string;
  stat?: string;
};

export const fieldNotes: FieldNote[] = [
  {
    index: "01",
    title: "Kagera STEM outreach",
    place: "Bukoba District, Kagera",
    date: "April 2023",
    body: "Ahead of the 7th STEM Youth Boot Camp, I visited eight secondary schools and spoke with students from Form I to Form VI, along with their teachers, about STEM education, innovation, creativity, and practical problem-solving.",
    stat: "~3,000 students reached across 8 schools",
  },
  {
    index: "02",
    title: "Student mentorship to Tanga",
    place: "Kagera → Tanga",
    date: "2023",
    body: "After the outreach I guided a team of three students selected from the wider group as they prepared to travel to the boot camp. One of them went on to take Second Place in the Individual Project Presentation.",
    stat: "3 students mentored · 1 placed 2nd",
  },
  {
    index: "03",
    title: "STEM Youth Boot Camp 7",
    place: "STEM Park Kisosora, Tanga",
    date: "2023",
    body: "Assistant Instructor in the Engineering class, theme “Letting STEM Lead the Way Towards Climate Action”. Students worked through a delivery drone design session covering electronic circuits, components, drone technology, and engineering design.",
  },
  {
    index: "04",
    title: "Arusha outreach",
    place: "Arusha",
    date: "2024",
    body: "Two schools visited in preparation for the 8th STEM Youth Boot Camp, introducing students to STEM education, innovation, and practical learning opportunities.",
    stat: "2 schools visited",
  },
  {
    index: "05",
    title: "STEM Youth Boot Camp 8",
    place: "NM-AIST, Arusha",
    date: "2024",
    body: "Assistant Instructor again in the Engineering class, theme “Innovate for Tomorrow's Infrastructure”. Sessions covered artificial intelligence in infrastructure, chatbot technology, drones for agriculture, and basic electronics — including a student activity designing a drone concept for agricultural irrigation.",
  },
  {
    index: "06",
    title: "Saturday STEM Sessions",
    place: "STEM Park Dar es Salaam",
    date: "2023 – 2025",
    body: "Weekly practical sessions: science experiments and demonstrations, robotics and electronics activities, design challenges, and building and testing simple prototypes. I also prepared the STEM kits and learning materials used for school sessions.",
  },
];

export const londonHighlights = [
  {
    title: "International representation",
    body: "Selected as a Young Scientist for Africa through ProjeKt Inspire, representing Tanzania and Africa at the 63rd LIYSF.",
  },
  {
    title: "Innovation presentation",
    body: "Presented the Military Security Robot Prototype and the STEM Skills Training Model at the Science Bazaar.",
  },
  {
    title: "Academic exposure",
    body: "Visited scientific and learning environments at Imperial College London and Oxford University.",
  },
  {
    title: "Industrial exposure",
    body: "Toured the Morgan Motor Company manufacturing plant and the London Science Museum.",
  },
  {
    title: "Global collaboration",
    body: "Joined a cohort of more than 500 young scientists from over 70 countries for scientific learning and exchange.",
  },
  {
    title: "Cultural exchange",
    body: "Took part in international cultural activities including the International Cabaret.",
  },
];

export const route = {
  from: { name: "Dar es Salaam, Tanzania", coords: "6.7924° S, 39.2083° E" },
  to: { name: "London, United Kingdom", coords: "51.5072° N, 0.1276° W" },
  date: "August 2022",
};
