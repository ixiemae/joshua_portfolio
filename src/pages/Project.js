import '../css/Project.css';
import healthSystemImg from '../images/website.jpg';
import healthAppImg from '../images/app.jpg';
import vapeShopImg from '../images/vapeshop.png';
import issangShopImg from '../images/issang.png';
import attendanceImg from '../images/attendance.png';
import donutshopImg from '../images/donutshop.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Health Monitoring System',
      description: 'A comprehensive system that tracks and monitors patient health metrics in real-time, providing alerts for critical values and generating reports for healthcare providers.',
      technologies: ['HTML', 'PHP', 'JavaScript', 'MySQL', 'CSS'],
      image: healthSystemImg
    },
    {
      id: 2,
      title: 'Health Monitoring App',
      description: 'Mobile application for residents to track their health metrics, with features for medication reminders and emergency contact integration.',
      technologies: ['PHP', 'JavaScript', 'XML', 'MySQL'],
      image: healthAppImg
    },
    {
      id: 3,
      title: 'Vape Shop Website',
      description: 'E-commerce platform for vape products with inventory management, user reviews, and secure payment processing.',
      technologies: ['HTML', 'CSS'],
      image: vapeShopImg
    },
    {
      id: 4,
      title: 'Issang Macchiatos Website',
      description: 'A cozy and inviting online presence for Issang Macchiato — showcasing handcrafted coffee, specialty drinks, and a passion for café culture. Browse the menu, find store locations, and enjoy a taste of comfort and quality.',
      technologies: ['HTML', 'CSS'],
      image: issangShopImg
    },
    {
      id: 5,
      title: 'Attendance Monitoring System',
      description: 'A streamlined digital solution for tracking student attendance. Designed for accuracy and ease, it allows teachers and administrators to monitor presence, absences, and tardiness in real time.',
      technologies: ['PHP', 'MySQL', 'HTML', 'CSS'],
      image: attendanceImg
    },
    {
      id: 6,
      title: 'Donut Shop Website',
      description: 'An irresistible hub for donut lovers! Explore fresh flavors, browse the menu, and place orders for delicious handcrafted donuts—all in one sweet, easy-to-navigate site.',
      technologies: ['PHP', 'MySQL', 'HTML', 'CSS'],
      image: donutshopImg
    },
  ];

  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="technologies">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;