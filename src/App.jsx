import TopGallery from "./components/TopGallery";
import ProfileHeader from "./components/ProfileHeader";
import SocialLinks from "./components/SocialLinks/SocialLinks";
import ActionMenu from "./components/ActionMenu/ActionMenu";
import NewsletterForm from "./components/NewsletterForm";
import StoreLocations from "./components/StoreLocations/StoreLocations";










// Asosiy App Component
function App() {
  return (
    <div className="min-h-screen bg-slate-200 flex justify-center">
      <div className="w-full max-w-md bg-slate-200 shadow-xl flex flex-col overflow-hidden relative">
        <TopGallery />
        <ProfileHeader />
        <SocialLinks />
        <ActionMenu />
        {/* <NewsletterForm /> */}
        <StoreLocations />
      </div>
    </div>
  );
}

export default App;
