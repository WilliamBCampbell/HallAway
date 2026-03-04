# HallAway Website

Static marketing website for **HallAway Community Services** (Canton, Ohio), built for GitHub Pages.

## Tech Stack
- HTML5
- CSS3 (Flexbox/Grid)
- Vanilla JavaScript
- SVG assets

## Pages
- `index.html` - Home
- `about.html` - About Us
- `contact.html` - Contact Us

## Project Structure
```text
.
├── index.html
├── about.html
├── contact.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── img/
    ├── hallaway-logo.svg
    ├── fix-icon.svg
    └── haul-icon.svg
```

## Local Preview
Open `index.html` directly in a browser, or use a simple local server:

```powershell
cd d:\_git\hallaway
python -m http.server 8080
```

Then visit `http://localhost:8080`.

## GitHub Pages Deployment
1. Push this folder to a GitHub repository.
2. Go to `Settings -> Pages`.
3. Set:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
4. Save and wait for deployment.

Site URL format:
`https://<your-username>.github.io/<repo-name>/`

## Business Contact
- Phone: `330-412-2400`
- Email: `collinsmike384@gmail.com`

## Notes
- Keep `index.html` in the repository root for GitHub Pages auto-detection.
- Navigation uses relative links to work in project-based Pages URLs.
