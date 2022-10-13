// src/pages/_app.tsx
import "../styles/globals.css";
import type { AppType } from "next/app";
import { trpc } from "../utils/trpc";
import { MantineProvider } from "@mantine/core";

const MyApp: AppType = ({ Component, pageProps }) => (
  <MantineProvider withGlobalStyles withNormalizeCSS>
    <Component {...pageProps} />
  </MantineProvider>
);

export default trpc.withTRPC(MyApp);
