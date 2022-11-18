import OneResult from "./components/one-result";
import data from "./mock-data.json";
import { useState, useEffect } from "react";

export default function SearchResults({ trips }) {
	trips = data;

useEffect(() => {
	// get JSON data
	console.log(`data`, trips);
	
}, []);

const calcDuration = (trip) => {
	// Calculate time difference between starttime and endtime
	// var date1 = new Date("2010-9-16 13:30:58");
	return "1h40";
}


 return (
		<>
			{trips[0] &&
				trips.map((trip, i) => (
					<section className="one-result" key={i}>
						<div className="route-point origin">
							<h3 className="city-name">{trip.from}</h3>
							<p className="time">{trip.starttime} Uhr</p>
						</div>

						<p className="route-duration">{calcDuration(trip)} min</p>

						<div className="route-point destination">
							<h3 className="city-name">{trip.to}</h3>
							<p className="time">{trip.endtime} Uhr</p>
						</div>

						<div className="line-circles-container">
							<div className="circle start"></div>
							<div className="line"></div>
							<div className="circle end"></div>
						</div>
					</section>
				))}
		</>
 );
   
}