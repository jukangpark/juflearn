export const GA_TRACKING_ID = process.env.GA_TRACKING_ID;

declare global {
  interface Window {
    gtag?: any;
  }
}

interface eventParams {
  action: string;
  category: string;
  label: string;
  value: number;
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageView = (url: string) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: eventParams) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
