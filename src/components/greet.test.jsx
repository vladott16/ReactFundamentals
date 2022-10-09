import {render, screen} from '@testing-library/react'
import { Greet } from './greet'
import { GreetTdd } from '../components/greetTdd'

describe("test group",()=>{
    test("greet renders correctly",()=>{
        render(<Greet />)
        const textElement = screen.getByText(/Hello/i)
        expect(textElement).toBeInTheDocument();
    })
    test("greetTdd should render correctly",()=>{
        render(<GreetTdd name='Vischwas' />)
        const textElement = screen.getByText(/Hello Vischwas/i)
        expect(textElement).toBeInTheDocument();
    })
});

// matchers  https://jestjs.io/docs/using-matchers   for react components:         https://github.com/testing-library/jest-dom

// test renders , it renders props,  it renders in different states, it handles events
// find an element   -> queries are methods to find an element 
// getBy..  error when not found
// queryBy.. 
// findBy..  
// getAllBy.. 
// queryAllBy.. 
// findAllBy..            

// Role         button, link, heading, checkbox, radio, textbox,combobox  we can add role = in html  
// https://www.w3.org/TR/html-aria/#docconformance
// screen.getByRole('textbox')
// LabelText, PlaceHolderText, Text, DisplayValue, AltText, Title, TestId