import { Meteor } from "meteor/meteor";
import { Suspense } from "react";
import { createRoot } from "react-dom/client";

import { Loading } from "/ui/common/components/loading";
import { Routes } from "/ui/routes";
import { UIProvider } from "/ui/styles/ui-provider";

/**
 * This is the client-side entry point
 */
Meteor.startup(() => {
  document.documentElement.setAttribute("lang", "en");
  const container = document.getElementById("app");
  if (!container) throw new Error("app not found");
  const root = createRoot(container);

  root.render(
    <UIProvider>
      <Suspense fallback={<Loading />}>
        <Routes />
      </Suspense>
    </UIProvider>
  );
});
