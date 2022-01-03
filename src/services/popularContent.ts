import { request } from './request';

const slicePath = 'https://support-api.asoulfan.com/api/recommend-slice';
const createPath =
  'https://api.asoul.cloud:8000/getBV?page=1&tag_id=0&sort=4&part=0&rank=0&ctime=0&type=1';

export interface create {
  bvid: string;
  face: string;
  his_rank: number;
  name: string;
  now_rank: number;
  owner_name: string;
  pic: string;
  pubdate: number;
  stat_coin: number;
  stat_danmaku: number;
  stat_favorite: number;
  stat_like: number;
  stat_reply: number;
  stat_share: number;
  stat_view: number;
  tid: number;
  title: string;
  uid: number;
}
export interface slice {
  auth: string;
  bid: string;
  description: string;
  image_url: string;
  play_val: string;
  time: string;
  time_second: string;
  title: string;
  url: string;
}

const getSliceList = () =>
  request<slice[]>(slicePath, {
    method: 'GET',
  });

const getCreateList = () =>
  request<create[]>(createPath, {
    method: 'GET',
  });
// export function searchFollowingUploaders(name: string) {
//   return request<{
//     list: Array<{
//       face: string;
//       official_verify: {
//         desc: string;
//       } | null;
//       mid: number;
//       uname: string;
//     }>;
//   }>(`${basePath}/cfj`, {
//     method: 'GET',
//     body: { name },
//   }).then(({ list }) =>
//     list.map<Uploader>(({ face, official_verify, mid, uname }) => ({
//       face,
//       desc: official_verify?.desc || '',
//       mid,
//       uname,
//     })),
//   );
// }

export { getSliceList, getCreateList };
