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
var o = 1;
switch (g) {
case 3488:
case 286:
case 3764:
case 1113:
case 617:
case 25:
case 263:
case 3813:
case 720:
case 3478:
case 233:
case 4049:
case 2052:
case 3054:
case 3964:
case 2239:
case 2169:
case 535:
case 1930:
case 2861:
case 2743:
case 4075:
case 912:
case 645:
case 2995:
case 2305:
case 1355:
case 4046:
case 1730:
case 3158:
case 2823:
case 2236:
case 830:
case 4085:
case 3810:
case 134:
case 3675:
case 3937:
case 3888:
case 3592:
case 3385:
case 3685:
case 1322:
case 3878:
case 1178:
case 164:
case 527:
case 685:
case 1417:
case 3349:
case 1933:
case 1314:
case 2461:
case 3538:
case 2224:
case 3222:
case 2423:
case 2820:
case 2940:
case 51:
case 1458:
case 419:
case 133:
case 3336:
case 3004:
case 2002:
case 3231:
case 1239:
case 3947:
case 1962:
case 3205:
case 3827:
case 186:
case 3866:
case 1166:
case 316:
case 15:
case 8:
case 2113:
case 2730:
case 2355:
case 3339:
case 2858:
case 1305:
case 1995:
case 1236:
case 90:
case 323:
case 1420:
case 1943:
case 835:
case 560:
case 1823:
case 1861:
case 2930:
case 49:
case 1169:
case 599:
case 2817:
case 1631:
case 4024:
case 941:
case 767:
case 3324:
case 2322:
case 701:
case 1212:
case 234:
case 768:
case 2249:
case 3466:
case 1594:
case 2188:
case 3612:
case 756:
case 78:
case 81:
case 2285:
case 1740:
case 680:
case 3469:
case 3082:
case 502:
case 828:
case 2933:
case 1851:
case 2109:
case 2835:
case 347:
case 1476:
case 2030:
case 883:
case 2665:
case 509:
case 544:
case 40:
case 2868:
case 1486:
case 3190:
case 2549:
case 713:
case 1095:
case 1445:
case 1512:
case 280:
case 857:
case 185:
case 2692:
case 3856:
case 3694:
case 3471:
case 1524:
case 3704:
case 2702:
case 481:
case 858:
case 2546:
case 1489:
case 3047:
case 1952:
case 2392:
case 2902:
case 2984:
case 2774:
case 3505:
case 843:
case 3531:
case 592:
case 1648:
case 2401:
case 387:
case 2435:
case 3782:
case 3972:
case 2974:
case 1845:
case 3193:
case 2468:
case 118:
case 388:
case 1893:
case 1536:
case 441:
case 1171:
case 3456:
case 1879:
case 791:
case 3248:
case 1181:
case 33:
case 3881:
case 3897:
case 583:
case 1365:
case 3541:
case 3292:
case 2043:
case 2486:
case 2493:
case 844:
case 2512:
case 2445:
case 1638:
case 1835:
case 536:
case 2476:
case 1109:
case 3809:
case 1338:
case 1801:
case 2159:
case 646:
case 1030:
case 354:
case 3064:
case 1902:
case 3265:
case 1585:
case 3954:
case 310:
case 2156:
case 1575:
case 1702:
case 3522:
case 3238:
case 2925:
case 1974:
case 2348:
case 884:
case 2539:
case 2725:
case 1984:
case 2451:
case 1435:
case 919:
case 2648:
case 872:
case 3409:
case 2889:
case 2197:
case 2181:
case 2536:
case 245:
case 2879:
case 2171:
case 3847:
case 468:
case 2580:
case 991:
case 2164:
case 1147:
case 176:
case 3056:
case 1332:
case 971:
case 401:
case 1843:
case 1923:
case 2068:
case 1440:
case 3143:
case 3769:
case 3195:
case 1398:
case 1908:
case 3059:
case 1723:
case 456:
case 2660:
case 2001:
case 2917:
case 48:
case 4011:
case 589:
case 3528:
case 2234:
case 1961:
case 1708:
case 3216:
case 262:
case 3097:
case 1462:
case 3081:
case 2583:
case 1319:
case 425:
case 3447:
case 1089:
case 3611:
case 2137:
case 1079:
case 3071:
case 232:
case 1211:
case 3219:
case 2363:
case 79:
case 331:
case 1244:
case 670:
case 1316:
case 2599:
case 3140:
case 1920:
case 549:
case 3500:
case 639:
case 690:
case 2321:
case 3006:
case 1570:
case 100:
case 3913:
case 1557:
case 205:
case 3437:
case 276:
case 4029:
case 3634:
case 2698:
case 914:
case 1660:
case 3553:
case 2723:
case 2961:
case 2708:
case 719:
case 1234:
case 1758:
case 3130:
case 950:
case 1068:
case 503:
case 2398:
case 2908:
case 1229:
case 3988:
case 132:
case 3326:
case 1642:
case 3667:
case 2079:
case 3626:
case 162:
case 3788:
case 3978:
case 221:
case 420:
case 2319:
case 2089:
case 2462:
case 3133:
case 1430:
case 2616:
case 1833:
case 606:
case 695:
case 1321:
case 1663:
case 1363:
case 2211:
case 2920:
case 849:
case 1267:
case 2443:
case 2093:
case 2086:
case 2316:
case 621:
case 1273:
case 2008:
case 2425:
case 4080:
case 2300:
case 2990:
case 1968:
case 842:
case 1701:
case 1377:
case 2751:
case 1529:
case 1350:
case 4018:
case 1735:
case 2023:
case 4057:
case 1484:
case 2061:
case 1283:
case 1296:
case 1677:
case 329:
case 450:
case 1650:
case 3909:
case 1901:
case 1391:
case 2790:
case 251:
case 1768:
case 2951:
case 2852:
case 3696:
case 3683:
case 169:
case 2104:
case 1154:
case 3373:
case 275:
case 206:
case 1567:
case 3287:
case 3415:
case 3673:
case 2544:
case 3013:
case 3396:
case 3383:
case 894:
case 2020:
case 882:
case 2993:
case 2986:
case 1257:
case 1874:
case 2825:
case 676:
case 874:
case 1218:
case 2976:
case 2786:
case 2793:
case 4073:
case 1653:
case 1884:
case 712:
case 2603:
case 3357:
case 3618:
case 2779:
case 2452:
case 3680:
case 3078:
case 1402:
case 2979:
case 3010:
case 3815:
case 3670:
case 1115:
case 542:
case 2283:
case 2296:
case 893:
case 3069:
case 3482:
case 2484:
case 3959:
case 2935:
case 2901:
case 2017:
case 1790:
case 2768:
case 3516:
case 2058:
case 1425:
case 3472:
case 2474:
case 956:
case 1008:
case 2691:
case 2273:
case 3759:
case 2529:
case 2350:
case 1990:
case 2968:
case 2377:
case 2701:
case 98:
case 491:
case 968:
case 2299:
case 195:
case 1511:
case 937:
case 239:
case 3519:
case 1104:
case 1852:
case 3200:
case 3027:
case 901:
case 938:
case 600:
case 378:
case 1976:
case 413:
case 2218:
case 1603:
case 594:
case 2280:
case 582:
case 3598:
case 1182:
case 1745:
case 2884:
case 398:
case 377:
case 1986:
case 1303:
case 1993:
case 1020:
case 2353:
case 1172:
case 70:
case 1945:
case 1825:
case 1207:
case 574:
case 2257:
case 1328:
case 2874:
case 3872:
case 3781:
case 811:
case 3771:
case 3997:
case 2534:
case 3532:
case 2402:
case 3404:
case 3203:
case 1452:
case 426:
case 2345:
case 683:
case 2676:
case 2281:
case 2569:
case 4006:
case 2928:
case 1465:
case 2386:
case 3517:
case 2016:
case 1953:
case 2693:
case 2271:
case 636:
case 3558:
case 2703:
case 3029:
case 1021:
case 2566:
case 3718:
case 228:
case 2019:
case 1513:
case 3970:
case 657:
case 227:
case 929:
case 2689:
case 3918:
case 3980:
case 3757:
case 102:
case 724:
case 533:
case 3799:
case 1791:
case 1368:
case 1635:
case 643:
case 2651:
case 3609:
case 1601:
case 3138:
case 2351:
case 2700:
case 1301:
case 1777:
case 1991:
case 3309:
case 3999:
case 2256:
case 1668:
case 2690:
case 3796:
case 422:
case 3783:
case 3973:
case 179:
case 1510:
case 265:
case 1892:
case 2194:
case 3192:
case 160:
case 2032:
case 3983:
case 199:
case 130:
case 3773:
case 3201:
case 1728:
case 3279:
case 534:
case 1376:
case 609:
case 1848:
case 1676:
case 1281:
case 367:
case 1297:
case 1393:
case 1903:
case 1016:
case 2465:
case 3276:
case 3681:
case 127:
case 1379:
case 3707:
case 3371:
case 128:
case 2492:
case 356:
case 11:
case 3907:
case 2513:
case 38:
case 1389:
case 3245:
case 2777:
case 2301:
case 2991:
case 692:
case 3359:
case 716:
case 1351:
case 684:
case 833:
case 2206:
case 1256:
case 1:
case 2368:
case 1900:
case 672:
case 1448:
case 1651:
case 978:
case 3356:
case 135:
case 2578:
case 408:
case 3251:
case 279:
case 2510:
case 461:
case 34:
case 723:
case 2588:
case 2892:
case 3656:
case 407:
case 4069:
case 817:
case 355:
case 1919:
case 3007:
case 3220:
case 143:
case 1124:
case 3824:
case 2822:
case 2175:
case 284:
case 818:
case 292:
case 3711:
case 2146:
case 2185:
case 82:
case 787:
case 1559:
case 1320:
case 3551:
case 2509:
case 845:
case 1916:
case 679:
case 1028:
case 73:
case 1405:
case 2921:
case 630:
case 699:
case 1716:
case 753:
case 2288:
case 76:
case 3812:
case 2814:
case 2210:
case 1112:
case 540:
case 3836:
case 497:
case 1136:
case 748:
case 166:
case 931:
case 1571:
case 3366:
case 136:
case 477:
case 498:
case 3627:
case 1597:
case 1269:
case 1581:
case 3261:
case 3589:
case 1932:
case 1998:
case 3105:
case 2617:
case 2358:
case 1805:
case 1661:
case 1000:
case 157:
case 2077:
case 3576:
case 885:
case 2050:
case 3369:
case 2414:
case 3545:
case 1798:
case 1361:
case 580:
case 1623:
case 2091:
case 158:
case 2087:
case 326:
case 1266:
case 2441:
case 2658:
case 602:
case 314:
case 2719:
case 3678:
case 184:
case 3846:
case 3767:
case 1742:
case 1185:
case 3885:
case 6:
case 1506:
case 3070:
case 52:
case 3057:
case 3726:
case 172:
case 1175:
case 3378:
case 518:
case 3122:
case 3875:
case 2716:
case 1149:
case 3568:
case 1921:
case 1841:
case 3929:
case 3114:
case 2112:
case 1763:
case 452:
case 545:
case 1814:
case 2916:
case 2003:
case 1278:
case 1509:
case 3729:
case 2320:
case 3535:
case 1963:
case 2028:
case 2431:
case 4013:
case 3485:
case 144:
case 109:
case 3083:
case 2136:
case 283:
case 3258:
case 3073:
case 2571:
case 2623:
case 1414:
case 2361:
case 2608:
case 1091:
case 1317:
case 258:
case 3449:
case 3155:
case 2805:
case 1358:
case 754:
case 1617:
case 2831:
case 2998:
case 4088:
case 61:
case 2000:
case 1077:
case 880:
case 2661:
case 915:
case 2041:
case 3543:
case 2674:
case 3672:
case 532:
case 821:
case 1748:
case 3595:
case 2014:
case 3382:
case 1803:
case 416:
case 2450:
case 562:
case 2853:
case 3682:
case 3103:
case 1325:
case 3128:
case 3372:
case 761:
case 37:
case 2180:
case 1547:
case 707:
case 2118:
case 3225:
case 39:
case 2157:
case 1107:
case 948:
case 2022:
case 708:
case 96:
case 682:
case 694:
case 2765:
case 2887:
case 1428:
case 1204:
case 2965:
case 674:
case 1403:
case 93:
case 1800:
case 2453:
case 2792:
case 2183:
case 2196:
case 1652:
case 3304:
case 2302:
case 2992:
case 103:
case 1352:
case 2173:
case 3407:
case 832:
case 1684:
case 1853:
case 521:
case 3153:
case 2803:
case 2948:
case 759:
case 693:
case 2325:
case 3049:
case 2625:
case 1014:
case 2748:
case 673:
case 3473:
case 3274:
case 1157:
case 3870:
case 3075:
case 1022:
case 3284:
case 3046:
case 2282:
case 104:
case 149:
case 1180:
case 1564:
case 3496:
case 3880:
case 1118:
case 3315:
case 2428:
case 3533:
case 2005:
case 3150:
case 1453:
case 800:
case 576:
case 2204:
case 3202:
case 1965:
case 1850:
case 1938:
case 1199:
case 1765:
case 3187:
case 596:
case 1537:
case 2352:
case 1992:
case 3457:
case 1173:
case 611:
case 3418:
case 1792:
case 2652:
case 3883:
case 3896:
case 189:
case 1602:
case 3480:
case 1196:
case 3775:
case 2504:
case 1722:
case 1554:
case 182:
case 1167:
case 3975:
case 2144:
case 3785:
case 3142:
case 1842:
case 3867:
case 174:
case 2111:
case 1914:
case 1333:
case 4064:
case 3949:
case 1941:
case 3121:
case 1237:
case 1460:
case 3163:
case 1714:
case 2048:
case 410:
case 603:
case 1741:
case 2340:
case 2816:
case 1633:
case 729:
case 3230:
case 142:
case 3834:
case 2832:
case 273:
case 924:
case 551:
case 2362:
case 293:
case 1092:
case 1515:
case 3429:
case 1038:
case 506:
case 2695:
case 1755:
case 869:
case 595:
case 3574:
case 890:
case 1630:
case 4037:
case 2898:
case 1860:
case 752:
case 3160:
case 2582:
case 1264:
case 2395:
case 2922:
case 777:
case 3924:
case 2842:
case 447:
case 1144:
case 3240:
case 923:
case 3119:
case 3552:
case 2554:
case 2722:
case 1432:
case 2863:
case 1048:
case 415:
case 3712:
case 2741:
case 1340:
case 1640:
case 3912:
case 689:
case 2237:
case 2941:
case 2821:
case 3411:
case 1362:
case 3347:
case 851:
case 487:
case 3444:
case 2442:
case 3936:
case 193:
case 1832:
case 242:
case 2134:
case 3647:
case 341:
case 46:
case 453:
case 2065:
case 569:
case 895:
case 2630:
case 3198:
case 2463:
case 1898:
case 2860:
case 806:
case 1931:
case 875:
case 1695:
case 649:
case 2421:
case 2038:
case 1643:
case 590:
case 1705:
case 43:
case 1731:
case 3739:
case 1310:
case 4058:
case 1080:
case 1678:
case 114:
case 3146:
case 392:
case 1926:
case 3185:
case 1388:
case 1688:
case 1070:
case 150:
case 3506:
case 372:
case 3822:
case 1967:
case 1610:
case 2944:
case 2436:
case 588:
case 1122:
case 271:
case 3149:
case 553:
case 3841:
case 3210:
case 3763:
case 1114:
case 3814:
case 740:
case 470:
case 3278:
case 3721:
case 2551:
case 53:
case 1217:
case 668:
case 1485:
case 2366:
case 1934:
case 1083:
case 1096:
case 309:
case 1313:
case 2589:
case 2261:
case 1446:
case 3422:
case 1475:
case 1613:
case 667:
case 2327:
case 1734:
case 2208:
case 601:
case 1073:
case 3213:
case 854:
case 932:
case 3658:
case 1449:
case 3091:
case 2586:
case 3317:
case 1099:
case 1155:
case 2839:
case 656:
case 2105:
case 3050:
case 2669:
case 68:
case 2057:
case 2726:
case 1007:
case 1911:
case 250:
case 2688:
case 718:
case 3124:
case 2122:
case 343:
case 2875:
case 2610:
case 2967:
case 4008:
case 3719:
case 214:
case 2310:
case 1711:
case 2080:
case 717:
case 2388:
case 2767:
case 1744:
case 2729:
case 1551:
case 406:
case 3559:
case 3003:
case 2501:
case 3028:
case 86:
case 3405:
case 853:
case 905:
case 2141:
case 171:
case 83:
case 996:
case 2475:
case 2613:
case 1836:
case 1223:
case 2073:
case 3571:
case 366:
case 2734:
case 1327:
case 2258:
case 847:
case 2217:
case 4020:
case 1627:
case 1589:
case 1261:
case 2083:
case 2096:
case 3581:
case 2313:
case 848:
case 2934:
case 3932:
case 921:
case 554:
case 1839:
case 3998:
case 3139:
case 2155:
case 3227:
case 3805:
case 1131:
case 357:
case 3000:
case 3661:
case 3323:
case 3361:
case 3798:
case 1545:
case 1369:
case 785:
case 3728:
case 2558:
case 3271:
case 3693:
case 3686:
case 168:
case 1279:
case 906:
case 476:
case 2029:
case 3703:
case 137:
case 1561:
case 1289:
case 405:
case 3569:
case 167:
case 3297:
case 975:
case 3016:
case 101:
case 3903:
case 2517:
case 3386:
case 1681:
case 1276:
case 2918:
case 3689:
case 1371:
case 3679:
case 156:
case 2718:
case 1286:
case 1293:
case 328:
case 31:
case 3389:
case 18:
case 2780:
case 2970:
case 1397:
case 1011:
case 786:
case 3351:
case 421:
case 3256:
case 125:
case 4089:
case 2799:
case 733:
case 3900:
case 3:
case 3098:
case 816:
case 4079:
case 2773:
case 823:
case 2996:
case 3032:
case 1356:
case 4086:
case 3259:
case 2973:
case 2783:
case 2192:
case 3194:
case 2268:
case 1894:
case 365:
case 2148:
case 969:
case 2561:
case 2289:
case 201:
case 1517:
case 970:
case 3465:
case 2279:
case 2508:
case 734:
case 990:
case 237:
case 3021:
case 2523:
case 3438:
case 2044:
case 2671:
case 3042:
case 2293:
case 1718:
case 824:
case 2381:
case 28:
case 1780:
case 1970:
case 3513:
case 2397:
case 2907:
case 1918:
case 2681:
case 2371:
case 1026:
case 302:
case 3950:
case 3368:
case 3977:
case 1165:
case 2659:
case 432:
case 3601:
case 1609:
case 3060:
case 3750:
case 1138:
case 1309:
case 1999:
case 3991:
case 462:
case 516:
case 225:
case 379:
case 1973:
case 1796:
case 1783:
case 2656:
case 1606:
case 1192:
case 1773:
case 671:
case 1306:
case 2251:
case 3578:
case 1201:
case 1844:
case 1924:
case 1240:
case 2785:
case 3144:
case 878:
case 10:
case 3819:
case 2746:
case 1119:
case 3111:
case 4043:
case 2775:
case 3432:
case 212:
case 4095:
case 898:
case 2826:
case 2946:
case 933:
case 1712:
case 2163:
case 181:
case 3340:
case 2749:
case 4062:
case 3640:
case 963:
case 2949:
case 2829:
case 1347:
case 3419:
case 3362:
case 1295:
case 1411:
case 2467:
case 1094:
case 1243:
case 1444:
case 393:
case 417:
case 42:
case 2834:
case 1132:
case 2426:
case 1647:
case 4040:
case 751:
case 373:
case 141:
case 3582:
case 1198:
case 2160:
case 3247:
case 3395:
case 1262:
case 775:
case 3931:
case 1939:
case 552:
case 2429:
case 795:
case 3572:
case 3643:
case 2574:
case 1525:
case 1502:
case 3554:
case 2552:
case 3722:
case 2724:
case 394:
case 382:
case 3126:
case 112:
case 1785:
case 1975:
case 577:
case 3922:
case 3842:
case 4030:
case 374:
case 20:
case 2912:
case 3914:
case 3941:
case 1949:
case 3129:
case 480:
case 3714:
case 2712:
case 1163:
case 3460:
case 3863:
case 1749:
case 3741:
case 281:
case 342:
case 1230:
case 2132:
case 2736:
case 1664:
case 4033:
case 1364:
case 829:
case 2936:
case 3515:
case 2094:
case 67:
case 3038:
case 1429:
case 3755:
case 790:
case 739:
case 769:
case 69:
case 3630:
case 2939:
case 3955:
case 770:
case 3264:
case 1584:
case 2198:
case 762:
case 2103:
case 3477:
case 1153:
case 1530:
case 1049:
case 3491:
case 3215:
case 2672:
case 3674:
case 3041:
case 1499:
case 4002:
case 3384:
case 3014:
case 1857:
case 641:
case 1615:
case 29:
case 2807:
case 2225:
case 531:
case 508:
case 3180:
case 1880:
case 1315:
case 1085:
case 3118:
case 1818:
case 434:
case 60:
case 3453:
case 3738:
case 1150:
case 3850:
case 2100:
case 1177:
case 700:
case 3887:
case 940:
case 3765:
case 3537:
case 3302:
case 1873:
case 681:
case 1470:
case 2794:
case 3792:
case 1418:
case 389:
case 1883:
case 1654:
case 119:
case 3602:
case 3625:
case 985:
case 2049:
case 4052:
case 1012:
case 3748:
case 3803:
case 3400:
case 1682:
case 3325:
case 463:
case 1372:
case 17:
case 522:
case 3282:
case 2284:
case 1562:
case 2483:
case 2085:
case 1807:
case 2615:
case 3272:
case 2274:
case 861:
case 2075:
case 1540:
case 2187:
case 2191:
case 796:
case 945:
case 1100:
case 2202:
case 2150:
case 1252:
case 4025:
case 2480:
case 917:
case 2896:
case 2883:
case 2654:
case 3652:
case 1304:
case 2354:
case 92:
case 1036:
case 303:
case 2470:
case 1407:
case 2457:
case 1292:
case 3365:
case 513:
case 3868:
case 3638:
case 482:
case 904:
case 3109:
case 1101:
case 247:
case 3835:
case 949:
case 2151:
case 3665:
case 744:
case 474:
case 1064:
case 2497:
case 154:
case 3546:
case 3392:
case 3902:
case 1954:
case 2856:
case 3692:
case 110:
case 3106:
case 380:
case 526:
case 1754:
case 1238:
case 1522:
case 555:
case 442:
case 2972:
case 2782:
case 3468:
case 2186:
case 2193:
case 2531:
case 1555:
case 2772:
case 792:
case 3774:
case 2459:
case 850:
case 989:
case 1409:
case 3401:
case 1715:
case 591:
case 623:
case 2248:
case 2189:
case 1037:
case 1406:
case 1151:
case 3159:
case 2135:
case 3476:
case 2101:
case 147:
case 3890:
case 3294:
case 3043:
case 148:
case 2168:
case 1190:
case 3486:
case 3493:
case 3512:
case 3095:
case 115:
case 3156:
case 2806:
case 4048:
case 210:
case 1471:
case 1856:
case 385:
case 3479:
case 2238:
case 2522:
case 3524:
case 2754:
case 3752:
case 1704:
case 826:
case 254:
case 1047:
case 3062:
case 2064:
case 1497:
case 1505:
case 514:
case 1982:
case 2555:
case 3725:
case 317:
case 3648:
case 855:
case 1972:
case 1782:
case 3925:
case 903:
case 3845:
case 743:
case 318:
case 3490:
case 473:
case 1193:
case 3886:
case 3893:
case 188:
case 2915:
case 16:
case 2037:
case 153:
case 3171:
case 1179:
case 345:
case 1456:
case 3197:
case 1248:
case 871:
case 2054:
case 3052:
case 1004:
case 825:
case 2478:
case 3239:
case 1231:
case 3127:
case 1827:
case 1947:
case 1866:
case 386:
case 116:
case 2488:
case 3166:
case 2813:
case 363:
case 1636:
case 1747:
case 2410:
case 3762:
case 1339:
case 3808:
case 3331:
case 1108:
case 3420:
case 123:
case 3823:
case 3943:
case 1869:
case 3795:
case 1639:
case 3743:
case 3605:
case 2117:
case 837:
case 2375:
case 2878:
case 2737:
case 3212:
case 4031:
case 2413:
case 838:
case 4005:
case 2810:
case 801:
case 1624:
case 1466:
case 2592:
case 2385:
case 867:
case 2937:
case 2888:
case 654:
case 2222:
case 3224:
case 2538:
case 1120:
case 3408:
case 1072:
case 71:
case 403:
case 2349:
case 610:
case 973:
case 856:
case 216:
case 2866:
case 1813:
case 687:
case 3002:
case 2004:
case 1478:
case 1054:
case 820:
case 4041:
case 2205:
case 1964:
case 2231:
case 688:
case 4014:
case 799:
case 730:
case 653:
case 3930:
case 982:
case 1117:
case 4022:
case 2108:
case 3858:
case 449:
case 3730:
case 779:
case 3355:
case 2339:
case 404:
case 63:
case 3622:
case 2624:
case 647:
case 1413:
case 1675:
case 334:
case 4055:
case 3249:
case 3188:
case 1241:
case 567:
case 1685:
case 1737:
case 3322:
case 2324:
case 1646:
case 501:
case 364:
case 538:
case 615:
case 942:
case 3285:
case 3417:
case 1565:
case 2469:
case 2082:
case 3084:
case 2312:
case 702:
case 3275:
case 556:
case 3733:
case 2072:
case 489:
case 3061:
case 2563:
case 1069:
case 229:
case 927:
case 1959:
case 3951:
case 2399:
case 3790:
case 3023:
case 91:
case 659:
case 3300:
case 793:
case 2709:
case 4003:
case 3544:
case 2673:
case 2291:
case 2542:
case 2287:
case 841:
case 395:
case 3511:
case 2013:
case 2250:
case 1804:
case 2277:
case 1200:
case 2854:
case 3852:
case 2102:
case 252:
case 2373:
case 3793:
case 3976:
case 178:
case 935:
case 2184:
case 3182:
case 2560:
case 1598:
case 1882:
case 3993:
case 3776:
case 436:
case 3020:
case 3825:
case 3945:
case 3172:
case 965:
case 1125:
case 3789:
case 1971:
case 1781:
case 2088:
case 1607:
case 2670:
case 4000:
case 2815:
case 1997:
case 1307:
case 1771:
case 9:
case 1228:
case 1532:
case 2680:
case 1203:
case 2078:
case 3452:
case 2454:
case 458:
case 3474:
case 3691:
case 3687:
case 3058:
case 1709:
case 3968:
case 1521:
case 2759:
case 3350:
case 129:
case 3677:
case 2069:
case 3484:
case 742:
case 3650:
case 2516:
case 3768:
case 2959:
case 3935:
case 902:
case 541:
case 2200:
case 3154:
case 1250:
case 631:
case 1706:
case 1373:
case 370:
case 2027:
case 152:
case 1415:
case 1291:
case 1542:
case 661:
case 1287:
case 3567:
case 4053:
case 1396:
case 1383:
case 1906:
case 607:
case 390:
case 2519:
case 2956:
case 3353:
case 979:
case 277:
case 774:
case 2872:
case 444:
case 1174:
case 3270:
case 297:
case 999:
case 782:
case 2882:
case 3280:
case 2598:
case 1560:
case 2228:
case 3534:
case 2997:
case 2771:
case 1370:
case 1454:
case 4087:
case 2404:
case 3402:
case 1078:
case 2971:
case 1380:
case 1657:
case 4077:
case 1815:
case 3115:
case 1088:
case 300:
case 678:
case 697:
case 2727:
case 4063:
case 3164:
case 2162:
case 677:
case 1260:
case 2298:
case 2847:
case 2927:
case 1864:
case 2766:
case 3518:
case 1634:
case 3001:
case 992:
case 4042:
case 984:
case 3830:
case 2969:
case 1130:
case 2528:
case 3068:
case 3717:
case 2195:
case 3360:
case 3229:
case 1988:
case 1837:
case 2611:
case 332:
case 2644:
case 3573:
case 1910:
case 1626:
case 2344:
case 2216:
case 1978:
case 1788:
case 3583:
case 3596:
case 2311:
case 3430:
case 122:
case 1133:
case 1577:
case 909:
case 207:
case 2500:
case 1629:
case 59:
case 3621:
case 499:
case 430:
case 1591:
case 2140:
case 3862:
case 2864:
case 1847:
case 1298:
case 2713:
case 1162:
case 3632:
case 376:
case 1056:
case 3332:
case 2334:
case 1727:
case 2006:
case 1966:
case 396:
case 3923:
case 427:
case 3843:
case 1143:
case 703:
case 3090:
case 3895:
case 943:
case 3761:
case 3908:
case 3051:
case 3723:
case 428:
case 1059:
case 2009:
case 3698:
case 4019:
case 1232:
case 1528:
case 41:
case 2788:
case 1216:
case 1447:
case 2263:
case 2464:
case 3462:
case 259:
case 2710:
case 1097:
case 2837:
case 1611:
case 629:
case 2778:
case 2221:
case 4:
case 958:
case 1071:
case 2910:
case 2667:
case 3079:
case 3495:
case 3211:
case 2629:
case 1140:
case 108:
case 131:
case 3244:
case 3093:
case 652:
case 3840:
case 3616:
case 222:
case 3076:
case 2329:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1760425201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,];
var gg_b = "1760425201/";

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
