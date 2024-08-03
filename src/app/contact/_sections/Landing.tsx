import { constContactPage } from "@/constants/cs_main";
import React from "react";

export default function Landing() {
  return (
    <main className="py-14 min-h-screen w-full">
      <div className="text-main-text-100">
        <div className="max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none">
          <div className="max-w-lg space-y-3">
            <h3 className="text-main-200 font-semibold">
              {constContactPage.landing.pageTitle}
            </h3>
            <h1 className="text-start text-gray-800 text-3xl font-semibold sm:text-4xl">
              {constContactPage.landing.heading}
            </h1>
            <p>{constContactPage.landing.para}</p>
            <div>
              <ul className="mt-6 flex flex-col gap-x-10 gap-y-8 items-start">
                {constContactPage.landing.contactMethods.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-x-3">
                    <div className="flex-none text-main-text-100">
                      <item.icon />
                    </div>
                    <p>{item.content}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex-1 mt-12 sm:max-w-lg lg:max-w-md">
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}

function ContactForm() {
  return (
    <form className="space-y-5">
      <div>
        <label className="font-medium">Full name</label>
        <input
          type="text"
          required
          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-red-600 shadow-sm rounded-lg"
        />
      </div>
      <div>
        <label className="font-medium">Email</label>
        <input
          type="email"
          required
          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-red-600 shadow-sm rounded-lg"
        />
      </div>
      <div>
        <label className="font-medium">Company</label>
        <input
          type="text"
          required
          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-red-600 shadow-sm rounded-lg"
        />
      </div>
      <div>
        <label className="font-medium">Message</label>
        <textarea
          required
          className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-red-600 shadow-sm rounded-lg"
        ></textarea>
      </div>
      <button className="w-full px-4 py-2 text-white font-medium bg-main-200 hover:bg-red-400 active:bg-main-200 rounded-lg duration-150">
        Submit
      </button>
    </form>
  );
}
