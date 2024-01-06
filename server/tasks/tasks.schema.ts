import { z } from "zod";

export const TasksSchema = z.object({
  _id: z.string(),
  title: z.string(),
  description: z.string().optional(),
  done: z.boolean().optional()
});
