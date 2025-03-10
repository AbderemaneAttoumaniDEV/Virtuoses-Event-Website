// Classement des équipes
import React from 'react';

const Ranking = () => {
  const equipes = [
    { nom: 'Paris SG', pts: 50, j: 20, g: 15, n: 5, p: 0, f: 0, bp: 40, bc: 10, diff: 30 },
    { nom: 'Lyon', pts: 40, j: 20, g: 12, n: 4, p: 4, f: 0, bp: 30, bc: 20, diff: 10 },
    // ...
  ];

  return (
    <div>
      <h2>Classement</h2>
      <table>
        <thead>
          <tr>
            <th>Équipe</th>
            <th>Pts</th>
            <th>J</th>
            <th>G</th>
            <th>N</th>
            <th>P</th>
            <th>F</th>
            <th>Bp</th>
            <th>Bc</th>
            <th>Diff</th>
          </tr>
        </thead>
        <tbody>
          {equipes.map((equipe) => (
            <tr key={equipe.nom}>
              <td>{equipe.nom}</td>
              <td>{equipe.pts}</td>
              <td>{equipe.j}</td>
              <td>{equipe.g}</td>
              <td>{equipe.n}</td>
              <td>{equipe.p}</td>
              <td>{equipe.f}</td>
              <td>{equipe.bp}</td>
              <td>{equipe.bc}</td>
              <td>{equipe.diff}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};