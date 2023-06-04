export enum Page {
  HOME = "HOME",
  CONTACT = "CONTACT",
  ABOUT_ME = "ABOUT_ME",
}

export const PATHS: Record<Page, string> = {
  [Page.HOME]: "/",
  [Page.CONTACT]: "/contact",
  [Page.ABOUT_ME]: "/about-me",
}
