"use client";
import clsx from "clsx";
import React, { useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const email = "madebydarwin@gmail.com";
  const [copied, setCopied] = React.useState<boolean>(false);

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    }
  }, [copied]);

  return (
    <main className="flex flex-col items-center p-12 text-white sm:p-24">
      <div className="flex flex-col items-center justify-between h-[70vh]">
        <p className="text-2xl sm:text-4xl">{"{WIP}"}</p>
        <div>
          <Image
            src="/images/darwin-dots.svg"
            height={32}
            width={32}
            alt="Made By Darwin"
          
          />
          <p className="text-6xl sm:text-8xl font-bold">MADE BY DARWIN</p>
          <p className="text-2xl sm:text-4xl">DESIGN AND DEVELOPMENT</p>
        </div>
        <div className="flex flex-col items-center mt-24 gap-4">
          <p className="text-2xl sm:text-4xl font-bold">REACH US AT</p>
          <p
            className={clsx(
              "text-xl sm:text-3xl",
              !copied && "sm:hover:underline cursor-pointer"
            )}
            title={!copied ? "copy" : undefined}
            onClick={() => {
              if (!copied) {
                setCopied(true);
                navigator.clipboard.writeText(email);
              }
            }}
          >
            {email}
          </p>
        </div>
      </div>
      <p
        className={clsx(
          "text-base font-bold sm:text-xl mt-4",
          !copied && "hidden"
        )}
      >
        copied!
      </p>
    </main>
  );
}
