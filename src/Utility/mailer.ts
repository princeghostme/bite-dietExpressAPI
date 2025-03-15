import nodemailer from 'nodemailer';

export interface mailer {
    from?: string;
    to: string[];
    cc?: string[];
    bcc?: string[];
    subject?: string;
    body?: string;
    html?:string;
}

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "jriya0598@gmail.com",
        pass: "pzmh syeg mcco ohvl"
    }
});

export const sendemail: (mail: mailer) => Promise<boolean> = async ({ from = "jriya0598@gmail.com", to, cc, bcc, subject, body, html }) => {
    try {
        const mailOption = {
            from: from,
            to: to.join(', '),
            cc: cc?.join(', '),
            bcc: bcc?.join(', '),
            subject: subject || "",
            text: body || "",
            html : html
        };
        await transporter.sendMail(mailOption)
        return true;
    }
    catch {
        return false;
    }
}