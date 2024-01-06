import { createModule } from "grubba-rpc";
import { z } from "zod";
import { TaskCollection } from "/server/tasks";

/*
 * Create task
 */
const createTaskSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  done: z.boolean().optional()
});
type CreateTaskParams = z.infer<typeof createTaskSchema>;
const createTask = async (params: CreateTaskParams) => {
  const task = await TaskCollection.insertAsync(params);
  return task;
};

/*
 * Update task
 */
const updateTaskSchema = z.object({
  id: z.string(),
  title: z.string().optional(),
  description: z.string().optional(),
  done: z.boolean().optional()
});
type UpdateTaskParams = z.infer<typeof updateTaskSchema>;
const updateTask = async (params: UpdateTaskParams) => {
  const { id, ...update } = params;
  await TaskCollection.updateAsync(id, { $set: update });
};

/*
 * Get all tasks
 */
const getTasksSchema = z.undefined();
const getTasks = async () => TaskCollection.find({}).fetchAsync();

export const tasksModule = createModule("tasks")
  .addMethod("createTask", createTaskSchema, createTask)
  .addMethod("updateTask", updateTaskSchema, updateTask)
  .addMethod("getTasks", getTasksSchema, getTasks)
  .buildSubmodule();
