import { useState, useEffect } from 'react';

export const useMarker = (marker) => {
    const [XY, setXY] = useState([]);
    const [showMarker, setShowMarker] = useState(marker);
    const [currentEvent, setCurrentEvent] = useState([]);
    const getCoordinates = (e) => {
      const {clientX, clientY} = e;
      setCurrentEvent( {clientX, clientY});
    }
    useEffect(() => {
       let newXY = [];
       if(XY){
        newXY = XY.slice();
       }
       if(currentEvent.clientX + window.pageXOffset && currentEvent.clientY + window.pageYOffset){
        newXY.push([currentEvent.clientX + window.pageXOffset, currentEvent.clientY+ window.pageYOffset]);
        setXY(newXY);
       }
      }, [currentEvent]);

      useEffect(() => {
        if(!showMarker) {
            setXY([])
            setShowMarker(true);
        }
       }, [showMarker]);
 return [setShowMarker, XY, setXY, getCoordinates];
}