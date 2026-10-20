import type { ReactNode } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

interface CaseStudyLayoutProps {
  children: ReactNode;
  next: {
    href: string;
    label: string;
  };
}

export function CaseStudyLayout({ children, next }: CaseStudyLayoutProps) {
  return (
    <main className="text-left [&_.page-wrap]:max-w-[70rem]">
      {children}
      <div className="page-wrap flex justify-center py-16 md:py-20">
        <ButtonLink href={next.href} variant="outline">
          {next.label} <Icon name="right" className="size-6" />
        </ButtonLink>
      </div>
    </main>
  );
}
