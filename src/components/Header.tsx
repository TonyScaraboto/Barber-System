import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/clerk-react';

export default function Header() {
  return (
    <header>
      <div className="header-container">
        <a href="/" className="header-logo">
          ✂️ Sistema Barbearia
        </a>
        <div className="header-actions">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="clerk-button clerk-button-outline">
                Entrar
              </button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button className="clerk-button">
                Cadastrar
              </button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton 
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10"
                }
              }}
            />
          </SignedIn>
        </div>
      </div>
    </header>
  );
}
