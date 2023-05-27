import { lazy } from "react";

const KArcadeMenu = lazy(() => import("../components/zones/training/languages/korean/KArcadeMenu"));
const KArcadeMain = lazy(() => import("../components/zones/training/languages/korean/KArcadeMain"));
const KArcadeAudioInForm = lazy(() => import("../components/zones/training/languages/korean/KArcadeAudioInForm"));

const zoneRoutes = [
  {
    path: "/zones/10/k-arcade",
    name: "K-Arcade Menu",
    exact: true,
    element: KArcadeMenu,
    roles: ["SysAdmin", "Trainee", "OrgAdmin", "OrgTrainer"],
    isAnonymous: false,
  },
  {
    path: "/zones/10/k-arcade/main",
    name: "K-Arcade Main",
    exact: true,
    element: KArcadeMain,
    roles: ["SysAdmin", "Trainee", "OrgAdmin", "OrgTrainer"],
    isAnonymous: false,
  },
  {
    path: "/zones/10/k-arcade/audio/form",
    name: "K-Arcade Audio Form",
    exact: true,
    element: KArcadeAudioInForm,
    roles: ["SysAdmin"],
    isAnonymous: false,
  },
];

const PseudoAds = lazy(() => import("../components/fakeads/PseudoAds.jsx"));
const PseudoAdsForm = lazy(() => import("../components/fakeads/PseudoAdsForm"));
const PseudoAdsView = lazy(() => import("../components/fakeads/PseudoAdsView"));

const pseudoAds = [
  {
    path: "/pseudoads",
    name: "PseudoAds",
    exact: true,
    element: PseudoAds,
    roles: ["SysAdmin"],
    isAnonymous: false,
  },
  {
    path: "/pseudoads/new",
    name: "CreatePseudoAd",
    element: PseudoAdsForm,
    exact: true,
    roles: ["SysAdmin"],
    isAnonymous: false,
  },
  {
    path: "/pseudoads/:adId",
    name: "UpdatedPseudoAd",
    element: PseudoAdsForm,
    exact: true,
    roles: ["SysAdmin"],
    isAnonymous: false,
  },
  {
    path: "/pseudoads/view",
    name: "PseudoAdsView",
    element: PseudoAdsView,
    exact: true,
    roles: ["Trainee", "OrgTrainer", "OrgAdmin", "SysAdmin"],
    isAnonymous: false,
  },
];

const allRoutes = [
  ...pseudoAds,
  ...zoneRoutes,
];
export default allRoutes;
