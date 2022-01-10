# marker

> hook that facilates creating markers on screen on click

[![NPM](https://img.shields.io/npm/v/marker.svg)](https://www.npmjs.com/package/marker) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save canvas-marker
```

## Usage

```jsx
import { useMarker } from 'canvas-marker'

const App = () =>{
  const [setShowMarker, XY, setXY, getCoordinates] = useMarker(true);

  /** Remove all markers, i.e save state of markers 
      beforehand if you plan to reuse the again 
  */
  const resetMarker = () => {
    setShowMarker(false);
  }
  
  /** Add default marker points or get points 
      from previous marker session 
   */
  const addDefaultCoordinates = () => {
    setXY([[419,275], [534,308]]);
  }

  const points = XY.map((xy, index) =>
  <span>{`marker`}</span>
);
  return (
    <div className="App">
      <button onClick={resetMarker}>Reset</button>
      <button onClick={addDefaultCoordinates}>add default</button>
      <div className="Canvas" onClick={getCoordinates}>
       {points}
      </div>
    </div>
  );
```

![Example](./marker-sample.gif)
## License

MIT © [abdullah-jaffer](https://github.com/abdullah-jaffer)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
