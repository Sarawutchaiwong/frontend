'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // ✅ FIXED: import useRouter
import Swal from 'sweetalert2';

export default function Register() {
  const router = useRouter(); // ✅ FIXED: useRouter at top level

  const [firstname, setFirstname] = useState('');
  const [fullname, setFullname] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [sex, setSex] = useState('');
  const [birthday, setBirthday] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://itdev.cmtc.ac.th:3000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          firstname,
          fullname,
          lastname,
          username,
          password,
          address,
          sex,
          birthday,
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
          router.push('/register'); // ✅ Redirect after success
        });

        // Clear form
        setFirstname('');
        setFullname('');
        setLastname('');
        setUsername('');
        setPassword('');
        setAddress('');
        setSex('');
        setBirthday('');
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
                {/* Prefix */}
                <div className="col-md-6">
                  <label htmlFor="prefix" className="form-label">คำนำหน้าชื่อ</label>
                  <select
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    id="prefix"
                    className="form-select"
                    required
                  >
                    <option value="">Choose...</option>
                    <option value="นาย">นาย</option>
                    <option value="นางสาว">นางสาว</option>
                    <option value="นาง">นาง</option>
                  </select>
                </div>

                {/* Nickname */}
                <div className="col-md-6">
                  <label htmlFor="nickname" className="form-label">ชื่อเล่น</label>
                  <input
                    type="text"
                    className="form-control"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    id="nickname"
                    required
                  />
                </div>

                {/* Firstname */}
                <div className="col-md-6">
                  <label htmlFor="firstName" className="form-label">ชื่อ</label>
                  <input
                    type="text"
                    className="form-control"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    id="firstName"
                    required
                  />
                </div>

                {/* Lastname */}
                <div className="col-md-6">
                  <label htmlFor="lastName" className="form-label">นามสกุล</label>
                  <input
                    type="text"
                    className="form-control"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    id="lastName"
                    required
                  />
                </div>

                {/* Gender */}
                <div className="col-md-6">
                  <label className="form-label">เพศ</label>
                  <div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        id="male"
                        value="ชาย"
                        onChange={(e) => setSex(e.target.value)}
                        required
                      />
                      <label className="form-check-label" htmlFor="male">ชาย</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        id="female"
                        value="หญิง"
                        onChange={(e) => setSex(e.target.value)}
                        required
                      />
                      <label className="form-check-label" htmlFor="female">หญิง</label>
                    </div>
                  </div>
                </div>

                {/* Email (not included in backend currently) */}
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" required />
                </div>

                {/* Password */}
                <div className="col-md-6">
                  <label htmlFor="inputPassword" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id="inputPassword"
                    required
                  />
                </div>

                {/* Confirm Password (not checked) */}
                <div className="col-md-6">
                  <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                  <input type="password" className="form-control" id="confirmPassword" required />
                </div>

                {/* Address */}
                <div className="col-12">
                  <label htmlFor="inputAddress" className="form-label">Address</label>
                  <textarea
                    className="form-control"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    id="inputAddress"
                    required
                  />
                </div>

                {/* City */}
                <div className="col-md-6">
                  <label htmlFor="inputCity" className="form-label">City</label>
                  <input type="text" className="form-control" id="inputCity" required />
                </div>

                {/* Province */}
                <div className="col-md-4">
                  <label htmlFor="inputState" className="form-label">Province</label>
                  <select id="inputState" className="form-select" required>
                    <option value="">Choose...</option>
                    <option value="BKK">Bangkok</option>
                    <option value="CPN">Chonburi</option>
                    <option value="CNG">Chiang Mai</option>
                    <option value="PKT">Phuket</option>
                    {/* ...other provinces */}
                  </select>
                </div>

                {/* Zip */}
                <div className="col-md-2">
                  <label htmlFor="inputZip" className="form-label">Zip</label>
                  <input type="text" className="form-control" id="inputZip" required />
                </div>

                {/* Birthday */}
                <div className="col-md-6">
                  <label htmlFor="inputDate" className="form-label">Date of Birth</label>
                  <input
                    type="date"
                    className="form-control"
                    id="inputDate"
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                    required
                  />
                </div>

                {/* Checkbox */}
                <div className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck" required />
                    <label className="form-check-label" htmlFor="gridCheck">
                      Accept terms and conditions
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
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
