import "./styles.module.css";

import type { BoxProps } from "@mantine/core";
import { createPolymorphicComponent, Tooltip, UnstyledButton } from "@mantine/core";
import cx from "clsx";

export interface HeaderControlProps extends BoxProps {
  tooltip: string;
  children: React.ReactNode;
}

function _HeaderControl({ tooltip, className, ...others }: HeaderControlProps) {
  return (
    <Tooltip label={tooltip}>
      <UnstyledButton className={cx("control", className)} aria-label={tooltip} {...others} />
    </Tooltip>
  );
}

export const HeaderControl = createPolymorphicComponent<"button", HeaderControlProps>(
  _HeaderControl
);
