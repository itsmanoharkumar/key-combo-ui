export type Timestamp = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export type ShortcutAttributes = {
  shortText: string;
  windowsKeyCombo: string;
  macKeyCombo: string;
} & Timestamp;

export type Shortcut = {
  id: number;
  attributes: ShortcutAttributes;
};

export type ShortcutCategoryAttributes = {
  name: string;
  shortcuts?: {
    data: Array<Shortcut>;
  };
} & Timestamp;

export type ShortcutCategory = {
  id: number;
  attributes: ShortcutCategoryAttributes;
};

export const enum OPERATING_SYSTEM {
  MAC = "mac",
  WINDOWS = "windows",
}

export type ProductAttributes = {
  name: string;
} & Timestamp;

export type Product = {
  id: number;
  attributes: ProductAttributes;
};
