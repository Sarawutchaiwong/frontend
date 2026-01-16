'use client'
import { useEffect, useState } from 'react';

import Swal from 'sweetalert2'
import { useParams, useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()

  const params = useParams();
  const id = params.id;

  const [firstname, setFirstname] = useState('')
  const [fullname, setFullname] = useState('')
  const [lastname, setLastname] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getUsers() {
          setLoading(true);
          try {
            const token = localStorage.getItem('token');
            const res = await fetch(`/api/users/${id}`, {
              headers: {
                'Authorization': `Bearer ${token}`,
              },
            });
            if (!res.ok) {
              console.error('Failed to fetch data');
              return;
            }
            const data = await res.json();
            setItems(Array.isArray(data) ? data : [data]);

        //กำหนดค่า state เริ่มต้นจาก API
        if (data.length > 0) {
          const user = data[0];
          setFirstname(user.firstname || '');
          setFullname(user.fullname || '');
          setLastname(user.lastname || '');
          setUsername(user.username || '');
          setPassword(user.password || '');
        }

          } catch (error) {
            console.error('Error fetching data:', error);
          } finally {
            setLoading(false);
          }
        }
     
      getUsers();
      //const interval  = setInterval(getUsers, 1000);
      //return () => clearInterval(interval);
    }, [id]);

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`/api/users/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ firstname, fullname, lastname, username, password }),
      });

      const result = await res.json();
      console.log(result);
      if (res.ok) {
        Swal.fire({
          icon: 'success',
          title: '<h3>saved change successfully</h3>',
          showConfirmButton: false,
          timer: 2000
          }).then(function () {
          router.push('/admin/users')
        });
        setFirstname('')
        setFullname('')
        setLastname('')
        setUsername('')
        setPassword('')
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'invalid!',
          icon: 'error',
          confirmButtonText: 'ok'
        })
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'network error',
        text: 'Could not connect to sever',
      })
    }
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card bg-white text-white border-0 shadow-lg rounded-4">
            <div className="card-body p-5">
              <div className="text-center mb-5">
                <h2 className="card-title text-dark fw-bold mb-0">
                  Edit User
                </h2>
                <p className="text-muted">ID: {id}</p>
              </div>

              {loading ? (
                <div className="text-center">
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : items && items.length > 0 ? (
                items.map((item) => (
                  <form key={item.id} onSubmit={handleUpdateSubmit} className="row g-4">
                    <div className="col-md-6">
                      <label className="form-label text-dark fw-semibold">Firstname</label>
                      <select 
                        name="firstname" 
                        onChange={(e) => setFirstname(e.target.value)} 
                        className="form-select bg-white text-dark border-secondary shadow-sm" 
                        required
                      >
                        <option value={item.firstname}>{item.firstname}</option>
                        <option value="นาย">นาย</option>
                        <option value="นาง">นาง</option>
                        <option value="นางสาว">นางสาว</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      <label className="form-label text-dark fw-semibold">Fullname</label>
                      <input
                        type="text"
                        placeholder="กรอกชื่อ"
                        defaultValue={item.fullname}
                        onChange={(e) => setFullname(e.target.value)}
                        className="form-control bg-white text-dark border-secondary shadow-sm"
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label text-dark fw-semibold">Lastname</label>
                      <input
                        type="text"
                        placeholder="กรอกนามสกุล"
                        defaultValue={item.lastname}
                        onChange={(e) => setLastname(e.target.value)}
                        className="form-control bg-white text-dark border-secondary shadow-sm"
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label text-dark fw-semibold">Username</label>
                      <input
                        type="text"
                        placeholder="กรอกชื่อผู้ใช้"
                        defaultValue={item.username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="form-control bg-white text-dark border-secondary shadow-sm"
                        required
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label text-dark fw-semibold">Password</label>
                      <input
                        type="password"
                        placeholder="กรอกรหัสผ่าน"
                        defaultValue={item.password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control bg-white text-dark border-secondary shadow-sm"
                        required
                      />
                    </div>

                    <div className="col-12 mt-5">
                      <div className="d-flex gap-3 justify-content-center">
                        <button
                          type="button"
                          className="btn btn-light px-4 py-2 shadow-sm"
                          onClick={() => router.push('/admin/users')}
                        >
                          cancel
                        </button>
                        <button
                          type="submit"
                          className="btn btn-primary px-4 py-2 shadow-sm"
                        >
                          save change
                        </button>
                      </div>
                    </div>
                  </form>
                ))
              ) : (
                <div className="text-center">
                  <p>User not found.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}