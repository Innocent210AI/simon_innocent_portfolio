export type Milestone = {
  id: string;
  period: string;
  chapter: "Foundations" | "Training" | "Recognition" | "Global" | "Teaching" | "Now";
  title: string;
  location: string;
  body: string;
  tags?: string[];
};

export const timeline: Milestone[] = [
  {
    id: "early-childhood",
    period: "Before primary school",
    chapter: "Foundations",
    title: "Innovation Journey",
    location: "Tanzania",
    body: "My innovation journey bergan long before I entered primary school. As a child, I was naturally curious about how things worked and enjoyed creating different objects using locally availablematerials. Although I did not have access to advanced tools or formal technical training at that time, these early experiences helped me develop creativity, problem-solving skills, and a passion  for innovation .",
    tags: ["Curiosity", "Making"],
  },
  {
    id: "Before Primary School",
    period: "Primary school",
    chapter: "Foundations",
    title: "Model houses and first wiring",
    location: "Tanzania",
    body: "Before starting formal education, I spent much of my time exploring, building, and experimenting with simple materials around me. I enjoyed creating objects and finding ways to improve or modify them. These experiences laid the foundation for my future interest in technology, engineering, and innovation.",
    tags: ["Electricity", "Design"],
  },
  {
    id: "secondary-school",
    period: "Secondary school",
    chapter: "Foundations",
    title: "Audio, antennas, and remote control",
    location: "Tanzania",
    body: "export default function SecondarySchoolJourney() {
  return (
    <section className="w-full py-12">
      <div className="max-w-4xl mx-auto px-6">
        
        <p className="text-base md:text-lg leading-relaxed mb-6">
          As I progressed through secondary school, my projects became more
          advanced and practical. During this period, I worked on several creative and
          technical projects, including:
        </p>

        <ul className="list-disc pl-6 space-y-2 mb-8 text-base md:text-lg">
          <li>Audio and Video Recording Systems</li>
          <li>Active Music Speaker</li>
          <li>Antenna Support Systems</li>
          <li>Data Support DS</li>
          <li>Musical Equipment (Drums and Guitars)</li>
          <li>Remote Car Toys</li>
        </ul>

        <p className="text-base md:text-lg leading-relaxed mb-10">
          These projects strengthened my practical skills and deepened my interest
          in engineering, electronics, and technology-based problem-solving.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Leadership &amp; School Community Involvement
        </h2>

        <p className="text-base md:text-lg leading-relaxed mb-6">
          During secondary school, I also participated in several student clubs and
          school-based organizations, including:
        </p>

        <ul className="list-disc pl-6 space-y-4 mb-8 text-base md:text-lg">
          <li>
            <strong>EWURA CCC</strong> — Energy and Water Utilities Regulatory Authority – Consumer Consultative Council
          </li>

          <li>
            <strong>Anti-Corruption Club</strong> — Prevention and Combating of Corruption Bureau (PCCB)
          </li>

          <li>
            <strong>Mwalimu Nyerere Research Chair in Pan-African Studies</strong>
          </li>
        </ul>

        <p className="text-base md:text-lg leading-relaxed mb-6">
          My participation in these clubs gave me opportunities to develop
          leadership, teamwork, communication, and coordination skills. Working with
          other students also helped me understand the importance of collaboration,
          responsibility, and shared problem-solving. 
        </p>

        <p className="text-base md:text-lg leading-relaxed">
          These experiences complemented my technical interests by helping me develop not only as a young innovator, but also as a team member and emerging leader.
        </p>

      </div>
    </section>
  );
}
    
 .",
    tags: ["Electronics", "Leadership"],
  },
  {
    id: "veta",
    period: "2021 – 2024",
    chapter: "Training",
    title: "VETA electronics training",
    location: "Kigoma RVTSC & Kipawa ICTC, Tanzania",
    body: "Vocational training in electronics took the self-taught work and gave it structure: troubleshooting, prototyping, and system development. Levels I and II at Kigoma RVTSC, Electronics Engineering Level III at Kipawa ICTC. This is where the STEM Skills Training Model and the Military Security Robot were built.",
    tags: ["Electronics Engineering", "Prototyping"],
  },
  {
    id: "boot-camp-2020",
    period: "2020",
    chapter: "Recognition",
    title: "Outstanding Individual Project Award",
    location: "STEM Youth Boot Camp 5, Tanzania",
    body: "Recognised for individual project development at STEM Youth Boot Camp 5 — the first time the work was measured against other young innovators.",
    tags: ["Award"],
  },
  {
    id: "boot-camp-2021",
    period: "2021",
    chapter: "Recognition",
    title: "1st place, Scale-Up Project",
    location: "STEM Youth Boot Camp, ProjeKt Inspire",
    body: "The STEM Skills Training Model (power generation prototype) took first place in the Scale-Up Project category.",
    tags: ["Award", "STEM Education"],
  },
  {
    id: "security-robot",
    period: "2022",
    chapter: "Recognition",
    title: "Military Security Robot Prototype",
    location: "VETA, Tanzania",
    body: "A remotely operated inspection robot built from locally sourced components, with LED signalling and an alarm system. It became the project that opened the most doors.",
    tags: ["Robotics", "Prototype"],
  },
  {
    id: "makisatu-sabasaba",
    period: "May – July 2022",
    chapter: "Recognition",
    title: "MAKISATU national finalist and Saba Saba",
    location: "Dodoma & Dar es Salaam, Tanzania",
    body: "Selected as one of 88 finalists from more than 800 national applicants for MAKISATU, presenting the STEM Skills Training Model. In July, both prototypes were shown at the 46th Dar es Salaam International Trade Fair as part of the VETA exhibition — the VETA team received Second Place in the Skills Development category.",
    tags: ["National finalist", "Exhibition"],
  },
  {
    id: "liysf",
    period: "August 2022",
    chapter: "Global",
    title: "London International Youth Science Forum",
    location: "London, United Kingdom",
    body: "Attended the 63rd LIYSF as a Clare Elwell Scholarship recipient and Young Scientist for Africa, representing ProjeKt Inspire, Tanzania, and Africa. Presented both prototypes at the Science Bazaar within a cohort of more than 500 young scientists from over 70 countries.",
    tags: ["Scholarship", "International"],
  },
  {
    id: "projekt-inspire",
    period: "March 2023 – June 2025",
    chapter: "Teaching",
    title: "ProjeKt Inspire — STEM instructor and mentor",
    location: "Kagera, Tanga, Arusha & Dar es Salaam, Tanzania",
    body: "Two years of teaching: eight schools in Bukoba District reaching approximately 3,000 students, two schools in Arusha, Assistant Instructor in the Engineering class at STEM Youth Boot Camps 7 and 8, and Saturday STEM Sessions at STEM Park Dar es Salaam.",
    tags: ["STEM Education", "Mentorship"],
  },
  {
    id: "jamii-tech",
    period: "2024",
    chapter: "Teaching",
    title: "Jamii Tech Incubation Program",
    location: "Twende Innovation Social Center, Arusha",
    body: "Selected as one of 15 participants from more than 100 applicants. Our three-person team built the Manual Rice Planter Machine and received seed funding support to continue development.",
    tags: ["Incubation", "Agriculture"],
  },
  {
    id: "jnia",
    period: "January – March 2024",
    chapter: "Training",
    title: "Electronics Technician Intern",
    location: "Julius Nyerere International Airport, Dar es Salaam",
    body: "VETA Level 3 industrial training with the Tanzania Airports Authority: inspecting and troubleshooting X-ray inspection systems, power supply units, handheld metal detectors, digital telephone systems, and PA and microphone systems.",
    tags: ["Industry", "Troubleshooting"],
  },
  {
    id: "alfred",
    period: "2025 – present",
    chapter: "Now",
    title: "Alfred University",
    location: "Alfred, New York",
    body: "Pursuing a Bachelor of Science in Business Administration. Electronics taught me how to build systems; business is teaching me how to make them sustainable.",
    tags: ["Business Administration"],
  },
  {
    id: "step-lab",
    period: "January 2026 – present",
    chapter: "Now",
    title: "Engineering Lab Support Staff, STEP Lab",
    location: "Alfred University",
    body: "Supporting the Student Engineering Project Lab: maintaining a safe and organised workspace, contributing to STEAM-focused research initiatives, and supporting students working on their own engineering projects.",
    tags: ["Engineering support"],
  },
  {
    id: "arc",
    period: "March 2026 – present",
    chapter: "Now",
    title: "President, Alfred Robotics Club",
    location: "Alfred University",
    body: "Coordinating club activities, supporting members exploring robotics and STEAM projects, and contributing to outreach and engagement.",
    tags: ["Leadership", "Robotics"],
  },
];

export const timelineChapters = [
  "All",
  "Foundations",
  "Training",
  "Recognition",
  "Global",
  "Teaching",
  "Now",
] as const;
