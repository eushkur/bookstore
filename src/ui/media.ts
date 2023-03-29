export enum Breakpoint {
  LG = 1280,
  MD = 768,
}

export const MediaQuery = {
  LG: `@media screen and (max-width: ${Breakpoint.LG}px)`,
  MD: `@media screen and (max-width: ${Breakpoint.MD}px)`,
};
