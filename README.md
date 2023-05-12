# Remi

Next 13 and Sanity v3 starter template. Remi was created for two purposes.

- **Boilerplate**: Quickly get started on a new Next/Sanity project with the base cms and route structure in place.
- **Theme**: Set up a simple site in a few hours. If you need a basic brochure site then you can easily set up Remi, use the page builder and deploy on a server.

## Features

- Next 13 including the new /app directory, server components and all the new features.
- Sanity CMS including groq queries, page builder, dynamic schema type imports, seo/og fields hooked into the frontend and base schema structures.
- Typescript across the stack.
- Zustand store.

## Get Started

1. Create a Sanity project in another folder. Please make sure you already have a sanity account.

```sh
npm -y create sanity@latest
```

2. Download the repo

```sh
git clone https://github.com/celsowhite/remi.git
```

3. Create the env file and add your Sanity config variables.

```sh
mv .env.sample .env.local
```

4. Install packages.

```sh
npm install
```

## Local Dev

```sh
npm run dev
```

## Deploy

The recommended way to deploy this repo is to connect it to a Vercel host. Setup a new Vercel project and make sure to add the env variables from .env.local.

1. Build the Sanity studio. The below command will build output files for Sanity studio and place them in the public folder for the app. By placing the files in the Next public folder, the studio will be available at the /studio route.

```sh
npm run sanity:build
```

2. Push to a vercel connected github repo. Vercel will auto build and deploy the repo to your host.

## Q&A

### Why is Sanity studio not embedded?

Although it's possible to embed Sanity studio directly in the Next app router, I've opted to keep it isolated in its own folder. When trying to embed it, I faced a few issues getting some plugin modules to build and using some Vite specific techniques like import.meta. The native build tools for the studio and Next are different (Vite/Turbopack) which can cause a few issues with platform specific builds. Keeping the studio isolated also makes it more portable and easier to work on in isolation.

### Can I turn off Typescript?

This repo is meant to be for Typescript specific projects. If you'd like, you can ignore typescript errors at build time by turning on the ignoreBuildErrors flag in next.config.js.
