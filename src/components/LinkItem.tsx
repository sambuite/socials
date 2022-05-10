interface Props {
  name: string;
  link: string;
}

export function LinkItem({ name, link }: Props) {
  return (
    <a
      className="flex mx-auto items-center justify-center mb-4 p-4 bg-main-500 border-2 border-main-500 transition-colors group hover:bg-slate-900"
      href={link}
      target="_blank"
    >
      <span className="font-bold text-slate-100 transition-colors group-hover:text-main-500">
        {name}
      </span>
    </a>
  );
}
