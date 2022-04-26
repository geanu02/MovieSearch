import { render, screen } from "@testing-library/react"
import SearchMovies from "./searchMovies"

test('Renders SearchMovies component', () => {
    render(<SearchMovies />);
    const linkElement = screen.getByTitle(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});

it("", () => {});