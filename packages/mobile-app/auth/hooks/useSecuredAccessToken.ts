import * as SecureStore from 'expo-secure-store';
import { useEffect, useState } from 'react';

const ACCESS_TOKEN_SECURE_STORE_KEY = 'ACCESS_TOKEN';

export default function (): { ready: boolean; token: string | null } {
  const [ready, setReady] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    async function fetchToken() {
      const token = await SecureStore.getItemAsync(
        ACCESS_TOKEN_SECURE_STORE_KEY,
      );
      setReady(true);
      setToken(token);
    }

    fetchToken();
  }, []);

  return { ready, token };
}
