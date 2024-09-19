"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Footer from "@/app/componentes/footer";
import Header from "@/app/componentes/header";

const Tecsistemas = () => {
  const [email, setEmail] = useState("");
  const programa = "Tecnicatura Superior en Análisis de Sistemas.";

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/requestinfo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, programa }),
      });

      if (response.ok) {
        alert("Correo enviado correctamente");
        setEmail("");
      } else {
        alert("Hubo un error al enviar el correo");
      }
    } catch (error) {
      console.error("Error al enviar el correo:", error);
      alert("Hubo un error al enviar el correo");
    }
  };

  return (
    <div>
      <Header />
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container grid gap-8 px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img
              src="/Tecsistemas.webp"
              width={600}
              height={400}
              alt="Carrera universitaria"
              className="rounded-lg object-cover w-full aspect-[3/2]"
            />
            <div className="grid gap-4">
              <div className="grid gap-2">
                <h2 className="text-black text-3xl font-bold tracking-tight">
                  {programa}
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Duración: 3 años
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Título: Técnico Superior en Analista de Sistemas.
                </p>
              </div>
              <div className="grid gap-2">
                <h3 className="text-black text-xl font-semibold">
                  Perfil Profesional
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Estarán capacitados para diagnosticar necesidades de
                  información de los usuarios y diseñar nuevos sistemas o
                  modificar los existentes. Podrá integrarse con éxito a equipos
                  de trabajo dedicados a los sistemas informáticos o al área de
                  sistemas de cualquier empresa, podrá también desarrollarlo
                  como autónomo de manera remota y/o presencial.
                </p>
              </div>
              <div className="grid gap-2">
                <h3 className="text-black text-xl font-semibold">
                  Requisitos de Ingreso
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Se deberá presentar una carpeta colgante. Título de Nivel
                  Secundario, original y fotocopia. Tres fotos color 4 x 4.
                  Fotocopia del DNI.
                </p>
              </div>
              <div className="grid gap-2">
                <h3 className="text-black text-xl font-semibold">
                  Áreas de Trabajo
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Pueden desempeñarse en diversas áreas laborales, tales como:
                  <br />
                  Desarrollo de Software, Administración de Redes, Soporte
                  Técnico, Análisis de Datos, Consultoría Tecnológica,
                  Desarrollo Web, Seguridad Informática.
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto w-full max-w-sm space-y-2">
            <form className="flex space-x-2" onSubmit={handleSubmit}>
              <Input
                type="email"
                placeholder="Ingresa tu correo electrónico"
                className="max-w-lg flex-1"
                value={email}
                onChange={handleEmailChange}
                required
              />
              <Button
                type="submit"
                className="relative group bg-[#722F37] hover:bg-[#722F37]/80 rounded-full"
              >
                Solicitar Información{" "}
              </Button>
            </form>
            <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
              Envía tu información para recibir más detalles sobre la carrera de
              Técnico Superior en Analista de Sistemas.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Tecsistemas;