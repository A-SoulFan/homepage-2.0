import { request } from './request';

const basePath = 'https://asoulcnki.asia/v1/api';

// @ProJectASF × 枝网文本复制检测报告[简洁]
// 查重时间：2021-12-27 16:17:10
// 总文字复制比：100.00%
// 相似小作文： https://www.bilibili.com/video/av544065022/#reply4062669646
// 作者：总不知道我是谁
// 发表时间：2021-02-05 17:38:18

// 查重结果仅作参考，请注意辨别是否为原创

export interface CNKICheckRelated {
  rate: number;
  reply: {
    content: string;
    /** @name 发表时间 */
    ctime: number;
    dynamic_id: string;
    like_num: number;
    /** @name 作者 */
    m_name: string;
    mid: number;
    oid: string;
    origin_rpid: string;
    rpid: string;
    similar_count: number;
    similar_like_sum: number;
    type_id: number;
    uid: number;
  };
  /** @name 原文地址 */
  reply_url: string;
}

export interface CNKICheckResult {
  end_time: number;
  /** @name 复制比 */
  rate: number;
  related: CNKICheckRelated[];
  start_time: number;
}

export function cnkiCheck(text: string) {
  return request<CNKICheckResult>(`${basePath}/check`, {
    method: 'POST',
    body: { text },
  });
}
