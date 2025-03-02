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
case 2037:
case 1803:
case 951:
case 3638:
case 3048:
case 3364:
case 2057:
case 3918:
case 2647:
case 3780:
case 2443:
case 1399:
case 221:
case 1812:
case 1995:
case 914:
case 3928:
case 2482:
case 2177:
case 1799:
case 222:
case 1875:
case 2774:
case 2287:
case 582:
case 952:
case 3793:
case 1150:
case 832:
case 3941:
case 2102:
case 605:
case 2056:
case 2582:
case 664:
case 1793:
case 2084:
case 3130:
case 406:
case 1380:
case 3875:
case 1764:
case 2865:
case 2291:
case 1918:
case 3812:
case 1048:
case 2685:
case 1364:
case 2286:
case 2060:
case 872:
case 831:
case 1638:
case 2543:
case 2449:
case 3070:
case 3166:
case 2250:
case 2900:
case 3202:
case 3952:
case 1219:
case 239:
case 2093:
case 2885:
case 1756:
case 1425:
case 1187:
case 89:
case 112:
case 1838:
case 3932:
case 1277:
case 3407:
case 344:
case 3603:
case 3357:
case 25:
case 2348:
case 3213:
case 490:
case 111:
case 3506:
case 3515:
case 4017:
case 3186:
case 684:
case 1760:
case 1229:
case 279:
case 3622:
case 3134:
case 2266:
case 1384:
case 4079:
case 1356:
case 3737:
case 2665:
case 1134:
case 2311:
case 1737:
case 1276:
case 1622:
case 3229:
case 1675:
case 1757:
case 562:
case 311:
case 1506:
case 1191:
case 144:
case 1357:
case 561:
case 477:
case 1213:
case 520:
case 2099:
case 312:
case 3838:
case 829:
case 1932:
case 1572:
case 593:
case 557:
case 2711:
case 3756:
case 987:
case 3187:
case 3472:
case 4005:
case 3507:
case 3609:
case 999:
case 3219:
case 683:
case 486:
case 3022:
case 659:
case 2065:
case 2758:
case 3747:
case 685:
case 2680:
case 3811:
case 67:
case 2860:
case 3990:
case 730:
case 3674:
case 936:
case 189:
case 2408:
case 3347:
case 330:
case 1268:
case 345:
case 3003:
case 1414:
case 3135:
case 3514:
case 1746:
case 2581:
case 846:
case 2693:
case 1848:
case 3942:
case 2240:
case 1155:
case 3848:
case 2857:
case 355:
case 3746:
case 1514:
case 2188:
case 2837:
case 3414:
case 1870:
case 1135:
case 797:
case 2278:
case 753:
case 594:
case 296:
case 389:
case 1674:
case 2597:
case 3268:
case 1347:
case 145:
case 1811:
case 649:
case 3989:
case 170:
case 1983:
case 1524:
case 1022:
case 1611:
case 858:
case 519:
case 1201:
case 2322:
case 3288:
case 4000:
case 3420:
case 298:
case 1571:
case 3178:
case 2927:
case 1931:
case 915:
case 1192:
case 3648:
case 1510:
case 2917:
case 2453:
case 2559:
case 2303:
case 2047:
case 2979:
case 1621:
case 1994:
case 2539:
case 1670:
case 2899:
case 3038:
case 2722:
case 369:
case 3410:
case 3969:
case 2312:
case 769:
case 1969:
case 1038:
case 978:
case 2309:
case 1765:
case 3670:
case 3994:
case 2973:
case 2533:
case 1058:
case 2085:
case 1648:
case 2561:
case 663:
case 3571:
case 1178:
case 2636:
case 691:
case 1420:
case 1288:
case 665:
case 2046:
case 2880:
case 2656:
case 2255:
case 2905:
case 3201:
case 2684:
case 908:
case 2346:
case 42:
case 862:
case 1738:
case 1065:
case 634:
case 1836:
case 1758:
case 2989:
case 1680:
case 1856:
case 3496:
case 3699:
case 1860:
case 289:
case 990:
case 796:
case 3837:
case 2414:
case 2385:
case 3278:
case 4041:
case 3188:
case 1581:
case 1338:
case 3508:
case 1101:
case 529:
case 674:
case 1240:
case 255:
case 3693:
case 2155:
case 3497:
case 59:
case 2514:
case 1188:
case 937:
case 2821:
case 1837:
case 3664:
case 2003:
case 2870:
case 2135:
case 196:
case 3358:
case 1597:
case 2674:
case 4028:
case 3856:
case 977:
case 2811:
case 3758:
case 2144:
case 4018:
case 270:
case 3680:
case 487:
case 3065:
case 3738:
case 2140:
case 451:
case 2611:
case 2951:
case 3916:
case 1712:
case 1375:
case 3709:
case 3046:
case 1927:
case 532:
case 3636:
case 571:
case 1168:
case 2510:
case 414:
case 2963:
case 1453:
case 1559:
case 572:
case 1303:
case 100:
case 3439:
case 3533:
case 3244:
case 452:
case 1433:
case 1539:
case 2670:
case 2874:
case 1775:
case 1312:
case 3899:
case 1660:
case 3722:
case 2038:
case 3312:
case 1309:
case 3979:
case 3637:
case 3433:
case 300:
case 1973:
case 1439:
case 2058:
case 881:
case 1244:
case 906:
case 1893:
case 1085:
case 3559:
case 3657:
case 1561:
case 4032:
case 2178:
case 3927:
case 2471:
case 3322:
case 2288:
case 2420:
case 398:
case 1905:
case 2021:
case 3449:
case 3543:
case 2166:
case 1129:
case 616:
case 413:
case 3176:
case 3123:
case 3904:
case 3685:
case 3286:
case 1:
case 1443:
case 1549:
case 1374:
case 2812:
case 3113:
case 407:
case 3291:
case 3036:
case 2130:
case 1482:
case 2799:
case 1774:
case 1287:
case 548:
case 91:
case 2941:
case 1102:
case 1056:
case 1582:
case 4042:
case 1084:
case 988:
case 4090:
case 3482:
case 322:
case 819:
case 3774:
case 558:
case 1865:
case 1036:
case 1291:
case 3647:
case 3443:
case 3:
case 321:
case 966:
case 1904:
case 1123:
case 1254:
case 1685:
case 438:
case 1060:
case 3037:
case 2393:
case 556:
case 1250:
case 675:
case 380:
case 74:
case 3847:
case 2609:
case 2360:
case 3462:
case 801:
case 2219:
case 1093:
case 2784:
case 2756:
case 894:
case 3099:
case 2838:
case 1064:
case 4031:
case 2736:
case 1348:
case 3267:
case 1080:
case 2336:
case 1748:
case 640:
case 2760:
case 802:
case 1266:
case 4094:
case 2384:
case 3311:
case 1665:
case 3721:
case 2406:
case 2415:
case 3266:
case 2134:
case 1311:
case 2737:
case 627:
case 779:
case 2276:
case 379:
case 2622:
case 2757:
case 2154:
case 2506:
case 244:
case 2407:
case 2191:
case 2603:
case 2357:
case 1267:
case 35:
case 1099:
case 3230:
case 3093:
case 3885:
case 1321:
case 1711:
case 1370:
case 180:
case 3250:
case 739:
case 1462:
case 2145:
case 14:
case 3798:
case 3976:
case 696:
case 493:
case 2620:
case 457:
case 2671:
case 2966:
case 1484:
case 3896:
case 3661:
case 1306:
case 2824:
case 1456:
case 420:
case 2511:
case 1436:
case 3707:
case 774:
case 3104:
case 82:
case 2570:
case 2521:
case 462:
case 2195:
case 3457:
case 3653:
case 734:
case 3913:
case 3560:
case 2200:
case 1557:
case 3902:
case 2610:
case 249:
case 1808:
case 2141:
case 99:
case 1460:
case 3881:
case 1706:
case 1325:
case 523:
case 3325:
case 1633:
case 3049:
case 3372:
case 1437:
case 3557:
case 285:
case 1398:
case 1252:
case 929:
case 3808:
case 3919:
case 4035:
case 134:
case 2967:
case 590:
case 899:
case 3639:
case 1232:
case 2128:
case 283:
case 1707:
case 447:
case 1923:
case 1104:
case 1082:
case 2118:
case 1556:
case 508:
case 1896:
case 1661:
case 2411:
case 1798:
case 27:
case 2762:
case 3929:
case 2987:
case 814:
case 4040:
case 1241:
case 1100:
case 1861:
case 1295:
case 2382:
case 3480:
case 4092:
case 292:
case 851:
case 506:
case 2007:
case 2343:
case 3859:
case 2474:
case 291:
case 1499:
case 1853:
case 3599:
case 10:
case 1062:
case 3839:
case 263:
case 2098:
case 30:
case 3062:
case 70:
case 482:
case 3564:
case 2025:
case 3853:
case 2574:
case 1697:
case 1493:
case 2934:
case 1599:
case 1859:
case 2810:
case 1608:
case 3593:
case 972:
case 2204:
case 3681:
case 2614:
case 1464:
case 2986:
case 1228:
case 2132:
case 2820:
case 932:
case 4078:
case 2945:
case 842:
case 2152:
case 2015:
case 2006:
case 2749:
case 3580:
case 2333:
case 2279:
case 1294:
case 4066:
case 3097:
case 3720:
case 3771:
case 3269:
case 1843:
case 1081:
case 2217:
case 3849:
case 2509:
case 264:
case 2607:
case 2189:
case 3008:
case 588:
case 1231:
case 1096:
case 958:
case 2753:
case 910:
case 813:
case 1565:
case 4030:
case 2475:
case 2422:
case 3371:
case 621:
case 1320:
case 660:
case 3882:
case 2759:
case 6:
case 2615:
case 51:
case 1465:
case 3901:
case 2739:
case 838:
case 116:
case 2575:
case 2522:
case 3096:
case 2935:
case 3231:
case 2273:
case 878:
case 2512:
case 3263:
case 2014:
case 622:
case 1720:
case 36:
case 3662:
case 2503:
case 2409:
case 2359:
case 76:
case 2672:
case 3294:
case 1097:
case 836:
case 2010:
case 2438:
case 3585:
case 2397:
case 2151:
case 3105:
case 4087:
case 3242:
case 1649:
case 946:
case 2308:
case 38:
case 740:
case 735:
case 3290:
case 3643:
case 1968:
case 3447:
case 340:
case 2872:
case 1314:
case 3053:
case 1485:
case 1127:
case 2708:
case 375:
case 3173:
case 2815:
case 1117:
case 494:
case 876:
case 2071:
case 2797:
case 3126:
case 3283:
case 568:
case 1126:
case 4034:
case 3179:
case 3446:
case 173:
case 3324:
case 3714:
case 4054:
case 2781:
case 3289:
case 1682:
case 3724:
case 3314:
case 4091:
case 3485:
case 2538:
case 2796:
case 2978:
case 226:
case 524:
case 679:
case 1290:
case 1862:
case 135:
case 140:
case 956:
case 1116:
case 2558:
case 1242:
case 1033:
case 284:
case 350:
case 318:
case 3059:
case 1585:
case 718:
case 3672:
case 3625:
case 3183:
case 26:
case 1412:
case 2662:
case 4029:
case 3503:
case 103:
case 2081:
case 1403:
case 3014:
case 1353:
case 105:
case 3944:
case 3522:
case 2096:
case 1227:
case 3935:
case 542:
case 117:
case 1753:
case 3190:
case 4077:
case 3615:
case 1361:
case 1733:
case 3142:
case 3216:
case 3955:
case 1475:
case 4019:
case 2882:
case 3759:
case 128:
case 3475:
case 4002:
case 2320:
case 728:
case 2710:
case 2988:
case 552:
case 1759:
case 1615:
case 1606:
case 2465:
case 1955:
case 472:
case 514:
case 216:
case 1522:
case 1575:
case 717:
case 1935:
case 3227:
case 1024:
case 3753:
case 1273:
case 471:
case 567:
case 705:
case 1944:
case 4023:
case 1014:
case 364:
case 3353:
case 2310:
case 2269:
case 2771:
case 981:
case 551:
case 3698:
case 303:
case 1359:
case 1625:
case 3333:
case 1672:
case 1226:
case 825:
case 218:
case 890:
case 2059:
case 957:
case 1438:
case 1397:
case 3558:
case 1151:
case 599:
case 3807:
case 1940:
case 1308:
case 1458:
case 961:
case 2039:
case 2968:
case 3898:
case 920:
case 1872:
case 227:
case 2127:
case 3538:
case 2485:
case 3978:
case 3381:
case 1708:
case 962:
case 2289:
case 808:
case 2324:
case 2714:
case 1806:
case 3781:
case 2446:
case 3169:
case 2179:
case 3194:
case 2061:
case 877:
case 1169:
case 612:
case 2546:
case 1781:
case 3708:
case 654:
case 2682:
case 2173:
case 3825:
case 947:
case 1538:
case 1381:
case 1978:
case 3308:
case 3992:
case 2290:
case 2643:
case 235:
case 3397:
case 1558:
case 3151:
case 2116:
case 2105:
case 2033:
case 3940:
case 52:
case 1807:
case 184:
case 837:
case 3438:
case 611:
case 630:
case 645:
case 37:
case 2725:
case 1824:
case 2772:
case 446:
case 1511:
case 2436:
case 2977:
case 1570:
case 2639:
case 383:
case 994:
case 1195:
case 2897:
case 3967:
case 670:
case 1200:
case 385:
case 2659:
case 1141:
case 1610:
case 2808:
case 3362:
case 2460:
case 785:
case 2049:
case 2706:
case 2715:
case 3421:
case 824:
case 4001:
case 3814:
case 1470:
case 2437:
case 1421:
case 4088:
case 749:
case 2398:
case 3610:
case 13:
case 1548:
case 536:
case 2307:
case 159:
case 2560:
case 2043:
case 3521:
case 3930:
case 2707:
case 2556:
case 3511:
case 3966:
case 2896:
case 653:
case 456:
case 1411:
case 697:
case 2536:
case 2798:
case 2976:
case 17:
case 3671:
case 689:
case 3006:
case 1987:
case 538:
case 3945:
case 3152:
case 2100:
case 2696:
case 2861:
case 3820:
case 81:
case 3204:
case 2681:
case 458:
case 2833:
case 3986:
case 1343:
case 165:
case 1782:
case 1474:
case 191:
case 410:
case 2593:
case 2499:
case 3025:
case 3349:
case 3072:
case 2853:
case 3574:
case 163:
case 2564:
case 763:
case 448:
case 2839:
case 3098:
case 363:
case 1072:
case 1349:
case 1025:
case 1934:
case 2599:
case 3782:
case 2859:
case 391:
case 507:
case 2608:
case 704:
case 1614:
case 2464:
case 3007:
case 3382:
case 392:
case 515:
case 1624:
case 1991:
case 1152:
case 888:
case 1015:
case 513:
case 2589:
case 2483:
case 449:
case 3088:
case 1996:
case 1778:
case 3792:
case 262:
case 1876:
case 927:
case 146:
case 2490:
case 3258:
case 3908:
case 220:
case 2247:
case 295:
case 2867:
case 580:
case 3997:
case 2442:
case 853:
case 756:
case 918:
case 3877:
case 889:
case 3238:
case 47:
case 845:
case 933:
case 2122:
case 156:
case 3813:
case 3165:
case 539:
case 98:
case 1392:
case 3802:
case 940:
case 2368:
case 55:
case 746:
case 2686:
case 247:
case 2914:
case 2285:
case 3981:
case 3378:
case 1829:
case 1792:
case 686:
case 483:
case 2583:
case 3876:
case 2768:
case 459:
case 2691:
case 2103:
case 3996:
case 3778:
case 43:
case 2246:
case 485:
case 1088:
case 2112:
case 2055:
case 624:
case 579:
case 3222:
case 1629:
case 748:
case 666:
case 2531:
case 1527:
case 463:
case 3676:
case 3961:
case 1355:
case 1147:
case 491:
case 2845:
case 2551:
case 3505:
case 3516:
case 465:
case 3427:
case 404:
case 4007:
case 158:
case 492:
case 1473:
case 1579:
case 2630:
case 1939:
case 1068:
case 3613:
case 1735:
case 3417:
case 3953:
case 96:
case 3212:
case 1517:
case 2563:
case 1209:
case 3146:
case 2650:
case 3573:
case 2886:
case 3933:
case 1755:
case 1933:
case 4006:
case 4015:
case 1212:
case 3517:
case 1146:
case 2667:
case 3735:
case 1613:
case 1417:
case 2463:
case 2569:
case 1203:
case 3939:
case 1526:
case 758:
case 2431:
case 1427:
case 310:
case 3147:
case 1505:
case 2158:
case 3744:
case 916:
case 710:
case 4025:
case 4072:
case 3416:
case 3355:
case 2301:
case 3629:
case 1222:
case 1676:
case 148:
case 2844:
case 1745:
case 1019:
case 3002:
case 2050:
case 3156:
case 2293:
case 3184:
case 2418:
case 772:
case 2692:
case 1404:
case 417:
case 1354:
case 1386:
case 1791:
case 732:
case 2280:
case 405:
case 3023:
case 3801:
case 464:
case 2855:
case 1786:
case 1157:
case 3160:
case 2595:
case 1137:
case 2835:
case 3137:
case 2528:
case 1387:
case 3734:
case 598:
case 3029:
case 2441:
case 1023:
case 4014:
case 3754:
case 3157:
case 2495:
case 1982:
case 171:
case 132:
case 1013:
case 2067:
case 3386:
case 1136:
case 2299:
case 172:
case 1156:
case 3949:
case 1184:
case 3019:
case 1002:
case 2878:
case 1270:
case 677:
case 1221:
case 2998:
case 3400:
case 3350:
case 4071:
case 2452:
case 1962:
case 812:
case 19:
case 294:
case 596:
case 1367:
case 2723:
case 2313:
case 3248:
case 3330:
case 2432:
case 1164:
case 1767:
case 2713:
case 1193:
case 1601:
case 3366:
case 637:
case 1211:
case 2087:
case 2702:
case 4010:
case 3750:
case 1750:
case 625:
case 1688:
case 2045:
case 2284:
case 484:
case 1366:
case 3601:
case 2655:
case 2915:
case 2906:
case 426:
case 623:
case 2777:
case 2236:
case 974:
case 608:
case 2377:
case 3180:
case 2086:
case 934:
case 1248:
case 2054:
case 1400:
case 79:
case 2729:
case 3962:
case 2260:
case 39:
case 2034:
case 2532:
case 3270:
case 2925:
case 3221:
case 1844:
case 2019:
case 821:
case 3518:
case 1640:
case 2949:
case 2334:
case 1293:
case 1418:
case 638:
case 2077:
case 2668:
case 3299:
case 2791:
case 904:
case 1264:
case 678:
case 992:
case 3148:
case 2391:
case 4081:
case 1595:
case 2137:
case 1121:
case 3528:
case 1170:
case 1528:
case 3170:
case 3835:
case 2160:
case 119:
case 2076:
case 1148:
case 1495:
case 3280:
case 4008:
case 2982:
case 232:
case 271:
case 1067:
case 1678:
case 2013:
case 3264:
case 3030:
case 3418:
case 2274:
case 1299:
case 272:
case 3692:
case 3640:
case 2787:
case 3293:
case 615:
case 3050:
case 3532:
case 3972:
case 1998:
case 1452:
case 3729:
case 2962:
case 949:
case 3892:
case 3840:
case 1257:
case 1907:
case 2500:
case 3552:
case 2367:
case 3644:
case 101:
case 1432:
case 3377:
case 2180:
case 3091:
case 2164:
case 1713:
case 1323:
case 2767:
case 427:
case 4039:
case 879:
case 102:
case 3284:
case 2601:
case 3655:
case 1087:
case 3915:
case 3256:
case 1702:
case 3045:
case 3702:
case 2750:
case 1719:
case 1329:
case 97:
case 433:
case 1655:
case 1256:
case 435:
case 302:
case 1174:
case 48:
case 3323:
case 1635:
case 475:
case 84:
case 597:
case 301:
case 2330:
case 3432:
case 983:
case 880:
case 1086:
case 394:
case 1840:
case 2248:
case 959:
case 794:
case 985:
case 3452:
case 1892:
case 555:
case 1260:
case 1034:
case 4061:
case 2766:
case 1532:
case 1925:
case 3237:
case 4049:
case 2001:
case 1589:
case 3246:
case 1109:
case 3645:
case 687:
case 3924:
case 2778:
case 3489:
case 3914:
case 2981:
case 747:
case 544:
case 246:
case 3044:
case 161:
case 3542:
case 2802:
case 3368:
case 3850:
case 1247:
case 3634:
case 2165:
case 1442:
case 3830:
case 157:
case 3175:
case 3122:
case 1830:
case 393:
case 2877:
case 2238:
case 896:
case 793:
case 554:
case 256:
case 2997:
case 1590:
case 3442:
case 984:
case 2819:
case 926:
case 795:
case 361:
case 2392:
case 2908:
case 320:
case 1850:
case 395:
case 1686:
case 512:
case 1914:
case 1285:
case 1654:
case 362:
case 762:
case 1768:
case 1103:
case 1035:
case 434:
case 3109:
case 2088:
case 1112:
case 2740:
case 3483:
case 3687:
case 2629:
case 2527:
case 1531:
case 782:
case 4062:
case 1891:
case 3451:
case 2355:
case 210:
case 2147:
case 2335:
case 3431:
case 917:
case 2579:
case 1630:
case 905:
case 2068:
case 2677:
case 2735:
case 3569:
case 964:
case 2619:
case 1563:
case 1469:
case 1910:
case 781:
case 2209:
case 800:
case 1650:
case 1886:
case 509:
case 2426:
case 1854:
case 2755:
case 2479:
case 3040:
case 614:
case 2933:
case 3854:
case 3788:
case 3469:
case 2613:
case 652:
case 1078:
case 1667:
case 3834:
case 2417:
case 2203:
case 2953:
case 2623:
case 651:
case 2427:
case 2185:
case 1887:
case 3845:
case 1158:
case 2505:
case 2516:
case 3891:
case 667:
case 1451:
case 3666:
case 2222:
case 3971:
case 2275:
case 3912:
case 2369:
case 378:
case 1259:
case 3042:
case 1326:
case 2804:
case 1716:
case 1239:
case 3090:
case 3317:
case 2196:
case 107:
case 3124:
case 421:
case 1773:
case 1089:
case 2501:
case 3717:
case 3327:
case 1435:
case 2181:
case 3975:
case 2271:
case 2769:
case 3922:
case 2488:
case 1828:
case 3261:
case 1726:
case 1316:
case 1305:
case 2794:
case 1895:
case 1779:
case 1083:
case 2401:
case 3305:
case 3316:
case 2351:
case 816:
case 1535:
case 4060:
case 138:
case 313:
case 3828:
case 1717:
case 3089:
case 1841:
case 2363:
case 1727:
case 4036:
case 1903:
case 307:
case 1632:
case 3239:
case 3373:
case 206:
case 2394:
case 4056:
case 563:
case 1544:
case 3326:
case 1912:
case 1652:
case 3909:
case 585:
case 1592:
case 3297:
case 53:
case 1094:
case 2568:
case 2783:
case 2079:
case 223:
case 1832:
case 1120:
case 3069:
case 1171:
case 1281:
case 583:
case 2390:
case 1852:
case 3618:
case 2947:
case 818:
case 1695:
case 4064:
case 1031:
case 176:
case 4093:
case 2383:
case 439:
case 1110:
case 2946:
case 875:
case 3110:
case 480:
case 2005:
case 2016:
case 3051:
case 2133:
case 873:
case 970:
case 2389:
case 1628:
case 3695:
case 3031:
case 336:
case 1208:
case 833:
case 930:
case 3540:
case 2789:
case 2800:
case 2214:
case 2985:
case 3478:
case 2604:
case 943:
case 840:
case 835:
case 3832:
case 1938:
case 1069:
case 3120:
case 88:
case 3171:
case 602:
case 1297:
case 2161:
case 3094:
case 3466:
case 1911:
case 3700:
case 2476:
case 1095:
case 1883:
case 2529:
case 1566:
case 911:
case 3028:
case 2957:
case 1550:
case 1842:
case 1663:
case 2617:
case 2519:
case 1467:
case 3018:
case 4065:
case 787:
case 387:
case 2352:
case 954:
case 2298:
case 3450:
case 3669:
case 1262:
case 1890:
case 584:
case 12:
case 72:
case 1450:
case 3262:
case 199:
case 2419:
case 1567:
case 2960:
case 2626:
case 3970:
case 187:
case 834:
case 2225:
case 3921:
case 3530:
case 2477:
case 2182:
case 1430:
case 2502:
case 1948:
case 693:
case 2143:
case 496:
case 657:
case 1028:
case 2936:
case 3095:
case 2576:
case 3883:
case 1889:
case 695:
case 1700:
case 661:
case 1466:
case 2984:
case 3651:
case 2956:
case 2206:
case 21:
case 1445:
case 1198:
case 3125:
case 3683:
case 3831:
case 152:
case 1689:
case 2328:
case 2718:
case 4047:
case 342:
case 3545:
case 2805:
case 1107:
case 114:
case 2728:
case 341:
case 3690:
case 3974:
case 1454:
case 2826:
case 1304:
case 2964:
case 498:
case 2873:
case 3586:
case 2000:
case 1249:
case 3642:
case 151:
case 1434:
case 2993:
case 1115:
case 1106:
case 751:
case 1863:
case 909:
case 1052:
case 1586:
case 3454:
case 767:
case 367:
case 1894:
case 3486:
case 2879:
case 1243:
case 1032:
case 3869:
case 141:
case 1690:
case 564:
case 1534:
case 2999:
case 3704:
case 4085:
case 3491:
case 288:
case 1282:
case 1125:
case 752:
case 528:
case 2341:
case 3198:
case 3616:
case 1149:
case 2911:
case 3215:
case 1752:
case 1476:
case 2041:
case 979:
case 4009:
case 3429:
case 3936:
case 2883:
case 453:
case 1423:
case 2566:
case 3143:
case 58:
case 2550:
case 2842:
case 3502:
case 1617:
case 2663:
case 1519:
case 3182:
case 3477:
case 3673:
case 533:
case 3626:
case 2694:
case 2970:
case 3225:
case 2530:
case 1298:
case 2890:
case 939:
case 186:
case 3513:
case 22:
case 980:
case 3352:
case 4022:
case 2300:
case 3402:
case 1419:
case 518:
case 859:
case 1626:
case 287:
case 3577:
case 1272:
case 3937:
case 1225:
case 470:
case 1182:
case 1477:
case 3332:
case 885:
case 3957:
case 3207:
case 3617:
case 3413:
case 724:
case 430:
case 1143:
case 2028:
case 1576:
case 3627:
case 4003:
case 3529:
case 3423:
case 3752:
case 368:
case 2889:
case 443:
case 768:
case 2466:
case 1984:
case 1206:
case 1215:
case 1162:
case 2445:
case 388:
case 788:
case 1816:
case 2107:
case 960:
case 863:
case 766:
case 9:
case 648:
case 1318:
case 1728:
case 921:
case 2869:
case 3999:
case 366:
case 267:
case 3879:
case 1964:
case 891:
case 1873:
case 865:
case 1000:
case 804:
case 2249:
case 251:
case 2115:
case 2106:
case 2642:
case 658:
case 1817:
case 1741:
case 2554:
case 3000:
case 3826:
case 1795:
case 3964:
case 2032:
case 3728:
case 2243:
case 3318:
case 2974:
case 2690:
case 2534:
case 3816:
case 1395:
case 4058:
case 2282:
case 2683:
case 1341:
case 3162:
case 71:
case 2591:
case 1369:
case 2909:
case 805:
case 3394:
case 2716:
case 2705:
case 1804:
case 803:
case 706:
case 900:
case 2373:
case 306:
case 3731:
case 828:
case 215:
case 3588:
case 2435:
case 1769:
case 672:
case 1220:
case 998:
case 3794:
case 1965:
case 817:
case 4021:
case 2305:
case 2316:
case 3351:
case 4070:
case 2895:
case 2083:
case 3965:
case 2779:
case 1197:
case 1401:
case 2975:
case 3220:
case 2535:
case 3488:
case 238:
case 409:
case 2717:
case 1331:
case 1763:
case 3181:
case 1588:
case 4048:
case 1108:
case 2555:
case 1731:
case 2317:
case 1363:
case 3196:
case 2253:
case 2903:
case 2632:
case 1394:
case 50:
case 2042:
case 1751:
case 2544:
case 3804:
case 3369:
case 3210:
case 278:
case 1568:
case 3161:
case 2094:
case 1342:
case 1079:
case 1783:
case 2832:
case 2171:
case 2063:
case 3985:
case 1017:
case 2478:
case 236:
case 2852:
case 3468:
case 411:
case 2540:
case 3800:
case 125:
case 3073:
case 2695:
case 3224:
case 3153:
case 1027:
case 2031:
case 1790:
case 629:
case 276:
case 1139:
case 412:
case 3016:
case 2051:
case 3133:
case 1383:
case 108:
case 2110:
case 308:
case 3159:
case 1005:
case 1133:
case 3383:
case 3742:
case 69:
case 3139:
case 1389:
case 177:
case 1224:
case 444:
case 3027:
case 725:
case 2492:
case 3390:
case 790:
case 2958:
case 1468:
case 325:
case 390:
case 1789:
case 137:
case 884:
case 323:
case 2069:
case 723:
case 2578:
case 826:
case 2297:
case 1161:
case 3568:
case 2440:
case 3342:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1740902402/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,];
var gg_b = "1740902402/";

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
    if (rr["hasavif"] == 1) rr["haswebp"] = 1;
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
