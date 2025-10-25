'use client';

import Image from "next/image";
import Link from "next/link";

export default function PoliticaPrivacidad() {

  return (
    <div className="min-h-screen bg-(--green-background) text-(--blanco)">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-(--green-secundary) shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="shrink-0">
              <Image
                src="/assets/logo/Logo-Probiose.png"
                alt="Probiose Ec Logo"
                width={168}
                height={56}
                className="h-14 w-auto"
              />
            </div>
            {/* Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                <a
                  href="/#about"
                  className="text-(--green-text) hover:text-white px-4 py-2 rounded-md text-base font-medium transition duration-300"
                >
                  Sobre nosotros
                </a>
                <a
                  href="/#productos"
                  className="text-(--green-text) hover:text-white px-4 py-2 rounded-md text-base font-medium transition duration-300"
                >
                  Productos
                </a>

                {/* Contact button (desktop) - same design as form button */}
                <a href="/#contact" className="group relative inline-flex items-center bg-(--green-primary) text-(--blanco) pl-8 pr-2 py-2 rounded-full font-semibold shadow-md overflow-hidden no-underline">
                  <span aria-hidden className="absolute inset-0 bg-white transform-gpu scale-x-0 scale-y-[3.5] origin-center group-hover:scale-x-[3.5] group-hover:scale-y-[3.5] transition-transform duration-600 ease-in-out z-0 rotate-45" />
                  <span className="relative z-10 leading-none transition-colors duration-600 ease-in-out group-hover:text-(--green-primary)">Contáctanos</span>
                  <span className="relative z-10 w-9 h-9 bg-(--yellow-accent) rounded-full flex items-center justify-center text-(--green-background) font-bold ml-3 transition-colors duration-600 ease-in-out group-hover:bg-(--green-primary) group-hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>

            {/* Mobile contact button: visible on small screens */}
            <div className="md:hidden">
              <a href="/#contact" className="group relative inline-flex items-center bg-(--green-primary) text-(--blanco) pl-6 pr-3 py-2 rounded-full font-semibold shadow-md overflow-hidden no-underline">
                <span aria-hidden className="absolute inset-0 bg-white transform-gpu scale-x-0 scale-y-[3.5] origin-center group-hover:scale-x-[3.5] group-hover:scale-y-[3.5] group-active:scale-x-[3.5] group-active:scale-y-[3.5] transition-transform duration-600 ease-in-out z-0 rotate-45" />
                <span className="relative z-10 text-sm leading-none transition-colors duration-600 ease-in-out group-hover:text-(--green-primary) group-active:text-(--green-primary)">Contáctanos</span>
                <span className="relative z-10 w-8 h-8 bg-(--yellow-accent) rounded-full flex items-center justify-center text-(--green-background) font-bold ml-2 transition-colors duration-600 ease-in-out group-hover:bg-(--green-primary) group-hover:text-white group-active:bg-(--green-primary) group-active:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-(--blanco) mb-8 text-center">
            Política de Privacidad
          </h1>

          <div className="bg-(--green-secundary) rounded-2xl p-8 shadow-xl space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-(--blanco) mb-4">1. Introducción</h2>
              <p className="text-(--green-text) leading-relaxed">
                En Probiose Ec, valoramos su privacidad y nos comprometemos a proteger su información personal. Esta Política de Privacidad explica cómo recopilamos, usamos y protegemos su información cuando visita nuestro sitio web o utiliza nuestros servicios.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-(--blanco) mb-4">2. Información que Recopilamos</h2>
              <p className="text-(--green-text) leading-relaxed mb-4">
                Podemos recopilar la siguiente información:
              </p>
              <ul className="list-disc list-inside text-(--green-text) space-y-2 ml-4">
                <li>Información de contacto: nombre, dirección de correo electrónico, número de teléfono.</li>
                <li>Información proporcionada voluntariamente: mensajes enviados a través de formularios de contacto.</li>
                <li>Datos técnicos: dirección IP, tipo de navegador, páginas visitadas (a través de cookies y herramientas analíticas).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-(--blanco) mb-4">3. Cómo Usamos su Información</h2>
              <p className="text-(--green-text) leading-relaxed mb-4">
                Utilizamos su información para:
              </p>
              <ul className="list-disc list-inside text-(--green-text) space-y-2 ml-4">
                <li>Responder a sus consultas y proporcionar servicios agrícolas especializados.</li>
                <li>Mejorar nuestro sitio web y servicios.</li>
                <li>Cumplir con obligaciones legales relacionadas con la protección fitosanitaria.</li>
                <li>Enviar comunicaciones relevantes sobre nuestros productos y servicios (con su consentimiento).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-(--blanco) mb-4">4. Compartir su Información</h2>
              <p className="text-(--green-text) leading-relaxed">
                No vendemos, alquilamos ni compartimos su información personal con terceros, excepto cuando sea necesario para proporcionar nuestros servicios o cuando lo exija la ley. Podemos compartir información con autoridades agrícolas competentes en cumplimiento de regulaciones fitosanitarias.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-(--blanco) mb-4">5. Cookies y Tecnologías Similares</h2>
              <p className="text-(--green-text) leading-relaxed">
                Utilizamos cookies para mejorar su experiencia en nuestro sitio web. Puede controlar el uso de cookies a través de la configuración de su navegador. Algunas cookies son necesarias para el funcionamiento del sitio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-(--blanco) mb-4">6. Seguridad de la Información</h2>
              <p className="text-(--green-text) leading-relaxed">
                Implementamos medidas de seguridad técnicas y organizativas para proteger su información personal contra acceso no autorizado, alteración, divulgación o destrucción.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-(--blanco) mb-4">7. Sus Derechos</h2>
              <p className="text-(--green-text) leading-relaxed mb-4">
                Tiene derecho a:
              </p>
              <ul className="list-disc list-inside text-(--green-text) space-y-2 ml-4">
                <li>Acceder a su información personal.</li>
                <li>Rectificar información inexacta.</li>
                <li>Solicitar la eliminación de sus datos.</li>
                <li>Oponerse al procesamiento de sus datos.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-(--blanco) mb-4">8. Cambios a esta Política</h2>
              <p className="text-(--green-text) leading-relaxed">
                Podemos actualizar esta Política de Privacidad periódicamente. Le notificaremos sobre cambios significativos publicando la nueva política en nuestro sitio web.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-(--blanco) mb-4">9. Contacto</h2>
              <p className="text-(--green-text) leading-relaxed">
                Si tiene preguntas sobre esta Política de Privacidad, puede contactarnos:
              </p>
              <div className="text-(--green-text) mt-4 space-y-2">
                <p><strong>Email:</strong> probiose.cultivosano@outlook.com</p>
                <p><strong>Teléfono:</strong> +593 93 946 9787</p>
                <p><strong>Dirección:</strong> Vinces-Ecuador</p>
              </div>
            </section>

            <div className="pt-6 border-t border-(--green-primary)">
              <p className="text-(--green-text) text-sm">
                Última actualización: Octubre 2025
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/"
              className="inline-flex items-center bg-(--green-primary) text-(--blanco) px-6 py-3 rounded-full font-semibold shadow-md hover:bg-(--green-secundary) transition duration-300"
            >
              Volver al Inicio
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="pt-8 pb-0 px-4 bg-(--green-secundary)">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Left Side */}
            <div className="flex flex-col items-center md:items-start md:pl-12 space-y-4">
              {/* Logo */}
              <div>
                <Image
                  src="/assets/logo/Logo-Probiose.png"
                  alt="Probiose Ec Logo"
                  width={360}
                  height={120}
                  className="h-[120px] w-auto"
                />
              </div>
              {/* Persuasive Text */}
              <p className="text-(--green-text) text-center md:text-left">
                Especialistas en soluciones agrícolas sostenibles. ¡Contáctanos y transforma tu producción!
              </p>
            </div>
            {/* Middle Side */}
            <div className="flex flex-col items-center md:items-start space-y-6 pb-8 md:ml-12 text-center md:text-left">
              {/* Title */}
              <h3 className="text-(--blanco) font-bold text-xl mb-4">Enlaces</h3>
              {/* Quick Access Links */}
              <a
                href="/#about"
                className="text-(--green-text) hover:text-white transition duration-300"
              >
                Sobre nosotros
              </a>
              <a
                href="/#productos"
                className="text-(--green-text) hover:text-white transition duration-300"
              >
                Productos
              </a>
              <a
                href="/#contact"
                className="text-(--green-text) hover:text-white transition duration-300"
              >
                Contáctanos
              </a>
              <a
                href="/politica-privacidad"
                className="text-(--green-text) hover:text-(--verde-claro-titulos) transition duration-300"
              >
                Política de Privacidad
              </a>
            </div>
            {/* Right Side */}
            <div className="flex flex-col items-center md:items-start space-y-4">
              {/* Title */}
              <h3 className="text-(--blanco) font-bold text-xl">Contáctanos</h3>
              {/* Contact Info */}
              <ul className="space-y-4">
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-(--green-primary) flex items-center justify-center text-(--blanco)">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-(--green-text) text-sm">¿Tienes preguntas?</div>
                    <div className="text-(--blanco) font-semibold">+593 93 946 9787</div>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-(--green-primary) flex items-center justify-center text-(--blanco)">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-(--green-text) text-sm">Envía un correo</div>
                    <div className="text-(--blanco) font-semibold">probiose.cultivosano@outlook.com</div>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-(--green-primary) flex items-center justify-center text-(--blanco)">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-(--green-text) text-sm">Visítanos</div>
                    <div className="text-(--blanco) font-semibold">Vinces-Ecuador</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-center bg-(--green-background) py-4 space-y-4 md:space-y-0 md:space-x-4 rounded-t-2xl">
            {/* Social Icons */}
            <div className="flex space-x-4">
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-(--green-primary) hover:bg-(--verde-claro-titulos) rounded-full flex items-center justify-center transition duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-(--blanco)" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </a>
              <a
                href="mailto:needhelp@company.com"
                className="w-10 h-10 bg-(--green-primary) hover:bg-(--verde-claro-titulos) rounded-full flex items-center justify-center transition duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-(--blanco)" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
            <p className="text-(--green-text) text-center">
              © 2025 Probiose Ec. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}