"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Github, Instagram, MessageCircle } from "lucide-react"

function GitLabIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z" />
    </svg>
  )
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

export default function Portfolio() {
  const [email, setEmail] = useState<string | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    // Base64 encoded email to prevent bot scraping
    const encoded = "ZW5nb0BzYXRhbi5yZWQ="
    try {
      setEmail(atob(encoded))
    } catch {
      setEmail(null)
    }
  }, [])

  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* Full-screen subtle blur that moves opposite to mouse */}
      <div
        className="pointer-events-none fixed inset-[-50%] bg-gradient-radial from-white/[0.025] to-transparent"
        style={{
          transform: `translate(${-mousePosition.x * 40}px, ${-mousePosition.y * 40}px)`,
          transition: "transform 0.5s ease-out",
        }}
      />

      <div className="mx-auto max-w-2xl px-6 py-24 md:py-32">
        {/* Header section */}
        <header className="mb-16">
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl text-balance">
            Václav Šmejkal
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
            I create problems to build software that solves them. I care deeply
            about privacy, cryptography and automation.
          </p>
        </header>

        {/* Social links */}
        <section className="mb-16">
          <div className="flex flex-wrap gap-3">
            <SocialLink
              href="https://git.satan.red/ENGO150"
              icon={<GitLabIcon className="h-5 w-5" />}
              label="GitLab"
            />
            <SocialLink
              href="https://github.com/ENGO150"
              icon={<Github className="h-5 w-5" />}
              label="GitHub"
            />
            <SocialLink
              href="https://discord.com/users/634385503956893737"
              icon={<MessageCircle className="h-5 w-5" />}
              label="Discord"
            />
            <SocialLink
              href="https://instagram.com/engo_150"
              icon={<Instagram className="h-5 w-5" />}
              label="Instagram"
            />
            {email && (
              <SocialLink
                href={`mailto:${email}`}
                icon={<MailIcon className="h-5 w-5" />}
                label="Email"
              />
            )}
          </div>
        </section>

        {/* Projects section */}
        <section>
          <h2 className="mb-6 text-xl font-semibold tracking-tight">
            Projects
          </h2>
          <div className="grid gap-4">
            <ProjectCard
              title="WHY2"
              description="Lightweight, fast, secure, and easy to use encryption system."
              iconSrc="/res/logo.png"
              href="https://why2.satan.red"
            />
          </div>
        </section>
      </div>
    </main>
  )
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string
  icon: React.ReactNode
  label: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-2 rounded-xl border border-border/50 bg-card/50 px-4 py-2.5 backdrop-blur-sm transition-all duration-300 hover:border-border hover:bg-card/80 hover:shadow-lg hover:shadow-white/[0.02]"
      aria-label={label}
    >
      <span className="text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
        {icon}
      </span>
      <span className="text-sm font-medium text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
        {label}
      </span>
    </a>
  )
}

function ProjectCard({
  title,
  description,
  iconSrc,
  href,
}: {
  title: string
  description: string
  iconSrc: string
  href: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-start gap-4 rounded-2xl border border-border/50 bg-card/50 p-5 backdrop-blur-md transition-all duration-300 select-none hover:-translate-y-1 hover:border-border hover:bg-card/80 hover:shadow-xl hover:shadow-white/[0.03]"
      draggable="false"
    >
      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl transition-transform duration-300 group-hover:scale-105 pointer-events-none">
        <Image
          src={iconSrc}
          alt={`${title} icon`}
          width={56}
          height={56}
          className="h-full w-full object-contain"
          draggable={false}
          unoptimized
          loading="eager"
        />
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="mb-1 text-base font-semibold tracking-tight text-foreground transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground/50 transition-all duration-300 group-hover:translate-x-1 group-hover:text-muted-foreground">
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </div>
    </a>
  )
}
