# Ringstack2

React + Vite site. No animations, route-level code splitting, lazy-loaded images and below-the-fold sections.

## Run

```
npm install
npm run dev      # development
npm run build    # production build in /dist
npm run preview  # test the production build
```

## Edit content

- Brand name, email, address, registration number, social links, menus: `src/data/site.js`
- Services, "why choose us", blog posts, testimonials, FAQ: `src/data/content.js`
- Colors and fonts: top of `src/index.css`

## Images

Drop files into `public/images/` with these names. Until then, a neutral placeholder shows.

- why-choose-us.jpg
- blog-mobile-seo.jpg, blog-logo-design.jpg, blog-print-vs-digital.jpg
- avatar-liam.jpg, avatar-ava.jpg, avatar-michael.jpg

Tip: use .webp or compressed .jpg, about 1000px wide max, for best speed.

## Hosting note

This is a single-page app. Your host must serve `index.html` for every route (on Vercel/Netlify add a rewrite to `/index.html`).
