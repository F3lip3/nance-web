import { Logo } from '@/components/logo';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t flex flex-row py-4">
      <div className="flex flex-col flex-1 pl-8">
        <div className="flex flex-1 flex-row items-center">
          <Logo width={80} height={80} />
          <h1 className="text-4xl font-extrabold text-logo -ml-4">ance</h1>
        </div>
        <div className="px-4 -mt-2 pb-8 text-sm text-muted-foreground">
          © 2024 Nance. All rights reserved
        </div>
      </div>
      <div className="flex flex-row flex-1 items-center justify-end pr-12">
        <div className="w-32 h-10 bg-[url(/app_store_badge_black_1.svg)] bg-center bg-no-repeat bg-contain">
          &nbsp;
        </div>
        <div className="w-32 h-10 bg-[url(/google_play_badge_1.png)] bg-center bg-no-repeat bg-contain">
          &nbsp;
        </div>
      </div>
    </footer>
  );
};
