import { type ClipboardItem } from "./clipboard.type";

const STORAGE_KEY = "air-trash-clipboard";

export class ClipboardService {
  private items: ClipboardItem[] = [];

  constructor() {
    this.items = this.load();
  }

  private load(): ClipboardItem[] {
    const stored = sessionStorage.getItem(STORAGE_KEY);

    if (!stored) {
      return [];
    }

    try {
      return JSON.parse(stored) as ClipboardItem[];
    } catch {
      return [];
    }
  }

  private save(): void {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(this.items));
  }

  getItems(): ClipboardItem[] {
    return this.items;
  }

  add(content: string): ClipboardItem {
    const item: ClipboardItem = {
      id: crypto.randomUUID(),
      content,
      createAt: Date.now(),
    };

    this.items.unshift(item);
    this.save();

    return item;
  }

  async copy(item: ClipboardItem): Promise<void> {
    await navigator.clipboard.writeText(item.content);
  }

  remove(id: string): void {
    this.items = this.items.filter((item) => item.id != id);
    this.save();
  }

  clearAll(): void {
    this.items = [];
    this.save();
  }
}
