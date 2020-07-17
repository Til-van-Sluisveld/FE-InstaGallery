# ⭐ InstaGallery ⭐

### Sell your instagram photo's Online!

## What this app is about

[Find out here for a working version](https://instagallery.netlify.app/)

Two of my major hobbies are Travel and Photography. I like to combine thes hobbies and upload photo's of my travels on instagram. Someone commented on one of my pictures asking me if he could have the photo so he could print it out and hang it on his wall. So I wanted to create a webshop using the photographs i had already uploaded to instagram.

I have friends that share my hobby. I figured they would be interested in also start selling their photographs. So instead of creating a single webshop I wanted to create a webshop creator.

Enter InstaGallery.

## Table of contents

- [App demo](#App-demo)
- [Used technologies and concepts](#used-technologies-and-concepts)
- [Goals for this project](#goals-for-this-project)
- [User stories](#user-stories)
- [Project board](#project-board)
- [Wireframe](#wireframe)
- [Datamodel](#datamodel)
- [Git version control](#git-version-control)
- [Backend server repo](#backend-server-repo)

## App demo

![App demo]()

## Used technologies and concepts

👇 **Click links to see code samples in this project** 👇

- [React for UI building](https://github.com/Til-van-Sluisveld/FE-InstaGallery/blob/master/src/App.js)
- [Redux for state management](https://github.com/Til-van-Sluisveld/FE-InstaGallery/tree/master/src/store)
- [Authentication](https://github.com/Til-van-Sluisveld/FE-InstaGallery/tree/master/src/store)
- [Express as web app framework](https://github.com/Til-van-Sluisveld/BE-InstaGallery/blob/master/index.js)
  - [REST API](https://github.com/Til-van-Sluisveld/BE-InstaGallery/blob/master/routers/galleries.js)
- [Sequelize as ORM](https://github.com/Til-van-Sluisveld/BE-InstaGallery/blob/master/models/photo.js)
- [Environment variables](https://github.com/Til-van-Sluisveld/FE-InstaGallery/blob/master/src/config/constants.js) ⭐
- [Nodemailer & Mailtrap.io](https://github.com/Til-van-Sluisveld/BE-InstaGallery/blob/master/routers/invoices.js) ⭐
- [Web Scraping](https://github.com/Til-van-Sluisveld/FE-InstaGallery/blob/master/src/pages/InstaImport/index.js) ⭐

⭐ _New technology learned during this project_

## Goals for this project

The goal of this project is to build a full-stack app, practicing known and exploring _new_ technologies (see above). I learned these new tools independently by reading its documentation, consulting forums like StackOverlfow and watching online videos.

- practice full-stack app development
- build a working prototype in 2 weeks
- apply what we learned in Codaisseur's bootcamp
- extend with new technology independently
- showcase and document development skills using:
  - [wireframes](https://github.com/Til-van-Sluisveld/FE-InstaGallery/tree/development/project/Wireframes) as Minimum Viable Product
  - conscious [data model](https://github.com/Til-van-Sluisveld/FE-InstaGallery/blob/development/project/DataModel.png) design
  - user stories perspective
  - agile/[kanban project](https://github.com/Til-van-Sluisveld/FE-InstaGallery/projects/1) approach
  - transparant and structured [git version control](#git-version-control)

## User stories

- As a photograper I want to sell photos I have already uploaded to instagram
- As a photographer i want to be notified once someone bought one of my photographs
- As a person who love photography I can find instagram users photo pages, so I can admire their work.
- As a person who loves photography I want to select a photo and view its details
- As a person who loves photography I want to order a photo, so I can support my favorite photographers

_This project is work in progress. Some features still need to be implemented and revised. Any suggestions or feedback is welcome, please let me know [here](https://www.linkedin.com/in/tilvansluisveld/)_.

## Project Board

Go to [project board](https://github.com/Til-van-Sluisveld/FE-InstaGallery/projects/1)

## Wireframe

Go to [wireframes](https://github.com/Til-van-Sluisveld/FE-InstaGallery/tree/development/project/Wireframes)

## Datamodel

Go to [datamodel](https://github.com/Til-van-Sluisveld/FE-InstaGallery/blob/development/project/DataModel.png)

## Git version control

I recognize the need for solid version control and try to:

- write clear commit messages
- name branches by feature
- do pull requests with concise summaries

#### 👀 Click links to view samples of pull requests 👀

- [Import photos feature](https://github.com/Til-van-Sluisveld/FE-InstaGallery/pull/6) pull request
- [Checkout feature](https://github.com/Til-van-Sluisveld/BE-InstaGallery/pull/5) pull request

## Backend server repo

The backend side of this project is an Express server using Sequelize to manage the underlying Postgres database. [Click here for more details](https://github.com/Til-van-Sluisveld/BE-InstaGallery)
