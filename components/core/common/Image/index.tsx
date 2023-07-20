import NextImage from 'next/image';
import { useMemo, useState, useCallback } from 'react';

import { StaticImageData } from 'next/dist/client/image';

import { ASSETS_URL } from '@/settings/constants';

import imgPlaceholder from '/public/images/productPlaceholder.webp';

type ImagePropType = {
  src: string | StaticImageData | undefined;
  fallbackSrc?: string | StaticImageData;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
};

const Image = ({
  src,
  fallbackSrc,
  alt,
  fill,
  width,
  height,
  className,
  ...rest
}: ImagePropType) => {
  const [imgLoadFaild, setImgLoadFaild] = useState<null | boolean>(null);

  const urlImg = useMemo(() => {
    if (src === 'undefined' || !src || src === 'null' || imgLoadFaild) {
      if (fallbackSrc) {
        return `${ASSETS_URL}/${fallbackSrc}`;
      } else {
        return imgPlaceholder;
      }
    } else {
      return `${ASSETS_URL}/${src}`;
    }
  }, [src, imgLoadFaild, fallbackSrc]);

  const handleErr = useCallback(() => {
    setImgLoadFaild(true);
  }, []);

  return (
    <NextImage
      src={urlImg}
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8VA8AAkkBY8DEq9wAAAAASUVORK5CYII="
      onError={handleErr}
      alt={alt || ''}
      fill={fill}
      width={width}
      height={height}
      className={className}
      {...rest}
    />
  );
};

export default Image;
