 import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    // Forward only the Authorization header
    const token = request.headers.get('Authorization');
    const headers = new Headers();
    if (token) {
      headers.append('Authorization', token);
    }
    headers.append('Content-Type', 'application/json');

    const res = await fetch(`https://backend-7tnx.vercel.app/api/users${id ? `/${id}` : ''}`, {
      headers: headers,
      next: { revalidate: 0 },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    console.log('Data from backend:', JSON.stringify(data, null, 2));
    
    if (Array.isArray(data)) {
      return NextResponse.json(data);
    }

    if (data && Array.isArray(data.data)) {
      return NextResponse.json(data.data);
    }

    return NextResponse.json([]);
    
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json(
      { error: 'เกิดข้อผิดพลาดในการดึงข้อมูลผู้ใช้' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const res = await fetch('https://backend-7tnx.vercel.app/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(body)
    });

    const data = await res.json();

    if (!res.ok) {
      console.error('Backend error:', data);
      return NextResponse.json(
        { error: 'ไม่สามารถสมัครสมาชิกได้', message: data.message },
        { status: res.status }
      );
    }

    return NextResponse.json(data);
    
  } catch (error) {
    console.error('Register error:', error);
    return NextResponse.json(
      { error: 'เกิดข้อผิดพลาดในการสมัครสมาชิก' },
      { status: 500 }
    );
  }
}