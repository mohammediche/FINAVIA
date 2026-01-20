import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

export async function GET() {
    try {

        const filePath = path.join(process.cwd(), 'public', 'docs', 'guide-finavia.pdf');

        if (!fs.existsSync(filePath)) {
            console.error("PDF NOT FOUND AT PATH:", filePath);
            return new NextResponse("Document non trouvé", { status: 404 });
        }

        // 1. Get file stats to get the size (cleanest way to avoid .length errors)
        const stats = fs.statSync(filePath);
        const fileSize = stats.size;

        const fileBuffer = fs.readFileSync(filePath);

        // 4. Return the response with "Force Download" headers
        return new NextResponse(fileBuffer, {
            headers: {
                // 'application/octet-stream' prevents the browser from trying to 'preview' it
                'Content-Type': 'application/octet-stream',
                'Content-Disposition': 'attachment; filename="guide-finavia.pdf"',
                'Content-Length': fileSize.toString(),
                'Cache-Control': 'no-cache',
            },
        });
    } catch (error) {
        console.error("Download error:", error);
        return new NextResponse("Erreur serveur", { status: 500 });
    }
}