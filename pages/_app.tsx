import '@/styles/globals.css'
import { AppProps } from 'next/app';
import Header from "@/components/Header";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
      <div>
     <Header/>
        <main>
          <Component {...pageProps} />
        </main>
        <footer>My App Footer</footer>
      </div>
  );
};

export default MyApp;
