import { activateEditMode } from "../../../../data/data.js";
import { createElement } from "../../../../shared/createElement.js"

export const HeaderPlaylists = () => {
    const element = createElement('header', ['header_playlists']);
    const titleElement = createElement('div', ['header_playlists_title'], {}, 'Мои плейлисты')
    const btnElement = createElement('button', ['header_btnAddPlaylist'], {}, 'Add playlist');
    btnElement.addEventListener('click', () => activateEditMode()); // нужно сделать чтобы про этом клике срабатывало открытие окна

    element.append(titleElement, btnElement);
    return element;
};