"use server"

import AnimeCard, { AnimeProp } from "@/components/AnimeCard"

const LIMIT=8
export const fetchAnimes=async(page:number=1)=>{
    const res=await fetch(`https://shikimori.one/api/animes?page=${page}&limit=${LIMIT}&order=popularity`)
    const data=await res.json()
    return data.map((item: AnimeProp, index:number) => (
        <AnimeCard key={item.id} anime={item} index={index} />
      ))
}