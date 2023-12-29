import { Card, Grid } from "semantic-ui-react";
import { DisplayType } from ".";
import { Link } from "react-router-dom";

type Props = {
  data: DisplayData[];
  displayType: DisplayType;
};

type DisplayData = {
  id: number;
  name?: string;
  overview: string;
  poster_path: string;
  title?: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
};
const ColumnDisplay = (props: Props) => {
  const { displayType, data } = props;

  return (
    <Grid
      columns={3}
      stackable
      centered
      verticalAlign="top"
      padded="vertically"
    >
      {data.map((displayData: DisplayData) => {
        return (
          <Grid.Column key={displayData.id}>
            <Card.Group>
              <Link
                to={`/${
                  displayType === DisplayType.Movies ? "movies" : "tvshows"
                }/${displayData.id}`}
              >
                <Card
                  fluid
                  image={`https://image.tmdb.org/t/p/original/${displayData.poster_path}`}
                  header={
                    displayType === DisplayType.Movies
                      ? displayData.title
                      : displayData.name
                  }
                  meta={`Release Date: ${displayData.release_date} | Rating: ${displayData.vote_average}`}
                  description={displayData.overview.slice(0, 200) + "..."}
                />
              </Link>
            </Card.Group>
          </Grid.Column>
        );
      })}
    </Grid>
  );
};

export default ColumnDisplay;
