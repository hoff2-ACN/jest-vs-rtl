import React from 'react';
import {Button, Text} from 'react-native';
import {shallow} from 'enzyme';
import Chance from 'chance';
import * as sinon from "sinon";
import App from "./App";

const chance = new Chance();

describe("App", () => {
    let app;

    const newTime = chance.string();

    const properties = {
        currentTime: chance.string(),
        getCurrentTime: () => newTime
    };

    beforeEach(() => {
        app = shallow(<App {...properties} />);
    });

    describe("get time button", () => {
        test("should call getCurrentTime action creator when button is clicked", () => {
            const getTimeButton = app.find(Button);

            getTimeButton.simulate("press");

            expect(app.find(Text).at(1).childAt(0).text()).toEqual('Current Time: ' + newTime);
        });
    });
});
