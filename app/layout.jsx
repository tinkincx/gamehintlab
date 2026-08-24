import "./globals.css";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { AnalyticsConsent } from "@/components/AnalyticsConsent";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { site } from "@/lib/site";

const googleMeasurementId = "G-MQTW3X7Y7F";

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Fresh Game Guides`,
    template: `%s | ${site.name}`
  },
  description: site.description,
  applicationName: site.name,
  category: "games",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | Fresh Game Guides`,
    description: site.description,
    images: [{ url: "/social-card.png", width: 1200, height: 630, alt: "Game Hint Lab source-checked game guides" }]
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Fresh Game Guides`,
    description: site.description,
    images: ["/social-card.png"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              window.gtag = window.gtag || function(){ window.dataLayer.push(arguments); };
              var gameHintLabAnalyticsConsent = "denied";
              try {
                gameHintLabAnalyticsConsent = window.localStorage.getItem("gamehintlab-measurement-consent-v3") === "granted" ? "granted" : "denied";
              } catch (error) {}
              window.gtag("consent", "default", {
                ad_storage: "denied",
                ad_user_data: "denied",
                ad_personalization: "denied",
                analytics_storage: gameHintLabAnalyticsConsent,
                wait_for_update: 500
              });
              window.gtag("set", "ads_data_redaction", true);
              window.gtag("set", "url_passthrough", false);
            `
          }}
        />
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${googleMeasurementId}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.gtag("js", new Date());
              window.gtag("config", "${googleMeasurementId}", {
                send_page_view: false,
                allow_google_signals: false,
                allow_ad_personalization_signals: false
              });
            `
          }}
        />
      </head>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
        <GoogleAnalytics />
        <AnalyticsConsent />
      </body>
    </html>
  );
}
