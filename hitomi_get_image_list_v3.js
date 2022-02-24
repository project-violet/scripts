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
case 539:
case 460:
case 1097:
case 3689:
case 2911:
case 1651:
case 3478:
case 3672:
case 2103:
case 1674:
case 3194:
case 3013:
case 1783:
case 252:
case 4000:
case 3650:
case 813:
case 3256:
case 3275:
case 2189:
case 1620:
case 1413:
case 2666:
case 3381:
case 3435:
case 3773:
case 2604:
case 1758:
case 3170:
case 1795:
case 932:
case 3687:
case 2386:
case 1419:
case 3965:
case 3164:
case 1341:
case 533:
case 465:
case 402:
case 2767:
case 2978:
case 3172:
case 2473:
case 536:
case 2171:
case 770:
case 2721:
case 3109:
case 1720:
case 2937:
case 3340:
case 2672:
case 1741:
case 87:
case 1108:
case 989:
case 3747:
case 2161:
case 2738:
case 2723:
case 2043:
case 1348:
case 3187:
case 3329:
case 16:
case 1455:
case 4010:
case 824:
case 926:
case 2154:
case 2979:
case 1318:
case 2322:
case 3981:
case 1558:
case 2458:
case 2106:
case 899:
case 2080:
case 374:
case 2382:
case 963:
case 2596:
case 1217:
case 2770:
case 48:
case 1531:
case 235:
case 2943:
case 990:
case 832:
case 1726:
case 2007:
case 1020:
case 3270:
case 1499:
case 2008:
case 248:
case 1834:
case 643:
case 809:
case 1489:
case 1807:
case 2208:
case 2184:
case 1869:
case 198:
case 3001:
case 1724:
case 454:
case 3446:
case 1988:
case 2741:
case 1067:
case 4003:
case 360:
case 132:
case 1838:
case 768:
case 1167:
case 1359:
case 970:
case 2904:
case 2151:
case 3925:
case 2288:
case 2098:
case 706:
case 267:
case 253:
case 3877:
case 561:
case 3710:
case 2579:
case 2540:
case 1672:
case 3386:
case 2195:
case 3696:
case 84:
case 1842:
case 1575:
case 2430:
case 4084:
case 1750:
case 1768:
case 686:
case 1243:
case 3711:
case 1660:
case 2078:
case 2064:
case 2372:
case 262:
case 2780:
case 1509:
case 1987:
case 3793:
case 1391:
case 4001:
case 1568:
case 205:
case 1772:
case 660:
case 3613:
case 1670:
case 2102:
case 2256:
case 472:
case 3776:
case 2574:
case 745:
case 1173:
case 888:
case 2035:
case 3941:
case 2317:
case 2301:
case 3651:
case 2160:
case 196:
case 1239:
case 3707:
case 31:
case 2203:
case 1596:
case 3969:
case 827:
case 487:
case 3124:
case 436:
case 1336:
case 2312:
case 917:
case 3904:
case 702:
case 526:
case 3372:
case 3134:
case 986:
case 3931:
case 3859:
case 608:
case 377:
case 1997:
case 1451:
case 3908:
case 1042:
case 1621:
case 555:
case 3388:
case 1580:
case 2221:
case 2252:
case 2749:
case 1915:
case 1127:
case 1925:
case 3476:
case 3781:
case 1495:
case 3301:
case 3397:
case 473:
case 1679:
case 4088:
case 2811:
case 2681:
case 1941:
case 257:
case 1505:
case 3269:
case 3403:
case 802:
case 2349:
case 1446:
case 2202:
case 3193:
case 24:
case 3165:
case 534:
case 3378:
case 311:
case 3171:
case 709:
case 2516:
case 2425:
case 1992:
case 2756:
case 230:
case 2242:
case 2644:
case 1047:
case 427:
case 3223:
case 3930:
case 2101:
case 1907:
case 1424:
case 3337:
case 3327:
case 3363:
case 1709:
case 3110:
case 1524:
case 852:
case 3638:
case 429:
case 2809:
case 2938:
case 854:
case 2713:
case 3054:
case 1281:
case 3477:
case 2139:
case 177:
case 353:
case 3713:
case 1033:
case 711:
case 3962:
case 3300:
case 1873:
case 3344:
case 2718:
case 2278:
case 1702:
case 66:
case 2086:
case 1250:
case 3192:
case 3471:
case 587:
case 1474:
case 3226:
case 2730:
case 3858:
case 1392:
case 1808:
case 214:
case 1728:
case 82:
case 3618:
case 3347:
case 3003:
case 243:
case 936:
case 412:
case 2501:
case 1668:
case 1015:
case 3732:
case 682:
case 47:
case 554:
case 2972:
case 3482:
case 1417:
case 2250:
case 2352:
case 1494:
case 2791:
case 535:
case 1615:
case 3111:
case 2079:
case 3138:
case 4071:
case 2267:
case 1803:
case 76:
case 3731:
case 4013:
case 758:
case 1216:
case 3897:
case 1064:
case 390:
case 3602:
case 2946:
case 3245:
case 1434:
case 1193:
case 330:
case 1825:
case 1014:
case 567:
case 1512:
case 664:
case 3515:
case 442:
case 2835:
case 3085:
case 55:
case 4094:
case 4027:
case 431:
case 3665:
case 1561:
case 3745:
case 1506:
case 1138:
case 638:
case 1612:
case 2515:
case 2121:
case 3176:
case 2740:
case 2258:
case 3366:
case 2147:
case 58:
case 3427:
case 2321:
case 3998:
case 2125:
case 3449:
case 1258:
case 3911:
case 1862:
case 4067:
case 2616:
case 97:
case 1123:
case 940:
case 2085:
case 3903:
case 2416:
case 4048:
case 2483:
case 4051:
case 3486:
case 3585:
case 2355:
case 3576:
case 2994:
case 2688:
case 2185:
case 204:
case 440:
case 215:
case 1857:
case 231:
case 2149:
case 1752:
case 3398:
case 3255:
case 635:
case 3249:
case 4009:
case 3212:
case 960:
case 238:
case 2826:
case 2593:
case 3296:
case 616:
case 871:
case 2090:
case 3831:
case 3105:
case 1132:
case 3868:
case 3355:
case 525:
case 701:
case 495:
case 3972:
case 484:
case 3556:
case 1394:
case 340:
case 410:
case 2708:
case 2330:
case 733:
case 2582:
case 3688:
case 857:
case 1973:
case 867:
case 674:
case 1191:
case 591:
case 602:
case 794:
case 3889:
case 856:
case 1653:
case 3830:
case 2011:
case 988:
case 2521:
case 2598:
case 3496:
case 3324:
case 1454:
case 4022:
case 3146:
case 4002:
case 414:
case 829:
case 4045:
case 65:
case 1990:
case 2167:
case 1266:
case 3937:
case 550:
case 8:
case 1376:
case 2114:
case 3287:
case 2451:
case 1478:
case 1655:
case 293:
case 3973:
case 3108:
case 1467:
case 1157:
case 2204:
case 1589:
case 4016:
case 594:
case 2583:
case 3293:
case 3431:
case 2611:
case 362:
case 2245:
case 1022:
case 2808:
case 1764:
case 2787:
case 2877:
case 1169:
case 1249:
case 1775:
case 937:
case 383:
case 2947:
case 1792:
case 2660:
case 1642:
case 379:
case 1313:
case 220:
case 3283:
case 788:
case 104:
case 2034:
case 2280:
case 1080:
case 777:
case 511:
case 3189:
case 3717:
case 1830:
case 2866:
case 913:
case 3520:
case 3383:
case 3805:
case 2683:
case 3668:
case 471:
case 1259:
case 542:
case 726:
case 4056:
case 1006:
case 3490:
case 419:
case 3060:
case 170:
case 451:
case 3082:
case 3159:
case 493:
case 1581:
case 2443:
case 930:
case 611:
case 2038:
case 185:
case 3160:
case 4033:
case 3488:
case 1940:
case 2490:
case 3935:
case 3895:
case 589:
case 3317:
case 5:
case 3139:
case 3870:
case 1863:
case 3360:
case 3048:
case 3804:
case 2331:
case 3077:
case 126:
case 2880:
case 3419:
case 3709:
case 883:
case 251:
case 3402:
case 828:
case 2915:
case 596:
case 3571:
case 1091:
case 2460:
case 3614:
case 3224:
case 3353:
case 1779:
case 2657:
case 793:
case 4040:
case 105:
case 2746:
case 573:
case 3240:
case 1414:
case 1317:
case 2385:
case 3081:
case 3252:
case 2784:
case 2682:
case 3418:
case 823:
case 3980:
case 1935:
case 2934:
case 1600:
case 2144:
case 2801:
case 2620:
case 3581:
case 2589:
case 4065:
case 1659:
case 222:
case 1177:
case 2519:
case 3617:
case 3872:
case 3235:
case 2129:
case 1241:
case 965:
case 3706:
case 4037:
case 1369:
case 4053:
case 2477:
case 3657:
case 1952:
case 1344:
case 1294:
case 3454:
case 4038:
case 2553:
case 744:
case 1393:
case 3368:
case 4054:
case 1801:
case 486:
case 625:
case 2358:
case 2037:
case 2869:
case 2951:
case 2201:
case 1616:
case 2133:
case 1634:
case 1763:
case 2292:
case 1892:
case 1854:
case 153:
case 2336:
case 3641:
case 1549:
case 2296:
case 2056:
case 2464:
case 3489:
case 1137:
case 3918:
case 1996:
case 579:
case 3251:
case 1820:
case 3369:
case 3787:
case 299:
case 791:
case 1626:
case 3902:
case 716:
case 1858:
case 645:
case 3284:
case 2881:
case 26:
case 2837:
case 1106:
case 1063:
case 3910:
case 2922:
case 2584:
case 3917:
case 3942:
case 1111:
case 3137:
case 1970:
case 490:
case 512:
case 4006:
case 3494:
case 339:
case 1964:
case 3934:
case 2338:
case 2690:
case 1914:
case 2824:
case 2689:
case 2728:
case 3117:
case 3834:
case 3394:
case 3050:
case 1477:
case 891:
case 3967:
case 3042:
case 3412:
case 903:
case 2796:
case 2573:
case 2434:
case 3092:
case 4031:
case 2155:
case 1717:
case 3229:
case 553:
case 1919:
case 2392:
case 2005:
case 72:
case 1809:
case 3204:
case 3480:
case 2275:
case 1513:
case 3754:
case 1902:
case 2173:
case 1828:
case 57:
case 861:
case 147:
case 2031:
case 3589:
case 1242:
case 3594:
case 3037:
case 2952:
case 1386:
case 3738:
case 3501:
case 2219:
case 479:
case 3361:
case 893:
case 1411:
case 3072:
case 3131:
case 188:
case 864:
case 2513:
case 3664:
case 1041:
case 3230:
case 1214:
case 2769:
case 3741:
case 247:
case 2414:
case 2686:
case 3622:
case 1685:
case 437:
case 806:
case 2206:
case 1230:
case 1787:
case 3421:
case 2290:
case 3535:
case 3885:
case 1285:
case 3878:
case 268:
case 923:
case 1544:
case 2379:
case 2199:
case 1287:
case 3338:
case 50:
case 966:
case 3812:
case 3528:
case 3760:
case 1179:
case 992:
case 3268:
case 3995:
case 221:
case 2213:
case 3691:
case 2687:
case 3242:
case 3744:
case 3068:
case 3823:
case 2533:
case 2293:
case 2454:
case 3673:
case 4015:
case 1048:
case 3430:
case 2854:
case 2137:
case 2243:
case 1117:
case 1438:
case 3825:
case 3708:
case 2063:
case 1303:
case 3076:
case 3599:
case 3873:
case 2226:
case 2018:
case 1355:
case 2341:
case 858:
case 520:
case 1721:
case 1529:
case 2802:
case 3540:
case 2058:
case 696:
case 1363:
case 435:
case 927:
case 632:
case 2642:
case 2964:
case 115:
case 4043:
case 1962:
case 3755:
case 2029:
case 2406:
case 2887:
case 2597:
case 404:
case 3616:
case 617:
case 713:
case 2525:
case 860:
case 2940:
case 1639:
case 3420:
case 1237:
case 3254:
case 634:
case 2021:
case 2871:
case 2410:
case 20:
case 2228:
case 2463:
case 2041:
case 1645:
case 3894:
case 2876:
case 502:
case 1906:
case 2821:
case 3090:
case 41:
case 2487:
case 1777:
case 1856:
case 69:
case 211:
case 2774:
case 2998:
case 651:
case 2397:
case 662:
case 583:
case 623:
case 2678:
case 2868:
case 470:
case 3166:
case 1461:
case 1948:
case 2227:
case 3853:
case 991:
case 2758:
case 2291:
case 1977:
case 3191:
case 3297:
case 1707:
case 3448:
case 2224:
case 1479:
case 1573:
case 3768:
case 999:
case 957:
case 2016:
case 2470:
case 717:
case 2653:
case 833:
case 1804:
case 3417:
case 19:
case 1253:
case 2999:
case 1957:
case 1102:
case 2388:
case 3986:
case 4028:
case 1244:
case 1976:
case 1624:
case 622:
case 1824:
case 1781:
case 642:
case 100:
case 556:
case 2445:
case 1263:
case 1543:
case 254:
case 2902:
case 3492:
case 3248:
case 1770:
case 2638:
case 3290:
case 1534:
case 1851:
case 1899:
case 1286:
case 812:
case 1050:
case 3450:
case 1390:
case 1903:
case 3901:
case 2113:
case 620:
case 54:
case 1866:
case 769:
case 2422:
case 3451:
case 3598:
case 2849:
case 183:
case 1165:
case 1662:
case 1122:
case 3591:
case 3653:
case 2609:
case 2253:
case 2624:
case 2888:
case 3035:
case 993:
case 1540:
case 569:
case 2614:
case 1302:
case 181:
case 1849:
case 3794:
case 2461:
case 2088:
case 2865:
case 2658:
case 1518:
case 3928:
case 912:
case 2875:
case 2044:
case 2099:
case 3758:
case 523:
case 3126:
case 315:
case 548:
case 3439:
case 2722:
case 3997:
case 2698:
case 3190:
case 2916:
case 1939:
case 1678:
case 1323:
case 3769:
case 4085:
case 1257:
case 551:
case 3829:
case 3097:
case 653:
case 862:
case 3842:
case 497:
case 1979:
case 1956:
case 830:
case 571:
case 3583:
case 2320:
case 3645:
case 3247:
case 1382:
case 3545:
case 18:
case 3999:
case 510:
case 524:
case 3118:
case 2550:
case 1700:
case 2882:
case 1292:
case 3625:
case 1563:
case 4036:
case 3201:
case 2841:
case 3106:
case 2555:
case 3550:
case 1578:
case 836:
case 3929:
case 800:
case 1152:
case 2426:
case 1299:
case 3346:
case 1282:
case 4082:
case 2591:
case 3433:
case 1305:
case 2564:
case 578:
case 1811:
case 2817:
case 2695:
case 2815:
case 953:
case 3813:
case 3036:
case 1114:
case 1551:
case 1715:
case 3504:
case 817:
case 3078:
case 902:
case 275:
case 1894:
case 1601:
case 2046:
case 513:
case 1647:
case 3803:
case 3313:
case 118:
case 2348:
case 3554:
case 3:
case 2356:
case 1182:
case 1953:
case 2052:
case 1836:
case 1245:
case 2610:
case 2484:
case 2374:
case 4012:
case 944:
case 1113:
case 1370:
case 1810:
case 2512:
case 757:
case 1913:
case 1203:
case 3814:
case 347:
case 3012:
case 239:
case 3093:
case 2096:
case 2328:
case 3922:
case 2215:
case 3220:
case 1897:
case 598:
case 3765:
case 2383:
case 129:
case 1046:
case 3845:
case 3762:
case 1619:
case 3926:
case 3907:
case 3307:
case 3701:
case 3009:
case 2205:
case 3375:
case 237:
case 750:
case 1718:
case 3289:
case 3662:
case 2081:
case 1433:
case 3404:
case 316:
case 1426:
case 1837:
case 920:
case 530:
case 3303:
case 1771:
case 759:
case 287:
case 3806:
case 319:
case 2909:
case 2595:
case 2939:
case 381:
case 1324:
case 3914:
case 3851:
case 3716:
case 2819:
case 1315:
case 345:
case 730:
case 3543:
case 2798:
case 1931:
case 1767:
case 99:
case 3529:
case 797:
case 2083:
case 4079:
case 2072:
case 1196:
case 157:
case 1946:
case 2462:
case 3951:
case 2478:
case 918:
case 3023:
case 1304:
case 2973:
case 3674:
case 1947:
case 1316:
case 689:
case 2639:
case 1579:
case 3976:
case 2941:
case 2300:
case 1739:
case 81:
case 3354:
case 1024:
case 1755:
case 1439:
case 1465:
case 1993:
case 931:
case 1697:
case 2306:
case 1904:
case 968:
case 1147:
case 1345:
case 2560:
case 1493:
case 367:
case 2143:
case 2563:
case 1852:
case 889:
case 1539:
case 1037:
case 56:
case 1577:
case 236:
case 747:
case 2394:
case 2376:
case 1818:
case 1560:
case 1874:
case 868:
case 2570:
case 676:
case 2332:
case 3018:
case 3516:
case 3209:
case 1496:
case 2508:
case 3143:
case 1598:
case 2257:
case 886:
case 385:
case 895:
case 905:
case 1943:
case 1378:
case 2287:
case 2724:
case 822:
case 2953:
case 2142:
case 3222:
case 994:
case 1118:
case 288:
case 4021:
case 3385:
case 1831:
case 2792:
case 212:
case 4063:
case 3243:
case 3390:
case 1806:
case 445:
case 2503:
case 1311:
case 3546:
case 2440:
case 3393:
case 1162:
case 1159:
case 1727:
case 1737:
case 995:
case 1963:
case 2623:
case 421:
case 2150:
case 1247:
case 3206:
case 2436:
case 175:
case 2677:
case 1357:
case 719:
case 2697:
case 2892:
case 1468:
case 3816:
case 1440:
case 3639:
case 2766:
case 1262:
case 1747:
case 2716:
case 107:
case 150:
case 2754:
case 1057:
case 3272:
case 2982:
case 3228:
case 3414:
case 227:
case 1297:
case 207:
case 2527:
case 2960:
case 169:
case 455:
case 270:
case 3487:
case 350:
case 1736:
case 3579:
case 1735:
case 839:
case 2239:
case 3565:
case 3197:
case 261:
case 3833:
case 2775:
case 3396:
case 312:
case 1533:
case 916:
case 692:
case 1295:
case 2480:
case 3743:
case 2848:
case 3644:
case 3558:
case 1432:
case 3102:
case 1229:
case 3273:
case 269:
case 603:
case 546:
case 478:
case 1441:
case 2264:
case 1594:
case 3122:
case 3971:
case 3267:
case 2517:
case 245:
case 3441:
case 1062:
case 1307:
case 3438:
case 1187:
case 2789:
case 1880:
case 2874:
case 3963:
case 1848:
case 244:
case 1961:
case 1665:
case 901:
case 3216:
case 1958:
case 1485:
case 863:
case 2989:
case 2131:
case 1457:
case 760:
case 695:
case 83:
case 1552:
case 1430:
case 607:
case 3605:
case 506:
case 3753:
case 1320:
case 1719:
case 1075:
case 2485:
case 3841:
case 3380:
case 2091:
case 2411:
case 1879:
case 532:
case 1423:
case 2864:
case 529:
case 494:
case 2631:
case 3211:
case 1074:
case 1034:
case 1007:
case 2404:
case 1079:
case 2277:
case 1054:
case 446:
case 3779:
case 1502:
case 1387:
case 1550:
case 3503:
case 3389:
case 505:
case 2544:
case 1083:
case 223:
case 3088:
case 2053:
case 317:
case 921:
case 117:
case 2968:
case 3019:
case 3029:
case 3606:
case 3761:
case 2731:
case 67:
case 685:
case 1334:
case 2057:
case 1278:
case 3560:
case 3979:
case 121:
case 25:
case 401:
case 2547:
case 2899:
case 441:
case 3949:
case 2991:
case 259:
case 3370:
case 1310:
case 2794:
case 3919:
case 2836:
case 1061:
case 1782:
case 1472:
case 3921:
case 3615:
case 2626:
case 1584:
case 29:
case 1049:
case 307:
case 1308:
case 371:
case 4008:
case 2381:
case 624:
case 3991:
case 3416:
case 1254:
case 3727:
case 1698:
case 1765:
case 1409:
case 1796:
case 610:
case 3198:
case 3103:
case 1415:
case 3631:
case 1690:
case 4086:
case 1648:
case 1930:
case 1309:
case 3818:
case 1815:
case 1588:
case 2148:
case 2526:
case 2164:
case 2342:
case 70:
case 1300:
case 3879:
case 688:
case 346:
case 2530:
case 3649:
case 3844:
case 301:
case 112:
case 3849:
case 2559:
case 2354:
case 2377:
case 39:
case 114:
case 1144:
case 2324:
case 1686:
case 1255:
case 1129:
case 545:
case 141:
case 3896:
case 4019:
case 260:
case 2235:
case 3607:
case 2033:
case 3612:
case 2618:
case 2685:
case 3636:
case 2217:
case 3265:
case 1703:
case 3415:
case 3011:
case 568:
case 1850:
case 3040:
case 754:
case 2777:
case 2188:
case 3500:
case 2896:
case 2701:
case 2335:
case 1569:
case 2926:
case 2912:
case 286:
case 1878:
case 499:
case 1151:
case 453:
case 2737:
case 1296:
case 1289:
case 3954:
case 1450:
case 3437:
case 1773:
case 666:
case 2323:
case 3771:
case 4075:
case 2970:
case 741:
case 4041:
case 3210:
case 914:
case 1379:
case 2066:
case 4018:
case 355:
case 1982:
case 2980:
case 3587:
case 3867:
case 1628:
case 1823:
case 2457:
case 326:
case 2165:
case 1757:
case 3893:
case 3376:
case 308:
case 2471:
case 808:
case 226:
case 1134:
case 3681:
case 853:
case 2759:
case 1288:
case 1942:
case 80:
case 3654:
case 892:
case 1360:
case 3135:
case 2472:
case 2209:
case 516:
case 3580:
case 1498:
case 216:
case 191:
case 2240:
case 158:
case 342:
case 199:
case 2047:
case 2691:
case 2510:
case 2362:
case 2298:
case 1312:
case 2536:
case 387:
case 961:
case 3032:
case 4024:
case 1514:
case 1759:
case 36:
case 3455:
case 334:
case 1040:
case 102:
case 2863:
case 3246:
case 1802:
case 1416:
case 3782:
case 1944:
case 1603:
case 954:
case 426:
case 1233:
case 3100:
case 2950:
case 103:
case 2779:
case 2632:
case 1013:
case 2421:
case 735:
case 3726:
case 1790:
case 137:
case 538:
case 110:
case 1520:
case 3574:
case 669:
case 2050:
case 1526:
case 1010:
case 2764:
case 979:
case 1564:
case 1784:
case 3033:
case 1291:
case 1448:
case 519:
case 503:
case 584:
case 727:
case 1128:
case 1911:
case 2898:
case 2263:
case 896:
case 3790:
case 4030:
case 1684:
case 1246:
case 3281:
case 2739:
case 3406:
case 2846:
case 1999:
case 2640:
case 3140:
case 3827:
case 1121:
case 3890:
case 3149:
case 1955:
case 395:
case 1256:
case 3943:
case 229:
case 3737:
case 3096:
case 2497:
case 273:
case 3481:
case 2022:
case 3551:
case 670:
case 1199:
case 1460:
case 1705:
case 49:
case 2804:
case 1602:
case 7:
case 2925:
case 3017:
case 2282:
case 2959:
case 1231:
case 764:
case 3876:
case 2432:
case 422:
case 328:
case 1710:
case 3655:
case 2502:
case 2727:
case 4080:
case 1885:
case 156:
case 1204:
case 1816:
case 882:
case 2833:
case 3026:
case 3887:
case 192:
case 2625:
case 3619:
case 3866:
case 398:
case 2116:
case 600:
case 306:
case 2400:
case 3202:
case 2753:
case 3141:
case 2157:
case 1632:
case 2788:
case 1847:
case 3630:
case 2305:
case 3208:
case 3960:
case 1625:
case 1094:
case 1236:
case 246:
case 1740:
case 420:
case 2449:
case 1141:
case 2732:
case 52:
case 3238:
case 3564:
case 1743:
case 3675:
case 593:
case 3562:
case 2271:
case 1210:
case 1932:
case 224:
case 3153:
case 1610:
case 2247:
case 2325:
case 1517:
case 565:
case 1812:
case 190:
case 3953:
case 3968:
case 2668:
case 1882:
case 792:
case 2442:
case 1066:
case 766:
case 3285:
case 3465:
case 691:
case 1800:
case 975:
case 3547:
case 3660:
case 2233:
case 2197:
case 1338:
case 835:
case 743:
case 3739:
case 2714:
case 3788:
case 4026:
case 3136:
case 1170:
case 462:
case 1356:
case 1638:
case 3847:
case 751:
case 3808:
case 1274:
case 967:
case 2130:
case 2733:
case 3766:
case 1030:
case 3822:
case 2334:
case 106:
case 161:
case 4092:
case 2459:
case 1696:
case 3857:
case 3320:
case 1026:
case 1238:
case 1537:
case 336:
case 1927:
case 3792:
case 1860:
case 3127:
case 338:
case 3408:
case 30:
case 1991:
case 2757:
case 752:
case 1591:
case 74:
case 3832:
case 3722:
case 2813:
case 2026:
case 790:
case 303:
case 1427:
case 811:
case 2222:
case 2135:
case 1693:
case 3169:
case 799:
case 2465:
case 2062:
case 1797:
case 2132:
case 1966:
case 508:
case 795:
case 657:
case 2261:
case 2428:
case 365:
case 2955:
case 3734:
case 3798:
case 3351:
case 1889:
case 75:
case 3258:
case 1967:
case 3174:
case 332:
case 3767:
case 1275:
case 1038:
case 2529:
case 732:
case 2986:
case 4020:
case 537:
case 4047:
case 2743:
case 2370:
case 2977:
case 3533:
case 1713:
case 2602:
case 3075:
case 3801:
case 264:
case 403:
case 443:
case 1855:
case 108:
case 2408:
case 149:
case 3683:
case 1251:
case 324:
case 1694:
case 298:
case 73:
case 1190:
case 1631:
case 841:
case 1023:
case 164:
case 349:
case 1553:
case 2002:
case 154:
case 2705:
case 1714:
case 1595:
case 2344:
case 1164:
case 2152:
case 952:
case 2507:
case 3472:
case 3031:
case 3508:
case 2017:
case 3101:
case 3091:
case 831:
case 1004:
case 938:
case 1012:
case 1523:
case 265:
case 2476:
case 880:
case 2136:
case 1510:
case 3217:
case 3177:
case 1661:
case 1859:
case 488:
case 531:
case 40:
case 2522:
case 1471:
case 2664:
case 1730:
case 3519:
case 2346:
case 3178:
case 2956:
case 2839:
case 1442:
case 140:
case 3288:
case 3144:
case 2704:
case 2879:
case 2518:
case 3259:
case 4064:
case 382:
case 1028:
case 59:
case 2600:
case 1188:
case 116:
case 1435:
case 2771:
case 2241:
case 1989:
case 1644:
case 1429:
case 3312:
case 2060:
case 1723:
case 2437:
case 1126:
case 2438:
case 456:
case 1692:
case 1865:
case 1891:
case 724:
case 2003:
case 3049:
case 2903:
case 3457:
case 1403:
case 1675:
case 2019:
case 1069:
case 2444:
case 1530:
case 2992:
case 1284:
case 3044:
case 2196:
case 3056:
case 1314:
case 1875:
case 3667:
case 3121:
case 3608:
case 1928:
case 1611:
case 1172:
case 3282:
case 1731:
case 925:
case 3008:
case 705:
case 3892:
case 749:
case 2276:
case 2637:
case 489:
case 3913:
case 3810:
case 3063:
case 1680:
case 3977:
case 606:
case 3336:
case 1547:
case 3425:
case 46:
case 1868:
case 3637:
case 972:
case 2539:
case 1975:
case 4011:
case 3464:
case 1375:
case 389:
case 1582:
case 1206:
case 3002:
case 2852:
case 2781:
case 3422:
case 575:
case 2795:
case 2590:
case 2511:
case 1:
case 2505:
case 3700:
case 1572:
case 2082:
case 1096:
case 2067:
case 2427:
case 1197:
case 1888:
case 2424:
case 710:
case 17:
case 2862:
case 1402:
case 491:
case 133:
case 712:
case 1219:
case 4089:
case 1845:
case 3239:
case 409:
case 681:
case 2840:
case 475:
case 1924:
case 123:
case 60:
case 739:
case 3770:
case 2194:
case 2580:
case 2615:
case 2207:
case 3362:
case 13:
case 2353:
case 3955:
case 467:
case 684:
case 1780:
case 3331:
case 2009:
case 1649:
case 165:
case 933:
case 1886:
case 438:
case 1841:
case 2557:
case 1428:
case 1143:
case 2643:
case 1832:
case 1587:
case 1100:
case 407:
case 3045:
case 3302:
case 1443:
case 1273:
case 601:
case 2109:
case 3526:
case 1846:
case 448:
case 2040:
case 3582:
case 3319:
case 1198:
case 2140:
case 2655:
case 1883:
case 1613:
case 3399:
case 648:
case 1234:
case 708:
case 1200:
case 3227:
case 6:
case 690:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1645689602/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,];
var gg_b = "1645689602/";

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
