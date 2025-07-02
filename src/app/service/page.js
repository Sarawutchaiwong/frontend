import Image from 'next/image';
import Link from 'next/link';

export default function Service() {
  return (
    <div className="container py-5">
      <div className="row text-center pb-5">
        <div className="col-lg-8 mx-auto">
          <h1 className="display-4">Our Services</h1>
          <p className="text-muted">
            We offer a variety of services to meet your needs. Explore the options below to learn more.
          </p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-3 mb-4">
          <div className="card shadow-sm h-100 rounded-4">
            <Image className="card-img-top" src="/images/roblox.png" alt="Happy Face" width={200} height={200} />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title text-primary">Happy Face</h5>
              <p className="card-text">A service that brings a smile to your face.</p>
              <Link href="/" className="btn btn-primary btn-sm mt-auto">Learn More</Link>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card shadow-sm h-100 rounded-4">
            <Image className="card-img-top" src="/images/roblox2.png" alt="Exciting Face" width={200} height={200} />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title text-success">Exciting Face</h5>
              <p className="card-text">A service that adds a thrill to your day.</p>
              <Link href="/service" className="btn btn-success btn-sm mt-auto">Learn More</Link>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card shadow-sm h-100 rounded-4">
            <Image className="card-img-top" src="/images/roblox3.png" alt="Handsome Face" width={200} height={200} />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title text-warning">Handsome Face</h5>
              <p className="card-text">A service that boosts your confidence.</p>
              <Link href="/about" className="btn btn-warning btn-sm text-white mt-auto">Learn More</Link>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card shadow-sm h-100 rounded-4">
            <Image className="card-img-top" src="/images/roblox4.png" alt="Crazy Face" width={200} height={200} />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title text-danger">Crazy Face</h5>
              <p className="card-text">A service for when youre feeling wild.</p>
              <Link href="/contact" className="btn btn-danger btn-sm mt-auto">Learn More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}