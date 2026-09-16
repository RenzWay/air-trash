import { BiTrash } from "react-icons/bi";
import type { ClipboardItem } from "../../service/clipboard/clipboard.type";
import { MdOutlineCopyAll } from "react-icons/md";
import { useState } from "react";

export function ClipboardCardPicker({
  items,
  onCopy,
  onRemove,
}: {
  items: ClipboardItem;
  onCopy: (item: ClipboardItem) => Promise<void>;
  onRemove: (item: string) => void;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await onCopy(items);
    setCopied(true);

    window.setTimeout(() => {
      setCopied(false);
    }, 1500);
  };
  return (
    <li className="flex items-center justify-between p-4 bg-zinc-800/50 border border-zinc-700/70">
      <div className="flex flex-col gap-1">
        <p className="font-semibold">{items.content}</p>
        <span className="text-gray-400 text-sm">
          {new Date(items.createAt).toLocaleString("id-ID", {
            dateStyle: "medium",
            timeStyle: "short",
          })}
        </span>
      </div>

      <div className="flex gap-2">
        <div className="relative">
          {copied && (
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-900">
              Copied!
            </span>
          )}

          <button
            title="Copy"
            className="rounded-sm p-1 hover:bg-zinc-400"
            onClick={handleCopy}>
            <MdOutlineCopyAll size={25} />
          </button>
        </div>

        <button
          title="delete"
          className="hover:bg-red-400 p-1 rounded-sm"
          onClick={() => onRemove(items.id)}>
          <BiTrash size={25} />
        </button>
      </div>
    </li>
  );
}
