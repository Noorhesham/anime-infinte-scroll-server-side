"use client";
import { fetchAnimes } from "@/app/actions/action";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import AnimeCard from "./AnimeCard";
export type AnimeCard = JSX.Element;
let page = 2;
function LoadMore() {
  const { ref, inView } = useInView();
  const [data, setData] = useState<AnimeCard[]>([]);
  useEffect(() => {
    if (inView) {
      fetchAnimes(page).then((res) => {
        setData([...data, ...res]);
        page++;
      });
    }
  }, [inView, data]);
  return (
    <>
      <section className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">{data}</section>
      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          <Image src="./spinner.svg" alt="spinner" width={56} height={56} className="object-contain" />
        </div>
      </section>
    </>
  );
}

export default LoadMore;
