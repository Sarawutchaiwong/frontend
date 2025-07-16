import Link from 'next/link';

export default function Login() {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm" style={{ borderRadius: '1rem' }}>
            <div className="card-body p-4">
              <h1 className="card-title text-center mb-4 display-4">Login</h1>
              <form>
                <div className="mb-3">
                  <label htmlFor="inputEmail3" className="form-label">Email</label>
                  <input type="email" className="form-control" id="inputEmail3" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="inputPassword3" className="form-label">Password</label>
                  <input type="password" className="form-control" id="inputPassword3" required />
                  <div className="text-end mt-1">
                    <Link href="/forgot-password" className="text-muted text-decoration-none">Forgot password?</Link>
                  </div>
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="gridCheck" />
                  <label className="form-check-label" htmlFor="gridCheck">Remember me</label>
                </div>
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary">Sign in</button>
                </div>
              </form>
              <p className="text-center mt-3">
                Don&apos;t have an account? <Link href="/register">Register here</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}