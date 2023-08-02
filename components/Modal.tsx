import React, { useEffect, useState } from 'react';
import MuiModal from '@mui/material/Modal';
import { modalState, movieState } from '@/atoms/modalAtom';
import { useRecoilState } from 'recoil';
import {
  CheckIcon,
  HandThumbUpIcon,
  PlayIcon,
  PlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid';
import { Element, Genre } from '@/typings';
import ReactPlayer from 'react-player/lazy';
import { message } from 'antd';

function Modal() {
  const handleClose = () => {
    setShowModal(false);
  };
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [movie] = useRecoilState(movieState);
  const [trailer, setTrailer] = useState('');
  const [genres, setGenres] = useState<Genre[]>([]);
  const [muted] = useState(true);
  const [addeedToList, setAddedToList] = useState(false);

  useEffect(() => {
    async function fetchMovie() {
      const data = await fetch(
        `https://api.themoviedb.org/3/${
          movie?.media_type === 'tv' ? 'tv' : 'movie'
        }/${movie?.id}?api_key=${
          process.env.NEXT_PUBLIC_API_KEY
        }&language=en-US&append_to_response=videos`,
      )
        .then((response) => response.json())
        .catch((err) => message.error(err.message));

      if (data?.videos) {
        const index = data.videos.results.findIndex(
          (e: Element) => e.type === 'Trailer',
        );
        setTrailer(data.videos?.results[index]?.key);
      }
      if (data?.genres) {
        setGenres(data.genres);
      }
    }
    fetchMovie();
  }, [movie]);

  const handleList = async () => {
  }

  return (
    <MuiModal
      open={showModal}
      onClose={handleClose}
      className="mx-auto w-4/5 !top-7 z-50 max-2-5xl overflow-hidden overflow-y-scroll rounded-md scrollbar-hide"
    >
      <>
        <button
          onClick={handleClose}
          className="modalButton absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818]"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
        <div className="relative pt-[60%]">
          {trailer ? (
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${trailer}`}
              width="100%"
              height="100%"
              style={{ position: 'absolute', top: '0', left: '0' }}
              playing
              muted={muted}
              controls
            />
          ) : (
            <div>Loading trailer....</div>
          )}

          <div className="absolute bottom-12 flex w-full items-center justify-between px-10">
            <div className="flex space-x-2">
              <button className="flex items-center gap-x-3 rounded bg-white px-8 text-xl font-bold text-black">
                <PlayIcon className="h-7 w-7 text-black transition hover:bg[#e6e6e6]" />
                Play
              </button>

              <button className="modalButton" onClick={handleList}>
                {addeedToList ?  (
                  <CheckIcon className="w-7 h-7" />
                ):(
                  <PlusIcon className="w-7 h-7" />
                )}
              </button>
              <button className="modalButton">
                <HandThumbUpIcon className="w-7 h-7" />
              </button>
            </div>

            {/* <button onClick={() => setMuted(!muted)} className="modalButton">
              {muted ? (
                <SpeakerWaveIcon className="w-7 h-7" />
              ) : (
                <SpeakerXMarkIcon className="w-7 h-7" />
              )}
            </button> */}
          </div>
          <div className="absolute bg-[#181818] space-x-16 rounded-b-md px-10 py-5">
            <div className="flex flex-col">
              <div className="flex items-center space-x-2 text-sm py-3">
                <p className="font-semibold text-green-400">
                  {movie?.vote_average * 10 || 0}% Math
                </p>
                <p className="font-light">
                  {movie?.release_date || movie?.first_air_date}
                </p>
                <div className="flex h-4 items-center justify-center rounded border border-white/40 px-1.5 text-xs">
                  Full HD
                </div>
              </div>
              <div>
                <p className="w-5/6">{movie?.overview || ''}</p>
                <div className="py-5">
                  <div className="text-[gray]">
                    <span className="text-[gray] font-bold">Geners: </span>
                    {genres?.map((genre) => genre?.name || '').join(', ')}
                  </div>

                  <div className="text-[gray]">
                    <span className="font-bold">Original language: </span>
                    <span>{movie?.original_language}</span>
                  </div>
                  <div className="text-[gray]">
                    <span className="font-bold">Total votes: </span>
                    <span>{movie?.vote_count}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </MuiModal>
  );
}

export default Modal;
