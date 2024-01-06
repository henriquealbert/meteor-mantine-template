import { z } from "zod";

export const TasksSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  done: z.boolean().optional()
});
