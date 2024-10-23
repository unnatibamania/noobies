import { Home, FilesIcon, GitGraph } from "lucide-react";

export const dashboardRoutes = [
  {
    id: "home",
    label: "Home",
    href: "/dashboard",
    Icon: Home,
  },
  {
    id: "library",
    label: "Library",
    href: "",
    Icon: FilesIcon,
  },
  {
    id: "analytics",
    label: "Analytics",
    href: "",
    Icon: GitGraph,
  },
];

