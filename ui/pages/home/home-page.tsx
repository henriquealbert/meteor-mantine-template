import { ColorSchemeControl } from "/ui/common/components/color-scheme-control/color-scheme-control";
import { Tasks } from "/ui/common/tasks";

export default function HomePage() {
  return (
    <div>
      HomePage
      <div>
        <ColorSchemeControl />
      </div>
      <Tasks />
    </div>
  );
}
