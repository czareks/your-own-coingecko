import { useState, useEffect } from "react";
import useAxios from "../hooks/useAxios";
import Coin from "./Coin";
import Skeleton from "./Skeleton";

const FavouritesCoins = () => {
  const { response, loading } = useAxios(
    "coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  );
  const [favouriteCoins, setFavouriteCoins] = useState([]);

  useEffect(() => {
    if (response) {
      const favourites = response.filter(
        (coin) => localStorage.getItem(coin.id) === "true"
      );
      setFavouriteCoins(favourites);
    }
  }, [response]);

  const handleAddToFavourites = (coin) => {
    const updatedCoin = { ...coin, isFavourite: !coin.isFavourite };
    localStorage.setItem(coin.id, updatedCoin.isFavourite);
    const favourites = response.filter(
      (coin) => localStorage.getItem(coin.id) === "true"
    );
    setFavouriteCoins(favourites);
  };

  if (loading) {
    return (
      <div className="wrapper-container mt-8">
        <Skeleton className="h-8 w-32" />
        <Skeleton className="h-8 w-full mt-2" />
        <Skeleton className="h-8 w-full mt-2" />
        <Skeleton className="h-8 w-full mt-2" />
        <Skeleton className="h-8 w-full mt-2" />
        <Skeleton className="h-8 w-full mt-2" />
        <Skeleton className="h-8 w-full mt-2" />
        <Skeleton className="h-8 w-full mt-2" />
      </div>
    );
  }

  return (
    <section className="mt-8">
      <h1 className="text-2xl mb-2">Favourites coins</h1>
      {favouriteCoins.length > 0 ? (
        favouriteCoins.map((coin, index) => (
          <Coin
            key={coin.id}
            coin={coin}
            index={index}
            isFavourite={localStorage.getItem(coin.id) === "true"}
            handleAddToFavourites={handleAddToFavourites}
          />
        ))
      ) : (
        <p>No favourite coins yet!</p>
      )}
    </section>
  );
};

export default FavouritesCoins;
