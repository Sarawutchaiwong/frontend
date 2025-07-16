
import Image from "next/image";

export default function About() {
  return (
    <div className="container my-5">
      <div className="row text-center mb-5">
        <div className="col">
          <h1 className="display-4">About RainCane</h1>
          <p className="lead">
            We are Collage that individuals dedicated to creating innovative solutions.
          </p>
        </div>
      </div>

      <div className="row mb-3 align-items-center bg-light py-5 border shadow-sm">
        <div className="col-md-6">
          <h2>Our Mission</h2>
          <p>
            Our mission is to deliver high-quality products that exceed customer expectations. We strive for excellence in everything we do from development to customer support. We believe in the power of technology to transform industries and improve lives.
          </p>
        </div>
        <div className="col-md-6 p-4">
          <Image src="/images/heavy-rain.png" alt="Our Mission" className="img-fluid rounded" width={400} height={300} />
        </div>
      </div>

      <div className="row mb-5 align-items-center bg-light py-5 border shadow-sm">
        <div className="col-md-6 order-md-2">
          <h2>Our Vision</h2>
          <p>
            Our vision is to be a global leader in our industry, known for our commitment to innovation, quality, and customer satisfaction. We aim to create a better future through technology and teamwork.
          </p>
        </div>
        <div className="col-md-6 order-md-1">
          <Image src="/images/roblox.png" alt="Our Vision" className="img-fluid rounded" width={500} height={300} />
        </div>
      </div>

      <div className="row text-center">
        <div className="col">
          <h2>Meet the Team</h2>
          <p className="lead">The amazing people behind our success.</p>
        </div>
      </div>

      <div className="row text-center">
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <Image src="/images/roblox2.png" alt="Team Member 1" className="img-fluid rounded-circle mb-3" width={150} height={150} />
              <h5 className="card-title">John Doe</h5>
              <p className="card-text">Lead Developer</p>
              
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <Image src="/images/roblox3.png" alt="Team Member 2" className="img-fluid rounded-circle mb-3" width={150} height={150} />
              <h5 className="card-title">Jane Smith</h5>
              <p className="card-text">Lead Designer</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
                <Image src="/images/roblox4.png" alt="Team Member 3" className="img-fluid rounded-circle mb-3" width={150} height={150} />
              <h5 className="card-title">Peter Jones</h5>
              <p className="card-text">Project Manager</p>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
