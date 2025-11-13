import React, { useState, useEffect, useRef } from "react";
import {
  Moon,
  Sun,
  Mail,
  Github,
  Facebook,
  MessageCircle,
  Linkedin,
  ExternalLink,
  Code,
  GraduationCap,
  User,
  Briefcase,
  Menu,
  X,
} from "lucide-react";

// Import images
import profileImage from "./assets/images/IMG_2472 2.jpeg";
import resImage from "./assets/images/Res.png";
import menuImage from "./assets/images/menu.png";
import bikeImage from "./assets/images/bike.png";
import itImage from "./assets/images/it.png";
import hrImage from "./assets/images/hr.png";
import agentcyImage from "./assets/images/agentcy.png";
import folioImage from "./assets/images/folio.png";

export default function Portfolio() {
  // State for theme management - ຈັດການ theme ສະຫວ່າງ/ມືດ
  const [darkMode, setDarkMode] = useState(false);

  // State for mobile menu - ເມນູມືຖື
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Refs for scrolling - ອ້າງອີງສຳລັບການເລື່ອນ
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Toggle dark mode - ສະຫຼັບ theme
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Smooth scroll to section - ເລື່ອນໄປຫາສ່ວນທີ່ເລືອກ
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  // Scroll animation observer - Animation ເມື່ອເລື່ອນເຫັນ
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeIn");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-in-section").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // ຂໍ້ມູນສ່ວນຕົວ - Personal Information
  const personalInfo = {
    name: "ທ້າວ ທະວີສັກ ພັນທະວົງ (ມິໂນ່)",
    title: "Front-end (Junoior) Developer",
    bio: "ສະບາຍດີ ຂ້ອຍແມ່ນ Front-end Developer ທີ່ມີຄວາມກະຕືລືລົ້ນໃນການສ້າງເວັບໄຊທ์ທີ່ສວຍງາມ ແລະ ໃຊ້ງານງ່າຍ. ມີປະສົບການໃນການໃຊ້ PHP, MySQL, React, JavaScript, Bootstrap, Tailwind CSS.",
    image: profileImage,
  };

  // ຂໍ້ມູນການສຶກສາ - Education Data
  const education1 = [
    {
      degree: "ປະລິນຍາຕີ - ພາກວິຊາເຕັກໂນໂລຊີຂໍ້ມູນຂ່າວສານ (IT)",
      school: "ມະຫາວິທະຍາໄລແຫ່ງຊາດ",
      year: "ຈົບການສຶກສາໃນປີ 2025",
      description:
        "ຮຽນວິຊາພື້ນຖານດ້ານ Programming, Web Development, Database, Graphics Design",
    },
  ];
  const education2 = [
    {
      degree: "ວິຊາຊີບຊັ້ນສູງ - ພາກວິຊາເຕັກໂນໂລຊີຂໍ້ມູນຂ່າວສານ (IT)",
      school: "ວິທະຍາໄລເຄວສ",
      year: "ຈົບການສຶກສາໃນປີ 2023",
      description:
        "ຮຽນວິຊາພື້ນຖານດ້ານ Programming, Web Development, Database, Graphics Design",
    },
  ];
  const education3 = [
    {
      degree: "ມັດທະຍົມສົມບູນສຶກສາ",
      school: "ມສ ຫງວຽນຢູ",
      year: "ຈົບການສຶກສາໃນປີ 2015",
      description:
        "ຮຽນວິຊາພື້ນຖານດ້ານ ການສຶກສາພື້ນຖານ, ພາສາອັງກິດ, ພາສາຫວຽດນາມ",
    },
  ];

  // ທັກສະ - Skills
  const skills = [
    { name: "HTML/CSS", level: "80%" },
    { name: "Tailwind CSS", level: "60%" },
    { name: "Bootstrap", level: "80%" },
    { name: "JavaScript", level: "50%" },
    { name: "React", level: "50%" },
    { name: "Git/GitHub", level: "75%" },
    { name: "Mysql", level: "60%" },
  ];

  // ໂປເຈັກ - Projects
  const projects = [
    {
      title: "Restaurant Management System",
      description:
        "ບົດໂຄງການຈົບຊັ້ນ ລະບົບຈັດການຮ້ານອາຫານດ້ວຍ PHP ແລະ MySQL (ເພື່ອການສຶກສາ)",
      image: resImage,
      tech: ["PHP", "Bootstrap", "MySQL"],
      link: "https://posmaeyai.42web.io/",
      github: ["https://github.com/MiNO-97/my-pos-restaurant/"],
    },
    {
      title: "Smart Menu Website",
      description:
        "ເວັບໄຊສຳລັບເມນູຮ້ານອາຫານ ທີ່ໃຊ້ Tailwind CSS ຕົກແຕ່ງ ແລະ PHP ໃນການຈັດການລະບົບຫຼັງບ້ານ (ເພື່ອການສຶກສາ)",
      image: menuImage,
      tech: ["PHP", "TailwindCSS", "MySQL"],
      admin: ["https://menumaeyai.rf.gd/login.php"],
      link: "https://menumaeyai.rf.gd",
    },
    {
      title: "POS Bikes electronic system",
      description:
        "ລະບົບການຈັດການຮ້ານຂາຍລົດຈັກໄຟຟ້າ ດ້ວຍພາສາ PHP, Bootstrap ແລະ MySQL (ເພື່ອການສຶກສາ)",
      image: bikeImage,
      tech: ["PHP", "Bootstrap", "MySQL"],
      link: "https://pos-bike.infinityfree.me/",
    },
    {
      title: "IT-Online system",
      description:
        "ລະບົບການຈັດການຂາຍອຸປະກອນໄອທີ ມີທັງໜ້າເວັບ ແລະ ການຈັດການຂໍ້ມູນຫຼັງບ້ານ ດ້ວຍພາສາ PHP, Bootstrap ແລະ MySQL (ເພື່ອການສຶກສາ)",
      image: itImage,
      tech: ["PHP", "Bootstrap", "MySQL"],
      github: ["https://github.com/MiNO-97/my-webside-admin-itonline/"],
    },
    {
      title: "Hr-Management system",
      description:
        "ລະບົບການຈັດການຂໍ້ມູນພະນັກງານ ແລະ ຈັດການເງິນເດືອນ ດ້ວຍພາສາ PHP, Bootstrap ແລະ MySQL (ເພື່ອການສຶກສາ)",
      image: hrImage,
      tech: ["PHP", "Bootstrap", "MySQL"],
      github: ["https://github.com/MiNO-97/Hr-Management/"],
    },
    {
      title: "Agentcy Web Front-end for learning",
      description: "ເວັບໄຊສຳລັບການຝຶກຂຽນ Front-end (ເພື່ອການສຶກສາ)",
      image: agentcyImage,
      tech: ["React", "TailwindCSS"],
      github: ["https://github.com/MiNO-97/learn-Front-end-AgencyWeb"],
    },
    {
      title: "Portfolio Web Front-end for learning",
      description: "ເວັບໄຊສຳລັບການຝຶກຂຽນ Front-end (ເພື່ອການສຶກສາ)",
      image: folioImage,
      tech: ["React", "TailwindCSS"],
      github: ["https://github.com/MiNO-97/my-portfolio"],
    },
  ];

  // ຂໍ້ມູນຕິດຕໍ່ - Contact Information
  const contacts = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "phanthavong310@gmail.com",
      link: "https://phanthavong310@gmail.com",
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "github.com/MiNO-97",
      link: "https://github.com/MiNO-97",
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      label: "Facebook",
      value: "facebook.com/Mino Thavisack",
      link: "https://facebook.com/Mino Thavisack",
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      label: "WhatsApp",
      value: "+856 20 98709779",
      link: "https://wa.me/8562098709779",
    },
  ];

  // Navigation items - ລາຍການເມນູ
  const navItems = [
    { label: "ແນະນຳຕົວ", ref: aboutRef, icon: <User className="w-4 h-4" /> },
    {
      label: "ການສຶກສາ",
      ref: educationRef,
      icon: <GraduationCap className="w-4 h-4" />,
    },
    { label: "ທັກສະ", ref: skillsRef, icon: <Code className="w-4 h-4" /> },
    {
      label: "ຜົນງານ",
      ref: projectsRef,
      icon: <Briefcase className="w-4 h-4" />,
    },
    { label: "ຕິດຕໍ່", ref: contactRef, icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
        }`}
    >
      {/* Navigation Bar - ແຖບເມນູ */}
      <nav
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${darkMode
          ? "bg-gray-800 shadow-lg shadow-gray-900/50"
          : "bg-white shadow-lg"
          }`}
      >
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Portfolio
            </h1>

            {/* Desktop Menu Items - ເມນູສຳລັບຈໍໃຫຍ່ */}
            <div className="hidden md:flex space-x-6">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.ref)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-blue-100 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            {/* Mobile Menu & Dark Mode Toggle - ເມນູມືຖື ແລະ ປຸ່ມສະຫຼັບ theme */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg transition-all duration-300 ${darkMode
                  ? "bg-gray-700 hover:bg-gray-600"
                  : "bg-gray-200 hover:bg-gray-300"
                  }`}
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>

              {/* Mobile Menu Button - ປຸ່ມເມນູມືຖື */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg bg-blue-600 text-white"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown - ເມນູມືຖືແບບເປີດລົງ */}
          {mobileMenuOpen && (
            <div
              className={`md:hidden mt-4 py-4 space-y-2 border-t ${darkMode ? "border-gray-700" : "border-gray-200"
                }`}
            >
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.ref)}
                  className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg transition-all duration-300 hover:bg-blue-100 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Main Content - ເນື້ອຫາຫຼັກ */}
      <main className="max-w-6xl mx-auto px-4 pt-12 pb-12">
        {/* About Section - ສ່ວນແນະນຳຕົວ */}
        <section
          ref={aboutRef}
          className="fade-in-section opacity-0 min-h-screen flex items-center py-12"
        >
          <div className="w-full">
            <div className="flex items-center gap-3 mb-8">
              <User className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold">ແນະນຳຕົວ</h2>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative group">
                <div
                  className={`absolute -inset-1 bg-linear-to-r from-blue-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300`}
                ></div>
                <img
                  src={personalInfo.image}
                  alt={personalInfo.name}
                  className="relative w-48 h-48 rounded-full object-cover border-4 border-white dark:border-gray-800"
                />
              </div>

              <div className="flex-1 text-center md:text-left">
                <h2 className="text-4xl font-bold mb-2 bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {personalInfo.name}
                </h2>
                <p className="text-xl text-blue-600 dark:text-blue-400 mb-4">
                  {personalInfo.title}
                </p>
                <p
                  className={`text-lg leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                >
                  {personalInfo.bio}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section - ສ່ວນການສຶກສາ */}
        <section
          ref={educationRef}
          className="fade-in-section opacity-0 min-h-screen flex items-center py-12"
        >
          <div className="w-full">
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold">ການສຶກສາ</h2>
            </div>

            <div className="space-y-6">
              {education1.map((edu, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 ${darkMode
                    ? "bg-gray-800 hover:bg-gray-750"
                    : "bg-white hover:shadow-xl"
                    }`}
                >
                  <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-lg font-semibold mb-2">{edu.school}</p>
                  <p
                    className={`text-sm mb-3 ${darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                  >
                    {edu.year}
                  </p>
                  <p className={darkMode ? "text-gray-300" : "text-gray-700"}>
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="space-y-6 mt-4">
              {education2.map((edu, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 ${darkMode
                    ? "bg-gray-800 hover:bg-gray-750"
                    : "bg-white hover:shadow-xl"
                    }`}
                >
                  <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-lg font-semibold mb-2">{edu.school}</p>
                  <p
                    className={`text-sm mb-3 ${darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                  >
                    {edu.year}
                  </p>
                  <p className={darkMode ? "text-gray-300" : "text-gray-700"}>
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="space-y-6 mt-4">
              {education3.map((edu, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 ${darkMode
                    ? "bg-gray-800 hover:bg-gray-750"
                    : "bg-white hover:shadow-xl"
                    }`}
                >
                  <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-lg font-semibold mb-2">{edu.school}</p>
                  <p
                    className={`text-sm mb-3 ${darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                  >
                    {edu.year}
                  </p>
                  <p className={darkMode ? "text-gray-300" : "text-gray-700"}>
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section - ສ່ວນທັກສະ */}
        <section
          ref={skillsRef}
          className="fade-in-section opacity-0 min-h-screen flex items-center py-12"
        >
          <div className="w-full">
            <div className="flex items-center gap-3 mb-8">
              <Code className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold">ທັກສະ</h2>
            </div>

            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">{skill.name}</span>
                    <span className="text-blue-600 dark:text-blue-400">
                      {skill.level}
                    </span>
                  </div>
                  <div
                    className={`h-3 rounded-full overflow-hidden ${darkMode ? "bg-gray-700" : "bg-gray-200"
                      }`}
                  >
                    <div
                      className="h-full bg-linear-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: skill.level }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section - ສ່ວນຜົນງານ */}
        <section
          ref={projectsRef}
          className="fade-in-section opacity-0 min-h-screen flex items-center py-12"
        >
          <div className="w-full">
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold">ຜົນງານໂປເຈັກ</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:-translate-y-2 ${darkMode ? "bg-gray-800" : "bg-white shadow-lg"
                    }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p
                      className={`mb-4 ${darkMode ? "text-gray-300" : "text-gray-700"
                        }`}
                    >
                      {project.description}
                    </p>

                    {/* Show github link if available */}
                    {project.github && project.github.length > 0 && (
                      <a
                        href={project.github[0]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-purple-600 hover:text-blue-600 transition-colors duration-300 py-2 text-sm font-semibold"
                        style={{ marginTop: 4 }}
                      >
                        ເຂົ້າເບິ່ງ Code ທີ່ Github{" "}
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-sm rounded-full bg-blue-600 text-white"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-purple-600 transition-colors duration-300 mb-2"
                      >
                        ເບິ່ງໂປເຈັກ <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {/* Show admin/backend link if available */}
                    {project.admin && project.admin.length > 0 && (
                      <a
                        href={project.admin[0]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-4 inline-flex items-center gap-2 text-purple-600 hover:text-blue-600 transition-colors duration-300 border border-purple-200 dark:border-purple-700 rounded px-3 py-1 text-sm font-semibold"
                        style={{ marginTop: 4 }}
                      >
                        ເບິ່ງລະບົບ (Admin) <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section - ສ່ວນຕິດຕໍ່ */}
        <section
          ref={contactRef}
          className="fade-in-section opacity-0 min-h-screen flex items-center py-12"
        >
          <div className="w-full">
            <div className="flex items-center gap-3 mb-8">
              <Mail className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold">ຂໍ້ມູນຕິດຕໍ່ຂອງຂ້ອຍ</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {contacts.map((contact, index) => (
                <a
                  key={index}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-6 rounded-xl transition-all duration-300 hover:scale-105 ${darkMode
                    ? "bg-gray-800 hover:bg-gray-750"
                    : "bg-white hover:shadow-xl"
                    }`}
                >
                  <div className="p-3 rounded-lg bg-linear-to-r from-blue-600 to-purple-600 text-white">
                    {contact.icon}
                  </div>
                  <div>
                    <p className="font-semibold">{contact.label}</p>
                    <p
                      className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                    >
                      {contact.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer - ສ່ວນລຸ່ມສຸດ */}
      <footer
        className={`text-center py-6 ${darkMode ? "bg-gray-800" : "bg-white"}`}
      >
        <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
          © 2025 {personalInfo.name}. All rights reserved.
        </p>
      </footer>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
