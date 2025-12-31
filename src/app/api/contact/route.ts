import { NextResponse } from 'next/server';
import {ContactAdminTemplate} from "@/lib/mail/templates/contact";
import {sendEmail} from "@/lib/mail/mail";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const adminEmail = process.env.ADMIN_EMAIL;
        if (!adminEmail) throw new Error("ADMIN_EMAIL is missing");
        
        await sendEmail({
            to: [{ email: adminEmail, name: "Admin" }],
            subject: `[Lead Site] ${body.name}`,
            htmlContent: ContactAdminTemplate(body),
            replyTo: { email: body.email, name: body.name }
        });
        return NextResponse.json({ success: true });
    } catch {
        return NextResponse.json({ success: false }, { status: 500 });
    }
}