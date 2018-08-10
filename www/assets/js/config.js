

waldayu.transducers["okinoerabu_compare"] = (function() {
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
        "name": "Okinoerabu",
        "underlying": "",
        "compare": "okinoerabu_compare",
        "lettersInLanguage" : ['あ', 'ああ', 'い', 'いい', 'う', 'うう', 'え', 'ええ', 'お', 'おお', 'か', 'き', 'く', 'け', 'こ', 'さ', 'し', 'す', 'せ', 'そ', 'た', 'ち', 'つ', 'て', 'と', 'てぃ', 'とぅ', 'な', 'に', 'ぬ', 'ね', 'の', "'な", '‘に', '‘ぬ', '‘ね', '‘の', 'は', 'ひ', 'ふ', 'へ', 'ほ', 'ふぁ', 'ま', 'み', 'む', 'め', 'も', '‘ま', '‘み', ",'む", '‘め', '‘も', 'や', 'い゛', 'ゆ', 'いぇ', 'よ', "'や", "'い゛", '‘ゆ', '‘いぇ', '‘よ', 'ら', 'り', 'る', 'れ', 'ろ', 'わ', 'をぅ', 'を', '‘わ', '‘をぅ', '‘を', 'ん']
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
