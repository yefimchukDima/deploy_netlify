import { useMediaQuery, useTheme } from "@mui/material";

type UseScreenSizeReturnType = {
  isMobile: boolean;
};

export function useScreenSize(): UseScreenSizeReturnType {
  const themeMUI = useTheme();
  const isMobile = useMediaQuery(themeMUI.breakpoints.down("md"));

  return {
    isMobile,
  };
}
