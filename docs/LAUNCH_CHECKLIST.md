# Launch checklist

- Confirm the legal name and Bangladesh positioning are suitable for public use.
- Review all proposed capabilities and sectors against the organization's actual capacity.
- Review editorials and explicitly illustrative scenarios; no completed project claims are made.
- Review contextual stock images and release limitations in IMAGE_CREDITS.md. Add owner-cleared fieldwork, health/education, or women-enterprise photos if needed.
- Provide a verified contact email and privacy contact; configure Resend only when sender and recipient are ready.
- Establish actual enquiry-retention and access practices. Review the privacy statement against deployment settings before public use.
- Configure host/provider spam protection. The application throttle is instance-local and is not a distributed abuse-prevention system.
- Run checks and inspect responsive pages after content edits.
- Create the owner's GitHub repository and push this local source using the owner's normal authenticated Git tooling. No remote is preconfigured.
- In Vercel, import the repository, choose Next.js and Node 24, and keep `npm run build` as the build command. No custom output directory is needed.
- Add `NEXT_PUBLIC_SITE_URL` using the actual HTTPS deployment origin, without a trailing slash, and redeploy. Until then the website emits no canonical URLs, returns an empty sitemap and requests no indexing.
- Verify all routes, image optimization, sitemap, robots, share image, keyboard menu, 404, and actual configured delivery on the deployment.
- For a custom domain, update `NEXT_PUBLIC_SITE_URL` and redeploy again.

Local implementation and a successful production build do not themselves constitute a public deployment or a guarantee of legal or security compliance.
