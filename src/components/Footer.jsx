import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="bg-[#cc0000] py-8 px-4 lg:px-24 text-white flex flex-col lg:flex-row justify-between">
        <div className="mb-12 lg:mb-0">
          <h5 className="text-lg font-bold uppercase mb-4">Informasi Kontak</h5>
          <div className="flex flex-wrap lg:flex-col lg:max-w-[300px] gap-y-1 gap-x-2">
            <div className="flex items-center gap-2">
              <img
                src="https://getgoing.co.id/content/img/icon/pin.png"
                alt="location"
                className="w-8 h-8"
              />
              <p>
                BSD Green Office Park 1, 6th Floor, BSD City, Tangerang, Banten
                15345
              </p>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="https://getgoing.co.id/content/img/icon/clock.png"
                alt="clock"
                className="w-8 h-8"
              />
              <p>24/7 - Online</p>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="https://getgoing.co.id/content/img/icon/email.png"
                alt="email"
                className="w-8 h-8"
              />
              <a href="mailto:lets@getgoing.co.id" target="_blank">
                lets@getgoing.co.id
              </a>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="https://getgoing.co.id/content/img/icon/instagram.png"
                alt="instagram"
                className="w-8 h-8"
              />
              <a
                href="https://www.instagram.com//getgoing.co.id"
                target="_blank"
              >
                @getgoing.co.id
              </a>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="https://getgoing.co.id/content/img/icon/facebook.png"
                alt="facebook"
                className="w-8 h-8"
              />
              <a href="https://www.facebook.com/getgoing.co.id" target="_blank">
                @getgoing.co.id
              </a>
            </div>
          </div>
        </div>

        <div className="mb-12 lg:mb-0">
          <img
            src="https://getgoing.co.id/content/img/MockupApp.png"
            alt="footer-app"
            className="w-[300px] h-[300px]"
          />
        </div>

        <div className="mb-12 lg:mb-0">
          <h5 className="text-lg font-bold uppercase">Download Di</h5>
          <div className="py-4 flex lg:flex-col gap-4 items-center">
            <a
              href="https://apps.apple.com/us/app/getgoing/id1602015694"
              target="blank"
            >
              <img
                src="	https://getgoing.co.id/content/svg/AppStore.svg"
                alt="applestore"
                className="h-16"
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.getgoing.app"
              target="blank"
            >
              <img
                src="https://getgoing.co.id/content/svg/GooglePlay.svg"
                alt="googleplay"
                className="h-16"
              />
            </a>
          </div>
        </div>

        <div>
          <h5 className="text-lg font-bold uppercase">Lainnya</h5>
          <div className="py-4 flex flex-col gap-1">
            <Link
              to="https://getgoing.co.id/syarat-ketentuan"
              className="hover:underline duration-300 w-fit"
            >
              Syarat dan Ketentuan
            </Link>
            <Link
              to="https://getgoing.co.id/kebijakan-privasi"
              className="hover:underline duration-300 w-fit"
            >
              Kebijakan Privasi
            </Link>
            <Link
              to="https://getgoing.co.id/dokumentasi"
              className="hover:underline duration-300 w-fit"
            >
              Dokumentasi
            </Link>
            <Link
              to="https://getgoing.co.id/penghargaan"
              className="hover:underline duration-300 w-fit"
            >
              Penghargaan
            </Link>
            <Link
              to="https://getgoing.co.id/login"
              className="hover:underline duration-300 w-fit"
            >
              Login
            </Link>
            <Link
              to="https://getgoing.co.id/press"
              className="hover:underline duration-300 w-fit"
            >
              Press
            </Link>
            <Link
              to="https://getgoing.co.id/faq"
              className="hover:underline duration-300 w-fit"
            >
              F.A.Q
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-black p-8 lg:px-24 flex flex-col lg:flex-row gap-6 items-center justify-center lg:justify-between">
        <p className="text-[#cdd0d4] text-sm text-center lg:text-left">
          © 2024 - PT. Gue Eksplorasi Terus. All rights reserved.
        </p>
        <div className="flex items-center justify-center gap-2">
          <a
            href="https://www.instagram.com//getgoing.co.id"
            target="_blank"
            className="hover:opacity-80 duration-300"
          >
            <img
              src="https://getgoing.co.id/content/img/icon/instagram.png"
              alt="instagram"
              className="w-4 h-4"
            />
          </a>
          <a
            href="https://www.facebook.com/getgoing.co.id"
            target="_blank"
            className="hover:opacity-80 duration-300"
          >
            <img
              src="https://getgoing.co.id/content/img/icon/facebook.png"
              alt="facebook"
              className="w-4 h-4"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
