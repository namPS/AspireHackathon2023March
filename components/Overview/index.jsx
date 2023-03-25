
import './Overview.css';

function Overview() {
  return (
    <div className="Overview">

      <div className='dashboard-container'>
        <div className='left-bar'><h3>name goes here</h3>
          <div className='menu-items'>
            <ul>
              <li>Overview</li>
              <li>Store</li>
              <li>Statistics</li>
              <li>Courses</li>
            </ul>
          </div>
          <div>Log out</div>
        </div>
        <div className='dashboard-content-wrapper'>
          <div className='title-greeting-container'>
            <h1>Overview</h1>
            <p>Welcome back Customer !</p>
          </div>
          <div className='driving-score-container'>
            <div className='driving-score-items-container'>
              <div className='driving-score-item'>Seatbelt usage - good</div>
              <div className='driving-score-item'>Speeding - poor</div>
              <div className='driving-score-item'>Frequency of Hard Acceleration - moderate</div>
              <div className='driving-score-item'>Vehicle Maintenance - divoor</div>
              <div className='driving-score-item'>Hard Breaking - Good</div>
            </div>
            <div className='driving-score-total-container'>
              <div className='driving-score-total-number'>7.5 SCORE</div>
              <div className='driving-score-average'><p>Better than 85% of average drivers</p></div>
            </div>
          </div>
          <div className='route-weather-container'>
            <div className='map'><img src="http://via.placeholder.com/200x300" alt="route taken" width="200" height="300" /></div>
            <div className='last-trip-info-container'>
              <h2>Your last trip to ending location</h2>
              <div className='last-trip-info-items'>
                <ul>
                  <li>Distance</li>
                  <li>Fuel Consumption</li>
                  <li>Time Spent</li>
                  <li>Traffic Condition</li>
                </ul>
              </div>
              <div className='music-recommendation'>
                Some genres
              </div>
            </div>
          </div>
          <div className='right-bar'>
            <div className='profile-container'>
              <div className='profile-image'>
                <img src="http://via.placeholder.com/50x50" alt="route taken" width="80" height="80" />
              </div>
              <div className='profile-name'><h3>Customer Name</h3></div>
            </div>
            <hr />

            <div className='recommendations-container'>
              <h3>Recommendations</h3>
              <div className='recommendation-item'>
                <div>You have 25% off on your insurance premium </div>
                <p>Register Now</p>
              </div>
            </div>

          </div>

        </div>


      </div>

    </div>
  );
}

export default Overview;
