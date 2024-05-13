import { render, screen } from "@testing-library/react"
import Greet from "./Greet"

test('Greet render correctly', () => { 
  render(<Greet/>)
  const testElement = screen.getByText("Hello")
  expect(testElement).toBeInTheDocument()
})

test('Greet render incorrectly', () => {
  render(<Greet />)

  const noElenent = screen.getByText(/hello/i)
  expect(noElenent).toBeInTheDocument()
})

test('Greet with name', () => { 
  render(<Greet name="Abiodun"/>)
  const testElement = screen.getByText("Hello Abiodun")
  expect(testElement).toBeInTheDocument()
 })