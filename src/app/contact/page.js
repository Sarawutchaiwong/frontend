export default function Contact() {
  return (
    <div className="container py-5">
      <div className="row text-center pb-5">
        <div className="col-lg-8 mx-auto">
          <h1 className="display-4">Contact Us</h1>
          <p className="text-muted">
            Wed love to hear from you! Please fill out the form below to get in touch.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="5"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
      <div className="row text-center pt-5">
        <div className="col-lg-8 mx-auto">
          <h5 className="text-muted">You can also reach us at:</h5>
          <p className="text-muted">Email: contact@example.com</p>
          <p className="text-muted">Phone: (123) 456-7890</p>
        </div>
      </div>
    </div>
  );
}