import { Cookie } from "lucide-react";

function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="font-['Poppins',sans-serif] font-bold text-xl text-white mb-4">{title}</h2>
      <div className="font-['Poppins',sans-serif] text-sm leading-relaxed space-y-3" style={{ color: "#99a1af" }}>
        {children}
      </div>
    </div>
  );
}

const cookieTypes = [
  { name: "Essential Cookies", purpose: "Required for the Platform to function securely. Cannot be disabled.", examples: "Session authentication tokens, security state, CSRF protection.", canDisable: false },
  { name: "Preference Cookies", purpose: "Remember your interface settings and localization preferences.", examples: "Language selection (Arabic / English), regional filters, theme settings.", canDisable: true },
  { name: "Analytics Technologies", purpose: "Help us understand platform performance and feature engagement in aggregate.", examples: "Page interaction, navigation flow, error diagnostics.", canDisable: true },
  { name: "Functional Cookies", purpose: "Power interactive features such as vehicle search, chat state, and media viewing.", examples: "Saved search parameters, temporary media cache.", canDisable: true },
];

export function CookiePage() {
  return (
    <div>
      <section className="py-20 px-6 text-center">
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6"
          style={{ background: "rgba(86,51,172,0.15)", border: "1px solid rgba(86,51,172,0.3)", color: "#9d4edd", fontFamily: "Poppins, sans-serif" }}
        >
          <Cookie size={12} /> Legal
        </div>
        <h1 className="font-['Poppins',sans-serif] font-bold text-4xl md:text-5xl text-white mb-3">Cookie Policy</h1>
        <p className="font-['Poppins',sans-serif] text-sm text-gray-400">Last updated: November 3, 2026</p>
      </section>

      <section className="pb-24 px-6">
        <div
          className="max-w-[800px] mx-auto rounded-2xl p-8 md:p-12"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
        >
          <LegalSection title="1. What Are Cookies and Local Storage?">
            <p>
              Cookies are small text files placed on your device when you visit a website or use a digital application. Similar technologies include local storage, session storage, and software development kits (SDKs). They are widely used to make platforms work securely, store user sessions, and deliver efficient digital experiences.
            </p>
            <p>
              ALANN Enterprises LLC uses cookies and local storage technologies on the ALANN.AE Platform to authenticate users, protect data, and optimize service delivery in compliance with UAE Federal Decree-Law No. 45 of 2021 on Personal Data Protection.
            </p>
          </LegalSection>

          <LegalSection title="2. Categories of Technologies We Use">
            <div className="flex flex-col gap-4 mt-2">
              {cookieTypes.map(({ name, purpose, examples, canDisable }) => (
                <div
                  key={name}
                  className="rounded-xl p-5"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-['Poppins',sans-serif] font-semibold text-white text-sm">{name}</p>
                    <span
                      className="font-['Poppins',sans-serif] text-xs px-2.5 py-1 rounded-full"
                      style={{
                        background: canDisable ? "rgba(86,51,172,0.15)" : "rgba(239,68,68,0.15)",
                        color: canDisable ? "#9d4edd" : "#ef4444",
                        border: `1px solid ${canDisable ? "rgba(86,51,172,0.2)" : "rgba(239,68,68,0.2)"}`,
                      }}
                    >
                      {canDisable ? "Optional" : "Essential"}
                    </span>
                  </div>
                  <p className="font-['Poppins',sans-serif] text-xs mb-1">{purpose}</p>
                  <p className="font-['Poppins',sans-serif] text-xs" style={{ color: "#717182" }}>
                    <strong className="text-gray-400">Examples:</strong> {examples}
                  </p>
                </div>
              ))}
            </div>
          </LegalSection>

          <LegalSection title="3. Third-Party Technologies & SDKs">
            <p>Some technologies on ALANN.AE are provided by trusted infrastructure partners, including:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Authentication and cloud hosting infrastructure for secure access</li>
              <li>Aggregated operational analytics for performance monitoring</li>
              <li>Payment gateway providers (Stripe) for processing secure upgrade and boost transactions</li>
            </ul>
            <p className="text-xs text-gray-400 mt-2">
              Note: Third-party AI verification services (such as Google Gemini API) do not set tracking cookies on your device; AI processing is performed strictly via secure API requests upon your explicit consent.
            </p>
          </LegalSection>

          <LegalSection title="4. Managing Your Preferences">
            <p>You can manage and control cookies through your device and browser settings:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong className="text-white">Browser Controls:</strong> Most web browsers allow you to view, manage, and delete cookies through their settings. Note that disabling essential cookies may impact authentication and website functionality.</li>
              <li><strong className="text-white">Device Permissions:</strong> In our mobile applications (iOS and Android), you can adjust camera, photo library, and notifications permissions at any time through your operating system settings.</li>
            </ul>
          </LegalSection>

          <LegalSection title="5. Retention">
            <p>Retention periods depend on the technology type:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong className="text-white">Session storage:</strong> Cleared automatically when you close your browser or session</li>
              <li><strong className="text-white">Persistent authentication:</strong> Retained securely until you sign out or tokens expire</li>
              <li><strong className="text-white">Analytics records:</strong> Retained in anonymized, aggregated format for up to 12 months</li>
            </ul>
          </LegalSection>

          <LegalSection title="6. Updates to This Policy">
            <p>We may update this Cookie Policy periodically to reflect technological or legal requirements. Material updates will be highlighted on the Platform with the updated effective date.</p>
          </LegalSection>

          <LegalSection title="7. Contact Us">
            <p>For questions or assistance regarding our use of cookies and data technologies:</p>
            <p><strong className="text-white">ALANN Enterprises LLC</strong></p>
            <p>SHARJAH MEDIA CITY FREEZONE, Sharjah. UAE</p>
            <p>
              Email:{" "}
              <a href="mailto:privacy@alann.ae" className="text-purple-400 hover:text-purple-300 font-medium">
                privacy@alann.ae
              </a>
              {" "}·{" "}
              <a href="mailto:support@alann.ae" className="text-purple-400 hover:text-purple-300">
                support@alann.ae
              </a>
            </p>
          </LegalSection>
        </div>
      </section>
    </div>
  );
}
