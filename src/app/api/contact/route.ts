import { NextResponse } from 'next/server';
import {ContactAdminTemplate} from "@/lib/mail/templates/contact";
import {sendEmail} from "@/lib/mail/mail";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        await sendEmail({
            to: [{ email: "mohammediche@gmail.com", name: "Admin" }],
            subject: `[Lead Site] ${body.name}`,
            htmlContent: ContactAdminTemplate(body),
            replyTo: { email: body.email, name: body.name }
        });
        return NextResponse.json({ success: true });
    } catch (e) { return NextResponse.json({ success: false }, { status: 500 }); }
}