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
case 1261:
case 1797:
case 2509:
case 1346:
case 2633:
case 2965:
case 1258:
case 3056:
case 3950:
case 1011:
case 2484:
case 2327:
case 2330:
case 3209:
case 3751:
case 513:
case 438:
case 3768:
case 156:
case 3904:
case 1487:
case 861:
case 1429:
case 386:
case 3744:
case 3775:
case 1170:
case 1503:
case 287:
case 3199:
case 1293:
case 1555:
case 795:
case 1306:
case 612:
case 652:
case 1899:
case 681:
case 2860:
case 414:
case 2149:
case 1571:
case 1792:
case 1482:
case 3886:
case 3037:
case 3249:
case 1586:
case 1625:
case 1186:
case 3615:
case 2299:
case 2322:
case 429:
case 3926:
case 3107:
case 3634:
case 2313:
case 796:
case 3446:
case 377:
case 2496:
case 1578:
case 308:
case 76:
case 3507:
case 1165:
case 3142:
case 2610:
case 26:
case 3793:
case 3958:
case 920:
case 2417:
case 2970:
case 2786:
case 3961:
case 2804:
case 2076:
case 639:
case 2903:
case 2743:
case 3292:
case 1250:
case 4014:
case 69:
case 2207:
case 296:
case 1033:
case 1251:
case 3502:
case 500:
case 1949:
case 143:
case 3066:
case 2955:
case 886:
case 1268:
case 1847:
case 3028:
case 1018:
case 3547:
case 3382:
case 2202:
case 2770:
case 3297:
case 2868:
case 1594:
case 2116:
case 3894:
case 67:
case 155:
case 2875:
case 2412:
case 2039:
case 2516:
case 3335:
case 403:
case 1976:
case 1739:
case 1780:
case 1463:
case 3675:
case 106:
case 140:
case 3398:
case 3651:
case 1885:
case 3585:
case 1070:
case 3668:
case 121:
case 3521:
case 687:
case 3811:
case 1821:
case 252:
case 1111:
case 281:
case 1697:
case 765:
case 3556:
case 1490:
case 1856:
case 446:
case 3121:
case 2009:
case 3305:
case 2285:
case 2469:
case 891:
case 1043:
case 3137:
case 3120:
case 1725:
case 3479:
case 3715:
case 867:
case 1110:
case 11:
case 1086:
case 15:
case 675:
case 1510:
case 3288:
case 858:
case 38:
case 3520:
case 3537:
case 3457:
case 2918:
case 2188:
case 1692:
case 2933:
case 4091:
case 2049:
case 2237:
case 830:
case 1055:
case 529:
case 3363:
case 2576:
case 2643:
case 1498:
case 228:
case 4005:
case 3693:
case 2301:
case 2181:
case 3467:
case 3225:
case 2911:
case 2092:
case 1078:
case 3276:
case 2671:
case 1649:
case 2655:
case 192:
case 3042:
case 1405:
case 554:
case 3390:
case 728:
case 1352:
case 1453:
case 1379:
case 66:
case 2580:
case 2016:
case 3391:
case 2354:
case 2228:
case 334:
case 947:
case 2670:
case 239:
case 2266:
case 413:
case 538:
case 696:
case 1518:
case 1828:
case 1133:
case 3047:
case 2711:
case 3528:
case 909:
case 3166:
case 172:
case 3566:
case 3934:
case 4053:
case 2459:
case 1866:
case 445:
case 550:
case 1474:
case 3002:
case 2133:
case 1300:
case 2828:
case 3495:
case 3721:
case 1711:
case 935:
case 2609:
case 272:
case 1097:
case 1373:
case 2533:
case 1354:
case 166:
case 437:
case 3732:
case 3075:
case 3044:
case 2453:
case 1539:
case 542:
case 3026:
case 1603:
case 1228:
case 851:
case 898:
case 3068:
case 1670:
case 1139:
case 3051:
case 3785:
case 3050:
case 1911:
case 2215:
case 1671:
case 2078:
case 643:
case 589:
case 1655:
case 3881:
case 2788:
case 4072:
case 2649:
case 1581:
case 3956:
case 3369:
case 292:
case 1472:
case 3876:
case 3464:
case 807:
case 82:
case 792:
case 128:
case 3932:
case 3515:
case 1643:
case 1576:
case 3448:
case 788:
case 17:
case 655:
case 1686:
case 1125:
case 1395:
case 1678:
case 3210:
case 1834:
case 32:
case 3642:
case 1933:
case 3888:
case 2781:
case 3473:
case 3966:
case 1049:
case 2491:
case 2043:
case 21:
case 2110:
case 493:
case 244:
case 2776:
case 616:
case 349:
case 25:
case 2820:
case 2234:
case 969:
case 1232:
case 2821:
case 3728:
case 721:
case 112:
case 936:
case 382:
case 1469:
case 1285:
case 351:
case 706:
case 2856:
case 740:
case 1733:
case 473:
case 2780:
case 1364:
case 206:
case 2616:
case 3211:
case 627:
case 4069:
case 2885:
case 1256:
case 221:
case 2070:
case 1116:
case 3144:
case 1868:
case 3175:
case 2594:
case 3551:
case 1202:
case 215:
case 3126:
case 1844:
case 1875:
case 3168:
case 1412:
case 3816:
case 3632:
case 3151:
case 1703:
case 3544:
case 573:
case 3575:
case 2194:
case 1247:
case 3422:
case 984:
case 3656:
case 1597:
case 2033:
case 3294:
case 262:
case 1955:
case 3897:
case 243:
case 2949:
case 3999:
case 2847:
case 2226:
case 3621:
case 1611:
case 2018:
case 715:
case 3265:
case 1242:
case 3430:
case 16:
case 605:
case 868:
case 2319:
case 1076:
case 1804:
case 1207:
case 196:
case 2250:
case 1755:
case 1081:
case 2565:
case 2749:
case 2688:
case 2178:
case 490:
case 2807:
case 1496:
case 3892:
case 672:
case 4017:
case 1592:
case 1771:
case 2165:
case 3799:
case 2143:
case 3593:
case 2482:
case 3255:
case 1994:
case 606:
case 2586:
case 227:
case 2186:
case 3312:
case 2260:
case 195:
case 1299:
case 3193:
case 2555:
case 3160:
case 3742:
case 1549:
case 3902:
case 2306:
case 564:
case 3947:
case 1860:
case 317:
case 2899:
case 3243:
case 2155:
case 3560:
case 3707:
case 1794:
case 3561:
case 1389:
case 2570:
case 1327:
case 2103:
case 61:
case 3317:
case 948:
case 1861:
case 4084:
case 4023:
case 65:
case 175:
case 2429:
case 2716:
case 3161:
case 3702:
case 2324:
case 3666:
case 2261:
case 756:
case 2797:
case 560:
case 1965:
case 2258:
case 102:
case 979:
case 2011:
case 3396:
case 326:
case 3907:
case 2383:
case 1978:
case 1109:
case 2378:
case 4061:
case 2695:
case 3219:
case 1287:
case 1040:
case 1392:
case 4058:
case 3409:
case 3914:
case 3523:
case 3184:
case 3674:
case 1513:
case 1823:
case 373:
case 1138:
case 1706:
case 2887:
case 2519:
case 2036:
case 3653:
case 2284:
case 992:
case 2722:
case 1461:
case 525:
case 2223:
case 2989:
case 1458:
case 2930:
case 2931:
case 1667:
case 2057:
case 1783:
case 2499:
case 1000:
case 1073:
case 393:
case 1724:
case 735:
case 864:
case 3714:
case 3605:
case 235:
case 3326:
case 3344:
case 1054:
case 42:
case 2789:
case 2727:
case 1493:
case 478:
case 109:
case 3368:
case 769:
case 2600:
case 3596:
case 3492:
case 2938:
case 1896:
case 1450:
case 2407:
case 2067:
case 736:
case 2913:
case 1309:
case 2524:
case 2217:
case 2546:
case 906:
case 3196:
case 2296:
case 1679:
case 3929:
case 699:
case 1404:
case 3072:
case 3735:
case 1919:
case 1064:
case 1189:
case 3283:
case 2303:
case 1589:
case 3224:
case 3782:
case 2370:
case 1530:
case 3361:
case 568:
case 3246:
case 3830:
case 3517:
case 2738:
case 2106:
case 2212:
case 2062:
case 3059:
case 91:
case 2713:
case 4044:
case 1652:
case 679:
case 3663:
case 3935:
case 2343:
case 1636:
case 3416:
case 1444:
case 1122:
case 3077:
case 526:
case 3393:
case 2601:
case 2386:
case 3982:
case 123:
case 1008:
case 1468:
case 2708:
case 1501:
case 3252:
case 1101:
case 3998:
case 2432:
case 1325:
case 3753:
case 2019:
case 2536:
case 401:
case 894:
case 2890:
case 1013:
case 1869:
case 3569:
case 1762:
case 2552:
case 870:
case 1140:
case 1381:
case 2152:
case 3084:
case 1540:
case 3169:
case 2795:
case 1263:
case 2631:
case 1967:
case 2689:
case 159:
case 2630:
case 2420:
case 2437:
case 1154:
case 2179:
case 1380:
case 1141:
case 284:
case 2764:
case 1554:
case 457:
case 2891:
case 3974:
case 3945:
case 3873:
case 890:
case 3488:
case 1624:
case 874:
case 3614:
case 1573:
case 1100:
case 1646:
case 3705:
case 1434:
case 2557:
case 2318:
case 3279:
case 1500:
case 1291:
case 1173:
case 1683:
case 3800:
case 915:
case 124:
case 1548:
case 2901:
case 279:
case 3682:
case 3017:
case 578:
case 1030:
case 1027:
case 2741:
case 3172:
case 3848:
case 1564:
case 2898:
case 2754:
case 3963:
case 3635:
case 374:
case 7:
case 3476:
case 1872:
case 2805:
case 132:
case 956:
case 1952:
case 2167:
case 2:
case 331:
case 2024:
case 2083:
case 1757:
case 2272:
case 889:
case 3096:
case 2311:
case 23:
case 598:
case 1877:
case 2259:
case 3808:
case 3763:
case 842:
case 3480:
case 2853:
case 1736:
case 3012:
case 1979:
case 3687:
case 2973:
case 2006:
case 2874:
case 2845:
case 2613:
case 2277:
case 1752:
case 3790:
case 2638:
case 1031:
case 2428:
case 90:
case 927:
case 1845:
case 1006:
case 3862:
case 303:
case 3208:
case 2388:
case 1973:
case 2859:
case 850:
case 1562:
case 1277:
case 3769:
case 2195:
case 3545:
case 3418:
case 1162:
case 2031:
case 3145:
case 1740:
case 1638:
case 2253:
case 810:
case 522:
case 1428:
case 2508:
case 1310:
case 2245:
case 4028:
case 3337:
case 3320:
case 838:
case 3153:
case 199:
case 1259:
case 987:
case 2022:
case 461:
case 4066:
case 3295:
case 2619:
case 1954:
case 2736:
case 3356:
case 2952:
case 1805:
case 3014:
case 1024:
case 1773:
case 854:
case 1272:
case 3264:
case 814:
case 3105:
case 1083:
case 84:
case 1311:
case 2298:
case 148:
case 1940:
case 58:
case 179:
case 2548:
case 2164:
case 2027:
case 3385:
case 2205:
case 2564:
case 3332:
case 2415:
case 902:
case 623:
case 2624:
case 2962:
case 2434:
case 2100:
case 719:
case 1333:
case 3241:
case 2291:
case 2173:
case 2500:
case 1557:
case 4037:
case 1995:
case 2683:
case 3977:
case 1627:
case 1630:
case 259:
case 1748:
case 1179:
case 3191:
case 3273:
case 558:
case 1437:
case 1420:
case 433:
case 2554:
case 1764:
case 3591:
case 2380:
case 3879:
case 354:
case 219:
case 567:
case 4032:
case 2013:
case 2381:
case 3759:
case 2606:
case 3590:
case 1552:
case 996:
case 1421:
case 2263:
case 96:
case 3190:
case 1152:
case 220:
case 1631:
case 3411:
case 647:
case 2038:
case 4085:
case 1136:
case 4021:
case 1485:
case 3163:
case 2501:
case 2290:
case 3087:
case 180:
case 1432:
case 3836:
case 3612:
case 1622:
case 741:
case 1964:
case 2376:
case 345:
case 471:
case 2719:
case 2812:
case 2444:
case 1343:
case 3231:
case 2451:
case 2122:
case 4047:
case 2008:
case 223:
case 1386:
case 1601:
case 1212:
case 1106:
case 313:
case 1738:
case 3399:
case 2095:
case 723:
case 3784:
case 1447:
case 846:
case 3806:
case 2131:
case 3074:
case 1402:
case 2652:
case 353:
case 1713:
case 952:
case 136:
case 1654:
case 3098:
case 2679:
case 2127:
case 2189:
case 2919:
case 533:
case 2404:
case 458:
case 1370:
case 2527:
case 169:
case 2589:
case 1641:
case 912:
case 2048:
case 1600:
case 3883:
case 3478:
case 1067:
case 1407:
case 1124:
case 2450:
case 1583:
case 2896:
case 1938:
case 3465:
case 1524:
case 1814:
case 3005:
case 1183:
case 3227:
case 430:
case 3514:
case 3824:
case 1835:
case 304:
case 3443:
case 747:
case 2054:
case 577:
case 3091:
case 2316:
case 2493:
case 1730:
case 508:
case 1727:
case 3582:
case 1648:
case 1789:
case 209:
case 48:
case 1931:
case 2000:
case 99:
case 641:
case 2783:
case 3471:
case 3302:
case 2282:
case 2073:
case 966:
case 3455:
case 620:
case 3238:
case 3712:
case 1036:
case 300:
case 659:
case 1887:
case 3819:
case 1284:
case 3529:
case 3403:
case 3063:
case 3470:
case 813:
case 1608:
case 1223:
case 3187:
case 2461:
case 3129:
case 3677:
case 1927:
case 2458:
case 1989:
case 2538:
case 422:
case 2392:
case 2287:
case 3307:
case 3090:
case 1365:
case 845:
case 2706:
case 2924:
case 2823:
case 2662:
case 2947:
case 1871:
case 217:
case 1599:
case 268:
case 1750:
case 3571:
case 2243:
case 3155:
case 698:
case 3555:
case 3171:
case 2286:
case 3681:
case 2849:
case 2902:
case 257:
case 970:
case 484:
case 3625:
case 1944:
case 1975:
case 3260:
case 1704:
case 3543:
case 2193:
case 2271:
case 717:
case 1037:
case 2255:
case 1968:
case 327:
case 3586:
case 2396:
case 3992:
case 226:
case 2907:
case 2747:
case 990:
case 4019:
case 3797:
case 1056:
case 480:
case 3258:
case 1314:
case 974:
case 2942:
case 2809:
case 862:
case 356:
case 1726:
case 1904:
case 701:
case 2158:
case 931:
case 1744:
case 3429:
case 186:
case 3716:
case 1032:
case 726:
case 3103:
case 1751:
case 1870:
case 2558:
case 316:
case 1768:
case 2999:
case 1028:
case 499:
case 1960:
case 1547:
case 3018:
case 43:
case 989:
case 1102:
case 2431:
case 3251:
case 197:
case 3033:
case 2294:
case 362:
case 3949:
case 1066:
case 2168:
case 2816:
case 2632:
case 2151:
case 1335:
case 2544:
case 2144:
case 2175:
case 1382:
case 725:
case 2551:
case 1993:
case 1894:
case 2568:
case 108:
case 3807:
case 2892:
case 1878:
case 3165:
case 2799:
case 2550:
case 1483:
case 3204:
case 479:
case 1760:
case 1107:
case 1424:
case 1542:
case 1446:
case 1865:
case 3178:
case 1634:
case 2015:
case 942:
case 3319:
case 1329:
case 2504:
case 1292:
case 3250:
case 963:
case 2265:
case 2104:
case 448:
case 2620:
case 3820:
case 4057:
case 3510:
case 3086:
case 3234:
case 18:
case 2093:
case 1520:
case 778:
case 1479:
case 3491:
case 707:
case 1120:
case 2454:
case 1137:
case 892:
case 1604:
case 3939:
case 937:
case 3980:
case 2210:
case 2642:
case 2359:
case 960:
case 2888:
case 3055:
case 3362:
case 435:
case 1374:
case 1345:
case 2534:
case 2966:
case 1099:
case 3071:
case 579:
case 1457:
case 749:
case 2400:
case 1650:
case 278:
case 3692:
case 2058:
case 798:
case 1651:
case 1132:
case 3070:
case 321:
case 3003:
case 3739:
case 1915:
case 2372:
case 3780:
case 4052:
case 3925:
case 782:
case 1675:
case 2211:
case 751:
case 1644:
case 1556:
case 3111:
case 3697:
case 2766:
case 1121:
case 282:
case 1305:
case 1452:
case 4036:
case 964:
case 2440:
case 298:
case 1521:
case 1811:
case 657:
case 599:
case 2647:
case 1156:
case 2937:
case 2068:
case 2408:
case 1658:
case 2051:
case 2218:
case 993:
case 2075:
case 2026:
case 3609:
case 2756:
case 1833:
case 372:
case 580:
case 1128:
case 1934:
case 3118:
case 171:
case 3445:
case 3988:
case 806:
case 840:
case 1280:
case 1239:
case 2721:
case 3518:
case 3357:
case 2495:
case 1818:
case 1693:
case 2115:
case 4067:
case 2448:
case 2737:
case 2464:
case 2876:
case 1363:
case 973:
case 584:
case 118:
case 2881:
case 1390:
case 436:
case 844:
case 392:
case 3065:
case 81:
case 1734:
case 3405:
case 85:
case 1007:
case 388:
case 2699:
case 469:
case 218:
case 900:
case 291:
case 946:
case 1369:
case 2734:
case 267:
case 2390:
case 730:
case 3581:
case 3340:
case 697:
case 1050:
case 2660:
case 1921:
case 1699:
case 3710:
case 1448:
case 1115:
case 3176:
case 3686:
case 758:
case 3301:
case 1876:
case 3472:
case 1825:
case 3643:
case 767:
case 2566:
case 2934:
case 3097:
case 3373:
case 3459:
case 2462:
case 1495:
case 1721:
case 4008:
case 2166:
case 2528:
case 1408:
case 3670:
case 1068:
case 1937:
case 4095:
case 2661:
case 39:
case 3477:
case 3910:
case 1785:
case 812:
case 2658:
case 3341:
case 1075:
case 3016:
case 1732:
case 881:
case 3354:
case 366:
case 852:
case 1839:
case 1880:
case 541:
case 352:
case 2556:
case 2452:
case 2121:
case 111:
case 3232:
case 89:
case 1647:
case 633:
case 312:
case 3348:
case 4040:
case 1058:
case 3694:
case 2585:
case 2668:
case 1401:
case 3364:
case 2626:
case 1211:
case 2398:
case 2436:
case 945:
case 1642:
case 3665:
case 3933:
case 3588:
case 12:
case 1210:
case 1966:
case 2374:
case 1534:
case 2345:
case 828:
case 1473:
case 1060:
case 1400:
case 3395:
case 87:
case 1134:
case 2099:
case 3918:
case 2650:
case 4000:
case 2288:
case 3308:
case 686:
case 1093:
case 1454:
case 532:
case 3804:
case 1278:
case 887:
case 3743:
case 2329:
case 1504:
case 396:
case 3610:
case 1489:
case 2958:
case 3786:
case 3970:
case 2961:
case 4027:
case 3850:
case 3496:
case 2760:
case 1384:
case 3592:
case 3771:
case 2483:
case 509:
case 1550:
case 3755:
case 1323:
case 2107:
case 3081:
case 2634:
case 895:
case 1632:
case 929:
case 797:
case 1526:
case 2335:
case 761:
case 1544:
case 1575:
case 3826:
case 3247:
case 1151:
case 802:
case 3703:
case 285:
case 2382:
case 3202:
case 3770:
case 1144:
case 1175:
case 2761:
case 630:
case 1568:
case 2894:
case 1685:
case 2993:
case 1621:
case 618:
case 3971:
case 914:
case 1431:
case 2102:
case 3197:
case 2216:
case 297:
case 875:
case 1656:
case 954:
case 785:
case 3955:
case 4022:
case 658:
case 1897:
case 2803:
case 2744:
case 4013:
case 3389:
case 2751:
case 3327:
case 4038:
case 2085:
case 3794:
case 420:
case 1558:
case 1317:
case 1907:
case 3618:
case 3978:
case 1203:
case 2021:
case 1747:
case 523:
case 3423:
case 1702:
case 3509:
case 101:
case 302:
case 2314:
case 1413:
case 903:
case 2975:
case 1312:
case 3299:
case 733:
case 2615:
case 1271:
case 2926:
case 2020:
case 1593:
case 3778:
case 117:
case 2871:
case 3860:
case 1707:
case 1560:
case 3331:
case 1243:
case 168:
case 2599:
case 1034:
case 1742:
case 2199:
case 3549:
case 1160:
case 896:
case 2855:
case 157:
case 1849:
case 1286:
case 3282:
case 1449:
case 3906:
case 3724:
case 3397:
case 3073:
case 934:
case 56:
case 3667:
case 2471:
case 3041:
case 2135:
case 3493:
case 2486:
case 650:
case 1326:
case 204:
case 2672:
case 3054:
case 1698:
case 2535:
case 2091:
case 2912:
case 746:
case 700:
case 1813:
case 2342:
case 1914:
case 1409:
case 3138:
case 173:
case 3706:
case 3924:
case 1674:
case 465:
case 3113:
case 3983:
case 3287:
case 2470:
case 2129:
case 3001:
case 2677:
case 2213:
case 3458:
case 958:
case 1653:
case 614:
case 2712:
case 246:
case 1304:
case 481:
case 575:
case 2045:
case 2074:
case 3349:
case 3652:
case 137:
case 49:
case 1831:
case 3095:
case 3531:
case 2784:
case 1077:
case 1393:
case 3122:
case 3008:
case 3468:
case 1112:
case 323:
case 1982:
case 1663:
case 1935:
case 3719:
case 1822:
case 3444:
case 1729:
case 1787:
case 2230:
case 2227:
case 2824:
case 2514:
case 1196:
case 1596:
case 2114:
case 922:
case 2984:
case 809:
case 3896:
case 1492:
case 47:
case 3450:
case 1361:
case 3817:
case 3527:
case 3214:
case 1358:
case 1517:
case 1889:
case 3048:
case 2098:
case 587:
case 3679:
case 1117:
case 164:
case 847:
case 3127:
case 3404:
case 3141:
case 2591:
case 2035:
case 2879:
case 1798:
case 254:
case 319:
case 961:
case 2977:
case 24:
case 214:
case 600:
case 3541:
case 2191:
case 2617:
case 3154:
case 1279:
case 714:
case 3173:
case 2696:
case 3500:
case 2254:
case 2857:
case 1800:
case 1488:
case 2959:
case 1974:
case 3962:
case 1705:
case 3100:
case 3646:
case 3573:
case 754:
case 1614:
case 985:
case 2241:
case 1998:
case 2240:
case 3101:
case 2836:
case 1753:
case 402:
case 2563:
case 977:
case 250:
case 3376:
case 604:
case 1801:
case 2163:
case 3501:
case 3263:
case 1084:
case 710:
case 59:
case 3869:
case 2852:
case 566:
case 163:
case 1023:
case 3381:
case 2759:
case 1774:
case 1569:
case 1745:
case 3762:
case 1480:
case 1439:
case 703:
case 2295:
case 1687:
case 841:
case 933:
case 1991:
case 170:
case 3108:
case 1012:
case 3877:
case 1262:
case 2320:
case 3245:
case 3274:
case 3031:
case 1159:
case 3957:
case 2862:
case 203:
case 4039:
case 2208:
case 4080:
case 476:
case 3752:
case 2433:
case 1790:
case 2769:
case 3195:
case 2545:
case 1267:
case 1572:
case 1791:
case 190:
case 1425:
case 3148:
case 1864:
case 3415:
case 1963:
case 645:
case 1017:
case 3548:
case 2198:
case 1682:
case 824:
case 3164:
case 3089:
case 3027:
case 2385:
case 3030:
case 3205:
case 2105:
case 3757:
case 3298:
case 496:
case 3952:
case 4025:
case 1990:
case 2248:
case 332:
case 2505:
case 131:
case 819:
case 4076:
case 1321:
case 3083:
case 1105:
case 3567:
case 1264:
case 3940:
case 2096:
case 3805:
case 1014:
case 2990:
case 1248:
case 774:
case 3773:
case 2481:
case 51:
case 231:
case 544:
case 2425:
case 2267:
case 1332:
case 2791:
case 2572:
case 3754:
case 2963:
case 274:
case 2864:
case 379:
case 3901:
case 926:
case 3638:
case 3162:
case 415:
case 3428:
case 521:
case 880:
case 3845:
case 3466:
case 1623:
case 1862:
case 506:
case 1545:
case 1433:
case 2790:
case 443:
case 2480:
case 2012:
case 4033:
case 270:
case 2991:
case 2687:
case 33:
case 3310:
case 917:
case 3259:
case 399:
case 3701:
case 1320:
case 664:
case 1190:
case 416:
case 2169:
case 83:
case 693:
case 1411:
case 3631:
case 2905:
case 2774:
case 1759:
case 1201:
case 3552:
case 456:
case 263:
case 505:
case 1087:
case 380:
case 1836:
case 1029:
case 2315:
case 3019:
case 3863:
case 3622:
case 110:
case 3708:
case 3485:
case 3269:
case 4011:
case 1163:
case 4010:
case 427:
case 2279:
case 879:
case 2800:
case 1328:
case 3995:
case 1366:
case 2974:
case 2945:
case 1959:
case 2614:
case 1241:
case 3333:
case 3157:
case 1200:
case 1035:
case 1772:
case 2257:
case 8:
case 3891:
case 2798:
case 925:
case 3630:
case 1977:
case 1617:
case 3179:
case 0:
case 1273:
case 1191:
case 3908:
case 2782:
case 4078:
case 369:
case 2224:
case 911:
case 2361:
case 694:
case 488:
case 2827:
case 2246:
case 2830:
case 2117:
case 492:
case 4065:
case 3296:
case 1098:
case 3654:
case 2735:
case 264:
case 1289:
case 1465:
case 1846:
case 1227:
case 3814:
case 3546:
case 2196:
case 3673:
case 764:
case 1114:
case 3146:
case 2596:
case 3124:
case 3938:
case 3583:
case 527:
case 3407:
case 50:
case 690:
case 2393:
case 2077:
case 3601:
case 2206:
case 3386:
case 2112:
case 2512:
case 92:
case 907:
case 145:
case 260:
case 472:
case 2729:
case 556:
case 1045:
case 1074:
case 3402:
case 3355:
case 3713:
case 760:
case 3640:
case 2831:
case 949:
case 3738:
case 1784:
case 3447:
case 1399:
case 516:
case 1187:
case 1129:
case 1470:
case 3608:
case 3119:
case 1677:
case 3829:
case 1712:
case 100:
case 3519:
case 883:
case 1238:
case 1403:
case 1063:
case 1587:
case 1819:
case 3284:
case 1529:
case 543:
case 2409:
case 3365:
case 1342:
case 2184:
case 555:
case 406:
case 2645:
case 1659:
case 4003:
case 421:
case 4070:
case 2219:
case 3695:
case 2584:
case 2123:
case 3731:
case 1582:
case 3727:
case 3789:
case 2351:
case 1135:
case 3882:
case 3664:
case 793:
case 1672:
case 4055:
case 3835:
case 2326:
case 1535:
case 2375:
case 1443:
case 1182:
case 836:
case 1455:
case 41:
case 2449:
case 1302:
case 293:
case 2714:
case 2605:
case 869:
case 3499:
case 1471:
case 1347:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1757761201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,];
var gg_b = "1757761201/";

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
