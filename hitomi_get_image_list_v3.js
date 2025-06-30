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
case 2241:
case 2089:
case 3331:
case 123:
case 2822:
case 115:
case 659:
case 3840:
case 418:
case 3449:
case 373:
case 3104:
case 3488:
case 534:
case 292:
case 2528:
case 1857:
case 2421:
case 1729:
case 2265:
case 3171:
case 494:
case 705:
case 2403:
case 389:
case 3229:
case 567:
case 2391:
case 1176:
case 3815:
case 2056:
case 2050:
case 50:
case 3644:
case 2932:
case 2682:
case 985:
case 2257:
case 808:
case 996:
case 1442:
case 3858:
case 529:
case 1336:
case 2647:
case 3169:
case 3968:
case 370:
case 2740:
case 1841:
case 1918:
case 3475:
case 1119:
case 3301:
case 283:
case 120:
case 1754:
case 1573:
case 2746:
case 2648:
case 4005:
case 3162:
case 1581:
case 1488:
case 3857:
case 2765:
case 742:
case 1917:
case 2215:
case 189:
case 432:
case 315:
case 3595:
case 3300:
case 1197:
case 173:
case 1104:
case 2854:
case 1449:
case 2063:
case 267:
case 2741:
case 1840:
case 2258:
case 2689:
case 2138:
case 3306:
case 2613:
case 3330:
case 1169:
case 20:
case 1968:
case 1722:
case 1323:
case 1858:
case 2385:
case 3336:
case 647:
case 45:
case 320:
case 3222:
case 4027:
case 1475:
case 3841:
case 3918:
case 579:
case 2426:
case 1374:
case 2535:
case 3176:
case 3044:
case 2757:
case 56:
case 2484:
case 2650:
case 1644:
case 2656:
case 3955:
case 327:
case 4088:
case 2196:
case 3763:
case 2847:
case 924:
case 2190:
case 177:
case 2481:
case 2588:
case 3521:
case 3428:
case 1713:
case 1312:
case 1058:
case 2178:
case 1641:
case 412:
case 3065:
case 503:
case 1251:
case 335:
case 4093:
case 214:
case 2549:
case 3751:
case 2029:
case 3100:
case 1665:
case 1304:
case 1397:
case 1015:
case 3106:
case 2575:
case 1369:
case 1334:
case 2308:
case 1282:
case 3136:
case 3256:
case 4075:
case 1101:
case 500:
case 1750:
case 369:
case 1756:
case 1174:
case 12:
case 541:
case 3370:
case 1046:
case 2953:
case 1584:
case 426:
case 3533:
case 2945:
case 643:
case 1526:
case 854:
case 1435:
case 1615:
case 1065:
case 3748:
case 135:
case 2629:
case 2856:
case 1844:
case 3015:
case 598:
case 2850:
case 3304:
case 58:
case 2495:
case 748:
case 1213:
case 514:
case 2394:
case 1658:
case 127:
case 1763:
case 3371:
case 3312:
case 3058:
case 3789:
case 3641:
case 1428:
case 974:
case 453:
case 1521:
case 2191:
case 2424:
case 845:
case 3584:
case 476:
case 3174:
case 3046:
case 1747:
case 546:
case 2889:
case 1640:
case 287:
case 17:
case 2480:
case 3520:
case 2022:
case 3282:
case 1256:
case 309:
case 2848:
case 3334:
case 560:
case 4087:
case 241:
case 169:
case 1383:
case 1782:
case 2177:
case 1057:
case 3756:
case 3427:
case 2587:
case 1962:
case 620:
case 414:
case 944:
case 3880:
case 1205:
case 3886:
case 3489:
case 2994:
case 2529:
case 2102:
case 212:
case 2281:
case 553:
case 4029:
case 2114:
case 2759:
case 2088:
case 83:
case 186:
case 381:
case 3904:
case 3997:
case 3448:
case 3192:
case 2366:
case 2360:
case 463:
case 1621:
case 48:
case 3003:
case 3895:
case 3168:
case 2311:
case 3969:
case 1026:
case 3456:
case 3033:
case 271:
case 2925:
case 2372:
case 1546:
case 3620:
case 1983:
case 226:
case 3557:
case 2780:
case 1881:
case 1143:
case 3735:
case 576:
case 2786:
case 1447:
case 1998:
case 875:
case 2132:
case 1021:
case 403:
case 386:
case 3451:
case 2310:
case 253:
case 2259:
case 1873:
case 2139:
case 1003:
case 2938:
case 2164:
case 1904:
case 1997:
case 2295:
case 1192:
case 1541:
case 1886:
case 3962:
case 1880:
case 147:
case 1117:
case 1824:
case 1565:
case 238:
case 2693:
case 441:
case 1735:
case 2087:
case 2675:
case 3976:
case 2224:
case 2828:
case 673:
case 1557:
case 3155:
case 2286:
case 3447:
case 3199:
case 2280:
case 571:
case 2522:
case 1859:
case 250:
case 1033:
case 2908:
case 999:
case 221:
case 1895:
case 3026:
case 1969:
case 1684:
case 2361:
case 4022:
case 400:
case 3919:
case 3633:
case 1620:
case 3983:
case 3084:
case 294:
case 2116:
case 2548:
case 1681:
case 492:
case 1931:
case 3293:
case 2110:
case 3906:
case 2887:
case 928:
case 2364:
case 2605:
case 2028:
case 1793:
case 3081:
case 1392:
case 480:
case 2221:
case 407:
case 3288:
case 2990:
case 772:
case 4089:
case 4013:
case 609:
case 2978:
case 830:
case 1833:
case 1788:
case 2179:
case 1095:
case 218:
case 2589:
case 3826:
case 1073:
case 2153:
case 1803:
case 2233:
case 101:
case 2627:
case 3742:
case 46:
case 3355:
case 3673:
case 306:
case 2145:
case 799:
case 361:
case 817:
case 3686:
case 2635:
case 4050:
case 858:
case 3454:
case 1368:
case 677:
case 2161:
case 3318:
case 140:
case 2556:
case 1544:
case 1080:
case 434:
case 1367:
case 2563:
case 594:
case 669:
case 1659:
case 722:
case 3095:
case 1429:
case 3059:
case 467:
case 4063:
case 3788:
case 3833:
case 343:
case 1293:
case 67:
case 3931:
case 2628:
case 2005:
case 2875:
case 744:
case 518:
case 1906:
case 2458:
case 3923:
case 2446:
case 1454:
case 1930:
case 2111:
case 3287:
case 2440:
case 3775:
case 3024:
case 340:
case 627:
case 3901:
case 3086:
case 2172:
case 2035:
case 1275:
case 1052:
case 2977:
case 1318:
case 249:
case 2220:
case 1399:
case 3242:
case 936:
case 3821:
case 1355:
case 4047:
case 1673:
case 2332:
case 824:
case 782:
case 1226:
case 2742:
case 149:
case 1220:
case 456:
case 3233:
case 1991:
case 3153:
case 261:
case 1027:
case 3726:
case 2355:
case 3457:
case 206:
case 15:
case 1733:
case 1446:
case 2680:
case 2930:
case 566:
case 2686:
case 3635:
case 3556:
case 603:
case 1893:
case 1582:
case 3161:
case 2624:
case 1172:
case 1977:
case 1314:
case 839:
case 2293:
case 1005:
case 394:
case 3441:
case 489:
case 2249:
case 2900:
case 2081:
case 3887:
case 3339:
case 1160:
case 2906:
case 3605:
case 793:
case 1458:
case 3364:
case 1551:
case 3996:
case 3465:
case 543:
case 1563:
case 132:
case 2659:
case 3589:
case 2826:
case 1721:
case 2820:
case 3203:
case 357:
case 2652:
case 2775:
case 99:
case 1635:
case 698:
case 3849:
case 2923:
case 4044:
case 2368:
case 68:
case 506:
case 3172:
case 2422:
case 2901:
case 3547:
case 2803:
case 1233:
case 1784:
case 201:
case 1627:
case 3226:
case 1457:
case 614:
case 420:
case 1720:
case 3888:
case 3332:
case 35:
case 874:
case 1145:
case 3027:
case 2242:
case 945:
case 415:
case 1221:
case 646:
case 332:
case 3302:
case 1996:
case 3721:
case 2317:
case 1203:
case 2788:
case 2833:
case 118:
case 1589:
case 962:
case 1513:
case 1116:
case 1548:
case 243:
case 2749:
case 2931:
case 3628:
case 1110:
case 1887:
case 3551:
case 1605:
case 3458:
case 1028:
case 660:
case 150:
case 2456:
case 1522:
case 2168:
case 2934:
case 121:
case 2969:
case 2727:
case 3311:
case 2684:
case 848:
case 3773:
case 1361:
case 3372:
case 47:
case 371:
case 3925:
case 1042:
case 1675:
case 1353:
case 1224:
case 2557:
case 634:
case 3132:
case 788:
case 3252:
case 469:
case 3835:
case 3102:
case 3529:
case 4065:
case 1649:
case 595:
case 2117:
case 2912:
case 1379:
case 2565:
case 2228:
case 1693:
case 3049:
case 896:
case 2021:
case 3759:
case 1316:
case 3088:
case 3795:
case 3827:
case 1259:
case 629:
case 1139:
case 2003:
case 2904:
case 281:
case 1295:
case 3366:
case 2970:
case 3828:
case 2881:
case 1786:
case 3224:
case 3353:
case 3752:
case 2199:
case 2447:
case 2998:
case 2235:
case 1805:
case 1937:
case 1687:
case 1724:
case 1642:
case 2026:
case 3109:
case 3522:
case 2084:
case 982:
case 2633:
case 3361:
case 2118:
case 126:
case 547:
case 1114:
case 295:
case 1827:
case 1759:
case 2603:
case 679:
case 286:
case 702:
case 3295:
case 4058:
case 1360:
case 3139:
case 3259:
case 2621:
case 3164:
case 477:
case 2728:
case 2962:
case 2515:
case 2167:
case 3649:
case 993:
case 968:
case 2852:
case 112:
case 1102:
case 1281:
case 797:
case 3379:
case 3308:
case 2256:
case 1473:
case 3185:
case 3575:
case 52:
case 346:
case 269:
case 2383:
case 632:
case 1177:
case 2319:
case 2057:
case 3744:
case 1325:
case 509:
case 3953:
case 1424:
case 3622:
case 4033:
case 3863:
case 2370:
case 2747:
case 1813:
case 1337:
case 1486:
case 2640:
case 2646:
case 27:
case 100:
case 3190:
case 933:
case 831:
case 3847:
case 3196:
case 103:
case 3178:
case 737:
case 363:
case 4003:
case 38:
case 3481:
case 2428:
case 2521:
case 2615:
case 65:
case 917:
case 3549:
case 3916:
case 314:
case 3910:
case 1629:
case 3882:
case 725:
case 3593:
case 649:
case 1960:
case 2100:
case 577:
case 2174:
case 160:
case 1622:
case 1863:
case 4020:
case 4026:
case 3424:
case 2584:
case 3480:
case 300:
case 3022:
case 1945:
case 984:
case 3486:
case 2435:
case 1575:
case 3848:
case 341:
case 2123:
case 657:
case 91:
case 2282:
case 209:
case 3244:
case 2101:
case 2427:
case 3325:
case 1851:
case 2750:
case 57:
case 146:
case 3972:
case 1744:
case 1961:
case 2131:
case 2748:
case 2251:
case 3629:
case 1916:
case 3850:
case 3966:
case 1029:
case 3495:
case 1882:
case 3960:
case 535:
case 1196:
case 303:
case 1847:
case 1190:
case 2405:
case 3394:
case 836:
case 704:
case 163:
case 1588:
case 2713:
case 1426:
case 1829:
case 3050:
case 844:
case 3433:
case 3391:
case 129:
case 4052:
case 520:
case 3932:
case 1656:
case 379:
case 3682:
case 10:
case 2968:
case 2722:
case 270:
case 2254:
case 2323:
case 638:
case 1527:
case 93:
case 1385:
case 406:
case 1047:
case 3746:
case 383:
case 2475:
case 3377:
case 3663:
case 2331:
case 904:
case 380:
case 3241:
case 134:
case 3089:
case 273:
case 2197:
case 1063:
case 167:
case 2449:
case 1258:
case 2840:
case 1689:
case 1964:
case 1939:
case 3265:
case 2171:
case 3902:
case 392:
case 1390:
case 2488:
case 3715:
case 3107:
case 2229:
case 816:
case 3651:
case 621:
case 2112:
case 676:
case 1378:
case 975:
case 289:
case 3108:
case 730:
case 3527:
case 2336:
case 3909:
case 401:
case 2487:
case 30:
case 2330:
case 2841:
case 1740:
case 1377:
case 2183:
case 2119:
case 251:
case 1125:
case 183:
case 2222:
case 2754:
case 1746:
case 2580:
case 2176:
case 329:
case 1050:
case 570:
case 3829:
case 2170:
case 4080:
case 1932:
case 1682:
case 910:
case 2955:
case 179:
case 440:
case 1137:
case 2524:
case 2865:
case 2999:
case 3650:
case 855:
case 192:
case 1902:
case 1528:
case 2857:
case 925:
case 443:
case 811:
case 3051:
case 1265:
case 3396:
case 671:
case 3215:
case 1651:
case 3505:
case 937:
case 1758:
case 1089:
case 2559:
case 1822:
case 215:
case 1914:
case 899:
case 3138:
case 3964:
case 3741:
case 3258:
case 733:
case 589:
case 3613:
case 3939:
case 4095:
case 964:
case 2300:
case 3854:
case 367:
case 4059:
case 2636:
case 3685:
case 2543:
case 1776:
case 596:
case 3298:
case 585:
case 1347:
case 1770:
case 2871:
case 2630:
case 90:
case 2812:
case 3276:
case 219:
case 895:
case 1798:
case 1532:
case 886:
case 3270:
case 608:
case 2023:
case 3283:
case 3219:
case 3122:
case 3734:
case 2140:
case 3091:
case 2208:
case 1269:
case 2411:
case 291:
case 746:
case 2158:
case 859:
case 714:
case 548:
case 3696:
case 2466:
case 1204:
case 1297:
case 3:
case 175:
case 3678:
case 478:
case 3564:
case 3825:
case 3539:
case 3704:
case 1096:
case 3797:
case 364:
case 2794:
case 2115:
case 1502:
case 1363:
case 3771:
case 3313:
case 4067:
case 78:
case 3389:
case 3905:
case 2031:
case 2600:
case 1769:
case 2225:
case 1122:
case 285:
case 1509:
case 741:
case 296:
case 1219:
case 1350:
case 3154:
case 3234:
case 3783:
case 4068:
case 2344:
case 2623:
case 2862:
case 2445:
case 3770:
case 3776:
case 1685:
case 1935:
case 2157:
case 96:
case 3532:
case 591:
case 3798:
case 2030:
case 2601:
case 2453:
case 700:
case 2036:
case 3085:
case 3677:
case 431:
case 352:
case 3129:
case 1771:
case 3928:
case 3762:
case 2631:
case 2479:
case 164:
case 137:
case 690:
case 3271:
case 1389:
case 1905:
case 1837:
case 980:
case 1348:
case 1696:
case 375:
case 3204:
case 3297:
case 4092:
case 1690:
case 3078:
case 428:
case 3351:
case 1825:
case 2410:
case 3096:
case 113:
case 125:
case 2141:
case 2592:
case 2738:
case 2819:
case 2416:
case 3730:
case 130:
case 2785:
case 3736:
case 384:
case 1230:
case 1701:
case 1150:
case 3572:
case 1468:
case 3354:
case 3223:
case 1561:
case 2070:
case 2076:
case 539:
case 3637:
case 1156:
case 2806:
case 1553:
case 3942:
case 1774:
case 3147:
case 2984:
case 3896:
case 3443:
case 654:
case 2291:
case 1545:
case 941:
case 3329:
case 2796:
case 455:
case 1891:
case 2790:
case 840:
case 117:
case 2365:
case 3467:
case 2604:
case 205:
case 524:
case 1113:
case 1988:
case 1638:
case 1189:
case 1492:
case 2830:
case 1200:
case 1148:
case 565:
case 780:
case 1206:
case 1993:
case 3231:
case 3700:
case 866:
case 3560:
case 133:
case 2062:
case 1877:
case 3566:
case 1094:
case 542:
case 2612:
case 2432:
case 3608:
case 946:
case 416:
case 3025:
case 729:
case 3774:
case 1147:
case 2933:
case 2619:
case 662:
case 3545:
case 1878:
case 2069:
case 1443:
case 1418:
case 1511:
case 184:
case 1730:
case 1201:
case 2670:
case 3322:
case 330:
case 3723:
case 2340:
case 2285:
case 1987:
case 3156:
case 3150:
case 1223:
case 3468:
case 1607:
case 861:
case 1694:
case 98:
case 1885:
case 3148:
case 69:
case 3731:
case 3492:
case 3949:
case 688:
case 3516:
case 3877:
case 224:
case 3007:
case 422:
case 505:
case 1700:
case 3993:
case 1151:
case 2414:
case 574:
case 1038:
case 2903:
case 3417:
case 2874:
case 2097:
case 242:
case 3189:
case 444:
case 4019:
case 3814:
case 390:
case 3922:
case 3508:
case 3127:
case 3401:
case 604:
case 2477:
case 2519:
case 1268:
case 1954:
case 3423:
case 1430:
case 2892:
case 2583:
case 1387:
case 1839:
case 2209:
case 2940:
case 1864:
case 1525:
case 1743:
case 2570:
case 3072:
case 382:
case 3802:
case 1799:
case 976:
case 3243:
case 3474:
case 4076:
case 4070:
case 2817:
case 1755:
case 299:
case 1672:
case 2732:
case 2124:
case 1128:
case 953:
case 851:
case 1767:
case 2562:
case 3060:
case 3616:
case 2303:
case 272:
case 2702:
case 757:
case 1666:
case 1660:
case 3832:
case 3388:
case 2868:
case 3349:
case 1400:
case 1292:
case 63:
case 2159:
case 938:
case 1809:
case 1406:
case 2264:
case 393:
case 3393:
case 3538:
case 3431:
case 3679:
case 405:
case 522:
case 2957:
case 1135:
case 1072:
case 2152:
case 2232:
case 1299:
case 3611:
case 2867:
case 1661:
case 3537:
case 1474:
case 2326:
case 511:
case 2569:
case 216:
case 1375:
case 1768:
case 190:
case 1814:
case 1508:
case 3436:
case 2485:
case 4069:
case 599:
case 3954:
case 439:
case 3268:
case 3406:
case 572:
case 3400:
case 2504:
case 2739:
case 2941:
case 193:
case 912:
case 1792:
case 1393:
case 2478:
case 1616:
case 555:
case 3594:
case 3507:
case 1610:
case 3128:
case 3767:
case 3016:
case 4071:
case 1717:
case 1832:
case 2490:
case 2202:
case 222:
case 610:
case 2496:
case 424:
case 2512:
case 2965:
case 3010:
case 1335:
case 1609:
case 2184:
case 3947:
case 3142:
case 2668:
case 491:
case 2120:
case 3009:
case 4074:
case 2126:
case 2055:
case 2523:
case 2272:
case 3816:
case 3483:
case 877:
case 1175:
case 1032:
case 95:
case 3187:
case 1860:
case 3632:
case 726:
case 3577:
case 1866:
case 2043:
case 2211:
case 1950:
case 2716:
case 362:
case 3602:
case 2260:
case 2531:
case 154:
case 1497:
case 1404:
case 1149:
case 528:
case 1948:
case 102:
case 4031:
case 82:
case 3951:
case 2067:
case 1596:
case 1412:
case 3853:
case 3064:
case 3963:
case 3614:
case 1664:
case 1639:
case 2779:
case 1188:
case 278:
case 1014:
case 809:
case 2692:
case 3845:
case 1578:
case 630:
case 2643:
case 3585:
case 2536:
case 1810:
case 2711:
case 1419:
case 1483:
case 721:
case 231:
case 3950:
case 1577:
case 3469:
case 1632:
case 2373:
case 3956:
case 2772:
case 4030:
case 1982:
case 2245:
case 1591:
case 3335:
case 2437:
case 3609:
case 19:
case 835:
case 2618:
case 2253:
case 2133:
case 1476:
case 1879:
case 1963:
case 1614:
case 3596:
case 1845:
case 3578:
case 3471:
case 684:
case 3305:
case 3664:
case 3639:
case 2395:
case 3149:
case 354:
case 4006:
case 3404:
case 61:
case 3948:
case 957:
case 1602:
case 162:
case 2359:
case 4000:
case 2766:
case 753:
case 1951:
case 3872:
case 2216:
case 1861:
case 2500:
case 302:
case 1395:
case 262:
case 639:
case 800:
case 887:
case 597:
case 3067:
case 2951:
case 1760:
case 3617:
case 1500:
case 2963:
case 2328:
case 3381:
case 554:
case 1092:
case 2039:
case 2853:
case 2064:
case 1279:
case 1103:
case 2462:
case 2845:
case 378:
case 1121:
case 1407:
case 3779:
case 3184:
case 2947:
case 3668:
case 624:
case 410:
case 1437:
case 3352:
case 3753:
case 288:
case 2470:
case 3745:
case 1068:
case 29:
case 3126:
case 4091:
case 1618:
case 2476:
case 2879:
case 1643:
case 1536:
case 2810:
case 3272:
case 2419:
case 3055:
case 2483:
case 642:
case 336:
case 131:
case 665:
case 2632:
case 1772:
case 901:
case 3408:
case 2596:
case 562:
case 3279:
case 2412:
case 846:
case 1381:
case 2664:
case 2913:
case 2639:
case 2188:
case 1779:
case 178:
case 1692:
case 2578:
case 297:
case 545:
case 4090:
case 3359:
case 3017:
case 1438:
case 254:
case 786:
case 3395:
case 1266:
case 2811:
case 860:
case 3500:
case 1617:
case 404:
case 3210:
case 2193:
case 1067:
case 1272:
case 2032:
case 88:
case 2175:
case 3530:
case 863:
case 1099:
case 3643:
case 3425:
case 3711:
case 906:
case 2956:
case 43:
case 1501:
case 3655:
case 1408:
case 2434:
case 59:
case 331:
case 1043:
case 2866:
case 2469:
case 2950:
case 3437:
case 74:
case 3386:
case 2609:
case 1574:
case 1018:
case 3245:
case 3618:
case 1120:
case 3133:
case 759:
case 3253:
case 1745:
case 814:
case 1126:
case 3915:
case 1478:
case 3562:
case 1181:
case 2066:
case 1843:
case 2105:
case 3321:
case 1855:
case 122:
case 696:
case 1496:
case 1899:
case 685:
case 1965:
case 3239:
case 3264:
case 3958:
case 2349:
case 3714:
case 1597:
case 1739:
case 1818:
case 293:
case 829:
case 2792:
case 2393:
case 959:
case 2653:
case 1709:
case 1569:
case 2218:
case 116:
case 2375:
case 2768:
case 2922:
case 2508:
case 3940:
case 94:
case 41:
case 311:
case 2645:
case 3186:
case 2072:
case 1957:
case 2135:
case 3570:
case 867:
case 1152:
case 1232:
case 1867:
case 2661:
case 3124:
case 3598:
case 706:
case 2474:
case 1868:
case 1195:
case 1714:
case 879:
case 2292:
case 2809:
case 2406:
case 155:
case 1264:
case 458:
case 3739:
case 3597:
case 344:
case 417:
case 3818:
case 2128:
case 3843:
case 2929:
case 2767:
case 3478:
case 981:
case 883:
case 3571:
case 1303:
case 172:
case 3496:
case 3899:
case 4007:
case 568:
case 2660:
case 3202:
case 322:
case 2611:
case 2342:
case 590:
case 766:
case 1180:
case 3867:
case 430:
case 1570:
case 701:
case 3152:
case 2537:
case 3326:
case 2755:
case 199:
case 1333:
case 1732:
case 807:
case 2045:
case 582:
case 316:
case 3569:
case 1477:
case 2954:
case 1946:
case 1583:
case 2839:
case 1173:
case 1209:
case 3485:
case 1940:
case 2718:
case 3790:
case 1315:
case 1278:
case 165:
case 1874:
case 2329:
case 631:
case 1004:
case 468:
case 3778:
case 1921:
case 3697:
case 2467:
case 533:
case 3365:
case 1296:
case 4066:
case 2694:
case 977:
case 1358:
case 2885:
case 3439:
case 85:
case 3830:
case 1823:
case 558:
case 2566:
case 2231:
case 2700:
case 2151:
case 1414:
case 1071:
case 2418:
case 3277:
case 1676:
case 3785:
case 756:
case 2730:
case 1831:
case 482:
case 3098:
case 2201:
case 4011:
case 3076:
case 92:
case 2182:
case 3806:
case 3144:
case 3800:
case 628:
case 2223:
case 1346:
case 3070:
case 3083:
case 1791:
case 490:
case 3634:
case 530:
case 2896:
case 3984:
case 2147:
case 2008:
case 1933:
case 3920:
case 139:
case 2274:
case 3926:
case 2625:
case 3662:
case 2200:
case 2148:
case 1671:
case 2516:
case 2949:
case 3358:
case 2510:
case 1464:
case 174:
case 3801:
case 3414:
case 3071:
case 233:
case 4010:
case 2877:
case 927:
case 1341:
case 2007:
case 324:
case 1612:
case 3097:
case 3315:
case 217:
case 1604:
case 105:
case 3296:
case 3402:
case 935:
case 2553:
case 1634:
case 584:
case 3791:
case 3432:
case 1926:
case 3619:
case 3933:
case 1291:
case 2545:
case 3683:
case 1920:
case 2322:
case 97:
case 1800:
case 2701:
case 2468:
case 1070:
case 3777:
case 720:
case 3340:
case 2156:
case 3285:
case 1806:
case 2236:
case 4064:
case 2696:
case 4039:
case 3158:
case 3460:
case 2564:
case 1410:
case 2797:
case 213:
case 1141:
case 1738:
case 504:
case 1416:
case 1819:
case 575:
case 264:
case 1876:
case 1006:
case 1898:
case 3031:
case 237:
case 876:
case 3600:
case 2262:
case 2712:
case 3606:
case 2905:
case 445:
case 1294:
case 2837:
case 821:
case 1207:
case 3001:
case 3980:
case 1623:
case 853:
case 951:
case 1445:
case 3630:
case 1862:
case 3871:
case 2077:
case 3636:
case 3986:
case 2894:
case 920:
case 1030:
case 3023:
case 3555:
case 1601:
case 3812:
case 3599:
case 2769:
case 210:
case 2122:
case 2734:
case 1708:
case 196:
case 1568:
case 2219:
case 3472:
case 3411:
case 3518:
case 769:
case 2091:
case 3140:
case 3973:
case 488:
case 2212:
case 3876:
case 1567:
case 3479:
case 3006:
case 1707:
case 2129:
case 5:
case 3000:
case 826:
case 2502:
case 3870:
case 2363:
case 348:
case 1606:
case 3294:
case 3207:
case 204:
case 3165:
case 513:
case 402:
case 3517:
case 2808:
case 2514:
case 1869:
case 2204:
case 2297:
case 1834:
case 275:
case 1995:
case 3883:
case 497:
case 4014:
case 2351:
case 3410:
case 2096:
case 396:
case 1472:
case 3225:
case 3674:
case 2382:
case 1140:
case 1208:
case 672:
case 2719:
case 1973:
case 1518:
case 2269:
case 1411:
case 1804:
case 2234:
case 1897:
case 2154:
case 2776:
case 1543:
case 72:
case 3237:
case 3157:
case 510:
case 1001:
case 2770:
case 1871:
case 2347:
case 3445:
case 1630:
case 956:
case 1924:
case 3453:
case 1599:
case 119:
case 655:
case 23:
case 3601:
case 1023:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1751256002/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,];
var gg_b = "1751256002/";

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
