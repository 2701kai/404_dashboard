# ⚛️ Atomic Principle of Folder Structure

```css
src/
├── components/
│   ├── atoms/
│   ├── molecules/
│   └── organisms/
├── pages/
├── styles/
```

---

## 🧠 Atomic Design Layers Refresher:

| Layer         | Meaning                            | Example components                     |
| ------------- | ---------------------------------- | -------------------------------------- |
| **Atoms**     | Basic HTML-like elements           | `Button`, `ImageCard`, `Input`         |
| **Molecules** | Groups of atoms that work together | `Navbar`, `SearchBar`, `FormRow`       |
| **Organisms** | Complex groups w/ logic/layout     | `Header`, `Sidebar`, `DashboardLayout` |
| **Pages**     | Top-level route views              | `Home`, `Today`, `Archive`             |

---

## ✅ Recommended Folder Structure, Sass (clean + scalable + atomic-ish):

```css
src/
├── App.jsx
├── main.jsx
├── index.css         ← remove or replace with global reset if unused
│
├── styles/           ← break up styles by role
│   ├── base/         ← variables, resets, fonts
│   │   └── _globals.scss
│   ├── components/   ← reusable UI pieces (cards, buttons)
│   │   └── _card.scss
│   └── app.scss      ← main Sass entry, imports all above
│
├── components/       ← atomic UI blocks (e.g., Button.jsx, Card.jsx)
│   ├── Card.jsx
│   └── Button.jsx
│
├── pages/            ← route views (SPA pages)
│   ├── Home.jsx
│   ├── Today.jsx
│   ├── Archive.jsx
│   └── Layout.jsx
│
├── features/         ← domain logic (e.g., tasks, auth, notes)
│   └── tasks/
│       ├── TaskList.jsx
│       └── taskSlice.js
│
└── assets/
    └── preview-dashboard.png
```

---

## 🧠 Final Adjustments To Make:

### 🔄 Layout Refinement for Centered Content

Since you're asking for `vh/vw` centering **based on your existing files**, update `Layout.jsx` like this:

```jsx
export default function Layout() {
  return (
    <div className="app-container">
      <header>{/* Nav and Clerk buttons here */}</header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
```

Then in `app.scss`:

```scss
.app-container {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  header {
    width: 100%;
    padding: 1rem;
    text-align: center;
  }

  main {
    width: 100%;
    max-width: 960px;
    padding: 2rem;
  }
}
```

#

# 📌 To Do Now 😠 💩

```
src/
├── components/
│   ├── atoms/
│   ├── molecules/
│   └── organisms/
├── pages/
├── styles/
```

## ✅ Refactor To SASS

### 🔁 1. Refactor Layout styles to `.scss`

Move inline styles out of `Layout.jsx` into a partial file.

Create:

```
src/styles/organisms/_layout.scss
```

```scss
.app-container {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  header {
    width: 100%;
    padding: 1rem;
    text-align: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  main {
    width: 100%;
    max-width: 960px;
    padding: 2rem;
  }
}
```

Then in `app.scss`, import it:

```scss
@import "./organisms/layout";
```

And in `Layout.jsx`:

```jsx
return (
  <div className="app-container">
    <header>{/* Nav + Clerk Buttons */}</header>
    <main>
      <Outlet />
    </main>
  </div>
);
```

---

### 🧩 2. Move Button styling (atoms) to:

```
src/styles/atoms/_buttons.scss
```

And use:

```scss
button {
  background: none;
  border: 1px solid $accent;
  color: $accent;
  padding: 0.3rem 0.75rem;
  border-radius: 6px;
  margin-left: 1rem;
  cursor: pointer;

  &:hover {
    background: $accent;
    color: $bg;
  }
}
```

Import in `app.scss`:

```scss
@import "./atoms/buttons";
```

---

### ✅ 3. Update Folder Structure Reference (Final Form)

```
src/
├── components/
│   ├── atoms/
│   │   └── Button.jsx
│   ├── molecules/
│   │   └── NavMenu.jsx
│   └── organisms/
│       └── Header.jsx
├── pages/
│   ├── Home.jsx
│   ├── Layout.jsx
│   └── Today.jsx
├── styles/
│   ├── app.scss
│   ├── atoms/
│   │   └── _buttons.scss
│   ├── molecules/
│   └── organisms/
│       └── _layout.scss
```

---

### ✅ Tailwind vs Sass for Atomic

| 🧠 **Tailwind**                   | 🎨 **Sass/SCSS (Your Current)**                 |
| --------------------------------- | ----------------------------------------------- |
| Great for prototyping fast UI     | Better for structured, design system-based apps |
| Harder to fit into atomic folders | Works naturally with `atoms/`, `molecules/`     |
| Utility-first → Less CSS          | Full CSS flexibility                            |
| Class soup if unstructured        | Cleaner components, externalized logic          |

✅ You made the **right choice** by sticking with **Sass + Atomic** for this structured app.

---
