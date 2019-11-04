import React from 'react';
import Chance from 'chance';
import App from "./App";
import { fireEvent, render, wait} from '@testing-library/react-native';

const chance = new Chance();

const newTime = chance.string();
const properties = {
    currentTime: chance.string(),
    getCurrentTime: () => newTime
};

describe("App", () => {
    let app;

    beforeEach(() => {
        app = render(<App {...properties} />);
    });

    describe("get time button", () => {
        test("should call getCurrentTime action creator when button is clicked", async () => {
            const {getByTestId, queryByTestId} = app;

            const getTimeButton = getByTestId('getTime');

            fireEvent.press(getTimeButton);

            await wait(() => expect(queryByTestId('time')).toBeTruthy());
            await wait(() => expect(getByTestId('time').props.children).toEqual('Current Time: ' + newTime));
        });
    });
});
