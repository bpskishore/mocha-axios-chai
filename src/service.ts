import axios from 'axios';
import {expect} from 'chai';
import {endPoints} from '../conf/endpoints';
import {baseUrl} from '../conf/config';

export let getFacts = async () => await get(baseUrl + endPoints.facts);

function get(url: string) {
    let options: object = {method: 'get', url};
    return axios(options);
}