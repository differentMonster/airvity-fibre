import { client } from 'client';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
export default function Logout() {
  const router = useRouter();
  const { isLoggedOut, logout } = client.auth.useLogout();
  useEffect(() => {
    if (isLoggedOut !== undefined) {
      return;
    }

    logout();
  }, [isLoggedOut, logout]);

  useEffect(() => {
    if (isLoggedOut) {
      router.push('/');
    }
  }, [router, isLoggedOut]);
  return <>Logging out...</>;
}
