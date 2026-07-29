CELASTISE fixed frontend

Fixed issues:
1. Removed unsupported viewport object from metadata export in app/layout.tsx.
2. Added proper Next.js viewport export.
3. Removed missing @tailwindcss/typography plugin requirement because the project does not use prose typography classes.
4. Added all missing public assets:
   - public/watches/*.jpg
   - public/visa.svg
   - public/mastercard.svg
   - public/amex.svg
   - public/manifest.json
   - public/og-image.jpg
   - public/favicon.ico
   - public/apple-touch-icon.png

How to run:
1. npm install
2. npm run dev
3. Open http://localhost:3000

If old cache warning appears:
- Windows PowerShell: Remove-Item -Recurse -Force .next
- Then run: npm run dev
