import ClockWidget from "./components/ClockWidget";
import TaskWidget from "./components/TaskWidget";
import TimerWidget from "./components/TimerWidget";
import { ScratchpadWidget, LinksWidget } from "./components/ToolsWidgets";
import SettingsWidget from "./components/SettingsWidget";
import QuoteWidget from "./components/QuoteWidget";

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center items-center p-4 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-6xl">
        {/* ROW 1 */}
        <ClockWidget />
        <TimerWidget />
        <LinksWidget />

        {/* ROW 2 */}
        <TaskWidget />
        <ScratchpadWidget />

        {/* ROW 3 */}
        <QuoteWidget />
        <SettingsWidget />
      </div>
    </main>
  );
}
