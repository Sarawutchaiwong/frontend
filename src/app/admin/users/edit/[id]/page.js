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
  }, [id]);

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://itdev.cmtc.ac.th:3000/api/users', {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, firstname, fullname, lastname, username, password }),
      });
      const result = await res.json();
      if (res.ok) {
        Swal.fire({
          icon: 'success',
          title: '<h3>ปรับปรุงข้อมูลเรียบร้อยแล้ว</h3>',
          showConfirmButton: false,
          timer: 2000
        }).then(function () {
          router.push('/register')
        });
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'เกิดข้อผิดพลาด!',
          icon: 'error',
          confirmButtonText: 'ตกลง'
        })
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'ข้อผิดพลาดเครือข่าย',
        text: 'ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์ได้',
      })
    }
  }

  return (
    <div className="max-w-lg mx-auto mt-12 p-6 bg-white rounded-3xl shadow-2xl border border-gray-200">
      <h1 className="text-2xl font-extrabold text-center text-blue-700 mb-6 tracking-wide">
        แก้ไขข้อมูลสมาชิก <span className="text-yellow-500">#{id}</span>
      </h1>
      {items.map((item) => (
        <form key={item.id} onSubmit={handleUpdateSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 font-semibold text-gray-700">Firstname</label>
            <select
              name="firstname"
              defaultValue={item.firstname}
              onChange={(e) => setFirstname(e.target.value)}
              className="w-full border border-blue-200 p-2 rounded-lg focus:ring-2 focus:ring-blue-400"
              required
            >
              <option value="">-- คำนำหน้า --</option>
              <option value="นาย">นาย</option>
              <option value="นาง">นาง</option>
              <option value="นางสาว">นางสาว</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-700">Fullname</label>
            <input
              type="text"
              placeholder="ชื่อ"
              defaultValue={item.fullname}
              onChange={(e) => setFullname(e.target.value)}
              className="w-full border border-blue-200 p-2 rounded-lg focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-700">Lastname</label>
            <input
              type="text"
              placeholder="นามสกุล"
              defaultValue={item.lastname}
              onChange={(e) => setLastname(e.target.value)}
              className="w-full border border-blue-200 p-2 rounded-lg focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-700">Username</label>
            <input
              type="text"
              placeholder="username"
              defaultValue={item.username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border border-blue-200 p-2 rounded-lg focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-bold p-2 rounded-lg shadow hover:from-yellow-500 hover:to-yellow-700 transition"
          >
            Save Changes
          </button>
        </form>
      ))}
    </div>
  );
}