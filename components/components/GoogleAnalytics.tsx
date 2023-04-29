"use client";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";

declare const gtag: Gtag.Gtag;

export default function GoogleAnalytics({ id }: { id: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  /*----------------------
  Page View Tracking
  ----------------------*/
  useEffect(() => {
    const url = pathname + searchParams.toString();
    gtag("config", id, {
      page_location: url,
      page_title: document.title,
    });
  }, [pathname, searchParams]);

  /*----------------------
  Script Initialization
  ----------------------*/
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${id}');
        `}
      </Script>
    </>
  );
}
