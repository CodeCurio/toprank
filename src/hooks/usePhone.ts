import { usePathname } from 'next/navigation';

export function usePhone() {
  const pathname = usePathname();
  const segments = pathname?.split('/') || [];
  const isGondaOrMohali = segments.includes('gonda') || segments.includes('mohali');

  if (isGondaOrMohali) {
    return {
      raw: "9115439115",
      display: "+91 91154 39115",
      secondaryRaw: "9305030523",
      secondaryDisplay: "+91 93050 30523",
    };
  }

  return {
    raw: "9305030523",
    display: "+91 93050 30523",
    secondaryRaw: "9115439115",
    secondaryDisplay: "+91 91154 39115",
  };
}
