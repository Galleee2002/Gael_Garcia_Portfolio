import React, { useState } from "react";
import FormField from "@molecules/FormField";
import TextArea from "@atoms/TextArea";
import Button from "@atoms/Button";
import Text from "@atoms/Text";
import useScrollReveal from "@hooks/useScrollReveal";
import { sendEmail } from "@/services/emailService";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const titleReveal = useScrollReveal<HTMLDivElement>({
    direction: "up",
    duration: 700,
    delay: 0,
  });

  const formReveal = useScrollReveal<HTMLFormElement>({
    direction: "up",
    duration: 700,
    delay: 150,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "El email no es válido";
      isValid = false;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "El asunto es requerido";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es requerido";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      setSubmitStatus(null);

      try {
        await sendEmail(formData);
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } catch (error) {
        setSubmitStatus("error");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section
      id="contact"
      className="pt-8 md:pt-10 lg:pt-12 pb-12 md:pb-16 lg:pb-20 bg-gray-50 px-4 md:px-0"
    >
      <div className="container-custom">
        <div className="max-w-2xl mx-auto">
          <div
            ref={titleReveal.ref}
            className={`text-center mb-8 md:mb-12 ${titleReveal.className}`}
          >
            <Text variant="h2" className="mb-3 md:mb-4 text-3xl md:text-4xl">
              Contáctame
            </Text>
            <Text variant="p" className="text-base md:text-xl text-gray-600">
              ¿Tienes un proyecto en mente? ¡Hablemos!
            </Text>
          </div>
          <form
            ref={formReveal.ref}
            onSubmit={handleSubmit}
            className={`bg-white p-5 md:p-8 rounded-lg shadow-md ${formReveal.className}`}
          >
            <FormField
              label="Nombre"
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange as any}
              placeholder="Tu nombre"
              required
              error={errors.name}
            />
            <FormField
              label="Email"
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange as any}
              placeholder="tu@email.com"
              required
              error={errors.email}
            />
            <FormField
              label="Asunto"
              type="text"
              name="subject"
              id="subject"
              value={formData.subject}
              onChange={handleChange as any}
              placeholder="Asunto del mensaje"
              required
              error={errors.subject}
            />
            <div className="mb-4">
              <label htmlFor="message" className="block mb-2">
                <Text variant="span" className="font-medium text-gray-700">
                  Mensaje
                  <span className="text-red-500 ml-1">*</span>
                </Text>
              </label>
              <TextArea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tu mensaje..."
                required
                rows={5}
                error={errors.message}
              />
              {errors.message && (
                <Text
                  variant="span"
                  className="text-red-500 text-sm mt-1 block"
                >
                  {errors.message}
                </Text>
              )}
            </div>
            {submitStatus === "success" && (
              <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-lg">
                <Text variant="p" className="text-sm">
                  ¡Mensaje enviado con éxito! Te responderé pronto.
                </Text>
              </div>
            )}
            {submitStatus === "error" && (
              <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">
                <Text variant="p" className="text-sm">
                  Error al enviar el mensaje. Por favor, intenta de nuevo.
                </Text>
              </div>
            )}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
