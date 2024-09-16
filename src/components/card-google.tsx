'use client'
import { useState } from "react";
import { StarFilledIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export interface CardGoogleProps {
  text: string;
  avatarGoogle: string;
  altImage: string;
  nameCard: string;
  dataCard: string;
}

export function CardGoogle({
  text,
  avatarGoogle,
  altImage,
  nameCard,
  dataCard,
}: CardGoogleProps) {
  const [showFullText, setShowFullText] = useState(false);
  const shouldDisplayButton = text.length > 200;

  const toggleShowFullText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div
      className={`mx-3 w-72 sm:w-96 min-h-[12rem] sm:min-h-[15rem] h-auto flex flex-col bg-neutral-800 gap-4 p-4 rounded-lg`}
    >
      <div className="flex flex-row items-center w-full gap-4 justify-between">
        <div className="w-12 h-10 rounded-full">
          <Image
            width={900}
            height={900}
            alt={altImage}
            src={avatarGoogle}
            quality={100}
            className="rounded-full w-full h-full object-fill"
          />
        </div>

        <div className="w-full">
          <div className="flex flex-col gap-1 w-full">
            <div className="md:text-base text-sm text-neutral-50 font-bold flex flex-row justify-between">
              {nameCard}
              <div className="w-5 h-5 rounded-full">
                <Image
                  width={900}
                  height={400}
                  alt="ImageGoogle"
                  src="/images/icon-google.svg"
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="text-xs text-neutral-400">{dataCard}</div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-row">
        <StarFilledIcon className="text-yellow-400 size-5" />
        <StarFilledIcon className="text-yellow-400 size-5" />
        <StarFilledIcon className="text-yellow-400 size-5" />
        <StarFilledIcon className="text-yellow-400 size-5" />
        <StarFilledIcon className="text-yellow-400 size-5" />
      </div>
      <div
        className={`w-full text-neutral-50 text-sm overflow-hidden ${
          showFullText ? "h-auto" : "max-h-36"
        }`}
      >
        <p>
          {showFullText
            ? text
            : `${text.slice(0, 200)}${shouldDisplayButton ? "..." : ""}`}{" "}
          {shouldDisplayButton && (
            <span
              onClick={toggleShowFullText}
              className="cursor-pointer text-neutral-500"
            >
              {showFullText ? "Ver menos" : "Ver mais..."}
            </span>
          )}
        </p>
      </div>
    </div>
  );
}
