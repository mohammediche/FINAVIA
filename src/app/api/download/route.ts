import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

export async function GET() {
    try {
        // Path to your PDF in the public folder
        const filePath = path.join(process.cwd(), 'public', 'docs', 'guide-finavia.pdf');

        // Check if file exists to prevent server crash
        if (!fs.existsSync(filePath)) {
            return new NextResponse("File not found", { status: 404 });
        }

        const fileBuffer = fs.readFileSync(filePath);

        // Return the file with headers that FORCE download
        return new NextResponse(fileBuffer, {
            headers: {
                'Content-Type': 'application/pdf',
                // "attachment" tells the browser to download rather than preview
                'Content-Disposition': 'attachment; filename="guide-finavia.pdf"',
            },
        });
    } catch (error) {
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}