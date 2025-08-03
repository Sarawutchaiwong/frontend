'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

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
      const res = await fetch('http://itdev.cmtc.ac.th:3000/api/users', {
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
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-sm" style={{ borderRadius: '1rem' }}>
            <div className="card-body p-4">
              <h1 className="card-title text-center mb-4 display-4">Register</h1>

              <form onSubmit={handleSubmit} className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="prefix" className="form-label">คำนำหน้าชื่อ</label>
                  <select
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    id="prefix"
                    className={`form-select ${errors.firstname ? 'is-invalid' : ''}`}>
                    <option value="">Choose...</option>
                    <option value="นาย">นาย</option>
                    <option value="นางสาว">นางสาว</option>
                    <option value="นาง">นาง</option>
                  </select>
                  {errors.firstname && <div className="invalid-feedback">{errors.firstname}</div>}
                </div>

                <div className="col-md-6">
                  <label htmlFor="nickname" className="form-label">ชื่อเล่น</label>
                  <input
                    type="text"
                    className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    id="nickname"
                  />
                  {errors.username && <div className="invalid-feedback">{errors.username}</div>}
                </div>

                <div className="col-md-6">
                  <label htmlFor="firstName" className="form-label">ชื่อ</label>
                  <input
                    type="text"
                    className={`form-control ${errors.fullname ? 'is-invalid' : ''}`}
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleChange}
                    id="firstName"
                  />
                  {errors.fullname && <div className="invalid-feedback">{errors.fullname}</div>}
                </div>

                <div className="col-md-6">
                  <label htmlFor="lastName" className="form-label">นามสกุล</label>
                  <input
                    type="text"
                    className={`form-control ${errors.lastname ? 'is-invalid' : ''}`}
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    id="lastName"
                  />
                  {errors.lastname && <div className="invalid-feedback">{errors.lastname}</div>}
                </div>

                <div className="col-md-6">
                  <label className="form-label">เพศ</label>
                  <div>
                    <div className="form-check form-check-inline">
                      <input
                        className={`form-check-input ${errors.sex ? 'is-invalid' : ''}`}
                        type="radio"
                        name="sex"
                        id="male"
                        value="ชาย"
                        onChange={handleChange}
                      />
                      <label className="form-check-label" htmlFor="male">ชาย</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className={`form-check-input ${errors.sex ? 'is-invalid' : ''}`}
                        type="radio"
                        name="sex"
                        id="female"
                        value="หญิง"
                        onChange={handleChange}
                      />
                      <label className="form-check-label" htmlFor="female">หญิง</label>
                    </div>
                  </div>
                  {errors.sex && <div className="invalid-feedback d-block">{errors.sex}</div>}
                </div>

                <div className="col-md-6">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    id="email"
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>

                <div className="col-md-6">
                  <label htmlFor="inputPassword" className="form-label">Password</label>
                  <input
                    type="password"
                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    id="inputPassword"
                  />
                  {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                </div>

                <div className="col-md-6">
                  <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                  <input
                    type="password"
                    className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    id="confirmPassword"
                  />
                  {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
                </div>

                <div className="col-12">
                  <label htmlFor="inputAddress" className="form-label">Address</label>
                  <textarea
                    className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    id="inputAddress"
                  />
                  {errors.address && <div className="invalid-feedback">{errors.address}</div>}
                </div>

                <div className="col-md-6">
                  <label htmlFor="inputCity" className="form-label">City</label>
                  <input
                    type="text"
                    className={`form-control ${errors.city ? 'is-invalid' : ''}`}
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    id="inputCity"
                  />
                  {errors.city && <div className="invalid-feedback">{errors.city}</div>}
                </div>

                <div className="col-md-4">
                  <label htmlFor="inputState" className="form-label">Province</label>
                  <select
                    id="inputState"
                    name="province"
                    className={`form-select ${errors.province ? 'is-invalid' : ''}`}
                    value={formData.province}
                    onChange={handleChange}>
                    <option value="">Choose...</option>
                    <option value="BKK">Bangkok</option>
                    <option value="CPN">Chonburi</option>
                    <option value="CNG">Chiang Mai</option>
                    <option value="PKT">Phuket</option>
                  </select>
                  {errors.province && <div className="invalid-feedback">{errors.province}</div>}
                </div>

                <div className="col-md-2">
                  <label htmlFor="inputZip" className="form-label">Zip</label>
                  <input
                    type="text"
                    className={`form-control ${errors.zip ? 'is-invalid' : ''}`}
                    name="zip"
                    value={formData.zip}
                    onChange={handleChange}
                    id="inputZip"
                  />
                  {errors.zip && <div className="invalid-feedback">{errors.zip}</div>}
                </div>

                <div className="col-md-6">
                  <label htmlFor="inputDate" className="form-label">Date of Birth</label>
                  <input
                    type="date"
                    className={`form-control ${errors.birthday ? 'is-invalid' : ''}`}
                    id="inputDate"
                    name="birthday"
                    value={formData.birthday}
                    onChange={handleChange}
                  />
                  {errors.birthday && <div className="invalid-feedback">{errors.birthday}</div>}
                </div>

                <div className="col-12">
                  <div className="form-check">
                    <input
                      className={`form-check-input ${errors.acceptTerms ? 'is-invalid' : ''}`}
                      type="checkbox"
                      id="gridCheck"
                      name="acceptTerms"
                      checked={formData.acceptTerms}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="gridCheck">
                      Accept terms and conditions
                    </label>
                    {errors.acceptTerms && <div className="invalid-feedback d-block">{errors.acceptTerms}</div>}
                  </div>
                </div>

                <div className="col-12 d-grid gap-2">
                  <button type="submit" className="btn btn-primary">Register</button>
                </div>
              </form>

              <p className="text-center mt-3">
                Already have an account? <Link href="/login">Login here</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
