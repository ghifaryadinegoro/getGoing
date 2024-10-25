import { useState } from "react";

export default function InformationModal() {
  const [isOpen, setIsOpen] = useState(false);

  return isOpen ? (
    <div
      className="bg-white w-[360px] h-24 flex items-center justify-between px-6 rounded-xl relative"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="absolute top-0 right-0 p-1">
        <img
          src="https://www.svgrepo.com/show/509072/cross.svg"
          alt="close"
          className="w-5 h-5"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h5 className="text-lg text-[#cc0000] font-bold">Hubungi kami</h5>
        <p className="text-sm text-[#303437] font-semibold">
          melalui IG atau WA
        </p>
      </div>
      <div className="flex items-center gap-2">
        <a
          href="https://www.instagram.com/getgoing.co.id/"
          target="blank"
          className="w-12 h-12 rounded-full bg-[#f4f4f7] flex items-center justify-center cursor-pointer"
        >
          <img
            src="https://www.svgrepo.com/show/452229/instagram-1.svg"
            alt="instagram-modal"
            className="w-8 h-8"
          />
        </a>
        <a
          href="https://wa.me/6281119190601?text=Hallo,%20Saya%20mau%20berlibur%20ke%20Eropa%20dengan%20Private%20Trip.%20Apakah%20bisa%20dibantu%20?"
          target="blank"
          className="w-12 h-12 rounded-full bg-[#f4f4f7] flex items-center justify-center cursor-pointer"
        >
          <img
            src="https://www.svgrepo.com/show/452133/whatsapp.svg"
            alt="whatsapp-modal"
            className="w-8 h-8"
          />
        </a>
      </div>
    </div>
  ) : (
    <div
      className="bg-white w-12 h-16 flex items-center justify-center rounded-xl cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <img
        src="https://www.svgrepo.com/show/479133/information-4.svg"
        alt="information"
        className="w-4 h-4"
      />
    </div>
  );
}
