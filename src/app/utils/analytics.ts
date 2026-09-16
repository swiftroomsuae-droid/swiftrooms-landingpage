/**
 * GTM dataLayer helpers (tracking-fix pass, 2026-09).
 *
 * GTM itself is already bootstrapped in index.html; these just push the
 * custom events GTM/GA4/Google Ads conversion tags key off of.
 */

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

function pushDataLayerEvent(event: string, data: Record<string, unknown> = {}) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...data });
}

export function trackLeadFormSubmit(leadType: string = 'quote_request') {
  pushDataLayerEvent('lead_form_submit', {
    lead_source: 'landing-page',
    lead_type: leadType,
  });
}

export function trackThankYouPageView() {
  pushDataLayerEvent('thank_you_page_view', {
    lead_source: 'landing-page',
  });
}

export function trackWhatsAppClick(whatsappNumber: string) {
  pushDataLayerEvent('whatsapp_click', {
    whatsapp_number: whatsappNumber,
    lead_source: 'landing-page',
  });
}
