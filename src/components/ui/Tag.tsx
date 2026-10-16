interface TagProps {
  children: string;
}

export function Tag({ children }: TagProps) {
  return (
    <span className="inline-flex items-center rounded-md bg-lime px-3 py-1.5 text-[13px] font-normal text-blueberry">
      {children}
    </span>
  );
}
