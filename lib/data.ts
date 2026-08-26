export const profile = {
  name: 'Innocent Simon',
  headline: 'Innovator | STEM Educator | Electronics Technologist | Problem Solver',
  tagline:
    'Building practical solutions through electronics, robotics, STEM education, engineering design, innovation, and entrepreneurship to address real-world challenges.',
  email: 'richardinnocent953@gmail.com',
  linkedin: 'https://www.linkedin.com/in/innocent-simon',
  location: 'Alfred, New York, USA · Kigoma, Tanzania',
  resumeUrl: '/innocent-simon-resume.pdf',
  portrait: '/images/portrait.png',
  heroImage: '/images/hero-robot.png',
}

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Journey', href: '/journey' },
  { label: 'Projects', href: '/projects' },
  { label: 'Experience', href: '/experience' },
  { label: 'Publications', href: '/publications' },
  { label: 'Awards', href: '/awards' },
  { label: 'Resume', href: '/resume' },
]

export const snapshot = [
  {
    icon: 'CircuitBoard',
    title: 'Electronics & Engineering',
    body: 'Hands-on background in electronics, troubleshooting, prototyping, and technical systems.',
  },
  {
    icon: 'Bot',
    title: 'Robotics & Innovation',
    body: 'Developing practical prototypes and technology concepts for real-world challenges.',
  },
  {
    icon: 'GraduationCap',
    title: 'STEM Education',
    body: 'Teaching and mentoring young students through practical, project-based learning.',
  },
  {
    icon: 'Users',
    title: 'Leadership',
    body: 'Experience leading student organizations, STEM programs, and youth initiatives.',
  },
  {
    icon: 'Rocket',
    title: 'Entrepreneurship',
    body: 'Incubation programs, prototype development, startup formation, and commercialization.',
  },
]

export const impactMetrics = [
  { value: '3,000+', label: 'Students Reached', context: 'STEM outreach in Kagera' },
  { value: '8', label: 'Schools Visited', context: 'Kagera STEM outreach' },
  { value: '70+', label: 'Countries', context: 'International participation via LIYSF' },
  { value: '15 / 100+', label: 'Selected', context: 'Jamii Tech Incubation Program' },
  { value: '88 / 800+', label: 'Finalists', context: 'MAKISATU 2022' },
]

export type ProjectCategory =
  | 'Robotics'
  | 'Electronics'
  | 'STEM Education'
  | 'Renewable Energy'
  | 'Agriculture'
  | 'Software/Data'
  | 'Mechanical Design'
  | 'Early Innovation'

export type CaseStudySection = { heading: string; body?: string; bullets?: string[] }

export type Project = {
  slug: string
  title: string
  category: string
  categoryTag: ProjectCategory
  type: string
  status: string
  year: string
  image: string
  summary: string
  featured?: boolean
  overview?: string
  story?: string
  problem?: string
  solution?: string
  process?: string[]
  tools?: string[]
  contribution?: string
  challenges?: string
  outcome?: string
  skills?: string[]
  future?: string
  media?: string[]
  gallery?: string[]
}

export const projects: Project[] = [
  {
    slug: 'military-security-robot',
    title: 'Military Security Robot Prototype',
    category: 'Robotics & Automation',
    categoryTag: 'Robotics',
    type: 'Individual Project',
    status: 'Prototype',
    year: '2022',
    image: '/images/projects/security-robot.png',
    featured: true,
    summary:
      'A remotely operated robotic prototype designed to support security monitoring, inspection, and surveillance while reducing human exposure to hazardous environments.',
    overview:
      'The Military Security Robot Prototype is a robotics and electronics project developed to explore how remotely operated robotic systems can support security monitoring, inspection, and surveillance activities. The prototype demonstrates the potential of robotics in improving situational awareness, reducing direct human exposure to hazardous environments, and supporting security operations through remote observation and control.',
    story:
      'The idea was inspired by the rapid advancement of robotics and automation worldwide, and by observing situations in which security personnel and soldiers are exposed to significant risks while performing inspection and monitoring tasks. I wanted to explore how robotic technology could assist in environments that pose safety challenges to humans, applying my electronics knowledge, creativity, and engineering problem-solving to build a practical solution.',
    problem:
      'Security personnel are often required to inspect unfamiliar or potentially hazardous environments, exposing individuals to unnecessary risks. Monitoring activities at transportation hubs, restricted areas, and other sensitive locations require continuous observation and information gathering to support decision-making.',
    solution:
      'I designed and developed a remotely operated robotic prototype that moves within an environment while an operator controls it from a distance. The prototype incorporated LED indicator lights and an alarm system to support demonstration and signaling functions, showing how robotic systems can act as supporting tools for monitoring and inspection while reducing direct human involvement in risky situations.',
    process: [
      'Concept Development — identified the problem, defined objectives, and researched robotics in security applications.',
      'System Design — created the initial design concept and planned the arrangement of electronic and mechanical components.',
      'Chassis & Body Construction — designed and built the robot structure using locally available materials.',
      'Electronics Integration — installed a transmitter/receiver remote-control system, LED indicators, and an alarm; connected and tested circuits and power systems.',
      'Testing & Improvement — conducted multiple rounds of testing, evaluated movement and control reliability, and refined the design.',
    ],
    tools: [
      'Remote Control Transmitter',
      'Remote Control Receiver',
      'DC Motors',
      'LED Indicator Lights',
      'Alarm System',
      'Electronic Circuits',
      'Power Supply Components',
    ],
    contribution:
      'Sole designer and builder — from concept and system design through chassis construction, electronics integration, and testing.',
    challenges:
      'Limited access to specialized equipment, tools, and materials meant relying heavily on locally available components. This required creativity, adaptability, and continuous problem-solving throughout design and construction, but the functional prototype was completed successfully.',
    outcome:
      'The project demonstrated the practical application of robotics, electronics, and engineering design within a security-focused concept. It was showcased at the 46th Dar es Salaam International Trade Fair (Saba Saba 2022) and the 63rd London International Youth Science Forum (LIYSF 2022) Science Bazaar, and received television, radio, and newspaper coverage across Tanzania.',
    skills: [
      'Robotics',
      'Electronics',
      'Prototype Development',
      'Engineering Design',
      'Technical Drawing',
      'Soldering',
      'System Integration',
      'Problem Solving',
      'Troubleshooting',
      'Technical Communication',
      'Public Presentation',
      'STEM Outreach',
    ],
    future:
      'Future development may include advanced sensors, wireless communication systems, intelligent monitoring capabilities, and enhanced navigation, with a long-term goal of refining the concept through collaboration and research.',
    media: [
      'Azam TV — Morning Trumpet',
      'Millard Ayo TV',
      'Uhondo TV',
      'Mchuzi Mx TV',
      'Times FM — Wapambanaji',
      'Nipashe, Mwananchi, Tanzania Daima, Majira',
    ],
  },
  {
    slug: 'stem-skills-training-model',
    title: 'STEM Skills Training Model',
    category: 'STEM Education Technologies',
    categoryTag: 'STEM Education',
    type: 'Individual Project',
    status: 'Prototype',
    year: '2021',
    image: '/images/projects/stem-model.png',
    featured: true,
    summary:
      'An educational power generation prototype demonstrating electricity generation, transmission, and distribution through hands-on, interactive STEM learning.',
    overview:
      'The STEM Skills Training Model is an educational power generation prototype designed to demonstrate the complete process of electricity generation, transmission, and distribution through hands-on learning. It supports practical STEM education by helping students understand scientific and engineering concepts through direct observation and interaction rather than classroom theory alone.',
    story:
      'I was motivated to create a teaching tool that makes abstract concepts tangible. The model enables learners to explore electrical circuits, energy generation, transmission systems, magnetism, simple and complex machines, and electricity distribution in a practical, engaging way.',
    problem:
      'Many students learn science and engineering concepts only in theory, without practical demonstration tools that show how electricity is generated, transmitted, and distributed in real systems.',
    solution:
      'A physical, interactive model that visualises the full power generation-to-distribution chain, allowing learners to observe and interact with each stage of the process.',
    tools: ['Electrical Circuits', 'Generators & Motors', 'Transmission Model', 'Magnets', 'Locally Sourced Materials'],
    contribution: 'Designed, built, and demonstrated the full training model individually.',
    challenges: 'Building an accurate, durable demonstration model with locally available materials and limited tooling.',
    outcome:
      'Selected as a national finalist project at MAKISATU 2022 (88 finalists from 800+ applicants) and demonstrated at Saba Saba 2022. Used to support hands-on STEM learning for students.',
    skills: ['STEM Education', 'Electronics', 'Engineering Design', 'Prototyping', 'Technical Communication'],
    future: 'Add modular components and interactive instrumentation to measure voltage, current, and energy flow.',
  },
  {
    slug: 'manual-rice-planter',
    title: 'Manual Rice Planter Machine',
    category: 'Agricultural Innovation & Community Solutions',
    categoryTag: 'Agriculture',
    type: 'Team Project',
    status: 'Prototype',
    year: '2023',
    image: '/images/projects/rice-planter.png',
    featured: true,
    summary:
      'An agricultural innovation designed to improve planting efficiency and support farming activities through practical, low-cost technology.',
    overview:
      'The Manual Rice Planter Machine is an agricultural innovation designed to improve planting efficiency and reduce the labour and time required for rice planting, developed during the Jamii Tech Incubation Program at Twende Innovation Social Center.',
    story:
      'Developed by a team of three selected among 15 from 100+ applicants for the Jamii Tech Incubation Program. The project focused on improving agricultural efficiency through practical innovation and received seed funding for startup development.',
    problem:
      'Traditional rice planting is labour-intensive, slow, and physically demanding for smallholder farmers, limiting productivity.',
    solution:
      'A manually operated planting machine that speeds up rice planting, improves spacing consistency, and reduces the physical effort required from farmers.',
    tools: ['Mechanical Components', 'Metal Fabrication', 'Design Prototyping'],
    contribution: 'Core team member (team of three) — contributed to design, prototyping, and presentation.',
    challenges: 'Designing a durable, affordable machine suited to local farming conditions with limited resources.',
    outcome:
      'Received seed funding through the Jamii Tech Incubation Program and contributed to startup development as part of Twende\u2019s Decade of Impact in social innovation and entrepreneurship.',
    skills: ['Mechanical Design', 'Prototyping', 'Teamwork', 'Entrepreneurship', 'Problem Solving'],
    future: 'Refine the mechanism for greater speed and reliability, and explore small-scale manufacturing.',
  },
  {
    slug: 'tesla-coil',
    title: 'Tesla Coil',
    category: 'STEM Education Technologies',
    categoryTag: 'STEM Education',
    type: 'Individual Project',
    status: 'Demonstration',
    year: '2021',
    image: '/images/projects/tesla-coil.png',
    featured: true,
    summary:
      'A high-voltage educational demonstration project developed to enhance STEM learning and understanding of electrical engineering concepts.',
    overview:
      'A high-voltage demonstration project built to enhance STEM learning and help learners understand electrical engineering concepts such as resonance, high-frequency electricity, and electromagnetic fields.',
    problem: 'Electromagnetic and high-voltage concepts are difficult to grasp without an engaging visual demonstration.',
    solution: 'A working Tesla coil used as a hands-on teaching aid to make electrical engineering principles visible and memorable.',
    tools: ['High-Voltage Components', 'Copper Coil', 'Capacitors', 'Electronic Circuits'],
    contribution: 'Designed and built the demonstration coil individually for STEM education use.',
    challenges: 'Safely handling high-voltage components and achieving stable resonance with available parts.',
    outcome: 'Used as a demonstration prototype in STEM education initiatives to help learners understand engineering concepts.',
    skills: ['Electronics', 'Electrical Engineering', 'STEM Education', 'Safety Practices'],
    future: 'Add safety enclosures and instrumentation for classroom demonstrations.',
  },
  {
    slug: 'wind-energy-prototype',
    title: 'Wind Energy Prototype',
    category: 'Renewable Energy & Sustainability',
    categoryTag: 'Renewable Energy',
    type: 'Individual Project',
    status: 'Prototype',
    year: '2022',
    image: '/images/projects/wind-energy.png',
    featured: true,
    summary:
      'A renewable energy project designed to demonstrate the principles and potential applications of wind power generation.',
    overview:
      'A renewable energy demonstration prototype designed to illustrate the principles of wind power generation and its potential applications for sustainable energy access.',
    problem: 'Awareness and practical understanding of renewable energy generation remains limited among many learners.',
    solution: 'A working wind turbine prototype that demonstrates how kinetic wind energy is converted into electrical energy.',
    tools: ['Turbine Blades', 'DC Generator', 'Electronic Circuits', 'Support Structure'],
    contribution: 'Designed and built the prototype individually as a STEM demonstration tool.',
    challenges: 'Optimising blade design and generator coupling for reliable output with basic materials.',
    outcome: 'Used to demonstrate renewable energy concepts and inspire interest in sustainability and clean energy.',
    skills: ['Renewable Energy', 'Electronics', 'Engineering Design', 'STEM Education'],
    future: 'Integrate energy storage and real-time output measurement for classroom use.',
  },
  {
    slug: 'simple-wheeled-robot',
    title: 'Simple Wheeled Robot',
    category: 'Robotics & Automation',
    categoryTag: 'Robotics',
    type: 'Individual Project',
    status: 'Prototype',
    year: '2022',
    image: '/images/projects/wheeled-robot.png',
    summary: 'A demonstration robot developed to help learners understand basic robotics, motion control, and electronics.',
    overview: 'A simple wheeled robot built as a STEM demonstration tool to introduce learners to robotics, motors, and electronic control.',
    tools: ['DC Motors', 'Chassis', 'Battery', 'Control Circuit'],
    skills: ['Robotics', 'Electronics', 'STEM Education'],
  },
  {
    slug: 'remote-control-car',
    title: 'Remote-Controlled Car',
    category: 'Creative & Early Innovation Projects',
    categoryTag: 'Early Innovation',
    type: 'Individual Project',
    status: 'Prototype',
    year: 'Secondary School',
    image: '/images/projects/rc-car.png',
    summary: 'An early hands-on project exploring remote control, motors, and electronics.',
    overview: 'A remote-controlled car built during secondary school, exploring wireless control, DC motors, and basic electronics.',
    skills: ['Electronics', 'Creativity', 'Problem Solving'],
  },
  {
    slug: 'active-music-speaker',
    title: 'Active Music Speaker',
    category: 'Electronics & Communication Systems',
    categoryTag: 'Electronics',
    type: 'Individual Project',
    status: 'Completed',
    year: 'Secondary School',
    image: '/images/projects/speaker.png',
    summary: 'An active amplified speaker system built to explore audio electronics and amplification.',
    overview: 'An active music speaker built to explore audio amplification circuits, power supply design, and sound reproduction.',
    skills: ['Electronics', 'Audio Systems', 'Soldering'],
  },
  {
    slug: 'audio-video-recording-system',
    title: 'Audio and Video Recording System',
    category: 'Electronics & Communication Systems',
    categoryTag: 'Electronics',
    type: 'Individual Project',
    status: 'Completed',
    year: 'Secondary School',
    image: '/images/projects/av-system.png',
    summary: 'A recording system project exploring audio and video capture electronics.',
    overview: 'An audio and video recording system developed to understand signal capture, recording electronics, and media systems.',
    skills: ['Electronics', 'Communication Systems', 'System Integration'],
  },
  {
    slug: 'antenna-support-system',
    title: 'Antenna Support System',
    category: 'Electronics & Communication Systems',
    categoryTag: 'Electronics',
    type: 'Individual Project',
    status: 'Completed',
    year: 'Secondary School',
    image: '/images/projects/antenna.png',
    summary: 'A communication support project focused on antenna systems and signal reception.',
    overview: 'An antenna support system built to explore signal reception, communication systems, and structural mounting.',
    skills: ['Electronics', 'Communication Systems'],
  },
  {
    slug: 'data-support-ds',
    title: 'Data Support (DS)',
    category: 'Electronics & Communication Systems',
    categoryTag: 'Electronics',
    type: 'Individual Project',
    status: 'Completed',
    year: 'Secondary School',
    image: '/images/projects/data-support.png',
    summary: 'An electronics and communication systems project exploring data handling and support.',
    overview: 'A data support project developed during secondary school as part of exploring communication and electronic systems.',
    skills: ['Electronics', 'Communication Systems'],
  },
  {
    slug: 'solar-energy-prediction',
    title: 'Estimated Annual Solar Energy Production Prediction',
    category: 'Engineering Design, Modeling & Data Analytics',
    categoryTag: 'Software/Data',
    type: 'Academic Project',
    status: 'Completed',
    year: '2025',
    image: '/images/projects/solar-prediction.png',
    summary: 'A data analytics and modeling project estimating annual solar energy production.',
    overview: 'An engineering modeling and data analytics project that estimates annual solar energy production using data analysis and predictive modeling techniques.',
    tools: ['MATLAB', 'Data Analysis', 'Predictive Modeling'],
    skills: ['Data Analysis', 'Modeling', 'Renewable Energy', 'MATLAB'],
  },
  {
    slug: 'smart-fuel-gauge-app',
    title: 'Smart Fuel Gauge & Budget Tracker App',
    category: 'Engineering Design, Modeling & Data Analytics',
    categoryTag: 'Software/Data',
    type: 'Software Project',
    status: 'Concept',
    year: '2025',
    image: '/images/projects/fuel-app.png',
    summary: 'A software concept combining fuel monitoring with budget tracking to help users manage costs.',
    overview: 'A software application concept combining smart fuel gauge monitoring with budget tracking to help drivers understand and manage fuel consumption and costs.',
    skills: ['Software Design', 'Data Analysis', 'Product Design'],
  },
  {
    slug: 'better-ladder',
    title: 'Better Ladder',
    category: 'Engineering Design & Assistive Technology',
    categoryTag: 'Mechanical Design',
    type: 'Design Project',
    status: 'Concept',
    year: '2025',
    image: '/images/projects/better-ladder.png',
    summary: 'An engineering design project focused on a safer, more practical ladder concept.',
    overview: 'An engineering design and assistive technology project focused on improving ladder safety and usability through thoughtful mechanical design.',
    skills: ['Mechanical Design', 'Engineering Design', 'Problem Solving'],
  },
  {
    slug: 'musical-equipment',
    title: 'Musical Equipment — Drums & Guitar',
    category: 'Creative & Early Innovation Projects',
    categoryTag: 'Early Innovation',
    type: 'Individual Project',
    status: 'Completed',
    year: 'Secondary School',
    image: '/images/projects/musical-equipment.png',
    summary: 'Creative construction of musical instruments exploring design, sound, and craftsmanship.',
    overview: 'Handmade musical equipment including drums and guitars, exploring creative construction, sound production, and craftsmanship.',
    skills: ['Creativity', 'Craftsmanship', 'Design'],
  },
]

export const projectFilters: ProjectCategory[] = [
  'Robotics',
  'Electronics',
  'STEM Education',
  'Renewable Energy',
  'Agriculture',
  'Software/Data',
  'Mechanical Design',
  'Early Innovation',
]

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}

export const timeline = [
  {
    stage: 'Before Primary School',
    period: 'Early Childhood',
    body: 'Early experimentation and building objects using locally available materials, developing creativity, problem-solving, and a passion for innovation.',
  },
  {
    stage: 'Primary School',
    period: 'Foundational Years',
    body: 'Toy cars, model houses, basic electrical systems, household models, and creative construction using wood and locally available materials — simulating residential wiring systems.',
  },
  {
    stage: 'Secondary School',
    period: 'Practical Projects & Leadership',
    body: 'More advanced projects and early leadership through student clubs and school-based organizations.',
    bullets: [
      'Audio and Video Recording System',
      'Active Music Speaker',
      'Antenna Support System',
      'Data Support (DS)',
      'Musical Equipment — Drums & Guitar',
      'Remote-Controlled Car',
    ],
  },
  {
    stage: 'VETA Electronics Training',
    period: 'Vocational Training',
    body: 'Hands-on electronics training, troubleshooting, prototyping, and engineering development through the Vocational Education and Training Authority.',
    bullets: ['STEM Skills Training Model', 'Military Security Robot Prototype'],
  },
  {
    stage: 'Innovation Programs & International Exposure',
    period: '2020 – 2023',
    body: 'Actively participated in innovation programs, STEM initiatives, leadership activities, and international learning opportunities.',
    bullets: ['STEM Youth Boot Camp', 'LIYSF', 'MAKISATU', 'GIFT', 'Jamii Tech', 'ProjeKt Inspire', 'African Union Students\u2019 Platform'],
  },
  {
    stage: 'Alfred University',
    period: 'Present',
    body: 'Pursuing a Bachelor of Science in Business Administration while remaining active in engineering, electronics, robotics, STEM outreach, innovation, and technical projects.',
  },
  {
    stage: 'Looking Ahead',
    period: 'Future',
    body: 'Combining technology, engineering, business, leadership, and entrepreneurship to develop impactful solutions that improve lives and create opportunities for future generations.',
  },
]

export const education = [
  {
    school: 'Alfred University',
    detail: 'Bachelor of Science in Business Administration',
    note: 'Innovation, Leadership, and Entrepreneurship Development',
  },
  {
    school: 'VETA Kipawa ICTC',
    detail: 'Electronics Engineering (Level III)',
    note: 'Advanced Electronics, Prototyping, and Practical Technical Training',
  },
  {
    school: 'VETA Kigoma RVTSC',
    detail: 'Vocational Training (Level I & II)',
    note: 'Electronics and Technical Skills',
  },
]

export type ExperienceItem = {
  role: string
  org: string
  period?: string
  location?: string
  bullets: string[]
  skills?: string[]
}

export type ExperienceGroup = {
  id: string
  title: string
  description: string
  icon: string
  items: ExperienceItem[]
}

export const experienceGroups: ExperienceGroup[] = [
  {
    id: 'global',
    title: 'Global Engagement & International Programs',
    description: 'International forums, presentations, and pan-African youth leadership.',
    icon: 'Globe',
    items: [
      {
        role: 'Young Scientist for Africa (YoSA) · Clare Elwell Scholarship',
        org: 'London International Youth Science Forum — LIYSF 2022',
        period: '2022',
        location: 'Imperial College London · Oxford University',
        bullets: [
          'Represented Tanzania and Africa at an international science forum with participants from 70+ countries.',
          'Presented at the Science Forum Bazaar and engaged in international STEM collaboration.',
          'Visited Imperial College London and Oxford University as part of the program.',
        ],
        skills: ['International Collaboration', 'Public Presentation', 'STEM Communication'],
      },
      {
        role: 'International Presenter',
        org: 'Global Innovation Field Trip — GIFT',
        period: '2021 – 2023',
        bullets: [
          'Delivered international presentations on the innovation journey, the Military Security Robot, and the LIYSF experience.',
          'Presented on robotics, AI, STEM, and climate action to global audiences.',
        ],
        skills: ['Public Speaking', 'Innovation', 'STEM Advocacy'],
      },
      {
        role: 'Member of Parliament & Student Representative — Tanzania',
        org: 'African Union Students\u2019 Platform — AUSP',
        bullets: [
          'Represented Tanzanian students in pan-African youth leadership and international engagement.',
          'Contributed to youth-led dialogue on education, innovation, and development.',
        ],
        skills: ['Leadership', 'Diplomacy', 'Youth Advocacy'],
      },
    ],
  },
  {
    id: 'professional',
    title: 'Professional & Technical Experience',
    description: 'Hands-on electronics and engineering roles in industry and academia.',
    icon: 'Wrench',
    items: [
      {
        role: 'Electronics Technician Intern',
        org: 'Tanzania Airports Authority · Julius Nyerere International Airport',
        period: '2024',
        bullets: [
          'Performed electronics troubleshooting, maintenance, and technical servicing.',
          'Worked with X-ray systems, power supplies, metal detectors, digital phones, and PA systems.',
          'Supported the reliability of critical airport security and communication equipment.',
        ],
        skills: ['Troubleshooting', 'Electronics Maintenance', 'Security Systems', 'Technical Servicing'],
      },
      {
        role: 'Engineering Lab Support Staff',
        org: 'STEP Lab · Alfred University',
        period: 'January 2026 – Present',
        bullets: [
          'Provided engineering laboratory support and assisted students with hands-on projects.',
          'Applied electronics knowledge, organized lab resources, and promoted safe engineering practices.',
          'Collaborated with faculty and students on lab operations.',
        ],
        skills: ['Lab Support', 'Electronics', 'Safety Practices', 'Team Collaboration'],
      },
    ],
  },
  {
    id: 'leadership',
    title: 'Leadership & Organizational Experience',
    description: 'Leading student organizations, STEM programs, and youth initiatives.',
    icon: 'Users',
    items: [
      {
        role: 'President',
        org: 'Alfred Robotics Club',
        period: 'March 2026 – Present',
        bullets: [
          'Lead the robotics club, coordinating projects, meetings, and member development.',
          'Foster hands-on robotics learning and collaboration among members.',
        ],
        skills: ['Leadership', 'Robotics', 'Team Coordination'],
      },
      {
        role: 'STEM Instructor & Youth Mentor',
        org: 'ProjeKt Inspire',
        period: '2023 – 2025',
        bullets: [
          'Taught and mentored young students through practical, project-based STEM learning.',
          'Delivered outreach in robotics, electronics, drones, AI, and engineering.',
        ],
        skills: ['STEM Education', 'Mentorship', 'Technical Communication'],
      },
      {
        role: 'Health & Environment Leadership',
        org: 'VETA Kipawa',
        bullets: ['Led health and environment initiatives within the vocational training community.'],
        skills: ['Leadership', 'Community Engagement'],
      },
      {
        role: 'Student Government Leadership',
        org: 'VETA Kigoma',
        bullets: ['Served in student government, developing leadership, teamwork, and coordination skills.'],
        skills: ['Leadership', 'Coordination'],
      },
    ],
  },
  {
    id: 'innovation',
    title: 'Innovation, Entrepreneurship & Technology Programs',
    description: 'Incubation, competitions, and national innovation platforms.',
    icon: 'Lightbulb',
    items: [
      {
        role: 'Innovator & Team Lead',
        org: 'Jamii Tech Incubation Program · Twende Innovation Social Center',
        bullets: [
          'Selected among 15 from 100+ applicants for the incubation program.',
          'Developed the Manual Rice Planter Machine with a team of three and received seed funding.',
          'Engaged in startup development as part of Twende\u2019s Decade of Impact in social innovation.',
        ],
        skills: ['Entrepreneurship', 'Innovation', 'Teamwork', 'Prototyping'],
      },
      {
        role: 'Participant & Award Winner',
        org: 'STEM Youth Boot Camp',
        period: '2020 – 2022',
        bullets: [
          'Competitively selected for engineering and STEM learning.',
          'Presented projects and earned the Outstanding Individual Project Award and 1st Place Scale-Up Project.',
        ],
        skills: ['STEM', 'Engineering', 'Presentation'],
      },
      {
        role: 'National Finalist',
        org: 'MAKISATU 2022',
        period: '2022',
        bullets: [
          'Among 88 finalists selected from 800+ applicants in a national innovation competition.',
          'Presented the STEM Skills Training Model.',
          'Participated in a COSTECH + Sahara Ventures innovation commercialization workshop.',
        ],
        skills: ['Innovation', 'Commercialization', 'Presentation'],
      },
      {
        role: 'VETA Student Innovator',
        org: 'Saba Saba 2022 · 46th Dar es Salaam International Trade Fair',
        period: '2022',
        bullets: [
          'Demonstrated the Military Security Robot and STEM Skills Training Model to the public.',
          'Awarded VETA Second Place in the Skills Development Category.',
        ],
        skills: ['Public Demonstration', 'Innovation'],
      },
    ],
  },
  {
    id: 'education-outreach',
    title: 'STEM Education & Educator Engagement',
    description: 'Reaching thousands of students through hands-on STEM outreach.',
    icon: 'GraduationCap',
    items: [
      {
        role: 'STEM Educator & Outreach Volunteer',
        org: 'ProjeKt Inspire · STEM Youth Outreach',
        bullets: [
          'Reached approximately 3,000 students across eight schools in Kagera.',
          'Contributed to STEM Youth Boot Camp 7 & 8 and STEM outreach in Arusha.',
          'Ran Saturday STEM Sessions, prepared STEM kits, and engaged Alfred University educators.',
          'Participated in the ProjeKt Inspire 10th Anniversary Celebration.',
        ],
        skills: ['STEM Education', 'Robotics', 'Electronics', 'Drones', 'AI', 'Mentoring'],
      },
    ],
  },
  {
    id: 'community',
    title: 'Community Engagement & Youth Development',
    description: 'Environmental education, youth development, and volunteering.',
    icon: 'HeartHandshake',
    items: [
      {
        role: 'Member & Volunteer',
        org: 'Think Green Club · Tanzania Youth Workshop · Youth Talk · Youth Retreat 2024',
        bullets: [
          'Engaged in environmental education, youth development, and public speaking.',
          'Supported sustainability initiatives and teamwork-driven community programs.',
        ],
        skills: ['Sustainability', 'Public Speaking', 'Teamwork'],
      },
      {
        role: 'Construction Support Volunteer',
        org: 'Habitat for Humanity',
        bullets: ['Contributed to construction support and community service, earning team recognition.'],
        skills: ['Community Service', 'Teamwork'],
      },
      {
        role: 'Resource Mobilization & Partnership Coordinator (Volunteer)',
        org: 'Tanzania Emerging Youth Awards — TEYA',
        bullets: [
          'Led partnership outreach, stakeholder engagement, and resource mobilization.',
          'Coordinated events and programs recognizing youth impact.',
        ],
        skills: ['Partnerships', 'Resource Mobilization', 'Coordination'],
      },
    ],
  },
]

export type Publication = {
  title: string
  type: string
  year: string
  description: string
  category: string
}

export const featuredPublication: Publication = {
  title: 'LIYSF 2022 Full Report',
  type: 'Report',
  year: '2022',
  category: 'Global Engagement',
  description:
    'A full report documenting the London International Youth Science Forum 2022 experience — representing Tanzania and Africa as a Young Scientist for Africa and Clare Elwell Scholarship recipient.',
}

export const publications: Publication[] = [
  { title: 'Military Security Robot — Technical Presentation', type: 'Technical Presentation', year: '2022', category: 'Technical Projects', description: 'Technical presentation covering the design, electronics, and demonstration of the Military Security Robot Prototype.' },
  { title: 'STEM Skills Training Model — Technical Presentation', type: 'Technical Presentation', year: '2021', category: 'Technical Projects', description: 'Presentation on the power generation training model and its educational applications.' },
  { title: 'Manual Rice Planter Machine — Technical Presentation', type: 'Technical Presentation', year: '2023', category: 'Technical Projects', description: 'Presentation on the agricultural innovation developed during the Jamii Tech Incubation Program.' },
  { title: 'Estimated Annual Solar Energy Production Prediction', type: 'Research Project', year: '2025', category: 'Research & Academic', description: 'Academic modeling and data analytics project estimating annual solar energy production.' },
  { title: 'Smart Fuel Gauge & Budget Tracker App', type: 'Academic Project', year: '2025', category: 'Research & Academic', description: 'Software concept combining fuel monitoring and budget tracking.' },
  { title: 'Better Ladder — Design Project', type: 'Design Project', year: '2025', category: 'Research & Academic', description: 'Engineering design project focused on a safer, more practical ladder.' },
  { title: 'STEM Youth Boot Camp Materials', type: 'Education Material', year: '2022', category: 'STEM Education', description: 'STEM educator presentations and outreach materials developed for youth boot camps.' },
  { title: 'MAKISATU 2022 Presentation', type: 'Competition Presentation', year: '2022', category: 'Innovation & Competition', description: 'National innovation competition presentation of the STEM Skills Training Model.' },
  { title: 'Saba Saba 2022 Presentation', type: 'Exhibition', year: '2022', category: 'Innovation & Competition', description: 'Public demonstration materials from the 46th Dar es Salaam International Trade Fair.' },
  { title: 'GIFT 2021 Presentation', type: 'Global Presentation', year: '2021', category: 'Global Innovation', description: 'Global Innovation Field Trip presentation on the innovation journey.' },
  { title: 'GIFT 2022 Presentation', type: 'Global Presentation', year: '2022', category: 'Global Innovation', description: 'Global Innovation Field Trip presentation on robotics and STEM.' },
  { title: 'GIFT 2023 Presentation', type: 'Global Presentation', year: '2023', category: 'Global Innovation', description: 'Global Innovation Field Trip presentation on innovation and climate action.' },
]

export type Award = {
  title: string
  org: string
  year: string
  context: string
  category: string
}

export const awards: Award[] = [
  { title: '1st Place — Scale-Up Project', org: 'STEM Youth Boot Camp', year: '2022', category: 'Innovation & Technical Achievement', context: 'First place recognition for an outstanding scale-up project at the STEM Youth Boot Camp.' },
  { title: 'Outstanding Individual Project Award', org: 'STEM Youth Boot Camp', year: '2021', category: 'Innovation & Technical Achievement', context: 'Recognized for an outstanding individual engineering and STEM project.' },
  { title: 'National STEM Innovation Competition Recognition', org: 'MAKISATU', year: '2022', category: 'Innovation & Technical Achievement', context: 'National recognition for innovation through the STEM Skills Training Model.' },
  { title: 'Clare Elwell Scholarship — Young Scientist for Africa (YoSA)', org: 'LIYSF', year: '2022', category: 'Scholarships & International Recognition', context: 'Scholarship enabling representation of Tanzania and Africa at the London International Youth Science Forum.' },
  { title: 'LIYSF International Representation', org: 'London International Youth Science Forum', year: '2022', category: 'Scholarships & International Recognition', context: 'Selected to represent Tanzania and Africa among participants from 70+ countries.' },
  { title: 'MAKISATU National Finalist', org: 'MAKISATU', year: '2022', category: 'Competitive Selection & National Recognition', context: 'Among 88 finalists selected from 800+ applicants in a national innovation competition.' },
  { title: 'Second Place — Skills Development Category', org: 'VETA · Saba Saba 2022', year: '2022', category: 'Competitive Selection & National Recognition', context: 'VETA team second place at the 46th Dar es Salaam International Trade Fair.' },
  { title: 'Team Recognition', org: 'Habitat for Humanity', year: '2024', category: 'Community & Team Recognition', context: 'Recognized for construction support and community service as part of a volunteer team.' },
]

export const mediaCoverage = [
  'Azam TV — Morning Trumpet',
  'Millard Ayo TV',
  'Uhondo TV',
  'Mchuzi Mx TV',
  'Times FM — Wapambanaji',
  'Nipashe',
  'Mwananchi',
  'Tanzania Daima',
  'Majira',
]

export const skillGroups = [
  { title: 'Technical', skills: ['Electronics', 'Robotics', 'Prototyping', 'Troubleshooting', 'Engineering Design', 'MATLAB', 'Data Analysis'] },
  { title: 'Innovation', skills: ['Design Thinking', 'Product Development', 'Creativity', 'Problem Solving'] },
  { title: 'Leadership', skills: ['Team Leadership', 'Mentorship', 'Public Speaking', 'Program Coordination'] },
  { title: 'Business', skills: ['Entrepreneurship', 'Organizational Development', 'Partnerships', 'Resource Mobilization'] },
]

export const experienceHighlights = [
  { title: 'Alfred University STEP Lab', role: 'Engineering Lab Support', icon: 'FlaskConical' },
  { title: 'Julius Nyerere Int\u2019l Airport', role: 'Electronics Technician Intern', icon: 'Plane' },
  { title: 'LIYSF 2022', role: 'Young Scientist for Africa', icon: 'Globe' },
  { title: 'ProjeKt Inspire', role: 'STEM Instructor & Mentor', icon: 'GraduationCap' },
  { title: 'Alfred Robotics Club', role: 'President', icon: 'Bot' },
]
