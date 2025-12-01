import Link from 'next/link'

export const metadata = {
  title: 'Terms of Service | ExpandNord',
  description: 'ExpandNord terms of service - terms and conditions for using our services.',
}

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-[#0A2D28] text-white">
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center text-[#9ED0A8] hover:text-white transition-colors mb-8"
        >
          &larr; Back to Home
        </Link>

        <h1 className="text-4xl font-light mb-8">Terms of Service</h1>
        <p className="text-[#A4C6B7] mb-8">Last updated: December 2024</p>

        <div className="space-y-8 text-[#A4C6B7]">
          <section>
            <h2 className="text-2xl font-light text-white mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing or using the ExpandNord website and services, you agree to be bound by
              these Terms of Service. If you do not agree to these terms, please do not use our
              services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light text-white mb-4">2. Description of Services</h2>
            <p>
              ExpandNord provides business expansion consultancy services, connecting Baltic and
              Nordic markets. Our services include market entry strategies, legal compliance
              support, recruitment assistance, and business development consulting.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light text-white mb-4">3. Use of Website</h2>
            <p className="mb-4">
              You agree to use our website only for lawful purposes and in accordance with these
              Terms. You agree not to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Use the website in any way that violates applicable laws or regulations</li>
              <li>Attempt to gain unauthorized access to any part of the website</li>
              <li>Interfere with or disrupt the website or servers</li>
              <li>Transmit any malicious code or harmful content</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-light text-white mb-4">4. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and images, is the
              property of ExpandNord or its content suppliers and is protected by intellectual
              property laws. You may not reproduce, distribute, or create derivative works without
              our prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light text-white mb-4">5. Disclaimer of Warranties</h2>
            <p>
              Our website and services are provided &quot;as is&quot; without warranties of any
              kind, either express or implied. We do not warrant that the website will be
              uninterrupted, error-free, or free of viruses or other harmful components.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light text-white mb-4">6. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, ExpandNord shall not be liable for any
              indirect, incidental, special, consequential, or punitive damages arising out of or
              relating to your use of our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light text-white mb-4">7. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of
              Lithuania, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light text-white mb-4">8. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes will be effective
              immediately upon posting on this page. Your continued use of the website after changes
              constitutes acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light text-white mb-4">9. Contact Us</h2>
            <p>
              If you have questions about these Terms of Service, please contact us at:{' '}
              <a
                href="mailto:info@expandnord.com"
                className="text-[#9ED0A8] hover:text-white transition-colors"
              >
                info@expandnord.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
