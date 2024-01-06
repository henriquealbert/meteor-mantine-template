import { createTypedCollection } from "meteor/hschmaiske:create-typed-collection";
import { TasksSchema } from "./tasks.schema";

const customCollectionMethods = {};

export const TaskCollection = createTypedCollection({
  name: "tasks",
  schema: TasksSchema,
  customCollectionMethods
});
