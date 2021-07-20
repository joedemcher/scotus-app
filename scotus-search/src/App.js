import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="content">
        <h1>Welcome to SCOTUS case search</h1>
        <div className="box">
          <div className="justices">
            <form className="box">
              <label className="field">John Roberts</label>
              <input type="radio" id="maj_0" name="jr" value="maj" required></input>
              <label>Majority Opinion</label>
              <input type="radio" id="min_0" name="jr" value="min"></input>
              <label>Minority Opinion</label>
              <br></br>
              <label className="field">Clarence Thomas</label>
              <input type="radio" id="maj_1" name="ct" value="maj" required></input>
              <label>Majority Opinion</label>
              <input type="radio" id="min_1" name="ct" value="min"></input>
              <label>Minority Opinion</label>
              <br></br>
              <label className="field">Ruth Bader Gingsburg</label>
              <input type="radio" id="maj_2" name="rbg" value="maj" required></input>
              <label>Majority Opinion</label>
              <input type="radio" id="min_2" name="rbg" value="min"></input>
              <label>Minority Opinion</label>
              <br></br>
              <label className="field">Stephen Breyer</label>
              <input type="radio" id="maj_3" name="sb" value="maj" required></input>
              <label>Majority Opinion</label>
              <input type="radio" id="min_3" name="sb" value="min"></input>
              <label>Minority Opinion</label>
              <br></br>
              <label className="field">Samuel Alito</label>
              <input type="radio" id="maj_4" name="sa" value="maj" required></input>
              <label>Majority Opinion</label>
              <input type="radio" id="min_4" name="sa" value="min"></input>
              <label>Minority Opinion</label>
              <br></br>
              <label className="field">Sonya Sotomayor</label>
              <input type="radio" id="maj_5" name="ss" value="maj" required></input>
              <label>Majority Opinion</label>
              <input type="radio" id="min_5" name="ss" value="min"></input>
              <label>Minority Opinion</label>
              <br></br>
              <label className="field">Elena Kagan</label>
              <input type="radio" id="maj_6" name="ek" value="maj" required></input>
              <label>Majority Opinion</label>
              <input type="radio" id="min_6" name="ek" value="min"></input>
              <label>Minority Opinion</label>
              <br></br>
              <label className="field">Neil Gorsuch</label>
              <input type="radio" id="maj_7" name="ng" value="maj" required></input>
              <label>Majority Opinion</label>
              <input type="radio" id="min_7" name="ng" value="min"></input>
              <label>Minority Opinion</label>
              <br></br>
              <label className="field">Brett Kavanaugh</label>
              <input type="radio" id="maj_8" name="bk" value="maj" required></input>
              <label>Majority Opinion</label>
              <input type="radio" id="min_8" name="bk" value="min"></input>
              <label>Minority Opinion</label>
              <br></br><br></br>
              <input type="submit" name="submit" value="submit"></input>
            </form>
          </div>
          <div className="cases">
            <p>Cases</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
