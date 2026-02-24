import type { APIRoute } from "astro"

const resources = [
  {
    title: "Astro Documentation",
    url: "https://docs.astro.build",
    category: "Docs",
  },
  {
    title: "Content Collections Guide",
    url: "https://docs.astro.build/en/guides/content-collections/",
    category: "Content",
  },
  {
    title: "Tailwind CSS",
    url: "https://tailwindcss.com/docs",
    category: "Styling",
  },
]

export const GET: APIRoute = async () => {
  return new Response(JSON.stringify({ resources }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  })
}
