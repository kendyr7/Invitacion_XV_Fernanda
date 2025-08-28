"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface LocationModalProps {
  googleMapsUrl: string;
  wazeUrl: string;
  children: React.ReactNode;
}

export function LocationModal({ googleMapsUrl, wazeUrl, children }: LocationModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Abrir ubicación en</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Button asChild>
            <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
              Google Maps
            </a>
          </Button>
          <Button asChild>
            <a href={wazeUrl} target="_blank" rel="noopener noreferrer">
              Waze
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}