import DocConfig from "../../config/doc-config"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"

export default function ContactInfo() {
  return (
    <div id="contact-info" className="text-left text-sm">
      <p className="mb-2 mt-0 text-lg font-semibold leading-tight">Contact</p>
      <a
        href={DocConfig.links.magHome}
        rel="noopener noreferrer"
        target="_blank"
        className="font-semibold hover:text-magGreen hover:underline">
        Maricopa Association of Governments
      </a>
      <br />
      <span>302 North 1st Avenue, Suite 200</span>
      <br />
      <span>Phoenix, Arizona 85003</span>
      <br />
      <span>
        <FontAwesomeIcon icon={faPhone} />
        &nbsp;(602) 254-6300
      </span>
      <br />
      <span>
        <FontAwesomeIcon icon={faEnvelope} />
        &nbsp;
        <a
          href={DocConfig.contacts.find((c) => c.id === "jhoward")?.email}
          rel="noopener noreferrer"
          target="_blank"
          className="hover:text-magGreen hover:underline cursor-pointer">
          Jason Howard, GIS Manager
        </a>
      </span>
    </div>
  )
}
