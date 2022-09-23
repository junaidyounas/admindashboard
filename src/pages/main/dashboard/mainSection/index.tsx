// https://www.youtube.com/watch?v=BOF79TAIkYQ&ab_channel=EGATOR
import React from 'react'

import { AnalyticsSharp } from '@mui/icons-material';
type Props = {}

export default function MainSection({ }: Props) {
    return (
        <main>
            <h1>Dashboard</h1>
            <div className="date">
                <input type="date" />
            </div>
            <div className="insights">
                <div className="sales">
                    <AnalyticsSharp className='icon' />
                    <div className="middle">
                        <div className="left">
                            <h3>Total Sales</h3>
                            <h1>$25,000</h1>
                        </div>
                        <div className="progress">
                            <svg>
                                <circle cx='38' cy='38' r='36' />
                            </svg>
                            <div className="number">
                                <p>81%</p>
                            </div>
                        </div>
                    </div>
                    <small className="text-muted">Last 24 hours</small>
                </div>
                {/* Card End */}
                <div className="sales">
                    <AnalyticsSharp className='icon' />
                    <div className="middle">
                        <div className="left">
                            <h3>Total Sales</h3>
                            <h1>$25,000</h1>
                        </div>
                        <div className="progress">
                            <svg><circle cx='38' cy='38' r='36' /></svg>
                            <div className="number">
                                <p>81%</p>
                            </div>
                        </div>
                    </div>
                    <small className="text-muted">Last 24 hours</small>
                </div>
                {/* Card End */}
                <div className="sales">
                    <AnalyticsSharp className='icon' />
                    <div className="middle">
                        <div className="left">
                            <h3>Total Sales</h3>
                            <h1>$25,000</h1>
                        </div>
                        <div className="progress">
                            <svg><circle cx='38' cy='38' r='36' /></svg>
                            <div className="number">
                                <p>81%</p>
                            </div>
                        </div>
                    </div>
                    <small className="text-muted">Last 24 hours</small>
                </div>
                {/* Card End */}
            </div>
        </main>
    )
}