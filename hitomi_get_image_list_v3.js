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
case 688:
case 3780:
case 1268:
case 1461:
case 253:
case 3472:
case 3966:
case 141:
case 3275:
case 1846:
case 3111:
case 3542:
case 2982:
case 3279:
case 3349:
case 82:
case 2131:
case 771:
case 3690:
case 3460:
case 3323:
case 806:
case 1713:
case 3411:
case 503:
case 2618:
case 457:
case 3063:
case 3568:
case 2970:
case 292:
case 1098:
case 2267:
case 3454:
case 1456:
case 3259:
case 3886:
case 2021:
case 3042:
case 3588:
case 3302:
case 3310:
case 3755:
case 3830:
case 1538:
case 1920:
case 3984:
case 1016:
case 461:
case 2707:
case 827:
case 193:
case 1401:
case 3343:
case 2016:
case 2688:
case 3049:
case 3078:
case 1915:
case 1982:
case 2247:
case 2719:
case 3561:
case 1597:
case 1497:
case 2187:
case 152:
case 614:
case 3914:
case 3340:
case 79:
case 798:
case 2827:
case 2299:
case 1705:
case 67:
case 2041:
case 2637:
case 2126:
case 4002:
case 2782:
case 404:
case 1559:
case 3046:
case 2201:
case 871:
case 2406:
case 3169:
case 892:
case 1884:
case 2348:
case 1087:
case 651:
case 1679:
case 1363:
case 2966:
case 3267:
case 563:
case 3485:
case 2594:
case 497:
case 2011:
case 1252:
case 3937:
case 2171:
case 2871:
case 2625:
case 776:
case 2132:
case 3960:
case 2025:
case 1996:
case 3504:
case 3732:
case 1088:
case 3393:
case 1591:
case 2785:
case 1386:
case 4025:
case 93:
case 753:
case 3355:
case 0:
case 2709:
case 595:
case 2702:
case 1075:
case 1070:
case 91:
case 1504:
case 1006:
case 1949:
case 549:
case 3075:
case 3357:
case 195:
case 3132:
case 402:
case 3103:
case 993:
case 194:
case 1239:
case 2921:
case 836:
case 1972:
case 2643:
case 14:
case 389:
case 2251:
case 267:
case 2193:
case 781:
case 1540:
case 1970:
case 44:
case 110:
case 2027:
case 3582:
case 3734:
case 2143:
case 2063:
case 2803:
case 1773:
case 2537:
case 1492:
case 1402:
case 1889:
case 2308:
case 1626:
case 2137:
case 3345:
case 486:
case 23:
case 1440:
case 2743:
case 3218:
case 159:
case 1516:
case 3322:
case 488:
case 1265:
case 206:
case 2689:
case 2271:
case 2795:
case 1224:
case 3469:
case 2885:
case 2008:
case 3040:
case 54:
case 2524:
case 62:
case 243:
case 2067:
case 1296:
case 1119:
case 3970:
case 2076:
case 1319:
case 16:
case 1541:
case 1608:
case 1026:
case 1352:
case 824:
case 1712:
case 2484:
case 2928:
case 886:
case 1658:
case 1159:
case 2038:
case 1919:
case 3038:
case 3392:
case 2140:
case 373:
case 3341:
case 3034:
case 2376:
case 793:
case 1939:
case 3079:
case 3851:
case 381:
case 748:
case 1086:
case 1557:
case 2755:
case 1717:
case 2838:
case 3726:
case 4006:
case 1550:
case 2534:
case 3988:
case 1377:
case 118:
case 3394:
case 1521:
case 2873:
case 3550:
case 2088:
case 1014:
case 2730:
case 987:
case 779:
case 922:
case 1213:
case 702:
case 269:
case 645:
case 617:
case 2324:
case 2620:
case 1235:
case 2094:
case 3832:
case 112:
case 3778:
case 409:
case 1580:
case 3483:
case 2748:
case 517:
case 900:
case 1662:
case 3118:
case 3673:
case 1060:
case 1332:
case 1564:
case 1459:
case 810:
case 2860:
case 3950:
case 2408:
case 1409:
case 451:
case 1045:
case 959:
case 2266:
case 3897:
case 1310:
case 933:
case 2604:
case 1139:
case 469:
case 2104:
case 324:
case 2246:
case 3226:
case 3215:
case 2628:
case 247:
case 1702:
case 1600:
case 1488:
case 2480:
case 3015:
case 240:
case 3631:
case 1732:
case 1997:
case 9:
case 3875:
case 1304:
case 3594:
case 1100:
case 238:
case 650:
case 1138:
case 3514:
case 1179:
case 1555:
case 2530:
case 2941:
case 334:
case 1216:
case 2053:
case 393:
case 1101:
case 1755:
case 648:
case 2112:
case 2772:
case 538:
case 2199:
case 438:
case 3037:
case 3954:
case 596:
case 3149:
case 2944:
case 2857:
case 1028:
case 242:
case 950:
case 2133:
case 2470:
case 3720:
case 1670:
case 2155:
case 3833:
case 635:
case 107:
case 2278:
case 948:
case 2822:
case 3668:
case 448:
case 2497:
case 3234:
case 3300:
case 3788:
case 751:
case 2231:
case 1183:
case 426:
case 2670:
case 1511:
case 1606:
case 515:
case 1990:
case 1005:
case 3552:
case 3681:
case 3892:
case 2869:
case 295:
case 1904:
case 3200:
case 341:
case 2716:
case 2629:
case 394:
case 470:
case 1704:
case 2564:
case 2951:
case 281:
case 1298:
case 3291:
case 328:
case 1800:
case 45:
case 2354:
case 2595:
case 1192:
case 1864:
case 264:
case 1565:
case 1575:
case 3765:
case 259:
case 2139:
case 1926:
case 2722:
case 3526:
case 916:
case 928:
case 2224:
case 3167:
case 1911:
case 354:
case 3396:
case 2653:
case 1763:
case 590:
case 3490:
case 2892:
case 3739:
case 792:
case 2576:
case 3814:
case 3374:
case 3384:
case 58:
case 2601:
case 2847:
case 2552:
case 1981:
case 3278:
case 1562:
case 2978:
case 3857:
case 3489:
case 290:
case 533:
case 974:
case 1282:
case 2583:
case 1581:
case 3999:
case 2938:
case 3204:
case 302:
case 2989:
case 3478:
case 2531:
case 2377:
case 2752:
case 2081:
case 2012:
case 2690:
case 3650:
case 1041:
case 4048:
case 2841:
case 2035:
case 1694:
case 1842:
case 2070:
case 1232:
case 3422:
case 1866:
case 1772:
case 3951:
case 365:
case 1588:
case 72:
case 4035:
case 3122:
case 1977:
case 2079:
case 2087:
case 174:
case 1184:
case 2040:
case 794:
case 3953:
case 436:
case 663:
case 599:
case 1491:
case 3555:
case 826:
case 2509:
case 3567:
case 1657:
case 1171:
case 552:
case 1578:
case 725:
case 1140:
case 474:
case 820:
case 2108:
case 882:
case 3910:
case 1687:
case 3510:
case 615:
case 1137:
case 77:
case 3157:
case 3360:
case 2786:
case 3195:
case 3019:
case 680:
case 2004:
case 1230:
case 1212:
case 3994:
case 3181:
case 3487:
case 3846:
case 3714:
case 1620:
case 95:
case 3824:
case 1027:
case 3292:
case 529:
case 3813:
case 1481:
case 1460:
case 1771:
case 1297:
case 2302:
case 3622:
case 2968:
case 2646:
case 2738:
case 1653:
case 3364:
case 4044:
case 1698:
case 2279:
case 3839:
case 2512:
case 786:
case 2523:
case 3707:
case 2939:
case 2373:
case 894:
case 1273:
case 606:
case 4038:
case 1294:
case 2024:
case 923:
case 1807:
case 1288:
case 1924:
case 344:
case 1859:
case 3651:
case 3358:
case 550:
case 418:
case 2433:
case 3629:
case 657:
case 2446:
case 3045:
case 3872:
case 177:
case 3766:
case 2701:
case 611:
case 3858:
case 3465:
case 327:
case 3539:
case 3328:
case 2448:
case 408:
case 1022:
case 3283:
case 2790:
case 4057:
case 3386:
case 7:
case 1912:
case 620:
case 3109:
case 2068:
case 780:
case 3350:
case 3922:
case 3727:
case 2798:
case 3502:
case 2395:
case 2671:
case 4088:
case 1720:
case 153:
case 1317:
case 1347:
case 2936:
case 735:
case 3142:
case 712:
case 2230:
case 1509:
case 2220:
case 3658:
case 1231:
case 2142:
case 2450:
case 977:
case 3436:
case 215:
case 3013:
case 3409:
case 2973:
case 1605:
case 3894:
case 3876:
case 2851:
case 2352:
case 3247:
case 2451:
case 1013:
case 1081:
case 2681:
case 164:
case 1731:
case 1382:
case 1656:
case 3817:
case 1116:
case 2872:
case 4000:
case 1181:
case 3880:
case 1063:
case 1631:
case 1295:
case 3676:
case 2947:
case 462:
case 3444:
case 3547:
case 1863:
case 2160:
case 548:
case 2713:
case 1407:
case 370:
case 840:
case 2023:
case 2911:
case 3390:
case 2933:
case 1860:
case 2964:
case 765:
case 3120:
case 2997:
case 1453:
case 3235:
case 3462:
case 2075:
case 2589:
case 1914:
case 838:
case 3069:
case 1826:
case 1174:
case 287:
case 2668:
case 3961:
case 1385:
case 1645:
case 249:
case 3923:
case 2806:
case 2630:
case 938:
case 121:
case 2887:
case 123:
case 3826:
case 2362:
case 3348:
case 3219:
case 4063:
case 2328:
case 1342:
case 353:
case 4026:
case 1685:
case 1369:
case 1778:
case 1535:
case 2924:
case 3798:
case 1326:
case 379:
case 3590:
case 3869:
case 1891:
case 1253:
case 1359:
case 3179:
case 17:
case 1180:
case 1876:
case 1153:
case 2602:
case 1998:
case 1978:
case 2820:
case 2740:
case 2977:
case 2270:
case 3484:
case 411:
case 349:
case 387:
case 2124:
case 804:
case 1770:
case 285:
case 73:
case 2422:
case 3781:
case 727:
case 1901:
case 3549:
case 643:
case 682:
case 1570:
case 4052:
case 3054:
case 3845:
case 346:
case 3525:
case 2363:
case 919:
case 1695:
case 4043:
case 4073:
case 2876:
case 210:
case 3697:
case 966:
case 230:
case 3948:
case 3842:
case 227:
case 1107:
case 3425:
case 2658:
case 2965:
case 3694:
case 3945:
case 2828:
case 3927:
case 3977:
case 3750:
case 2815:
case 714:
case 1737:
case 3630:
case 621:
case 850:
case 2760:
case 2663:
case 399:
case 2439:
case 1938:
case 3467:
case 575:
case 3638:
case 3402:
case 3308:
case 442:
case 2410:
case 477:
case 198:
case 3580:
case 3831:
case 1146:
case 542:
case 3572:
case 1799:
case 1187:
case 2288:
case 1644:
case 1503:
case 2597:
case 1534:
case 2810:
case 3214:
case 3205:
case 1841:
case 1154:
case 3028:
case 2355:
case 3666:
case 1435:
case 1365:
case 124:
case 1190:
case 441:
case 3751:
case 3007:
case 3738:
case 4037:
case 973:
case 2858:
case 646:
case 3528:
case 2532:
case 1845:
case 2301:
case 329:
case 1248:
case 1507:
case 3777:
case 1795:
case 3287:
case 361:
case 3763:
case 2032:
case 3884:
case 2596:
case 3246:
case 3415:
case 1628:
case 1080:
case 3641:
case 410:
case 513:
case 1156:
case 2949:
case 1251:
case 1338:
case 3920:
case 1415:
case 3577:
case 1729:
case 1659:
case 352:
case 2501:
case 775:
case 931:
case 2878:
case 3709:
case 1765:
case 2093:
case 2909:
case 3164:
case 3636:
case 2028:
case 2255:
case 84:
case 2092:
case 2415:
case 2241:
case 1356:
case 1103:
case 2134:
case 2218:
case 155:
case 2141:
case 667:
case 4067:
case 483:
case 2490:
case 2037:
case 1078:
case 2821:
case 1130:
case 870:
case 1667:
case 659:
case 148:
case 1053:
case 1823:
case 2547:
case 18:
case 2449:
case 2144:
case 984:
case 2505:
case 2122:
case 1780:
case 3802:
case 2956:
case 416:
case 3982:
case 2697:
case 3148:
case 1603:
case 3907:
case 764:
case 1104:
case 655:
case 3110:
case 403:
case 2150:
case 636:
case 1604:
case 1165:
case 903:
case 3767:
case 2768:
case 3822:
case 2178:
case 728:
case 1207:
case 586:
case 2986:
case 1928:
case 574:
case 459:
case 3698:
case 3442:
case 2891:
case 1602:
case 145:
case 2506:
case 3271:
case 3841:
case 1987:
case 884:
case 708:
case 1442:
case 2029:
case 3112:
case 1263:
case 1201:
case 1569:
case 3115:
case 2001:
case 2156:
case 559:
case 1260:
case 812:
case 689:
case 1940:
case 1543:
case 1458:
case 2535:
case 3656:
case 2114:
case 1376:
case 1897:
case 3769:
case 2571:
case 3329:
case 3176:
case 2371:
case 3407:
case 212:
case 1691:
case 1292:
case 4014:
case 1465:
case 904:
case 3532:
case 3599:
case 953:
case 654:
case 2572:
case 2477:
case 3424:
case 3873:
case 1079:
case 4065:
case 1767:
case 1740:
case 480:
case 1707:
case 3459:
case 625:
case 2305:
case 2044:
case 2206:
case 2680:
case 3314:
case 1058:
case 2179:
case 2974:
case 1873:
case 1861:
case 1724:
case 2286:
case 1439:
case 3783:
case 339:
case 3303:
case 1237:
case 1745:
case 616:
case 367:
case 4008:
case 2916:
case 2704:
case 3852:
case 768:
case 40:
case 2049:
case 136:
case 1612:
case 3837:
case 3523:
case 631:
case 3186:
case 2292:
case 3482:
case 32:
case 613:
case 2014:
case 2174:
case 3060:
case 505:
case 1560:
case 2724:
case 2946:
case 2801:
case 837:
case 1290:
case 1452:
case 1684:
case 1554:
case 2886:
case 3435:
case 2814:
case 918:
case 2561:
case 1427:
case 2906:
case 3041:
case 816:
case 2425:
case 3560:
case 1640:
case 2407:
case 1327:
case 2593:
case 2048:
case 3401:
case 1351:
case 372:
case 2726:
case 3955:
case 1584:
case 2945:
case 674:
case 2812:
case 3745:
case 2188:
case 2859:
case 2627:
case 2109:
case 2527:
case 3885:
case 137:
case 2374:
case 877:
case 332:
case 3494:
case 2381:
case 530:
case 1361:
case 34:
case 203:
case 351:
case 788:
case 2737:
case 2349:
case 3166:
case 3330:
case 2117:
case 3229:
case 2853:
case 623:
case 3870:
case 658:
case 1686:
case 1929:
case 383:
case 1730:
case 3975:
case 94:
case 3854:
case 2128:
case 258:
case 3375:
case 2528:
case 2084:
case 1482:
case 4007:
case 1144:
case 572:
case 1733:
case 907:
case 757:
case 2289:
case 81:
case 672:
case 3294:
case 914:
case 3730:
case 1693:
case 2919:
case 3156:
case 1706:
case 2603:
case 932:
case 1527:
case 3725:
case 3276:
case 3368:
case 2784:
case 3288:
case 19:
case 921:
case 172:
case 96:
case 2621:
case 2397:
case 1739:
case 25:
case 218:
case 3974:
case 3025:
case 59:
case 3236:
case 2161:
case 219:
case 866:
case 2474:
case 2412:
case 2991:
case 1719:
case 668:
case 456:
case 465:
case 1405:
case 1886:
case 179:
case 859:
case 1960:
case 1690:
case 1855:
case 88:
case 1358:
case 2400:
case 3819:
case 510:
case 2294:
case 809:
case 1794:
case 1517:
case 2185:
case 3196:
case 3592:
case 406:
case 1877:
case 228:
case 2703:
case 664:
case 80:
case 2584:
case 2559:
case 1408:
case 3273:
case 952:
case 1403:
case 427:
case 2163:
case 1811:
case 293:
case 3596:
case 1549:
case 3520:
case 2655:
case 2729:
case 1068:
case 2866:
case 2717:
case 2168:
case 3706:
case 42:
case 847:
case 3315:
case 2560:
case 1262:
case 4050:
case 589:
case 899:
case 906:
case 4084:
case 3018:
case 128:
case 135:
case 3909:
case 3863:
case 3227:
case 3277:
case 2808:
case 1956:
case 1034:
case 3889:
case 3973:
case 1003:
case 400:
case 849:
case 1499:
case 1484:
case 2396:
case 3634:
case 2856:
case 695:
case 957:
case 1968:
case 1553:
case 723:
case 3068:
case 1489:
case 2969:
case 2538:
case 3728:
case 425:
case 1277:
case 2000:
case 239:
case 1094:
case 3926:
case 805:
case 603:
case 2804:
case 720:
case 1269:
case 719:
case 600:
case 3843:
case 1909:
case 257:
case 1243:
case 63:
case 1892:
case 3445:
case 1314:
case 1227:
case 1394:
case 3464:
case 1167:
case 2549:
case 2464:
case 3370:
case 2196:
case 1203:
case 1577:
case 3361:
case 3225:
case 2855:
case 2330:
case 677:
case 732:
case 3635:
case 1696:
case 1853:
case 782:
case 3967:
case 2823:
case 1001:
case 454:
case 2675:
case 3192:
case 2513:
case 209:
case 1152:
case 2257:
case 417:
case 325:
case 2831:
case 3027:
case 2556:
case 670:
case 3241:
case 3762:
case 3916:
case 1246:
case 1206:
case 1637:
case 1151:
case 2177:
case 2173:
case 1473:
case 605:
case 3032:
case 2624:
case 1448:
case 3942:
case 2054:
case 1936:
case 278:
case 31:
case 1699:
case 1519:
case 3165:
case 2313:
case 3035:
case 1840:
case 2961:
case 2058:
case 335:
case 254:
case 3674:
case 3805:
case 2705:
case 1893:
case 3224:
case 717:
case 1677:
case 185:
case 665:
case 3665:
case 3962:
case 2061:
case 3232:
case 1934:
case 1573:
case 1287:
case 147:
case 2591:
case 652:
case 2388:
case 2090:
case 3188:
case 3321:
case 260:
case 3879:
case 117:
case 251:
case 1131:
case 1071:
case 3281:
case 568:
case 2064:
case 1669:
case 1531:
case 2331:
case 2127:
case 3146:
case 3096:
case 3566:
case 4003:
case 2985:
case 3784:
case 3855:
case 2897:
case 722:
case 523:
case 1797:
case 3516:
case 2787:
case 3251:
case 3936:
case 889:
case 151:
case 985:
case 2676:
case 3972:
case 1364:
case 3387:
case 1498:
case 3761:
case 1506:
case 2557:
case 323:
case 1776:
case 3956:
case 917:
case 872:
case 1798:
case 3004:
case 3474:
case 1814:
case 2262:
case 3024:
case 1741:
case 1412:
case 231:
case 2757:
case 1387:
case 2849:
case 3646:
case 304:
case 1023:
case 3772:
case 432:
case 2783:
case 2242:
case 2307:
case 571:
case 376:
case 3776:
case 1445:
case 2660:
case 3051:
case 560:
case 2189:
case 217:
case 1009:
case 490:
case 297:
case 2981:
case 2017:
case 4045:
case 3202:
case 2375:
case 2750:
case 225:
case 1397:
case 102:
case 3280:
case 3339:
case 3605:
case 2116:
case 2366:
case 100:
case 3138:
case 1665:
case 3752:
case 565:
case 2677:
case 1711:
case 3286:
case 233:
case 839:
case 690:
case 3657:
case 2154:
case 3862:
case 3823:
case 2052:
case 2898:
case 1073:
case 2975:
case 2018:
case 3611:
case 1197:
case 3023:
case 2256:
case 108:
case 848:
case 537:
case 3847:
case 2098:
case 3905:
case 3072:
case 3628:
case 1642:
case 3896:
case 1508:
case 2350:
case 2837:
case 2322:
case 3171:
case 851:
case 1211:
case 1946:
case 693:
case 1576:
case 1325:
case 315:
case 3050:
case 431:
case 622:
case 3757:
case 2062:
case 3529:
case 949:
case 208:
case 3853:
case 547:
case 3327:
case 1388:
case 2428:
case 1643:
case 1475:
case 3155:
case 3455:
case 1988:
case 943:
case 2478:
case 675:
case 3990:
case 2170:
case 1025:
case 770:
case 446:
case 3043:
case 3729:
case 3222:
case 579:
case 853:
case 3771:
case 2848:
case 3134:
case 2754:
case 458:
case 99:
case 487:
case 1490:
case 1582:
case 2645:
case 3664:
case 3144:
case 2710:
case 2613:
case 1796:
case 2667:
case 2529:
case 1160:
case 649:
case 291:
case 3480:
case 2749:
case 881:
case 2404:
case 246:
case 3486:
case 1176:
case 36:
case 2669:
case 1709:
case 3928:
case 3800:
case 170:
case 28:
case 3493:
case 1836:
case 3290:
case 397:
case 1782:
case 1701:
case 3712:
case 3092:
case 2057:
case 536:
case 273:
case 331:
case 4083:
case 1133:
case 3419:
case 3428:
case 3365:
case 1223:
case 1722:
case 428:
case 1250:
case 3878:
case 1472:
case 3324:
case 1810:
case 855:
case 1947:
case 749:
case 3825:
case 1426:
case 2311:
case 1320:
case 576:
case 316:
case 3450:
case 2899:
case 833:
case 3820:
case 237:
case 2386:
case 2317:
case 2895:
case 2764:
case 2925:
case 1902:
case 704:
case 701:
case 2642:
case 126:
case 3756:
case 935:
case 3921:
case 2830:
case 1233:
case 1777:
case 1105:
case 1844:
case 190:
case 2443:
case 557:
case 1143:
case 1057:
case 774:
case 1112:
case 1683:
case 2570:
case 3305:
case 1178:
case 1111:
case 707:
case 821:
case 3789:
case 4022:
case 3381:
case 710:
case 4039:
case 815:
case 2879:
case 1674:
case 1856:
case 2360:
case 3693:
case 1341:
case 2281:
case 514:
case 49:
case 1245:
case 2485:
case 1429:
case 385:
case 98:
case 1155:
case 2050:
case 3371:
case 1999:
case 244:
case 1900:
case 1666:
case 3252:
case 2917:
case 3453:
case 2774:
case 33:
case 2487:
case 2562:
case 2426:
case 2435:
case 1462:
case 3012:
case 2434:
case 3131:
case 831:
case 4064:
case 1843:
case 3123:
case 3899:
case 656:
case 262:
case 3398:
case 413:
case 1874:
case 4012:
case 1714:
case 1673:
case 1371:
case 647:
case 2118:
case 460:
case 883:
case 3208:
case 4049:
case 2736:
case 132:
case 1888:
case 2277:
case 951:
case 2607:
case 78:
case 783:
case 556:
case 789:
case 1321:
case 1881:
case 2071:
case 1466:
case 1463:
case 3616:
case 2181:
case 1198:
case 21:
case 1746:
case 3434:
case 2517:
case 3821:
case 862:
case 3753:
case 2296:
case 967:
case 2321:
case 2211:
case 180:
case 874:
case 3316:
case 2652:
case 139:
case 395:
case 3581:
case 4086:
case 3968:
case 766:
case 173:
case 2694:
case 1384:
case 4095:
case 3770:
case 1689:
case 3684:
case 660:
case 2268:
case 2405:
case 3194:
case 2995:
case 772:
case 2337:
case 48:
case 1899:
case 1419:
case 2542:
case 248:
case 2771:
case 3612:
case 1819:
case 3367:
case 2159:
case 535:
case 1821:
case 3513:
case 808:
case 1425:
case 87:
case 756:
case 3395:
case 3686:
case 3818:
case 3492:
case 2824:
case 202:
case 3299:
case 1431:
case 276:
case 3056:
case 2715:
case 3902:
case 1614:
case 3874:
case 4015:
case 1423:
case 2423:
case 3868:
case 869:
case 1993:
case 1284:
case 910:
case 4031:
case 1857:
case 3908:
case 1189:
case 2994:
case 3397:
case 1681:
case 2204:
case 1957:
case 909:
case 3076:
case 2384:
case 1411:
case 1095:
case 2781:
case 784:
case 484:
case 382:
case 3233:
case 915:
case 3859:
case 3304:
case 1379:
case 489:
case 271:
case 3385:
case 214:
case 3790:
case 3017:
case 3947:
case 924:
case 3105:
case 1:
case 2543:
case 2341:
case 37:
case 299:
case 1980:
case 2727:
case 1234:
case 2647:
case 3691:
case 2550:
case 3430:
case 3331:
case 3178:
case 2272:
case 3642:
case 2245:
case 2504:
case 1366:
case 2983:
case 241:
case 3810:
case 2476:
case 125:
case 1752:
case 473:
case 843:
case 2020:
case 2809:
case 1393:
case 3627:
case 1655:
case 2009:
case 3723:
case 3949:
case 2852:
case 1109:
case 10:
case 3080:
case 1032:
case 2382:
case 1467:
case 1335:
case 2234:
case 3312:
case 3332:
case 1258:
case 3240:
case 3574:
case 1082:
case 2259:
case 1378:
case 637:
case 440:
case 3174:
case 3708:
case 2883:
case 1038:
case 3644:
case 1849:
case 419:
case 3106:
case 1930:
case 1907:
case 216:
case 2073:
case 1792:
case 175:
case 1567:
case 2577:
case 3787:
case 2765:
case 2592:
case 3298:
case 3906:
case 2881:
case 2666:
case 2927:
case 2545:
case 569:
case 758:
case 1029:
case 1545:
case 3613:
case 567:
case 3391:
case 2047:
case 2200:
case 1759:
case 90:
case 2380:
case 2121:
case 940:
case 2890:
case 582:
case 2097:
case 1738:
case 1718:
case 3101:
case 1043:
case 1486:
case 1858:
case 2880:
case 1229:
case 221:
case 2672:
case 2239:
case 2573:
case 1523:
case 1617:
case 2466:
case 2486:
case 3193:
case 2908:
case 3168:
case 986:
case 1069:
case 1906:
case 2005:
case 1019:
case 2236:
case 2525:
case 3844:
case 2788:
case 1558:
case 2244:
case 1758:
case 2082:
case 1601:
case 1760:
case 314:
case 1110:
case 2907:
case 1438:
case 97:
case 1236:
case 3347:
case 1598:
case 1779:
case 2186:
case 1343:
case 3965:
case 972:
case 2051:
case 288:
case 913:
case 2103:
case 835:
case 878:
case 3585:
case 791:
case 2599:
case 1362:
case 901:
case 2590:
case 2385:
case 1067:
case 1124:
case 3114:
case 4018:
case 608:
case 3346:
case 363:
case 2457:
case 3388:
case 2440:
case 1872:
case 3380:
case 592:
case 3282:
case 1125:
case 1654:
case 601:
case 4072:
case 2227:
case 3124:
case 709:
case 1817:
case 2454:
case 2417:
case 343:
case 1816:
case 3689:
case 3535:
case 942:
case 89:
case 4074:
case 3618:
case 134:
case 1004:
case 3901:
case 1925:
case 3119:
case 2796:
case 1627:
case 1222:
case 312:
case 2110:
case 64:
case 318:
case 2165:
case 540:
case 447:
case 2520:
case 3353:
case 1276:
case 4082:
case 1551:
case 3675:
case 632:
case 3009:
case 1596:
case 4093:
case 3827:
case 2706:
case 2195:
case 1871:
case 2931:
case 4090:
case 3150:
case 2418:
case 3269:
case 2489:
case 3895:
case 2233:
case 3191:
case 3721:
case 2734:
case 1084:
case 1447:
case 3986:
case 2398:
case 2789:
case 3660:
case 1186:
case 2900:
case 1785:
case 1510:
case 975:
case 724:
case 29:
case 762:
case 1428:
case 1328:
case 2431:
case 2829:
case 3088:
case 1099:
case 1775:
case 2718:
case 2482:
case 2608:
case 2086:
case 2799:
case 1834:
case 2766:
case 2293:
case 905:
case 3979:
case 2046:
case 3039:
case 321:
case 2767:
case 1389:
case 1274:
case 1753:
case 3791:
case 3147:
case 3253:
case 1742:
case 844:
case 3438:
case 2130:
case 642:
case 2948:
case 857:
case 1945:
case 1306:
case 2779:
case 1989:
case 554:
case 301:
case 841:
case 1663:
case 2162:
case 3661:
case 1599:
case 245:
case 4062:
case 2588:
case 930:
case 2207:
case 979:
case 1390:
case 1135:
case 429:
case 2661:
case 1374:
case 976:
case 2:
case 1651:
case 912:
case 443:
case 2794:
case 3031:
case 39:
case 3578:
case 2077:
case 1744:
case 1636:
case 1607:
case 3363:
case 226:
case 1903:
case 1813:
case 4087:
case 1958:
case 526:
case 284:
case 1470:
case 326:
case 1122:
case 982:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1665442801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,];
var gg_b = "1665442801/";

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
