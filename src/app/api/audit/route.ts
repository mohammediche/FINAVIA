import { NextResponse } from 'next/server';
import {sendEmail} from "@/lib/mail/mail";
import {AuditAdminTemplate} from "@/lib/mail/templates/audit";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const adminEmail = process.env.ADMIN_EMAIL;
        if (!adminEmail) throw new Error("ADMIN_EMAIL is missing");
        
        await sendEmail({
            to: [{ email: adminEmail, name: "Admin" }],
            subject: `📊 Audit : ${body.company}`,
            htmlContent: AuditAdminTemplate(body),
            replyTo: { email: body.email, name: body.firstName }
        });
        return NextResponse.json({ success: true });
    } catch {
        return NextResponse.json({ success: false }, { status: 500 });
    }
}