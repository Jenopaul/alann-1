import { useEffect, type ReactNode } from "react";
import { Shield } from "lucide-react";

type LegalPageShellProps = {
  title: string;
  description: string;
  badgeLabel: string;
  children: ReactNode;
};

export function LegalPageShell({ title, description, badgeLabel, children }: LegalPageShellProps) {
  useEffect(() => {
    document.title = `${title} | ALANN`;

    let metaDescription = document.querySelector("meta[name='description']") as HTMLMetaElement | null;
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }

    metaDescription.setAttribute("content", description);
  }, [description, title]);

  return (
    <div>
      <section className="py-20 px-6 text-center">
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6"
          style={{ background: "rgba(86,51,172,0.15)", border: "1px solid rgba(86,51,172,0.3)", color: "#9d4edd", fontFamily: "Poppins, sans-serif" }}
        >
          <Shield size={12} /> {badgeLabel}
        </div>
        <h1 className="font-['Poppins',sans-serif] font-bold text-4xl md:text-5xl text-white mb-4">{title}</h1>
      </section>

      <section className="pb-24 px-6">
        <div
          className="max-w-[800px] mx-auto rounded-2xl p-8 md:p-12"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
        >
          {children}
        </div>
      </section>
    </div>
  );
}
