import { signal } from '@preact/signals';
import { LinkType, LinksStateType } from '../utils/types';
import { getDataFormLocal, setDataToLocal } from '../utils/helper';
import { localStorageKey } from '../data/local-storage-key';

// ******** modal state ******** \\
export const modalSignal = signal(false);
export const updateModalState = (value: boolean) => {
  modalSignal.value = value;
};

// ******** quick links state ******** \\
const quickLinksInitialData = getDataFormLocal<LinksStateType>(
  localStorageKey.LINKS,
);

export const quickLinksSignal = signal<LinksStateType>(
  quickLinksInitialData || { links: {}, activeTab: 'favorite', allTab: [] },
);

export const addNewLinkToQuickLinkSignal = (link: LinkType) => {
  const { links, activeTab } = quickLinksSignal.value;
  const activeTabsLinks = links[activeTab] || [];

  for (const activeLink of activeTabsLinks) {
    if (activeLink.name === link.name) return { ok: false };
  }

  activeTabsLinks.push(link);
  quickLinksSignal.value.links[activeTab] = activeTabsLinks;
  setDataToLocal(localStorageKey.LINKS, quickLinksSignal.value);

  return { ok: true };
};
