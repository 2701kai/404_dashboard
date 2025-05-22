import { useEffect } from "react";

import { Routes, Route } from "react-router-dom";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Today from "./pages/Today";
import Archive from "./pages/Archive";

// e

// just playing..
export default function App() {
  useEffect(() => {
    const hydrateInstagram = () => {
      if (window.instgrm) {
        console.log("🔁 Hydrating Instagram embeds from App...");
        window.instgrm.Embeds.process();
      }
    };

    hydrateInstagram();
  }, []);

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
