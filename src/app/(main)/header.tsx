import { Logo } from '@/components/logo';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs';
import { Loader2 } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="h-20 w-full border-b px-4">
      <div className="mx-auto flex items-center justify-between h-full">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Logo width={80} height={80} className="-ml-8" />
          <h1 className="text-4xl font-extrabold text-logo -ml-7">ance</h1>
        </div>
        <ClerkLoading>
          <Loader2 className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className="flex flex-row gap-2">
              <ThemeToggle />
              <SignInButton
                mode="modal"
                afterSignInUrl="/portfolio"
                afterSignUpUrl="/portfolio"
              >
                <Button size="default" variant="outline">
                  Log in
                </Button>
              </SignInButton>
              <SignUpButton
                mode="modal"
                afterSignInUrl="/portfolio"
                afterSignUpUrl="/portfolio"
              >
                <Button size="default" variant="default">
                  Sign up
                </Button>
              </SignUpButton>
            </div>
          </SignedOut>
        </ClerkLoaded>
      </div>
    </header>
  );
};
