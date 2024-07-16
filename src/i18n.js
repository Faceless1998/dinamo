import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    // translation: {
    //   Dila: "Dila Gori",
    //   "Torpedo Kutaisi": "Torpedo Kutaisi",
    //   Saburtalo: "Iberia 1999",
    //   "Dinamo Batumi": "Dinamo Batumi",
    //   "Dinamo Tbilisi": "Dinamo Tbilisi",
    //   "Kolkheti Poti": "Kolkheti 1913",
    //   Samgurali: "Samgurali",
    //   Gagra: "Gagra",
    //   Telavi: "Telavi",
    //   Samtredia: "Samtredia",
    // },
    translation: {
      Dila: "დილა",
      "Torpedo Kutaisi": "ტორპედო",
      Saburtalo: "იბერია 1999",
      "Dinamo Batumi": "დინამო ბათუმი",
      "Dinamo Tbilisi": "დინამო თბილისი",
      "Kolkheti Poti": "კოლხეთი 1913",
      Samgurali: "სამგურალი",
      Gagra: "გაგრა",
      Telavi: "თელავი",
      Samtredia: "სამტრედია",
      Team: "გუნდი",
      			
      Played: "თამაში",
      Won: "მოგება",
      Draw: "ფრე",
      Lost: "წაგება",
      Points: "ქულა",  
    },
  },
  ge: {
    translation: {
      Dila: "დილა",
      "Torpedo Kutaisi": "ტორპედო",
      Saburtalo: "იბერია 1999",
      "Dinamo Batumi": "დინამო ბათუმი",
      "Dinamo Tbilisi": "დინამო თბილისი",
      "Kolkheti Poti": "კოლხეთი 1913",
      Samgurali: "სამგურალი",
      Gagra: "გაგრა",
      Telavi: "თელავი",
      Samtredia: "სამტრედია",
    },
  },
};

i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem("lang") || "ge", // Set default language to 'ge' if none is stored
    interpolation: {
      escapeValue: false, // React already safely escapes strings
    },
  });

export default i18n;
