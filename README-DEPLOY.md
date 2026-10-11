# Mattu Bridge website — free Cloudflare Pages starter

This is a static HTML/CSS/JavaScript website for Mattu Bridge. It is designed to be hosted on Cloudflare Pages and connected to the existing domain `matobridge.de`.

## Included
- Responsive homepage with Education Consultancy and Employment Placement & Recruitment sections
- Study destinations and service descriptions
- Candidate enquiry guidance and contact form
- About / I.A. Mattu founder message
- Impressum, Privacy Policy, Cookie Policy, Terms & Conditions templates
- No build step and no paid framework required

## Before publishing: essential checklist
1. Open `impressum.html` and enter the complete legally required registered business address and contact details. German Impressum requirements generally require a postal address; a contact form alone is not a substitute.
2. Replace `info@matobridge.de` everywhere if that mailbox is not active.
3. Review `datenschutz.html` and `cookies.html` against the actual providers and tools you use. The current stylesheet loads fonts from Google Fonts. To avoid this third-party request, remove the `@import` line at the top of `styles.css` (the page will use system fallback fonts).
4. The contact form currently prepares an email in the visitor's own mail app. It does NOT securely submit form data to a server. Test this behaviour and replace it with a secure form backend if you need true online submissions.
5. Do not collect passport scans, residence permits, driving licences, or other sensitive candidate documents using this starter form. Add a secure, access-controlled document workflow only after selecting a suitable provider and updating the privacy notice.
6. Check all service descriptions and ensure they accurately reflect your registration, permissions and actual services. No admission, visa, employment or other outcome is guaranteed.
7. Review the legal templates with a qualified German professional before relying on them.

## Publish to Cloudflare Pages (no build command)
1. Create a free account at https://dash.cloudflare.com/
2. Create a GitHub repository (for example `mattu-bridge-website`) and upload all files in this folder to the repository root. Alternatively, use a Cloudflare Pages upload workflow if the current dashboard offers Direct Upload for your chosen project type.
3. In Cloudflare dashboard, go to **Workers & Pages** → **Create** → **Pages** → connect to your Git repository.
4. Choose the repository and configure:
   - Framework preset: **None**
   - Build command: leave blank
   - Build output directory: `/` or the repository root as instructed by the dashboard
5. Deploy. Cloudflare will give you a temporary `pages.dev` address. Test all pages on mobile and desktop.
6. In the Pages project, open **Custom domains** → **Set up a custom domain** and enter `matobridge.de`. Follow the exact DNS instructions shown by Cloudflare.
7. If Cloudflare asks you to change nameservers, make the change at Hostword only after reviewing existing DNS records. If you already use email on the domain, preserve or recreate all required MX, SPF, DKIM and DMARC records. Do not guess DNS values.
8. Add `www.matobridge.de` as a custom domain too if you want both versions to work, and configure the preferred redirect if needed.
9. Wait for DNS and HTTPS certificate provisioning to finish, then test `https://matobridge.de`, `https://www.matobridge.de`, contact links, mobile navigation and legal pages.

## Contact form limitation
The included form uses `mailto:info@matobridge.de`. It does not upload or store form data on the website server. If you need a real web form, choose a form provider or build a Cloudflare Pages Function with a mail service. Before doing so, update the privacy notice, check data-processing terms and retention, and avoid collecting sensitive documents until the workflow is secure.

## Email
Web hosting and mailbox hosting are separate services. Cloudflare Pages hosts the website but does not provide a mailbox. Ask Hostword whether email hosting is included with your domain; otherwise choose a separate email provider and add the exact MX/SPF/DKIM/DMARC records it provides.
