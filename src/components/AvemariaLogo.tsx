import logoAsset from "@/assets/avemaria-logo.png.asset.json";

/**
 * AvemariaLogo — renders the company logo with optional company name text.
 * Uses Lovable's asset system which resolves correctly both locally and in production.
 */
interface AvemariaLogoProps {
  /** Extra tailwind classes for the img element e.g. "h-10 w-auto" */
  imgClassName?: string;
  /** Show the company name text beside the logo */
  showName?: boolean;
  /** "light" = white text (for dark backgrounds), "dark" = navy text */
  nameVariant?: "light" | "dark";
}

export function AvemariaLogo({
  imgClassName = "h-11 w-auto",
  showName = false,
  nameVariant = "dark",
}: AvemariaLogoProps) {
  return (
    <div className="flex items-center gap-3 shrink-0">
      <img
        src={logoAsset.url}
        alt="Avemaria Computer Solution"
        className={`${imgClassName} object-contain drop-shadow-sm`}
        loading="eager"
      />
      {showName && (
        <span
          className={`font-display font-bold text-base md:text-lg tracking-tight leading-tight whitespace-nowrap ${
            nameVariant === "light" ? "text-white" : "text-brand-dark"
          }`}
        >
          Avemaria Computer Solution
        </span>
      )}
    </div>
  );
}
