---
layout: page
title: Getting Started
---

- Please fork the repository
- Clone the webapp repository from your github account

  ```zsh
  git clone https://github.com/$(GITHUB_USER)/GreenNav.git
  ```

- Create a new feature branch

  ```zsh
  cd GreenNav
  git checkout -b your-feature
  ```

- Make local changes and implement your feature

- Push your branch to GitHub

- Open a pull request

## Vision

To enable developers and users alike to use, extend and compose a flexible navigation system that runs anywhere.

## Architecure

There are two sides to the project:<br>
Both the sides aim to be independant of each other and communicate with each other using REST/RPC.

1. **Frontend** -<br>
  We want to provide drivers of electric vehicles with practical solutions, that is, with optimal driving direction for their route. For that we are developing a platform independent navigation system. The current implementation of frontend uses [Polymer](https://www.polymer-project.org/1.0/docs/start/reusableelements.html) elements and is made of many small components like :

  - Reference web app
  - Prototyping tool
  - Visualizer

  The complete webapp source and setup instructions can be found [here](https://github.com/Greennav/webapp)

2. **Backend** -<br>
  We want to develop tools for scientifically analyzing algorithmic solutions. For that we are developing tools for visualization of algorithms, for comparing their performance, we want to provide a generic API for custom algorithms and a lot more. Currently the backend is in the process of being rewritten using new tools and frameworks. The proposed architecture has the following components (links included) :

  - [Database service](https://github.com/Greennav/service-database)
  - [Native service](https://github.com/Greennav/service-native)
  - [Routing service](https://github.com/Greennav/service-routing)

The complete roadmap can be found [here](https://github.com/Greennav/greennav.github.io/blob/master/wiki/Roadmap.md#roadmap)
