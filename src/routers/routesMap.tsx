import { LazyExoticComponent, lazy } from "react";

const Home = lazy(() => import("@/pages/Home"));
const MyLayout = lazy(() => import("@/pages/Layout"));
const Demo = lazy(() => import("@/pages/demo"));
const BadServer = lazy(() => import("@/pages/ErrorPage/BedServer"));
const NotFind = lazy(() => import("@/pages/ErrorPage/NotFind"));
const Index = lazy(() => import("@/pages/Event"));
const Jenkins = lazy(() => import("@/pages/Jenkins"));
const Tayrsi = lazy(() => import("@/pages/Tayrsi"));


export const component: Record<
  string,
  LazyExoticComponent<() => JSX.Element>
> = {
  Home,
  MyLayout,
  Demo,
  BadServer,
  NotFind,
  Index,
  Jenkins,
  Tayrsi,
};
