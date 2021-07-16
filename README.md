# Fotoalbum 

Seminar project for *PB138* course. The aim of this project was to create a fullstack photo album website. This is the **frontend** of the created site. The built site is available at: [https://xhrodek1.pages.fi.muni.cz/pb138-foto-album/](https://xhrodek1.pages.fi.muni.cz/pb138-foto-album/).

## ✍️ Authors

Katarína Bulková, Tomáš Jaroš, Lukáš Gorazd Hrodek, Michal Barnišin

## 📋 Description 

We created a simple modelling agency website which displays agency's models and photographers. The models are divided into different categories based on their personal choice. For each model, a set of their albums is viewable, but **only** for authenticated users. Some photos/albums could contain explicit content and are therefore marked as *NSFW* and require authentication or explicit permission to show them.

## 🔌 Used technology

Written in *typescript*, the website is build using static websites generator *Gatsby*. As for the CSS, *TailwindCSS* was used. The authetication is done using *Auth0*. The queries to the *Strapi* backend are expressed in *GraphQL*.

<div align="center">
  <img width="50px" alt="Typescript" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png">
  <img width="50px" alt="Gatsby" src="https://pbs.twimg.com/profile_images/1135999619781939201/HZ-pCQcP_400x400.png">
  <img width="50px" alt="TailWindCSS" src="https://tailwindcss.com/_next/static/media/twitter-square.daf77586b35e90319725e742f6e069f9.jpg">
  <img width="50px" alt="auth0" src="https://cdn.freebiesupply.com/logos/large/2x/auth0-logo-png-transparent.png">
  <img width="50px" alt="GraphQL" src="https://graphql.org/img/logo.svg">
</div>

## ⚙️ Requirements

In order to run this applications, you need to have installed:
- **node** (at least version 14)
- **npm** or yarn
- **gatsby-cli** (`npm install -g gatsby-cli`)

## 🚀 Quick start to run locally

1.  Install dependencies

    ```shell
    npm i
    ```
    or

    ```shell
    yarn install
    ```

2.  Start development server

    ```shell
    gatsby develop
    ```
    or

    ```shell
    npm develop
    ```
    or

    ```shell
    yarn develop
    ```

3.  Your site is now running at `http://localhost:8000`!
