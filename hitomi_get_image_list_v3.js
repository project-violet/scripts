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
case 3365:
case 2858:
case 2038:
case 454:
case 1315:
case 4081:
case 2729:
case 3392:
case 2074:
case 2083:
case 2402:
case 3418:
case 3919:
case 697:
case 515:
case 2131:
case 314:
case 2151:
case 3681:
case 648:
case 2331:
case 2512:
case 3884:
case 313:
case 1474:
case 3916:
case 3059:
case 983:
case 3270:
case 2214:
case 1820:
case 1113:
case 3636:
case 4046:
case 3836:
case 208:
case 863:
case 978:
case 3904:
case 2972:
case 3268:
case 2365:
case 2322:
case 2173:
case 1934:
case 2063:
case 1819:
case 2072:
case 4061:
case 2664:
case 1903:
case 2526:
case 2864:
case 1391:
case 2488:
case 2454:
case 2423:
case 2511:
case 1906:
case 2028:
case 1531:
case 2369:
case 3958:
case 3840:
case 1451:
case 778:
case 1977:
case 1226:
case 2570:
case 1727:
case 2538:
case 2748:
case 1552:
case 294:
case 2341:
case 4084:
case 2571:
case 2933:
case 2582:
case 1874:
case 3319:
case 1783:
case 267:
case 1947:
case 24:
case 641:
case 2444:
case 2352:
case 941:
case 2315:
case 1008:
case 372:
case 1270:
case 2311:
case 1746:
case 103:
case 810:
case 1591:
case 2882:
case 4025:
case 1634:
case 1243:
case 2786:
case 1905:
case 299:
case 2250:
case 884:
case 1132:
case 2667:
case 3466:
case 1844:
case 1352:
case 2900:
case 790:
case 1585:
case 919:
case 893:
case 1031:
case 880:
case 217:
case 1690:
case 2922:
case 671:
case 1517:
case 204:
case 1026:
case 1127:
case 665:
case 1743:
case 821:
case 2826:
case 2285:
case 1984:
case 3743:
case 1676:
case 3348:
case 1893:
case 1210:
case 419:
case 1223:
case 558:
case 1123:
case 3106:
case 785:
case 1756:
case 2354:
case 1567:
case 1057:
case 3982:
case 1085:
case 2050:
case 1220:
case 3649:
case 2546:
case 3915:
case 904:
case 3018:
case 3073:
case 3005:
case 136:
case 1330:
case 3670:
case 2152:
case 2462:
case 1966:
case 2859:
case 290:
case 1804:
case 980:
case 690:
case 49:
case 3751:
case 816:
case 4075:
case 2164:
case 2168:
case 2915:
case 38:
case 1313:
case 1748:
case 1797:
case 207:
case 1408:
case 3965:
case 268:
case 3845:
case 447:
case 2818:
case 514:
case 2693:
case 688:
case 3499:
case 310:
case 2370:
case 1462:
case 661:
case 896:
case 1419:
case 1993:
case 3461:
case 1055:
case 892:
case 541:
case 1872:
case 245:
case 3612:
case 1663:
case 1166:
case 15:
case 1525:
case 2432:
case 2927:
case 1909:
case 3994:
case 3472:
case 3914:
case 2066:
case 1719:
case 1513:
case 3804:
case 272:
case 1650:
case 3597:
case 2976:
case 3949:
case 4036:
case 3435:
case 2412:
case 1435:
case 3569:
case 2436:
case 914:
case 3851:
case 3758:
case 407:
case 1224:
case 566:
case 1087:
case 2845:
case 2525:
case 86:
case 2286:
case 3109:
case 82:
case 2569:
case 1937:
case 438:
case 2529:
case 1660:
case 414:
case 197:
case 373:
case 1003:
case 398:
case 1610:
case 3112:
case 2675:
case 3571:
case 4040:
case 949:
case 3026:
case 36:
case 2490:
case 413:
case 3422:
case 43:
case 2367:
case 3150:
case 4029:
case 1645:
case 2006:
case 2835:
case 3557:
case 494:
case 3875:
case 171:
case 3203:
case 3239:
case 3620:
case 3104:
case 1221:
case 1384:
case 2041:
case 3000:
case 2007:
case 2549:
case 410:
case 1251:
case 4003:
case 1415:
case 1366:
case 2935:
case 2378:
case 302:
case 1511:
case 1350:
case 2200:
case 1142:
case 2902:
case 3431:
case 1942:
case 895:
case 3306:
case 1721:
case 2988:
case 770:
case 3443:
case 1714:
case 1611:
case 3702:
case 1392:
case 3831:
case 1782:
case 215:
case 2561:
case 1140:
case 2389:
case 116:
case 1627:
case 1116:
case 2589:
case 3899:
case 507:
case 1095:
case 1284:
case 3116:
case 174:
case 551:
case 951:
case 2324:
case 2979:
case 2523:
case 2475:
case 662:
case 4028:
case 1933:
case 2179:
case 4060:
case 1971:
case 2765:
case 658:
case 1233:
case 3703:
case 463:
case 317:
case 1678:
case 3497:
case 448:
case 2342:
case 1071:
case 2424:
case 425:
case 2385:
case 3968:
case 303:
case 1576:
case 1361:
case 1383:
case 908:
case 1732:
case 308:
case 871:
case 3970:
case 1975:
case 338:
case 1348:
case 2061:
case 1086:
case 194:
case 3352:
case 594:
case 2995:
case 1131:
case 416:
case 1359:
case 333:
case 3570:
case 1747:
case 600:
case 323:
case 3679:
case 1070:
case 749:
case 2663:
case 2637:
case 1198:
case 1549:
case 280:
case 1449:
case 1602:
case 3986:
case 3781:
case 3716:
case 2448:
case 2524:
case 984:
case 429:
case 2736:
case 3426:
case 1833:
case 2379:
case 3519:
case 1980:
case 2540:
case 1300:
case 2659:
case 2282:
case 1633:
case 1664:
case 2830:
case 483:
case 4001:
case 2653:
case 3896:
case 917:
case 704:
case 3331:
case 1543:
case 2227:
case 3398:
case 3498:
case 585:
case 2233:
case 2350:
case 3021:
case 3524:
case 527:
case 2708:
case 2235:
case 1150:
case 3013:
case 1309:
case 1064:
case 1426:
case 368:
case 568:
case 3006:
case 809:
case 842:
case 3608:
case 2769:
case 224:
case 760:
case 2489:
case 1696:
case 1102:
case 1490:
case 1283:
case 1354:
case 3308:
case 3741:
case 4095:
case 2246:
case 763:
case 2597:
case 554:
case 3302:
case 850:
case 3682:
case 3833:
case 1072:
case 3318:
case 2201:
case 3449:
case 4010:
case 3164:
case 2127:
case 4079:
case 607:
case 3292:
case 1395:
case 2855:
case 2643:
case 487:
case 291:
case 2949:
case 2188:
case 1515:
case 1518:
case 3991:
case 3383:
case 3185:
case 3024:
case 3366:
case 1861:
case 2530:
case 193:
case 3216:
case 3373:
case 2939:
case 455:
case 2661:
case 2240:
case 2177:
case 3149:
case 606:
case 836:
case 559:
case 1569:
case 1231:
case 3566:
case 3468:
case 2568:
case 1311:
case 1826:
case 2631:
case 2104:
case 1559:
case 1111:
case 3278:
case 3385:
case 4045:
case 2519:
case 1577:
case 2340:
case 1021:
case 305:
case 2707:
case 2313:
case 2394:
case 3034:
case 1189:
case 1761:
case 2869:
case 3028:
case 3731:
case 3598:
case 100:
case 3786:
case 2236:
case 347:
case 2497:
case 2301:
case 674:
case 3234:
case 1332:
case 2685:
case 1083:
case 1950:
case 2221:
case 3107:
case 4089:
case 1582:
case 965:
case 2557:
case 1827:
case 3792:
case 1387:
case 369:
case 3242:
case 3124:
case 522:
case 3195:
case 2894:
case 1161:
case 479:
case 3625:
case 3484:
case 3419:
case 2280:
case 2486:
case 1106:
case 3406:
case 329:
case 626:
case 1824:
case 115:
case 3825:
case 1935:
case 3923:
case 2051:
case 1328:
case 3093:
case 1186:
case 1738:
case 3120:
case 1192:
case 1584:
case 2629:
case 3020:
case 3271:
case 3947:
case 3675:
case 2205:
case 2813:
case 2658:
case 3194:
case 393:
case 2077:
case 906:
case 2272:
case 2909:
case 3430:
case 2998:
case 1927:
case 1622:
case 921:
case 2398:
case 3181:
case 2907:
case 2873:
case 433:
case 3872:
case 2184:
case 2994:
case 788:
case 3912:
case 516:
case 1027:
case 2980:
case 3917:
case 3298:
case 1717:
case 624:
case 1828:
case 529:
case 3108:
case 4076:
case 1482:
case 1467:
case 2673:
case 3478:
case 2314:
case 2703:
case 2982:
case 3658:
case 2303:
case 3209:
case 1321:
case 3191:
case 664:
case 1883:
case 3521:
case 3995:
case 3186:
case 1216:
case 944:
case 2608:
case 99:
case 261:
case 3860:
case 2671:
case 2978:
case 2544:
case 528:
case 1920:
case 805:
case 423:
case 1702:
case 3335:
case 2560:
case 3588:
case 2833:
case 1793:
case 166:
case 548:
case 2759:
case 696:
case 1413:
case 501:
case 2195:
case 3407:
case 50:
case 210:
case 2395:
case 3253:
case 3007:
case 161:
case 3067:
case 3756:
case 2891:
case 947:
case 2520:
case 499:
case 3031:
case 1237:
case 933:
case 2043:
case 1493:
case 170:
case 2650:
case 1548:
case 2896:
case 2603:
case 1741:
case 3081:
case 2596:
case 2115:
case 2718:
case 3491:
case 1848:
case 435:
case 776:
case 2702:
case 3235:
case 2578:
case 2812:
case 480:
case 3629:
case 1097:
case 975:
case 637:
case 683:
case 3574:
case 2134:
case 2376:
case 3359:
case 3341:
case 979:
case 1326:
case 1694:
case 1821:
case 3784:
case 1066:
case 1624:
case 1575:
case 1854:
case 264:
case 1921:
case 230:
case 400:
case 973:
case 803:
case 2585:
case 445:
case 3586:
case 2345:
case 1941:
case 3202:
case 478:
case 2491:
case 3603:
case 3224:
case 223:
case 2737:
case 1122:
case 2676:
case 952:
case 3353:
case 3133:
case 2795:
case 2880:
case 3532:
case 3420:
case 1285:
case 3587:
case 1177:
case 1722:
case 2023:
case 2147:
case 3650:
case 3125:
case 1089:
case 2801:
case 2573:
case 1791:
case 4073:
case 3966:
case 3183:
case 2553:
case 3858:
case 795:
case 570:
case 846:
case 3165:
case 4087:
case 2509:
case 3692:
case 874:
case 1652:
case 2212:
case 2174:
case 2848:
case 473:
case 3458:
case 1438:
case 2128:
case 2704:
case 2461:
case 547:
case 3936:
case 3767:
case 2728:
case 1718:
case 518:
case 2477:
case 1699:
case 1742:
case 2622:
case 2646:
case 1373:
case 2347:
case 3962:
case 2243:
case 2386:
case 54:
case 3218:
case 66:
case 3687:
case 1222:
case 2926:
case 52:
case 3856:
case 2836:
case 3188:
case 747:
case 1445:
case 3903:
case 1217:
case 1253:
case 300:
case 213:
case 2219:
case 2727:
case 729:
case 1154:
case 2674:
case 365:
case 3683:
case 1868:
case 3397:
case 3236:
case 597:
case 4030:
case 1139:
case 3672:
case 695:
case 1400:
case 1594:
case 2602:
case 3090:
case 1149:
case 830:
case 1117:
case 2931:
case 3755:
case 3015:
case 4086:
case 1596:
case 1671:
case 2974:
case 569:
case 3806:
case 1970:
case 3998:
case 3814:
case 3664:
case 3244:
case 1715:
case 1099:
case 1849:
case 743:
case 1304:
case 2767:
case 251:
case 634:
case 2092:
case 1654:
case 2731:
case 1542:
case 311:
case 3740:
case 3931:
case 2225:
case 3066:
case 2392:
case 1425:
case 3761:
case 3661:
case 3415:
case 3572:
case 505:
case 1880:
case 996:
case 1110:
case 3174:
case 75:
case 16:
case 2306:
case 2237:
case 724:
case 306:
case 1647:
case 1420:
case 3592:
case 1968:
case 88:
case 289:
case 3749:
case 3146:
case 2109:
case 2856:
case 3371:
case 652:
case 40:
case 3988:
case 3848:
case 775:
case 599:
case 3764:
case 2662:
case 3291:
case 2228:
case 3556:
case 2706:
case 3337:
case 1341:
case 1499:
case 2167:
case 3652:
case 2159:
case 2065:
case 2238:
case 719:
case 1118:
case 2470:
case 104:
case 3114:
case 1835:
case 2744:
case 3479:
case 242:
case 2816:
case 3289:
case 2086:
case 3581:
case 4023:
case 1200:
case 3350:
case 2334:
case 1484:
case 2495:
case 2067:
case 3219:
case 399:
case 3446:
case 876:
case 1832:
case 51:
case 2025:
case 1802:
case 3561:
case 4051:
case 2001:
case 647:
case 61:
case 2155:
case 3287:
case 18:
case 2937:
case 3531:
case 2503:
case 2781:
case 4002:
case 2743:
case 2844:
case 380:
case 2590:
case 2925:
case 758:
case 1481:
case 3261:
case 900:
case 912:
case 225:
case 2483:
case 2416:
case 389:
case 2936:
case 3126:
case 3611:
case 619:
case 3425:
case 3576:
case 3647:
case 1757:
case 1098:
case 4053:
case 3334:
case 437:
case 1440:
case 3376:
case 705:
case 2442:
case 3813:
case 902:
case 1808:
case 2357:
case 1897:
case 1267:
case 1988:
case 1661:
case 2452:
case 1121:
case 3656:
case 285:
case 1538:
case 711:
case 1629:
case 3101:
case 3827:
case 3283:
case 502:
case 1760:
case 2161:
case 140:
case 212:
case 3172:
case 2955:
case 651:
case 3277:
case 3025:
case 2815:
case 2492:
case 3972:
case 1765:
case 474:
case 3721:
case 3128:
case 2966:
case 2032:
case 2866:
case 1126:
case 2138:
case 1269:
case 1159:
case 359:
case 2015:
case 1206:
case 315:
case 667:
case 3838:
case 1604:
case 903:
case 1996:
case 1615:
case 1459:
case 622:
case 2542:
case 1195:
case 2162:
case 549:
case 271:
case 1700:
case 3264:
case 2805:
case 3809:
case 3963:
case 3454:
case 1790:
case 2688:
case 3462:
case 2075:
case 1196:
case 1148:
case 366:
case 3132:
case 1762:
case 4008:
case 3573:
case 3057:
case 2846:
case 239:
case 3410:
case 1669:
case 1787:
case 2670:
case 286:
case 2502:
case 3863:
case 2742:
case 3662:
case 2849:
case 565:
case 598:
case 3048:
case 1687:
case 2194:
case 3563:
case 12:
case 1252:
case 574:
case 3088:
case 2040:
case 33:
case 1058:
case 2251:
case 1522:
case 3215:
case 1276:
case 2384:
case 1178:
case 2307:
case 2701:
case 1376:
case 3309:
case 1260:
case 2170:
case 165:
case 3080:
case 827:
case 1301:
case 1380:
case 1262:
case 2130:
case 1659:
case 1282:
case 2325:
case 1358:
case 1:
case 834:
case 3971:
case 2473:
case 2293:
case 1755:
case 120:
case 766:
case 802:
case 1546:
case 2308:
case 3757:
case 703:
case 715:
case 1325:
case 1218:
case 451:
case 4021:
case 28:
case 3294:
case 1593:
case 2964:
case 3801:
case 237:
case 1418:
case 3604:
case 4015:
case 862:
case 1534:
case 1077:
case 135:
case 3068:
case 891:
case 3859:
case 2577:
case 3379:
case 9:
case 3399:
case 1816:
case 2187:
case 3102:
case 2261:
case 3803:
case 4047:
case 2411:
case 42:
case 256:
case 3017:
case 1509:
case 2910:
case 3684:
case 247:
case 3515:
case 2552:
case 2391:
case 1780:
case 2387:
case 2918:
case 742:
case 3212:
case 2579:
case 1685:
case 3168:
case 1969:
case 818:
case 682:
case 3577:
case 1560:
case 1163:
case 4049:
case 1379:
case 1478:
case 2797:
case 2296:
case 526:
case 2265:
case 3050:
case 3783:
case 1133:
case 1922:
case 2554:
case 928:
case 3905:
case 3113:
case 1771:
case 603:
case 498:
case 3095:
case 392:
case 1362:
case 3635:
case 3096:
case 3689:
case 2709:
case 3901:
case 3428:
case 955:
case 1461:
case 3737:
case 1263:
case 3134:
case 994:
case 1917:
case 2336:
case 3976:
case 1204:
case 1642:
case 1631:
case 725:
case 13:
case 2895:
case 1527:
case 307:
case 517:
case 998:
case 3252:
case 486:
case 3954:
case 630:
case 3591:
case 346:
case 857:
case 3127:
case 1991:
case 752:
case 911:
case 1886:
case 2209:
case 1992:
case 3513:
case 3485:
case 1960:
case 2831:
case 1209:
case 1281:
case 3940:
case 961:
case 1188:
case 442:
case 1034:
case 4056:
case 2199:
case 2231:
case 2262:
case 2794:
case 200:
case 2567:
case 57:
case 3657:
case 275:
case 4094:
case 3011:
case 3695:
case 2073:
case 3229:
case 1092:
case 2455:
case 567:
case 1953:
case 2044:
case 831:
case 3207:
case 2954:
case 1452:
case 3614:
case 3820:
case 2507:
case 1495:
case 3889:
case 930:
case 65:
case 1410:
case 1554:
case 3208:
case 1701:
case 2903:
case 3666:
case 3314:
case 3653:
case 3762:
case 339:
case 3117:
case 2808:
case 60:
case 1477:
case 453:
case 3645:
case 471:
case 3241:
case 80:
case 3078:
case 4088:
case 1082:
case 932:
case 395:
case 11:
case 2847:
case 2527:
case 1108:
case 2535:
case 3076:
case 2867:
case 233:
case 218:
case 2914:
case 1734:
case 3691:
case 3671:
case 1857:
case 109:
case 1919:
case 3156:
case 3935:
case 2279:
case 1001:
case 3888:
case 1073:
case 2405:
case 53:
case 3844:
case 969:
case 3074:
case 2614:
case 489:
case 1940:
case 1488:
case 3669:
case 2807:
case 3486:
case 1152:
case 1125:
case 2595:
case 3153:
case 3502:
case 354:
case 378:
case 3403:
case 2420:
case 67:
case 160:
case 847:
case 3409:
case 292:
case 3746:
case 2551:
case 2917:
case 640:
case 3205:
case 3032:
case 132:
case 3313:
case 1444:
case 2572:
case 1212:
case 1409:
case 1417:
case 1636:
case 1294:
case 481:
case 2360:
case 10:
case 2401:
case 81:
case 181:
case 3642:
case 815:
case 1617:
case 1136:
case 1385:
case 137:
case 3996:
case 3429:
case 2951:
case 579:
case 1956:
case 537:
case 1601:
case 2725:
case 3254:
case 1018:
case 2752:
case 3709:
case 94:
case 1182:
case 2762:
case 2193:
case 3506:
case 3777:
case 1544:
case 3714:
case 976:
case 2062:
case 1502:
case 3874:
case 426:
case 420:
case 1460:
case 1050:
case 1786:
case 371:
case 3330:
case 546:
case 2190:
case 1476:
case 364:
case 1238:
case 3470:
case 779:
case 2037:
case 1986:
case 2283:
case 1335:
case 3251:
case 2576:
case 377:
case 3932:
case 3441:
case 3673:
case 1843:
case 1015:
case 41:
case 162:
case 1916:
case 2271:
case 2975:
case 1521:
case 2714:
case 1978:
case 2435:
case 3828:
case 1735:
case 3436:
case 3329:
case 3663:
case 125:
case 59:
case 3885:
case 3275:
case 1181:
case 3265:
case 2107:
case 2467:
case 73:
case 2458:
case 1923:
case 4090:
case 4038:
case 3550:
case 1107:
case 2146:
case 1234:
case 1987:
case 614:
case 2337:
case 2121:
case 1745:
case 4054:
case 2517:
case 1427:
case 35:
case 2916:
case 3358:
case 1480:
case 3299:
case 1684:
case 2009:
case 56:
case 2698:
case 2997:
case 3607:
case 2160:
case 2057:
case 956:
case 3487:
case 3211:
case 4068:
case 3167:
case 222:
case 3898:
case 3744:
case 316:
case 3509:
case 3822:
case 1081:
case 3259:
case 1063:
case 1680:
case 1288:
case 219:
case 2361:
case 1414:
case 348:
case 2521:
case 443:
case 2210:
case 1464:
case 2481:
case 2558:
case 2539:
case 1436:
case 2111:
case 1017:
case 180:
case 203:
case 582:
case 4:
case 753:
case 1900:
case 2740:
case 926:
case 2943:
case 236:
case 2648:
case 3568:
case 1944:
case 1275:
case 1899:
case 3505:
case 3808:
case 3589:
case 45:
case 2952:
case 867:
case 1009:
case 1915:
case 1190:
case 358:
case 2000:
case 721:
case 2010:
case 1187:
case 1007:
case 3771:
case 0:
case 2422:
case 2751:
case 2198:
case 353:
case 4042:
case 1491:
case 2244:
case 929:
case 1403:
case 3522:
case 68:
case 1795:
case 388:
case 1255:
case 3135:
case 992:
case 1497:
case 2126:
case 2987:
case 767:
case 3559:
case 823:
case 1173:
case 1876:
case 127:
case 3628:
case 2878:
case 1162:
case 3830:
case 1105:
case 4044:
case 2368:
case 685:
case 3388:
case 1340:
case 783:
case 201:
case 2820:
case 1850:
case 1453:
case 1185:
case 1553:
case 3723:
case 1268:
case 1752:
case 3464:
case 1363:
case 2136:
case 2112:
case 3356:
case 3367:
case 844:
case 2216:
case 3534:
case 2393:
case 492:
case 2220:
case 138:
case 713:
case 3179:
case 804:
case 1632:
case 572:
case 2806:
case 1360:
case 2956:
case 510:
case 349:
case 1873:
case 2295:
case 1885:
case 1487:
case 2890:
case 798:
case 2913:
case 2129:
case 1241:
case 2920:
case 4070:
case 1929:
case 2721:
case 552:
case 172:
case 2947:
case 1965:
case 341:
case 431:
case 1024:
case 963:
case 1855:
case 3326:
case 3717:
case 974:
case 755:
case 2860:
case 1338:
case 2137:
case 720:
case 178:
case 824:
case 2516:
case 750:
case 1151:
case 3910:
case 2429:
case 1851:
case 3596:
case 3906:
case 3610:
case 2610:
case 3520:
case 2373:
case 3712:
case 508:
case 2018:
case 1291:
case 4027:
case 2575:
case 525:
case 396:
case 31:
case 3676:
case 1774:
case 20:
case 889:
case 243:
case 241:
case 1324:
case 1811:
case 1506:
case 2180:
case 4005:
case 1134:
case 2093:
case 3233:
case 3160:
case 2204:
case 901:
case 638:
case 3835:
case 1547:
case 793:
case 266:
case 1796:
case 312:
case 3539:
case 675:
case 2541:
case 3187:
case 2775:
case 58:
case 3255:
case 2665:
case 3600:
case 3227:
case 2012:
case 1881:
case 2850:
case 2505:
case 3690:
case 2123:
case 1674:
case 3063:
case 1096:
case 2574:
case 1312:
case 2522:
case 2642:
case 1130:
case 112:
case 3424:
case 3849:
case 2735:
case 989:
case 1913:
case 209:
case 1160:
case 3250:
case 4055:
case 3504:
case 829:
case 1203:
case 993:
case 2778:
case 825:
case 2594:
case 2799:
case 2892:
case 3396:
case 2234:
case 1168:
case 2487:
case 2026:
case 1229:
case 3052:
case 2042:
case 1516:
case 2649:
case 2696:
case 3846:
case 114:
case 2415:
case 3794:
case 2768:
case 3369:
case 3245:
case 244:
case 157:
case 124:
case 686:
case 4077:
case 1344:
case 808:
case 3927:
case 2904:
case 1914:
case 3508:
case 2641:
case 545:
case 2055:
case 2633:
case 1322:
case 3543:
case 2537:
case 2634:
case 2027:
case 1430:
case 563:
case 1214:
case 2157:
case 2100:
case 1952:
case 1012:
case 2581:
case 3854:
case 495:
case 3357:
case 1999:
case 3171:
case 2319:
case 672:
case 92:
case 1528:
case 467:
case 2413:
case 1744:
case 2871:
case 2203:
case 1770:
case 1104:
case 3937:
case 2071:
case 2098:
case 866:
case 1084:
case 1529:
case 3285:
case 394:
case 1044:
case 2547:
case 2102:
case 3029:
case 1589:
case 3718:
case 3201:
case 573:
case 1347:
case 2218:
case 3739:
case 3699:
case 2349:
case 3381:
case 274:
case 164:
case 2963:
case 1628:
case 2618:
case 762:
case 3437:
case 3119:
case 2258:
case 3660:
case 797:
case 1261:
case 1566:
case 3529:
case 2466:
case 2002:
case 2087:
case 723:
case 3750:
case 3180:
case 1539:
case 2447:
case 754:
case 691:
case 2776:
case 1289:
case 3492:
case 646:
case 571:
case 3680:
case 2430:
case 781:
case 3944:
case 3258:
case 1895:
case 4062:
case 2782:
case 3870:
case 3395:
case 2116:
case 123:
case 2338:
case 1135:
case 30:
case 3177:
case 1564:
case 3667:
case 2494:
case 3928:
case 1228:
case 1882:
case 2321:
case 3173:
case 4013:
case 2738:
case 3913:
case 777:
case 1806:
case 147:
case 625:
case 939:
case 128:
case 1398:
case 644:
case 3733:
case 1863:
case 3602:
case 2592:
case 670:
case 2290:
case 1307:
case 1561:
case 2289:
case 3997:
case 2091:
case 3054:
case 2679:
case 1556:
case 1737:
case 343:
case 3071:
case 2419:
case 1205:
case 2348:
case 1841:
case 1777:
case 1037:
case 2771:
case 4035:
case 1778:
case 2364:
case 3729:
case 2165:
case 2213:
case 684:
case 1603:
case 1339:
case 3855:
case 617:
case 3312:
case 3780:
case 2273:
case 296:
case 3890:
case 3546:
case 357:
case 470:
case 2604:
case 199:
case 1888:
case 2049:
case 3416:
case 3877:
case 3779:
case 3929:
case 1928:
case 3907:
case 3281:
case 2355:
case 216:
case 3567:
case 4031:
case 3111:
case 3537:
case 3290:
case 379:
case 3483:
case 2359:
case 1503:
case 3412:
case 3590:
case 3411:
case 254:
case 1172:
case 2144:
case 1540:
case 2351:
case 4067:
case 1555:
case 3824:
case 173:
case 405:
case 2790:
case 1191:
case 1753:
case 500:
case 133:
case 3925:
case 1579:
case 3700:
case 3696:
case 962:
case 252:
case 3333:
case 3012:
case 765:
case 139:
case 2150:
case 406:
case 589:
case 698:
case 1847:
case 401:
case 3633:
case 2733:
case 2888:
case 3500:
case 1115:
case 2893:
case 1620:
case 3098:
case 2153:
case 3778:
case 733:
case 2097:
case 3867:
case 1137:
case 3459:
case 3945:
case 3393:
case 935:
case 1416:
case 2923:
case 1852:
case 1837:
case 2446:
case 322:
case 1766:
case 3184:
case 872:
case 1595:
case 1655:
case 1079:
case 1592:
case 922:
case 1145:
case 3391:
case 534:
case 1157:
case 1431:
case 2133:
case 520:
case 2983:
case 1864:
case 3192:
case 971:
case 1982:
case 3941:
case 1374:
case 3736:
case 2877:
case 461:
case 2626:
case 1174:
case 2192:
case 608:
case 1153:
case 2999:
case 482:
case 852:
case 2611:
case 2046:
case 509:
case 3175:
case 771:
case 3019:
case 2986:
case 543:
case 3975:
case 29:
case 2441:
case 2758:
case 4016:
case 2644:
case 2366:
case 95:
case 3651:
case 860:
case 3964:
case 1590:
case 2478:
case 1069:
case 2606:
case 931:
case 2724:
case 990:
case 2003:
case 2445:
case 2292:
case 375:
case 352:
case 2496:
case 330:
case 1053:
case 1775:
case 3085:
case 564:
case 1686:
case 1651:
case 2789:
case 2971:
case 2257:
case 2403:
case 1156:
case 503:
case 2657:
case 3507:
case 70:
case 512:
case 491:
case 3969:
case 3378:
case 1707:
case 1036:
case 3953:
case 2656:
case 1785:
case 2094:
case 3989:
case 2616:
case 578:
case 1865:
case 2060:
case 2823:
case 2270:
case 555:
case 4071:
case 2052:
case 2298:
case 2829:
case 1825:
case 2809:
case 2103:
case 457:
case 1818:
case 3489:
case 278:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1736625602/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,];
var gg_b = "1736625602/";

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
    if (rr["hasavif"] == 1) rr["haswebp"] = 1;
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
