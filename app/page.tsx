"use client"

import { useEffect, useState } from "react"
import { Github, Instagram, MessageCircle } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

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
    <main className="page">
      <ThemeToggle />

      <div className="wrap">
        {/* Header section */}
        <header className="intro">
          <h1>Václav Šmejkal</h1>
          <p>I create problems to build software that solves them.</p>
        </header>

        {/* Social links */}
        <section className="socials">
          <SocialLink
            href="https://git.satan.red/ENGO150"
            icon={<GitLabIcon className="icon" />}
            label="GitLab"
          />
          <SocialLink
            href="https://github.com/ENGO150"
            icon={<Github className="icon" />}
            label="GitHub"
          />
          <SocialLink
            href="https://discord.com/users/634385503956893737"
            icon={<MessageCircle className="icon" />}
            label="Discord"
          />
          <SocialLink
            href="https://instagram.com/engo_150"
            icon={<Instagram className="icon" />}
            label="Instagram"
          />
          {email && (
            <SocialLink
              href={`mailto:${email}`}
              icon={<MailIcon className="icon" />}
              label="Email"
            />
          )}
        </section>

        {/* Projects section */}
        <section>
          <h2 className="projects-title">Projects</h2>
          <div className="projects">
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
      className="social"
      aria-label={label}
    >
      {icon}
      <span>{label}</span>
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
      className="project"
      draggable="false"
    >
      <span
        className="project-icon"
        style={{ WebkitMaskImage: `url(${iconSrc})`, maskImage: `url(${iconSrc})` }}
        aria-label={`${title} icon`}
        role="img"
      />
      <div className="project-body">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <svg
        className="project-arrow"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="m9 18 6-6-6-6" />
      </svg>
    </a>
  )
}
