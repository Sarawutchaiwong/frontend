import Image from 'next/image';
import styles from './about.module.css';

const timelineEvents = [
  {
    year: "2020",
    title: "The Spark",
    description: "RainCane was born from a shared vision to revolutionize the weather industry. We started with a small team and a big idea.",
  },
  {
    year: "2021",
    title: "Growth & Innovation",
    description: "We launched our first product and received overwhelming support. Our team expanded and we continued to innovate.",
  },
  {
    year: "2022",
    title: "Looking Ahead",
    description: "We are excited about the future and the opportunities it holds. We are committed to pushing the boundaries of what's possible.",
  },
];

const teamMembers = [
  {
    imgSrc: "/images/roblox2.png",
    name: "John Doe",
    role: "Founder & CEO",
  },
  {
    imgSrc: "/images/roblox3.png",
    name: "Jane Smith",
    role: "Lead Designer",
  },
  {
    imgSrc: "/images/roblox4.png",
    name: "Peter Jones",
    role: "Lead Engineer",
  },
];

export default function About() {
  return (
    <div className="container text-white py-5">
      {/* Hero Section */}
      <div className={`text-center p-5 rounded-3 ${styles.heroSection}`}>
        <h1 className="display-4 fw-bold">About RainCane</h1>
        <p className="lead">
          We are a team of passionate individuals dedicated to creating innovative solutions that make a difference.
        </p>
      </div>

      {/* Timeline Section */}
      <div className="py-5">
        <h2 className="text-center display-5 fw-bold mb-5">Our Journey</h2>
        <div className={styles.timeline}>
          {timelineEvents.map((event, index) => (
            <div key={index} className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}>
              <div className={styles.timelineContent}>
                <h3 className="h5 fw-bold">{event.year} - {event.title}</h3>
                <p>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="py-5">
        <h2 className="text-center display-5 fw-bold mb-5">Meet Our Team</h2>
        <div className="row g-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-md-4">
              <div className={`card h-100 text-center ${styles.teamCard}`}>
                <div className="card-body">
                  <Image
                    src={member.imgSrc}
                    alt={member.name}
                    width={150}
                    height={150}
                    className="rounded-circle mb-3"
                  />
                  <h4 className="card-title h5 fw-bold">{member.name}</h4>
                  <p className="card-text">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}