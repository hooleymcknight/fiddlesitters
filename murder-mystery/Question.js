/* eslint-disable @next/next/no-img-element */
const apiEndpoint = '/api/getdata'

const Question = (props) => {
  const data = JSON.parse(props.data)

  async function getData(query, callback) {
    const response = await fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query: query })
    })
    const res = await response.json()
    if (callback) {
      callback(res)
    }
  }

  const radioHandler = (e) => {
    const value = e.target.closest('.radio').querySelector('input').value
    e.target.closest('.multiple-choice').setAttribute('data-value', value)
  }

  const submitAnswer = (e) => {
    const valueTarget = e.target.closest('.question-section').querySelector('.multiple-choice, input#question')
    const value = valueTarget.value || valueTarget.getAttribute('data-value')
    getData(`UPDATE interrogations SET user = "${props.character}", answer = "${value}"`)
  }

  return (
    <div className="question-section">
      <p className="question">{data.question}</p>
      {data.options
      ?
        <div className="multiple-choice" data-value=''>
          {data.options.map(x =>
            <div key={x} className="radio">
              <input type="radio" id={x} name="question" value={x} onClick={radioHandler}></input>
              <label for={x} onClick={radioHandler}>{x}</label>
            </div>
          )}
        </div>
      :
        <input type="text" id="question" name="question"></input>
      }
      <button type="button" onClick={submitAnswer}>Submit Answer</button>
    </div>
  )
}

export default Question