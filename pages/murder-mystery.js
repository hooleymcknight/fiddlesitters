/* eslint-disable @next/next/no-img-element */
import { useReducer, useEffect, useState } from 'react'
import Router from 'next/router'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

const apiEndpoint = '/api/getdata'

let selectedCharacter

const MurderMystery = () => {
  const elementValidator = (value, target) => {
    if (target === 'text' && !takenUsernames.includes(value)) {
      return value.trim().length >= 3
    }
  }

  const formElementReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
      return { value: action.val, isValid: elementValidator(action.val, action.target) }
    }
    if (action.type === 'INPUT_BLUR') {
      return { value: state.value, isValid: elementValidator(state.value, action.target) }
    }
    return { value: '', isValid: false }
  }

  const formElementStates = {
    value: '',
    isValid: null
  }

  const [dataResponse, setDataResponse] = useState([])
  const [isSelecting, setIsSelecting] = useState([])
  const [takenUsernames, setTakenUsernames] = useState([])
  const [formIsValid, setFormIsValid] = useState(true)
  const [userState, dispatchUser] = useReducer(formElementReducer, formElementStates)
  const [submitAttempted, setSubmitAttempted] = useState(false)

  const { isValid: userIsValid } = userState

  useEffect(() => {
    selectedCharacter = sessionStorage.getItem('character')
  })

  useEffect(() => {
    function getPlayers() {
      getData(`SELECT * FROM characters`, function(res) {
        setDataResponse(res.results)
        setTakenUsernames(res.results.filter(x => x.user).map(x => x.user))
        if (res.results.filter(x => x.clue).length) { // if any clues exist
          // sessionStorage.setItem('role', res.results.role ? res.results.role : 'innocent')
          // sessionStorage.setItem('clue', res.results.clue)
          // redirect to play the game page
          clearInterval(lobby)
          Router.push('/murder-mystery/game')
        }
        console.log('ping')
      })
    }

    const lobby = setInterval(getPlayers, 5000)
  }, [])

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('checking form validity')
      setFormIsValid(
        userIsValid
      )
    }, 100)

    return () => {
      clearTimeout(identifier)
    }
  }, [userIsValid])

  useEffect(() => {
    document.addEventListener('click', (e) => {
      const charBtn = e.target.closest('button.select')
      if (charBtn?.closest('.character-tile')) {
        const container = charBtn.closest('.character-tile')
        const charname = container.getAttribute('data-id')
        const src = container.querySelector('img').src

        setIsSelecting([charname, src])
      }
    })
  })

  const userChangeHandler = (event) => {
    dispatchUser({ type: 'USER_INPUT', val: event.target.value, target: event.target.id })
  }
  const validateUserHandler = () => {
    dispatchUser({ type: 'INPUT_BLUR', target: 'text' })
  }

  function goBack() {
    setIsSelecting([])
  }

  function postData(e) {
    e.preventDefault()
    setSubmitAttempted(true)

    if (!formIsValid) {
      console.log('form is not valid?')
      return
    }

    const container = e.target.closest('.character-tile')
    const name = container.getAttribute('data-id')
    const src = container.querySelector('img').src

    sessionStorage.setItem('character', name)
    sessionStorage.setItem('src', src)

    getData(`UPDATE characters SET user = "${userState.value}" WHERE name = "${name}" AND user is NULL`, function() {
      setIsSelecting([])
    })
  }

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

  return (
    <Layout page='surefoot'>
      <Head>
        <title>{siteTitle} || Surefoot Murder Mystery</title>
      </Head>

      <h1>{!selectedCharacter ? 'Choose Your Character' : 'Waiting on the Host to Start the Game'}</h1>
      <div className="all-characters">
        {!isSelecting.length
        ?
          dataResponse.map(character =>
            <div key={character.name} id={character.name.toLowerCase().replaceAll(' ', '_')} data-id={character.name} className="character-tile">
              <p>{character.name}</p>
              <img src={`https://fiddlesitters.com/images/sfmm/${character.img_src}`} alt={character.name} />
              {!character.user
              ?
              <button type="button" className="select">Select</button>
              :
              <button type="button" className="disabled">{character.user}</button>}

            </div>
          )
        :
          <div key={isSelecting[0]} id={isSelecting[0].toLowerCase().replaceAll(' ', '_')} data-id={isSelecting[0]} className="character-tile is-selecting">
            <p>{isSelecting[0]}</p>
            <img src={isSelecting[1]} alt={isSelecting[0]} />
            <form onSubmit={e => postData(e)}>
              <input
                type="text"
                id="user"
                autoFocus={true}
                value={userState.value}
                onChange={userChangeHandler}
                onBlur={validateUserHandler}
              />
              <button type="submit">Confirm</button>
              {!formIsValid && submitAttempted ? <p className="error-message">Please use a name with 3 or more characters. If you have done this, there may be a duplicate you--chat with Hooley. <br/>Or if you typed too fast, just wait a second and try again. I did not code this very well.</p> : ''}
            </form>

            <button type="button" className="go-back" onClick={goBack}>← Go Back</button>
          </div>
        }

      </div>

    </Layout>

  )
}

export default MurderMystery