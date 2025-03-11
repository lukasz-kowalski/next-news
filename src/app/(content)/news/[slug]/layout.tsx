import { PropsWithChildren, ReactNode } from "react";

interface Props {
  modal: ReactNode;
}

export default function NewsDetailLayout({
  modal,
  children,
}: PropsWithChildren<Props>) {
  return (
    <>
      {modal}
      {children}
    </>
  );
}
