import Link from "@/components/atoms/Link";
import { HomeTagProps } from "@/types/types";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

interface Props {
  tag: HomeTagProps;
}

// write a function that returns random color from tailwindcss colors with typescript

function getTagButtonSize(isFeatured: boolean, size: string | undefined) {
  if (isFeatured) {
    return "large";
  } else if (size === "large") {
    return "large";
  } else if (size === "medium") {
    return "medium";
  } else {
    return "small";
  }
}

export default function HomeTag({ tag }: Props) {
  const id = tag?.pageId;
  const isDisabled = !id;
  const pageType = tag?.pageType;
  const isFeatured = tag?.isFeatured;
  const size = tag?.size;
  const buttonSize = getTagButtonSize(isFeatured, size);
  const featuredTagClass = isFeatured
    ? `font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-rose-400 to-indigo-600`
    : "";

  return (
    <Tooltip title={isDisabled && "Coming Soon"} placement="top" arrow>
      <span>
        <Button
          variant="text"
          color="inherit"
          size={buttonSize}
          disabled={isDisabled}
        >
          <Link
            className="text-inherit"
            href={`/${pageType}/${tag.pageId}`}
            underline="none"
          >
            <span className={featuredTagClass}>{tag?.name}</span>
          </Link>
        </Button>
      </span>
    </Tooltip>
  );
}
