import { siteMeta } from "@/data/portfolioData";
import { BackToTop } from "@/components/ui/BackToTop";

export function Footer() {
  return (
    <footer className="bg-oatmeal">
        <hr className="h-px bg-lime border-0"/>
        <div
            className="page-wrap flex flex-col items-center gap-3 py-6 text-center text-sm font-medium text-tangerine sm:flex-row sm:justify-between sm:text-left">
            <p>{siteMeta.copyright}</p>
            <BackToTop/>
        </div>
    </footer>
  );
}
