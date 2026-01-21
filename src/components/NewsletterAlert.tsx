import { useEffect, useRef, useState } from "react";

import { IoClose } from "react-icons/io5";
import { BsEnvelopePaperHeart } from "react-icons/bs";

export default function NewsletterAlert() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const emailInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setDialogOpen(true), 7000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-gray-900/50 transition-all duration-1000 ${dialogOpen ? "visible opacity-100" : "invisible opacity-0"}`}
        onClick={() => setDialogOpen(false)}
      ></div>

      <dialog
        open
        className={`fixed bottom-5 z-100 h-fit w-[90%] max-w-120 place-self-center rounded-md border-1 border-indigo-900/25 bg-white shadow-lg shadow-indigo-950/50 transition-all duration-700 md:bottom-[50vh] ${dialogOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
      >
        <IoClose
          className="absolute top-2 right-2 text-2xl"
          onClick={() => setDialogOpen(false)}
        />
        <div className="flex flex-col p-6">
          <h1 className="oswald-header text-center text-2xl">
            Want to stay in the loop?
          </h1>

          <h2 className="text-center text-lg text-gray-600 italic">
            Sign up for our newsletter!
          </h2>

          <BsEnvelopePaperHeart className="my-2 self-center text-4xl text-indigo-600" />

          {!emailSubmitted && (
            <div className="flex flex-col items-center justify-center xs:flex-row xs:gap-2">
              <input
                ref={emailInputRef}
                id="email-input"
                type="email"
                placeholder="Your email"
                onChange={(event) => {
                  if (emailInputRef.current && event.target.value !== "") {
                    setEmailValid(emailInputRef.current.validity.valid);
                  } else {
                    setEmailValid(false);
                  }
                }}
                className="my-2 w-full max-w-70 rounded-sm px-2 caret-indigo-700 inset-shadow-xs inset-shadow-indigo-950/25 outline-2 outline-indigo-700 invalid:outline-red-400"
              />

              <button
                className={`h-fit rounded-sm px-4 py-1 ${emailValid ? "bg-indigo-400" : "bg-gray-400 text-gray-600"}`}
                onClick={() => {
                  if (emailValid) {
                    setEmailSubmitted(true);
                  }
                }}
              >
                Submit
              </button>
            </div>
          )}

          {emailSubmitted && (
            <div>
              <p className="text-center leading-5">
                Thanks! Check your inbox for a confirmation email.
              </p>
              <p className="mt-2 text-center text-sm leading-4 text-gray-500 italic">
                (This is just a demonstration. It will not actually send an
                email.)
              </p>
            </div>
          )}
        </div>
      </dialog>
    </>
  );
}
