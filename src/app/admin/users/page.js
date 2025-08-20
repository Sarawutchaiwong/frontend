'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

export default function User() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
      return;
    }

    async function getUsers() {
      try {
        const res = await fetch('/api/proxy/users', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        if (!res.ok) {
          console.error('Failed to fetch data');
          setLoading(false); // Stop loading on error
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
    // No interval fetching for now to avoid excessive API calls during debugging
    // const interval = setInterval(getUsers, 5000);
    // return () => clearInterval(interval);
  }, [router]);

  const handleDelete = async (id) => {
    const token = localStorage.getItem('token');
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(`/api/proxy/users/${id}`, {
            method: 'DELETE',
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          });

          if (res.ok) {
            Swal.fire('Deleted!', 'The user has been deleted.', 'success');
            setItems(items.filter((item) => item.id !== id));
          } else {
            const errorData = await res.json();
            Swal.fire('Error!', errorData.message || 'Something went wrong.', 'error');
          }
        } catch (error) {
          console.error('Error deleting data:', error);
          Swal.fire('Error!', 'An error occurred while deleting the user.', 'error');
        }
      }
    });
  };

  const filteredItems = items.filter(
    (item) =>
      (item.firstname && item.firstname.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (item.lastname && item.lastname.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (item.username && item.username.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1 className="mb-0">Users List</h1>
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search users..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="card shadow-sm">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-striped table-hover align-middle">
              <thead className="table-dark">
                <tr>
                  <th className="text-center">#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredItems.map((item) => (
                  <tr key={item.id}>
                    <td className="text-center">{item.id}</td>
                    <td>{item.firstname}</td>
                    <td>{item.lastname}</td>
                    <td>{item.username}</td>
                    <td className="text-center">
                      <Link href={`/admin/users/edit/${item.id}`} className="btn btn-sm btn-outline-warning me-2">
                        Edit
                      </Link>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        type="button"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
