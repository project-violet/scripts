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
case 3828:
case 2582:
case 3265:
case 2307:
case 3327:
case 2808:
case 1173:
case 4015:
case 1864:
case 1295:
case 1784:
case 2615:
case 1110:
case 2000:
case 1774:
case 2802:
case 2588:
case 3822:
case 729:
case 353:
case 2931:
case 3116:
case 1134:
case 1488:
case 3747:
case 3581:
case 981:
case 685:
case 852:
case 3938:
case 2251:
case 707:
case 29:
case 708:
case 1140:
case 3801:
case 1733:
case 2821:
case 3157:
case 3571:
case 297:
case 4045:
case 1026:
case 622:
case 147:
case 2746:
case 2893:
case 920:
case 2982:
case 1300:
case 439:
case 1819:
case 2242:
case 393:
case 14:
case 3211:
case 2972:
case 2988:
case 1007:
case 1431:
case 2326:
case 892:
case 2757:
case 325:
case 25:
case 1698:
case 3241:
case 2375:
case 3668:
case 3532:
case 2385:
case 3971:
case 441:
case 257:
case 3655:
case 2716:
case 382:
case 3662:
case 2147:
case 395:
case 2551:
case 1303:
case 1509:
case 2092:
case 3281:
case 2024:
case 2912:
case 3271:
case 2345:
case 1889:
case 1595:
case 2786:
case 2278:
case 3627:
case 990:
case 2607:
case 3091:
case 2282:
case 2315:
case 4007:
case 2942:
case 3429:
case 2725:
case 336:
case 3705:
case 447:
case 144:
case 139:
case 2288:
case 759:
case 1398:
case 228:
case 1448:
case 294:
case 1045:
case 4026:
case 2675:
case 3238:
case 355:
case 2951:
case 1324:
case 1909:
case 2199:
case 1442:
case 2685:
case 1714:
case 3023:
case 2512:
case 3362:
case 3777:
case 227:
case 987:
case 1753:
case 3137:
case 1744:
case 3952:
case 98:
case 1015:
case 683:
case 799:
case 1143:
case 291:
case 2361:
case 3511:
case 1287:
case 289:
case 1947:
case 1738:
case 1602:
case 3950:
case 1366:
case 1815:
case 1236:
case 3933:
case 90:
case 1732:
case 3396:
case 1483:
case 908:
case 3446:
case 1956:
case 1434:
case 3659:
case 2389:
case 2583:
case 1172:
case 3984:
case 3067:
case 784:
case 1182:
case 3974:
case 430:
case 1390:
case 530:
case 1917:
case 929:
case 3457:
case 3360:
case 2510:
case 514:
case 3550:
case 2066:
case 2270:
case 2619:
case 1299:
case 118:
case 1693:
case 4019:
case 3533:
case 3269:
case 4049:
case 2243:
case 2090:
case 720:
case 2254:
case 846:
case 1517:
case 1205:
case 2824:
case 2447:
case 2973:
case 511:
case 3574:
case 2898:
case 2397:
case 805:
case 3544:
case 2943:
case 4089:
case 2689:
case 2436:
case 3553:
case 460:
case 959:
case 3530:
case 2210:
case 2273:
case 4079:
case 302:
case 2487:
case 175:
case 518:
case 1587:
case 2240:
case 418:
case 417:
case 3129:
case 1151:
case 1666:
case 1999:
case 1308:
case 1807:
case 2234:
case 3514:
case 517:
case 1256:
case 1413:
case 901:
case 750:
case 3953:
case 2554:
case 3795:
case 1885:
case 3001:
case 1480:
case 2021:
case 1142:
case 788:
case 1826:
case 78:
case 1217:
case 1505:
case 2697:
case 999:
case 1987:
case 2008:
case 1247:
case 1112:
case 2729:
case 3709:
case 2405:
case 2002:
case 3233:
case 3820:
case 3363:
case 2513:
case 2800:
case 2570:
case 1118:
case 1977:
case 3631:
case 212:
case 3348:
case 3847:
case 745:
case 1468:
case 1850:
case 3561:
case 3915:
case 1455:
case 3342:
case 1833:
case 3492:
case 706:
case 932:
case 1058:
case 3856:
case 2632:
case 915:
case 4032:
case 3312:
case 3009:
case 3794:
case 3945:
case 1874:
case 2491:
case 3722:
case 3275:
case 3226:
case 4038:
case 2568:
case 368:
case 1504:
case 256:
case 818:
case 2358:
case 7:
case 3961:
case 3672:
case 81:
case 503:
case 263:
case 1991:
case 1749:
case 3682:
case 372:
case 2227:
case 3678:
case 270:
case 3207:
case 817:
case 4071:
case 630:
case 105:
case 3545:
case 1719:
case 1041:
case 2194:
case 146:
case 3108:
case 349:
case 860:
case 4081:
case 2262:
case 3585:
case 446:
case 3400:
case 546:
case 3612:
case 3526:
case 2837:
case 2506:
case 2825:
case 2268:
case 33:
case 338:
case 505:
case 2876:
case 3648:
case 4011:
case 814:
case 3261:
case 2790:
case 2167:
case 1789:
case 103:
case 2935:
case 875:
case 977:
case 660:
case 1435:
case 3985:
case 2371:
case 1844:
case 97:
case 1629:
case 3651:
case 3166:
case 2381:
case 3975:
case 986:
case 3926:
case 830:
case 364:
case 1830:
case 3887:
case 1797:
case 617:
case 2658:
case 4058:
case 3767:
case 3372:
case 4065:
case 3382:
case 2527:
case 913:
case 3190:
case 1814:
case 2652:
case 3877:
case 3378:
case 618:
case 1928:
case 3964:
case 242:
case 3313:
case 2369:
case 3519:
case 869:
case 2239:
case 2633:
case 3370:
case 1168:
case 715:
case 2104:
case 774:
case 1014:
case 1922:
case 3036:
case 644:
case 639:
case 3723:
case 279:
case 3297:
case 4074:
case 1053:
case 945:
case 1376:
case 1337:
case 2674:
case 1044:
case 2684:
case 152:
case 1715:
case 906:
case 1901:
case 3549:
case 1832:
case 1030:
case 3634:
case 1616:
case 848:
case 2123:
case 2792:
case 1459:
case 3421:
case 2401:
case 84:
case 2314:
case 3919:
case 2963:
case 3099:
case 3704:
case 3640:
case 1069:
case 1657:
case 2086:
case 1761:
case 3279:
case 3610:
case 116:
case 3949:
case 1871:
case 3005:
case 485:
case 2037:
case 1646:
case 3683:
case 192:
case 1501:
case 2428:
case 592:
case 2046:
case 185:
case 2960:
case 416:
case 1841:
case 516:
case 2374:
case 3100:
case 762:
case 1707:
case 1686:
case 839:
case 2057:
case 483:
case 3670:
case 2263:
case 4069:
case 2333:
case 1811:
case 2350:
case 2016:
case 2630:
case 1135:
case 3997:
case 1127:
case 452:
case 1967:
case 1084:
case 2560:
case 2829:
case 2259:
case 3466:
case 2644:
case 4044:
case 1496:
case 3017:
case 3383:
case 1346:
case 713:
case 3047:
case 647:
case 2939:
case 3334:
case 1785:
case 3895:
case 1033:
case 1775:
case 64:
case 1726:
case 648:
case 1460:
case 2690:
case 3937:
case 2049:
case 1679:
case 2711:
case 3165:
case 1487:
case 3748:
case 635:
case 100:
case 4090:
case 1943:
case 3158:
case 972:
case 3414:
case 3742:
case 3301:
case 1436:
case 3394:
case 3444:
case 2577:
case 4066:
case 2536:
case 2308:
case 2807:
case 3453:
case 3430:
case 3718:
case 934:
case 2019:
case 1980:
case 1021:
case 2480:
case 3576:
case 2875:
case 3667:
case 3525:
case 2505:
case 2217:
case 371:
case 910:
case 332:
case 230:
case 2413:
case 3469:
case 2765:
case 1554:
case 3586:
case 1543:
case 1499:
case 2885:
case 3111:
case 826:
case 3141:
case 2454:
case 489:
case 1513:
case 1800:
case 589:
case 2393:
case 670:
case 967:
case 2064:
case 968:
case 374:
case 1008:
case 1580:
case 1729:
case 3751:
case 1405:
case 2236:
case 3694:
case 3516:
case 896:
case 3181:
case 1534:
case 2732:
case 1664:
case 377:
case 189:
case 3039:
case 2947:
case 2473:
case 3171:
case 3557:
case 386:
case 2410:
case 3622:
case 37:
case 1573:
case 2182:
case 2917:
case 961:
case 1803:
case 1510:
case 3731:
case 2188:
case 2434:
case 2956:
case 835:
case 3601:
case 2621:
case 2845:
case 3546:
case 3138:
case 1270:
case 2299:
case 4093:
case 863:
case 218:
case 2693:
case 856:
case 1456:
case 1417:
case 3096:
case 93:
case 633:
case 2781:
case 3367:
case 3225:
case 2089:
case 1824:
case 1397:
case 3788:
case 1973:
case 1243:
case 3286:
case 260:
case 500:
case 2131:
case 362:
case 1090:
case 3855:
case 3782:
case 2556:
case 1892:
case 1254:
case 1649:
case 1024:
case 1345:
case 1187:
case 458:
case 3713:
case 3465:
case 2769:
case 1098:
case 457:
case 580:
case 3458:
case 3323:
case 1551:
case 3529:
case 679:
case 2303:
case 2879:
case 1136:
case 749:
case 154:
case 3055:
case 1725:
case 2451:
case 151:
case 3144:
case 3:
case 1737:
case 731:
case 1272:
case 244:
case 1948:
case 1786:
case 2595:
case 1607:
case 3130:
case 1866:
case 1315:
case 1282:
case 3754:
case 2392:
case 2714:
case 498:
case 1685:
case 598:
case 49:
case 2448:
case 2897:
case 128:
case 2398:
case 2113:
case 76:
case 597:
case 497:
case 3411:
case 768:
case 2045:
case 1675:
case 3304:
case 3929:
case 1951:
case 12:
case 3441:
case 2143:
case 2418:
case 1231:
case 1542:
case 3839:
case 1105:
case 3620:
case 2744:
case 2995:
case 421:
case 761:
case 2774:
case 409:
case 1000:
case 1931:
case 842:
case 1572:
case 2183:
case 269:
case 1307:
case 591:
case 1578:
case 2784:
case 2075:
case 428:
case 52:
case 2733:
case 528:
case 879:
case 2478:
case 594:
case 197:
case 2603:
case 198:
case 124:
case 527:
case 2134:
case 343:
case 2209:
case 19:
case 3691:
case 24:
case 1531:
case 3184:
case 3438:
case 3773:
case 3027:
case 2007:
case 1978:
case 1982:
case 3174:
case 1242:
case 2819:
case 1385:
case 1212:
case 737:
case 3150:
case 554:
case 180:
case 454:
case 1147:
case 3734:
case 1326:
case 1757:
case 1218:
case 738:
case 3133:
case 3812:
case 3010:
case 1384:
case 3356:
case 320:
case 3735:
case 697:
case 2686:
case 285:
case 3083:
case 3818:
case 698:
case 1960:
case 2841:
case 2637:
case 1467:
case 3034:
case 621:
case 3497:
case 982:
case 1057:
case 3293:
case 3966:
case 3699:
case 1263:
case 3175:
case 2074:
case 1644:
case 82:
case 1259:
case 3221:
case 579:
case 828:
case 3107:
case 1630:
case 2135:
case 953:
case 3590:
case 2084:
case 2967:
case 1560:
case 1829:
case 442:
case 3202:
case 3479:
case 2460:
case 2858:
case 2357:
case 809:
case 3687:
case 2228:
case 3677:
case 3208:
case 2852:
case 2050:
case 3636:
case 1650:
case 3902:
case 2155:
case 651:
case 3647:
case 2162:
case 3831:
case 1703:
case 821:
case 2928:
case 1239:
case 142:
case 1563:
case 1369:
case 2168:
case 1104:
case 3399:
case 2994:
case 350:
case 3419:
case 2715:
case 1959:
case 2901:
case 2386:
case 898:
case 2832:
case 3161:
case 824:
case 179:
case 2053:
case 2376:
case 654:
case 2337:
case 2044:
case 4057:
case 3145:
case 1724:
case 3387:
case 2657:
case 995:
case 691:
case 3762:
case 3377:
case 1123:
case 2616:
case 2459:
case 4016:
case 3508:
case 3882:
case 2528:
case 1314:
case 1963:
case 2871:
case 1344:
case 292:
case 2646:
case 627:
case 1353:
case 85:
case 2761:
case 1260:
case 3054:
case 62:
case 2881:
case 3290:
case 857:
case 923:
case 1837:
case 2071:
case 2139:
case 1876:
case 3796:
case 1255:
case 1420:
case 2081:
case 3854:
case 782:
case 3870:
case 1167:
case 563:
case 2789:
case 3485:
case 456:
case 3500:
case 3088:
case 2406:
case 3760:
case 689:
case 2779:
case 1611:
case 3880:
case 470:
case 2629:
case 3203:
case 2830:
case 4029:
case 535:
case 3739:
case 2427:
case 30:
case 2844:
case 2038:
case 596:
case 1527:
case 3179:
case 1535:
case 2920:
case 1652:
case 2814:
case 3031:
case 496:
case 2797:
case 1658:
case 753:
case 3189:
case 526:
case 2220:
case 1721:
case 3759:
case 2833:
case 889:
case 426:
case 433:
case 301:
case 112:
case 399:
case 2591:
case 3149:
case 1311:
case 1341:
case 1491:
case 1638:
case 2163:
case 1568:
case 1206:
case 3461:
case 2923:
case 3524:
case 1555:
case 3592:
case 2764:
case 1632:
case 3051:
case 1352:
case 3048:
case 170:
case 3834:
case 1857:
case 1358:
case 902:
case 723:
case 736:
case 1101:
case 163:
case 3810:
case 1194:
case 3998:
case 3873:
case 1962:
case 205:
case 3992:
case 465:
case 3415:
case 3763:
case 2719:
case 726:
case 840:
case 3183:
case 733:
case 1717:
case 153:
case 3774:
case 1020:
case 1252:
case 3864:
case 3173:
case 1828:
case 3026:
case 455:
case 1157:
case 3478:
case 1932:
case 3733:
case 1801:
case 3075:
case 555:
case 3750:
case 2229:
case 1938:
case 2623:
case 2035:
case 348:
case 3007:
case 2773:
case 1211:
case 2691:
case 193:
case 2320:
case 2863:
case 3819:
case 523:
case 2174:
case 536:
case 423:
case 436:
case 2783:
case 347:
case 182:
case 595:
case 495:
case 3849:
case 1532:
case 1668:
case 2604:
case 3624:
case 765:
case 1241:
case 1306:
case 125:
case 3431:
case 3769:
case 2465:
case 2713:
case 525:
case 3889:
case 1799:
case 425:
case 1271:
case 2770:
case 482:
case 2055:
case 1941:
case 2458:
case 341:
case 2860:
case 2529:
case 2323:
case 582:
case 2153:
case 339:
case 2:
case 3451:
case 1558:
case 770:
case 593:
case 1091:
case 1627:
case 493:
case 2130:
case 2896:
case 3595:
case 1777:
case 1362:
case 942:
case 1023:
case 3714:
case 3180:
case 1736:
case 3392:
case 3442:
case 3324:
case 3909:
case 2304:
case 2929:
case 2411:
case 155:
case 1867:
case 1368:
case 3170:
case 3113:
case 796:
case 979:
case 245:
case 3143:
case 2441:
case 566:
case 3600:
case 1137:
case 3753:
case 466:
case 1965:
case 3277:
case 4094:
case 3483:
case 3732:
case 3236:
case 2516:
case 2622:
case 27:
case 2171:
case 3410:
case 3947:
case 3287:
case 278:
case 3178:
case 1230:
case 867:
case 933:
case 3390:
case 63:
case 3182:
case 1067:
case 2546:
case 1244:
case 3621:
case 213:
case 1659:
case 3097:
case 868:
case 3434:
case 637:
case 1533:
case 831:
case 3693:
case 2916:
case 31:
case 2138:
case 3771:
case 1663:
case 3547:
case 1550:
case 661:
case 2132:
case 2276:
case 2788:
case 1804:
case 2225:
case 3517:
case 2367:
case 2450:
case 373:
case 3079:
case 402:
case 2778:
case 3131:
case 849:
case 502:
case 360:
case 2946:
case 834:
case 2286:
case 2976:
case 102:
case 956:
case 668:
case 3049:
case 3905:
case 2937:
case 3690:
case 2742:
case 3321:
case 2414:
case 970:
case 667:
case 311:
case 1969:
case 3807:
case 2216:
case 2453:
case 2394:
case 3666:
case 3999:
case 3577:
case 2712:
case 2063:
case 3019:
case 3587:
case 3741:
case 610:
case 2430:
case 2257:
case 375:
case 2718:
case 912:
case 271:
case 3217:
case 3505:
case 4067:
case 3826:
case 634:
case 2576:
case 2667:
case 3875:
case 3480:
case 2586:
case 3752:
case 3885:
case 1953:
case 3443:
case 3977:
case 1639:
case 215:
case 1820:
case 1914:
case 1233:
case 1022:
case 3936:
case 742:
case 1437:
case 1250:
case 1709:
case 3112:
case 3247:
case 1028:
case 631:
case 3064:
case 3987:
case 1476:
case 3462:
case 561:
case 201:
case 2200:
case 1701:
case 1342:
case 1915:
case 709:
case 1095:
case 1561:
case 3850:
case 3052:
case 3468:
case 1424:
case 2149:
case 3065:
case 3591:
case 1498:
case 110:
case 2903:
case 2524:
case 1817:
case 72:
case 2461:
case 1226:
case 602:
case 728:
case 1275:
case 3163:
case 3874:
case 464:
case 1285:
case 1856:
case 167:
case 2592:
case 1207:
case 1515:
case 1678:
case 172:
case 2395:
case 2445:
case 3749:
case 3991:
case 1121:
case 3159:
case 2042:
case 751:
case 131:
case 1403:
case 2164:
case 2998:
case 2873:
case 754:
case 346:
case 2924:
case 2503:
case 1351:
case 3523:
case 3904:
case 3041:
case 2415:
case 3719:
case 2763:
case 438:
case 305:
case 43:
case 3139:
case 1575:
case 138:
case 3204:
case 13:
case 2224:
case 1526:
case 2854:
case 1400:
case 137:
case 534:
case 802:
case 549:
case 1585:
case 3520:
case 1907:
case 2197:
case 303:
case 3789:
case 1642:
case 2870:
case 2082:
case 2880:
case 472:
case 3779:
case 1261:
case 1331:
case 2078:
case 989:
case 4009:
case 207:
case 164:
case 467:
case 3629:
case 724:
case 1245:
case 3844:
case 56:
case 468:
case 1985:
case 208:
case 3853:
case 46:
case 3427:
case 2407:
case 1378:
case 1877:
case 3814:
case 2695:
case 2179:
case 1836:
case 1507:
case 1215:
case 1767:
case 161:
case 1388:
case 3797:
case 2647:
case 3922:
case 1192:
case 2449:
case 3745:
case 2399:
case 866:
case 1370:
case 3168:
case 1087:
case 140:
case 1313:
case 853:
case 927:
case 909:
case 3832:
case 3386:
case 3901:
case 1354:
case 2921:
case 28:
case 3838:
case 276:
case 991:
case 288:
case 1297:
case 3657:
case 2387:
case 2888:
case 2145:
case 2070:
case 954:
case 383:
case 1099:
case 1919:
case 2755:
case 3459:
case 3528:
case 2336:
case 893:
case 2762:
case 1408:
case 290:
case 825:
case 119:
case 316:
case 3881:
case 951:
case 655:
case 700:
case 1673:
case 2043:
case 882:
case 2073:
case 3686:
case 1643:
case 2727:
case 895:
case 220:
case 1989:
case 2812:
case 1654:
case 1249:
case 1100:
case 2605:
case 2990:
case 3637:
case 1979:
case 1597:
case 3676:
case 385:
case 519:
case 4005:
case 2317:
case 2347:
case 958:
case 2185:
case 666:
case 1680:
case 2842:
case 1670:
case 1219:
case 836:
case 2966:
case 2699:
case 823:
case 957:
case 980:
case 1613:
case 2126:
case 682:
case 3496:
case 3074:
case 3201:
case 2851:
case 921:
case 625:
case 3127:
case 540:
case 998:
case 2687:
case 3460:
case 281:
case 3357:
case 3726:
case 2479:
case 693:
case 1490:
case 3222:
case 2202:
case 4087:
case 4077:
case 1334:
case 1264:
case 4036:
case 997:
case 3228:
case 3954:
case 1742:
case 2553:
case 2359:
case 3689:
case 3283:
case 604:
case 716:
case 1158:
case 3943:
case 202:
case 1748:
case 562:
case 300:
case 1976:
case 2660:
case 2530:
case 3210:
case 3679:
case 3195:
case 1152:
case 1322:
case 3240:
case 946:
case 1718:
case 3234:
case 2696:
case 3364:
case 905:
case 1453:
case 1216:
case 1444:
case 3970:
case 1712:
case 2795:
case 3543:
case 1586:
case 2953:
case 132:
case 413:
case 1537:
case 171:
case 1576:
case 3021:
case 80:
case 513:
case 2001:
case 3729:
case 1751:
case 2250:
case 2094:
case 477:
case 3008:
case 2028:
case 2476:
case 486:
case 829:
case 2639:
case 2233:
case 3513:
case 4039:
case 2363:
case 2914:
case 478:
case 57:
case 1141:
case 586:
case 1622:
case 2950:
case 186:
case 1171:
case 801:
case 1039:
case 515:
case 2446:
case 2933:
case 1181:
case 2214:
case 474:
case 1516:
case 1546:
case 471:
case 3583:
case 3389:
case 2067:
case 2659:
case 113:
case 1601:
case 2244:
case 4059:
case 2253:
case 2416:
case 571:
case 2457:
case 2823:
case 3803:
case 3510:
case 532:
case 432:
case 2974:
case 3573:
case 3379:
case 3280:
case 2891:
case 3940:
case 1096:
case 2550:
case 1957:
case 3934:
case 2533:
case 1138:
case 3254:
case 3892:
case 1433:
case 903:
case 2584:
case 162:
case 1778:
case 1862:
case 2574:
case 3447:
case 1788:
case 1450:
case 1868:
case 1367:
case 676:
case 1780:
case 3092:
case 354:
case 2941:
case 68:
case 688:
case 1323:
case 3177:
case 1458:
case 1062:
case 746:
case 3918:
case 295:
case 1465:
case 3187:
case 2799:
case 3495:
case 2004:
case 2271:
case 2565:
case 3282:
case 3315:
case 3607:
case 1743:
case 3948:
case 1153:
case 3776:
case 3288:
case 223:
case 3737:
case 1:
case 2705:
case 236:
case 2429:
case 1304:
case 2867:
case 4006:
case 3518:
case 1411:
case 2606:
case 1169:
case 328:
case 884:
case 3512:
case 543:
case 2355:
case 2736:
case 2137:
case 2125:
case 3105:
case 3542:
case 881:
case 2511:
case 145:
case 2186:
case 3548:
case 1391:
case 1441:
case 1471:
case 3578:
case 3615:
case 545:
case 3808:
case 2756:
case 3307:
case 2335:
case 2146:
case 3931:
case 506:
case 266:
case 1481:
case 39:
case 1229:
case 2938:
case 887:
case 2581:
case 2747:
case 324:
case 398:
case 1623:
case 620:
case 2932:
case 2157:
case 1859:
case 3821:
case 876:
case 3645:
case 1863:
case 3242:
case 1174:
case 3893:
case 4:
case 3746:
case 1783:
case 3978:
case 922:
case 3248:
case 1035:
case 681:
case 3156:
case 1773:
case 3988:
case 3661:
case 3972:
case 1184:
case 3531:
case 1691:
case 2668:
case 358:
case 2241:
case 1604:
case 1740:
case 2306:
case 3757:
case 225:
case 890:
case 1734:
case 2662:
case 3147:
case 282:
case 380:
case 357:
case 4062:
case 3385:
case 2100:
case 3374:
case 2979:
case 1818:
case 590:
case 948:
case 1083:
case 1073:
case 4054:
case 1735:
case 120:
case 1010:
case 2249:
case 4043:
case 1175:
case 1040:
case 2219:
case 718:
case 3539:
case 8:
case 3057:
case 4070:
case 1347:
case 1497:
case 1034:
case 3350:
case 3467:
case 1185:
case 717:
case 3829:
case 2809:
case 550:
case 487:
case 1590:
case 2056:
case 587:
case 2997:
case 3630:
case 1107:
case 2373:
case 476:
case 2383:
case 48:
case 2466:
case 1221:
case 2720:
case 3700:
case 576:
case 1489:
case 3596:
case 2264:
case 845:
case 1208:
case 1687:
case 1706:
case 181:
case 806:
case 2340:
case 2490:
case 1202:
case 1399:
case 1449:
case 2124:
case 3633:
case 2519:
case 3563:
case 2313:
case 3369:
case 240:
case 2964:
case 342:
case 581:
case 1908:
case 2198:
case 1831:
case 2077:
case 6:
case 2380:
case 2192:
case 1902:
case 18:
case 176:
case 1305:
case 1617:
case 188:
case 187:
case 584:
case 1161:
case 2493:
case 2354:
case 150:
case 3963:
case 606:
case 1755:
case 1266:
case 1080:
case 1993:
case 1377:
case 1878:
case 2634:
case 4040:
case 1888:
case 1872:
case 775:
case 3724:
case 1070:
case 2402:
case 4073:
case 3260:
case 2673:
case 3086:
case 944:
case 3330:
case 4010:
case 520:
case 3559:
case 1521:
case 3353:
case 3428:
case 2408:
case 219:
case 3076:
case 3025:
case 711:
case 2949:
case 3344:
case 2612:
case 1854:
case 3420:
case 3766:
case 237:
case 1796:
case 2618:
case 365:
case 3876:
case 917:
case 1298:
case 23:
case 4018:
case 3268:
case 2805:
case 973:
case 1082:
case 748:
case 2331:
case 2261:
case 1426:
case 2648:
case 1500:
case 459:
case 4042:
case 3935:
case 960:
case 2907:
case 1485:
case 3167:
case 559:
case 2642:
case 2245:
case 3371:
case 10:
case 662:
case 832:
case 504:
case 2651:
case 1609:
case 326:
case 2767:
case 769:
case 333:
case 401:
case 501:
case 261:
case 129:
case 2887:
case 815:
case 599:
case 2190:
case 3652:
case 1900:
case 499:
case 1179:
case 2836:
case 2215:
case 2382:
case 2507:
case 3311:
case 2095:
case 2847:
case 2348:
case 199:
case 210:
case 878:
case 87:
case 2342:
case 1759:
case 2915:
case 2794:
case 2285:
case 3562:
case 3029:
case 2009:
case 2856:
case 104:
case 507:
case 3708:
case 1592:
case 3555:
case 2193:
case 40:
case 1461:
case 335:
case 3206:
case 2275:
case 1119:
case 408:
case 2722:
case 739:
case 2672:
case 159:
case 2961:
case 2688:
case 356:
case 3423:
case 674:
case 3358:
case 1834:
case 911:
case 1048:
case 2515:
case 2682:
case 4078:
case 1395:
case 1763:
case 3671:
case 1992:
case 2102:
case 3846:
case 3793:
case 1164:
case 975:
case 671:
case 862:
case 249:
case 3128:
case 1998:
case 1012:
case 1503:
case 1810:
case 2351:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1748458801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,];
var gg_b = "1748458801/";

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
