export const SITE_URL = "https://thesectortax.com"; // Placeholder URL
export const SITE_NAME = "The Sector of Collectives";
export const OPEN_OFFICE_ZOOM_LINK = "https://us06web.zoom.us/j/86404449181";
export const DEFAULT_TITLE =
  "The Sector of Collectives | Professional Tax Software & Community";
export const DEFAULT_DESCRIPTION =
  "Helping tax professionals launch, grow, and scale profitable tax businesses. Keep more revenue, build better systems, and create year-round income.";

// External links
export const TAX_SOFTWARE_LOGIN_LINK =
  "https://www.mytaxoffice.com/main/pro/TheSectorofCollectives_Login.php";
export const ERO_ENABLEMENT_LINK =
  "https://thesectorofcollectives.com/opt-in-page";
export const OPEN_OFFICE_COMMUNITY_LINK =
  "https://3gpntud5my1ne29yzqjt.app.clientclub.net/communities/groups/thesectorsopenofficecommunity/home?invite=6a5fb4036d84e6df961d8ca0";
// Single site-wide GHL booking calendar. Every CTA on the site that opens a
// calendar books through this one link — the purpose-specific calendars that
// used to back each CTA are aliased to it below so existing imports keep
// working and a future split back out is a one-line change each.
export const BOOKING_CALENDAR_LINK =
  "https://api.leadconnectorhq.com/widget/booking/Me9Cy5XCKU9zDqjmdLQB";

export const TALK_TO_TEAM_CALENDAR_LINK = BOOKING_CALENDAR_LINK;
// Eve's affiliate/workflow-setup link, used specifically for the "Set Up
// Your Workflow" CTA (per the walkthrough video) — routes there instead of
// the generic contact form it previously doubled as. This is a GHL form, not
// a calendar, so it is intentionally left pointing at its own URL.
export const CONNECT_TO_SECTOR_LINK =
  "https://api.leadconnectorhq.com/widget/form/yZMFt1mV1a8mbrAbiPnx";

// Purpose-specific GHL booking calendars. The trailing comment on each is the
// calendar it previously pointed at in GoHighLevel.
export const ERO_ENABLEMENT_CALL_LINK = BOOKING_CALENDAR_LINK; // was: ERO Enablement Call
export const SERVICE_BUREAU_CALL_LINK = BOOKING_CALENDAR_LINK; // was: Service Bureau
export const PARTNER_CALL_LINK = BOOKING_CALENDAR_LINK; // was: Collaborations & Solutions
export const OPEN_OFFICE_LEADGEN_CALL_LINK = BOOKING_CALENDAR_LINK; // was: ATSP Booking Calendar
export const TAX_PRO_SOLO_CALL_LINK = BOOKING_CALENDAR_LINK; // was: Tax Pro Solo
export const GROWING_FIRM_CALL_LINK = BOOKING_CALENDAR_LINK; // was: ERO Growing Firm

// Calendars from the CTA links sheet with no matching CTA on the site yet —
// kept here so they are one import away when a home appears.
// (Sheet also lists "Wills By You, LLC" — a separate business, intentionally omitted.)
export const STRATEGY_SESSION_CALL_LINK = BOOKING_CALENDAR_LINK; // was: Strategy Session
export const BOOK_STRATEGY_SESSION_CALL_LINK = BOOKING_CALENDAR_LINK; // was: Book Your Strategy Session Now!
export const SECTOR_CONSULTING_CALL_LINK = BOOKING_CALENDAR_LINK; // was: The Sector Consulting
export const INSTRUCTOR_INQUIRY_CALL_LINK = BOOKING_CALENDAR_LINK; // was: Instructor Inquiry Calendar
export const FINAL_REVIEW_9010_CALL_LINK = BOOKING_CALENDAR_LINK; // was: Final Review Calendar for the 9010
export const RESELLER_PROSPECT_CALL_LINK = BOOKING_CALENDAR_LINK; // was: Reseller Prospect Call
export const TAX_SOFTWARE_COMMUNITY_EVENT_LINK = BOOKING_CALENDAR_LINK; // was: The Sector Tax Software & Community (event)
export const HOLIDAY_PHOTO_SESSION_CALL_LINK = BOOKING_CALENDAR_LINK; // was: Holiday Photo Session Booking (event)
export const OPEN_OFFICE_MAIN_FUNNEL =
  "https://thesectorsopenoffice.com/the-open-office";
export const TECH_TUESDAY_LINK =
  "https://thesectorsopenoffice.com/tech-tuesday";
export const MIDNIGHT_MADNESS_LINK =
  "https://thesectorsopenoffice.com/midnight-madness";
export const TAP_IN_THURSDAY_LINK =
  "https://tap-inthursday.thesectoropenoffice.com/home-page";
export const WAITLIST_LINK =
  "https://thesectorsopenoffice.com/waitlist_openoffice";
export const FEEDBACK_LINK = "https://thesectorofcollectives.com/feedback";
export const SOFTWARE_RENEWAL_LINK = BOOKING_CALENDAR_LINK; // was: The Strategy Booking for Software Renewal Calendar

// New funnel pages (live as of 7 Aug 2026)
export const TAX_SOFTWARE_FUNNEL_LINK =
  "https://thesectorofcollectives.com/tax-software";
export const GROWING_FIRM_FUNNEL_LINK =
  "https://thesectorofcollectives.com/growing-firm-4472";
export const TAX_PRO_SOLO_FUNNEL_LINK =
  "https://thesectorofcollectives.com/tax-pro-solo-7433";
export const SERVICE_BUREAU_FUNNEL_LINK =
  "https://thesectorofcollectives.com/service-bureau-626523";
export const TAX_TOUR_LINK =
  "https://thesectorofcollectives.com/tax-tour-landing-page";


export const PHONE_NUMBER = "404-975-2969";
export const PHONE_LINK = "tel:+14049752969";
export const SUPPORT_EMAIL = "support@thesectorofcollectives.com";
export const EMAIL_LINK = "mailto:support@thesectorofcollectives.com";

// Appends UTM params so GHL can attribute a lead to the button/page it came
// from. Mapping these into actual GHL tags/workflows still needs to be
// configured on the GHL side — this only guarantees the params are present.
export function withUtm(url: string, campaign: string): string {
  const sep = url.includes("?") ? "&" : "?";
  return `${url}${sep}utm_source=website&utm_medium=cta&utm_campaign=${encodeURIComponent(campaign)}`;
}

export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Tax Software", href: "/tax-software" },
  { name: "TaxPro EFIN Enablement", href: "/ero-enablement" },
  { name: "ERO Growth Program", href: "/ero-growth-program" },
  { name: "Service Bureau", href: "/service-bureau-growth" },
  { name: "Open Office", href: "/open-office" },
  { name: "Automation & CRM", href: "/technology-support" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
];

export const REVENUE_OPPORTUNITIES = [
  {
    name: "Business Formation Services",
    desc: "Help clients register LLCs, corporations, and DBAs.",
    icon: "🏢",
  },
  {
    name: "Tax Planning & Advisory",
    desc: "High-ticket strategic consulting beyond annual filings.",
    icon: "📊",
  },
  {
    name: "Bookkeeping Partnerships",
    desc: "Build year-round retainer income stream.",
    icon: "📅",
  },
  {
    name: "Financial Literacy Programs",
    desc: "Educate your community and upsell courses.",
    icon: "🎓",
  },
  {
    name: "Virtual Mailbox Services",
    desc: "Provide business address services for remote entities.",
    icon: "📬",
  },
  {
    name: "Fingerprinting Services",
    desc: "Add local identity services to drive walk-in traffic.",
    icon: "👣",
  },
  {
    name: "Business Consulting",
    desc: "General operations advisory for local enterprises.",
    icon: "🤝",
  },
  {
    name: "Credit & Funding Partnerships",
    desc: "Guide clients through business funding applications.",
    icon: "💳",
  },
  {
    name: "Referral Programs",
    desc: "Earn commission by connecting clients with allied professionals.",
    icon: "📣",
  },
];
