import React from 'react';
import { GoogleMap, DistanceMatrixService } from '@react-google-maps/api';

const Example = () => {
  const [response, setResponse] = React.useState(null);

  const distanceCallback = (response) => {
    console.log(response);
    setResponse(response);
  };

  return (
    <div>
      <GoogleMap
        id="example-map"
        mapContainerStyle={{ height: '400px' }}
        zoom={8}
        center={{ lat: -34.397, lng: 150.644 }}
      >
        <DistanceMatrixService
          options={{
            destinations: ['Sydney NSW, Australia', 'Melbourne VIC, Australia'],
            origins: ['Canberra ACT, Australia', 'Wollongong NSW, Australia'],
            travelMode: 'DRIVING',
          }}
          callback={distanceCallback}
        />
      </GoogleMap>
      {response && (
        <div>
          {response.rows.map((row) => (
            <div>
              {row.elements.map((element) => (
                <div>
                  {element.distance.text} - {element.duration.text}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Example;
