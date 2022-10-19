function outputSectionData(data, key) {
  if (typeof(data[key]) === 'object') {
    return (
      <li key={key}>
        <a href={`#${key.toLowerCase().replace(' ', '_')}`}>{key}</a>
        <ul className="li-withsubs">
          {Object.keys(data[key]).map(innerKey =>
            <li key={innerKey}><a href={`#${innerKey.toLowerCase().replaceAll(' ', '_')}`}>{innerKey}</a></li>
          )}
        </ul>
      </li>
    )
  }
  else {
    return <li key={key}><a href={`#${key.toLowerCase().replaceAll(' ', '_')}`}>{key}</a></li>
  }
}

const TableOfContents = (props) => {
  //
  return(
    <div className="table-of-contents">
      <h3>Contents</h3>
      <ol>
        {Object.keys(props.data).map(key =>
          outputSectionData(props.data, key)
        )}
      </ol>
    </div>
  )
}

export default TableOfContents