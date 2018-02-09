import { requestWrap } from 'joys-react-common';
import environment from './environment';

/**
 * default:
 * headers {
 *  Authorization: environment.token,
 *  Accept-Language: environment.locale
 * }
 * */
export default requestWrap(environment);