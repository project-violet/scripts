// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

function create_download_url(id) {
  return "https://ltn.hitomi.la/galleries/" + id + ".js";
}

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
case 2226:
case 3816:
case 2055:
case 4012:
case 1266:
case 2144:
case 3394:
case 2722:
case 2127:
case 2578:
case 3923:
case 1570:
case 2441:
case 4085:
case 3186:
case 3557:
case 2971:
case 3727:
case 2443:
case 3701:
case 275:
case 996:
case 820:
case 1636:
case 389:
case 2715:
case 3352:
case 3028:
case 2797:
case 641:
case 3633:
case 2096:
case 1819:
case 2104:
case 3233:
case 1392:
case 944:
case 3415:
case 263:
case 4074:
case 101:
case 31:
case 2385:
case 1682:
case 2017:
case 1577:
case 1734:
case 119:
case 2932:
case 686:
case 2613:
case 3838:
case 2464:
case 2225:
case 2318:
case 3282:
case 363:
case 3331:
case 2077:
case 1416:
case 1539:
case 2164:
case 3181:
case 636:
case 2821:
case 1794:
case 213:
case 1860:
case 3244:
case 50:
case 3299:
case 844:
case 763:
case 2734:
case 3793:
case 1880:
case 4039:
case 3573:
case 960:
case 2992:
case 608:
case 1668:
case 265:
case 244:
case 3400:
case 3290:
case 3978:
case 2060:
case 1949:
case 3167:
case 3194:
case 778:
case 2759:
case 3774:
case 1766:
case 3742:
case 3281:
case 2790:
case 1944:
case 3962:
case 1274:
case 3814:
case 1222:
case 2142:
case 1338:
case 1890:
case 2499:
case 41:
case 68:
case 2369:
case 1745:
case 290:
case 2263:
case 2341:
case 921:
case 2334:
case 2509:
case 3552:
case 3018:
case 1219:
case 1678:
case 721:
case 3715:
case 2691:
case 3068:
case 1258:
case 226:
case 3592:
case 3666:
case 724:
case 26:
case 80:
case 3022:
case 1207:
case 60:
case 1487:
case 2852:
case 1344:
case 3063:
case 2149:
case 2387:
case 1417:
case 2438:
case 3678:
case 2160:
case 2547:
case 3272:
case 341:
case 223:
case 710:
case 1660:
case 2530:
case 2133:
case 2406:
case 3776:
case 3308:
case 1907:
case 2799:
case 1885:
case 2940:
case 3621:
case 3914:
case 3089:
case 3083:
case 1224:
case 2897:
case 3843:
case 2895:
case 3906:
case 1887:
case 3826:
case 2604:
case 568:
case 1761:
case 732:
case 1239:
case 2304:
case 1402:
case 2182:
case 1434:
case 3337:
case 1876:
case 1471:
case 192:
case 1991:
case 365:
case 2978:
case 3737:
case 1164:
case 3599:
case 1071:
case 2419:
case 520:
case 3426:
case 3184:
case 10:
case 3683:
case 2890:
case 1687:
case 1498:
case 3908:
case 2684:
case 3612:
case 3259:
case 1535:
case 287:
case 3740:
case 3470:
case 1488:
case 356:
case 228:
case 723:
case 3243:
case 964:
case 3446:
case 1168:
case 3249:
case 904:
case 2935:
case 1078:
case 3046:
case 150:
case 3411:
case 2480:
case 1105:
case 4:
case 248:
case 505:
case 2054:
case 2920:
case 3781:
case 3936:
case 2352:
case 49:
case 262:
case 3432:
case 111:
case 758:
case 1050:
case 4024:
case 2647:
case 1930:
case 2035:
case 815:
case 1329:
case 3164:
case 3009:
case 782:
case 3351:
case 891:
case 3577:
case 672:
case 887:
case 2283:
case 2945:
case 2494:
case 3933:
case 2822:
case 3594:
case 2043:
case 2190:
case 2440:
case 3931:
case 2587:
case 315:
case 2682:
case 1985:
case 3251:
case 3869:
case 1987:
case 48:
case 3066:
case 279:
case 1906:
case 1738:
case 2198:
case 1679:
case 2380:
case 1160:
case 3993:
case 1781:
case 562:
case 3842:
case 2367:
case 3799:
case 2219:
case 402:
case 1467:
case 3845:
case 3405:
case 234:
case 3361:
case 3422:
case 2268:
case 2776:
case 136:
case 438:
case 1706:
case 2882:
case 742:
case 3595:
case 280:
case 242:
case 898:
case 1245:
case 250:
case 595:
case 934:
case 3523:
case 4093:
case 840:
case 211:
case 2770:
case 885:
case 3966:
case 909:
case 564:
case 936:
case 3222:
case 2320:
case 2884:
case 1780:
case 1806:
case 3374:
case 208:
case 2398:
case 355:
case 1623:
case 1937:
case 1842:
case 158:
case 1314:
case 3735:
case 940:
case 985:
case 3757:
case 2721:
case 3810:
case 3471:
case 2222:
case 1048:
case 1107:
case 2454:
case 1724:
case 804:
case 3149:
case 3367:
case 2937:
case 1922:
case 3788:
case 1831:
case 401:
case 2136:
case 2555:
case 179:
case 2357:
case 53:
case 1560:
case 45:
case 3255:
case 2552:
case 726:
case 1454:
case 346:
case 1151:
case 4095:
case 105:
case 3868:
case 3502:
case 1083:
case 1894:
case 1917:
case 374:
case 2986:
case 2538:
case 3081:
case 2365:
case 3437:
case 3507:
case 352:
case 536:
case 2363:
case 1512:
case 620:
case 2808:
case 2664:
case 1102:
case 2791:
case 3003:
case 3745:
case 1486:
case 1231:
case 733:
case 395:
case 735:
case 2926:
case 1461:
case 2088:
case 44:
case 2044:
case 3848:
case 2176:
case 1633:
case 1135:
case 309:
case 3286:
case 451:
case 1579:
case 1970:
case 3318:
case 2620:
case 1643:
case 1581:
case 1596:
case 74:
case 1701:
case 3569:
case 2253:
case 4033:
case 2162:
case 1926:
case 1448:
case 1035:
case 2300:
case 70:
case 511:
case 4038:
case 1797:
case 2465:
case 294:
case 828:
case 1962:
case 1565:
case 2371:
case 3385:
case 580:
case 2052:
case 2266:
case 1832:
case 714:
case 3390:
case 2066:
case 1104:
case 3731:
case 3387:
case 943:
case 58:
case 4030:
case 557:
case 1226:
case 1651:
case 1473:
case 1341:
case 2780:
case 2705:
case 4019:
case 3404:
case 3705:
case 2347:
case 2579:
case 1549:
case 3150:
case 1280:
case 2079:
case 2835:
case 3059:
case 3768:
case 593:
case 2147:
case 2050:
case 663:
case 3711:
case 3959:
case 1666:
case 3685:
case 1971:
case 457:
case 2617:
case 1116:
case 2296:
case 2731:
case 942:
case 1877:
case 3563:
case 3522:
case 286:
case 1670:
case 818:
case 2246:
case 966:
case 522:
case 3064:
case 2449:
case 3033:
case 1748:
case 798:
case 3169:
case 905:
case 2612:
case 4044:
case 1513:
case 2517:
case 925:
case 3723:
case 2556:
case 1645:
case 601:
case 3538:
case 1115:
case 3695:
case 552:
case 3453:
case 534:
case 3377:
case 3267:
case 1510:
case 485:
case 3128:
case 508:
case 998:
case 174:
case 3543:
case 6:
case 2242:
case 4020:
case 292:
case 316:
case 900:
case 2483:
case 2521:
case 258:
case 1515:
case 2281:
case 1995:
case 2131:
case 1111:
case 2423:
case 2753:
case 3310:
case 2307:
case 2960:
case 3316:
case 2755:
case 2240:
case 238:
case 916:
case 3954:
case 3011:
case 854:
case 835:
case 2815:
case 73:
case 515:
case 3166:
case 2686:
case 1524:
case 2287:
case 326:
case 1804:
case 310:
case 109:
case 2154:
case 2800:
case 3491:
case 1943:
case 3161:
case 39:
case 3760:
case 450:
case 3556:
case 949:
case 3347:
case 2580:
case 2444:
case 3699:
case 1005:
case 2909:
case 256:
case 666:
case 1514:
case 1789:
case 1598:
case 177:
case 3353:
case 1214:
case 2349:
case 3654:
case 3349:
case 658:
case 1362:
case 2383:
case 2145:
case 4035:
case 1695:
case 1737:
case 2016:
case 144:
case 1871:
case 697:
case 4064:
case 2496:
case 1238:
case 1463:
case 1759:
case 2597:
case 1014:
case 194:
case 2167:
case 1731:
case 1954:
case 3436:
case 1456:
case 1998:
case 0:
case 4036:
case 740:
case 3295:
case 3624:
case 1306:
case 3493:
case 118:
case 2889:
case 3792:
case 353:
case 2836:
case 3005:
case 133:
case 550:
case 1536:
case 3920:
case 2739:
case 2390:
case 538:
case 506:
case 3827:
case 2778:
case 170:
case 3276:
case 3277:
case 3941:
case 3995:
case 3550:
case 1992:
case 3779:
case 107:
case 380:
case 2668:
case 1141:
case 151:
case 2676:
case 3759:
case 3885:
case 1333:
case 3811:
case 245:
case 377:
case 2887:
case 1664:
case 235:
case 259:
case 1260:
case 1351:
case 3170:
case 2775:
case 1297:
case 2706:
case 3079:
case 3077:
case 2377:
case 2878:
case 744:
case 1505:
case 3887:
case 3475:
case 2972:
case 3130:
case 212:
case 2168:
case 3093:
case 4018:
case 870:
case 1465:
case 3060:
case 135:
case 449:
case 1875:
case 994:
case 1729:
case 3291:
case 2697:
case 2184:
case 1966:
case 3136:
case 3641:
case 4087:
case 2034:
case 3407:
case 2902:
case 2954:
case 684:
case 473:
case 1212:
case 1276:
case 3283:
case 2693:
case 271:
case 3870:
case 435:
case 431:
case 3926:
case 2518:
case 1908:
case 1363:
case 1458:
case 2081:
case 1098:
case 2014:
case 3052:
case 2048:
case 168:
case 1090:
case 1705:
case 86:
case 3043:
case 585:
case 1139:
case 1674:
case 948:
case 323:
case 1822:
case 1562:
case 2178:
case 307:
case 1776:
case 2803:
case 2583:
case 1220:
case 1236:
case 2545:
case 3193:
case 3880:
case 2572:
case 2254:
case 3684:
case 836:
case 2987:
case 1791:
case 418:
case 3794:
case 3609:
case 3591:
case 3218:
case 3583:
case 46:
case 1827:
case 3862:
case 1076:
case 2108:
case 3644:
case 698:
case 3262:
case 2539:
case 1626:
case 492:
case 3622:
case 1096:
case 3990:
case 2957:
case 209:
case 3101:
case 1337:
case 2993:
case 1830:
case 1269:
case 1979:
case 1895:
case 2331:
case 1902:
case 1323:
case 2140:
case 2430:
case 1997:
case 3269:
case 882:
case 1286:
case 745:
case 1334:
case 2725:
case 1027:
case 2528:
case 701:
case 3229:
case 3796:
case 3024:
case 2562:
case 1765:
case 4005:
case 1002:
case 1172:
case 3617:
case 2113:
case 1290:
case 2842:
case 2857:
case 715:
case 2478:
case 2058:
case 3671:
case 780:
case 2981:
case 1638:
case 203:
case 3631:
case 1177:
case 406:
case 528:
case 1684:
case 1843:
case 779:
case 1415:
case 3311:
case 3289:
case 1432:
case 920:
case 1752:
case 873:
case 2505:
case 3258:
case 3748:
case 3326:
case 2446:
case 387:
case 3462:
case 2275:
case 2557:
case 2825:
case 2158:
case 3280:
case 3738:
case 3129:
case 793:
case 1054:
case 3749:
case 336:
case 2:
case 2389:
case 699:
case 2203:
case 2462:
case 2218:
case 3293:
case 4029:
case 995:
case 479:
case 1304:
case 2654:
case 1835:
case 1144:
case 1059:
case 3107:
case 756:
case 3478:
case 3245:
case 1805:
case 1511:
case 3602:
case 3319:
case 2991:
case 612:
case 2936:
case 825:
case 4021:
case 829:
case 2758:
case 3893:
case 1725:
case 1714:
case 3903:
case 2100:
case 982:
case 273:
case 3618:
case 2588:
case 3230:
case 1931:
case 2847:
case 3065:
case 128:
case 3721:
case 2051:
case 2455:
case 865:
case 2558:
case 2292:
case 2924:
case 325:
case 1201:
case 1646:
case 792:
case 2868:
case 2452:
case 1208:
case 702:
case 3173:
case 1064:
case 1673:
case 1028:
case 1374:
case 4082:
case 597:
case 2188:
case 1958:
case 2858:
case 3608:
case 1395:
case 2130:
case 3314:
case 1277:
case 3420:
case 1774:
case 3371:
case 2196:
case 79:
case 167:
case 3424:
case 2508:
case 4013:
case 4068:
case 1756:
case 2873:
case 1200:
case 3972:
case 540:
case 1322:
case 3673:
case 1657:
case 448:
case 3256:
case 1548:
case 2633:
case 4060:
case 305:
case 1694:
case 1242:
case 2360:
case 614:
case 2401:
case 1011:
case 1663:
case 3822:
case 327:
case 1161:
case 3946:
case 731:
case 3152:
case 3603:
case 2504:
case 1390:
case 2631:
case 2581:
case 822:
case 692:
case 4059:
case 3212:
case 3832:
case 3309:
case 661:
case 3086:
case 1022:
case 306:
case 301:
case 668:
case 2141:
case 2965:
case 1482:
case 525:
case 78:
case 3203:
case 2118:
case 2534:
case 897:
case 3156:
case 1330:
case 1770:
case 1617:
case 3483:
case 2741:
case 2961:
case 2214:
case 2727:
case 4086:
case 1457:
case 3049:
case 3912:
case 3764:
case 2765:
case 1095:
case 57:
case 2593:
case 2463:
case 1084:
case 1837:
case 707:
case 1030:
case 607:
case 313:
case 225:
case 3627:
case 796:
case 3019:
case 2944:
case 2382:
case 3208:
case 2313:
case 3315:
case 1586:
case 3211:
case 2189:
case 1501:
case 2122:
case 92:
case 2628:
case 507:
case 604:
case 1707:
case 3682:
case 2340:
case 2201:
case 1091:
case 421:
case 3574:
case 121:
case 2913:
case 1604:
case 1767:
case 1086:
case 566:
case 1080:
case 298:
case 817:
case 747:
case 1913:
case 1499:
case 149:
case 781:
case 1859:
case 3544:
case 2907:
case 2819:
case 1484:
case 1044:
case 1040:
case 649:
case 2067:
case 2559:
case 322:
case 4052:
case 2737:
case 3767:
case 2845:
case 738:
case 1627:
case 1671:
case 577:
case 2680:
case 3883:
case 901:
case 1935:
case 1945:
case 1720:
case 2917:
case 1034:
case 329:
case 317:
case 3196:
case 3115:
case 3534:
case 3877:
case 2695:
case 1233:
case 1683:
case 190:
case 1093:
case 2453:
case 1912:
case 3042:
case 196:
case 3596:
case 2272:
case 1996:
case 3572:
case 1702:
case 1700:
case 2519:
case 1376:
case 2004:
case 2000:
case 2256:
case 1637:
case 1275:
case 3980:
case 743:
case 583:
case 422:
case 2372:
case 623:
case 1404:
case 261:
case 1844:
case 71:
case 3629:
case 689:
case 3376:
case 586:
case 383:
case 2157:
case 458:
case 1595:
case 3717:
case 2424:
case 1299:
case 1283:
case 1003:
case 2011:
case 2911:
case 2985:
case 1490:
case 141:
case 1221:
case 918:
case 3968:
case 3069:
case 3431:
case 1270:
case 2010:
case 3038:
case 176:
case 2146:
case 3567:
case 2946:
case 166:
case 461:
case 772:
case 655:
case 1321:
case 3496:
case 1838:
case 2344:
case 3844:
case 2989:
case 3341:
case 2730:
case 1889:
case 1313:
case 2084:
case 1984:
case 3537:
case 3789:
case 1773:
case 99:
case 2072:
case 201:
case 843:
case 2736:
case 266:
case 842:
case 478:
case 3332:
case 1677:
case 2448:
case 3461:
case 1019:
case 880:
case 790:
case 3841:
case 1730:
case 3139:
case 2433:
case 1476:
case 159:
case 293:
case 881:
case 1400:
case 2485:
case 644:
case 2832:
case 460:
case 2829:
case 3443:
case 3616:
case 1675:
case 175:
case 1553:
case 3628:
case 499:
case 2105:
case 2076:
case 3051:
case 3780:
case 993:
case 3452:
case 2487:
case 3185:
case 1821:
case 567:
case 1407:
case 3485:
case 185:
case 3516:
case 2151:
case 2990:
case 1446:
case 3668:
case 1159:
case 2338:
case 1282:
case 1213:
case 928:
case 1521:
case 2554:
case 1543:
case 2585:
case 2414:
case 1279:
case 2569:
case 2788:
case 908:
case 3112:
case 2915:
case 2658:
case 1185:
case 3344:
case 1583:
case 770:
case 2348:
case 2729:
case 1343:
case 2342:
case 1045:
case 1272:
case 2666:
case 2003:
case 3209:
case 2086:
case 3720:
case 2466:
case 1747:
case 2233:
case 690:
case 530:
case 2116:
case 963:
case 3762:
case 3265:
case 761:
case 1601:
case 1197:
case 3938:
case 1235:
case 3581:
case 2171:
case 3712:
case 1155:
case 3957:
case 1986:
case 3239:
case 691:
case 938:
case 143:
case 861:
case 2306:
case 468:
case 4079:
case 3417:
case 1293:
case 4083:
case 3950:
case 302:
case 669:
case 3817:
case 1216:
case 737:
case 1361:
case 2645:
case 2812:
case 3872:
case 794:
case 1956:
case 1910:
case 712:
case 1786:
case 1382:
case 3853:
case 1317:
case 1298:
case 1217:
case 2470:
case 981:
case 1134:
case 1811:
case 3285:
case 3643:
case 3007:
case 2069:
case 1807:
case 2386:
case 2956:
case 1007:
case 2495:
case 569:
case 2212:
case 2582:
case 765:
case 1021:
case 2479:
case 216:
case 1862:
case 2473:
case 1182:
case 1947:
case 2544:
case 180:
case 846:
case 1851:
case 2520:
case 532:
case 2577:
case 3890:
case 2316:
case 3399:
case 3114:
case 1023:
case 1974:
case 3428:
case 2841:
case 789:
case 3785:
case 1252:
case 27:
case 1605:
case 642:
case 760:
case 3120:
case 2732:
case 1631:
case 1250:
case 459:
case 1375:
case 152:
case 2850:
case 3743:
case 3778:
case 2818:
case 3545:
case 3884:
case 3517:
case 89:
case 3947:
case 139:
case 4045:
case 1204:
case 1639:
case 3637:
case 2378:
case 3725:
case 1381:
case 2493:
case 2413:
case 3030:
case 1198:
case 2794:
case 2139:
case 578:
case 886:
case 2867:
case 270:
case 3518:
case 3392:
case 1468:
case 2511:
case 413:
case 1849:
case 2533:
case 3287:
case 3141:
case 400:
case 1340:
case 678:
case 1203:
case 3421:
case 106:
case 289:
case 2315:
case 3703:
case 1977:
case 653:
case 251:
case 1146:
case 1109:
case 662:
case 1891:
case 1740:
case 498:
case 3061:
case 187:
case 1857:
case 1834:
case 1551:
case 531:
case 718:
case 2339:
case 1031:
case 2777:
case 3098:
case 2021:
case 2923:
case 2109:
case 572:
case 3998:
case 3082:
case 2865:
case 1898:
case 3639:
case 2280:
case 3587:
case 988:
case 2078:
case 630:
case 1648:
case 2564:
case 2870:
case 1618:
case 857:
case 3449:
case 2482:
case 1267:
case 3358:
case 797:
case 1621:
case 688:
case 762:
case 3105:
case 1561:
case 3658:
case 1609:
case 3940:
case 224:
case 4043:
case 2395:
case 3651:
case 1642:
case 1433:
case 2075:
case 3304:
case 3830:
case 1085:
case 2689:
case 2823:
case 3035:
case 638:
case 2063:
case 4084:
case 3343:
case 3140:
case 246:
case 30:
case 1717:
case 962:
case 1812:
case 3029:
case 2301:
case 94:
case 3490:
case 3670:
case 1865:
case 3263:
case 2325:
case 253:
case 2767:
case 3226:
case 3085:
case 1777:
case 2037:
case 1790:
case 2471:
case 856:
case 1291:
case 1478:
case 1108:
case 1854:
case 2074:
case 922:
case 1921:
case 4031:
case 2308:
case 3235:
case 2566:
case 1247:
case 2191:
case 1712:
case 3987:
case 3961:
case 2374:
case 1032:
case 1308:
case 3242:
case 3519:
case 529:
case 2943:
case 162:
case 3340:
case 879:
case 1873:
case 3132:
case 3965:
case 3373:
case 462:
case 2774:
case 1544:
case 1653:
case 2713:
case 1662:
case 2862:
case 4046:
case 3234:
case 1099:
case 476:
case 720:
case 627:
case 2099:
case 1123:
case 3955:
case 2092:
case 719:
case 1927:
case 1319:
case 3334:
case 656:
case 1896:
case 1810:
case 3050:
case 736:
case 2625:
case 3379:
case 2630:
case 1268:
case 3397:
case 3445:
case 2265:
case 888:
case 757:
case 503:
case 576:
case 3904:
case 1485:
case 1342:
case 3590:
case 2824:
case 1110:
case 191:
case 3294:
case 430:
case 1968:
case 2029:
case 1464:
case 2826:
case 3626:
case 3492:
case 1572:
case 3138:
case 8:
case 3935:
case 62:
case 3339:
case 267:
case 3802:
case 2468:
case 2874:
case 771:
case 342:
case 2894:
case 3579:
case 2810:
case 2384:
case 2026:
case 321:
case 2750:
case 1960:
case 3565:
case 2615:
case 3945:
case 1394:
case 2906:
case 610:
case 1118:
case 2492:
case 3837:
case 1169:
case 2669:
case 3455:
case 3638:
case 2529:
case 3062:
case 3718:
case 2434:
case 819:
case 3898:
case 3430:
case 3178:
case 3915:
case 2963:
case 947:
case 890:
case 2437:
case 4000:
case 198:
case 1150:
case 2125:
case 3275:
case 1502:
case 491:
case 1017:
case 2928:
case 2409:
case 54:
case 272:
case 1179:
case 330:
case 2704:
case 3238:
case 423:
case 3928:
case 443:
case 587:
case 1052:
case 3867:
case 3600:
case 533:
case 1848:
case 1331:
case 2798:
case 1047:
case 527:
case 3102:
case 683:
case 3892:
case 2571:
case 3162:
case 20:
case 1924:
case 2746:
case 1345:
case 646:
case 215:
case 535:
case 3681:
case 3001:
case 414:
case 1522:
case 2477:
case 2148:
case 2921:
case 1957:
case 3772:
case 1073:
case 3219:
case 3183:
case 1178:
case 2117:
case 2877:
case 521:
case 4025:
case 827:
case 1839:
case 489:
case 429:
case 3056:
case 832:
case 3109:
case 2709:
case 2195:
case 4040:
case 3092:
case 3225:
case 1760:
case 1254:
case 399:
case 3578:
case 3210:
case 2207:
case 2641:
case 1793:
case 1287:
case 2948:
case 1594:
case 129:
case 2523:
case 1174:
case 1541:
case 2028:
case 1829:
case 3460:
case 2083:
case 2656:
case 3605:
case 98:
case 1339:
case 643:
case 728:
case 665:
case 852:
case 1372:
case 1610:
case 907:
case 373:
case 2337:
case 3879:
case 950:
case 977:
case 3540:
case 1449:
case 1661:
case 1918:
case 2432:
case 1961:
case 1567:
case 3205:
case 1787:
case 3117:
case 3257:
case 3058:
case 2199:
case 1243:
case 1127:
case 1989:
case 3389:
case 4067:
case 1244:
case 703:
case 1218:
case 3292:
case 1348:
case 2428:
case 616:
case 2795:
case 1353:
case 361:
case 1057:
case 3074:
case 894:
case 1378:
case 3873:
case 1406:
case 3076:
case 3472:
case 2672:
case 169:
case 2627:
case 2046:
case 2442:
case 3273:
case 2090:
case 148:
case 3350:
case 123:
case 1215:
case 337:
case 3375:
case 3697:
case 2150:
case 1990:
case 3214:
case 1749:
case 3851:
case 1393:
case 13:
case 613:
case 186:
case 1847:
case 3625:
case 1915:
case 2650:
case 839:
case 3889:
case 1852:
case 1818:
case 3012:
case 1899:
case 3409:
case 2886:
case 3401:
case 695:
case 2854:
case 1114:
case 3008:
case 946:
case 4051:
case 2649:
case 2891:
case 343:
case 3388:
case 1963:
case 2683:
case 622:
case 3180:
case 411:
case 2211:
case 1062:
case 1354:
case 3095:
case 3365:
case 4049:
case 3467:
case 3803:
case 320:
case 2231:
case 2089:
case 3918:
case 3053:
case 42:
case 2057:
case 2967:
case 2208:
case 1782:
case 3708:
case 2262:
case 1755:
case 2174:
case 308:
case 599:
case 859:
case 2187:
case 1817:
case 3054:
case 502:
case 1176:
case 975:
case 555:
case 84:
case 1632:
case 21:
case 606:
case 729:
case 1469:
case 1356:
case 2500:
case 1162:
case 558:
case 874:
case 1550:
case 589:
case 3476:
case 754:
case 3261:
case 3730:
case 34:
case 1655:
case 1569:
case 2119:
case 1566:
case 2754:
case 1067:
case 2733:
case 539:
case 2980:
case 3558:
case 2237:
case 1466:
case 3542:
case 3021:
case 1326:
case 127:
case 2988:
case 1771:
case 3819:
case 1863:
case 184:
case 3664:
case 1978:
case 821:
case 1845:
case 3847:
case 3663:
case 617:
case 1124:
case 3023:
case 1241:
case 3963:
case 579:
case 426:
case 1428:
case 1508:
case 831:
case 3635:
case 2451:
case 2977:
case 403:
case 1742:
case 3620:
case 600:
case 3809:
case 3665:
case 1690:
case 469:
case 2773:
case 3395:
case 91:
case 560:
case 233:
case 3953:
case 1436:
case 2071:
case 3504:
case 35:
case 2210:
case 3423:
case 145:
case 1864:
case 3494:
case 3192:
case 2827:
case 877:
case 624:
case 3328:
case 232:
case 693:
case 2677:
case 2786:
case 774:
case 912:
case 2607:
case 1903:
case 1585:
case 2619:
case 1133:
case 2391:
case 3541:
case 2662:
case 1593:
case 474:
case 3413:
case 1654:
case 3124:
case 1147:
case 3500:
case 2112:
case 3155:
case 4014:
case 3525:
case 2251:
case 371:
case 1491:
case 386:
case 3154:
case 117:
case 1058:
case 4090:
case 1886:
case 2661:
case 2206:
case 3048:
case 2955:
case 3753:
case 548:
case 1264:
case 4080:
case 229:
case 1622:
case 3151:
case 43:
case 2411:
case 2425:
case 2687:
case 1816:
case 619:
case 1868:
case 2132:
case 1582:
case 1010:
case 3528:
case 3414:
case 1209:
case 571:
case 1897:
case 4027:
case 1125:
case 889:
case 1772:
case 951:
case 324:
case 1881:
case 1130:
case 667:
case 495:
case 367:
case 957:
case 2484:
case 1728:
case 544:
case 2548:
case 816:
case 2180:
case 542:
case 1746:
case 3513:
case 40:
case 1187:
case 2461:
case 1919:
case 2399:
case 990:
case 4015:
case 3999:
case 130:
case 210:
case 2532:
case 2022:
case 1556:
case 1380:
case 69:
case 4053:
case 1689:
case 2356:
case 2426:
case 3323:
case 2766:
case 892:
case 1188:
case 504:
case 1718:
case 481:
case 2716:
case 4023:
case 978:
case 986:
case 3182:
case 1573:
case 1809:
case 709:
case 2302:
case 3228:
case 769:
case 3177:
case 218:
case 973:
case 2638:
case 1967:
case 3791:
case 496:
case 1069:
case 1698:
case 237:
case 1301:
case 3568:
case 4088:
case 441:
case 834:
case 3171:
case 2490:
case 500:
case 2881:
case 2230:
case 2999:
case 3824:
case 2811:
case 3854:
case 3122:
case 51:
case 2030:
case 2674:
case 120:
case 872:
case 1858:
case 1904:
case 3459:
case 3125:
case 3441:
case 2279:
case 680:
case 2232:
case 2213:
case 3488:
case 2591:
case 2110:
case 3160:
case 2205:
case 1399:
case 1190:
case 2282:
case 2502:
case 439:
case 3040:
case 2435:
case 3363:
case 3231:
case 2653:
case 3398:
case 2860:
case 113:
case 1697:
case 155:
case 1571:
case 1973:
case 1554:
case 3820:
case 1128:
case 381:
case 2297:
case 3253:
case 3220:
case 1426:
case 2362:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1648998001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,];
var gg_b = "1649001601/";

function hitomi_get_image_list() {
  files = galleryinfo["files"];
  // function test(id, files) {
  number_of_frontends = 3;
  subdomain = "a";
  btresult = [];
  stresult = [];
  result = [];
  for (var rr of files) {
    hash = rr["hash"];
    postfix = hash.substr(hash.length - 3);
    subdomainx = subdomain;
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) subdomainx = "b";
    x = parseInt(postfix[2] + postfix[0] + postfix[1], 16);
    if (!isNaN(x)) {
      if (x < 4096) subdomainx = String.fromCharCode(97 + gg_m[x]);
      else subdomainx = String.fromCharCode(97 + 0);
    }
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) {
      result.push(
        `https://${subdomainx}b.hitomi.la/images/${gg_b + gg.s(hash)}/${hash}.${
          rr["name"].split(".").slice(-1)[0]
        }`
      );
    } else if (hash == "")
      result.push(`https://${subdomainx}a.hitomi.la/webp/${rr["name"]}.webp`);
    else if (hash.length < 3)
      result.push(`https://${subdomainx}a.hitomi.la/webp/${hash}.webp`);
    else {
      result.push(
        `https://${subdomainx}a.hitomi.la/webp/${
            gg.b + gg.s(hash)
        }/${hash}.webp`
      );
    }
    if (rr["haswebp"] == 1)
    {
      btresult.push(
        `https://tn.hitomi.la/webpbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.webp`
      );
      stresult.push(
        `https://${subdomainx}tn.hitomi.la/webpsmalltn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.webp`
      );
    }
    // else if (rr["hasavif"] == 1)
    // {
    //   btresult.push(
    //     `https://tn.hitomi.la/avifbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.avif`
    //   );
    //   stresult.push(
    //     `https://${subdomainx}tn.hitomi.la/avifsmallbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.avif`
    //   );
    // }
    else 
    {
      btresult.push(
        `https://tn.hitomi.la/bigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
      );
      stresult.push(
        `https://${subdomainx}tn.hitomi.la/smalltn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
      );
    }
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
