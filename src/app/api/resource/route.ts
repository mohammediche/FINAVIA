import { NextResponse } from 'next/server';
import { sendEmail } from "@/lib/mail/mail";
import { ResourceClientTemplate } from "@/lib/mail/templates/ResourceClient";
import { ResourceAdminTemplate } from "@/lib/mail/templates/ResourceAdmin";
import fs from 'fs';
import path from 'path';

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const filePath = path.join(process.cwd(), 'public', 'docs', 'guide-finavia.pdf');

        let attachment = undefined;

        if (fs.existsSync(filePath)) {
            const fileBuffer = fs.readFileSync(filePath) as Buffer;

            attachment = [
                {
                    content: fileBuffer.toString('base64'),
                    name: 'guide-finavia.pdf',
                    type: 'application/pdf'
                }
            ];
        }

        // Send to Client
        await sendEmail({
            to: [{ email: body.email, name: body.firstName }],
            subject: "📥 Votre Guide Stratégique Finavia",
            htmlContent: ResourceClientTemplate(body),
            attachment: attachment
        });

        // Send to Admin
        const adminEmail = process.env.ADMIN_EMAIL;
        if (adminEmail) {
            await sendEmail({
                to: [{ email: adminEmail, name: "Admin" }],
                subject: `🎁 Nouveau Lead PDF - ${body.company}`,
                htmlContent: ResourceAdminTemplate(body)
            });
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        return NextResponse.json({ success: false, message }, { status: 500 });
    }
}