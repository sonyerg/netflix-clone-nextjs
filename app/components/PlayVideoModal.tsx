"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Suspense, useState } from "react";

interface iAppProps {
  title: string;
  overview: string;
  youtubeUrl: string;
  state: boolean;
  changeState: any;
  release: number;
  age: number;
  duration: number;
}

export default function PlayVideoModal({
  title,
  overview,
  changeState,
  state,
  youtubeUrl,
  release,
  age,
  duration,
}: iAppProps) {
  const [showMore, setShowMore] = useState(false);

  function handleShowMore() {
    setShowMore((prev) => !prev);
  }

  function handleChangeState() {
    changeState((prev: boolean) => !prev);
  }

  return (
    <Dialog open={state} onOpenChange={handleChangeState}>
      <Suspense fallback={<p>Loading...</p>}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>
              {showMore ? `${overview} ` : `${overview.substring(0, 150)}... `}
              <button
                onClick={handleShowMore}
                className="text-blue-500 hover:underline"
              >
                {showMore ? "See Less" : "See More"}
              </button>
            </DialogDescription>
            <div className="flex gap-x-3 items-center">
              <p className="font-normal text-sm">{release}</p>
              <p className="font-normal border border-gray-200 rounded text-sm px-1 py-0.5">
                {age}+
              </p>
              <p className="font-normal text-sm">{duration}h</p>
            </div>
          </DialogHeader>
          <iframe src={youtubeUrl} height={250} className="w-full"></iframe>
        </DialogContent>
      </Suspense>
    </Dialog>
  );
}
