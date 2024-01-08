import Card from './components/Card';
import { properties } from './properties';

import heartFill from './assets/heart-fill.svg';
import heartStroke from './assets/heart-stroke.svg';

function App() {
  return (
    <div
      style={{
        padding: '1em',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <h1 className="py-4 text-2xl font-bold underline">Property Listings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map(prop => (
          <div>
            <Card
              key={prop.mlsId}
              bedrooms={prop.property.bedrooms}
              bathsFull={prop.property.bathsFull}
              bathsHalf={prop.property.bathsHalf}
              area={prop.property.area}
              listPrice={prop.listPrice}
              address={prop.address}
              listDate={prop.listDate}
              imgUrl={prop.photos[0]}
            />
          </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
