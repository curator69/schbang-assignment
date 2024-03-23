import "@/styles/globals.css";

import { Nunito_Sans } from "next/font/google";

const NunitoSans = Nunito_Sans({
  weight: ["900", "700", "400"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${NunitoSans.className} w-[100vw]`}>
      <Component {...pageProps} />
    </main>
  );
}
