import { FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="relative border-t border-gray-800 text-white text-lg p-5 text-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 rounded-t-lg">
      <h3 className="text-2xl font-semibold mb-4">Let&apos;s Get In Touch</h3>
      <div className="flex justify-center items-center space-x-4 mb-4">
        <a
          href="mailto:avinashurmilayadav@gmail.com"
          className="flex items-center space-x-2 hover:text-[#53bf63] transition duration-300 ease-in-out"
        >
          <FaEnvelope className="text-2xl" />
          <span>prathamyadav05@gmail.com</span>
        </a>
      </div>
      <p className="mt-4">&copy; 2024 Pratham Yadav</p>
    </div>
  );
}
