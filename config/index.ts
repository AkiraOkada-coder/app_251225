import type { AppInfo } from '@/types/app'
export const APP_ID = `b1a49ca9-648a-4f36-9ec2-f3b3eb666f17`
export const API_KEY = `app-LbybpbhEwrjcWLMJTHRGTZWG`
export const API_URL = `https://api.dify.ai/v1`
export const APP_INFO: AppInfo = {
  title: 'Chat APP',
  description: '',
  copyright: '',
  privacy_policy: '',
  default_language: 'en',
  disable_session_same_site: false, // set it to true if you want to embed the chatbot in an iframe
}

export const isShowPrompt = false
export const promptTemplate = 'I want you to act as a javascript console.'

export const API_PREFIX = '/api'

export const LOCALE_COOKIE_NAME = 'locale'

export const DEFAULT_VALUE_MAX_LEN = 48
