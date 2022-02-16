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
case 1608:
case 501:
case 2132:
case 575:
case 1904:
case 4033:
case 2984:
case 1731:
case 1782:
case 3918:
case 4014:
case 2816:
case 2806:
case 2561:
case 802:
case 946:
case 3711:
case 1567:
case 3449:
case 1585:
case 3563:
case 1493:
case 3755:
case 1551:
case 2468:
case 3598:
case 3433:
case 1081:
case 3785:
case 991:
case 2612:
case 981:
case 3863:
case 2989:
case 3188:
case 1988:
case 1650:
case 3048:
case 1592:
case 534:
case 1929:
case 3820:
case 1468:
case 3548:
case 700:
case 1590:
case 427:
case 835:
case 2615:
case 2872:
case 56:
case 2752:
case 32:
case 390:
case 2947:
case 3885:
case 2133:
case 432:
case 3072:
case 3221:
case 1903:
case 3879:
case 437:
case 3570:
case 1950:
case 1957:
case 993:
case 1944:
case 1342:
case 2261:
case 3876:
case 2338:
case 3399:
case 1521:
case 2287:
case 2762:
case 1275:
case 2885:
case 2059:
case 3799:
case 2945:
case 360:
case 1955:
case 3650:
case 558:
case 1002:
case 3701:
case 1160:
case 2323:
case 115:
case 2194:
case 4050:
case 1:
case 3300:
case 1231:
case 1011:
case 1660:
case 2492:
case 2469:
case 3246:
case 189:
case 3187:
case 1486:
case 1753:
case 516:
case 1561:
case 477:
case 3978:
case 811:
case 3102:
case 1965:
case 2337:
case 1508:
case 401:
case 1416:
case 3077:
case 3145:
case 894:
case 3038:
case 1920:
case 2787:
case 2266:
case 3682:
case 1283:
case 193:
case 417:
case 2053:
case 3402:
case 1657:
case 375:
case 2783:
case 1260:
case 2447:
case 1236:
case 2959:
case 3882:
case 2110:
case 2600:
case 1541:
case 307:
case 4092:
case 1808:
case 3204:
case 615:
case 3817:
case 2814:
case 2313:
case 3312:
case 2552:
case 1835:
case 3473:
case 3106:
case 1444:
case 2023:
case 3872:
case 249:
case 2377:
case 396:
case 3933:
case 1692:
case 1720:
case 3344:
case 2437:
case 1140:
case 3746:
case 409:
case 2841:
case 2822:
case 100:
case 425:
case 2035:
case 495:
case 980:
case 2309:
case 1624:
case 469:
case 2895:
case 3832:
case 4036:
case 2792:
case 760:
case 1971:
case 3506:
case 647:
case 3549:
case 824:
case 1364:
case 1603:
case 3034:
case 3865:
case 2985:
case 2900:
case 800:
case 4009:
case 1515:
case 10:
case 3687:
case 1844:
case 735:
case 2711:
case 3353:
case 2301:
case 486:
case 2478:
case 1783:
case 840:
case 3677:
case 1251:
case 4016:
case 2432:
case 3588:
case 311:
case 1794:
case 3477:
case 3404:
case 3084:
case 3798:
case 2165:
case 1769:
case 1412:
case 153:
case 2850:
case 2688:
case 3768:
case 2648:
case 455:
case 1099:
case 1993:
case 1505:
case 1032:
case 3071:
case 1261:
case 1013:
case 2123:
case 1893:
case 626:
case 1439:
case 1597:
case 3847:
case 402:
case 1069:
case 2407:
case 69:
case 3310:
case 3420:
case 3178:
case 748:
case 278:
case 1440:
case 3991:
case 1902:
case 2677:
case 2121:
case 2616:
case 3660:
case 2305:
case 3534:
case 1538:
case 2239:
case 3675:
case 3228:
case 3698:
case 3540:
case 3193:
case 2317:
case 3393:
case 2974:
case 1526:
case 990:
case 3906:
case 704:
case 3822:
case 2404:
case 1946:
case 145:
case 2279:
case 2735:
case 1436:
case 825:
case 1414:
case 411:
case 3576:
case 3387:
case 3360:
case 1708:
case 2215:
case 565:
case 2249:
case 2575:
case 1502:
case 559:
case 1757:
case 3520:
case 484:
case 3110:
case 3970:
case 2717:
case 1688:
case 2613:
case 1668:
case 595:
case 1795:
case 152:
case 2705:
case 746:
case 879:
case 1247:
case 4058:
case 112:
case 2995:
case 27:
case 2712:
case 3840:
case 1345:
case 3311:
case 2319:
case 1175:
case 3167:
case 2140:
case 616:
case 821:
case 961:
case 1638:
case 1404:
case 3756:
case 3628:
case 3733:
case 2095:
case 844:
case 113:
case 2886:
case 604:
case 2050:
case 3155:
case 2530:
case 1189:
case 2166:
case 2057:
case 3142:
case 854:
case 478:
case 3240:
case 798:
case 2869:
case 3950:
case 1272:
case 3005:
case 4022:
case 3303:
case 1308:
case 1401:
case 1116:
case 1954:
case 2265:
case 3614:
case 1672:
case 901:
case 1164:
case 2376:
case 2185:
case 2555:
case 2224:
case 2896:
case 513:
case 1265:
case 3383:
case 787:
case 2245:
case 3014:
case 1932:
case 2218:
case 1226:
case 2296:
case 1952:
case 520:
case 2803:
case 179:
case 3437:
case 416:
case 1661:
case 673:
case 2992:
case 2457:
case 2636:
case 862:
case 3671:
case 2067:
case 3610:
case 1016:
case 960:
case 2630:
case 121:
case 2:
case 3908:
case 2413:
case 3990:
case 4001:
case 3127:
case 3313:
case 2546:
case 1014:
case 424:
case 1913:
case 2571:
case 3957:
case 374:
case 4087:
case 1421:
case 631:
case 573:
case 3905:
case 1823:
case 292:
case 1256:
case 3735:
case 540:
case 1428:
case 1966:
case 1717:
case 3499:
case 22:
case 2619:
case 919:
case 1947:
case 1158:
case 2085:
case 431:
case 2881:
case 929:
case 4019:
case 2542:
case 3480:
case 2882:
case 887:
case 1121:
case 1355:
case 4076:
case 1151:
case 72:
case 1263:
case 2009:
case 3458:
case 3091:
case 1741:
case 1540:
case 655:
case 1174:
case 3947:
case 295:
case 3042:
case 291:
case 1320:
case 357:
case 916:
case 816:
case 3474:
case 1487:
case 1248:
case 1760:
case 2467:
case 1729:
case 3747:
case 3828:
case 2786:
case 254:
case 1613:
case 1023:
case 985:
case 977:
case 489:
case 2853:
case 3043:
case 2864:
case 3471:
case 1467:
case 2698:
case 2182:
case 3787:
case 1687:
case 1124:
case 3088:
case 979:
case 902:
case 1472:
case 1874:
case 3602:
case 147:
case 1179:
case 2936:
case 3937:
case 3857:
case 3164:
case 3669:
case 2604:
case 4004:
case 356:
case 924:
case 2164:
case 2217:
case 2052:
case 4080:
case 1917:
case 1466:
case 3609:
case 2576:
case 3776:
case 719:
case 3583:
case 1206:
case 3047:
case 652:
case 178:
case 4013:
case 1991:
case 1733:
case 2975:
case 1663:
case 1806:
case 1381:
case 2681:
case 3678:
case 1340:
case 3020:
case 1360:
case 429:
case 381:
case 1120:
case 2701:
case 1889:
case 136:
case 3251:
case 282:
case 2153:
case 2081:
case 734:
case 3844:
case 822:
case 393:
case 3307:
case 387:
case 1908:
case 3731:
case 1927:
case 1909:
case 341:
case 2597:
case 943:
case 3414:
case 3274:
case 2979:
case 3452:
case 1725:
case 877:
case 4031:
case 691:
case 2679:
case 2302:
case 3418:
case 420:
case 2327:
case 443:
case 1331:
case 3748:
case 3625:
case 83:
case 2471:
case 2466:
case 1154:
case 2811:
case 1104:
case 2758:
case 2048:
case 2392:
case 436:
case 949:
case 3013:
case 2599:
case 1042:
case 3469:
case 2233:
case 2022:
case 3526:
case 2285:
case 3920:
case 3107:
case 1898:
case 1562:
case 117:
case 725:
case 3773:
case 349:
case 421:
case 4084:
case 3445:
case 220:
case 1215:
case 820:
case 2061:
case 2553:
case 483:
case 3001:
case 1114:
case 1828:
case 3679:
case 3378:
case 1744:
case 896:
case 1020:
case 624:
case 1021:
case 4002:
case 809:
case 2268:
case 28:
case 2226:
case 3181:
case 4024:
case 530:
case 1931:
case 129:
case 3695:
case 1793:
case 817:
case 1781:
case 2675:
case 2117:
case 904:
case 712:
case 3448:
case 3255:
case 2016:
case 975:
case 2071:
case 1934:
case 3248:
case 2549:
case 3105:
case 3511:
case 3278:
case 2517:
case 2844:
case 251:
case 1890:
case 2472:
case 3637:
case 3424:
case 870:
case 3012:
case 3136:
case 1630:
case 279:
case 3516:
case 1915:
case 1273:
case 1317:
case 564:
case 1310:
case 26:
case 404:
case 1679:
case 1453:
case 2922:
case 166:
case 1306:
case 923:
case 934:
case 88:
case 1392:
case 4062:
case 2987:
case 521:
case 1233:
case 1864:
case 2062:
case 3961:
case 1484:
case 1180:
case 4003:
case 317:
case 2830:
case 1770:
case 2086:
case 533:
case 1210:
case 2045:
case 2647:
case 3390:
case 2345:
case 3715:
case 2876:
case 956:
case 2262:
case 405:
case 3634:
case 3094:
case 2498:
case 3943:
case 438:
case 720:
case 3925:
case 2617:
case 2533:
case 3899:
case 878:
case 214:
case 320:
case 1080:
case 2096:
case 3661:
case 2409:
case 2781:
case 2186:
case 2128:
case 255:
case 3989:
case 2143:
case 882:
case 1183:
case 3035:
case 3527:
case 3672:
case 4011:
case 2889:
case 283:
case 2151:
case 3309:
case 289:
case 784:
case 2346:
case 3057:
case 1017:
case 2336:
case 3615:
case 1751:
case 2326:
case 3524:
case 1313:
case 3706:
case 2212:
case 1962:
case 525:
case 1491:
case 571:
case 66:
case 2119:
case 2077:
case 2671:
case 3103:
case 703:
case 221:
case 3320:
case 3688:
case 285:
case 1347:
case 389:
case 1262:
case 1250:
case 899:
case 141:
case 1906:
case 730:
case 1055:
case 2113:
case 2260:
case 109:
case 2593:
case 955:
case 1488:
case 1458:
case 783:
case 3361:
case 1052:
case 4069:
case 1556:
case 654:
case 1378:
case 2231:
case 2963:
case 3767:
case 3196:
case 1969:
case 871:
case 1485:
case 3498:
case 2008:
case 3603:
case 1156:
case 3050:
case 1087:
case 364:
case 1593:
case 2581:
case 143:
case 3809:
case 288:
case 2300:
case 1162:
case 337:
case 3649:
case 3262:
case 642:
case 1598:
case 54:
case 1271:
case 3709:
case 376:
case 1805:
case 286:
case 392:
case 1070:
case 1682:
case 272:
case 1097:
case 304:
case 1786:
case 380:
case 3830:
case 321:
case 2903:
case 3133:
case 3131:
case 1243:
case 1101:
case 1199:
case 2849:
case 2288:
case 592:
case 3093:
case 3805:
case 1709:
case 2653:
case 3081:
case 2237:
case 1937:
case 1092:
case 1230:
case 3141:
case 954:
case 716:
case 542:
case 1734:
case 3979:
case 366:
case 2003:
case 771:
case 2833:
case 1172:
case 1352:
case 733:
case 2349:
case 472:
case 1341:
case 2129:
case 1434:
case 2684:
case 3681:
case 3565:
case 1596:
case 3126:
case 183:
case 216:
case 206:
case 3728:
case 1338:
case 1595:
case 1619:
case 3967:
case 1281:
case 2493:
case 1533:
case 1435:
case 3656:
case 750:
case 1288:
case 2255:
case 1675:
case 298:
case 1094:
case 2007:
case 792:
case 618:
case 1979:
case 2443:
case 3182:
case 900:
case 128:
case 2489:
case 120:
case 2026:
case 3380:
case 3233:
case 2214:
case 3009:
case 2495:
case 481:
case 1857:
case 3934:
case 4005:
case 1136:
case 3373:
case 2554:
case 1376:
case 1568:
case 1385:
case 2449:
case 3561:
case 1838:
case 1674:
case 78:
case 81:
case 2550:
case 3486:
case 1779:
case 281:
case 2908:
case 239:
case 3069:
case 1866:
case 528:
case 3401:
case 412:
case 2092:
case 2718:
case 3762:
case 2646:
case 4089:
case 2512:
case 2509:
case 3148:
case 127:
case 1455:
case 3159:
case 1635:
case 1498:
case 868:
case 3705:
case 336:
case 2606:
case 2692:
case 1184:
case 967:
case 2708:
case 2614:
case 2451:
case 1883:
case 257:
case 3326:
case 85:
case 1028:
case 227:
case 1214:
case 2200:
case 1492:
case 1225:
case 864:
case 171:
case 648:
case 102:
case 146:
case 2290:
case 3568:
case 769:
case 3796:
case 2890:
case 1456:
case 4046:
case 67:
case 637:
case 2425:
case 2518:
case 2024:
case 3391:
case 1142:
case 9:
case 2674:
case 1207:
case 2521:
case 2665:
case 1997:
case 3720:
case 1015:
case 2482:
case 2802:
case 2757:
case 3252:
case 51:
case 3591:
case 2244:
case 1724:
case 2161:
case 1010:
case 3483:
case 3363:
case 3903:
case 3339:
case 3351:
case 3134:
case 2724:
case 2722:
case 1321:
case 1479:
case 2102:
case 2408:
case 635:
case 1860:
case 3831:
case 447:
case 3813:
case 1367:
case 2916:
case 2559:
case 1111:
case 2389:
case 1771:
case 2639:
case 1945:
case 4042:
case 70:
case 101:
case 3592:
case 265:
case 818:
case 3531:
case 948:
case 518:
case 1810:
case 3058:
case 925:
case 3245:
case 3441:
case 3566:
case 2570:
case 2191:
case 2780:
case 1110:
case 274:
case 3948:
case 19:
case 1870:
case 1473:
case 4008:
case 572:
case 1012:
case 861:
case 1990:
case 2875:
case 3095:
case 4052:
case 3371:
case 3575:
case 732:
case 2796:
case 3624:
case 1085:
case 2976:
case 2697:
case 217:
case 2736:
case 17:
case 4026:
case 3342:
case 1500:
case 3163:
case 3355:
case 2706:
case 403:
case 1822:
case 2229:
case 110:
case 499:
case 3302:
case 2725:
case 342:
case 888:
case 941:
case 196:
case 524:
case 2924:
case 273:
case 327:
case 1144:
case 2713:
case 1065:
case 2359:
case 2396:
case 377:
case 3641:
case 406:
case 1314:
case 2709:
case 1461:
case 261:
case 1553:
case 829:
case 3737:
case 3468:
case 494:
case 3443:
case 397:
case 492:
case 3090:
case 2201:
case 2592:
case 237:
case 2789:
case 751:
case 3586:
case 842:
case 2685:
case 419:
case 462:
case 2932:
case 1170:
case 699:
case 2228:
case 1737:
case 3652:
case 3010:
case 875:
case 23:
case 3021:
case 794:
case 1462:
case 1224:
case 37:
case 2002:
case 2259:
case 457:
case 322:
case 2582:
case 1829:
case 156:
case 15:
case 885:
case 807:
case 1703:
case 2634:
case 3101:
case 222:
case 682:
case 493:
case 2623:
case 2289:
case 2189:
case 126:
case 1108:
case 1628:
case 3717:
case 2351:
case 3119:
case 3186:
case 2355:
case 759:
case 1406:
case 3771:
case 1075:
case 3713:
case 796:
case 3939:
case 739:
case 2304:
case 2920:
case 2197:
case 3875:
case 1437:
case 3154:
case 1165:
case 3960:
case 2694:
case 2040:
case 1039:
case 1478:
case 3184:
case 3064:
case 2583:
case 3022:
case 3396:
case 545:
case 1239:
case 2181:
case 2672:
case 176:
case 2388:
case 3259:
case 4090:
case 3667:
case 3638:
case 4091:
case 1811:
case 190:
case 1511:
case 3988:
case 1304:
case 609:
case 666:
case 149:
case 3824:
case 50:
case 1699:
case 1926:
case 168:
case 98:
case 2014:
case 1316:
case 629:
case 1871:
case 2702:
case 2842:
case 4067:
case 2445:
case 752:
case 2894:
case 3421:
case 2222:
case 1625:
case 3416:
case 926:
case 1588:
case 3173:
case 1188:
case 68:
case 3690:
case 1649:
case 1213:
case 1629:
case 2368:
case 2205:
case 1024:
case 1339:
case 724:
case 468:
case 2810:
case 314:
case 1181:
case 3502:
case 1105:
case 3700:
case 16:
case 3074:
case 339:
case 332:
case 2778:
case 2934:
case 2510:
case 755:
case 3400:
case 3146:
case 1194:
case 89:
case 1395:
case 1126:
case 60:
case 1846:
case 1704:
case 280:
case 294:
case 1853:
case 940:
case 1061:
case 2808:
case 1328:
case 2801:
case 1201:
case 3951:
case 2450:
case 3996:
case 2545:
case 1680:
case 219:
case 3409:
case 851:
case 2264:
case 2579:
case 767:
case 2250:
case 1325:
case 708:
case 1578:
case 3797:
case 3494:
case 2500:
case 562:
case 3874:
case 2291:
case 1198:
case 1543:
case 1977:
case 600:
case 2270:
case 212:
case 1514:
case 1666:
case 3266:
case 1707:
case 2941:
case 2835:
case 1560:
case 650:
case 3550:
case 917:
case 133:
case 2855:
case 1922:
case 2534:
case 889:
case 3143:
case 1469:
case 2631:
case 3455:
case 3916:
case 3945:
case 791:
case 1429:
case 1143:
case 228:
case 365:
case 2645:
case 1343:
case 2312:
case 4032:
case 2484:
case 3786:
case 1389:
case 479:
case 3411:
case 2178:
case 1531:
case 91:
case 646:
case 445:
case 2826:
case 1876:
case 2299:
case 777:
case 310:
case 345:
case 1443:
case 1813:
case 1203:
case 371:
case 2010:
case 1872:
case 1173:
case 2487:
case 2843:
case 1504:
case 1391:
case 2335:
case 645:
case 622:
case 701:
case 3968:
case 2195:
case 2540:
case 1433:
case 2005:
case 1861:
case 1885:
case 1939:
case 3774:
case 3597:
case 2602:
case 999:
case 1255:
case 1581:
case 3999:
case 3429:
case 3500:
case 1765:
case 3375:
case 610:
case 1826:
case 3856:
case 3589:
case 1287:
case 1399:
case 3183:
case 1662:
case 1670:
case 3487:
case 1667:
case 2691:
case 2176:
case 1134:
case 3341:
case 2454:
case 1185:
case 485:
case 2286:
case 1501:
case 2416:
case 599:
case 1780:
case 932:
case 2430:
case 837:
case 114:
case 398:
case 772:
case 3754:
case 3406:
case 3306:
case 2043:
case 1933:
case 1622:
case 2964:
case 1025:
case 3683:
case 1738:
case 1935:
case 2929:
case 3427:
case 1841:
case 3932:
case 1839:
case 1513:
case 2670:
case 2716:
case 1627:
case 3611:
case 262:
case 1122:
case 2764:
case 1849:
case 1821:
case 913:
case 2366:
case 226:
case 1026:
case 2556:
case 2375:
case 1204:
case 480:
case 1365:
case 3818:
case 3250:
case 3210:
case 1354:
case 263:
case 1477:
case 1405:
case 722:
case 1483:
case 2797:
case 639:
case 12:
case 315:
case 372:
case 2868:
case 872:
case 958:
case 205:
case 2115:
case 3374:
case 611:
case 729:
case 2001:
case 3815:
case 1129:
case 1357:
case 270:
case 1713:
case 1940:
case 2183:
case 3490:
case 2091:
case 651:
case 997:
case 3974:
case 1064:
case 2029:
case 1710:
case 2514:
case 2033:
case 2476:
case 1981:
case 799:
case 1302:
case 2384:
case 2405:
case 3941:
case 1804:
case 3284:
case 2093:
case 1088:
case 3749:
case 2282:
case 3045:
case 3834:
case 1830:
case 3000:
case 2027:
case 3604:
case 444:
case 3461:
case 2771:
case 3239:
case 3120:
case 2130:
case 1983:
case 3256:
case 4020:
case 2322:
case 2769:
case 326:
case 3160:
case 3651:
case 1858:
case 1068:
case 2700:
case 1618:
case 3241:
case 2862:
case 1292:
case 606:
case 2828:
case 224:
case 3489:
case 470:
case 806:
case 3158:
case 3501:
case 2788:
case 1362:
case 537:
case 1270:
case 2751:
case 1817:
case 577:
case 1633:
case 2174:
case 3984:
case 3843:
case 665:
case 3869:
case 2798:
case 3992:
case 2938:
case 1509:
case 2382:
case 1319:
case 1450:
case 1557:
case 1009:
case 1457:
case 1003:
case 225:
case 2857:
case 3699:
case 591:
case 3877:
case 180:
case 3417:
case 3848:
case 1665:
case 284:
case 383:
case 1700:
case 3067:
case 3726:
case 3867:
case 2988:
case 13:
case 2834:
case 1558:
case 551:
case 1580:
case 3296:
case 1393:
case 1851:
case 2198:
case 2820:
case 2064:
case 915:
case 2714:
case 8:
case 584:
case 3135:
case 3807:
case 3963:
case 3011:
case 1655:
case 1056:
case 2836:
case 3686:
case 1880:
case 3574:
case 2032:
case 2537:
case 3971:
case 789:
case 1812:
case 3174:
case 563:
case 2732:
case 1397:
case 1905:
case 3850:
case 2340:
case 323:
case 830:
case 418:
case 1147:
case 108:
case 2790:
case 4006:
case 3922:
case 3026:
case 1408:
case 2625:
case 3025:
case 3334:
case 1634:
case 963:
case 3051:
case 1083:
case 3211:
case 2124:
case 3065:
case 3032:
case 3909:
case 2488:
case 46:
case 2983:
case 2372:
case 3493:
case 269:
case 2439:
case 55:
case 3470:
case 2339:
case 1078:
case 519:
case 1238:
case 1535:
case 1279:
case 970:
case 1324:
case 847:
case 671:
case 135:
case 3083:
case 47:
case 3552:
case 367:
case 3231:
case 778:
case 1777:
case 785:
case 3439:
case 855:
case 2357:
case 2815:
case 1135:
case 4044:
case 2381:
case 865:
case 2173:
case 3619:
case 344:
case 2393:
case 2535:
case 512:
case 2325:
case 2453:
case 539:
case 968:
case 1252:
case 2928:
case 3730:
case 3618:
case 118:
case 2541:
case 151:
case 2221:
case 3789:
case 2948:
case 197:
case 1992:
case 2621:
case 186:
case 3632:
case 728:
case 2982:
case 1523:
case 2871:
case 706:
case 3626:
case 897:
case 3759:
case 303:
case 2813:
case 3601:
case 3412:
case 1978:
case 1852:
case 2812:
case 3195:
case 3291:
case 1390:
case 3704:
case 3924:
case 1772:
case 267:
case 4023:
case 2318:
case 347:
case 446:
case 2962:
case 1249:
case 313:
case 2125:
case 386:
case 3907:
case 1570:
case 644:
case 1045:
case 2696:
case 2147:
case 3125:
case 159:
case 1481:
case 1881:
case 3694:
case 795:
case 3551:
case 2075:
case 2066:
case 3808:
case 2991:
case 1722:
case 2949:
case 2225:
case 1451:
case 3267:
case 3495:
case 64:
case 1743:
case 2227:
case 3902:
case 782:
case 2829:
case 527:
case 2831:
case 880:
case 2333:
case 952:
case 2960:
case 775:
case 2135:
case 203:
case 1232:
case 3893:
case 659:
case 3778:
case 1685:
case 814:
case 526:
case 2878:
case 2486:
case 3199:
case 3352:
case 394:
case 2661:
case 177:
case 3315:
case 3696:
case 34:
case 627:
case 1131:
case 2740:
case 2824:
case 1209:
case 1532:
case 1258:
case 1718:
case 3606:
case 4094:
case 2668:
case 3328:
case 3325:
case 3821:
case 2666:
case 2074:
case 510:
case 2199:
case 1928:
case 2940:
case 3710:
case 2167:
case 2649:
case 553:
case 3533:
case 3853:
case 2655:
case 1831:
case 920:
case 1295:
case 1305:
case 594:
case 3497:
case 3997:
case 2520:
case 2120:
case 3234:
case 2958:
case 1980:
case 1447:
case 3895:
case 612:
case 3507:
case 1266:
case 2748:
case 2104:
case 2642:
case 1465:
case 2784:
case 2455:
case 3987:
case 3966:
case 1669:
case 2378:
case 2532:
case 3491:
case 2933:
case 1911:
case 3376:
case 1574:
case 3053:
case 3558:
case 223:
case 2310:
case 2557:
case 2269:
case 841:
case 1694:
case 94:
case 3827:
case 2422:
case 3298:
case 2651:
case 1351:
case 2848:
case 2193:
case 2832:
case 978:
case 309:
case 3622:
case 1356:
case 2126:
case 1062:
case 3880:
case 685:
case 3336:
case 433:
case 1833:
case 3812:
case 2136:
case 3432:
case 3515:
case 1411:
case 687:
case 874:
case 3392:
case 3299:
case 692:
case 1141:
case 3488:
case 2980:
case 3197:
case 1867:
case 40:
case 2275:
case 3861:
case 2907:
case 1066:
case 4061:
case 596:
case 42:
case 1892:
case 890:
case 2845:
case 3044:
case 3290:
case 3244:
case 2154:
case 2438:
case 1907:
case 2246:
case 3249:
case 2350:
case 653:
case 663:
case 3271:
case 414:
case 1208:
case 3200:
case 713:
case 994:
case 1569:
case 849:
case 3475:
case 3236:
case 185:
case 780:
case 1067:
case 2390:
case 4035:
case 3860:
case 3977:
case 2070:
case 415:
case 2308:
case 1335:
case 3800:
case 793:
case 3049:
case 1058:
case 765:
case 3900:
case 3454:
case 1133:
case 2332:
case 1398:
case 2925:
case 674:
case 2426:
case 2536:
case 3322:
case 823:
case 1879:
case 1516:
case 73:
case 3975:
case 1976:
case 4025:
case 3114:
case 497:
case 3835:
case 1471:
case 3536:
case 211:
case 1963:
case 3080:
case 2742:
case 3242:
case 502:
case 2078:
case 213:
case 3428:
case 2188:
case 3229:
case 962:
case 244:
case 3362:
case 2809:
case 169:
case 324:
case 2501:
case 3485:
case 996:
case 2160:
case 3386:
case 2247:
case 2399:
case 1427:
case 3645:
case 681:
case 2328:
case 3273:
case 2851:
case 162:
case 1789:
case 3923:
case 3674:
case 2965:
case 4081:
case 613:
case 155:
case 3098:
case 914:
case 157:
case 2628:
case 3066:
case 1677:
case 1375:
case 969:
case 2695:
case 939:
case 753:
case 3218:
case 1359:
case 1346:
case 1242:
case 1941:
case 3620:
case 717:
case 1000:
case 2015:
case 2294:
case 1736:
case 18:
case 359:
case 1368:
case 2562:
case 3286:
case 1550:
case 3734:
case 3668:
case 2427:
case 3814:
case 3149:
case 202:
case 1259:
case 3956:
case 3567:
case 3585:
case 883:
case 3287:
case 944:
case 308:
case 3557:
case 3543:
case 773:
case 362:
case 3382:
case 2446:
case 2087:
case 1166:
case 1193:
case 1787:
case 4047:
case 3689:
case 1171:
case 4051:
case 976:
case 3270:
case 578:
case 1705:
case 2955:
case 463:
case 2673:
case 452:
case 2837:
case 1735:
case 3288:
case 3522:
case 2572:
case 3111:
case 65:
case 801:
case 3571:
case 3115:
case 619:
case 428:
case 82:
case 2021:
case 167:
case 2063:
case 1887:
case 2951:
case 4000:
case 1155:
case 517:
case 3422:
case 2638:
case 296:
case 1298:
case 693:
case 3892:
case 657:
case 368:
case 242:
case 2996:
case 1383:
case 898:
case 465:
case 3208:
case 3006:
case 1449:
case 2386:
case 2400:
case 33:
case 4085:
case 1299:
case 909:
case 1716:
case 1022:
case 2172:
case 509:
case 3008:
case 95:
case 302:
case 643:
case 2977:
case 1344:
case 698:
case 3377:
case 453:
case 886:
case 3283:
case 1291:
case 3655:
case 2703:
case 2506:
case 695:
case 1989:
case 1496:
case 2436:
case 3644:
case 850:
case 1163:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1645030801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,];
var gg_b = "1645030801/";

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
