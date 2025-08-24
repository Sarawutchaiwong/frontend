'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import styles from './register.module.css';

export default function Register() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstname: '',
    fullname: '',
    lastname: '',
    username: '',
    password: '',
    confirmPassword: '',
    address: '',
    sex: '',
    birthday: '',
    email: '',
    city: '',
    province: '',
    zip: '',
    acceptTerms: false,
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.firstname) newErrors.firstname = 'คำนำหน้าชื่อ is required';
    if (!formData.fullname) newErrors.fullname = 'ชื่อ is required';
    if (!formData.lastname) newErrors.lastname = 'นามสกุล is required';
    if (!formData.username) newErrors.username = 'ชื่อเล่น is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.sex) newErrors.sex = 'เพศ is required';
    if (!formData.birthday) newErrors.birthday = 'Date of Birth is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.province) newErrors.province = 'Province is required';
    if (!formData.zip) newErrors.zip = 'Zip is required';
    if (!formData.acceptTerms) newErrors.acceptTerms = 'You must accept the terms and conditions';

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
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

    try {
      const res = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          firstname: formData.firstname,
          fullname: formData.fullname,
          lastname: formData.lastname,
          username: formData.username,
          password: formData.password,
          address: formData.address,
          sex: formData.sex,
          birthday: formData.birthday,
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
          title: 'Error!',
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
              
                <h1 className={styles['register-title']}>Register</h1>
              </div>

              <form onSubmit={handleSubmit}>
                {/* Personal Information Section */}
                <div className={styles['form-section']}>
                  <h3 className={styles['section-title']}>
                    <i className="bi bi-person-circle"></i>
                    Personal Information
                  </h3>
                  
                  <div className="row">
                    <div className="col-md-6">
                      <div className={styles['form-group']}>
                        <label htmlFor="prefix" className={styles['form-label']}>คำนำหน้าชื่อ</label>
                        <select
                          name="firstname"
                          value={formData.firstname}
                          onChange={handleChange}
                          id="prefix"
                          className={`${styles['form-select']} ${errors.firstname ? styles['is-invalid'] : ''}`}>
                          <option value="">Choose...</option>
                          <option value="นาย">นาย</option>
                          <option value="นางสาว">นางสาว</option>
                          <option value="นาง">นาง</option>
                        </select>
                        {errors.firstname && <div className={styles['invalid-feedback']}>{errors.firstname}</div>}
                      </div>
                    </div>

                    <div className="col-md-6">
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
                        <label htmlFor="firstName" className={styles['form-label']}>ชื่อ</label>
                        <input
                          type="text"
                          className={`${styles['form-control']} ${errors.fullname ? styles['is-invalid'] : ''}`}
                          name="fullname"
                          value={formData.fullname}
                          onChange={handleChange}
                          id="firstName"
                        />
                        {errors.fullname && <div className={styles['invalid-feedback']}>{errors.fullname}</div>}
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className={styles['form-group']}>
                        <label htmlFor="lastName" className={styles['form-label']}>นามสกุล</label>
                        <input
                          type="text"
                          className={`${styles['form-control']} ${errors.lastname ? styles['is-invalid'] : ''}`}
                          name="lastname"
                          value={formData.lastname}
                          onChange={handleChange}
                          id="lastName"
                        />
                        {errors.lastname && <div className={styles['invalid-feedback']}>{errors.lastname}</div>}
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className={styles['form-group']}>
                        <label className={styles['form-label']}>เพศ</label>
                        <div>
                          <div className={styles['form-check-inline']}>
                            <input
                              className={`${styles['form-check-input']} ${errors.sex ? styles['is-invalid'] : ''}`}
                              type="radio"
                              name="sex"
                              id="male"
                              value="ชาย"
                              onChange={handleChange}
                            />
                            <label className={styles['form-check-label']} htmlFor="male">ชาย</label>
                          </div>
                          <div className={styles['form-check-inline']}>
                            <input
                              className={`${styles['form-check-input']} ${errors.sex ? styles['is-invalid'] : ''}`}
                              type="radio"
                              name="sex"
                              id="female"
                              value="หญิง"
                              onChange={handleChange}
                            />
                            <label className={styles['form-check-label']} htmlFor="female">หญิง</label>
                          </div>
                        </div>
                        {errors.sex && <div className={styles['invalid-feedback']}>{errors.sex}</div>}
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className={styles['form-group']}>
                        <label htmlFor="email" className={styles['form-label']}>Email</label>
                        <input
                          type="email"
                          className={`${styles['form-control']} ${errors.email ? styles['is-invalid'] : ''}`}
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          id="email"
                        />
                        {errors.email && <div className={styles['invalid-feedback']}>{errors.email}</div>}
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className={styles['form-group']}>
                        <label htmlFor="inputDate" className={styles['form-label']}>Date of Birth</label>
                        <input
                          type="date"
                          className={`${styles['form-control']} ${errors.birthday ? styles['is-invalid'] : ''}`}
                          id="inputDate"
                          name="birthday"
                          value={formData.birthday}
                          onChange={handleChange}
                        />
                        {errors.birthday && <div className={styles['invalid-feedback']}>{errors.birthday}</div>}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Account Security Section */}
                <div className={styles['form-section']}>
                  <h3 className={styles['section-title']}>
                    <i className="bi bi-shield-lock"></i>
                    Account Security
                  </h3>
                  
                  <div className="row">
                    <div className="col-md-6">
                      <div className={styles['form-group']}>
                        <label htmlFor="inputPassword" className={styles['form-label']}>Password</label>
                        <input
                          type="password"
                          className={`${styles['form-control']} ${errors.password ? styles['is-invalid'] : ''}`}
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          id="inputPassword"
                        />
                        {errors.password && <div className={styles['invalid-feedback']}>{errors.password}</div>}
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className={styles['form-group']}>
                        <label htmlFor="confirmPassword" className={styles['form-label']}>Confirm Password</label>
                        <input
                          type="password"
                          className={`${styles['form-control']} ${errors.confirmPassword ? styles['is-invalid'] : ''}`}
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          id="confirmPassword"
                        />
                        {errors.confirmPassword && <div className={styles['invalid-feedback']}>{errors.confirmPassword}</div>}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Address Section */}
                <div className={styles['form-section']}>
                  <h3 className={styles['section-title']}>
                    <i className="bi bi-geo-alt"></i>
                    Address Information
                  </h3>
                  
                  <div className="row">
                    <div className="col-12">
                      <div className={styles['form-group']}>
                        <label htmlFor="inputAddress" className={styles['form-label']}>Address</label>
                        <textarea
                          className={`${styles['form-control']} ${errors.address ? styles['is-invalid'] : ''}`}
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          id="inputAddress"
                          rows="3"
                        />
                        {errors.address && <div className={styles['invalid-feedback']}>{errors.address}</div>}
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className={styles['form-group']}>
                        <label htmlFor="inputCity" className={styles['form-label']}>City</label>
                        <input
                          type="text"
                          className={`${styles['form-control']} ${errors.city ? styles['is-invalid'] : ''}`}
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          id="inputCity"
                        />
                        {errors.city && <div className={styles['invalid-feedback']}>{errors.city}</div>}
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className={styles['form-group']}>
                        <label htmlFor="inputState" className={styles['form-label']}>Province</label>
                        <select
                          id="inputState"
                          name="province"
                          className={`${styles['form-select']} ${errors.province ? styles['is-invalid'] : ''}`}
                          value={formData.province}
                          onChange={handleChange}>
                          <option value="">Choose...</option>
                          <option value="BKK">Bangkok</option>
                          <option value="CPN">Chonburi</option>
                          <option value="CNG">Chiang Mai</option>
                          <option value="PKT">Phuket</option>
                        </select>
                        {errors.province && <div className={styles['invalid-feedback']}>{errors.province}</div>}
                      </div>
                    </div>

                    <div className="col-md-2">
                      <div className={styles['form-group']}>
                        <label htmlFor="inputZip" className={styles['form-label']}>Zip</label>
                        <input
                          type="text"
                          className={`${styles['form-control']} ${errors.zip ? styles['is-invalid'] : ''}`}
                          name="zip"
                          value={formData.zip}
                          onChange={handleChange}
                          id="inputZip"
                        />
                        {errors.zip && <div className={styles['invalid-feedback']}>{errors.zip}</div>}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div className={styles['form-check']}>
                  <input
                    className={`${styles['form-check-input']} ${errors.acceptTerms ? styles['is-invalid'] : ''}`}
                    type="checkbox"
                    id="gridCheck"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleChange}
                  />
                  <label className={styles['form-check-label']} htmlFor="gridCheck">
                    I accept the terms and conditions
                  </label>
                  {errors.acceptTerms && <div className={styles['invalid-feedback']}>{errors.acceptTerms}</div>}
                </div>

                {/* Submit Button */}
                <div className="d-grid gap-2">
                  <button type="submit" className={styles['btn-primary']}>
                    <i className="bi bi-person-plus me-2"></i>
                    Create Account
                  </button>
                </div>
              </form>

              {/* Login Link */}
              <div className={styles['login-text']}>
                Already have an account? 
                <Link href="/login" className={styles['login-link']}>
                  Login here
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
