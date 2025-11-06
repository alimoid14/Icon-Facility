import React, { useState, useEffect } from "react";

function ContactFormPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check if popup already shown in this session
    const popupShown = sessionStorage.getItem("contactPopupShown");

    if (!popupShown) {
      setVisible(true); // show immediately on load
    }
  }, []);

  const handleClose = () => {
    setVisible(false);
    sessionStorage.setItem("contactPopupShown", "true"); // mark as shown
  };

  if (!visible) return null; // don't render anything if not visible
  return (
    <section className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-xl shadow-xl p-6 md:p-12 w-96 md:w-2xl relative overflow-visible">
        <div
          id="overlay"
          className="absolute rounded-xl w-full h-full top-4 left-4 transform border-2 border-dashed border-orange-300 -z-10"
        ></div>

        <button
          type="button"
          onClick={handleClose}
          className="absolute top-4 right-4 px-2 !rounded-md border text-red-500 hover:bg-red-500 hover:text-white z-20"
        >
          ✕
        </button>

        <header>
          <h2
            id="contact-popup-title"
            className="text-xl w-4/5 mx-auto font-semibold mb-3 text-center !text-blue-900"
          >
            We'd love to hear from you!
          </h2>
          <p className="text-center text-gray-500">🌐 New Delhi - 110085</p>
        </header>

        <main className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 hidden md:block">
            <img src="" alt="popup-image" />
          </div>
          <form className="flex flex-col gap-3 flex-1 my-auto text-gray-600">
            <input
              type="text"
              placeholder="Your Name"
              aria-label="Your Name"
              className="rounded-full py-2 px-4 !border-2 !border-gray-300 focus:!border-gray-400 focus:!outline-none z-20"
            />
            <input
              type="email"
              placeholder="Whats your Email"
              aria-label="Whats your Email"
              className="rounded-full py-2 px-4 !border-2 !border-gray-300 focus:!border-gray-400 focus:!outline-none z-20"
            />
            <textarea
              placeholder="Your Question or Message"
              aria-label="Your Question or Message"
              className="rounded-md py-2 px-4 !border-2 !border-gray-300 focus:!border-gray-400 focus:!outline-none z-20"
              rows="3"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-600 via-cyan-600 to-blue-400 w-full !rounded-full text-white py-2 border-blue-700 hover:bg-bg-gradient-to-r hover:from-purple-700 hover:via-cyan-700 hover:to-blue-500 transition mx-auto z-20"
            >
              Send
            </button>
            <p className="text-center text-gray-500">
              Call us at:{" "}
              <a className="!no-underline" href="#">
                99999999
              </a>{" "}
              /{" "}
              <a href="#" className="!no-underline">
                99999999
              </a>{" "}
            </p>
          </form>
        </main>
      </div>
    </section>
  );
}

export default ContactFormPopup;
