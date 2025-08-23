'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import styles from './users.module.css';
import Image from 'next/image';

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
        const res = await fetch('/api/users', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
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
      background: '#1e1e1e',
      color: '#fff'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(`/api/users/${id}`, {
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

  return (
    <div className={`container mt-5 text-white ${styles.userTableContainer}`}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className={styles.title}>Users Management</h1>
        
      </div>
      <div className="mb-4">
        <input
          type="text"
          className={`form-control ${styles.searchInput}`}
          placeholder="Search by name or username..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="table-responsive">
        <table className={`table align-middle ${styles.table}`}>
          <thead>
            <tr>
              <th scope="col">User</th>
              <th scope="col">Username</th>
              <th scope="col" className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((item) => (
              <tr key={item.id}>
                <td>
                  <div className="d-flex align-items-center">
                    <Image 
                      src={item.avatar || '/images/roblox2.png'} 
                      alt={`${item.firstname} ${item.lastname}`} 
                      width={45} 
                      height={45} 
                      className={styles.userAvatar}
                    />
                    <div>
                      <div className="fw-bold">{`${item.firstname} ${item.lastname}`}</div>
                    </div>
                  </div>
                </td>
                <td>{item.username}</td>
                <td className="text-center">
                  <Link href={`/admin/users/edit/${item.id}`} className="btn btn-sm btn-outline-primary me-2">
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
  );
}
