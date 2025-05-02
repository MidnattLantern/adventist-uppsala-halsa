Live link: https://midnattlantern.github.io/adventist-uppsala-halsa/

The project Adventist Uppsala Hälsa (“AUH” for short) is a commission for Uppsala’s Adventist community, aiming to provide health-related advice and guidelines according to the Seventh-day Adventist values. The aim is to inform people about how they can improve their quality of life through habits and food/drinks.

Setting up React
===
AUH is built using the React framework with NPM and is written in TypeScript.
How to install:
- Run the installation script:
```zsh
npx create-react-app app-name --template typescript
```

Deployment
===
AUH is a static web project, so it’s supported by GitHub Pages. <br/>
How to deploy:
1. Install the necessary packages:
```zsh
npm install gh-pages --save-dev
```

2. Inside package.json, add a "homepage" field with a link to the destination.
```json
"homepage": "https://MidnattLantern.github.io/adventist-uppsala-halsa"
```

3. Inside package.json, under "scripts", add deploy and predeploy:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

4. After adding and pushing to the GitHub repository, run the following command when the project is ready for public release:
```zsh
npm run deploy
```

Fonts and assets: Credits
===
Montserrat: https://fonts.google.com/specimen/Montserrat/license <br/>
Merriweather: https://fonts.google.com/specimen/Merriweather/license?query=Merriweather <br/>
Organization logo: https://www.adventist.design/downloads/logo/ <br/>
Favicon and general assets: Alma Isaksson <br/>

Fonts, assets, colors: How to use
===
Fonts:
---

The fonts are imported in index.html inside the public directory. The snippet looks like the following:
```html
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,opsz,wght@0,18..144,300..900;1,18..144,300..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
```
For this project, all variables, such as fonts, are located in the index.css file. Should you want to organize them in a separate file (i.e variables.css), make sure to make an import at index.css. Example:
```css
@import './directory-to-variables/variables.css';
```
Respective fonts can be used as usual in CSS files, but there are CSS variable from variables.css inside the styles directory `--font-theme-primary` for Merriweather and `--font-theme-secondary` for Montserrat. Example:
```css
.Text1 {
    font-family: var(--font-theme-primary)
}
.Text2 {
    font-family: var(--font-theme-secondary)
}
```

Colors:
---
All the colors used across the project are established as a variable inside index.css because the naming makes for good self-documentation. It is encouraged to use for instance `color: var(--color-theme-primary)` rather than `color: #3B7B88`.

Icons:
---
All the SVG icons are stored inside the vector-icons directory. <br/>
Notes about setting up and importing SVG: <br/>
1. This is a CRA project, SVGR is built in. Type `import { ReactComponent as (YourIconComponentName) } from "../../assets/vector-icons/some-vector-icon.svg";` replace "YourIconComponentName" and "some-vector-icon.svg" with actual names. 
2. The directory cannot be named just "icons", that's why the directory is named "vector-icons". 
3. Unlike Vite, CRA cannot handle certain XML elements. It may be necessary to clean up XML imports on each SVG file manually by opening it up as text and delete the following XML attributes: `xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/"`.
4. Make sure the SVG file itself does not have any style attributes. Styles such as fill are established in a CSS file.


Responsiveness
===
The project is designed with a mobile-first approach. CSS files use three @media queries to adjust for larger screens by detecting min-width.
Small: default
Medium: @media (min-width: 480px)
Large: @media (min-width: 768px)
X-Large: @media (min-width: 1280px)

App.tsx
===
Regarding responsiveness, App.tsx determines the dimensions of the header, main and footer. Each respective component has no size limit and are restricted by App.tsx

Components
===
Inside the components directory, there are folders/ directories for each component. They come with a JSX file (written in TypeScript), a module.css file and a test file. Each component are wrapped in a ComponentContainer div element.

Header
---
Logo: Appearing at the top right of the page, displaying the logo of the organization. Pressing the logo will take the user to the organization's main website.
Search bar: Appearing fixed at the bottom right for phone, and at the header for desktop, the search bar allows the user to find specific information conveniently. It's automatically collapses in phone view when not used to save space, but always expanded on desktop.

Manual Testing
===
The project was manually tested using an iPhone 13 mini and a web browser on a MacBook 13 inch.

Unit Testing
===
Each JSX file (aside from index.tsx) has a respective test.tsx file using Jest.
