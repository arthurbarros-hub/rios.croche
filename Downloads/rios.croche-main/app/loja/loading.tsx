export default function LojaLoading() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="h-6 w-24 rounded-full bg-ivory/70" />
      <div className="mt-4 h-10 w-2/3 rounded-full bg-ivory/70" />
      <div className="mt-3 h-4 w-1/2 rounded-full bg-ivory/70" />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={`loading-${index}`}
            className="h-80 animate-pulse rounded-3xl border border-ivory/80 bg-ivory/70"
          />
        ))}
      </div>
    </div>
  );
}
