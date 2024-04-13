import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs';
import { Loader2 } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="h-20 w-full border-b-2 border-slate-200 px-4">
      <div className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full">
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
            <SignInButton
              mode="modal"
              afterSignInUrl="/portfolio"
              afterSignUpUrl="/portfolio"
            >
              <Button size="lg" variant="outline">
                LOGIN
              </Button>
            </SignInButton>
          </SignedOut>
        </ClerkLoaded>
      </div>
    </header>
  );
};
