import React, { useState } from 'react'
import Candidate1 from './Componentes/Candidate1'
import Candidate2 from './Componentes/Candidate2'
import Candidate3 from './Componentes/Candidate3'
import Candidate4 from './Componentes/Candidate4'
import TotalVotos from './Componentes/TotalVotes'
import IndividualsVotes from './Componentes/IndividualsVotes'
import Filters from './Componentes/Filters'
import { Candidate1Provider } from './Store/Candidate1Context'
import { Candidate2Provider } from './Store/Candidate2Context'
import { Candidate3Provider } from './Store/Candidate3Context'
import { Candidate4Provider } from './Store/Candidate4Context'
import { TotalVotesProvider } from './Store/TotalVotesContext'

import './App.css'

function App() {
  const [view, setView] = useState("numerico");

  return (
    <>
    <TotalVotesProvider>
      <Candidate1Provider>
        <Candidate2Provider>
          <Candidate3Provider>
            <Candidate4Provider>
              <div className='main'>
                <div className='candidate-container'>
                  <Candidate1/>
                  <Candidate2/>
                  <Candidate3/>
                  <Candidate4/>
                </div>
                <div className='filter'>
                  <Filters view={view} setView={setView}/>
                  <div className='total-votos'>
                    <TotalVotos/>
                    <IndividualsVotes
                      view={view}
                      setView={setView}
                    />
                  </div>
                </div>
              </div>
            </Candidate4Provider>
          </Candidate3Provider>
        </Candidate2Provider>
      </Candidate1Provider>
    </TotalVotesProvider>
    </>
  )
}

export default App
