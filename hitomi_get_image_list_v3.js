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
case 2929:
case 2028:
case 863:
case 1189:
case 2342:
case 2555:
case 2022:
case 788:
case 2871:
case 3284:
case 310:
case 3679:
case 2138:
case 4040:
case 1923:
case 1096:
case 1121:
case 61:
case 3158:
case 2078:
case 513:
case 452:
case 1384:
case 700:
case 2609:
case 746:
case 1261:
case 2722:
case 3148:
case 2031:
case 338:
case 2697:
case 3360:
case 3556:
case 1022:
case 1133:
case 2956:
case 2627:
case 257:
case 252:
case 4090:
case 3249:
case 1813:
case 3277:
case 4057:
case 990:
case 3280:
case 3491:
case 2466:
case 2373:
case 2992:
case 3795:
case 269:
case 773:
case 4050:
case 3964:
case 3948:
case 3735:
case 2204:
case 2888:
case 1710:
case 1857:
case 119:
case 1032:
case 1514:
case 733:
case 3402:
case 1127:
case 3053:
case 3126:
case 23:
case 3611:
case 3736:
case 309:
case 855:
case 3574:
case 2093:
case 1647:
case 3800:
case 2760:
case 443:
case 1706:
case 669:
case 1123:
case 810:
case 557:
case 750:
case 2473:
case 3666:
case 200:
case 1210:
case 3606:
case 2677:
case 2644:
case 2803:
case 3989:
case 1980:
case 424:
case 3490:
case 1608:
case 3704:
case 2629:
case 2029:
case 37:
case 1739:
case 3607:
case 2971:
case 3514:
case 2546:
case 473:
case 117:
case 403:
case 2297:
case 1368:
case 4066:
case 151:
case 2315:
case 2791:
case 498:
case 2456:
case 3914:
case 1579:
case 2488:
case 3445:
case 421:
case 1071:
case 3770:
case 55:
case 2632:
case 760:
case 2941:
case 1315:
case 775:
case 3480:
case 1871:
case 2054:
case 3413:
case 2475:
case 2362:
case 2155:
case 1443:
case 1154:
case 1344:
case 2590:
case 1223:
case 2316:
case 134:
case 2268:
case 3967:
case 220:
case 3944:
case 1596:
case 2411:
case 2191:
case 803:
case 59:
case 916:
case 1304:
case 1002:
case 884:
case 2526:
case 2770:
case 794:
case 4042:
case 928:
case 4045:
case 1321:
case 1801:
case 2034:
case 2246:
case 3291:
case 2394:
case 2782:
case 3525:
case 1258:
case 1160:
case 1213:
case 118:
case 2043:
case 1922:
case 1171:
case 3631:
case 3424:
case 2252:
case 1747:
case 0:
case 1221:
case 766:
case 3272:
case 30:
case 1544:
case 189:
case 3068:
case 3028:
case 39:
case 3494:
case 1029:
case 3738:
case 3446:
case 2793:
case 1909:
case 3414:
case 3503:
case 2812:
case 2482:
case 4083:
case 2263:
case 2461:
case 193:
case 2719:
case 583:
case 1185:
case 1025:
case 3259:
case 3423:
case 2934:
case 3663:
case 4048:
case 1506:
case 3307:
case 2146:
case 635:
case 898:
case 1064:
case 272:
case 1379:
case 1861:
case 3190:
case 482:
case 1146:
case 3698:
case 2904:
case 1521:
case 3433:
case 1120:
case 2414:
case 3686:
case 3831:
case 2951:
case 1427:
case 1569:
case 1307:
case 3691:
case 3081:
case 1060:
case 745:
case 1691:
case 3043:
case 574:
case 3113:
case 2766:
case 3727:
case 2121:
case 2945:
case 3584:
case 3815:
case 2533:
case 2738:
case 564:
case 3904:
case 2574:
case 3240:
case 3547:
case 2887:
case 2094:
case 2081:
case 322:
case 527:
case 1080:
case 747:
case 1226:
case 2931:
case 796:
case 3032:
case 1939:
case 1434:
case 305:
case 2076:
case 1941:
case 108:
case 2089:
case 1090:
case 3159:
case 2936:
case 1773:
case 3851:
case 2361:
case 3138:
case 3712:
case 344:
case 2447:
case 1265:
case 3745:
case 3079:
case 411:
case 3223:
case 3756:
case 1412:
case 3238:
case 3617:
case 367:
case 526:
case 2282:
case 2106:
case 2875:
case 2834:
case 797:
case 1732:
case 406:
case 4037:
case 2560:
case 3095:
case 3592:
case 392:
case 2707:
case 3129:
case 538:
case 2853:
case 239:
case 454:
case 3628:
case 2553:
case 3266:
case 478:
case 3601:
case 1886:
case 912:
case 2247:
case 316:
case 2659:
case 2331:
case 1875:
case 3743:
case 2909:
case 3134:
case 3657:
case 2180:
case 2432:
case 3979:
case 3239:
case 2442:
case 1674:
case 3847:
case 646:
case 2872:
case 2922:
case 2564:
case 1843:
case 3305:
case 1420:
case 3731:
case 430:
case 5:
case 723:
case 2229:
case 673:
case 1141:
case 614:
case 3608:
case 3085:
case 2339:
case 1835:
case 1528:
case 749:
case 1657:
case 2687:
case 4019:
case 1051:
case 2864:
case 1495:
case 769:
case 2731:
case 3194:
case 2953:
case 2108:
case 1057:
case 1731:
case 2885:
case 3566:
case 1838:
case 1598:
case 3181:
case 2843:
case 1575:
case 2451:
case 726:
case 3290:
case 1611:
case 204:
case 3086:
case 2186:
case 3888:
case 966:
case 1243:
case 938:
case 986:
case 2236:
case 3682:
case 1462:
case 3646:
case 1649:
case 1610:
case 2380:
case 1978:
case 3123:
case 693:
case 1554:
case 1768:
case 1636:
case 2592:
case 2154:
case 3137:
case 839:
case 784:
case 1901:
case 2638:
case 2759:
case 2224:
case 4044:
case 3087:
case 736:
case 892:
case 1134:
case 617:
case 3508:
case 2391:
case 2890:
case 3150:
case 1493:
case 3093:
case 1653:
case 3271:
case 785:
case 827:
case 160:
case 973:
case 1109:
case 1658:
case 2136:
case 2345:
case 2464:
case 1428:
case 114:
case 465:
case 2835:
case 744:
case 2614:
case 107:
case 1445:
case 3940:
case 1017:
case 3906:
case 44:
case 64:
case 1324:
case 1023:
case 295:
case 3696:
case 633:
case 324:
case 1921:
case 1603:
case 3953:
case 679:
case 601:
case 165:
case 3805:
case 3120:
case 449:
case 2576:
case 3434:
case 106:
case 1660:
case 1147:
case 2674:
case 1448:
case 886:
case 2939:
case 2775:
case 2283:
case 742:
case 1762:
case 1738:
case 3363:
case 2695:
case 808:
case 1446:
case 2572:
case 2652:
case 1915:
case 2418:
case 1963:
case 2747:
case 2388:
case 479:
case 3807:
case 2823:
case 3265:
case 3818:
case 3817:
case 2979:
case 599:
case 489:
case 956:
case 259:
case 360:
case 1259:
case 587:
case 1887:
case 1399:
case 3152:
case 792:
case 1650:
case 3349:
case 38:
case 1981:
case 2209:
case 3345:
case 3911:
case 1792:
case 446:
case 2211:
case 1956:
case 3167:
case 988:
case 432:
case 3353:
case 2195:
case 1518:
case 2091:
case 1447:
case 2859:
case 1325:
case 3070:
case 2837:
case 3057:
case 2157:
case 1952:
case 927:
case 2036:
case 4074:
case 3798:
case 2787:
case 2989:
case 2730:
case 1605:
case 638:
case 3674:
case 2631:
case 2396:
case 3978:
case 1279:
case 1033:
case 817:
case 1055:
case 523:
case 548:
case 2369:
case 1285:
case 2820:
case 3179:
case 2895:
case 625:
case 470:
case 210:
case 2226:
case 1591:
case 4003:
case 1661:
case 1612:
case 1339:
case 2021:
case 1020:
case 3320:
case 2795:
case 637:
case 3385:
case 579:
case 3844:
case 1019:
case 2551:
case 51:
case 1035:
case 36:
case 396:
case 1935:
case 2930:
case 1474:
case 3045:
case 198:
case 2151:
case 3873:
case 2981:
case 960:
case 2174:
case 2079:
case 952:
case 3178:
case 3792:
case 2133:
case 149:
case 783:
case 1252:
case 2363:
case 19:
case 3839:
case 1646:
case 143:
case 3072:
case 2712:
case 3854:
case 3676:
case 2804:
case 354:
case 1648:
case 261:
case 1138:
case 1880:
case 2053:
case 2176:
case 3147:
case 761:
case 2844:
case 3205:
case 3897:
case 229:
case 2810:
case 1971:
case 1203:
case 3762:
case 3215:
case 3496:
case 3748:
case 3430:
case 2733:
case 2710:
case 380:
case 1883:
case 4008:
case 3365:
case 3541:
case 2900:
case 491:
case 1635:
case 830:
case 1873:
case 500:
case 3340:
case 2351:
case 2799:
case 2622:
case 3915:
case 4036:
case 4051:
case 3484:
case 2194:
case 1725:
case 3052:
case 1740:
case 3471:
case 46:
case 1555:
case 3885:
case 3932:
case 3648:
case 1452:
case 1532:
case 2408:
case 386:
case 2468:
case 3776:
case 376:
case 1303:
case 2328:
case 1933:
case 1271:
case 180:
case 1643:
case 1436:
case 3926:
case 1406:
case 226:
case 3680:
case 914:
case 1550:
case 3388:
case 447:
case 3994:
case 2701:
case 2469:
case 507:
case 2454:
case 2044:
case 1670:
case 813:
case 101:
case 3131:
case 1682:
case 2876:
case 368:
case 260:
case 2046:
case 2156:
case 1459:
case 1563:
case 2947:
case 3741:
case 3299:
case 634:
case 1652:
case 560:
case 1586:
case 1036:
case 43:
case 3220:
case 896:
case 1233:
case 3107:
case 468:
case 3157:
case 2281:
case 3995:
case 1153:
case 2207:
case 3392:
case 1752:
case 1001:
case 2251:
case 1383:
case 3012:
case 1416:
case 13:
case 3515:
case 2400:
case 2768:
case 2334:
case 3697:
case 3789:
case 3868:
case 3313:
case 2639:
case 2049:
case 1234:
case 1496:
case 1382:
case 1606:
case 2375:
case 851:
case 2584:
case 2184:
case 3089:
case 3602:
case 3234:
case 3539:
case 3879:
case 2392:
case 809:
case 2884:
case 870:
case 883:
case 2818:
case 379:
case 1673:
case 3878:
case 1597:
case 3092:
case 4012:
case 1240:
case 3620:
case 462:
case 843:
case 510:
case 3011:
case 2059:
case 3375:
case 203:
case 2332:
case 2850:
case 943:
case 1232:
case 2110:
case 2099:
case 3543:
case 3389:
case 1556:
case 1194:
case 2908:
case 456:
case 958:
case 1475:
case 779:
case 2655:
case 290:
case 1283:
case 85:
case 1982:
case 3703:
case 3231:
case 881:
case 3794:
case 1517:
case 3368:
case 1547:
case 3180:
case 3055:
case 1371:
case 1361:
case 3207:
case 1206:
case 584:
case 563:
case 1590:
case 92:
case 2847:
case 2571:
case 2431:
case 2354:
case 2296:
case 3894:
case 477:
case 849:
case 2319:
case 3376:
case 1970:
case 3952:
case 2769:
case 728:
case 2193:
case 2681:
case 1699:
case 3905:
case 1913:
case 297:
case 1825:
case 1893:
case 1034:
case 621:
case 3973:
case 891:
case 3426:
case 409:
case 1749:
case 888:
case 1898:
case 49:
case 1778:
case 1824:
case 2912:
case 3716:
case 2377:
case 1572:
case 2579:
case 3892:
case 816:
case 1781:
case 3852:
case 158:
case 1805:
case 438:
case 719:
case 326:
case 279:
case 3891:
case 52:
case 129:
case 4005:
case 3858:
case 4071:
case 1668:
case 2013:
case 3309:
case 1165:
case 2399:
case 3613:
case 2568:
case 2801:
case 4007:
case 565:
case 890:
case 3829:
case 418:
case 1938:
case 459:
case 2197:
case 2672:
case 793:
case 828:
case 1305:
case 1373:
case 318:
case 846:
case 2911:
case 3700:
case 3935:
case 2335:
case 2984:
case 348:
case 4026:
case 3395:
case 3143:
case 2831:
case 381:
case 3173:
case 314:
case 2877:
case 2042:
case 24:
case 495:
case 1264:
case 2819:
case 545:
case 715:
case 3699:
case 2679:
case 3986:
case 170:
case 2570:
case 2113:
case 3119:
case 3519:
case 1844:
case 811:
case 1359:
case 1934:
case 663:
case 274:
case 2192:
case 2276:
case 2333:
case 1815:
case 2302:
case 3755:
case 1832:
case 3673:
case 2177:
case 2671:
case 2185:
case 703:
case 1642:
case 3396:
case 3195:
case 3799:
case 3931:
case 1678:
case 331:
case 3637:
case 3044:
case 2868:
case 2012:
case 3690:
case 3624:
case 806:
case 561:
case 3614:
case 3587:
case 3717:
case 3199:
case 3517:
case 2920:
case 428:
case 1260:
case 3565:
case 1220:
case 1395:
case 1753:
case 2198:
case 1424:
case 689:
case 575:
case 1205:
case 4052:
case 1319:
case 405:
case 1754:
case 3860:
case 3294:
case 1167:
case 2658:
case 691:
case 1797:
case 1902:
case 1790:
case 758:
case 3626:
case 3675:
case 1681:
case 3595:
case 3468:
case 1196:
case 2925:
case 553:
case 573:
case 2104:
case 1900:
case 1451:
case 3579:
case 671:
case 1848:
case 1040:
case 1351:
case 743:
case 2633:
case 2340:
case 551:
case 2680:
case 3084:
case 1791:
case 4000:
case 871:
case 1730:
case 370:
case 2214:
case 3797:
case 1422:
case 1072:
case 1911:
case 3861:
case 2254:
case 2173:
case 515:
case 3397:
case 4093:
case 622:
case 2575:
case 3097:
case 1068:
case 812:
case 3171:
case 3410:
case 889:
case 1273:
case 2927:
case 475:
case 2776:
case 131:
case 2990:
case 3507:
case 3619:
case 1950:
case 2696:
case 1480:
case 1337:
case 2223:
case 991:
case 2165:
case 2961:
case 1751:
case 2838:
case 2567:
case 836:
case 1884:
case 571:
case 476:
case 2821:
case 2201:
case 509:
case 82:
case 3785:
case 945:
case 1397:
case 2522:
case 2253:
case 2960:
case 2416:
case 1103:
case 2493:
case 3733:
case 42:
case 289:
case 384:
case 212:
case 1197:
case 20:
case 543:
case 639:
case 955:
case 228:
case 357:
case 2450:
case 1877:
case 3693:
case 3681:
case 3415:
case 765:
case 458:
case 1228:
case 608:
case 3976:
case 2383:
case 3155:
case 378:
case 1954:
case 1764:
case 230:
case 1837:
case 580:
case 1426:
case 3553:
case 780:
case 423:
case 1594:
case 4002:
case 1435:
case 1937:
case 1663:
case 3165:
case 850:
case 1957:
case 3876:
case 112:
case 1130:
case 2379:
case 1440:
case 2430:
case 3975:
case 3378:
case 3887:
case 2692:
case 764:
case 211:
case 3828:
case 3701:
case 3832:
case 3974:
case 3572:
case 3018:
case 60:
case 1481:
case 3796:
case 3071:
case 3461:
case 3361:
case 1701:
case 4091:
case 2790:
case 2601:
case 1278:
case 178:
case 908:
case 1430:
case 684:
case 1640:
case 1709:
case 31:
case 1326:
case 1467:
case 1102:
case 1366:
case 3191:
case 550:
case 2273:
case 1115:
case 1983:
case 1211:
case 3929:
case 861:
case 2955:
case 678:
case 864:
case 2:
case 2588:
case 3062:
case 1929:
case 3359:
case 1369:
case 3312:
case 1007:
case 2349:
case 2352:
case 2346:
case 3651:
case 155:
case 1045:
case 590:
case 3009:
case 3737:
case 1966:
case 3653:
case 2262:
case 3204:
case 2596:
case 2854:
case 2826:
case 1662:
case 2513:
case 382:
case 789:
case 3791:
case 3451:
case 1170:
case 2405:
case 488:
case 3586:
case 2743:
case 2855:
case 419:
case 696:
case 2902:
case 2318:
case 12:
case 41:
case 2374:
case 1468:
case 2863:
case 281:
case 2465:
case 1840:
case 1703:
case 1914:
case 894:
case 2238:
case 3100:
case 688:
case 2386:
case 3997:
case 1048:
case 2726:
case 1577:
case 1782:
case 3652:
case 2749:
case 1689:
case 2114:
case 339:
case 3063:
case 323:
case 3139:
case 1804:
case 1585:
case 3564:
case 3787:
case 2529:
case 2512:
case 2166:
case 251:
case 1587:
case 1744:
case 2261:
case 109:
case 567:
case 2502:
case 2617:
case 1552:
case 167:
case 2699:
case 874:
case 640:
case 464:
case 2503:
case 652:
case 767:
case 3458:
case 2073:
case 1463:
case 3486:
case 2011:
case 25:
case 1949:
case 3366:
case 3298:
case 3156:
case 3333:
case 372:
case 439:
case 3641:
case 442:
case 3175:
case 2777:
case 2004:
case 3102:
case 546:
case 738:
case 104:
case 823:
case 2678:
case 3732:
case 3483:
case 2471:
case 284:
case 3103:
case 1761:
case 2724:
case 641:
case 1144:
case 3343:
case 3961:
case 800:
case 33:
case 397:
case 3545:
case 2792:
case 611:
case 1191:
case 1108:
case 74:
case 1581:
case 660:
case 3187:
case 45:
case 2698:
case 2968:
case 3146:
case 1471:
case 3209:
case 2183:
case 2324:
case 1654:
case 994:
case 768:
case 2446:
case 2536:
case 1822:
case 1442:
case 67:
case 3874:
case 2688:
case 2991:
case 286:
case 717:
case 433:
case 1476:
case 144:
case 2969:
case 2667:
case 517:
case 3336:
case 1651:
case 1870:
case 2459:
case 3188:
case 2649:
case 2873:
case 2645:
case 623:
case 3580:
case 2426:
case 2647:
case 1222:
case 235:
case 2056:
case 987:
case 1347:
case 1341:
case 763:
case 2693:
case 1391:
case 3669:
case 722:
case 3058:
case 2753:
case 1173:
case 2525:
case 6:
case 3268:
case 2436:
case 299:
case 2023:
case 4058:
case 1249:
case 345:
case 650:
case 3695:
case 2767:
case 911:
case 2293:
case 2016:
case 1787:
case 3813:
case 3153:
case 932:
case 3219:
case 3493:
case 2905:
case 2038:
case 2412:
case 481:
case 676:
case 3400:
case 3090:
case 98:
case 2742:
case 3335:
case 3166:
case 3635:
case 969:
case 2123:
case 4053:
case 1780:
case 585:
case 1944:
case 201:
case 3288:
case 1546:
case 3101:
case 2500:
case 100:
case 2751:
case 2523:
case 2758:
case 471:
case 2755:
case 756:
case 1917:
case 1549:
case 185:
case 3252:
case 1918:
case 1225:
case 2507:
case 802:
case 3661:
case 2000:
case 2764:
case 531:
case 710:
case 3685:
case 2401:
case 3846:
case 1046:
case 1164:
case 1529:
case 3069:
case 1965:
case 3985:
case 2903:
case 2382:
case 450:
case 2608:
case 2487:
case 3589:
case 1664:
case 2052:
case 1558:
case 3462:
case 540:
case 607:
case 721:
case 441:
case 1967:
case 2948:
case 3526:
case 3764:
case 1498:
case 1215:
case 2586:
case 3702:
case 388:
case 2583:
case 683:
case 2474:
case 1363:
case 3201:
case 1723:
case 1645:
case 1928:
case 1084:
case 2530:
case 1367:
case 1851:
case 1198:
case 3837:
case 2343:
case 946:
case 2235:
case 2142:
case 2725:
case 2083:
case 4046:
case 686:
case 3425:
case 1454:
case 1722:
case 1972:
case 1694:
case 28:
case 2623:
case 3568:
case 724:
case 1419:
case 3664:
case 2175:
case 1183:
case 906:
case 3972:
case 1785:
case 569:
case 1492:
case 3183:
case 162:
case 1402:
case 3479:
case 1217:
case 3520:
case 121:
case 277:
case 223:
case 2694:
case 1158:
case 1511:
case 2648:
case 3881:
case 3278:
case 70:
case 1227:
case 1404:
case 1601:
case 416:
case 2188:
case 1745:
case 3485:
case 3404:
case 1504:
case 1812:
case 1030:
case 971:
case 329:
case 3996:
case 1274:
case 1075:
case 752:
case 3600:
case 3971:
case 2549:
case 2886:
case 3437:
case 490:
case 1625:
case 3827:
case 2087:
case 624:
case 1979:
case 1061:
case 1839:
case 1924:
case 327:
case 3061:
case 4025:
case 694:
case 27:
case 3198:
case 2598:
case 3380:
case 807:
case 1013:
case 8:
case 1999:
case 3636:
case 1829:
case 3466:
case 1724:
case 3990:
case 174:
case 3465:
case 940:
case 1380:
case 111:
case 3464:
case 3399:
case 1878:
case 3481:
case 393:
case 2998:
case 1168:
case 3412:
case 1490:
case 3398:
case 3210:
case 1069:
case 2406:
case 1257:
case 3590:
case 3495:
case 1943:
case 1620:
case 547:
case 900:
case 1856:
case 2635:
case 2985:
case 7:
case 1574:
case 3473:
case 1461:
case 980:
case 596:
case 3534:
case 341:
case 3627:
case 436:
case 2002:
case 933:
case 245:
case 301:
case 3822:
case 1313:
case 770:
case 2274:
case 2216:
case 1828:
case 1656:
case 3326:
case 387:
case 535:
case 1081:
case 2684:
case 3544:
case 3801:
case 2189:
case 2851:
case 3226:
case 1137:
case 3356:
case 285:
case 1049:
case 727:
case 1247:
case 3196:
case 3435:
case 1054:
case 120:
case 4070:
case 2068:
case 1207:
case 1193:
case 157:
case 2239:
case 3003:
case 3840:
case 164:
case 3862:
case 1821:
case 1757:
case 1998:
case 3896:
case 161:
case 236:
case 1771:
case 662:
case 2656:
case 2336:
case 448:
case 2587:
case 3470:
case 1868:
case 3177:
case 3111:
case 829:
case 1621:
case 3898:
case 1131:
case 4013:
case 147:
case 1763:
case 77:
case 3292:
case 3260:
case 1192:
case 3531:
case 902:
case 1282:
case 2550:
case 872:
case 3405:
case 22:
case 4030:
case 1275:
case 3875:
case 957:
case 3930:
case 133:
case 17:
case 2240:
case 461:
case 4076:
case 1118:
case 2977:
case 3916:
case 3026:
case 1573:
case 3:
case 3212:
case 1540:
case 3263:
case 1788:
case 706:
case 90:
case 1246:
case 2516:
case 3042:
case 2308:
case 2178:
case 3015:
case 385:
case 3216:
case 2112:
case 2167:
case 1357:
case 1159:
case 1375:
case 175:
case 3338:
case 3492:
case 3390:
case 125:
case 934:
case 2291:
case 127:
case 860:
case 2267:
case 2713:
case 3236:
case 2398:
case 3993:
case 2779:
case 3773:
case 346:
case 1065:
case 3021:
case 3319:
case 2505:
case 1831:
case 609:
case 1343:
case 920:
case 1043:
case 3925:
case 404:
case 3866:
case 2940:
case 3325:
case 1385:
case 349:
case 391:
case 1997:
case 1639:
case 3630:
case 3769:
case 3725:
case 1846:
case 1515:
case 1327:
case 3959:
case 429:
case 605:
case 1270:
case 1711:
case 330:
case 1078:
case 730:
case 1119:
case 1809:
case 1729:
case 2298:
case 559:
case 562:
case 2137:
case 3269:
case 3615:
case 3066:
case 3054:
case 1360:
case 2978:
case 115:
case 2158:
case 3004:
case 2662:
case 903:
case 2589:
case 3162:
case 1644:
case 3274:
case 3884:
case 3023:
case 629:
case 937:
case 1834:
case 1543:
case 3761:
case 4047:
case 856:
case 278:
case 1345:
case 1816:
case 2861:
case 102:
case 3917:
case 3863:
case 1235:
case 2213:
case 1003:
case 2585:
case 65:
case 3151:
case 524:
case 854:
case 3286:
case 3922:
case 3622:
case 3616:
case 2580:
case 1077:
case 649:
case 2287:
case 2096:
case 1021:
case 3321:
case 29:
case 4094:
case 453:
case 798:
case 2822:
case 2845:
case 2901:
case 511:
case 1309:
case 787:
case 4010:
case 3384:
case 2621:
case 2134:
case 3487:
case 2691:
case 2494:
case 2116:
case 656:
case 3242:
case 371:
case 2077:
case 1895:
case 1142:
case 1961:
case 3505:
case 1630:
case 2285:
case 2664:
case 72:
case 3836:
case 3225:
case 3749:
case 110:
case 2774:
case 592:
case 169:
case 2763:
case 2126:
case 3968:
case 1066:
case 3802:
case 837:
case 3893:
case 2841:
case 3729:
case 3040:
case 1808:
case 9:
case 2107:
case 1561:
case 3346:
case 709:
case 218:
case 206:
case 1104:
case 3213:
case 2765:
case 3560:
case 950:
case 4015:
case 2071:
case 2508:
case 959:
case 47:
case 2415:
case 1534:
case 2907:
case 542:
case 919:
case 3411:
case 4062:
case 1904:
case 3532:
case 759:
case 3369:
case 3754:
case 862:
case 2913:
case 3112:
case 3719:
case 1413:
case 3667:
case 364:
case 14:
case 1907:
case 2084:
case 576:
case 2035:
case 213:
case 1400:
case 389:
case 1251:
case 1977:
case 2242:
case 414:
case 1302:
case 3049:
case 2227:
case 497:
case 707:
case 2200:
case 3923:
case 537:
case 2256:
case 699:
case 2428:
case 3529:
case 3206:
case 451:
case 2404:
case 492:
case 2754:
case 3498:
case 4092:
case 664:
case 153:
case 1116:
case 2637:
case 1157:
case 4065:
case 4:
case 280:
case 1245:
case 979:
case 2117:
case 866:
case 2828:
case 3211:
case 3903:
case 93:
case 247:
case 3256:
case 1960:
case 4063:
case 422:
case 1110:
case 2517:
case 3594:
case 3401:
case 3257:
case 1473:
case 288:
case 899:
case 1767:
case 1073:
case 1947:
case 2732:
case 79:
case 1008:
case 610:
case 2987:
case 171:
case 2218:
case 91:
case 3806:
case 3633:
case 2634:
case 3010:
case 2306:
case 1783:
case 1262:
case 3105:
case 1242:
case 1784:
case 271:
case 2357:
case 2975:
case 3857:
case 2452:
case 2811:
case 3038:
case 1497:
case 924:
case 3895:
case 757:
case 667:
case 415:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1644656402/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,];
var gg_b = "1644656402/";

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
