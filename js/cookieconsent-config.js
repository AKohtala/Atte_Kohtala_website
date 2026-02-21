import '/js/cookieconsent.umd.js';

// Enable dark mode
// document.documentElement.classList.add('cc--darkmode');

window.CookieConsent = CookieConsent;

CookieConsent.run({
    guiOptions: {
        consentModal: {
            layout: "box",
            position: "bottom left",
            equalWeightButtons: true,
            flipButtons: false
        },
        preferencesModal: {
            layout: "box",
            position: "right",
            equalWeightButtons: true,
            flipButtons: false
        }
    },
    categories: {
        necessary: {
            enabled: true,
            readOnly: true
        },
        analytics: {
            enabled: false,
            autoClear: {
                cookies: [
                    {
                        name: /^_ga/,
                    },
                    {
                        name: '_gid',
                    }
                ]
            },
        }
    },
    language: {
        default: "fi",
        translations: {
            fi: {
                consentModal: {
                    title: "Käytämme evästeitä",
                    description: "Käytämme evästeitä parantaaksemme käyttökokemustasi ja analysoidaksemme sivuston liikennettä.",
                    closeIconLabel: "",
                    acceptAllBtn: "Hyväksy kaikki",
                    acceptNecessaryBtn: "Vain välttämättömät",
                    showPreferencesBtn: "Hallitse asetuksia",
                    footer: "<a href=\"/tietosuojaseloste.html\">Tietosuojaseloste</a>"
                },
                preferencesModal: {
                    title: "Evästeasetukset",
                    closeIconLabel: "Sulje",
                    acceptAllBtn: "Hyväksy kaikki",
                    acceptNecessaryBtn: "Vain välttämättömät",
                    savePreferencesBtn: "Tallenna asetukset",
                    serviceCounterLabel: "",
                    sections: [
                        {
                            title: "Välttämättömät evästeet <span class=\"pm__badge\">Always Enabled</span>",
                            description: "Vain ehdottomasti välttämättömät evästeet.",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Analytiikka",
                            description: "Käytämme Google Analytics -palvelua.",
                            linkedCategory: "analytics"
                        },
                        {
                            title: "Lisätietoa",
                            description: "Jos sinulla on kysyttävää evästeitä koskevasta käytännöstämme, <a class=\"cc__link\" href=\"mailto:akohtalacontact@gmail.com\">ota yhteyttä</a>."
                        }
                    ]
                }
            },
            en: {
                consentModal: {
                    title: "Cookie Preferences",
                    description: "We use cookies to improve your experience and analyze site traffic.",
                    closeIconLabel: "",
                    acceptAllBtn: "Accept all",
                    acceptNecessaryBtn: "Reject all",
                    showPreferencesBtn: "Manage",
                    footer: "<a href=\"/en/privacypolicy\">Privacy Policy</a>"
                },
                preferencesModal: {
                    title: "Manage Cookies",
                    closeIconLabel: "Close",
                    acceptAllBtn: "Accept all",
                    acceptNecessaryBtn: "Reject all",
                    savePreferencesBtn: "Save preferences",
                    serviceCounterLabel: "",
                    sections: [
                        {
                            title: "Essential <span class=\"pm__badge\">Always Enabled</span>",
                            description: "Only strictly necessary cookies.",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Analytics",
                            description: "We use Google Analytics.",
                            linkedCategory: "analytics"
                        },
                        {
                            title: "More information",
                            description: "For any query in relation to my policy on cookies and your choices, please <a class=\"cc__link\" href=\"mailto:akohtalacontact@gmail.com\">contact me</a>."
                        }
                    ]
                }
            }
        },
        autoDetect: "browser"
    }
});