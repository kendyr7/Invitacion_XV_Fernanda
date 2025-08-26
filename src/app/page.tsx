
'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import MusicPlayer from '@/components/event/MusicPlayer';
import CountdownTimer from '@/components/event/CountdownTimer';
import { Card, CardContent } from '@/components/ui/card';
import SectionCard from '@/components/event/SectionCard';
import ActivityTimelineItem from '@/components/event/ActivityTimelineItem';
import EventDateDisplay from '@/components/event/EventDateDisplay';
import { Input } from '@/components/ui/input';
import { 
  Gift, 
  ListChecks,
  Utensils,
  Sparkles as SparklesIcon, 
  CakeSlice,
  PartyPopper,
  GlassWater,
  Martini, 
  Gem, 
  Camera,
  Disc3, 
  Car,
  Palette,
  Brush,
  Wine,
  Bus,
  Mail,
  ArrowUp,
  Loader2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from "@/hooks/use-toast";
import FlickeringLight from '@/components/event/FlickeringLight';

export default function HomePage() {
  const [isOpened, setIsOpened] = useState(false);
  const [guestName, setGuestName] = useState('');
  const [isConfirming, setIsConfirming] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { toast } = useToast();
  const audioSrc = "/audio/Coldplay - Clocks.mp3"; 
  const eventTargetDate = "2025-09-20T19:30:00-06:00";

  useEffect(() => {
    if (!isOpened) return;

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpened]);
  
  const handleOpenEnvelope = () => {
    setIsOpened(true);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleConfirm = async () => {
    if (!guestName.trim()) {
      toast({
        title: "Campo requerido",
        description: "Por favor, ingresa tu nombre y apellido para confirmar.",
        variant: "destructive",
      });
      return;
    }

    setIsConfirming(true);
    try {
      const phoneNumber = "50500000000"; // Reemplaza con tu número de WhatsApp
      const message = encodeURIComponent(`¡Hola! Confirmo mi asistencia a los XV de Fernanda. Mi nombre es ${guestName.trim()}. ¡Nos vemos!`);
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

      window.location.href = whatsappUrl;
      
      setGuestName('');
    } catch (error) {
      console.error("Confirmation error:", error);
      toast({
        title: "Error inesperado",
        description: "Ocurrió un error al intentar redirigir a WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsConfirming(false);
    }
  };
  
  if (!isOpened) {
    return (
      <main 
        className="flex min-h-screen flex-col items-center justify-center bg-background p-4 cursor-pointer" 
        onClick={handleOpenEnvelope}
      >
        <div className="text-center animate-in fade-in duration-1000">
          <Image 
            src="/envelope.png"
            alt="An envelope, click to open invitation"
            width={400}
            height={300}
            className="mx-auto"
            data-ai-hint="envelope mail"
            priority
          />
          <p className="mt-4 text-lg text-foreground/80 font-headline">Haz clic para abrir la invitación</p>
        </div>
      </main>
    );
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground relative overflow-auto sm:overflow-hidden">

      <FlickeringLight />
      <Image 
        src="/flowers_deco/elegant-floral-background.jpeg"
        fill
        alt="Elegant event background" 
        className="absolute inset-0 z-[-1] opacity-20 filter blur-sm object-cover"
        priority
        data-ai-hint="elegant floral"
      />
      
      <div 
        className="relative z-10 flex flex-col items-center text-center max-w-2xl w-full bg-background/80 dark:bg-neutral-900/80 backdrop-blur-md rounded-xl shadow-2xl my-8 animate-in fade-in slide-in-from-bottom-10 duration-700 bg-[url('/paper-texture.png')] bg-cover bg-center overflow-hidden"
      >
        <div className="relative w-full h-screen">
          <Image
            src="/portada.jpg"
            alt="Portada"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-end z-10 p-8 bg-gradient-to-t from-black/100 to-transparent">
            <p className="font-headline text-3xl sm:text-3xl text-white mt-2 tracking-widest">Mis XV Años</p>
            <p className="font-bellisa text-7xl sm:text-9xl text-white">
              <svg width="353" height="275" viewBox="0 0 353 275" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M163.006 37.752C165.598 44.376 160.414 49.752 151.87 49.752C143.422 49.752 134.014 47.544 126.43 44.856C117.598 46.584 105.31 62.424 91.0055 79.992C93.2135 80.472 95.5175 80.76 97.7255 80.76H98.9735C101.374 77.496 106.27 73.08 109.63 73.176C111.358 73.176 110.59 75 109.726 76.056C107.518 78.744 104.926 80.28 102.238 81.048C97.1495 87.384 90.7175 95.736 83.0375 95.736C82.4615 95.544 81.6935 95.448 81.5975 94.872C89.3735 95.544 93.5975 87.96 98.3015 81.624H97.7255C95.3255 81.624 92.9255 81.24 90.4295 80.76C71.3255 104.088 48.7655 130.2 26.2055 130.104C1.7255 130.008 0.9575 102.456 15.8375 87.96C16.6055 87.384 16.7975 87.864 16.5095 88.44C8.3495 101.688 5.9495 129.048 28.0295 129.048C45.5975 129.048 65.0855 102.648 84.1895 79.224C81.0215 78.36 77.9495 77.688 75.1655 77.688C69.7895 77.592 65.7575 82.872 69.1175 87.384C68.8295 87.576 68.3495 87.864 67.7735 86.808C65.1815 81.72 69.8855 76.728 75.1655 76.824C78.0455 76.824 81.3095 77.688 84.7655 78.552C98.4935 61.752 112.03 46.68 124.606 44.184C121.15 43.032 100.125 35.448 84.7655 35.448C43.4855 36.024 22.7495 81.24 44.9255 81.048C53.1815 80.952 61.1495 74.04 66.5255 68.376L70.0775 64.632H71.1335L67.4855 68.472C62.0135 74.328 53.2775 81.912 44.7335 82.008C14.9735 82.104 36.2855 34.392 84.7655 34.584C108.574 34.68 132.286 43.992 154.462 43.896C157.918 43.896 163.87 42.744 162.238 37.944C162.046 37.272 162.718 37.08 163.006 37.752ZM103.486 79.416L103.678 79.608C105.406 79.032 107.709 77.208 109.054 75.576C109.342 75.192 110.206 74.04 109.63 74.04C108.094 74.04 104.638 77.88 103.486 79.416ZM112.81 109.368L116.362 105.624H117.418L113.77 109.464C108.202 115.224 99.2743 122.904 91.3063 122.904C87.7542 122.904 85.5462 120.888 85.5462 117.432C85.5462 106.776 104.17 91.512 115.018 91.512C117.226 91.512 117.994 92.76 117.994 94.296C117.898 100.632 104.746 108.696 99.1783 108.696C98.0263 108.696 96.8743 108.408 95.9143 107.736C91.9783 112.632 89.0023 117.336 89.0023 119.928C89.0023 121.272 89.7703 122.04 91.4983 122.04C99.2743 122.04 107.818 114.552 112.81 109.368ZM115.018 92.376C111.178 92.376 102.634 99.768 96.3943 107.16C97.2583 107.736 98.2183 107.928 99.1783 107.928C104.362 107.928 116.938 100.344 116.938 94.296C116.938 93.144 116.362 92.376 115.018 92.376ZM144.287 99.576C137.951 103.608 129.983 109.08 124.223 114.744L117.503 122.904H110.495C116.735 115.8 123.263 107.544 129.311 100.056C132.191 96.504 133.631 94.68 133.631 93.624C133.631 92.856 133.439 92.472 132.863 92.472C129.791 92.472 124.415 97.944 117.407 105.624L116.543 106.584H115.487L116.351 105.624C122.879 98.52 129.311 91.512 133.151 91.512C136.607 91.512 137.759 92.952 137.759 95.064C137.759 98.712 130.367 106.968 127.871 110.52C133.631 105.624 140.351 101.016 145.631 97.752C147.071 95.256 150.911 90.456 153.599 90.456C154.271 90.456 154.559 90.84 154.559 91.416C154.559 91.8 154.367 92.376 154.079 92.76C153.311 94.008 147.839 97.176 146.111 98.328C144.863 99.48 140.927 106.008 140.927 109.464C140.927 110.712 141.503 111.576 142.847 111.576C145.247 111.576 148.223 109.176 150.527 106.584L151.487 105.624H152.543L151.583 106.584C149.567 108.888 145.919 112.344 142.847 112.344C140.831 112.344 140.159 111.192 140.159 109.56C140.159 106.392 143.039 101.304 144.287 99.576ZM169.846 101.4H170.038C175.126 96.408 180.886 91.512 185.59 91.512C188.566 91.512 190.774 92.952 190.774 96.216C190.678 105.528 174.838 115.8 174.838 121.176C174.838 121.848 175.126 122.232 175.99 122.232C180.598 122.232 189.43 113.976 197.11 105.624H198.166C190.294 114.264 180.982 123 175.798 123C173.302 123 171.766 121.368 171.766 118.776C171.766 110.136 188.086 99.384 188.086 93.912C188.086 92.472 186.646 92.184 185.494 92.184C180.598 92.184 173.014 99.48 166.102 106.584L152.566 122.904H145.557C151.798 115.8 158.326 107.544 164.374 100.056C167.254 96.504 168.694 94.2 168.694 93.144C168.694 92.664 168.502 92.472 167.926 92.472C164.854 92.472 159.478 97.944 152.47 105.624L151.605 106.584H150.55L151.414 105.624C157.942 98.52 164.374 91.512 168.214 91.512C171.67 91.512 172.822 92.952 172.822 95.064C172.822 96.984 171.574 99.096 169.846 101.4ZM290.574 113.304H289.998C284.334 118.968 278.958 123 275.982 123C272.526 123 271.086 121.368 271.086 118.872C271.086 117.048 271.854 114.744 273.294 112.152C267.15 118.2 261.006 123 257.166 123C254.67 123 253.134 121.368 253.134 118.776C253.134 110.136 269.454 99.384 269.454 93.912C269.454 92.472 268.014 92.184 266.862 92.184C261.966 92.184 255.342 97.08 247.47 106.584L233.934 122.904H226.926C233.166 115.8 239.694 107.544 245.742 100.056C248.622 96.504 249.966 94.584 249.966 93.528C249.966 92.76 249.486 92.472 248.91 92.472C240.366 92.472 220.782 123 211.47 123C209.166 123 207.438 121.56 207.438 118.968C207.438 117.432 208.014 115.512 209.454 113.304H208.878C203.118 118.968 197.838 123 194.862 123C191.214 123 189.678 121.368 189.678 118.872C189.678 110.328 207.438 91.416 221.358 91.416C223.662 91.416 224.91 92.28 224.91 93.624C224.91 93.816 224.814 94.008 224.814 94.2L226.35 92.472C226.926 91.896 227.31 91.704 228.078 91.704C229.23 91.704 230.19 92.76 231.918 92.76C232.59 92.76 233.454 92.568 234.606 91.704C222.894 104.184 210.51 117.528 210.51 121.368C210.51 121.944 210.894 122.232 211.662 122.232C219.918 122.232 240.558 91.512 249.198 91.512C253.134 91.512 254.19 93.432 254.19 95.064C254.19 96.984 252.942 99.096 251.214 101.4C255.918 96.408 261.486 91.512 266.958 91.512C270.126 91.512 272.142 92.952 272.142 96.216C272.046 105.528 256.206 115.8 256.206 121.176C256.206 121.848 256.494 122.232 257.358 122.232C261.294 122.232 268.398 116.184 275.214 109.176C281.07 100.632 292.398 91.416 302.478 91.416C304.974 91.416 306.03 92.28 306.03 93.624C306.03 93.816 306.03 94.008 305.934 94.2C323.694 72.6 327.726 56.952 327.726 43.512C327.726 21.816 317.742 1.752 277.614 1.752C231.534 1.752 202.35 32.184 192.654 54.648C193.806 56.184 196.014 59.928 196.014 63.768C196.014 65.976 195.246 69.048 193.326 69.048C190.734 69.048 189.678 66.264 189.678 63.096C189.678 60.12 190.638 56.76 191.406 54.936C185.166 46.104 172.302 37.752 148.974 37.752C102.222 37.752 76.9737 70.776 76.9737 99.96C76.9737 126.936 102.606 157.752 152.142 157.752C195.246 157.752 211.278 140.856 264.078 140.856C302.67 140.856 316.014 157.272 320.718 163.128L321.294 163.896C321.39 164.088 321.486 164.184 321.486 164.376C321.486 164.664 321.294 164.856 321.102 164.856C321.006 164.856 320.91 164.76 320.814 164.664L320.526 164.184C318.03 160.824 305.742 144.408 264.078 144.408C226.83 144.408 197.454 158.424 152.142 158.424C99.9177 158.424 72.7497 126.936 72.7497 99.48C72.7497 71.736 99.3417 36.888 149.166 36.888C172.014 36.888 185.262 45.048 191.886 53.784C202.158 30.936 232.014 0.887993 277.614 0.887993C319.662 0.887993 331.95 23.544 331.95 43.416C331.95 87.672 292.302 111.288 292.302 120.888C292.302 121.56 292.494 122.424 293.55 122.424C298.254 122.424 306.99 114.168 314.67 105.816H315.726C307.95 114.456 298.638 123.192 293.358 123.192C290.862 123.192 288.846 121.368 288.846 118.488C288.846 117.048 289.422 115.32 290.574 113.304ZM194.958 122.424C198.318 122.424 205.806 115.704 212.142 108.888C216.174 104.568 219.726 100.344 221.838 97.752C222.99 96.312 224.142 94.68 224.142 93.528C224.142 92.76 223.566 92.184 222.03 92.184C215.022 92.184 193.614 115.416 193.614 121.176C193.614 121.944 193.998 122.424 194.958 122.424ZM276.078 122.424C280.206 122.424 288.558 114.072 295.278 106.488L304.302 96.12C304.974 95.256 305.358 94.296 305.358 93.624C305.358 92.76 304.686 92.184 303.15 92.184C296.238 92.184 274.734 115.416 274.734 121.176C274.734 121.944 275.118 122.424 276.078 122.424ZM193.326 68.088C194.478 68.088 194.958 65.688 194.958 64.152C194.958 60.984 193.422 57.432 192.27 55.8C191.79 56.76 190.83 60.312 190.83 63.192C190.83 65.784 191.502 68.088 193.326 68.088ZM327.204 113.304H326.628C320.868 118.968 315.588 123 312.612 123C308.964 123 307.428 121.368 307.428 118.872C307.428 110.328 325.188 91.416 339.108 91.416C341.412 91.416 342.66 92.28 342.66 93.624C342.66 93.816 342.564 94.008 342.564 94.2C344.1 92.472 345.156 91.32 345.156 91.32H352.644C340.932 103.8 328.26 117.528 328.26 121.368C328.26 121.944 328.644 122.232 329.412 122.232C334.02 122.232 342.852 113.976 350.532 105.624H351.588C343.812 114.264 334.5 123 329.22 123C326.916 123 325.188 121.56 325.188 118.968C325.188 117.432 325.764 115.512 327.204 113.304ZM312.708 122.424C316.068 122.424 323.556 115.704 329.892 108.888C333.924 104.568 337.476 100.344 339.588 97.752C340.74 96.312 341.892 94.68 341.892 93.528C341.892 92.76 341.316 92.184 339.78 92.184C332.772 92.184 311.364 115.416 311.364 121.176C311.364 121.944 311.748 122.424 312.708 122.424ZM101.286 266.672L101.19 266.864C112.998 267.824 124.998 273.392 134.31 273.392C165.51 273.392 180.486 233.36 164.358 233.36C149.286 233.36 138.534 258.224 146.31 263.408C147.078 263.888 146.694 264.56 145.926 264.08C134.982 257.552 144.486 232.592 164.358 232.592C187.494 232.592 170.598 274.64 134.214 274.64C117.702 274.64 108.198 271.568 95.3338 269.36C89.9578 271.568 84.3898 272.816 78.4378 272.816C76.3258 272.816 69.7018 272.912 69.7018 270.032C69.7018 263.984 93.5098 266.192 97.3498 266.48C119.046 255.152 136.326 225.968 148.998 210.032C135.846 212.816 109.158 213.968 96.6778 222.896C88.9018 228.464 88.2298 240.272 100.998 240.176C109.254 240.08 117.222 233.072 122.598 227.504L126.15 223.76H127.206L123.558 227.6C117.99 233.36 109.254 241.04 100.806 241.04C86.2138 241.136 85.7338 227.312 94.4698 220.4C106.854 210.512 135.75 212.048 149.862 208.976C163.302 192.08 179.622 174.896 192.294 174.896C194.886 174.896 196.998 175.856 196.998 179.024C197.094 183.632 187.398 191.792 184.038 194.288C176.55 199.664 166.278 204.848 157.446 207.824C143.142 225.392 124.518 254.576 101.286 266.672ZM158.694 206.288L158.886 206.384C167.238 203.408 176.55 198.512 183.462 193.52C186.534 191.312 196.23 183.248 196.134 179.024C196.134 176.336 194.406 175.76 192.198 175.76C185.19 175.76 171.174 191.024 158.694 206.288ZM78.3418 272.048C83.3338 271.952 88.0378 270.704 92.5498 268.784C87.3658 267.92 82.3738 267.344 78.1498 267.344C75.0778 267.344 70.6618 267.92 70.4698 270.032C70.3738 272.144 76.8058 272.144 78.3418 272.048ZM244.03 242.576C237.694 246.608 229.726 252.08 223.966 257.744L217.246 265.904H210.238C216.478 258.8 223.006 250.544 229.054 243.056C231.934 239.504 233.374 237.68 233.374 236.624C233.374 235.856 233.182 235.472 232.606 235.472C229.534 235.472 224.158 240.944 217.15 248.624C209.374 257.264 200.062 266 194.782 266C192.478 266 190.75 264.56 190.75 261.968C190.75 260.432 191.326 258.512 192.766 256.304H192.19C186.43 261.968 181.15 266 178.174 266C174.526 266 172.99 264.368 172.99 261.872C172.99 253.328 190.75 234.416 204.67 234.416C206.974 234.416 208.222 235.28 208.222 236.624C208.222 236.816 208.126 237.008 208.126 237.2C209.662 235.472 210.718 234.32 210.718 234.32H218.206C206.494 246.8 193.822 260.528 193.822 264.368C193.822 264.944 194.206 265.232 194.974 265.232C199.582 265.232 208.414 256.976 216.094 248.624C222.622 241.52 229.054 234.512 232.894 234.512C236.35 234.512 237.502 235.952 237.502 238.064C237.502 241.712 230.11 249.968 227.614 253.52C233.374 248.624 240.094 244.016 245.374 240.752C246.814 238.256 250.654 233.456 253.342 233.456C254.014 233.456 254.302 233.84 254.302 234.416C254.302 234.8 254.11 235.376 253.822 235.76C253.054 237.008 247.582 240.176 245.854 241.328C244.606 242.48 240.67 249.008 240.67 252.464C240.67 253.712 241.246 254.576 242.59 254.576C244.99 254.576 247.966 252.176 250.27 249.584L251.23 248.624H252.286L251.326 249.584C249.31 251.888 245.662 255.344 242.59 255.344C240.574 255.344 239.902 254.192 239.902 252.56C239.902 249.392 242.782 244.304 244.03 242.576ZM178.27 265.424C181.63 265.424 189.118 258.704 195.454 251.888C199.486 247.568 203.038 243.344 205.15 240.752C206.302 239.312 207.454 237.68 207.454 236.528C207.454 235.76 206.878 235.184 205.342 235.184C198.334 235.184 176.926 258.416 176.926 264.176C176.926 264.944 177.31 265.424 178.27 265.424ZM263.548 256.304H262.972C257.212 261.968 251.932 266 248.956 266C245.307 266 243.771 264.368 243.771 261.872C243.771 253.328 261.532 234.416 275.452 234.416C277.756 234.416 279.004 235.28 279.004 236.624C279.004 236.816 278.908 237.008 278.908 237.2C280.444 235.472 281.5 234.32 281.5 234.32H288.988C277.276 246.8 264.604 260.528 264.604 264.368C264.604 264.944 264.988 265.232 265.756 265.232C270.364 265.232 279.196 256.976 286.876 248.624H287.932C280.156 257.264 270.844 266 265.564 266C263.26 266 261.532 264.56 261.532 261.968C261.532 260.432 262.108 258.512 263.548 256.304ZM249.052 265.424C252.412 265.424 259.9 258.704 266.236 251.888C270.268 247.568 273.82 243.344 275.932 240.752C277.084 239.312 278.236 237.68 278.236 236.528C278.236 235.76 277.66 235.184 276.124 235.184C269.116 235.184 247.707 258.416 247.707 264.176C247.707 264.944 248.091 265.424 249.052 265.424Z" fill="white"/>
              </svg>

            </p>
          </div>
        </div>
        <div className="mt-12 relative z-10 flex flex-col items-center text-center space-y-8 sm:space-y-10 p-4 sm:p-8">
        
          <Card className="bg-transparent border-none shadow-none w-full animate-in fade-in duration-1000 delay-200">
            <CardContent className="font-body text-lg sm:text-xl text-foreground/80 space-y-1 pt-6">
              <br/>
              <p>Hay momentos inolvidables que se </p>
              <p>atesoran en el corazón por siempre</p>
              <p>Por eso, quiero que me acompañes</p>
              <p>a vivir uno de ellos</p>
            </CardContent>
          </Card>
          
          <MusicPlayer audioSrc={audioSrc} autoPlay={isOpened} className="animate-in fade-in duration-1000 delay-500" />

          <EventDateDisplay 
            monthName="Septiembre"
            dayName="Sábado"
            dayNumber="20"
            year="2025"
            time="7:30 PM"
            className="animate-in fade-in duration-1000 delay-700 text-primary"
          />

          <div className="relative animate-in fade-in duration-1000 delay-900">
            <Image
              src="/decor1.png"
              alt="Mis XV Años"
              width={200}
              height={242}
              data-ai-hint="quinceanera logo"
              className="relative z-10"
            />
            <div className="flickering-light-center"></div>
          </div>

          <div className="w-full max-w-md animate-in fade-in duration-1000 delay-800">
            <CountdownTimer targetDate={eventTargetDate} />
          </div>
       
          <div className="w-full animate-in fade-in duration-1000 delay-1100">
            <SectionCard 
              title="Recepción"
              locationButton={{ text: "Villa Fontana, del club Terraza 600mts Sur", url: "https://maps.app.goo.gl/DukfLpvBfZ9eyYeL7" }}
              titleClassName="text-primary"
            >
              <div className="flex flex-col items-center space-y-2 mb-3">
                <Image src="/champagne.png" alt="champagne Icon" width={40} height={40} className="shrink-0" data-ai-hint="champagne"/>
              </div>
              <div className="mt-1 space-y-1 text-center">
                <p className="flex items-center justify-center">DoubleTree by Hilton Managua,<br /> Salón Mombacho</p>
              </div>
            </SectionCard>
          </div>

          <div className="w-full animate-in fade-in duration-1000 delay-[1300ms]">
            <SectionCard 
              title="Código de Vestimenta"
              titleClassName="text-primary"
            >
              <div><p className="text-base sm:text-lg text-foreground/90">Formal</p></div>

               <Image src="/dress-code-fix.png" alt="Código de Vestimenta Formal" width={300} height={300} className="mx-auto mt-3 mb-3" data-ai-hint="formal attire" />
            </SectionCard>
          </div>

          <div className="w-full animate-in fade-in duration-1000 delay-[1400ms]">
            <SectionCard
              title="Colores Reservados"
              titleClassName="text-primary"
            >
              <div className="flex justify-center space-x-3 mt-2">
                <Image src="/reservados.jpeg" alt="Color Reservado 1" width={200} height={200} className="rounded-md shadow-md" data-ai-hint="color swatch" />
              </div> <br />
              <p className="text-foreground/70 mt-3 px-4">
                Con afecto, solicitamos dejar estos tonos para la quinceañera 👑 y su corte
              </p>
            </SectionCard>
          </div>


          <div className="w-full animate-in fade-in duration-1000 delay-[1500ms]">
            <SectionCard 
              title="Regalos" 
              titleClassName="text-primary"
            >
              <div className="gift-text">
                <span>Agradecemos sus muestras de <br /> cariño en sobre</span>
                <div className="envelope">✉️</div>
              </div>
            </SectionCard>
          </div>
        </div>

        

        
        <div className="flex flex-col items-center pt-10 pb-24 px-4">
            <div className="flex flex-col items-center animate-in fade-in duration-1000 delay-[200ms] w-full max-w-xs">
              <Input
                type="text"
                placeholder="Nombre y Apellido"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                className="mt-4 mb-3 !bg-stone-200/80 border-primary text-center w-full max-w-[280px] placeholder:text-black text-black"
                aria-label="Tu nombre y apellido"
              />
              <Button
                onClick={handleConfirm}
                disabled={isConfirming}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-headline text-xl py-3 px-6 sm:py-4 sm:px-8 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 w-full mb-2"
                aria-label="Confirmar asistencia"
              >
                {isConfirming ? (
                  <>
                    <Loader2 className="mr-2 h-6 w-6 animate-spin" />
                    Confirmando...
                  </>
                ) : (
                  'Confirmar Asistencia'
                )}
              </Button>

            </div>
            <div className="animate-in fade-in duration-1000 delay-[400ms] mt-4">
              <p className="font-body text-lg sm:text-xl text-foreground/80 text-center px-4">¡Gracias por acompañarme <br/> en este día tan especial!</p>
            </div>
          </div>

        {/* Footer */}
        <footer className="w-full text-center py-4 bg-background/80 dark:bg-neutral-900/80 text-foreground/60 text-xs bg-[url('/paper-texture.jpg')] bg-cover bg-center backdrop-blur-md"><a href="https://www.instagram.com/invitaciones_digitales_505?utm_source=ig_web_button_share_sheet&igsh=cWl4ZGN1ZjR3ODlw" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 text-foreground/70 hover:text-primary transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg><span>Invitaciones Digitales 505</span></a></footer>

      </div>
       {showBackToTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 h-12 w-12 rounded-full bg-primary/80 backdrop-blur-sm p-0 text-primary-foreground shadow-lg transition-transform hover:scale-110 hover:bg-primary"
          aria-label="Volver al inicio"
        >
          <ArrowUp className="h-6 w-6" />
        </Button>
      )}
    </main>
  );
}
