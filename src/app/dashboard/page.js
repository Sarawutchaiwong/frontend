'use client';

export default function Dashboard() {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4 display-4">Rain Meteorological Dashboard</h1>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm" style={{ borderRadius: '1rem' }}>
            <div className="card-body p-4">
              <h2 className="card-title">Current Conditions</h2>
              <p><strong>Rainfall Intensity:</strong> -- mm/hr</p>
              <p><strong>Last Recorded Rainfall:</strong> -- mm (at --:--)</p>
              <p><strong>Status:</strong> Heavy rain</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm" style={{ borderRadius: '1rem' }}>
            <div className="card-body p-4">
              <h2 className="card-title">Historical Data</h2>
              <p><strong>Daily Total:</strong> -- mm</p>
              <p><strong>Weekly Total:</strong> -- mm</p>
              <p><strong>Monthly Total:</strong> -- mm</p>
              
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card shadow-sm" style={{ borderRadius: '1rem' }}>
            <div className="card-body p-4">
              <h2 className="card-title">Rainfall Trends</h2>
              <ul>
                <li><strong>Last 24 hours:</strong> 5 mm (Light Rain)</li>
                <li><strong>Last 7 days:</strong> 35 mm (Moderate Rain)</li>
                <li><strong>Last 30 days:</strong> 120 mm (Heavy Rain)</li>
                <li><strong>Average for this month:</strong> 100 mm</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}