import { stringify } from 'qs';
import { useToast } from 'vue-toastification';

export interface RequestOptions extends Omit<RequestInit, 'body' | 'method'> {
  headers?: Record<string, string>;
  body?: BodyInit | Record<string, any>;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
}

export interface RequestResult<T> {
  data?: T;
  code?: number;
  message?: string;
}

export async function request<T>(
  originUrl: string,
  options?: RequestOptions,
): Promise<T> {
  const mixedOptions: RequestOptions = {
    method: 'GET',
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options && options.headers),
    },
  };
  if (mixedOptions.method === 'GET' && mixedOptions.body) {
    const flag = originUrl.includes('?') ? '&' : '?';
    originUrl += flag + stringify(mixedOptions.body);
    delete mixedOptions.body;
  }
  if (mixedOptions.body instanceof FormData) {
    delete mixedOptions.headers!['Content-Type'];
  } else if (mixedOptions.headers!['Content-Type'] === 'application/json') {
    mixedOptions.body = mixedOptions.body && JSON.stringify(mixedOptions.body);
  }
  try {
    return await fetch(originUrl, mixedOptions as RequestInit)
      .then(res => res.json())
      .then((data: T) => processData(data));
  } catch (error) {
    if (error instanceof Error) {
      useToast().error('服务器异常了捏');
    }
    throw error;
  }
}

function has(obj: object, key: string) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

function processData<T>(result?: RequestResult<T>) {
  if (!result) {
    throw result;
  } else if (has(result, 'code') && result.code !== 0) {
    throw result;
  } else if (has(result, 'data')) {
    return result.data as T;
  } else {
    return result as T;
  }
}
