import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TrendingDown, TrendingUp } from "../icons/icons";
import { currencyFormat } from "../utils";

const Coin = ({ coin, isFavourite, index, handleAddToFavourites }) => {

  const [liked, setLiked] = useState(isFavourite);

  const handleToggleFavourite = () => {
    const isAlreadyFavourite = localStorage.getItem(coin.id) === "true";
    handleAddToFavourites(coin);
    localStorage.setItem(coin.id, !isAlreadyFavourite);
    setLiked(!isAlreadyFavourite);
  };


  console.log(coin);
  return (
    
      <div className="grid grid-cols-3 sm:grid-cols-5 font-light p-2 rounded border-gray-200 border-b hover:bg-gray-200">
        <Link to={`/coin/${coin.id}`}>
        <div className="flex items-center gap-1 w-full">
        <p className="font-semibold">{index+1}.</p>
          <img className="w-6" src={coin.image} alt={coin.name} />
          <p>{coin.name}</p>
          <span className="text-xs">({coin.symbol})</span>
        </div>
        </Link>
        <Link to={`/coin/${coin.id}`}><span className="w-full text-center">{currencyFormat(coin.current_price)}</span></Link>
        <Link to={`/coin/${coin.id}`}><span className={`flex gap-1 ${coin.price_change_percentage_24h < 0 ? 'text-red-400' : 'text-green-400'}`}>
          {coin.price_change_percentage_24h < 0 ? <TrendingDown /> : <TrendingUp />}
          {coin.price_change_percentage_24h}
        </span>
        </Link>
        <Link to={`/coin/${coin.id}`}>
        <div className="hidden sm:block">
          <p className="font-semibold">Market Cap</p>
          <span>{currencyFormat(coin.market_cap)}</span>
        </div></Link>
        <div className="text-center likeCoin" onClick={handleToggleFavourite}>
          <p className="font-semibold heartLikeIcon">
            {liked ? "❤️" : "🤍"}
          </p>
          <span className="textLike">{liked ? "Liked" : "Like"}</span>
        </div>
      </div>
  )
}

export default Coin