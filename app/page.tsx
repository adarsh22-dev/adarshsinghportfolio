import { AiInnovation } from "@/components/main/ai-innovation";
import { Awards } from "@/components/main/awards";
import { CaseStudies } from "@/components/main/case-studies";
import { Certifications } from "@/components/main/certifications";
import { CommunityLeadership } from "@/components/main/community-leadership";
import { Contact } from "@/components/main/contact";
import { CoreExpertise } from "@/components/main/core-expertise";
import { Education } from "@/components/main/education";
import { ExecutiveSummary } from "@/components/main/executive-summary";
import { Experience } from "@/components/main/experience";
import { Hero } from "@/components/main/hero";
import { ImpactMetrics } from "@/components/main/impact-metrics";
import { OpenSource } from "@/components/main/open-source";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";
import { SkillsMatrix } from "@/components/main/skills-matrix";
import { TechArchitecture } from "@/components/main/tech-architecture";
import { Testimonials } from "@/components/main/testimonials";
import { ThoughtLeadership } from "@/components/main/thought-leadership";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-10 md:gap-20">
        <Hero />
        <ExecutiveSummary />
        <ImpactMetrics />
        <CoreExpertise />
        <Experience />
        <CaseStudies />
        <AiInnovation />
        <TechArchitecture />
        <Skills />
        <SkillsMatrix />
        <Certifications />
        <OpenSource />
        <CommunityLeadership />
        <ThoughtLeadership />
        <Testimonials />
        <Awards />
        <Education />
        <Contact />
        <Projects />
      </div>
    </main>
  );
}
