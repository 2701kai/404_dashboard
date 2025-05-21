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
