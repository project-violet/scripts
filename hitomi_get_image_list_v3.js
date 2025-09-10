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
var o = 0;
switch (g) {
case 1412:
case 3222:
case 2662:
case 2469:
case 3667:
case 1367:
case 3284:
case 603:
case 3350:
case 235:
case 3803:
case 1597:
case 2485:
case 2355:
case 1763:
case 172:
case 329:
case 3514:
case 2883:
case 3405:
case 3146:
case 830:
case 3295:
case 48:
case 2829:
case 1836:
case 967:
case 1095:
case 3458:
case 3647:
case 2449:
case 2694:
case 3513:
case 769:
case 947:
case 3827:
case 1488:
case 788:
case 2884:
case 130:
case 872:
case 2493:
case 1305:
case 2906:
case 2713:
case 3528:
case 1380:
case 268:
case 2098:
case 3283:
case 3986:
case 2036:
case 3054:
case 2076:
case 2317:
case 3312:
case 2728:
case 3804:
case 1419:
case 2462:
case 1083:
case 1799:
case 708:
case 2743:
case 2650:
case 577:
case 2084:
case 2597:
case 4016:
case 3934:
case 3027:
case 868:
case 2022:
case 135:
case 1662:
case 2412:
case 3797:
case 2619:
case 573:
case 3608:
case 3417:
case 1227:
case 3543:
case 1204:
case 1714:
case 1829:
case 1642:
case 2836:
case 352:
case 1449:
case 2898:
case 3563:
case 1494:
case 209:
case 2688:
case 3090:
case 2725:
case 1290:
case 2876:
case 1493:
case 1600:
case 1203:
case 1906:
case 230:
case 3394:
case 3349:
case 2488:
case 2358:
case 1822:
case 1694:
case 2764:
case 776:
case 2254:
case 725:
case 3408:
case 774:
case 2083:
case 1317:
case 1098:
case 168:
case 3385:
case 1895:
case 338:
case 345:
case 1685:
case 3599:
case 189:
case 3276:
case 736:
case 2364:
case 994:
case 1224:
case 3414:
case 55:
case 62:
case 350:
case 2248:
case 3613:
case 1840:
case 3082:
case 759:
case 826:
case 2175:
case 3210:
case 1420:
case 599:
case 2705:
case 3170:
case 217:
case 1059:
case 2780:
case 512:
case 1071:
case 2569:
case 3785:
case 824:
case 2585:
case 1497:
case 2852:
case 2268:
case 3769:
case 1717:
case 3857:
case 3628:
case 414:
case 2344:
case 1031:
case 93:
case 3111:
case 2392:
case 1887:
case 2040:
case 2951:
case 2767:
case 1550:
case 3848:
case 918:
case 381:
case 3567:
case 1138:
case 3815:
case 2009:
case 1245:
case 537:
case 3018:
case 2363:
case 1052:
case 232:
case 2542:
case 3089:
case 1620:
case 126:
case 1223:
case 1926:
case 4030:
case 1802:
case 2747:
case 2979:
case 3065:
case 3868:
case 306:
case 2060:
case 1289:
case 3048:
case 1215:
case 117:
case 2059:
case 3845:
case 121:
case 2840:
case 1087:
case 384:
case 2224:
case 1135:
case 2901:
case 2809:
case 3664:
case 1248:
case 2010:
case 3287:
case 113:
case 2282:
case 2031:
case 1399:
case 158:
case 1344:
case 619:
case 3889:
case 3712:
case 2497:
case 3699:
case 4061:
case 2717:
case 2207:
case 3443:
case 1569:
case 1780:
case 3068:
case 1002:
case 3865:
case 2755:
case 1343:
case 2245:
case 1009:
case 275:
case 2519:
case 3750:
case 1810:
case 3643:
case 2550:
case 2708:
case 2218:
case 3692:
case 3209:
case 3719:
case 1859:
case 1767:
case 3824:
case 3444:
case 2887:
case 2178:
case 1040:
case 3882:
case 3141:
case 731:
case 427:
case 2289:
case 1060:
case 1747:
case 1979:
case 2802:
case 1593:
case 870:
case 2620:
case 1542:
case 3663:
case 226:
case 1939:
case 2926:
case 1831:
case 817:
case 2052:
case 1142:
case 1918:
case 3872:
case 2877:
case 857:
case 853:
case 2837:
case 194:
case 451:
case 2346:
case 1193:
case 2150:
case 1965:
case 818:
case 3561:
case 3155:
case 1226:
case 3738:
case 2578:
case 560:
case 3952:
case 2538:
case 1691:
case 2279:
case 3026:
case 1162:
case 1989:
case 3117:
case 1037:
case 2272:
case 72:
case 1924:
case 69:
case 975:
case 2948:
case 1491:
case 3616:
case 291:
case 3237:
case 34:
case 405:
case 896:
case 2232:
case 4055:
case 1077:
case 1316:
case 1185:
case 83:
case 3001:
case 1535:
case 2081:
case 3931:
case 3971:
case 3879:
case 2968:
case 1194:
case 1149:
case 2193:
case 1346:
case 2945:
case 3051:
case 400:
case 538:
case 545:
case 294:
case 3646:
case 3801:
case 1251:
case 1877:
case 921:
case 970:
case 2142:
case 3147:
case 631:
case 2162:
case 497:
case 2881:
case 2691:
case 1596:
case 1761:
case 3960:
case 3666:
case 1578:
case 1239:
case 296:
case 1150:
case 493:
case 4080:
case 3079:
case 958:
case 2965:
case 1366:
case 2316:
case 1915:
case 191:
case 3466:
case 218:
case 3511:
case 3180:
case 2711:
case 792:
case 2491:
case 552:
case 2982:
case 1112:
case 932:
case 719:
case 2194:
case 3281:
case 3735:
case 2575:
case 3902:
case 4047:
case 373:
case 439:
case 3446:
case 253:
case 2770:
case 2535:
case 2100:
case 310:
case 1874:
case 2478:
case 4092:
case 3144:
case 2438:
case 2206:
case 2903:
case 3375:
case 2370:
case 909:
case 3164:
case 1635:
case 3335:
case 863:
case 3641:
case 143:
case 1341:
case 461:
case 3984:
case 1435:
case 1475:
case 2120:
case 578:
case 3163:
case 147:
case 1746:
case 3806:
case 1953:
case 3125:
case 867:
case 1766:
case 2990:
case 2638:
case 27:
case 1591:
case 399:
case 2696:
case 3143:
case 3192:
case 2197:
case 1833:
case 2221:
case 3661:
case 35:
case 550:
case 4044:
case 87:
case 1206:
case 2834:
case 783:
case 1438:
case 3006:
case 3128:
case 464:
case 1311:
case 787:
case 3611:
case 4014:
case 2954:
case 795:
case 3998:
case 2635:
case 1330:
case 1370:
case 1033:
case 267:
case 3976:
case 247:
case 2746:
case 608:
case 3470:
case 1074:
case 2435:
case 3114:
case 3546:
case 243:
case 3411:
case 1221:
case 1904:
case 2833:
case 3566:
case 1678:
case 3791:
case 444:
case 2361:
case 1197:
case 3021:
case 1638:
case 2234:
case 1125:
case 347:
case 3746:
case 711:
case 2114:
case 3435:
case 3341:
case 833:
case 2546:
case 1922:
case 431:
case 2430:
case 1641:
case 2274:
case 2566:
case 685:
case 2411:
case 1661:
case 3361:
case 1192:
case 2021:
case 1995:
case 600:
case 199:
case 3591:
case 899:
case 526:
case 656:
case 2128:
case 1144:
case 2006:
case 2611:
case 85:
case 3874:
case 1516:
case 2630:
case 940:
case 363:
case 2233:
case 2936:
case 1821:
case 3675:
case 812:
case 2976:
case 1375:
case 367:
case 575:
case 3927:
case 1546:
case 2984:
case 628:
case 3034:
case 2056:
case 3074:
case 3120:
case 1234:
case 3696:
case 651:
case 2995:
case 1396:
case 1021:
case 2143:
case 3886:
case 1378:
case 513:
case 2192:
case 1791:
case 3221:
case 3904:
case 434:
case 1611:
case 3311:
case 714:
case 237:
case 2286:
case 605:
case 1113:
case 233:
case 2164:
case 3073:
case 680:
case 2441:
case 2821:
case 1233:
case 2929:
case 2072:
case 3077:
case 2180:
case 1910:
case 1616:
case 1277:
case 666:
case 981:
case 3924:
case 3711:
case 1959:
case 474:
case 2987:
case 2032:
case 509:
case 2735:
case 2158:
case 357:
case 3907:
case 1879:
case 1971:
case 2902:
case 2570:
case 3770:
case 2530:
case 1931:
case 2826:
case 1839:
case 353:
case 2775:
case 3193:
case 4000:
case 1832:
case 1541:
case 950:
case 2940:
case 4049:
case 1872:
case 3989:
case 3881:
case 1108:
case 2167:
case 1778:
case 646:
case 3226:
case 4085:
case 1796:
case 2960:
case 408:
case 530:
case 33:
case 2079:
case 3965:
case 1987:
case 2117:
case 2959:
case 4019:
case 2851:
case 3272:
case 3232:
case 4050:
case 1511:
case 1180:
case 1466:
case 24:
case 2001:
case 602:
case 3915:
case 535:
case 1775:
case 2839:
case 1105:
case 1530:
case 3081:
case 1446:
case 177:
case 3968:
case 1570:
case 1902:
case 2879:
case 1158:
case 1281:
case 469:
case 420:
case 984:
case 1801:
case 3251:
case 3188:
case 1909:
case 2832:
case 589:
case 568:
case 3366:
case 3578:
case 2738:
case 26:
case 1666:
case 2155:
case 3239:
case 1960:
case 3596:
case 3761:
case 3957:
case 2952:
case 4012:
case 986:
case 661:
case 3538:
case 2778:
case 2108:
case 2391:
case 1039:
case 878:
case 1815:
case 567:
case 2750:
case 2643:
case 324:
case 181:
case 375:
case 2240:
case 1848:
case 1762:
case 744:
case 94:
case 2444:
case 255:
case 2719:
case 782:
case 3708:
case 3218:
case 563:
case 2555:
case 2882:
case 3178:
case 3314:
case 2807:
case 746:
case 1742:
case 1614:
case 1868:
case 1252:
case 3802:
case 326:
case 1413:
case 3223:
case 262:
case 2260:
case 2625:
case 1320:
case 3588:
case 3059:
case 1024:
case 60:
case 1170:
case 2048:
case 284:
case 1700:
case 1210:
case 1613:
case 1082:
case 2463:
case 1977:
case 150:
case 1749:
case 3224:
case 3901:
case 1259:
case 3809:
case 1130:
case 3282:
case 201:
case 495:
case 806:
case 2287:
case 1580:
case 3328:
case 804:
case 1628:
case 2492:
case 543:
case 1857:
case 1785:
case 2823:
case 2517:
case 547:
case 881:
case 3071:
case 1007:
case 3040:
case 1882:
case 1555:
case 2397:
case 1161:
case 2848:
case 2428:
case 3951:
case 2045:
case 1209:
case 1719:
case 3859:
case 2567:
case 3810:
case 1240:
case 3562:
case 3343:
case 2815:
case 332:
case 1057:
case 2320:
case 162:
case 1663:
case 884:
case 2547:
case 407:
case 3542:
case 2089:
case 1260:
case 2793:
case 2614:
case 977:
case 3593:
case 2742:
case 1464:
case 761:
case 3979:
case 1788:
case 4035:
case 3060:
case 1141:
case 101:
case 1287:
case 3364:
case 313:
case 3248:
case 2794:
case 1015:
case 2749:
case 741:
case 1664:
case 3500:
case 3758:
case 3087:
case 3932:
case 184:
case 321:
case 370:
case 3549:
case 142:
case 57:
case 3594:
case 2613:
case 1845:
case 2024:
case 3705:
case 3215:
case 3002:
case 1865:
case 3780:
case 2231:
case 2769:
case 2628:
case 855:
case 1712:
case 3852:
case 1202:
case 1699:
case 1981:
case 2111:
case 2580:
case 3399:
case 596:
case 756:
case 330:
case 3358:
case 3488:
case 912:
case 1827:
case 1658:
case 1447:
case 1513:
case 2298:
case 3612:
case 2408:
case 2236:
case 2933:
case 3419:
case 3254:
case 492:
case 2369:
case 1054:
case 2385:
case 2455:
case 1986:
case 2973:
case 3450:
case 1528:
case 2599:
case 245:
case 1890:
case 2934:
case 1803:
case 3253:
case 265:
case 3084:
case 553:
case 2592:
case 623:
case 2655:
case 21:
case 1166:
case 1480:
case 1319:
case 1053:
case 611:
case 557:
case 2608:
case 1222:
case 3412:
case 797:
case 2797:
case 2974:
case 1647:
case 252:
case 2563:
case 2854:
case 3836:
case 2090:
case 3347:
case 309:
case 3688:
case 933:
case 1295:
case 852:
case 2827:
case 2447:
case 1349:
case 2605:
case 3906:
case 3713:
case 3203:
case 865:
case 1276:
case 3685:
case 1544:
case 138:
case 2890:
case 2054:
case 705:
case 2680:
case 2283:
case 1455:
case 2312:
case 42:
case 1369:
case 3076:
case 1236:
case 2467:
case 2229:
case 1408:
case 3728:
case 3669:
case 2667:
case 1543:
case 3227:
case 3469:
case 1608:
case 3662:
case 2319:
case 335:
case 1655:
case 1027:
case 2803:
case 1592:
case 2514:
case 3693:
case 229:
case 1720:
case 3400:
case 751:
case 3290:
case 240:
case 2295:
case 1004:
case 2146:
case 2405:
case 3883:
case 1090:
case 1342:
case 3449:
case 152:
case 1563:
case 3494:
case 2647:
case 2388:
case 3642:
case 3714:
case 1740:
case 3800:
case 1518:
case 1250:
case 2126:
case 3483:
case 3353:
case 2008:
case 3019:
case 1067:
case 1545:
case 637:
case 205:
case 491:
case 2627:
case 3267:
case 154:
case 3849:
case 2055:
case 893:
case 156:
case 2752:
case 2978:
case 2242:
case 3757:
case 1565:
case 800:
case 4081:
case 1589:
case 3695:
case 139:
case 1047:
case 885:
case 2996:
case 1760:
case 3885:
case 2403:
case 185:
case 320:
case 371:
case 2200:
case 2710:
case 3205:
case 1855:
case 1058:
case 2759:
case 740:
case 3510:
case 1808:
case 3748:
case 3862:
case 729:
case 2249:
case 854:
case 2427:
case 1080:
case 3629:
case 1654:
case 3768:
case 1329:
case 3354:
case 1935:
case 3280:
case 2017:
case 3012:
case 2568:
case 1453:
case 3571:
case 2285:
case 2219:
case 2709:
case 2454:
case 1627:
case 745:
case 738:
case 1858:
case 1262:
case 1055:
case 3327:
case 2179:
case 3062:
case 2139:
case 1126:
case 1805:
case 2067:
case 180:
case 4037:
case 2518:
case 3509:
case 3476:
case 1996:
case 1293:
case 2395:
case 3723:
case 1403:
case 1690:
case 1938:
case 239:
case 2589:
case 3042:
case 998:
case 3304:
case 2151:
case 2288:
case 1978:
case 256:
case 2817:
case 1604:
case 2808:
case 3911:
case 1759:
case 1249:
case 494:
case 3782:
case 2855:
case 2582:
case 3094:
case 3303:
case 2058:
case 1603:
case 592:
case 1490:
case 285:
case 2524:
case 752:
case 1710:
case 2507:
case 3676:
case 1568:
case 1285:
case 3502:
case 2383:
case 2132:
case 3069:
case 2975:
case 1398:
case 496:
case 2935:
case 1101:
case 805:
case 914:
case 2329:
case 2172:
case 1336:
case 2702:
case 2654:
case 3636:
case 3707:
case 1427:
case 293:
case 1310:
case 706:
case 2615:
case 1843:
case 3610:
case 4034:
case 3703:
case 3213:
case 3382:
case 4074:
case 2648:
case 2387:
case 615:
case 1489:
case 3133:
case 3307:
case 1736:
case 3228:
case 1418:
case 781:
case 1798:
case 1863:
case 182:
case 3631:
case 1776:
case 3529:
case 2099:
case 2783:
case 704:
case 1106:
case 1445:
case 2092:
case 503:
case 882:
case 3345:
case 164:
case 3522:
case 2813:
case 3431:
case 2722:
case 2468:
case 3727:
case 1407:
case 1864:
case 778:
case 1121:
case 1689:
case 3595:
case 1482:
case 202:
case 2657:
case 3459:
case 1424:
case 3704:
case 2025:
case 1844:
case 64:
case 1899:
case 2448:
case 1991:
case 166:
case 1623:
case 3365:
case 3790:
case 4073:
case 2504:
case 3410:
case 1220:
case 2156:
case 2415:
case 3134:
case 336:
case 2360:
case 1014:
case 3348:
case 3687:
case 3897:
case 1457:
case 1387:
case 762:
case 3264:
case 2843:
case 3460:
case 161:
case 879:
case 443:
case 331:
case 1615:
case 1044:
case 2825:
case 1783:
case 1099:
case 2331:
case 2028:
case 3598:
case 2863:
case 282:
case 3820:
case 755:
case 2607:
case 3409:
case 1814:
case 3754:
case 3244:
case 3602:
case 3299:
case 3368:
case 2371:
case 1784:
case 2121:
case 1043:
case 3402:
case 677:
case 2864:
case 2407:
case 1468:
case 786:
case 3609:
case 1527:
case 3640:
case 3753:
case 1092:
case 2645:
case 4086:
case 1415:
case 2014:
case 1360:
case 1795:
case 701:
case 463:
case 3966:
case 861:
case 1504:
case 98:
case 2991:
case 784:
case 2899:
case 1590:
case 1025:
case 3357:
case 2689:
case 2482:
case 102:
case 2816:
case 1556:
case 1997:
case 946:
case 2651:
case 1104:
case 489:
case 2066:
case 3914:
case 1401:
case 3721:
case 468:
case 1626:
case 3437:
case 32:
case 520:
case 4076:
case 2521:
case 3:
case 3176:
case 588:
case 1337:
case 606:
case 569:
case 2439:
case 3913:
case 3637:
case 3677:
case 435:
case 964:
case 76:
case 1601:
case 715:
case 2154:
case 80:
case 2381:
case 1733:
case 3928:
case 966:
case 28:
case 1103:
case 604:
case 3351:
case 2104:
case 777:
case 2997:
case 430:
case 508:
case 1651:
case 3195:
case 3943:
case 3574:
case 2734:
case 3756:
case 1816:
case 773:
case 2190:
case 4083:
case 1153:
case 392:
case 3963:
case 3266:
case 2920:
case 1521:
case 4029:
case 1472:
case 1679:
case 2127:
case 1066:
case 20:
case 3379:
case 3122:
case 2377:
case 1506:
case 4022:
case 662:
case 2601:
case 3183:
case 2426:
case 2337:
case 655:
case 574:
case 409:
case 3573:
case 2733:
case 1451:
case 3944:
case 3999:
case 3891:
case 3681:
case 59:
case 2737:
case 3577:
case 954:
case 2900:
case 2572:
case 3732:
case 536:
case 2011:
case 2107:
case 3102:
case 2421:
case 4009:
case 2532:
case 3772:
case 2949:
case 1912:
case 2182:
case 2969:
case 3187:
case 2070:
case 939:
case 1781:
case 1235:
case 3980:
case 2373:
case 2030:
case 3686:
case 111:
case 3896:
case 127:
case 1456:
case 1115:
case 3838:
case 2985:
case 956:
case 1656:
case 2551:
case 1041:
case 733:
case 3160:
case 1157:
case 4087:
case 2374:
case 737:
case 1811:
case 3967:
case 1919:
case 3241:
case 985:
case 1526:
case 2278:
case 2621:
case 2942:
case 3261:
case 1988:
case 3109:
case 993:
case 2296:
case 458:
case 1870:
case 2238:
case 2406:
case 3701:
case 3211:
case 1421:
case 1949:
case 980:
case 424:
case 2168:
case 475:
case 905:
case 3306:
case 1606:
case 227:
case 1985:
case 2456:
case 1373:
case 3110:
case 211:
case 1070:
case 61:
case 426:
case 2912:
case 665:
case 4052:
case 3230:
case 3633:
case 3917:
case 1969:
case 2919:
case 4059:
case 1962:
case 645:
case 638:
case 116:
case 2041:
case 898:
case 395:
case 1165:
case 951:
case 3634:
case 2950:
case 1296:
case 4031:
case 3875:
case 2061:
case 3078:
case 1118:
case 1942:
case 1241:
case 971:
case 920:
case 2908:
case 2433:
case 3919:
case 2152:
case 442:
case 3157:
case 4015:
case 803:
case 3041:
case 1486:
case 1356:
case 2473:
case 3950:
case 2634:
case 295:
case 763:
case 582:
case 3870:
case 1739:
case 546:
case 890:
case 2078:
case 1140:
case 2875:
case 2835:
case 2096:
case 2321:
case 283:
case 1261:
case 1779:
case 1947:
case 2211:
case 2701:
case 1958:
case 1772:
case 1102:
case 455:
case 1905:
case 1732:
case 566:
case 2434:
case 3456:
case 2270:
case 1838:
case 743:
case 2673:
case 564:
case 1035:
case 1686:
case 103:
case 1980:
case 2110:
case 3781:
case 107:
case 2159:
case 462:
case 323:
case 3912:
case 2230:
case 2474:
case 1473:
case 3551:
case 2160:
case 2486:
case 450:
case 1955:
case 4082:
case 3374:
case 2751:
case 4024:
case 689:
case 183:
case 478:
case 3278:
case 3539:
case 2947:
case 1096:
case 1321:
case 1078:
case 561:
case 3993:
case 3145:
case 404:
case 2732:
case 579:
case 3737:
case 887:
case 1131:
case 1306:
case 1171:
case 481:
case 502:
case 3841:
case 2537:
case 3994:
case 3532:
case 77:
case 1701:
case 3421:
case 1211:
case 1633:
case 2187:
case 1917:
case 1474:
case 1230:
case 2878:
case 207:
case 1159:
case 3124:
case 635:
case 648:
case 2686:
case 4065:
case 3030:
case 1110:
case 2980:
case 203:
case 3985:
case 2838:
case 4023:
case 406:
case 895:
case 2035:
case 1301:
case 1136:
case 73:
case 3016:
case 2964:
case 3601:
case 556:
case 41:
case 1216:
case 1913:
case 3426:
case 1637:
case 8:
case 3337:
case 2332:
case 2533:
case 4090:
case 2999:
case 794:
case 99:
case 2944:
case 675:
case 4004:
case 554:
case 624:
case 1928:
case 1586:
case 3104:
case 2481:
case 2351:
case 3997:
case 2574:
case 3734:
case 2943:
case 597:
case 2339:
case 1091:
case 585:
case 292:
case 2266:
case 3291:
case 1914:
case 1721:
case 718:
case 445:
case 500:
case 1332:
case 2176:
case 2913:
case 2706:
case 3632:
case 1964:
case 3672:
case 2677:
case 632:
case 2198:
case 2586:
case 505:
case 429:
case 1944:
case 1891:
case 2928:
case 3381:
case 1573:
case 1533:
case 819:
case 658:
case 3816:
case 1756:
case 1574:
case 1943:
case 3651:
case 1351:
case 1481:
case 1379:
case 617:
case 621:
case 2477:
case 2914:
case 3472:
case 1266:
case 1963:
case 2091:
case 3121:
case 1318:
case 3864:
case 1727:
case 3297:
case 1522:
case 4006:
case 2753:
case 2946:
case 364:
case 1345:
case 511:
case 1097:
case 134:
case 1584:
case 1134:
case 3665:
case 1323:
case 136:
case 2660:
case 1365:
case 19:
case 3991:
case 3899:
case 618:
case 159:
case 1704:
case 3352:
case 3482:
case 3689:
case 1020:
case 1595:
case 2487:
case 2357:
case 3359:
case 1324:
case 1133:
case 2687:
case 2348:
case 3013:
case 63:
case 3624:
case 2897:
case 859:
case 1382:
case 346:
case 3423:
case 2315:
case 3843:
case 3310:
case 1173:
case 834:
case 3825:
case 2820:
case 3554:
case 1529:
case 344:
case 2598:
case 3863:
case 1631:
case 2299:
case 724:
case 4021:
case 694:
case 775:
case 3371:
case 1583:
case 2368:
case 2097:
case 3340:
case 3092:
case 2584:
case 1753:
case 2431:
case 2522:
case 3527:
case 1946:
case 1292:
case 1609:
case 3722:
case 3043:
case 2318:
case 3063:
case 302:
case 717:
case 2595:
case 1357:
case 1487:
case 3448:
case 3657:
case 721:
case 437:
case 433:
case 2410:
case 379:
case 1660:
case 122:
case 2790:
case 1966:
case 3360:
case 831:
case 3795:
case 713:
case 1225:
case 3615:
case 131:
case 3064:
case 514:
case 361:
case 1186:
case 2916:
case 2610:
case 822:
case 1460:
case 2659:
case 1264:
case 3387:
case 1897:
case 2133:
case 732:
case 1687:
case 2324:
case 1348:
case 2583:
case 3302:
case 1368:
case 2307:
case 1602:
case 1244:
case 1754:
case 1409:
case 1440:
case 1598:
case 516:
case 45:
case 1862:
case 2724:
case 2819:
case 4051:
case 1258:
case 772:
case 2782:
case 2000:
case 2587:
case 3058:
case 1715:
case 3855:
case 3582:
case 2850:
case 1559:
case 3524:
case 869:
case 171:
case 385:
case 120:
case 1571:
case 4039:
case 2970:
case 1893:
case 3507:
case 643:
case 1012:
case 1280:
case 3975:
case 3132:
case 1354:
case 3329:
case 2888:
case 3935:
case 2085:
case 647:
case 3080:
case 2707:
case 3654:
case 1768:
case 1629:
case 1842:
case 2698:
case 1422:
case 4079:
case 2498:
case 1622:
case 1849:
case 990:
case 2540:
case 2208:
case 1267:
case 3219:
case 3709:
case 3384:
case 3179:
case 1684:
case 2327:
case 1019:
case 3067:
case 2255:
case 1483:
case 2509:
case 3250:
case 4032:
case 3653:
case 3740:
case 849:
case 1552:
case 2723:
case 1088:
case 169:
case 820:
case 3395:
case 3760:
case 2765:
case 2390:
case 3589:
case 473:
case 3288:
case 2093:
case 903:
case 3565:
case 2560:
case 1869:
case 1961:
case 356:
case 876:
case 2559:
case 249:
case 1850:
case 3603:
case 271:
case 1587:
case 2495:
case 1049:
case 2205:
case 1303:
case 3515:
case 1782:
case 2748:
case 995:
case 2258:
case 1724:
case 1636:
case 987:
case 2768:
case 3427:
case 1707:
case 2531:
case 3771:
case 1930:
case 2422:
case 735:
case 1888:
case 2484:
case 46:
case 1177:
case 2683:
case 328:
case 3376:
case 2280:
case 874:
case 2571:
case 2893:
case 3568:
case 983:
case 1509:
case 174:
case 1476:
case 3008:
case 1062:
case 1255:
case 3805:
case 3126:
case 44:
case 305:
case 2050:
case 1327:
case 2684:
case 2894:
case 1540:
case 1498:
case 2622:
case 2849:
case 3055:
case 789:
case 1436:
case 2267:
case 2429:
case 808:
case 1718:
case 3858:
case 1208:
case 2961:
case 2869:
case 3604:
case 3242:
case 1812:
case 3752:
case 1304:
case 1093:
case 1789:
case 1765:
case 2695:
case 3403:
case 2885:
case 2552:
case 3293:
case 3996:
case 3557:
case 269:
case 2088:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1757541602/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,];
var gg_b = "1757541602/";

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
