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
case 786:
case 2076:
case 1852:
case 857:
case 3752:
case 2892:
case 1934:
case 453:
case 55:
case 242:
case 1929:
case 646:
case 4014:
case 772:
case 974:
case 2707:
case 3031:
case 3913:
case 1823:
case 40:
case 3566:
case 94:
case 2566:
case 2506:
case 3036:
case 3365:
case 670:
case 3438:
case 1180:
case 2983:
case 3048:
case 625:
case 2199:
case 327:
case 3055:
case 4019:
case 2323:
case 3573:
case 1519:
case 1690:
case 191:
case 3196:
case 2978:
case 780:
case 2658:
case 1015:
case 909:
case 2220:
case 3404:
case 2217:
case 2716:
case 3058:
case 3761:
case 140:
case 3028:
case 1977:
case 2038:
case 3293:
case 738:
case 2592:
case 568:
case 1066:
case 3907:
case 3157:
case 2952:
case 2278:
case 257:
case 27:
case 1766:
case 410:
case 3879:
case 3701:
case 3108:
case 4061:
case 2065:
case 2350:
case 2681:
case 1864:
case 272:
case 522:
case 2582:
case 487:
case 844:
case 3164:
case 11:
case 389:
case 1358:
case 3143:
case 3876:
case 3376:
case 2634:
case 183:
case 1891:
case 2689:
case 2103:
case 376:
case 399:
case 1818:
case 4026:
case 1372:
case 239:
case 832:
case 3541:
case 729:
case 3398:
case 1782:
case 1267:
case 404:
case 658:
case 996:
case 2204:
case 2477:
case 154:
case 3885:
case 726:
case 915:
case 162:
case 2005:
case 2938:
case 3274:
case 2597:
case 980:
case 3780:
case 3729:
case 4083:
case 580:
case 1001:
case 1557:
case 1551:
case 3941:
case 678:
case 631:
case 524:
case 1139:
case 1050:
case 1586:
case 153:
case 3928:
case 2727:
case 3432:
case 2951:
case 2797:
case 3791:
case 1637:
case 3867:
case 3049:
case 1283:
case 244:
case 2813:
case 3420:
case 674:
case 2833:
case 3526:
case 3922:
case 1906:
case 1733:
case 2086:
case 643:
case 872:
case 3926:
case 1186:
case 3006:
case 2568:
case 1188:
case 1155:
case 393:
case 2761:
case 2034:
case 3539:
case 1044:
case 2960:
case 3730:
case 3105:
case 2735:
case 4089:
case 3050:
case 4084:
case 2272:
case 3189:
case 2850:
case 545:
case 89:
case 1641:
case 2331:
case 2867:
case 720:
case 3704:
case 2736:
case 326:
case 595:
case 1388:
case 1784:
case 560:
case 2171:
case 2311:
case 3706:
case 1292:
case 569:
case 3492:
case 1695:
case 3695:
case 1781:
case 965:
case 3466:
case 2712:
case 2935:
case 37:
case 77:
case 3985:
case 341:
case 319:
case 1927:
case 2135:
case 425:
case 2874:
case 691:
case 1813:
case 3816:
case 3665:
case 696:
case 1763:
case 791:
case 2236:
case 2167:
case 3920:
case 848:
case 1814:
case 156:
case 1381:
case 400:
case 1097:
case 139:
case 1219:
case 3325:
case 437:
case 3347:
case 741:
case 3019:
case 3924:
case 3993:
case 964:
case 3655:
case 1576:
case 2079:
case 1453:
case 1304:
case 870:
case 3638:
case 799:
case 422:
case 440:
case 1411:
case 3426:
case 129:
case 1539:
case 908:
case 1990:
case 1082:
case 3318:
case 1429:
case 24:
case 1472:
case 3096:
case 747:
case 2864:
case 1970:
case 1487:
case 4010:
case 2058:
case 3935:
case 1474:
case 108:
case 2567:
case 2230:
case 248:
case 2263:
case 1191:
case 3700:
case 427:
case 1609:
case 543:
case 1737:
case 1735:
case 3478:
case 3077:
case 0:
case 53:
case 2931:
case 650:
case 3229:
case 3838:
case 2686:
case 2671:
case 2950:
case 3527:
case 1783:
case 2453:
case 3675:
case 3836:
case 3847:
case 537:
case 79:
case 725:
case 220:
case 1295:
case 2503:
case 1168:
case 548:
case 1114:
case 4075:
case 3753:
case 899:
case 3857:
case 1659:
case 1731:
case 1287:
case 1630:
case 2274:
case 2649:
case 2112:
case 2281:
case 1141:
case 1213:
case 3550:
case 1738:
case 740:
case 2105:
case 1812:
case 152:
case 2467:
case 3554:
case 1423:
case 2455:
case 1946:
case 2742:
case 2336:
case 1290:
case 3793:
case 1933:
case 3393:
case 787:
case 1672:
case 1268:
case 3963:
case 2375:
case 582:
case 1943:
case 796:
case 3613:
case 3972:
case 3723:
case 2572:
case 2800:
case 3726:
case 1640:
case 1498:
case 1254:
case 1465:
case 3263:
case 3142:
case 3724:
case 983:
case 3107:
case 1443:
case 3532:
case 2114:
case 1561:
case 3097:
case 3844:
case 62:
case 131:
case 3802:
case 3973:
case 3875:
case 212:
case 1497:
case 3790:
case 3474:
case 1461:
case 3475:
case 3992:
case 3581:
case 3319:
case 572:
case 3797:
case 2361:
case 1431:
case 2674:
case 1951:
case 2915:
case 221:
case 1027:
case 1072:
case 1797:
case 2051:
case 81:
case 3626:
case 15:
case 3066:
case 3488:
case 921:
case 3312:
case 2379:
case 3239:
case 14:
case 378:
case 1333:
case 2106:
case 1112:
case 1337:
case 2253:
case 995:
case 571:
case 3281:
case 2620:
case 2575:
case 2588:
case 3882:
case 3261:
case 1713:
case 2834:
case 403:
case 506:
case 3856:
case 3250:
case 1950:
case 467:
case 1748:
case 2195:
case 2387:
case 3027:
case 2297:
case 1233:
case 2395:
case 541:
case 2911:
case 1697:
case 2921:
case 1639:
case 3556:
case 2202:
case 516:
case 3880:
case 3280:
case 172:
case 3994:
case 2976:
case 781:
case 2462:
case 198:
case 2612:
case 2677:
case 3401:
case 2887:
case 1166:
case 1554:
case 2591:
case 821:
case 3511:
case 1503:
case 2839:
case 2702:
case 2644:
case 3148:
case 3197:
case 369:
case 1040:
case 2749:
case 2548:
case 2352:
case 2590:
case 4052:
case 1993:
case 1607:
case 2714:
case 2298:
case 4030:
case 414:
case 2418:
case 1648:
case 2374:
case 3715:
case 1859:
case 2798:
case 2977:
case 661:
case 177:
case 3688:
case 1494:
case 2173:
case 428:
case 897:
case 2878:
case 1478:
case 101:
case 3130:
case 1504:
case 173:
case 2654:
case 235:
case 1595:
case 3612:
case 953:
case 3758:
case 680:
case 421:
case 3735:
case 900:
case 1620:
case 384:
case 297:
case 2436:
case 1122:
case 2273:
case 2862:
case 2169:
case 3930:
case 1707:
case 4049:
case 2187:
case 3301:
case 169:
case 2668:
case 2153:
case 1999:
case 1391:
case 339:
case 472:
case 1938:
case 3858:
case 294:
case 2111:
case 979:
case 1247:
case 2927:
case 2176:
case 2541:
case 2670:
case 731:
case 894:
case 3120:
case 1809:
case 2795:
case 274:
case 97:
case 1416:
case 2556:
case 3306:
case 1345:
case 985:
case 2131:
case 93:
case 67:
case 3908:
case 3497:
case 112:
case 1834:
case 573:
case 3883:
case 3568:
case 1513:
case 769:
case 3013:
case 1144:
case 405:
case 3686:
case 2684:
case 2413:
case 3548:
case 3362:
case 2149:
case 1888:
case 3183:
case 3085:
case 689:
case 763:
case 3570:
case 2533:
case 2844:
case 2025:
case 3282:
case 3577:
case 3469:
case 635:
case 3490:
case 2353:
case 259:
case 876:
case 3348:
case 1171:
case 3464:
case 2275:
case 3359:
case 576:
case 1212:
case 3291:
case 2249:
case 3387:
case 1772:
case 1699:
case 851:
case 3855:
case 2458:
case 2389:
case 1020:
case 3152:
case 3808:
case 56:
case 1794:
case 1103:
case 2046:
case 1915:
case 351:
case 2606:
case 550:
case 1476:
case 2990:
case 1149:
case 2747:
case 719:
case 1625:
case 2460:
case 501:
case 3470:
case 1694:
case 3342:
case 618:
case 3377:
case 3175:
case 3586:
case 4008:
case 3294:
case 2151:
case 1743:
case 977:
case 3316:
case 882:
case 1447:
case 1359:
case 1096:
case 969:
case 577:
case 1597:
case 2696:
case 3204:
case 176:
case 533:
case 3815:
case 3051:
case 61:
case 3078:
case 155:
case 968:
case 2225:
case 2752:
case 4022:
case 3455:
case 2994:
case 2881:
case 4086:
case 1711:
case 1485:
case 1223:
case 2913:
case 1490:
case 201:
case 65:
case 1214:
case 1093:
case 3188:
case 2033:
case 3208:
case 2855:
case 919:
case 1612:
case 871:
case 1769:
case 2799:
case 3341:
case 1593:
case 679:
case 1680:
case 3696:
case 443:
case 3206:
case 1579:
case 3786:
case 3645:
case 3171:
case 4045:
case 846:
case 3087:
case 1533:
case 585:
case 2733:
case 3774:
case 834:
case 657:
case 2560:
case 913:
case 2657:
case 1439:
case 2142:
case 3016:
case 714:
case 1909:
case 2287:
case 2856:
case 2456:
case 2783:
case 3890:
case 3145:
case 2751:
case 1137:
case 3367:
case 2598:
case 2123:
case 171:
case 1756:
case 2160:
case 2130:
case 3433:
case 562:
case 815:
case 1215:
case 668:
case 1560:
case 90:
case 1647:
case 2212:
case 2488:
case 3862:
case 3672:
case 1235:
case 2801:
case 1053:
case 1045:
case 1890:
case 3953:
case 3800:
case 2984:
case 2283:
case 303:
case 3271:
case 3756:
case 2559:
case 4073:
case 1863:
case 214:
case 3503:
case 3530:
case 3502:
case 311:
case 2265:
case 2023:
case 3762:
case 3783:
case 3484:
case 819:
case 952:
case 2205:
case 880:
case 3147:
case 1311:
case 2110:
case 1800:
case 1330:
case 1172:
case 790:
case 3542:
case 1887:
case 3114:
case 3418:
case 1828:
case 2185:
case 3153:
case 3611:
case 1197:
case 219:
case 1317:
case 758:
case 3425:
case 1867:
case 306:
case 713:
case 3332:
case 3344:
case 3828:
case 412:
case 2643:
case 3609:
case 912:
case 2957:
case 2291:
case 2625:
case 2392:
case 3678:
case 982:
case 2793:
case 268:
case 463:
case 2666:
case 3118:
case 3818:
case 1923:
case 1061:
case 4059:
case 64:
case 148:
case 3533:
case 2845:
case 41:
case 2420:
case 3505:
case 601:
case 2824:
case 87:
case 845:
case 3073:
case 3083:
case 110:
case 2860:
case 1458:
case 3644:
case 2787:
case 3755:
case 1473:
case 2309:
case 2062:
case 1892:
case 3741:
case 1318:
case 3728:
case 1351:
case 3803:
case 2115:
case 649:
case 495:
case 2006:
case 715:
case 2004:
case 432:
case 251:
case 1577:
case 2136:
case 2450:
case 2517:
case 3887:
case 2660:
case 2771:
case 1129:
case 1449:
case 2697:
case 1542:
case 1747:
case 1386:
case 377:
case 993:
case 1546:
case 1013:
case 918:
case 1281:
case 1019:
case 2190:
case 771:
case 1821:
case 1023:
case 1775:
case 1440:
case 1691:
case 2595:
case 1261:
case 1435:
case 2402:
case 629:
case 2877:
case 2873:
case 1070:
case 3559:
case 945:
case 1010:
case 1008:
case 1874:
case 3287:
case 4050:
case 1089:
case 1842:
case 600:
case 3440:
case 599:
case 1897:
case 932:
case 963:
case 231:
case 2098:
case 906:
case 2605:
case 3575:
case 2732:
case 1947:
case 1608:
case 2785:
case 80:
case 2099:
case 610:
case 3534:
case 4051:
case 3413:
case 1353:
case 1719:
case 3974:
case 4044:
case 1987:
case 3162:
case 3851:
case 1278:
case 1451:
case 2109:
case 3712:
case 3193:
case 2842:
case 1482:
case 38:
case 3781:
case 1973:
case 644:
case 1246:
case 216:
case 505:
case 1323:
case 2665:
case 3623:
case 3810:
case 2231:
case 2337:
case 382:
case 3572:
case 759:
case 1537:
case 33:
case 4035:
case 1375:
case 2357:
case 1767:
case 3521:
case 3010:
case 1961:
case 1912:
case 914:
case 2525:
case 3891:
case 3652:
case 1258:
case 1939:
case 2410:
case 1145:
case 3977:
case 2619:
case 1165:
case 1790:
case 2346:
case 3190:
case 3218:
case 3410:
case 3666:
case 2009:
case 511:
case 2397:
case 1347:
case 1861:
case 1087:
case 2806:
case 2313:
case 1866:
case 2125:
case 3727:
case 1566:
case 204:
case 366:
case 3447:
case 933:
case 1728:
case 3716:
case 2922:
case 307:
case 2203:
case 1556:
case 1221:
case 3150:
case 1365:
case 1786:
case 3232:
case 641:
case 2721:
case 2132:
case 3656:
case 3912:
case 1160:
case 3966:
case 3217:
case 4048:
case 1844:
case 2775:
case 258:
case 3620:
case 753:
case 206:
case 2154:
case 1106:
case 737:
case 2201:
case 3745:
case 958:
case 1445:
case 1529:
case 4082:
case 1007:
case 1119:
case 1078:
case 3101:
case 215:
case 3471:
case 2487:
case 1376:
case 2992:
case 617:
case 1355:
case 3624:
case 959:
case 839:
case 1135:
case 858:
case 2194:
case 3283:
case 934:
case 3680:
case 1394:
case 2954:
case 813:
case 1776:
case 967:
case 2113:
case 1662:
case 28:
case 1079:
case 1201:
case 3506:
case 1116:
case 2964:
case 931:
case 3936:
case 2030:
case 2728:
case 2534:
case 3869:
case 1682:
case 337:
case 3178:
case 2052:
case 1932:
case 2857:
case 579:
case 1810:
case 3209:
case 2570:
case 592:
case 3643:
case 3499:
case 1058:
case 2437:
case 1085:
case 1501:
case 3889:
case 2256:
case 2207:
case 1853:
case 1846:
case 3952:
case 379:
case 3450:
case 2886:
case 1229:
case 3956:
case 3552:
case 2629:
case 693:
case 3324:
case 396:
case 3042:
case 2102:
case 492:
case 3033:
case 3267:
case 1606:
case 3639:
case 3958:
case 606:
case 941:
case 3159:
case 1162:
case 2018:
case 3285:
case 1610:
case 2526:
case 3446:
case 896:
case 3738:
case 1764:
case 847:
case 2085:
case 2267:
case 1741:
case 417:
case 1780:
case 1721:
case 310:
case 2896:
case 497:
case 2979:
case 3174:
case 3852:
case 3886:
case 468:
case 2068:
case 4036:
case 590:
case 1399:
case 3776:
case 3151:
case 31:
case 1241:
case 2295:
case 1617:
case 4034:
case 1057:
case 794:
case 822:
case 2713:
case 51:
case 1652:
case 2738:
case 3389:
case 1251:
case 504:
case 3268:
case 1687:
case 2550:
case 3381:
case 413:
case 3768:
case 3531:
case 2399:
case 3160:
case 1621:
case 2726:
case 2008:
case 1434:
case 2961:
case 1582:
case 1481:
case 3849:
case 2647:
case 926:
case 3984:
case 2380:
case 3472:
case 3529:
case 3176:
case 2859:
case 3955:
case 1211:
case 3951:
case 525:
case 1098:
case 1167:
case 2296:
case 2315:
case 3651:
case 2257:
case 2750:
case 675:
case 1969:
case 2128:
case 2650:
case 187:
case 1408:
case 1239:
case 3731:
case 3243:
case 164:
case 1426:
case 1907:
case 3663:
case 320:
case 2906:
case 966:
case 3430:
case 1038:
case 3493:
case 3370:
case 3248:
case 2602:
case 628:
case 3598:
case 1760:
case 2551:
case 373:
case 47:
case 1806:
case 1960:
case 3487:
case 4074:
case 4004:
case 331:
case 833:
case 1878:
case 1417:
case 776:
case 1164:
case 1354:
case 1675:
case 3454:
case 338:
case 3664:
case 2198:
case 3905:
case 1428:
case 1397:
case 3832:
case 2843:
case 2492:
case 1366:
case 2513:
case 103:
case 3580:
case 706:
case 869:
case 984:
case 1820:
case 1303:
case 2174:
case 455:
case 118:
case 1559:
case 3181:
case 466:
case 1470:
case 238:
case 765:
case 3837:
case 2546:
case 2042:
case 2618:
case 2303:
case 2518:
case 3020:
case 3898:
case 1540:
case 490:
case 16:
case 510:
case 1378:
case 301:
case 853:
case 1709:
case 6:
case 99:
case 1956:
case 3607:
case 2925:
case 1911:
case 1348:
case 2403:
case 2682:
case 1991:
case 681:
case 3736:
case 2215:
case 1896:
case 739:
case 4:
case 2330:
case 535:
case 180:
case 1677:
case 3954:
case 83:
case 3441:
case 241:
case 920:
case 814:
case 381:
case 3313:
case 3806:
case 1024:
case 2791:
case 1774:
case 1329:
case 2358:
case 1288:
case 2445:
case 2324:
case 3054:
case 1550:
case 547:
case 3385:
case 2884:
case 2237:
case 960:
case 3853:
case 1227:
case 2054:
case 2293:
case 3616:
case 174:
case 1777:
case 1873:
case 2730:
case 2482:
case 1523:
case 3368:
case 2055:
case 63:
case 1208:
case 3909:
case 2411:
case 2753:
case 1075:
case 2916:
case 1266:
case 3068:
case 4090:
case 1427:
case 189:
case 2124:
case 584:
case 296:
case 3384:
case 2443:
case 2302:
case 2723:
case 1885:
case 2213:
case 4028:
case 3881:
case 655:
case 603:
case 271:
case 3923:
case 3817:
case 1571:
case 290:
case 147:
case 2129:
case 2794:
case 1841:
case 3015:
case 3202:
case 1827:
case 2041:
case 3787:
case 481:
case 2944:
case 4065:
case 4020:
case 2342:
case 2406:
case 2200:
case 3604:
case 3336:
case 356:
case 1280:
case 2853:
case 3557:
case 3008:
case 3925:
case 2778:
case 1967:
case 3662:
case 1003:
case 1899:
case 1328:
case 2659:
case 1486:
case 1778:
case 1729:
case 1830:
case 3929:
case 92:
case 1000:
case 1489:
case 3590:
case 2759:
case 1724:
case 2637:
case 3981:
case 1309:
case 3459:
case 2145:
case 2661:
case 1839:
case 3899:
case 1886:
case 3999:
case 3538:
case 2031:
case 1234:
case 1749:
case 2043:
case 1380:
case 186:
case 305:
case 1240:
case 2804:
case 2549:
case 1236:
case 3545:
case 3773:
case 1953:
case 540:
case 1835:
case 3307:
case 122:
case 3219:
case 3297:
case 3357:
case 3200:
case 3702:
case 2233:
case 2762:
case 877:
case 1284:
case 2214:
case 350:
case 2429:
case 117:
case 800:
case 602:
case 3813:
case 1448:
case 141:
case 3683:
case 716:
case 3221:
case 3967:
case 2027:
case 3658:
case 1430:
case 1596:
case 1831:
case 1310:
case 881:
case 531:
case 2685:
case 4046:
case 2248:
case 1708:
case 831:
case 3576:
case 887:
case 3092:
case 2755:
case 2626:
case 1740:
case 902:
case 3169:
case 199:
case 1585:
case 3435:
case 2907:
case 1616:
case 1893:
case 3968:
case 2172:
case 304:
case 424:
case 1643:
case 2037:
case 2779:
case 71:
case 2002:
case 2369:
case 1104:
case 2828:
case 2796:
case 837:
case 1710:
case 3098:
case 2343:
case 2547:
case 1635:
case 474:
case 1492:
case 3970:
case 1629:
case 520:
case 449:
case 564:
case 975:
case 2786:
case 3578:
case 1594:
case 185:
case 2694:
case 2967:
case 1016:
case 178:
case 1063:
case 3215:
case 2498:
case 1471:
case 936:
case 3987:
case 3434:
case 1660:
case 1860:
case 803:
case 1849:
case 1228:
case 102:
case 733:
case 2641:
case 849:
case 889:
case 1042:
case 478:
case 1456:
case 230:
case 3843:
case 1876:
case 3361:
case 1676:
case 614:
case 1273:
case 2542:
case 1815:
case 423:
case 3948:
case 3412:
case 1460:
case 3547:
case 277:
case 3:
case 49:
case 494:
case 3467:
case 2175:
case 3596:
case 254:
case 1084:
case 3227:
case 2011:
case 454:
case 1980:
case 3089:
case 1836:
case 2872:
case 2610:
case 223:
case 498:
case 1545:
case 3916:
case 1390:
case 698:
case 485:
case 2829:
case 4093:
case 2141:
case 150:
case 946:
case 3095:
case 3669:
case 615:
case 1633:
case 2520:
case 1854:
case 3030:
case 2508:
case 386:
case 928:
case 708:
case 1602:
case 3479:
case 3617:
case 1146:
case 3687:
case 3040:
case 3689:
case 2156:
case 1910:
case 1965:
case 1592:
case 135:
case 3649:
case 2433:
case 114:
case 23:
case 2479:
case 3585:
case 3329:
case 3246:
case 459:
case 1511:
case 3113:
case 1847:
case 3640:
case 2826:
case 1203:
case 1421:
case 883:
case 3356:
case 990:
case 22:
case 471:
case 692:
case 3597:
case 927:
case 852:
case 355:
case 3861:
case 84:
case 707:
case 527:
case 20:
case 988:
case 3734:
case 3845:
case 620:
case 3660:
case 890:
case 760:
case 228:
case 2996:
case 1225:
case 358:
case 46:
case 2553:
case 72:
case 1306:
case 2924:
case 1393:
case 850:
case 710:
case 465:
case 2162:
case 892:
case 1717:
case 2143:
case 1272:
case 1649:
case 1628:
case 2419:
case 779:
case 1903:
case 3764:
case 973:
case 3211:
case 2982:
case 4057:
case 1644:
case 2431:
case 2259:
case 507:
case 1872:
case 3498:
case 1952:
case 1173:
case 2871:
case 2184:
case 2722:
case 1121:
case 2900:
case 1758:
case 3788:
case 3304:
case 736:
case 1206:
case 3278:
case 3910:
case 1972:
case 2718:
case 4060:
case 785:
case 115:
case 116:
case 2849:
case 2854:
case 2446:
case 3591:
case 2465:
case 2117:
case 3796:
case 1898:
case 282:
case 3535:
case 2571:
case 1134:
case 3978:
case 2811:
case 2258:
case 3485:
case 3213:
case 1725:
case 2226:
case 3228:
case 1140:
case 1914:
case 546:
case 1986:
case 1525:
case 3489:
case 2895:
case 3207:
case 1762:
case 1742:
case 273:
case 411:
case 1438:
case 1312:
case 3340:
case 383:
case 2673:
case 3038:
case 2335:
case 2024:
case 3022:
case 2897:
case 2627:
case 1598:
case 1919:
case 1949:
case 1148:
case 1362:
case 2609:
case 4002:
case 2841:
case 3468:
case 1902:
case 2651:
case 1402:
case 2048:
case 2137:
case 2880:
case 4033:
case 2227:
case 3115:
case 489:
case 1370:
case 1692:
case 1455:
case 4058:
case 1263:
case 1405:
case 3748:
case 948:
case 1369:
case 57:
case 2564:
case 3241:
case 1684:
case 1858:
case 1590:
case 3245:
case 3519:
case 1998:
case 1908:
case 3201:
case 247:
case 633:
case 392:
case 1565:
case 703:
case 3894:
case 1340:
case 1175:
case 994:
case 3060:
case 2986:
case 3186:
case 1761:
case 3915:
case 119:
case 2347:
case 3039:
case 2148:
case 1151:
case 3088:
case 1916:
case 3871:
case 2049:
case 697:
case 2421:
case 2683:
case 2317:
case 2454:
case 947:
case 2825:
case 3769:
case 3025:
case 3458:
case 2861:
case 1509:
case 1901:
case 1036:
case 2222:
case 3003:
case 1307:
case 611:
case 1143:
case 2599:
case 3520:
case 2289:
case 2868:
case 2946:
case 1154:
case 2656:
case 2121:
case 2170:
case 2166:
case 3279:
case 1962:
case 357:
case 3296:
case 1031:
case 336:
case 745:
case 3822:
case 938:
case 2999:
case 394:
case 1958:
case 3069:
case 4040:
case 2394:
case 3071:
case 3650:
case 3141:
case 2440:
case 2430:
case 3901:
case 1047:
case 35:
case 4063:
case 2586:
case 353:
case 275:
case 202:
case 3635:
case 3451:
case 2341:
case 2480:
case 2396:
case 2300:
case 3854:
case 2168:
case 2767:
case 2270:
case 622:
case 695:
case 3962:
case 3117:
case 2495:
case 859:
case 2965:
case 3792:
case 1516:
case 2596:
case 3648:
case 2228:
case 3676:
case 1895:
case 2497:
case 2803:
case 2948:
case 1409:
case 1118:
case 1880:
case 1855:
case 3236:
case 2563:
case 3299:
case 3601:
case 2561:
case 3717:
case 930:
case 2308:
case 182:
case 1567:
case 2875:
case 3508:
case 1109:
case 1107:
case 1964:
case 1636:
case 2441:
case 2304:
case 3622:
case 3569:
case 19:
case 3053:
case 3692:
case 2064:
case 651:
case 451:
case 1688:
case 1524:
case 981:
case 2434:
case 1319:
case 1350:
case 2640:
case 1117:
case 2995:
case 586:
case 2691:
case 1789:
case 3677:
case 2035:
case 840:
case 3104:
case 3226:
case 36:
case 2251:
case 2773:
case 2879:
case 3292:
case 364:
case 2087:
case 1270:
case 1130:
case 1522:
case 3839:
case 2502:
case 2587:
case 885:
case 935:
case 748:
case 3445:
case 2823:
case 2507:
case 3409:
case 1189:
case 916:
case 1105:
case 2345:
case 2351:
case 362:
case 1463:
case 2642:
case 2150:
case 1297:
case 1808:
case 1379:
case 2530:
case 1634:
case 2577:
case 2529:
case 3634:
case 245:
case 528:
case 659:
case 634:
case 2708:
case 1108:
case 549:
case 4025:
case 621:
case 1159:
case 1882:
case 2012:
case 2120:
case 2464:
case 1536:
case 1502:
case 1056:
case 2238:
case 3558:
case 3921:
case 1664:
case 159:
case 270:
case 970:
case 3997:
case 2017:
case 2562:
case 3933:
case 1209:
case 2956:
case 3564:
case 1158:
case 3065:
case 795:
case 3388:
case 314:
case 360:
case 2475:
case 227:
case 281:
case 73:
case 3014:
case 3099:
case 1693:
case 3546:
case 3600:
case 626:
case 1462:
case 1083:
case 3829:
case 2157:
case 224:
case 1881:
case 1432:
case 2333:
case 1650:
case 2780:
case 3944:
case 1541:
case 836:
case 1006:
case 2623:
case 3414:
case 2334:
case 3337:
case 2400:
case 3740:
case 3718:
case 998:
case 3846:
case 1931:
case 4067:
case 616:
case 3500:
case 213:
case 236:
case 2955:
case 3841:
case 288:
case 2439:
case 944:
case 3249:
case 484:
case 3125:
case 2700:
case 1029:
case 1851:
case 1877:
case 551:
case 3599:
case 2923:
case 3777:
case 1670:
case 3317:
case 2531:
case 181:
case 2630:
case 85:
case 3565:
case 1327:
case 2177:
case 3103:
case 1499:
case 949:
case 2044:
case 3938:
case 2092:
case 2711:
case 3775:
case 477:
case 1913:
case 3934:
case 2928:
case 2060:
case 508:
case 3602:
case 1918:
case 3632:
case 1723:
case 2140:
case 3260:
case 2680:
case 3380:
case 3918:
case 1816:
case 3693:
case 3615:
case 3045:
case 1822:
case 3047:
case 1407:
case 682:
case 3582:
case 1930:
case 2422:
case 3334:
case 3035:
case 2890:
case 3373:
case 2463:
case 687:
case 2846:
case 419:
case 2118:
case 2540:
case 1978:
case 3964:
case 1469:
case 1183:
case 3002:
case 2991:
case 2229:
case 820:
case 2758:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1731592802/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,];
var gg_b = "1731592802/";

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
