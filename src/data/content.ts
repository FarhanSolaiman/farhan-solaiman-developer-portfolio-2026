/* ============================================================
   content.ts — Single source of truth for all site copy.
   Edit here; components read from this file.
   Framing rules (per Farhan):
   - Projects: impact-only. No client names, no workflow internals.
   - Experience: current role is UNNAMED; only prior employers named.
   ============================================================ */

import type { Motif } from '../components/WorkflowArt'

export const profile = {
  name: 'Farhan “Hans” Solaiman',
  role: 'AI Engineer & Builder',
  location: 'Manila, Philippines',
  availability: 'Open to Remote',
  email: 'farhant.solaiman@gmail.com',
  linkedin: 'https://linkedin.com/in/hanngbayan',
  github: 'https://github.com/FarhanSolaiman',
  resume: 'farhan_solaiman_resume_2026.pdf',
  // Hero statement — leads with the AI identity.
  headline: ['Architecting', 'agentic AI', 'that ships.'],
  tagline:
    'I build AI systems and automations that do the work for you — turning messy, manual processes into software that quietly runs itself.',
}

export const stats = [
  { value: '7+', label: 'Years shipping' },
  { value: '15+', label: 'AI workflows in prod' },
  { value: '60%', label: 'Manual work cut' },
  { value: '99%+', label: 'Workflow uptime' },
] as const

export const about = [
  'I’m an AI engineer and full-stack developer with 7+ years building production systems across government, enterprise consulting, and product engineering.',
  'I architect and ship agentic AI workflows — LLM orchestration, RAG, headless-browser data pipelines — and pair that with real full-stack (React, Node, TypeScript) and cloud engineering (AWS, serverless, Terraform, CI/CD) to deliver end-to-end.',
  'These days I lead engineering delivery: owning the lifecycle from discovery to production, running sprints, and building the reusable automation libraries that keep a team fast.',
]

export type Project = {
  id: string
  name: string
  kind: string
  blurb: string
  tags: string[]
  motif: Motif
}

// Real systems I've shipped, framed by the value they deliver.
// Client-neutral on purpose — the outcome, not the client or the wiring.
export const projects: Project[] = [
  {
    id: 'agentic-hiring',
    name: 'Agentic Hiring Pipeline',
    kind: 'AI Recruiting System',
    blurb:
      'A team of AI agents that screens, assesses, and moves candidates through a full hiring funnel on their own — with guardrails that flag anything slipping through.',
    tags: ['AI Agents', 'Automation', 'Ops'],
    motif: 'ats',
  },
  {
    id: 'sales-intelligence',
    name: 'Sales Call Intelligence',
    kind: 'Sales AI',
    blurb:
      'Turns every recorded sales call into a clear scorecard — strengths, gaps, and coaching — and quietly surfaces the reps who need a hand.',
    tags: ['LLM', 'Analysis', 'Sales'],
    motif: 'sales',
  },
  {
    id: 'content-syndication',
    name: 'Content Syndication Engine',
    kind: 'Content Distribution',
    blurb:
      'One piece of content becomes many — articles, images, and social posts spread across platforms automatically, on-brand, without the busywork.',
    tags: ['RAG', 'Automation', 'Content'],
    motif: 'distribution',
  },
  {
    id: 'sales-coach',
    name: 'Real-Time Sales Coach',
    kind: 'Realtime AI App',
    blurb:
      'A desktop app that listens to live calls and coaches reps in the moment — then hands them a full breakdown the second the call ends.',
    tags: ['Realtime', 'AI', 'Desktop'],
    motif: 'assistant',
  },
  {
    id: 'citation-finder',
    name: 'Local SEO Citation Finder',
    kind: 'SEO Automation',
    blurb:
      'Hunts down every place a business should be listed, checks each one is real, and hands back a ranked, screenshot-annotated shortlist to claim.',
    tags: ['SEO', 'Scraping', 'Automation'],
    motif: 'seo',
  },
  {
    id: 'provisioning',
    name: 'Document Provisioning',
    kind: 'Ops Automation',
    blurb:
      'A single order spins up a complete, perfectly organized document workspace in seconds — with automatic rollback if anything goes wrong.',
    tags: ['Automation', 'Ops', 'Reliability'],
    motif: 'document',
  },
]

export type Service = {
  no: string
  title: string
  desc: string
}

export const services: Service[] = [
  {
    no: '01',
    title: 'AI Automation & LLM Orchestration',
    desc: 'Agentic workflows, RAG, prompt engineering, and LLM data pipelines. Headless-browser automation and multi-step intelligent systems that run in production.',
  },
  {
    no: '02',
    title: 'Full-Stack Engineering',
    desc: 'React, Node.js, TypeScript, and REST/microservice APIs. Performant UIs and clean backends that hold up under real load.',
  },
  {
    no: '03',
    title: 'Cloud & DevOps',
    desc: 'AWS (Lambda, SQS, S3), serverless, Terraform IaC, and CI/CD. Infrastructure that deploys itself and scales without drama.',
  },
]

export type Experience = {
  period: string
  company: string
  role: string
  current?: boolean
  bullets: string[]
}

// Current role intentionally UNNAMED. Prior employers are named.
export const experience: Experience[] = [
  {
    period: '2025 — Now',
    company: 'AI Automation Agency',
    role: 'AI Engineer & Automation',
    current: true,
    bullets: [
      'Architect and ship production AI automation with LLM orchestration, cutting manual processing time up to 60%.',
      'Lead engineers on sprint-based delivery, setting code-review standards and a reusable automation library.',
      'Own the full lifecycle — from discovery to production — with monitoring patterns that sustain 99%+ uptime.',
    ],
  },
  {
    period: 'Apr 2023 — Sep 2025',
    company: 'AS White Global',
    role: 'Senior Full Stack Developer',
    bullets: [
      'Improved UI performance 30% by optimizing React & TypeScript components.',
      'Designed REST APIs that cut data-transfer errors 25%; shipped features up to 2 weeks early with TDD.',
      'Supported an AWS cloud migration and mentored junior developers.',
    ],
  },
  {
    period: 'Jul 2021 — Apr 2023',
    company: 'Accenture',
    role: 'Full Stack Engineer / Sr. Analyst',
    bullets: [
      'Built and integrated backend REST APIs with frontend clients, leading a small full-stack team.',
      'Authored Terraform IaC for AWS provisioning and optimized CI/CD release cycles.',
      'Earned AWS Certified Cloud Practitioner during tenure.',
    ],
  },
  {
    period: 'Oct 2018 — Mar 2021',
    company: 'DOST-ASTI',
    role: 'Science Research Specialist I (Web Dev)',
    bullets: [
      'Migrated legacy government systems to modern web platforms, cutting manual processing 35%.',
      'Built secure internal tools with JavaScript, Node.js, and SQL under government compliance standards.',
    ],
  },
]

export type SkillGroup = { label: string; items: string[] }

export const skills: SkillGroup[] = [
  {
    label: 'AI & Automation',
    items: ['n8n', 'Agentic Workflows', 'OpenAI', 'Gemini', 'RAG', 'Prompt Eng.', 'SerpAPI', 'Browserless.io'],
  },
  {
    label: 'Full-Stack',
    items: ['React', 'Node.js', 'TypeScript', 'Angular', 'Express', 'REST', 'SQL', 'MongoDB', 'Redis'],
  },
  {
    label: 'Cloud & DevOps',
    items: ['AWS', 'Lambda', 'SQS', 'Terraform', 'Serverless', 'CI/CD', 'CircleCI', 'Docker'],
  },
  {
    label: 'Testing & Craft',
    items: ['Jest', 'TDD', 'Code Review', 'Agile / Scrum', 'Power BI', 'Mentoring'],
  },
]

export const nav = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
] as const
