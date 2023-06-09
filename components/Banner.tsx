import { baseUrl } from '@/constants/movie'
import { Movie } from '@/typings'
import { HiPlay } from 'react-icons/hi2'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

interface Props {
  netflixOriginals: Movie[]
}

function Banner({ netflixOriginals }: Props) {
  const [movie, setMovie] = useState<Movie | null>(null)

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    )
  }, [netflixOriginals])

  console.log(movie)

  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 h-[95vh] -z-10 w-screen object-cover">
        <Image
          alt=""
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          layout="fill"
        />
      </div>
      <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl ">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className="max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl ">
        {movie?.overview}
      </p>

      <div>
        <button className="bannerButton">
          <HiPlay className="H-4 w-4 text-black md:h-7 md:w-7" />
          Play
        </button>
        <button className="bannerButton">More Info</button>
      </div>
    </div>
  )
}

export default Banner
