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
var o = 0;
switch (g) {
case 2614:
case 2394:
case 2224:
case 4037:
case 1595:
case 562:
case 1888:
case 2034:
case 661:
case 1039:
case 3272:
case 885:
case 549:
case 1283:
case 3727:
case 3310:
case 598:
case 1279:
case 2826:
case 3053:
case 2015:
case 3153:
case 688:
case 1212:
case 705:
case 1584:
case 822:
case 906:
case 916:
case 1658:
case 637:
case 1769:
case 3648:
case 958:
case 2908:
case 438:
case 1697:
case 3495:
case 2210:
case 303:
case 1097:
case 3837:
case 2028:
case 2419:
case 3513:
case 1587:
case 3997:
case 2203:
case 2408:
case 128:
case 2724:
case 34:
case 2903:
case 2239:
case 1369:
case 3936:
case 1383:
case 1211:
case 4032:
case 3373:
case 2197:
case 875:
case 927:
case 2371:
case 3081:
case 3210:
case 3744:
case 382:
case 1688:
case 3854:
case 1331:
case 250:
case 2140:
case 667:
case 1597:
case 2204:
case 3171:
case 818:
case 4029:
case 628:
case 3260:
case 468:
case 3584:
case 1477:
case 1534:
case 2128:
case 4057:
case 341:
case 2214:
case 1605:
case 3915:
case 3241:
case 2668:
case 2327:
case 2830:
case 1969:
case 1479:
case 2231:
case 1090:
case 1405:
case 2004:
case 3908:
case 2973:
case 1246:
case 2789:
case 3784:
case 3975:
case 912:
case 3059:
case 971:
case 2974:
case 3868:
case 2966:
case 224:
case 1330:
case 1256:
case 2714:
case 2196:
case 2139:
case 3043:
case 1446:
case 3856:
case 676:
case 3778:
case 258:
case 1555:
case 740:
case 323:
case 1339:
case 987:
case 1594:
case 1335:
case 3136:
case 776:
case 2191:
case 2347:
case 2987:
case 2254:
case 3927:
case 1689:
case 1061:
case 3038:
case 1026:
case 1487:
case 1089:
case 3375:
case 1533:
case 1566:
case 369:
case 1642:
case 3946:
case 639:
case 254:
case 1887:
case 192:
case 3634:
case 3178:
case 3329:
case 2521:
case 3164:
case 370:
case 173:
case 2023:
case 772:
case 2100:
case 2964:
case 3753:
case 1904:
case 2182:
case 2910:
case 543:
case 3430:
case 4068:
case 3246:
case 3419:
case 4027:
case 352:
case 893:
case 3960:
case 3978:
case 3890:
case 1712:
case 3152:
case 3256:
case 2425:
case 2519:
case 1101:
case 2945:
case 2126:
case 692:
case 814:
case 1048:
case 3738:
case 2109:
case 202:
case 3332:
case 1387:
case 738:
case 3644:
case 762:
case 831:
case 773:
case 3701:
case 1280:
case 3461:
case 1824:
case 3074:
case 2018:
case 1196:
case 2342:
case 2156:
case 2207:
case 232:
case 554:
case 478:
case 3174:
case 2287:
case 327:
case 1507:
case 3774:
case 1148:
case 2477:
case 3239:
case 3756:
case 3999:
case 1629:
case 2132:
case 1406:
case 3435:
case 588:
case 2656:
case 1791:
case 1756:
case 642:
case 2174:
case 3613:
case 1799:
case 1456:
case 2906:
case 1412:
case 1610:
case 1735:
case 1034:
case 1357:
case 3813:
case 4043:
case 1150:
case 2422:
case 2029:
case 3617:
case 1382:
case 3468:
case 755:
case 2068:
case 707:
case 1890:
case 3012:
case 15:
case 752:
case 2878:
case 1857:
case 3168:
case 1264:
case 3964:
case 874:
case 1744:
case 659:
case 2033:
case 1551:
case 3026:
case 1858:
case 854:
case 464:
case 1894:
case 1081:
case 4013:
case 794:
case 2630:
case 2111:
case 398:
case 1527:
case 2302:
case 507:
case 1823:
case 1724:
case 263:
case 631:
case 3062:
case 1634:
case 205:
case 107:
case 3106:
case 973:
case 2487:
case 3226:
case 1379:
case 4048:
case 3240:
case 3114:
case 1156:
case 684:
case 1659:
case 3132:
case 1776:
case 412:
case 471:
case 2189:
case 2026:
case 3480:
case 3996:
case 3591:
case 3292:
case 3907:
case 261:
case 2032:
case 506:
case 1255:
case 1134:
case 711:
case 2525:
case 3427:
case 3885:
case 253:
case 932:
case 2334:
case 2535:
case 3586:
case 4075:
case 1569:
case 3326:
case 3989:
case 3095:
case 1572:
case 1360:
case 1322:
case 1698:
case 2212:
case 2337:
case 2841:
case 2039:
case 2468:
case 1096:
case 2249:
case 3412:
case 195:
case 2003:
case 1498:
case 2399:
case 3688:
case 3994:
case 74:
case 3231:
case 2010:
case 1302:
case 3187:
case 3413:
case 2925:
case 1519:
case 2202:
case 3783:
case 1021:
case 3573:
case 2696:
case 750:
case 1032:
case 3575:
case 1552:
case 3409:
case 279:
case 3599:
case 2178:
case 3069:
case 1892:
case 3703:
case 373:
case 2747:
case 368:
case 1249:
case 2706:
case 522:
case 3088:
case 1926:
case 474:
case 611:
case 1324:
case 2515:
case 553:
case 480:
case 1856:
case 3959:
case 69:
case 871:
case 781:
case 652:
case 2965:
case 1155:
case 269:
case 1537:
case 3800:
case 2489:
case 3217:
case 293:
case 4017:
case 170:
case 3378:
case 4051:
case 332:
case 950:
case 2343:
case 1849:
case 558:
case 2560:
case 3712:
case 509:
case 1292:
case 583:
case 2314:
case 1563:
case 1310:
case 2113:
case 2285:
case 144:
case 763:
case 1447:
case 1415:
case 77:
case 3583:
case 3029:
case 1038:
case 3286:
case 991:
case 1789:
case 576:
case 1942:
case 1925:
case 426:
case 1143:
case 155:
case 2545:
case 3411:
case 3235:
case 3385:
case 2587:
case 1420:
case 2948:
case 2578:
case 3392:
case 2209:
case 2449:
case 532:
case 747:
case 805:
case 3253:
case 3352:
case 1462:
case 3986:
case 3903:
case 4033:
case 1000:
case 1895:
case 1734:
case 3259:
case 613:
case 2572:
case 1153:
case 2284:
case 4008:
case 1203:
case 681:
case 3188:
case 3108:
case 878:
case 3570:
case 3269:
case 3156:
case 2736:
case 93:
case 989:
case 3630:
case 2603:
case 725:
case 143:
case 64:
case 2889:
case 3372:
case 3992:
case 761:
case 2329:
case 2869:
case 2166:
case 2102:
case 3836:
case 1018:
case 2265:
case 1815:
case 4064:
case 1666:
case 27:
case 1797:
case 1399:
case 1076:
case 2616:
case 638:
case 58:
case 2574:
case 252:
case 838:
case 3184:
case 1909:
case 679:
case 2809:
case 4074:
case 2558:
case 1626:
case 488:
case 3947:
case 3359:
case 4001:
case 604:
case 1837:
case 1348:
case 3673:
case 2943:
case 1818:
case 934:
case 3322:
case 2358:
case 2262:
case 1727:
case 3052:
case 3830:
case 1345:
case 2381:
case 1731:
case 3568:
case 2116:
case 3626:
case 2423:
case 3224:
case 1652:
case 3107:
case 2761:
case 2902:
case 3509:
case 4073:
case 2748:
case 968:
case 36:
case 2886:
case 477:
case 1152:
case 2362:
case 264:
case 2621:
case 876:
case 2406:
case 1162:
case 880:
case 2900:
case 1672:
case 897:
case 3179:
case 2382:
case 66:
case 13:
case 2208:
case 2933:
case 3404:
case 983:
case 363:
case 451:
case 1054:
case 1442:
case 3424:
case 3883:
case 3402:
case 193:
case 1044:
case 1235:
case 60:
case 787:
case 3406:
case 1332:
case 1099:
case 827:
case 92:
case 1965:
case 14:
case 673:
case 1056:
case 2591:
case 435:
case 4022:
case 103:
case 1850:
case 824:
case 4010:
case 3067:
case 2464:
case 119:
case 1130:
case 1226:
case 2424:
case 3384:
case 1336:
case 3416:
case 3566:
case 1063:
case 3631:
case 287:
case 2186:
case 3684:
case 528:
case 2340:
case 1075:
case 354:
case 1439:
case 2901:
case 2562:
case 1215:
case 2434:
case 2654:
case 2267:
case 3021:
case 2626:
case 2076:
case 2876:
case 759:
case 849:
case 2297:
case 3766:
case 911:
case 3083:
case 1371:
case 2764:
case 3264:
case 2785:
case 81:
case 84:
case 981:
case 3346:
case 2144:
case 1937:
case 3710:
case 2542:
case 1844:
case 2025:
case 2301:
case 1315:
case 905:
case 3607:
case 1715:
case 289:
case 3212:
case 2604:
case 545:
case 896:
case 826:
case 1282:
case 3980:
case 1448:
case 3751:
case 2942:
case 109:
case 2989:
case 290:
case 721:
case 3050:
case 3340:
case 3969:
case 2475:
case 3928:
case 635:
case 2061:
case 3816:
case 3037:
case 3478:
case 1361:
case 2430:
case 3318:
case 1977:
case 1317:
case 3771:
case 2698:
case 497:
case 1985:
case 1311:
case 3823:
case 3942:
case 782:
case 536:
case 3432:
case 422:
case 321:
case 3490:
case 1077:
case 4066:
case 3170:
case 594:
case 3781:
case 3615:
case 3555:
case 2460:
case 2536:
case 3814:
case 2445:
case 3726:
case 1297:
case 427:
case 439:
case 2674:
case 40:
case 3218:
case 4021:
case 2722:
case 4042:
case 2217:
case 3369:
case 2043:
case 3860:
case 4077:
case 1614:
case 2751:
case 3294:
case 2143:
case 1092:
case 852:
case 1474:
case 3995:
case 2533:
case 1660:
case 131:
case 3582:
case 2669:
case 24:
case 3637:
case 3077:
case 1273:
case 3457:
case 434:
case 3469:
case 326:
case 3838:
case 3423:
case 3523:
case 162:
case 2687:
case 2454:
case 388:
case 1873:
case 1210:
case 1154:
case 28:
case 1568:
case 3:
case 2218:
case 347:
case 829:
case 1862:
case 282:
case 2814:
case 894:
case 1695:
case 1428:
case 2530:
case 3206:
case 914:
case 1790:
case 2767:
case 3925:
case 3677:
case 2788:
case 3715:
case 3125:
case 2685:
case 2206:
case 495:
case 3056:
case 3005:
case 1819:
case 3919:
case 3018:
case 4093:
case 237:
case 1400:
case 2884:
case 1258:
case 3897:
case 3526:
case 573:
case 2225:
case 184:
case 3196:
case 3826:
case 1951:
case 956:
case 708:
case 2510:
case 3666:
case 1393:
case 2067:
case 3559:
case 972:
case 3232:
case 2758:
case 3499:
case 4018:
case 2593:
case 1590:
case 348:
case 2927:
case 160:
case 3396:
case 1562:
case 4063:
case 2462:
case 48:
case 2060:
case 1742:
case 1656:
case 2352:
case 3604:
case 2971:
case 174:
case 832:
case 2930:
case 1510:
case 73:
case 432:
case 1364:
case 3550:
case 3938:
case 492:
case 2970:
case 1525:
case 1005:
case 3420:
case 3596:
case 597:
case 879:
case 3660:
case 3498:
case 1877:
case 3852:
case 52:
case 142:
case 2880:
case 1429:
case 2950:
case 2072:
case 1277:
case 940:
case 335:
case 3667:
case 2410:
case 2575:
case 3729:
case 2684:
case 764:
case 2496:
case 557:
case 1636:
case 3548:
case 3287:
case 3882:
case 2401:
case 1177:
case 2148:
case 649:
case 2608:
case 2014:
case 4031:
case 154:
case 3620:
case 1266:
case 491:
case 1185:
case 420:
case 91:
case 1835:
case 2089:
case 1912:
case 3394:
case 2086:
case 1719:
case 3849:
case 2440:
case 1529:
case 2495:
case 3129:
case 2436:
case 1654:
case 1163:
case 2389:
case 3465:
case 2000:
case 2912:
case 1100:
case 2150:
case 2670:
case 3893:
case 381:
case 817:
case 917:
case 106:
case 4056:
case 654:
case 1515:
case 3519:
case 2050:
case 2709:
case 2096:
case 2022:
case 49:
case 1668:
case 2650:
case 2624:
case 670:
case 1617:
case 3933:
case 2957:
case 338:
case 1496:
case 2079:
case 728:
case 3397:
case 3891:
case 1934:
case 2433:
case 2976:
case 1402:
case 475:
case 1204:
case 813:
case 1521:
case 1476:
case 2663:
case 680:
case 490:
case 2441:
case 807:
case 209:
case 3055:
case 2620:
case 1580:
case 2847:
case 1079:
case 2463:
case 618:
case 3426:
case 6:
case 1395:
case 1908:
case 2951:
case 601:
case 3161:
case 168:
case 2256:
case 157:
case 3247:
case 483:
case 3876:
case 2762:
case 2643:
case 2282:
case 457:
case 3130:
case 3459:
case 1730:
case 443:
case 3166:
case 1363:
case 3137:
case 3638:
case 2227:
case 867:
case 3436:
case 2363:
case 1500:
case 219:
case 1704:
case 4035:
case 1667:
case 2350:
case 2741:
case 702:
case 1805:
case 2523:
case 3140:
case 3244:
case 1080:
case 1940:
case 2082:
case 1779:
case 2526:
case 886:
case 3511:
case 336:
case 3904:
case 2779:
case 3327:
case 4049:
case 126:
case 1757:
case 1398:
case 3025:
case 256:
case 3158:
case 2307:
case 3097:
case 756:
case 1883:
case 595:
case 2295:
case 3165:
case 2581:
case 2080:
case 2499:
case 2257:
case 1312:
case 1544:
case 3347:
case 2782:
case 851:
case 2320:
case 2299:
case 2895:
case 801:
case 3213:
case 3749:
case 1376:
case 2811:
case 1586:
case 3444:
case 2885:
case 1564:
case 1725:
case 3238:
case 3399:
case 3571:
case 2420:
case 3477:
case 3121:
case 2054:
case 694:
case 3482:
case 1233:
case 2864:
case 1902:
case 3230:
case 3759:
case 3984:
case 1240:
case 2863:
case 3578:
case 636:
case 1726:
case 3133:
case 3250:
case 175:
case 1094:
case 317:
case 1832:
case 2613:
case 1394:
case 658:
case 1868:
case 1932:
case 2372:
case 2268:
case 3711:
case 3733:
case 3440:
case 22:
case 2689:
case 2232:
case 2385:
case 3270:
case 2946:
case 786:
case 2917:
case 529:
case 3894:
case 1112:
case 1043:
case 3695:
case 2710:
case 804:
case 556:
case 2537:
case 2958:
case 2497:
case 2040:
case 1780:
case 1914:
case 99:
case 1741:
case 700:
case 3651:
case 2351:
case 1036:
case 1535:
case 580:
case 2792:
case 3363:
case 2821:
case 3350:
case 719:
case 16:
case 2053:
case 2415:
case 828:
case 319:
case 309:
case 1119:
case 1417:
case 3792:
case 2791:
case 2500:
case 1175:
case 3007:
case 94:
case 1732:
case 1410:
case 1931:
case 383:
case 2832:
case 2438:
case 3360:
case 2532:
case 2047:
case 4094:
case 1686:
case 1993:
case 2795:
case 1638:
case 129:
case 1291:
case 2834:
case 4020:
case 1973:
case 1378:
case 2173:
case 3472:
case 18:
case 3355:
case 1630:
case 3319:
case 2215:
case 1060:
case 2321:
case 116:
case 304:
case 284:
case 96:
case 3553:
case 1389:
case 1804:
case 1876:
case 3970:
case 2509:
case 3547:
case 4016:
case 2027:
case 1452:
case 1380:
case 3761:
case 593:
case 2245:
case 1309:
case 834:
case 4025:
case 3841:
case 1673:
case 955:
case 1603:
case 113:
case 559:
case 1829:
case 3195:
case 592:
case 1989:
case 859:
case 1049:
case 3433:
case 3641:
case 2332:
case 418:
case 1545:
case 3862:
case 1920:
case 2579:
case 2691:
case 3096:
case 225:
case 3520:
case 3379:
case 2990:
case 1543:
case 2549:
case 3600:
case 1457:
case 1087:
case 2700:
case 2248:
case 3119:
case 1145:
case 3976:
case 133:
case 2701:
case 1303:
case 1438:
case 2833:
case 2266:
case 3693:
case 1681:
case 2303:
case 3546:
case 2205:
case 2887:
case 928:
case 1516:
case 2760:
case 1860:
case 2153:
case 286:
case 2988:
case 2311:
case 355:
case 2627:
case 2827:
case 449:
case 584:
case 727:
case 1472:
case 3794:
case 463:
case 3932:
case 1243:
case 3722:
case 3447:
case 4024:
case 3691:
case 95:
case 729:
case 3103:
case 270:
case 2732:
case 3467:
case 3844:
case 4087:
case 1714:
case 115:
case 575:
case 1227:
case 1473:
case 3835:
case 55:
case 869:
case 1407:
case 3365:
case 3757:
case 2923:
case 3515:
case 2799:
case 1318:
case 3805:
case 2757:
case 1257:
case 3508:
case 3462:
case 3655:
case 182:
case 223:
case 191:
case 2618:
case 574:
case 2996:
case 842:
case 2856:
case 2541:
case 2041:
case 1972:
case 1721:
case 3855:
case 1323:
case 30:
case 476:
case 643:
case 2241:
case 98:
case 655:
case 3589:
case 2580:
case 1341:
case 318:
case 563:
case 603:
case 3367:
case 2098:
case 1144:
case 2646:
case 9:
case 1558:
case 2699:
case 1035:
case 1978:
case 2049:
case 206:
case 3510:
case 2388:
case 1541:
case 1765:
case 1601:
case 4046:
case 1132:
case 3100:
case 2547:
case 1903:
case 3162:
case 1124:
case 1151:
case 2151:
case 997:
case 211:
case 1522:
case 4078:
case 118:
case 890:
case 3991:
case 1346:
case 2093:
case 1944:
case 177:
case 187:
case 3565:
case 736:
case 1706:
case 3190:
case 3073:
case 2835:
case 111:
case 1050:
case 1252:
case 2731:
case 3923:
case 2612:
case 1278:
case 1008:
case 3859:
case 2315:
case 1548:
case 808:
case 620:
case 4038:
case 3485:
case 1480:
case 2940:
case 3605:
case 3829:
case 1045:
case 502:
case 552:
case 2131:
case 1083:
case 214:
case 1260:
case 2240:
case 2163:
case 3716:
case 194:
case 2622:
case 1954:
case 3280:
case 3618:
case 1236:
case 3917:
case 2021:
case 3740:
case 452:
case 862:
case 3974:
case 3278:
case 1506:
case 2052:
case 105:
case 766:
case 3745:
case 1898:
case 1304:
case 3381:
case 2193:
case 62:
case 1125:
case 1893:
case 1217:
case 4030:
case 3603:
case 3643:
case 2694:
case 1307:
case 3051:
case 901:
case 3370:
case 1787:
case 1404:
case 3290:
case 1762:
case 3405:
case 2817:
case 448:
case 3386:
case 295:
case 1682:
case 2573:
case 3921:
case 2644:
case 97:
case 2044:
case 3320:
case 294:
case 519:
case 1354:
case 218:
case 3983:
case 2090:
case 1786:
case 337:
case 257:
case 411:
case 1884:
case 1111:
case 2213:
case 3576:
case 2472:
case 1027:
case 148:
case 1992:
case 1709:
case 1975:
case 909:
case 888:
case 1430:
case 2867:
case 4092:
case 76:
case 145:
case 780:
case 399:
case 2756:
case 3065:
case 3494:
case 555:
case 80:
case 2695:
case 2913:
case 3768:
case 2633:
case 3072:
case 3529:
case 1450:
case 3646:
case 2252:
case 1879:
case 3438:
case 3944:
case 1040:
case 995:
case 1188:
case 1126:
case 3046:
case 1948:
case 3850:
case 165:
case 3004:
case 222:
case 485:
case 3549:
case 376:
case 1539:
case 2681:
case 749:
case 1088:
case 3954:
case 1301:
case 3180:
case 1295:
case 1073:
case 2683:
case 120:
case 3254:
case 3871:
case 2944:
case 3662:
case 3227:
case 3556:
case 1128:
case 802:
case 1947:
case 2467:
case 821:
case 3177:
case 1665:
case 1115:
case 2051:
case 3022:
case 2149:
case 1244:
case 1416:
case 3387:
case 3647:
case 3787:
case 3311:
case 2752:
case 3090:
case 2807:
case 945:
case 1349:
case 602:
case 292:
case 3076:
case 1768:
case 1149:
case 213:
case 2048:
case 1247:
case 1613:
case 4005:
case 962:
case 8:
case 2677:
case 2429:
case 2986:
case 3742:
case 1822:
case 1795:
case 1106:
case 3714:
case 946:
case 1228:
case 3762:
case 3342:
case 3952:
case 674:
case 2568:
case 589:
case 2556:
case 1950:
case 626:
case 3772:
case 1592:
case 343:
case 2397:
case 454:
case 3554:
case 2692:
case 3507:
case 2999:
case 1574:
case 134:
case 1578:
case 217:
case 132:
case 207:
case 3527:
case 1241:
case 2360:
case 3622:
case 482:
case 581:
case 753:
case 441:
case 4060:
case 2554:
case 1046:
case 2400:
case 3391:
case 2255:
case 278:
case 990:
case 1220:
case 3449:
case 3299:
case 2637:
case 758:
case 2960:
case 2199:
case 748:
case 2570:
case 4050:
case 2253:
case 2272:
case 530:
case 161:
case 3926:
case 3142:
case 619:
case 1764:
case 1861:
case 1490:
case 2920:
case 1616:
case 741:
case 1994:
case 260:
case 1113:
case 2662:
case 417:
case 2517:
case 1356:
case 954:
case 977:
case 1609:
case 1575:
case 271:
case 2413:
case 2843:
case 141:
case 125:
case 3514:
case 2711:
case 17:
case 3024:
case 966:
case 3747:
case 3126:
case 1002:
case 3690:
case 2069:
case 2721:
case 2170:
case 2938:
case 2531:
case 137:
case 1366:
case 1454:
case 1550:
case 1294:
case 29:
case 23:
case 2888:
case 1190:
case 2544:
case 2552:
case 793:
case 785:
case 2219:
case 1385:
case 3089:
case 2768:
case 450:
case 2056:
case 2682:
case 3263:
case 3144:
case 3353:
case 3336:
case 1556:
case 1184:
case 1030:
case 903:
case 1532:
case 2134:
case 127:
case 2953:
case 1938:
case 2062:
case 1325:
case 2184:
case 3779:
case 2005:
case 236:
case 121:
case 2705:
case 3564:
case 1078:
case 936:
case 1396:
case 1012:
case 305:
case 2527:
case 1069:
case 2916:
case 2491:
case 1508:
case 1198:
case 3205:
case 196:
case 3533:
case 2820:
case 2226:
case 3809:
case 627:
case 2865:
case 2431:
case 2013:
case 541:
case 1738:
case 3155:
case 1882:
case 1648:
case 1833:
case 2924:
case 149:
case 3649:
case 2703:
case 185:
case 2361:
case 1001:
case 2456:
case 3288:
case 164:
case 122:
case 3362:
case 770:
case 3569:
case 2529:
case 2278:
case 3009:
case 2518:
case 1643:
case 2874:
case 2778:
case 1024:
case 3236:
case 1411:
case 2742:
case 3020:
case 2395:
case 2119:
case 904:
case 872:
case 1218:
case 2905:
case 2806:
case 425:
case 169:
case 1118:
case 2794:
case 1418:
case 1485:
case 2629:
case 1214:
case 2693:
case 1201:
case 663:
case 2130:
case 3808:
case 2770:
case 2035:
case 384:
case 3990:
case 2169:
case 1084:
case 3220:
case 2065:
case 2595:
case 3141:
case 1250:
case 2745:
case 3040:
case 2017:
case 599:
case 3663:
case 1460:
case 1381:
case 3033:
case 163:
case 2921:
case 2310:
case 662:
case 3470:
case 2125:
case 3308:
case 2780:
case 877:
case 1098:
case 697:
case 2651:
case 1221:
case 1641:
case 1495:
case 2483:
case 986:
case 110:
case 2412:
case 715:
case 151:
case 392:
case 2959:
case 1970:
case 4019:
case 2539:
case 3078:
case 1469:
case 2031:
case 2688:
case 2729:
case 3924:
case 2505:
case 2354:
case 3692:
case 512:
case 436:
case 33:
case 3357:
case 3460:
case 297:
case 666:
case 3623:
case 3120:
case 1004:
case 1517:
case 1981:
case 1974:
case 314:
case 2085:
case 56:
case 523:
case 1589:
case 46:
case 889:
case 865:
case 3567:
case 3621:
case 882:
case 2115:
case 3920:
case 1661:
case 2288:
case 3031:
case 2825:
case 2868:
case 3937:
case 3832:
case 1781:
case 1733:
case 3528:
case 3889:
case 2815:
case 3870:
case 3316:
case 3303:
case 3333:
case 2610:
case 265:
case 365:
case 2283:
case 514:
case 3793:
case 3892:
case 3015:
case 2091:
case 1293:
case 634:
case 1232:
case 3194:
case 609:
case 1028:
case 2338:
case 3579:
case 668:
case 2162:
case 3255:
case 3888:
case 487:
case 3512:
case 1930:
case 2658:
case 1352:
case 445:
case 3665:
case 2117:
case 693:
case 3075:
case 3443:
case 606:
case 2133:
case 3746:
case 1999:
case 2447:
case 1573:
case 4026:
case 2645:
case 2081:
case 3163:
case 1513:
case 1717:
case 579:
case 2058:
case 2548:
case 1058:
case 1711:
case 965:
case 1598:
case 2926:
case 2292:
case 1945:
case 2712:
case 251:
case 961:
case 1042:
case 1571:
case 1900:
case 1773:
case 664:
case 551:
case 4095:
case 1997:
case 3199:
case 2261:
case 577:
case 3364:
case 3865:
case 1064:
case 1840:
case 3949:
case 372:
case 156:
case 823:
case 1512:
case 3912:
case 339:
case 2367:
case 1488:
case 1806:
case 1960:
case 2057:
case 1986:
case 848:
case 4:
case 1091:
case 2345:
case 2592:
case 2892:
case 2107:
case 409:
case 1074:
case 870:
case 1290:
case 117:
case 230:
case 3785:
case 2555:
case 963:
case 302:
case 31:
case 2719:
case 978:
case 275:
case 586:
case 4034:
case 1146:
case 2229:
case 2981:
case 4009:
case 742:
case 3629:
case 1300:
case 3127:
case 3251:
case 2838:
case 1557:
case 1482:
case 3493:
case 2982:
case 1359:
case 608:
case 3293:
case 1216:
case 1103:
case 2305:
case 2369:
case 1913:
case 2157:
case 2636:
case 2322:
case 1263:
case 1736:
case 647:
case 3857:
case 1906:
case 3301:
case 1750:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1710849602/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,];
var gg_b = "1710849602/";

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
      subdomainx = String.fromCharCode(97 + gg_m[x]);
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
