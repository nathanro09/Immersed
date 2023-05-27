import { lazy } from "react";

const KArcadeMenu = lazy(() =>
  import("../training/languages/korean/KArcadeMenu")
);

const zoneMenus = [
    {
        id: 10,
        element: KArcadeMenu,
    }
]

const allMenus = [
    ...zoneMenus,
]

export default allMenus;
