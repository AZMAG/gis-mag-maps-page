import docConfig from "../../config/doc-config";

export default function NavLinks() {
  const navLinks = [
    {
      id: "home",
      name: "Maps Home",
      link: "/",
      internal: true,
    },
    {
      id: "mag-data",
      name: "MAG Data",
      link: docConfig.links.MapsAndDataLink,
      internal: false,
    },
    {
      id: "gis-portal",
      name: "Open GIS Portal",
      link: docConfig.links.GeoDataOpenDataLink,
      internal: false,
    }
  ];
  return navLinks;
}
