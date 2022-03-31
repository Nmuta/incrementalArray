


const Map = ({items}) => {
  return(
  <div className="card">
      {items.map((item, index) => <div key={index}> {item.id} : {item.location} </div>)}
  </div>)
}

export default Map;