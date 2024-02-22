import toast, { Toaster } from "react-hot-toast"

export default function Prompt() {
  const fakeGenerate = () => {
    toast((t) => (
      <span>
        The Sora Official API is not ready yet, try to{" "}
        <a
          href="https://getsoraapp.com"
          className="font-semibold text-green-600"
        >
          subscribe here
        </a>{" "}
        to know when it's ready.
      </span>
    ))
  }

  return (
    <div className="flex items-start space-x-4 w-full p-4">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="min-w-0 flex-1">
        <form action="#" className="relative">
          <div className="overflow-hidden rounded-lg shadow-sm ring-1 ring-inset ring-gray-600 focus-within:ring-2 focus-within:ring-green-900">
            <label htmlFor="prompt" className="sr-only">
              Describe your video
            </label>
            <textarea
              rows={3}
              name="prompt"
              id="prompt"
              className="block w-full resize-none border-0 bg-transparent py-1.5 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="Describe your video..."
              defaultValue={""}
            />

            {/* Spacer element to match the height of the toolbar */}
            <div className="py-2" aria-hidden="true">
              {/* Matches height of button in toolbar (1px border + 36px content height) */}
              <div className="py-px">
                <div className="h-9" />
              </div>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2">
            <div className="flex items-center space-x-5"></div>
            <div className="flex-shrink-0">
              <button
                type="button"
                className="pointer z-10 mt-6 rounded-lg border border-white bg-white px-3 py-2 text-sm font-semibold text-black transition hover:bg-white/10 hover:text-white md:mt-4"
                onClick={fakeGenerate}
              >
                Generate
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
