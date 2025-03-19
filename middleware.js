// filepath: /pages/_middleware.js
import { NextResponse } from 'next/server';

export function middleware(req) {
  // Temporarily bypass authentication
  return NextResponse.next();
}