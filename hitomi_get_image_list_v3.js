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
case 3268:
case 998:
case 2369:
case 2954:
case 1249:
case 1447:
case 1681:
case 2120:
case 444:
case 183:
case 1905:
case 1647:
case 1472:
case 3528:
case 636:
case 790:
case 3917:
case 1068:
case 1056:
case 1348:
case 2252:
case 581:
case 3961:
case 1761:
case 2438:
case 3589:
case 3019:
case 2819:
case 417:
case 1994:
case 2894:
case 411:
case 281:
case 3214:
case 3221:
case 833:
case 3477:
case 31:
case 2097:
case 3473:
case 1315:
case 3751:
case 3768:
case 2509:
case 3458:
case 1961:
case 2301:
case 3635:
case 2727:
case 3061:
case 3867:
case 1469:
case 3836:
case 1674:
case 419:
case 252:
case 3045:
case 2571:
case 614:
case 1609:
case 3333:
case 2750:
case 2428:
case 3789:
case 319:
case 1277:
case 1333:
case 1402:
case 1922:
case 4055:
case 3379:
case 2997:
case 874:
case 2121:
case 467:
case 816:
case 2008:
case 2709:
case 3796:
case 2640:
case 2972:
case 1144:
case 2376:
case 921:
case 3130:
case 3244:
case 3508:
case 854:
case 3042:
case 453:
case 287:
case 1375:
case 1423:
case 2446:
case 1892:
case 2011:
case 3706:
case 3183:
case 2237:
case 2000:
case 2650:
case 2422:
case 3601:
case 2021:
case 4093:
case 3377:
case 1226:
case 1004:
case 1869:
case 1401:
case 1353:
case 2115:
case 3644:
case 2159:
case 708:
case 2239:
case 1588:
case 1768:
case 2492:
case 2844:
case 2807:
case 2628:
case 3746:
case 3:
case 116:
case 38:
case 3340:
case 948:
case 2334:
case 0:
case 3648:
case 3343:
case 2478:
case 3094:
case 2507:
case 404:
case 1726:
case 1746:
case 628:
case 1703:
case 878:
case 396:
case 2928:
case 927:
case 789:
case 1251:
case 1016:
case 2017:
case 750:
case 1437:
case 322:
case 1715:
case 1078:
case 1805:
case 3004:
case 449:
case 3627:
case 93:
case 1579:
case 1014:
case 696:
case 1376:
case 562:
case 3420:
case 1608:
case 2688:
case 3006:
case 186:
case 596:
case 2805:
case 2901:
case 3201:
case 515:
case 1080:
case 2732:
case 1566:
case 3212:
case 2201:
case 1157:
case 680:
case 2686:
case 3136:
case 3793:
case 3270:
case 897:
case 2840:
case 3640:
case 3471:
case 3849:
case 1891:
case 420:
case 2644:
case 3654:
case 2365:
case 118:
case 804:
case 3020:
case 1243:
case 3480:
case 1893:
case 2307:
case 3673:
case 3832:
case 2420:
case 2399:
case 2424:
case 3467:
case 1028:
case 464:
case 260:
case 1188:
case 3714:
case 273:
case 3313:
case 1733:
case 4005:
case 1050:
case 1163:
case 4068:
case 1120:
case 3866:
case 1576:
case 2506:
case 2225:
case 788:
case 2093:
case 1287:
case 2594:
case 3178:
case 1171:
case 2604:
case 3845:
case 3112:
case 325:
case 3143:
case 1865:
case 4039:
case 3367:
case 207:
case 98:
case 388:
case 2662:
case 2842:
case 196:
case 2830:
case 3441:
case 3126:
case 328:
case 3436:
case 1015:
case 502:
case 3474:
case 2579:
case 2100:
case 3715:
case 2400:
case 1356:
case 1349:
case 946:
case 1946:
case 1196:
case 176:
case 1061:
case 1338:
case 3103:
case 1684:
case 1591:
case 1723:
case 2519:
case 757:
case 514:
case 330:
case 486:
case 2790:
case 1692:
case 1634:
case 1934:
case 2057:
case 2566:
case 2959:
case 2241:
case 3773:
case 1636:
case 1559:
case 4000:
case 1693:
case 782:
case 1753:
case 2891:
case 3826:
case 720:
case 155:
case 2502:
case 113:
case 3481:
case 3801:
case 988:
case 3683:
case 1351:
case 3775:
case 3777:
case 546:
case 1936:
case 2921:
case 3439:
case 2678:
case 2586:
case 3684:
case 3173:
case 2849:
case 460:
case 2250:
case 1418:
case 849:
case 1637:
case 395:
case 2419:
case 950:
case 1567:
case 764:
case 1128:
case 1381:
case 3298:
case 663:
case 2942:
case 1192:
case 1823:
case 952:
case 1119:
case 1471:
case 2897:
case 2050:
case 2173:
case 2593:
case 1213:
case 758:
case 127:
case 1461:
case 2786:
case 2465:
case 1387:
case 1406:
case 3669:
case 227:
case 3659:
case 1115:
case 1497:
case 3874:
case 29:
case 1054:
case 3154:
case 412:
case 1026:
case 2941:
case 1948:
case 2575:
case 1169:
case 267:
case 3808:
case 3014:
case 1929:
case 3227:
case 1804:
case 2722:
case 1364:
case 67:
case 243:
case 1784:
case 2525:
case 40:
case 882:
case 769:
case 2568:
case 3099:
case 1763:
case 2223:
case 1802:
case 1037:
case 3424:
case 3017:
case 3837:
case 1872:
case 1638:
case 3161:
case 4009:
case 1131:
case 3120:
case 3709:
case 1010:
case 4088:
case 3964:
case 2262:
case 2430:
case 2489:
case 4001:
case 2551:
case 2165:
case 2615:
case 1807:
case 3625:
case 2695:
case 2364:
case 397:
case 1070:
case 1323:
case 3650:
case 2281:
case 2533:
case 1064:
case 601:
case 3534:
case 1529:
case 2166:
case 2118:
case 381:
case 3394:
case 3332:
case 3737:
case 1170:
case 818:
case 3363:
case 1739:
case 2776:
case 2443:
case 1881:
case 1501:
case 2569:
case 2938:
case 1743:
case 1087:
case 3030:
case 2587:
case 3478:
case 653:
case 808:
case 1275:
case 2998:
case 2483:
case 3878:
case 3075:
case 2288:
case 2263:
case 647:
case 1236:
case 2396:
case 2945:
case 2761:
case 1214:
case 1189:
case 620:
case 1264:
case 1907:
case 2666:
case 455:
case 2903:
case 2025:
case 2589:
case 2552:
case 1280:
case 2033:
case 3202:
case 745:
case 2875:
case 1665:
case 1625:
case 2799:
case 2056:
case 3900:
case 1305:
case 2815:
case 3432:
case 2694:
case 3159:
case 1890:
case 478:
case 1981:
case 2808:
case 2756:
case 11:
case 4018:
case 1140:
case 3896:
case 3562:
case 1391:
case 2222:
case 95:
case 2158:
case 2968:
case 3440:
case 2247:
case 2988:
case 1820:
case 1486:
case 2219:
case 2578:
case 3195:
case 903:
case 879:
case 1985:
case 2381:
case 3149:
case 3434:
case 3688:
case 335:
case 3449:
case 1291:
case 547:
case 2094:
case 3055:
case 1499:
case 433:
case 3761:
case 1862:
case 377:
case 2323:
case 1809:
case 384:
case 1288:
case 7:
case 296:
case 2718:
case 497:
case 2989:
case 1279:
case 1502:
case 1198:
case 3850:
case 3011:
case 2278:
case 3290:
case 3502:
case 342:
case 1002:
case 793:
case 3757:
case 1085:
case 2926:
case 3503:
case 876:
case 45:
case 3575:
case 3470:
case 3595:
case 777:
case 4074:
case 3916:
case 1429:
case 1778:
case 3897:
case 3410:
case 2337:
case 3750:
case 2583:
case 2314:
case 3003:
case 3368:
case 889:
case 2326:
case 2177:
case 3666:
case 2783:
case 421:
case 3210:
case 1520:
case 1724:
case 3526:
case 2658:
case 4050:
case 56:
case 2367:
case 2348:
case 1176:
case 209:
case 2230:
case 477:
case 71:
case 3518:
case 938:
case 3731:
case 694:
case 3255:
case 1887:
case 1217:
case 220:
case 451:
case 3381:
case 1357:
case 2032:
case 2670:
case 1958:
case 3831:
case 3281:
case 555:
case 3711:
case 716:
case 1410:
case 2748:
case 2353:
case 885:
case 3348:
case 151:
case 2823:
case 438:
case 1112:
case 1330:
case 1320:
case 3733:
case 3311:
case 3334:
case 1871:
case 632:
case 3983:
case 1193:
case 843:
case 2898:
case 4044:
case 144:
case 2836:
case 1646:
case 2449:
case 3626:
case 2486:
case 1044:
case 1092:
case 2145:
case 639:
case 2503:
case 2734:
case 1146:
case 3782:
case 185:
case 2246:
case 1359:
case 1042:
case 3957:
case 485:
case 2243:
case 349:
case 2608:
case 3271:
case 2696:
case 3810:
case 3629:
case 2433:
case 821:
case 1242:
case 2027:
case 2254:
case 1965:
case 1921:
case 2258:
case 303:
case 3612:
case 1240:
case 1629:
case 2690:
case 717:
case 3198:
case 3084:
case 1326:
case 1511:
case 719:
case 3127:
case 2484:
case 1470:
case 3450:
case 891:
case 615:
case 774:
case 3672:
case 869:
case 3624:
case 247:
case 1825:
case 3026:
case 103:
case 2919:
case 3238:
case 3066:
case 4075:
case 2904:
case 3002:
case 947:
case 2034:
case 3651:
case 459:
case 2371:
case 2044:
case 508:
case 1130:
case 193:
case 2501:
case 1062:
case 2622:
case 3724:
case 3278:
case 2103:
case 3021:
case 122:
case 811:
case 1819:
case 3860:
case 3973:
case 3960:
case 1468:
case 3354:
case 500:
case 3067:
case 495:
case 2616:
case 3585:
case 3175:
case 3770:
case 2295:
case 2132:
case 133:
case 3905:
case 538:
case 1727:
case 602:
case 759:
case 3925:
case 2991:
case 3620:
case 2817:
case 2674:
case 3663:
case 4015:
case 698:
case 1095:
case 310:
case 173:
case 4016:
case 2412:
case 1407:
case 1448:
case 3861:
case 3293:
case 3324:
case 265:
case 2920:
case 3121:
case 3078:
case 1360:
case 2653:
case 425:
case 1837:
case 2045:
case 2671:
case 1782:
case 3536:
case 3707:
case 2204:
case 2966:
case 1492:
case 2531:
case 2697:
case 285:
case 1180:
case 3800:
case 2333:
case 1296:
case 994:
case 2547:
case 3695:
case 3402:
case 2962:
case 3604:
case 2999:
case 2458:
case 131:
case 343:
case 386:
case 2257:
case 992:
case 224:
case 2550:
case 114:
case 3403:
case 4058:
case 2387:
case 292:
case 3101:
case 2368:
case 2069:
case 619:
case 2203:
case 2916:
case 2475:
case 1133:
case 1839:
case 1649:
case 110:
case 3934:
case 1403:
case 3200:
case 3105:
case 1610:
case 3269:
case 775:
case 1669:
case 575:
case 2987:
case 539:
case 2287:
case 458:
case 1645:
case 3753:
case 1600:
case 65:
case 1581:
case 1366:
case 1945:
case 2085:
case 356:
case 2833:
case 1821:
case 594:
case 975:
case 3533:
case 121:
case 1003:
case 2006:
case 3531:
case 890:
case 2338:
case 2264:
case 847:
case 2810:
case 3912:
case 1104:
case 1982:
case 3252:
case 2089:
case 677:
case 2554:
case 3590:
case 1495:
case 2534:
case 1866:
case 600:
case 1153:
case 530:
case 2868:
case 3284:
case 2341:
case 439:
case 3554:
case 1614:
case 2523:
case 218:
case 1272:
case 195:
case 2311:
case 1741:
case 364:
case 2749:
case 2693:
case 3865:
case 2524:
case 2800:
case 1554:
case 559:
case 142:
case 3162:
case 1886:
case 2217:
case 3962:
case 3560:
case 2582:
case 3945:
case 1269:
case 1876:
case 505:
case 4046:
case 957:
case 1815:
case 1956:
case 893:
case 2775:
case 1720:
case 3702:
case 1145:
case 3049:
case 3106:
case 3747:
case 2958:
case 104:
case 2971:
case 2409:
case 1281:
case 2742:
case 3530:
case 2665:
case 2022:
case 1971:
case 3955:
case 1704:
case 358:
case 2791:
case 481:
case 3148:
case 2715:
case 1302:
case 1668:
case 2956:
case 1533:
case 1734:
case 3513:
case 2618:
case 1513:
case 1899:
case 814:
case 1770:
case 1162:
case 175:
case 222:
case 551:
case 616:
case 3433:
case 2721:
case 149:
case 1233:
case 3920:
case 3756:
case 3123:
case 355:
case 3495:
case 659:
case 824:
case 3586:
case 605:
case 2415:
case 160:
case 2651:
case 1702:
case 2520:
case 2738:
case 323:
case 621:
case 1149:
case 2214:
case 801:
case 261:
case 2426:
case 1652:
case 2804:
case 1799:
case 1628:
case 1199:
case 3979:
case 3910:
case 100:
case 1957:
case 3417:
case 2490:
case 2801:
case 2680:
case 1286:
case 1165:
case 838:
case 2621:
case 1595:
case 3048:
case 1557:
case 2824:
case 3245:
case 1850:
case 3545:
case 199:
case 72:
case 1690:
case 1697:
case 1976:
case 858:
case 203:
case 734:
case 94:
case 28:
case 1111:
case 550:
case 2275:
case 862:
case 347:
case 2831:
case 2457:
case 4072:
case 3999:
case 2078:
case 344:
case 371:
case 3335:
case 911:
case 3282:
case 1764:
case 1011:
case 877:
case 2527:
case 588:
case 2930:
case 2261:
case 1528:
case 3224:
case 1543:
case 3052:
case 3608:
case 2488:
case 945:
case 1027:
case 3320:
case 1624:
case 2143:
case 1266:
case 61:
case 3997:
case 3717:
case 413:
case 270:
case 165:
case 3408:
case 1276:
case 1498:
case 1977:
case 756:
case 1661:
case 3541:
case 3409:
case 2448:
case 341:
case 1937:
case 2912:
case 4017:
case 2829:
case 19:
case 2657:
case 827:
case 3656:
case 1708:
case 3723:
case 1127:
case 556:
case 3968:
case 4011:
case 965:
case 2747:
case 1445:
case 2453:
case 2030:
case 4019:
case 3834:
case 2015:
case 2600:
case 3327:
case 2125:
case 1404:
case 3326:
case 1494:
case 1709:
case 1938:
case 1224:
case 1386:
case 1117:
case 1584:
case 707:
case 1417:
case 2843:
case 3557:
case 1195:
case 3565:
case 3506:
case 3913:
case 3713:
case 3079:
case 1116:
case 2577:
case 1517:
case 828:
case 2869:
case 3097:
case 3514:
case 86:
case 630:
case 1414:
case 3230:
case 3081:
case 2215:
case 3901:
case 3923:
case 1058:
case 2570:
case 3914:
case 503:
case 753:
case 1990:
case 1989:
case 3517:
case 1854:
case 2266:
case 2038:
case 1331:
case 1184:
case 4045:
case 2580:
case 2112:
case 4071:
case 3820:
case 2935:
case 2643:
case 3542:
case 2508:
case 1325:
case 1390:
case 3694:
case 1427:
case 3855:
case 1806:
case 1742:
case 2342:
case 525:
case 1294:
case 710:
case 1696:
case 3535:
case 3090:
case 3551:
case 865:
case 3576:
case 2024:
case 3944:
case 2822:
case 3959:
case 402:
case 2356:
case 646:
case 3259:
case 2889:
case 2556:
case 1030:
case 783:
case 189:
case 400:
case 1964:
case 1476:
case 1593:
case 3722:
case 848:
case 1438:
case 3823:
case 1754:
case 2451:
case 2031:
case 3907:
case 280:
case 3415:
case 216:
case 784:
case 1578:
case 3205:
case 3194:
case 3292:
case 3186:
case 2212:
case 2517:
case 1604:
case 2661:
case 825:
case 1997:
case 3510:
case 3150:
case 1524:
case 2229:
case 931:
case 2308:
case 3366:
case 1334:
case 1847:
case 3785:
case 416:
case 445:
case 353:
case 2990:
case 2623:
case 1611:
case 3001:
case 626:
case 1229:
case 2289:
case 709:
case 3349:
case 3839:
case 1208:
case 2391:
case 2322:
case 2023:
case 3628:
case 2837:
case 3863:
case 1875:
case 3947:
case 2382:
case 3645:
case 496:
case 1422:
case 240:
case 2352:
case 974:
case 1622:
case 2548:
case 3172:
case 3314:
case 1225:
case 2555:
case 3786:
case 3676:
case 587:
case 654:
case 3444:
case 32:
case 2641:
case 1244:
case 593:
case 1105:
case 2707:
case 368:
case 329:
case 3448:
case 382:
case 3615:
case 3877:
case 781:
case 2777:
case 1456:
case 2421:
case 295:
case 2803:
case 1968:
case 3561:
case 2994:
case 1097:
case 3155:
case 3539:
case 2559:
case 2497:
case 337:
case 1599:
case 3096:
case 3231:
case 3257:
case 3095:
case 3798:
case 3918:
case 1252:
case 4:
case 2210:
case 182:
case 851:
case 568:
case 2743:
case 3876:
case 2122:
case 523:
case 18:
case 852:
case 140:
case 679:
case 1728:
case 3303:
case 363:
case 3362:
case 4048:
case 2242:
case 1154:
case 3260:
case 4073:
case 2557:
case 1143:
case 1580:
case 3185:
case 3296:
case 907:
case 2206:
case 1913:
case 4085:
case 431:
case 2893:
case 1293:
case 1007:
case 3235:
case 3690:
case 4004:
case 1707:
case 604:
case 1966:
case 3765:
case 482:
case 1020:
case 1780:
case 1365:
case 3827:
case 1484:
case 3218:
case 2211:
case 2194:
case 895:
case 2162:
case 1984:
case 3568:
case 919:
case 2297:
case 2759:
case 3427:
case 49:
case 2394:
case 1361:
case 618:
case 675:
case 350:
case 1187:
case 3564:
case 2895:
case 2838:
case 2888:
case 3636:
case 752:
case 2083:
case 1329:
case 2183:
case 2053:
case 3407:
case 692:
case 35:
case 2626:
case 141:
case 859:
case 3894:
case 198:
case 861:
case 1725:
case 900:
case 1791:
case 3491:
case 4036:
case 1282:
case 3611:
case 238:
case 2860:
case 3811:
case 543:
case 1340:
case 1556:
case 3110:
case 2755:
case 2226:
case 1142:
case 1717:
case 925:
case 2839:
case 37:
case 2066:
case 941:
case 3453:
case 569:
case 3080:
case 637:
case 2546:
case 3034:
case 1549:
case 2947:
case 603:
case 250:
case 519:
case 2039:
case 1096:
case 4064:
case 1666:
case 3818:
case 2435:
case 3932:
case 1571:
case 3930:
case 2476:
case 3288:
case 2331:
case 3784:
case 951:
case 1191:
case 699:
case 4033:
case 3701:
case 3766:
case 3915:
case 2597:
case 2009:
case 1810:
case 2147:
case 3429:
case 2164:
case 2716:
case 179:
case 1126:
case 315:
case 2611:
case 3588:
case 1607:
case 905:
case 232:
case 108:
case 2624:
case 598:
case 860:
case 2123:
case 2328:
case 2155:
case 1771:
case 633:
case 1888:
case 3132:
case 1844:
case 2407:
case 2857:
case 2638:
case 944:
case 3581:
case 2197:
case 25:
case 3191:
case 2969:
case 3365:
case 2677:
case 3391:
case 915:
case 1013:
case 3109:
case 408:
case 3092:
case 1667:
case 2719:
case 3547:
case 85:
case 1342:
case 3070:
case 2986:
case 3591:
case 815:
case 450:
case 3250:
case 1352:
case 1434:
case 1250:
case 2349:
case 1870:
case 3336:
case 2293:
case 1779:
case 2713:
case 3598:
case 1916:
case 3926:
case 1689:
case 2553:
case 3638:
case 3493:
case 1842:
case 711:
case 441:
case 3243:
case 2269:
case 1590:
case 446:
case 3192:
case 2001:
case 4002:
case 3592:
case 115:
case 1808:
case 3873:
case 1846:
case 1203:
case 3285:
case 1794:
case 705:
case 178:
case 4077:
case 1822:
case 3642:
case 2881:
case 2061:
case 1431:
case 2565:
case 3184:
case 2268:
case 996:
case 2967:
case 2513:
case 2375:
case 62:
case 886:
case 365:
case 2649:
case 1109:
case 2124:
case 939:
case 1711:
case 1113:
case 2510:
case 2724:
case 3580:
case 1834:
case 3091:
case 1247:
case 650:
case 259:
case 2466:
case 942:
case 526:
case 1955:
case 1538:
case 2619:
case 200:
case 1221:
case 1179:
case 884:
case 1021:
case 1086:
case 3361:
case 2390:
case 2765:
case 2886:
case 2189:
case 1477:
case 597:
case 3970:
case 311:
case 262:
case 272:
case 3871:
case 566:
case 338:
case 997:
case 1241:
case 2806:
case 3941:
case 279:
case 2673:
case 3389:
case 2617:
case 3317:
case 2879:
case 2633:
case 286:
case 823:
case 373:
case 2934:
case 1136:
case 841:
case 2887:
case 2473:
case 1206:
case 3993:
case 2272:
case 3697:
case 1816:
case 3705:
case 622:
case 1831:
case 1350:
case 807:
case 1518:
case 1425:
case 3302:
case 2235:
case 537:
case 213:
case 3490:
case 1864:
case 3931:
case 1969:
case 623:
case 1237:
case 1673:
case 2303:
case 2563:
case 2395:
case 2771:
case 3870:
case 4081:
case 105:
case 787:
case 498:
case 1621:
case 1466:
case 1507:
case 1998:
case 1574:
case 3853:
case 2782:
case 2343:
case 2128:
case 59:
case 3736:
case 2309:
case 959:
case 3634:
case 4083:
case 2613:
case 10:
case 2029:
case 3146:
case 1231:
case 966:
case 3468:
case 2482:
case 3009:
case 2957:
case 214:
case 576:
case 3372:
case 1309:
case 1504:
case 1777:
case 1076:
case 2816:
case 1399:
case 3854:
case 2950:
case 968:
case 1132:
case 361:
case 4065:
case 4056:
case 771:
case 3835:
case 2885:
case 274:
case 83:
case 3553:
case 380:
case 3691:
case 3520:
case 3655:
case 1623:
case 2082:
case 2058:
case 1098:
case 1677:
case 2852:
case 742:
case 3446:
case 3359:
case 778:
case 2152:
case 3829:
case 345:
case 820:
case 2270:
case 2172:
case 2536:
case 1220:
case 2676:
case 2825:
case 2535:
case 2797:
case 3605:
case 2207:
case 922:
case 3844:
case 3347:
case 2445:
case 949:
case 1398:
case 3708:
case 1413:
case 181:
case 2108:
case 3051:
case 3203:
case 642:
case 3122:
case 3267:
case 1797:
case 2927:
case 2106:
case 2111:
case 1653:
case 3068:
case 3892:
case 3058:
case 780:
case 1781:
case 1792:
case 3229:
case 233:
case 2647:
case 3306:
case 2188:
case 3371:
case 91:
case 3728:
case 3098:
case 81:
case 3399:
case 572:
case 1222:
case 2933:
case 1491:
case 291:
case 1880:
case 1547:
case 732:
case 3991:
case 2392:
case 1118:
case 3398:
case 1840:
case 1583:
case 3065:
case 48:
case 2462:
case 1943:
case 418:
case 726:
case 2404:
case 1147:
case 2637:
case 2405:
case 3521:
case 906:
case 1201:
case 2452:
case 1071:
case 2964:
case 4006:
case 1316:
case 3134:
case 22:
case 2731:
case 2383:
case 136:
case 2406:
case 1950:
case 829:
case 1107:
case 3716:
case 3729:
case 4007:
case 909:
case 2063:
case 3064:
case 1577:
case 2544:
case 3619:
case 3501:
case 483:
case 1651:
case 294:
case 389:
case 3719:
case 2746:
case 676:
case 674:
case 102:
case 221:
case 99:
case 1732:
case 595:
case 3023:
case 794:
case 3451:
case 4025:
case 4089:
case 3028:
case 3115:
case 24:
case 288:
case 1420:
case 406:
case 1632:
case 901:
case 3421:
case 4043:
case 3220:
case 3815:
case 317:
case 3703:
case 3856:
case 3687:
case 191:
case 4012:
case 3397:
case 3741:
case 3678:
case 3325:
case 3248:
case 3937:
case 1827:
case 2788:
case 1139:
case 428:
case 2892:
case 2072:
case 208:
case 2567:
case 1082:
case 2944:
case 3921:
case 964:
case 2984:
case 3472:
case 1545:
case 1904:
case 354:
case 3996:
case 727:
case 3828:
case 3087:
case 3494:
case 1345:
case 3462:
case 1640:
case 164:
case 2996:
case 226:
case 68:
case 582:
case 3790:
case 866:
case 591:
case 3215:
case 2495:
case 2851:
case 1255:
case 2373:
case 2439:
case 3093:
case 2265:
case 2339:
case 4021:
case 1248:
case 1775:
case 2086:
case 3316:
case 4014:
case 255:
case 23:
case 2150:
case 1796:
case 2863:
case 473:
case 936:
case 4094:
case 3063:
case 3380:
case 3010:
case 1336:
case 3141:
case 3207:
case 1915:
case 3524:
case 2205:
case 617:
case 1530:
case 2700:
case 3279:
case 2610:
case 1488:
case 424:
case 1446:
case 55:
case 3936:
case 284:
case 2951:
case 2733:
case 761:
case 3792:
case 3216:
case 535:
case 2413:
case 1052:
case 2231:
case 3685:
case 662:
case 2906:
case 308:
case 3330:
case 3806:
case 892:
case 1040:
case 1073:
case 1114:
case 3108:
case 3699:
case 1701:
case 3382:
case 1022:
case 1467:
case 1544:
case 2818:
case 3788:
case 9:
case 392:
case 672:
case 2542:
case 3668:
case 2073:
case 3059:
case 283:
case 2726:
case 3357:
case 3758:
case 3050:
case 3704:
case 422:
case 1339:
case 733:
case 492:
case 1671:
case 507:
case 1699:
case 798:
case 1426:
case 3512:
case 2574:
case 2498:
case 2320:
case 3352:
case 1234:
case 3438:
case 1368:
case 853:
case 3985:
case 336:
case 799:
case 1292:
case 1239:
case 671:
case 170:
case 3718:
case 3755:
case 2441:
case 357:
case 461:
case 3487:
case 760:
case 2913:
case 3309:
case 1552:
case 888:
case 454:
case 3301:
case 1589:
case 3350:
case 1227:
case 1254:
case 1416:
case 2834:
case 3740:
case 3240:
case 2117:
case 1526:
case 3988:
case 590:
case 2980:
case 1106:
case 2274:
case 2779:
case 779:
case 1475:
case 2280:
case 241:
case 237:
case 2668:
case 1620:
case 1515:
case 3355:
case 973:
case 1238:
case 2186:
case 648:
case 1049:
case 2764:
case 4042:
case 2729:
case 980:
case 3375:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1733266802/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,];
var gg_b = "1733266802/";

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
