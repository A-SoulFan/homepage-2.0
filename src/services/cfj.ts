import { request } from './request';

const basePath = 'https://api.asoulfan.com';

export interface Uploader {
  face: string;
  desc: string;
  mid: number;
  uname: string;
}

export function searchFollowingUploaders(name: string) {
  return request<{
    list: Array<{
      face: string;
      official_verify: {
        desc: string;
      } | null;
      mid: number;
      uname: string;
    }>;
  }>(`${basePath}/cfj/`, {
    method: 'GET',
    body: { name },
  }).then(({ list }) =>
    list.map<Uploader>(({ face, official_verify, mid, uname }) => ({
      face,
      desc: official_verify?.desc || '',
      mid,
      uname,
    })),
  );
}
