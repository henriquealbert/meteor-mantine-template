import { api } from "/ui/api-client";

export function Tasks() {
  const { data: tasks, refetch: refetchTasks } = api.tasks.getTasks.useQuery();
  const createTask = api.tasks.createTask.useMutation();

  return (
    <div>
      <button
        onClick={async () => {
          await createTask.mutateAsync({
            title: "New Task",
            description: "New Description",
            done: false
          });
          await refetchTasks();
        }}
      >
        Create Task
      </button>
      <ul>
        {tasks?.map((task) => (
          <li key={task._id}>
            {task.title} - {task.description} - {task.done ? "Done" : "Not Done"}
          </li>
        ))}
      </ul>
    </div>
  );
}
