import React from "react";

// Resume Data
const resumeData = {
  name: "TUN HTET PAING",
  title: "3D Artist & VR Developer",
  summary:
    "A passionate 3D Artist with more than 3 years of experience. Expertise in 3D Modeling, Texturing, Animation & VFX. Hands-on experience in the 3D production pipeline, advancing to VR and Web development.",
  contact: {
    mobile: "+66 061 747 0907",
    email: "dv.motiongraphics@gmail.com",
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
    "3D Modeling",
    "Texturing",
    "Rigging",
    "3D Animation",
    "VFX",
    "Virtual Reality",
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
        "Created motion patterns for product commercial animations. Experimented with shaders, geometry nodes, and toon shaders to get visually appealing shots.",
    },
    {
      year: "2024 – 2025",
      title: "VR Developer",
      company: "Rebond, Inc.",
      location: "Remote",
      description:
        "Developed training VR applications for workers and engineers using Unity VR tools. Focused on coding and interactions, 3D scene setup, and animations.",
    },
    {
      year: "2024",
      title: "3D Animator",
      company: "Game Cast Network",
      location: "Myanmar",
      description:
        "Performed 3D Character Animation and Motion Graphics for broadcasting, collaborating with 2D designers and video editors.",
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
      location: "Yangon, Myanmar",
      description:
        "Worked on 3D modeling & animation for e-commerce, product visualization, and VFX advertising.",
    },
    {
      year: "2021 – 2024",
      title: "3D Artist",
      company: "Freelance",
      location: "Commissioned Projects",
      description:
        "Worked on commissioned NFT fanarts focusing on 3D modeling & animation.",
    },
  ],
};

const App = () => {
  return (
    <div
      style={{
        maxWidth: 800,
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
        lineHeight: 1.5,
        padding: "20px",
      }}
    >
      {/* Header */}
      <header>
        <h1>{resumeData.name}</h1>
        <p>{resumeData.title}</p>

        {/* ATS-friendly text links */}
        <p>Email: {resumeData.contact.email}</p>
        <p>Phone: {resumeData.contact.mobile}</p>
        <p>LinkedIn: {resumeData.contact.linkedinUrl}</p>
        <p>Portfolio: {resumeData.contact.portfolioUrl}</p>

        {/* Human-friendly clickable links */}
        <p>
          <a
            href={resumeData.contact.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View LinkedIn Profile
          </a>
        </p>
        <p>
          <a
            href={resumeData.contact.portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Portfolio
          </a>
        </p>
      </header>

      {/* Profile Summary */}
      <section>
        <h2>Profile Summary</h2>
        <p>{resumeData.summary}</p>
      </section>

      {/* Core Skills */}
      <section>
        <h2>Core Skills</h2>
        <ul>
          {resumeData.skills.map((skill, idx) => (
            <li key={idx}>{skill}</li>
          ))}
        </ul>
      </section>

      {/* Key Tools */}
      <section>
        <h2>Key Tools</h2>
        <ul>
          {resumeData.tools.map((tool, idx) => (
            <li key={idx}>{tool}</li>
          ))}
        </ul>
      </section>

      {/* Education */}
      <section>
        <h2>Education</h2>
        {resumeData.education.map((edu, idx) => (
          <div key={idx}>
            <p>
              {edu.degree} ({edu.year})
            </p>
          </div>
        ))}
      </section>

      {/* Professional Experience */}
      <section>
        <h2>Professional Experience</h2>
        {resumeData.experience.map((job, idx) => (
          <div key={idx} style={{ marginBottom: "15px" }}>
            <p>
              <strong>{job.title}</strong> — {job.company} ({job.location}) |{" "}
              {job.year}
            </p>
            <p>{job.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default App;
