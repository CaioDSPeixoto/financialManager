import '@/styles/globals.css';
import { Session, createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import type { AppProps } from 'next/app';
import { useState } from 'react';

export default function App({ Component, pageProps }: AppProps<{initialSession: Session;}>) {

  const [supabase] = useState(() =>
    createPagesBrowserClient({
      supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL || "",
      supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "",
    })
  );

  return (
    <SessionContextProvider
        supabaseClient={supabase}
        initialSession={pageProps.initialSession}
      >
          <Component {...pageProps} />
      </SessionContextProvider>
     );
}
