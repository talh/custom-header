const getThemeVar = themeVar => {
  return getComputedStyle(document.body).getPropertyValue(themeVar);
};

export const defaultConfig = {
  background: getThemeVar('--ch-background') || 'var(--primary-color)',
  elements_color: getThemeVar('--ch-elements-color') || 'var(--text-primary-color)',
  menu_color: getThemeVar('--ch-menu-color') || '',
  voice_color: getThemeVar('--ch-voice-color') || '',
  options_color: getThemeVar('--ch-options-color') || '',
  all_tabs_color: getThemeVar('--ch-all-tabs-color') || '',
  notification_dot_color: getThemeVar('--ch-notification-dot-color') || '#ff9800',
  tab_indicator_color: getThemeVar('--ch-tab-indicator-color') || '',
  active_tab_color: getThemeVar('--ch-active-tab-color') || '',
  locale: '',
  footer_mode: false,
  kiosk_mode: false,
  disabled_mode: false,
  compact_mode: false,
  disable_sidebar: false,
  tabs_color: [],
  tab_direction: 'ltr',
  button_direction: 'ltr',
  chevrons: true,
  indicator_top: false,
  hide_tabs: [],
  show_tabs: [],
  template_variables: '',
  exceptions: [],
  header_text: 'Home Assistant',
  hidden_tab_redirect: true,
  default_tab: 0,
  sidebar_right: false,
  hide_help: false,
  hide_unused: false,
  hide_refresh: false,
  hide_config: false,
  hide_raw: false,
};
