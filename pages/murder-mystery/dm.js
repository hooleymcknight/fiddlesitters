/* eslint-disable @next/next/no-img-element */
import { useReducer, useEffect, useState, useRef } from 'react'
import Router from 'next/router'
import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'

const apiEndpoint = '/api/getdata'
let dmActivePlayers = []
let dmClues = []

const roll = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const selectMurderers = (players) => {
  let allPlayers = [...players]
  console.log(allPlayers)
  let count = Math.floor(players.length / 3) // sometimes it's plus one, sometimes no??
  console.log(count)

  let picked = []

  while (count > 0) {
    console.log('start count', count)
    const index = roll(0, allPlayers.length - 1)
    picked.push(allPlayers[index])
    allPlayers.splice(index, 1)
    count--
  }

  console.log(picked)
  return picked

}

const DM = () => {
  const [activePlayers, setActivePlayers] = useState([])
  const [guiltyCount, setGuiltyCount] = useState(0)
  const [clues, setClues] = useState([])

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
    if (!activePlayers.length) {
      getData(`SELECT * FROM characters WHERE user is not NULL`, function(res) {
        setActivePlayers(res.results.map(x => Object({ name: x.name, role: x.role, img_src: x.img_src })))
      })
    }
  }, [activePlayers])

  function selectTiles(e) {
    const tile = e.target.closest('.character-tile')
    if (tile) {
      if (!tile.classList.contains('activated')) {
        tile.classList.add('activated')
      }
      else {
        tile.classList.remove('activated')
      }
    }
  }

  function postGuiltyRoles() {
    console.log('active players', activePlayers)
    const murderers = selectMurderers(activePlayers.map(x => x.name))
    console.log(murderers)
    console.log(murderers.includes('Mattias the Scholar'))
    setGuiltyCount(murderers.length)

    const newPlayers = activePlayers.map(x =>
      murderers.includes(x.name) ? Object({ "img_src": x.img_src, "name": x.name, "role": "guilty" }) : x
    )
    setActivePlayers(newPlayers)
    dmActivePlayers = newPlayers

    getData(`UPDATE characters SET role = "guilty" WHERE name IN ("${murderers.join('","')}")`)
  }

  function getClues() {
    if (!dmClues.length) {
      getData(`SELECT * from clues WHERE id < ${dmActivePlayers.length}`, function(res) {
        setClues(res.results.map(x => `(${x.status}) ${x.clue}`))

        // let currentClues = [...clues]
        let currentClues = [...res.results.map(x => `(${x.status}) ${x.clue}`)]
        dmActivePlayers.forEach((character) => {
          let clue
          if (character.role === 'guilty') {
            clue = currentClues.filter(x => x.includes('(lie)'))[0] // get a lie
          }
          else {
            clue = currentClues.filter(x => x.includes('(truth)'))[0] // get a truth
          }

          getData(`UPDATE characters SET clue = "${clue}" WHERE name = "${character.name}"`) // give the clue
          currentClues.splice(currentClues.indexOf(clue), 1) // remove from our batch of clues to dole out
        })
      })
    }
  }

  // activate players

  function activateInvestigation(e) {
    const dmContainer = e.target.closest('.dm-page')
    const allActive = Array.from(dmContainer.querySelectorAll('.character-tile.activated')).map(x => x.getAttribute('data-id'))

    getData(`SELECT * FROM questions WHERE used = 0 LIMIT 1`, function(res) {
      console.log(res.results[0])
      getData(`UPDATE questions SET used = 1 WHERE real_question = "${res.results[0].real_question}"`)

      function awaitAnswers() {
        getData(`SELECT * FROM interrogations`, function(res) {
          if (res.results.length === 3) {
            // reset active
            console.log('----------------- RESET ACTIVE -----------------')
            getData(`UPDATE characters SET active_state = "test-results", active_content = "${res.results}"`)
            clearInterval(awaitingAnswers)
          }
          console.log('awaiting answers')
        })
      }

      dmContainer.querySelectorAll('.character-tile.activated').forEach((player) => {
        const playerName = player.getAttribute('data-id')
        const playerRole = player.getAttribute('data-role')
        let content

        if (playerRole === 'guilty') {
          content = `{'question': '${res.results[0].fake_question}', 'options': '${res.results[0].options?.replaceAll(`"`, `'`)}'`
        }
        else {
          content = `{'question': '${res.results[0].real_question}', 'options': '${res.results[0].options?.replaceAll(`"`, `'`)}'`
        }
        let query = `UPDATE characters SET active_state = "active", active_content = "${content}" WHERE name = "${playerName}"`
        console.log('query', query)
        getData(query)
      })

      const awaitingAnswers = setInterval(awaitAnswers, 5000)
    })
  }

  function resetActive(e) {
    const dmContainer = e.target.closest('.dm-page')
    dmContainer.querySelectorAll('.character-tile.activated').forEach(x => x.classList.remove('activated'))
    getData(`UPDATE characters SET active_state = null, active_content = null WHERE active_state = "active" OR active_state = "test-results"`)
  }

  return (
    <Layout page='surefoot'>
      <Head>
        <title>{siteTitle} || Surefoot Murder Mystery</title>
      </Head>

      <div className="dm-page">
        <div className="dm-console">
          <button type="button" onClick={postGuiltyRoles}>post guilty roles</button>
          <button type="button" onClick={getClues}>get clues</button>
          <button type="button" onClick={e => activateInvestigation(e)}>activate investigation</button>
          <button type="button" onClick={e => resetActive(e)}>reset active</button>
        </div>

        <div className="all-characters">
          {activePlayers.map(character =>
            <div key={character.name} id={character.name.toLowerCase().replaceAll(' ', '_')} data-id={character.name} data-role={character.role} className="character-tile">
              <p onClick={e => selectTiles(e)}>{character.name}</p>
              <img onClick={e => selectTiles(e)} src={`https://fiddlesitters.com/images/sfmm/${character.img_src}`} alt={character.name} />
            </div>
          )}
        </div>
      </div>

    </Layout>

  )
}

export default DM