import { IoSend } from "react-icons/io5";
import { ClipboardCardPicker } from "./ClipboardCardPicker";
import { useClipboard } from "../../hooks/useClipboard";
import { useState } from "react";

export function ClipboardPicker() {
  const { items, add, copy, remove, clearAll } = useClipboard();
  const [content, setContent] = useState("");

  const handleAdd = () => {
    const text = content.trim();
    if (!text) return;

    add(text);
    setContent("");
  };
  return (
    <div>
      <header>
        <h3 className="font-extrabold text-2xl">Clipboard</h3>
        <input
          className="input-field my-3"
          type="text"
          value={content}
          onChange={(event) => setContent(event.target.value)}
          placeholder="Paste your clipboard here"
        />

        <button className="btn-primary w-full" onClick={handleAdd}>
          <IoSend />
          Send Clipboard
        </button>
      </header>
      <hr className="my-6" />

      {/* Content body */}
      <div>
        <div className="flex justify-between items-center px-4 py-2">
          <h4>Clipboard History</h4>
          <button className="btn-secondary" onClick={clearAll}>
            Clear all
          </button>
        </div>

        <ul className="flex flex-col gap-4">
          {items.map((item) => (
            <ClipboardCardPicker
              key={item.id}
              items={item}
              onCopy={copy}
              onRemove={remove}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
