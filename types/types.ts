export type Timestamp = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export type ShortcutAttributes = {
  shortText: string;
  keyCombo: string;
} & Timestamp;

export type Shortcut = {
  id: string;
  attributes: ShortcutAttributes;
};

export type ShortcutCategoryAttributes = {
  name: string;
  shortcuts?: {
    data: Array<Shortcut>;
  };
} & Timestamp;

export type ShortcutCategory = {
  id: string;
  attributes: ShortcutCategoryAttributes;
};

export const enum OPERATING_SYSTEM {
  MAC = "mac",
  WINDOWS = "windows",
}
