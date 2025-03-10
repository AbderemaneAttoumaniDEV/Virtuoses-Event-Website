function updateMatchs() {
  const matchsElement = document.getElementById("matchs");
  if (countdownFinished) {
    const matchs = [
      { equipe1: 'Congo RDC', equipe2: 'Cameroun', score1: 4, score2: 3, date: '| 01 Juin 2025' },
      { equipe1: 'Sénégal', equipe2: 'France', score1: 2, score2: 2, date: '| 01 Juin 2025' },
      { equipe1: 'Centre Afrique', equipe2: 'Comores', score1: 2, score2: 3, date: '| 01 Juin 2025' },
      { equipe1: 'Maroc', equipe2: 'Antilles', score1: 5, score2: 1, date: '| 01 Juin 2025' },
      { equipe1: 'Guinée', equipe2: 'Cotes d\'Ivoire', score1: 3, score2: 3, date: '| 01 Juin 2025' },
      { equipe1: 'Algérie', equipe2: 'Angola', score1: 5, score2: 5, date: '| 01 Juin 2025' },
      { equipe1: 'Italie', equipe2: 'Mayotte', score1: 2, score2: 1, date: '| 01 Juin 2025' },
      { equipe1: 'Portugal', equipe2: 'Colombie', score1: 6, score2: 2, date: '| 01 Juin 2025' },
      // ...
    ];

    const matchsHTML = matchs.map((match) => `
      <div>
        <span>${match.equipe1}</span>
        <span>
          <span style="color: ${match.score1 > match.score2 ? 'green' : match.score1 < match.score2 ? 'red' : 'gray'}">${match.score1}</span> - 
          <span style="color: ${match.score2 > match.score1 ? 'green' : match.score2 < match.score1 ? 'red' : 'gray'}">${match.score2}</span>
        </span>
        <span>${match.equipe2}</span>
        <span>${match.date}</span>
      </div>
    `).join('');

    matchsElement.innerHTML = matchsHTML;
} else {
    matchsElement.innerHTML = '';
  }

}

updateMatchs();

setInterval(updateMatchs, 1000);
