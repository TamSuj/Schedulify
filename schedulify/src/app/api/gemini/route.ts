import { NextResponse } from 'next/server';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { Calendar } from '@fullcalendar/core';
import googleCalendarPlugin from '@fullcalendar/google-calendar';

// Load environment variables from .env file
dotenv.config();

// Ensure API key is present
const apiKey = 'AIzaSyD85e4kObVmZLNcjr1HQJBEFDgFkUltsfw';
//const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  throw new Error('GEMINI_API_KEY environment variable is not set.');
}

// Initialize the GoogleGenerativeAI with the API key
const genAI = new GoogleGenerativeAI(apiKey);

interface RequestBody {
  input: string;
}

export async function POST(request: Request) {
  try {


    // Get the generative model
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    // Parse the request body
    const body: RequestBody = await request.json();
    console.log('Request Body:', body); // Debugging log

    // Extract the prompt
    const { input:prompt } = body;
    console.log("The prompt is ", prompt);

    // Generate content based on the prompt
    const result = await model.generateContent(prompt);
    const text = result.response.text();
    console.log("The response is text, ", text);

    return NextResponse.json(text);
  } catch (error: any) {
    console.error('Error:', error); // Log the error for debugging
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// let calendar = new Calendar(calendarEl, {
//   plugins: [ googleCalendarPlugin ],
//   googleCalendarApiKey: 'AIzaSyBOaBpjRnkfateuafPtD3_IE_-YZMfMdiE',
//   events: {
//     googleCalendarId: '9a090e5f7478a662ee8cbd7d9ea4b2053bdf77caf3999e338304962175e63b7a@group.calendar.google.com'
//   }
// });