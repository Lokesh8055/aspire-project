import HomeLogo from "../../assets/home.svg";
import CreditLogo from "../../assets/credit.svg";
import PaymentLogo from "../../assets/payments.svg";
import CardLogo from "../../assets/card.svg";
import SettingsLogo from "../../assets/profile.svg";

// Mobile specific icons
import HomeMobileLogo from "../../assets/mobile/home.svg";
import CreditMobileLogo from "../../assets/mobile/credit.svg";
import PaymentMobileLogo from "../../assets/mobile/payments.svg";
import CardMobileLogo from "../../assets/mobile/card.svg";
import SettingsMobileLogo from "../../assets/mobile/profile.svg";

export const NAVIGATION_CONST = {
  DESCRIPTION:
    "Trusted way of banking for 3,000+ SMEs and startups in Singapore",
};

export const NAV_LINKS = [
  { 
    path: "/home", 
    label: "Home", 
    icon: HomeLogo, 
    mobileIcon: HomeMobileLogo
  },
  {
    path: "/cards",
    label: "Cards",
    icon: CardLogo,
    mobileIcon: CardMobileLogo
  },
  {
    path: "/payments",
    label: "Payments",
    icon: PaymentLogo,
    mobileIcon: PaymentMobileLogo
  },
  {
    path: "/credit",
    label: "Credit",
    icon: CreditLogo,
    mobileIcon: CreditMobileLogo
  },
  {
    path: "/settings",
    label: "Settings",
    icon: SettingsLogo,
    mobileIcon: SettingsMobileLogo
  },
];
