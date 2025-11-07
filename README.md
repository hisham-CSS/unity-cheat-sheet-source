# Unity Cheat Sheet for Interaction Designers

A comprehensive, visually appealing web-based cheat sheet covering Unity hotkeys, workflow, and scripting patterns for interaction designers prototyping interactive experiences.

## Features

- 🎨 Modern dark theme with Unity-inspired colors
- ⌨️ Comprehensive keyboard shortcuts organized by category
- 🔄 Standard Unity workflow and best practices
- 💻 Essential C# scripting patterns with code examples
- 📱 Fully responsive design
- 🎯 Tab-based navigation for easy reference

## Quick Start

### Prerequisites

- Node.js 18+ 
- pnpm (or npm/yarn)

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build
```

### Deploy to GitHub Pages

This project includes GitHub Actions for automatic deployment. Every time you push to the `main` branch, it will automatically build and deploy to GitHub Pages.

**Setup:**

1. Push this repository to GitHub

2. Go to your repository Settings → Pages

3. Under "Build and deployment":
   - Source: Select **GitHub Actions**

4. Push any changes to the `main` branch:
   ```bash
   git add .
   git commit -m "Update cheat sheet"
   git push
   ```

5. GitHub Actions will automatically build and deploy your site!

**Manual deployment:**

You can also trigger deployment manually from the Actions tab in your GitHub repository.

**Local build:**

To build locally:
```bash
pnpm build
```
Built files will be in `dist/public/`

## Project Structure

```
client/
  src/
    pages/
      Home.tsx          # Main cheat sheet page
    components/         # Reusable UI components
    index.css          # Global styles and theme
    App.tsx            # App routing and layout
```

## Customization

### Editing Content

The main content is in `client/src/pages/Home.tsx`. You can:

- Add/remove hotkey categories
- Update workflow steps
- Add new code examples
- Modify tips and best practices

### Changing Theme

Edit the color variables in `client/src/index.css` under the `.dark` section:

```css
.dark {
  --primary: oklch(0.6 0.2 240);      /* Unity blue */
  --accent: oklch(0.55 0.18 160);     /* Unity green */
  --background: oklch(0.15 0.02 250); /* Dark background */
  /* ... */
}
```

## Technologies Used

- React 19
- TypeScript
- Tailwind CSS 4
- shadcn/ui components
- Vite

## License

Feel free to use and modify for your own projects.
