import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy | ExpandNord',
  description: 'ExpandNord privacy policy - how we collect, use, and protect your data.',
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#0A2D28] text-white">
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center text-[#9ED0A8] hover:text-white transition-colors mb-8"
        >
          &larr; Back to Home
        </Link>

        <h1 className="text-4xl font-light mb-8">Privacy Policy</h1>
        <p className="text-[#A4C6B7] mb-8">Last updated: December 2024</p>

        <div className="space-y-8 text-[#A4C6B7]">
          <section>
            <h2 className="text-2xl font-light text-white mb-4">1. Introduction</h2>
            <p>
              ExpandNord (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to
              protecting your privacy. This Privacy Policy explains how we collect, use, disclose,
              and safeguard your information when you visit our website or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light text-white mb-4">2. Information We Collect</h2>
            <p className="mb-4">We may collect information about you in various ways:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong className="text-white">Personal Data:</strong> Name, email address, company
                name, and other contact information you provide through our contact form.
              </li>
              <li>
                <strong className="text-white">Usage Data:</strong> Information about how you
                interact with our website, including pages visited and time spent.
              </li>
              <li>
                <strong className="text-white">Cookies:</strong> Small data files stored on your
                device to enhance your browsing experience.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-light text-white mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you information about our services</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-light text-white mb-4">4. Data Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may
              share your information with trusted service providers who assist us in operating our
              website and conducting our business, provided they agree to keep this information
              confidential.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light text-white mb-4">5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your
              personal data against unauthorized access, alteration, disclosure, or destruction.
              However, no method of transmission over the Internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light text-white mb-4">6. Your Rights</h2>
            <p className="mb-4">Under GDPR, you have the right to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Access your personal data</li>
              <li>Rectify inaccurate personal data</li>
              <li>Request deletion of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Data portability</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-light text-white mb-4">7. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or wish to exercise your rights,
              please contact us at:{' '}
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
