import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { loans } from "@/lib/data/loans";
import { blogPosts } from "@/lib/data/blog";
import { team } from "@/lib/data/team";
import { jobs } from "@/lib/data/jobs";

const BASE_URL = "";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/about", changefreq: "monthly", priority: "0.7" },
          { path: "/loan-programs", changefreq: "monthly", priority: "0.9" },
          { path: "/blog", changefreq: "weekly", priority: "0.8" },
          { path: "/team", changefreq: "monthly", priority: "0.7" },
          { path: "/careers", changefreq: "weekly", priority: "0.6" },
          { path: "/faq", changefreq: "monthly", priority: "0.5" },
          { path: "/contact", changefreq: "yearly", priority: "0.6" },
          ...loans.map((l) => ({ path: `/loan-programs/${l.slug}`, changefreq: "monthly", priority: "0.7" })),
          ...blogPosts.map((p) => ({ path: `/blog/${p.slug}`, changefreq: "monthly", priority: "0.6", lastmod: p.date })),
          ...team.map((m) => ({ path: `/team/${m.slug}`, changefreq: "monthly", priority: "0.5" })),
          ...jobs.map((j) => ({ path: `/careers/${j.slug}`, changefreq: "weekly", priority: "0.5" })),
        ];

        const urls = entries.map((e) => {
          const parts = [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            "lastmod" in e && e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ].filter(Boolean);
          return parts.join("\n");
        });

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});