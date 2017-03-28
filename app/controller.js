(function ()
{
    'use strict';

    function NgCallbackCtrl($http)
    {
        var ctrl = this;

        var scriptUpdateHandler;

        this.onScriptsUpdate = function (callback)
        {
            scriptUpdateHandler = callback;
        };

        this.up = function (scripts)
        {
            scriptUpdateHandler(scripts);
        };

        function init()
        {
             $http.get('https://api.spotify.com/v1/albums/0sNOF9WDwhWunNAHPD3Baj').then(function (data)
             {
                 console.log(data);
             });
        }
        init();

    }

    angular.module('ngCallback').controller('NgCallbackCtrl', ['$http', NgCallbackCtrl]);

})();
