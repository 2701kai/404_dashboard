# 🎯 Goal: Add a `Layout.jsx` with `<Outlet />`

This allows you to:

- ✅ Keep a consistent navbar or wrapper
- ✅ Swap main content based on the route
- ✅ Future-proof for nested routes (great for a dashboard)

---

### 📁 Step 1: Create `Layout.jsx`

Create `src/pages/Layout.jsx`:

```jsx
import { Outlet, NavLink } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

export default function Layout() {
  return (
    <>
      <header style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
        <NavLink to="/">🏠 Home</NavLink> |{" "}
        <NavLink to="/today">📅 Today</NavLink> |{" "}
        <NavLink to="/archive">🗃️ Archive</NavLink>
        <span style={{ float: "right" }}>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal" />
          </SignedOut>
        </span>
      </header>

      <main style={{ padding: "1rem" }}>
        <Outlet />
      </main>
    </>
  );
}
```

---

### 🧩 Step 2: Update `App.jsx` to use `Layout`

Replace your `App.jsx` with this:

```jsx
import { Routes, Route } from "react-router-dom";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Today from "./pages/Today";
import Archive from "./pages/Archive";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route
          path="today"
          element={
            <>
              <SignedIn>
                <Today />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />

        <Route
          path="archive"
          element={
            <>
              <SignedIn>
                <Archive />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />
      </Route>
    </Routes>
  );
}
```

---

### ✅ Result

- Layout wraps all pages via `Outlet`
- Clerk protects `/today` and `/archive`
- Navbar stays visible across routes

---

Let me know when it’s wired up!
Next I can guide you through:

- 🧩 Adding nested routes (for daily notes, views, etc.)
- 🌈 Styling polish (Tailwind or styled-components based on what you liked in 016/017)
- 🧪 Testing route guards with a fake "admin" page?

Want to checkpoint this in git as `feat/layout-routing`?
