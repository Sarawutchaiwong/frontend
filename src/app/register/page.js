'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import styles from './register.module.css';

export default function Register() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'กรุณากรอกชื่อจริง';
    if (!formData.lastName) newErrors.lastName = 'กรุณากรอกนามสกุล';
    if (!formData.username) newErrors.username = 'กรุณากรอกชื่อเล่น';
    if (!formData.password) {
      newErrors.password = 'กรุณากรอกรหัสผ่าน';
    } else if (formData.password.length < 6) {
      newErrors.password = 'รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร';
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/.test(formData.password)) {
      newErrors.password = 'รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร, มีตัวพิมพ์ใหญ่อย่างน้อย 1 ตัว, ตัวพิมพ์เล็ก 1 ตัว และตัวเลข 1 ตัว';
    }
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'รหัสผ่านไม่ตรงกัน';

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          fullName: `${formData.firstName} ${formData.lastName}`,
          firstName: formData.firstName,
          lastName: formData.lastName,
          username: formData.username,
          password: formData.password,
        }),
      });

      const result = await res.json();
      console.log(result); // for debugging

      if (res.ok) {
        Swal.fire({
          icon: 'success',
          title: '<h3>บันทึกข้อมูลเรียบร้อยแล้ว</h3>',
          showConfirmButton: false,
          timer: 2000,
        }).then(() => {
          router.push('/login');
        });
      } else {
        Swal.fire({
          title: 'เกิดข้อผิดพลาด!',
          text: result.message || 'เกิดข้อผิดพลาด!',
          icon: 'error',
          confirmButtonText: 'ตกลง',
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'ข้อผิดพลาดเครือข่าย',
        text: 'ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์ได้',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles['register-container']}>
      {/* Animated Background */}
      <div className={styles['animated-bg']}>
        <div className={styles['floating-shape']}></div>
        <div className={styles['floating-shape']}></div>
        <div className={styles['floating-shape']}></div>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className={styles['register-card']}>
              {/* Header Section */}
              <div className={styles['register-header']}>
              
                <h1 className={styles['register-title']}>สมัครสมาชิก</h1>
              </div>

              <form onSubmit={handleSubmit}>
                {/* Account Security Section */}
                <div className={styles['form-section']}>
                  <h3 className={styles['section-title']}>
                    <i className="bi bi-shield-lock"></i>
                    ข้อมูลส่วนตัว
                  </h3>
                  
                  <div className="row">
                    <div className="col-md-6">
                      <div className={styles['form-group']}>
                        <label htmlFor="firstname" className={styles['form-label']}>ชื่อจริง</label>
                        <input
                          type="text"
                          className={`${styles['form-control']} ${errors.firstName ? styles['is-invalid'] : ''}`}
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          id="firstname"
                        />
                        {errors.firstName && <div className={styles['invalid-feedback']}>{errors.firstName}</div>}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className={styles['form-group']}>
                        <label htmlFor="lastname" className={styles['form-label']}>นามสกุล</label>
                        <input
                          type="text"
                          className={`${styles['form-control']} ${errors.lastName ? styles['is-invalid'] : ''}`}
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          id="lastname"
                        />
                        {errors.lastName && <div className={styles['invalid-feedback']}>{errors.lastName}</div>}
                      </div>
                    </div>
                  <div className="col-md-12">
                      <div className={styles['form-group']}>
                        <label htmlFor="nickname" className={styles['form-label']}>ชื่อเล่น</label>
                        <input
                          type="text"
                          className={`${styles['form-control']} ${errors.username ? styles['is-invalid'] : ''}`}
                          name="username"
                          value={formData.username}
                          onChange={handleChange}
                          id="nickname"
                        />
                        {errors.username && <div className={styles['invalid-feedback']}>{errors.username}</div>}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className={styles['form-group']}>
                        <label htmlFor="inputPassword" className={styles['form-label']}>รหัสผ่าน</label>
                        <div className="input-group">
                          <input
                            type={showPassword ? 'text' : 'password'}
                            className={`${styles['form-control']} ${errors.password ? styles['is-invalid'] : ''}`}
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            id="inputPassword"
                          />
                          <button
                            type="button"
                            className="btn"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                          </button>
                        </div>
                        {errors.password && <div className={styles['invalid-feedback']}>{errors.password}</div>}
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className={styles['form-group']}>
                        <label htmlFor="confirmPassword" className={styles['form-label']}>ยืนยันรหัสผ่าน</label>
                        <div className="input-group">
                          <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            className={`${styles['form-control']} ${errors.confirmPassword ? styles['is-invalid'] : ''}`}
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            id="confirmPassword"
                          />
                          <button
                            type="button"
                            className="btn"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          >
                            <i className={`bi ${showConfirmPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                          </button>
                        </div>
                        {errors.confirmPassword && <div className={styles['invalid-feedback']}>{errors.confirmPassword}</div>}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="d-grid gap-2">
                  <button
                    type="submit"
                    className={styles['btn-primary']}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        กำลังสร้างบัญชี...
                      </>
                    ) : (
                      <>
                        <i className="bi bi-person-plus me-2"></i>
                        สร้างบัญชี
                      </>
                    )}
                  </button>
                </div>
              </form>

              {/* Login Link */}
              <div className={styles['login-text']}>
                มีบัญชีอยู่แล้ว? 
                <Link href="/login" className={styles['login-link']}>
                  เข้าสู่ระบบที่นี่
                </Link>
              </div>

              {/* Decorative Elements */}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
