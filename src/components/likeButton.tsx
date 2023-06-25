import likeButtonIcon from "../../src/assets/likeButtonIcon.png"

function toggleLike(){

}

export default function LikeButton(){
    return(
        <button className="border-2 px-2" onClick={()=>toggleLike()}>
          <img style={{width:40+'px',height:40+'px',}} src={likeButtonIcon} alt="" />
        </button>

    )
}