module.exports = {
    purge: [
        './**/templates/*.phtml',
        './**/templates/**/*.phtml',
        './**/templates/**/**/*.phtml'
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {},
    plugins: [],
    prefix: 'tw-',
    important: true,
}
