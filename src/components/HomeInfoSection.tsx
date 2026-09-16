export function HomeInfoSection() {
  return (
    <section
      aria-labelledby="how-airtrash-works"
      className="mx-auto max-w-4xl space-y-12 px-6 pb-20 text-zinc-300 sm:px-8">
      <div className="border-t border-zinc-800 pt-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
          Private, direct file sharing
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Transfer files between your devices without uploading them to cloud
          storage.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl leading-7 text-zinc-400">
          AirTrash is a local peer-to-peer file transfer tool. Connect two
          devices with a QR code or a short token, then send files directly
          through the browser.
        </p>
      </div>

      <div>
        <h2 id="how-airtrash-works" className="text-2xl font-bold text-white">
          How AirTrash works
        </h2>
        <ol className="mt-5 grid gap-4 sm:grid-cols-3">
          <li className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-5">
            <span className="text-sm font-semibold text-blue-400">01</span>
            <h3 className="mt-2 font-semibold text-white">Open AirTrash</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-400">
              Open AirTrash on both devices you want to connect.
            </p>
          </li>
          <li className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-5">
            <span className="text-sm font-semibold text-blue-400">02</span>
            <h3 className="mt-2 font-semibold text-white">Connect securely</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-400">
              Scan the QR code or enter the connection token from the other
              device.
            </p>
          </li>
          <li className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-5">
            <span className="text-sm font-semibold text-blue-400">03</span>
            <h3 className="mt-2 font-semibold text-white">Choose and send</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-400">
              Select a file and transfer it directly to the connected device.
            </p>
          </li>
        </ol>
      </div>

      <div className="grid gap-8 border-y border-zinc-800 py-10 sm:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-white">
            Why use local P2P transfer?
          </h2>
          <p className="mt-3 leading-7 text-zinc-400">
            It is useful when you need a quick way to move a file between a
            phone and computer, or between two nearby devices, without first
            placing the file in a cloud drive.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white">No account required</h2>
          <p className="mt-3 leading-7 text-zinc-400">
            Start a transfer from the browser. The recipient only needs the QR
            code or token created for that connection.
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white">
          Frequently asked questions
        </h2>
        <div className="mt-5 space-y-4">
          <details className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-5">
            <summary className="cursor-pointer font-semibold text-white">
              Does AirTrash upload my file to cloud storage?
            </summary>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              AirTrash is designed to transfer files directly between the two
              connected devices rather than requiring a cloud-storage upload
              first.
            </p>
          </details>
          <details className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-5">
            <summary className="cursor-pointer font-semibold text-white">
              How do I connect another device?
            </summary>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              On one device, open the QR code. On the other, scan it or enter
              the displayed token, then choose a file once the connection is
              ready.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}
