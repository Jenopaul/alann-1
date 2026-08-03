import { HelpCircle, Mail, Phone, Clock, MessageCircleQuestion } from "lucide-react";
import { LegalPageShell } from "../components/LegalPageShell";

function SupportCard({ icon: Icon, title, value }: { icon: React.ElementType; title: string; value: string }) {
  return (
    <div className="rounded-xl p-5" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
      <div className="flex items-center gap-3 mb-3">
        <div className="rounded-lg w-10 h-10 flex items-center justify-center shrink-0" style={{ backgroundImage: "linear-gradient(90deg, #5633ac, #9d4edd)" }}>
          <Icon size={18} color="white" />
        </div>
        <h2 className="font-['Poppins',sans-serif] font-semibold text-white">{title}</h2>
      </div>
      <p className="font-['Poppins',sans-serif] text-sm leading-relaxed" style={{ color: "#99a1af" }}>{value}</p>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="rounded-xl p-5" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
      <h3 className="font-['Poppins',sans-serif] font-semibold text-white mb-2">{question}</h3>
      <p className="font-['Poppins',sans-serif] text-sm leading-relaxed" style={{ color: "#99a1af" }}>{answer}</p>
    </div>
  );
}

export function SupportPage() {
  return (
    <LegalPageShell
      title="Support"
      description="Get help with your ALANN account, listings, payments, or platform access."
      badgeLabel="Support"
    >
      <div className="space-y-8">
        <div className="space-y-3">
          <p className="font-['Poppins',sans-serif] text-sm leading-relaxed" style={{ color: "#99a1af" }}>
            Our support team is available to help with account access, listing questions, payments, trust and safety concerns, and general platform assistance.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <SupportCard icon={Mail} title="Email Support" value="For general support and account-related questions, email support@alann.ae." />
          <SupportCard icon={Phone} title="Phone Support" value="Call +971 505951024 for urgent assistance during business hours." />
          <SupportCard icon={Clock} title="Business Hours" value="Monday to Friday, 9:00 AM to 6:00 PM (UAE time)." />
          <SupportCard icon={HelpCircle} title="Response Time" value="We aim to respond to all inquiries within 1 business day." />
        </div>

        <div className="rounded-2xl p-6" style={{ background: "rgba(86,51,172,0.1)", border: "1px solid rgba(86,51,172,0.25)" }}>
          <div className="flex items-center gap-3 mb-4">
            <MessageCircleQuestion size={18} style={{ color: "#9d4edd" }} />
            <h2 className="font-['Poppins',sans-serif] font-semibold text-white">Frequently Asked Questions</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <FAQItem
              question="How do I reset my password?"
              answer="Use the password reset option on the sign-in screen and follow the instructions sent to your registered email address."
            />
            <FAQItem
              question="Can I report suspicious activity?"
              answer="Yes. Please contact support with details of the listing, message thread, or account behaviour so we can review it promptly."
            />
          </div>
        </div>
      </div>
    </LegalPageShell>
  );
}
