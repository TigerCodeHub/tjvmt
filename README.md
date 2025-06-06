# TJVMT
A dynamic website for TJVMT. 

## Development
Local development probably does NOT work on FCPS wifi. Use a hotspot if you want to work in school.
The package manager used is npm, but you probably won't need to interact with it (docker does it for you).

## Default
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started with Docker
First, install [Docker Desktop](https://docs.docker.com/desktop/).

For Ion OAuth to work, register your own [Ion OAuth Application](https://ion.tjhsst.edu/oauth/applications). Create a .env.development.local file, and fill it with the data from .env.example (obviously change the OAuth stuff).

Then, start docker from the root directory.

```bash
docker compose build
docker compose up
```
Docker takes care of installing packages, setting up the database, etc. for you (see the Dockerfile and the docker-compose.yml).

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.