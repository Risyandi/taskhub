// created by risyandi.com - 2026
import React from "react";
import { Button } from "../atoms/Button";

interface SocialAuthButtonProps {
  provider: "google" | "apple";
}

export function SocialAuthButton({ provider }: SocialAuthButtonProps) {
  if (provider === "google") {
    return (
      <Button type="button" variant="ghost">
        <img 
          alt="Google" 
          className="w-5 h-5" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDykUcOEinSMfuA-ve320qlm91dRx_ARzDp8DKuhKqHYn6z-uAygFTwzIYHSGi8cjef77B6JFzJq_mS84eLqGLsHgOfMQdbgIEGJlFo67pSKjDOpVQzPMVHUAOjMthz6he8AHanZiMfj4zmgU-iJwSjHXNqWtFU8Ux3GgF18ndDNNxCnEIzz5yKC6Au-qGlqM6rXKc-40wxLc2g9-T2uRCfnH6z0p75GwItZZteVRBXqAmHL7ZJZ7MCRWZRsGE_SaHiwuLxQS64u0zl" 
        />
        <span>Google</span>
      </Button>
    );
  }

  return (
    <Button type="button" variant="ghost">
      <span className="material-symbols-outlined text-[20px]" data-icon="apple">ios</span>
      <span>Apple</span>
    </Button>
  );
}
