'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Page({params}) {
  const { id } = params;
  const router = useRouter();

  useEffect(() => {
    async function getUsers() {
      try {
        const res = await fetch(`http://itdev.cmtc.ac.th:3000/api/users/${id}`);
        if (!res.ok) {
          console.error('Failed to fetch data');
          return;
        }
        const data = await res.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  
  getUsers();
  //const interval  = setInterval(getUsers, 1000);
  //return () => clearInterval(interval);
}, []);

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

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('http://itdev.cmtc.ac.th:3000/api/users', {
      method: 'PUT',
      headers: {
        Accept : 'application/json',
      },
      body: JSON.stringify({ id, firstname, lastname, username, password }),
    });

    const result = await res.json();
    console.log(result);
  };


  return (

     <>
    <br /><br /><br />
    <div className="container">
    <div class="card">
  <div class="card-header bg-warning text-dark">
  Edit Form
  {/* Edit Form {JSON.stringify(items)} */}
  </div>
  <div class="card-body"></div>

  {items.map((item) => (
    <form className="row g-3" onSubmit={handleUpdateSubmit}>
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-sm" style={{ borderRadius: '1rem' }}>
            <div className="card-body p-4">
              <h1 className="card-title text-center mb-4 display-4">Edit</h1>

              <form onSubmit={handleUpdateSubmit} className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="prefix" className="form-label">คำนำหน้าชื่อ</label>
                  <select
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleUpdateSubmit}
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
                    onChange={handleUpdateSubmit}
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
                    onChange={handleUpdateSubmit}
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
                    onChange={handleUpdateSubmit}
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
                        onChange={handleUpdateSubmit}
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
                        onChange={handleUpdateSubmit}
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
                    onChange={handleUpdateSubmit}
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
                    onChange={handleUpdateSubmit}
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
                    onChange={handleUpdateSubmit}
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
                    onChange={handleUpdateSubmit}
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
                    onChange={handleUpdateSubmit}
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
                    onChange={handleUpdateSubmit}>
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
                    onChange={handleUpdateSubmit}
                    id="inputZip"
                  />
                  {errors.zip && <div className="invalid-feedback">{errors.zip}</div>}
                </div>

                <div className="col-md-6 p-2">
                  <label htmlFor="inputDate" className="form-label">Date of Birth</label>
                  <input
                    type="date"
                    className={`form-control ${errors.birthday ? 'is-invalid' : ''}`}
                    id="inputDate"
                    name="birthday"
                    value={formData.birthday}
                    onChange={handleUpdateSubmit}
                  />
                  {errors.birthday && <div className="invalid-feedback">{errors.birthday}</div>}
                </div>

                

                <div className="col-12 d-grid gap-2">
                  <button type="submit" className="btn btn-primary">Save Change</button>
                </div>
              </form>

             
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </form>
      
    </div> 
    <br /><br />
    
    </>
  
  );
}
