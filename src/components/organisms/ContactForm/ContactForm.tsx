import React, { useState } from "react";
import FormField from "@molecules/FormField";
import Button from "@atoms/Button";
import Text from "@atoms/Text";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
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

    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es requerido";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      // Aquí iría la lógica para enviar el formulario
      alert("¡Mensaje enviado con éxito!");
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <section
      id="contact"
      className="py-12 md:py-16 lg:py-20 bg-gray-50 px-4 md:px-0"
    >
      <div className="container-custom">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <Text variant="h2" className="mb-3 md:mb-4 text-3xl md:text-4xl">
              Contáctame
            </Text>
            <Text variant="p" className="text-base md:text-xl text-gray-600">
              ¿Tienes un proyecto en mente? ¡Hablemos!
            </Text>
          </div>
          <form
            onSubmit={handleSubmit}
            className="bg-white p-5 md:p-8 rounded-lg shadow-md"
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
            <div className="mb-4">
              <label htmlFor="message" className="block mb-2">
                <Text variant="span" className="font-medium text-gray-700">
                  Mensaje
                  <span className="text-red-500 ml-1">*</span>
                </Text>
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tu mensaje..."
                required
                rows={5}
                className={`
                  w-full px-4 py-2 border border-gray-300 rounded-lg
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                  transition-all duration-200
                  ${errors.message ? "border-red-500" : ""}
                `}
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
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
            >
              Enviar Mensaje
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
