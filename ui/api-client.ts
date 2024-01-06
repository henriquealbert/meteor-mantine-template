import { createClient } from "grubba-rpc";
import type { Api } from "/server/main";

export const api = createClient<Api>();
