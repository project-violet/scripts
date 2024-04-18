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
case 856:
case 281:
case 2727:
case 760:
case 1673:
case 1207:
case 1321:
case 197:
case 2315:
case 3630:
case 952:
case 417:
case 801:
case 1668:
case 1925:
case 3440:
case 3546:
case 3792:
case 3120:
case 3936:
case 1531:
case 732:
case 1771:
case 3154:
case 288:
case 680:
case 3677:
case 262:
case 1656:
case 709:
case 3432:
case 1182:
case 987:
case 1469:
case 1600:
case 4071:
case 3707:
case 78:
case 2115:
case 2737:
case 1110:
case 3271:
case 2553:
case 2268:
case 369:
case 2008:
case 3669:
case 598:
case 1098:
case 3960:
case 1305:
case 1481:
case 3144:
case 2457:
case 1102:
case 766:
case 501:
case 746:
case 358:
case 3307:
case 3365:
case 1805:
case 2487:
case 1508:
case 576:
case 2739:
case 1642:
case 1507:
case 1463:
case 2155:
case 289:
case 3940:
case 146:
case 619:
case 333:
case 1257:
case 2013:
case 2194:
case 433:
case 2173:
case 2872:
case 2619:
case 1776:
case 2049:
case 2060:
case 3620:
case 706:
case 2357:
case 235:
case 420:
case 2827:
case 1589:
case 2029:
case 730:
case 3732:
case 3130:
case 566:
case 903:
case 891:
case 1178:
case 900:
case 783:
case 1894:
case 3769:
case 3807:
case 1590:
case 2538:
case 117:
case 294:
case 1089:
case 324:
case 818:
case 861:
case 2959:
case 1861:
case 1022:
case 1465:
case 1344:
case 3411:
case 2118:
case 138:
case 60:
case 2551:
case 1540:
case 3888:
case 3085:
case 8:
case 2944:
case 1630:
case 3723:
case 1626:
case 3953:
case 241:
case 873:
case 3129:
case 2052:
case 3641:
case 2597:
case 3493:
case 2785:
case 1807:
case 3609:
case 3253:
case 2398:
case 3028:
case 2031:
case 1545:
case 3406:
case 3831:
case 1756:
case 666:
case 3689:
case 890:
case 3754:
case 3235:
case 404:
case 1136:
case 3082:
case 3679:
case 3364:
case 1766:
case 981:
case 2297:
case 3532:
case 3526:
case 1444:
case 3171:
case 2166:
case 3885:
case 609:
case 963:
case 2935:
case 904:
case 64:
case 1811:
case 2914:
case 1525:
case 2391:
case 3041:
case 944:
case 1518:
case 2131:
case 1485:
case 157:
case 2505:
case 744:
case 2946:
case 418:
case 328:
case 2407:
case 4070:
case 2177:
case 1629:
case 2145:
case 1588:
case 1470:
case 1341:
case 1087:
case 948:
case 1727:
case 820:
case 1686:
case 3038:
case 1598:
case 1549:
case 3979:
case 3054:
case 3003:
case 1670:
case 2854:
case 2346:
case 2395:
case 3950:
case 3162:
case 26:
case 3903:
case 2458:
case 2057:
case 886:
case 2386:
case 1831:
case 1495:
case 1609:
case 4037:
case 2654:
case 1772:
case 3902:
case 3976:
case 2509:
case 466:
case 3103:
case 1456:
case 2864:
case 4029:
case 290:
case 2244:
case 3385:
case 1690:
case 2153:
case 1189:
case 3757:
case 2406:
case 3846:
case 1184:
case 1887:
case 1350:
case 512:
case 954:
case 1758:
case 3935:
case 1759:
case 764:
case 2182:
case 1750:
case 3306:
case 2110:
case 3035:
case 4014:
case 1162:
case 3529:
case 1770:
case 300:
case 2091:
case 687:
case 1156:
case 3652:
case 410:
case 1071:
case 101:
case 710:
case 1979:
case 85:
case 679:
case 1582:
case 504:
case 191:
case 383:
case 9:
case 2930:
case 3419:
case 3468:
case 1570:
case 869:
case 3001:
case 1978:
case 2932:
case 1431:
case 1662:
case 578:
case 749:
case 2080:
case 979:
case 206:
case 2624:
case 1767:
case 425:
case 2501:
case 736:
case 1757:
case 4023:
case 2627:
case 3859:
case 3503:
case 1024:
case 190:
case 3800:
case 3634:
case 3576:
case 2095:
case 2718:
case 195:
case 3553:
case 2719:
case 701:
case 1108:
case 1231:
case 2834:
case 3964:
case 29:
case 2066:
case 2409:
case 1557:
case 3500:
case 2040:
case 1789:
case 3192:
case 562:
case 3461:
case 3476:
case 3320:
case 1832:
case 930:
case 1088:
case 1190:
case 779:
case 2497:
case 3803:
case 1815:
case 1780:
case 1019:
case 3566:
case 2502:
case 812:
case 2589:
case 3374:
case 813:
case 911:
case 1325:
case 2099:
case 2689:
case 28:
case 4089:
case 3814:
case 1105:
case 3531:
case 3:
case 3743:
case 3442:
case 3865:
case 2997:
case 517:
case 3658:
case 1572:
case 2823:
case 3772:
case 232:
case 386:
case 799:
case 3836:
case 2038:
case 3174:
case 2274:
case 3642:
case 4019:
case 2919:
case 2851:
case 663:
case 3703:
case 1215:
case 2169:
case 2636:
case 3412:
case 1990:
case 811:
case 3486:
case 1613:
case 3290:
case 638:
case 3591:
case 1430:
case 4059:
case 3409:
case 2767:
case 2341:
case 37:
case 1733:
case 3002:
case 3397:
case 2591:
case 537:
case 2000:
case 1146:
case 3090:
case 2578:
case 3343:
case 1307:
case 3200:
case 1854:
case 755:
case 1968:
case 604:
case 361:
case 557:
case 2560:
case 532:
case 4055:
case 426:
case 1163:
case 817:
case 3788:
case 1714:
case 955:
case 2104:
case 1678:
case 2491:
case 654:
case 109:
case 2807:
case 4032:
case 3366:
case 630:
case 3812:
case 4040:
case 1117:
case 1778:
case 3065:
case 2779:
case 584:
case 1157:
case 2729:
case 599:
case 1013:
case 3580:
case 925:
case 3391:
case 1792:
case 2337:
case 2542:
case 1689:
case 153:
case 3872:
case 4082:
case 2562:
case 1123:
case 2816:
case 3974:
case 1082:
case 1438:
case 508:
case 2728:
case 2726:
case 2765:
case 415:
case 1709:
case 3218:
case 495:
case 3866:
case 839:
case 3007:
case 3748:
case 3102:
case 2388:
case 2911:
case 1246:
case 3172:
case 1366:
case 2705:
case 2875:
case 2978:
case 2974:
case 1695:
case 2814:
case 3325:
case 926:
case 777:
case 3383:
case 1238:
case 1867:
case 464:
case 1510:
case 616:
case 3554:
case 1515:
case 1625:
case 3760:
case 1119:
case 2637:
case 727:
case 2137:
case 3490:
case 2606:
case 3121:
case 983:
case 1116:
case 388:
case 1378:
case 364:
case 743:
case 559:
case 1639:
case 1595:
case 539:
case 3125:
case 2494:
case 3581:
case 270:
case 3763:
case 1912:
case 3638:
case 3815:
case 1096:
case 2697:
case 3216:
case 677:
case 3467:
case 17:
case 2523:
case 272:
case 2045:
case 1038:
case 4090:
case 2122:
case 2629:
case 3688:
case 326:
case 3010:
case 89:
case 3670:
case 2982:
case 705:
case 2158:
case 1752:
case 4017:
case 3373:
case 489:
case 58:
case 2880:
case 834:
case 2787:
case 2094:
case 577:
case 1840:
case 2414:
case 2840:
case 2556:
case 3887:
case 1522:
case 3350:
case 2835:
case 1580:
case 864:
case 2305:
case 1132:
case 1371:
case 3557:
case 975:
case 2986:
case 296:
case 2230:
case 3256:
case 717:
case 2614:
case 449:
case 3875:
case 1765:
case 2366:
case 1144:
case 4049:
case 2768:
case 1030:
case 2642:
case 2261:
case 3583:
case 2992:
case 1348:
case 323:
case 1970:
case 1235:
case 1339:
case 573:
case 2220:
case 3799:
case 1999:
case 2034:
case 1450:
case 3475:
case 3423:
case 588:
case 3731:
case 889:
case 3060:
case 3794:
case 614:
case 1671:
case 3879:
case 3827:
case 1300:
case 1820:
case 2317:
case 3654:
case 492:
case 782:
case 3177:
case 115:
case 3078:
case 1632:
case 180:
case 2474:
case 3344:
case 2364:
case 2163:
case 258:
case 1972:
case 2002:
case 3066:
case 1280:
case 2233:
case 1046:
case 2185:
case 2592:
case 1275:
case 1180:
case 3508:
case 2286:
case 3617:
case 1392:
case 3333:
case 1021:
case 3882:
case 3359:
case 1000:
case 1793:
case 127:
case 3929:
case 1960:
case 711:
case 647:
case 1502:
case 846:
case 1633:
case 265:
case 401:
case 3573:
case 435:
case 3063:
case 2613:
case 2004:
case 2667:
case 2063:
case 1924:
case 4060:
case 207:
case 1185:
case 2900:
case 1790:
case 4075:
case 1904:
case 1139:
case 1949:
case 2480:
case 3733:
case 2770:
case 1264:
case 2069:
case 2044:
case 3574:
case 1352:
case 2098:
case 173:
case 3199:
case 1726:
case 1078:
case 2148:
case 800:
case 2418:
case 3429:
case 2367:
case 2130:
case 4091:
case 44:
case 3850:
case 2059:
case 826:
case 477:
case 3920:
case 858:
case 1464:
case 1538:
case 3784:
case 62:
case 1923:
case 725:
case 2751:
case 1856:
case 3238:
case 3790:
case 1027:
case 509:
case 1870:
case 3160:
case 95:
case 1976:
case 968:
case 1491:
case 214:
case 933:
case 2105:
case 4016:
case 1253:
case 1266:
case 3246:
case 722:
case 1056:
case 1777:
case 3845:
case 3142:
case 1025:
case 4069:
case 455:
case 4:
case 1272:
case 854:
case 251:
case 3714:
case 2786:
case 35:
case 66:
case 1935:
case 3245:
case 2632:
case 560:
case 2561:
case 2586:
case 761:
case 1384:
case 918:
case 845:
case 1498:
case 2075:
case 3081:
case 913:
case 759:
case 3541:
case 2763:
case 3451:
case 3619:
case 988:
case 4025:
case 2348:
case 671:
case 2307:
case 2877:
case 3057:
case 3857:
case 880:
case 2571:
case 2714:
case 2376:
case 2085:
case 2607:
case 1467:
case 2691:
case 1992:
case 1982:
case 3195:
case 268:
case 3387:
case 2679:
case 2159:
case 997:
case 1362:
case 2899:
case 2242:
case 283:
case 3363:
case 1928:
case 1427:
case 212:
case 2601:
case 327:
case 3507:
case 2436:
case 3833:
case 2278:
case 3829:
case 2492:
case 2829:
case 3321:
case 3802:
case 2596:
case 784:
case 3838:
case 2445:
case 320:
case 1902:
case 421:
case 213:
case 1707:
case 3771:
case 2847:
case 2355:
case 6:
case 2731:
case 808:
case 1514:
case 225:
case 3647:
case 2796:
case 3012:
case 2464:
case 3549:
case 2042:
case 1016:
case 3806:
case 3358:
case 462:
case 93:
case 993:
case 317:
case 3044:
case 3782:
case 589:
case 2984:
case 3628:
case 1809:
case 2469:
case 648:
case 2318:
case 1451:
case 3006:
case 2815:
case 833:
case 1952:
case 2167:
case 1965:
case 673:
case 702:
case 2070:
case 2339:
case 2246:
case 3550:
case 1282:
case 3329:
case 3240:
case 518:
case 1652:
case 1950:
case 454:
case 2798:
case 1232:
case 15:
case 1329:
case 2168:
case 3842:
case 641:
case 853:
case 1218:
case 4065:
case 1363:
case 3599:
case 3410:
case 1003:
case 2287:
case 308:
case 3975:
case 2225:
case 613:
case 3059:
case 3027:
case 1586:
case 3764:
case 2282:
case 624:
case 3227:
case 298:
case 3170:
case 2567:
case 2774:
case 3168:
case 2102:
case 3997:
case 1192:
case 601:
case 2803:
case 735:
case 3369:
case 3037:
case 990:
case 1892:
case 1397:
case 1734:
case 2690:
case 3483:
case 2967:
case 1034:
case 2702:
case 3727:
case 414:
case 431:
case 3949:
case 3696:
case 1954:
case 335:
case 469:
case 4047:
case 2879:
case 428:
case 2067:
case 1080:
case 2334:
case 1795:
case 266:
case 2465:
case 1863:
case 3471:
case 3663:
case 2139:
case 2431:
case 1596:
case 2555:
case 1426:
case 3182:
case 3896:
case 731:
case 2319:
case 3551:
case 726:
case 3049:
case 2855:
case 1578:
case 2021:
case 2442:
case 1229:
case 1051:
case 1591:
case 2016:
case 411:
case 2462:
case 452:
case 1907:
case 2664:
case 1457:
case 2076:
case 2298:
case 967:
case 2546:
case 1435:
case 2853:
case 2400:
case 684:
case 3083:
case 3204:
case 3309:
case 3095:
case 2515:
case 519:
case 325:
case 1114:
case 2064:
case 2211:
case 523:
case 1130:
case 914:
case 1669:
case 2896:
case 1138:
case 3545:
case 3051:
case 1687:
case 4044:
case 718:
case 2948:
case 441:
case 1237:
case 4015:
case 2848:
case 2490:
case 3193:
case 3348:
case 1299:
case 2255:
case 2558:
case 3148:
case 2083:
case 525:
case 1255:
case 681:
case 1738:
case 698:
case 1151:
case 1575:
case 274:
case 340:
case 2749:
case 3606:
case 1691:
case 3221:
case 330:
case 2393:
case 3702:
case 1803:
case 1948:
case 140:
case 1258:
case 3152:
case 1619:
case 2594:
case 3112:
case 3565:
case 4043:
case 1521:
case 480:
case 1483:
case 163:
case 3646:
case 67:
case 1204:
case 3487:
case 114:
case 585:
case 3864:
case 2769:
case 3342:
case 1064:
case 2017:
case 2440:
case 1273:
case 506:
case 2161:
case 3640:
case 3693:
case 2528:
case 276:
case 686:
case 2954:
case 1784:
case 2024:
case 1908:
case 2990:
case 2129:
case 1969:
case 128:
case 1422:
case 3793:
case 3088:
case 3434:
case 2671:
case 3563:
case 3528:
case 2511:
case 3371:
case 4057:
case 133:
case 3735:
case 3470:
case 2788:
case 980:
case 2389:
case 106:
case 966:
case 608:
case 2720:
case 1702:
case 402:
case 3724:
case 158:
case 152:
case 1041:
case 503:
case 2108:
case 661:
case 2106:
case 3379:
case 19:
case 1277:
case 456:
case 3660:
case 482:
case 659:
case 4030:
case 1429:
case 3986:
case 2979:
case 226:
case 2208:
case 3894:
case 3439:
case 2512:
case 1165:
case 781:
case 134:
case 3326:
case 1393:
case 3588:
case 1159:
case 384:
case 3424:
case 3856:
case 3791:
case 2656:
case 3485:
case 189:
case 754:
case 1810:
case 105:
case 1239:
case 1289:
case 3977:
case 1959:
case 713:
case 2552:
case 3331:
case 633:
case 2472:
case 103:
case 860:
case 1242:
case 682:
case 2924:
case 1881:
case 1597:
case 2416:
case 3818:
case 3919:
case 2171:
case 3516:
case 3228:
case 3407:
case 3535:
case 720:
case 610:
case 3067:
case 1256:
case 314:
case 689:
case 2453:
case 2263:
case 1720:
case 1324:
case 1794:
case 1940:
case 969:
case 1546:
case 3668:
case 1799:
case 1798:
case 307:
case 3270:
case 1017:
case 1593:
case 1478:
case 1640:
case 2812:
case 513:
case 3140:
case 2461:
case 3536:
case 3327:
case 505:
case 1636:
case 855:
case 3040:
case 1539:
case 3716:
case 2746:
case 2349:
case 1631:
case 231:
case 1646:
case 344:
case 88:
case 2338:
case 1170:
case 943:
case 3525:
case 945:
case 3046:
case 336:
case 2215:
case 77:
case 1169:
case 4021:
case 850:
case 2291:
case 3967:
case 3449:
case 2335:
case 646:
case 2426:
case 1543:
case 3436:
case 884:
case 3045:
case 934:
case 3956:
case 2994:
case 3855:
case 1058:
case 1951:
case 82:
case 3762:
case 1850:
case 941:
case 3029:
case 1042:
case 556:
case 1817:
case 3742:
case 3709:
case 3242:
case 1285:
case 423:
case 3844:
case 3465:
case 499:
case 366:
case 2043:
case 488:
case 1839:
case 3398:
case 1533:
case 1885:
case 634:
case 1462:
case 1412:
case 1634:
case 951:
case 3161:
case 3610:
case 2643:
case 1236:
case 3672:
case 1484:
case 2397:
case 2342:
case 753:
case 3462:
case 3122:
case 593:
case 4018:
case 4086:
case 1137:
case 1251:
case 2547:
case 1424:
case 2873:
case 651:
case 2471:
case 202:
case 3933:
case 3778:
case 662:
case 1995:
case 787:
case 345:
case 3648:
case 3176:
case 3491:
case 3972:
case 3263:
case 2184:
case 2419:
case 3187:
case 1459:
case 257:
case 653:
case 3626:
case 3908:
case 1210:
case 1191:
case 1981:
case 3971:
case 1486:
case 484:
case 1516:
case 2499:
case 937:
case 3167:
case 568:
case 3282:
case 667:
case 728:
case 688:
case 3166:
case 3900:
case 2437:
case 3925:
case 3000:
case 2300:
case 1131:
case 3273:
case 1374:
case 475:
case 3317:
case 1567:
case 1152:
case 805:
case 1281:
case 657:
case 3153:
case 2140:
case 3820:
case 742:
case 780:
case 10:
case 1938:
case 2439:
case 935:
case 2903:
case 2331:
case 3127:
case 65:
case 621:
case 3262:
case 694:
case 2540:
case 810:
case 1812:
case 1986:
case 1439:
case 253:
case 2310:
case 1679:
case 768:
case 3280:
case 3941:
case 2221:
case 1446:
case 1011:
case 2276:
case 3876:
case 2687:
case 124:
case 2228:
case 3013:
case 151:
case 794:
case 3075:
case 618:
case 1379:
case 3539:
case 1731:
case 3444:
case 1919:
case 2583:
case 2441:
case 3873:
case 282:
case 3288:
case 3136:
case 2941:
case 3425:
case 4054:
case 3501:
case 3005:
case 2410:
case 165:
case 2478:
case 3404:
case 2176:
case 434:
case 902:
case 2092:
case 3340:
case 368:
case 3297:
case 530:
case 3186:
case 1345:
case 1710:
case 2187:
case 823:
case 376:
case 2238:
case 4027:
case 3248:
case 1037:
case 876:
case 3257:
case 2239:
case 322:
case 908:
case 2938:
case 2743:
case 3711:
case 2345:
case 3558:
case 1740:
case 1601:
case 3211:
case 2356:
case 3382:
case 218:
case 1084:
case 575:
case 1682:
case 3602:
case 1893:
case 544:
case 1696:
case 1558:
case 1542:
case 974:
case 1455:
case 2415:
case 1262:
case 2489:
case 2955:
case 2353:
case 3447:
case 476:
case 1676:
case 3777:
case 2503:
case 1853:
case 1310:
case 2794:
case 920:
case 394:
case 179:
case 1039:
case 3232:
case 1031:
case 2443:
case 656:
case 175:
case 1448:
case 215:
case 1416:
case 3871:
case 2011:
case 293:
case 2030:
case 3918:
case 312:
case 3474:
case 2799:
case 185:
case 2569:
case 1263:
case 1306:
case 3517:
case 237:
case 1573:
case 2784:
case 263:
case 2234:
case 2628:
case 958:
case 370:
case 3825:
case 2162:
case 825:
case 2403:
case 2808:
case 1202:
case 2789:
case 2529:
case 844:
case 3987:
case 3768:
case 3222:
case 3937:
case 222:
case 3911:
case 3255:
case 3092:
case 612:
case 3184:
case 2114:
case 306:
case 2836:
case 791:
case 3430:
case 1943:
case 824:
case 2432:
case 3738:
case 1167:
case 1312:
case 3455:
case 2302:
case 3313:
case 3604:
case 3579:
case 938:
case 3582:
case 171:
case 2425:
case 3717:
case 1845:
case 989:
case 3433:
case 3816:
case 3869:
case 4005:
case 567:
case 1248:
case 724:
case 486:
case 644:
case 3370:
case 2493:
case 595:
case 1922:
case 1449:
case 377:
case 2088:
case 315:
case 3637:
case 522:
case 3214:
case 2183:
case 2433:
case 378:
case 1729:
case 2695:
case 3346:
case 1338:
case 1651:
case 733:
case 3706:
case 2352:
case 2125:
case 3362:
case 2603:
case 1092:
case 2745:
case 2754:
case 838:
case 3208:
case 2778:
case 3267:
case 249:
case 1882:
case 548:
case 1787:
case 1666:
case 83:
case 113:
case 3115:
case 1148:
case 848:
case 2668:
case 2026:
case 2172:
case 204:
case 2422:
case 2819:
case 3755:
case 2795:
case 1505:
case 4006:
case 2653:
case 1129:
case 2265:
case 835:
case 4073:
case 626:
case 2253:
case 2520:
case 3277:
case 3943:
case 1224:
case 3031:
case 2336:
case 3375:
case 3615:
case 470:
case 1322:
case 3895:
case 2673:
case 155:
case 570:
case 2707:
case 3521:
case 1616:
case 629:
case 1386:
case 1550:
case 3244:
case 3786:
case 2506:
case 3198:
case 1128:
case 2231:
case 3173:
case 2138:
case 2039:
case 3460:
case 1383:
case 1122:
case 660:
case 1222:
case 3334:
case 491:
case 1234:
case 3904:
case 36:
case 2362:
case 2584:
case 550:
case 494:
case 2496:
case 2869:
case 1719:
case 1942:
case 3435:
case 1219:
case 2838:
case 3303:
case 331:
case 4067:
case 1553:
case 385:
case 2570:
case 1703:
case 246:
case 1166:
case 3418:
case 2675:
case 2399:
case 1599:
case 3017:
case 940:
case 51:
case 355:
case 1437:
case 216:
case 3137:
case 1701:
case 1532:
case 1834:
case 3111:
case 2970:
case 3993:
case 3978:
case 2227:
case 842:
case 3661:
case 2019:
case 3766:
case 3544:
case 3666:
case 2378:
case 2839:
case 3765:
case 1442:
case 775:
case 393:
case 3721:
case 669:
case 3408:
case 2951:
case 3036:
case 762:
case 3395:
case 1357:
case 3667:
case 3678:
case 998:
case 1712:
case 2870:
case 3236:
case 1895:
case 3989:
case 144:
case 3590:
case 3776:
case 4080:
case 2151:
case 1101:
case 622:
case 1147:
case 3135:
case 273:
case 901:
case 2012:
case 2950:
case 3119:
case 1802:
case 467:
case 2516:
case 1124:
case 3225:
case 187:
case 2963:
case 1681:
case 1574:
case 690:
case 2096:
case 381:
case 1864:
case 3824:
case 458:
case 632:
case 1657:
case 1984:
case 2429:
case 1074:
case 1414:
case 672:
case 752:
case 2699:
case 2051:
case 1106:
case 2590:
case 2539:
case 2214:
case 1111:
case 1205:
case 2871:
case 121:
case 444:
case 3196:
case 561:
case 2692:
case 3537:
case 1223:
case 1660:
case 1208:
case 712:
case 2050:
case 3616:
case 2382:
case 40:
case 786:
case 4010:
case 2470:
case 2223:
case 1667:
case 2141:
case 3952:
case 419:
case 3687:
case 2710:
case 3030:
case 43:
case 2351:
case 857:
case 4022:
case 2792:
case 520:
case 3624:
case 2081:
case 3141:
case 3796:
case 1065:
case 3633:
case 2925:
case 2907:
case 1398:
case 3488:
case 2534:
case 928:
case 757:
case 538:
case 1746:
case 4095:
case 1901:
case 1428:
case 737:
case 3071:
case 3773:
case 893:
case 852:
case 186:
case 806:
case 209:
case 1528:
case 2565:
case 2082:
case 3338:
case 3014:
case 3835:
case 1650:
case 4066:
case 879:
case 507:
case 360:
case 2475:
case 1608:
case 1113:
case 1233:
case 2579:
case 2361:
case 1066:
case 3713:
case 3928:
case 1744:
case 1008:
case 1054:
case 303:
case 3741:
case 3096:
case 1445:
case 143:
case 534:
case 2971:
case 2047:
case 184:
case 874:
case 347:
case 1883:
case 555:
case 3673:
case 2730:
case 1534:
case 1453:
case 3538:
case 2600:
case 371:
case 2446:
case 1188:
case 3223:
case 422:
case 1173:
case 2279:
case 2112:
case 1200:
case 2588:
case 3354:
case 3515:
case 3033:
case 3118:
case 2953:
case 1216:
case 2608:
case 339:
case 102:
case 1663:
case 2383:
case 1410:
case 3178:
case 172:
case 38:
case 3527:
case 2435:
case 1342:
case 2641:
case 3452:
case 1423:
case 1517:
case 1195:
case 1675:
case 2450:
case 159:
case 1956:
case 1351:
case 1211:
case 1199:
case 264:
case 1971:
case 1100:
case 2258:
case 916:
case 3770:
case 2078:
case 583:
case 3712:
case 2865:
case 2036:
case 2910:
case 2488:
case 1007:
case 2454:
case 2998:
case 3151:
case 2660:
case 2326:
case 2193:
case 2797:
case 3783:
case 3946:
case 1544:
case 741:
case 2309:
case 554:
case 1044:
case 1837:
case 2647:
case 1862:
case 1577:
case 80:
case 3215:
case 2344:
case 2618:
case 708:
case 1271:
case 516:
case 1047:
case 1015:
case 2623:
case 734:
case 1821:
case 2680:
case 2757:
case 1377:
case 695:
case 1026:
case 2985:
case 2451:
case 821:
case 3990:
case 4035:
case 3076:
case 1933:
case 3285:
case 4002:
case 3631:
case 3279:
case 301:
case 269:
case 778:
case 1081:
case 183:
case 2566:
case 3798:
case 3601:
case 1711:
case 2712:
case 2116:
case 305:
case 2369:
case 747:
case 723:
case 3948:
case 1407:
case 1529:
case 2782:
case 2121:
case 220:
case 1688:
case 1826:
case 1611:
case 3883:
case 3916:
case 1814:
case 2411:
case 541:
case 193:
case 2360:
case 961:
case 379:
case 496:
case 2844:
case 2771:
case 985:
case 921:
case 953:
case 1966:
case 1721:
case 2996:
case 2216:
case 2721:
case 1394:
case 1461:
case 1873:
case 3134:
case 3053:
case 2526:
case 3205:
case 3752:
case 1358:
case 1297:
case 1104:
case 73:
case 3185:
case 1364:
case 1158:
case 3684:
case 2053:
case 1057:
case 2550:
case 2481:
case 2087:
case 1653:
case 2693:
case 1512:
case 4004:
case 3390:
case 3217:
case 3621:
case 2:
case 1176:
case 1860:
case 471:
case 445:
case 23:
case 372:
case 3328:
case 2438:
case 177:
case 239:
case 3243:
case 387:
case 2330:
case 3994:
case 228:
case 3779:
case 405:
case 1547:
case 3832:
case 2825:
case 3416:
case 2543:
case 3898:
case 2323:
case 4087:
case 564:
case 2370:
case 271:
case 2694:
case 3269:
case 2630:
case 2033:
case 32:
case 2813:
case 1172:
case 3922:
case 2976:
case 3585:
case 1293:
case 1480:
case 181:
case 3853:
case 389:
case 3143:
case 1372:
case 3730:
case 1913:
case 20:
case 994:
case 2006:
case 3072:
case 3106:
case 3393:
case 2467:
case 1154:
case 338:
case 4033:
case 3299:
case 2290:
case 2224:
case 3249:
case 2035:
case 872:
case 1294:
case 3437:
case 665:
case 400:
case 1735:
case 816:
case 319:
case 3761:
case 729:
case 1193:
case 3600:
case 3089:
case 365:
case 84:
case 1955:
case 2522:
case 2093:
case 1843:
case 2655:
case 2134:
case 3701:
case 2186:
case 1036:
case 3708:
case 2303:
case 390:
case 1603:
case 1060:
case 3926:
case 1535:
case 1869:
case 1171:
case 3644:
case 1323:
case 1641:
case 238:
case 3810:
case 3691:
case 2929:
case 3456:
case 3912:
case 3753:
case 3355:
case 2755:
case 79:
case 1993:
case 591:
case 655:
case 1270:
case 1085:
case 2077:
case 1373:
case 120:
case 2577:
case 1095:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1713434402/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,];
var gg_b = "1713434402/";

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
