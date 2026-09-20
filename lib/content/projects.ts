export type ProjectCategory =
  | "Robotics & Automation"
  | "Electronics"
  | "STEM Education"
  | "Renewable Energy"
  | "Agriculture"
  | "Data & Software"
  | "Product Design";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  year: string;
  type: string;
  status: string;
  purpose: string;
  summary: string;
  featured?: "flagship" | "medium" | "support";
  skills: string[];
  intendedApplication?: string;
  limitations?: string;
  caseStudy?: {
    context?: string[];
    problem?: string[];
    solution?: string[];
    process?: { title: string; items: string[] }[];
    tools?: { title: string; items: string[] }[];
    challenges?: string[];
    outcome?: string[];
    showcases?: { title: string; detail: string }[];
    future?: string[];
    contribution?: string[];
  };
};

export const projects: Project[] = [
  {
  slug: "military-security-robot-prototype",
  title: "Military Security Robot Prototype",
  category: "Robotics & Automation",
  year: "2022",
  type: "Individual Project",
  status: "Prototype",
  featured: "flagship",

  purpose:
    "A remotely operated robotic prototype developed to explore how robotics and electronics can support security monitoring, inspection, and surveillance activities while reducing direct human exposure to potentially hazardous environments.",

  summary:
    "Designed and developed using locally available components during my electronics training at VETA, the prototype combined remote-control operation, movement, LED signaling, and an alarm system. It was later demonstrated publicly in Tanzania and internationally in London.",

  skills: [
    "Robotics",
    "Electronics",
    "Prototype Development",
    "Engineering Design",
    "Technical Drawing",
    "Soldering",
    "System Integration",
    "Problem Solving",
    "Troubleshooting",
    "Innovation & Creativity",
    "Technical Communication",
    "Public Presentation",
    "STEM Outreach",
  ],

  intendedApplication:
    "Remote inspection, observation, and monitoring support in environments where direct human access may involve unnecessary risk.",

  limitations:
    "The project remains a prototype. Its remote-control system is transmitter/receiver based, and the prototype does not currently include autonomous navigation, advanced sensing, wireless data transmission, or intelligent monitoring capabilities. It has not been tested or deployed in an operational security environment.",

  caseStudy: {
    context: [
      "The idea for the Military Security Robot Prototype was inspired by the rapid advancement of science and technology around the world, particularly in robotics and automation. I was also interested in situations where security personnel and soldiers may be exposed to significant risks while carrying out inspection and monitoring activities.",

      "I wanted to explore how robotic technology could be used to assist in environments that may pose safety challenges to humans. This interest led me to design and build a remotely operated prototype capable of being controlled from a distance while performing basic inspection and monitoring functions.",

      "The project became an opportunity for me to apply my electronics knowledge, creativity, and engineering problem-solving skills to the development of a practical technology concept.",
    ],

    problem: [
      "Security personnel are often required to inspect unfamiliar or potentially hazardous environments. Conducting inspections in such areas may expose individuals to unnecessary risks and operational challenges.",

      "Monitoring activities at transportation hubs, restricted areas, and other sensitive locations can also require continuous observation and information gathering to support decision-making and improve overall security operations.",
    ],

    solution: [
      "To address these challenges, I designed and developed a remotely operated robotic prototype intended to assist with security monitoring and inspection activities.",

      "The robot was designed to move within an environment while allowing an operator to control its movements from a distance. The prototype incorporated several electronic features to support demonstration and signaling functions, including LED indicator lights and an alarm system.",

      "The project demonstrates how robotic systems can be utilized as supporting tools for monitoring, inspection, and information-gathering activities while reducing direct human involvement in potentially risky situations.",
    ],

    process: [
      {
        title: "01 — Concept Development",
        items: [
          "Identified the problem and defined the main project objectives.",
          "Researched the potential use of robotics in security, monitoring, and inspection applications.",
        ],
      },
      {
        title: "02 — System Design",
        items: [
          "Created the initial design concept and overall robot structure.",
          "Planned the arrangement of electronic and mechanical components.",
        ],
      },
      {
        title: "03 — Chassis and Body Construction",
        items: [
          "Designed and built the robot chassis and body structure.",
          "Selected locally available materials to support construction.",
        ],
      },
      {
        title: "04 — Electronics Integration",
        items: [
          "Installed a transmitter and receiver-based remote-control system.",
          "Integrated LED indicator lights for signaling purposes.",
          "Added an alarm system to demonstrate alert functions.",
          "Connected and tested electronic circuits and power supply systems.",
        ],
      },
      {
        title: "05 — Testing and Improvement",
        items: [
          "Conducted multiple rounds of prototype testing.",
          "Evaluated movement performance and remote-control reliability.",
          "Made design adjustments and improvements where necessary.",
        ],
      },
    ],

    tools: [
      {
        title: "Hardware & Electronics",
        items: [
          "Remote Control Transmitter",
          "Remote Control Receiver",
          "DC Motors",
          "LED Indicator Lights",
          "Alarm System",
          "Electronic Circuits",
          "Power Supply Components",
        ],
      },
      {
        title: "Technical Skills Applied",
        items: [
          "Electronics Assembly",
          "Soldering",
          "Technical Drawing",
          "Prototype Development",
          "System Integration",
          "Troubleshooting",
        ],
      },
    ],

    challenges: [
      "One of the main challenges during the development process was limited access to specialized equipment, tools, and materials.",

      "As a result, I relied heavily on components and resources that were available within my local environment. This required creativity, adaptability, and problem-solving throughout the design and construction process.",

      "Despite these limitations, I successfully completed a functional prototype and demonstrated its intended concept.",
    ],

    outcome: [
      "The project successfully demonstrated the practical application of robotics, electronics, and engineering design principles within a security-focused concept.",

      "The prototype also provided opportunities for public engagement, technology demonstration, and international exposure.",

      "Through presenting the project to different audiences, I also strengthened my ability to communicate technical ideas and explain the purpose and potential application of an engineering prototype.",
    ],

    showcases: [
      {
        title:
          "46th Dar es Salaam International Trade Fair (Saba Saba Exhibition), 2022",
        detail:
          "The Military Security Robot Prototype was showcased as part of the Vocational Education and Training Authority (VETA) innovation exhibition, providing an opportunity to demonstrate the project to visitors, educators, industry representatives, and members of the public.",
      },
      {
        title:
          "63rd London International Youth Science Forum (LIYSF), 2022",
        detail:
          "The prototype was presented during the Science Bazaar at the London International Youth Science Forum (LIYSF 2022), where it was introduced to an international audience of students, educators, researchers, and STEM enthusiasts from around the world.",
      },
    ],

    future: [
      "Integrate advanced sensors to improve environmental awareness and monitoring capabilities.",
      "Introduce wireless communication and data transmission systems.",
      "Explore intelligent monitoring capabilities and enhanced navigation features.",
      "Further refine the robot's mechanical and electronic systems through continued prototyping and testing.",
      "Continue exploring robotics, automation, and intelligent technologies through collaboration, research, and future project development.",
    ],
  },
},
  {
    slug: "stem-skills-training-model",
    title: "STEM Skills Training Model",
    category: "STEM Education",
    year: "2021",
    type: "Individual project",
    status: "Prototype",
    featured: "medium",
    purpose:
      "A power generation teaching model that makes electricity generation, transmission, and distribution visible and touchable for students.",
    summary:
      "Built to close the gap between board diagrams and real components in Tanzanian science classrooms. Presented at MAKISATU 2022 and Saba Saba 2022.",
    skills: [
      "Electronics assembly",
      "Circuit integration",
      "Educational design",
      "Prototype development",
      "Technical communication",
    ],
    intendedApplication:
      "Hands-on demonstration tool for secondary school science and STEM programmes.",
    limitations:
      "A demonstration model rather than a classroom-certified kit; durability and safety hardening would be required for wide school deployment.",
    caseStudy: {
      context: [
        "Through primary and secondary school, most physics teaching I encountered happened on the board: circuit symbols, switches, and bulbs drawn in chalk.",
        "Students rarely handled the real components, and that distance between the diagram and the object made the subject harder than it needed to be.",
      ],
      problem: [
        "Many students learn STEM subjects through theory without access to practical demonstrations.",
        "The gap between theory and practice reduces confidence and performance in science subjects.",
      ],
      solution: [
        "A model that walks a learner through the full chain — generation, transmission, and distribution — as a physical system they can observe and interact with.",
        "It supports lessons on electrical circuits, energy generation, magnetism, simple and complex machines, and distribution.",
      ],
      tools: [
        {
          title: "Skills applied",
          items: [
            "Electronics assembly",
            "Circuit design and integration",
            "Prototype construction",
            "Educational demonstration",
            "Public presentation",
          ],
        },
      ],
      outcome: [
        "The model won 1st place in the STEM Youth Boot Camp Scale-Up Project (ProjeKt Inspire, 2021).",
        "It was presented at MAKISATU 2022 as an example of a practical STEM education innovation, and at the Saba Saba 2022 VETA exhibition.",
        "It was also one of the two projects presented at the LIYSF 2022 Science Bazaar in London.",
      ],
      showcases: [
        {
          title: "STEM Youth Boot Camp, December 2021",
          detail: "1st place, Scale-Up Project category.",
        },
        {
          title: "MAKISATU 2022, Dodoma",
          detail:
            "Presented representing the vocational education and training sector as one of 88 national finalists.",
        },
      ],
      future: [
        "Develop classroom-ready versions that schools can keep and maintain.",
        "Expand the accompanying teaching documentation.",
      ],
    },
  },
  {
    slug: "manual-rice-planter-machine",
    title: "Manual Rice Planter Machine",
    category: "Agriculture",
    year: "2024",
    type: "Team project (3 members)",
    status: "Functional prototype",
    featured: "medium",
    purpose:
      "A manually operated planting machine developed to reduce the labour and time cost of traditional rice planting.",
    summary:
      "Built during the Jamii Tech Incubation Program at Twende Innovation Social Center, Arusha. The team received seed funding to continue development.",
    skills: [
      "Technical drawing",
      "Welding",
      "Precision measurement",
      "Metal fabrication",
      "Mechanical assembly",
      "Team collaboration",
    ],
    intendedApplication: "Smallholder rice farming in Tanzania.",
    limitations:
      "An initial functional prototype. Field performance, durability, and productivity gains have not been measured at scale.",
    caseStudy: {
      context: [
        "The project began inside the Jamii Tech Incubation Program at Twende Innovation Social Center in Arusha, where I was one of 15 participants selected from more than 100 applicants.",
        "Our three-person team studied the way rice is planted by hand locally and looked for a mechanism that could be built and repaired with materials farmers already have access to.",
      ],
      problem: [
        "Traditional rice planting is labour intensive and slow.",
        "Time spent planting limits how much land a household can cultivate in a season.",
      ],
      solution: [
        "A simple, affordable planting mechanism aimed at improving planting efficiency, reducing manual labour, and saving time during planting operations.",
      ],
      process: [
        {
          title: "01 — Problem research",
          items: [
            "Studied challenges faced by rice farmers.",
            "Identified inefficiencies in traditional planting methods.",
          ],
        },
        {
          title: "02 — Concept development",
          items: [
            "Generated and evaluated concepts against practicality, affordability, and usability.",
          ],
        },
        {
          title: "03 — Prototype design",
          items: [
            "Prepared technical sketches and measurements.",
            "Designed the machine structure and planting mechanism.",
          ],
        },
        {
          title: "04 — Fabrication and assembly",
          items: [
            "Cut and prepared metal components.",
            "Welded and assembled the structure.",
            "Tested and adjusted the assembled machine.",
          ],
        },
      ],
      contribution: [
        "Technical drawing and design preparation.",
        "Precision measurement of components.",
        "Metal fabrication and welding.",
        "Prototype construction and testing.",
      ],
      tools: [
        {
          title: "Materials and equipment",
          items: [
            "Steel and metal components",
            "Welding equipment",
            "Measuring tools",
            "Mechanical assembly components",
          ],
        },
      ],
      challenges: [
        "Developing a working prototype inside the limits of available materials, equipment, and programme timelines.",
      ],
      outcome: [
        "The team produced a functional prototype demonstrating a practical planting solution.",
        "Twende Innovation Social Center provided seed funding support for further development.",
        "The team registered a startup company name associated with the innovation.",
      ],
      future: [
        "Improve the planting mechanism and durability.",
        "Run expanded testing in agricultural environments.",
        "Collaborate with agricultural institutions and equipment manufacturers.",
      ],
    },
  },
  {
    slug: "tesla-coil",
    title: "Tesla Coil",
    category: "STEM Education",
    year: "2025",
    type: "Individual project",
    status: "Functional prototype",
    featured: "support",
    purpose:
      "An educational Tesla coil that turns electromagnetic induction and wireless energy transfer into something students can watch happen.",
    summary:
      "Designed, wound, and tested independently, then demonstrated at a primary school exhibition.",
    skills: [
      "Circuit design",
      "Coil winding",
      "Soldering",
      "Testing and troubleshooting",
      "Educational demonstration",
    ],
    intendedApplication: "Classroom demonstration of electricity and magnetism.",
    limitations:
      "High-voltage demonstration hardware that requires supervision; safety hardening is part of planned future work.",
    caseStudy: {
      context: [
        "Electricity, magnetism, and induction are commonly taught through diagrams alone. A live demonstration changes how much of it sticks.",
      ],
      problem: [
        "Limited access to practical demonstrations.",
        "Difficulty visualising electromagnetic principles.",
        "Reliance on memorisation instead of understanding.",
      ],
      solution: [
        "A simplified Tesla coil that lets learners see primary and secondary coil behaviour, magnetic fields, and energy transfer in operation — with a fluorescent lamp as the visible indicator.",
      ],
      process: [
        {
          title: "01 — Research and concept",
          items: [
            "Studied Tesla coil operating principles.",
            "Developed a simplified design suitable for learning environments.",
          ],
        },
        {
          title: "02 — Circuit design",
          items: [
            "Designed the circuit layout and selected components.",
            "Planned the primary and secondary coil configuration.",
          ],
        },
        {
          title: "03 — Construction",
          items: [
            "Wound and assembled the coils.",
            "Installed transistor, resistor, heat sink, and switching components.",
            "Built the supporting structure and protective housing.",
          ],
        },
        {
          title: "04 — Testing and optimisation",
          items: [
            "Tested electrical performance.",
            "Refined the build for reliability and demonstration clarity.",
          ],
        },
      ],
      tools: [
        {
          title: "Electronic components",
          items: [
            "Transistor",
            "Resistor",
            "Heat sink",
            "Copper wire",
            "Switch",
          ],
        },
        {
          title: "Structure and demonstration",
          items: ["PVC pipe", "Protective housing", "Fluorescent lamp"],
        },
      ],
      outcome: [
        "Showcased during a primary school exhibition where students observed the principles in action.",
      ],
      future: [
        "Enhanced safety features and more durable construction.",
        "Classroom-ready STEM kit versions with expanded documentation.",
      ],
    },
  },
  {
    slug: "wind-energy-prototype",
    title: "Wind Energy Prototype",
    category: "Renewable Energy",
    year: "2025",
    type: "Individual project",
    status: "Functional prototype",
    featured: "support",
    purpose:
      "A teaching model that follows wind-generated electricity from turbine blade to stored energy to the consumer.",
    summary:
      "Built from PVC, cardboard, DC motors, and a battery store, with an air blower simulating wind for demonstrations.",
    skills: [
      "Mechanical design",
      "Electronics assembly",
      "Renewable energy concepts",
      "Prototype construction",
    ],
    intendedApplication: "STEM classroom demonstration of renewable energy systems.",
    limitations:
      "A scale teaching model; it is not sized or engineered for real power generation.",
    caseStudy: {
      context: [
        "Students can memorise how a wind turbine works long before they ever see energy move through one.",
      ],
      problem: [
        "Limited access to practical renewable energy learning resources.",
        "Difficulty visualising how turbines generate electricity.",
        "Reduced engagement when the topic is taught through theory alone.",
      ],
      solution: [
        "A model where learners watch wind rotate the blades, mechanical energy convert to electrical energy, energy get stored, and power reach a consumer display section.",
      ],
      process: [
        {
          title: "01 — Research and concept",
          items: [
            "Studied wind energy fundamentals.",
            "Simplified the system for classroom use.",
          ],
        },
        {
          title: "02 — System design",
          items: [
            "Designed turbine blades, tower structure, and miniature power station.",
            "Planned electrical connections and the demonstration layout.",
          ],
        },
        {
          title: "03 — Construction",
          items: [
            "Built the turbine structure and installed DC motors and electrical components.",
            "Constructed transmission pathways and the consumer display.",
            "Integrated energy storage.",
          ],
        },
        {
          title: "04 — Testing",
          items: [
            "Simulated wind conditions with a blower.",
            "Tested generation and energy flow, then improved visual clarity.",
          ],
        },
      ],
      tools: [
        {
          title: "Components",
          items: [
            "DC motors",
            "LED lights",
            "Electrical wiring",
            "Battery storage system",
          ],
        },
        {
          title: "Materials",
          items: ["PVC pipes", "Cardboard structures", "Turbine blades", "Support towers"],
        },
      ],
      challenges: [
        "Keeping the model technically accurate while staying simple enough for students to read at a glance.",
      ],
      outcome: [
        "A working demonstration model used to explain renewable energy generation in STEM sessions.",
      ],
      future: [
        "More durable materials and a version suited to repeated classroom handling.",
      ],
    },
  },
  {
    slug: "solar-energy-production-prediction",
    title: "Estimated Annual Solar Energy Production Prediction",
    category: "Data & Software",
    year: "2026",
    type: "Academic team project (2 members)",
    status: "Completed academic project",
    purpose:
      "A machine learning study of large-scale photovoltaic data to estimate annual solar energy output.",
    summary:
      "Developed for a Machine Learning course at Alfred University, combining exploratory data analysis, preprocessing, feature engineering, and predictive modelling.",
    skills: [
      "Exploratory data analysis",
      "Data preprocessing",
      "Feature engineering",
      "Machine learning",
      "Technical reporting",
    ],
    caseStudy: {
      context: [
        "Accurate production estimates matter for renewable energy planning, and photovoltaic datasets are large enough to make the question a genuine modelling problem.",
      ],
      outcome: [
        "The analysis surfaced system size and geographic location as significant factors in production, and showed how data-driven models can support renewable energy planning decisions.",
      ],
    },
  },
  {
    slug: "smart-fuel-gauge-budget-tracker",
    title: "Smart Fuel Gauge and Budget Tracker App",
    category: "Data & Software",
    year: "2026",
    type: "Academic team project (2 members)",
    status: "Completed academic project",
    purpose:
      "A MATLAB application that combines fuel monitoring, trip planning, and budget tracking in one interface.",
    summary:
      "Built for a MATLAB Programming course at Alfred University. Calculates remaining range, daily consumption, monthly cost, and whether a planned trip needs refuelling.",
    skills: [
      "MATLAB programming",
      "Interface design",
      "Calculation modelling",
      "Team collaboration",
    ],
    caseStudy: {
      outcome: [
        "The app estimates remaining fuel percentage, driving range, travel time, daily consumption, monthly expense, and fuel required for a planned trip.",
      ],
    },
  },
  {
    slug: "better-ladder",
    title: "Better Ladder",
    category: "Product Design",
    year: "2026",
    type: "Design project",
    status: "Design concept",
    purpose:
      "An engineering design and assistive technology concept focused on safer, more usable ladder access.",
    summary:
      "Developed as part of engineering design and assistive technology work at Alfred University.",
    skills: ["Engineering design", "Human-centered design", "Concept development"],
  },
  {
    slug: "active-music-speaker",
    title: "Active Music Speaker",
    category: "Electronics",
    year: "Secondary school",
    type: "Individual project",
    status: "Built prototype",
    purpose:
      "A powered speaker system built during secondary school from available audio components.",
    summary:
      "One of the early electronics builds that moved my interest from models toward working audio systems.",
    skills: ["Electronics assembly", "Soldering", "Audio systems"],
  },
  {
    slug: "audio-video-recording-system",
    title: "Audio and Video Recording System",
    category: "Electronics",
    year: "Secondary school",
    type: "Individual project",
    status: "Built prototype",
    purpose:
      "A recording setup assembled from salvaged parts, including components recovered from unused mobile phones.",
    summary:
      "Recovering usable modules from damaged devices became the practical route to parts that were otherwise out of reach.",
    skills: ["Electronics assembly", "Component salvage", "Soldering", "Testing"],
  },
  {
    slug: "antenna-support-system",
    title: "Antenna Support System",
    category: "Electronics",
    year: "Secondary school",
    type: "Individual project",
    status: "Built prototype",
    purpose:
      "A support system built to improve radio station antenna reception in a local setting.",
    summary:
      "An early exercise in structural design paired with signal behaviour.",
    skills: ["Structural fabrication", "Signal basics", "Practical problem-solving"],
  },
  {
    slug: "data-support-system",
    title: "Data Support System (DS)",
    category: "Electronics",
    year: "Secondary school",
    type: "Individual project",
    status: "Built prototype",
    purpose:
      "A network support experiment prompted by unreliable local phone communication.",
    summary:
      "Built to test whether simple, locally assembled hardware could improve the reliability of everyday communication.",
    skills: ["Communication systems", "Electronics assembly", "Troubleshooting"],
  },
  {
    slug: "simple-wheeled-robot",
    title: "Simple Wheeled Robot",
    category: "Robotics & Automation",
    year: "2023",
    type: "Individual project",
    status: "Functional prototype",
    purpose:
      "A small wheeled robot used as an introductory robotics demonstration in STEM outreach activities.",
    summary:
      "A compact platform for teaching motors, circuits, and control to students meeting robotics for the first time.",
    skills: ["Robotics", "Motor control", "Electronics assembly", "STEM demonstration"],
  },
  {
    slug: "remote-control-car",
    title: "Remote-Control Car",
    category: "Robotics & Automation",
    year: "Secondary school",
    type: "Individual project",
    status: "Built prototype",
    purpose:
      "A remote-controlled vehicle built from locally available materials before any formal electronics training.",
    summary:
      "The direct predecessor to later transmitter-and-receiver work on the security robot.",
    skills: ["Remote control systems", "Mechanical assembly", "Electronics basics"],
  },
  {
    slug: "musical-equipment-prototypes",
    title: "Musical Equipment Prototypes",
    category: "Product Design",
    year: "Secondary school",
    type: "Individual project",
    status: "Built prototypes",
    purpose:
      "Drum sets and guitars built by hand, some designed to connect to an external microphone system.",
    summary:
      "Creative fabrication work that sharpened material selection, structure, and finishing.",
    skills: ["Fabrication", "Material selection", "Acoustic construction", "Creative design"],
  },
];

export const projectCategories: (ProjectCategory | "All")[] = [
  "All",
  "Robotics & Automation",
  "Electronics",
  "STEM Education",
  "Renewable Energy",
  "Agriculture",
  "Data & Software",
  "Product Design",
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((p) => p.slug === slug);
  return {
    previous: index > 0 ? projects[index - 1] : projects[projects.length - 1],
    next: index < projects.length - 1 ? projects[index + 1] : projects[0],
  };
}
