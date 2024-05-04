import AnimeCard, { AnimeProp } from "@/components/AnimeCard";
import LoadMore from "../components/LoadMore";
import { fetchAnimes } from "./actions/action";

async function Home() {
  const animes = await fetchAnimes(1);
  return (
    <main className="sm:p-16 w-full py-16 px-8 flex flex-col gap-10">
      <h2 className="text-3xl text-white font-bold">Explore Anime</h2>

      <section className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {animes}
      </section>
      <LoadMore />
    </main>
  );
}

export default Home;
