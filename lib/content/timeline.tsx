import type React from "react";
export type Milestone = {
  id: string;
  period: string;
  chapter:
    | "Foundations"
    | "Training"
    | "Recognition"
    | "Global"
    | "Teaching"
    | "Now";
  title: string;
  location: string;
  body: React.ReactNode;
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
  period: "Secondary School",
  chapter: "Foundations",
  title: "Audio, antennas, and remote control",
  location: "Tanzania",

  body: (
    <div className="space-y-6">
      <p>
        As I progressed through secondary school, my projects became more
        advanced and practical. During this period, I worked on several creative
        and technical projects, including:
      </p>

      <ul className="list-disc pl-8 space-y-1">
        <li>Audio and Video Recording Systems</li>
        <li>Active Music Speaker</li>
        <li>Antenna Support Systems</li>
        <li>Data Support DS</li>
        <li>Musical Equipment (Drums and Guitars)</li>
        <li>Remote Car Toys</li>
      </ul>

      <p>
        These projects strengthened my practical skills and deepened my interest
        in engineering, electronics, and technology-based problem-solving.
      </p>

      <h3 className="text-xl font-bold">
        Leadership &amp; School Community Involvement
      </h3>

      <p>
        During secondary school, I also participated in several student clubs
        and school-based organizations, including:
      </p>

      <ul className="list-disc pl-8 space-y-2">
        <li>
          <strong>EWURA CCC</strong> — Energy and Water Utilities Regulatory
          Authority – Consumer Consultative Council
        </li>

        <li>
          <strong>Anti-Corruption Club</strong> — Prevention and Combating of
          Corruption Bureau (PCCB)
        </li>

        <li>
          <strong>
            Mwalimu Nyerere Research Chair in Pan-African Studies
          </strong>
        </li>
      </ul>

      <p>
        My participation in these clubs gave me opportunities to develop
        leadership, teamwork, communication, and coordination skills. Working
        with other students also helped me understand the importance of
        collaboration, responsibility, and shared problem-solving.
      </p>

      <p>
        These experiences complemented my technical interests by helping me
        develop not only as a young innovator, but also as a team member and
        emerging leader.
      </p>
    </div>
  ),

  tags: ["Electronics", "Leadership"],
},
{
  id: "veta",
  period: "2021 – 2024",
  chapter: "Training",
  title: "VETA Electronics Training",
  location: "Kigoma RVTSC & Kipawa ICTC, Tanzania",

  body: (
    <div className="space-y-6">
      <p>
  My technical abilities expanded significantly through vocational training
  in Electronics through the Vocational Education and Training Authority
  (VETA). I completed Levels I and II at Kigoma RVTSC and Electronics
  Engineering Level III at Kipawa ICTC, gaining hands-on experience in
  electronics, troubleshooting, prototyping, and system development.
</p>

      <p>
        Among the projects I developed were:
      </p>

      <ul className="list-disc pl-8 space-y-1">
        <li>
          STEM Skills Training Model (Power Generation Prototype)
        </li>
        <li>
          Military Security Robot Prototype
        </li>
      </ul>

      <p>
        These projects allowed me to combine theoretical knowledge with practical
        application while addressing educational and technological challenges.
      </p>
    </div>
  ),

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
    period: "May 2022 – July 2022",
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
  period: "2025 – Present",
  chapter: "Now",
  title: "Alfred University",
  location: "Alfred, New York",

  body: (
    <div className="space-y-6">
      <p>
        My journey continues at Alfred University, where I have expanded my
        academic, leadership, and innovation experiences. I am currently pursuing
        a Bachelor of Science in Business Administration, which is strengthening
        my knowledge in leadership, entrepreneurship, project management, and
        organizational development.
      </p>

      <p>
        While pursuing my degree, I remain actively engaged in technology,
        engineering, STEM outreach, and innovation-driven projects. My background
        in electronics and hands-on prototyping continues to inspire me to design,
        build, and improve practical solutions that address real-world challenges.
      </p>

      <p>
        In addition to my academic studies, I continue to explore opportunities
        in electronics, robotics, STEM education technologies, and engineering
        innovation. I am particularly interested in developing technologies that
        can create positive social impact while improving efficiency,
        accessibility, and problem-solving in different sectors.
      </p>

      <p>
        My experiences at Alfred University have reinforced my belief that
        innovation requires more than technical skills alone. By combining
        technology, business knowledge, leadership, and creativity, I aim to
        transform innovative ideas into sustainable solutions that can benefit
        communities and contribute to technological advancement.
      </p>

      <div className="border-t border-gray-700 pt-6 mt-8">
        <h3 className="text-xl md:text-2xl font-bold mb-5">
          Looking Ahead
        </h3>

        <div className="space-y-6">
          <p>
            As I continue my journey, my goal is to combine innovation,
            technology, leadership, and entrepreneurship to develop impactful
            solutions that improve lives and create opportunities for future
            generations.
          </p>

          <p>
            I envision a future where engineering innovation, STEM education,
            and emerging technologies play a greater role in solving real-world
            challenges. Through continuous learning, research, project
            development, and practical problem-solving, I am committed to
            contributing to technological advancement while creating solutions
            that address challenges in education, agriculture, energy, and
            community development.
          </p>

          <p>
            I believe that innovation is not only about creating new technologies
            but also about applying creativity, knowledge, and leadership to
            develop meaningful solutions that make a lasting impact on society.
          </p>
        </div>
      </div>
    </div>
  ),

  tags: ["Business Administration", "Innovation", "Leadership"],
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
