import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
    console.log('--- 🚀 STARTING EMAIL PROCESS ---');
    try {
        const body = await request.json();
        const { email, name } = body;
        console.log('📥 Request Data:', { email, name });

        if (!email) {
            console.error('❌ Missing Email');
            return NextResponse.json({ error: "Email is required" }, { status: 400 });
        }

        const filePath = path.join(process.cwd(), 'public', 'docs', 'guide-finavia.pdf');
        console.log('📁 Checking file at:', filePath);

        if (!fs.existsSync(filePath)) {
            console.error("❌ PDF File missing at path");
            return NextResponse.json({ error: "File not found" }, { status: 404 });
        }

        const fileBuffer = fs.readFileSync(filePath) as Buffer;
        const base64Content = fileBuffer.toString('base64');
        console.log('✅ File read. Buffer length:', fileBuffer.length, 'Base64 length:', base64Content.length);

        console.log('📡 Calling Brevo API...');
        const brevoResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'api-key': process.env.BREVO_API_KEY as string,
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                sender: { name: 'Finavia', email: 'contact@finavia.fr' },
                to: [{ email: email }],
                subject: 'Votre Guide Finavia',
                htmlContent: `<p>Bonjour ${name || ''}, Merci de votre intérêt. Le guide est en pièce jointe.</p>`,
                // FIX: It must be 'attachment', NOT 'attachments'
                attachment: [
                    {
                        content: base64Content,
                        name: 'guide-finavia.pdf'
                    }
                ]
            }),
        });

        const result = await brevoResponse.json();
        console.log('📩 Brevo API Status:', brevoResponse.status);
        console.log('📩 Brevo API Result:', JSON.stringify(result));

        if (!brevoResponse.ok) {
            throw new Error(`Brevo Error: ${JSON.stringify(result)}`);
        }

        return NextResponse.json({ success: true, data: result });

    } catch (error: any) {
        console.error("🔥 CRITICAL POST ERROR:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}