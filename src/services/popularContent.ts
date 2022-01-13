import { request } from './request';

const slicePath = 'https://support-api.asoulfan.com/api/recommend-slice';
const createPath =
  'https://api.asoul.cloud:8000/getBV?page=1&tag_id=0&sort=4&part=0&rank=0&ctime=0&type=1';

export interface create {
  /**@description BV号 */
  bvid: string;
  face: string;
  his_rank: number;
  name: string;
  now_rank: number;
  owner_name: string;
  /**@description 封面图片 */
  pic: string;
  pubdate: number;
  stat_coin: number;
  stat_danmaku: number;
  stat_favorite: number;
  stat_like: number;
  stat_reply: number;
  stat_share: number;
  /**@description 播放量 */
  stat_view: number;
  tid: number;
  /**@description 标题 */
  title: string;
  uid: number;
}
export interface slice {
  auth: string;
  bid: string;
  description: string;
  /**@description 封面图片 */
  image_url: string;
  /**@description 播放链接 */
  play_val: string;
  time: string;
  time_second: string;
  /**@description 标题 */
  title: string;
  /**@description 视频链接 */
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

export { getSliceList, getCreateList };
