import { Meteor } from "meteor/meteor";
import { createModule } from "grubba-rpc";
import { tasksModule } from "/server/tasks";

/**
 * This is the server-side entry point
 */
Meteor.startup(async () => {});

const api = createModule().addSubmodule(tasksModule).build();

export type Api = typeof api;
