angular.module('app.filters.translate', ['ngTranslate'])
    .filter('translate', ['$translate', function ($translate) {
        return function (key) {
            return $translate[key] || key;
        };
    }]);

angular.module('ngTranslate', [], ['$provide', function ($provide) {
    $provide.value('$translate', {
        "Query": "Fyrirspurn",
        "query": "fyrirspurn",
        "No options here": "Ekkert að velja hér",
        "About the": "Um",
        "Close": "Loka",
        "Legend value": "Gildi á haus"
    });
}]);
