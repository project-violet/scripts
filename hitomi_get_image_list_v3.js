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
case 796:
case 968:
case 2708:
case 2058:
case 3806:
case 2633:
case 2689:
case 3071:
case 2879:
case 620:
case 3378:
case 3884:
case 3428:
case 907:
case 730:
case 3612:
case 1854:
case 1852:
case 39:
case 3022:
case 1014:
case 1401:
case 1732:
case 3699:
case 120:
case 457:
case 307:
case 3629:
case 1760:
case 3596:
case 1164:
case 3324:
case 2249:
case 3503:
case 507:
case 3026:
case 3960:
case 3301:
case 989:
case 1441:
case 2735:
case 1813:
case 860:
case 3694:
case 1711:
case 3920:
case 3233:
case 1824:
case 3741:
case 2890:
case 809:
case 1676:
case 1478:
case 3148:
case 625:
case 2584:
case 1134:
case 2819:
case 1450:
case 1587:
case 2282:
case 2907:
case 980:
case 773:
case 1288:
case 1489:
case 3513:
case 4028:
case 1660:
case 1820:
case 381:
case 1054:
case 3569:
case 2895:
case 1437:
case 1230:
case 1952:
case 1720:
case 1308:
case 3463:
case 1227:
case 3123:
case 1904:
case 262:
case 2096:
case 3944:
case 3625:
case 462:
case 3805:
case 3405:
case 2892:
case 454:
case 759:
case 3994:
case 2123:
case 789:
case 3386:
case 592:
case 3455:
case 3104:
case 1888:
case 2721:
case 4083:
case 2763:
case 239:
case 2715:
case 1077:
case 3914:
case 3216:
case 2551:
case 3866:
case 2311:
case 2136:
case 3183:
case 368:
case 2260:
case 3368:
case 2582:
case 389:
case 2191:
case 2969:
case 205:
case 1144:
case 221:
case 1588:
case 3580:
case 4074:
case 281:
case 2052:
case 4060:
case 1339:
case 938:
case 2519:
case 1213:
case 1464:
case 2980:
case 1847:
case 2541:
case 1997:
case 3519:
case 3688:
case 3391:
case 3971:
case 714:
case 581:
case 452:
case 862:
case 2961:
case 2068:
case 2108:
case 470:
case 346:
case 354:
case 3876:
case 3964:
case 3837:
case 1442:
case 1801:
case 3131:
case 3649:
case 3669:
case 466:
case 1186:
case 528:
case 3173:
case 1433:
case 653:
case 1752:
case 3303:
case 4095:
case 931:
case 3387:
case 1017:
case 3826:
case 197:
case 3974:
case 3277:
case 952:
case 3184:
case 727:
case 3135:
case 645:
case 2320:
case 2745:
case 3100:
case 628:
case 1341:
case 557:
case 2244:
case 2491:
case 1500:
case 48:
case 568:
case 2585:
case 2948:
case 2172:
case 105:
case 2176:
case 2960:
case 3723:
case 3017:
case 3478:
case 2945:
case 2663:
case 1659:
case 2411:
case 2993:
case 392:
case 6:
case 3799:
case 4069:
case 2453:
case 1850:
case 3441:
case 2587:
case 4036:
case 590:
case 2502:
case 3357:
case 1679:
case 3013:
case 698:
case 1828:
case 2939:
case 1867:
case 2338:
case 2853:
case 3469:
case 2137:
case 24:
case 554:
case 709:
case 1320:
case 449:
case 2732:
case 3817:
case 1705:
case 1246:
case 3690:
case 172:
case 2604:
case 1036:
case 3902:
case 2674:
case 4076:
case 276:
case 1664:
case 1502:
case 790:
case 4035:
case 289:
case 2069:
case 2855:
case 1628:
case 405:
case 291:
case 2576:
case 2616:
case 2041:
case 3747:
case 2467:
case 874:
case 348:
case 761:
case 2492:
case 4019:
case 1324:
case 695:
case 479:
case 3003:
case 3794:
case 580:
case 798:
case 2475:
case 748:
case 2531:
case 2925:
case 2200:
case 2346:
case 45:
case 531:
case 3058:
case 930:
case 899:
case 446:
case 1903:
case 1870:
case 2700:
case 4075:
case 1974:
case 1303:
case 682:
case 2098:
case 2856:
case 1874:
case 108:
case 3839:
case 2181:
case 1438:
case 3012:
case 1674:
case 2222:
case 3495:
case 220:
case 428:
case 1653:
case 3546:
case 3527:
case 2657:
case 1388:
case 1444:
case 662:
case 193:
case 1212:
case 3941:
case 3395:
case 3390:
case 2177:
case 3640:
case 3757:
case 2805:
case 586:
case 3746:
case 2694:
case 766:
case 4092:
case 1023:
case 363:
case 1208:
case 3975:
case 1931:
case 1352:
case 772:
case 1742:
case 1769:
case 116:
case 3410:
case 2992:
case 757:
case 523:
case 2485:
case 723:
case 673:
case 1423:
case 3845:
case 2339:
case 81:
case 3850:
case 2727:
case 1011:
case 2753:
case 822:
case 230:
case 356:
case 3299:
case 2397:
case 3304:
case 2726:
case 1107:
case 1633:
case 2152:
case 4082:
case 2030:
case 1614:
case 659:
case 1124:
case 2513:
case 2170:
case 3695:
case 3214:
case 3901:
case 3053:
case 2293:
case 1238:
case 352:
case 518:
case 101:
case 7:
case 1946:
case 2937:
case 3823:
case 4050:
case 3733:
case 3229:
case 1257:
case 3448:
case 3899:
case 1806:
case 3256:
case 1056:
case 1207:
case 361:
case 1145:
case 2483:
case 1619:
case 2524:
case 3099:
case 3727:
case 763:
case 1873:
case 3682:
case 2265:
case 2644:
case 3048:
case 3587:
case 3370:
case 925:
case 3796:
case 2401:
case 3505:
case 3737:
case 1889:
case 365:
case 644:
case 1018:
case 516:
case 1086:
case 4022:
case 1776:
case 2217:
case 4030:
case 3938:
case 3800:
case 3057:
case 47:
case 1721:
case 235:
case 736:
case 2234:
case 1359:
case 99:
case 3743:
case 3931:
case 770:
case 1809:
case 2852:
case 406:
case 56:
case 2623:
case 4044:
case 123:
case 3249:
case 407:
case 599:
case 1386:
case 340:
case 129:
case 3594:
case 1580:
case 642:
case 3307:
case 2750:
case 1794:
case 1981:
case 2956:
case 2719:
case 3778:
case 3643:
case 3712:
case 2486:
case 2040:
case 13:
case 2849:
case 2658:
case 3635:
case 33:
case 735:
case 647:
case 1911:
case 2269:
case 4010:
case 2927:
case 3719:
case 1914:
case 2447:
case 3280:
case 2652:
case 1475:
case 20:
case 3512:
case 710:
case 2789:
case 2353:
case 388:
case 934:
case 2450:
case 1286:
case 3209:
case 2059:
case 309:
case 3300:
case 1560:
case 2693:
case 3987:
case 1048:
case 3877:
case 275:
case 607:
case 424:
case 2038:
case 1695:
case 3025:
case 3939:
case 3552:
case 314:
case 347:
case 2157:
case 660:
case 78:
case 440:
case 3622:
case 3215:
case 2842:
case 2620:
case 2319:
case 383:
case 1399:
case 1372:
case 3667:
case 2159:
case 2349:
case 2989:
case 1276:
case 2755:
case 1996:
case 435:
case 3199:
case 997:
case 1487:
case 2902:
case 489:
case 2742:
case 225:
case 1203:
case 811:
case 312:
case 2011:
case 1963:
case 1351:
case 3634:
case 533:
case 1626:
case 3412:
case 840:
case 1073:
case 1379:
case 995:
case 3919:
case 1298:
case 1236:
case 3784:
case 3921:
case 2461:
case 3109:
case 3510:
case 3972:
case 2669:
case 3127:
case 2997:
case 932:
case 161:
case 1956:
case 2571:
case 3001:
case 2379:
case 3819:
case 2378:
case 2199:
case 2487:
case 556:
case 3018:
case 1062:
case 1514:
case 3480:
case 3940:
case 1860:
case 775:
case 3145:
case 3328:
case 149:
case 2480:
case 1317:
case 67:
case 2446:
case 2406:
case 278:
case 2474:
case 3691:
case 1264:
case 2599:
case 707:
case 3397:
case 3848:
case 827:
case 2943:
case 1512:
case 270:
case 948:
case 3764:
case 323:
case 136:
case 1595:
case 958:
case 1424:
case 3430:
case 564:
case 3865:
case 4:
case 716:
case 1631:
case 3345:
case 3908:
case 4072:
case 1894:
case 785:
case 3149:
case 2561:
case 2741:
case 1727:
case 2688:
case 3411:
case 2250:
case 2968:
case 649:
case 2130:
case 3493:
case 3267:
case 91:
case 245:
case 1395:
case 476:
case 124:
case 1328:
case 2846:
case 3297:
case 1753:
case 215:
case 2697:
case 1558:
case 1840:
case 2883:
case 1714:
case 2818:
case 3043:
case 3084:
case 3520:
case 1833:
case 374:
case 2749:
case 704:
case 1273:
case 3705:
case 1137:
case 1383:
case 4038:
case 1636:
case 287:
case 111:
case 2153:
case 2711:
case 2553:
case 2369:
case 1975:
case 1542:
case 21:
case 2464:
case 1921:
case 2739:
case 3465:
case 3388:
case 2999:
case 1162:
case 1518:
case 257:
case 1355:
case 561:
case 1890:
case 1634:
case 401:
case 130:
case 2704:
case 2355:
case 767:
case 448:
case 2262:
case 582:
case 1185:
case 1557:
case 3234:
case 2797:
case 2211:
case 219:
case 2206:
case 2016:
case 2769:
case 3991:
case 3558:
case 4051:
case 2331:
case 2972:
case 591:
case 2151:
case 463:
case 612:
case 2344:
case 461:
case 1130:
case 3205:
case 2803:
case 970:
case 832:
case 3851:
case 2612:
case 2242:
case 2841:
case 1314:
case 2454:
case 824:
case 701:
case 3103:
case 1447:
case 2547:
case 1880:
case 3710:
case 2881:
case 1802:
case 2358:
case 2724:
case 738:
case 3604:
case 2802:
case 3976:
case 2691:
case 1160:
case 3042:
case 3935:
case 2053:
case 2768:
case 2119:
case 1143:
case 2831:
case 1132:
case 3392:
case 2435:
case 3239:
case 747:
case 2357:
case 1988:
case 3787:
case 3702:
case 2258:
case 3918:
case 310:
case 3874:
case 3161:
case 3621:
case 1032:
case 1095:
case 3616:
case 2605:
case 1187:
case 2007:
case 2254:
case 3676:
case 2603:
case 2516:
case 2273:
case 2163:
case 183:
case 3091:
case 1638:
case 3139:
case 1599:
case 1312:
case 1250:
case 3541:
case 115:
case 1989:
case 3097:
case 1926:
case 2328:
case 984:
case 3958:
case 2457:
case 1698:
case 1092:
case 2646:
case 2648:
case 2733:
case 1713:
case 53:
case 3295:
case 1052:
case 3776:
case 539:
case 59:
case 98:
case 474:
case 510:
case 3751:
case 3728:
case 3814:
case 2317:
case 2495:
case 2557:
case 2793:
case 188:
case 3406:
case 623:
case 3220:
case 2911:
case 1871:
case 619:
case 3460:
case 1592:
case 2085:
case 2967:
case 2894:
case 3178:
case 2073:
case 3859:
case 743:
case 2596:
case 791:
case 1357:
case 911:
case 3302:
case 961:
case 3313:
case 2734:
case 549:
case 3016:
case 2190:
case 2953:
case 3831:
case 3584:
case 2426:
case 3338:
case 703:
case 1280:
case 279:
case 2833:
case 418:
case 426:
case 803:
case 1796:
case 3812:
case 2593:
case 4023:
case 1910:
case 3101:
case 2682:
case 171:
case 2420:
case 2246:
case 3492:
case 3383:
case 2703:
case 1503:
case 3456:
case 3030:
case 1168:
case 2811:
case 2812:
case 2445:
case 2537:
case 2756:
case 2390:
case 2019:
case 1163:
case 3883:
case 990:
case 3147:
case 2252:
case 3381:
case 2300:
case 224:
case 413:
case 3379:
case 1322:
case 1005:
case 973:
case 3559:
case 8:
case 2821:
case 2488:
case 2202:
case 2309:
case 3758:
case 1814:
case 729:
case 2498:
case 1402:
case 1673:
case 3904:
case 3225:
case 3961:
case 971:
case 3112:
case 2834:
case 3910:
case 121:
case 2804:
case 991:
case 2570:
case 3515:
case 1406:
case 3449:
case 1309:
case 3687:
case 1943:
case 866:
case 3771:
case 4088:
case 1126:
case 3892:
case 372:
case 186:
case 1977:
case 3684:
case 854:
case 1642:
case 3795:
case 573:
case 1225:
case 3959:
case 1959:
case 2458:
case 578:
case 1297:
case 2548:
case 3194:
case 1404:
case 2609:
case 3286:
case 587:
case 3164:
case 1825:
case 1393:
case 3189:
case 3083:
case 1035:
case 1613:
case 505:
case 2207:
case 184:
case 2078:
case 2247:
case 3544:
case 3227:
case 3560:
case 3646:
case 2934:
case 1112:
case 555:
case 229:
case 190:
case 4059:
case 1384:
case 2709:
case 1311:
case 1803:
case 2259:
case 3060:
case 3180:
case 2095:
case 2490:
case 1948:
case 228:
case 141:
case 3255:
case 752:
case 2400:
case 1884:
case 2581:
case 3563:
case 2521:
case 1901:
case 3236:
case 3860:
case 393:
case 4034:
case 198:
case 3692:
case 386:
case 79:
case 3729:
case 2255:
case 3730:
case 1174:
case 802:
case 1830:
case 2760:
case 3842:
case 3933:
case 1105:
case 3698:
case 1216:
case 2197:
case 1933:
case 1563:
case 302:
case 3294:
case 1354:
case 1491:
case 3897:
case 2001:
case 1504:
case 1976:
case 2982:
case 445:
case 3066:
case 2412:
case 3040:
case 1688:
case 400:
case 1704:
case 2116:
case 1076:
case 3263:
case 3118:
case 2778:
case 1565:
case 23:
case 1811:
case 387:
case 963:
case 1161:
case 430:
case 3543:
case 2221:
case 3023:
case 280:
case 2373:
case 4041:
case 2823:
case 25:
case 2000:
case 3740:
case 1102:
case 2687:
case 1293:
case 113:
case 3427:
case 2901:
case 2926:
case 1068:
case 1457:
case 2832:
case 3968:
case 3966:
case 303:
case 3827:
case 2916:
case 3049:
case 1909:
case 2359:
case 150:
case 678:
case 1449:
case 1990:
case 1712:
case 3768:
case 3054:
case 902:
case 2459:
case 2341:
case 2736:
case 497:
case 2692:
case 2121:
case 1798:
case 1171:
case 3264:
case 639:
case 72:
case 4084:
case 1499:
case 2351:
case 3134:
case 3289:
case 1269:
case 2545:
case 3450:
case 2668:
case 3628:
case 1040:
case 2729:
case 744:
case 3434:
case 283:
case 1905:
case 2376:
case 2277:
case 893:
case 1821:
case 152:
case 1648:
case 170:
case 3950:
case 1754:
case 1456:
case 715:
case 3637:
case 808:
case 2318:
case 2198:
case 2392:
case 1153:
case 3782:
case 2310:
case 3059:
case 1175:
case 2245:
case 967:
case 17:
case 520:
case 2866:
case 1345:
case 2417:
case 2493:
case 671:
case 1082:
case 2226:
case 3993:
case 1114:
case 741:
case 1495:
case 1419:
case 3738:
case 2275:
case 2762:
case 3074:
case 892:
case 2027:
case 2360:
case 1277:
case 3951:
case 1265:
case 0:
case 3175:
case 3009:
case 34:
case 2661:
case 1605:
case 3555:
case 493:
case 1585:
case 4049:
case 2546:
case 3444:
case 375:
case 1222:
case 362:
case 2522:
case 3244:
case 3070:
case 1471:
case 3592:
case 1932:
case 885:
case 306:
case 1842:
case 3061:
case 1100:
case 3943:
case 519:
case 2958:
case 2713:
case 3344:
case 3190:
case 2550:
case 2010:
case 2337:
case 2975:
case 2329:
case 3854:
case 1425:
case 3813:
case 664:
case 3722:
case 1434:
case 553:
case 4025:
case 3631:
case 3146:
case 3254:
case 2028:
case 2437:
case 269:
case 1315:
case 3202:
case 3322:
case 153:
case 1109:
case 1034:
case 2594:
case 15:
case 1000:
case 1287:
case 1152:
case 367:
case 2618:
case 1749:
case 3647:
case 1275:
case 1122:
case 2112:
case 3696:
case 1792:
case 3781:
case 1640:
case 3262:
case 545:
case 3276:
case 3811:
case 2005:
case 1458:
case 2815:
case 1405:
case 97:
case 2680:
case 1333:
case 825:
case 3039:
case 2147:
case 1608:
case 886:
case 3947:
case 1044:
case 1661:
case 3327:
case 1261:
case 1129:
case 3439:
case 4027:
case 125:
case 1221:
case 992:
case 1736:
case 1348:
case 3610:
case 202:
case 1127:
case 3364:
case 1868:
case 126:
case 2347:
case 1228:
case 3504:
case 1737:
case 2003:
case 3024:
case 1188:
case 3716:
case 3010:
case 1507:
case 889:
case 3142:
case 1138:
case 2276:
case 3881:
case 2219:
case 3162:
case 1869:
case 1454:
case 4071:
case 1004:
case 3725:
case 2504:
case 4094:
case 194:
case 2340:
case 2915:
case 2645:
case 3477:
case 3241:
case 1300:
case 1239:
case 2672:
case 1439:
case 2696:
case 3461:
case 298:
case 4033:
case 3212:
case 3268:
case 3413:
case 1003:
case 3551:
case 797:
case 3408:
case 1220:
case 1090:
case 2154:
case 1573:
case 626:
case 2889:
case 3506:
case 408:
case 3482:
case 3889:
case 232:
case 328:
case 2449:
case 1104:
case 2297:
case 3896:
case 1912:
case 3666:
case 2230:
case 1136:
case 1463:
case 810:
case 3282:
case 864:
case 1834:
case 2794:
case 135:
case 2106:
case 1078:
case 208:
case 3200:
case 651:
case 3648:
case 3659:
case 1586:
case 3891:
case 1973:
case 2862:
case 597:
case 4040:
case 2031:
case 1513:
case 148:
case 3718:
case 3779:
case 54:
case 3755:
case 1493:
case 410:
case 4026:
case 879:
case 2938:
case 906:
case 3333:
case 1024:
case 652:
case 1342:
case 1418:
case 1039:
case 1047:
case 3334:
case 256:
case 929:
case 62:
case 439:
case 517:
case 2079:
case 1479:
case 266:
case 1367:
case 1272:
case 1696:
case 3136:
case 92:
case 1525:
case 829:
case 3739:
case 2164:
case 1098:
case 870:
case 1654:
case 3697:
case 3111:
case 73:
case 3153:
case 2921:
case 3658:
case 2015:
case 2533:
case 609:
case 3337:
case 1590:
case 1083:
case 3067:
case 2283:
case 3955:
case 1349:
case 685:
case 134:
case 525:
case 3354:
case 606:
case 2526:
case 1731:
case 1389:
case 957:
case 1863:
case 3864:
case 852:
case 277:
case 1531:
case 1279:
case 2388:
case 3585:
case 2097:
case 2859:
case 473:
case 2787:
case 861:
case 300:
case 3253:
case 4014:
case 3715:
case 2845:
case 2145:
case 2082:
case 1248:
case 842:
case 2518:
case 1606:
case 3283:
case 1849:
case 3720:
case 1768:
case 666:
case 787:
case 213:
case 3583:
case 833:
case 357:
case 2223:
case 783:
case 3063:
case 1119:
case 1780:
case 402:
case 263:
case 1029:
case 1335:
case 996:
case 3407:
case 1150:
case 11:
case 959:
case 831:
case 672:
case 3780:
case 2651:
case 956:
case 1881:
case 1786:
case 88:
case 3888:
case 1096:
case 2759:
case 421:
case 2299:
case 565:
case 3424:
case 2472:
case 3261:
case 2523:
case 1715:
case 2460:
case 1072:
case 3540:
case 999:
case 2440:
case 1781:
case 145:
case 2671:
case 3457:
case 2185:
case 3197:
case 2427:
case 601:
case 3270:
case 1886:
case 1861:
case 3686:
case 3763:
case 1552:
case 3907:
case 2138:
case 1611:
case 87:
case 4067:
case 3567:
case 412:
case 2684:
case 3542:
case 242:
case 2012:
case 2294:
case 629:
case 3260:
case 503:
case 1554:
case 273:
case 2368:
case 4020:
case 237:
case 3163:
case 2919:
case 109:
case 2544:
case 2560:
case 2957:
case 1135:
case 1942:
case 1043:
case 688:
case 3443:
case 3380:
case 179:
case 2479:
case 2665:
case 1748:
case 740:
case 1229:
case 1346:
case 3713:
case 3339:
case 3196:
case 180:
case 3151:
case 1053:
case 3238:
case 1844:
case 1363:
case 2944:
case 1139:
case 602:
case 1075:
case 391:
case 1173:
case 249:
case 3176:
case 1025:
case 3507:
case 41:
case 1364:
case 3828:
case 1462:
case 2065:
case 1578:
case 2973:
case 2174:
case 1859:
case 2021:
case 631:
case 1166:
case 2860:
case 3664:
case 3581:
case 3937:
case 1149:
case 4066:
case 3689:
case 754:
case 2639:
case 2795:
case 89:
case 3105:
case 3172:
case 1936:
case 1:
case 3917:
case 3734:
case 895:
case 978:
case 1589:
case 1747:
case 2767:
case 379:
case 1198:
case 3673:
case 2556:
case 3174:
case 708:
case 804:
case 1808:
case 2835:
case 3419:
case 3977:
case 721:
case 2880:
case 3535:
case 1172:
case 3862:
case 351:
case 3916:
case 299:
case 114:
case 146:
case 1924:
case 2540:
case 2607:
case 182:
case 1656:
case 2204:
case 1027:
case 2865:
case 3361:
case 1099:
case 1662:
case 2748:
case 2063:
case 3137:
case 1010:
case 2667:
case 132:
case 563:
case 1576:
case 210:
case 2905:
case 2601:
case 795:
case 1241:
case 904:
case 1307:
case 3929:
case 3085:
case 1289:
case 3996:
case 1378:
case 1313:
case 247:
case 3094:
case 222:
case 2996:
case 1334:
case 3843:
case 3992:
case 712:
case 3549:
case 2800:
case 3037:
case 192:
case 718:
case 450:
case 500:
case 3847:
case 162:
case 484:
case 949:
case 37:
case 3156:
case 1866:
case 3133:
case 2045:
case 51:
case 977:
case 1326:
case 1945:
case 2786:
case 322:
case 3978:
case 3677:
case 2617:
case 1607:
case 75:
case 74:
case 490:
case 2049:
case 3969:
case 4061:
case 349:
case 42:
case 1841:
case 655:
case 3348:
case 1958:
case 2051:
case 2626:
case 355:
case 2117:
case 85:
case 945:
case 2597:
case 3711:
case 2900:
case 2278:
case 3849:
case 2225:
case 3742:
case 1422:
case 2828:
case 2430:
case 1413:
case 2807:
case 1538:
case 4037:
case 434:
case 3415:
case 3982:
case 2405:
case 3537:
case 1316:
case 3351:
case 793:
case 2681:
case 859:
case 3072:
case 1539:
case 745:
case 3106:
case 2381:
case 335:
case 3539:
case 835:
case 1443:
case 1408:
case 947:
case 2178:
case 3369:
case 95:
case 218:
case 482:
case 569:
case 2473:
case 2114:
case 2404:
case 3305:
case 2115:
case 2442:
case 2817:
case 2507:
case 1368:
case 3963:
case 501:
case 2650:
case 1306:
case 2738:
case 3002:
case 2912:
case 2608:
case 3320:
case 1971:
case 1835:
case 3717:
case 1533:
case 3925:
case 2155:
case 2478:
case 946:
case 2624:
case 3759:
case 3423:
case 498:
case 1900:
case 2647:
case 1785:
case 3340:
case 49:
case 3840:
case 1067:
case 1101:
case 2233:
case 2161:
case 1765:
case 26:
case 2991:
case 1800:
case 366:
case 2508:
case 2395:
case 2520:
case 174:
case 936:
case 2002:
case 3298:
case 3459:
case 3988:
case 394:
case 1853:
case 3714:
case 2026:
case 2610:
case 1536:
case 4068:
case 1421:
case 654:
case 282:
case 2775:
case 2133:
case 841:
case 429:
case 1955:
case 133:
case 3598:
case 2386:
case 1967:
case 2251:
case 1511:
case 883:
case 1031:
case 1223:
case 3237:
case 933:
case 2272:
case 255:
case 3853:
case 627:
case 3451:
case 1428:
case 2321:
case 1496:
case 2904:
case 1795:
case 2149:
case 1451:
case 2820:
case 779:
case 3642:
case 16:
case 1724:
case 240:
case 2229:
case 3321:
case 3170:
case 2374:
case 4081:
case 86:
case 2008:
case 1709:
case 2705:
case 1501:
case 2575:
case 1856:
case 217:
case 3912:
case 3706:
case 2990:
case 1581:
case 251:
case 813:
case 4032:
case 950:
case 243:
case 2072:
case 3394:
case 3882:
case 1030:
case 665:
case 2962:
case 3485:
case 1155:
case 1615:
case 2966:
case 2032:
case 241:
case 1087:
case 2929:
case 3575:
case 3188:
case 3404:
case 1179:
case 1927:
case 10:
case 343:
case 437:
case 4000:
case 1604:
case 3047:
case 613:
case 1278:
case 3536:
case 2193:
case 2899:
case 1810:
case 836:
case 3553:
case 1085:
case 3032:
case 2314:
case 2690:
case 3638:
case 2535:
case 292:
case 527:
case 3473:
case 319:
case 1740:
case 1651:
case 2336:
case 717:
case 3822:
case 3402:
case 1249:
case 1006:
case 1966:
case 1382:
case 2509:
case 1893:
case 2702:
case 976:
case 475:
case 1080:
case 3942:
case 3998:
case 3623:
case 1476:
case 3121:
case 1655:
case 1777:
case 3159:
case 2421:
case 350:
case 3250:
case 3564:
case 2044:
case 2:
case 4042:
case 371:
case 2914:
case 1089:
case 2983:
case 3141:
case 169:
case 1879:
case 823:
case 2670:
case 339:
case 3052:
case 2791:
case 3041:
case 3683:
case 3906:
case 1823:
case 891:
case 3967:
case 3679:
case 31:
case 2942:
case 1612:
case 1015:
case 2643:
case 2372:
case 2281:
case 3252:
case 873:
case 3365:
case 112:
case 3315:
case 3343:
case 3422:
case 3232:
case 285:
case 2343:
case 2171:
case 1296:
case 284:
case 3169:
case 611:
case 939:
case 3081:
case 966:
case 1247:
case 3615:
case 2192:
case 1561:
case 1329:
case 433:
case 2268:
case 550:
case 1596:
case 2325:
case 2428:
case 1908:
case 2482:
case 3762:
case 2144:
case 3331:
case 4015:
case 1448:
case 3601:
case 1361:
case 2773:
case 2950:
case 3075:
case 1061:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1714453201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,];
var gg_b = "1714453201/";

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
