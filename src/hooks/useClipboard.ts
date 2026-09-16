import { useCallback, useState } from "react";
import { ClipboardService } from "../service/clipboard/clipboard.service";
import type { ClipboardItem } from "../service/clipboard/clipboard.type";

export function useClipboard() {
  const [service] = useState(() => new ClipboardService());
  const [items, setItems] = useState<ClipboardItem[]>(() =>
    service.getItems(),
  );

  const updateItems = useCallback(() => {
    setItems([...service.getItems()]);
  }, [service]);

  const add = useCallback(
    (content: string) => {
      const item = service.add(content);
      updateItems();

      return item;
    },
    [service, updateItems],
  );

  const copy = useCallback(
    async (item: ClipboardItem) => {
      await service.copy(item);
    },
    [service],
  );

  const remove = useCallback(
    (id: string) => {
      service.remove(id);
      updateItems();
    },
    [service, updateItems],
  );

  const clearAll = useCallback(() => {
    service.clearAll();
    updateItems();
  }, [service, updateItems]);

  return {
    items,
    add,
    copy,
    remove,
    clearAll,
  };
}
