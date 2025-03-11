import { PropsWithChildren } from "react";

export const metadata = {
  title: "Next.js Page Routing & Rendering",
  description: "Learn how to route to different pages.",
};

export default function MarketingLayout({ children }: PropsWithChildren) {
  return <main>{children}</main>;
}
