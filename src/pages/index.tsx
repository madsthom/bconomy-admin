import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { trpc } from "../utils/trpc";
import { Invoice } from "./components/Invoice";
import InvoiceTable from "./components/InvoiceTable";
import Header from "./components/Header";

const Home: NextPage = () => {
  const hello2 = trpc.example.hello2.useQuery({ torben: "from tRPC" });

  const [invoices, setInvoices] = useState<Invoice[]>([]);

  useEffect(() => {
    setInvoices([
      {
        invoiceName: "Maria f - Faktura 2",
        scanDate: new Date(),
        fieldsWrong: 3,
      },
      {
        invoiceName: "Megahost - Faktura #8",
        scanDate: new Date(),
        fieldsWrong: 1,
      },
      {
        invoiceName: "Accura adv.",
        scanDate: new Date(),
        fieldsWrong: 15,
      },
      {
        invoiceName: "0x07f - Invoice 23",
        scanDate: new Date(),
        fieldsWrong: 1,
      },
    ]);
  }, []);

  return (
    <>
      <Head>
        <title>bconomy admin</title>
        <meta name="description" content="bconomy admin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header
        links={[
          {
            link: "/about",
            label: "Features",
            links: [],
          },
          {
            link: "#1",
            label: "Learn",
            links: [
              {
                link: "/docs",
                label: "Documentation",
              },
              {
                link: "/resources",
                label: "Resources",
              },
              {
                link: "/community",
                label: "Community",
              },
              {
                link: "/blog",
                label: "Blog",
              },
            ],
          },
          {
            link: "/about",
            label: "About",
            links: [],
          },
          {
            link: "/pricing",
            label: "Pricing",
            links: [],
          },
          {
            link: "#2",
            label: "Support",
            links: [
              {
                link: "/faq",
                label: "FAQ",
              },
              {
                link: "/demo",
                label: "Book a demo",
              },
              {
                link: "/forums",
                label: "Forums",
              },
            ],
          },
        ]}
      ></Header>

      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
        <InvoiceTable invoices={invoices}></InvoiceTable>
      </main>
    </>
  );
};

export default Home;
