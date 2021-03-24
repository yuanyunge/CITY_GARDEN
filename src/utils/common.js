import {request} from '@/utils/request';
const domain = 'http://61.153.66.198:8085';
export function getDate(params) {
    return request({
        url: domain +'/xgjc-web/xgm/getHsjcResult',
        method: 'get',
        params
    });
}