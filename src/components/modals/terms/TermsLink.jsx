import { useDataStore } from "../../../stores/DataContext"

export default function TermsLink() {
    const store = useDataStore()

    return (
        <a type="button" className="cursor-pointer text-xs text-magBlue hover:text-magGreen hover:underline" onClick={() => store.setTermsModalShow(true)} rel="noreferrer">
            Terms
        </a>
    )
}