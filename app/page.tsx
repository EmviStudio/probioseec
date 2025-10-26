'use client';

import Image from "next/image";
import { useEffect, useState } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "https://assets.probioseec.com/archivos/desinfeccion01_probiose.jpeg",
    "https://assets.probioseec.com/archivos/desinfeccion02_probiose.jpeg"
  ];

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      if (window.scrollY > heroHeight - 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-(--green-background) text-(--blanco)">
      {/* Navbar */}
      <nav className={`fixed top-0 w-full bg-(--green-secundary) shadow-lg z-50 transition-transform duration-500 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <a href="/">
              <div className="shrink-0">
                <Image
                  src="https://assets.probioseec.com/logos/logo_probiose.png"
                  alt="Probiose Ec Logo"
                  width={85}
                  height={56}
                  className="h-14 w-[85px]"
                />
              </div>
            </a>
            {/* Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                <a
                  href="#about"
                  className="text-(--green-text) hover:text-white px-4 py-2 rounded-md text-base font-medium transition duration-300"
                >
                  Sobre nosotros
                </a>
                <a
                  href="#productos"
                  className="text-(--green-text) hover:text-white px-4 py-2 rounded-md text-base font-medium transition duration-300"
                >
                  Productos
                </a>

                {/* Contact button (desktop) - same design as form button */}
                <a href="#contact" className="group relative inline-flex items-center bg-(--green-primary) text-(--blanco) pl-8 pr-2 py-2 rounded-full font-semibold shadow-md overflow-hidden no-underline">
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
              <a href="#contact" className="group relative inline-flex items-center bg-(--green-primary) text-(--blanco) pl-6 pr-3 py-2 rounded-full font-semibold shadow-md overflow-hidden no-underline">
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

      {/* Hero Section - Full Screen */}
      <section id="hero" className="relative flex min-h-screen items-center justify-center px-4 overflow-hidden">
        {/* Video Background */}
        <video
          src="https://assets.probioseec.com/archivos/bananera_background.mp4"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
        ></video>
        {/* Green Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-(--green-secundary) opacity-60 z-10"></div>
        {/* Content */}
        <div className="relative z-20 text-center">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-(--blanco) mb-2">
            Soluciones Agrónomas
          </h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-(--blanco) mb-4">
            Para Proteger su Inversión
          </h1>
                    <p className="text-lg md:text-xl text-(--blanco) max-w-2xl mx-auto">
            Plagas devastadoras como la Ralstonia Solanacearum Raza 2, (Moko), no solo amenazan con pérdidas de producción, sino que también exigen una respuesta técnica y legal.
          </p>
          <a href="#images" className="group relative inline-flex items-center bg-(--green-primary) text-(--blanco) pl-12 pr-3 py-3 rounded-full font-semibold shadow-md overflow-hidden transition mt-12">
            <span aria-hidden className="absolute inset-0 bg-white transform-gpu scale-x-0 scale-y-[3.5] origin-center group-hover:scale-x-[3.5] group-hover:scale-y-[3.5] group-active:scale-x-[3.5] group-active:scale-y-[3.5] transition-transform duration-600 ease-in-out z-0 rotate-45"></span>
            <span className="relative z-10 leading-none transition-colors duration-600 ease-in-out group-hover:text-(--green-primary) group-active:text-(--green-primary)">Conocer Más</span>
            <div className="relative z-10 w-9 h-9 bg-(--yellow-accent) rounded-full flex items-center justify-center text-(--green-background) font-bold ml-3 group-hover:bg-(--green-primary) group-hover:text-white group-active:bg-(--green-primary) group-active:text-white transition-colors duration-600 ease-in-out">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </a>
        </div>
      </section>

      {/* Images Section below Hero */}
      <section id="images" className="relative z-30 pt-20 pb-20">
        <div className="max-w-[1080px] mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-base md:text-lg text-(--green-primary) uppercase tracking-wider mb-2">Soluciones Especializadas</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-(--blanco)">En Protecciones Agrícolas</h2>
            <div className="flex justify-center mt-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-(--yellow-accent)" fill="currentColor" viewBox="0 0 1000 1000">
                <path d="M310.7 149.6C308.2 151.4 302.9 160 299 168.7 287.5 193.4 275.2 214.5 246.1 258 214.1 306.1 206.8 318.7 199 340 182.4 385.5 193.4 424.6 234.8 468 243.2 476.8 250 485.2 250 486.7 250 488.3 245.5 508.8 240.2 532.4L230.3 575.2 218.2 585.7C149.6 645.7 101.4 718.2 68.6 811.1 61.7 830.5 61.3 835.7 65.2 843.6 70.5 853.5 87.1 856.8 96.3 849.6 99.4 847.1 102.9 840.8 105.5 832.4 122.3 781.1 160.2 708.6 185 680.3L190.4 673.8 226.6 701.2C264.6 729.9 268.4 731.6 280.3 726.2 290.8 721.5 294.1 705.7 286.9 696.5 284.6 693.6 268.6 680.7 251.2 667.6 234 654.7 219.3 643.6 218.9 643.2 217.4 642 231.2 628.7 250.2 613.5 304.5 569.5 377 538.3 455.7 524.6L472.9 521.7 523.8 562.5C573 602.1 575 603.5 583.4 603.5 590.4 603.5 593.2 602.3 597.9 597.9 604.3 591.2 605.7 580.1 600.6 572.9 598.8 570.5 582.6 556.4 564.3 541.8 546.1 527.1 531.4 514.8 531.6 514.6 532 514.3 543.8 511.7 557.6 509 588.5 502.5 611.1 496.3 635.5 487.5L654.1 480.7 679.5 489.6 704.7 498.4 708 511.9C717.6 550.4 739.5 574.2 773 582 779.7 583.6 805.7 584.8 845.3 585.2 879.3 585.7 911.3 586.1 916.4 586.5 924.2 586.7 926.6 585.9 930.9 581.8 933.8 578.7 936.3 573.8 936.9 569.1 937.7 562.3 936.7 559.6 924.4 541 886.5 483.8 849.2 450.8 810.5 440.4 785.7 433.8 753.3 438.9 730.7 452.9 719.3 459.8 718.9 459.8 712.1 456.8 707.2 454.5 707.8 454.1 727.1 441.4 799.6 394.3 853.3 324.6 887.9 233.4 897.1 208.8 897.3 200.6 888.9 193 884.4 188.9 880.7 187.5 875 187.5 862.9 187.5 857.4 194.1 847.7 221.1 812.9 317.4 748.6 390 661.1 431.8 641.6 441.2 609.4 453.7 608.2 452.5 607.8 452.1 610.2 436.5 613.3 417.8 620.5 375.2 620.7 369.3 614.3 361.7 611.5 358.4 606.8 355.3 603.7 354.5 595.1 352.7 584.4 358 581.2 365.6 579.7 369.1 575.2 392.2 571.3 417 567.2 441.6 562.9 462.9 561.7 464.3 559.2 467.2 524 473.4 488.3 477.5 422.9 485.2 365.2 501.2 310.7 527.5 295.3 535 282.2 540.8 281.8 540.4 281.6 540 283.6 529.1 286.5 516.2L291.8 492.8 304.7 487.1C346.5 468.9 379.3 432 389.6 391.6 400.2 350.8 395.5 299.8 375.8 240.6 364.6 207.4 343 158 336.5 151.6 330.5 145.5 318 144.7 310.7 149.6Z"/>
              </svg>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center">
            <div className="rounded-lg shadow-lg overflow-hidden relative w-[280px] h-[400px] group cursor-pointer">
              <div className="absolute inset-0 transition-transform duration-300 group-hover:scale-110 group-active:scale-110" style={{ backgroundImage: 'url(https://assets.probioseec.com/archivos/cuarentena.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(10, 25, 4, 0.5) 100%)' }}></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 group-active:opacity-100 group-focus:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(10, 25, 4, 0.85) 100%)' }}></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
                <p className="text-white text-sm font-bold uppercase underline decoration-(--yellow-accent)">Cuarentena</p>
                <h2 className="text-white text-3xl font-bold uppercase leading-tight">Protección<br/>Fitosanitaria</h2>
              </div>
            </div>
            <div className="rounded-lg shadow-lg overflow-hidden relative w-[280px] h-[400px] group cursor-pointer">
              <div className="absolute inset-0 transition-transform duration-300 group-hover:scale-110 group-active:scale-110" style={{ backgroundImage: 'url(https://assets.probioseec.com/archivos/cumplimiento_de_ley_probiose.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(10, 25, 4, 0.5) 100%)' }}></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 group-active:opacity-100 group-focus:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(10, 25, 4, 0.85) 100%)' }}></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
                <p className="text-white text-sm font-bold uppercase underline decoration-(--yellow-accent)">Cuarentena</p>
                <h2 className="text-white text-3xl font-bold uppercase leading-tight">Cumplimiento<br/>Legal</h2>
              </div>
            </div>
                        <div className="rounded-lg shadow-lg overflow-hidden relative w-[280px] h-[400px] group cursor-pointer">
              <div className="absolute inset-0 transition-transform duration-300 group-hover:scale-110 group-active:scale-110" style={{ backgroundImage: 'url(https://assets.probioseec.com/archivos/moko_probiose.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(10, 25, 4, 0.5) 100%)' }}></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 group-active:opacity-100 group-focus:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(10, 25, 4, 0.85) 100%)' }}></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
                <p className="text-white text-sm font-bold uppercase underline decoration-(--yellow-accent)">Moko</p>
                <h2 className="text-white text-3xl font-bold uppercase leading-tight">Control de<br/>Enfermedades</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}

      <section id="about" className="py-16 px-4 bg-(--green-background)">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="text-center md:text-left px-4 md:px-0 md:justify-self-end md:ml-15">
            <p className="text-base md:text-lg text-(--green-primary) uppercase tracking-wider mb-0.5">Somos Probiose</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-(--blanco) leading-tight mb-1">
              Expertos en Cuidar tus Cultivos
            </h2>
            <div className="flex justify-center md:justify-start mt-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-(--yellow-accent)" fill="currentColor" viewBox="0 0 1000 1000">
                <path d="M310.7 149.6C308.2 151.4 302.9 160 299 168.7 287.5 193.4 275.2 214.5 246.1 258 214.1 306.1 206.8 318.7 199 340 182.4 385.5 193.4 424.6 234.8 468 243.2 476.8 250 485.2 250 486.7 250 488.3 245.5 508.8 240.2 532.4L230.3 575.2 218.2 585.7C149.6 645.7 101.4 718.2 68.6 811.1 61.7 830.5 61.3 835.7 65.2 843.6 70.5 853.5 87.1 856.8 96.3 849.6 99.4 847.1 102.9 840.8 105.5 832.4 122.3 781.1 160.2 708.6 185 680.3L190.4 673.8 226.6 701.2C264.6 729.9 268.4 731.6 280.3 726.2 290.8 721.5 294.1 705.7 286.9 696.5 284.6 693.6 268.6 680.7 251.2 667.6 234 654.7 219.3 643.6 218.9 643.2 217.4 642 231.2 628.7 250.2 613.5 304.5 569.5 377 538.3 455.7 524.6L472.9 521.7 523.8 562.5C573 602.1 575 603.5 583.4 603.5 590.4 603.5 593.2 602.3 597.9 597.9 604.3 591.2 605.7 580.1 600.6 572.9 598.8 570.5 582.6 556.4 564.3 541.8 546.1 527.1 531.4 514.8 531.6 514.6 532 514.3 543.8 511.7 557.6 509 588.5 502.5 611.1 496.3 635.5 487.5L654.1 480.7 679.5 489.6 704.7 498.4 708 511.9C717.6 550.4 739.5 574.2 773 582 779.7 583.6 805.7 584.8 845.3 585.2 879.3 585.7 911.3 586.1 916.4 586.5 924.2 586.7 926.6 585.9 930.9 581.8 933.8 578.7 936.3 573.8 936.9 569.1 937.7 562.3 936.7 559.6 924.4 541 886.5 483.8 849.2 450.8 810.5 440.4 785.7 433.8 753.3 438.9 730.7 452.9 719.3 459.8 718.9 459.8 712.1 456.8 707.2 454.5 707.8 454.1 727.1 441.4 799.6 394.3 853.3 324.6 887.9 233.4 897.1 208.8 897.3 200.6 888.9 193 884.4 188.9 880.7 187.5 875 187.5 862.9 187.5 857.4 194.1 847.7 221.1 812.9 317.4 748.6 390 661.1 431.8 641.6 441.2 609.4 453.7 608.2 452.5 607.8 452.1 610.2 436.5 613.3 417.8 620.5 375.2 620.7 369.3 614.3 361.7 611.5 358.4 606.8 355.3 603.7 354.5 595.1 352.7 584.4 358 581.2 365.6 579.7 369.1 575.2 392.2 571.3 417 567.2 441.6 562.9 462.9 561.7 464.3 559.2 467.2 524 473.4 488.3 477.5 422.9 485.2 365.2 501.2 310.7 527.5 295.3 535 282.2 540.8 281.8 540.4 281.6 540 283.6 529.1 286.5 516.2L291.8 492.8 304.7 487.1C346.5 468.9 379.3 432 389.6 391.6 400.2 350.8 395.5 299.8 375.8 240.6 364.6 207.4 343 158 336.5 151.6 330.5 145.5 318 144.7 310.7 149.6Z"/>
              </svg>
            </div>
            <p className="text-lg text-(--green-primary) mb-4">"Un plan de acción es su mejor defensa contra plagas devastadoras."</p>
            <p className="text-lg text-(--green-text) mb-6">
              Plagas como Ralstonia solanacearum (Moko) pueden generar pérdidas de hasta el 100% en la producción y altos costos de erradicación. La Resolución 0072 de AGROCALIDAD aprueba el "Plan de Acción" , cuya implementación es de cumplimiento obligatorio para todos los productores.
            </p>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-(--yellow-accent) text-black">✓</span>
                <span className="text-(--green-text)">Asesoría técnica personalizada</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-(--yellow-accent) text-black">✓</span>
                <span className="text-(--green-text)">Productos y tratamientos certificados</span>
              </li>
            </ul>
          </div>

          {/* Right: Collage images (main + overlapping) */}
          <div className="relative w-full flex items-center justify-center">
              {/* Main image: on small screens use overlay images with fade, on md+ show a single static image (no transition) */}
              {/* Mobile: overlay fade */}
              <div className="relative z-10 w-70 md:hidden h-70 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={images[0]}
                  alt="Desinfección Probiose"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Desktop: single static image (no transition) */}
              <div className="hidden md:block relative z-10 w-full md:w-[380px] lg:w-[480px] h-[480px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={images[0]}
                  alt="Desinfección Probiose"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Yellow decorative rectangle behind the main image */}
              <div className="absolute top-1/2 left-1/2 w-70 md:w-[380px] lg:w-[480px] h-70 md:h-[480px] bg-(--amarillo-accent) rounded-2xl z-0" style={{ transform: 'translate(-50%, -50%) translate(20px, -20px)' }} />

              {/* Overlapping small image (static, shown on md+) */}
              <div className="absolute left-2 -bottom-4 md:-left-8 md:bottom-6 w-[150px] h-[150px] md:w-52 md:h-52 rounded-2xl overflow-hidden drop-shadow-[0_0_10px_rgba(255,215,0,0.5)] animate-[float_4s_ease-in-out_infinite] z-20">
                <Image
                  src={images[1]}
                  alt="Desinfección secundaria"
                  fill
                  className="object-cover"
                />
              </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="productos" className="py-16 px-4 bg-(--green-background)">
        <div className="max-w-6xl mx-auto">
          <p className="text-base md:text-lg text-(--green-primary) uppercase tracking-wider mb-0.5 text-center">Estos son</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-(--blanco) leading-tight mb-0.5 text-center">
            Nuestros Productos
          </h2>
          <div className="flex justify-center mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-(--yellow-accent)" fill="currentColor" viewBox="0 0 1000 1000">
              <path d="M310.7 149.6C308.2 151.4 302.9 160 299 168.7 287.5 193.4 275.2 214.5 246.1 258 214.1 306.1 206.8 318.7 199 340 182.4 385.5 193.4 424.6 234.8 468 243.2 476.8 250 485.2 250 486.7 250 488.3 245.5 508.8 240.2 532.4L230.3 575.2 218.2 585.7C149.6 645.7 101.4 718.2 68.6 811.1 61.7 830.5 61.3 835.7 65.2 843.6 70.5 853.5 87.1 856.8 96.3 849.6 99.4 847.1 102.9 840.8 105.5 832.4 122.3 781.1 160.2 708.6 185 680.3L190.4 673.8 226.6 701.2C264.6 729.9 268.4 731.6 280.3 726.2 290.8 721.5 294.1 705.7 286.9 696.5 284.6 693.6 268.6 680.7 251.2 667.6 234 654.7 219.3 643.6 218.9 643.2 217.4 642 231.2 628.7 250.2 613.5 304.5 569.5 377 538.3 455.7 524.6L472.9 521.7 523.8 562.5C573 602.1 575 603.5 583.4 603.5 590.4 603.5 593.2 602.3 597.9 597.9 604.3 591.2 605.7 580.1 600.6 572.9 598.8 570.5 582.6 556.4 564.3 541.8 546.1 527.1 531.4 514.8 531.6 514.6 532 514.3 543.8 511.7 557.6 509 588.5 502.5 611.1 496.3 635.5 487.5L654.1 480.7 679.5 489.6 704.7 498.4 708 511.9C717.6 550.4 739.5 574.2 773 582 779.7 583.6 805.7 584.8 845.3 585.2 879.3 585.7 911.3 586.1 916.4 586.5 924.2 586.7 926.6 585.9 930.9 581.8 933.8 578.7 936.3 573.8 936.9 569.1 937.7 562.3 936.7 559.6 924.4 541 886.5 483.8 849.2 450.8 810.5 440.4 785.7 433.8 753.3 438.9 730.7 452.9 719.3 459.8 718.9 459.8 712.1 456.8 707.2 454.5 707.8 454.1 727.1 441.4 799.6 394.3 853.3 324.6 887.9 233.4 897.1 208.8 897.3 200.6 888.9 193 884.4 188.9 880.7 187.5 875 187.5 862.9 187.5 857.4 194.1 847.7 221.1 812.9 317.4 748.6 390 661.1 431.8 641.6 441.2 609.4 453.7 608.2 452.5 607.8 452.1 610.2 436.5 613.3 417.8 620.5 375.2 620.7 369.3 614.3 361.7 611.5 358.4 606.8 355.3 603.7 354.5 595.1 352.7 584.4 358 581.2 365.6 579.7 369.1 575.2 392.2 571.3 417 567.2 441.6 562.9 462.9 561.7 464.3 559.2 467.2 524 473.4 488.3 477.5 422.9 485.2 365.2 501.2 310.7 527.5 295.3 535 282.2 540.8 281.8 540.4 281.6 540 283.6 529.1 286.5 516.2L291.8 492.8 304.7 487.1C346.5 468.9 379.3 432 389.6 391.6 400.2 350.8 395.5 299.8 375.8 240.6 364.6 207.4 343 158 336.5 151.6 330.5 145.5 318 144.7 310.7 149.6Z"/>
            </svg>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 mt-8">
            {/* Product Card - styled like image example */}
            {[
              {
                src: 'https://assets.probioseec.com/productos/bacfung_probiose.jpg',
                title: 'Bacfung',
                desc: 'Producto agrícola especializado en control de hongos.'
              },
              {
                src: 'https://assets.probioseec.com/productos/fertilizante_agricola_probiose.jpg',
                title: 'Fertilizante Agrícola',
                desc: 'Fertilizante de alta calidad para mejorar el rendimiento de cultivos.'
              },
              {
                src: 'https://assets.probioseec.com/productos/hidroxido_de_calcio_probiose.jpg',
                title: 'Hidróxido de Calcio',
                desc: 'Enmienda agrícola para mejorar la calidad del suelo.'
              },
              {
                src: 'https://assets.probioseec.com/productos/bioactivador_biologico_probiose.jpg',
                title: 'Bioactivador Biológico',
                desc: 'Activador biológico para estimular el crecimiento vegetal.'
              },
              {
                src: 'https://assets.probioseec.com/productos/peroxido_hidrogeno_probiose.jpg',
                title: 'Peróxido de Hidrógeno',
                desc: 'Solución desinfectante para tratamientos agrícolas.'
              }
            ].map((p) => (
              <div key={p.src} className="group bg-[#0b2507] rounded-2xl p-6 text-center shadow-lg relative overflow-hidden border border-transparent hover:border-(--yellow-accent) focus:border-(--yellow-accent) transition-colors duration-400 ease-in-out max-w-[220px] md:max-w-none mx-auto h-[380px] md:h-auto flex flex-col justify-center md:justify-start" tabIndex={0}>
                <div className="mx-auto w-40 h-40 md:w-40 md:h-40 rounded-full overflow-hidden shadow-inner relative flex items-center justify-center">
                  <Image src={p.src} alt={p.title} fill className="object-cover object-center transform transition-transform duration-400 ease-in-out group-hover:scale-110 group-focus:scale-110" />
                </div>

                {/* icon centered just below the image */}
                <div className="mx-auto -mt-8 md:-mt-10 w-12 h-12 md:w-14 md:h-14 bg-(--green-primary) rounded-full flex items-center justify-center relative z-10 transition-colors duration-400 ease-in-out group-hover:bg-(--yellow-accent) group-hover:ring-(--yellow-accent) group-focus:bg-(--yellow-accent) group-focus:ring-(--yellow-accent)">
                  {/* arrow up-right icon to indicate click; icon will change color and scale on hover */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 -rotate-45 text-white transition duration-400 ease-in-out group-hover:scale-110 group-hover:text-(--green-background) group-focus:scale-110 group-focus:text-(--green-background)" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M15 7l4 5-4 5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                <div className="mt-2 pt-1">
                  <h3 className="text-xl font-bold text-(--blanco) mb-2">{p.title}</h3>
                  <p className="text-(--green-text) text-sm">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-16 px-4 bg-(--green-background)">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Left: contact info */}
      <div className="px-2 md:px-0 text-center md:text-left">
        <p className="text-base md:text-lg text-(--green-primary) uppercase tracking-wider mb-1">¿Sospecha de un brote?</p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-(--blanco) leading-tight mb-0.5">
          Actúe ahora
        </h2>
        <div className="flex justify-center md:justify-start mt-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-(--yellow-accent)" fill="currentColor" viewBox="0 0 1000 1000">
            <path d="M310.7 149.6C308.2 151.4 302.9 160 299 168.7 287.5 193.4 275.2 214.5 246.1 258 214.1 306.1 206.8 318.7 199 340 182.4 385.5 193.4 424.6 234.8 468 243.2 476.8 250 485.2 250 486.7 250 488.3 245.5 508.8 240.2 532.4L230.3 575.2 218.2 585.7C149.6 645.7 101.4 718.2 68.6 811.1 61.7 830.5 61.3 835.7 65.2 843.6 70.5 853.5 87.1 856.8 96.3 849.6 99.4 847.1 102.9 840.8 105.5 832.4 122.3 781.1 160.2 708.6 185 680.3L190.4 673.8 226.6 701.2C264.6 729.9 268.4 731.6 280.3 726.2 290.8 721.5 294.1 705.7 286.9 696.5 284.6 693.6 268.6 680.7 251.2 667.6 234 654.7 219.3 643.6 218.9 643.2 217.4 642 231.2 628.7 250.2 613.5 304.5 569.5 377 538.3 455.7 524.6L472.9 521.7 523.8 562.5C573 602.1 575 603.5 583.4 603.5 590.4 603.5 593.2 602.3 597.9 597.9 604.3 591.2 605.7 580.1 600.6 572.9 598.8 570.5 582.6 556.4 564.3 541.8 546.1 527.1 531.4 514.8 531.6 514.6 532 514.3 543.8 511.7 557.6 509 588.5 502.5 611.1 496.3 635.5 487.5L654.1 480.7 679.5 489.6 704.7 498.4 708 511.9C717.6 550.4 739.5 574.2 773 582 779.7 583.6 805.7 584.8 845.3 585.2 879.3 585.7 911.3 586.1 916.4 586.5 924.2 586.7 926.6 585.9 930.9 581.8 933.8 578.7 936.3 573.8 936.9 569.1 937.7 562.3 936.7 559.6 924.4 541 886.5 483.8 849.2 450.8 810.5 440.4 785.7 433.8 753.3 438.9 730.7 452.9 719.3 459.8 718.9 459.8 712.1 456.8 707.2 454.5 707.8 454.1 727.1 441.4 799.6 394.3 853.3 324.6 887.9 233.4 897.1 208.8 897.3 200.6 888.9 193 884.4 188.9 880.7 187.5 875 187.5 862.9 187.5 857.4 194.1 847.7 221.1 812.9 317.4 748.6 390 661.1 431.8 641.6 441.2 609.4 453.7 608.2 452.5 607.8 452.1 610.2 436.5 613.3 417.8 620.5 375.2 620.7 369.3 614.3 361.7 611.5 358.4 606.8 355.3 603.7 354.5 595.1 352.7 584.4 358 581.2 365.6 579.7 369.1 575.2 392.2 571.3 417 567.2 441.6 562.9 462.9 561.7 464.3 559.2 467.2 524 473.4 488.3 477.5 422.9 485.2 365.2 501.2 310.7 527.5 295.3 535 282.2 540.8 281.8 540.4 281.6 540 283.6 529.1 286.5 516.2L291.8 492.8 304.7 487.1C346.5 468.9 379.3 432 389.6 391.6 400.2 350.8 395.5 299.8 375.8 240.6 364.6 207.4 343 158 336.5 151.6 330.5 145.5 318 144.7 310.7 149.6Z"/>
          </svg>
        </div>
        <p className="text-(--green-primary) mt-4">
          Asesoría Inmediata y Plan de Acción
        </p>

        <p className="text-(--green-text) mt-4">
          No arriesgue su finca. Nuestro equipo está capacitado para implementar el plan oficial, desde la zonificación (Roja, Amarilla, Verde) hasta las medidas de bioseguridad y erradicación .
        </p>
        </div>
            {/* Right: form card */}
            <div className="bg-(--green-secundary) rounded-2xl p-8 shadow-xl">
              <form id="contactForm" className="space-y-6" noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input name="name" type="text" placeholder="Tu nombre" required className="w-full px-4 py-3 rounded-md bg-(--green-background) border border-transparent text-(--blanco) placeholder-(--green-text) focus:outline-none focus:ring-2 focus:ring-(--yellow-accent)" />

                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-md bg-[#0f2b09] text-(--blanco)">EC</span>
                    <input name="whatsapp" type="tel" inputMode="numeric" placeholder="Tu numero" required pattern="[0-9]*" maxLength={10} className="w-full px-4 py-3 rounded-r-md bg-(--green-background) border border-transparent text-(--blanco) placeholder-(--green-text) focus:outline-none focus:ring-2 focus:ring-(--yellow-accent)" />
                  </div>
                </div>

                <input name="email" type="email" placeholder="Tu correo" required className="w-full px-4 py-3 rounded-md bg-(--green-background) border border-transparent text-(--blanco) placeholder-(--green-text) focus:outline-none focus:ring-2 focus:ring-(--yellow-accent)" />

                <textarea name="message" placeholder="Tu solicitud" rows={6} className="w-full px-4 py-4 rounded-md bg-(--green-background) border border-transparent text-(--blanco) placeholder-(--green-text) focus:outline-none focus:ring-2 focus:ring-(--yellow-accent)" />

                <div className="flex justify-center items-center">
                  <button type="submit" id="submitBtn" className="group relative flex items-center bg-(--green-primary) text-(--blanco) pl-12 pr-3 py-3 rounded-full font-semibold shadow-md overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed">
                    {/* white overlay expands from center to edges on hover */}
                    <span aria-hidden className="absolute inset-0 bg-white transform-gpu scale-x-0 scale-y-[3.5] origin-center group-hover:scale-x-[3.5] group-hover:scale-y-[3.5] group-active:scale-x-[3.5] group-active:scale-y-[3.5] transition-transform duration-600 ease-in-out z-0 rotate-45" />

                    <span id="submitText" className="relative z-10 leading-none transition-colors duration-600 ease-in-out group-hover:text-(--green-primary) group-active:text-(--green-primary)">¡Envía tu Mensaje!</span>

                    <div className="relative z-10 w-9 h-9 bg-(--yellow-accent) rounded-full flex items-center justify-center text-(--green-background) font-bold ml-3 group-hover:bg-(--green-primary) group-hover:text-white group-active:bg-(--green-primary) group-active:text-white transition-colors duration-600 ease-in-out">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-8 pb-0 px-4 bg-(--green-secundary)">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Left Side */}
            <div className="flex flex-col items-center md:items-start md:pl-12 space-y-4">
              {/* Logo */}
              <div>
                <Image
                  src="https://assets.probioseec.com/logos/logo_probiose.png"
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
                href="#about"
                className="text-(--green-text) hover:text-white transition duration-300"
              >
                Sobre nosotros
              </a>
              <a
                href="#productos"
                className="text-(--green-text) hover:text-white transition duration-300"
              >
                Productos
              </a>
              <a
                href="#contact"
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
                    <div className="text-(--blanco) font-semibold">Pueblo Viejo - Ecuador</div>
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
              © 2024 Probiose Ec. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
      <ContactFormHandler />
    </div>
  );
}

// Componente para manejar el formulario de contacto
function ContactFormHandler() {
  useEffect(() => {
    const form = document.getElementById('contactForm') as HTMLFormElement;
    const submitBtn = document.getElementById('submitBtn') as HTMLButtonElement;
    const submitText = document.getElementById('submitText') as HTMLSpanElement;

    if (!form || !submitBtn || !submitText) return;

    const handleSubmit = async (e: Event) => {
      e.preventDefault();

      // Validar formulario
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      // Deshabilitar botón y mostrar loading
      submitBtn.disabled = true;
      submitText.textContent = 'Enviando...';

      try {
        // Recopilar datos del formulario
        const formData = new FormData(form);
        const data = {
          name: formData.get('name'),
          whatsapp: formData.get('whatsapp'),
          email: formData.get('email'),
          message: formData.get('message'),
          timestamp: new Date().toISOString(),
          source: 'website_contact_form'
        };

        // Enviar a n8n webhook de producción
        const response = await fetch('https://n8n-n8n.3yia0f.easypanel.host/webhook/contact-form-probiose', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
        });

        if (response.ok) {
          // Éxito
          submitText.textContent = '¡Mensaje enviado!';
          form.reset();

          // Mostrar mensaje de éxito temporal
          setTimeout(() => {
            submitText.textContent = '¡Envía tu Mensaje!';
            submitBtn.disabled = false;
          }, 3000);
        } else {
          // Error específico del servidor
          const errorText = await response.text().catch(() => 'Error desconocido del servidor');
          console.error('Error del servidor:', response.status, response.statusText, errorText);
          throw new Error(`Error del servidor: ${response.status} ${response.statusText}`);
        }

      } catch (error) {
        console.error('Error al enviar formulario:', error);

        // Determinar el tipo de error para mostrar mensaje apropiado
        let errorMessage = 'Error - Inténtalo de nuevo';

        if (error instanceof TypeError && (error as TypeError).message.includes('fetch')) {
          errorMessage = 'Error de conexión - Verifica tu internet';
        } else if (error instanceof Error && (error as Error).message.includes('CORS')) {
          errorMessage = 'Error de configuración - Contacta al administrador';
        } else if (error instanceof Error && (error as Error).message.includes('Error del servidor')) {
          errorMessage = 'Error del servidor - Inténtalo más tarde';
        }

        submitText.textContent = errorMessage;
        submitBtn.disabled = false;

        // Resetear texto después de 5 segundos para errores
        setTimeout(() => {
          submitText.textContent = '¡Envía tu Mensaje!';
        }, 5000);
      }
    };

    form.addEventListener('submit', handleSubmit);

    return () => {
      form.removeEventListener('submit', handleSubmit);
    };
  }, []);

  return null;
}
