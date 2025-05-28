import { useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import confetti from "canvas-confetti";

export default function ConfettiOnLogin() {
  const { isSignedIn } = useUser();

  useEffect(() => {
    if (isSignedIn) {
      confetti({
        particleCount: 150,
        spread: 90,
        origin: { y: 0.6 },
        scalar: 1.2,
        ticks: 200,
        zIndex: 9999,
      });
    }
  }, [isSignedIn]);

  return null;
}
