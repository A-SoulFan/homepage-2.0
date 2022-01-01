import { request } from './request';

const basePath = 'https://dict.asoulfan.com/api/v1';

export interface DictItem {
  cid: number;
  content: string;
  created: number;
  eid: number;
  title: string;
  updated: number;
}

export function searchDict(kwd: string) {
  return request<DictItem[]>(`${basePath}/public/search`, {
    method: 'GET',
    body: { kwd },
  });
}
