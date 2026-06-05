# Vignesh Kumar MR — Portfolio

## Quick Start

```bash
npm install
npm start
```

## Build for Production

```bash
npm run build
```

## Project Structure

```
src/
  App.jsx                  ← root, wires everything
  index.js                 ← ReactDOM entry
  hooks/
    useCursor.js           ← custom gold cursor
    useReveal.js           ← scroll-reveal observer
  components/
    Navbar.jsx             ← fixed nav with active-section tracking
    Hero.jsx               ← landing hero with profile frame
    Skills.jsx             ← 3-column skill grid
    Education.jsx          ← tabbed education section
    Projects.jsx           ← animated project list
    Experience.jsx         ← experience block
    Art.jsx                ← portrait art gallery
    Contact.jsx            ← contact links
  styles/
    global.css             ← all styles, animations, responsive
```
