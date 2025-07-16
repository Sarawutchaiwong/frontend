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
                  <label htmlFor="inputEmail4" className="form-label">Email</label>
                  <input type="email" className="form-control" id="inputEmail4" required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputPassword4" className="form-label">Password</label>
                  <input type="password" className="form-control" id="inputPassword4" required />
                </div>
                <div className="col-12">
                  <label htmlFor="inputAddress" className="form-label">Address</label>
                  <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" required />
                </div>
                <div className="col-12">
                  <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                  <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputCity" className="form-label">City</label>
                  <input type="text" className="form-control" id="inputCity" />
                </div>
                <div className="col-md-4">
                  <label htmlFor="inputState" className="form-label">Province</label>
                  <select id="inputState" placeholder="select your province" className="form-select">
                    <option selected></option>
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
                    <option value="SBR">Sing Buri</option>
                    <option value="SPB">Suphan Buri</option>
                    <option value="UTT">Uttaradit</option>
                    <option value="PCH">Phetchabun</option>
                    <option value="PRC">Prachuap Khiri Khan</option>
                    <option value="RNG">Ranong</option>
                    <option value="SML">Samut Sakhon</option>
                    <option value="SMT">Samut Songkhram</option>
                    <option value="SBN">Saraburi</option>
                    <option value="TRT">Trat</option>
                    <option value="KRI">Kanchanaburi</option>
                    <option value="LRI">Loei</option>
                    <option value="MKM">Mukdahan</option>
                    <option value="NKN">Nakhon Nayok</option>
                    <option value="NPM">Nakhon Phanom</option>
                    <option value="NWS">Nakhon Sawan</option>
                    <option value="NNG">Nong Bua Lamphu</option>
                    <option value="NKI">Nong Khai</option>
                    <option value="PTI">Pathum Thani</option>
                    <option value="PBL">Phetchaburi</option>
                    <option value="PCN">Phichit</option>
                    <option value="PLK">Phitsanulok</option>
                    <option value="PRE">Phrae</option>
                    <option value="PNA">Phang Nga</option>
                    <option value="PHT">Phayao</option>
                    <option value="PBI">Phetchaburi</option>
                    <option value="PRC">Prachin Buri</option>
                    <option value="RBG">Ratchaburi</option>
                    <option value="RYG">Rayong</option>
                    <option value="SBN">Sa Kaeo</option>
                    <option value="SML">Samut Prakan</option>
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
                  <input type="text" className="form-control" id="inputZip" />
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                    <label className="form-check-label" htmlFor="gridCheck">
                      Check me out
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