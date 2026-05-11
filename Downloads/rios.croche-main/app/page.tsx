import About from "@/components/About";
import Customization from "@/components/Customization";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Navbar from "@/components/Navbar";
import SocialProof from "@/components/SocialProof";
import {
  createWhatsAppLink,
  defaultWhatsAppMessage,
  personalizeWhatsAppMessage,
} from "@/utils/whatsapp";

const whatsappLink = createWhatsAppLink(defaultWhatsAppMessage);
const personalizeLink = createWhatsAppLink(personalizeWhatsAppMessage);

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <Navbar whatsappLink={whatsappLink} />
      <main className="flex-1">
        <Hero whatsappLink={whatsappLink} />
        <Highlights />
        <SocialProof />
        <About />
        <Customization whatsappLink={personalizeLink} />
      </main>
      <Footer whatsappLink={whatsappLink} />
    </div>
  );
}
