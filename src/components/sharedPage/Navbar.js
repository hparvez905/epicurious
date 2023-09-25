import React, { useEffect, useState } from "react";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import * as BsIcons from "react-icons/bs";
import * as GrIcons from "react-icons/gr";
import * as BiIcons from "react-icons/bi";
import SearchModal from "../pages/Home/SearchModal";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";

const Navbar = () => {
   const navigate = useNavigate();
   const [user] = useAuthState(auth);
   const [isOpen, setIsOpen] = useState(false);
   const [showSearchModal, setShowSearchModal] = useState(false);
   const location = useLocation();
   const logout = () => {
      signOut(auth);
      toast.error("Logged Out");
      navigate("/");
   };

   // eslint-disable-next-line @typescript-eslint/no-empty-function
   useEffect(() => {}, [location]);

   const dashboardOpen = () => {
      setIsOpen(!isOpen);
   };

   return (
      <div className="navbar bg-base-100 overflow-hidden fixed top-0 z-10 shadow">
         <div className="navbar-start">
            <div className="flex-none">
               <button
                  onClick={dashboardOpen}
                  className="btn btn-square btn-ghost"
               >
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     className="inline-block w-8 h-8 stroke-current"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                     ></path>
                  </svg>
               </button>

               {isOpen && (
                  <button
                     className="btn btn-ghost text-white text-xl hover:text-rose-600 rounded-full fixed top-4 left-4 z-20"
                     onClick={dashboardOpen}
                  >
                     ✕
                  </button>
               )}

               <div
                  className={`top-0 left-0 fixed bg-gray-800 lg:w-[23vw] w-[60vw] h-full ${
                     isOpen ? "translate-x-0" : "-translate-x-full"
                  } ease-in-out duration-700 z-10`}
               >
                  <div className="my-16">
                     <Link
                        to="/"
                        className="text-white font-bold text-6xl bg-rose-600 lg:p-4 p-2 rounded-full"
                        onClick={dashboardOpen}
                     >
                        epi
                     </Link>
                  </div>

                  <ul onClick={dashboardOpen}>
                     <li className="text-white hover:text-rose-600 font-bold mb-4">
                        <Link to="/recipes-menus">RECIPIES & MENU</Link>
                     </li>
                     <li className="text-white hover:text-rose-600 font-bold mb-4">
                        <Link to="/expert-advice">EXPERT ADVICE</Link>
                     </li>
                     <li className="text-white hover:text-rose-600 font-bold mb-4">
                        <Link to="/ingredients">INGREDIENTS</Link>
                     </li>
                     <li className="text-white hover:text-rose-600 font-bold mb-4">
                        <Link to="/holidays-events">HOLIDAYS & EVENTS</Link>
                     </li>
                     <li className="text-white hover:text-rose-600 font-bold mb-4">
                        <Link to="/videos">VIDEOS</Link>
                     </li>
                  </ul>

                  <div className="mt-10">
                     <p className="text-gray-500 font-bold">
                        Follow Epicurious!
                     </p>
                     <div className="flex my-2">
                        <div className="flex mx-auto" onClick={dashboardOpen}>
                           <p className="text-3xl text-rose-600 mr-4">
                              <a
                                 href="https://www.fb.com"
                                 target="_blank"
                                 rel="noreferrer"
                              >
                                 <FaIcons.FaFacebookF />
                              </a>
                           </p>
                           <p className="text-3xl text-rose-600 mr-4">
                              <a
                                 href="https://www.twitter.com"
                                 target="_blank"
                                 rel="noreferrer"
                              >
                                 <AiIcons.AiOutlineTwitter />
                              </a>
                           </p>
                           <p className="text-3xl text-rose-600 mr-4">
                              <a
                                 href="https://www.instagram.com"
                                 target="_blank"
                                 rel="noreferrer"
                              >
                                 <AiIcons.AiOutlineInstagram />
                              </a>
                           </p>
                        </div>
                     </div>
                  </div>

                  {!user && (
                     <Link
                        to="/signin"
                        className="btn btn-ghost text-white border-1 border-b-gray-500 hover:text-rose-600 mt-4"
                     >
                        Sign In
                     </Link>
                  )}
                  {user && (
                     <button
                        className="btn btn-ghost text-white border-1 border-b-gray-500 hover:text-rose-600 mt-4"
                        to="/"
                        onClick={logout}
                     >
                        Sign Out
                     </button>
                  )}
               </div>
            </div>

            {location.pathname !== "/videos" && (
               <Link
                  to="/"
                  className="m-2 text-xl text-gray-500 hover:text-gray-700 focus:text-rose-600 cursor-pointer"
               >
                  <BsIcons.BsFillHeartFill />
               </Link>
            )}

            {location.pathname !== "/videos" && !user && (
               <Link
                  className="text-gray-500 hover:text-gray-700 text-sm font-bold hidden lg:block"
                  to="/signin"
               >
                  Sign In
               </Link>
            )}

            {location.pathname !== "/videos" && user && (
               <button
                  className="text-gray-500 hover:text-gray-700 text-sm font-bold hidden lg:block"
                  to="/signin"
                  onClick={logout}
               >
                  Sign Out
               </button>
            )}
            {location.pathname === "/videos" && (
               <div className="navbar-start ml-32">
                  <Link
                     className="cursor-pointer normal-case font-bold text-3xl text-rose-600"
                     to="/videos"
                  >
                     epicurious
                  </Link>
               </div>
            )}
         </div>

         {location.pathname !== "/videos" && (
            <div className="navbar-center">
               <Link
                  className="cursor-pointer normal-case font-bold text-3xl text-rose-600"
                  to="/"
               >
                  epicurious
               </Link>
            </div>
         )}

         {location.pathname === "/videos" && (
            <div className="navbar-start mr-6 hidden lg:block">
               <Link
                  className="cursor-pointer normal-case font-bold text-sm mr-8"
                  to="/vidoes"
               >
                  New
               </Link>
               <Link
                  className="cursor-pointer normal-case font-bold text-sm mr-8"
                  to="/vidoes"
               >
                  Popular
               </Link>
               <Link
                  className="cursor-pointer normal-case font-bold text-sm mr-8"
                  to="/vidoes"
               >
                  Series
               </Link>
               <Link
                  className="cursor-pointer normal-case font-bold text-sm mr-8"
                  to="/vidoes"
               >
                  Genres
               </Link>
            </div>
         )}

         {location.pathname === "/videos" && (
            <div className="w-[800px] lg:grid grid-cols-4 lg:divide-x block">
               <Link
                  className="cursor-pointer font-bold text-xs hidden lg:block"
                  to="/"
               >
                  Go to Epicurious.com
               </Link>
               <div className="flex justify-center">
                  <a
                     className="text-xl mx-2 hidden lg:block"
                     href="https://www.fb.com"
                  >
                     <AiIcons.AiFillYoutube />
                  </a>
                  <a
                     className="text-xl mr-2 hidden lg:block"
                     href="https://www.twitter.com"
                  >
                     <GrIcons.GrFacebookOption />
                  </a>
                  <a
                     className="text-xl hidden lg:block"
                     href="https://www.instagram.com"
                  >
                     <AiIcons.AiOutlineTwitter />
                  </a>
               </div>
               <form action="">
                  <div className="relative flex items-center lg:justify-start justify-end text-gray-500 focus-within:text-gray-700">
                     <BiIcons.BiSearch className="text-xl w-5 h-5 absolute ml-3 pointer-events-none" />
                     <input
                        type="text"
                        name="Search"
                        placeholder="Search videos"
                        autoComplete="off"
                        aria-label="search videos"
                        className="lg:pl-10 pl-2 pr-3 py-2 w-4 focus:w-40 font semibold placeholder-gray-500 text-black rounded-xl border-none"
                     />
                  </div>
               </form>
            </div>
         )}

         {location.pathname !== "/videos" && (
            <div className="navbar-end">
               <p className="mr-4 mt-2 font-bold text-gray-500 pb-2 hidden lg:block">
                  Follow
               </p>
               <a
                  className="text-3xl text-rose-600 mr-3 hidden lg:block"
                  href="https://www.fb.com"
               >
                  <MdIcons.MdOutlineFacebook />
               </a>
               <a
                  className="text-3xl text-rose-600 mr-3 hidden lg:block"
                  href="https://www.twitter.com"
               >
                  <AiIcons.AiFillTwitterCircle />
               </a>
               <a
                  className="text-3xl text-rose-600 hidden lg:block"
                  href="https://www.instagram.com"
               >
                  <AiIcons.AiFillInstagram />
               </a>
               <label
                  htmlFor="search-modal"
                  className="flex mx-4 cursor-pointer text-gray-500 hover:text-gray-700 modal-button"
                  onClick={() => setShowSearchModal(true)}
               >
                  <p className="pr-2 font-bold hidden lg:block">Search</p>
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="h-7 w-7"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                     />
                  </svg>
               </label>
            </div>
         )}
         {showSearchModal && <SearchModal />}
      </div>
   );
};

export default Navbar;
