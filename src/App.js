import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p> 
          <script type="text/javascript">
            function hitungLuasKeliling()
            {
              variable(Panjang, Lebar, Keliling, Luas)
              Panjang = parseInt(document.getElementById("panjang").value);
              Lebar = parseInt(document.getElementById("lebar").value);
              Keliling = 2 * (Panjang + Lebar);
              Luas = Panjang * Lebar;
              document.getElementById("Keliling").value = Keliling;
              document.getElementById("Luas").value = Luas;
            }
          </script>
          <body>
            <h1> Menghitung Keliling dan Luas Persegi Panjang</h1>
            <form>
              <p>Panjang : <input type="text" id="panjang"></p>
              <p>Lebar : <input type="text" id="lebar"></p>
              <p><input type="button" value="Hitung" onclick="hitungLuasKeliling();"> </p>
              <p>Luas : <input type="text" id="luas"></p>
              <p>Keliling : <input type="text" id="keliling"></p>
            </form>
          </body>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
