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
AUH is a static web project, so it’s supported by GitHub Pages.
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
