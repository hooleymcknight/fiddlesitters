function getAge(data) {
  const bday = new Date(data)
  const today = new Date()
  return Math.floor((today - bday) / 31536000000)
}

function processBioOutput(data, key) {
  if (key === 'birthday') {
    return <p>{getAge(data[key])}</p>
  }
  else if (typeof(data[key]) === 'object') {
    if (data[key].url) {
      return <a href={data[key].url} target="_blank" rel="noreferrer">{data[key].username}</a>
    }
    else {
      return <p>{data[key].map(x => <span key={x}>{x}</span>)}</p>
    }
  }
  else {
    return <p>{data[key]}</p>
  }
}

const BioSection = (props) => {

  return (
    <div className="bio-section">
      <h3 data-section={props.title.toLowerCase().replace(' information', '')}>{props.title}</h3>
      {Object.keys(props.data).map(key =>
        <div key={key} className="bio-line">
          {key === 'birthday' ?
            <b>age</b> :
            <b>{key}</b>
          }
          {processBioOutput(props.data, key)}
        </div>
      )}
    </div>
  )
}

export default BioSection