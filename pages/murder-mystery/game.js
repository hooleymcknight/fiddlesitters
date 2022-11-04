/* eslint-disable @next/next/no-img-element */
import { useReducer, useEffect, useState } from 'react'
import Router from 'next/router'
import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import Question from '../../murder-mystery/Question'
import TestResults from '../../murder-mystery/TestResults'

const apiEndpoint = '/api/getdata'

let playerClue

const Game = () => {
  const [guiltyCount, setGuiltyCount] = useState(0)
  const [clue, setClue] = useState('')
  const [gameState, setGameState] = useState('intro')
  const [activeContent, setActiveContent] = useState('')
  const [allPlayers, setAllPlayers] = useState([])

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

  useEffect(() => {
    function getClue() {
      const name = sessionStorage.getItem('character')
      getData(`SELECT role, clue FROM characters WHERE name = "${name}"`, function(res) {
        console.log('looking for clue, inside an interval')
        console.log(res.results)
        if (res.results.clue) {
          sessionStorage.setItem('role', res.results.role ? res.results.role : 'innocent')
          sessionStorage.setItem('clue', res.results.clue)
          setClue(res.results.clue)
          playerClue = res.results.clue

          clearInterval(findClue)
        }
      })
    }
    const findClue = setInterval(getClue, 5000)
  })

  useEffect(() => {
    if (!allPlayers.length) {
      getData(`SELECT name, img_src FROM characters WHERE user is not NULL`, function(res) {
        setAllPlayers(res.results)
      })
    }

    if (!guiltyCount) {
      getData(`SELECT role FROM characters WHERE role = "guilty"`, function(res) {
        setGuiltyCount(res.results.length)
      })
    }

    // keep pinging and watching for a game state change
    function checkState() {
      const name = sessionStorage.getItem('character')
      getData(`SELECT active_state, active_content FROM characters WHERE name = "${name}"`, function(res) {
        if (res.results[0].active_state === 'active') {
          setGameState('active')
          setActiveContent(res.results[0].active_content)
        }
        else if (res.results[0].active_state === 'test-results') {
          setGameState('test-results')
          setActiveContent(res.results.map(x => x.active_content))
        }
      })
    }
    const stateWatcher = setInterval(checkState, 7000)
  })

  return (
    <Layout page='surefoot'>
      <Head>
        <title>{siteTitle} || Surefoot Murder Mystery</title>
      </Head>

      <h1>the game has begun...</h1>
      <div className="game-page">
      {gameState === 'intro'
      ?
        <div className="the-story" id="the-story">
          <img src="https://fiddlesitters.com/images/sfmm/harley.jpg" alt="Detective Harley Gnomes" />
          <p className="fade-in">Detective Harley Gnomes has been murdered! Her body was found <b>in the barn</b> on Blynt Manor. Without our town&apos;s only detective, we must figure this out on our own...</p>
          <p className="fade-in">Everyone has a clue. But&mdash;the guilty&apos;s clues are lies, and the innocent&apos;s clues are truth.</p>
          <p className="fade-in">No two possible murder weapons were found in the same location.</p>
          <p className="fade-in">{guiltyCount} of you are guilty of this crime.</p>
          <p className="fade-in">Can you solve this murder?</p>
        </div>
      :
      gameState === 'active'
      ?
        <div className="active-game">
          <p>active game</p>
          <Question data={activeContent} character={sessionStorage.getItem('character')} />
        </div>
      :
      gameState === 'test-results'
      ?
        <div className="test-results">
          <p>test results</p>
          <TestResults data={activeContent} />
        </div>
      :
        <div className="your-clue">
          <h2>Your Clue</h2>
          <p>{clue}</p>

          <div className="all-characters">
            {allPlayers.map(character =>
              <div key={character.name} id={character.name.toLowerCase().replaceAll(' ', '_')} data-id={character.name} className="character-tile">
                <p>{character.name}</p>
                <img src={`https://fiddlesitters.com/images/sfmm/${character.img_src}`} alt={character.name} />
              </div>
            )}
          </div>
        </div>
      }
      </div>

    </Layout>

  )
}

export default Game