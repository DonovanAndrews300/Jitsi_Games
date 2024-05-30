import DataClient from './DataClient';
import { config } from './config';

function copyURL() {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
        alert('URL copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

function getUrlParams() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const gameId = urlParams.get("id");
    const gameType = urlParams.get("gameType");
    return {gameId, gameType};
}

function join() {
  
    const {gameId, gameType} = getUrlParams(); 
    const userId = Math.random().toString(36).substr(2, 9);
    const _dataClient = new DataClient(config.apiUrl,config.wsUrl);
    _dataClient.joinGame(gameId, userId).then(() => {
        alert("Game joined successfully");
    }).catch((err) => alert(err));
}

join();