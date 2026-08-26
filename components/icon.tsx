import {
  CircuitBoard,
  Bot,
  GraduationCap,
  Users,
  Rocket,
  Globe,
  Wrench,
  Lightbulb,
  HeartHandshake,
  FlaskConical,
  Plane,
  Cpu,
  Zap,
  Leaf,
  Sprout,
  Code2,
  Ruler,
  Sparkles,
  type LucideIcon,
} from 'lucide-react'

const map: Record<string, LucideIcon> = {
  CircuitBoard,
  Bot,
  GraduationCap,
  Users,
  Rocket,
  Globe,
  Wrench,
  Lightbulb,
  HeartHandshake,
  FlaskConical,
  Plane,
  Cpu,
  Zap,
  Leaf,
  Sprout,
  Code2,
  Ruler,
  Sparkles,
}

export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = map[name] ?? Sparkles
  return <Cmp className={className} aria-hidden="true" />
}

export const categoryIcon: Record<string, string> = {
  Robotics: 'Bot',
  Electronics: 'CircuitBoard',
  'STEM Education': 'GraduationCap',
  'Renewable Energy': 'Leaf',
  Agriculture: 'Sprout',
  'Software/Data': 'Code2',
  'Mechanical Design': 'Ruler',
  'Early Innovation': 'Sparkles',
}
