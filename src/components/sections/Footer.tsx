import { siteMeta } from "@/data/portfolioData";
import { BackToTop } from "@/components/ui/BackToTop";

export function Footer() {
  return (
    <footer className="bg-oatmeal">
        <hr className="h-px bg-lime border-0"/>
        <div
            className="mx-auto w-full max-w-page flex flex-col gap-3 py-6 text-sm font-medium text-tangerine sm:flex-row sm:items-center sm:justify-between">
            <p>{siteMeta.copyright}</p>
            <BackToTop/>
        </div>
    </footer>
  );
}
