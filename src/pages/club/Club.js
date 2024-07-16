import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Club.css'; // Import the CSS file

export const Club = () => {
  const { t } = useTranslation();
  const [standings, setStandings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = '269a311198mshbb75820bcb782a0p1db046jsn94c17048b0ba'; // Your actual API key
  const leagueId = '327'; // Erovnuli Liga ID
  const season = Number(new Date().getFullYear()); // The season you want to fetch data for

  useEffect(() => {
    const fetchStandings = async () => {
      try {
        const response = await fetch(`https://api-football-v1.p.rapidapi.com/v3/standings?league=${leagueId}&season=${season}`, {
          headers: {
            'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
            'x-rapidapi-key': apiKey,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setStandings(data.response[0].league.standings[0]);
        } else {
          setError(`Failed to fetch standings. Status: ${response.status}`);
        }
      } catch (error) {
        setError('Error fetching standings: ' + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStandings();
  }, [leagueId, season, apiKey]);

  const getRankCellStyle = (rank) => {
    let backgroundColor = '';
    let fontColor = 'white';

    if (rank === 1) {
      backgroundColor = 'rgb(0, 70, 130)';
    } else if (rank === 2 || rank === 3) {
      backgroundColor = 'rgb(127, 0, 41)';
    } else if (rank === 8 || rank === 9) {
      backgroundColor = 'rgb(189, 0, 0)';
    } else if (rank === 10) {
      backgroundColor = 'rgb(255, 65, 65)';
    } else {
      backgroundColor = ''; // You can set a default background color here if needed
      fontColor = 'black'; // Set font color to black if rank is not in specified ranges
    }

    return {
      backgroundColor,
      color: fontColor,
      textAlign: 'center',
      padding: '8px',
    };
  };

  return (
    <div className="app">
      <h2>{t('Erovnuli Liga Standings')}</h2>
      {loading ? (
        <p>{t('Loading...')}</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className='b-tournament-table-large'>
        <table className="standings-table ttl-table">
          <thead>
            <tr>
              <th className='ttl-cell-position'>#</th>
              <th className='thname ttl-cell-club '>{t('Team')}</th>
              <th className='ttl-cell-plays ttl-num'>{t('Played')}</th>
              <th className='ttl-cell-wins ttl-num'>{t('Won')}</th>
              <th className='ttl-cell-draws ttl-num'>{t('Draw')}</th>
              <th className='ttl-cell-loses ttl-num'>{t('Lost')}</th>
              <th className='ttl-cell-points ttl-num'>{t('Points')}</th>
            </tr>
          </thead>
          <tbody>
            {standings.map((team, index) => (
              <tr key={team.team.id}>
                <td style={getRankCellStyle(index + 1)} className='rank ttl-cell-position'>{index + 1}.</td>
                <td className='thname ttl-cell-club tdname'>{t(`${team.team.name}`)}</td>
                <td className='ttl-cell-plays ttl-num'>{team.all.played}</td>
                <td>{team.all.win}</td>
                <td>{team.all.draw}</td>
                <td>{team.all.lose}</td>
                <td>{team.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      )}
    </div>
  );
};

export default Club;
