import { LoadingOverlay } from "@mantine/core";

export function Loading() {
  return <LoadingOverlay visible zIndex={1000} overlayProps={{ blur: 2 }} />;
}
