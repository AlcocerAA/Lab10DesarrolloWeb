"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Info, ShoppingBag, LayoutGrid, Percent, Mail, Sparkles } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Inicio", icon: Home },
    { href: "/about", label: "Acerca de", icon: Info },
    { href: "/products", label: "Productos", icon: ShoppingBag },
    { href: "/categories", label: "Categorías", icon: LayoutGrid },
    { href: "/offers", label: "Ofertas", icon: Percent },
    { href: "/contact", label: "Contacto", icon: Mail },
  ];

  return (
    <nav className="border-b border-slate-800/80 bg-slate-950/70 backdrop-blur-xl sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          
          {/* Logo Brand */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="p-2 rounded-xl bg-indigo-650/10 border border-indigo-500/20 group-hover:border-indigo-500/50 group-hover:bg-indigo-600/20 transition-all duration-350 shadow-md shadow-indigo-950/20">
                <Sparkles className="w-5 h-5 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
              </div>
              <span className="font-black text-lg sm:text-xl tracking-tight bg-gradient-to-r from-white via-slate-100 to-indigo-300 bg-clip-text text-transparent group-hover:via-white transition-all">
                Alexander<span className="text-indigo-400 font-extrabold">Lab</span>
              </span>
            </Link>
          </div>

          {/* Navigation Items */}
          <div className="overflow-x-auto no-scrollbar py-2">
            <ul className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-semibold whitespace-nowrap">
              {navLinks.map((link) => {
                const IconComponent = link.icon;
                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`flex items-center gap-1.5 px-3 py-2 rounded-xl transition-all duration-300 relative group cursor-pointer ${
                        isActive
                          ? "text-indigo-300 bg-indigo-500/10 border border-indigo-500/25"
                          : "text-slate-400 border border-transparent hover:text-slate-200 hover:bg-slate-900/60"
                      }`}
                    >
                      <IconComponent className={`w-4 h-4 transition-transform duration-300 ${
                        isActive ? "text-indigo-400 scale-105" : "text-slate-500 group-hover:text-slate-300"
                      }`} />
                      <span>{link.label}</span>
                      
                      {/* Subtly animated dot for hover state */}
                      {!isActive && (
                        <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-indigo-400 rounded-full scale-0 group-hover:scale-100 transition-all duration-300" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

        </div>
      </div>
    </nav>
  );
}
