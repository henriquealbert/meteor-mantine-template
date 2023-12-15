import "./styles.module.css";

import { useComputedColorScheme, useMantineColorScheme } from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";

import { HeaderControl } from "./header-control";

export function ColorSchemeControl() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", { getInitialValueInEffect: true });
  return (
    <HeaderControl
      onClick={() => setColorScheme(computedColorScheme === "light" ? "dark" : "light")}
      tooltip={`${computedColorScheme === "dark" ? "Light" : "Dark"} mode`}
    >
      <IconSun className="icon light" stroke={1.5} />
      <IconMoon className="icon dark" stroke={1.5} />
    </HeaderControl>
  );
}
