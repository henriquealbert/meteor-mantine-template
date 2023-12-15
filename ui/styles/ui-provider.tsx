import "@mantine/core/styles.css";

import { localStorageColorSchemeManager, MantineProvider } from "@mantine/core";

import { theme } from "./theme";

export const UIProvider = ({ children }: { children: React.ReactNode }) => {
  const colorSchemeManager = localStorageColorSchemeManager({ key: "dark" });
  return (
    <MantineProvider
      colorSchemeManager={colorSchemeManager}
      defaultColorScheme="dark"
      classNamesPrefix="app"
      theme={theme}
    >
      {children}
    </MantineProvider>
  );
};
