// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

const domain2 = 'gold-usergeneratedcontent.net';

function create_download_url(id) {
  return "https://ltn.gold-usergeneratedcontent.net/galleries/" + id + ".js";
}

function gg_s(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); }

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
case 3394:
case 3572:
case 137:
case 2105:
case 3031:
case 1723:
case 1569:
case 1063:
case 2802:
case 122:
case 1609:
case 1011:
case 907:
case 991:
case 3106:
case 1831:
case 478:
case 1530:
case 3740:
case 2379:
case 837:
case 3193:
case 3315:
case 3148:
case 3617:
case 3994:
case 197:
case 3169:
case 1632:
case 1666:
case 2934:
case 1455:
case 2839:
case 101:
case 1221:
case 883:
case 1903:
case 2443:
case 1506:
case 2754:
case 303:
case 2498:
case 931:
case 682:
case 1875:
case 760:
case 2798:
case 3781:
case 3130:
case 1935:
case 381:
case 2916:
case 3670:
case 2743:
case 4075:
case 2076:
case 2860:
case 2190:
case 1593:
case 2979:
case 1548:
case 2280:
case 1718:
case 3664:
case 481:
case 3915:
case 2807:
case 2601:
case 1755:
case 224:
case 674:
case 3608:
case 1986:
case 235:
case 1402:
case 1644:
case 1927:
case 1210:
case 26:
case 214:
case 452:
case 1653:
case 3269:
case 3646:
case 2040:
case 795:
case 1121:
case 2157:
case 2823:
case 3889:
case 1322:
case 812:
case 1774:
case 2129:
case 2141:
case 1386:
case 2351:
case 273:
case 1707:
case 1439:
case 1898:
case 1168:
case 2233:
case 295:
case 3856:
case 2342:
case 3419:
case 4054:
case 1843:
case 2475:
case 708:
case 1760:
case 3719:
case 1959:
case 3521:
case 1460:
case 2775:
case 2038:
case 3206:
case 1056:
case 3098:
case 2624:
case 243:
case 1407:
case 1739:
case 522:
case 3043:
case 3540:
case 3710:
case 1291:
case 3155:
case 1950:
case 358:
case 1469:
case 3345:
case 1382:
case 3829:
case 3924:
case 3647:
case 1678:
case 2263:
case 202:
case 458:
case 616:
case 2346:
case 2156:
case 1730:
case 1029:
case 2120:
case 1041:
case 994:
case 33:
case 2728:
case 721:
case 3410:
case 1926:
case 1523:
case 118:
case 1793:
case 1748:
case 2049:
case 2684:
case 1140:
case 484:
case 804:
case 3324:
case 2021:
case 3704:
case 3581:
case 2598:
case 2761:
case 2946:
case 129:
case 1387:
case 3239:
case 3642:
case 1685:
case 915:
case 1276:
case 702:
case 39:
case 829:
case 2299:
case 3477:
case 818:
case 3857:
case 104:
case 2658:
case 3373:
case 753:
case 641:
case 925:
case 3901:
case 406:
case 2869:
case 306:
case 330:
case 828:
case 504:
case 3468:
case 1828:
case 1695:
case 128:
case 2531:
case 1614:
case 2912:
case 3890:
case 1965:
case 2072:
case 518:
case 1240:
case 3768:
case 2588:
case 211:
case 2830:
case 980:
case 3107:
case 3028:
case 186:
case 119:
case 342:
case 3634:
case 2077:
case 3061:
case 3805:
case 4013:
case 3749:
case 2806:
case 390:
case 711:
case 3519:
case 2370:
case 3721:
case 1997:
case 2575:
case 1861:
case 1667:
case 3449:
case 2312:
case 1005:
case 1365:
case 459:
case 3218:
case 1560:
case 359:
case 2163:
case 1574:
case 2111:
case 1600:
case 1281:
case 1507:
case 2145:
case 3400:
case 720:
case 1886:
case 2657:
case 3212:
case 2355:
case 593:
case 3356:
case 1232:
case 1266:
case 1621:
case 1827:
case 1343:
case 2842:
case 3146:
case 2471:
case 3767:
case 4027:
case 21:
case 3086:
case 1144:
case 785:
case 3700:
case 747:
case 3108:
case 3027:
case 2085:
case 4086:
case 67:
case 2923:
case 3270:
case 952:
case 2796:
case 1779:
case 3762:
case 2078:
case 1434:
case 162:
case 533:
case 3553:
case 285:
case 3414:
case 3956:
case 4059:
case 3022:
case 5:
case 2403:
case 1546:
case 1716:
case 764:
case 3795:
case 1954:
case 2273:
case 3495:
case 277:
case 2496:
case 220:
case 3436:
case 3462:
case 2323:
case 2641:
case 2847:
case 3117:
case 670:
case 3648:
case 1564:
case 833:
case 2339:
case 3485:
case 1570:
case 1871:
case 3606:
case 1512:
case 3785:
case 2565:
case 1742:
case 562:
case 1988:
case 2000:
case 1109:
case 2374:
case 640:
case 133:
case 431:
case 3963:
case 3566:
case 3911:
case 1:
case 2605:
case 72:
case 1610:
case 187:
case 22:
case 3894:
case 3164:
case 2095:
case 978:
case 893:
case 1747:
case 2939:
case 2062:
case 2302:
case 1015:
case 4035:
case 875:
case 2759:
case 692:
case 1058:
case 3630:
case 1975:
case 3170:
case 2459:
case 845:
case 2245:
case 710:
case 3509:
case 2816:
case 391:
case 307:
case 1094:
case 948:
case 1132:
case 3858:
case 1672:
case 1896:
case 887:
case 2879:
case 3815:
case 1447:
case 2907:
case 1253:
case 3003:
case 2422:
case 3311:
case 3674:
case 3134:
case 2450:
case 3500:
case 3065:
case 3305:
case 959:
case 65:
case 2726:
case 2787:
case 4065:
case 3567:
case 568:
case 2066:
case 2032:
case 2284:
case 2870:
case 3092:
case 2571:
case 3660:
case 605:
case 1114:
case 1361:
case 1619:
case 2812:
case 1195:
case 3425:
case 50:
case 2115:
case 1162:
case 1892:
case 869:
case 2348:
case 3333:
case 555:
case 2426:
case 196:
case 1285:
case 3639:
case 942:
case 1534:
case 2611:
case 2009:
case 3905:
case 2482:
case 480:
case 800:
case 380:
case 2906:
case 3744:
case 3453:
case 3514:
case 1691:
case 1897:
case 1328:
case 3753:
case 1961:
case 3602:
case 425:
case 3390:
case 1913:
case 1516:
case 1073:
case 3595:
case 698:
case 2330:
case 906:
case 2993:
case 1408:
case 1579:
case 2948:
case 136:
case 2025:
case 3087:
case 2586:
case 3732:
case 4026:
case 1464:
case 3824:
case 3941:
case 1470:
case 500:
case 536:
case 699:
case 2765:
case 2527:
case 315:
case 3380:
case 1681:
case 2465:
case 1770:
case 984:
case 1178:
case 1638:
case 1200:
case 3050:
case 650:
case 3618:
case 2492:
case 1267:
case 3357:
case 3466:
case 3655:
case 1826:
case 10:
case 1295:
case 1417:
case 2383:
case 3845:
case 3341:
case 3623:
case 868:
case 155:
case 1262:
case 3352:
case 596:
case 3709:
case 93:
case 394:
case 2258:
case 1185:
case 3279:
case 3737:
case 1045:
case 855:
case 2797:
case 2294:
case 569:
case 2808:
case 2184:
case 1640:
case 80:
case 958:
case 2053:
case 1547:
case 703:
case 1891:
case 3316:
case 456:
case 3241:
case 2283:
case 360:
case 629:
case 2811:
case 571:
case 1002:
case 1362:
case 278:
case 3252:
case 1489:
case 2193:
case 3379:
case 3133:
case 3673:
case 2358:
case 541:
case 3334:
case 2440:
case 3091:
case 2394:
case 2572:
case 604:
case 3802:
case 1967:
case 1995:
case 3076:
case 2738:
case 4019:
case 3743:
case 2130:
case 3513:
case 2781:
case 2504:
case 588:
case 1533:
case 3601:
case 3280:
case 4076:
case 3979:
case 2075:
case 3874:
case 2958:
case 3839:
case 3934:
case 1060:
case 2169:
case 889:
case 409:
case 1876:
case 1692:
case 1074:
case 1720:
case 309:
case 1456:
case 1914:
case 1007:
case 1819:
case 1367:
case 3257:
case 3443:
case 985:
case 3488:
case 3040:
case 3431:
case 2646:
case 826:
case 1378:
case 308:
case 779:
case 2889:
case 252:
case 888:
case 3823:
case 3347:
case 1682:
case 947:
case 1411:
case 977:
case 1711:
case 3290:
case 188:
case 3951:
case 414:
case 3788:
case 3180:
case 1985:
case 3731:
case 1552:
case 126:
case 4038:
case 3205:
case 2521:
case 141:
case 854:
case 2719:
case 2043:
case 3624:
case 3947:
case 2098:
case 2206:
case 2384:
case 1557:
case 1650:
case 2776:
case 1213:
case 1626:
case 3855:
case 373:
case 1261:
case 2054:
case 3351:
case 2476:
case 752:
case 2183:
case 279:
case 1580:
case 2248:
case 964:
case 3475:
case 3152:
case 841:
case 2419:
case 1687:
case 1881:
case 2856:
case 4068:
case 601:
case 1154:
case 784:
case 697:
case 446:
case 1083:
case 1589:
case 346:
case 2202:
case 2410:
case 2924:
case 551:
case 2841:
case 2647:
case 3883:
case 1231:
case 882:
case 402:
case 1288:
case 2540:
case 1143:
case 683:
case 3211:
case 302:
case 3299:
case 2477:
case 29:
case 1944:
case 2404:
case 1821:
case 1627:
case 823:
case 637:
case 2642:
case 3413:
case 1325:
case 1849:
case 1686:
case 2651:
case 3189:
case 1275:
case 2123:
case 3908:
case 2324:
case 321:
case 1733:
case 1405:
case 2945:
case 2260:
case 2274:
case 513:
case 567:
case 3946:
case 284:
case 3543:
case 1953:
case 421:
case 311:
case 3830:
case 2768:
case 1309:
case 3912:
case 1069:
case 2890:
case 3531:
case 1511:
case 1741:
case 523:
case 1729:
case 2174:
case 242:
case 113:
case 2107:
case 411:
case 759:
case 3869:
case 272:
case 3615:
case 867:
case 813:
case 2679:
case 1030:
case 1872:
case 1696:
case 1452:
case 1635:
case 1175:
case 2223:
case 612:
case 1337:
case 2218:
case 706:
case 1671:
case 961:
case 2449:
case 3312:
case 453:
case 174:
case 844:
case 1804:
case 2421:
case 1243:
case 1457:
case 353:
case 1332:
case 259:
case 3917:
case 2805:
case 2301:
case 3364:
case 1757:
case 1599:
case 3220:
case 2973:
case 2576:
case 3077:
case 1048:
case 1093:
case 1480:
case 4004:
case 2519:
case 2749:
case 144:
case 290:
case 851:
case 3806:
case 3680:
case 2320:
case 364:
case 2264:
case 2086:
case 3587:
case 2767:
case 2270:
case 550:
case 2884:
case 464:
case 2108:
case 973:
case 1524:
case 3355:
case 2212:
case 1265:
case 3851:
case 3318:
case 1940:
case 943:
case 2400:
case 600:
case 3471:
case 599:
case 2467:
case 3842:
case 1381:
case 2356:
case 1187:
case 2920:
case 15:
case 2714:
case 2217:
case 3703:
case 2436:
case 1415:
case 3847:
case 3323:
case 838:
case 2683:
case 320:
case 105:
case 1126:
case 3496:
case 377:
case 2059:
case 485:
case 805:
case 138:
case 3078:
case 2736:
case 1715:
case 3582:
case 2762:
case 3124:
case 1494:
case 3918:
case 1938:
case 539:
case 1047:
case 2022:
case 1981:
case 2553:
case 385:
case 1250:
case 3224:
case 231:
case 60:
case 538:
case 2911:
case 3605:
case 2532:
case 2963:
case 2566:
case 3067:
case 655:
case 2071:
case 3339:
case 3486:
case 1501:
case 3173:
case 410:
case 2117:
case 2399:
case 1800:
case 2693:
case 55:
case 1376:
case 1613:
case 707:
case 2485:
case 505:
case 1661:
case 1319:
case 2112:
case 1628:
case 1895:
case 207:
case 1391:
case 3816:
case 291:
case 2509:
case 598:
case 4014:
case 3459:
case 1034:
case 866:
case 2669:
case 2246:
case 2003:
case 2815:
case 1836:
case 1192:
case 1862:
case 3879:
case 3974:
case 2035:
case 1016:
case 3939:
case 3834:
case 956:
case 899:
case 3095:
case 1976:
case 3101:
case 1573:
case 2630:
case 960:
case 2170:
case 3759:
case 3062:
case 3036:
case 3302:
case 1135:
case 2116:
case 1675:
case 1377:
case 3487:
case 3812:
case 2990:
case 1286:
case 1064:
case 2251:
case 1070:
case 817:
case 1227:
case 1866:
case 3426:
case 3750:
case 3699:
case 3115:
case 4066:
case 3969:
case 2065:
case 1012:
case 3194:
case 570:
case 163:
case 1424:
case 2500:
case 1972:
case 3450:
case 2134:
case 3571:
case 3870:
case 3066:
case 3032:
case 3284:
case 2567:
case 14:
case 4037:
case 1809:
case 1017:
case 2753:
case 2602:
case 2536:
case 225:
case 1558:
case 3596:
case 1259:
case 3817:
case 3611:
case 357:
case 2873:
case 84:
case 2453:
case 592:
case 2247:
case 2744:
case 1222:
case 1631:
case 911:
case 3503:
case 2050:
case 1643:
case 1698:
case 3656:
case 2466:
case 1701:
case 3492:
case 2618:
case 1271:
case 2941:
case 2929:
case 675:
case 54:
case 3792:
case 693:
case 1968:
case 3527:
case 3765:
case 2952:
case 1654:
case 3294:
case 734:
case 28:
case 127:
case 3559:
case 2578:
case 2737:
case 170:
case 563:
case 976:
case 3808:
case 1773:
case 2341:
case 3044:
case 2845:
case 2279:
case 3497:
case 633:
case 827:
case 3258:
case 1368:
case 1008:
case 2709:
case 2437:
case 140:
case 3846:
case 294:
case 2352:
case 4044:
case 1853:
case 923:
case 557:
case 3643:
case 2770:
case 3698:
case 3825:
case 3349:
case 70:
case 392:
case 2267:
case 2764:
case 3584:
case 1492:
case 3271:
case 2551:
case 768:
case 2850:
case 1792:
case 3968:
case 2712:
case 1797:
case 327:
case 1294:
case 3844:
case 3921:
case 4046:
case 3949:
case 2045:
case 370:
case 561:
case 2547:
case 1053:
case 268:
case 3203:
case 2640:
case 1044:
case 1383:
case 2295:
case 3473:
case 20:
case 982:
case 3127:
case 3368:
case 1258:
case 340:
case 1846:
case 2236:
case 3853:
case 2262:
case 944:
case 3135:
case 3377:
case 2001:
case 2361:
case 3304:
case 3064:
case 3227:
case 4064:
case 1426:
case 3866:
case 1115:
case 1393:
case 1969:
case 363:
case 3424:
case 1864:
case 3972:
case 2114:
case 951:
case 3103:
case 463:
case 1870:
case 1032:
case 1284:
case 34:
case 2073:
case 3809:
case 2746:
case 2913:
case 1535:
case 2961:
case 3904:
case 1782:
case 200:
case 3745:
case 857:
case 2579:
case 1948:
case 3310:
case 3558:
case 44:
case 1993:
case 1817:
case 1009:
case 3445:
case 913:
case 2100:
case 3259:
case 1482:
case 796:
case 3372:
case 2328:
case 2167:
case 37:
case 2691:
case 3688:
case 3222:
case 3837:
case 2446:
case 810:
case 547:
case 1727:
case 1224:
case 3484:
case 1605:
case 233:
case 1307:
case 585:
case 1592:
case 339:
case 1486:
case 916:
case 1339:
case 3287:
case 1633:
case 2225:
case 3501:
case 2564:
case 3784:
case 2375:
case 2871:
case 2677:
case 3613:
case 3319:
case 1960:
case 3165:
case 2388:
case 3034:
case 4034:
case 1014:
case 293:
case 3192:
case 1879:
case 634:
case 2244:
case 564:
case 2747:
case 51:
case 1095:
case 733:
case 2610:
case 3976:
case 12:
case 4079:
case 7:
case 2975:
case 1597:
case 2058:
case 1690:
case 466:
case 3919:
case 1302:
case 1036:
case 4016:
case 2803:
case 2354:
case 1085:
case 3042:
case 680:
case 3265:
case 2886:
case 1318:
case 941:
case 2153:
case 81:
case 3885:
case 2827:
case 498:
case 864:
case 3381:
case 2649:
case 2266:
case 926:
case 3187:
case 35:
case 885:
case 2954:
case 1435:
case 1652:
case 2822:
case 3415:
case 1641:
case 305:
case 2734:
case 120:
case 3458:
case 177:
case 3297:
case 820:
case 2434:
case 1955:
case 3150:
case 262:
case 3494:
case 3340:
case 1796:
case 3938:
case 2943:
case 2546:
case 2716:
case 438:
case 185:
case 467:
case 1072:
case 1588:
case 521:
case 2614:
case 97:
case 3309:
case 679:
case 3069:
case 2965:
case 1531:
case 3511:
case 2783:
case 219:
case 313:
case 2992:
case 367:
case 2090:
case 1869:
case 2636:
case 1658:
case 3696:
case 3872:
case 2695:
case 3175:
case 1970:
case 3337:
case 3780:
case 2560:
case 3131:
case 3671:
case 3877:
case 351:
case 2813:
case 2005:
case 374:
case 2365:
case 3804:
case 3298:
case 2281:
case 153:
case 2507:
case 917:
case 1111:
case 963:
case 2600:
case 1893:
case 444:
case 1917:
case 1004:
case 3757:
case 786:
case 3599:
case 4048:
case 1077:
case 1220:
case 3048:
case 728:
case 3093:
case 652:
case 2997:
case 1370:
case 546:
case 1806:
case 1728:
case 940:
case 3344:
case 482:
case 3083:
case 1120:
case 2926:
case 718:
case 2052:
case 603:
case 1068:
case 1883:
case 2469:
case 2382:
case 932:
case 3143:
case 3868:
case 102:
case 3659:
case 1211:
case 927:
case 1346:
case 3790:
case 2138:
case 553:
case 648:
case 2276:
case 3520:
case 1461:
case 3944:
case 3849:
case 2706:
case 1554:
case 2387:
case 1413:
case 2326:
case 204:
case 1189:
case 2493:
case 2080:
case 1908:
case 2555:
case 1049:
case 1684:
case 511:
case 2748:
case 2350:
case 218:
case 2793:
case 2057:
case 323:
case 3556:
case 1761:
case 3953:
case 1040:
case 814:
case 2359:
case 1431:
case 835:
case 108:
case 2653:
case 1823:
case 1347:
case 3463:
case 2322:
case 3411:
case 938:
case 509:
case 3711:
case 1290:
case 2583:
case 1951:
case 3529:
case 905:
case 114:
case 1788:
case 16:
case 1942:
case 2644:
case 95:
case 659:
case 2089:
case 1731:
case 3552:
case 135:
case 3055:
case 2959:
case 1205:
case 3978:
case 2854:
case 341:
case 143:
case 2407:
case 1947:
case 873:
case 3557:
case 2056:
case 1081:
case 212:
case 3650:
case 3799:
case 1038:
case 1855:
case 2204:
case 843:
case 471:
case 560:
case 173:
case 2439:
case 3261:
case 1818:
case 2020:
case 2774:
case 1152:
case 3838:
case 371:
case 1342:
case 2843:
case 556:
case 2898:
case 3881:
case 2168:
case 3687:
case 1233:
case 195:
case 2625:
case 2530:
case 3113:
case 3891:
case 2888:
case 1241:
case 1229:
case 573:
case 797:
case 156:
case 3336:
case 595:
case 3362:
case 1379:
case 966:
case 684:
case 2268:
case 1673:
case 69:
case 1334:
case 1105:
case 3900:
case 3314:
case 222:
case 2303:
case 416:
case 809:
case 3420:
case 2099:
case 3995:
case 1860:
case 1076:
case 722:
case 2935:
case 3039:
case 1743:
case 1798:
case 3756:
case 1561:
case 737:
case 283:
case 3936:
case 2548:
case 514:
case 389:
case 1874:
case 56:
case 63:
case 1839:
case 201:
case 2221:
case 4007:
case 2249:
case 2666:
case 508:
case 2455:
case 3876:
case 3692:
case 3074:
case 4060:
case 3720:
case 1498:
case 3456:
case 3914:
case 3665:
case 1257:
case 2903:
case 1443:
case 3007:
case 732:
case 904:
case 1087:
case 1824:
case 2654:
case 3470:
case 1026:
case 3712:
case 134:
case 115:
case 1380:
case 3412:
case 2349:
case 2698:
case 929:
case 3024:
case 3770:
case 2643:
case 3178:
case 3638:
case 2159:
case 3200:
case 2271:
case 1618:
case 3764:
case 4024:
case 2584:
case 3267:
case 1655:
case 292:
case 1151:
case 30:
case 2473:
case 3295:
case 3417:
case 1845:
case 3882:
case 1341:
case 1623:
case 455:
case 3236:
case 2853:
case 3262:
case 355:
case 1709:
case 1437:
case 240:
case 194:
case 2296:
case 2368:
case 1142:
case 1980:
case 3185:
case 2949:
case 3045:
case 270:
case 1082:
case 1234:
case 2844:
case 227:
case 2773:
case 2203:
case 1957:
case 3547:
case 3717:
case 610:
case 58:
case 2424:
case 1065:
case 2012:
case 1305:
case 74:
case 1725:
case 3114:
case 620:
case 1660:
case 2304:
case 2064:
case 1251:
case 3001:
case 3619:
case 3361:
case 3865:
case 2135:
case 2675:
case 3136:
case 3676:
case 2196:
case 1333:
case 1179:
case 1639:
case 3285:
case 2372:
case 1873:
case 919:
case 61:
case 3278:
case 3534:
case 2445:
case 1905:
case 2631:
case 2837:
case 180:
case 2171:
case 3446:
case 1453:
case 2688:
case 3691:
case 3167:
case 928:
case 3328:
case 2904:
case 1444:
case 3961:
case 3913:
case 3516:
case 400:
case 2809:
case 1390:
case 2017:
case 3746:
case 1595:
case 2558:
case 515:
case 3579:
case 4073:
case 300:
case 1536:
case 1693:
case 1648:
case 3564:
case 2784:
case 2287:
case 3451:
case 1485:
case 831:
case 2197:
case 2319:
case 2661:
case 2613:
case 3570:
case 3871:
case 3931:
case 131:
case 3988:
case 2991:
case 2250:
case 3109:
case 239:
case 766:
case 1532:
case 1963:
case 2484:
case 1164:
case 3610:
case 387:
case 2976:
case 2573:
case 3517:
case 4015:
case 739:
case 1778:
case 1537:
case 3803:
case 2919:
case 1096:
case 3058:
case 1630:
case 2282:
case 1509:
case 922:
case 107:
case 3388:
case 2628:
case 2895:
case 2165:
case 3896:
case 3672:
case 1003:
case 1363:
case 393:
case 3447:
case 2182:
case 3886:
case 912:
case 591:
case 3232:
case 2381:
case 1467:
case 3343:
case 3827:
case 3153:
case 2292:
case 1264:
case 1086:
case 657:
case 1884:
case 2042:
case 1027:
case 1989:
case 2340:
case 1762:
case 3434:
case 1059:
case 362:
case 3209:
case 2981:
case 1414:
case 1956:
case 1795:
case 2878:
case 3954:
case 3416:
case 1217:
case 2187:
case 3668:
case 1920:
case 25:
case 2794:
case 3508:
case 2297:
case 2458:
case 1683:
case 1462:
case 2696:
case 1139:
case 900:
case 2030:
case 1901:
case 3176:
case 842:
case 172:
case 3502:
case 4090:
case 2337:
case 130:
case 2635:
case 3119:
case 3397:
case 774:
case 1468:
case 328:
case 2752:
case 1160:
case 830:
case 486:
case 419:
case 1768:
case 1591:
case 213:
case 1107:
case 3992:
case 1028:
case 1174:
case 3783:
case 2932:
case 872:
case 2966:
case 2511:
case 428:
case 2741:
case 53:
case 608:
case 996:
case 2254:
case 1301:
case 1805:
case 767:
case 1102:
case 3997:
case 2480:
case 3191:
case 2188:
case 2804:
case 2909:
case 3005:
case 1449:
case 274:
case 3365:
case 251:
case 1255:
case 2131:
case 2671:
case 1218:
case 3560:
case 3574:
case 3392:
case 3238:
case 635:
case 4005:
case 3507:
case 2006:
case 2332:
case 2366:
case 2288:
case 1540:
case 1472:
case 1829:
case 3469:
case 2231:
case 1924:
case 1647:
case 1841:
case 3678:
case 865:
case 3181:
case 2868:
case 624:
case 2143:
case 3029:
case 2925:
case 2083:
case 4052:
case 2154:
case 955:
case 1772:
case 1202:
case 3052:
case 3769:
case 609:
case 2589:
case 90:
case 858:
case 282:
case 782:
case 3793:
case 660:
case 1260:
case 3518:
case 3748:
case 3350:
case 3982:
case 2733:
case 3140:
case 223:
case 2556:
case 2953:
case 3057:
case 1704:
case 184:
case 3406:
case 1538:
case 89:
case 656:
case 418:
case 2944:
case 2821:
case 2627:
case 572:
case 1642:
case 4080:
case 3276:
case 2520:
case 1477:
case 2275:
case 2686:
case 1651:
case 530:
case 1857:
case 3326:
case 2840:
case 1230:
case 2529:
case 852:
case 3986:
case 2763:
case 2711:
case 581:
case 2552:
case 3927:
case 3402:
case 3210:
case 1568:
case 1791:
case 3702:
case 3653:
case 1646:
case 771:
case 3149:
case 3272:
case 3121:
case 1491:
case 962:
case 2228:
case 503:
case 2463:
case 3774:
case 179:
case 3277:
case 1476:
case 3707:
case 1054:
case 3386:
case 2626:
case 2881:
case 1856:
case 578:
case 254:
case 3843:
case 3327:
case 2838:
case 2580:
case 4020:
case 1248:
case 241:
case 3854:
case 548:
case 4056:
case 1521:
case 2055:
case 412:
case 2018:
case 149:
case 312:
case 2650:
case 3056:
case 1206:
case 1384:
case 3922:
case 1088:
case 4011:
case 422:
case 1031:
case 716:
case 3569:
case 2789:
case 2967:
case 3063:
case 3303:
case 3609:
case 322:
case 437:
case 549:
case 3831:
case 3637:
case 1283:
case 3177:
case 2590:
case 2161:
case 2891:
case 3888:
case 945:
case 2395:
case 2113:
case 1358:
case 3396:
case 1740:
case 2362:
case 2489:
case 1193:
case 987:
case 1617:
case 9:
case 2692:
case 2876:
case 1994:
case 1899:
case 2300:
case 3455:
case 3249:
case 3221:
case 301:
case 2007:
case 103:
case 2367:
case 2128:
case 2456:
case 552:
case 2914:
case 2074:
case 2720:
case 3371:
case 497:
case 3875:
case 1781:
case 181:
case 1577:
case 1738:
case 676:
case 3099:
case 2995:
case 2420:
case 1958:
case 216:
case 289:
case 3996:
case 3593:
case 1075:
case 1915:
case 2962:
case 1664:
case 3755:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1753992001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,];
var gg_b = "1753992001/";

function subdomain_from_url(url, base, dir) {
        var retval = '';
        if (!base) {
                if (dir === 'webp') {
                        retval = 'w';
                } else if (dir === 'avif') {
                        retval = 'a';
                }
        }
        
        var b = 16;
        
        var r = /\/[0-9a-f]{61}([0-9a-f]{2})([0-9a-f])/;
        var m = r.exec(url);
        if (!m) {
                return retval;
        }
        
        var g = parseInt(m[2]+m[1], b);
        if (!isNaN(g)) {
                if (base) {
                        retval = String.fromCharCode(97 + gg_m[g]) + base;
                } else {
                        retval = retval + (1+gg_m[g]);
                }
        }
        
        return retval;
}


function url_from_url(url, base, dir) {
        return url.replace(/\/\/..?\.(?:gold-usergeneratedcontent\.net|hitomi\.la)\//, '//'+subdomain_from_url(url, base, dir)+'.'+domain2+'/');
}

function full_path_from_hash(hash) {
        return gg_b+gg_s(hash)+'/'+hash;
}


function real_full_path_from_hash(hash) {
        return hash.replace(/^.*(..)(.)$/, '$2/$1/'+hash);
}

function url_from_hash(_galleryid, image, dir, ext) {
        ext = ext || dir || image.name.split('.').pop();
        if (dir === 'webp' || dir === 'avif') {
                dir = '';
        } else {
                dir += '/';
        }
        
        return 'https://a.'+domain2+'/'+dir+full_path_from_hash(image.hash)+'.'+ext;
}

function url_from_url_from_hash(_galleryid, image, dir, ext, base) {
        if ('tn' === base) {
                return url_from_url('https://a.'+domain2+'/'+dir+'/'+real_full_path_from_hash(image.hash)+'.'+ext, base);
        }
        return url_from_url(url_from_hash(_galleryid, image, dir, ext), base, dir);
}


function hitomi_get_image_list() {
  files = galleryinfo["files"];
  dir = "webp";
  type = "webp";
  base = "webp";
  result = [];
  btresult = [];
  stresult = [];
  for (var file of files) {
    result.push(url_from_url(url_from_hash(0, file, dir), undefined, dir));
    btresult.push(url_from_url_from_hash(0, file, 'webpbigtn', 'webp', 'tn'));
    stresult.push(url_from_url_from_hash(0, file, type+'smalltn', type, 'tn'));
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
