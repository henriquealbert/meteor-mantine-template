import { Meteor } from "meteor/meteor";
import { createRoot } from "react-dom/client";

import App from "/ui/App";

/**
 * This is the client-side entry point
 */
Meteor.startup(() => {
  document.documentElement.setAttribute("lang", "en");
  const container = document.getElementById("app");
  if (!container) throw new Error("app not found");
  const root = createRoot(container);

  root.render(<App />);
});
