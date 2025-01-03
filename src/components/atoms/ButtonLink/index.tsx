import React from "react";
import Link from "next/link";
interface ButtonLinkProps {
  text: string;
  icon?: any;
  href: string;
}
import clsx from "clsx";
import { usePathname } from "next/navigation";
export const ButtonLink = (props: ButtonLinkProps) => {
  const pathname = usePathname();
  return (
    <button
      className={clsx(
        "text-CareerCraftWhite p-2 text-sm hover:bg-CareerCraftForeGroundLight",
        {
          "bg-CareerCraftPrimary hover:bg-CareerCraftPrimaryDark":
            pathname === props.href,
        }
      )}
    >
      <Link href={props.href} className="flex gap-2 items-center">
        {props.icon}
        {props.text}
      </Link>
    </button>
  );
};

export default ButtonLink;
