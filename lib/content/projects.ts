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
  title: "STEM Skills Training Model (Power Generation Prototype)",
  category: "STEM Education Technologies",
  year: "2021",
  type: "Individual Project",
  status: "Prototype",
  featured: "medium",

  purpose:
    "An educational power generation prototype designed to demonstrate the complete process of electricity generation, transmission, and distribution through hands-on learning.",

  summary:
    "Developed to support practical STEM education by helping students understand scientific and engineering concepts through direct observation and interaction rather than relying solely on classroom theory.",

  skills: [
    "STEM Education Innovation",
    "Electronics",
    "Electrical Systems",
    "Prototype Development",
    "Engineering Design",
    "Technical Drawing",
    "Soldering",
    "Problem Solving",
    "Public Presentation",
    "Science Communication",
    "Project Development",
    "Creativity & Innovation",
    "Leadership",
  ],

  intendedApplication:
    "A hands-on educational tool for demonstrating electricity generation, transmission, distribution, electrical circuits, magnetism, energy conversion, and basic engineering principles to students.",

  limitations:
    "The project remains an educational prototype rather than a classroom-certified product. Further development would be required to improve durability, safety, modularity, documentation, and classroom usability before wider deployment in schools.",

  caseStudy: {
    context: [
      "The STEM Skills Training Model is an educational power generation prototype designed to demonstrate the complete process of electricity generation, transmission, and distribution through hands-on learning.",

      "The project was developed to support practical STEM education by helping students understand scientific and engineering concepts through direct observation and interaction rather than relying solely on classroom theory.",

      "The model serves as a teaching tool that enables learners to explore concepts such as electrical circuits, energy generation, transmission systems, magnetism, simple and complex machines, and electricity distribution in a practical and engaging way.",

      "The inspiration for this project came from my personal educational experience and my observations of STEM education challenges in many schools across Tanzania and other parts of Africa.",

      "During my primary and secondary school years, many science and physics lessons were taught primarily through theoretical explanations. Teachers often relied on drawings, symbols, and diagrams on the classroom board to explain concepts such as electrical circuits, switches, bulbs, and power systems. However, students rarely had opportunities to see or interact with real components and practical demonstrations.",

      "As a result, some learners found it difficult to fully understand STEM concepts, which affected their confidence and academic performance in science-related subjects.",

      "To help address this challenge, I decided to develop a practical learning solution that would allow students to see, touch, and interact with engineering and science concepts in a real-world context. This vision led to the creation of the STEM Skills Training Model.",
    ],

    problem: [
      "Many students learn STEM subjects through theoretical instruction without sufficient access to practical demonstrations and hands-on activities.",

      "This gap between theory and practice can make scientific and engineering concepts difficult to understand, reducing student engagement, curiosity, and overall learning outcomes.",

      "Schools with limited laboratory facilities and teaching resources often face additional challenges in providing effective practical STEM education.",
    ],

    solution: [
      "To address this challenge, I designed and built the STEM Skills Training Model, an educational generator prototype that demonstrates how electricity is generated, transmitted, and distributed to end users.",

      "The model was developed as an interactive learning platform that enables students to visualize and understand engineering concepts through practical demonstrations.",

      "Through this prototype, learners can explore electricity generation, electricity transmission, electricity distribution, series and parallel circuits, magnetism, energy conversion, simple and complex machines, and basic engineering principles.",

      "The project transforms abstract classroom concepts into visible and interactive learning experiences.",
    ],

    process: [
      {
        title: "01 — Research and Problem Identification",
        items: [
          "Observed challenges in practical STEM education.",
          "Identified the need for a hands-on learning tool.",
          "Gathered ideas for demonstrating engineering concepts through a single educational model.",
        ],
      },
      {
        title: "02 — Concept Development",
        items: [
          "Designed a system capable of illustrating the electricity supply chain from generation to end-user consumption.",
          "Planned how multiple STEM concepts could be integrated into one learning platform.",
        ],
      },
      {
        title: "03 — Prototype Construction",
        items: [
          "Built the generator prototype structure.",
          "Designed miniature power transmission poles.",
          "Constructed a model house to represent the electricity consumer.",
          "Installed electrical and mechanical components.",
        ],
      },
      {
        title: "04 — System Integration",
        items: [
          "Connected generation, transmission, and distribution sections.",
          "Integrated demonstration circuits and learning components.",
          "Conducted testing to ensure proper operation.",
        ],
      },
      {
        title: "05 — Testing and Refinement",
        items: [
          "Evaluated the effectiveness of the model for teaching purposes.",
          "Improved visual presentation and functionality.",
          "Enhanced the overall appearance and educational value of the prototype.",
        ],
      },
    ],

    tools: [
      {
        title: "Materials and Components",
        items: [
          "DC Motors",
          "Magnets",
          "LED Lights",
          "Electrical Switches",
          "Electronic Components",
          "Lightweight Wood",
          "Plastic Pipes for Transmission Pole Structures",
          "Cardboard Materials",
          "Paint and Finishing Materials",
        ],
      },
      {
        title: "Technical Skills Applied",
        items: [
          "Electronics Assembly",
          "Soldering",
          "Technical Drawing",
          "Prototype Development",
          "STEM Education Design",
          "Electrical Systems Demonstration",
          "Creative Problem Solving",
        ],
      },
    ],

    challenges: [
      "One of the primary challenges during the development process was limited access to specialized educational equipment, tools, and construction materials.",

      "To overcome this challenge, I utilized locally available resources and adapted materials creatively while maintaining the educational objectives of the project.",

      "This experience strengthened my problem-solving skills and demonstrated the importance of innovation in resource-constrained environments.",
    ],

    outcome: [
      "The STEM Skills Training Model successfully demonstrated how practical learning can improve the understanding of STEM concepts by allowing students to observe and interact with engineering systems directly.",

      "The project contributed to promoting hands-on STEM education and encouraged learners to develop curiosity, creativity, and problem-solving skills through practical experimentation.",

      "The prototype also provided opportunities to showcase the value of STEM innovation at competitions, exhibitions, and international educational events.",
    ],

    showcases: [
      {
        title: "STEM Youth Boot Camp — December 2021",
        detail:
          "The STEM Skills Training Model was presented during the STEM Youth Boot Camp organized by ProjeKt Inspire in Tanzania. The project received First Place in the Scale-Up Project Presentation category, recognizing its potential contribution to practical STEM education and student learning.",
      },
      {
        title:
          "MAKISATU — National Competition on Science, Technology & Innovation — May 2022",
        detail:
          "The project was selected and presented at MAKISATU in Dodoma, Tanzania, where it was recognized among innovative solutions promoting science, technology, and engineering education. The experience provided an opportunity to engage with innovators, educators, researchers, and stakeholders from across the country.",
      },
      {
        title:
          "46th Dar es Salaam International Trade Fair (Saba Saba Exhibition) — 2022",
        detail:
          "The prototype was exhibited as part of the Vocational Education and Training Authority (VETA) innovation showcase. The exhibition allowed students, educators, policymakers, industry representatives, and members of the public to interact with the project and learn about its educational applications.",
      },
      {
        title:
          "63rd London International Youth Science Forum (LIYSF) — 2022",
        detail:
          "The STEM Skills Training Model was presented during the Science Bazaar at the London International Youth Science Forum in the United Kingdom. The event provided an opportunity to share the innovation with an international audience while exchanging ideas with students and STEM enthusiasts from different countries.",
      },
    ],

    future: [
      "Develop modular STEM learning kits based on the original prototype.",
      "Create enhanced interactive demonstrations for students.",
      "Integrate additional engineering and science concepts into the learning platform.",
      "Improve durability, safety, and classroom usability.",
      "Develop supporting teaching materials and documentation for educators.",
      "Collaborate with educational institutions and STEM organizations.",
      "Continue developing the concept toward a scalable practical STEM education product for schools and training programs.",
    ],
  },
},
 {
  slug: "manual-rice-planter-machine",
  title: "Manual Rice Planter Machine",
  category: "Agricultural Innovation & Community Solutions",
  year: "2024",
  type: "Team Project (3 Members)",
  status: "Prototype",
  featured: "medium",

  purpose:
    "An agricultural innovation project developed to improve the efficiency of rice planting while reducing the physical labor required by farmers.",

  summary:
    "Developed by a three-member team during the Jamii Tech Incubation Program at Twende Innovation Social Center in Arusha, Tanzania. The prototype was designed as a practical and affordable planting solution for small-scale and medium-scale rice farmers.",

  skills: [
    "Agricultural Innovation",
    "Engineering Design",
    "Prototype Development",
    "Technical Drawing",
    "Welding",
    "Fabrication",
    "Precision Measurement",
    "Mechanical Assembly",
    "Teamwork",
    "Problem Solving",
    "Innovation & Entrepreneurship",
    "Project Development",
  ],

  intendedApplication:
    "A manually operated rice planting solution intended to support small-scale and medium-scale farmers by improving planting efficiency, reducing physical labor, and saving time during planting operations.",

  limitations:
    "The machine remains a prototype. Further field testing is required to evaluate planting accuracy, durability, productivity, usability, and performance under different agricultural conditions before wider deployment.",

  caseStudy: {
    context: [
      "The Manual Rice Planter Machine is an agricultural innovation project developed to improve the efficiency of rice planting while reducing the physical labor required by farmers. The prototype was designed to support small-scale and medium-scale rice farmers by providing a practical and affordable planting solution that can improve productivity and ease the planting process.",

      "The project was developed through a three-member team during the Jamii Tech Incubation Program organized by Twende Innovation Social Center in Arusha, Tanzania.",

      "The inspiration for this project came from observing the challenges faced by many rice farmers in Tanzania and across Africa.",

      "In many farming communities, rice cultivation still depends heavily on traditional methods. Farmers often spend long hours preparing fields and manually transplanting rice seedlings, a process that requires significant physical effort and time.",

      "During the Jamii Tech Incubation Program, our team explored various community challenges and identified agricultural labor efficiency as an important area where innovation could create meaningful impact.",

      "This inspired us to develop the Manual Rice Planter Machine as a practical solution that could help farmers plant rice more efficiently while reducing labor demands and improving productivity.",
    ],

    problem: [
      "Many rice farmers continue to rely on labor-intensive planting methods that require significant time, energy, and manpower.",

      "Common challenges include high physical workload during planting seasons, low planting efficiency, time-consuming manual transplanting processes, limited access to affordable agricultural machinery, and reduced productivity due to inefficient planting methods.",

      "These challenges can affect farm output and increase the burden on farmers.",
    ],

    solution: [
      "To address these challenges, our team designed and developed the Manual Rice Planter Machine prototype.",

      "The machine was created to assist farmers in planting rice seedlings more efficiently while reducing the physical effort required during the planting process.",

      "The project focused on developing a simple and practical planting mechanism that could potentially be adapted for use by local farming communities.",

      "The innovation aimed to increase planting efficiency, reduce manual labor, save time during planting operations, support increased agricultural productivity, and provide a practical and affordable farming solution.",
    ],

    process: [
      {
        title: "01 — Problem Research",
        items: [
          "Studied challenges faced by rice farmers.",
          "Identified inefficiencies in traditional planting methods.",
          "Gathered information on agricultural practices and user needs.",
        ],
      },
      {
        title: "02 — Concept Development",
        items: [
          "Brainstormed possible solutions.",
          "Developed initial design concepts.",
          "Evaluated practicality, affordability, and usability.",
        ],
      },
      {
        title: "03 — Prototype Design",
        items: [
          "Prepared technical sketches and measurements.",
          "Designed the machine structure and planting mechanism.",
          "Planned material selection and fabrication processes.",
        ],
      },
      {
        title: "04 — Fabrication and Assembly",
        items: [
          "Cut and prepared metal components.",
          "Performed welding and structural assembly.",
          "Constructed and integrated machine components.",
          "Conducted testing and adjustments.",
        ],
      },
      {
        title: "05 — Evaluation and Improvement",
        items: [
          "Reviewed prototype performance.",
          "Identified areas for improvement.",
          "Refined design features based on observations.",
        ],
      },
    ],

    contribution: [
      "Technical drawing and design preparation.",
      "Precision measurement of components.",
      "Metal fabrication.",
      "Welding and assembly of machine structures.",
      "Prototype construction and testing.",
    ],

    tools: [
      {
        title: "Materials and Components",
        items: [
          "Steel and Metal Components",
          "Welding Equipment",
          "Measuring Tools",
          "Fabrication Materials",
          "Mechanical Assembly Components",
        ],
      },
      {
        title: "Technical Skills Applied",
        items: [
          "Technical Drawing",
          "Welding",
          "Precision Measurement",
          "Fabrication",
          "Prototype Development",
          "Mechanical Assembly",
          "Team Collaboration",
          "Problem Solving",
        ],
      },
    ],

    challenges: [
      "One of the major challenges during the project was balancing technical development with available resources and time constraints.",

      "As a team, we needed to develop a functional prototype while working within the limitations of available materials, equipment, and project timelines.",

      "These challenges encouraged us to be resourceful, collaborative, and adaptable throughout the development process.",
    ],

    outcome: [
      "The project successfully resulted in the development of a functional prototype that demonstrated the potential of a practical rice planting solution for agricultural applications.",

      "The innovation provided valuable experience in agricultural technology development, engineering design, teamwork, and entrepreneurship.",

      "The project also created opportunities to engage with innovation support programs and explore pathways for future development and commercialization.",

      "Following the successful development and presentation of the prototype, our team received seed funding support from Twende Innovation Social Center to explore further development opportunities and advance the innovation.",

      "As part of the project's entrepreneurial journey, our team successfully registered a startup company name associated with the innovation, providing valuable experience in innovation management, business development, and entrepreneurship.",
    ],

    future: [
      "Enhance the planting mechanism.",
      "Improve efficiency and productivity.",
      "Use stronger and more durable construction materials.",
      "Refine the design around farmer needs and usability.",
      "Conduct expanded testing in agricultural environments.",
      "Collaborate with agricultural institutions and equipment manufacturers.",
      "Continue developing the prototype toward a practical and scalable agricultural solution.",
    ],
  },
},
  {
  slug: "tesla-coil",
  title: "Tesla Coil Prototype",
  category: "STEM Education Technologies",
  year: "2025",
  type: "Educational Electronics Prototype",
  status: "Functional Prototype",
  featured: "support",

  purpose:
    "An educational electronics project designed to demonstrate fundamental concepts of electricity, magnetism, electromagnetic induction, and wireless energy transfer through hands-on STEM learning.",

  summary:
    "Designed, constructed, and tested independently as an interactive STEM demonstration prototype, then showcased during a primary school exhibition where students were able to observe electrical and electromagnetic principles in action.",

  skills: [
    "Electronics Design",
    "Circuit Construction",
    "Electromagnetism Applications",
    "STEM Education Development",
    "Prototype Development",
    "Technical Problem Solving",
    "Soldering and Assembly",
    "Testing and Troubleshooting",
    "Educational Demonstration",
    "Public Presentation",
  ],

  intendedApplication:
    "An educational demonstration tool for helping students explore electricity, magnetism, electromagnetic induction, electrical energy transfer, and circuit behavior through practical observation.",

  limitations:
    "The project is an educational prototype rather than a classroom-certified product. Because Tesla coil demonstrations involve elevated voltages and electromagnetic fields, the prototype requires appropriate supervision and safety precautions. Further development would be required to improve protective features, durability, documentation, and suitability for repeated classroom use.",

  caseStudy: {
    context: [
      "The Tesla Coil Prototype is an educational electronics project designed to demonstrate fundamental concepts of electricity, magnetism, electromagnetic induction, and wireless energy transfer through hands-on STEM learning.",

      "The prototype provides students with an engaging and interactive way to explore scientific principles that are often taught primarily through textbooks, diagrams, and classroom theory.",

      "By observing the Tesla Coil in operation, students can better understand how electrical energy behaves and how electromagnetic fields can be used to transfer energy.",

      "The inspiration for this project came from my passion for practical STEM education and my interest in electronics and electrical systems.",

      "Throughout my educational journey, I noticed that many students found topics such as electricity, magnetism, and electromagnetic induction difficult to understand because they were often presented only through diagrams and theoretical explanations.",

      "I wanted to create a learning tool that could transform these abstract concepts into something students could directly observe and interact with.",

      "This led me to design and build the Tesla Coil Prototype as an educational demonstration model that makes electrical science more engaging, understandable, and memorable.",
    ],

    problem: [
      "Many students struggle to fully understand electrical and magnetic concepts when they are taught primarily through theory.",

      "Common challenges include limited access to practical STEM demonstrations, difficulty visualizing electromagnetic principles, reduced student engagement during science lessons, and reliance on memorization instead of understanding.",

      "These challenges can limit students' interest and confidence in STEM subjects.",
    ],

    solution: [
      "To address these challenges, I developed a Tesla Coil Prototype that demonstrates electrical and electromagnetic principles through live experimentation and observation.",

      "The prototype allows students to explore concepts such as primary and secondary coils, electromagnetic induction, magnetic fields, electrical energy transfer, and circuit behavior and component interaction.",

      "By observing these concepts in action, students can gain a deeper understanding of how electrical systems operate beyond theoretical explanations.",
    ],

    process: [
      {
        title: "01 — Research and Concept Development",
        items: [
          "Studied Tesla Coil operating principles.",
          "Explored educational applications of electromagnetic demonstrations.",
          "Developed a simplified design suitable for STEM learning environments.",
        ],
      },
      {
        title: "02 — Circuit Design",
        items: [
          "Designed the electronic circuit layout.",
          "Selected appropriate electronic components.",
          "Planned the primary and secondary coil configuration.",
        ],
      },
      {
        title: "03 — Prototype Construction",
        items: [
          "Wound and assembled the coils.",
          "Installed the transistor, resistor, heat sink, and switching components.",
          "Constructed the supporting structure and protective housing.",
        ],
      },
      {
        title: "04 — Testing and Optimization",
        items: [
          "Tested electrical performance.",
          "Evaluated demonstration effectiveness.",
          "Refined the prototype to improve reliability and educational value.",
        ],
      },
    ],

    contribution: [
      "I independently designed and developed the Tesla Coil Prototype.",
      "Circuit design.",
      "Component selection.",
      "Coil winding and assembly.",
      "Electronics integration.",
      "Prototype construction.",
      "Testing and troubleshooting.",
      "Educational demonstration preparation.",
    ],

    tools: [
      {
        title: "Electronic Components",
        items: [
          "Transistor",
          "Resistor",
          "Heat Sink",
          "Copper Wire",
          "Switch",
          "Various Electronic Components",
        ],
      },
      {
        title: "Structural Materials",
        items: [
          "PVC Pipe",
          "Protective Housing Materials",
          "Support Structures",
        ],
      },
      {
        title: "Demonstration Equipment",
        items: [
          "Fluorescent Lamp",
        ],
      },
    ],

    challenges: [
      "One of the key challenges was ensuring that the prototype effectively demonstrated complex electromagnetic concepts while remaining suitable for educational use.",

      "Achieving reliable performance required careful component selection, repeated testing, and continuous refinement throughout the development process.",

      "The project also required creativity in utilizing available materials and resources during construction.",
    ],

    outcome: [
      "The Tesla Coil Prototype successfully demonstrated electrical and electromagnetic principles through practical experimentation and interactive learning.",

      "The project was showcased during a primary school exhibition, where students were able to observe scientific concepts in action and engage with STEM topics through hands-on demonstrations.",

      "The prototype helped stimulate curiosity, encourage scientific thinking, and make electrical engineering concepts more accessible to young learners.",

      "The experience further reinforced the value of practical STEM education in improving student engagement and understanding.",
    ],

    future: [
      "Enhance safety features.",
      "Improve demonstration capabilities.",
      "Use more durable construction materials.",
      "Develop classroom-ready STEM kit versions.",
      "Expand educational documentation and supporting learning materials.",
      "Explore collaboration with STEM education organizations and technology companies.",
      "Continue developing the concept toward scalable educational kits that provide engaging hands-on learning experiences in electricity, electronics, and engineering.",
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
