# GEMINI.md: Project Overview and Development Guide

This document provides a comprehensive overview of the "Physical AI Course" documentation website project, intended to serve as a guide for future development and maintenance.

## Project Overview

This is a documentation website built using [Docusaurus](https://docusaurus.io/), a modern static website generator. The website serves as a comprehensive guide to mastering Generative AI, with a focus on "Physical AI".

The content is organized into modules covering a range of topics from foundational concepts to advanced robotics, including:

-   Hardware and Lab Setup
-   ROS2 Basics
-   Simulation with Isaac Sim
-   Generative AI in Robotics
-   Humanoid Walking
-   Navigation and SLAM

The project also includes a `ChatWidget` component, suggesting an interactive chat feature for user support, which communicates with a backend service.

## Building and Running

The project is managed using `yarn`. The following scripts are available in `package.json`:

-   **Installation:**
    ```bash
    yarn
    ```

-   **Local Development:**
    ```bash
    yarn start
    ```
    This command starts a local development server and opens a browser window.

-   **Build:**
    ```bash
    yarn build
    ```
    This command generates static content into the `build` directory.

-   **Type Checking:**
    ```bash
    yarn typecheck
    ```
    This command runs the TypeScript compiler to check for type errors.

## Development Conventions

-   **Content:** All documentation is written in Markdown and located in the `docs` directory. The sidebar is automatically generated from the directory structure.
-   **Styling:** Custom styles are defined in `src/css/custom.css`.
-   **Components:** Custom React components are located in the `src/components` directory.
-   **Configuration:** The main Docusaurus configuration is in `docusaurus.config.ts`. The documentation sidebar is configured in `sidebars.ts`.
-   **Typescript:** The project uses TypeScript for type safety.
