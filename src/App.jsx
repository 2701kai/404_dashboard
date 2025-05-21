import { Routes, Route, Link } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  RedirectToSignIn,
} from "@clerk/clerk-react";
import "./App.css";

import Home from "./pages/Home.jsx";
import Today from "./pages/Today.jsx";
import Archive from "./pages/Archive.jsx";

export default function App() {
  return (
    <div>
      <nav style={{ padding: "0.5rem", borderBottom: "1px solid #ccc" }}>
        <Link to="/">🏠 Home</Link> | <Link to="/today">📅 Today</Link> |{" "}
        <Link to="/archive">🗃️ Archive</Link>
        <span style={{ float: "right" }}>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal" />
          </SignedOut>
        </span>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/today"
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
          path="/archive"
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
      </Routes>
    </div>
  );
}
