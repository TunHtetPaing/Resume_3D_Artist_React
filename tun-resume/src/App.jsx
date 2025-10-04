import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  Linkedin,
  Briefcase,
  GraduationCap,
  Code,
  Zap,
  Globe,
} from "lucide-react";

// Resume Data
const resumeData = {
  name: "TUN HTET PAING",
  title: "3D Artist & VR Developer",
  summary:
    "A passionate 3D Artist with more than 3 years of experience. Expertise in 3D Modeling, Texturing, Animation & VFX. With hands-on experience in the 3D production pipeline, advancing to VR and Web development.",
  contact: {
    mobile: "+66 061 747 0907",
    email: "dv.motiongraphics@gmail.com",
    linkedinProfile: "Tun Htet Paing",
    linkedinUrl: "https://www.linkedin.com/in/tunhtetpaing",
    portfolioUrl: "https://sites.google.com/view/tun3dworks",
  },
  education: [
    {
      degree: "Bachelor's Degree in Electrical Engineering",
      year: "2023",
    },
  ],
  skills: [
    { category: "3D Modeling" },
    { category: "Texturing" },
    { category: "Rigging" },
    { category: "3D Animation" },
    { category: "VFX" },
    { category: "Virtual Reality" },
  ],
  tools: [
    "Blender",
    "Substance Painter",
    "Maya",
    "Zbrush",
    "Unity",
    "Unreal Engine",
  ],
  experience: [
    {
      year: "2025",
      title: "Motion Designer",
      company: "We Are North Studio",
      location: "Remote",
      description:
        "Created motion patterns for product commercial animations. Carried out experiments for shaders, geometry nodes, and toon shader to get visually appealing shots.",
    },
    {
      year: "2024 – 2025",
      title: "VR Developer",
      company: "Rebond, Inc.",
      location: "Remote",
      description:
        "Developed training VR applications for workers and engineers using Unity VR tools. Focused on coding and interactions for VR development, along with 3D scene setup and animations.",
    },
    {
      year: "2024",
      title: "3D Animator",
      company: "Game Cast Network",
      location: "Myanmar",
      description:
        "Main task was 3D Character Animation and Motion Graphics for broadcasting. Worked under the creative department in collaboration with 2D designers and video editors.",
    },
    {
      year: "2024",
      title: "VFX Artist",
      company: "Hub Solutions",
      location: "Freelance",
      description:
        "Created VFX content and 3D animations for product commercial advertising.",
    },
    {
      year: "2023 – 2024",
      title: "3D Graphic Artist",
      company: "Myo Thein Electronics",
      location: "Yangon, Myanmar.",
      description:
        "Worked under the e-commerce department on 3D modeling & animation. Later, advanced to 3D product visualization and VFX advertisings.",
    },
    {
      year: "2021 – 2024",
      title: "3D Artist",
      company: "Freelance",
      location: "Commissioned Projects",
      description:
        "Worked on commissioned NFT fanarts, focusing on 3D modeling & animation. Spent most of the time on animation and editing to get the desired result.",
    },
  ],
};

// Section Header
const SectionHeader = ({ icon: Icon, title }) => (
  <h2 className="section-header">
    <Icon className="icon" size={16} />
    {title}
  </h2>
);

// Contact Link
const ContactLink = ({ icon: Icon, label, value, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="contact-link"
  >
    <Icon className="icon-small" size={10} />
    <span className="value">{value}</span>
  </a>
);

// Experience Item
const ExperienceItem = ({ year, title, company, location, description }) => (
  <div className="experience-item">
    <div className="experience-header">
      <h3>{title}</h3>
      <span className="year">{year}</span>
    </div>
    <p className="company">
      <span className="company-name">{company}</span> <span>({location})</span>
    </p>
    <p className="description">{description}</p>
  </div>
);

const App = () => {
  // useEffect and useState are not strictly needed for this simple component,
  // but kept for compatibility with the original structure.

  return (
    <div className="app">
      <div className="container">
        {/* HEADER */}
        <header className="header">
          <div className="header-content">
            <div>
              <h1>{resumeData.name}</h1>
              <p>{resumeData.title}</p>
            </div>
            <div className="contact">
              {/* Simplified contact links for a cleaner look */}
              <ContactLink
                icon={Mail}
                label="Email"
                value={resumeData.contact.email}
                href={`mailto:${resumeData.contact.email}`}
              />
              <ContactLink
                icon={Phone}
                label="Mobile"
                value={resumeData.contact.mobile}
                href={`tel:${resumeData.contact.mobile}`}
              />
              <ContactLink
                icon={Linkedin}
                label="LinkedIn"
                value={resumeData.contact.linkedinProfile}
                href={resumeData.contact.linkedinUrl}
              />
            </div>
          </div>
        </header>

        {/* MAIN GRID - Sidebar (1/3) and Content (2/3) */}
        <div className="main-grid">
          {/* LEFT COLUMN - Skills and Education (Less bulky items) */}
          <div className="sidebar">
            {/* Skills */}
            <section className="mb-4">
              <SectionHeader icon={Code} title="Core Skills" />
              <div className="skills">
                {resumeData.skills.map((skill, index) => (
                  <span key={index} className="skill-badge">
                    {skill.category}
                  </span>
                ))}
              </div>
            </section>

            {/* Education */}
            <section className="mb-4">
              <SectionHeader icon={GraduationCap} title="Education" />
              {resumeData.education.map((edu, index) => (
                <div key={index} className="education">
                  <h3>{edu.degree}</h3>
                  <p>{edu.year}</p>
                </div>
              ))}
            </section>

            {/* Portfolio Button (placed in sidebar for visibility) */}
            <a
              href={resumeData.contact.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-btn"
            >
              <Globe className="icon-small" size={10} /> Portfolio
            </a>
          </div>

          {/* RIGHT COLUMN - Summary, Tools, and Experience (More bulky items) */}
          <div className="content">
            {/* Summary - Moved to main content area for more space */}
            <section className="mb-6">
              <SectionHeader icon={Briefcase} title="Profile Summary" />
              <p className="summary">{resumeData.summary}</p>
            </section>

            {/* Tools - Moved to main content area for more space */}
            <section className="mb-6">
              <SectionHeader icon={Zap} title="Key Tools / Software" />
              <ul className="tools grid grid-cols-2 gap-x-6">
                {resumeData.tools.map((tool, index) => (
                  <li key={index}>{tool}</li>
                ))}
              </ul>
            </section>

            {/* Experience */}
            <SectionHeader icon={Briefcase} title="Professional Experience" />
            <div className="timeline">
              {resumeData.experience.map((job, index) => (
                <ExperienceItem key={index} {...job} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
