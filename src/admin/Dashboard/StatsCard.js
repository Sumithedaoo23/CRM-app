import React from 'react';

const StatsCard = ({ title, value, change }) => {
  return (
    <div className="stats-card">
      <div className="stats-content">
        <div>
          <p className="stats-title">{title}</p>
          <p className="stats-value">{value}</p>
        </div>
        <div className="stats-change">
          {change}
        </div>
      </div>
      
      <style jsx>{`
        .stats-card {
          background-color: var(--bg-primary);
          border-radius: 8px;
          box-shadow: var(--shadow);
          padding: 24px;
        }
        
        .stats-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        
        .stats-title {
          font-size: 14px;
          color: var(--text-secondary);
          margin-bottom: 4px;
        }
        
        .stats-value {
          font-size: 24px;
          font-weight: 600;
          color: var(--text-primary);
        }
        
        .stats-change {
          background-color: #10b981;
          color: white;
          font-size: 12px;
          font-weight: 500;
          padding: 4px 8px;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
};

export default StatsCard;
