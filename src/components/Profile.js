import { useState } from "react";
import Tab from "./Tab";

const Profile = () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <>
      <h1>名前</h1>
      <p>モナド</p>
      <h2>自己紹介</h2>
      <p>はじめまして。Reactアカデミーを運営しているモナドです。</p>
      <button onClick={() => setTabIndex(0)}>趣味</button>
      <button onClick={() => setTabIndex(1)}>仕事</button>
      <Tab index={tabIndex} />
    </>
  );
};

export default Profile;
