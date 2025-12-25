import type { AppInfo } from '@/types/app'
export const APP_ID = `6b0e3b96-2925-4132-a584-33c884e3c64d`
export const API_KEY = `app-Qr3T1CUugRFtBy74WS307YF4`
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
