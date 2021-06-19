<p align="center">
  <a href="https://nextjs-view-counter-hephaest.vercel.app/api/counter">
    <img height="300px" src="https://user-images.githubusercontent.com/37981444/122640887-6355bd00-d134-11eb-981a-042d82f1b00d.png">
  </a>
</p>

<h1 align="center">View Counter</h1>

<div align="center">

English | [中文](README_CN.md)

A simple Github profile view counter made by Firebase and Next.js.

[![CI status][github-action-image]][github-action-url] [![david deps][david-image]][david-url] [![david devDeps][david-dev-image]][david-dev-url]

[github-action-image]: https://img.shields.io/github/workflow/status/Hephaest/nextjs-view-counter/View%20Counter%20CI/main
[github-action-url]: https://github.com/Hephaest/nextjs-view-counter/actions?query=View%20Counter%20CI
[david-image]: https://img.shields.io/david/Hephaest/nextjs-view-counter?style=flat-square
[david-dev-url]: https://david-dm.org/Hephaest/nextjs-view-counter?type=dev
[david-dev-image]: https://img.shields.io/david/dev/Hephaest/nextjs-view-counter?style=flat-square
[david-url]: https://david-dm.org/Hephaest/nextjs-view-counter

</div>

# Getting Started

## Step 1: Fork

Please fork this repo.

## Step 2: Configure Firebase

Register your [Firebase](https://firebase.google.com/) account:

- Click **Get started** and **Add project**.
- Create a realtime database and start in **test mode**.
- Create a data structure as bellow:

<p align="center">
  <img width="600px" src="https://user-images.githubusercontent.com/37981444/122641337-33f47f80-d137-11eb-803a-ebe3b876ec83.png">
</p>

- Change rules:

<p align="center">
  <img width="600px" src="https://user-images.githubusercontent.com/37981444/122645133-67410980-d14b-11eb-97ee-40cc1b8062ac.png">
</p>

## Step 3: Deploy on Vercel

- Login by your Github account.
- Select the forked repo.
- Go to **Settings**, add **Environment Variables**, enter **Name** as `FIRE_BASE_URL` and your according Firebase url:

<p align="center">
  <img width="600px" src="https://user-images.githubusercontent.com/37981444/122641573-cd706100-d138-11eb-8041-bcd4b1648d6d.png">
</p>

- Finally, you can select the latest commit and redeploy, everything should work.

<p align="center">
  <img width="400px" src="https://user-images.githubusercontent.com/37981444/122641740-b1b98a80-d139-11eb-8653-bc1e54fe5d96.png">
</p>

## Step 4: Update Github Profile

The last step is super easy. Please copy the following command and paste it to your `README.md`:

```
![](https://YOUR-VERCEL-DOMAIN-Name/api/counter)
```

## Learn More

To learn more about view counter, take a look at the following open-source resources:

- [Tool from antonkomarev](https://github.com/antonkomarev/github-profile-views-counter) - This is the first view counter plugin I used in the latest few months, the drawback slow render speed.
- [Tool from Ryan Lanciaux](https://dev.to/ryanlanciaux/quick-github-profile-visit-counter-14en) - Geeky UI and easy to deploy, but the server always sleep if you use free plan.

## Contribution

Your feedback and contributions are welcome!