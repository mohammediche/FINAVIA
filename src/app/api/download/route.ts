import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
    console.log('➡️ DOWNLOAD ROUTE HIT');

    try {
        const filePath = path.join(process.cwd(), 'public', 'docs', 'guide-finavia.pdf');

        if (!fs.existsSync(filePath)) {
            console.error('❌ FILE NOT FOUND');
            return new Response('File not found', { status: 404 });
        }

        // Explicitly tell TypeScript this is a Buffer
        const fileBuffer = fs.readFileSync(filePath) as Buffer;

        // Now .length will work without the red error
        const fileSize = fileBuffer.length;
        console.log('✅ File read, size:', fileSize);

        return new Response(fileBuffer, {
            status: 200,
            headers: {
                'Content-Type': 'application/octet-stream',
                'Content-Disposition': 'attachment; filename="guide-finavia.pdf"',
                'Content-Length': fileSize.toString(),
                'Cache-Control': 'no-store, no-cache, must-revalidate',
            },
        });
    } catch (error) {
        console.error('🔥 DOWNLOAD ERROR:', error);
        return new Response('Internal Server Error', { status: 500 });
    }
}