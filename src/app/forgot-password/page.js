import Link from 'next/link';

export default function ForgotPassword() {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm" style={{ borderRadius: '1rem' }}>
            <div className="card-body p-4">
              <h1 className="card-title text-center mb-4 display-4">Forgot Password</h1>
              <form>
                <div className="mb-3">
                  <label htmlFor="inputEmail" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" required />
                  <div id="emailHelp" className="form-text">We&apos;ll send a password reset link to this email.</div>
                </div>
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary">Reset Password</button>
                </div>
              </form>
              <p className="text-center mt-3">
                Remember your password? <Link href="/login">Login here</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}