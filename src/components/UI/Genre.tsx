import React from 'react';

interface Props {
  genreIds: number[];
  genres: { id: number; name: string }[];
}

const Genre: React.FC<Props> = ({ genreIds, genres }) => {
  const movieGenres = genreIds.map((genreId) => {
    const genre = genres.find((g) => g.id === genreId);
    return genre ? genre.name : 'Gênero Desconhecido';
  });
  return (
    <div className="flex flex-wrap gap-2">
      {movieGenres.map((genre, index) => (
        <span key={index} className="text-white  py-1  text-sm">
          {genre}
        </span>
      ))}
    </div>
  );
};

export default Genre;
