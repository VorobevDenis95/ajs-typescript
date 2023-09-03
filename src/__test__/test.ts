import Movie from "../ts";

test('test class movie', () => {
    const avengers = new Movie('The Avengers', 2012, 'USA', 'Avengers Assembie!', 'fantastic, action', 137);
    expect(avengers).toEqual({ title: 'The Avengers', releaseYear: 2012, country: 'USA', tagline: 'Avengers Assembie!', genre: 'fantastic, action', time: 137 })
})