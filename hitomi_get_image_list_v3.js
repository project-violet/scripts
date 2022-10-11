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
case 2279:
case 679:
case 1221:
case 568:
case 3172:
case 323:
case 230:
case 372:
case 539:
case 3209:
case 1285:
case 2721:
case 814:
case 3454:
case 1691:
case 61:
case 2454:
case 975:
case 194:
case 35:
case 22:
case 1865:
case 2791:
case 1399:
case 1781:
case 911:
case 2428:
case 3458:
case 1094:
case 434:
case 87:
case 3886:
case 4079:
case 3735:
case 4089:
case 575:
case 1351:
case 957:
case 63:
case 1061:
case 104:
case 1565:
case 1055:
case 2484:
case 2357:
case 182:
case 160:
case 3974:
case 1674:
case 1585:
case 3294:
case 3190:
case 223:
case 697:
case 1959:
case 3585:
case 128:
case 3309:
case 1793:
case 2084:
case 1265:
case 1020:
case 1029:
case 1129:
case 149:
case 2847:
case 1744:
case 60:
case 3310:
case 2372:
case 1886:
case 527:
case 3863:
case 3704:
case 3819:
case 2380:
case 2150:
case 1244:
case 1592:
case 3658:
case 1404:
case 356:
case 1931:
case 3410:
case 78:
case 48:
case 1429:
case 1052:
case 3902:
case 3312:
case 869:
case 2860:
case 1912:
case 17:
case 2058:
case 3013:
case 2133:
case 3626:
case 2240:
case 3345:
case 387:
case 885:
case 2363:
case 712:
case 3638:
case 2594:
case 1735:
case 2869:
case 2462:
case 506:
case 1001:
case 2873:
case 3783:
case 859:
case 2817:
case 1930:
case 2122:
case 3549:
case 2268:
case 134:
case 2937:
case 1006:
case 192:
case 867:
case 2812:
case 2646:
case 3060:
case 724:
case 1799:
case 4041:
case 4005:
case 39:
case 2923:
case 1218:
case 1939:
case 2525:
case 1490:
case 3604:
case 2557:
case 685:
case 496:
case 1083:
case 1966:
case 2118:
case 1229:
case 3194:
case 1422:
case 1879:
case 2612:
case 3605:
case 183:
case 995:
case 1572:
case 3333:
case 3989:
case 903:
case 3835:
case 3584:
case 574:
case 1696:
case 2222:
case 3246:
case 1003:
case 353:
case 3702:
case 618:
case 3105:
case 3531:
case 1654:
case 877:
case 1070:
case 260:
case 18:
case 3917:
case 3254:
case 2003:
case 4084:
case 1741:
case 2200:
case 1132:
case 2344:
case 486:
case 1921:
case 448:
case 3496:
case 864:
case 3042:
case 2018:
case 1916:
case 1676:
case 1316:
case 608:
case 1730:
case 3210:
case 289:
case 1648:
case 839:
case 3716:
case 2840:
case 2955:
case 2673:
case 2121:
case 3742:
case 3102:
case 1391:
case 3665:
case 2320:
case 2848:
case 3421:
case 2874:
case 801:
case 651:
case 444:
case 1722:
case 458:
case 2805:
case 312:
case 2053:
case 2490:
case 1057:
case 498:
case 1208:
case 3269:
case 2930:
case 9:
case 3242:
case 237:
case 596:
case 1641:
case 795:
case 100:
case 4086:
case 1369:
case 1428:
case 3314:
case 3197:
case 750:
case 3001:
case 834:
case 1685:
case 1341:
case 2716:
case 4035:
case 767:
case 1911:
case 425:
case 225:
case 1811:
case 2035:
case 2144:
case 1871:
case 782:
case 2645:
case 2845:
case 90:
case 1881:
case 728:
case 1360:
case 3282:
case 1249:
case 2528:
case 2248:
case 915:
case 3577:
case 2172:
case 731:
case 783:
case 3149:
case 2254:
case 365:
case 1148:
case 1949:
case 1300:
case 1346:
case 1650:
case 2339:
case 2474:
case 3348:
case 403:
case 1783:
case 1234:
case 1004:
case 65:
case 3428:
case 1548:
case 2406:
case 2041:
case 3640:
case 1856:
case 1435:
case 1333:
case 2273:
case 4040:
case 3736:
case 2621:
case 3444:
case 552:
case 3325:
case 1742:
case 2455:
case 3324:
case 2059:
case 519:
case 912:
case 713:
case 3153:
case 10:
case 209:
case 235:
case 2235:
case 53:
case 1339:
case 2586:
case 2362:
case 3967:
case 2189:
case 1072:
case 906:
case 1237:
case 1919:
case 1322:
case 3145:
case 889:
case 3040:
case 2318:
case 171:
case 3744:
case 321:
case 1135:
case 1484:
case 1280:
case 1444:
case 316:
case 505:
case 1180:
case 3452:
case 2045:
case 1594:
case 2595:
case 2396:
case 2746:
case 3334:
case 3136:
case 3848:
case 3127:
case 1207:
case 3896:
case 3687:
case 1896:
case 2709:
case 1694:
case 1786:
case 3960:
case 1986:
case 3354:
case 3281:
case 91:
case 133:
case 1559:
case 1530:
case 2967:
case 3389:
case 3374:
case 4019:
case 3991:
case 3306:
case 3382:
case 382:
case 1835:
case 1511:
case 3050:
case 1718:
case 3518:
case 3272:
case 1942:
case 4077:
case 1354:
case 1486:
case 832:
case 1415:
case 756:
case 139:
case 1671:
case 504:
case 1330:
case 2853:
case 3019:
case 3727:
case 234:
case 1028:
case 3928:
case 1862:
case 587:
case 999:
case 1805:
case 42:
case 1712:
case 1549:
case 2797:
case 3442:
case 2299:
case 400:
case 3809:
case 286:
case 4031:
case 3541:
case 413:
case 1633:
case 1523:
case 1459:
case 3785:
case 3888:
case 1007:
case 3925:
case 2287:
case 1264:
case 3780:
case 3100:
case 1658:
case 1904:
case 2581:
case 2691:
case 429:
case 4042:
case 952:
case 2447:
case 1997:
case 1563:
case 1089:
case 1732:
case 865:
case 1698:
case 1032:
case 3566:
case 2941:
case 3141:
case 1140:
case 2234:
case 44:
case 2458:
case 1616:
case 127:
case 678:
case 2786:
case 184:
case 3070:
case 2850:
case 3670:
case 2346:
case 624:
case 1925:
case 581:
case 3067:
case 3086:
case 2899:
case 3017:
case 1846:
case 3846:
case 3089:
case 3478:
case 4003:
case 1274:
case 1386:
case 161:
case 680:
case 215:
case 1161:
case 2173:
case 3483:
case 1097:
case 2209:
case 1839:
case 435:
case 970:
case 1688:
case 70:
case 244:
case 3165:
case 1432:
case 3521:
case 718:
case 741:
case 1731:
case 677:
case 3393:
case 2099:
case 3547:
case 3078:
case 2675:
case 797:
case 2296:
case 532:
case 1050:
case 1188:
case 1981:
case 472:
case 1687:
case 525:
case 3411:
case 818:
case 2379:
case 242:
case 3251:
case 1239:
case 3343:
case 551:
case 1190:
case 1445:
case 1166:
case 1390:
case 467:
case 2275:
case 2232:
case 309:
case 2262:
case 2737:
case 927:
case 1956:
case 3450:
case 2151:
case 2093:
case 1103:
case 2915:
case 3691:
case 2951:
case 3446:
case 2137:
case 1377:
case 3861:
case 229:
case 1372:
case 3248:
case 1859:
case 609:
case 2116:
case 757:
case 3339:
case 1637:
case 1419:
case 1642:
case 1809:
case 239:
case 3705:
case 633:
case 1962:
case 2527:
case 1254:
case 2331:
case 2545:
case 3236:
case 1299:
case 720:
case 1194:
case 1430:
case 2165:
case 896:
case 3357:
case 3356:
case 86:
case 3761:
case 3186:
case 2021:
case 766:
case 1375:
case 2117:
case 2066:
case 3396:
case 1398:
case 3492:
case 2551:
case 3844:
case 3745:
case 1522:
case 1204:
case 907:
case 974:
case 3929:
case 1758:
case 2090:
case 3901:
case 391:
case 1909:
case 2005:
case 751:
case 3212:
case 1423:
case 485:
case 2256:
case 2987:
case 58:
case 1381:
case 159:
case 3994:
case 3239:
case 2157:
case 3370:
case 1834:
case 1755:
case 322:
case 3175:
case 2852:
case 4027:
case 1525:
case 2225:
case 2973:
case 3730:
case 430:
case 2914:
case 217:
case 279:
case 3230:
case 816:
case 983:
case 2184:
case 3487:
case 424:
case 2650:
case 737:
case 2785:
case 1348:
case 1521:
case 2507:
case 1577:
case 1077:
case 199:
case 290:
case 1508:
case 2311:
case 1750:
case 1841:
case 1820:
case 3586:
case 567:
case 79:
case 1289:
case 1257:
case 198:
case 1482:
case 1568:
case 3963:
case 3639:
case 3849:
case 3298:
case 752:
case 2867:
case 2698:
case 1946:
case 2556:
case 536:
case 2032:
case 2995:
case 2667:
case 1978:
case 1763:
case 2310:
case 3912:
case 1982:
case 2013:
case 3650:
case 1356:
case 942:
case 1059:
case 603:
case 3700:
case 555:
case 3215:
case 2892:
case 1056:
case 1932:
case 3924:
case 1327:
case 3417:
case 3782:
case 562:
case 3625:
case 3938:
case 3432:
case 1883:
case 3722:
case 370:
case 254:
case 1905:
case 2264:
case 1773:
case 760:
case 2475:
case 419:
case 2426:
case 414:
case 2440:
case 2111:
case 3752:
case 3407:
case 3842:
case 2030:
case 3614:
case 113:
case 2723:
case 3505:
case 3126:
case 308:
case 1529:
case 2670:
case 2620:
case 1373:
case 1601:
case 2652:
case 4050:
case 3964:
case 965:
case 1991:
case 1252:
case 2356:
case 2906:
case 1748:
case 2624:
case 253:
case 3168:
case 121:
case 2629:
case 2497:
case 4067:
case 1827:
case 259:
case 281:
case 1599:
case 3826:
case 2077:
case 3433:
case 335:
case 2710:
case 1118:
case 2631:
case 378:
case 1612:
case 692:
case 213:
case 3187:
case 177:
case 313:
case 2087:
case 1667:
case 1653:
case 2439:
case 1567:
case 808:
case 2134:
case 2427:
case 3119:
case 3367:
case 3837:
case 3621:
case 1125:
case 75:
case 1308:
case 3913:
case 3245:
case 1410:
case 2315:
case 3830:
case 7:
case 1263:
case 4065:
case 2120:
case 1656:
case 1929:
case 2952:
case 2334:
case 1632:
case 3365:
case 3532:
case 2777:
case 2088:
case 2153:
case 4051:
case 607:
case 3630:
case 1720:
case 1826:
case 3500:
case 2015:
case 3741:
case 1709:
case 3869:
case 2384:
case 572:
case 1615:
case 2086:
case 3555:
case 1917:
case 195:
case 2719:
case 3350:
case 2796:
case 3675:
case 601:
case 1836:
case 1900:
case 3661:
case 3750:
case 2762:
case 4074:
case 753:
case 2575:
case 3997:
case 803:
case 3968:
case 1127:
case 1332:
case 1619:
case 2596:
case 1624:
case 2964:
case 2277:
case 3642:
case 3850:
case 776:
case 1560:
case 1840:
case 3494:
case 3423:
case 947:
case 3021:
case 2328:
case 3867:
case 2154:
case 1312:
case 2460:
case 1588:
case 3200:
case 1736:
case 1908:
case 343:
case 1625:
case 357:
case 2468:
case 1969:
case 3858:
case 815:
case 2370:
case 2713:
case 3754:
case 2842:
case 1543:
case 3131:
case 620:
case 2655:
case 547:
case 2114:
case 464:
case 261:
case 1397:
case 108:
case 2694:
case 3501:
case 218:
case 315:
case 2434:
case 2648:
case 1033:
case 3641:
case 2759:
case 640:
case 1516:
case 3534:
case 2657:
case 4091:
case 1953:
case 2467:
case 390:
case 397:
case 890:
case 694:
case 2042:
case 1945:
case 1219:
case 3649:
case 961:
case 2787:
case 791:
case 2043:
case 2324:
case 497:
case 107:
case 1854:
case 2843:
case 1708:
case 1314:
case 2771:
case 3796:
case 3787:
case 2956:
case 3117:
case 2604:
case 304:
case 899:
case 1789:
case 1779:
case 2072:
case 3430:
case 2862:
case 1813:
case 3771:
case 1994:
case 3506:
case 3023:
case 3677:
case 3204:
case 1153:
case 4:
case 1195:
case 733:
case 193:
case 3646:
case 3546:
case 2982:
case 2679:
case 1509:
case 1868:
case 987:
case 3891:
case 1133:
case 723:
case 1887:
case 3895:
case 2221:
case 1463:
case 2280:
case 3081:
case 4053:
case 2091:
case 3373:
case 644:
case 3053:
case 1443:
case 3553:
case 874:
case 747:
case 637:
case 1693:
case 2109:
case 1988:
case 518:
case 892:
case 338:
case 3147:
case 2633:
case 1810:
case 2932:
case 2048:
case 3049:
case 3263:
case 2011:
case 2518:
case 3900:
case 2397:
case 263:
case 3756:
case 1468:
case 514:
case 2017:
case 1778:
case 2246:
case 2732:
case 2019:
case 2302:
case 2568:
case 3193:
case 2358:
case 1294:
case 2546:
case 418:
case 524:
case 2006:
case 1044:
case 3669:
case 3289:
case 256:
case 988:
case 1235:
case 1098:
case 2589:
case 561:
case 1475:
case 2953:
case 509:
case 3551:
case 2230:
case 499:
case 266:
case 72:
case 2872:
case 27:
case 2029:
case 3183:
case 1271:
case 155:
case 1141:
case 36:
case 2026:
case 3038:
case 2242:
case 1910:
case 3087:
case 3729:
case 812:
case 3390:
case 1618:
case 40:
case 2536:
case 3550:
case 1431:
case 693:
case 602:
case 2378:
case 710:
case 363:
case 3032:
case 2806:
case 709:
case 97:
case 1524:
case 794:
case 1552:
case 966:
case 3398:
case 2100:
case 2876:
case 2924:
case 835:
case 929:
case 979:
case 1036:
case 2178:
case 1085:
case 426:
case 2431:
case 586:
case 1796:
case 1197:
case 2865:
case 3130:
case 3495:
case 526:
case 2293:
case 2108:
case 3952:
case 3530:
case 3572:
case 479:
case 12:
case 2638:
case 597:
case 26:
case 3527:
case 2573:
case 211:
case 2767:
case 958:
case 1655:
case 420:
case 1298:
case 3701:
case 102:
case 2944:
case 3757:
case 15:
case 2492:
case 3699:
case 278:
case 2247:
case 3330:
case 355:
case 1452:
case 3416:
case 243:
case 233:
case 2085:
case 4045:
case 2605:
case 1380:
case 1534:
case 2816:
case 2526:
case 2722:
case 544:
case 2936:
case 2052:
case 553:
case 3397:
case 4057:
case 28:
case 960:
case 95:
case 140:
case 3447:
case 1864:
case 2354:
case 1514:
case 1774:
case 29:
case 3574:
case 1728:
case 973:
case 3824:
case 174:
case 531:
case 2164:
case 3275:
case 847:
case 2875:
case 2993:
case 454:
case 1765:
case 3229:
case 1311:
case 3214:
case 920:
case 3922:
case 3302:
case 105:
case 3622:
case 3790:
case 1882:
case 1483:
case 3575:
case 1721:
case 3613:
case 3753:
case 324:
case 417:
case 2148:
case 1540:
case 541:
case 2392:
case 1184:
case 3663:
case 2245:
case 440:
case 96:
case 3366:
case 2774:
case 3347:
case 74:
case 1109:
case 1645:
case 3291:
case 2338:
case 93:
case 529:
case 1944:
case 1943:
case 1870:
case 2409:
case 1660:
case 1000:
case 2271:
case 571:
case 667:
case 3058:
case 3195:
case 489:
case 3260:
case 615:
case 1241:
case 550:
case 456:
case 4072:
case 2394:
case 2831:
case 2898:
case 1424:
case 2057:
case 2102:
case 2014:
case 3344:
case 2837:
case 3589:
case 337:
case 669:
case 1076:
case 3599:
case 1684:
case 2593:
case 1255:
case 1025:
case 897:
case 884:
case 138:
case 711:
case 45:
case 1569:
case 3536:
case 1345:
case 4058:
case 2984:
case 2488:
case 2780:
case 2128:
case 863:
case 1124:
case 1041:
case 3623:
case 2602:
case 4093:
case 360:
case 347:
case 1610:
case 695:
case 3764:
case 4060:
case 828:
case 3287:
case 2772:
case 3039:
case 2316:
case 3429:
case 1494:
case 3284:
case 1236:
case 3253:
case 3391:
case 2412:
case 3107:
case 3115:
case 1666:
case 3387:
case 1964:
case 3636:
case 3647:
case 25:
case 3529:
case 628:
case 2717:
case 943:
case 2288:
case 1589:
case 1935:
case 4015:
case 996:
case 663:
case 3135:
case 2450:
case 2336:
case 248:
case 1754:
case 1526:
case 2920:
case 1151:
case 3028:
case 1242:
case 131:
case 1692:
case 2897:
case 3111:
case 276:
case 1899:
case 482:
case 2826:
case 2742:
case 3216:
case 3304:
case 846:
case 3463:
case 69:
case 3285:
case 1420:
case 392:
case 1675:
case 855:
case 2566:
case 2661:
case 3990:
case 50:
case 451:
case 1576:
case 2205:
case 1026:
case 2711:
case 205:
case 4069:
case 1581:
case 2199:
case 3970:
case 1775:
case 4010:
case 1111:
case 955:
case 3144:
case 3515:
case 2270:
case 3498:
case 3817:
case 3431:
case 4012:
case 2863:
case 47:
case 4090:
case 1230:
case 2469:
case 2047:
case 2988:
case 3660:
case 1073:
case 3539:
case 3762:
case 2902:
case 4056:
case 2061:
case 2332:
case 2425:
case 3138:
case 6:
case 4082:
case 2700:
case 4016:
case 3157:
case 1706:
case 1365:
case 2622:
case 3633:
case 3372:
case 3724:
case 282:
case 3947:
case 280:
case 3231:
case 3563:
case 2304:
case 3907:
case 2126:
case 936:
case 1081:
case 389:
case 3426:
case 2347:
case 3196:
case 3114:
case 1:
case 1307:
case 3666:
case 557:
case 2607:
case 2395:
case 3714:
case 3653:
case 1201:
case 2998:
case 2514:
case 2101:
case 3597:
case 2313:
case 2736:
case 530:
case 179:
case 2684:
case 827:
case 2291:
case 2155:
case 517:
case 188:
case 3377:
case 1537:
case 1169:
case 494:
case 443:
case 3707:
case 512:
case 2367:
case 2708:
case 3072:
case 2216:
case 3171:
case 3173:
case 959:
case 1575:
case 3268:
case 2795:
case 3259:
case 3892:
case 2345:
case 2664:
case 231:
case 4038:
case 881:
case 1761:
case 1897:
case 1465:
case 1099:
case 4023:
case 98:
case 502:
case 1866:
case 3831:
case 3747:
case 1557:
case 459:
case 2992:
case 2265:
case 2300:
case 1149:
case 1544:
case 3112:
case 3464:
case 1699:
case 1011:
case 3945:
case 1266:
case 1347:
case 2703:
case 2054:
case 32:
case 3876:
case 2768:
case 1440:
case 841:
case 2911:
case 1690:
case 2421:
case 2838:
case 59:
case 1817:
case 3568:
case 1673:
case 2510:
case 251:
case 2990:
case 2761:
case 1220:
case 427:
case 2352:
case 1216:
case 528:
case 3176:
case 0:
case 1768:
case 806:
case 935:
case 963:
case 763:
case 1304:
case 2321:
case 2975:
case 3300:
case 565:
case 3103:
case 908:
case 2701:
case 1803:
case 2489:
case 2828:
case 548:
case 2814:
case 1115:
case 1591:
case 3776:
case 116:
case 3055:
case 2056:
case 19:
case 584:
case 1710:
case 2752:
case 3311:
case 3462:
case 3793:
case 3441:
case 3503:
case 49:
case 24:
case 2918:
case 1651:
case 2613:
case 302:
case 1393:
case 76:
case 1889:
case 2562:
case 2186:
case 384:
case 1155:
case 2407:
case 1960:
case 3954:
case 3728:
case 1476:
case 700:
case 1857:
case 2197:
case 1321:
case 507:
case 181:
case 673:
case 2298:
case 1021:
case 2281:
case 3524:
case 3297:
case 3093:
case 1707:
case 3598:
case 3378:
case 645:
case 411:
case 3340:
case 1326:
case 250:
case 1282:
case 3151:
case 1060:
case 2585:
case 3520:
case 3273:
case 2074:
case 3327:
case 627:
case 1891:
case 3719:
case 1464:
case 2258:
case 3379:
case 3695:
case 1335:
case 2561:
case 3668:
case 2571:
case 3489:
case 3569:
case 2383:
case 1362:
case 221:
case 170:
case 931:
case 4004:
case 3027:
case 2882:
case 2800:
case 153:
case 4061:
case 3560:
case 2312:
case 1984:
case 981:
case 3257:
case 461:
case 2193:
case 1047:
case 1967:
case 1418:
case 1158:
case 2634:
case 1657:
case 2479:
case 1013:
case 914:
case 3386:
case 306:
case 2739:
case 3556:
case 2040:
case 3838:
case 1478:
case 1681:
case 3063:
case 662:
case 1636:
case 3319:
case 2825:
case 80:
case 1284:
case 940:
case 2364:
case 2180:
case 2516:
case 702:
case 4075:
case 2750:
case 1353:
case 1498:
case 2989:
case 522:
case 264:
case 3969:
case 1446:
case 2398:
case 1295:
case 976:
case 1968:
case 898:
case 2799:
case 1352:
case 1198:
case 3634:
case 3303:
case 200:
case 1952:
case 2969:
case 1767:
case 3255:
case 3522:
case 175:
case 2671:
case 1227:
case 1545:
case 416:
case 409:
case 484:
case 3375:
case 2776:
case 2854:
case 880:
case 4043:
case 4085:
case 2094:
case 3513:
case 189:
case 698:
case 2792:
case 500:
case 232:
case 2142:
case 2714:
case 1278:
case 2636:
case 3106:
case 3308:
case 1228:
case 2228:
case 3223:
case 1844:
case 643:
case 3770:
case 1016:
case 1573:
case 1062:
case 2251:
case 2004:
case 1558:
case 626:
case 1374:
case 3915:
case 2895:
case 2878:
case 1663:
case 3792:
case 1955:
case 3561:
case 2403:
case 3295:
case 857:
case 2858:
case 1458:
case 2451:
case 1107:
case 2506:
case 2599:
case 1139:
case 3184:
case 2252:
case 2078:
case 241:
case 2031:
case 1438:
case 2075:
case 2465:
case 830:
case 3358:
case 3893:
case 2388:
case 3620:
case 2491:
case 2619:
case 3778:
case 3064:
case 1756:
case 135:
case 1539:
case 2959:
case 3983:
case 1293:
case 2871:
case 3508:
case 3537:
case 1733:
case 201:
case 3667:
case 2734:
case 2204:
case 1401:
case 1349:
case 1448:
case 3657:
case 2065:
case 3066:
case 2764:
case 3958:
case 1825:
case 2174:
case 2999:
case 2110:
case 3422:
case 3733:
case 3029:
case 1379:
case 3163:
case 598:
case 977:
case 2677:
case 236:
case 3222:
case 2877:
case 2308:
case 792:
case 1842:
case 537:
case 925:
case 4037:
case 423:
case 1131:
case 1922:
case 2095:
case 2198:
case 1225:
case 374:
case 964:
case 3962:
case 3959:
case 3631:
case 137:
case 1110:
case 1492:
case 2187:
case 3932:
case 2815:
case 2813:
case 158:
case 346:
case 288:
case 369:
case 1066:
case 1142:
case 1535:
case 2592:
case 1556:
case 659:
case 1175:
case 2098:
case 2754:
case 3627:
case 3600:
case 2611:
case 3220:
case 2632:
case 2669:
case 1143:
case 4002:
case 878:
case 1716:
case 3385:
case 1598:
case 2666:
case 2549:
case 3046:
case 2226:
case 3208:
case 1669:
case 1954:
case 3748:
case 1031:
case 3278:
case 358:
case 3346:
case 3486:
case 2935:
case 2436:
case 2220:
case 1186:
case 1457:
case 2089:
case 2829:
case 3548:
case 298:
case 2472:
case 1338:
case 1704:
case 1167:
case 487:
case 1829:
case 2175:
case 268:
case 2386:
case 1643:
case 1217:
case 3006:
case 696:
case 354:
case 1248:
case 3526:
case 3211:
case 3590:
case 2025:
case 3571:
case 2049:
case 655:
case 516:
case 2494:
case 2124:
case 1436:
case 1053:
case 3305:
case 768:
case 1506:
case 879:
case 1203:
case 457:
case 3816:
case 1147:
case 3493:
case 2880:
case 1152:
case 1389:
case 3488:
case 447:
case 1051:
case 2284:
case 3395:
case 2689:
case 1224:
case 2360:
case 1948:
case 2244:
case 1776:
case 1406:
case 295:
case 3116:
case 2790:
case 3866:
case 1150:
case 474:
case 3789:
case 2663:
case 3889:
case 307:
case 992:
case 3322:
case 4044:
case 1015:
case 2131:
case 1376:
case 1058:
case 383:
case 2292:
case 3576:
case 2512:
case 2885:
case 31:
case 2036:
case 3961:
case 3418:
case 2341:
case 3167:
case 2387:
case 623:
case 3651:
case 3399:
case 2765:
case 591:
case 3773:
case 371:
case 3351:
case 272:
case 1168:
case 1251:
case 3941:
case 3814:
case 1275:
case 2905:
case 162:
case 314:
case 2326:
case 523:
case 3510:
case 2508:
case 1334:
case 2775:
case 1550:
case 771:
case 1579:
case 3710:
case 740:
case 2138:
case 367:
case 267:
case 1505:
case 3465:
case 364:
case 1382:
case 1606:
case 1120:
case 2473:
case 2909:
case 1323:
case 3552:
case 1608:
case 1670:
case 1705:
case 2161:
case 106:
case 216:
case 916:
case 1177:
case 1413:
case 1451:
case 3685:
case 3318:
case 3071:
case 125:
case 1515:
case 649:
case 1383:
case 543:
case 3097:
case 804:
case 319:
case 729:
case 2499:
case 1022:
case 1802:
case 1441:
case 2349:
case 1807:
case 112:
case 1460:
case 421:
case 2272:
case 490:
case 837:
case 1138:
case 1587:
case 1965:
case 3472:
case 3213:
case 1822:
case 2337:
case 57:
case 2720:
case 3711:
case 2034:
case 3471:
case 3740:
case 2351:
case 2509:
case 46:
case 1449:
case 2410:
case 707:
case 3662:
case 1425:
case 2374:
case 2249:
case 3101:
case 686:
case 3427:
case 3870:
case 3150:
case 1737:
case 831:
case 51:
case 2389:
case 755:
case 3533:
case 2981:
case 3800:
case 2069:
case 1578:
case 2696:
case 3317:
case 2756:
case 1212:
case 838:
case 2470:
case 1240:
case 1012:
case 2438:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1665464402/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,];
var gg_b = "1665464402/";

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
