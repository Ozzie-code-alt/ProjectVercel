'use client';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css'


import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";


const Contactmap = () => {
    const customicon = new Icon({
        iconUrl: "https://cdn-icons-png.flaticon.com/128/3179/3179068.png",
        iconSize: [38, 38],

    })
    return (

        <div className='flex flex-col items-center justify-center xl:flex w-full mt-12'>
    
            <div className='w-full flex px-10'>
                <div className='w-full border-black  rounded-3xl border'>
                    <MapContainer center={[10.721051, 122.533379]} zoom={18} zoomControl={true} boxZoom={true} scrollWheelZoom={false}
                    style={{
                        height: '50vh',
                        
                    }} className='rounded-xl'>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[10.721051, 122.533379]}
                        icon={customicon}
                    >
                        <Popup>
                            Daily Guardian
                        </Popup>
                    </Marker>
                </MapContainer>

                </div>

            </div>

        </div>
    );
}

export default Contactmap;