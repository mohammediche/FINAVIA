import { NextResponse } from 'next/server';
import {sendEmail} from "@/lib/mail/mail";
import {ResourceClientTemplate} from "@/lib/mail/templates/ResourceClient";
import {ResourceAdminTemplate} from "@/lib/mail/templates/ResourceAdmin";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
        const pdfUrl = `${baseUrl}/api/download?t=${Date.now()}`;

        // 1. Send to Client (The PDF)
        await sendEmail({
            to: [{ email: body.email, name: body.firstName }],
            subject: "📥 Votre Guide Stratégique Finavia",
            htmlContent: ResourceClientTemplate(body, pdfUrl)
        });

        // 2. Send to Admin (The Info)
        const adminEmail = process.env.ADMIN_EMAIL;
        if (!adminEmail) throw new Error("ADMIN_EMAIL is missing");
        
        await sendEmail({
            to: [{ email: adminEmail, name: "Admin" }],
            subject: `🎁 Nouveau Lead PDF - ${body.company}`,
            htmlContent: ResourceAdminTemplate(body)
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        return NextResponse.json({ success: false, message }, { status: 500 });
    }
}