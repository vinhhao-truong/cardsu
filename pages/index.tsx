// import { gapi } from "gapi-script";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import useResponsive from "../hooks/useResponsive";

const CLIENT_ID = process.env.GOOGLE_OAUTH_CLIENT_ID;

export default function Home() {
  const [userProfile, setUserProfile] = useState<any>();

  return <div className="">{/* <Card /> */}</div>;
}
