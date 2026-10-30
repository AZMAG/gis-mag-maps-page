import { useDataStore } from "../../stores/DataContext"
import { getContactById } from "../../config/doc-config"

export default function ContactUsLink({contactId}) {
    const store = useDataStore()
    const contact = getContactById(contactId)

    const handleClick = () => {
        store.setSelectedContact(contact.id)
        store.setContactUsModalShow(true)
    }


    return (
        <a
            onClick={handleClick}
            className="text-magBlue cursor-pointer font-bold hover:underline">
            {contact.title}
        </a>
    )
}


