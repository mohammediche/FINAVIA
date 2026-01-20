interface SendEmailProps {
    to: { email: string; name: string }[];
    subject: string;
    htmlContent: string;
    replyTo?: { email: string; name: string };
    attachment?: { content: string; name: string }[];
}

export async function sendEmail({ to, subject, htmlContent, replyTo, attachment }: SendEmailProps) {
    const apiKey = process.env.BREVO_API_KEY;
    const adminEmail = process.env.ADMIN_EMAIL;

    if (!apiKey) throw new Error("BREVO_API_KEY is missing");
    if (!adminEmail) throw new Error("ADMIN_EMAIL is missing");

    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'api-key': apiKey,
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            sender: { name: "Finavia", email: adminEmail },
            to,
            subject,
            htmlContent,
            replyTo: replyTo || undefined,
            attachment: attachment
        }),
    });

    if (!response.ok) {
        const error = await response.json();
        console.error("❌ BREVO ERROR:", error);
        throw new Error(error.message || "Failed to send email");
    }

    const result = await response.json();
    console.log("✅ BREVO SUCCESS:", result);
    return result;
}