import React, { useEffect, useState } from 'react'
import './covid.css';

const Covid = () => {


    const [ data, setData] = useState([]);

    const getCovidData = async () => {
        try {
            const res = await fetch('https://data.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
        } catch (err) {
            console.log(err);
        }
      
    }

    useEffect(() => {
       getCovidData();
    }, []);
  return (
    <div class="main">
    <div class="head">
      <h1>🔴 LIVE</h1>
      <h2>COVID-19 CORONAVIRUS TRACKER</h2>
      </div>
      <div className="block">
        <a className="card">
            <div className="card__main">
                <div className="card__inner">
                    <p className="card__name">
                        <span id="our">
                            OUR
                        </span>
                        COUNTRY
                    </p>
                    <p className="card__total_card_small">INDIA</p>
                </div>
                
            </div>
        </a>
        <a className="card">
            <div className="card__main2">
                <div className="card__inner2">
                    <p className="card__name">
                        <span id="our">
                            TOTAL
                        </span>
                        RECOVER
                    </p>
                    <p className="card__total_card_small">{data.recovered}</p>
                </div>
            </div>
        </a>
        <a className="card">
            <div className="card__main">
                <div className="card__inner">
                    <p className="card__name">
                        <span id="our">
                            TOTAL
                        </span>
                        CONFIRMED
                    </p>
                    <p className="card__total_card_small">{data.confirmed}</p>
                </div>
            </div>
        </a>
        <a className="card">
            <div className="card__main2">
                <div className="card__inner2">
                    <p className="card__name">
                        <span id="our">
                            TOTAL
                        </span>
                        DEATH
                    </p>
                    <p className="card__total_card_small">{data.deaths}</p>
                </div>
            </div>
        </a>
        <a className="card">
            <div className="card__main">
                <div className="card__inner">
                    <p className="card__name">
                        <span id="our">
                            TOTAL
                        </span>
                        ACTIVE
                    </p>
                    <p className="card__total_card_small">{data.active}</p>
                </div>
            </div>
        </a>
        <a className="card">
            <div className="card__main2">
                <div className="card__inner2">
                    <p className="card__name">
                        <span id="our">
                            NEW
                        </span>
                        UDATE
                    </p>
                    <p className="card__total_card_small">{data.lastupdatedtime}</p>
                </div>
            </div>
        </a>
      </div>
    </div>
  )
}

export default Covid