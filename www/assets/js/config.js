

waldayu.transducers["gitksan_compare"] = (function() {
    var correspondences = {'M': " 'm", 'J': " 'j", 'K': " 'k"};
    var keys = ['M', 'J', 'K'];
    var regex = new RegExp("(" + keys.join('|') + ")", 'g');
    return function(str) {
        return str.replace(regex, function(a,b) {
            return correspondences[a];
        });
    };
})();var config = {
    "L1": {
        "name": "Gitksan",
        "underlying": "",
        "compare": "gitksan_compare",
        "lettersInLanguage" : ['a', 'aa', 'i', 'ii', 'u', 'uu', 'e', 'ee', 'o', 'oo', 'ka', 'ga', 'ki', 'gi', 'kja', 'gja', 'ku', 'gu', 'ke', 'ge', 'ko', 'go', 'sa', 'za', 'si', 'zi', 'sja', 'zja', 'su', 'zu', 'sju', 'zju', 'se', 'ze', 'so', 'zo', 'ta', 'da', 'ci', 'tsu', 'te', 'de', 'to', 'do', 'ti', 'di', 'tu', 'du', 'na', 'ni', 'nja', 'nu', 'nju', 'ne', 'no', 'njo', 'ha', 'ba', 'hi', 'bi', 'hja', 'bja', 'hju', 'bju', 'hjo', 'bjo', 'fu', 'bu', 'he', 'be', 'ho', 'bo', 'fa', 'ma', "'ma", 'mi', 'mja', "'mja", 'mju', 'mjo', 'mu', "'mu", 'me', "'me", 'mo', "'mo", 'ja', "'ja", 'ji', "'ji", 'ju', "'ju", 'je', "'je", 'jo', "'jo", 'ra', 'ri', 'rja', 'rju', 'rjo', 'ru', 're', 'ro', 'wa', 'wu', 'wo', "'wa", "'wu", "'wo", 'N']
    },
    "L2": {
        "name": "English",
        "underlying": "",
        "compare": ""
    }
};

/* Search Variables */
var l1_weights_config = {'underlying_form': 0.1, 'compare_form': 1.0};

var l1_thresholds_config = {'partial': 1.0, 'other': 4.0, 'exact': 0.0};

var l2_weights_config = {'definition': 1.0};

var l2_thresholds_config = {'partial': 1.9, 'other': 1000.0, 'exact': 0.9};
