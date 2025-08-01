import { IconType } from "react-icons";
import * as TbIcons from "react-icons/tb";

const getIconComponent = (iconClass: string | null): IconType | null => {
  if (!iconClass) return null;

  const slug = iconClass.split(" ").pop();
  if (!slug) return null;

  const name = slug.replace("ti-brand-", "");
  const pascal = name
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");

  const fullIcon = `TbBrand${pascal}`;
  return (TbIcons as Record<string, IconType>)[fullIcon] || null;
};

export default getIconComponent;
