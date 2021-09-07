import React, {useState} from 'react'
import MainPageLayout from '../components/MainPageLayout'

const Home = () => {

    const [input, setInput] = useState('');

    const onSearch = () => {
        // https://api.tvmaze.com/search/shows?q=girls

        fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
            .then(r => r.json())
            .then(result => {
                console.log(result);
            })

    }

    const onInputChange = ev => {
        setInput(ev.target.value);

    }


    return (
        <MainPageLayout>
            <input
                type="text"
                onChange={onInputChange}
                value={input}
            />

            <button type="button" onClick={onSearch}>Search</button>
        </MainPageLayout>
    )
}

export default Home