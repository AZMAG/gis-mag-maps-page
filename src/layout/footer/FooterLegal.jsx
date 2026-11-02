import DocConfig from "../../config/doc-config"
import LegalLink from "../../components/modals/legal/LegalLink"
import PrivacyLink from "../../components/modals/privacy/PrivacyLink"
import TermsLink from "../../components/modals/terms/TermsLink"

export default function FooterLegal() {
  return (
    <section className="container mx-auto my-11 flex flex-row flex-wrap justify-center px-4 text-center text-xs">
      <div className="flex gap-1">
        <span>Copyright</span>
        <span>&copy;</span>
        <span>{DocConfig.app.copyright}</span>
        <a
          href={DocConfig.links.magHome}
          className="font-medium hover:text-magGreen hover:underline"
          target="_blank"
          rel="noreferrer">
          Maricopa Association of Governments
        </a>
      </div>
      <ul className="flex list-none justify-center divide-x divide-magBlue md:order-2">
        <li className="px-2">{DocConfig.app.version}</li>
        <li className="px-2">{DocConfig.app.releaseDate}</li>
        <li className="px-2">
          <PrivacyLink />
        </li>
        <li className="px-2">
          <TermsLink />
        </li>
        <li className="px-2">
          <LegalLink />
        </li>
      </ul>
    </section>
  )
}
