const TopSummary = (props) => {

  return(
    <div className="top-summary">
      {props.data.split('\n').map((paragraph, index) =>
        index === 0 ? <p key={index}><b>{props.member}</b> {paragraph}</p> : <p key={index}>{paragraph}</p>
      )}
    </div>
  )
}

export default TopSummary