import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import docConfig from "../../config/doc-config"
import {
  faTwitter,
  faFacebook,
  faYoutube,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"

const socialIcons = {
  facebook: faFacebook,
  twitter: faTwitter,
  youtube: faYoutube,
  instagram: faInstagram,
  linkedin: faLinkedin,
}

export default function SocialMedia() {
  return (
    <div id="social-media" className="flex space-x-4">
      {docConfig.socialMedia.map((item) => (
        <a
          className="text-3xl hover:text-magGreen"
          href={item.link}
          rel="noopener noreferrer"
          target="_blank"
          title={item.name}
          aria-label={`Visit MAG on ${item.name} (opens in a new tab)`}
          key={item.id}>
          <span className="sr-only">Visit MAG on {item.name}</span>
          <em>
            <FontAwesomeIcon icon={socialIcons[item.id]} aria-hidden="true" />
          </em>
        </a>
      ))}
    </div>
  )
}
