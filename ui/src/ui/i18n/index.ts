type Messages = Record<string, string>;

let currentMessages: Messages = {};

export function setLocale(messages: Messages): void {
  currentMessages = messages;
}

export function t(key: string): string {
  return currentMessages[key] ?? key;
}

// Auto-load Chinese locale
import { zhCN } from "./zh-CN";
setLocale(zhCN);
