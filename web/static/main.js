require.config({
    baseUrl: '/static',
    paths: {
        jquery: 'thirdparty/jquery/dist/jquery.min'
    },
    shim: {
    }
});

require(['jquery'], function ($) {
    // Do amazing things
    console.log('Hey there');
});
