import { Button } from "@/components/ui/button";
import prisma from "../utils/db";

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
  return (
    <div className="h-[55vh] lg:h-[60vh] w-full flex justify-start  items-center">
      <video
        poster={data?.imageString}
        autoPlay
        loop
        muted
        // src={data?.videoSource}
        className="w-full -z-10 left-0 top-0 h-[60vh] object-cover absolute brightness-[60%]"
      ></video>

      <div className="w-[90%] lg:w-[40%] mx-auto absolute">
        <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl">
          {data?.title}
        </h1>
        <p className="text-white text-lg mt-5 line-clamp-3">{data?.overview}</p>
        <div className="flex gap-x-3 mt-4">
          <Button>See More</Button>
          <Button>Learn More</Button>
        </div>
      </div>
    </div>
  );
}
