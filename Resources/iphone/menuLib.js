var menuItemsArray = [{
    index: 0,
    disabled: true,
    title: "App Upload",
    icon: '/images/menu/45x45icons/45x45-qpl-icon.png',
    unauthenticated: true,
    authenticated: true
}, {
    id: '__LND',
    index: 1,
    title: "Upload SCreen?",
    landing: 'UploadScreen',
    icon: '/images/menu/45x45icons/45x45-home-icon.png',
    unauthenticated: true,
    authenticated: true
}, {
    id: '__LOG',
    index: 2,
    title: "Formats",
    landing: 'acceptedFormats',
    icon: '/images/menu/45x45icons/45x45-login-icon.png',
    unauthenticated: true,
    authenticated: false
}, { id: "__MYA",
    index: 3,
    title: "FAQ",

    icon: '/images/menu/45x45icons/45x45-account-icon.png',
    unauthenticated: false,
    authenticated: true
}, {
    id: '__STC',
    index: 4,
    landing: 'stayConnected',
    title: "STAY CONNECTED",
    icon: '/images/menu/45x45icons/45x45-connect-icon.png',
    unauthenticated: true,
    authenticated: true
}, {
    id: '__TER',
    index: 5,

    title: "Privacy & TERMS",
    icon: '/images/menu/45x45icons/45x45-terms-icon.png',
    unauthenticated: true,
    authenticated: true
}];

module.exports = {
    menuItemsArray: menuItemsArray
};