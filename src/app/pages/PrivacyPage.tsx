import { Shield } from "lucide-react";

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

export function PrivacyPage() {
  return (
    <div>
      <section className="py-20 px-6 text-center">
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6"
          style={{ background: "rgba(86,51,172,0.15)", border: "1px solid rgba(86,51,172,0.3)", color: "#9d4edd", fontFamily: "Poppins, sans-serif" }}
        >
          <Shield size={12} /> Legal
        </div>
        <h1 className="font-['Poppins',sans-serif] font-bold text-4xl md:text-5xl text-white mb-3">Privacy Policy</h1>
        <p className="font-['Poppins',sans-serif] text-sm text-gray-400">Last updated: November 3, 2026</p>
      </section>

      <section className="pb-24 px-6">
        <div
          className="max-w-[800px] mx-auto rounded-2xl p-8 md:p-12"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
        >
          <LegalSection title="1. Introduction">
            <p>
              ALANN Enterprises LLC ("ALANN", "we", "us", or "our"), a company registered in the UAE Free Zone, operates the ALANN.AE platform ("Platform"). This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you use our Platform.
            </p>
            <p>
              By accessing or using ALANN.AE, you agree to the collection and use of information in accordance with this policy. We take your privacy seriously and comply with applicable UAE data protection laws (including UAE Federal Decree-Law No. 45 of 2021 on Personal Data Protection) and international best practices.
            </p>
            <p className="p-3.5 rounded-xl border border-purple-900/40 bg-purple-950/20 text-purple-200">
              Before we send your vehicle photos, information or documents to a third-party AI service, the app tells you what will be sent and who will receive it, and asks for your permission. Section 4 names these services.
            </p>
          </LegalSection>

          <LegalSection title="2. Information We Collect">
            <p>
              <strong className="text-white">Account Information:</strong> When you register, we collect your name, email address and phone number. If you post listings as a seller, we also collect your Emirates ID number for seller verification.
            </p>
            <p>
              <strong className="text-white">Listing Information:</strong> Photos, descriptions, pricing, and category data you provide when creating listings. For vehicle listings, this includes vehicle photos, vehicle details (make, model, year, mileage, specification) and vehicle documents (registration card / Mulkiya). Your photos and documents may show personal or vehicle details, such as number plate, owner name, or address.
            </p>
            <p>
              <strong className="text-white">Transaction Data:</strong> Records of inquiries, messages exchanged between buyers and sellers, and platform activity.
            </p>
            <p>
              <strong className="text-white">Device & Usage Data:</strong> IP address, browser type, device identifiers, pages visited, and time spent on the Platform.
            </p>
            <p>
              <strong className="text-white">Location Data:</strong> Approximate location based on IP address or GPS (with your permission) to show relevant local listings.
            </p>
            
            <div className="pt-2">
              <strong className="text-white block mb-2">How We Collect Information:</strong>
              <ul className="list-disc pl-5 space-y-1">
                <li>Directly from you, when you register, create a listing, upload photos or documents, or message other users.</li>
                <li>Automatically from your device, when you use the Platform, including through cookies and similar technologies.</li>
                <li>From third-party AI services, which return results such as listing content and vehicle verification results based on the data you submit.</li>
              </ul>
            </div>
          </LegalSection>

          <LegalSection title="3. How We Use Your Information">
            <p>We use your personal information to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Provide, maintain, and improve the ALANN.AE Platform</li>
              <li>Verify seller identity through Emirates ID validation</li>
              <li>Verify your vehicle and process your photos using the third-party AI services named in Section 4, with your permission</li>
              <li>Generate listing content from your photos and vehicle information using those services, with your permission</li>
              <li>Facilitate secure communication between buyers and sellers</li>
              <li>Detect and prevent fraud, abuse, and policy violations</li>
              <li>Send service notifications and platform updates</li>
              <li>Comply with applicable UAE laws and regulations</li>
            </ul>
          </LegalSection>

          <LegalSection title="4. Information Sharing & Third-Party AI Services">
            <p>We do not sell your personal information. We may share your information with:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-white">Other Platform Users:</strong> Your public profile and listings are visible to other users as intended by the Platform's functionality.
              </li>
              <li>
                <strong className="text-white">Service Providers:</strong> Trusted third-party providers who assist us in operating the Platform. They are subject to confidentiality and data protection obligations that provide the same or equal protection of your data as this policy.
              </li>
              <li>
                <strong className="text-white">Third-Party AI Services:</strong> With your permission, we share the following data with these providers:
                <ul className="list-circle pl-5 mt-2 space-y-1.5">
                  <li>
                    <strong className="text-purple-300">Google (Gemini API):</strong> vehicle details, specifications, and vehicle documents (such as registration card / Mulkiya), to verify your vehicle and generate listing content.
                  </li>
                  <li>
                    <strong className="text-purple-300">Google Cloud Vision / Gemini Vision:</strong> vehicle photos, to process images and verify condition for your listing.
                  </li>
                </ul>
                <p className="mt-2 text-xs leading-relaxed text-gray-300">
                  We send this data only after you give explicit permission in the app. These providers provide the same or equal protection of your data as this policy under UAE Federal Decree-Law No. 45 of 2021 on Personal Data Protection. If we add or change a provider, we will update this policy and ask for your permission again where required.
                </p>
                <p className="mt-1.5 text-xs font-semibold text-emerald-400">
                  We do NOT send your Emirates ID number or Emirates ID images to third-party AI services under any circumstances.
                </p>
                <p className="mt-1.5 text-xs text-gray-400">
                  <strong className="text-gray-300">International Transfers:</strong> These providers may process data on secure cloud infrastructure outside the UAE. We apply the safeguards required by applicable UAE law to these transfers.
                </p>
              </li>
              <li>
                <strong className="text-white">Legal Authorities:</strong> UAE government or law enforcement when required by applicable UAE law.
              </li>
            </ul>
          </LegalSection>

          <LegalSection title="5. Data Security">
            <p>We implement industry-standard security measures including:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>TLS/SSL encryption for all data transmission</li>
              <li>Secure token-based authentication and access control</li>
              <li>Access controls limiting employee data access to necessary operational functions</li>
              <li>Encrypted storage for sensitive verification records</li>
            </ul>
            <p>While we employ robust security measures, no internet transmission is 100% secure. We encourage you to use strong passwords and protect your account credentials.</p>
          </LegalSection>

          <LegalSection title="6. Data Retention">
            <p>
              We retain your personal data for as long as your account is active or as necessary to provide services. Upon account deletion, we delete your data within 30 days except where retention is required by UAE law (typically 5 years for financial and transaction records).
            </p>
            <p>
              Data sent to third-party AI services is kept by those providers only as necessary to provide verification and listing generation services (Google Gemini API: ephemeral/operational processing under enterprise data protection terms). Third-party AI services do not use your submitted data to train public foundation models.
            </p>
          </LegalSection>

          <LegalSection title="7. Your Rights">
            <p>Under applicable UAE law, you have the right to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Access, correct, or delete your personal information</li>
              <li>
                <strong className="text-white">Withdraw Consent:</strong> Withdraw consent for optional data processing, including your permission for third-party AI processing, at any time through the app under <span className="text-purple-300">Settings &gt; Privacy Center</span> or by contacting us at <a href="mailto:privacy@alann.ae" className="text-purple-400 underline">privacy@alann.ae</a>. This does not affect processing already carried out. Without this permission, we may be unable to verify your vehicle or create your listing using AI.
              </li>
              <li>
                <strong className="text-white">In-App Account Deletion:</strong> Users can delete their account directly within the mobile application by navigating to <span className="text-purple-300">Settings &gt; Privacy Center &gt; Delete Account</span>, or online via our <a href="/account-deletion" className="text-purple-400 hover:text-purple-300 underline">Account Deletion</a> page.
              </li>
              <li>Request data portability where technically feasible</li>
              <li>Lodge a complaint with the UAE competent authority</li>
            </ul>
          </LegalSection>

          <LegalSection title="8. Cookies">
            <p>We use cookies and similar tracking technologies to enhance your experience. Please see our <a href="/cookie" className="text-purple-400 hover:text-purple-300 underline">Cookie Policy</a> for details.</p>
          </LegalSection>

          <LegalSection title="9. Contact Us">
            <p>For privacy-related questions, data access requests, or consent withdrawal, contact:</p>
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
