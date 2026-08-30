export type ExperienceGroup =
  | "Technical Practice"
  | "Leadership"
  | "STEM Education"
  | "Global Engagement"
  | "Community Work";

export type Experience = {
  group: ExperienceGroup;
  organization: string;
  role: string;
  date: string;
  location: string;
  points: string[];
  related?: { label: string; to: string };
};

export const experienceGroups: ExperienceGroup[] = [
  "Technical Practice",
  "Leadership",
  "STEM Education",
  "Global Engagement",
  "Community Work",
];

export const experiences: Experience[] = [
  {
    group: "Technical Practice",
    organization: "Alfred University — STEP Lab (Student Engineering Project Lab)",
    role: "Engineering Lab Support Staff",
    date: "January 2026 – present",
    location: "Alfred, New York",
    points: [
      "Keep the lab environment organised and properly maintained for safe engineering activity.",
      "Contribute to STEAM-focused research initiatives.",
      "Support students working on personal engineering projects centred on innovation and design.",
    ],
  },
  {
    group: "Technical Practice",
    organization: "Tanzania Airports Authority — Julius Nyerere International Airport",
    role: "Electronics Technician Intern (VETA Level 3 industrial training)",
    date: "January – March 2024",
    location: "Dar es Salaam, Tanzania",
    points: [
      "Inspected and troubleshot electronic equipment to identify faults and operational issues.",
      "Worked with X-ray inspection systems, power supply units, handheld metal detectors, digital telephone systems, and PA and microphone systems.",
      "Assisted with configuration, testing, and functional checks on electronic devices.",
    ],
  },
  {
    group: "Technical Practice",
    organization: "VETA Kigoma RVTSC and VETA Kipawa ICTC",
    role: "Electronics trainee and student innovator",
    date: "2021 – 2024",
    location: "Kigoma & Dar es Salaam, Tanzania",
    points: [
      "Hands-on training in electronics, troubleshooting, prototyping, and system development.",
      "Designed and built the STEM Skills Training Model and the Military Security Robot Prototype.",
    ],
    related: { label: "See the flagship case study", to: "/work/military-security-robot-prototype" },
  },
  {
    group: "Leadership",
    organization: "Alfred Robotics Club",
    role: "President",
    date: "March 2026 – present",
    location: "Alfred, New York",
    points: [
      "Coordinate club activities and meetings.",
      "Support members exploring robotics and STEAM projects.",
      "Contribute to outreach and engagement activities.",
    ],
  },
  {
    group: "Leadership",
    organization: "VETA Kipawa ICTC Student Government",
    role: "Minister of Health and Environment",
    date: "2023 – 2024",
    location: "Dar es Salaam, Tanzania",
    points: [
      "Supported health and environmental awareness activities among students.",
      "Coordinated initiatives with fellow student leaders across the student body.",
    ],
  },
  {
    group: "Leadership",
    organization: "VETA Kigoma RVTSC Student Government",
    role: "Timekeeper & Activities Coordinator",
    date: "2021 – 2022",
    location: "Kigoma, Tanzania",
    points: [
      "Coordinated student activities and scheduled programmes.",
      "Maintained time management during meetings and events.",
    ],
  },
  {
    group: "STEM Education",
    organization: "ProjeKt Inspire",
    role: "STEM Instructor, Assistant Instructor & Volunteer STEM Educator",
    date: "March 2023 – June 2025",
    location: "Tanzania",
    points: [
      "Facilitated practical STEM sessions and project-based classes.",
      "Guided students through engineering, robotics, electronics, and design activities.",
      "Prepared STEM kits and materials for school-based sessions.",
      "Supported Saturday STEM Sessions at STEM Park Dar es Salaam.",
    ],
    related: { label: "See the impact record", to: "/impact" },
  },
  {
    group: "STEM Education",
    organization: "STEM Youth Boot Camps 7 & 8",
    role: "Assistant Instructor, Engineering class",
    date: "2023 & 2024",
    location: "Tanga & NM-AIST, Tanzania",
    points: [
      "Boot Camp 7: guided a delivery drone design session covering circuits, components, and engineering design.",
      "Boot Camp 8: supported sessions on AI in infrastructure, chatbots, drone technology, and agricultural drone applications.",
    ],
  },
  {
    group: "STEM Education",
    organization: "ProjeKt Inspire 10th Anniversary",
    role: "Speaker",
    date: "2025",
    location: "Tanzania",
    points: [
      "Shared my STEM journey at the “Decade of STEM Transformation in Tanzania” celebration, with Hon. Prof. Adolf Mkenda, Minister of Education, as guest of honour.",
    ],
  },
  {
    group: "Global Engagement",
    organization: "63rd London International Youth Science Forum",
    role: "Young Scientist for Africa & innovation presenter",
    date: "August 2022",
    location: "London, United Kingdom",
    points: [
      "Attended on a Clare Elwell Scholarship, representing ProjeKt Inspire, Tanzania, and Africa.",
      "Presented the Military Security Robot Prototype and STEM Skills Training Model at the Science Bazaar.",
      "Joined a cohort of more than 500 young scientists from over 70 countries.",
    ],
    related: { label: "Read the London chapter", to: "/impact" },
  },
  {
    group: "Global Engagement",
    organization: "MAKISATU — National Competition on Science, Technology and Innovation",
    role: "National finalist",
    date: "May 2022",
    location: "Dodoma, Tanzania",
    points: [
      "One of 88 finalists selected from more than 800 applicants nationwide.",
      "Represented the vocational education and training sector with the STEM Skills Training Model.",
      "Participated in a COSTECH and Sahara Ventures workshop on innovation promotion and commercialisation.",
    ],
  },
  {
    group: "Global Engagement",
    organization: "African Union Students' Platform",
    role: "Member of Parliament",
    date: "2023 – 2024",
    location: "Pan-African (virtual)",
    points: [
      "Participated in youth policy discussion and continental student representation.",
    ],
  },
  {
    group: "Community Work",
    organization: "Habitat for Humanity (with Alfred University)",
    role: "Student volunteer, construction support",
    date: "2026",
    location: "Florida, United States",
    points: [
      "Contributed to a housing project supporting retired veterans as part of an Alfred University student team.",
    ],
  },
  {
    group: "Community Work",
    organization: "Think Green Club",
    role: "Member",
    date: "2025",
    location: "Tanzania",
    points: [
      "Participated in environmental outreach and community activities, including Think Green EcoLeaders Arise 2025.",
    ],
  },
  {
    group: "Community Work",
    organization: "Tanzania Emerging Youth Awards (TEYA)",
    role: "Contributor",
    date: "2024 – 2025",
    location: "Tanzania",
    points: [
      "Supported partnership development, resource mobilisation, and stakeholder engagement around youth recognition.",
    ],
  },
];

export const education = [
  {
    institution: "VETA Kigoma RVTSC",
    credential: "Vocational Training, Levels I & II",
    field: "Electronics and technical skills",
    period: "2021 – 2022",
  },
  {
    institution: "VETA Kipawa ICTC",
    credential: "Electronics Engineering, Level III",
    field: "Advanced electronics, prototyping, and practical technical training",
    period: "2023 – 2024",
  },
  {
    institution: "Alfred University",
    credential: "Bachelor of Science, Business Administration",
    field: "Leadership, entrepreneurship, project management, and organisational development",
    period: "2025 – present",
  },
];

export const capabilities = [
  {
    group: "Technical",
    items: [
      "Electronics assembly",
      "Soldering",
      "Circuit integration",
      "Troubleshooting",
      "Prototype development",
      "Technical drawing",
      "Robotics",
      "System testing",
    ],
  },
  {
    group: "Innovation",
    items: [
      "Design thinking",
      "Creative problem-solving",
      "Product ideation",
      "Locally sourced prototyping",
      "Iterative development",
    ],
  },
  {
    group: "Education",
    items: [
      "STEM instruction",
      "Student mentorship",
      "Practical demonstrations",
      "Technical communication",
      "Youth outreach",
    ],
  },
  {
    group: "Leadership & business",
    items: [
      "Team coordination",
      "Public speaking",
      "Program support",
      "Stakeholder engagement",
      "Entrepreneurship",
      "Project organisation",
    ],
  },
];
