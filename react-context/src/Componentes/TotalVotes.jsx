import React, { useContext, useEffect } from 'react'
import { Candidate1Context } from '../Store/Candidate1Context';
import { Candidate2Context } from '../Store/Candidate2Context';
import { Candidate3Context } from '../Store/Candidate3Context';
import { Candidate4Context } from '../Store/Candidate4Context';
import { TotalVotesContext } from '../Store/TotalVotesContext';

const TotalVotes = () => {
  const store1 = useContext(Candidate1Context);
  const store2 = useContext(Candidate2Context);
  const store3 = useContext(Candidate3Context);
  const store4 = useContext(Candidate4Context);
  const votesStore = useContext(TotalVotesContext);

  useEffect(() => {
     votesStore.handleTotalVotes(
        store1.candidate1Votes +
           store2.candidate2Votes +
           store3.candidate3Votes +
           store4.candidate4Votes
     );
  }, [
     store1.candidate1Votes,
     store2.candidate2Votes,
     store3.candidate3Votes,
     store4.candidate4Votes
  ]);

  return (
     <div className="total-votos">Total de votos: {votesStore.totalVotes}</div>
  );
};

export default TotalVotes;