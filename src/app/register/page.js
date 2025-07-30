'use client';
import Link from 'next/link';
import { useState } from 'react'
import Swal from 'sweetalert2'

export default function Register() {
  const [firstname, setFirstname] = useState('')
  const [fullname, setFullname] = useState('')
  const [lastname, setLastname] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [address, setAddress] = useState('')
  const [sex, setSex] = useState('')
  const [birthday, setBirthday] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('http://itdev.cmtc.ac.th:3000/api/users', {
      method: 'POST',
      headers: {
        Accept : 'application/json',
      },
      body: JSON.stringify({ firstname, fullname, lastname, username, password, address, sex, birthday }),
    });

    const result = await res.json();
    console.log(result);
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
                  <select value={firstname} onChange={(e) => setFirstname(e.target.value)} id="prefix" className="form-select" required>
                    <option value="">Choose...</option>
                    <option value="นาย">นาย</option>
                    <option value="นางสาว">นางสาว</option>
                    <option value="นาง">นาง</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label htmlFor="firstname" className="form-label">ชื่อเล่น</label>
                  <input type="text" className="form-control" 
                  value={username} onChange={(e) => setUsername(e.target.value)} 
                  id="nickname" required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="firstName" className="form-label">ชื่อ</label>
                  <input type="text" className="form-control"
                  value={fullname} onChange={(e) => setFullname(e.target.value)}
                  id="firstName" required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="lastName" className="form-label">นามสกุล</label>
                  <input type="text" className="form-control" 
                  value={lastname} onChange={(e) => setLastname(e.target.value)}
                  id="lastName" required />
                </div>
                
                <div className="col-md-6">
                  <label className="form-label">เพศ</label>
                  <div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name="gender" id="male" value="Male" required
                        onChange={(e) => setSex(e.target.value)} />
                      <label className="form-check-label" htmlFor="male">ชาย</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name="gender" id="female" value="Female" required
                        onChange={(e) => setSex(e.target.value)} />
                      <label className="form-check-label" htmlFor="female">หญิง</label>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" required />
                </div>
                
                <div className="col-md-6">
                  <label htmlFor="inputPassword4" className="form-label">Password</label>
                  <input type="password" className="form-control" 
                  value={password} onChange={(e) => setPassword(e.target.value)} 
                  id="inputPassword4" required />
                </div>

                <div className="col-md-6">
                  <label htmlFor="inputPassword4" className="form-label">Confirm Password</label>
                  <input type="confirmpassword" className="form-control" id="inputPassword4" required />
                </div>

                <div className="col-12">
                  <label htmlFor="inputAddress" className="form-label">Address</label>
                  <textarea type="text" className="form-control"
                  value={address} onChange={(e) => setAddress(e.target.value)}
                  id="inputAddress" placeholder="1234 Main St" required />
                </div>
                
                <div className="col-md-6">
                  <label htmlFor="inputCity" className="form-label">City</label>
                  <input type="text" className="form-control" id="inputCity" required />
                </div>
                <div className="col-md-4">
                  <label htmlFor="inputState" className="form-label">Province</label>
                  <select id="inputState" className="form-select" required>
                    <option value="">Choose...</option>
                    <option value="BKK">Bangkok</option>
                    <option value="CPN">Chonburi</option>
                    <option value="CNG">Chiang Mai</option>
                    <option value="PKT">Phuket</option>
                    <option value="KBN">Krabi</option>
                    <option value="SRT">Surat Thani</option>
                    <option value="HDY">Hat Yai</option>
                    <option value="KKN">Khon Kaen</option>
                    <option value="UDN">Udon Thani</option>
                    <option value="NMA">Nakhon Ratchasima</option>
                    <option value="AYT">Ayutthaya</option>
                    <option value="SKN">Sakon Nakhon</option>
                    <option value="CRI">Chiang Rai</option>
                    <option value="TRG">Trang</option>
                    <option value="PYO">Phayao</option>
                    <option value="LPG">Lampang</option>
                    <option value="NPT">Nakhon Pathom</option>
                    <option value="RBG">Ratchaburi</option>
                    <option value="SGB">Songkhla</option>
                    <option value="SRN">Surin</option>
                    <option value="UBR">Ubon Ratchathani</option>
                    <option value="YLA">Yala</option>
                    <option value="PTN">Pattani</option>
                    <option value="NRT">Narathiwat</option>
                    <option value="PLG">Phatthalung</option>
                    <option value="SAT">Satun</option>
                    <option value="SBN">Sing Buri</option>
                    <option value="SPB">Suphan Buri</option>
                    <option value="UTT">Uttaradit</option>
                    <option value="PCH">Phetchabun</option>
                    <option value="PRC">Prachuap Khiri Khan</option>
                    <option value="RNG">Ranong</option>
                    <option value="SML">Samut Sakhon</option>
                    <option value="SMT">Samut Songkhram</option>
                    <option value="SBN">Saraburi</option>
                    <option value="SRN">Sisaket</option>
                    <option value="SKN">Sukhothai</option>
                    <option value="SRT">Surat Thani</option>
                    <option value="TRG">Tak</option>
                    <option value="TRT">Trat</option>
                    <option value="UTT">Uthai Thani</option>
                    <option value="YST">Yasothon</option>
                  </select>
                </div>
                <div className="col-md-2">
                  <label htmlFor="inputZip" className="form-label">Zip</label>
                  <input type="text" className="form-control" id="inputZip" required />
                </div>
                <div className='col-md-6'>
                
                    <label htmlFor="inputDate" className="form-label">Date of Birth</label>
                    <input type="date" className="form-control" id="inputDate" value={birthday} onChange={(e) => setBirthday(e.target.value)} required />
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                    <label className="form-check-label" htmlFor="gridCheck">
                      Accept terms and conditions
                    </label>
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