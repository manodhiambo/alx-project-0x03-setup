// pages/_app.tsx
import Layout from "@/components/layouts/Layout";
import "@/styles/global.css";

export default function App({ Component, pageProps }: any) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
