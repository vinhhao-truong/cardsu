import Link from "next/link";
import React, { useState } from "react";
import { useMobileTablet } from "../hooks/useResponsive";
import ReactProps from "../interfaces/react-props/ReactProps";
import PageContainer from "./PageContainer";
import { v4 } from "uuid";
import { useCookies } from "react-cookie";
import { useSelector } from "react-redux";
import { selectAuth } from "../redux/authSlice";

interface NavProps extends ReactProps {}
const Navigation: React.FC<NavProps> = () => {
  const isMobileTablet = useMobileTablet();
  const { isAuth } = useSelector(selectAuth);

  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <div className="text-white border-b border-b-white/40 bg-black/30">
      <PageContainer className="flex items-center justify-between py-4">
        {/* LOGO */}
        <Link href="/" className="">
          Logo
        </Link>
        <div className="">
          {/* No auth */}
          {!isAuth && (
            <div className="">
              <div onClick={() => setLoginOpen(true)}>Log in</div>
              <div className="">Sign up</div>
            </div>
          )}
          {/* Auth */}
          {isAuth && (
            <div>
              <div className="">Welcome, </div>
              <div className="">Logout</div>
            </div>
          )}
        </div>
        {/* NAV/PROFILE */}
      </PageContainer>
    </div>
  );
};

export default Navigation;
