import { constHomePage } from "@/constants/cs_main";

export type Tab =
  (typeof constHomePage.designs.tabs)[keyof typeof constHomePage.designs.tabs][number];
