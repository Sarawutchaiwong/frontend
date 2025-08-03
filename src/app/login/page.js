'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!password) newErrors.password = 'Password is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    // Mock login logic
    Swal.fire({
        icon: 'success',
        title: 'Login Successful!',
        showConfirmButton: false,
        timer: 1500
    });
    router.push('/');
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm" style={{ borderRadius: '1rem' }}>
            <div className="card-body p-4">
              <h1 className="card-title text-center mb-4 display-4">Login</h1>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="inputEmail3" className="form-label">Email</label>
                  <input
                    type="email"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    id="inputEmail3"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="inputPassword3" className="form-label">Password</label>
                  <input
                    type="password"
                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                    id="inputPassword3"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {errors.password && <div className="invalid-feedback">{errors.password}</div>}
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