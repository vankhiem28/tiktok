import HeaderOnly from "../components/Layout/HeaderOnly";

import Following from "~/components/Pages/Following";
import Home from "~/components/Pages/Home";
import Upload from "~/components/Pages/Upload";
import Profile from "~/components/Pages/Profile";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/following", component: Following },
  { path: "/@:nickname", component: Profile },
  { path: "/upload", component: Upload, layout: HeaderOnly },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
