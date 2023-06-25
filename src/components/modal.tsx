//import LikeButton from "./likeButton";

export default function Modal(props:{toggler: () => void,imgUrl: any,views:any,likes:any}) {
    console.log(props.imgUrl)
  return (
    <div className="static">
      <div
        className="fixed block h-screen w-screen bg-black z-10 top-0 opacity-75"
      ></div>
      { /** Just added */}
      <div className="fixed top-0 right-0 left-0 z-20 flex justify-center">
        <div className="mx-4 my-4 bg-white">
            <div className="flex justify-end">
                <button  
              onClick={() => props.toggler()}
                    className="border-2 text-red-900 px-2 m-2"
                >
                    X
                </button>
            </div>
            <div className="m-1 h-screen bg-white">
                <div className="box-content h-auto w-auto p-4 border-4">
                <img
                    className="h-auto w-auto"
                    src={props.imgUrl}
                    alt="Sunset in the mountains"
                />
                </div>
                <div className="flex justify-center px-6 py-1">
                    <div className="font-bold text-xl">China travellers</div>
                </div>
                <div className="flex justify-around items-center px-2 py-1">
                    <div className="font-bold font-mono text-xl text-red-700">views: {props.views}</div>
                    {/*<LikeButton/>*/}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}