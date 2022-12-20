import ErrorBoundary from "./errorBoundary";
import Location from "./Location";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";

function Main() {
  return (
    <section id="section-one">
      <div className="grid">
        <ErrorBoundary message="something went wrong! please reload the page">
          <SectionOne />
        </ErrorBoundary>
        <ErrorBoundary message="An error occured!">
          <SectionTwo />
        </ErrorBoundary>
        <ErrorBoundary message="something went wrong! please reload the page as you can't pass empty data">
          <Location />
        </ErrorBoundary>
      </div>
    </section>
  );
}

export default Main;
