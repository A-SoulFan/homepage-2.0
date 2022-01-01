/**
 * @name 写入剪贴板
 * @param text 要写入的文本
 */
export function clipboardWrite(text: string): Promise<void> {
  return new Promise((resolve, reject) => {
    /* istanbul ignore next */
    if (typeof document === 'undefined') return;
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'absolute';
    textarea.style.visibility = 'none';
    textarea.style.zIndex = '-1';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('Copy');
      resolve();
    } catch (e) {
      /* istanbul ignore next */
      reject(e);
    } finally {
      textarea.parentElement && textarea.parentElement.removeChild(textarea);
    }
  });
}
