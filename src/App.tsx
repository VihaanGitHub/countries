import Header from './components/Header'
import { useCountries } from './hooks/useCountries'

export default function App() {
const [countries] = useCountries();
console.log(countries);

  return (
    <div>
        <Header/>
    </div>
  )
}
