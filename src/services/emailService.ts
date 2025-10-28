import emailjs from "@emailjs/browser";

interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const initEmailJS = (): void => {
  if (publicKey) {
    emailjs.init(publicKey);
  }
};

export const sendEmail = async (data: EmailData): Promise<void> => {
  if (!serviceId || !templateId || !publicKey) {
    const missing = [];
    if (!serviceId) missing.push("VITE_EMAILJS_SERVICE_ID");
    if (!templateId) missing.push("VITE_EMAILJS_TEMPLATE_ID");
    if (!publicKey) missing.push("VITE_EMAILJS_PUBLIC_KEY");
    throw new Error(
      `Credenciales de EmailJS no configuradas: ${missing.join(", ")}`
    );
  }

  const templateParams = {
    from_name: data.name,
    from_email: data.email,
    subject: data.subject,
    message: data.message,
  };

  try {
    await emailjs.send(serviceId, templateId, templateParams, publicKey);
  } catch (error: any) {
    if (error.status === 400 && error.text.includes("template ID")) {
      throw new Error(
        `Template ID no encontrado. Verifica tu dashboard de EmailJS.`
      );
    } else if (error.status === 400 && error.text.includes("service ID")) {
      throw new Error(
        `Service ID no encontrado. Verifica tu dashboard de EmailJS.`
      );
    }
    throw new Error(error.text || "Error al enviar el mensaje");
  }
};
