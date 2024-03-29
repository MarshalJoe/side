import { useLoaderData } from "react-router-dom";
import Card from './components/Card';

export async function loader({ request }) {
  let response = await fetch('https://api.simplyrets.com/properties', {method:'GET', 
headers: {'Authorization': 'Basic ' + btoa('simplyrets:simplyrets')}});
  let data = await response.json();
  return { properties: data };
}

function App() {
  const { properties } = useLoaderData();

  return (
    <div
      style={{
        padding: '1em',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {properties.map(prop => (
          <div key={prop.mlsId}>
            <Card
              key={prop.mlsId}
              mlsId={prop.mlsId}
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
