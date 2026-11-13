import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink, Github, Image as ImageIcon } from "lucide-react";
import { featuredProjects, type Project, type ProjectStatus } from "../data/projects";

const statusStyle: Record<ProjectStatus, string> = {
  prototype: "border-[#FF8A3D]/50 text-[#FFB07A] bg-[#FF8A3D]/10",
  deployed: "border-[#7C5CFF]/60 text-[#B7A5FF] bg-[#7C5CFF]/10",
  hackathon: "border-white/25 text-[#EDEAF5]/80 bg-white/5",
};

function Screenshot({ project }: { project: Project }) {
  const [missing, setMissing] = useState(false);
  const reduce = useReducedMotion();
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0B0B12] shadow-[0_0_60px_-20px_rgba(124,92,255,0.45)]">
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5" aria-hidden="true">
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
      </div>
      {missing ? (
        <div className="flex aspect-[16/10] flex-col items-center justify-center gap-2 text-center text-sm text-[#EDEAF5]/50">
          <ImageIcon className="h-6 w-6" aria-hidden="true" />
          <span>Screenshot to be added: public/screenshots/{project.slug}.png</span>
        </div>
      ) : (
        <motion.img
          src={`/screenshots/${project.slug}.png`}
          alt={`Screenshot of ${project.title}`}
          loading="lazy"
          onError={() => setMissing(true)}
          className="aspect-[16/10] w-full object-cover object-top"
          whileHover={reduce ? undefined : { scale: 1.03 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      )}
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reduce = useReducedMotion();
  const wide = project.layout === "wide" || project.layout === "wideFlip";
  const span =
    project.layout === "main" ? "lg:col-span-7" : project.layout === "side" ? "lg:col-span-5" : "lg:col-span-12";
  const inner = wide ? "lg:grid lg:grid-cols-5 lg:items-center lg:gap-10" : "flex flex-col gap-8";
  const shotCol = wide ? "lg:col-span-3" : "";
  const textCol = wide ? "lg:col-span-2" : "";
  const flip = project.layout === "wideFlip" ? "lg:order-2" : "";

  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: reduce ? 0 : (index % 2) * 0.08, ease: "easeOut" }}
      className={`${span} rounded-2xl border border-white/10 bg-[#14141F] p-6 sm:p-8`}
      aria-labelledby={`${project.slug}-title`}
    >
      <div className={inner}>
        <div className={`${shotCol} ${flip}`}>
          <Screenshot project={project} />
        </div>
        <div className={`${textCol} ${wide ? "mt-8 lg:mt-0" : ""}`}>
          <span className={`inline-block rounded-full border px-3 py-1 text-xs font-medium ${statusStyle[project.status]}`}>
            {project.statusLabel}
          </span>
          <h3 id={`${project.slug}-title`} className="mt-4 text-2xl font-semibold tracking-tight text-[#EDEAF5] sm:text-3xl">
            {project.title}
            {project.alias && <span className="ml-2 text-base font-normal text-[#EDEAF5]/55">({project.alias})</span>}
          </h3>
          <p className="mt-3 max-w-prose leading-relaxed text-[#EDEAF5]/75">{project.description}</p>

          <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.title} tech stack`}>
            {project.stack.map((tech) => (
              <li key={tech} className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-sm text-[#EDEAF5]/85">
                {tech}
              </li>
            ))}
          </ul>

          {project.note && <p className="mt-4 text-sm text-[#EDEAF5]/55">{project.note}</p>}

          {(project.liveUrl || project.repoUrl) && (
            <div className="mt-6 flex flex-wrap gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#7C5CFF] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#6B49F5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF8A3D]"
                >
                  Open live demo <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-4 py-2.5 text-sm font-medium text-[#EDEAF5] transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF8A3D]"
                >
                  <Github className="h-4 w-4" aria-hidden="true" /> View on GitHub
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function FeaturedProjects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="bg-[#0B0B12] px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 id="projects-heading" className="text-4xl font-semibold tracking-tight text-[#EDEAF5] sm:text-5xl">
          Featured projects
        </h2>
        <p className="mt-4 max-w-prose text-[#EDEAF5]/65">
          Four things I have built, each labelled as a prototype, a hackathon project or a deployed application.
        </p>
        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
