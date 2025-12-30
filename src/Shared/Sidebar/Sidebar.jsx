import { TbAlphabetBangla } from "react-icons/tb";
import { Link } from "react-router";

const Sidebar = () => {
  return (
    <div className="relative">
      <div className="drawer lg:drawer-open fixed top-0">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

        <div className="drawer-side is-drawer-close:overflow-visible">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
            {/* Sidebar content here */}
            <ul className="menu w-full grow">
              {/* List item */}
              <Link to="/">
                <li>
                  <button
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Foysal Ahamed Ovi"
                  >
                    <TbAlphabetBangla />
                    <span className="is-drawer-close:hidden">
                      Foysal Ahamed Ovi
                    </span>
                  </button>
                </li>
              </Link>

              {/* List item */}
              <li className="mt-10">
                <p className="-rotate-90 -mx-5 hover:bg-none hover:underline hover:border-b-2 hover:border-green-500 text-lg">
                  Home
                </p>
                <span className="is-drawer-close:hidden">Home</span>
              </li>
              <li className="mt-10">
                <p className="-rotate-90 -mx-5 hover:bg-none hover:underline hover:border-b-2 hover:border-green-500 text-lg">
                  About
                </p>
                <span className="is-drawer-close:hidden">About</span>
              </li>
              <li className="mt-16">
                <p className="-rotate-90 -mx-5 hover:bg-none hover:underline hover:border-b-2 hover:border-green-500 text-lg">
                  Portfolio
                </p>
                <span className="is-drawer-close:hidden">Portfolio</span>
              </li>
              <li className="mt-10">
                <p className="-rotate-90 -mx-5 hover:bg-none hover:underline hover:border-b-2 hover:border-green-500 text-lg">
                  Client
                </p>
                <span className="is-drawer-close:hidden">Client</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
