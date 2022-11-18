import { useState, useEffect } from "react";

export default function OneResult({trips}){

	useEffect(() => {
		 
		console.log(`data One Result`, trips);
	});



    return (
		<>
			{trips[0] &&
				trips.map((trip, i) => {
					<section className="one-result" key={i}>
						<div className="route-point origin">
							<h3 className="city-name">{trip.from}</h3>
							<p className="time">{trip.starttime} Uhr</p>
						</div>

						<p className="route-duration">1h 40min</p>

						<div className="route-point destination">
							<h3 className="city-name">{trip.to}</h3>
							<p className="time">{trip.endtime} Uhr</p>
						</div>

						<div className="line-circles-container">
							<div className="circle start"></div>
							<div className="line"></div>
							<div className="circle end"></div>
						</div>
					</section>;
				})}
		</>
	);
}