export default function OneResult({data}){

    console.log(`data One Result`, data);



    return (
        <section className="one-result">
				<div className="route-point origin">
					<h3 className="city-name">Stuttgart Hbf</h3>
					<p className="time">9:40 Uhr</p>
				</div>

				<p className="route-duration">1h 40min</p>

				<div className="route-point destination">
					<h3 className="city-name">Frankfurt Hbf</h3>
					<p className="time">11:30 Uhr</p>
				</div>

				<div className="line-circles-container">
					<div className="circle start"></div>
					<div className="line"></div>
					<div className="circle end"></div>
				</div>
			</section>
    );
}