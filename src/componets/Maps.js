import React, {useEffect, useRef} from "react";
import {Status, Wrapper} from "@googlemaps/react-wrapper";

const mapsKey = 'AIzaSyBXgTmQnLmJ3I3RzfBXbnJGqhgMOxH7c1w';

export const render = (status) => {
    if (status === Status.LOADING) return <h3>{status} ..</h3>;
    if (status === Status.FAILURE) return <h3>{status} ...</h3>;
    return null;
};

function MyMapComponent({
                            center,
                            zoom,
                            children
                        }) {
    const ref = useRef();
    const [map, setMap] = React.useState();
    useEffect(() => {
        setMap(new window.google.maps.Map(ref.current, {
            center,
            zoom,
        }));
    }, []);

    return <div ref={ref} id="map" style={{height: '500px'}}>
        {React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
                return React.cloneElement(child, {map});
            }
        })}
    </div>;
}

const Marker = (options) => {
    const [marker, setMarker] = React.useState();
    React.useEffect(() => {
        if (!marker) {
            setMarker(new window.google.maps.Marker());

        }
        return () => {
            if (marker) {
                marker.setMap(null);
            }
        };
    }, [marker]);

    React.useEffect(() => {
        if (marker) {
            marker.setOptions(options);
        }
    }, [marker, options]);
    return null;
};

export default function Map({lat, long}) {
    const center = {lat: lat, lng: long};
    return (
        <div style={{height: '500px'}}>
            <Wrapper apiKey={mapsKey} render={render}>
                <MyMapComponent center={center} zoom={15}>
                    <Marker position={center}/>
                </MyMapComponent>
            </Wrapper>
        </div>
    )
}