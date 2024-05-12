import { Button } from "@/components/ui/button";
import prisma from "../utils/db";
import { env } from "process";
import MovieVidButtons from "./MovieVidButtons";

async function getData() {
  const data = await prisma.movie.findFirst({
    select: {
      title: true,
      overview: true,
      videoSource: true,
      imageString: true,
      release: true,
      duration: true,
      id: true,
      age: true,
    },
  });

  return data;
}

export default async function MovieVideo() {
  const data = await getData();
  const isDev = process.env.NODE_ENV;

  return (
    <div className="h-[55vh] lg:h-[60vh] w-full flex justify-start  items-center">
      <video
        poster={data?.imageString}
        src={isDev ? undefined : data?.videoSource}
        autoPlay
        loop
        muted
        className="w-full -z-10 left-0 top-0 h-[60vh] object-cover absolute brightness-[60%]"
      ></video>

      <div className="w-[90%] lg:w-[40%] mx-auto absolute">
        <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl">
          {data?.title}
        </h1>
        <p className="text-white text-lg mt-5 line-clamp-3">{data?.overview}</p>
        <div className="flex gap-x-3 mt-4">
          <MovieVidButtons
            overview={data?.overview as string}
            title={data?.title as string}
            youtubeUrl={data?.videoSource as string}
            release={data?.release as number}
            duration={data?.duration as number}
            age={data?.age as number}
            key={data?.id}
          />
        </div>
      </div>
    </div>
  );
}
