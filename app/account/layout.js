import SideNavigation from "../_components/sideNavigation";

export default function Layout({ children }) {
  return (
    <div
      className="grid  grid-cols-[10rem_1fr] md:grid-cols-[15rem_1fr] 
    gap-10 h-full"
    >
      <SideNavigation />
      <div>{children}</div>
    </div>
  );
}
