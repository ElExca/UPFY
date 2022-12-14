import React from 'react';
import './TracksList.css';
import iconSpotify from '../../assets/icons/spotify-icon.png';

const TracksList = (props) => {
    let tracksList = props.tracksList;
    const tracksListElems = tracksList.map((track, index) => {
        return (
        <li
                key={track.id}
                favourite={track.favourite.toString()}
                index={index}
                data-trackid={track.id}
                className={track.id === props.currentTrackID ? "active" : ""}
                id={track.id === props.currentTrackID ? "activeTrack" : ""}
                style={{
                    display: (
                        (props.favsonly && !track.favourite)
                        || (props.searchString !== ""
                            && !track.title.toLowerCase().includes(props.searchString.toLowerCase())
                        )) ? "none" : null
                }}
                onClick={(ev) => props.selectThisTrack(ev, track.id)}
            >
                <span>
                    <strong>{track.id === props.currentTrackID ? '' : ''}</strong>
                    {track.title}
                </span>
            </li>
        );
    });

    return (
        <div className="home-section">
            
            <div className="menu-ctr">

                <div className="icon-spotify">
                    <img src={iconSpotify} alt=""/>
                </div>
                <div className="menu-btns-ctr">
                    <button
                        className="favs-btn"
                    ><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAThJREFUSEvlldFRwzAQRHc7oAOGCoAKgAqACiAVkA6ADqACUkKogNBBUgFDB3SwzHqkkFiyJTvjL+5TOu27k/dkYuLgxPqoBkg6AvARCroi+VNTXBVgR/wsiK4BVEFqAQsAd62KFyRnpS6KAEk58ahbhPQCJD0BeCxU+UzSednoBEi6B/BWuoKwPyPpTpPIAgaKR9EsJAFIslNsR9tySNi2dpYdto09wAHiUTCBbAHB618jKm93achJHMRdgFs7HXInPblrkuferwFsesDfAI4zoA3JZuq7XKRwyB9tJekFwENL6JXkXNJlfKNIJnolwJLkrYUD5CZAvD4P60sA1021IwA+1zlE7XkZCzDEVfrdeQ9VuxM/frGjprFDAFXm+l+AFYCLqnv5S/okacvuRfGHMxCSpE8O+AVnTYIZzHJ8jQAAAABJRU5ErkJggg=="/></button>
                    <button
                        className="favs-btn"
                        dangerouslySetInnerHTML={{__html: props.favsonly ? `<svg version="1.1" id="act" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 47 45" style="enable-background:new 0 0 47 45;" xml:space="preserve"><path d="M46.8,14.8c0,16-21.3,29.1-22.2,29.7c-0.3,0.2-0.7,0.3-1,0.3c-0.4,0-0.7-0.1-1-0.3C21.6,43.9,0.2,30.8,0.2,14.8 c0-8.3,6-14.6,13.9-14.6c2.6,0,5.1,0.7,7.3,2c0.7,0.4,1.5,0.9,2.1,1.5c0.7-0.6,1.4-1,2.1-1.5c2.2-1.3,4.7-2,7.3-2 C40.8,0.2,46.8,6.5,46.8,14.8z"/></svg>`
                                : `<svg version="1.1" id="des" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 47 45" style="enable-background:new 0 0 47 45;" xml:space="preserve"><path d="M46.8,14.8c0,16-21.3,29.1-22.2,29.7c-0.3,0.2-0.7,0.3-1,0.3c-0.4,0-0.7-0.1-1-0.3C21.6,43.9,0.2,30.8,0.2,14.8 c0-8.3,6-14.6,13.9-14.6c2.6,0,5.1,0.7,7.3,2c0.7,0.4,1.5,0.9,2.1,1.5c0.7-0.6,1.4-1,2.1-1.5c2.2-1.3,4.7-2,7.3-2 C40.8,0.2,46.8,6.5,46.8,14.8z"/></svg>`}}
                        onClick={props.toggleShowfavsonly}
                    ></button>
                    {/* <button
                            className="back-btn"
                            dangerouslySetInnerHTML={{
                                __html: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 225 115.8" style="enable-background:new 0 0 225 115.8;" xml:space="preserve"><path d="M224.2,57.9c0,5-4,9-9,9H31.6l32.6,32.6c3.5,3.5,3.5,9.2,0,12.7c-3.5,3.5-9.2,3.5-12.7,0l-48-48c-0.2-0.2-0.4-0.4-0.6-0.7 c-0.1-0.1-0.2-0.2-0.2-0.3c-0.1-0.1-0.2-0.3-0.3-0.4c-0.1-0.1-0.2-0.3-0.2-0.4C2,62.4,2,62.3,1.9,62.2c-0.1-0.1-0.1-0.3-0.2-0.4 c-0.1-0.1-0.1-0.3-0.2-0.4c-0.1-0.1-0.1-0.3-0.1-0.4c-0.1-0.1-0.1-0.3-0.1-0.4c0-0.1-0.1-0.3-0.1-0.4C1.1,60,1,59.8,1,59.7 c0-0.2,0-0.3-0.1-0.5c0-0.1,0-0.3-0.1-0.4c0-0.3,0-0.6,0-0.9l0,0l0,0c0-0.3,0-0.6,0-0.9c0-0.1,0-0.3,0.1-0.4c0-0.2,0-0.3,0.1-0.5 c0-0.2,0.1-0.3,0.1-0.4c0-0.1,0.1-0.3,0.1-0.4c0-0.1,0.1-0.3,0.1-0.4c0-0.1,0.1-0.3,0.1-0.4c0.1-0.1,0.1-0.3,0.2-0.4 c0.1-0.1,0.1-0.3,0.2-0.4C2,53.5,2,53.4,2.1,53.3c0.1-0.1,0.2-0.3,0.2-0.4c0.1-0.1,0.2-0.3,0.3-0.4c0.1-0.1,0.2-0.2,0.2-0.3 c0.2-0.2,0.4-0.5,0.6-0.7l48-48c3.5-3.5,9.2-3.5,12.7,0c3.5,3.5,3.5,9.2,0,12.7L31.6,48.9h183.6C220.1,48.9,224.2,52.9,224.2,57.9z"/></svg>`
                            }}
                            onClick={props.toggleSidebar}
                        ></button>*/}
                </div>

                <div className="menu-btns-ctr">
                    <button
                        className="favs-btn"
                    ><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAUtJREFUSEvFlDFOw0AQRWc2Ssqw0SYdJKaho3JHRcUF6HIADsUB6OhSUXEBVxwAByKqrGJc2vIM2iAXdry7lmUr29lj/Tez4/8RBj44sD60AqTpTlFOISIo0xAzaDEW0XR6qX0NegGHw2eAJB6ahFjQ22x2HbsgTgAzTxIdrxHFpBHAlEkVvCBiZoM4Aa7uS8GccLNYLH86AZJkG0IBofOeRxBJuYo6AQaf4H8H32tEtuwAM6muuu/AjD3oX1Te69EHRCHlNDfvxFjshejJBz4j+epeo/kEfHUrwCz4d/91C4IDADxGxOlhDYTxxXz5YTNbIyBNdzdFlt/ZHFwHMVMGI3hvio0TgBGnvLj3jd42myoAX/b4oGaSejZVAK2iwUepRUcVoONH+0J9ymWdtVTBa/lUA2yf2sq4vpNq9XweQB/d1zXO5+S+pvkD4xiYGfqkrpYAAAAASUVORK5CYII="/></button>
                    <button
                        className="favs-btn"
                    ><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAMRJREFUSEtjZKAxYKSx+QxYLXj3+qEvExODJCmWMzEyPOMTkt+CrgerBR/ePkwjxXCYWgFh+VmjFuANucEbREyszAf+/f7rQCjiSfbB//+Mv5jZmDbz8cm8JSZlkWjB/7f8QvKbGRkZf4FcTlUL3r+/7yAoqHiAUJCgW0y0D2huASQ4aBhEsPD+///fL2Y2VlpFMiIGaJZMiYlkZDVERzIxSRKb5aMWEIwSooOInCrz3z+G50Ki8puJqtEIOpUEBTRvVQAAdY+DGasSVwgAAAAASUVORK5CYII=">
                    </img></button>
                    {/* <button
                            className="back-btn"
                            dangerouslySetInnerHTML={{
                                __html: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 225 115.8" style="enable-background:new 0 0 225 115.8;" xml:space="preserve"><path d="M224.2,57.9c0,5-4,9-9,9H31.6l32.6,32.6c3.5,3.5,3.5,9.2,0,12.7c-3.5,3.5-9.2,3.5-12.7,0l-48-48c-0.2-0.2-0.4-0.4-0.6-0.7 c-0.1-0.1-0.2-0.2-0.2-0.3c-0.1-0.1-0.2-0.3-0.3-0.4c-0.1-0.1-0.2-0.3-0.2-0.4C2,62.4,2,62.3,1.9,62.2c-0.1-0.1-0.1-0.3-0.2-0.4 c-0.1-0.1-0.1-0.3-0.2-0.4c-0.1-0.1-0.1-0.3-0.1-0.4c-0.1-0.1-0.1-0.3-0.1-0.4c0-0.1-0.1-0.3-0.1-0.4C1.1,60,1,59.8,1,59.7 c0-0.2,0-0.3-0.1-0.5c0-0.1,0-0.3-0.1-0.4c0-0.3,0-0.6,0-0.9l0,0l0,0c0-0.3,0-0.6,0-0.9c0-0.1,0-0.3,0.1-0.4c0-0.2,0-0.3,0.1-0.5 c0-0.2,0.1-0.3,0.1-0.4c0-0.1,0.1-0.3,0.1-0.4c0-0.1,0.1-0.3,0.1-0.4c0-0.1,0.1-0.3,0.1-0.4c0.1-0.1,0.1-0.3,0.2-0.4 c0.1-0.1,0.1-0.3,0.2-0.4C2,53.5,2,53.4,2.1,53.3c0.1-0.1,0.2-0.3,0.2-0.4c0.1-0.1,0.2-0.3,0.3-0.4c0.1-0.1,0.2-0.2,0.2-0.3 c0.2-0.2,0.4-0.5,0.6-0.7l48-48c3.5-3.5,9.2-3.5,12.7,0c3.5,3.5,3.5,9.2,0,12.7L31.6,48.9h183.6C220.1,48.9,224.2,52.9,224.2,57.9z"/></svg>`
                            }}
                            onClick={props.toggleSidebar}
                        ></button>*/}
                </div>
            </div>
            <div
                className="TracksList"
                style={{
                    transform: props.sidebar ? "translateX(0%)" : null
                }}
            >
                <div className="tracks-list-ctr" id="tracksListCtr">

                    <div className="tracklist-header">
                        <div className="icon-spotify-mobile">
                            <img src={iconSpotify} alt=""/>
                        </div>

                        <div className="search-ctr">
                            <input
                                className="search-bar"
                                placeholder="Buscar Canci??n"
                                value={props.searchString}
                                onInput={props.updateSearchString}
                            />
                        </div>

                        <div className="menu-btns-ctr-mobile">
                            <button
                                className="favs-btn"
                                dangerouslySetInnerHTML={{__html: props.favsonly ? `<svg version="1.1" id="act" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 47 45" style="enable-background:new 0 0 47 45;" xml:space="preserve"><path d="M46.8,14.8c0,16-21.3,29.1-22.2,29.7c-0.3,0.2-0.7,0.3-1,0.3c-0.4,0-0.7-0.1-1-0.3C21.6,43.9,0.2,30.8,0.2,14.8 c0-8.3,6-14.6,13.9-14.6c2.6,0,5.1,0.7,7.3,2c0.7,0.4,1.5,0.9,2.1,1.5c0.7-0.6,1.4-1,2.1-1.5c2.2-1.3,4.7-2,7.3-2 C40.8,0.2,46.8,6.5,46.8,14.8z"/></svg>`
                                        : `<svg version="1.1" id="des" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 47 45" style="enable-background:new 0 0 47 45;" xml:space="preserve"><path d="M46.8,14.8c0,16-21.3,29.1-22.2,29.7c-0.3,0.2-0.7,0.3-1,0.3c-0.4,0-0.7-0.1-1-0.3C21.6,43.9,0.2,30.8,0.2,14.8 c0-8.3,6-14.6,13.9-14.6c2.6,0,5.1,0.7,7.3,2c0.7,0.4,1.5,0.9,2.1,1.5c0.7-0.6,1.4-1,2.1-1.5c2.2-1.3,4.7-2,7.3-2 C40.8,0.2,46.8,6.5,46.8,14.8z"/></svg>`}}
                                onClick={props.toggleShowfavsonly}
                            ></button>
                        </div>
                    </div>

                    <h3>Nuevas Canciones Agregadas</h3>
                    <div className="separador"></div>
                    <ul>
                        {tracksListElems}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default TracksList;
