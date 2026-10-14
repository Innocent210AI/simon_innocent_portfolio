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
  category: "Renewable Energy & Sustainability",
  year: "2025",
  type: "STEM Education Prototype",
  status: "Functional Prototype",
  featured: "support",

  purpose:
    "An educational STEM model designed to demonstrate how renewable energy can be generated from wind and delivered to end users through an interactive and practical learning experience.",

  summary:
    "Designed and developed as an interactive teaching model that demonstrates how wind rotates turbine blades, how mechanical energy is converted into electrical energy, how energy can be stored, and how electricity can be delivered to consumers.",

  skills: [
    "Renewable Energy Concepts",
    "Engineering Design",
    "STEM Education Development",
    "Prototype Construction",
    "Electronics Assembly",
    "Technical Drawing",
    "Problem Solving",
    "Creative Design",
    "Educational Technology Development",
    "Public Demonstration and Presentation",
  ],

  intendedApplication:
    "A hands-on STEM classroom demonstration tool for helping students understand wind power generation, energy conversion, energy storage, electricity transmission, and renewable energy systems.",

  limitations:
    "The Wind Energy Prototype is a scale educational teaching model rather than a system engineered for real-world electrical power generation. Further development would be required to improve turbine efficiency, durability, electrical performance, classroom usability, and scalability.",

  caseStudy: {
    context: [
      "The Wind Energy Prototype is an educational STEM model designed to demonstrate how renewable energy can be generated from wind and delivered to end users.",

      "The project helps students understand the basic principles of wind power generation through hands-on learning and visual demonstration. It illustrates how wind energy can be converted into electrical energy and used to power simple electrical devices.",

      "The prototype was developed as an interactive teaching tool to make renewable energy concepts easier to understand for students studying science, technology, engineering, and mathematics (STEM).",

      "The inspiration for this project came from my passion for practical STEM education and sustainable energy solutions.",

      "Throughout my educational journey, I observed that many students learned about renewable energy primarily through textbooks and classroom explanations. While students could memorize definitions and diagrams, many had limited opportunities to see how renewable energy systems work in practice.",

      "I wanted to create a hands-on learning model that would allow students to visually experience how wind energy is captured, converted into electricity, and delivered for use.",

      "This led me to design and build the Wind Energy Prototype as a practical educational tool that simplifies complex renewable energy concepts and makes them easier for students to understand.",
    ],

    problem: [
      "Many students struggle to understand renewable energy systems because they are often taught through theory alone.",

      "Common challenges include limited access to practical STEM learning resources, difficulty visualizing how wind turbines generate electricity, lack of interactive renewable energy demonstrations in schools, and reduced student engagement when learning through theory alone.",

      "These challenges can make renewable energy concepts difficult to understand and apply.",
    ],

    solution: [
      "To address these challenges, I developed a Wind Energy Prototype that demonstrates the complete journey of wind-generated electricity.",

      "The model allows students to observe how wind rotates turbine blades, how mechanical energy is converted into electrical energy, how electricity can be stored, and how energy is delivered to consumers.",

      "By interacting with the prototype, students can gain a clearer understanding of renewable energy systems and sustainable power generation.",
    ],

    process: [
      {
        title: "01 — Research and Concept Development",
        items: [
          "Studied the fundamentals of wind energy systems.",
          "Explored ways to simplify renewable energy concepts for classroom use.",
          "Developed an educational model suitable for STEM learning environments.",
        ],
      },
      {
        title: "02 — System Design",
        items: [
          "Designed the wind turbine blades.",
          "Designed the supporting tower structure.",
          "Designed the miniature power station and energy storage section.",
          "Planned the electrical connections and demonstration layout.",
        ],
      },
      {
        title: "03 — Prototype Construction",
        items: [
          "Built the turbine structure.",
          "Installed DC motors and electrical components.",
          "Constructed transmission pathways and consumer display sections.",
          "Integrated energy storage components.",
        ],
      },
      {
        title: "04 — Testing and Demonstration",
        items: [
          "Simulated wind conditions using an air blower.",
          "Tested electricity generation and energy flow.",
          "Improved the model to enhance educational effectiveness and visual presentation.",
        ],
      },
    ],

    contribution: [
      "I independently designed and developed the Wind Energy Prototype.",
      "Designed the turbine blades.",
      "Designed the support towers.",
      "Designed the power station structure.",
      "Assembled electrical components.",
      "Constructed the demonstration model.",
      "Tested and refined prototype performance.",
    ],

    tools: [
      {
        title: "Components",
        items: [
          "DC Motors",
          "LED Lights",
          "Electrical Wiring",
          "Battery Storage System",
          "Electronic Components",
        ],
      },
      {
        title: "Construction Materials",
        items: [
          "PVC Pipes",
          "Cardboard Structures",
          "Turbine Blades",
          "Support Towers",
        ],
      },
      {
        title: "Demonstration Equipment",
        items: [
          "Air Blower for Wind Simulation",
        ],
      },
    ],

    challenges: [
      "One of the main challenges was creating a prototype that could clearly demonstrate renewable energy principles while remaining simple enough for students to understand.",

      "Balancing technical accuracy, educational value, and available materials required creativity and continuous refinement throughout the development process.",
    ],

    outcome: [
      "The project successfully demonstrated how wind energy can be converted into electricity and delivered to end users.",

      "The prototype provided students with a practical learning experience that complemented classroom instruction and increased engagement with STEM subjects.",

      "The project was also showcased during a primary school exhibition, where it helped introduce students to renewable energy concepts through hands-on demonstration and interactive learning.",

      "The experience reinforced the importance of practical STEM education in developing curiosity, creativity, and problem-solving skills among young learners.",
    ],

    future: [
      "Enhance turbine efficiency.",
      "Improve educational features.",
      "Use more durable construction materials.",
      "Develop modular STEM learning components.",
      "Develop classroom-ready renewable energy kits.",
      "Explore collaboration with schools and STEM organizations.",
      "Continue developing the model toward a scalable educational STEM kit that can be used in schools and learning centers.",
      "Support the long-term goal of helping schools across Tanzania and Africa adopt practical renewable energy learning tools that inspire future engineers, innovators, scientists, and technology leaders.",
    ],
  },
},
  
{
  slug: "solar-energy-production-prediction",
  title: "Estimated Annual Solar Energy Production Prediction",
  category: "Machine Learning & Data Analytics",
  year: "2026",
  type: "Academic Team Project (Machine Learning)",
  status: "Completed Academic Project",

  purpose:
    "A machine learning project developed to analyze large-scale photovoltaic (PV) energy data, identify patterns in solar energy production, and build a predictive model capable of estimating annual solar energy output.",

  summary:
    "Developed by a two-member team as part of a Machine Learning course at Alfred University. The project combined Exploratory Data Analysis (EDA), data preprocessing, feature engineering, and machine learning techniques to investigate the factors influencing annual photovoltaic energy production and support renewable energy planning.",

  skills: [
    "Machine Learning",
    "Data Analysis",
    "Exploratory Data Analysis (EDA)",
    "Predictive Modeling",
    "Data Cleaning & Preprocessing",
    "Feature Engineering",
    "Python-Based Analytics",
    "Problem Solving",
    "Team Collaboration",
    "Technical Communication",
    "Research and Data Interpretation",
  ],

  intendedApplication:
    "A data-driven predictive modeling approach designed to estimate annual photovoltaic energy production and support renewable energy forecasting, solar energy planning, and informed decision-making.",

  limitations:
    "The project was developed as an academic machine learning study using historical photovoltaic data. Prediction accuracy depends on the quality and representativeness of the dataset, selected features, and model performance. Further validation with additional environmental variables, larger datasets, and new photovoltaic installations would be necessary before using the model for operational energy forecasting.",

  caseStudy: {
    context: [
      "As global demand for renewable energy continues to increase, accurately predicting solar energy production has become increasingly important for energy planning and infrastructure development.",

      "Through this project, our team sought to explore how machine learning could be used to analyze photovoltaic system data and generate reliable predictions of annual solar energy production.",

      "The project provided an opportunity to apply machine learning concepts to a real-world energy challenge while gaining practical experience in data analysis, predictive modeling, and interpretation of large datasets.",
    ],

    problem: [
      "Solar energy production is influenced by multiple factors, including photovoltaic system size, geographic location, environmental conditions, installation characteristics, and energy consumption patterns.",

      "Understanding how these variables affect annual energy production can be challenging when working with large datasets.",

      "A data-driven approach was therefore needed to identify important trends, investigate relationships between variables, and improve the estimation of annual solar energy production.",
    ],

    solution: [
      "Our team developed a machine learning model capable of predicting annual photovoltaic energy production using historical solar energy data.",

      "The project involved cleaning and preparing raw datasets, engineering relevant features, training and evaluating machine learning models, identifying influential variables affecting solar energy production, and generating predictions based on historical patterns.",

      "By combining data analysis with predictive modeling, the project demonstrated how machine learning techniques can support renewable energy forecasting and planning.",
    ],

    process: [
      {
        title: "01 — Data Cleaning & Preprocessing",
        items: [
          "Processed and organized photovoltaic system data.",
          "Identified and addressed inconsistencies in the dataset.",
          "Prepared the data for exploratory analysis and machine learning.",
        ],
      },
      {
        title: "02 — Feature Engineering & Encoding",
        items: [
          "Selected relevant variables for predicting annual solar energy production.",
          "Transformed and prepared numerical and categorical features.",
          "Applied appropriate encoding techniques to make selected features suitable for model training.",
        ],
      },
      {
        title: "03 — Exploratory Data Analysis (EDA)",
        items: [
          "Investigated trends and relationships within the photovoltaic dataset.",
          "Analyzed variables influencing annual energy production.",
          "Explored relationships between photovoltaic system size, geographic location, and energy output.",
          "Examined solar installation and production patterns to identify useful insights.",
        ],
      },
      {
        title: "04 — Model Development",
        items: [
          "Selected the Random Forest Regressor as the machine learning model.",
          "Used the model to investigate complex nonlinear relationships between input variables and annual solar energy production.",
          "Applied the model to a large photovoltaic dataset.",
          "Explored feature importance to identify influential predictive factors.",
          "Used the model's ensemble-based approach to reduce sensitivity to noise and data variability.",
        ],
      },
      {
        title: "05 — Model Evaluation",
        items: [
          "Evaluated the model using Mean Absolute Error (MAE).",
          "Used the R² Score (Coefficient of Determination) to assess model performance.",
          "Examined prediction errors and the relationship between predicted and actual energy production.",
          "Interpreted evaluation results to assess prediction accuracy and model effectiveness.",
        ],
      },
    ],

    tools: [
      {
        title: "Machine Learning & Data Analytics",
        items: [
          "Machine Learning",
          "Random Forest Regressor",
          "Predictive Modeling",
          "Exploratory Data Analysis (EDA)",
          "Feature Engineering",
          "Data Cleaning & Preprocessing",
          "Python-Based Analytics",
        ],
      },
      {
        title: "Model Evaluation & Interpretation",
        items: [
          "Mean Absolute Error (MAE)",
          "R² Score (Coefficient of Determination)",
          "Feature Importance Analysis",
          "Data Visualization",
          "Statistical Analysis",
          "Research and Data Interpretation",
        ],
      },
    ],

    contribution: [
      "Data analysis and interpretation.",
      "Exploratory Data Analysis (EDA).",
      "Machine learning workflow development.",
      "Feature engineering.",
      "Model evaluation.",
      "Technical presentation and research poster preparation.",
      "Discussion and interpretation of project results.",
    ],

    challenges: [
      "One of the main challenges was working with a large photovoltaic dataset containing multiple variables that could influence annual energy production.",

      "Preparing the data for machine learning required careful preprocessing, feature selection, and transformation of categorical and numerical variables.",

      "Another challenge involved identifying the most influential factors affecting annual solar energy production while evaluating model performance and prediction reliability.",

      "The project also required interpreting machine learning results in a way that could communicate meaningful insights about renewable energy production and planning.",
    ],

    outcome: [
      "The project successfully demonstrated how machine learning can be applied to renewable energy data to estimate annual solar energy production.",

      "The analysis revealed that photovoltaic system size was an important factor influencing annual energy production. Larger PV systems generally showed higher annual energy output.",

      "Energy production patterns varied across utilities and geographic regions, demonstrating the influence of location on solar energy performance.",

      "The dataset indicated an upward trend in photovoltaic adoption and installed solar capacity over time.",

      "The predictive modeling work demonstrated how machine learning can support solar energy forecasting and planning through data-driven analysis.",

      "The project provided practical experience in applying data science techniques to real-world engineering and sustainability challenges while strengthening skills in predictive analytics, data interpretation, and technical problem-solving.",

      "The experience also highlighted the growing role of artificial intelligence and machine learning in supporting renewable energy planning and decision-making.",
    ],

    future: [
      "Incorporate additional environmental variables to improve model inputs.",
      "Explore advanced machine learning algorithms.",
      "Improve prediction accuracy using larger and more diverse photovoltaic datasets.",
      "Develop interactive dashboards for solar energy forecasting and data visualization.",
      "Apply similar predictive modeling techniques to other renewable energy systems.",
      "Explore the potential application of machine learning in broader renewable energy planning and sustainability projects.",
    ],
  },
},

  

{
  slug: "smart-fuel-gauge-budget-tracker",
  title: "Smart Fuel Gauge and Budget Tracker App",
  category: "Engineering Design, Software Development & Data Analytics",
  year: "2026",
  type: "MATLAB Application Development Project (Team Project – 2 Members)",
  status: "Completed academic project",

  purpose:
    "The Smart Fuel Gauge and Budget Tracker App is a MATLAB-based application developed by a two-person team at Alfred University. The project was designed to help vehicle owners monitor fuel levels, estimate driving range, track fuel consumption, analyze travel requirements, and manage fuel-related expenses through an interactive and user-friendly interface.",

  summary:
    "Developed during the second semester of 2026 for a MATLAB Programming course at Alfred University, USA. The application combines fuel monitoring, trip planning, and budget tracking into a single system, enabling users to make informed decisions about fuel usage and transportation costs.",

  skills: [
    "MATLAB Programming",
    "Software Development",
    "Graphical User Interface (GUI) Design",
    "Data Analysis",
    "Algorithm Development",
    "Problem Solving",
    "Team Collaboration",
    "Technical Documentation",
    "Data Visualization",
    "User Experience Design",
  ],

  intendedApplication:
    "An interactive vehicle fuel management and budgeting application designed to help users estimate remaining fuel, driving range, travel time, fuel consumption, monthly expenses, and refueling requirements for planned trips.",

  limitations:
    "The application is an academic software project that performs calculations based on vehicle and fuel information entered by users. Its estimates depend on the accuracy of the input data and calculation assumptions. Direct vehicle sensor connectivity, GPS-based route optimization, cloud storage, and artificial intelligence-powered predictions are potential future improvements rather than current features.",

  caseStudy: {
    context: [
      "The idea for this project emerged from the everyday challenge many drivers face in managing fuel consumption and transportation expenses.",

      "Drivers often need to estimate how far they can travel with the fuel remaining in their vehicles, determine whether a planned trip is possible without refueling, and understand the financial impact of their fuel usage. However, these calculations are frequently performed manually or are not easily accessible in one place.",

      "To address this challenge, our team developed the Smart Fuel Gauge and Budget Tracker App as a practical solution that combines fuel monitoring, trip analysis, and budget estimation into a single interactive application.",

      "The goal was to create a tool that helps users make better decisions regarding fuel management while improving convenience and cost awareness.",
    ],

    solution: [
      "To solve this problem, our team designed a MATLAB application capable of monitoring current fuel levels, calculating remaining fuel percentage, estimating driving range based on fuel efficiency, predicting travel time based on average vehicle speed, calculating daily fuel consumption, estimating monthly fuel expenses, determining fuel required for planned trips, identifying whether refueling is necessary before a trip, tracking fuel usage history, and exporting fuel reports and summaries.",

      "The application provides immediate calculations and visual feedback based on user inputs to assist users in understanding their fuel status and transportation costs.",
    ],

    process: [
      {
        title: "01 — Problem Analysis",
        items: [
          "Identified the key challenges associated with fuel monitoring and travel planning.",
          "Examined the difficulties drivers face when estimating remaining fuel, travel distance, and transportation expenses.",
          "Defined the main objectives and functional requirements of the application.",
        ],
      },
      {
        title: "02 — System Design",
        items: [
          "Designed the overall application structure.",
          "Created user input sections.",
          "Planned the fuel calculation engine.",
          "Designed the visual fuel tank display.",
          "Developed fuel status indicators.",
          "Planned fuel usage projections.",
          "Designed data export functionality.",
        ],
      },
      {
        title: "03 — Programming & Implementation",
        items: [
          "Developed MATLAB algorithms for calculating fuel usage.",
          "Implemented remaining fuel percentage calculations.",
          "Developed remaining travel distance estimations.",
          "Calculated estimated travel time based on average vehicle speed.",
          "Implemented monthly fuel cost calculations.",
          "Developed refill cost estimations.",
          "Implemented trip feasibility analysis to determine whether available fuel is sufficient for planned travel.",
        ],
      },
      {
        title: "04 — User Interface Development",
        items: [
          "Created an interactive graphical user interface (GUI) using MATLAB App Designer.",
          "Developed input fields for vehicle and fuel information.",
          "Integrated visual indicators to display fuel status.",
          "Implemented fuel tank simulations to help users understand calculated results.",
          "Organized interface components to improve usability and clarity.",
        ],
      },
      {
        title: "05 — Data Visualization",
        items: [
          "Developed graphical projections showing estimated fuel levels over time.",
          "Created visual representations of fuel consumption patterns.",
          "Integrated calculated results with graphical displays to help users interpret fuel usage information.",
        ],
      },
      {
        title: "06 — Testing & Validation",
        items: [
          "Conducted multiple test cases to verify calculation accuracy.",
          "Validated user inputs and calculation results.",
          "Tested application behavior under different input conditions.",
          "Evaluated the reliability of fuel monitoring and travel estimation functions.",
          "Refined the application to improve usability and overall performance.",
        ],
      },
    ],

    tools: [
      {
        title: "Technologies & Development Tools",
        items: [
          "MATLAB",
          "MATLAB App Designer",
          "Data Visualization",
          "User Interface Design",
          "Algorithm Development",
          "Data Export Functions",
          "Fuel Consumption Modeling",
        ],
      },
    ],

    challenges: [
      "One of the main challenges during development was integrating multiple fuel-related calculations into a single user-friendly application while maintaining accuracy and usability.",

      "Another challenge involved designing an intuitive interface capable of displaying large amounts of information in a clear and organized manner.",

      "The project also required extensive testing to ensure that different input values produced accurate and reliable outputs.",
    ],

    outcome: [
      "The project successfully demonstrated how software tools can be used to solve practical transportation and budgeting challenges.",

      "Through this project, our team developed a fully functional MATLAB application capable of supporting fuel monitoring, budget estimation, trip planning, data visualization, and report generation.",

      "The project strengthened our understanding of software development, engineering problem-solving, data analysis, and user-centered design.",

      "It also demonstrated how programming can be applied to address real-world needs beyond traditional engineering applications.",
    ],

    future: [
      "Mobile application integration.",
      "Real-time vehicle sensor connectivity.",
      "GPS-based route optimization.",
      "Fuel price comparison tools.",
      "Predictive fuel consumption analytics.",
      "Cloud-based data storage.",
      "Vehicle maintenance tracking features.",
      "Artificial intelligence-powered driving recommendations.",
      "Continue developing the application toward a more comprehensive vehicle management and transportation planning platform.",
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
  category: "Electronics & Communication Systems",
  year: "2016",
  type: "Portable Audio System Prototype",
  status: "Built prototype",

  purpose:
    "A portable audio system prototype that I designed and built in 2016 to provide affordable access to radio programs and music playback within my community. The speaker featured Bluetooth connectivity, a built-in radio module, rechargeable battery power, and a portable design that allowed it to be carried comfortably like a backpack.",

  summary:
    "Developed using locally available materials and electronic components, the Active Music Speaker combined electronics, audio technology, and practical product design to create a functional and user-friendly audio system for everyday use, educational programs, and school activities.",

  skills: [
    "Electronics Assembly",
    "Soldering & Wiring",
    "Audio System Integration",
    "Battery Power Systems",
    "Product Design",
    "Technical Problem Solving",
    "Prototype Development",
    "Testing & Troubleshooting",
    "Creativity & Innovation",
    "Public Presentation Skills",
  ],

  intendedApplication:
    "An affordable, portable audio system designed to provide access to educational radio programs, news broadcasts, music, and audio support for school activities, student performances, and community events.",

  limitations:
    "The project was an early-stage electronics prototype developed using locally available materials and components rather than a commercially manufactured audio system. Further development would be needed to improve audio performance, durability, energy efficiency, and manufacturing quality.",

  caseStudy: {
    context: [
      "The Active Music Speaker is a portable audio system prototype that I designed and built in 2016 to provide affordable access to radio programs and music playback within my community. The speaker featured Bluetooth connectivity, a built-in radio module, rechargeable battery power, and a portable design that allowed it to be carried comfortably like a backpack.",

      "The project combined electronics, audio technology, and practical product design to create a functional and user-friendly music system for everyday use.",

      "The inspiration for this project came from a personal challenge. At the time, my family did not own a radio, yet I was highly interested in listening to educational programs, technology discussions, innovation stories, and news broadcasts.",

      "To address this need, I decided to design and build my own portable Active Music Speaker system. My goal was not only to create a device for entertainment but also a tool that could provide access to information and educational content.",

      "In addition, my school lacked sufficient music equipment for student activities and talent shows. Recognizing this need, I began bringing the speaker to school, where it was used to provide audio support during student performances and events.",

      "This project became one of my earliest practical innovations and helped strengthen my passion for electronics design and technology development.",
    ],

    problem: [
      "Many households and schools in my local community had limited access to affordable audio equipment.",

      "A lack of radio devices limited access to educational and informational broadcasts.",

      "Portable sound systems were not widely available to everyone in the community.",

      "Some schools had insufficient audio equipment for talent shows and student activities.",

      "The high cost of commercially available speaker systems created additional challenges for individuals and institutions with limited financial resources.",

      "These challenges motivated me to create a low-cost and portable solution using locally available materials and electronic components.",
    ],

    solution: [
      "I designed and constructed a portable Active Music Speaker that combined radio reception, Bluetooth connectivity, audio amplification, and rechargeable battery power in one system.",

      "The speaker was capable of playing radio broadcasts and connecting to compatible devices through Bluetooth.",

      "The audio system was designed to amplify sound for both indoor and outdoor use.",

      "The rechargeable battery allowed the device to operate without requiring a continuous external power connection.",

      "The portable structure incorporated carrying straps and wheels to make transportation easier.",

      "The project demonstrated how practical electronics could be used to address everyday challenges while providing educational and entertainment value.",
    ],

    process: [
      {
        title: "01 — Planning & Concept Design",
        items: [
          "Defined the project objectives.",
          "Created sketches and layout designs.",
          "Selected suitable electronic and structural components.",
        ],
      },
      {
        title: "02 — Electronics Assembly",
        items: [
          "Installed speakers and audio circuitry.",
          "Integrated the radio module.",
          "Connected Bluetooth functionality.",
          "Wired the rechargeable battery system.",
          "Tested audio performance and power consumption.",
        ],
      },
      {
        title: "03 — Mechanical Construction",
        items: [
          "Built the speaker housing using plastic containers and supporting materials.",
          "Added wheels for easier transportation.",
          "Installed carrying straps to allow backpack-style portability.",
          "Applied finishing materials to improve appearance and durability.",
        ],
      },
      {
        title: "04 — Testing & Improvement",
        items: [
          "Tested audio quality.",
          "Evaluated battery performance.",
          "Improved portability and overall system reliability.",
        ],
      },
    ],

    tools: [
      {
        title: "Electronic Components",
        items: [
          "Speakers",
          "Radio Module",
          "Rechargeable Battery",
          "Electrical Wiring",
          "Electronic Components",
        ],
      },
      {
        title: "Structural Materials",
        items: [
          "Plastic Containers for the Enclosure",
          "Wheels",
          "Carrying Straps",
          "Protective Finishing Materials",
        ],
      },
      {
        title: "Technical Skills Applied",
        items: [
          "Electronics Assembly",
          "Soldering & Wiring",
          "Audio System Integration",
          "Battery Power Systems",
          "Product Design",
          "Prototype Construction",
          "Testing & Troubleshooting",
          "Creative Problem Solving",
        ],
      },
    ],

    challenges: [
      "One of the main challenges during development was limited access to advanced tools, materials, and electronic components.",

      "To overcome this challenge, I utilized locally available materials and adapted components that could effectively meet the project's requirements while maintaining functionality and affordability.",
    ],

    outcome: [
      "The completed Active Music Speaker successfully provided access to radio programs, music playback, and educational content for my family and community.",

      "The project was also used during school talent shows and student activities where audio equipment was unavailable, helping support student participation and creativity.",

      "In addition, the project was presented during STEM-related activities and innovation exhibitions, including the STEM Youth Boot Camp organized by ProjeKt Inspire in Tanga, Tanzania, where it served as an example of practical electronics innovation developed by a young student innovator.",

      "The experience strengthened my confidence in electronics design, problem-solving, and prototype development while encouraging me to pursue larger engineering and technology projects in later years.",
    ],

    showcases: [
      {
        title: "School Talent Shows & Student Activities",
        detail:
          "The Active Music Speaker was used to provide audio support during school talent shows and student events where suitable music equipment was unavailable.",
      },
      {
        title: "STEM Youth Boot Camp — ProjeKt Inspire, Tanga, Tanzania",
        detail:
          "The prototype was presented during STEM-related activities as an example of practical electronics innovation, demonstrating how locally available materials and technical creativity could be used to develop a functional audio system.",
      },
    ],

    future: [
      "Improve audio performance and sound quality.",
      "Enhance durability and overall product reliability.",
      "Improve battery efficiency and energy management.",
      "Refine the design for better portability and manufacturing quality.",
      "Explore collaboration with electronics and consumer technology companies.",
      "Further develop the concept into an affordable and reliable audio product that supports access to information, education, and entertainment in communities with limited technological resources.",
      "Contribute to the development of practical electronic products that combine affordability, portability, and real-world usefulness for everyday users.",
    ],
  },
},

  
{
  slug: "audio-video-recording-system",
  title: "Audio and Video Recording System",
  category: "Electronics & Communication Systems",
  year: "2015",
  type: "Portable Audio and Video Recording System Prototype",
  status: "Built prototype",

  purpose:
    "A portable audio and video recording system that I designed and built during secondary school in 2015 to capture school talent shows, student activities, and memorable events using locally available and recovered electronic components.",

  summary:
    "Developed to provide an affordable recording solution for school activities when suitable camera equipment was unavailable. The prototype was assembled using salvaged electronic components from damaged and unused mobile phones, demonstrating practical electronics design, hardware integration, and resourceful problem-solving.",

  skills: [
    "Electronics Assembly",
    "Hardware Prototyping",
    "Electronic Component Integration",
    "Reverse Engineering",
    "Troubleshooting",
    "Soldering",
    "Hardware Design",
    "Creative Problem Solving",
    "Product Development",
    "Technical Innovation",
  ],

  intendedApplication:
    "A portable recording device intended to capture video and audio during school talent shows, student performances, educational activities, and community events where conventional recording equipment was unavailable or unaffordable.",

  limitations:
    "The recording system was an early-stage electronics prototype constructed using recovered components from damaged and unused mobile phones. Further development would be needed to improve image quality, audio capture, battery efficiency, physical durability, and overall reliability before developing it into a modern consumer recording product.",

  caseStudy: {
    context: [
      "The Audio and Video Recording System is a portable camera prototype that I designed and built during secondary school to capture both video and audio recordings.",

      "The project was developed to provide a practical recording solution for school talent shows and student activities at a time when the school did not have a camera available to document these events. Beyond solving this immediate need, the project also served as an opportunity to strengthen my understanding of electronics by designing and assembling a functional recording device using locally available materials.",

      "Although this was one of my earliest engineering projects, developed during my secondary school years, it demonstrates my long-standing passion for electronics, hands-on engineering, and designing practical technologies that solve real-world challenges using locally available resources. This project laid the foundation for many of the larger engineering and STEM innovations I developed in the years that followed.",

      "My interest in electronics and innovation inspired me to design this recording system after recognizing a practical challenge within my school community.",

      "During school talent shows and other student activities, there was no camera available to record performances or preserve memorable moments. I wanted to create a simple and affordable solution that would allow these events to be documented while also challenging myself to build a functional electronic device from recovered components.",

      "This project became one of my earliest experiences in designing practical technology that addressed a real need within my community.",
    ],

    problem: [
      "My school had limited access to suitable audio and video recording equipment for documenting talent shows, student performances, and other school activities.",

      "Without a camera, it was difficult to record important school events or preserve memories of student performances.",

      "Purchasing new recording equipment and electronic components was challenging because of limited financial resources and the availability of suitable devices.",

      "This situation created an opportunity to explore how recovered electronic components could be reused to develop an affordable and functional recording solution.",
    ],

    solution: [
      "To address this challenge, I designed and assembled a portable audio and video recording system capable of capturing both sound and video.",

      "Rather than purchasing new components, I recovered usable electronic parts from broken and unused mobile phones and integrated them into a working prototype. This approach demonstrated how electronic waste can be repurposed into functional technology while reducing development costs.",

      "The prototype incorporated essential recording components, including a camera lens, microphone, display screen, storage components, rechargeable battery, electrical wiring, and supporting electronic circuits.",

      "The completed prototype enabled me to record school talent shows and other student activities using a device I had built myself.",

      "The project demonstrated how creativity, electronics knowledge, and locally available resources could be combined to develop practical technological solutions.",
    ],

    process: [
      {
        title: "01 — Problem Identification & Concept Development",
        items: [
          "Identified the lack of recording equipment during school talent shows and student activities.",
          "Defined the project objective of developing an affordable and portable audio and video recording device.",
          "Explored ways to reuse electronic components from damaged and unused mobile phones.",
          "Developed the initial concept and planned the recording system layout.",
        ],
      },
      {
        title: "02 — Component Recovery & Selection",
        items: [
          "Collected damaged and unused mobile phones as sources of electronic components.",
          "Identified reusable components suitable for the recording prototype.",
          "Recovered essential components, including camera-related parts, display components, microphone, and electronic circuits.",
          "Selected supporting materials and components for constructing the recording system.",
        ],
      },
      {
        title: "03 — Hardware Design & System Assembly",
        items: [
          "Designed the physical layout and arrangement of the recording components.",
          "Integrated the camera lens and video recording components.",
          "Installed the microphone for audio recording.",
          "Connected the display screen and video display module.",
          "Integrated the memory card storage components.",
          "Connected the rechargeable battery and power switch.",
          "Assembled supporting electronic circuits and wiring.",
        ],
      },
      {
        title: "04 — Testing & Troubleshooting",
        items: [
          "Tested the system's audio and video recording functions.",
          "Checked the operation of the camera and display components.",
          "Evaluated component connections and power supply functionality.",
          "Identified and addressed problems encountered during system integration.",
          "Conducted repeated testing to improve the reliability of the recording prototype.",
        ],
      },
      {
        title: "05 — Practical Demonstration",
        items: [
          "Used the completed prototype to record school talent shows and student activities.",
          "Demonstrated the recording device during a school talent show.",
          "Observed the practical operation of the recording system in a real-world school environment.",
          "Gained experience presenting and demonstrating a self-developed electronics project.",
        ],
      },
    ],

    tools: [
      {
        title: "Electronic Components",
        items: [
          "Camera Lens",
          "Microphone",
          "Display Screen",
          "Flashlight",
          "Memory Card Storage",
          "Video Display Module",
          "Rechargeable Battery",
          "Power Switch",
          "Supporting Electronic Circuits",
          "Electrical Wiring",
        ],
      },
      {
        title: "Materials & Component Sources",
        items: [
          "Damaged Mobile Phones",
          "Unused Mobile Phone Components",
          "Recovered Electronic Modules",
          "Locally Available Electronic Materials",
          "Supporting Assembly Materials",
        ],
      },
      {
        title: "Technical Skills Applied",
        items: [
          "Electronics Assembly",
          "Component Recovery and Reuse",
          "Hardware Prototyping",
          "Electronic Component Integration",
          "Soldering",
          "Hardware Design",
          "Testing and Troubleshooting",
          "Creative Problem Solving",
        ],
      },
    ],

    challenges: [
      "One of the biggest challenges during the development process was the limited availability of electronic materials and specialized equipment.",

      "Obtaining suitable camera and recording components was difficult because of limited resources and access to new electronic devices.",

      "To overcome these limitations, I carefully salvaged usable parts from damaged mobile phones and adapted them for the prototype.",

      "Integrating different electronic components into a functional recording system required careful assembly, troubleshooting, and repeated testing.",

      "This experience strengthened my ability to work creatively with limited resources while improving my practical electronics, hardware integration, and problem-solving skills.",
    ],

    outcome: [
      "The completed prototype successfully recorded school talent shows and student activities, providing a practical solution where recording equipment was unavailable.",

      "The project also marked one of my earliest public innovation presentations, as I demonstrated the camera during a school talent show.",

      "More importantly, the experience deepened my understanding of electronics, hardware integration, and product development, reinforcing my passion for designing technologies that solve real-world problems.",

      "The project demonstrated the potential of reusing electronic components from damaged devices to create functional technology solutions while minimizing development costs.",

      "Through this experience, I gained confidence in designing, assembling, testing, and improving electronic systems, which later contributed to my continued involvement in engineering, robotics, and STEM innovation projects.",
    ],

    showcases: [
      {
        title: "School Talent Show — Prototype Demonstration",
        detail:
          "The Audio and Video Recording System was demonstrated during a school talent show, providing an opportunity to present an early electronics innovation and demonstrate its practical recording functionality.",
      },
      {
        title: "School Events & Student Activities",
        detail:
          "The prototype was used to capture audio and video recordings of school talent shows and student activities, helping document events where conventional recording equipment was unavailable.",
      },
    ],

    future: [
      "Improve video recording quality through higher-quality imaging technology.",
      "Enhance audio capture and recording clarity.",
      "Improve battery efficiency and power management.",
      "Introduce more durable hardware components and protective housing.",
      "Improve overall recording performance and reliability.",
      "Explore modern camera systems and imaging technologies.",
      "Investigate opportunities to collaborate with consumer electronics and camera technology companies.",
      "Continue developing the concept toward an affordable and reliable recording solution.",
      "Contribute to the development of practical electronic products that improve access to technology for communities with limited resources.",
    ],
  },
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
