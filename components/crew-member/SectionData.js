const outputSectionData = (data, key) => {
  if (typeof(data[key]) === 'object') {
    return <div>
      {Object.keys(data[key]).map(innerKey =>
        <div key={innerKey} id={innerKey.toLowerCase().replace(' ', '_')} className="inner-section">
          <h4>{innerKey}</h4>
          <p>{data[key][innerKey]}</p>
        </div>
      )}
    </div>
  }
  else {
    return <p>{data[key]}</p>
  }
}

export default outputSectionData