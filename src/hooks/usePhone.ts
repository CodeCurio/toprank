import { usePathname } from 'next/navigation';

export function usePhone(locationName?: string) {
  const pathname = usePathname();
  
  const isAltLocation = 
    locationName?.toLowerCase() === 'gonda' || 
    locationName?.toLowerCase() === 'mohali' ||
    pathname?.includes('gonda') || 
    pathname?.includes('mohali');

  return {
    raw: isAltLocation ? "9115439115" : "9305030523",
    display: isAltLocation ? "+91 91154 39115" : "+91 93050 30523",
  };
}
