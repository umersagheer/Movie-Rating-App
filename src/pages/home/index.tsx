import { useState } from "react";
import { Button, Loader } from "semantic-ui-react";
import ColumnDisplay from "./column-display";
import { useQuery } from "@tanstack/react-query";
import { fetchMovies, fetchTvShows } from "./query";

export enum DisplayType {
  Movies = "movies",
  TvShows = "tvshows",
}

const Home = () => {
  const [displayType, setDisplayType] = useState<DisplayType>(
    DisplayType.Movies
  );

  const { data: MoviesData, isLoading: isLoadingMovies } = useQuery({
    queryKey: ["movies"],
    queryFn: fetchMovies,
  });
  const { data: tvShowsData, isLoading: isLoadingTvShows } = useQuery({
    queryKey: ["tvshows"],
    queryFn: fetchTvShows,
  });
  return (
    <div style={{ marginTop: 50, height: "auto" }}>
      <Button.Group>
        <Button
          color={displayType === DisplayType.Movies ? "blue" : undefined}
          onClick={() => setDisplayType(DisplayType.Movies)}
        >
          Movies
        </Button>
        <Button
          color={displayType === DisplayType.TvShows ? "red" : undefined}
          onClick={() => setDisplayType(DisplayType.TvShows)}
        >
          Tv Shows
        </Button>
      </Button.Group>

      {isLoadingMovies || isLoadingTvShows ? (
        <Loader />
      ) : (
        <div style={{ marginTop: 50 }}>
          {displayType === DisplayType.Movies ? (
            <ColumnDisplay
              data={MoviesData.results}
              displayType={DisplayType.Movies}
            />
          ) : (
            <ColumnDisplay
              data={tvShowsData.results}
              displayType={DisplayType.TvShows}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
