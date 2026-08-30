export const site = {
  name: 'Innocent Simon',
  roles: ['Innovator', 'Technologist', 'STEM Educator'],
  location: 'Tanzania / New York',
  tagline: 'I build practical technology for people, learning, and progress.',
  intro:
    'Innovator, technologist, and STEM educator working across electronics, robotics, renewable energy, education, and community-centered problem-solving.',
  portrait: '/images/innocent-simon.jpg' as string | null,
  portraitAlt:
    'Portrait of Innocent Simon smiling outdoors in front of a brick university building, wearing a light-blue shirt, navy tie, and a red conference lanyard',
  /**
   * Links are rendered only when a real URL is supplied.
   * Leave a value as null to hide the action entirely — never ship dead links.
   */
  links: {
    email: 'richardinnocent953@gmail.com' as string | null,
    linkedin: 'https://www.linkedin.com/in/innocent-simon' as string | null,
    resume: null as string | null,
    github: null as string | null,
  },
}

export const navItems = [
  { to: '/work', label: 'Work' },
  { to: '/journey', label: 'Journey' },
  { to: '/impact', label: 'Impact' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
] as const

export const proofPoints = [
  {
    value: 3000,
    prefix: '~',
    suffix: '',
    label: 'Students reached',
    note: '2023 Kagera outreach, Bukoba District',
  },
  {
    value: 8,
    prefix: '',
    suffix: '',
    label: 'Kagera schools visited',
    note: 'STEM outreach, April 2023',
  },
  {
    value: 2,
    prefix: '',
    suffix: '',
    label: 'Arusha schools visited',
    note: 'Boot Camp 8 outreach, 2024',
  },
  {
    value: 500,
    prefix: '',
    suffix: '+',
    label: 'LIYSF cohort',
    note: 'Young scientists from 70+ countries, London 2022',
  },
  {
    value: 88,
    prefix: '',
    suffix: '',
    label: 'MAKISATU finalists',
    note: 'Selected from 800+ national applicants, 2022',
  },
]
