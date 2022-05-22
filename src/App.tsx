import React from 'react';
import './App.css';

function App() {
    console.log("App rendering")
    return (
        <div>
            <AppTitle/>
            <Rating/>
            <Accordion/>
            <Rating/>
        </div>
    );
}

function AppTitle() {
    return (
        <>This is APP component</>
    );

}

function Accordion() {
    console.log("Accordion rendering")
    return (
        <div>
            <h3>Menu</h3>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>


        </div>

    );
}

function Rating() {
    console.log("Rating rendering")
    return (
        <>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </>
    );

}

function Star() {
    console.log("Star rendering")
    return(
        <div>Star</div>
    );

}

export default App;
