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
case 2013:
case 256:
case 997:
case 3251:
case 3042:
case 3856:
case 623:
case 1872:
case 3462:
case 1808:
case 3472:
case 2458:
case 984:
case 3410:
case 3477:
case 3569:
case 1456:
case 1296:
case 2571:
case 3244:
case 1114:
case 938:
case 3805:
case 3323:
case 3157:
case 1768:
case 3467:
case 4071:
case 3050:
case 538:
case 970:
case 3252:
case 2670:
case 3199:
case 4017:
case 1606:
case 2222:
case 2425:
case 1824:
case 3861:
case 2421:
case 140:
case 4020:
case 880:
case 3905:
case 2936:
case 89:
case 2039:
case 324:
case 3943:
case 1135:
case 2479:
case 3169:
case 3822:
case 1875:
case 1387:
case 2747:
case 2157:
case 407:
case 3002:
case 2278:
case 1624:
case 2563:
case 34:
case 2050:
case 1516:
case 2489:
case 2095:
case 239:
case 1303:
case 2692:
case 1976:
case 1675:
case 1318:
case 1878:
case 3578:
case 1629:
case 1101:
case 2820:
case 2344:
case 2025:
case 2697:
case 3460:
case 1124:
case 966:
case 3039:
case 2531:
case 1237:
case 3529:
case 2336:
case 1564:
case 3112:
case 3205:
case 1120:
case 736:
case 1803:
case 520:
case 2011:
case 1820:
case 177:
case 2070:
case 2945:
case 3446:
case 2020:
case 1058:
case 300:
case 3073:
case 2190:
case 2893:
case 2644:
case 3479:
case 1377:
case 3919:
case 2216:
case 1181:
case 1765:
case 2867:
case 3767:
case 196:
case 1148:
case 3921:
case 3627:
case 1474:
case 598:
case 2552:
case 404:
case 1172:
case 1631:
case 2407:
case 898:
case 694:
case 1041:
case 2022:
case 38:
case 2906:
case 2401:
case 2293:
case 874:
case 3449:
case 3845:
case 3171:
case 129:
case 471:
case 1579:
case 518:
case 473:
case 1701:
case 3617:
case 2917:
case 2365:
case 434:
case 1645:
case 346:
case 2329:
case 61:
case 2161:
case 872:
case 211:
case 2199:
case 651:
case 2167:
case 1861:
case 2098:
case 926:
case 1417:
case 3445:
case 3774:
case 2229:
case 512:
case 2165:
case 2410:
case 2331:
case 24:
case 1390:
case 844:
case 3202:
case 957:
case 3505:
case 192:
case 534:
case 1250:
case 1412:
case 2096:
case 199:
case 1092:
case 2968:
case 888:
case 7:
case 3144:
case 3504:
case 2823:
case 1702:
case 1499:
case 854:
case 1375:
case 1368:
case 3979:
case 3695:
case 1964:
case 3474:
case 3140:
case 725:
case 2402:
case 3439:
case 2026:
case 2658:
case 2565:
case 3797:
case 2679:
case 2895:
case 883:
case 77:
case 2573:
case 3285:
case 1766:
case 542:
case 1345:
case 948:
case 1640:
case 1150:
case 3063:
case 988:
case 3844:
case 533:
case 1442:
case 283:
case 390:
case 1837:
case 3282:
case 3289:
case 2460:
case 1171:
case 1761:
case 3730:
case 4034:
case 2049:
case 2564:
case 1501:
case 3095:
case 1340:
case 3701:
case 1325:
case 459:
case 3621:
case 1175:
case 3563:
case 985:
case 4011:
case 3639:
case 530:
case 3915:
case 722:
case 355:
case 2359:
case 2538:
case 685:
case 913:
case 3768:
case 2297:
case 1281:
case 828:
case 3589:
case 298:
case 1676:
case 0:
case 1813:
case 3541:
case 467:
case 1735:
case 2255:
case 3043:
case 401:
case 3023:
case 1109:
case 171:
case 2779:
case 409:
case 1217:
case 848:
case 3332:
case 617:
case 1228:
case 3667:
case 3723:
case 2629:
case 929:
case 3334:
case 3711:
case 4078:
case 3929:
case 3087:
case 2019:
case 399:
case 1268:
case 3831:
case 1914:
case 3806:
case 303:
case 3656:
case 526:
case 2346:
case 2100:
case 1607:
case 1471:
case 1163:
case 3480:
case 540:
case 2781:
case 3619:
case 3581:
case 829:
case 3299:
case 137:
case 3998:
case 2932:
case 3237:
case 1654:
case 1693:
case 2921:
case 4074:
case 1653:
case 3108:
case 3397:
case 2675:
case 3193:
case 605:
case 1396:
case 1218:
case 2474:
case 1628:
case 2899:
case 839:
case 3492:
case 2113:
case 392:
case 1941:
case 917:
case 947:
case 168:
case 267:
case 1656:
case 2087:
case 1666:
case 1988:
case 3886:
case 1350:
case 4003:
case 3342:
case 3240:
case 2151:
case 1756:
case 791:
case 3878:
case 244:
case 1019:
case 395:
case 1103:
case 406:
case 767:
case 494:
case 1985:
case 2398:
case 3924:
case 3590:
case 457:
case 1173:
case 3748:
case 1013:
case 3572:
case 2154:
case 55:
case 2680:
case 3522:
case 3643:
case 855:
case 1894:
case 4059:
case 3309:
case 3517:
case 3471:
case 2132:
case 4042:
case 669:
case 1844:
case 4051:
case 2553:
case 3834:
case 2016:
case 1722:
case 4039:
case 3147:
case 1934:
case 1084:
case 394:
case 608:
case 2526:
case 979:
case 3843:
case 439:
case 1232:
case 1651:
case 2027:
case 450:
case 1904:
case 676:
case 1917:
case 3417:
case 1137:
case 1461:
case 1531:
case 1992:
case 1140:
case 2001:
case 3588:
case 3098:
case 3355:
case 4021:
case 1752:
case 2445:
case 92:
case 27:
case 347:
case 1314:
case 3409:
case 4095:
case 3351:
case 1184:
case 205:
case 2869:
case 2242:
case 2582:
case 1769:
case 1332:
case 234:
case 2337:
case 4036:
case 2175:
case 3437:
case 1295:
case 2690:
case 1386:
case 3941:
case 3160:
case 2158:
case 1153:
case 2700:
case 331:
case 3450:
case 2909:
case 686:
case 2737:
case 1021:
case 97:
case 4006:
case 2919:
case 275:
case 568:
case 624:
case 1679:
case 3545:
case 678:
case 2335:
case 3232:
case 470:
case 3510:
case 3992:
case 2443:
case 375:
case 1410:
case 3413:
case 76:
case 2077:
case 1521:
case 615:
case 2826:
case 3061:
case 3876:
case 2226:
case 2607:
case 2760:
case 2009:
case 3054:
case 1196:
case 1428:
case 703:
case 3629:
case 2139:
case 368:
case 126:
case 2971:
case 1883:
case 1052:
case 1357:
case 2327:
case 3032:
case 1385:
case 2642:
case 2379:
case 423:
case 139:
case 3686:
case 959:
case 2871:
case 2528:
case 1334:
case 2967:
case 3210:
case 3256:
case 1490:
case 1157:
case 476:
case 430:
case 2366:
case 3716:
case 1793:
case 54:
case 3854:
case 2591:
case 827:
case 1673:
case 1706:
case 1202:
case 1740:
case 701:
case 1104:
case 123:
case 2509:
case 1309:
case 2586:
case 1119:
case 2539:
case 1816:
case 1269:
case 3699:
case 2902:
case 30:
case 611:
case 2796:
case 2929:
case 2856:
case 1452:
case 11:
case 1527:
case 1077:
case 3531:
case 1977:
case 1029:
case 2634:
case 3099:
case 2924:
case 2332:
case 1130:
case 3908:
case 3592:
case 3482:
case 1686:
case 557:
case 1407:
case 2404:
case 1810:
case 2102:
case 197:
case 674:
case 385:
case 3274:
case 3294:
case 3408:
case 496:
case 2510:
case 246:
case 4037:
case 1720:
case 1180:
case 2357:
case 643:
case 993:
case 291:
case 1561:
case 1188:
case 2358:
case 1500:
case 3131:
case 2176:
case 899:
case 3253:
case 647:
case 263:
case 902:
case 2546:
case 1229:
case 478:
case 726:
case 2831:
case 2383:
case 2192:
case 3652:
case 1781:
case 342:
case 1968:
case 3394:
case 1047:
case 65:
case 278:
case 2023:
case 1008:
case 2258:
case 983:
case 74:
case 4045:
case 2159:
case 2966:
case 1529:
case 2517:
case 4028:
case 2260:
case 1682:
case 2507:
case 3296:
case 4016:
case 3944:
case 1981:
case 1129:
case 971:
case 3700:
case 2898:
case 4012:
case 4056:
case 1415:
case 3036:
case 1555:
case 1121:
case 2674:
case 1974:
case 212:
case 343:
case 1926:
case 2863:
case 2090:
case 3948:
case 2094:
case 808:
case 2236:
case 2800:
case 3333:
case 2480:
case 504:
case 1422:
case 3455:
case 233:
case 3889:
case 162:
case 904:
case 2589:
case 1361:
case 1379:
case 1916:
case 1117:
case 4070:
case 1464:
case 782:
case 1723:
case 3801:
case 2123:
case 3121:
case 2103:
case 773:
case 2237:
case 2590:
case 2537:
case 3016:
case 221:
case 2916:
case 1618:
case 2668:
case 3389:
case 449:
case 3017:
case 924:
case 1648:
case 1398:
case 2287:
case 1354:
case 3457:
case 1444:
case 2620:
case 890:
case 1115:
case 2035:
case 2277:
case 2481:
case 1128:
case 2264:
case 260:
case 1515:
case 3080:
case 1868:
case 1790:
case 2440:
case 2426:
case 2514:
case 576:
case 2667:
case 1048:
case 2989:
case 400:
case 937:
case 1211:
case 3473:
case 1384:
case 1754:
case 3760:
case 3434:
case 630:
case 2558:
case 2688:
case 198:
case 2473:
case 2754:
case 1371:
case 1055:
case 3057:
case 936:
case 2595:
case 103:
case 2004:
case 3646:
case 3598:
case 486:
case 3785:
case 3001:
case 2849:
case 710:
case 2501:
case 1100:
case 3786:
case 994:
case 3254:
case 2208:
case 3599:
case 2386:
case 3650:
case 2134:
case 1806:
case 2812:
case 1677:
case 1098:
case 2060:
case 3689:
case 1799:
case 1049:
case 3717:
case 2423:
case 698:
case 1289:
case 2512:
case 3769:
case 1287:
case 207:
case 1438:
case 2234:
case 2807:
case 1045:
case 2799:
case 3680:
case 3736:
case 160:
case 3027:
case 1498:
case 2438:
case 183:
case 575:
case 862:
case 44:
case 245:
case 322:
case 2843:
case 1668:
case 2464:
case 419:
case 2943:
case 354:
case 79:
case 2835:
case 251:
case 1830:
case 1563:
case 621:
case 2883:
case 519:
case 3263:
case 2829:
case 1724:
case 2577:
case 3920:
case 15:
case 3692:
case 876:
case 3812:
case 2995:
case 1261:
case 3367:
case 2469:
case 2981:
case 1630:
case 1249:
case 3953:
case 2318:
case 3110:
case 456:
case 463:
case 3881:
case 3261:
case 345:
case 3096:
case 696:
case 977:
case 3465:
case 220:
case 954:
case 3635:
case 2353:
case 1393:
case 3104:
case 180:
case 661:
case 893:
case 3758:
case 3661:
case 1513:
case 752:
case 3279:
case 443:
case 2897:
case 659:
case 3209:
case 1863:
case 3655:
case 1893:
case 1822:
case 3469:
case 1999:
case 4093:
case 1937:
case 3647:
case 2819:
case 1321:
case 2794:
case 2065:
case 734:
case 3620:
case 1855:
case 1102:
case 3681:
case 1118:
case 3183:
case 2119:
case 1636:
case 2557:
case 1911:
case 98:
case 1979:
case 1785:
case 3041:
case 2776:
case 2431:
case 868:
case 2076:
case 3111:
case 2973:
case 1441:
case 1574:
case 2136:
case 2315:
case 1256:
case 1966:
case 2170:
case 1389:
case 21:
case 2314:
case 1258:
case 2397:
case 645:
case 1644:
case 2262:
case 3021:
case 1274:
case 3848:
case 369:
case 2187:
case 329:
case 864:
case 3272:
case 3487:
case 595:
case 3923:
case 1311:
case 3448:
case 3752:
case 1071:
case 3343:
case 2972:
case 2323:
case 1160:
case 2503:
case 840:
case 2790:
case 1842:
case 3657:
case 2273:
case 2854:
case 1638:
case 2756:
case 3547:
case 3782:
case 919:
case 1035:
case 3932:
case 3725:
case 1061:
case 1477:
case 795:
case 1091:
case 3611:
case 1526:
case 2083:
case 3791:
case 1239:
case 613:
case 1370:
case 721:
case 2472:
case 3173:
case 610:
case 2806:
case 3271:
case 1539:
case 1725:
case 3567:
case 3942:
case 3574:
case 3158:
case 1143:
case 1358:
case 1486:
case 2815:
case 3893:
case 3630:
case 2268:
case 627:
case 2772:
case 704:
case 2588:
case 3107:
case 408:
case 1873:
case 3432:
case 1347:
case 2453:
case 1177:
case 1517:
case 1849:
case 2147:
case 3150:
case 2988:
case 3718:
case 2267:
case 2343:
case 1187:
case 1423:
case 1403:
case 1954:
case 3937:
case 3976:
case 2153:
case 927:
case 2308:
case 1165:
case 95:
case 3713:
case 2409:
case 2416:
case 4049:
case 2584:
case 1221:
case 996:
case 2705:
case 2951:
case 3830:
case 1592:
case 3640:
case 741:
case 2484:
case 2551:
case 2493:
case 3134:
case 1090:
case 1394:
case 584:
case 4086:
case 2085:
case 1093:
case 3101:
case 1705:
case 2628:
case 2753:
case 1581:
case 2171:
case 2544:
case 3201:
case 1635:
case 3514:
case 1324:
case 1446:
case 1556:
case 2604:
case 1259:
case 1305:
case 2878:
case 1078:
case 766:
case 2080:
case 1482:
case 4064:
case 2319:
case 3319:
case 1843:
case 588:
case 3163:
case 2727:
case 3435:
case 1927:
case 3573:
case 32:
case 3378:
case 515:
case 3696:
case 1203:
case 2983:
case 1536:
case 1715:
case 4013:
case 3726:
case 4025:
case 1317:
case 3070:
case 468:
case 548:
case 3291:
case 1578:
case 1310:
case 51:
case 549:
case 257:
case 514:
case 1291:
case 2116:
case 2638:
case 3746:
case 2086:
case 297:
case 462:
case 1604:
case 3738:
case 299:
case 2942:
case 2467:
case 172:
case 2746:
case 20:
case 2015:
case 1703:
case 3842:
case 744:
case 104:
case 2624:
case 2925:
case 120:
case 1192:
case 3018:
case 521:
case 1434:
case 2140:
case 1518:
case 3428:
case 3194:
case 2842:
case 1131:
case 1087:
case 489:
case 175:
case 1125:
case 3143:
case 2463:
case 1732:
case 2964:
case 1015:
case 965:
case 3166:
case 1224:
case 1449:
case 3591:
case 889:
case 373:
case 1273:
case 2795:
case 2593:
case 274:
case 3365:
case 1826:
case 3651:
case 3318:
case 240:
case 3901:
case 972:
case 724:
case 508:
case 680:
case 3548:
case 4048:
case 2356:
case 1580:
case 3398:
case 1234:
case 1413:
case 1560:
case 182:
case 3255:
case 1134:
case 2105:
case 132:
case 2448:
case 671:
case 3168:
case 1009:
case 1110:
case 1247:
case 317:
case 845:
case 4026:
case 1312:
case 1248:
case 1782:
case 1728:
case 2797:
case 2953:
case 815:
case 3295:
case 3078:
case 2218:
case 52:
case 214:
case 838:
case 3138:
case 1278:
case 1650:
case 1406:
case 3940:
case 2985:
case 413:
case 2865:
case 1763:
case 1468:
case 3077:
case 3123:
case 1242:
case 2864:
case 80:
case 1747:
case 3565:
case 1727:
case 3733:
case 552:
case 1170:
case 2145:
case 3066:
case 2304:
case 114:
case 2633:
case 3030:
case 1834:
case 2036:
case 3933:
case 1987:
case 2523:
case 3164:
case 3888:
case 3215:
case 1963:
case 629:
case 1929:
case 1302:
case 1363:
case 3313:
case 1733:
case 837:
case 3755:
case 3644:
case 3275:
case 3670:
case 814:
case 3534:
case 933:
case 1972:
case 498:
case 1399:
case 1066:
case 122:
case 1209:
case 2646:
case 516:
case 2330:
case 64:
case 2224:
case 958:
case 672:
case 866:
case 1254:
case 209:
case 952:
case 3734:
case 3076:
case 4027:
case 998:
case 1896:
case 810:
case 3623:
case 3226:
case 1947:
case 3345:
case 1475:
case 1176:
case 639:
case 3553:
case 1585:
case 2447:
case 1094:
case 455:
case 2659:
case 3891:
case 204:
case 1719:
case 3985:
case 1288:
case 376:
case 2993:
case 3820:
case 1615:
case 1729:
case 706:
case 825:
case 1466:
case 1208:
case 2525:
case 507:
case 58:
case 1182:
case 3902:
case 4053:
case 2369:
case 3320:
case 3025:
case 535:
case 2109:
case 482:
case 2612:
case 537:
case 194:
case 822:
case 2233:
case 1681:
case 4033:
case 1488:
case 228:
case 529:
case 2088:
case 3259:
case 3433:
case 1738:
case 102:
case 3003:
case 304:
case 1748:
case 1993:
case 817:
case 2148:
case 2156:
case 3286:
case 288:
case 2837:
case 309:
case 2146:
case 2880:
case 912:
case 3088:
case 3871:
case 1571:
case 2247:
case 383:
case 2385:
case 3247:
case 340:
case 2361:
case 1366:
case 1549:
case 116:
case 3280:
case 3677:
case 2149:
case 1933:
case 3396:
case 2326:
case 4008:
case 3268:
case 353:
case 3530:
case 2771:
case 19:
case 1789:
case 2475:
case 792:
case 2244:
case 1493:
case 3379:
case 4023:
case 2959:
case 2840:
case 728:
case 2219:
case 1504:
case 3186:
case 2652:
case 1147:
case 3458:
case 2014:
case 3416:
case 4:
case 1915:
case 426:
case 2784:
case 2570:
case 117:
case 3568:
case 350:
case 2289:
case 3136:
case 2432:
case 2824:
case 1634:
case 1739:
case 835:
case 2912:
case 1136:
case 1534:
case 3348:
case 3687:
case 2561:
case 3196:
case 596:
case 731:
case 2907:
case 1913:
case 3715:
case 8:
case 1839:
case 3297:
case 3821:
case 3431:
case 2802:
case 1351:
case 999:
case 436:
case 1343:
case 155:
case 352:
case 1774:
case 2625:
case 3310:
case 3860:
case 2543:
case 1492:
case 1060:
case 1001:
case 223:
case 3047:
case 1582:
case 2704:
case 2054:
case 541:
case 3414:
case 2868:
case 1491:
case 384:
case 1995:
case 1107:
case 3750:
case 3346:
case 3899:
case 29:
case 1152:
case 1082:
case 2669:
case 3357:
case 1623:
case 2350:
case 2656:
case 3481:
case 1588:
case 1:
case 812:
case 3359:
case 1659:
case 3395:
case 923:
case 1853:
case 3949:
case 190:
case 2641:
case 2089:
case 2120:
case 39:
case 2785:
case 3189:
case 641:
case 366:
case 3500:
case 3466:
case 2006:
case 2944:
case 2672:
case 3546:
case 1867:
case 461:
case 305:
case 142:
case 3307:
case 3757:
case 3549:
case 2884:
case 2092:
case 2696:
case 2521:
case 3117:
case 2411:
case 3917:
case 718:
case 3744:
case 147:
case 1532:
case 3031:
case 4083:
case 284:
case 2178:
case 2773:
case 700:
case 3637:
case 1032:
case 1922:
case 1031:
case 2044:
case 60:
case 1661:
case 164:
case 1856:
case 1662:
case 3911:
case 905:
case 573:
case 1866:
case 253:
case 475:
case 729:
case 3925:
case 3605:
case 3775:
case 1505:
case 738:
case 1744:
case 554:
case 2000:
case 1567:
case 3392:
case 2712:
case 2024:
case 3645:
case 3423:
case 2689:
case 1408:
case 1003:
case 1016:
case 3762:
case 2405:
case 356:
case 2476:
case 600:
case 2221:
case 2736:
case 3977:
case 747:
case 2838:
case 2122:
case 3184:
case 1297:
case 3377:
case 1279:
case 438:
case 1891:
case 1240:
case 3968:
case 1671:
case 2104:
case 2384:
case 964:
case 3879:
case 3190:
case 1005:
case 3155:
case 2602:
case 2650:
case 1593:
case 3511:
case 3824:
case 2162:
case 3682:
case 2313:
case 2052:
case 517:
case 2241:
case 3494:
case 625:
case 2392:
case 1243:
case 794:
case 714:
case 3753:
case 2292:
case 3965:
case 1105:
case 3203:
case 2299:
case 121:
case 851:
case 2930:
case 3053:
case 945:
case 3815:
case 143:
case 493:
case 865:
case 2873:
case 1455:
case 1817:
case 2228:
case 3490:
case 1253:
case 1095:
case 1887:
case 411:
case 2632:
case 1246:
case 2209:
case 1416:
case 3476:
case 1641:
case 3697:
case 1543:
case 1026:
case 5:
case 3306:
case 1088:
case 3694:
case 2877:
case 1990:
case 4069:
case 296:
case 3833:
case 236:
case 1301:
case 460:
case 3607:
case 1707:
case 975:
case 2618:
case 3741:
case 1079:
case 3867:
case 2918:
case 2723:
case 2938:
case 2958:
case 3159:
case 500:
case 1833:
case 634:
case 1395:
case 679:
case 3688:
case 2055:
case 1510:
case 2079:
case 1459:
case 903:
case 3213:
case 3390:
case 3049:
case 2939:
case 3260:
case 2334:
case 84:
case 811:
case 2069:
case 1155:
case 2857:
case 3045:
case 3040:
case 2701:
case 2881:
case 1860:
case 161:
case 543:
case 2735:
case 3298:
case 1432:
case 4046:
case 2259:
case 2694:
case 435:
case 2600:
case 1447:
case 1418:
case 2743:
case 2066:
case 1664:
case 2196:
case 3257:
case 2637:
case 3602:
case 587:
case 1698:
case 2322:
case 976:
case 1479:
case 3789:
case 3243:
case 425:
case 3779:
case 3124:
case 3071:
case 3520:
case 1146:
case 3540:
case 3344:
case 314:
case 1851:
case 2270:
case 1178:
case 4073:
case 1558:
case 2174:
case 1617:
case 2340:
case 69:
case 2002:
case 3555:
case 2261:
case 1786:
case 3015:
case 2755:
case 1320:
case 1083:
case 861:
case 1220:
case 956:
case 3176:
case 1869:
case 2084:
case 2492:
case 2915:
case 1791:
case 3666:
case 2093:
case 497:
case 2654:
case 1961:
case 1759:
case 1186:
case 2298:
case 2933:
case 911:
case 2664:
case 653:
case 330:
case 2601:
case 551:
case 980:
case 2913:
case 1405:
case 308:
case 3663:
case 1965:
case 601:
case 3191:
case 2502:
case 453:
case 1330:
case 4000:
case 2427:
case 1251:
case 1718:
case 3850:
case 2987:
case 1920:
case 1901:
case 1497:
case 1096:
case 2922:
case 1245:
case 2937:
case 1069:
case 705:
case 1339:
case 418:
case 1167:
case 1011:
case 1658:
case 670:
case 2396:
case 1244:
case 3451:
case 336:
case 265:
case 921:
case 1589:
case 785:
case 2677:
case 3406:
case 2751:
case 2515:
case 1835:
case 2115:
case 3005:
case 3501:
case 3554:
case 3964:
case 920:
case 2998:
case 2980:
case 3327:
case 1133:
case 3679:
case 510:
case 3051:
case 658:
case 323:
case 4081:
case 1436:
case 3951:
case 2210:
case 2257:
case 174:
case 1684:
case 1524:
case 2745:
case 769:
case 1788:
case 1956:
case 2279:
case 1233:
case 3129:
case 3571:
case 1907:
case 717:
case 2892:
case 3234:
case 973:
case 337:
case 3236:
case 1871:
case 3324:
case 112:
case 3704:
case 1767:
case 56:
case 2862:
case 1282:
case 1346:
case 2155:
case 2757:
case 2497:
case 3691:
case 756:
case 3443:
case 10:
case 2649:
case 2581:
case 908:
case 82:
case 4052:
case 3683:
case 313:
case 3927:
case 1440:
case 4005:
case 3868:
case 3756:
case 2160:
case 3400:
case 712:
case 1975:
case 3957:
case 3586:
case 45:
case 1425:
case 1179:
case 1657:
case 2533:
case 3321:
case 3984:
case 2046:
case 603:
case 1694:
case 2245:
case 1807:
case 3668:
case 2598:
case 1982:
case 2195:
case 3658:
case 1741:
case 1973:
case 3405:
case 3034:
case 982:
case 3225:
case 3577:
case 1884:
case 2363:
case 2131:
case 3222:
case 78:
case 1760:
case 1508:
case 3044:
case 1936:
case 1692:
case 2406:
case 2957:
case 1854:
case 2545:
case 1367:
case 2021:
case 281:
case 2655:
case 2613:
case 94:
case 1886:
case 711:
case 2452:
case 3264:
case 3506:
case 1611:
case 2450:
case 582:
case 3978:
case 3089:
case 3539:
case 1014:
case 3508:
case 3188:
case 3373:
case 1737:
case 3436:
case 2687:
case 2978:
case 150:
case 1054:
case 4060:
case 3422:
case 3028:
case 1511:
case 3167:
case 2635:
case 1264:
case 1620:
case 2527:
case 3453:
case 570:
case 3468:
case 1463:
case 85:
case 2976:
case 2058:
case 656:
case 3784:
case 1649:
case 3425:
case 2205:
case 1467:
case 2575:
case 2834:
case 2375:
case 922:
case 1420:
case 2449:
case 2818:
case 2663:
case 3228:
case 2305:
case 3996:
case 3162:
case 2380:
case 2417:
case 1294:
case 3732:
case 280:
case 1326:
case 3374:
case 2399:
case 801:
case 1213:
case 1064:
case 842:
case 1935:
case 3200:
case 3283:
case 1189:
case 885:
case 3906:
case 3669:
case 1034:
case 2530:
case 859:
case 2461:
case 176:
case 2498:
case 2059:
case 3632:
case 1327:
case 3955:
case 1621:
case 3380:
case 2962:
case 1550:
case 2574:
case 3897:
case 131:
case 2117:
case 748:
case 232:
case 3690:
case 3642:
case 42:
case 307:
case 1713:
case 1612:
case 3907:
case 3811:
case 1577:
case 2225:
case 690:
case 4067:
case 2269:
case 577:
case 2377:
case 2382:
case 2456:
case 254:
case 1595:
case 3817:
case 2825:
case 3115:
case 849:
case 3838:
case 2381:
case 1540:
case 2720:
case 2513:
case 3759:
case 3770:
case 3248:
case 1742:
case 3331:
case 1010:
case 1566:
case 3562:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1644537602/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,];
var gg_b = "1644537602/";

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
