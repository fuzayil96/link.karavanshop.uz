import TopGallery from "./components/TopGallery";
import ProfileHeader from "./components/ProfileHeader";
import SocialLinks from "./components/SocialLinks/SocialLinks";
import ActionMenu from "./components/ActionMenu/ActionMenu";
import StoreLocations from "./components/StoreLocations/StoreLocations";
import WorkingHours from "./components/WorkingHours";
import ThemeToggle from "./components/ThemeToggle";
import FeedbackForm from "./components/FeedbackForm";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-stone-100 font-sans text-slate-900 antialiased transition-colors duration-300 dark:bg-stone-950 dark:text-stone-100">
      {/* Dekorativ fon */}
      <div aria-hidden className="pointer-events-none fixed inset-0">
        <div className="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-green-300/40 blur-3xl dark:bg-green-900/30" />
        <div className="absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-emerald-200/50 blur-3xl dark:bg-emerald-900/25" />
        <div className="absolute -bottom-40 left-1/4 h-96 w-96 rounded-full bg-lime-200/40 blur-3xl dark:bg-lime-900/20" />
      </div>

      <ThemeToggle />

      <main className="relative mx-auto flex w-full max-w-md flex-col px-4 pt-4 pb-10">
        <section className="motion-safe:animate-fade-up">
          <TopGallery />
          <ProfileHeader />
        </section>

        <section className="mt-6 motion-safe:animate-fade-up [animation-delay:100ms]">
          <SocialLinks />
        </section>

        <section className="mt-8 motion-safe:animate-fade-up [animation-delay:150ms]">
          <WorkingHours />
        </section>

        <section className="mt-8 motion-safe:animate-fade-up [animation-delay:200ms]">
          <ActionMenu />
        </section>

        <section className="mt-10 motion-safe:animate-fade-up [animation-delay:300ms]">
          <StoreLocations />
        </section>

        <section className="mt-10 motion-safe:animate-fade-up [animation-delay:350ms]">
          <FeedbackForm />
        </section>

        <footer className="mt-10 text-center text-xs text-slate-400 dark:text-stone-500">
          © {new Date().getFullYear()} KARAVAN · Samarqand
        </footer>
      </main>
    </div>
  );
}

export default App;
