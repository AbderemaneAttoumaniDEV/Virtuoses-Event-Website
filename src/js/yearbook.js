// Annuaire de joueurs
import React from 'react';

const Yearbook = () => {
  const equipes = [
    { nom: 'Paris SG', joueurs: [
      { nom: 'Kylian Mbappé', poste: 'Attaquant', matchs: 20, buts: 15, passes: 10 },
      { nom: 'Neymar Jr', poste: 'Attaquant', matchs: 20, buts: 10, passes: 15 },
      // ...
    ]},
    { nom: 'Lyon', joueurs: [
      { nom: 'Memphis Depay', poste: 'Attaquant', matchs: 20, buts: 10, passes: 10 },
      { nom: 'Houssem Aouar', poste: 'Milieu', matchs: 20, buts: 5, passes: 15 },
      // ...
    ]},
    // ...
  ];

  return (
    <div>
      <h2>Annuaire des équipes</h2>
      <ul>
        {equipes.map((equipe) => (
          <li key={equipe.nom}>
            <h3>{equipe.nom}</h3>
            <ul>
              {equipe.joueurs.map((joueur) => (
                <li key={joueur.nom}>
                  <span>{joueur.nom}</span>
                  <span>Poste : {joueur.poste}</span>
                  <span>Matchs : {joueur.matchs}</span>
                  <span>Buts : {joueur.buts}</span>
                  <span>Passes : {joueur.passes}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};