"use client";
import React from "react";
import { signIn } from "next-auth/react";
import { Button } from "@repo/ui/components/ui/button";

export const Social = () => {
  const onClick = (provider: "github") => {
    signIn(provider, {
      callbackUrl: "http://localhost:3000",
    });
  };
  return (
    <div className="flex items-center w-full gap-x-2">
      <Button
        size={"lg"}
        className="w-full"
        variant={"outline"}
        onClick={() => onClick("github")}
      >
        Github
      </Button>
    </div>
  );
};
