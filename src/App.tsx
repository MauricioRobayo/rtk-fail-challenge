import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { ProductListing } from "./components/product-listing";

const headerLinks = [
  {
    name: "About us",
    url: "#",
  },
  {
    name: "Projects",
    url: "#",
  },
  {
    name: "Career",
    url: "#",
  },
  {
    name: "Contact",
    url: "#",
  },
];

export default function App() {
  return (
    <>
      <Header links={headerLinks} />
      <Hero
        text="We are an award winning interior design Agency"
        ctaText="View all properties"
        onClick={() => null}
      />
      <main>
        <ProductListing />
      </main>
    </>
  );
}
