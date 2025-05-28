# ✅ Add Sass to Vite React

Install Sass:

```bash
npm install sass
```

Create `src/styles/app.scss`:

```scss
// Base example
$bg: #f7f7f7;
$primary: #007bff;

body {
  background: $bg;
  font-family: system-ui, sans-serif;
}

nav {
  background: white;
  padding: 1rem;
  border-bottom: 1px solid #ccc;

  a {
    margin-right: 1rem;
    text-decoration: none;
    color: $primary;

    &.active {
      font-weight: bold;
    }
  }
}
```

Then import it in `main.jsx`:

```js
import "./styles/app.scss";
```

✅ Done: Sass styles now active.

---

> Optional: <br /> **[Customize Theme](App.scss)**
