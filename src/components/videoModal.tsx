import React from 'react'
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
//import LikeButton from './likeButton';

export default function VideoModal(props: { url: any; togglerVid: () => void,views:any,likes:any }) {
    console.log(props.url)
	const [isOpen, setOpen] = useState(true)
  return (
    <div className="static">
      <div
        className="fixed h-screen w-screen bg-black z-10 top-0 opacity-75"
      ></div>
      <React.Fragment>
      { /** Just added */}
      <div className="fixed top-0 right-0 left-0 z-20 flex justify-center">
        <div className="mx-4 my-4 bg-white">
            <div className="flex justify-end">
                <button 
                onClick={() => props.togglerVid()}
                    className="border-2 text-red-900 px-2 m-2"
                >
                    X
                </button>
            </div>
            <div className="h-screen bg-white">
                <div
                    className="sm:h-2/3 md:h-4/5 w-11/12">
                    <ModalVideo channel='custom'isOpen={isOpen} url={props.url} onClose={() => setOpen(false)} />
                </div>
                <div className="flex justify-center px-6 py-1">
                    <div className="font-bold text-xl">China videos</div>
                </div>
                <div className="flex justify-around items-center px-2 py-1">
                    <div className="font-bold font-mono text-xl text-red-700">Views: {props.views}</div>
                    {/*<LikeButton/>*/}
                </div>
                <div className="flex justify-around items-center px-2 py-1">
                    <button className="border-2 px-2 py-1 rounded bg-green-500 text-white font-bold font-mono text-lg">Scarica</button>
                </div>
            </div>
        </div>
      </div>
      </React.Fragment>
    </div>
  );
}