// created by risyandi.com - 2026
import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { fetchApi } from '@/lib/api';

export function useAuth() {
  const router = useRouter();
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('accessToken');
      if (!token) {
        setIsAuthenticated(false);
        if (pathname !== '/login' && pathname !== '/register') {
          router.push('/login');
        }
        return;
      }
      
      try {
        await fetchApi('/user');
        setIsAuthenticated(true);
      } catch (e: any) {
        if (e.status === 401) {
          localStorage.removeItem('accessToken');
          setIsAuthenticated(false);
          if (pathname !== '/login' && pathname !== '/register') {
            router.push('/login');
          }
        }
      }
    };
    
    checkAuth();
  }, [router, pathname]);

  return { isAuthenticated };
}
