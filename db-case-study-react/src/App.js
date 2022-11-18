import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div id="app">
            <div class="content">
                <header class="route-search">
                    <h1 class="main-title">
                        <span class="db">DB</span> Fahrplananzeige
                    </h1>
                    <div class="btn-container">
                        <button class="primary">von Frankfurt</button>
                        <button class="primary" disabled>nach Frankfurt</button>
                    </div>
                </header>
               
                <main class="route-results-all">
                    <section class="one-result">
                            <div class="route-point origin">
                                <h3 class="city-name">Stuttgart Hbf</h3>
                                <p class="time">9:40 Uhr</p>
                            </div>
                            
                                <p class="route-duration">1h 40min</p>
                            
                            <div class="route-point destination">
                                <h3 class="city-name">Frankfurt Hbf</h3>
                                <p class="time">11:30 Uhr</p>
                            </div>

                            <div class="line-circles-container">
                                <div class="circle start"></div>
                                <div class="line"></div>
                                <div class="circle end"></div>
                            </div>
                    </section>

                    <section class="one-result">
                            <div class="route-point origin">
                                <h3 class="city-name">Stuttgart Hbf</h3>
                                <p class="time">9:40 Uhr</p>
                            </div>
                            
                                <p class="route-duration">1h 40min</p>
                            
                            <div class="route-point destination">
                                <h3 class="city-name">Frankfurt Hbf</h3>
                                <p class="time">11:30 Uhr</p>
                            </div>
                            
                            <div class="line-circles-container">
                                <div class="circle start"></div>
                                <div class="line"></div>
                                <div class="circle end"></div>
                            </div>
                    </section>
                </main>
            </div>
                
		</div>
  );
}

export default App;
