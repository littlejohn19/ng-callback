(function ()
{
    'use strict';

    function ngCall()
    {
        function link(scope, element, attrs)
        {
            scope.callback(function (data)
            {
                console.log(data);
            });
        }

        return {
            restrict: 'E',
            scope: {
                callback: '='
            },
            bindToController: true,
            link: link
        };
    }

    angular.module('ngCallback').directive('ngCall', [ngCall]);
})();
