"use client";

import { useState } from "react";

type FramedImageProps = {
  src: string;
  alt: string;
  title: string;
  width: number;
  height: number;
  subtitle?: string;
  fallbackLines?: string[];
  className?: string;
};

export function FramedImage({ src, alt, title, width, height, subtitle, fallbackLines, className = "" }: FramedImageProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`overflow-hidden rounded-md border border-slate-200 bg-white shadow-soft ${className}`}>
      {hasError ? (
        <div className="flex min-h-[320px] flex-col justify-center bg-brand-sky p-8 text-center">
          {fallbackLines?.length ? (
            <div className="mx-auto max-w-2xl rounded-md border border-slate-200 bg-[#f8fbff] p-6 text-left shadow-soft">
              <div className="space-y-3 bg-[linear-gradient(#0000_31px,rgba(15,23,42,0.14)_32px)] bg-[length:100%_32px] text-xl font-semibold leading-8 text-brand-blue sm:text-2xl sm:leading-10">
                {fallbackLines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
          ) : (
            <>
              <p className="text-2xl font-black leading-tight text-brand-navy">{title}</p>
              {subtitle ? <p className="mt-3 max-w-md self-center leading-7 text-slate-600">{subtitle}</p> : null}
            </>
          )}
        </div>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          className="h-full max-h-[620px] min-h-[260px] w-full bg-slate-50 object-contain"
          onError={() => setHasError(true)}
        />
      )}
    </div>
  );
}
