import { ShieldCheck, Clock3, Mail } from "lucide-react";
import { LegalPageShell } from "../components/LegalPageShell";

function DeletionStep({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-xl p-5" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
      <h2 className="font-['Poppins',sans-serif] font-semibold text-white mb-2">{title}</h2>
      <p className="font-['Poppins',sans-serif] text-sm leading-relaxed" style={{ color: "#99a1af" }}>{description}</p>
    </div>
  );
}

export function AccountDeletionPage() {
  return (
    <LegalPageShell
      title="Delete Account"
      description="Request account deletion on ALANN and understand what happens to your data after removal."
      badgeLabel="Account Deletion"
    >
      <div className="space-y-8">
        <div className="space-y-3">
          <p className="font-['Poppins',sans-serif] text-sm leading-relaxed" style={{ color: "#99a1af" }}>
            You may request deletion of your ALANN account at any time. When your request is approved, we will remove your profile and account data from active services, subject to applicable legal and operational retention requirements.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <DeletionStep
            title="Submit a deletion request"
            description="Contact our support team with your account email address and a request to delete your account."
          />
          <DeletionStep
            title="Verify your identity"
            description="We may ask you to confirm ownership of the account to protect your information and prevent unauthorized requests."
          />
          <DeletionStep
            title="Processing timeline"
            description="Most requests are processed within 7 business days after verification is complete."
          />
          <DeletionStep
            title="What remains retained"
            description="Certain information may be retained where required by UAE law, fraud prevention obligations, or financial recordkeeping requirements."
          />
        </div>

        <div className="rounded-2xl p-6" style={{ background: "rgba(86,51,172,0.1)", border: "1px solid rgba(86,51,172,0.25)" }}>
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck size={18} style={{ color: "#9d4edd" }} />
            <h2 className="font-['Poppins',sans-serif] font-semibold text-white">Important Notes</h2>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Clock3 size={16} className="mt-1 shrink-0" style={{ color: "#9d4edd" }} />
              <p className="font-['Poppins',sans-serif] text-sm leading-relaxed" style={{ color: "#99a1af" }}>
                If you have active listings, messages, or unresolved transactions, these may be removed or closed before the deletion is finalized.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Mail size={16} className="mt-1 shrink-0" style={{ color: "#9d4edd" }} />
              <p className="font-['Poppins',sans-serif] text-sm leading-relaxed" style={{ color: "#99a1af" }}>
                To request deletion, contact us at support@alann.ae. If you are unable to access your email, please include an alternate verification method in your message.
              </p>
            </div>
          </div>
        </div>
      </div>
    </LegalPageShell>
  );
}
