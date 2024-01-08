function numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

export default function Card({ 
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
  
  return (
    <section>
    	<div>
    		<img alt="property image" className="h-64 w-full" src={imgUrl} />
    	</div>
    	<p className="p-1">{bedrooms} BR | {displayBathrooms} Bath | {area} Sq Ft</p>
    	<h2 className="p1 text-xl font-bold">${numberWithCommas(listPrice)}</h2>
    	<p className="p-1 text-sm">{address.streetNumber} {address.streetName}, {address.city}, {address.state}</p>
    	<p className="p-1 font-light text-xs">Last visited: {listDate}</p>
    </section>
  );
}