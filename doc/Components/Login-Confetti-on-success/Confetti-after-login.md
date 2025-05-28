## ✅ Show Confetti on Successful Login

Install the confetti package:

```bash
npm install canvas-confetti
```

In `App.jsx`, show confetti when user signs in:

```jsx
import confetti from "canvas-confetti";
import { useEffect } from "react";
import { useUser } from "@clerk/clerk-react";

export default function App() {
  const { isSignedIn } = useUser();

  useEffect(() => {
    if (isSignedIn) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  }, [isSignedIn]);

  return (
    // ...your <Routes> etc.
  );
}
```

✅ Now confetti 🎉 triggers after login! (Only once per session thanks to `useEffect`)

---

> **[Back to CLERK Login](../CLERK_login/CLERK%20Login)**
