import { Outlet, NavLink } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

export default function Layout() {
  return (
    <div className="app-container">
      <header>
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
      <main>
        <Outlet />
      </main>
    </div>
  );
}
