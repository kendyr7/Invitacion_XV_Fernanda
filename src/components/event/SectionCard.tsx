
"use client";
import type { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
import { LocationModal } from './LocationModal';

interface SectionCardProps {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  googleMapsUrl?: string;
  wazeUrl?: string;
  className?: string;
  titleClassName?: string;
  contentClassName?: string;
  animationDelay?: string;
}

const SectionCard: React.FC<SectionCardProps> = ({ title, icon, children, googleMapsUrl, wazeUrl, className, titleClassName, contentClassName, animationDelay }) => {

  return (
    <Card 
      className={`w-full max-w-md bg-transparent border-none shadow-none animate-in fade-in duration-700 mx-auto ${className}`} 
      style={{ animationDelay: animationDelay }}
    >
      <CardHeader className="pb-3 pt-5">
        <CardTitle className={`font-headline text-2xl sm:text-3xl text-primary flex items-center justify-center text-center ${titleClassName}`}>
          {icon && <span className="mr-3 text-primary">{icon}</span>}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className={`font-body text-base sm:text-lg text-foreground/90 space-y-2 text-center ${contentClassName}`}>
        {children}
        {googleMapsUrl && wazeUrl && (
          <div className="mt-4 text-center">
            <LocationModal googleMapsUrl={googleMapsUrl} wazeUrl={wazeUrl}>
              <Button className="mt-5 inline-flex items-center text-white hover:text-secondary/80 transition-colors">
                Ver Ubicación
              </Button>
            </LocationModal>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SectionCard;

    