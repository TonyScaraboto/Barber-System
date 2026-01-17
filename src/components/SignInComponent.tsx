import { SignIn } from '@clerk/clerk-react';

export default function SignInComponent() {
  return (
    <SignIn 
      routing="path"
      path="/login"
      signUpUrl="/cadastro"
      afterSignInUrl="/"
      appearance={{
        elements: {
          rootBox: "mx-auto",
          card: "shadow-none"
        }
      }}
    />
  );
}
