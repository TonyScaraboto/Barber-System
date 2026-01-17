import { SignUp } from '@clerk/clerk-react';

export default function SignUpComponent() {
  return (
    <SignUp 
      routing="path"
      path="/cadastro"
      signInUrl="/login"
      afterSignUpUrl="/"
      appearance={{
        elements: {
          rootBox: "mx-auto",
          card: "shadow-none"
        }
      }}
    />
  );
}
