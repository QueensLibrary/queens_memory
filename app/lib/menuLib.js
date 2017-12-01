var menuItemsArray = [
    {   
        index : 0,
        disabled : true, 
        title : "App Upload", 
        icon : '/images/menu/45x45icons/45x45-qpl-icon.png',
        unauthenticated: true,
        authenticated: true
    },
    {   
        id : '__LND',
        index : 1, 
        title : "Upload SCreen?",
        landing : 'UploadScreen', 
        icon : '/images/menu/45x45icons/45x45-home-icon.png',
        unauthenticated: true,
        authenticated: true
    },
    {   
        id : '__LOG',
        index : 2, 
        title : "Formats",
        landing : 'acceptedFormats', 
        icon : '/images/menu/45x45icons/45x45-login-icon.png',
        unauthenticated: true,
        authenticated: false
    },
    {   id : "__MYA", 
        index : 3, 
        title : "FAQ",
        // landing : 'myAccount', 
        icon : '/images/menu/45x45icons/45x45-account-icon.png',
        unauthenticated: false,
        authenticated: true
    },  
    // {   id : "__EBO", /** Including ebooks, but @since 1.0.18, it is just a list of URLs to ebook vendor partners. */
        // index : 5, 
        // title : "EBOOKS & MORE",
        // landing : 'ebooks', 
        // icon : '/images/menu/45x45icons/45x45-ebooks-icon.png',
        // unauthenticated: false,
        // authenticated: true
    // },  
    // { 
        // id : "__EVE", 
        // index : 6,
        // landing : 'events',
        // title : "PROGRAMS", 
        // icon : '/images/menu/45x45icons/45x45-events-icon.png',
        // unauthenticated: true,
        // authenticated: true
    // },
    // { 
        // id : '__SEA',
        // index : 7,
        // landing : 'search',
        // title : "SEARCH", 
        // icon : '/images/menu/45x45icons/45x45-search-icon.png',
        // unauthenticated: true,
        // authenticated: true
    // },
    // { 
        // id : '__LOC',
        // index : 8,
        // landing : 'locationsList',
        // title : "LOCATIONS", 
        // icon : '/images/menu/45x45icons/45x45-location-icon.png',
        // unauthenticated: true,
        // authenticated: true
    // },
    // { 
        // id : '__HEL',
        // index : 9,
        // landing : 'help',
        // title : "HELP", 
        // icon : '/images/menu/45x45icons/45x45-help-icon.png',
        // unauthenticated: true,
        // authenticated: true
    // },
    // { 
        // id : '__DON',
        // index : 10,
        // landing : 'donate',
        // title : "DONATE", 
        // icon : '/images/menu/45x45icons/45x45-donate-icon.png',
        // unauthenticated: true,
        // authenticated: true
    // },
    // { 
        // id : '__CON',
        // index : 11,
        // landing : 'contactUs',
        // title : "CONTACT US", 
        // icon : '/images/menu/45x45icons/45x45-contact-icon.png',
        // unauthenticated: true,
        // authenticated: true
    // },
    { 
        id : '__STC',
        index : 4,
        landing : 'stayConnected',
        title : "STAY CONNECTED", 
        icon : '/images/menu/45x45icons/45x45-connect-icon.png',
        unauthenticated: true,
        authenticated: true
    },
    { 
        id : '__TER',
        index : 5,
        // landing : 'terms',
        title : "Privacy & TERMS", 
        icon : '/images/menu/45x45icons/45x45-terms-icon.png',
        unauthenticated: true,
        authenticated: true
    },
    // {   
        // id : '__LOG',
        // index : 14, 
        // title : "LOGOUT",
        // landing : 'logout', 
        // icon : '/images/menu/45x45icons/45x45-logout-icon.png',
        // unauthenticated: false,
        // authenticated: true
    // },
];

module.exports = {
    menuItemsArray : menuItemsArray
};