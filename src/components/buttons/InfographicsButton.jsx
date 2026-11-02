import DocConfig from "../../config/doc-config"

export default function InfographicButton() {
  const active = true

  return (
    <>
      {active ? (
        <a
          href={DocConfig.links.InfoGraphicLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-lg cursor-pointer bg-magBlue px-5 py-3 text-center text-base font-medium text-white hover:bg-magGreen">
          See infographics
        </a>
      ) : (
        <span
          aria-disabled="true"
          className="inline-flex items-center justify-center rounded-lg cursor-not-allowed bg-magBlue px-5 py-3 text-center text-base font-medium text-white opacity-50">
          See infographics
        </span>
      )}
    </>
  )
}
