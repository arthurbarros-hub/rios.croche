export default function ProdutoLoading() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1fr,1.1fr]">
        <div className="space-y-4">
          <div className="aspect-[4/5] w-full animate-pulse rounded-3xl border border-ivory/80 bg-ivory/70" />
          <div className="grid grid-cols-4 gap-3">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={`thumb-${index}`}
                className="aspect-square animate-pulse rounded-2xl border border-ivory/80 bg-ivory/70"
              />
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <div className="h-4 w-24 rounded-full bg-ivory/70" />
          <div className="h-10 w-3/4 rounded-full bg-ivory/70" />
          <div className="h-6 w-40 rounded-full bg-ivory/70" />
          <div className="h-24 w-full rounded-2xl bg-ivory/70" />
        </div>
      </div>
    </div>
  );
}
