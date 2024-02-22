# Sora Next Web

Sora Next Web

## Live Demo

[https://web.getsoraapp.com](https://web.getsoraapp.com)

![preview](./og-image.png)

## Quick Start

1. clone project

```shell
git clone https://github.com/SoraWeb/sora-next-web
```

2. install dependencies

```shell
cd sora-next-web
yarn
```

3. set environmental values

rename `.env.template` to `.env.local` under root dir, and add the env vars

```
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
CLOUDINARY_FOLDER=<Your cloudinary folder contains video files>
```

Sign up your free [Cloudinary](https://cloudinary.com/) account to get your Cloudinary details

4. videos folder structure

You will need to put videos in the following structure in the Cloudinary:

```
<CLOUDINARY_FOLDER>/<subfolder>/nhdp_<id>.mp4
<CLOUDINARY_FOLDER>/<subfolder>/nhdp_<id>.webm
<CLOUDINARY_FOLDER>/<subfolder>/hd1080p_<id>.mp4
<CLOUDINARY_FOLDER>/<subfolder>/hd1080p_<id>.webm
```

![cloudinary](./cloudinary.png)

Where video file starts `nhdp_` for preview and `hd1080p_` for details view.

If you prefer different logic of reading files, change the logic in `organizeVideos.ts`

5. local development

```shell
yarn dev
```

open `http://localhost:3000` for preview

## Credit to

- [nextjs](https://nextjs.org/docs) for full-stack development
- [tailwindcss](https://tailwindcss.com/) for page building
- [vercel gallery template](https://vercel.com/templates/next.js/image-gallery-starter) for the page styling
- [get sora app](https://getsoraapp.com) for the sora prompts

## Subscribe to the coming Sora App

you can subscribe our mailing list at [Get Sora App](https://getsoraapp.com)

## Sora Prompt Helper

try our Sora Prompt Helper [here](https://soraprompt.chat/gpts)

## Support

<a href="https://www.buymeacoffee.com/jamesgong" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>
