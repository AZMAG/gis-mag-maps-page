export default function SubscribeForm() {
  return (
    <div className="text-center">
      <h2 className="mb-2 mt-0 text-lg font-semibold leading-tight">Subscribe for Updates</h2>
      <p className="mb-1 text-sm">
        Subscribe to get notified of new features and page updates.
      </p>
      <form
        className="flex flex-row"
        id="GD-snippet-form"
        action="https://public.govdelivery.com/accounts/AZMAG/subscribers/qualify"
        target="_blank"
        acceptCharset="UTF-8"
        method="post">
        <input name="utf8" type="hidden" value="&#x2713;" />
        <input
          type="hidden"
          name="authenticity_token"
          value="/5yaZ/1ZgA9i/fRDmNHSwpF9Tmu1hW2wjk39z5MUYyADQvi3BzUGMU232OVdSC0m930iW9T/WeVTcUufD3th3Q=="
        />
        <input type="hidden" name="topic_id" id="topic_id" value="AZMAG_224" />
        <div className="relative grow">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              aria-hidden="true"
              className="h-5 w-5 text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
          </div>
          <input
            className="block w-full rounded-l-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <button
          type="submit"
          name="commit"
          className="bg-magBlue px-5 py-2.5 text-sm font-medium text-white hover:bg-magBlue/75 cursor-pointer">
          Subscribe
        </button>
      </form>
    </div>
  )
}
