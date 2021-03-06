'use strict';

const schemesList = [
    '自然码',
    '微软双拼',
    '搜狗双拼',
    '小鹤双拼',
    '智能ABC',
    '拼音加加',
    '紫光双拼',
    '大牛双拼'
];
const getSchemesById = {
    0: 'zirjma',
    1: 'wzrrudpn',
    2: 'sbgbudpn',
    3: 'xcheudpn',
    4: 'vingabc',
    5: 'pnynjwjw',
    6: 'zigdudpn',
    7: 'danqudpn'
};
const schemes = {
    'zirjma': {
        'ugmu': {
            'b': 'b',
            'c': 'c',
            'd': 'd',
            'f': 'f',
            'g': 'g',
            'h': 'h',
            'j': 'j',
            'k': 'k',
            'l': 'l',
            'm': 'm',
            'n': 'n',
            'p': 'p',
            'q': 'q',
            'r': 'r',
            's': 's',
            't': 't',
            'w': 'w',
            'x': 'x',
            'y': 'y',
            'z': 'z',
            'ch': 'i',
            'sh': 'u',
            'zh': 'v'
        },
        'ypmu': {
            'a': 'a',
            'ai': 'l',
            'an': 'j',
            'ang': 'h',
            'ao': 'k',
            'e': 'e',
            'ei': 'z',
            'en': 'f',
            'eng': 'g',
            'i': 'i',
            'ia': 'w',
            'ian': 'm',
            'iang': 'd',
            'iao': 'c',
            'ie': 'x',
            'iong': 's',
            'in': 'n',
            'ing': 'y',
            'iu': 'q',
            'o': 'o',
            'ong': 's',
            'ou': 'b',
            'u': 'u',
            'ua': 'w',
            'uai': 'y',
            'uan': 'r',
            'uang': 'd',
            'ue': 't',
            'ui': 'v',
            'un': 'p',
            'uo': 'o',
            'v': 'v',
            've': 't'
        },
        'teuu': {
            'a': 'aa',
            'ai': 'ai',
            'an': 'an',
            'ang': 'ah',
            'ao': 'ao',
            'e': 'ee',
            'ei': 'ei',
            'en': 'en',
            'eng': 'eg',
            'er': 'er',
            'o': 'oo',
            'ou': 'ou'
        }
    },
    'wzrrudpn': {
        'ugmu': {
            'b': 'b',
            'c': 'c',
            'd': 'd',
            'f': 'f',
            'g': 'g',
            'h': 'h',
            'j': 'j',
            'k': 'k',
            'l': 'l',
            'm': 'm',
            'n': 'n',
            'p': 'p',
            'q': 'q',
            'r': 'r',
            's': 's',
            't': 't',
            'w': 'w',
            'x': 'x',
            'y': 'y',
            'z': 'z',
            'ch': 'i',
            'sh': 'u',
            'zh': 'v'
        },
        'ypmu': {
            'a': 'a',
            'ai': 'l',
            'an': 'j',
            'ang': 'h',
            'ao': 'k',
            'e': 'e',
            'ei': 'z',
            'en': 'f',
            'eng': 'g',
            'i': 'i',
            'ia': 'w',
            'ian': 'm',
            'iang': 'd',
            'iao': 'c',
            'ie': 'x',
            'iong': 's',
            'in': 'n',
            'ing': ';',
            'iu': 'q',
            'o': 'o',
            'ong': 's',
            'ou': 'b',
            'u': 'u',
            'ua': 'w',
            'uai': 'y',
            'uan': 'r',
            'uang': 'd',
            'ue': ['t', 'v'],
            'ui': 'v',
            'un': 'p',
            'uo': 'o',
            'v': 'y',
            've': 't'
        },
        'teuu': {
            'a': 'oa',
            'ai': 'ol',
            'an': 'oj',
            'ang': 'oh',
            'ao': 'ok',
            'e': 'oe',
            'ei': 'oz',
            'en': 'of',
            'eng': 'og',
            'er': 'or',
            'o': 'oo',
            'ou': 'ob'
        }
    },
    'sbgbudpn': {
        'ugmu': {
            'b': 'b',
            'c': 'c',
            'd': 'd',
            'f': 'f',
            'g': 'g',
            'h': 'h',
            'j': 'j',
            'k': 'k',
            'l': 'l',
            'm': 'm',
            'n': 'n',
            'p': 'p',
            'q': 'q',
            'r': 'r',
            's': 's',
            't': 't',
            'w': 'w',
            'x': 'x',
            'y': 'y',
            'z': 'z',
            'ch': 'i',
            'sh': 'u',
            'zh': 'v'
        },
        'ypmu': {
            'a': 'a',
            'ai': 'l',
            'an': 'j',
            'ang': 'h',
            'ao': 'k',
            'e': 'e',
            'ei': 'z',
            'en': 'f',
            'eng': 'g',
            'i': 'i',
            'ia': 'w',
            'ian': 'm',
            'iang': 'd',
            'iao': 'c',
            'ie': 'x',
            'iong': 's',
            'in': 'n',
            'ing': ';',
            'iu': 'q',
            'o': 'o',
            'ong': 's',
            'ou': 'b',
            'u': 'u',
            'ua': 'w',
            'uai': 'y',
            'uan': 'r',
            'uang': 'd',
            'ue': 't',
            'ui': 'v',
            'un': 'p',
            'uo': 'o',
            'v': 'y',
            've': 't'
        },
        'teuu': {
            'a': 'oa',
            'ai': 'ol',
            'an': 'oj',
            'ang': 'oh',
            'ao': 'ok',
            'e': 'oe',
            'ei': 'oz',
            'en': 'of',
            'eng': 'og',
            'er': 'or',
            'o': 'oo',
            'ou': 'ob'
        }
    },
    'xcheudpn': {
        'ugmu': {
            'b': 'b',
            'c': 'c',
            'd': 'd',
            'f': 'f',
            'g': 'g',
            'h': 'h',
            'j': 'j',
            'k': 'k',
            'l': 'l',
            'm': 'm',
            'n': 'n',
            'p': 'p',
            'q': 'q',
            'r': 'r',
            's': 's',
            't': 't',
            'w': 'w',
            'x': 'x',
            'y': 'y',
            'z': 'z',
            'ch': 'i',
            'sh': 'u',
            'zh': 'v'
        },
        'ypmu': {
            'a': 'a',
            'ai': 'd',
            'an': 'j',
            'ang': 'h',
            'ao': 'c',
            'e': 'e',
            'ei': 'w',
            'en': 'f',
            'eng': 'g',
            'i': 'i',
            'ia': 'x',
            'ian': 'm',
            'iang': 'l',
            'iao': 'n',
            'ie': 'p',
            'iong': 's',
            'in': 'b',
            'ing': 'k',
            'iu': 'q',
            'o': 'o',
            'ong': 's',
            'ou': 'z',
            'u': 'u',
            'ua': 'x',
            'uai': 'k',
            'uan': 'r',
            'uang': 'l',
            'ue': 't',
            'ui': 'v',
            'un': 'y',
            'uo': 'o',
            'v': 'v',
            've': 't'
        },
        'teuu': {
            'a': 'aa',
            'ai': 'ai',
            'an': 'an',
            'ang': 'ah',
            'ao': 'ao',
            'e': 'ee',
            'ei': 'ei',
            'en': 'en',
            'eng': 'eg',
            'er': 'er',
            'o': 'oo',
            'ou': 'ou'
        }
    },
    'vingabc': {
        'ugmu': {
            'b': 'b',
            'c': 'c',
            'd': 'd',
            'f': 'f',
            'g': 'g',
            'h': 'h',
            'j': 'j',
            'k': 'k',
            'l': 'l',
            'm': 'm',
            'n': 'n',
            'p': 'p',
            'q': 'q',
            'r': 'r',
            's': 's',
            't': 't',
            'w': 'w',
            'x': 'x',
            'y': 'y',
            'z': 'z',
            'ch': 'e',
            'sh': 'v',
            'zh': 'a'
        },
        'ypmu': {
            'a': 'a',
            'ai': 'l',
            'an': 'j',
            'ang': 'h',
            'ao': 'k',
            'e': 'e',
            'ei': 'q',
            'en': 'f',
            'eng': 'g',
            'i': 'i',
            'ia': 'd',
            'ian': 'w',
            'iang': 't',
            'iao': 'z',
            'ie': 'x',
            'iong': 's',
            'in': 'c',
            'ing': 'y',
            'iu': 'r',
            'o': 'o',
            'ong': 's',
            'ou': 'b',
            'u': 'u',
            'ua': 'd',
            'uai': 'c',
            'uan': 'p',
            'uang': 't',
            'ue': ['m', 'v'],
            'ui': 'm',
            'un': 'n',
            'uo': 'o',
            'v': 'v',
            've': 'v'
        },
        'teuu': {
            'a': 'oa',
            'ai': 'ol',
            'an': 'oj',
            'ang': 'oh',
            'ao': 'ok',
            'e': 'oe',
            'ei': 'oq',
            'en': 'of',
            'eng': 'og',
            'er': 'or',
            'o': 'oo',
            'ou': 'ob'
        }
    },
    'pnynjwjw': {
        'ugmu': {
            'b': 'b',
            'c': 'c',
            'd': 'd',
            'f': 'f',
            'g': 'g',
            'h': 'h',
            'j': 'j',
            'k': 'k',
            'l': 'l',
            'm': 'm',
            'n': 'n',
            'p': 'p',
            'q': 'q',
            'r': 'r',
            's': 's',
            't': 't',
            'w': 'w',
            'x': 'x',
            'y': 'y',
            'z': 'z',
            'ch': 'u',
            'sh': 'i',
            'zh': 'v'
        },
        'ypmu': {
            'a': 'a',
            'ai': 's',
            'an': 'f',
            'ang': 'g',
            'ao': 'd',
            'e': 'e',
            'ei': 'w',
            'en': 'r',
            'eng': 't',
            'i': 'i',
            'ia': 'b',
            'ian': 'j',
            'iang': 'h',
            'iao': 'k',
            'ie': 'm',
            'iong': 'y',
            'in': 'l',
            'ing': 'q',
            'iu': 'n',
            'o': 'o',
            'ong': 'y',
            'ou': 'p',
            'u': 'u',
            'ua': 'b',
            'uai': 'x',
            'uan': 'c',
            'uang': 'h',
            'ue': 'x',
            'ui': 'v',
            'un': 'z',
            'uo': 'o',
            'v': 'v',
            've': 'x'
        },
        'teuu': {
            'a': 'aa',
            'ai': 'as',
            'an': 'af',
            'ang': 'ag',
            'ao': 'ad',
            'e': 'ee',
            'ei': 'ew',
            'en': 'er',
            'eng': 'et',
            'er': 'eq',
            'o': 'oo',
            'ou': 'op'
        }
    },
    'zigdudpn': {
        'ugmu': {
            'b': 'b',
            'c': 'c',
            'd': 'd',
            'f': 'f',
            'g': 'g',
            'h': 'h',
            'j': 'j',
            'k': 'k',
            'l': 'l',
            'm': 'm',
            'n': 'n',
            'p': 'p',
            'q': 'q',
            'r': 'r',
            's': 's',
            't': 't',
            'w': 'w',
            'x': 'x',
            'y': 'y',
            'z': 'z',
            'ch': 'a',
            'sh': 'i',
            'zh': 'u'
        },
        'ypmu': {
            'a': 'a',
            'ai': 'p',
            'an': 'r',
            'ang': 's',
            'ao': 'q',
            'e': 'e',
            'ei': 'k',
            'en': 'w',
            'eng': 't',
            'i': 'i',
            'ia': 'x',
            'ian': 'f',
            'iang': 'g',
            'iao': 'b',
            'ie': 'd',
            'iong': 'h',
            'in': 'y',
            'ing': ';',
            'iu': 'j',
            'o': 'o',
            'ong': 'h',
            'ou': 'z',
            'u': 'u',
            'ua': 'x',
            'uai': 'y',
            'uan': 'l',
            'uang': 'g',
            'ue': 'n',
            'ui': 'n',
            'un': 'm',
            'uo': 'o',
            'v': 'v',
            've': 'n'
        },
        'teuu': {
            'a': 'oa',
            'ai': 'op',
            'an': 'or',
            'ang': 'os',
            'ao': 'oq',
            'e': 'oe',
            'ei': 'ok',
            'en': 'ow',
            'eng': 'ot',
            'er': 'oj',
            'o': 'oo',
            'ou': 'oz'
        }
    },
    'danqudpn': {
        'ugmu': {
            'b': 'b',
            'c': 'c',
            'd': 'd',
            'f': 'f',
            'g': 'g',
            'h': 'h',
            'j': 'j',
            'k': 'k',
            'l': 'l',
            'm': 'm',
            'n': 'n',
            'p': 'p',
            'q': 'q',
            'r': 'r',
            's': 's',
            't': 't',
            'w': 'w',
            'x': 'x',
            'y': 'y',
            'z': 'z',
            'zh': ['a', 'o'],
            'ch': 'i',
            'sh': ['u', 'v']
        },
        'ypmu': {
            'a': 'a',
            'ai': 'h',
            'an': 'd',
            'ang': 'f',
            'ao': 's',
            'e': 'e',
            'ei': 'w',
            'en': 'k',
            'eng': 'j',
            'i': 'i',
            'ia': 'k',
            'ian': ['c', 'q'],
            'iang': 'n',
            'iao': 'm',
            'ie': 'p',
            'iong': 'l',
            'in': 'b',
            'ing': 'g',
            'iu': 't',
            'o': 'o',
            'ong': 'l',
            'ou': 'r',
            'u': 'u',
            'ua': 'q',
            'uai': 'g',
            'uan': ['j', 'z'],
            'uang': 'x',
            'ue': ['h', 'x'],
            'ui': ['n', 'v'],
            'un': ['w', 'y'],
            'uo': 'o',
            'v': 'v',
            've': 'x'
        },
        'teuu': {
            'a': 'ea',
            'ai': 'eh',
            'an': 'ed',
            'ang': 'ef',
            'ao': 'es',
            'e': 'ee',
            'ei': 'ew',
            'en': 'ek',
            'eng': 'ej',
            'er': 'eu',
            'o': 'eo',
            'ou': 'er'
        }
    }
};