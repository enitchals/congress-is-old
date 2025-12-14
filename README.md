# Congress is Old
A data analysis project comparing the age distribution of Americans to the age distribution of our congressional representatives.

## Try it out
[View the project live!](https://congress-is-old.wtf/)

## Development

### Setup
```bash
npm install
```

### Build
```bash
# Production build
npm run build

# Development build with watch mode
npm run build-dev
```

## Deployment

This is a frontend-only application that can be deployed to GitHub Pages.

### Automated Deployment

Deploy to GitHub Pages using the automated deployment script:

```bash
npm run deploy
```

This command will:
1. Build the project (via `predeploy` script)
2. Deploy the `public/` directory contents to the `gh-pages` branch

The `.nojekyll` file in the `public/` directory ensures GitHub Pages doesn't process the files with Jekyll.

## To Do
[Task Board](https://github.com/users/enitchals/projects/8)
