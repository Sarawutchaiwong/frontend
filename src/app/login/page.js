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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    console.log(username);

    if (data.token) {
      localStorage.setItem('token', data.token);
      Swal.fire({
        icon: 'success',
        title: '<h3>Login Successfuly!</h3>',
        showConfirmButton: false,
        timer: 2000
        }).then(function () {
        
        window.location.href = "/admin/users";
      });
    } else {
      Swal.fire({
        icon: 'warning',
        title: '<h3>Login Failed!</h3>',
        showConfirmButton: false,
        timer: 2000
        }).then(function () {
          router.push('/login');
      });
    }
  };

  return (
    <div className={styles['login-container']}>
      {/* Animated Background */}
      

      <div className="container">
        <div className="row justify-content-center align-items-center min-vh-100">
          <div className="col-md-6 col-lg-5">
            <div className={styles['login-card']}>
              {/* Header Section */}
              <div className={styles['login-header']}>
                
                <h1 className={styles['login-title']}>Sign in</h1>
              </div>

              {/* Form Section */}
              <form className={styles['login-form']} onSubmit={handleSubmit}>
                <div className={styles['form-group']}>
                  <div className={styles['input-wrapper']}>
                    <i className={`bi bi-person ${styles['input-icon']}`}></i>
                    <input
                      type="text"
                      className={`${styles['form-input']} ${errors.username ? styles.error : ''}`}
                      placeholder="Enter your username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  {errors.username && <div className={styles['error-message']}>{errors.username}</div>}
                </div>

                <div className={styles['form-group']}>
                  <div className={styles['input-wrapper']}>
                    <i className={`bi bi-lock ${styles['input-icon']}`}></i>
                    <input
                      type="password"
                      className={`${styles['form-input']} ${errors.password ? styles.error : ''}`}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
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

                <div className={styles['form-group']}>
                  <label className={styles['checkbox-wrapper']}>
                    <input type="checkbox" className={styles['checkbox-input']} />
                    <span className={styles['checkbox-custom']}></span>
                    <span className={styles['checkbox-label']}>Remember me</span>
                  </label>
                </div>

                <button type="submit" className={styles['login-button']}>
                  <i className="bi bi-box-arrow-in-right"></i>
                  Sign In
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
              <div className={styles['decorative-elements']}>
                <div className={styles['decoration-circle']}></div>
                <div className={styles['decoration-circle']}></div>
                <div className={styles['decoration-line']}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
