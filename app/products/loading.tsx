import { ShoppingBag } from "lucide-react";

export default function ProductsLoading() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section Skeleton */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-300/40 text-xs font-medium uppercase tracking-wider mb-4 animate-pulse">
            <ShoppingBag className="w-3.5 h-3.5 text-indigo-400/30" />
            Cargando Catálogo...
          </div>
          <div className="h-10 w-64 bg-slate-800 rounded-xl animate-pulse mb-4" />
          <div className="h-4 w-96 bg-slate-800 rounded-lg animate-pulse" />
        </div>

        {/* Filter and Search Controls Skeleton */}
        <div className="mb-12 space-y-6 bg-slate-900/40 border border-slate-800/60 rounded-2xl p-6 shadow-xl animate-pulse">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="h-12 w-full md:max-w-md bg-slate-800/80 rounded-xl" />
            <div className="h-5 w-28 bg-slate-800/80 rounded-lg" />
          </div>
          <div className="border-t border-slate-800/60 pt-5">
            <div className="h-4 w-36 bg-slate-850 rounded mb-3" />
            <div className="flex flex-wrap gap-2.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="h-8 w-24 bg-slate-800/80 rounded-xl" />
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid Skeleton (8 Pulsing Cards) */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="flex flex-col bg-slate-900/20 border border-slate-850 rounded-2xl overflow-hidden shadow-lg"
            >
              {/* Image Skeleton */}
              <div className="p-6 bg-slate-900/40 aspect-square flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-800/30 to-transparent -translate-x-full animate-[shimmer_1.5s_infinite]" />
                <div className="w-32 h-32 bg-slate-800/80 rounded-xl" />
              </div>

              {/* Details Skeleton */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  {/* Rating skeleton */}
                  <div className="h-3 w-20 bg-slate-800 rounded animate-pulse" />
                  {/* Title skeleton */}
                  <div className="h-5 w-full bg-slate-800 rounded animate-pulse" />
                  {/* Description skeleton */}
                  <div className="space-y-1.5 pt-1">
                    <div className="h-3.5 w-full bg-slate-800 rounded animate-pulse" />
                    <div className="h-3.5 w-4/5 bg-slate-800 rounded animate-pulse" />
                  </div>
                </div>

                <div className="mt-8 border-t border-slate-800/60 pt-4 flex items-center justify-between">
                  <div>
                    <div className="h-2.5 w-10 bg-slate-855 rounded animate-pulse mb-1.5" />
                    <div className="h-5 w-16 bg-slate-800 rounded animate-pulse" />
                  </div>
                  <div className="h-9 w-24 bg-slate-800 rounded-xl animate-pulse" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
