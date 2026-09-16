import { FaGithub } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 px-6 py-6 text-zinc-400">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm">© 2026 AirTrash. Direct P2P file transfer.</p>

        <a
          href="https://github.com/RenzWay/air-trash"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white">
          <FaGithub size={18} />
          <span>Source code</span>
        </a>
      </div>
    </footer>
  );
}
