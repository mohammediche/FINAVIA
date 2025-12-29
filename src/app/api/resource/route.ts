import { NextResponse } from 'next/server';
import {sendEmail} from "@/lib/mail/mail";
import {ResourceClientTemplate} from "@/lib/mail/templates/ResourceClient";
import {ResourceAdminTemplate} from "@/lib/mail/templates/ResourceAdmin";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
        const pdfUrl = `${baseUrl}/docs/guide-finavia.pdf`;

        // 1. Send to Client (The PDF)
        await sendEmail({
            to: [{ email: body.email, name: body.firstName }],
            subject: "📥 Votre Guide Stratégique Finavia",
            htmlContent: ResourceClientTemplate(body, pdfUrl)
        });

        // 2. Send to Admin (The Info)
        await sendEmail({
            to: [{ email: "mohammediche@gmail.com", name: "Admin" }],
            subject: `🎁 Nouveau Lead PDF - ${body.company}`,
            htmlContent: ResourceAdminTemplate(body)
        });

        return NextResponse.json({ success: true });
    } catch (e: any) {
        return NextResponse.json({ success: false, message: e.message }, { status: 500 });
    }
}