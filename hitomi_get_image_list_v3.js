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
case 2658:
case 3626:
case 3007:
case 563:
case 1838:
case 2717:
case 389:
case 1882:
case 3912:
case 2950:
case 1864:
case 1717:
case 972:
case 1658:
case 786:
case 2166:
case 2140:
case 2774:
case 3314:
case 1095:
case 110:
case 1774:
case 2454:
case 16:
case 1166:
case 1638:
case 1023:
case 41:
case 2682:
case 1381:
case 743:
case 2930:
case 3879:
case 1598:
case 460:
case 1021:
case 353:
case 369:
case 2638:
case 2023:
case 3347:
case 3545:
case 1905:
case 3124:
case 1963:
case 2434:
case 3485:
case 1744:
case 1170:
case 3769:
case 3078:
case 679:
case 766:
case 28:
case 2961:
case 3275:
case 3216:
case 529:
case 3997:
case 18:
case 1059:
case 1961:
case 86:
case 378:
case 2468:
case 9:
case 1434:
case 1916:
case 2081:
case 1321:
case 1975:
case 3550:
case 1083:
case 2323:
case 3263:
case 662:
case 3809:
case 2083:
case 1323:
case 467:
case 1622:
case 893:
case 2321:
case 2975:
case 923:
case 1297:
case 1512:
case 1718:
case 1359:
case 3419:
case 2135:
case 3425:
case 1657:
case 1199:
case 1135:
case 3008:
case 3230:
case 3378:
case 114:
case 1100:
case 2359:
case 925:
case 293:
case 2822:
case 3686:
case 2467:
case 3307:
case 2111:
case 1945:
case 978:
case 3530:
case 3077:
case 1822:
case 2212:
case 2597:
case 59:
case 571:
case 2395:
case 2339:
case 1155:
case 117:
case 1704:
case 3348:
case 2637:
case 3563:
case 2155:
case 969:
case 2704:
case 1597:
case 1212:
case 2857:
case 2150:
case 950:
case 1079:
case 1026:
case 1444:
case 1390:
case 2079:
case 3821:
case 2444:
case 2026:
case 1734:
case 3058:
case 327:
case 1150:
case 348:
case 3213:
case 3695:
case 3639:
case 190:
case 1940:
case 354:
case 3337:
case 3211:
case 1648:
case 30:
case 2966:
case 1584:
case 1562:
case 2940:
case 324:
case 3200:
case 2049:
case 3513:
case 626:
case 2262:
case 2284:
case 3299:
case 576:
case 3623:
case 1754:
case 209:
case 1284:
case 3082:
case 3064:
case 2105:
case 471:
case 3511:
case 2754:
case 109:
case 49:
case 3621:
case 920:
case 3197:
case 1678:
case 3839:
case 3895:
case 2970:
case 890:
case 1163:
case 357:
case 3924:
case 3555:
case 564:
case 2161:
case 1848:
case 1417:
case 2678:
case 2877:
case 3382:
case 139:
case 1647:
case 781:
case 215:
case 541:
case 2116:
case 2175:
case 1349:
case 954:
case 115:
case 446:
case 3480:
case 2349:
case 1877:
case 3270:
case 3566:
case 2608:
case 2767:
case 485:
case 1999:
case 350:
case 194:
case 3540:
case 897:
case 580:
case 2900:
case 948:
case 459:
case 927:
case 3984:
case 1814:
case 3962:
case 2379:
case 761:
case 3719:
case 3266:
case 2090:
case 2326:
case 752:
case 839:
case 2009:
case 1913:
case 1847:
case 1677:
case 2418:
case 2145:
case 4084:
case 815:
case 3881:
case 1326:
case 2086:
case 1911:
case 33:
case 297:
case 894:
case 2808:
case 924:
case 51:
case 1808:
case 1614:
case 3037:
case 197:
case 1955:
case 560:
case 483:
case 1524:
case 2989:
case 3560:
case 458:
case 949:
case 2502:
case 650:
case 2747:
case 1502:
case 3942:
case 2437:
case 1747:
case 1989:
case 3819:
case 3825:
case 956:
case 4072:
case 3152:
case 1667:
case 3486:
case 3533:
case 2667:
case 3276:
case 3693:
case 138:
case 202:
case 3392:
case 926:
case 1777:
case 3972:
case 771:
case 1457:
case 2101:
case 2777:
case 3317:
case 3529:
case 3576:
case 3891:
case 428:
case 1714:
case 2202:
case 1165:
case 802:
case 570:
case 3553:
case 3188:
case 3246:
case 3893:
case 3132:
case 838:
case 642:
case 1320:
case 3551:
case 475:
case 2867:
case 2714:
case 2668:
case 2171:
case 1634:
case 654:
case 84:
case 1960:
case 3589:
case 746:
case 2594:
case 2960:
case 2946:
case 1707:
case 1542:
case 3902:
case 2634:
case 3304:
case 808:
case 1748:
case 2438:
case 2156:
case 3128:
case 1272:
case 1931:
case 763:
case 1380:
case 577:
case 2396:
case 3795:
case 627:
case 2931:
case 2748:
case 1438:
case 111:
case 1156:
case 2464:
case 2482:
case 1933:
case 2143:
case 14:
case 2654:
case 2929:
case 452:
case 2976:
case 1834:
case 657:
case 1929:
case 3885:
case 2834:
case 1976:
case 3187:
case 566:
case 3723:
case 24:
case 1458:
case 3206:
case 1136:
case 1953:
case 3759:
case 2951:
case 1294:
case 2778:
case 2069:
case 208:
case 132:
case 811:
case 3044:
case 1242:
case 2458:
case 4002:
case 543:
case 2136:
case 4032:
case 3354:
case 988:
case 1722:
case 2106:
case 540:
case 216:
case 1414:
case 1189:
case 3573:
case 3194:
case 2189:
case 522:
case 4088:
case 2722:
case 672:
case 1106:
case 2528:
case 351:
case 486:
case 1091:
case 2618:
case 1477:
case 362:
case 2804:
case 2093:
case 3241:
case 1528:
case 3952:
case 1757:
case 2091:
case 3896:
case 1385:
case 3368:
case 71:
case 3709:
case 760:
case 443:
case 3541:
case 474:
case 1901:
case 816:
case 4052:
case 1019:
case 979:
case 3932:
case 2447:
case 382:
case 1737:
case 3271:
case 2965:
case 3680:
case 466:
case 6:
case 3696:
case 3988:
case 1604:
case 2737:
case 2973:
case 2160:
case 962:
case 1971:
case 1758:
case 1325:
case 2085:
case 3102:
case 2146:
case 1527:
case 951:
case 2971:
case 2232:
case 3726:
case 2325:
case 623:
case 3068:
case 1146:
case 2527:
case 1973:
case 1478:
case 2617:
case 3620:
case 2844:
case 3203:
case 17:
case 3510:
case 655:
case 2133:
case 2892:
case 27:
case 3423:
case 291:
case 1552:
case 1131:
case 1115:
case 3749:
case 2941:
case 2738:
case 1764:
case 3987:
case 3503:
case 1943:
case 528:
case 3054:
case 2448:
case 1252:
case 678:
case 2782:
case 2943:
case 2176:
case 547:
case 3501:
case 470:
case 787:
case 1692:
case 87:
case 891:
case 2936:
case 1227:
case 2588:
case 2391:
case 1532:
case 3820:
case 3367:
case 1153:
case 2227:
case 669:
case 1713:
case 4093:
case 3001:
case 918:
case 2711:
case 3554:
case 1711:
case 186:
case 2889:
case 3003:
case 145:
case 1416:
case 416:
case 874:
case 3268:
case 2755:
case 277:
case 3065:
case 2088:
case 1755:
case 1104:
case 177:
case 3234:
case 2416:
case 266:
case 1585:
case 3642:
case 1387:
case 2606:
case 3872:
case 901:
case 1606:
case 166:
case 2689:
case 3694:
case 174:
case 1700:
case 2118:
case 3498:
case 2445:
case 2967:
case 1799:
case 845:
case 1052:
case 4025:
case 3254:
case 508:
case 3762:
case 2799:
case 1967:
case 3010:
case 605:
case 532:
case 3991:
case 2700:
case 143:
case 1118:
case 596:
case 1525:
case 1327:
case 2087:
case 1293:
case 1676:
case 3802:
case 1615:
case 2846:
case 3041:
case 2293:
case 2615:
case 2629:
case 47:
case 1291:
case 2954:
case 3267:
case 2519:
case 2327:
case 2653:
case 2770:
case 635:
case 1192:
case 1450:
case 1651:
case 3412:
case 2192:
case 3169:
case 795:
case 1653:
case 3724:
case 1352:
case 2934:
case 1968:
case 3303:
case 2461:
case 1117:
case 912:
case 1660:
case 3497:
case 3301:
case 2463:
case 3071:
case 2968:
case 1646:
case 1633:
case 2405:
case 1028:
case 1766:
case 2591:
case 1332:
case 2430:
case 2631:
case 1740:
case 1593:
case 1430:
case 1631:
case 1853:
case 2174:
case 2740:
case 2593:
case 3567:
case 2633:
case 1405:
case 1388:
case 1591:
case 633:
case 2225:
case 1499:
case 630:
case 2302:
case 273:
case 607:
case 3360:
case 2220:
case 3274:
case 173:
case 2400:
case 847:
case 1220:
case 3119:
case 1603:
case 3484:
case 3125:
case 1302:
case 1665:
case 1904:
case 3544:
case 591:
case 3996:
case 57:
case 936:
case 1810:
case 3592:
case 2665:
case 3632:
case 2455:
case 1801:
case 247:
case 3244:
case 228:
case 1716:
case 2269:
case 1803:
case 306:
case 4080:
case 2801:
case 2042:
case 147:
case 604:
case 3191:
case 2411:
case 1865:
case 1413:
case 1918:
case 3832:
case 3193:
case 392:
case 3574:
case 3351:
case 1411:
case 1610:
case 1641:
case 1394:
case 3015:
case 222:
case 2705:
case 2154:
case 411:
case 2873:
case 516:
case 2440:
case 1730:
case 2394:
case 122:
case 794:
case 2992:
case 3828:
case 1763:
case 2944:
case 3053:
case 398:
case 1761:
case 2596:
case 1992:
case 2280:
case 1296:
case 2168:
case 840:
case 1841:
case 1002:
case 2671:
case 2470:
case 2841:
case 3046:
case 1168:
case 2134:
case 1671:
case 1470:
case 600:
case 3887:
case 1843:
case 1917:
case 2750:
case 408:
case 2673:
case 3060:
case 2974:
case 1836:
case 3628:
case 3033:
case 881:
case 161:
case 44:
case 152:
case 713:
case 2836:
case 1974:
case 3787:
case 1743:
case 1605:
case 2850:
case 907:
case 3812:
case 1964:
case 1982:
case 1590:
case 399:
case 2741:
case 1431:
case 3949:
case 1509:
case 490:
case 3121:
case 2982:
case 2964:
case 1433:
case 1586:
case 1938:
case 2590:
case 3070:
case 2663:
case 2384:
case 1024:
case 2362:
case 636:
case 3399:
case 3222:
case 3335:
case 871:
case 89:
case 1460:
case 1178:
case 334:
case 3697:
case 3159:
case 2460:
case 4026:
case 3402:
case 1663:
case 4079:
case 1736:
case 1830:
case 3522:
case 95:
case 1771:
case 1107:
case 1958:
case 1805:
case 3612:
case 2650:
case 1451:
case 904:
case 1773:
case 3979:
case 2958:
case 19:
case 409:
case 1861:
case 3897:
case 1756:
case 2415:
case 1209:
case 3139:
case 4049:
case 2863:
case 517:
case 2476:
case 2429:
case 2209:
case 1415:
case 1863:
case 1476:
case 3040:
case 1429:
case 1286:
case 271:
case 337:
case 29:
case 2290:
case 1148:
case 3557:
case 3728:
case 163:
case 2701:
case 934:
case 3909:
case 1549:
case 285:
case 1703:
case 1645:
case 2645:
case 259:
case 1816:
case 263:
case 3013:
case 146:
case 829:
case 415:
case 330:
case 3340:
case 2765:
case 2226:
case 3732:
case 2279:
case 1406:
case 1765:
case 439:
case 2406:
case 3788:
case 246:
case 56:
case 732:
case 265:
case 2616:
case 183:
case 863:
case 3727:
case 497:
case 692:
case 937:
case 1526:
case 885:
case 1675:
case 3181:
case 1616:
case 900:
case 4090:
case 129:
case 3264:
case 2324:
case 3238:
case 1108:
case 1957:
case 4086:
case 2710:
case 3035:
case 3099:
case 2084:
case 2062:
case 304:
case 2776:
case 3921:
case 2715:
case 3316:
case 3577:
case 3030:
case 46:
case 3208:
case 141:
case 1138:
case 3005:
case 618:
case 2182:
case 2164:
case 241:
case 3923:
case 2138:
case 515:
case 1164:
case 1182:
case 4039:
case 1729:
case 716:
case 3514:
case 3959:
case 2473:
case 1753:
case 594:
case 280:
case 3624:
case 1670:
case 2283:
case 2753:
case 3063:
case 1978:
case 1751:
case 1473:
case 1866:
case 81:
case 1012:
case 3214:
case 3126:
case 2158:
case 513:
case 3179:
case 1907:
case 1583:
case 2746:
case 2398:
case 3050:
case 601:
case 333:
case 3277:
case 1731:
case 2640:
case 1870:
case 4021:
case 1443:
case 2666:
case 1948:
case 1733:
case 2443:
case 11:
case 4023:
case 2731:
case 880:
case 1441:
case 160:
case 1640:
case 3939:
case 2870:
case 597:
case 1410:
case 1611:
case 2613:
case 2295:
case 2098:
case 3350:
case 1613:
case 1239:
case 1295:
case 3109:
case 2977:
case 1098:
case 3452:
case 1523:
case 791:
case 2800:
case 3427:
case 284:
case 1655:
case 2137:
case 1914:
case 3862:
case 3884:
case 1835:
case 1899:
case 2559:
case 184:
case 1800:
case 4083:
case 267:
case 2465:
case 2122:
case 612:
case 1706:
case 176:
case 1259:
case 2789:
case 3794:
case 3016:
case 276:
case 3075:
case 1789:
case 305:
case 3278:
case 3330:
case 1947:
case 417:
case 3983:
case 3507:
case 3488:
case 2706:
case 3684:
case 3662:
case 2699:
case 2223:
case 1157:
case 264:
case 493:
case 2595:
case 1401:
case 1600:
case 3361:
case 1539:
case 287:
case 1699:
case 2157:
case 2554:
case 386:
case 3711:
case 451:
case 2925:
case 1894:
case 1373:
case 2842:
case 1672:
case 723:
case 667:
case 1925:
case 2894:
case 3889:
case 2356:
case 3328:
case 2065:
case 377:
case 3104:
case 231:
case 3032:
case 1180:
case 3475:
case 3416:
case 2196:
case 549:
case 1065:
case 812:
case 482:
case 2343:
case 3027:
case 366:
case 725:
case 2341:
case 3585:
case 2872:
case 1343:
case 1336:
case 1762:
case 1784:
case 421:
case 3118:
case 2993:
case 374:
case 112:
case 3799:
case 769:
case 2991:
case 3052:
case 526:
case 2802:
case 2041:
case 488:
case 3860:
case 977:
case 1267:
case 3525:
case 3615:
case 945:
case 3293:
case 1802:
case 3629:
case 772:
case 218:
case 986:
case 3653:
case 2036:
case 3831:
case 3144:
case 3770:
case 4034:
case 2724:
case 1310:
case 3651:
case 468:
case 943:
case 3461:
case 1301:
case 1497:
case 61:
case 2985:
case 1071:
case 3934:
case 2303:
case 1985:
case 3463:
case 1303:
case 3430:
case 3405:
case 1056:
case 1567:
case 101:
case 3028:
case 3633:
case 2056:
case 3851:
case 3332:
case 818:
case 2365:
case 4054:
case 370:
case 3174:
case 3740:
case 3593:
case 1120:
case 373:
case 754:
case 2360:
case 1484:
case 3302:
case 2462:
case 1346:
case 2484:
case 3499:
case 4018:
case 3601:
case 3400:
case 2827:
case 1360:
case 2852:
case 1980:
case 1217:
case 1592:
case 2331:
case 2544:
case 2688:
case 3665:
case 1688:
case 727:
case 940:
case 1996:
case 2217:
case 1331:
case 1517:
case 3803:
case 2089:
case 3094:
case 1315:
case 328:
case 961:
case 1006:
case 3455:
case 2244:
case 2627:
case 3801:
case 757:
case 1244:
case 4004:
case 3042:
case 2292:
case 629:
case 579:
case 2315:
case 1193:
case 3520:
case 192:
case 1832:
case 724:
case 2888:
case 2191:
case 2353:
case 568:
case 1353:
case 3413:
case 2193:
case 292:
case 3865:
case 3918:
case 1888:
case 1687:
case 3643:
case 3342:
case 3154:
case 4074:
case 1389:
case 2029:
case 958:
case 2218:
case 3871:
case 2076:
case 750:
case 322:
case 2015:
case 3641:
case 2389:
case 1218:
case 1076:
case 1015:
case 2687:
case 3873:
case 2504:
case 456:
case 381:
case 198:
case 3580:
case 2969:
case 4017:
case 551:
case 2797:
case 1969:
case 1051:
case 1504:
case 73:
case 1046:
case 2204:
case 3917:
case 3843:
case 4092:
case 426:
case 3750:
case 671:
case 2887:
case 3673:
case 3296:
case 2060:
case 521:
case 3841:
case 2424:
case 836:
case 1204:
case 4044:
case 2033:
case 947:
case 2628:
case 1920:
case 3974:
case 2518:
case 582:
case 2031:
case 1518:
case 1121:
case 2949:
case 3433:
case 681:
case 2787:
case 1257:
case 299:
case 3938:
case 3586:
case 1812:
case 3605:
case 3743:
case 3590:
case 40:
case 199:
case 1123:
case 2257:
case 946:
case 2121:
case 837:
case 1159:
case 2697:
case 3663:
case 1402:
case 2222:
case 622:
case 3384:
case 800:
case 640:
case 1537:
case 427:
case 959:
case 3024:
case 3661:
case 963:
case 2159:
case 1697:
case 1300:
case 3451:
case 5:
case 2522:
case 1311:
case 3453:
case 2979:
case 1522:
case 1237:
case 3958:
case 3771:
case 3107:
case 2926:
case 899:
case 3476:
case 3863:
case 2139:
case 2195:
case 424:
case 100:
case 1040:
case 1066:
case 3286:
case 3290:
case 2557:
case 237:
case 2355:
case 2728:
case 1139:
case 1195:
case 3209:
case 200:
case 749:
case 658:
case 2582:
case 3816:
case 1986:
case 3875:
case 3701:
case 1698:
case 2909:
case 2698:
case 1909:
case 555:
case 3703:
case 3226:
case 2366:
case 1788:
case 3279:
case 756:
case 2494:
case 3114:
case 346:
case 130:
case 1494:
case 1732:
case 1258:
case 2442:
case 3406:
case 1055:
case 4022:
case 3579:
case 1898:
case 569:
case 3675:
case 3845:
case 2181:
case 971:
case 99:
case 3922:
case 1558:
case 4037:
case 1752:
case 3108:
case 25:
case 3324:
case 2282:
case 104:
case 807:
case 2000:
case 2752:
case 3710:
case 675:
case 15:
case 2238:
case 3084:
case 3062:
case 525:
case 830:
case 2099:
case 2035:
case 1264:
case 984:
case 2208:
case 3182:
case 2005:
case 751:
case 2375:
case 235:
case 2577:
case 1921:
case 1375:
case 423:
case 3138:
case 4048:
case 341:
case 1208:
case 219:
case 967:
case 2624:
case 380:
case 1247:
case 4007:
case 1063:
case 455:
case 3751:
case 3978:
case 3866:
case 2061:
case 3097:
case 3281:
case 1061:
case 1624:
case 3753:
case 2063:
case 1702:
case 2126:
case 542:
case 1345:
case 3436:
case 1050:
case 1214:
case 233:
case 3398:
case 987:
case 2702:
case 670:
case 3746:
case 2345:
case 721:
case 360:
case 2824:
case 453:
case 3731:
case 976:
case 53:
case 1487:
case 3443:
case 3295:
case 527:
case 3098:
case 2772:
case 2186:
case 980:
case 3523:
case 1190:
case 788:
case 805:
case 2045:
case 1186:
case 4008:
case 3410:
case 2452:
case 2190:
case 103:
case 1772:
case 1578:
case 3835:
case 2862:
case 2884:
case 686:
case 2427:
case 384:
case 3800:
case 3137:
case 4047:
case 3655:
case 1427:
case 2207:
case 2578:
case 3914:
case 3559:
case 1075:
case 1016:
case 1278:
case 3789:
case 3465:
case 3813:
case 1983:
case 3947:
case 643:
case 1305:
case 91:
case 1488:
case 2742:
case 674:
case 2507:
case 524:
case 803:
case 2488:
case 2075:
case 376:
case 1981:
case 2016:
case 2330:
case 3595:
case 3539:
case 1361:
case 666:
case 779:
case 2662:
case 2548:
case 1662:
case 1363:
case 3157:
case 1548:
case 4077:
case 387:
case 2361:
case 2575:
case 869:
case 914:
case 4061:
case 3717:
case 255:
case 3864:
case 2007:
case 1849:
case 731:
case 1007:
case 4063:
case 1679:
case 52:
case 3838:
case 691:
case 155:
case 2912:
case 2314:
case 310:
case 123:
case 1720:
case 4005:
case 1245:
case 3166:
case 2245:
case 419:
case 1314:
case 3298:
case 3039:
case 2826:
case 3858:
case 2879:
case 3383:
case 889:
case 1545:
case 269:
case 917:
case 2649:
case 3792:
case 2078:
case 178:
case 2216:
case 993:
case 3059:
case 823:
case 3434:
case 1308:
case 1485:
case 3170:
case 3744:
case 3963:
case 1216:
case 2263:
case 8:
case 910:
case 2550:
case 3321:
case 1550:
case 1263:
case 1047:
case 2162:
case 3135:
case 3199:
case 2425:
case 1378:
case 2378:
case 3359:
case 272:
case 1184:
case 1419:
case 2205:
case 2008:
case 1491:
case 1:
case 2686:
case 1307:
case 1505:
case 3945:
case 1609:
case 98:
case 393:
case 1493:
case 1998:
case 3111:
case 2491:
case 2:
case 2505:
case 500:
case 3637:
case 2250:
case 3212:
case 3597:
case 1780:
case 537:
case 405:
case 1250:
case 2014:
case 2561:
case 2780:
case 4016:
case 3155:
case 1348:
case 127:
case 4070:
case 3386:
case 2785:
case 1821:
case 2469:
case 3492:
case 2112:
case 148:
case 1469:
case 994:
case 3309:
case 248:
case 3079:
case 2058:
case 2821:
case 1785:
case 3444:
case 10:
case 1211:
case 2599:
case 2535:
case 3584:
case 857:
case 2695:
case 2213:
case 2500:
case 390:
case 3940:
case 3966:
case 20:
case 3878:
case 2299:
case 997:
case 505:
case 309:
case 848:
case 1511:
case 224:
case 2200:
case 3049:
case 4040:
case 3130:
case 124:
case 1200:
case 2420:
case 1513:
case 3105:
case 437:
case 3754:
case 1038:
case 1623:
case 2511:
case 2839:
case 1555:
case 2197:
case 3161:
case 64:
case 1197:
case 706:
case 257:
case 2555:
case 430:
case 1681:
case 519:
case 2496:
case 2382:
case 1022:
case 4055:
case 2364:
case 638:
case 842:
case 1338:
case 820:
case 535:
case 2022:
case 1382:
case 602:
case 3647:
case 2338:
case 339:
case 3349:
case 2480:
case 250:
case 42:
case 1791:
case 1984:
case 1566:
case 1057:
case 2791:
case 2984:
case 2962:
case 3999:
case 4013:
case 1793:
case 83:
case 394:
case 1540:
case 2240:
case 3677:
case 142:
case 2883:
case 3009:
case 2719:
case 533:
case 3911:
case 3326:
case 2725:
case 3090:
case 45:
case 3145:
case 1725:
case 404:
case 313:
case 120:
case 1240:
case 3847:
case 3913:
case 397:
case 3524:
case 909:
case 3955:
case 2570:
case 2546:
case 2253:
case 911:
case 3747:
case 1942:
case 1819:
case 3989:
case 1251:
case 2994:
case 2560:
case 2819:
case 2825:
case 1781:
case 396:
case 1546:
case 1253:
case 694:
case 1486:
case 2490:
case 2152:
case 615:
case 2691:
case 1533:
case 2409:
case 1215:
case 1693:
case 1392:
case 2531:
case 302:
case 2215:
case 2693:
case 639:
case 2229:
case 2018:
case 2392:
case 3369:
case 1490:
case 3667:
case 2533:
case 1619:
case 1233:
case 3103:
case 1625:
case 1529:
case 2972:
case 1576:
case 908:
case 2529:
case 1972:
case 3101:
case 3777:
case 2619:
case 2625:
case 1004:
case 2553:
case 2188:
case 0:
case 3320:
case 2260:
case 4089:
case 1374:
case 1891:
case 1260:
case 3714:
case 3867:
case 2551:
case 4006:
case 1246:
case 2017:
case 938:
case 256:
case 730:
case 3668:
case 2506:
case 1902:
case 3542:
case 3707:
case 4053:
case 1506:
case 690:
case 3634:
case 3594:
case 2589:
case 902:
case 3960:
case 3173:
case 1739:
case 436:
case 1795:
case 4015:
case 2074:
case 311:
case 3438:
case 2304:
case 3933:
case 3156:
case 826:
case 3748:
case 2739:
case 531:
case 2795:
case 1449:
case 3931:
case 3272:
case 2721:
case 1885:
case 3915:
case 1187:
case 2187:
case 2723:
case 3141:
case 2885:
case 1721:
case 226:
case 332:
case 2318:
case 2092:
case 609:
case 512:
case 3953:
case 3136:
case 126:
case 1759:
case 1318:
case 2289:
case 4065:
case 2354:
case 614:
case 431:
case 1236:
case 536:
case 2236:
case 991:
case 3093:
case 262:
case 2067:
case 2243:
case 1896:
case 598:
case 3757:
case 1952:
case 2880:
case 151:
case 3477:
case 882:
case 412:
case 2709:
case 1172:
case 1541:
case 3901:
case 1334:
case 2790:
case 1786:
case 3025:
case 2368:
case 2256:
case 3228:
case 1790:
case 2786:
case 3385:
case 4010:
case 1256:
case 3587:
case 1709:
case 617:
case 2541:
case 2680:
case 2481:
case 1988:
case 3965:
case 1483:
case 282:
case 3604:
case 1271:
case 3737:
case 2483:
case 1932:
case 2273:
case 2696:
case 733:
case 851:
case 1726:
case 3085:
case 610:
case 3288:
case 2459:
case 66:
case 3478:
case 3617:
case 3232:
case 3325:
case 2726:
case 1034:
case 3758:
case 2265:
case 3527:
case 2068:
case 1869:
case 2510:
case 1423:
case 4041:
case 1201:
case 2421:
case 703:
case 2201:
case 1620:
case 2928:
case 3892:
case 3133:
case 2869:
case 868:
case 1510:
case 391:
case 506:
case 2987:
case 2503:
case 2749:
case 1495:
case 3941:
case 1749:
case 2495:
case 3115:
case 3129:
case 401:
case 1210:
case 3764:
case 3588:
case 3936:
case 3407:
case 3644:
case 1565:
case 3391:
case 705:
case 3393:
case 2367:
case 3874:
case 1820:
case 3532:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1771419601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,];
var gg_b = "1771419601/";

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
