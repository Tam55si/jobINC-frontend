import React from 'react';
import Searchbar from '../SearchDiv/Searchbar';
import Jobs from '../JobDiv/Jobs';
import Value from '../ValueDiv/Value';
import Reviews from '../Reviews/Reviews';
import JobsData from '../JobDiv/JobsData';
import Search from '../SearchDiv/Search';

function Home() {
    return (
        <>

            <Search />
            {/* <Searchbar /> */}
            <JobsData />
            <Value />
            <Reviews />
        </>
    )
}

export default Home
