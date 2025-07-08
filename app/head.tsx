export default function Head() {
  return (
    <>
      {/* Pre-connects improve font loading performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* Inter & Playfair Display font families */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* Basic meta tags (optional) */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>ExpandNord – Baltic ↔ Nordic Business Expansion</title>
    </>
  )
}
