/** @type {DocConfig} */
const docConfig = {
    app: {
        version: "v6.7.1",
        releaseDate: "2026-10-30",
        created: "2014-10-21",
        copyright: "2026",
    },
    analytics: {
        measurementId: import.meta.env.VITE_GA_MEASUREMENT_ID,
    },
    links: {
        magHome: "https://azmag.gov/",
        magMaps: "https://maps.azmag.gov/",
        RADigestLink:
            "https://public.govdelivery.com/accounts/AZMAG/subscriber/new?topic_id=AZMAG_292",
        RADigestArchived: "https://azmag.gov/Newsroom/RADigest",
        InfoGraphicLink:
            "https://azmag.gov/About-Us/Divisions/Regional-Analytics-Division/Infographics-Maps-and-Reports",
        MapsAndDataLink: "https://azmag.gov/Programs/Maps-and-Data/",
        GeoDataOpenDataLink: "https://geodata-azmag.opendata.arcgis.com/",
    },
    contacts: [
        {
            id: "jhoward",
            name: "Jason Howard",
            title: "GIS Manager",
            email: "https://www.azmag.gov/Contact/4788",
        },
        {
            id: "maginfo",
            name: "MAG Information",
            title: "mag@azmag.gov",
        },
        {
            id: "magnoreply",
            name: "MAG no-reply",
            title: "no-reply@azmag.gov",
        },
    ],
    socialMedia: [
        {
            id: "facebook",
            name: "Facebook",
            link: "https://www.facebook.com/MAGRegional/",
        },
        {
            id: "twitter",
            name: "Twitter",
            link: "https://twitter.com/magregion",
        },
        {
            id: "youtube",
            name: "Youtube",
            link: "https://www.youtube.com/user/MAGCommunications",
        },
        {
            id: "instagram",
            name: "Instagram",
            link: "https://www.instagram.com/mag_regional/",
        },
        {
            id: "linkedin",
            name: "Linkedin",
            link: "https://www.linkedin.com/company/maricopa-association-of-governments/mycompany/",
        },
    ],
};

export const getPrimaryContact = () =>
    docConfig.contacts.find((c) => c.primary) ?? docConfig.contacts[0];

export const getContactById = (id) =>
    docConfig.contacts.find((c) => c.id === id);

export default docConfig;
