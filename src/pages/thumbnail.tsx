import { useEffect, useState } from 'react'
import React from "react";
import Modal from '../components/modal'
import VideoModal from '../components/videoModal';
import useToggle from '../hooks/useToggle'
import useToggleVid from '../hooks/useToggleVid';

export function Thumbnails(){
  const [files,setFiles]=useState([])
    const { on, toggler } = useToggle(); // just added
    const { onVid, togglerVid } = useToggleVid(); // just added
    const [imgUrl,setImgUrl]=useState<string>()  
    const [url,seturl]=useState<string>()    
    const [views,setViews]=useState<string>()    
    const [likes,setLikes]=useState<string>()
    const [sliceStart,setSliceStart]=useState(0)     
    const [dataLength,setDataLength]=useState(0)    
    const [stopAvanti,setStopAvanti]=useState(false)  

    function viewImg(event:any){
      var element=files[event.target.id]
      console.log('ciao'+element['views'])
      if(element['type']=='img'){
        toggler()
        setImgUrl("https://massimomazzoleni.website/phootoo/photos/"+element['Url']+".JPG")
      }else{
        togglerVid()
        var vidU:any=element['Url']
        console.log(vidU)
        seturl("https://massimomazzoleni.website/phootoo/photos/"+element['Url']+".mp4")
      }
      fetch("https://massimomazzoleni.website/phootoo/api/like.api.php?Url="+element['Url'])
      setViews(element['views'])
    }

    
  // Fetch content from protected route
  useEffect(() => {
    // Simple POST request with a JSON body using fetch
    const fetchData = async () => {
      //https://massimomazzoleni.website/phootoo/api/phootoo.api.php?email=massimo.mazzoleni.1969@gmail.com
      const res = await fetch("http://127.0.0.1:3000/documents")
      .then(response => {return response.json();})
      .then(data => {
        console.log(data)
        setFiles(data)
        setDataLength(data.length)
      })
    }
    fetchData()
  }, [])

      function loadMore(){
        //console.log('stopav',stopAvanti)
        if((sliceStart)<(dataLength)&& stopAvanti==false){
          setSliceStart(sliceStart+41)
          //console.log('slicestar',sliceStart)
          //console.log('datalen',dataLength)
          if((sliceStart+41)>=dataLength)(setStopAvanti(true))
        //console.log('stopav2',stopAvanti)
        }else{
          return
        }
      }
        
      function loadLess(){
        if(sliceStart>40){
          setSliceStart(sliceStart-41)
          setStopAvanti(false)
        }else{
          setSliceStart(0)
        }
      }
//console.log(files)

      const returnImg = () => {    
        //console.log('slicets',sliceStart)   
        return files.map((file,index) => { 
          //console.log(file)
          if((index)<sliceStart){return}
          if((index)>sliceStart+40){return}
          return (
            <div key={index}>
              <img
                alt="gallery"
                className="cursor-pointer rounded-lg py-1"
                src={"https://massimomazzoleni.website/phootoo/thumbs/"+file['Url']+".jpg"} id={index.toString()} onClick={viewImg}/>
            </div>
          )
        });
      }

    return(
        <>  
        <div className="relative top-5 z-0  m-1 gap-2 columns-3">
            {returnImg()}
        </div>
        <button className='fixed bottom-0 left-20 p-1 h-8 z-20 bg-pink-200' onClick={() =>loadLess()}>indietro</button>
        <button className='fixed bottom-0 left-40 p-1 h-8 z-20 bg-pink-200' onClick={()=>loadMore()}>avanti</button>
            {on && <Modal toggler={toggler} imgUrl={imgUrl} views={views} likes={likes}  /> /** just added */}
            {onVid && <VideoModal togglerVid={togglerVid} url={url} views={views} likes={likes} /> /** just added */}
        </>
    )
}