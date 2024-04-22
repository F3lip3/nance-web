import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut
} from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col p-6 xl:p-10 pb-16">
      <div className="flex flex-row mb-16">
        <div className="flex flex-1 flex-col mt-10">
          <h3 className="text-2xl text-blue-600 font-semibold">
            Sign up Today
          </h3>
          <h1 className="text-3xl xl:text-5xl font-bold my-4">
            Investment Portfolio Tracker
          </h1>
          <span className="text-base text-muted-foreground mb-10">
            Keep track of your profits, losses and portfolio valuation
            <br /> with our easy to use platform.
          </span>
          <ClerkLoading>
            <div className="flex flex-row gap-4">
              <Skeleton className="h-[44px] w-[202px]" />
              <Skeleton className="h-[44px] w-[104px]" />
            </div>
          </ClerkLoading>
          <ClerkLoaded>
            <div className="flex flex-row gap-4">
              <SignedIn>
                <Link href="/portfolio">
                  <Button size="lg">Go to your portfolio</Button>
                </Link>
              </SignedIn>
              <SignedOut>
                <SignUpButton
                  mode="modal"
                  afterSignInUrl="/portfolio"
                  afterSignUpUrl="/portfolio"
                >
                  <Button size="lg">Create your portfolio</Button>
                </SignUpButton>
                <SignInButton
                  mode="modal"
                  afterSignInUrl="/portfolio"
                  afterSignUpUrl="/portfolio"
                >
                  <Button size="lg" variant="ghost">
                    Log in
                  </Button>
                </SignInButton>
              </SignedOut>
            </div>
          </ClerkLoaded>
        </div>
        <div className="flex flex-1 h-[390px] relative">
          <Image
            src="/img/safari-lightmode-v2.png"
            height={349}
            width={572}
            alt="safari-lightmode"
            className="min-h-[349px] min-w-[572px] xl:min-w-[658px] xl:min-h-[401px] -mr-8 xl:mr-0 block dark:hidden"
          />
          <Image
            src="/img/safari-darkmode-v2.png"
            height={349}
            width={572}
            alt="safari-lightmode"
            className="min-h-[349px] min-w-[572px] xl:min-w-[658px] xl:min-h-[401px] -mr-8 xl:mr-0 hidden dark:block"
          />
          <Image
            src="/img/preview-mobile.png"
            height={392}
            width={203}
            alt="mobile-preview"
            className="min-h-[392px] min-w-[203px] absolute top-[32px] left-[456px] block dark:hidden"
          />
          <Image
            src="/img/preview-mobile-night.png"
            height={392}
            width={203}
            alt="mobile-preview"
            className="min-h-[392px] min-w-[203px] absolute top-[32px] left-[456px] hidden dark:block"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 grid-rows-4 xl:grid-cols-4 xl:grid-rows-2 gap-4">
        <div className="col-span-2 row-span-2">
          <div className="flex flex-row bg-slate-200 dark:bg-slate-950 rounded-3xl px-14 py-12 relative overflow-hidden mix-h-[576px] max-h-[576px]">
            <div className="flex flex-col">
              <h1 className="text-4xl">Also available on</h1>
              <h1 className="text-4xl font-bold">iOS and Android</h1>
              <p className="text-muted-foreground text-sm mt-4 w-[315px]">
                Sync your data between your desktop and mobile app and keep
                track of your crypto assets no matter where you are.
              </p>
              <div className="flex flex-row mt-8 -ml-2">
                <div className="w-32 h-10 bg-[url(/img/app_store_badge_black_1.svg)] bg-center bg-no-repeat bg-contain">
                  &nbsp;
                </div>
                <div className="w-32 h-10 bg-[url(/img/google_play_badge_1.png)] bg-center bg-no-repeat bg-contain">
                  &nbsp;
                </div>
              </div>
            </div>
            <Image
              src="/img/iphone-portfolio-light.png"
              width={1030}
              height={613}
              alt="mobile preview"
              className="min-h-[613px] min-w-[1030px] -mt-12 -ml-96 2xl:-ml-80 block dark:hidden"
            />
            <Image
              src="/img/iphone-portfolio-dark.png"
              width={1030}
              height={613}
              alt="mobile preview"
              className="min-h-[613px] min-w-[1030px] -mt-12 -ml-96 2xl:-ml-80 hidden dark:block"
            />
          </div>
        </div>
        <div>
          <div className="bg-slate-200 dark:bg-slate-950 h-full p-8 rounded-3xl">
            <Image
              src="/img/intro-icon-0.svg"
              alt="intro-0"
              width={72}
              height={72}
              className="mb-8"
            />
            <h1 className="font-bold text-lg mb-2">Real-time price data</h1>
            <p className="text-sm text-muted-foreground">
              Updating 24/7 using price data from the biggest exchanges.
            </p>
          </div>
        </div>
        <div>
          <div className="bg-slate-200 dark:bg-slate-950 h-full p-8 rounded-3xl">
            <Image
              src="/img/intro-icon-1.svg"
              alt="intro-0"
              width={72}
              height={72}
              className="mb-8"
            />
            <h1 className="font-bold text-lg mb-2">Free to use</h1>
            <p className="text-sm text-muted-foreground">
              Top notch crypto portfolio tracking at no cost.
            </p>
          </div>
        </div>
        <div>
          <div className="bg-slate-200 dark:bg-slate-950 h-full p-8 rounded-3xl">
            <Image
              src="/img/intro-icon-2.svg"
              alt="intro-0"
              width={72}
              height={72}
              className="mb-8"
            />
            <h1 className="font-bold text-lg mb-2">
              Track your current portfolio balance and profit / loss
            </h1>
            <p className="text-sm text-muted-foreground">
              Thousands of coins and tokens available.
            </p>
          </div>
        </div>
        <div>
          <div className="bg-slate-200 dark:bg-slate-950 h-full p-8 rounded-3xl">
            <Image
              src="/img/intro-icon-3.svg"
              alt="intro-0"
              width={72}
              height={72}
              className="mb-8"
            />
            <h1 className="font-bold text-lg mb-2">
              Your data is safe and secure
            </h1>
            <p className="text-sm text-muted-foreground">
              We take data security and privacy very seriously.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
