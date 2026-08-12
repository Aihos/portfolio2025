import { NextResponse } from "next/server";
import { Resend } from "resend";

function getResend(): Resend {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("Missing Resend API key");
  }
  return new Resend(apiKey);
}

export async function POST(request: Request) {
  try {
    const { nom, prenom, email, message } = await request.json();

    if (!nom || !prenom || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const resend = getResend();

    const from = "hugoleray@ohia-agence.fr";
    const to = process.env.RESEND_TO_EMAIL;

    if (!from || !to) {
      return NextResponse.json(
        { error: "Missing email configuration" },
        { status: 500 }
      );
    }

    await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Nouveau message de ${prenom} ${nom}`,
      text: [
        `Prenom: ${prenom}`,
        `Nom: ${nom}`,
        `Email: ${email}`,
        "",
        "Message:",
        message
      ].join("\n")
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
