import './App.css';
import Countries from './components/Countries/Countries';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}






// function LocalData() {
//   const [Countries, setCountries] = useState([0]);
//   useEffect(() => {
//     fetch('https://restcountries.com/v2/all')
//       .then(res => res.json())
//       .then(data => console.log(data))
//   }, [])
//   return (
//     <div>
//       <h1>Rest Countries Information</h1>
//       <p>Countries: {Countries.length}</p>
//     </div>
//   )
// }

export default App;
