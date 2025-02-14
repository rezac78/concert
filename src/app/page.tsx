import ArtistsSection from "./sections/ArtistsSection/ArtistsSection";
import EventDetails from "./sections/EventDetails/EventDetails";
import ExperienceSection from "./sections/ExperienceSection/ExperienceSection";
import FestivalSection from "./sections/FestivalSection/FestivalSection";
import TicketCards from "./sections/TicketCards/TicketCards";
import VideoSection from "./sections/VideoSection/VideoSection";

export default function Home() {
  return (
    <section className="my-10">
      <VideoSection />
      <FestivalSection />
      <div className="container max-w-[1200px] mx-auto">
        <ArtistsSection />
        <ExperienceSection />
      </div>
        <EventDetails />
        <TicketCards />
    </section>
  );
}
