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
case 1182:
case 3730:
case 4007:
case 4056:
case 3922:
case 3713:
case 2492:
case 277:
case 3637:
case 1691:
case 2596:
case 2343:
case 1661:
case 757:
case 3412:
case 3977:
case 2469:
case 2793:
case 2566:
case 2146:
case 3657:
case 3606:
case 2462:
case 3470:
case 3750:
case 494:
case 7:
case 3404:
case 2016:
case 2357:
case 3236:
case 94:
case 2758:
case 2478:
case 1001:
case 1852:
case 1334:
case 1335:
case 3787:
case 3942:
case 1859:
case 441:
case 106:
case 1032:
case 3896:
case 3866:
case 1299:
case 1801:
case 2816:
case 1908:
case 11:
case 109:
case 1052:
case 2126:
case 3643:
case 1832:
case 3096:
case 1873:
case 1839:
case 996:
case 298:
case 840:
case 1219:
case 2896:
case 446:
case 64:
case 1212:
case 130:
case 101:
case 1205:
case 1204:
case 2949:
case 3016:
case 3758:
case 2236:
case 3478:
case 3306:
case 2066:
case 1741:
case 1270:
case 707:
case 2388:
case 1391:
case 2256:
case 991:
case 3126:
case 181:
case 1784:
case 1785:
case 2866:
case 3171:
case 3816:
case 377:
case 1974:
case 3492:
case 2922:
case 1900:
case 1654:
case 3499:
case 3763:
case 1655:
case 3596:
case 2637:
case 2929:
case 159:
case 2730:
case 1559:
case 2470:
case 114:
case 1532:
case 156:
case 2404:
case 3793:
case 2977:
case 343:
case 3462:
case 2657:
case 2623:
case 1634:
case 3753:
case 1664:
case 241:
case 3432:
case 3328:
case 3727:
case 2383:
case 346:
case 2697:
case 3536:
case 3439:
case 1569:
case 1466:
case 2790:
case 153:
case 1562:
case 3620:
case 1592:
case 155:
case 3710:
case 2760:
case 498:
case 39:
case 3108:
case 292:
case 1694:
case 3507:
case 1695:
case 3556:
case 2100:
case 477:
case 1129:
case 2174:
case 1805:
case 2175:
case 1804:
case 1122:
case 2296:
case 1351:
case 2056:
case 3989:
case 1812:
case 3367:
case 1819:
case 3982:
case 3747:
case 1314:
case 1315:
case 2036:
case 3683:
case 3397:
case 1331:
case 3798:
case 1070:
case 2266:
case 727:
case 2320:
case 667:
case 1177:
case 1012:
case 1302:
case 183:
case 2989:
case 1394:
case 3718:
case 3056:
case 3317:
case 3007:
case 993:
case 1869:
case 3296:
case 2747:
case 2348:
case 2768:
case 1781:
case 1099:
case 1259:
case 3836:
case 3175:
case 1239:
case 1946:
case 3320:
case 126:
case 1232:
case 1273:
case 1069:
case 3856:
case 1201:
case 2216:
case 2683:
case 185:
case 1744:
case 394:
case 967:
case 1365:
case 3266:
case 3628:
case 1899:
case 3790:
case 1519:
case 2620:
case 637:
case 2432:
case 1615:
case 1614:
case 3697:
case 1631:
case 1505:
case 948:
case 3383:
case 1878:
case 1971:
case 2108:
case 3648:
case 29:
case 249:
case 3667:
case 2617:
case 1651:
case 3186:
case 2507:
case 2459:
case 2710:
case 1926:
case 3340:
case 3760:
case 1739:
case 176:
case 3964:
case 3965:
case 3180:
case 1427:
case 2914:
case 2931:
case 2550:
case 1773:
case 1701:
case 2058:
case 2902:
case 1245:
case 1244:
case 3593:
case 3346:
case 3218:
case 2038:
case 3563:
case 2513:
case 2247:
case 3143:
case 4060:
case 3887:
case 16:
case 2425:
case 1752:
case 3995:
case 3994:
case 2233:
case 940:
case 1225:
case 3303:
case 1191:
case 1585:
case 1224:
case 2272:
case 3850:
case 3538:
case 2279:
case 2063:
case 842:
case 3030:
case 2210:
case 2481:
case 1682:
case 3371:
case 2863:
case 3050:
case 1498:
case 287:
case 1541:
case 3106:
case 2253:
case 3830:
case 3210:
case 2030:
case 2260:
case 1418:
case 4068:
case 2326:
case 307:
case 2137:
case 2013:
case 3279:
case 3063:
case 2850:
case 2538:
case 1111:
case 3253:
case 1876:
case 2157:
case 3093:
case 2123:
case 3587:
case 3646:
case 1135:
case 1134:
case 3188:
case 2830:
case 2558:
case 490:
case 2050:
case 3444:
case 387:
case 896:
case 2813:
case 3902:
case 3716:
case 1490:
case 2593:
case 777:
case 2087:
case 2965:
case 2964:
case 1884:
case 3550:
case 3838:
case 1997:
case 171:
case 1967:
case 2:
case 1948:
case 3671:
case 162:
case 4079:
case 2995:
case 2563:
case 257:
case 3626:
case 1085:
case 2143:
case 1084:
case 2018:
case 3238:
case 2756:
case 2579:
case 3386:
case 2572:
case 1430:
case 3047:
case 1524:
case 138:
case 2674:
case 2954:
case 2421:
case 3991:
case 1937:
case 3140:
case 848:
case 4093:
case 1677:
case 1719:
case 3868:
case 3961:
case 3590:
case 1957:
case 2818:
case 1923:
case 617:
case 1712:
case 1705:
case 2128:
case 390:
case 3258:
case 2736:
case 2553:
case 1770:
case 749:
case 2287:
case 2441:
case 2090:
case 3879:
case 1487:
case 4058:
case 3120:
case 3872:
case 1642:
case 2860:
case 3293:
case 3053:
case 2197:
case 3027:
case 1545:
case 1544:
case 1165:
case 1164:
case 3810:
case 3072:
case 1221:
case 1194:
case 1581:
case 1195:
case 2213:
case 3033:
case 2686:
case 3518:
case 3608:
case 4038:
case 895:
case 3300:
case 599:
case 3010:
case 867:
case 3374:
case 3375:
case 3827:
case 1115:
case 2293:
case 3860:
case 2810:
case 2120:
case 591:
case 1377:
case 4087:
case 1458:
case 2833:
case 2872:
case 1102:
case 3485:
case 2300:
case 1329:
case 542:
case 2827:
case 168:
case 1322:
case 1438:
case 457:
case 2853:
case 3568:
case 1151:
case 1025:
case 4:
case 2608:
case 2079:
case 1845:
case 837:
case 4013:
case 1844:
case 3675:
case 1799:
case 2140:
case 2991:
case 1792:
case 3955:
case 147:
case 3600:
case 4030:
case 3579:
case 3018:
case 3707:
case 3308:
case 2068:
case 2047:
case 2386:
case 3736:
case 917:
case 3128:
case 4050:
case 290:
case 1044:
case 3527:
case 2183:
case 3553:
case 792:
case 2961:
case 1881:
case 173:
case 1769:
case 3818:
case 544:
case 2590:
case 3911:
case 1493:
case 833:
case 3611:
case 3635:
case 1146:
case 3501:
case 622:
case 1793:
case 658:
case 1688:
case 1469:
case 536:
case 4019:
case 356:
case 762:
case 4070:
case 1380:
case 3539:
case 915:
case 2278:
case 3573:
case 4004:
case 260:
case 314:
case 3456:
case 913:
case 2189:
case 2182:
case 1343:
case 539:
case 3900:
case 3655:
case 1763:
case 1492:
case 225:
case 2052:
case 209:
case 21:
case 2292:
case 312:
case 764:
case 3986:
case 988:
case 624:
case 286:
case 2839:
case 3785:
case 455:
case 3391:
case 2832:
case 2354:
case 2859:
case 3741:
case 3270:
case 2335:
case 1323:
case 3205:
case 2852:
case 3204:
case 2001:
case 550:
case 1478:
case 1758:
case 1016:
case 223:
case 3212:
case 2032:
case 206:
case 2039:
case 3839:
case 2784:
case 897:
case 1643:
case 281:
case 569:
case 865:
case 3801:
case 3908:
case 309:
case 31:
case 3292:
case 1866:
case 3059:
case 688:
case 3299:
case 230:
case 1896:
case 1680:
case 2219:
case 3262:
case 1787:
case 4078:
case 566:
case 2361:
case 2741:
case 3859:
case 1066:
case 1949:
case 3001:
case 2204:
case 3335:
case 2205:
case 2436:
case 2539:
case 1404:
case 1405:
case 351:
case 214:
case 2573:
case 485:
case 1470:
case 360:
case 2634:
case 403:
case 1419:
case 531:
case 1623:
case 2501:
case 4069:
case 820:
case 2611:
case 1412:
case 3661:
case 1977:
case 1637:
case 1929:
case 4092:
case 429:
case 405:
case 2900:
case 1922:
case 878:
case 2974:
case 2721:
case 734:
case 3189:
case 2776:
case 3182:
case 580:
case 1730:
case 259:
case 2552:
case 68:
case 3926:
case 3903:
case 911:
case 318:
case 255:
case 773:
case 880:
case 2592:
case 1186:
case 2694:
case 192:
case 4059:
case 1667:
case 520:
case 3614:
case 831:
case 3505:
case 1697:
case 4073:
case 4039:
case 2664:
case 406:
case 2665:
case 2149:
case 3078:
case 3609:
case 4001:
case 747:
case 775:
case 1790:
case 2569:
case 3364:
case 194:
case 3744:
case 652:
case 1628:
case 1266:
case 984:
case 866:
case 2070:
case 628:
case 3201:
case 451:
case 1036:
case 2005:
case 563:
case 460:
case 2004:
case 303:
case 3232:
case 1856:
case 1807:
case 2309:
case 2019:
case 3946:
case 1320:
case 326:
case 1836:
case 3252:
case 1174:
case 2129:
case 904:
case 2870:
case 1100:
case 2819:
case 3781:
case 2812:
case 3395:
case 383:
case 565:
case 869:
case 2351:
case 2273:
case 3177:
case 203:
case 928:
case 226:
case 952:
case 3070:
case 456:
case 2744:
case 2364:
case 3004:
case 285:
case 3315:
case 1683:
case 2201:
case 2862:
case 1768:
case 1747:
case 1982:
case 872:
case 459:
case 2869:
case 2394:
case 2395:
case 3805:
case 2092:
case 3804:
case 3870:
case 1640:
case 3694:
case 1459:
case 535:
case 1779:
case 3695:
case 1507:
case 839:
case 412:
case 611:
case 149:
case 1452:
case 2724:
case 2971:
case 2878:
case 2725:
case 1733:
case 3496:
case 2926:
case 3592:
case 355:
case 481:
case 3562:
case 2609:
case 738:
case 919:
case 3149:
case 2519:
case 3569:
case 2602:
case 3466:
case 2512:
case 3142:
case 2504:
case 2505:
case 1536:
case 401:
case 2615:
case 1439:
case 3665:
case 1473:
case 2570:
case 1753:
case 602:
case 836:
case 1432:
case 1328:
case 874:
case 2281:
case 1603:
case 502:
case 858:
case 3085:
case 1268:
case 1626:
case 1247:
case 633:
case 279:
case 1858:
case 2479:
case 3967:
case 2759:
case 3948:
case 3382:
case 26:
case 362:
case 1671:
case 2453:
case 3997:
case 2732:
case 582:
case 234:
case 978:
case 1909:
case 2920:
case 2245:
case 1902:
case 1716:
case 1058:
case 2701:
case 1298:
case 3821:
case 3928:
case 210:
case 364:
case 2498:
case 1863:
case 1444:
case 781:
case 1188:
case 2161:
case 3876:
case 3111:
case 2541:
case 1646:
case 3134:
case 1227:
case 3154:
case 107:
case 3021:
case 2191:
case 2225:
case 2940:
case 584:
case 3418:
case 3076:
case 33:
case 2682:
case 730:
case 963:
case 701:
case 2468:
case 1210:
case 1558:
case 665:
case 1830:
case 697:
case 1123:
case 2876:
case 2111:
case 3498:
case 2928:
case 310:
case 2821:
case 709:
case 71:
case 725:
case 23:
case 706:
case 1260:
case 332:
case 4081:
case 1371:
case 3447:
case 723:
case 1538:
case 663:
case 475:
case 1013:
case 3585:
case 3224:
case 808:
case 3191:
case 2155:
case 528:
case 3433:
case 760:
case 1995:
case 3752:
case 379:
case 4025:
case 262:
case 4024:
case 36:
case 2841:
case 2084:
case 50:
case 3521:
case 3281:
case 82:
case 1218:
case 3920:
case 1087:
case 813:
case 1593:
case 2041:
case 554:
case 1346:
case 678:
case 3701:
case 3773:
case 3739:
case 2884:
case 376:
case 1965:
case 334:
case 373:
case 2906:
case 1818:
case 2957:
case 3769:
case 939:
case 3349:
case 3493:
case 718:
case 1911:
case 88:
case 1287:
case 3044:
case 854:
case 2770:
case 2450:
case 2704:
case 816:
case 2705:
case 2285:
case 52:
case 1533:
case 2525:
case 515:
case 2284:
case 3081:
case 432:
case 1308:
case 1707:
case 1018:
case 1756:
case 2413:
case 2629:
case 3792:
case 1600:
case 347:
case 2622:
case 3844:
case 936:
case 238:
case 1148:
case 479:
case 1890:
case 1167:
case 3024:
case 666:
case 3025:
case 1547:
case 508:
case 2581:
case 2194:
case 2221:
case 368:
case 2276:
case 1485:
case 1484:
case 961:
case 3329:
case 2642:
case 705:
case 2649:
case 729:
case 783:
case 2164:
case 870:
case 2544:
case 3115:
case 2545:
case 3131:
case 1197:
case 476:
case 1860:
case 2322:
case 1374:
case 4084:
case 268:
case 1375:
case 966:
case 3943:
case 1300:
case 661:
case 1518:
case 1079:
case 650:
case 1608:
case 3194:
case 3221:
case 85:
case 3581:
case 2025:
case 2151:
case 1117:
case 3165:
case 3164:
case 524:
case 2131:
case 3545:
case 1027:
case 3544:
case 2115:
case 3980:
case 2102:
case 1872:
case 2824:
case 1833:
case 3642:
case 2778:
case 2825:
case 2109:
case 3649:
case 3241:
case 3770:
case 1183:
case 2045:
case 639:
case 3705:
case 190:
case 1258:
case 2349:
case 1590:
case 2769:
case 755:
case 2342:
case 2988:
case 3677:
case 1961:
case 275:
case 247:
case 3413:
case 931:
case 3937:
case 1898:
case 4021:
case 2463:
case 2844:
case 2845:
case 1386:
case 4076:
case 674:
case 522:
case 636:
case 802:
case 1938:
case 1815:
case 592:
case 178:
case 2179:
case 1809:
case 3786:
case 2820:
case 1802:
case 744:
case 2172:
case 2307:
case 2708:
case 1124:
case 2356:
case 1051:
case 2133:
case 2288:
case 6:
case 3097:
case 3206:
case 1015:
case 1304:
case 1312:
case 120:
case 3867:
case 1319:
case 2020:
case 1678:
case 742:
case 2083:
case 1564:
case 3028:
case 240:
case 1565:
case 907:
case 2840:
case 1662:
case 3435:
case 3280:
case 4057:
case 1669:
case 4023:
case 2461:
case 197:
case 3454:
case 3921:
case 3828:
case 3775:
case 987:
case 2040:
case 1963:
case 1692:
case 4037:
case 2883:
case 1181:
case 3607:
case 1595:
case 3656:
case 1594:
case 3517:
case 3243:
case 2147:
case 2548:
case 3976:
case 2567:
case 3118:
case 607:
case 2280:
case 2434:
case 2520:
case 1378:
case 4088:
case 2411:
case 1509:
case 3461:
case 3083:
case 1514:
case 799:
case 1515:
case 1950:
case 1604:
case 3597:
case 3840:
case 340:
case 3147:
case 2243:
case 2607:
case 2656:
case 687:
case 3567:
case 2118:
case 898:
case 3491:
case 1437:
case 1913:
case 2828:
case 2455:
case 417:
case 2067:
case 2048:
case 3179:
case 3307:
case 3708:
case 2237:
case 1095:
case 135:
case 2897:
case 2160:
case 59:
case 2985:
case 549:
case 1399:
case 2984:
case 1864:
case 845:
case 3817:
case 546:
case 1369:
case 1749:
case 133:
case 1895:
case 9:
case 1362:
case 843:
case 2190:
case 2848:
case 2941:
case 2867:
case 957:
case 1064:
case 1480:
case 1234:
case 2583:
case 1235:
case 2223:
case 2206:
case 2257:
case 1264:
case 1265:
case 3088:
case 1035:
case 2023:
case 1034:
case 1011:
case 2006:
case 748:
case 3193:
case 2837:
case 4083:
case 1854:
case 846:
case 3220:
case 3945:
case 3944:
case 1352:
case 690:
case 1811:
case 1176:
case 1359:
case 849:
case 3981:
case 2248:
case 3163:
case 2037:
case 2113:
case 3396:
case 1054:
case 1055:
case 3451:
case 172:
case 2494:
case 4017:
case 3537:
case 1185:
case 793:
case 2696:
case 2880:
case 3726:
case 1960:
case 3138:
case 3616:
case 3557:
case 3506:
case 4020:
case 3158:
case 767:
case 2666:
case 2588:
case 3402:
case 3415:
case 627:
case 3414:
case 2843:
case 2464:
case 1555:
case 1554:
case 1910:
case 3043:
case 2138:
case 2726:
case 4067:
case 1659:
case 3494:
case 17:
case 4048:
case 1417:
case 2925:
case 2240:
case 169:
case 1979:
case 1652:
case 2431:
case 166:
case 3080:
case 1639:
case 3464:
case 3843:
case 1632:
case 2557:
case 2506:
case 2409:
case 2283:
case 1534:
case 2616:
case 1420:
case 1535:
case 3588:
case 2158:
case 100:
case 3837:
case 1209:
case 2944:
case 2220:
case 841:
case 2945:
case 2088:
case 1061:
case 2366:
case 3057:
case 1231:
case 3297:
case 3248:
case 2163:
case 180:
case 3113:
case 2396:
case 1440:
case 3037:
case 3857:
case 1789:
case 2981:
case 2888:
case 3130:
case 1861:
case 1542:
case 113:
case 2390:
case 3800:
case 344:
case 3874:
case 3875:
case 3327:
case 3728:
case 3353:
case 1644:
case 945:
case 1645:
case 3618:
case 3379:
case 3508:
case 1681:
case 8:
case 3333:
case 943:
case 2668:
case 2226:
case 2647:
case 2586:
case 857:
case 3074:
case 1192:
case 2271:
case 3000:
case 3368:
case 2959:
case 3347:
case 3748:
case 1624:
case 2633:
case 2952:
case 1471:
case 342:
case 2717:
case 1426:
case 3660:
case 2575:
case 437:
case 1702:
case 2808:
case 2901:
case 1709:
case 188:
case 3398:
case 3797:
case 2932:
case 1715:
case 448:
case 527:
case 2660:
case 807:
case 2086:
case 740:
case 4071:
case 1381:
case 2347:
case 3672:
case 2368:
case 3008:
case 3717:
case 3318:
case 242:
case 3952:
case 3679:
case 3246:
case 396:
case 887:
case 1345:
case 1765:
case 1344:
case 291:
case 2797:
case 1049:
case 3901:
case 3808:
case 2886:
case 3698:
case 3783:
case 244:
case 1822:
case 2136:
case 2353:
case 2728:
case 2875:
case 1104:
case 2327:
case 677:
case 4046:
case 645:
case 1077:
case 590:
case 1119:
case 3740:
case 3271:
case 1029:
case 2310:
case 495:
case 2000:
case 2508:
case 3482:
case 3647:
case 2372:
case 3226:
case 1877:
case 1325:
case 3203:
case 2156:
case 2363:
case 348:
case 3638:
case 3026:
case 237:
case 1684:
case 3313:
case 3071:
case 1582:
case 1589:
case 1229:
case 2200:
case 3826:
case 111:
case 496:
case 890:
case 2442:
case 3658:
case 2687:
case 3978:
case 3871:
case 2393:
case 2449:
case 1641:
case 1936:
case 1249:
case 2904:
case 2905:
case 2970:
case 3788:
case 3387:
case 3962:
case 2912:
case 2723:
case 2706:
case 2613:
case 1400:
case 2503:
case 2422:
case 3208:
case 2737:
case 1475:
case 395:
case 1754:
case 1474:
case 1956:
case 507:
case 3846:
case 827:
case 1676:
case 2693:
case 2788:
case 2387:
case 1341:
case 2046:
case 3358:
case 2969:
case 1889:
case 293:
case 3912:
case 444:
case 3970:
case 694:
case 128:
case 267:
case 3503:
case 4074:
case 4075:
case 1385:
case 3286:
case 3429:
case 3613:
case 3526:
case 295:
case 2663:
case 3737:
case 3274:
case 641:
case 3275:
case 1376:
case 557:
case 442:
case 2638:
case 3363:
case 946:
case 2003:
case 337:
case 5:
case 2026:
case 3166:
case 3442:
case 18:
case 3393:
case 3687:
case 3546:
case 2978:
case 692:
case 1173:
case 2826:
case 3780:
case 2350:
case 491:
case 1127:
case 2304:
case 3234:
case 2015:
case 1153:
case 2031:
case 553:
case 2261:
case 2370:
case 3065:
case 1528:
case 2678:
case 3742:
case 722:
case 2319:
case 2009:
case 2958:
case 3369:
case 3749:
case 3894:
case 976:
case 3443:
case 3399:
case 934:
case 3864:
case 3865:
case 3392:
case 335:
case 2831:
case 2051:
case 1133:
case 555:
case 2124:
case 1708:
case 3094:
case 859:
case 2802:
case 472:
case 2809:
case 1883:
case 2692:
case 4054:
case 910:
case 3722:
case 3913:
case 2699:
case 297:
case 1548:
case 3551:
case 3930:
case 1840:
case 474:
case 2145:
case 1083:
case 830:
case 3515:
case 801:
case 521:
case 4034:
case 1461:
case 4035:
case 2669:
case 3619:
case 932:
case 3406:
case 3378:
case 3457:
case 3509:
case 2993:
case 1976:
case 1118:
case 1656:
case 3595:
case 3181:
case 1243:
case 2930:
case 1700:
case 365:
case 2729:
case 964:
case 1454:
case 1921:
case 886:
case 1774:
case 397:
case 1455:
case 1775:
case 1828:
case 2913:
case 3669:
case 2502:
case 889:
case 585:
case 2612:
case 3662:
case 2509:
case 2406:
case 93:
case 1520:
case 1435:
case 2619:
case 2423:
case 1434:
case 1280:
case 4061:
case 3564:
case 806:
case 2670:
case 632:
case 526:
case 503:
case 2531:
case 2604:
case 400:
case 3144:
case 823:
case 1636:
case 2514:
case 3145:
case 3319:
case 1867:
case 1848:
case 1190:
case 715:
case 2362:
case 3678:
case 72:
case 2742:
case 2894:
case 320:
case 3312:
case 2895:
case 233:
case 2749:
case 2211:
case 1257:
case 1206:
case 1223:
case 3015:
case 1583:
case 3014:
case 2480:
case 2064:
case 2065:
case 66:
case 3802:
case 2254:
case 2095:
case 518:
case 469:
case 3291:
case 1237:
case 3125:
case 47:
case 1067:
case 1786:
case 676:
case 713:
case 378:
case 1984:
case 1540:
case 1985:
case 971:
case 1897:
case 3815:
case 1130:
case 3861:
case 2918:
case 2834:
case 2121:
case 2055:
case 465:
case 380:
case 2054:
case 2295:
case 3251:
case 818:
case 1037:
case 3440:
case 1006:
case 3231:
case 551:
case 647:
case 2034:
case 1023:
case 2265:
case 2264:
case 3061:
case 2339:
case 3209:
case 1150:
case 274:
case 70:
case 300:
case 2332:
case 3202:
case 1837:
case 668:
case 826:
case 1666:
case 4009:
case 1228:
case 2561:
case 4002:
case 420:
case 3511:
case 3534:
case 3535:
case 1187:
case 803:
case 3673:
case 1465:
case 250:
case 1464:
case 4031:
case 3632:
case 1843:
case 4015:
case 3953:
case 728:
case 2497:
case 752:
case 1080:
case 3927:
case 3979:
case 369:
case 2467:
case 3652:
case 883:
case 4051:
case 770:
case 1494:
case 3659:
case 1495:
case 3972:
case 37:
case 272:
case 3933:
case 586:
case 1880:
case 3555:
case 1696:
case 805:
case 3554:
case 829:
case 525:
case 51:
case 3910:
case 2632:
case 2673:
case 350:
case 2639:
case 1415:
case 1414:
case 3497:
case 1431:
case 4065:
case 1158:
case 2535:
case 2601:
case 1523:
case 821:
case 1616:
case 2534:
case 501:
case 1409:
case 530:
case 433:
case 1703:
case 3960:
case 435:
case 3185:
case 3591:
case 1537:
case 3184:
case 3448:
case 269:
case 3467:
case 2933:
case 1925:
case 1771:
case 27:
case 704:
case 2659:
case 1217:
case 2440:
case 559:
case 2251:
case 3295:
case 3294:
case 3055:
case 1163:
case 2861:
case 2968:
case 3359:
case 711:
case 3352:
case 2789:
case 3918:
case 3176:
case 3811:
case 1220:
case 2483:
case 1944:
case 1580:
case 702:
case 3339:
case 2998:
case 3373:
case 975:
case 2891:
case 3428:
case 231:
case 853:
case 3034:
case 2214:
case 2231:
case 3301:
case 1366:
case 638:
case 1746:
case 3264:
case 3265:
case 862:
case 1226:
case 656:
case 3325:
case 45:
case 3877:
case 3324:
case 614:
case 733:
case 3029:
case 951:
case 484:
case 1740:
case 322:
case 215:
case 3119:
case 3112:
case 2542:
case 2169:
case 3077:
case 2645:
case 404:
case 3104:
case 3105:
case 1698:
case 1783:
case 3829:
case 3170:
case 482:
case 324:
case 3042:
case 91:
case 909:
case 2916:
case 925:
case 1932:
case 1973:
case 411:
case 864:
case 1627:
case 1939:
case 1246:
case 3764:
case 1653:
case 3765:
case 1717:
case 3849:
case 2751:
case 989:
case 3794:
case 199:
case 1633:
case 2625:
case 402:
case 2624:
case 1672:
case 1959:
case 906:
case 2522:
case 1575:
case 1610:
case 2529:
case 2289:
case 923:
case 3996:
case 1398:
case 1797:
case 3715:
case 61:
case 2344:
case 2765:
case 454:
case 48:
case 2966:
case 3709:
case 797:
case 2042:
case 3702:
case 3916:
case 3522:
case 308:
case 3282:
case 2996:
case 763:
case 3403:
case 930:
case 901:
case 689:
case 3289:
case 3426:
case 3529:
case 2795:
case 142:
case 568:
case 1748:
case 832:
case 606:
case 2842:
case 1086:
case 3625:
case 3199:
case 1000:
case 1310:
case 2029:
case 315:
case 3192:
case 1074:
case 956:
case 2022:
case 222:
case 258:
case 1156:
case 1107:
case 3681:
case 1333:
case 2325:
case 2877:
case 1372:
case 428:
case 651:
case 879:
case 4089:
case 575:
case 1379:
case 1874:
case 876:
case 1327:
case 2104:
case 3644:
case 3645:
case 1800:
case 573:
case 2170:
case 2829:
case 3446:
case 2119:
case 959:
case 3549:
case 2077:
case 3169:
case 2112:
case 3139:
case 3173:
case 488:
case 1780:
case 354:
case 38:
case 1393:
case 282:
case 873:
case 1442:
case 1196:
case 3321:
case 408:
case 137:
case 56:
case 847:
case 1743:
case 1200:
case 2229:
case 731:
case 2589:
case 1274:
case 1275:
case 3408:
case 2582:
case 2222:
case 202:
case 2754:
case 603:
case 2475:
case 2755:
case 1338:
case 2621:
case 3384:
case 42:
case 1503:
case 2400:
case 3385:
case 415:
case 532:
case 1286:
case 284:
case 1526:
case 328:
case 3082:
case 352:
case 2956:
case 921:
case 685:
case 3089:
case 77:
case 204:
case 2242:
case 683:
case 769:
case 2249:
case 2936:
case 2711:
case 1477:
case 629:
case 605:
case 1919:
case 3341:
case 3761:
case 510:
case 252:
case 926:
case 228:
case 1846:
case 3676:
case 35:
case 903:
case 985:
case 2791:
case 4029:
case 1208:
case 1992:
case 3755:
case 3754:
case 195:
case 422:
case 2385:
case 53:
case 1999:
case 3400:
case 2882:
case 2341:
case 1387:
case 4077:
case 1693:
case 564:
case 3242:
case 772:
case 3249:
case 1978:
case 2101:
case 655:
case 571:
case 2139:
case 1350:
case 254:
case 2132:
case 1826:
case 1803:
case 2173:
case 3229:
case 2159:
case 1071:
case 302:
case 2408:
case 3582:
case 2152:
case 20:
case 3685:
case 838:
case 562:
case 1313:
case 148:
case 653:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1757170802/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,];
var gg_b = "1757170802/";

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
