'use client';
import Link from 'next/link'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'
import Swal from 'sweetalert2';

export default function User() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true); // <-- เพิ่ม state loading
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/signin');
      return;
    }

    async function getUsers() {
      try {
        const res = await fetch('http://itdev.cmtc.ac.th:3000/api/users');
        if (!res.ok) {
          console.error('Failed to fetch data');
          return;
        }
        const data = await res.json();
        setItems(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    }

    getUsers();
    const interval = setInterval(getUsers, 1000);
    return () => clearInterval(interval);
  });

  const handleDelete = async (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          // Using the direct external API for deletion
          const res = await fetch(`http://itdev.cmtc.ac.th:3000/api/users/${id}`, {
            method: 'DELETE',
          });

          if (res.ok) {
            Swal.fire(
              'Deleted!',
              'The user has been deleted.',
              'success'
            )
            // Refresh the user list by fetching again
            const res = await fetch('http://itdev.cmtc.ac.th:3000/api/users');
            if (res.ok) {
              const data = await res.json();
              setItems(data);
            }
          } else {
            const errorData = await res.json();
            Swal.fire(
              'Error!',
              errorData.message || 'Something went wrong.',
              'error'
            )
          }
        } catch (error) {
          console.error('Error deleting data:', error);
          Swal.fire(
            'Error!',
            'An error occurred while deleting the user.',
            'error'
          )
        }
      }
    });
  };

   if (loading) {
  return <div className='text-center'><h1>Loading...</h1></div>; // หรือ return null เพื่อไม่ให้ render อะไร
}

  return (
    <>
    <br /><br /><br /><br />
    <div className="container">
      <div className="card">
        <div className="card-header">
          Users List
        </div>
        <div className="card-body">
          {loading ? (
            <div className="text-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <div className="row">
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th className='col-md-2 text-center'>#</th>
                    <th className='col-md-3'>First Name</th>
                    <th className='col-md-3'>Last Name</th>
                    <th className='col-md-2'>Username</th>
                    <th className='col-md-1'>Edit</th>
                    <th className='col-md-1'>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.id}>
                      <td className='text-center'>{item.id}</td>
                      <td>{item.firstname}</td>
                      <td>{item.lastname}</td>
                      <td>{item.username}</td>
                      <td><Link href={`/admin/users/edit/${item.id}`} className="btn btn-warning">Edit</Link></td>
                      <td><button className="btn btn-danger" type="button" onClick={() => handleDelete(item.id)}>Delete</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
    <br /><br />
    </>
  );
}