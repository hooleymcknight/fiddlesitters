/* eslint-disable @next/next/no-img-element */
const apiEndpoint = '/api/getdata'

const TestResults = (props) => {
  const data = JSON.parse(props.data)

  return (
    <div className="results-section">
      {data.map(x =>
        <div key={x.user} className="test-result">
          <p>{x.user}</p>
          <p>{x.answer}</p>
        </div>
      )}
    </div>
  )
}

export default TestResults