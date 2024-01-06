import { createModule } from "grubba-rpc";
import { z } from "zod";
import { TaskCollection } from "/server/tasks";

const createTaskSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  done: z.boolean().optional()
});
const createTask = async (params: z.infer<typeof createTaskSchema>) => {
  const task = await TaskCollection.insertAsync(params);
  return task;
};

const updateTaskSchema = z.object({
  id: z.string(),
  title: z.string().optional(),
  description: z.string().optional(),
  done: z.boolean().optional()
});
const updateTask = async (params: z.infer<typeof updateTaskSchema>) => {
  const { id, ...update } = params;
  await TaskCollection.updateAsync(id, { $set: update });
};

export const tasksModule = createModule("tasks")
  .addMethod("createTask", createTaskSchema, createTask)
  .addMethod("updateTask", updateTaskSchema, updateTask)
  .buildSubmodule();
