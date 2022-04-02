import React from "react";
import DEFAULT_IMAGE from "./assets/ricknmorty.jpg";
import { IEpisode, Dispatch, IState, FavAction } from "./interfaces";

interface IProps {
  episodes: Array<IEpisode>;
  toggleFavAction: FavAction;
  favourites: Array<IEpisode>;
  store: { state: IState; dispatch: Dispatch };
}

export default function EpisodesList(props: IProps): Array<JSX.Element> {
  const { episodes, toggleFavAction, favourites, store } = props;
  const { state, dispatch } = store;

  return episodes.map((episode: IEpisode) => {
    console.log(episode);

    return (
      <section key={episode.id} className="episode-box">
        <img
          src={!!episode.image ? episode.image.medium : DEFAULT_IMAGE}
          alt={`Rick and Mort ${episode.name}`}
        />
        <div>{episode.name}</div>
        <section style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            Seasion: {episode.season} Number: {episode.number}
          </div>
          <button
            type="button"
            onClick={() => toggleFavAction(state, dispatch, episode)}
          >
            {favourites.find((fav: IEpisode) => fav.id === episode.id)
              ? "Unfav"
              : "Fav"}
          </button>
        </section>
      </section>
    );
  });
}
