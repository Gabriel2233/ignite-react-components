import { MovieCard } from './MovieCard'

import { MovieProps } from "../App"

type ContentProps = {
  movies: MovieProps[];
  category: string;
}

export function Content({ movies, category }: ContentProps) {

  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {category}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}
