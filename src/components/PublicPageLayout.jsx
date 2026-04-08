import MainHeader from "./MainHeader";
import MainFooter from "./MainFooter";

const PublicPageLayout = ({ children, contentClassName = "" }) => (
  <div className="flex min-h-screen flex-col bg-gray-50">
    <MainHeader />
    <main className={`flex-1 px-4 pb-10 pt-24 sm:px-6 sm:pt-28 lg:px-8 ${contentClassName}`.trim()}>
      {children}
    </main>
    <MainFooter />
  </div>
);

export default PublicPageLayout;
