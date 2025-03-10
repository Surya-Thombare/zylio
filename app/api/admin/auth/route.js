// app/api/admin/auth/route.js
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { accessCode } = body;

    // Get the admin access code from environment variables
    const validAccessCode = process.env.ADMIN_ACCESS_CODE;

    if (!validAccessCode) {
      console.error('ADMIN_ACCESS_CODE environment variable is not set');
      return NextResponse.json(
        { message: 'Server configuration error. Please contact support.' },
        { status: 500 }
      );
    }

    // Check if the provided code matches the one in .env
    if (accessCode === validAccessCode) {
      return NextResponse.json(
        { success: true, message: 'Authentication successful' },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { success: false, message: 'Invalid access code' },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error('Admin authentication error:', error);
    return NextResponse.json(
      { message: 'An error occurred during authentication' },
      { status: 500 }
    );
  }
}