import '../css/About.css';
import myImage from '../josh.jpg';

const About = () => {
  return (
     <div className="about-container">
            <h1 className="about-title">About Me!</h1>
            <div className="about-content">
                <img src={myImage} alt="My portrait" className="about-image" />
                <div className="about-text">
                    <p>Hello! My name is Joshua Manuzon. I am 19 years old and currently a student at Phinma Araullo University pursuing a Bachelor of Science in Information Technology, Major in System Development.</p>
                    
                    <h2>Education</h2>
                    <p>Bachelor of Science in Information Technology<br />
                    Phinma Araullo University<br />
                    2023 - Present</p>

                    <h2>Skills</h2>
                    <ul>
                        <li>Project Planning & Scheduling</li>
                        <li>Team & Communication</li>
                        <li>Analytical & Reporting Skills</li>
                        <li>Problem Solving</li>
                        <li>Time Management</li>
                    </ul>
                </div>
            </div>
        </div>
  );
};

export default About;