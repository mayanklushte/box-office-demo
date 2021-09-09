import React, {useState} from 'react'
import MainPageLayout from '../components/MainPageLayout'

const Home = () => {

    const [input, setInput] = useState('');
    const [results, setResult] = useState(null);


    const onSearch = () => {
        // https://api.tvmaze.com/search/shows?q=girls

        fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
            .then(r => r.json())
            .then(result => {
                setResult(result)
                console.log(result)
            })

    }

    const onInputChange = ev => {
        setInput(ev.target.value);

    }

    const renderResults = () => {
        if (results && results.length === 0) {
            return <div>No Results</div>;
        }

        if (results && results.length > 0) {
            return <div>{results.map((item) => <div key={item.show.id}>{item.show.name}</div> )}</div>
        }

        return null;
        
    }
    


    return (
        <MainPageLayout>
            <input
                type="text"
                onChange={onInputChange}
                value={input}
            />

            <button type="button" onClick={onSearch}>Search</button>

            {renderResults()}
        </MainPageLayout>
    )
}

export default Home
