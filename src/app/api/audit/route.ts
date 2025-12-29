import { NextResponse } from 'next/server';
import {sendEmail} from "@/lib/mail/mail";
import {AuditAdminTemplate} from "@/lib/mail/templates/audit";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        await sendEmail({
            to: [{ email: "mohammediche@gmail.com", name: "Admin" }],
            subject: `📊 Audit : ${body.company}`,
            htmlContent: AuditAdminTemplate(body),
            replyTo: { email: body.email, name: body.firstName }
        });
        return NextResponse.json({ success: true });
    } catch (e) { return NextResponse.json({ success: false }, { status: 500 }); }
}