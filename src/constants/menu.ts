import type { MenuItem } from "@/types";

export const menuItems: MenuItem[] = [
  {
    label: "Demos",
    link: "#",
    submenu: [
      { label: "Demo 1", link: "#" },
      { label: "Demo 2", link: "#" },
      { label: "Demo 3", link: "#" },
    ],
  },
  {
    label: "Post",
    link: "#",
    submenu: [
      { label: "Post Header", link: "#" },
      { label: "Post Layout", link: "#" },
      { label: "Share Buttons", link: "#" },
    ],
  },
  {
    label: "Features",
    link: "#",
    submenu: [
      { label: "Feature 1", link: "#" },
      { label: "Feature 2", link: "#" },
    ],
  },
  {
    label: "Categories",
    link: "#",
    submenu: [
      { label: "Lifestyle", link: "#" },
      { label: "Technology", link: "#" },
      { label: "Travel", link: "#" },
    ],
  },
  {
    label: "Shop",
    link: "#",
    submenu: [
      { label: "Products", link: "#" },
      { label: "Cart", link: "#" },
    ],
  },
  {
    label: "Buy Now",
    link: "#",
  },
];
