"use client";

import GoogleIcon from "../../public/google.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export default function GoogleSignInButton() {
  return (
    <Button variant={"outline"} size="icon">
      <Image
        onClick={() => signIn("google")}
        src={GoogleIcon}
        alt="google icon"
        className="w-6 h-6"
      />
    </Button>
  );
}
