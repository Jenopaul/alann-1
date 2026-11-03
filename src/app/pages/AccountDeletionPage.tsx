import { ShieldCheck, Clock3, Mail, Smartphone } from "lucide-react";
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
      description="Request or perform account deletion on ALANN and understand what happens to your data after removal."
      badgeLabel="Account Deletion"
    >
      <div className="space-y-8">
        <div className="space-y-3">
          <p className="font-['Poppins',sans-serif] text-sm leading-relaxed" style={{ color: "#99a1af" }}>
            You may delete or request deletion of your ALANN account at any time. When deleted, your profile, active listings, and personal credentials will be removed from our systems in accordance with UAE Federal Decree-Law No. 45 of 2021 on Personal Data Protection.
          </p>
        </div>

        {/* Primary In-App Method (Apple Guideline 5.1.1(v)) */}
        <div
          className="rounded-2xl p-6 border border-purple-500/30"
          style={{ background: "linear-gradient(135deg, rgba(86,51,172,0.2), rgba(157,78,221,0.08))" }}
        >
          <div className="flex items-center gap-3 mb-3">
            <Smartphone size={22} style={{ color: "#9d4edd" }} />
            <h2 className="font-['Poppins',sans-serif] font-bold text-white text-lg">
              Instant Deletion in the ALANN App (Recommended)
            </h2>
          </div>
          <p className="font-['Poppins',sans-serif] text-sm text-gray-300 leading-relaxed mb-3">
            If you have the ALANN mobile app installed on iOS or Android, you can permanently delete your account directly without waiting:
          </p>
          <ol className="list-decimal pl-5 space-y-1.5 font-['Poppins',sans-serif] text-sm text-gray-200">
            <li>Open the ALANN app and go to <strong className="text-white">Settings</strong>.</li>
            <li>Select <strong className="text-purple-300">Privacy Center</strong>.</li>
            <li>Tap <strong className="text-red-400">Delete Account</strong> and confirm your request.</li>
          </ol>
        </div>

        {/* Web Deletion Request Grid */}
        <div className="grid gap-4 md:grid-cols-2">
          <DeletionStep
            title="1. Submit an Email Request"
            description="If you cannot access the app, email privacy@alann.ae or support@alann.ae from your registered account email."
          />
          <DeletionStep
            title="2. Verification"
            description="We will verify your identity via confirmation OTP or verification reply to protect your account against unauthorized requests."
          />
          <DeletionStep
            title="3. Processing Timeline"
            description="In-app deletion is instant. Email requests are finalized within 7 business days after identity verification is confirmed."
          />
          <DeletionStep
            title="4. Retained Records"
            description="Certain financial transaction records may be retained as mandated by UAE statutory and tax recordkeeping laws (up to 5 years)."
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
                Active vehicle listings, chats, and seller subscriptions will be deactivated and cannot be restored once account deletion is executed.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Mail size={16} className="mt-1 shrink-0" style={{ color: "#9d4edd" }} />
              <p className="font-['Poppins',sans-serif] text-sm leading-relaxed" style={{ color: "#99a1af" }}>
                To contact our Data Protection Officer or privacy team directly regarding your data, email us at{" "}
                <a href="mailto:privacy@alann.ae" className="text-purple-400 underline font-medium">privacy@alann.ae</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </LegalPageShell>
  );
}
