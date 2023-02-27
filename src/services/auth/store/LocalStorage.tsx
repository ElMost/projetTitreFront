export function removeItem(itemToRemove: string): void {
  window.localStorage.removeItem(itemToRemove);
}

export function getItem(item: string): string | null {
  return window.localStorage.getItem(item);
}

export function addItem(localeStorageName: string, newItem: string): void {
  window.localStorage.setItem(localeStorageName, newItem);
}
