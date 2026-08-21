import { usePeer } from "../hooks/usePeer";

export default function TestPage() {
  const { status } = usePeer();

  const getStatusBadge = () => {
    switch (status) {
      case "connected":
        return (
          <span className="px-3 py-1 bg-green-500/10 text-green-500 rounded-full text-xs font-semibold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />{" "}
            Connected
          </span>
        );
      case "connecting":
        return (
          <span className="px-3 py-1 bg-yellow-500/10 text-yellow-500 rounded-full text-xs font-semibold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-yellow-500 animate-ping" />{" "}
            Connecting...
          </span>
        );
      default:
        return (
          <span className="px-3 py-1 bg-zinc-800 text-zinc-400 rounded-full text-xs font-semibold">
            Offline
          </span>
        );
    }
  };

  return (
    <>
      <header className="border-b border-zinc-800">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4">
          <div>
            <h1 className="text-2xl font-bold tracking-wider">
              AirTrash<span className="text-blue-500">.</span>
            </h1>

            <p className="text-xs text-zinc-400">P2P Instant File Transfer</p>
          </div>

          {getStatusBadge()}
        </div>
      </header>

      <main className="mx-auto w-full max-w-4xl px-4 py-8">
        {/* content kamu */}
      </main>
    </>
  );
}
