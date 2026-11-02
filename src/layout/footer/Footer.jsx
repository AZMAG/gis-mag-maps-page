import ContactInfo from "./ContactInfo"
import SubscribeForm from "./SubscribeForm"
import SocialMedia from "./SocialMedia"
import FooterLegal from "./FooterLegal"

export default function Footer() {
  return (
    <footer id="footer" className="shrink-0 bg-slate-50 text-magBlue">
      <div className="flex flex-col flex-wrap container mx-auto pt-9">
        <section className="grid grid-cols-1 justify-items-center gap-8 md:gap-10 lg:gap-16 md:grid-cols-3 mx-8">
          <ContactInfo />
          <SubscribeForm />
          <SocialMedia />
        </section>
        <FooterLegal />
      </div>
    </footer>
  )
}
