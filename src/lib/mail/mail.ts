interface SendEmailProps {
    to: { email: string; name: string }[];
    subject: string;
    htmlContent: string;
    sender?: { name: string; email: string };
    replyTo?: { email: string; name: string };
}

export async function sendEmail({ to, subject, htmlContent, sender, replyTo }: SendEmailProps) {
    const apiKey = process.env.BREVO_API_KEY;

    if (!apiKey) throw new Error("BREVO_API_KEY is missing");

    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'api-key': apiKey,
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            sender: sender || { name: "Finavia", email: "mohammediche@gmail.com" },
            to,
            subject,
            htmlContent,
            replyTo: replyTo || undefined
        }),
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to send email");
    }

    return await response.json();
}