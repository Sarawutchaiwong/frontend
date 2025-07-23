import Link from 'next/link';

export default function Register() {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-sm" style={{ borderRadius: '1rem' }}>
            <div className="card-body p-4">
              <h1 className="card-title text-center mb-4 display-4">Register</h1>
              <form className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="prefix" className="form-label">คำนำหน้าชื่อ</label>
                  <select id="prefix" className="form-select" required>
                    <option value="">Choose...</option>
                    <option value="Mr.">นาย</option>
                    <option value="Ms.">นางสาว</option>
                    <option value="Mrs.">นาง</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label htmlFor="nickname" className="form-label">ชื่อเล่น</label>
                  <input type="text" className="form-control" id="nickname" required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="firstName" className="form-label">ชื่อ</label>
                  <input type="text" className="form-control" id="firstName" required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="lastName" className="form-label">นามสกุล</label>
                  <input type="text" className="form-control" id="lastName" required />
                </div>
                <div className="col-md-6">
                  <label className="form-label">เพศ</label>
                  <div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name="gender" id="male" value="Male" required />
                      <label className="form-check-label" htmlFor="male">Male</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name="gender" id="female" value="Female" required />
                      <label className="form-check-label" htmlFor="female">Female</label>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-6">
                  <label htmlFor="inputPassword4" className="form-label">Password</label>
                  <input type="password" className="form-control" id="inputPassword4" required />
                </div>
                <div className="col-12">
                  <label htmlFor="inputAddress" className="form-label">Address</label>
                  <textarea type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" required />
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
                  <date>
                    <label htmlFor="inputDate" className="form-label">Date of Birth</label>
                    <input type="date" className="form-control" id="inputDate" required />
                  </date>
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