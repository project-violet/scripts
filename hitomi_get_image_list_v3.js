// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

const domain2 = 'gold-usergeneratedcontent.net';

function create_download_url(id) {
  return "https://ltn.gold-usergeneratedcontent.net/galleries/" + id + ".js";
}

function gg_s(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); }

var gg = {};
var window = {};
var document = {};
var name = {};
var location = {};
var customElements = {};
var history = {};
var locationbar = {};
var menubar = {};
var personalbar = {};
var scrollbars = {};
var statusbar = {};
var toolbar = {};
var status = {};
var closed = {};
var frames = {};
var length = {};
var top = {};
var opener = {};
var parent = {};
var frameElement = {};
var navigator = {};
var origin = {};
var external = {};
var screen = {};
var innerWidth = {};
var innerHeight = {};
var scrollX = {};
var pageXOffset = {};
var scrollY = {};
var pageYOffset = {};
var visualViewport = {};
var screenX = {};
var screenY = {};
var outerWidth = {};
var outerHeight = {};
var devicePixelRatio = {};
var clientInformation = {};
var screenLeft = {};
var screenTop = {};
var defaultStatus = {};
var defaultstatus = {};
var styleMedia = {};
var onsearch = {};
var isSecureContext = {};
var performance = {};
var onappinstalled = {};
var onbeforeinstallprompt = {};
var crypto = {};
var indexedDB = {};
var webkitStorageInfo = {};
var sessionStorage = {};
var localStorage = {};
var onbeforexrselect = {};
var onabort = {};
var onblur = {};
var oncancel = {};
var oncanplay = {};
var oncanplaythrough = {};
var onchange = {};
var onclick = {};
var onclose = {};
var oncontextmenu = {};
var oncuechange = {};
var ondblclick = {};
var ondrag = {};
var ondragend = {};
var ondragenter = {};
var ondragleave = {};
var ondragover = {};
var ondragstart = {};
var ondrop = {};
var ondurationchange = {};
var onemptied = {};
var onended = {};
var onerror = {};
var onfocus = {};
var onformdata = {};
var oninput = {};
var oninvalid = {};
var onkeydown = {};
var onkeypress = {};
var onkeyup = {};
var onload = {};
var onloadeddata = {};
var onloadedmetadata = {};
var onloadstart = {};
var onmousedown = {};
var onmouseenter = {};
var onmouseleave = {};
var onmousemove = {};
var onmouseout = {};
var onmouseover = {};
var onmouseup = {};
var onmousewheel = {};
var onpause = {};
var onplay = {};
var onplaying = {};
var onprogress = {};
var onratechange = {};
var onreset = {};
var onresize = {};
var onscroll = {};
var onseeked = {};
var onseeking = {};
var onselect = {};
var onstalled = {};
var onsubmit = {};
var onsuspend = {};
var ontimeupdate = {};
var ontoggle = {};
var onvolumechange = {};
var onwaiting = {};
var onwebkitanimationend = {};
var onwebkitanimationiteration = {};
var onwebkitanimationstart = {};
var onwebkittransitionend = {};
var onwheel = {};
var onauxclick = {};
var ongotpointercapture = {};
var onlostpointercapture = {};
var onpointerdown = {};
var onpointermove = {};
var onpointerup = {};
var onpointercancel = {};
var onpointerover = {};
var onpointerout = {};
var onpointerenter = {};
var onpointerleave = {};
var onselectstart = {};
var onselectionchange = {};
var onanimationend = {};
var onanimationiteration = {};
var onanimationstart = {};
var ontransitionrun = {};
var ontransitionstart = {};
var ontransitionend = {};
var ontransitioncancel = {};
var onafterprint = {};
var onbeforeprint = {};
var onbeforeunload = {};
var onhashchange = {};
var onlanguagechange = {};
var onmessage = {};
var onmessageerror = {};
var onoffline = {};
var ononline = {};
var onpagehide = {};
var onpageshow = {};
var onpopstate = {};
var onrejectionhandled = {};
var onstorage = {};
var onunhandledrejection = {};
var onunload = {};
var alert = {};
var atob = {};
var blur = {};
var btoa = {};
var cancelAnimationFrame = {};
var cancelIdleCallback = {};
var captureEvents = {};
var clearInterval = {};
var clearTimeout = {};
var close = {};
var confirm = {};
var createImageBitmap = {};
var fetch = {};
var find = {};
var focus = {};
var getComputedStyle = {};
var getSelection = {};
var matchMedia = {};
var moveBy = {};
var moveTo = {};
var open = {};
var postMessage = {};
var print = {};
var prompt = {};
var queueMicrotask = {};
var releaseEvents = {};
var reportError = {};
var requestAnimationFrame = {};
var requestIdleCallback = {};
var resizeBy = {};
var resizeTo = {};
var scroll = {};
var scrollBy = {};
var scrollTo = {};
var setInterval = {};
var setTimeout = {};
var stop = {};
var webkitCancelAnimationFrame = {};
var webkitRequestAnimationFrame = {};
var chrome = {};
var caches = {};
var cookieStore = {};
var ondevicemotion = {};
var ondeviceorientation = {};
var ondeviceorientationabsolute = {};
var showDirectoryPicker = {};
var showOpenFilePicker = {};
var showSaveFilePicker = {};
var originAgentCluster = {};
var trustedTypes = {};
var speechSynthesis = {};
var onpointerrawupdate = {};
var crossOriginIsolated = {};
var scheduler = {};
var openDatabase = {};
var webkitRequestFileSystem = {};
var webkitResolveLocalFileSystemURL = {};
var cr = {};


gg = { m: function(g) {
var o = 1;
switch (g) {
case 2177:
case 3808:
case 3819:
case 87:
case 998:
case 3322:
case 946:
case 1821:
case 1089:
case 2661:
case 1794:
case 2206:
case 2658:
case 3112:
case 1980:
case 1633:
case 3092:
case 1962:
case 2378:
case 2813:
case 2085:
case 2493:
case 2626:
case 2755:
case 2344:
case 3635:
case 73:
case 2334:
case 3767:
case 1566:
case 1482:
case 2587:
case 205:
case 356:
case 278:
case 2513:
case 3389:
case 2328:
case 2802:
case 3700:
case 1407:
case 4067:
case 463:
case 1022:
case 3530:
case 3436:
case 3830:
case 2109:
case 2118:
case 2425:
case 3540:
case 2906:
case 786:
case 3591:
case 4048:
case 33:
case 689:
case 1262:
case 3372:
case 3891:
case 2356:
case 1105:
case 1429:
case 561:
case 863:
case 1774:
case 2237:
case 744:
case 2914:
case 1819:
case 1499:
case 2247:
case 1808:
case 3521:
case 2649:
case 3794:
case 2639:
case 1748:
case 652:
case 3479:
case 3821:
case 3962:
case 2515:
case 2083:
case 2251:
case 2815:
case 3633:
case 2753:
case 2017:
case 3980:
case 3072:
case 2786:
case 1645:
case 2056:
case 3460:
case 3866:
case 30:
case 2937:
case 2696:
case 515:
case 2214:
case 618:
case 1540:
case 1652:
case 290:
case 1830:
case 1446:
case 2301:
case 3022:
case 2034:
case 1411:
case 235:
case 1103:
case 4094:
case 3262:
case 13:
case 4059:
case 2044:
case 2488:
case 983:
case 3105:
case 3392:
case 657:
case 687:
case 3571:
case 455:
case 4013:
case 2925:
case 1341:
case 1161:
case 193:
case 2406:
case 3946:
case 2500:
case 1279:
case 485:
case 1158:
case 3149:
case 3842:
case 3832:
case 717:
case 3299:
case 939:
case 1664:
case 1357:
case 758:
case 1126:
case 1282:
case 312:
case 1260:
case 2524:
case 3370:
case 2791:
case 2293:
case 1004:
case 2133:
case 2363:
case 331:
case 2708:
case 123:
case 2719:
case 580:
case 2225:
case 3320:
case 124:
case 317:
case 2874:
case 1609:
case 550:
case 3246:
case 1176:
case 574:
case 2538:
case 1207:
case 3954:
case 3031:
case 2548:
case 907:
case 2681:
case 2838:
case 3196:
case 1982:
case 3304:
case 2993:
case 101:
case 3016:
case 2605:
case 3713:
case 358:
case 3211:
case 1586:
case 2567:
case 1886:
case 3555:
case 1070:
case 3331:
case 616:
case 3279:
case 1946:
case 719:
case 3341:
case 393:
case 1697:
case 1542:
case 1299:
case 724:
case 1832:
case 1650:
case 2437:
case 3677:
case 3907:
case 723:
case 3020:
case 1254:
case 2145:
case 3357:
case 3664:
case 2135:
case 965:
case 3316:
case 1911:
case 3004:
case 3176:
case 1246:
case 885:
case 909:
case 2152:
case 117:
case 3609:
case 3979:
case 324:
case 1236:
case 855:
case 319:
case 1999:
case 2414:
case 1031:
case 56:
case 3207:
case 2594:
case 1090:
case 3715:
case 1304:
case 3853:
case 3982:
case 932:
case 3627:
case 188:
case 3480:
case 2603:
case 1057:
case 3586:
case 1787:
case 1211:
case 1713:
case 3515:
case 1378:
case 3268:
case 625:
case 2980:
case 3017:
case 3473:
case 3495:
case 3083:
case 3815:
case 3251:
case 2633:
case 528:
case 3753:
case 3786:
case 1587:
case 1334:
case 735:
case 1513:
case 3398:
case 2072:
case 20:
case 1755:
case 1813:
case 1887:
case 875:
case 767:
case 808:
case 3237:
case 2794:
case 1206:
case 2521:
case 320:
case 3649:
case 2479:
case 2759:
case 3639:
case 3028:
case 3968:
case 2262:
case 2684:
case 842:
case 3385:
case 2280:
case 3044:
case 3078:
case 2429:
case 2871:
case 2105:
case 1317:
case 1502:
case 2407:
case 169:
case 720:
case 3610:
case 1328:
case 3947:
case 1802:
case 449:
case 1425:
case 1118:
case 481:
case 367:
case 1109:
case 630:
case 1906:
case 1742:
case 4053:
case 451:
case 1251:
case 2092:
case 3378:
case 4032:
case 3887:
case 3475:
case 3085:
case 3626:
case 3755:
case 256:
case 305:
case 378:
case 1398:
case 2767:
case 3334:
case 2645:
case 570:
case 2808:
case 3177:
case 600:
case 1639:
case 3661:
case 2748:
case 851:
case 1197:
case 554:
case 2112:
case 583:
case 3206:
case 769:
case 1044:
case 1951:
case 778:
case 2891:
case 3127:
case 1034:
case 3356:
case 705:
case 2103:
case 2372:
case 961:
case 135:
case 3317:
case 3383:
case 1214:
case 1947:
case 1610:
case 1937:
case 2530:
case 2446:
case 1301:
case 3676:
case 2540:
case 838:
case 167:
case 3109:
case 2830:
case 3118:
case 3145:
case 1293:
case 1791:
case 950:
case 4021:
case 980:
case 2126:
case 2357:
case 2664:
case 3135:
case 3988:
case 2929:
case 2282:
case 2390:
case 2316:
case 548:
case 3451:
case 3771:
case 507:
case 1363:
case 3468:
case 645:
case 2004:
case 677:
case 1133:
case 2331:
case 294:
case 2158:
case 2279:
case 2341:
case 2161:
case 293:
case 1730:
case 3447:
case 827:
case 3923:
case 3063:
case 526:
case 1993:
case 2960:
case 1975:
case 3288:
case 2853:
case 539:
case 3603:
case 3973:
case 3995:
case 1065:
case 2070:
case 822:
case 3766:
case 1874:
case 3152:
case 2979:
case 224:
case 2176:
case 1719:
case 1708:
case 1574:
case 429:
case 1225:
case 806:
case 219:
case 1681:
case 1548:
case 3559:
case 2069:
case 1838:
case 740:
case 1538:
case 3721:
case 3859:
case 436:
case 897:
case 2207:
case 3594:
case 212:
case 3791:
case 1145:
case 1365:
case 2911:
case 3133:
case 96:
case 4019:
case 4008:
case 1771:
case 3363:
case 3143:
case 1273:
case 1451:
case 422:
case 2139:
case 3406:
case 532:
case 2697:
case 2946:
case 1923:
case 2532:
case 2254:
case 2842:
case 814:
case 836:
case 460:
case 497:
case 2650:
case 813:
case 3730:
case 1288:
case 2090:
case 4030:
case 3567:
case 2057:
case 258:
case 2211:
case 2855:
case 2555:
case 3065:
case 492:
case 1995:
case 3867:
case 1973:
case 3574:
case 3225:
case 2320:
case 3708:
case 1152:
case 85:
case 3874:
case 217:
case 1594:
case 427:
case 3848:
case 1859:
case 2954:
case 668:
case 1721:
case 2041:
case 3838:
case 2196:
case 2110:
case 4091:
case 1559:
case 3548:
case 3681:
case 115:
case 3959:
case 1948:
case 3156:
case 857:
case 1064:
case 1185:
case 3994:
case 2579:
case 1200:
case 3117:
case 2879:
case 1974:
case 3415:
case 2189:
case 1967:
case 2986:
case 3097:
case 2560:
case 1224:
case 2882:
case 1487:
case 2582:
case 2466:
case 1875:
case 2860:
case 3762:
case 3616:
case 4080:
case 935:
case 3259:
case 3178:
case 2807:
case 1402:
case 2507:
case 270:
case 1238:
case 3134:
case 1900:
case 441:
case 1198:
case 1525:
case 3144:
case 253:
case 852:
case 1924:
case 1669:
case 3631:
case 2081:
case 967:
case 1397:
case 2529:
case 3641:
case 2419:
case 2899:
case 3064:
case 2408:
case 3938:
case 1156:
case 3948:
case 315:
case 2854:
case 1959:
case 2599:
case 3974:
case 859:
case 1117:
case 1183:
case 3200:
case 2305:
case 2192:
case 841:
case 889:
case 89:
case 1097:
case 1873:
case 482:
case 298:
case 1128:
case 1415:
case 2955:
case 452:
case 1573:
case 2381:
case 3077:
case 3893:
case 3413:
case 3487:
case 1050:
case 1318:
case 610:
case 3238:
case 2932:
case 2706:
case 457:
case 2942:
case 487:
case 1259:
case 3248:
case 1690:
case 1616:
case 2440:
case 2846:
case 1657:
case 1144:
case 1364:
case 3274:
case 3825:
case 82:
case 2430:
case 2003:
case 1134:
case 3900:
case 2511:
case 1377:
case 3009:
case 3018:
case 3350:
case 2491:
case 2811:
case 2255:
case 50:
case 3397:
case 1631:
case 67:
case 3692:
case 1043:
case 517:
case 350:
case 4082:
case 3707:
case 1033:
case 1806:
case 2104:
case 380:
case 491:
case 373:
case 1902:
case 3837:
case 374:
case 2026:
case 2685:
case 3035:
case 16:
case 1711:
case 1213:
case 237:
case 1287:
case 1424:
case 655:
case 3568:
case 2058:
case 3729:
case 3851:
case 2061:
case 685:
case 3868:
case 4029:
case 1084:
case 1754:
case 2170:
case 2698:
case 2921:
case 1335:
case 1799:
case 1438:
case 3343:
case 3494:
case 3459:
case 3779:
case 780:
case 1987:
case 403:
case 2966:
case 404:
case 2453:
case 2795:
case 2339:
case 2773:
case 2271:
case 512:
case 833:
case 3782:
case 2580:
case 816:
case 2862:
case 1622:
case 2617:
case 2930:
case 180:
case 2683:
case 523:
case 3400:
case 2940:
case 150:
case 3043:
case 524:
case 1692:
case 2442:
case 1837:
case 202:
case 1384:
case 3736:
case 1045:
case 2656:
case 519:
case 3902:
case 2219:
case 1847:
case 3424:
case 803:
case 3287:
case 3352:
case 501:
case 434:
case 1551:
case 433:
case 1215:
case 1851:
case 239:
case 2049:
case 4054:
case 593:
case 76:
case 2230:
case 2644:
case 84:
case 2157:
case 594:
case 3474:
case 2634:
case 3165:
case 3754:
case 2240:
case 1333:
case 976:
case 1459:
case 3202:
case 1814:
case 2908:
case 1343:
case 2678:
case 1163:
case 2116:
case 4046:
case 2141:
case 2361:
case 4036:
case 3913:
case 3987:
case 2096:
case 2291:
case 2793:
case 3622:
case 1760:
case 3467:
case 1915:
case 398:
case 535:
case 3381:
case 3012:
case 4006:
case 1466:
case 2875:
case 1860:
case 1582:
case 2487:
case 728:
case 346:
case 2077:
case 2620:
case 2893:
case 1882:
case 2575:
case 2224:
case 3899:
case 2185:
case 3408:
case 1303:
case 3599:
case 1879:
case 2604:
case 986:
case 425:
case 3192:
case 590:
case 2200:
case 681:
case 649:
case 866:
case 430:
case 3511:
case 746:
case 3811:
case 3255:
case 2009:
case 2018:
case 2397:
case 1768:
case 1312:
case 1253:
case 1081:
case 2669:
case 3706:
case 1507:
case 2238:
case 170:
case 3942:
case 3663:
case 2248:
case 3536:
case 2274:
case 3440:
case 3846:
case 2027:
case 1665:
case 1747:
case 520:
case 3430:
case 3836:
case 2595:
case 1012:
case 1381:
case 466:
case 2873:
case 830:
case 4037:
case 2415:
case 2895:
case 3189:
case 3560:
case 3953:
case 2318:
case 146:
case 2327:
case 4051:
case 754:
case 2156:
case 1242:
case 1599:
case 3172:
case 783:
case 1408:
case 1554:
case 4068:
case 2994:
case 1419:
case 784:
case 642:
case 3714:
case 3579:
case 2117:
case 1491:
case 128:
case 1511:
case 3286:
case 505:
case 2631:
case 3471:
case 2888:
case 3829:
case 943:
case 3529:
case 2588:
case 608:
case 944:
case 647:
case 2259:
case 3807:
case 2690:
case 2823:
case 3005:
case 1932:
case 3507:
case 2294:
case 1430:
case 1836:
case 3747:
case 3665:
case 383:
case 2134:
case 1546:
case 353:
case 1846:
case 825:
case 384:
case 3737:
case 1536:
case 2657:
case 2424:
case 1601:
case 2352:
case 137:
case 2213:
case 326:
case 2711:
case 707:
case 3376:
case 1061:
case 3039:
case 3991:
case 65:
case 699:
case 1788:
case 1310:
case 796:
case 3683:
case 2806:
case 912:
case 4075:
case 4093:
case 1104:
case 1221:
case 445:
case 2043:
case 3940:
case 26:
case 1685:
case 1026:
case 2672:
case 2902:
case 3725:
case 3432:
case 1795:
case 472:
case 1453:
case 613:
case 1339:
case 636:
case 3358:
case 1349:
case 3131:
case 109:
case 2913:
case 917:
case 1862:
case 1580:
case 3793:
case 348:
case 726:
case 1880:
case 1486:
case 2467:
case 1562:
case 3326:
case 702:
case 3157:
case 540:
case 2799:
case 2165:
case 1170:
case 3240:
case 1698:
case 958:
case 879:
case 2438:
case 988:
case 3919:
case 2202:
case 111:
case 3678:
case 3908:
case 3266:
case 1376:
case 126:
case 697:
case 660:
case 337:
case 872:
case 3120:
case 3971:
case 3601:
case 993:
case 606:
case 1049:
case 139:
case 2868:
case 0:
case 1991:
case 3061:
case 1039:
case 576:
case 711:
case 1940:
case 2692:
case 3723:
case 250:
case 280:
case 3104:
case 622:
case 1683:
case 1656:
case 2384:
case 273:
case 3685:
case 2035:
case 1442:
case 102:
case 4095:
case 309:
case 627:
case 3349:
case 3169:
case 1358:
case 1096:
case 1010:
case 3966:
case 923:
case 3339:
case 3773:
case 3795:
case 107:
case 3562:
case 2782:
case 3880:
case 737:
case 3076:
case 2915:
case 4023:
case 3580:
case 1775:
case 2760:
case 3921:
case 845:
case 4088:
case 1240:
case 1644:
case 1326:
case 1908:
case 1678:
case 1919:
case 2814:
case 311:
case 2514:
case 3433:
case 2695:
case 2673:
case 1348:
case 1168:
case 486:
case 925:
case 3443:
case 3660:
case 1722:
case 3264:
case 4092:
case 1445:
case 764:
case 3024:
case 589:
case 3277:
case 2386:
case 1654:
case 59:
case 763:
case 1367:
case 1147:
case 2798:
case 2439:
case 3106:
case 3918:
case 2353:
case 110:
case 3679:
case 2449:
case 995:
case 2531:
case 43:
case 1300:
case 2541:
case 3038:
case 1094:
case 1950:
case 2516:
case 2816:
case 2890:
case 2623:
case 2496:
case 1114:
case 52:
case 3977:
case 1863:
case 930:
case 364:
case 3218:
case 1646:
case 17:
case 1772:
case 275:
case 208:
case 2557:
case 1452:
case 247:
case 1997:
case 3151:
case 3338:
case 518:
case 4072:
case 1394:
case 1359:
case 3168:
case 3348:
case 1927:
case 1000:
case 1264:
case 3374:
case 3435:
case 83:
case 2426:
case 3722:
case 2905:
case 2675:
case 3367:
case 3654:
case 900:
case 4089:
case 3250:
case 2744:
case 3137:
case 2778:
case 557:
case 2461:
case 1106:
case 856:
case 2332:
case 3611:
case 661:
case 2162:
case 1964:
case 552:
case 2205:
case 582:
case 1048:
case 3059:
case 2728:
case 1977:
case 3863:
case 1607:
case 281:
case 3114:
case 443:
case 2717:
case 4022:
case 3950:
case 710:
case 3563:
case 444:
case 2625:
case 2086:
case 3452:
case 2870:
case 163:
case 1865:
case 2570:
case 37:
case 3175:
case 650:
case 3193:
case 2019:
case 3501:
case 1828:
case 3243:
case 673:
case 2668:
case 3741:
case 801:
case 674:
case 2651:
case 503:
case 3731:
case 977:
case 1015:
case 260:
case 1952:
case 2249:
case 2592:
case 1517:
case 3790:
case 819:
case 2239:
case 1583:
case 823:
case 2996:
case 2910:
case 3087:
case 1556:
case 3757:
case 3885:
case 2199:
case 3013:
case 355:
case 206:
case 3477:
case 2765:
case 824:
case 1856:
case 2321:
case 1945:
case 458:
case 1188:
case 3662:
case 2040:
case 3284:
case 3933:
case 4016:
case 2111:
case 2030:
case 2403:
case 3680:
case 2949:
case 1313:
case 1252:
case 3598:
case 2146:
case 1534:
case 755:
case 1387:
case 785:
case 2939:
case 3898:
case 3125:
case 3409:
case 1544:
case 1578:
case 54:
case 3315:
case 1704:
case 894:
case 979:
case 1501:
case 888:
case 2330:
case 1193:
case 4004:
case 1464:
case 2340:
case 3528:
case 2589:
case 3769:
case 66:
case 3302:
case 2021:
case 3828:
case 2763:
case 371:
case 3517:
case 1716:
case 3817:
case 4020:
case 2258:
case 3856:
case 1585:
case 2872:
case 3770:
case 817:
case 28:
case 155:
case 2572:
case 1885:
case 3556:
case 1757:
case 4070:
case 534:
case 401:
case 1427:
case 1933:
case 1284:
case 812:
case 2822:
case 2308:
case 2319:
case 4069:
case 1409:
case 1418:
case 419:
case 1125:
case 3387:
case 2276:
case 1598:
case 236:
case 3844:
case 424:
case 771:
case 2107:
case 3123:
case 2071:
case 2367:
case 2147:
case 1798:
case 2250:
case 3355:
case 595:
case 646:
case 3504:
case 1449:
case 781:
case 3778:
case 3804:
case 210:
case 1212:
case 1353:
case 92:
case 2151:
case 4056:
case 2338:
case 1695:
case 3675:
case 4083:
case 530:
case 3693:
case 3426:
case 2722:
case 628:
case 1623:
case 1890:
case 1410:
case 467:
case 2114:
case 349:
case 525:
case 3783:
case 351:
case 2563:
case 3281:
case 3717:
case 108:
case 2772:
case 3476:
case 2997:
case 3086:
case 147:
case 3756:
case 1912:
case 2324:
case 4078:
case 989:
case 805:
case 3180:
case 99:
case 1203:
case 959:
case 1701:
case 3342:
case 1688:
case 1541:
case 2094:
case 1831:
case 435:
case 4044:
case 2059:
case 3569:
case 1531:
case 2789:
case 2300:
case 1355:
case 138:
case 3798:
case 747:
case 708:
case 3386:
case 1734:
case 867:
case 2679:
case 3439:
case 982:
case 1461:
case 1778:
case 952:
case 1504:
case 1458:
case 3903:
case 2359:
case 2000:
case 3695:
case 478:
case 2394:
case 405:
case 1820:
case 1693:
case 1426:
case 3042:
case 1717:
case 3516:
case 1053:
case 151:
case 149:
case 820:
case 2977:
case 3890:
case 3496:
case 918:
case 3055:
case 2209:
case 3912:
case 264:
case 2218:
case 1756:
case 347:
case 1086:
case 1625:
case 469:
case 1870:
case 263:
case 1476:
case 375:
case 2227:
case 862:
case 1342:
case 1162:
case 500:
case 3203:
case 1180:
case 2074:
case 2484:
case 1332:
case 683:
case 1728:
case 1569:
case 3531:
case 2048:
case 566:
case 654:
case 987:
case 2038:
case 1412:
case 1371:
case 271:
case 3261:
case 2015:
case 729:
case 626:
case 1592:
case 3258:
case 1249:
case 197:
case 1154:
case 713:
case 1765:
case 35:
case 3391:
case 2856:
case 3066:
case 2556:
case 714:
case 1637:
case 440:
case 38:
case 3572:
case 399:
case 1199:
case 2235:
case 3182:
case 3340:
case 3160:
case 1019:
case 3889:
case 2173:
case 1668:
case 2302:
case 991:
case 3021:
case 75:
case 1939:
case 2834:
case 1091:
case 1136:
case 2544:
case 127:
case 336:
case 2844:
case 3276:
case 799:
case 78:
case 1146:
case 2123:
case 3071:
case 2578:
case 329:
case 607:
case 2935:
case 3926:
case 2945:
case 3522:
case 1403:
case 921:
case 2720:
case 3822:
case 360:
case 397:
case 934:
case 3249:
case 1258:
case 1606:
case 3239:
case 933:
case 1261:
case 3892:
case 2716:
case 2885:
case 199:
case 3199:
case 1572:
case 255:
case 2477:
case 2087:
case 3637:
case 1391:
case 15:
case 3765:
case 3154:
case 1872:
case 2464:
case 2193:
case 3019:
case 1340:
case 1160:
case 2175:
case 1226:
case 1021:
case 2243:
case 665:
case 1889:
case 2984:
case 3651:
case 792:
case 3366:
case 3146:
case 706:
case 1958:
case 2598:
case 2898:
case 2418:
case 3136:
case 2409:
case 3091:
case 113:
case 2315:
case 3210:
case 760:
case 3296:
case 129:
case 3614:
case 476:
case 2002:
case 1926:
case 632:
case 392:
case 1129:
case 3040:
case 2284:
case 1308:
case 2662:
case 3030:
case 722:
case 2933:
case 3111:
case 3922:
case 3289:
case 938:
case 1615:
case 152:
case 2535:
case 3526:
case 3420:
case 2835:
case 3687:
case 182:
case 2545:
case 1709:
case 32:
case 1380:
case 2978:
case 2608:
case 1362:
case 3272:
case 3561:
case 741:
case 2781:
case 789:
case 2944:
case 861:
case 3558:
case 2068:
case 564:
case 3186:
case 949:
case 118:
case 2928:
case 1431:
case 1441:
case 3153:
case 2194:
case 341:
case 39:
case 2463:
case 63:
case 1416:
case 1810:
case 1490:
case 3797:
case 1510:
case 3602:
case 359:
case 2278:
case 2630:
case 2852:
case 3080:
case 2244:
case 3470:
case 2983:
case 1777:
case 1992:
case 2552:
case 3062:
case 157:
case 1457:
case 2006:
case 2543:
case 2314:
case 2533:
case 1289:
case 1687:
case 2124:
case 1826:
case 1420:
case 1613:
case 3727:
case 718:
case 2201:
case 352:
case 2703:
case 757:
case 3142:
case 3362:
case 12:
case 3380:
case 3132:
case 787:
case 57:
case 1861:
case 2100:
case 3292:
case 1558:
case 4064:
case 1858:
case 415:
case 3849:
case 60:
case 1561:
case 2584:
case 3764:
case 2337:
case 1222:
case 2884:
case 318:
case 2347:
case 752:
case 1186:
case 230:
case 643:
case 908:
case 2901:
case 4018:
case 947:
case 1469:
case 644:
case 4009:
case 159:
case 2368:
case 295:
case 3510:
case 1797:
case 2712:
case 3490:
case 3416:
case 3810:
case 4027:
case 19:
case 189:
case 2985:
case 3457:
case 510:
case 1062:
case 2298:
case 357:
case 1576:
case 2465:
case 1470:
case 461:
case 387:
case 2174:
case 1750:
case 1941:
case 133:
case 703:
case 3336:
case 3220:
case 134:
case 3166:
case 3346:
case 3624:
case 1307:
case 95:
case 999:
case 2428:
case 3489:
case 2115:
case 279:
case 612:
case 4045:
case 1492:
case 3204:
case 1957:
case 473:
case 2073:
case 1512:
case 2897:
case 2417:
case 474:
case 2483:
case 2632:
case 3752:
case 3311:
case 3082:
case 2776:
case 1119:
case 391:
case 631:
case 2642:
case 1916:
case 2550:
case 3060:
case 3007:
case 913:
case 1241:
case 3171:
case 617:
case 1379:
case 936:
case 3745:
case 1803:
case 303:
case 3422:
case 1046:
case 2655:
case 3399:
case 1503:
case 1257:
case 1130:
case 3674:
case 1011:
case 1360:
case 1140:
case 2375:
case 3270:
case 791:
case 2444:
case 86:
case 2393:
case 585:
case 2478:
case 3881:
case 2088:
case 3029:
case 688:
case 1216:
case 3581:
case 1659:
case 2113:
case 960:
case 694:
case 1969:
case 2864:
case 1336:
case 1220:
case 693:
case 2323:
case 1600:
case 3512:
case 46:
case 3812:
case 2710:
case 2388:
case 3329:
case 2075:
case 3916:
case 2877:
case 3108:
case 2485:
case 191:
case 4043:
case 1472:
case 1752:
case 3231:
case 1269:
case 3379:
case 927:
case 1505:
case 1805:
case 1171:
case 1007:
case 1920:
case 3503:
case 619:
case 1399:
case 716:
case 734:
case 103:
case 2686:
case 1745:
case 3803:
case 2518:
case 1270:
case 874:
case 992:
case 3011:
case 3382:
case 3130:
case 2809:
case 873:
case 1674:
case 3257:
case 2818:
case 2498:
case 3659:
case 880:
case 2739:
case 1581:
case 4084:
case 1029:
case 1638:
case 2749:
case 1881:
case 850:
case 1619:
case 551:
case 884:
case 1256:
case 853:
case 2132:
case 2709:
case 883:
case 2718:
case 2380:
case 2549:
case 1068:
case 3998:
case 3621:
case 795:
case 870:
case 3100:
case 662:
case 1217:
case 1944:
case 446:
case 3833:
case 730:
case 1228:
case 3314:
case 498:
case 252:
case 2727:
case 1956:
case 3148:
case 1463:
case 1194:
case 3138:
case 3351:
case 2416:
case 1234:
case 725:
case 3298:
case 257:
case 1552:
case 2992:
case 1630:
case 3174:
case 3465:
case 3584:
case 2764:
case 3347:
case 218:
case 2441:
case 428:
case 964:
case 1014:
case 963:
case 3671:
case 3901:
case 22:
case 3256:
case 3608:
case 125:
case 2858:
case 3217:
case 575:
case 3051:
case 3781:
case 508:
case 2861:
case 1621:
case 2558:
case 605:
case 2404:
case 2922:
case 3228:
case 2289:
case 1543:
case 2526:
case 1703:
case 1201:
case 1124:
case 2826:
case 366:
case 1712:
case 1985:
case 3194:
case 29:
case 454:
case 3463:
case 2602:
case 3159:
case 1368:
case 484:
case 453:
case 1465:
case 3983:
case 1174:
case 3852:
case 2080:
case 3917:
case 3552:
case 1298:
case 3234:
case 3640:
case 1884:
case 2989:
case 3691:
case 4081:
case 1347:
case 846:
case 766:
case 1584:
case 1901:
case 2469:
case 542:
case 898:
case 3306:
case 1417:
case 2512:
case 1897:
case 1073:
case 402:
case 3965:
case 513:
case 3388:
case 2329:
case 2957:
case 2812:
case 1597:
case 2119:
case 377:
case 1456:
case 345:
case 1776:
case 3577:
case 2099:
case 2931:
case 3864:
case 3187:
case 3564:
case 4049:
case 2784:
case 1325:
case 1115:
case 1428:
case 985:
case 426:
case 2307:
case 2140:
case 1375:
case 1393:
case 8:
case 2257:
case 3818:
case 1434:
case 745:
case 2382:
case 2216:
case 2659:
case 3373:
case 1761:
case 3739:
case 599:
case 1263:
case 1758:
case 3749:
case 2231:
case 2379:
case 3653:
case 407:
case 2241:
case 2046:
case 2503:
case 3686:
case 496:
case 837:
case 4010:
case 1710:
case 1796:
case 2204:
case 1388:
case 379:
case 1965:
case 2600:
case 3095:
case 3073:
case 4026:
case 3417:
case 3776:
case 145:
case 3850:
case 177:
case 2752:
case 2311:
case 2082:
case 2060:
case 1093:
case 1485:
case 3642:
case 1877:
case 3325:
case 807:
case 4058:
case 2336:
case 2220:
case 848:
case 592:
case 4061:
case 2346:
case 2166:
case 2624:
case 1864:
case 1113:
case 896:
case 3428:
case 2489:
case 3115:
case 2079:
case 3434:
case 411:
case 1809:
case 2904:
case 2674:
case 560:
case 597:
case 3444:
case 1509:
case 1518:
case 3393:
case 3375:
case 1265:
case 2270:
case 802:
case 1749:
case 2029:
case 3478:
case 2581:
case 3263:
case 1739:
case 3761:
case 221:
case 432:
case 1395:
case 2171:
case 2920:
case 2007:
case 2505:
case 203:
case 368:
case 1827:
case 826:
case 1686:
case 2399:
case 204:
case 2422:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1752667201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,];
var gg_b = "1752667201/";

function subdomain_from_url(url, base, dir) {
        var retval = '';
        if (!base) {
                if (dir === 'webp') {
                        retval = 'w';
                } else if (dir === 'avif') {
                        retval = 'a';
                }
        }
        
        var b = 16;
        
        var r = /\/[0-9a-f]{61}([0-9a-f]{2})([0-9a-f])/;
        var m = r.exec(url);
        if (!m) {
                return retval;
        }
        
        var g = parseInt(m[2]+m[1], b);
        if (!isNaN(g)) {
                if (base) {
                        retval = String.fromCharCode(97 + gg_m[g]) + base;
                } else {
                        retval = retval + (1+gg_m[g]);
                }
        }
        
        return retval;
}


function url_from_url(url, base, dir) {
        return url.replace(/\/\/..?\.(?:gold-usergeneratedcontent\.net|hitomi\.la)\//, '//'+subdomain_from_url(url, base, dir)+'.'+domain2+'/');
}

function full_path_from_hash(hash) {
        return gg_b+gg_s(hash)+'/'+hash;
}


function real_full_path_from_hash(hash) {
        return hash.replace(/^.*(..)(.)$/, '$2/$1/'+hash);
}

function url_from_hash(_galleryid, image, dir, ext) {
        ext = ext || dir || image.name.split('.').pop();
        if (dir === 'webp' || dir === 'avif') {
                dir = '';
        } else {
                dir += '/';
        }
        
        return 'https://a.'+domain2+'/'+dir+full_path_from_hash(image.hash)+'.'+ext;
}

function url_from_url_from_hash(_galleryid, image, dir, ext, base) {
        if ('tn' === base) {
                return url_from_url('https://a.'+domain2+'/'+dir+'/'+real_full_path_from_hash(image.hash)+'.'+ext, base);
        }
        return url_from_url(url_from_hash(_galleryid, image, dir, ext), base, dir);
}


function hitomi_get_image_list() {
  files = galleryinfo["files"];
  dir = "webp";
  type = "webp";
  base = "webp";
  result = [];
  btresult = [];
  stresult = [];
  for (var file of files) {
    result.push(url_from_url(url_from_hash(0, file, dir), undefined, dir));
    btresult.push(url_from_url_from_hash(0, file, 'webpbigtn', 'webp', 'tn'));
    stresult.push(url_from_url_from_hash(0, file, type+'smalltn', type, 'tn'));
  }
  return JSON.stringify({
    btresult: btresult,
    stresult: stresult,
    result: result,
  });
}

function hitomi_get_header_content(id) {
  return JSON.stringify({
      'referer': `https://hitomi.la/reader/${id}.html`,
      'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.3',
  });
}
