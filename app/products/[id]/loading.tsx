import { ArrowLeft } from "lucide-react";

export default function ProductDetailLoading() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Back Link Skeleton */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 text-slate-500 animate-pulse">
            <ArrowLeft className="w-4 h-4 text-slate-650" />
            <div className="h-4 w-40 bg-slate-800 rounded" />
          </div>
        </div>

        {/* Product Details Container Skeleton */}
        <div className="bg-slate-900/40 border border-slate-850 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-12 gap-8 lg:gap-12 p-6 sm:p-8 lg:p-12">
            
            {/* Product Image Section Skeleton */}
            <div className="md:col-span-6 bg-slate-900/60 rounded-2xl p-8 flex items-center justify-center min-h-[350px] md:min-h-[480px] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-800/20 to-transparent -translate-x-full animate-[shimmer_1.5s_infinite]" />
              <div className="w-56 h-56 bg-slate-800 rounded-xl" />
            </div>

            {/* Product Information Section Skeleton */}
            <div className="md:col-span-6 flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                {/* Category & Rating skeleton */}
                <div className="flex items-center gap-3">
                  <div className="h-6 w-24 bg-slate-800 rounded-full animate-pulse" />
                  <div className="h-6 w-32 bg-slate-800 rounded-full animate-pulse" />
                </div>

                {/* Title skeleton */}
                <div className="space-y-2">
                  <div className="h-8 w-full bg-slate-800 rounded-lg animate-pulse" />
                  <div className="h-8 w-2/3 bg-slate-800 rounded-lg animate-pulse" />
                </div>

                {/* Price skeleton */}
                <div className="h-10 w-32 bg-slate-800 rounded-lg animate-pulse" />

                <hr className="border-slate-850" />

                {/* Description skeleton */}
                <div className="space-y-2">
                  <div className="h-3 w-28 bg-slate-800 rounded animate-pulse" />
                  <div className="space-y-2 pt-1">
                    <div className="h-4 w-full bg-slate-800 rounded animate-pulse" />
                    <div className="h-4 w-full bg-slate-800 rounded animate-pulse" />
                    <div className="h-4 w-3/4 bg-slate-800 rounded animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Purchase Options skeleton */}
              <div className="pt-6 border-t border-slate-850/80 space-y-6">
                <div className="grid grid-cols-2 gap-3.5">
                  <div className="h-8 w-full bg-slate-800/50 rounded-xl animate-pulse" />
                  <div className="h-8 w-full bg-slate-800/50 rounded-xl animate-pulse" />
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="h-12 flex-1 bg-slate-800 rounded-xl animate-pulse" />
                  <div className="h-12 flex-1 bg-slate-800 rounded-xl animate-pulse" />
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
