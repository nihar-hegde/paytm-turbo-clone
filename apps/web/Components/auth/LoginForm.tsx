import { CardWrapper } from "@repo/ui/components/auth/card-wrapper";
import React from "react";
import { Social } from "./socials";

export const LoginForm = () => {
  return (
    <div>
      <CardWrapper
        headerLabel={"Welcome Back!"}
        backButtonLabel={"Don't Have an account?"}
        backButtonHref={"/auth/register"}
      >
        <Social />
      </CardWrapper>
    </div>
  );
};
