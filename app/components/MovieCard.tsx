"use client";
import { Button } from "@/components/ui/button";
import { HeartIcon, PlayCircle } from "lucide-react";
import { useState } from "react";
import PlayVideoModal from "./PlayVideoModal";

interface iAppProps {
  title: string;
  overview: string;
  movieId: number;
  watchList: boolean;
  watchListId: string;
  youtubeUrl: string;
  age: number;
  duration: number;
  year: number;
}

export default function MovieCard({
  movieId,
  overview,
  title,
  watchList,
  watchListId,
  youtubeUrl,
  age,
  duration,
  year,
}: iAppProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)} className="-mt-14">
        <PlayCircle className="h-20 w-20" />
      </button>
      <div className="absolute right-5 top-5 z-10">
        {watchList ? (
          <Button size="icon" variant="outline">
            <HeartIcon className="h-4 w-4 text-red" />
          </Button>
        ) : (
          <form>
            <Button size="icon" variant="outline">
              <HeartIcon className="h-4 w-4" />
            </Button>
          </form>
        )}
      </div>

      <div className="absolute bottom-0 left-0 p-5">
        <h1 className="font-bold text-lg line-clamp-1">{title}</h1>
        <div className="flex gap-x-3 items-center">
          <p className="font-normal text-sm">{year}</p>
          <p className="font-normal border border-gray-200 rounded text-sm px-1 py-0.5">
            {age}+
          </p>
          <p className="font-normal text-sm">{duration}h</p>
        </div>
        <p className="font-light text-sm text-gray-200 line-clamp-1">
          {overview}
        </p>
      </div>

      <PlayVideoModal
        state={open}
        changeState={setOpen}
        overview={overview}
        title={title}
        youtubeUrl={youtubeUrl}
        key={movieId}
        age={age}
        release={year}
        duration={duration}
      />
    </>
  );
}
