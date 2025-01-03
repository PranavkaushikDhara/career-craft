import Banner from "@/components/organisms/Banner";
import Features from "@/components/organisms/Features";
import GenericNavbar from "@/components/organisms/GenericNavbar";
import Testimonals from "@/components/organisms/Testimonals";

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <GenericNavbar></GenericNavbar>
      <Banner></Banner>
      <Features></Features>
      <Testimonals></Testimonals>
    </div>
  );
}
