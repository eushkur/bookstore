import { ReactNode } from "react";
import ReactDOM from "react-dom";

export enum PortalTarget {
  ROOT = "root",
  REWIEWS = "reviews",
  NOTIFICATION = "reviews",
}

interface PortalProps {
  target: PortalTarget;
  children: ReactNode;
}

export const Portal = ({ target, children }: PortalProps) => {
  const root = document.getElementById(target) as HTMLElement;

  return ReactDOM.createPortal(children, root);
};
