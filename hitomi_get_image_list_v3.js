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
case 633:
case 3837:
case 3384:
case 139:
case 4028:
case 3875:
case 3481:
case 1618:
case 2309:
case 2553:
case 806:
case 2176:
case 3812:
case 3566:
case 1929:
case 3446:
case 1539:
case 2336:
case 867:
case 102:
case 3986:
case 705:
case 3606:
case 1355:
case 1019:
case 511:
case 2:
case 3038:
case 3006:
case 1832:
case 162:
case 3865:
case 1676:
case 1423:
case 1538:
case 3576:
case 3153:
case 1817:
case 3945:
case 238:
case 2308:
case 1833:
case 3485:
case 453:
case 3871:
case 3120:
case 1266:
case 492:
case 2754:
case 585:
case 73:
case 3791:
case 2592:
case 2484:
case 1687:
case 2898:
case 3755:
case 3409:
case 2940:
case 1907:
case 1197:
case 447:
case 135:
case 1780:
case 841:
case 3587:
case 2860:
case 2346:
case 4011:
case 2778:
case 1972:
case 1784:
case 3082:
case 576:
case 4062:
case 3282:
case 379:
case 3083:
case 709:
case 1973:
case 729:
case 2790:
case 4007:
case 2187:
case 3902:
case 1583:
case 3682:
case 2779:
case 3193:
case 718:
case 446:
case 180:
case 1888:
case 3249:
case 2121:
case 3192:
case 2768:
case 348:
case 2716:
case 3935:
case 3751:
case 394:
case 1287:
case 1843:
case 3525:
case 577:
case 1087:
case 3648:
case 1479:
case 21:
case 2794:
case 589:
case 936:
case 1625:
case 1468:
case 1416:
case 3949:
case 2644:
case 3878:
case 3572:
case 3003:
case 1211:
case 672:
case 1426:
case 2163:
case 1673:
case 3667:
case 3573:
case 3156:
case 1704:
case 3869:
case 1836:
case 3798:
case 1672:
case 3202:
case 1700:
case 1358:
case 2747:
case 1921:
case 1263:
case 2111:
case 1531:
case 51:
case 3631:
case 304:
case 289:
case 3035:
case 1062:
case 3764:
case 1262:
case 3562:
case 2115:
case 3770:
case 1535:
case 2556:
case 146:
case 2173:
case 3799:
case 480:
case 3442:
case 1663:
case 1577:
case 42:
case 3563:
case 1207:
case 1007:
case 3443:
case 3635:
case 1662:
case 2040:
case 364:
case 40:
case 188:
case 1215:
case 2317:
case 842:
case 2333:
case 1808:
case 655:
case 1611:
case 1015:
case 1273:
case 340:
case 2044:
case 2997:
case 883:
case 2107:
case 3267:
case 2332:
case 1359:
case 3511:
case 1503:
case 3982:
case 3774:
case 3067:
case 2851:
case 84:
case 3245:
case 3758:
case 323:
case 303:
case 3196:
case 1364:
case 773:
case 1541:
case 897:
case 2713:
case 1461:
case 491:
case 2737:
case 351:
case 1360:
case 1846:
case 3114:
case 285:
case 1827:
case 1918:
case 949:
case 3304:
case 2128:
case 1413:
case 1437:
case 402:
case 2389:
case 2761:
case 4076:
case 1029:
case 3850:
case 884:
case 512:
case 1229:
case 1130:
case 2596:
case 1374:
case 101:
case 3405:
case 2034:
case 896:
case 1471:
case 2343:
case 121:
case 3645:
case 3433:
case 363:
case 3417:
case 3041:
case 3241:
case 230:
case 67:
case 2388:
case 659:
case 1976:
case 3823:
case 3854:
case 1465:
case 2957:
case 153:
case 211:
case 5:
case 1134:
case 2514:
case 4018:
case 1545:
case 4066:
case 1346:
case 2025:
case 2621:
case 3183:
case 951:
case 2197:
case 235:
case 1593:
case 2225:
case 546:
case 3182:
case 1940:
case 768:
case 3693:
case 349:
case 1769:
case 3804:
case 790:
case 1484:
case 2889:
case 923:
case 1097:
case 1944:
case 3800:
case 477:
case 1125:
case 2973:
case 871:
case 2395:
case 1864:
case 3709:
case 3455:
case 2469:
case 588:
case 2549:
case 963:
case 1768:
case 1716:
case 2494:
case 59:
case 280:
case 22:
case 3597:
case 3451:
case 1187:
case 3292:
case 3350:
case 2221:
case 834:
case 1794:
case 3092:
case 2842:
case 2548:
case 2625:
case 728:
case 2087:
case 3956:
case 11:
case 2962:
case 2490:
case 1385:
case 2287:
case 1119:
case 1858:
case 650:
case 501:
case 2666:
case 904:
case 1309:
case 1934:
case 924:
case 291:
case 715:
case 607:
case 3378:
case 1:
case 3746:
case 1930:
case 2506:
case 3727:
case 592:
case 485:
case 2019:
case 666:
case 2355:
case 1057:
case 1336:
case 202:
case 816:
case 2076:
case 2817:
case 3491:
case 2422:
case 138:
case 2619:
case 3557:
case 781:
case 3394:
case 2423:
case 1118:
case 2538:
case 1859:
case 1166:
case 3220:
case 606:
case 3368:
case 3024:
case 561:
case 430:
case 3253:
case 3996:
case 3224:
case 3379:
case 2266:
case 667:
case 3106:
case 1723:
case 964:
case 411:
case 2066:
case 817:
case 3390:
case 2018:
case 3701:
case 2461:
case 1737:
case 2028:
case 696:
case 2541:
case 95:
case 1712:
case 3326:
case 1634:
case 859:
case 3010:
case 1389:
case 2966:
case 2881:
case 2475:
case 3953:
case 185:
case 2629:
case 3296:
case 3924:
case 313:
case 3458:
case 2360:
case 87:
case 782:
case 3534:
case 994:
case 2471:
case 1343:
case 221:
case 2885:
case 2374:
case 3610:
case 201:
case 3732:
case 986:
case 64:
case 539:
case 2229:
case 3696:
case 2130:
case 3733:
case 2029:
case 438:
case 591:
case 253:
case 111:
case 1514:
case 3705:
case 3459:
case 2976:
case 1388:
case 2919:
case 2370:
case 502:
case 1030:
case 2672:
case 3135:
case 29:
case 52:
case 247:
case 2567:
case 1400:
case 1644:
case 756:
case 50:
case 2447:
case 3337:
case 2262:
case 3498:
case 3102:
case 3884:
case 3993:
case 1640:
case 2607:
case 3256:
case 2062:
case 2809:
case 3312:
case 177:
case 1111:
case 3371:
case 2007:
case 1040:
case 700:
case 1556:
case 2925:
case 2663:
case 370:
case 2577:
case 78:
case 254:
case 1115:
case 2535:
case 1107:
case 1332:
case 2140:
case 2359:
case 2072:
case 41:
case 3499:
case 56:
case 2611:
case 176:
case 2015:
case 1044:
case 3742:
case 993:
case 1244:
case 2215:
case 1333:
case 1449:
case 1208:
case 71:
case 4042:
case 2844:
case 3678:
case 128:
case 108:
case 3294:
case 1569:
case 397:
case 1873:
case 1008:
case 34:
case 2655:
case 3867:
case 2580:
case 636:
case 4043:
case 3669:
case 823:
case 803:
case 1578:
case 971:
case 3320:
case 218:
case 2749:
case 400:
case 3268:
case 4088:
case 2492:
case 3421:
case 3016:
case 3068:
case 3509:
case 3353:
case 851:
case 3090:
case 3831:
case 457:
case 48:
case 269:
case 3352:
case 1989:
case 3290:
case 3079:
case 498:
case 3668:
case 1590:
case 396:
case 1863:
case 3797:
case 1942:
case 599:
case 1209:
case 510:
case 2782:
case 229:
case 1943:
case 209:
case 3835:
case 934:
case 1862:
case 1009:
case 1608:
case 2319:
case 2970:
case 2999:
case 3078:
case 3803:
case 119:
case 1357:
case 3269:
case 4089:
case 2376:
case 232:
case 358:
case 3069:
case 3184:
case 2291:
case 3222:
case 2695:
case 1753:
case 2830:
case 3223:
case 3023:
case 4005:
case 3961:
case 2420:
case 3054:
case 1752:
case 3392:
case 3250:
case 1646:
case 1627:
case 4033:
case 3050:
case 265:
case 3581:
case 3418:
case 1681:
case 3527:
case 3393:
case 738:
case 3975:
case 1085:
case 1901:
case 3913:
case 4032:
case 3937:
case 2834:
case 3650:
case 205:
case 614:
case 3585:
case 1246:
case 443:
case 1227:
case 2738:
case 917:
case 1195:
case 1905:
case 595:
case 7:
case 482:
case 1685:
case 1081:
case 1550:
case 3419:
case 3622:
case 383:
case 1933:
case 712:
case 3845:
case 1917:
case 1397:
case 1523:
case 115:
case 2295:
case 1554:
case 2959:
case 3654:
case 2181:
case 3623:
case 3965:
case 1828:
case 1601:
case 3839:
case 3637:
case 1512:
case 2132:
case 525:
case 3675:
case 1340:
case 1575:
case 2741:
case 3730:
case 3429:
case 1537:
case 3501:
case 2133:
case 1513:
case 3734:
case 1032:
case 481:
case 2372:
case 85:
case 2059:
case 2259:
case 3806:
case 4085:
case 1232:
case 1017:
case 1441:
case 2373:
case 1233:
case 1344:
case 3517:
case 3533:
case 1710:
case 2857:
case 3954:
case 3061:
case 2659:
case 1632:
case 3665:
case 182:
case 848:
case 3923:
case 1876:
case 1565:
case 4046:
case 1796:
case 1633:
case 1158:
case 4027:
case 1819:
case 1985:
case 1201:
case 3213:
case 2362:
case 886:
case 3356:
case 2410:
case 3037:
case 565:
case 2363:
case 415:
case 2496:
case 3212:
case 3505:
case 2058:
case 2745:
case 2258:
case 3950:
case 1714:
case 273:
case 231:
case 1243:
case 1689:
case 1909:
case 2274:
case 1043:
case 408:
case 326:
case 2329:
case 2188:
case 1242:
case 2504:
case 529:
case 1199:
case 1821:
case 1042:
case 3744:
case 2660:
case 3589:
case 306:
case 3472:
case 1547:
case 875:
case 1936:
case 2731:
case 2955:
case 1467:
case 3969:
case 157:
case 2664:
case 2070:
case 2299:
case 2142:
case 1288:
case 120:
case 1330:
case 100:
case 3647:
case 2099:
case 2270:
case 3849:
case 2951:
case 2064:
case 2328:
case 2735:
case 1402:
case 777:
case 1198:
case 852:
case 350:
case 2264:
case 3588:
case 1756:
case 3104:
case 893:
case 3994:
case 3047:
case 1403:
case 3226:
case 160:
case 1160:
case 789:
case 3026:
case 307:
case 518:
case 2298:
case 1643:
case 4036:
case 3542:
case 1164:
case 419:
case 3979:
case 1089:
case 2456:
case 3310:
case 972:
case 2060:
case 366:
case 2703:
case 569:
case 3100:
case 3968:
case 3543:
case 3916:
case 468:
case 2260:
case 1185:
case 2752:
case 543:
case 3718:
case 2406:
case 814:
case 2753:
case 2724:
case 967:
case 1091:
case 1830:
case 1291:
case 3349:
case 2285:
case 1387:
case 281:
case 1834:
case 3123:
case 640:
case 1424:
case 926:
case 2646:
case 2191:
case 2281:
case 3348:
case 3810:
case 1325:
case 966:
case 125:
case 2195:
case 722:
case 2246:
case 2828:
case 3591:
case 2522:
case 1959:
case 3382:
case 1181:
case 3457:
case 2523:
case 2438:
case 1295:
case 215:
case 2554:
case 1127:
case 2933:
case 739:
case 3814:
case 2917:
case 3383:
case 837:
case 3190:
case 2636:
case 598:
case 2872:
case 1655:
case 3306:
case 2793:
case 499:
case 1964:
case 1051:
case 560:
case 2569:
case 2873:
case 410:
case 3555:
case 2008:
case 2449:
case 2208:
case 3168:
case 2815:
case 3721:
case 1844:
case 2792:
case 228:
case 3684:
case 663:
case 2151:
case 3339:
case 2807:
case 813:
case 3904:
case 2609:
case 1840:
case 1366:
case 359:
case 4070:
case 70:
case 556:
case 3194:
case 118:
case 1749:
case 1960:
case 1584:
case 2568:
case 1136:
case 2516:
case 474:
case 2862:
case 2009:
case 3169:
case 1782:
case 129:
case 3084:
case 1974:
case 2863:
case 2942:
case 3178:
case 1651:
case 500:
case 2236:
case 2036:
case 2594:
case 4060:
case 557:
case 3725:
case 3338:
case 2811:
case 2608:
case 2483:
case 3551:
case 2821:
case 2042:
case 1660:
case 3598:
case 2199:
case 3773:
case 3440:
case 2431:
case 4051:
case 652:
case 2689:
case 2243:
case 1698:
case 2887:
case 3560:
case 845:
case 693:
case 418:
case 1070:
case 3564:
case 1299:
case 2288:
case 1142:
case 3341:
case 220:
case 316:
case 1731:
case 1955:
case 2174:
case 590:
case 257:
case 1664:
case 2526:
case 28:
case 754:
case 3386:
case 2547:
case 568:
case 2936:
case 1143:
case 2160:
case 3200:
case 298:
case 2688:
case 1699:
case 3000:
case 260:
case 508:
case 1777:
case 942:
case 429:
case 2756:
case 3570:
case 3762:
case 1328:
case 1735:
case 528:
case 79:
case 1260:
case 3574:
case 3711:
case 3126:
case 2642:
case 1674:
case 1098:
case 2435:
case 1298:
case 2643:
case 1702:
case 747:
case 2537:
case 1117:
case 1658:
case 1133:
case 2513:
case 2575:
case 753:
case 195:
case 3853:
case 1132:
case 2205:
case 2981:
case 1307:
case 43:
case 2818:
case 3331:
case 648:
case 2561:
case 2441:
case 3430:
case 2033:
case 465:
case 94:
case 686:
case 2232:
case 371:
case 2633:
case 1414:
case 2617:
case 2158:
case 243:
case 425:
case 1311:
case 3175:
case 1857:
case 2632:
case 2876:
case 3302:
case 3137:
case 958:
case 1101:
case 3113:
case 1745:
case 1258:
case 2714:
case 4095:
case 1363:
case 679:
case 2605:
case 65:
case 2001:
case 3377:
case 2201:
case 334:
case 3161:
case 1362:
case 984:
case 3728:
case 2314:
case 2883:
case 2247:
case 207:
case 1200:
case 1763:
case 54:
case 2994:
case 2411:
case 724:
case 2226:
case 1599:
case 4084:
case 2104:
case 2588:
case 3777:
case 2882:
case 597:
case 3951:
case 3735:
case 3064:
case 2100:
case 4080:
case 3260:
case 1147:
case 2463:
case 1574:
case 2396:
case 622:
case 3456:
case 2848:
case 3674:
case 1204:
case 2542:
case 1004:
case 812:
case 3660:
case 2589:
case 206:
case 584:
case 2744:
case 662:
case 3274:
case 399:
case 2407:
case 3767:
case 596:
case 1440:
case 981:
case 331:
case 740:
case 1772:
case 2978:
case 3270:
case 2415:
case 3070:
case 2626:
case 3299:
case 764:
case 1980:
case 3142:
case 267:
case 3664:
case 2740:
case 47:
case 3955:
case 3500:
case 1386:
case 3991:
case 968:
case 1559:
case 990:
case 2532:
case 919:
case 751:
case 2923:
case 2261:
case 2428:
case 3101:
case 2533:
case 1302:
case 2517:
case 373:
case 81:
case 2012:
case 2950:
case 3496:
case 2212:
case 3058:
case 2505:
case 66:
case 2013:
case 2356:
case 3410:
case 1335:
case 2237:
case 703:
case 2213:
case 134:
case 2075:
case 2501:
case 60:
case 3117:
case 3658:
case 2429:
case 1824:
case 2675:
case 1331:
case 3132:
case 763:
case 680:
case 241:
case 3786:
case 2839:
case 1852:
case 2613:
case 1434:
case 3315:
case 3373:
case 1430:
case 542:
case 3995:
case 3105:
case 2265:
case 3259:
case 3372:
case 171:
case 2734:
case 583:
case 1820:
case 2971:
case 1348:
case 647:
case 172:
case 325:
case 3325:
case 1896:
case 2585:
case 541:
case 2650:
case 1719:
case 1591:
case 876:
case 2623:
case 2476:
case 2654:
case 242:
case 1382:
case 2845:
case 1383:
case 283:
case 998:
case 2419:
case 3146:
case 2023:
case 654:
case 33:
case 2223:
case 646:
case 957:
case 2841:
case 3830:
case 3091:
case 920:
case 900:
case 3291:
case 2222:
case 3834:
case 2937:
case 471:
case 3387:
case 688:
case 752:
case 2393:
case 2527:
case 1154:
case 2466:
case 155:
case 1123:
case 2418:
case 2912:
case 365:
case 3453:
case 1122:
case 2392:
case 889:
case 2250:
case 506:
case 2835:
case 787:
case 309:
case 284:
case 3782:
case 2877:
case 2679:
case 296:
case 2668:
case 1178:
case 2184:
case 2508:
case 4004:
case 830:
case 2269:
case 332:
case 567:
case 3255:
case 1725:
case 1497:
case 417:
case 3999:
case 2078:
case 2694:
case 3970:
case 1190:
case 786:
case 3964:
case 3580:
case 2867:
case 2669:
case 1306:
case 527:
case 24:
case 1179:
case 297:
case 2294:
case 794:
case 2926:
case 1721:
case 2947:
case 2094:
case 2678:
case 1900:
case 2487:
case 2290:
case 885:
case 3366:
case 2279:
case 2831:
case 748:
case 1904:
case 3493:
case 566:
case 1194:
case 416:
case 2068:
case 692:
case 2216:
case 2421:
case 3584:
case 3960:
case 318:
case 653:
case 3749:
case 1261:
case 1533:
case 2302:
case 1665:
case 382:
case 3632:
case 713:
case 3876:
case 1954:
case 932:
case 2175:
case 1061:
case 2559:
case 1838:
case 3565:
case 3617:
case 3819:
case 82:
case 3445:
case 2728:
case 909:
case 1237:
case 1671:
case 3985:
case 3201:
case 737:
case 2161:
case 1013:
case 1356:
case 442:
case 1505:
case 3571:
case 1012:
case 1950:
case 141:
case 3005:
case 2558:
case 4023:
case 3601:
case 1613:
case 2331:
case 3818:
case 3340:
case 3159:
case 3512:
case 2165:
case 3205:
case 4022:
case 1612:
case 2853:
case 2824:
case 1501:
case 918:
case 3537:
case 3486:
case 271:
case 736:
case 2367:
case 1806:
case 2729:
case 3033:
case 61:
case 2430:
case 3344:
case 3217:
case 3233:
case 3402:
case 2570:
case 2762:
case 2599:
case 3756:
case 1588:
case 1882:
case 2000:
case 2763:
case 127:
case 496:
case 1883:
case 2345:
case 862:
case 3908:
case 2004:
case 3435:
case 458:
case 3289:
case 4069:
case 3089:
case 356:
case 1979:
case 1310:
case 559:
case 3164:
case 714:
case 2126:
case 2574:
case 1396:
case 57:
case 166:
case 4078:
case 3825:
case 1543:
case 1968:
case 638:
case 2560:
case 2772:
case 1407:
case 3043:
case 44:
case 2440:
case 2604:
case 891:
case 497:
case 1589:
case 106:
case 2715:
case 2707:
case 4090:
case 1969:
case 1740:
case 3174:
case 93:
case 320:
case 3330:
case 2341:
case 216:
case 1626:
case 2564:
case 4068:
case 1978:
case 1849:
case 2444:
case 1415:
case 4026:
case 1668:
case 1616:
case 801:
case 973:
case 3942:
case 821:
case 196:
case 4047:
case 3579:
case 3863:
case 2084:
case 1877:
case 3155:
case 3209:
case 3862:
case 3009:
case 3943:
case 1690:
case 3568:
case 2284:
case 184:
case 1278:
case 3608:
case 3483:
case 749:
case 390:
case 2725:
case 1803:
case 2280:
case 466:
case 853:
case 3988:
case 3482:
case 3036:
case 3357:
case 685:
case 3236:
case 158:
case 1069:
case 3815:
case 2721:
case 1947:
case 3792:
case 1094:
case 3208:
case 2116:
case 1294:
case 426:
case 308:
case 3569:
case 3873:
case 1926:
case 1669:
case 2306:
case 3793:
case 2179:
case 2190:
case 3872:
case 2787:
case 1320:
case 533:
case 611:
case 1353:
case 2194:
case 259:
case 1068:
case 467:
case 1831:
case 517:
case 27:
case 2339:
case 3151:
case 2684:
case 1585:
case 1650:
case 3195:
case 1757:
case 2348:
case 272:
case 2776:
case 4061:
case 3081:
case 3550:
case 846:
case 3685:
case 1845:
case 3917:
case 571:
case 1419:
case 689:
case 3523:
case 1623:
case 4013:
case 888:
case 677:
case 2382:
case 2591:
case 3522:
case 974:
case 4075:
case 745:
case 1022:
case 1841:
case 3406:
case 2766:
case 4071:
case 441:
case 1961:
case 3752:
case 1023:
case 847:
case 2122:
case 1392:
case 910:
case 1581:
case 3829:
case 3627:
case 1527:
case 1975:
case 1466:
case 2123:
case 1418:
case 676:
case 999:
case 1937:
case 3720:
case 1546:
case 3901:
case 4065:
case 3285:
case 3439:
case 381:
case 1186:
case 1732:
case 3034:
case 1610:
case 608:
case 3596:
case 4020:
case 136:
case 1141:
case 3342:
case 809:
case 829:
case 3514:
case 90:
case 311:
case 2432:
case 575:
case 2823:
case 2086:
case 1459:
case 4052:
case 980:
case 330:
case 3129:
case 2241:
case 263:
case 2822:
case 2417:
case 2041:
case 3891:
case 3030:
case 2645:
case 4024:
case 1614:
case 1920:
case 593:
case 1701:
case 2906:
case 96:
case 1530:
case 552:
case 3712:
case 1326:
case 203:
case 2641:
case 2196:
case 3630:
case 223:
case 2245:
case 2758:
case 1952:
case 3761:
case 2939:
case 690:
case 2304:
case 2529:
case 1210:
case 935:
case 1924:
case 1953:
case 619:
case 385:
case 1145:
case 2114:
case 869:
case 1534:
case 251:
case 113:
case 3040:
case 767:
case 825:
case 3172:
case 2443:
case 1371:
case 1474:
case 1656:
case 3305:
case 2948:
case 805:
case 2879:
case 170:
case 3556:
case 1788:
case 3173:
case 2562:
case 3115:
case 2868:
case 2602:
case 2511:
case 962:
case 2982:
case 3107:
case 3332:
case 240:
case 2894:
case 3997:
case 376:
case 4092:
case 2603:
case 478:
case 1470:
case 3333:
case 3244:
case 3317:
case 681:
case 1544:
case 766:
case 2202:
case 3162:
case 1361:
case 1789:
case 2798:
case 449:
case 3855:
case 922:
case 2573:
case 2667:
case 2156:
case 2869:
case 2203:
case 3163:
case 2760:
case 2003:
case 2949:
case 3400:
case 3644:
case 224:
case 1313:
case 3301:
case 2235:
case 1337:
case 991:
case 2489:
case 1056:
case 586:
case 707:
case 389:
case 2277:
case 615:
case 1103:
case 1540:
case 3111:
case 3726:
case 1312:
case 377:
case 2507:
case 1992:
case 248:
case 1322:
case 3121:
case 3870:
case 2683:
case 3697:
case 2903:
case 2682:
case 1597:
case 1323:
case 953:
case 2902:
case 1451:
case 178:
case 524:
case 1350:
case 1149:
case 74:
case 1708:
case 504:
case 1092:
case 1956:
case 873:
case 901:
case 31:
case 2525:
case 2977:
case 294:
case 2751:
case 1692:
case 3860:
case 758:
case 682:
case 3327:
case 149:
case 2755:
case 1182:
case 2409:
case 2248:
case 3940:
case 1736:
case 3898:
case 3592:
case 3484:
case 414:
case 3944:
case 2649:
case 2826:
case 2083:
case 287:
case 3125:
case 796:
case 3308:
case 293:
case 988:
case 1914:
case 1491:
case 3750:
case 2576:
case 436:
case 252:
case 2638:
case 2124:
case 1557:
case 2206:
case 3166:
case 3859:
case 3118:
case 2519:
case 523:
case 1785:
case 954:
case 1024:
case 3722:
case 1368:
case 2791:
case 657:
case 1996:
case 946:
case 1224:
case 1253:
case 1379:
case 1106:
case 1252:
case 551:
case 2485:
case 2871:
case 2120:
case 2239:
case 600:
case 899:
case 3858:
case 3119:
case 1138:
case 2566:
case 4014:
case 831:
case 1653:
case 3553:
case 783:
case 3524:
case 698:
case 2837:
case 3934:
case 810:
case 644:
case 2038:
case 1746:
case 413:
case 1378:
case 3:
case 656:
case 2380:
case 3930:
case 2941:
case 2238:
case 1495:
case 3257:
case 2606:
case 99:
case 1781:
case 1369:
case 563:
case 4010:
case 2986:
case 1620:
case 2861:
case 3535:
case 1562:
case 1770:
case 354:
case 1868:
case 1816:
case 3925:
case 549:
case 270:
case 3577:
case 4049:
case 3663:
case 346:
case 1799:
case 2474:
case 1563:
case 1677:
case 1890:
case 1031:
case 164:
case 716:
case 2371:
case 1635:
case 3808:
case 3502:
case 3015:
case 3273:
case 1894:
case 486:
case 2742:
case 2499:
case 3611:
case 3503:
case 2131:
case 3359:
case 1774:
case 1982:
case 665:
case 2365:
case 494:
case 1067:
case 2743:
case 815:
case 9:
case 3447:
case 3011:
case 1949:
case 3567:
case 3673:
case 3211:
case 3426:
case 1573:
case 39:
case 3704:
case 2544:
case 1515:
case 4048:
case 3836:
case 3672:
case 214:
case 2992:
case 3921:
case 3700:
case 45:
case 3263:
case 2540:
case 2256:
case 3062:
case 3809:
case 2993:
case 1631:
case 1277:
case 124:
case 3987:
case 2313:
case 2884:
case 578:
case 1077:
case 2498:
case 1235:
case 2337:
case 3262:
case 1489:
case 2056:
case 2733:
case 236:
case 3130:
case 452:
case 771:
case 2732:
case 321:
case 3885:
case 1417:
case 1645:
case 3919:
case 1528:
case 819:
case 3370:
case 2614:
case 1433:
case 1938:
case 1432:
case 1854:
case 1823:
case 3976:
case 1086:
case 2459:
case 3628:
case 1286:
case 3545:
case 618:
case 353:
case 123:
case 2214:
case 609:
case 1758:
case 629:
case 103:
case 2530:
case 3541:
case 1110:
case 3364:
case 3028:
case 808:
case 4038:
case 2534:
case 2458:
case 213:
case 3360:
case 3846:
case 3629:
case 3412:
case 3827:
case 2924:
case 2010:
case 3437:
case 2952:
case 361:
case 3413:
case 1401:
case 3351:
case 1519:
case 860:
case 2785:
case 537:
case 3538:
case 898:
case 3454:
case 362:
case 3676:
case 2020:
case 1576:
case 1638:
case 3833:
case 2914:
case 3422:
case 3619:
case 2252:
case 2390:
case 3066:
case 1485:
case 1239:
case 1039:
case 4086:
case 3218:
case 2379:
case 2106:
case 2910:
case 844:
case 463:
case 856:
case 2053:
case 4041:
case 2024:
case 391:
case 3801:
case 1384:
case 1813:
case 989:
case 536:
case 3157:
case 3618:
case 1481:
case 977:
case 2138:
case 1566:
case 1518:
case 3929:
case 1795:
case 1812:
case 2653:
case 1446:
case 3539:
case 1861:
case 3355:
case 2781:
case 2369:
case 322:
case 175:
case 1238:
case 2727:
case 857:
case 1038:
case 2746:
case 3219:
case 4031:
case 3583:
case 30:
case 2451:
case 32:
case 2597:
case 930:
case 1049:
case 77:
case 882:
case 148:
case 1683:
case 1192:
case 514:
case 3287:
case 4067:
case 2093:
case 3843:
case 1935:
case 3490:
case 1751:
case 3479:
case 1977:
case 1648:
case 440:
case 186:
case 3842:
case 2092:
case 2292:
case 3468:
case 2736:
case 3687:
case 1521:
case 249:
case 3907:
case 2804:
case 1248:
case 1409:
case 1931:
case 3225:
case 2183:
case 4003:
case 1587:
case 3025:
case 4077:
case 424:
case 673:
case 3549:
case 1436:
case 3784:
case 3469:
case 4035:
case 2148:
case 179:
case 1967:
case 36:
case 404:
case 2709:
case 2455:
case 1083:
case 2800:
case 1847:
case 1283:
case 3915:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1749466802/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,];
var gg_b = "1749466802/";

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
