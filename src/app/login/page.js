'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link'
import Swal from 'sweetalert2'
import styles from './login.module.css'

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!username.trim()) {
      tempErrors.username = 'Username is required';
      isValid = false;
    } else if (username.length < 3) {
      tempErrors.username = 'Username must be at least 3 characters';
      isValid = false;
    }

    if (!password) {
      tempErrors.password = 'Password is required';
      isValid = false;
    } else if (password.length < 4) {
      tempErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (data.token) {
        localStorage.setItem('token', data.token);
        Swal.fire({
          icon: 'success',
          title: '<h3>Login Successfully!</h3>',
          showConfirmButton: false,
          timer: 2000
        }).then(() => {
          window.location.href = "/admin/users";
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: '<h3>Invalid Credentials</h3>',
          text: data.message || 'Please check your username and password',
          showConfirmButton: true
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: '<h3>Login Failed</h3>',
        text: 'An error occurred during login',
        showConfirmButton: true
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e, setter) => {
    const { name, value } = e.target;
    setter(value);
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <div className={styles['login-container']}>
      <div className="container">
        <div className="row justify-content-center align-items-center min-vh-100">
          <div className="col-md-6 col-lg-5">
            <div className={styles['login-card']}>
              <div className={styles['login-header']}>
                <h1 className={styles['login-title']}>Login</h1>
              </div>

              <form className={styles['login-form']} onSubmit={handleSubmit} noValidate>
                <div className={styles['form-group']}>
                  <div className={styles['input-wrapper']}>
                    <i className={`bi bi-person ${styles['input-icon']}`}></i>
                    <input
                      type="text"
                      name="username"
                      className={`${styles['form-input']} ${errors.username ? styles.error : ''}`}
                      placeholder="Enter your username"
                      value={username}
                      onChange={(e) => handleInputChange(e, setUsername)}
                      disabled={isSubmitting}
                    />
                  </div>
                  {errors.username && <div className={styles['error-message']}>{errors.username}</div>}
                </div>

                <div className={styles['form-group']}>
                  <div className={styles['input-wrapper']}>
                    <i className={`bi bi-lock ${styles['input-icon']}`}></i>
                    <input
                      type="password"
                      name="password"
                      className={`${styles['form-input']} ${errors.password ? styles.error : ''}`}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => handleInputChange(e, setPassword)}
                      disabled={isSubmitting}
                    />
                  </div>
                  {errors.password && <div className={styles['error-message']}>{errors.password}</div>}
                  <div className={styles['forgot-password']}>
                    <Link href="/forgot-password" className={styles['forgot-link']}>
                      <i className="bi bi-question-circle"></i>
                      Forgot password?
                    </Link>
                  </div>
                </div>

                <button 
                  type="submit" 
                  className={styles['login-button']}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <i className="bi bi-hourglass-split"></i>
                      Signing In...
                    </>
                  ) : (
                    <>
                      <i className="bi bi-box-arrow-in-right"></i>
                      Sign In
                    </>
                  )}
                </button>
              </form>

              {/* Footer Section */}
              <div className={styles['login-footer']}>
                <p className={styles['register-text']}>
                  Dont have an account? 
                  <Link href="/register" className={styles['register-link']}>
                    <i className="bi bi-person-plus"></i>
                    Register here
                  </Link>
                </p>
              </div>

              {/* Decorative Elements */}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
