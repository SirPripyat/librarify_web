import { usePathname, useRouter } from 'next/navigation';
import { ElementType } from 'react';

interface SidebarItemComponentProps {
  icon: ElementType;
  path: string;
}

export default function SidebarItemComponent({
  icon: Icon,
  path
}: SidebarItemComponentProps) {
  const router = useRouter();
  const pathname = usePathname();

  const styles = {
    baseButton:
      'rounded-xl flex flex-col gap-2 h-14 w-14 text-white justify-center items-center cursor-pointer'
  };

  const className =
    pathname === path
      ? `${styles.baseButton} bg-green-500 hover:bg-green-700`
      : `${styles.baseButton} hover:bg-green-500/10`;

  return (
    <button onClick={() => router.push(path)} className={className}>
      <Icon className={'h-8 w-8'} />
    </button>
  );
}
