function outputSectionData(data, key) {
  if (typeof(data[key]) === 'object') {
    return (
      <div key={key} id={key.toLowerCase().replaceAll(' ', '_')}>
        <h4>{key}</h4>
        {Object.keys(data[key]).map(innerKey =>
          <div key={innerKey} id={innerKey.toLowerCase().replaceAll(' ', '_')} className="inner-section">
            <h4>{innerKey}</h4>
            {data[key][innerKey].split('\n').map((paragraph, index) =>
              <p key={index}>{paragraph}</p>
            )}
          </div>
        )}
      </div>
    )
  }
  else {
    return (
      <div key={key} id={key.toLowerCase().replaceAll(' ', '_')}>
        <h4>{key}</h4>
        {data[key].split('\n').map((paragraph, index) =>
          <p key={index}>{paragraph}</p>
        )}
      </div>
    )
  }
}

const Sections = (props) => {

  return(
    <div className="sections">
      {Object.keys(props.data).map(key =>
        outputSectionData(props.data, key)
      )}
    </div>
  )
}

export default Sections