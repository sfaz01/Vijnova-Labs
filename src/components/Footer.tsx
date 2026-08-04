import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-[#050505] border-t border-white/5 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          
          {/* Brand */}
          <div className="max-w-xs">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                <div className="w-3 h-3 bg-blue-500 rounded-sm" />
              </div>
              <span className="font-semibold text-lg tracking-tight text-white">
                Vijnova Labs
              </span>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Designing the next generation of organisational intelligence.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 w-full md:w-auto">
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-medium mb-2">Navigation</h4>
              <Link href="/" className="text-zinc-500 hover:text-white transition-colors text-sm">Home</Link>
              <Link href="#product" className="text-zinc-500 hover:text-white transition-colors text-sm">Product</Link>
              <Link href="#how-we-build" className="text-zinc-500 hover:text-white transition-colors text-sm">How We Build</Link>
              <Link href="#research" className="text-zinc-500 hover:text-white transition-colors text-sm">Research</Link>
              <Link href="#about" className="text-zinc-500 hover:text-white transition-colors text-sm">About</Link>
              <Link href="#" className="text-zinc-500 hover:text-white transition-colors text-sm">Contact</Link>
            </div>
            
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-medium mb-2">Connect</h4>
              <a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm">LinkedIn</a>
              <a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm">Email</a>
              <a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm">Blog / Research</a>
              <a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm">Careers (future)</a>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-white font-medium mb-2">Legal</h4>
              <Link href="#" className="text-zinc-500 hover:text-white transition-colors text-sm">Privacy Policy</Link>
              <Link href="#" className="text-zinc-500 hover:text-white transition-colors text-sm">Terms of Service</Link>
              <Link href="#" className="text-zinc-500 hover:text-white transition-colors text-sm">Cookie Policy</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
          <p>© {new Date().getFullYear()} Vijnova Labs. All rights reserved.</p>
          <div className="flex items-center gap-4">
             <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
             <span>All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
