// UnoCSS presets (Tailwind-compatible utilities and typography), as on the home page. The CLI scans the built HTML in _site/ (see "build" in package.json).
import presetWind4 from "@unocss/preset-wind4";
import presetTypography from "@unocss/preset-typography";
import { darkUtilities } from "@lernapps/site/dark-utilities";

// The dark mode of the utility classes is the shared one of the site frame (follows the system, no switch).
export default {
  presets: [presetWind4(), presetTypography()],
  preflights: [{ getCSS: () => darkUtilities }],
};
