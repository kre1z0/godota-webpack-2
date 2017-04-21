import React, { PropTypes } from 'react'
import shortid from 'shortid'

export const TournamentTable = (props) => {
  console.log('props', props)
  const matchHeightPx = 80
  const tournamentLength = props.tournament[0]
  const colHeight = tournamentLength.length * matchHeightPx
  return (
    <div className='tournament-table' >
      {
        props.tournament.map((tournament) => {
          const matchHeight = colHeight / tournament.length
          const matchStyle = {
            height: `${matchHeight}px`,
          }
          const stageTournament = tournament.map((stage) => {
            const match = stage.map((team) => {
              const teamStyle = {
                height: `${matchHeightPx / 2 - 15}px`,
              }
              return (
                <div className='team' style={teamStyle} key={shortid.generate()} >
                  <div className='name'>{team.team}</div>
                  <div className='score'>2</div>
                </div>
              )
            })
            return (
              <div className='match' style={matchStyle} key={shortid.generate()} >
                <div className='match-block' >
                  {match}
                </div>
              </div>
            )
          })
          return (
            <div className='col' key={shortid.generate()} >
              {stageTournament}
            </div>
          )
        })
      }
    </div>
  )
}

TournamentTable.propTypes = {
  tournament: PropTypes.array,
}
