import HANDSHAKE_IMG from "./assets/Images/vaadin_handshake.png";
import HAND_IMG from "./assets/Images/solar_hand-money-outline-1.png";
import REFUSED_IMG from "./assets/Images/refused.png";
import BM_IMG from "./assets/Images/bm.png";
import PAID_IMG from "./assets/Images/paied.png";
import WRONG_NUMBER_IMG from "./assets/Images/wrong-number.png";
import READY_PAY_IMG from "./assets/Images/ready-pay.png";
import SEARCH_IMG from "./assets/Images/search.png";
import SETTINGS_IMG from "./assets/Images/settings.png";
import CONTACT_IMG from "./assets/Images/contact.png";
import WHATSAPP_IMG from "./assets/Images/whatsapp.png";
import AI_CALLING_IMG from "./assets/Images/ai.png";
import BLASTER_IMG from "./assets/Images/blaster.png";
import IVR_IMG from "./assets/Images/customer-care.png";

export const MENU_IDS = {
  DASHBOARD: "dashboard",
  REGISTERED_CALLING: "registered-calling",
  REFRESH_CALL_LOGS: "refresh-call-logs",
  REFER_CV: "refer-cv",
  LOGOUT: "logout",
}

export const DASHBOARD_CAROUSEL_DATA = [
  {
    value: 344,
    date: "2024-09-12",
  },
  {
    value: 344,
    date: "2024-09-12",
  },
  {
    value: 404,
    date: "2024-09-13",
  },
  {
    value: 204,
    date: "2024-09-13",
  },
  {
    value: 2344,
    date: "2024-09-13",
  },
  {
    value: 44,
    date: "2024-09-13",
  },
  {
    value: 0,
    date: "2024-09-13",
  },
]

export const CUSTOMER_ENGAGEMENT_DATA = [
  {
    value: 206,
    key: "Whatsapp",
  },
  {
    value: 107,
    key: "Blaster",
  },
  {
    value: 76,
    key: "AI Calls",
  },
  {
    value: 23,
    key: "Dialers",
  },
  {
    value: 6,
    key: "RBI Calls",
  },
  {
    value: 3,
    key: "SMS",
  },
]

// TODO: change icon image
export const CUSTOMER_DETAILS_DATA = [
  {
    imageSrc: HANDSHAKE_IMG,
    amount: 12314,
    title: "Total Customers",
  },
  {
    imageSrc: HAND_IMG,
    amount: 12314,
    title: "Total Amount Promised by Customer",
  },
  {
    imageSrc: HANDSHAKE_IMG,
    amount: 12314,
    title: "Total Customers Connected",
  },
  {
    imageSrc: HAND_IMG,
    amount: 12314,
    title: "Total Amount Collected from Customer",
  },
]

export const PAYMENT_DETAILS_DATA = [
  {
    imageSrc: READY_PAY_IMG,
    link: "/ready-to-pay",
    textColor: "#1D3261",
    color: "#E5FEF0",
    amount: 120,
    title: "Ready to Pay",
  },
  {
    imageSrc: REFUSED_IMG,
    link: "",
    textColor: "#1D3261",
    color: "#FFEDED",
    amount: 92,
    title: "Refused to Pay",
  },
  {
    imageSrc: PAID_IMG,
    link: "",
    textColor: "#02951A",
    color: "#E4F8F9",
    amount: 6,
    title: "Already Pay",
  },
  {
    imageSrc: WRONG_NUMBER_IMG,
    link: "",
    textColor: "#EC3939",
    color: "#E6EAFF",
    amount: 3,
    title: "Wrong Number",
  },
  {
    imageSrc: BM_IMG,
    amount: 6,
    link: "",
    textColor: "#02951A",
    color: "#FAFEE5",
    title: "BM Allocation",
  },
]

export const HEADER_MENU_ITEMS = [
  {
    key: "search",
    imageSrc: SEARCH_IMG,
  },
  {
    key: "settings",
    imageSrc: SETTINGS_IMG,
  },
  {
    key: "contact",
    imageSrc: CONTACT_IMG,
  },
];

export const FEATURES_DATA = [
  {
    name: "Whatsapp Message",
    imgSrc: WHATSAPP_IMG
  },
  {
    name: "AI Calling",
    imgSrc: AI_CALLING_IMG
  },
  {
    name: "Blaster Calling",
    imgSrc: BLASTER_IMG
  },
  {
    name: "IVR Calling",
    imgSrc: IVR_IMG
  },
];

export const STATUS_IDS={
  PENDING:"pending",
  REJECTED:"rejected",
  SUCCESS:"success",
};

export const RECENT_ENGAGEMENT_APPS_DATA = [
  {
    name: "Whatsapp Message",
    imgSrc: WHATSAPP_IMG,
    status: STATUS_IDS.PENDING,
  },
  {
    name: "AI Calling",
    imgSrc: AI_CALLING_IMG,
    status:STATUS_IDS.REJECTED,
  },
  {
    name: "Blaster Calling",
    imgSrc: BLASTER_IMG,
    status: STATUS_IDS.SUCCESS,
  },
  {
    name: "IVR Calling",
    imgSrc: IVR_IMG,
    status: STATUS_IDS.REJECTED,
  },
  {
    name: "Whatsapp Message",
    imgSrc: WHATSAPP_IMG,
    status: STATUS_IDS.PENDING
  },
]