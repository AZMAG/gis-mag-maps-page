import { useDataStore } from "../../../stores/DataContext"

export default function LegalLink() {
    const store = useDataStore()

    return (
        <a type="button" className="cursor-pointer text-xs text-magBlue hover:text-magGreen hover:underline" onClick={() => store.setLegalModalShow(true)} rel="noreferrer">
            Legal Disclaimer
        </a>
    )
}



