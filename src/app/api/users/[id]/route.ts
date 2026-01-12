import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const token = request.headers.get('Authorization');
    
    console.log('Fetching user with ID:', id);
    console.log('Token:', token ? 'Present' : 'Missing');

    const res = await fetch(`https://backend-7tnx.vercel.app/api/users/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token || '',
      },
      next: { revalidate: 0 },
    });

    console.log('Backend response status:', res.status);

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      console.error('Backend error:', errorData);
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    console.log('User data fetched successfully');
    return NextResponse.json(data);
    
  } catch (error) {
    console.error('Error fetching user:', error);
    return NextResponse.json(
      { error: 'เกิดข้อผิดพลาดในการดึงข้อมูลผู้ใช้' },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await request.json();
    const token = request.headers.get('Authorization');

    console.log('Updating user with ID:', id);
    console.log('Request body:', body);
    console.log('Token:', token ? 'Present' : 'Missing');

    const res = await fetch(`https://backend-7tnx.vercel.app/api/users/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `${token}`,
      },
      body: JSON.stringify(body)
    });

    const data = await res.json();
    console.log('Backend response status:', res.status);
    console.log('Backend response data:', data);

    if (!res.ok) {
      console.error('Backend error:', data);
      return NextResponse.json(
        { 
          error: 'ไม่สามารถอัปเดตผู้ใช้ได้', 
          message: data.message || data.error || 'Unknown error',
          status: res.status 
        },
        { status: res.status }
      );
    }

    return NextResponse.json(data);
    
  } catch (error) {
    console.error('Update error:', error);
    return NextResponse.json(
      { 
        error: 'เกิดข้อผิดพลาดในการอัปเดตผู้ใช้',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const res = await fetch(`https://backend-vert-eight-76.vercel.app/api/users/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    return NextResponse.json({ message: 'User deleted successfully' });
    
  } catch (error) {
    console.error('Error deleting user:', error);
    return NextResponse.json(
      { error: 'เกิดข้อผิดพลาดในการลบผู้ใช้' },
      { status: 500 }
    );
  }
}