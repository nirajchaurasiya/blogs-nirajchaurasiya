import Blogs from "./components/Blogs";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <section>
      <Navbar />
      <div className="bg-orange-700 p-4">
        <p className="container mx-auto font-bold pl-7 text-lg text-white">
          Welcome to the blogs page! <br /> Here, you will find articles on
          every video I upload!
        </p>
      </div>
      <Blogs />
    </section>
  );
}
