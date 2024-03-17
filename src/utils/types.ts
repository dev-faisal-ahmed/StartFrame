export type LinkType = {
  name: string;
  url: string;
};

export type LinksStateType = {
  links: Record<string, LinkType[]>;
  activeTab: string;
  allTab: string[];
};
