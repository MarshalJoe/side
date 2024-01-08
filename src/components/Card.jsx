import { useState } from 'react';
import heartFill from '../assets/heart-fill.svg';
import heartStroke from '../assets/heart-stroke.svg';

function numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

export default function Card({
	mlsId, 
	bedrooms,
	bathsFull,
	bathsHalf,
	area,
	listPrice,
	address,
	listDate,
	imgUrl,
}) {
  const displayBathrooms = (bathsFull * 1) + (bathsHalf * .5);
  const [ favorite, setFavorite ] = useState(() => {
  	// getting stored value
  	const saved = localStorage.getItem(mlsId);
  	const initialValue = JSON.parse(saved);
  	return initialValue || false;
	});

  const toggleFavorite = () => {
  	const toggle = !favorite;
  	setFavorite(toggle);
  	localStorage.setItem(mlsId, JSON.stringify(toggle));
  }
  
  return (
    <section>
    	<div className="relative">
    		<img alt="property" className="h-64 w-full" src={imgUrl} />
    		{
    			favorite ? (
    				<img className="absolute right-2 top-2" onClick={toggleFavorite} src={heartFill} alt="heart" />
    			) : (
    				<img className="absolute right-2 top-2" onClick={toggleFavorite} src={heartStroke} alt="not hearted" />
    			)
    		}
    	</div>
    	<p className="p-1">{bedrooms} BR | {displayBathrooms} Bath | {area} Sq Ft</p>
    	<h2 className="p1 text-xl font-bold">${numberWithCommas(listPrice)}</h2>
    	<p className="p-1 text-sm">{address.streetNumber} {address.streetName}, {address.city}, {address.state}</p>
    	<p className="p-1 font-light text-xs">Last visited: {listDate}</p>
    </section>
  );
}