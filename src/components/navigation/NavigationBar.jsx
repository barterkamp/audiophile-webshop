import React from "react";
import { useContext, useState } from "react";
import { UserContext } from "../../features/user/userContext";
import { Outlet, Link } from "react-router-dom";
import NavigationLinks from "./NavigationLinks";
import AudiophileLogo from "../../logo.svg";
import CartIcon from "../cart-icon-component/CartIcon";
import { signOutUser } from "../../utils/firebase";
import { toast } from "react-toastify";
import { CgMenu } from "react-icons/cg";
import { CgClose } from "react-icons/cg";

import MobileNavigation from "./MobileNavigation";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  // mobile navigation functionality
  const [openMenu, setOpenMenu] = useState(false);

  const hamburger = (
    <CgMenu className="hamburger" onClick={() => setOpenMenu(!openMenu)} />
  );

  const hamburgerClose = (
    <CgClose className="hamburger" onClick={() => setOpenMenu(!openMenu)} />
  );

  const closeMobileMenu = () => {
    setOpenMenu(false);
  };

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
    toast.success("Signed out successfully", {
      position: "top-right",
      theme: "colored",
    });
  };

  return (
    <>
      <div className="wrapper">
        <nav className="navigation container">
          <div className="navigation__logo">
            <div>{openMenu ? hamburgerClose : hamburger}</div>
            <div className="logo">
              <Link to="/">
                <img src={AudiophileLogo} alt="" />
              </Link>
            </div>
          </div>

          <NavigationLinks />

          {openMenu && (
            <MobileNavigation
              isMobile={true}
              closeMobileMenu={closeMobileMenu}
            />
          )}

          <div className="navigation__actions">
            <div className="navigation__sign-in">
              {currentUser ? (
                <span
                  className="navigation__link"
                  to="sign-out"
                  onClick={signOutHandler}
                >
                  sign out
                </span>
              ) : (
                <Link className="navigation__link" to="sign-in">
                  sign in
                </Link>
              )}
            </div>
            <CartIcon />
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
