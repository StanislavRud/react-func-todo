import React, {Fragment, useContext, useEffect} from 'react';
import Form from "../components/Form";
import Notes from "../components/Notes";
import {FirebaseContext} from "../context/firebase/firebaseContext";
import Loader from "../components/Loader";

const Home = () => {

    // const notes = new Array(3)
    //     .fill('')
    //     .map((_, i) => ({id: i, title: `Note ${i + 1}`}))

    const {loading, notes, fetchNotes} = useContext(FirebaseContext)
    useEffect(() => {
        fetchNotes()
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            <Form/>
            <hr/>

            {loading ? <Loader /> : <Notes notes={notes} />}


        </div>
    );
}

export default Home;