import { AppProps } from "next/app";
import "../styles/global.scss";
/* import 'tailwindcss/tailwind.css' */

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
