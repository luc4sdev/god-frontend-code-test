import { AppProps } from 'next/app';
import '../public/css/styles.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any;
  return <AnyComponent {...pageProps} />;
}