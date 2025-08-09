# Mecha Mart — Netlify-ready (Stripe + Admin)
Deploy:
1) Netlify → Add new site → Deploy manually → drag this folder.
2) Site settings → Environment variables: add `STRIPE_SECRET_KEY` and `SITE_URL` (your Netlify URL).
3) Trigger a deploy. Test with Stripe test card `4242 4242 4242 4242`.
Admin:
- Open /admin.html → load products.json → edit → Download JSON → replace on the server.
