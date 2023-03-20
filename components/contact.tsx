import { GrLocation, GrPhone } from "react-icons/gr";
import { AiOutlineLinkedin } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";

export default function Contact() {
  return (
    <section className="py-5 px-10 md:px-32 md:py-10 w-full h-full">
      <div className="mb-4 text-center">
        <h3 className="text-2xl md:text-3xl uppercase">Contact</h3>
      </div>
      <div className="flex gap-10 h-full flex-col items-center justify-center">
        <article className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 md:place-items-center gap-3">
          <div className="flex items-center gap-2 text-xl">
            <GrLocation />
            <p>Tembalang, Kota Semarang</p>
          </div>
          <div className="flex items-center gap-2 text-xl">
            <GrPhone />
            <p>+62 81293030396</p>
          </div>
          <div className="flex items-center gap-2 text-xl">
            <HiOutlineMail />
            <p>maulidiawatidewi15@gmail.com</p>
          </div>
          <div className="flex items-center gap-2 text-xl">
            <AiOutlineLinkedin />
            <p>dewimaulidiawati</p>
          </div>
        </article>
        <div className="w-full md:w-96">
          <form className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="w-full h-10 rounded-md border-[1px] focus:outline-yellow-400 pl-2 bg-gray-50"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Email</label>
              <input
                type="email"
                className="w-full h-10 rounded-md border-[1px] focus:outline-yellow-400 pl-2 bg-gray-50"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Message</label>
              <textarea className="w-full h-32 rounded-md border-[1px] focus:outline-yellow-400 p-2 bg-gray-50"></textarea>
            </div>
            <div className="flex items-center justify-end">
              <button className="px-8 py-2 rounded-md bg-blue-500 text-white font-bold transition-colors duration-200 hover:bg-blue-600">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
