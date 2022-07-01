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
case 2038:
case 3754:
case 2412:
case 3191:
case 3785:
case 655:
case 2928:
case 3519:
case 1608:
case 2602:
case 2987:
case 152:
case 634:
case 1660:
case 1190:
case 947:
case 1741:
case 960:
case 2806:
case 2079:
case 3620:
case 396:
case 928:
case 1594:
case 1547:
case 2269:
case 3073:
case 3737:
case 3766:
case 405:
case 38:
case 2376:
case 2210:
case 1593:
case 2296:
case 3167:
case 2547:
case 3463:
case 2707:
case 3264:
case 3343:
case 1982:
case 3086:
case 335:
case 1188:
case 166:
case 1281:
case 1665:
case 3223:
case 3546:
case 3933:
case 2146:
case 320:
case 1059:
case 999:
case 3118:
case 3866:
case 852:
case 3520:
case 986:
case 3944:
case 2440:
case 3590:
case 94:
case 2991:
case 2947:
case 53:
case 1911:
case 2645:
case 792:
case 1137:
case 2675:
case 595:
case 3171:
case 2834:
case 3234:
case 2955:
case 1908:
case 657:
case 3107:
case 3002:
case 569:
case 675:
case 2261:
case 3184:
case 1054:
case 141:
case 556:
case 784:
case 942:
case 3084:
case 3172:
case 3020:
case 3305:
case 1125:
case 3034:
case 216:
case 1065:
case 1052:
case 2234:
case 1151:
case 3838:
case 796:
case 2090:
case 3231:
case 4053:
case 821:
case 110:
case 181:
case 2985:
case 298:
case 3209:
case 450:
case 122:
case 1765:
case 1302:
case 3989:
case 2177:
case 2147:
case 593:
case 1086:
case 4025:
case 1532:
case 3660:
case 1976:
case 3795:
case 1706:
case 1655:
case 3324:
case 2827:
case 1460:
case 106:
case 2145:
case 1900:
case 1865:
case 2209:
case 2244:
case 3929:
case 1907:
case 86:
case 37:
case 4043:
case 336:
case 4059:
case 403:
case 2293:
case 1300:
case 1503:
case 485:
case 3198:
case 2528:
case 2882:
case 1629:
case 370:
case 2049:
case 2128:
case 1266:
case 2487:
case 1446:
case 1095:
case 3773:
case 3021:
case 1568:
case 622:
case 582:
case 2485:
case 125:
case 371:
case 2854:
case 2515:
case 2046:
case 3673:
case 2566:
case 2672:
case 3110:
case 2694:
case 3584:
case 3504:
case 1092:
case 1134:
case 3316:
case 763:
case 1720:
case 1130:
case 812:
case 925:
case 1235:
case 1315:
case 1010:
case 3949:
case 2290:
case 2941:
case 3368:
case 1167:
case 2813:
case 1528:
case 2477:
case 1053:
case 3639:
case 3832:
case 2052:
case 3382:
case 2590:
case 3486:
case 610:
case 587:
case 1884:
case 2280:
case 1039:
case 2448:
case 534:
case 26:
case 2171:
case 1518:
case 426:
case 896:
case 572:
case 565:
case 1961:
case 1356:
case 1443:
case 2498:
case 2260:
case 3526:
case 3630:
case 884:
case 705:
case 1812:
case 3013:
case 3907:
case 444:
case 968:
case 3578:
case 1989:
case 760:
case 2697:
case 3282:
case 632:
case 1347:
case 2965:
case 3383:
case 2279:
case 2258:
case 2802:
case 3050:
case 1158:
case 1826:
case 1480:
case 3853:
case 1146:
case 1419:
case 3902:
case 2953:
case 1415:
case 1268:
case 1968:
case 2303:
case 1993:
case 692:
case 3275:
case 1138:
case 2474:
case 820:
case 390:
case 3176:
case 3055:
case 2418:
case 950:
case 509:
case 1229:
case 424:
case 2232:
case 549:
case 3085:
case 146:
case 3609:
case 3445:
case 2220:
case 778:
case 1018:
case 1880:
case 3406:
case 84:
case 3847:
case 288:
case 1516:
case 3279:
case 3248:
case 1155:
case 2917:
case 1156:
case 3632:
case 3121:
case 1564:
case 2706:
case 1762:
case 2896:
case 2014:
case 2074:
case 2801:
case 3940:
case 411:
case 3983:
case 1630:
case 1951:
case 323:
case 1497:
case 1360:
case 2623:
case 2152:
case 1543:
case 2743:
case 2995:
case 2297:
case 939:
case 3473:
case 2500:
case 945:
case 3213:
case 1233:
case 1913:
case 3163:
case 2851:
case 3779:
case 3437:
case 3792:
case 321:
case 2452:
case 221:
case 190:
case 2764:
case 1326:
case 3908:
case 2638:
case 1425:
case 71:
case 1012:
case 4009:
case 1058:
case 3537:
case 2876:
case 311:
case 3901:
case 1834:
case 345:
case 1105:
case 3581:
case 368:
case 2105:
case 1349:
case 1029:
case 2776:
case 1674:
case 28:
case 2546:
case 128:
case 762:
case 3262:
case 1256:
case 224:
case 2204:
case 2637:
case 2673:
case 532:
case 2332:
case 2072:
case 798:
case 872:
case 2274:
case 3091:
case 3164:
case 1798:
case 653:
case 504:
case 3865:
case 2087:
case 1633:
case 2654:
case 1963:
case 4062:
case 3819:
case 2996:
case 732:
case 636:
case 1067:
case 2480:
case 3261:
case 2240:
case 1858:
case 930:
case 3707:
case 2142:
case 2226:
case 771:
case 2268:
case 1482:
case 2538:
case 1104:
case 694:
case 1303:
case 748:
case 2369:
case 1047:
case 1431:
case 3488:
case 3450:
case 3318:
case 2481:
case 2798:
case 2430:
case 2517:
case 1748:
case 1088:
case 974:
case 3966:
case 2831:
case 3149:
case 1810:
case 326:
case 3254:
case 837:
case 2384:
case 21:
case 1258:
case 2469:
case 2509:
case 454:
case 575:
case 3429:
case 14:
case 4048:
case 1872:
case 2407:
case 2379:
case 667:
case 1785:
case 3623:
case 3857:
case 2532:
case 1321:
case 2441:
case 559:
case 3061:
case 540:
case 2506:
case 3496:
case 4081:
case 756:
case 2692:
case 2825:
case 1207:
case 3900:
case 1100:
case 135:
case 3417:
case 1602:
case 3814:
case 3449:
case 3037:
case 2255:
case 2053:
case 2611:
case 60:
case 4072:
case 2178:
case 1331:
case 2192:
case 678:
case 422:
case 2259:
case 1462:
case 1510:
case 2507:
case 1372:
case 1387:
case 614:
case 3440:
case 2649:
case 1030:
case 4033:
case 1388:
case 2092:
case 451:
case 3210:
case 1640:
case 3082:
case 3521:
case 3076:
case 2197:
case 3827:
case 3152:
case 4010:
case 3378:
case 1916:
case 3694:
case 3228:
case 2557:
case 383:
case 2677:
case 2169:
case 3464:
case 1436:
case 3256:
case 189:
case 233:
case 1632:
case 165:
case 704:
case 3906:
case 643:
case 51:
case 2741:
case 2120:
case 2671:
case 1111:
case 3053:
case 722:
case 2887:
case 2225:
case 1223:
case 1299:
case 452:
case 1565:
case 3460:
case 1953:
case 3878:
case 3216:
case 3971:
case 2967:
case 892:
case 2218:
case 2510:
case 1551:
case 1219:
case 1651:
case 3568:
case 1597:
case 3626:
case 3192:
case 2689:
case 3356:
case 3555:
case 3446:
case 3844:
case 2703:
case 2148:
case 23:
case 1121:
case 2716:
case 2173:
case 1517:
case 3399:
case 1960:
case 3635:
case 4031:
case 2969:
case 188:
case 4060:
case 501:
case 3244:
case 1492:
case 1153:
case 34:
case 3083:
case 1589:
case 2629:
case 3173:
case 1168:
case 3677:
case 870:
case 695:
case 409:
case 2934:
case 3646:
case 3335:
case 647:
case 3056:
case 3846:
case 3654:
case 1709:
case 3395:
case 1410:
case 1339:
case 77:
case 158:
case 2900:
case 2925:
case 1672:
case 477:
case 243:
case 2875:
case 1226:
case 998:
case 87:
case 2176:
case 3019:
case 2593:
case 3719:
case 1434:
case 825:
case 40:
case 727:
case 612:
case 3580:
case 2501:
case 1725:
case 2994:
case 2314:
case 1579:
case 3178:
case 1265:
case 2437:
case 2773:
case 1699:
case 3364:
case 2903:
case 196:
case 294:
case 2029:
case 997:
case 2992:
case 337:
case 2165:
case 2643:
case 1833:
case 3185:
case 2800:
case 1614:
case 2287:
case 2251:
case 377:
case 4077:
case 3522:
case 3143:
case 2007:
case 2932:
case 500:
case 2684:
case 3771:
case 1649:
case 3401:
case 4030:
case 2913:
case 580:
case 433:
case 719:
case 2830:
case 2058:
case 2752:
case 2685:
case 957:
case 4075:
case 3241:
case 2101:
case 3402:
case 1669:
case 449:
case 1658:
case 2071:
case 1504:
case 517:
case 1523:
case 2099:
case 3334:
case 3040:
case 2156:
case 112:
case 2931:
case 2781:
case 1170:
case 2015:
case 1978:
case 3993:
case 1842:
case 672:
case 1763:
case 2107:
case 4063:
case 2526:
case 1163:
case 3686:
case 3589:
case 3003:
case 894:
case 1801:
case 227:
case 3513:
case 90:
case 1251:
case 3652:
case 269:
case 2868:
case 1701:
case 1545:
case 1857:
case 1808:
case 1622:
case 2647:
case 342:
case 2970:
case 3745:
case 2732:
case 1476:
case 1991:
case 674:
case 1403:
case 202:
case 4034:
case 1128:
case 3022:
case 951:
case 3604:
case 1214:
case 493:
case 2191:
case 783:
case 3310:
case 277:
case 182:
case 3936:
case 2057:
case 1520:
case 1766:
case 673:
case 2408:
case 2343:
case 2575:
case 505:
case 1238:
case 865:
case 3422:
case 1529:
case 1957:
case 2815:
case 1034:
case 3506:
case 3168:
case 2521:
case 1806:
case 1087:
case 1455:
case 1204:
case 482:
case 878:
case 3758:
case 1182:
case 3470:
case 24:
case 3594:
case 39:
case 1558:
case 680:
case 2228:
case 1424:
case 1598:
case 2491:
case 716:
case 3625:
case 3527:
case 229:
case 1736:
case 462:
case 3269:
case 219:
case 1198:
case 831:
case 981:
case 599:
case 1378:
case 2288:
case 1364:
case 654:
case 2073:
case 2908:
case 103:
case 1221:
case 276:
case 1971:
case 3370:
case 3328:
case 2154:
case 2231:
case 714:
case 1910:
case 2355:
case 2973:
case 1062:
case 2784:
case 3211:
case 811:
case 816:
case 2196:
case 2409:
case 2309:
case 3400:
case 1515:
case 430:
case 3398:
case 1208:
case 3169:
case 2439:
case 881:
case 3710:
case 3653:
case 2842:
case 168:
case 1895:
case 2283:
case 2277:
case 3897:
case 2639:
case 1840:
case 2730:
case 2133:
case 919:
case 687:
case 3419:
case 1537:
case 3914:
case 408:
case 2104:
case 111:
case 2254:
case 3909:
case 2968:
case 404:
case 989:
case 2118:
case 902:
case 3292:
case 1136:
case 1441:
case 3309:
case 2328:
case 1722:
case 304:
case 840:
case 248:
case 3667:
case 1287:
case 228:
case 1260:
case 1536:
case 1666:
case 261:
case 733:
case 3802:
case 2036:
case 994:
case 3337:
case 2572:
case 4007:
case 1490:
case 2464:
case 2315:
case 2253:
case 378:
case 2175:
case 3217:
case 1116:
case 6:
case 739:
case 1541:
case 3875:
case 2492:
case 11:
case 1447:
case 2313:
case 2203:
case 2642:
case 1009:
case 728:
case 3344:
case 2687:
case 3475:
case 476:
case 1148:
case 2435:
case 1468:
case 3154:
case 3845:
case 689:
case 192:
case 515:
case 2889:
case 1120:
case 976:
case 2634:
case 2135:
case 2863:
case 2548:
case 1852:
case 3426:
case 3956:
case 3431:
case 952:
case 2617:
case 1958:
case 1650:
case 3536:
case 1768:
case 848:
case 1677:
case 1240:
case 1249:
case 2867:
case 544:
case 536:
case 1979:
case 1390:
case 0:
case 1422:
case 1687:
case 2027:
case 136:
case 1925:
case 3232:
case 381:
case 3834:
case 415:
case 746:
case 1527:
case 75:
case 3286:
case 3153:
case 124:
case 93:
case 2864:
case 2346:
case 157:
case 3283:
case 2775:
case 1050:
case 806:
case 2351:
case 1866:
case 2943:
case 2791:
case 3005:
case 1716:
case 3899:
case 3723:
case 3068:
case 573:
case 134:
case 2873:
case 2979:
case 3010:
case 889:
case 3756:
case 262:
case 2916:
case 898:
case 1899:
case 1653:
case 745:
case 1780:
case 1365:
case 3038:
case 1824:
case 2385:
case 458:
case 1652:
case 1524:
case 1818:
case 1102:
case 851:
case 1823:
case 1406:
case 3685:
case 912:
case 3369:
case 916:
case 1796:
case 3247:
case 2001:
case 543:
case 1306:
case 3657:
case 3026:
case 2048:
case 3387:
case 2235:
case 3690:
case 1956:
case 1967:
case 1345:
case 1813:
case 3190:
case 3815:
case 1825:
case 1206:
case 2271:
case 1915:
case 1329:
case 970:
case 1185:
case 245:
case 1607:
case 1097:
case 1261:
case 1664:
case 384:
case 833:
case 688:
case 659:
case 2023:
case 2683:
case 2779:
case 813:
case 1890:
case 555:
case 3637:
case 524:
case 2753:
case 1203:
case 438:
case 18:
case 2993:
case 3207:
case 3483:
case 3353:
case 2339:
case 1096:
case 2929:
case 1327:
case 1571:
case 1943:
case 3611:
case 2207:
case 1585:
case 3240:
case 3742:
case 3675:
case 519:
case 2814:
case 3586:
case 156:
case 2998:
case 1264:
case 2975:
case 1162:
case 4078:
case 1737:
case 3864:
case 770:
case 3790:
case 4076:
case 3567:
case 3142:
case 1209:
case 3683:
case 944:
case 3108:
case 868:
case 2340:
case 252:
case 3481:
case 184:
case 279:
case 91:
case 2157:
case 89:
case 1575:
case 2124:
case 779:
case 2223:
case 1832:
case 3905:
case 2811:
case 2963:
case 1205:
case 2822:
case 2317:
case 3047:
case 1567:
case 1561:
case 2921:
case 1764:
case 3030:
case 1341:
case 379:
case 2066:
case 2919:
case 3954:
case 1222:
case 2419:
case 1542:
case 1574:
case 2352:
case 412:
case 1457:
case 839:
case 1893:
case 1369:
case 1625:
case 850:
case 1596:
case 1643:
case 398:
case 1084:
case 3257:
case 2618:
case 2043:
case 1891:
case 163:
case 2659:
case 1348:
case 1843:
case 1754:
case 3919:
case 140:
case 225:
case 1577:
case 3251:
case 2316:
case 1216:
case 658:
case 4015:
case 1298:
case 913:
case 2667:
case 3964:
case 1478:
case 2940:
case 2533:
case 2056:
case 4080:
case 3960:
case 3528:
case 197:
case 253:
case 2568:
case 1089:
case 860:
case 2794:
case 940:
case 2778:
case 2091:
case 625:
case 3263:
case 3059:
case 759:
case 3281:
case 2859:
case 1464:
case 2901:
case 1921:
case 1929:
case 3789:
case 1070:
case 310:
case 817:
case 1301:
case 1077:
case 1506:
case 2591:
case 428:
case 1278:
case 2944:
case 290:
case 883:
case 3548:
case 347:
case 1366:
case 2576:
case 3487:
case 1191:
case 445:
case 3998:
case 959:
case 2709:
case 2701:
case 1178:
case 214:
case 2756:
case 226:
case 56:
case 922:
case 1335:
case 579:
case 3699:
case 1020:
case 2360:
case 3220:
case 3046:
case 234:
case 1707:
case 1399:
case 3128:
case 853:
case 3150:
case 2920:
case 2829:
case 4055:
case 661:
case 3425:
case 3237:
case 2002:
case 2213:
case 3381:
case 1634:
case 172:
case 359:
case 597:
case 2751:
case 1559:
case 3424:
case 2580:
case 1098:
case 601:
case 2062:
case 472:
case 3360:
case 1051:
case 1000:
case 2843:
case 703:
case 3638:
case 464:
case 897:
case 906:
case 2765:
case 3478:
case 2872:
case 239:
case 3962:
case 2188:
case 107:
case 3622:
case 1024:
case 486:
case 633:
case 1453:
case 866:
case 180:
case 3797:
case 1139:
case 348:
case 1337:
case 3296:
case 1937:
case 3242:
case 2734:
case 2960:
case 3644:
case 1246:
case 1693:
case 2149:
case 1869:
case 611:
case 1296:
case 3205:
case 1623:
case 2348:
case 2735:
case 1320:
case 3808:
case 3744:
case 3837:
case 824:
case 2644:
case 3161:
case 3561:
case 967:
case 3918:
case 3226:
case 230:
case 2425:
case 1973:
case 2003:
case 267:
case 3127:
case 1193:
case 1291:
case 3469:
case 407:
case 843:
case 2982:
case 2696:
case 3427:
case 523:
case 2723:
case 119:
case 1747:
case 2789:
case 2037:
case 2783:
case 635:
case 2069:
case 79:
case 2161:
case 932:
case 2755:
case 1704:
case 3459:
case 1277:
case 1549:
case 3514:
case 2155:
case 787:
case 910:
case 1566:
case 314:
case 1404:
case 341:
case 946:
case 1075:
case 3981:
case 3640:
case 3078:
case 3029:
case 3380:
case 3204:
case 3777:
case 1313:
case 1007:
case 3122:
case 2544:
case 3156:
case 349:
case 1409:
case 470:
case 3063:
case 1494:
case 29:
case 3950:
case 203:
case 1461:
case 3438:
case 1679:
case 1078:
case 1289:
case 3444:
case 901:
case 3182:
case 3070:
case 786:
case 2134:
case 2679:
case 1280:
case 1931:
case 3695:
case 662:
case 1491:
case 98:
case 204:
case 1902:
case 1439:
case 830:
case 3004:
case 1735:
case 789:
case 3794:
case 20:
case 867:
case 791:
case 3273:
case 3299:
case 3858:
case 3123:
case 521:
case 2307:
case 3867:
case 1691:
case 1509:
case 2150:
case 3938:
case 3138:
case 2848:
case 1262:
case 1496:
case 724:
case 828:
case 3351:
case 3436:
case 2821:
case 3731:
case 3811:
case 984:
case 949:
case 2386:
case 3849:
case 1728:
case 3743:
case 1044:
case 3582:
case 2186:
case 3510:
case 646:
case 1430:
case 1923:
case 2084:
case 4056:
case 2233:
case 1830:
case 3602:
case 3776:
case 2300:
case 2948:
case 1489:
case 3570:
case 3394:
case 3970:
case 2676:
case 3389:
case 2989:
case 1546:
case 2733:
case 3532:
case 1371:
case 2067:
case 1511:
case 899:
case 1554:
case 2788:
case 3323:
case 2878:
case 3277:
case 1267:
case 4058:
case 2907:
case 3806:
case 2936:
case 3490:
case 2495:
case 1338:
case 3051:
case 2820:
case 50:
case 3529:
case 702:
case 483:
case 564:
case 879:
case 3434:
case 173:
case 2264:
case 638:
case 3647:
case 1684:
case 2494:
case 4011:
case 3768:
case 1336:
case 1272:
case 3564:
case 490:
case 993:
case 2305:
case 2737:
case 57:
case 2558:
case 1552:
case 3314:
case 2945:
case 2832:
case 2227:
case 1638:
case 3701:
case 1008:
case 531:
case 2013:
case 479:
case 186:
case 2809:
case 3000:
case 1534:
case 217:
case 2024:
case 3658:
case 1330:
case 2068:
case 1654:
case 1667:
case 4039:
case 484:
case 427:
case 964:
case 2445:
case 2059:
case 3112:
case 2957:
case 3939:
case 1999:
case 2193:
case 3183:
case 3764:
case 751:
case 2803:
case 574:
case 1962:
case 2427:
case 3025:
case 749:
case 2511:
case 2444:
case 2574:
case 2980:
case 2160:
case 525:
case 685:
case 3664:
case 3523:
case 3193:
case 2656:
case 503:
case 187:
case 2394:
case 1784:
case 2373:
case 2194:
case 2200:
case 1352:
case 2100:
case 3157:
case 1312:
case 2866:
case 1803:
case 1379:
case 68:
case 2216:
case 2151:
case 3666:
case 2275:
case 934:
case 931:
case 3348:
case 3588:
case 1398:
case 372:
case 2738:
case 4093:
case 3012:
case 2321:
case 1584:
case 133:
case 683:
case 1745:
case 768:
case 747:
case 3634:
case 1142:
case 3321:
case 3997:
case 2607:
case 232:
case 1676:
case 3672:
case 3260:
case 380:
case 22:
case 1624:
case 2471:
case 2239:
case 961:
case 2423:
case 2164:
case 3062:
case 2680:
case 1583:
case 3388:
case 2551:
case 1841:
case 535:
case 3355:
case 2428:
case 287:
case 3278:
case 95:
case 781:
case 3752:
case 1448:
case 644:
case 1507:
case 1659:
case 1637:
case 1395:
case 1883:
case 3119:
case 846:
case 1983:
case 3439:
case 1247:
case 473:
case 1055:
case 1628:
case 1241:
case 3629:
case 2324:
case 3162:
case 2019:
case 3430:
case 1689:
case 2508:
case 2862:
case 2088:
case 713:
case 3791:
case 3861:
case 764:
case 3111:
case 3760:
case 2416:
case 583:
case 2370:
case 3227:
case 2786:
case 293:
case 1871:
case 2661:
case 2700:
case 3894:
case 1309:
case 926:
case 2771:
case 2702:
case 465:
case 1002:
case 457:
case 1980:
case 3141:
case 3801:
case 1688:
case 2981:
case 1435:
case 2847:
case 1994:
case 3200:
case 282:
case 1412:
case 1683:
case 212:
case 645:
case 3007:
case 3562:
case 1094:
case 3517:
case 3304:
case 2383:
case 3910:
case 1723:
case 2635:
case 211:
case 1370:
case 2516:
case 3574:
case 3405:
case 699:
case 1254:
case 1500:
case 1734:
case 3408:
case 3835:
case 2462:
case 1056:
case 908:
case 682:
case 3868:
case 2682:
case 1519:
case 518:
case 857:
case 937:
case 2592:
case 3474:
case 3032:
case 3854:
case 1755:
case 3391:
case 2924:
case 3893:
case 1800:
case 570:
case 2211:
case 2263:
case 1609:
case 3009:
case 2812:
case 3339:
case 977:
case 765:
case 3631:
case 1143:
case 1408:
case 3540:
case 100:
case 2630:
case 1861:
case 1270:
case 1311:
case 3556:
case 361:
case 2245:
case 3088:
case 805:
case 1662:
case 1259:
case 2524:
case 3741:
case 423:
case 1234:
case 871:
case 3145:
case 2978:
case 13:
case 2266:
case 2345:
case 2273:
case 1069:
case 4065:
case 1189:
case 399:
case 1562:
case 2570:
case 2249:
case 985:
case 1802:
case 2720:
case 1043:
case 2282:
case 2063:
case 1697:
case 1726:
case 3616:
case 1013:
case 285:
case 3982:
case 606:
case 2655:
case 927:
case 3035:
case 829:
case 1928:
case 338:
case 1619:
case 2111:
case 2585:
case 929:
case 3345:
case 266:
case 1061:
case 3619:
case 803:
case 138:
case 3671:
case 1157:
case 3186:
case 1761:
case 880:
case 1236:
case 2922:
case 731:
case 2010:
case 782:
case 2137:
case 3219:
case 3888:
case 4036:
case 1675:
case 2285:
case 65:
case 3258:
case 3276:
case 191:
case 2736:
case 3708:
case 568:
case 1995:
case 2891:
case 1855:
case 1180:
case 1990:
case 3812:
case 1789:
case 3687:
case 2483:
case 3126:
case 936:
case 3610:
case 2770:
case 2364:
case 2691:
case 2344:
case 30:
case 3807:
case 1759:
case 2537:
case 54:
case 1775:
case 1712:
case 2081:
case 339:
case 3613:
case 305:
case 492:
case 4000:
case 1601:
case 2614:
case 2561:
case 2983:
case 153:
case 3991:
case 1243:
case 2990:
case 1591:
case 2906:
case 887:
case 1848:
case 1085:
case 2881:
case 1582:
case 208:
case 1522:
case 3130:
case 3963:
case 815:
case 1279:
case 3876:
case 1859:
case 561:
case 1082:
case 3135:
case 3201:
case 1456:
case 1829:
case 2206:
case 3397:
case 1501:
case 2904:
case 2622:
case 769:
case 1064:
case 12:
case 2246:
case 584:
case 2541:
case 312:
case 513:
case 1486:
case 1513:
case 3443:
case 2475:
case 3177:
case 2543:
case 270:
case 681:
case 3493:
case 73:
case 1717:
case 3674:
case 2298:
case 3259:
case 603:
case 904:
case 3587:
case 1343:
case 807:
case 1019:
case 1373:
case 527:
case 238:
case 1442:
case 1569:
case 1587:
case 637:
case 3607:
case 2879:
case 1310:
case 4040:
case 1965:
case 1681:
case 1334:
case 328:
case 3214:
case 2577:
case 750:
case 43:
case 175:
case 3712:
case 1046:
case 3109:
case 2855:
case 4079:
case 1017:
case 1724:
case 3761:
case 2666:
case 917:
case 1132:
case 3140:
case 3955:
case 1947:
case 2198:
case 2525:
case 1590:
case 1003:
case 299:
case 707:
case 2670:
case 1487:
case 389:
case 300:
case 2505:
case 1346:
case 2470:
case 526:
case 1595:
case 2565:
case 709:
case 455:
case 117:
case 915:
case 3502:
case 1553:
case 639:
case 3796:
case 2582:
case 547:
case 357:
case 938:
case 2096:
case 697:
case 259:
case 2662:
case 2319:
case 1149:
case 2826:
case 1269:
case 2401:
case 1295:
case 3476:
case 88:
case 442:
case 2089:
case 3471:
case 3008:
case 2291:
case 1924:
case 3713:
case 3272:
case 2496:
case 3067:
case 2387:
case 2999:
case 1041:
case 105:
case 1686:
case 1037:
case 600:
case 3024:
case 414:
case 3311:
case 1605:
case 3503:
case 313:
case 1572:
case 3384:
case 2564:
case 980:
case 1014:
case 2563:
case 49:
case 2519:
case 2530:
case 3882:
case 2886:
case 2028:
case 1252:
case 2698:
case 2391:
case 1508:
case 3979:
case 303:
case 1964:
case 3229:
case 1304:
case 3575:
case 3252:
case 2311:
case 3896:
case 3725:
case 145:
case 1790:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1656691201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,];
var gg_b = "1656691201/";

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
