import React from 'react'
import LabelWrapper from "./components/labels/LabelWrapper";
import PortfolioItem from "./components/reference/portfolioItem";
import Box from "./components/box/box";
import './App.css';

export default class App extends React.Component {


    render() {

        return <>
            {/* wrapper */}
            <div className={'wrapper'}>
                <div className={'wrapper-flex'}>
                    <LabelWrapper/>
                    <PortfolioItem/>
                    <Box/>
                </div>
                <div className={'wrapper-name'}>
                    <h3>This item</h3>
                </div>
            </div>
        </>
    }

}
