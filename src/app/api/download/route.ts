import { NextResponse } from 'next/server';
import path from 'path';
import { readFile, stat } from 'fs/promises'; // Use promises for cleaner types
import { existsSync } from 'fs';

export const dynamic = 'force-dynamic';
export const revalidate = 0; // Disable cache completely
export const fetchCache = 'force-no-store'; // Ensure no fetch results are stored

export async function GET() {
    console.log('➡️ DOWNLOAD ROUTE HIT');

    try {
        const filePath = path.join(process.cwd(), 'public', 'docs', 'guide-finavia.pdf');

        if (!existsSync(filePath)) {
            console.error('❌ FILE NOT FOUND');
            return new Response('File not found', { status: 404 });
        }

        // 1. Get file size using stat (standard number)
        const fileStats = await stat(filePath);

        // 2. Read file as a Buffer then convert to a Blob
        // Blobs are universally accepted by the Response constructor
        const fileBuffer = await readFile(filePath);
        const blob = new Blob([fileBuffer], { type: 'application/octet-stream' });

        console.log('✅ File ready, size:', fileStats.size);

        return new Response(blob, {
            status: 200,
            headers: {
                'Content-Type': 'application/octet-stream',
                'Content-Disposition': 'attachment; filename="guide-finavia.pdf"',
                'Content-Length': fileStats.size.toString(),
                'Cache-Control': 'no-store, no-cache, must-revalidate',
            },
        });
    } catch (error) {
        console.error('🔥 DOWNLOAD ERROR:', error);
        return new Response('Internal Server Error', { status: 500 });
    }
}