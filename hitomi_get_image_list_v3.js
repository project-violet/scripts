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
case 1943:
case 3840:
case 2250:
case 935:
case 2136:
case 2234:
case 2562:
case 2476:
case 156:
case 1753:
case 1505:
case 1304:
case 659:
case 3874:
case 1543:
case 535:
case 842:
case 2513:
case 3632:
case 3191:
case 3914:
case 912:
case 1192:
case 1369:
case 699:
case 702:
case 2822:
case 826:
case 504:
case 1161:
case 2669:
case 399:
case 3202:
case 3779:
case 26:
case 1577:
case 2216:
case 2847:
case 1725:
case 940:
case 1144:
case 2483:
case 456:
case 2666:
case 3113:
case 359:
case 2604:
case 3539:
case 3396:
case 3484:
case 1378:
case 3067:
case 1287:
case 745:
case 1798:
case 2219:
case 2486:
case 785:
case 3606:
case 2052:
case 2950:
case 2928:
case 161:
case 2688:
case 2774:
case 3119:
case 442:
case 1642:
case 2740:
case 2868:
case 105:
case 3641:
case 2612:
case 1710:
case 3533:
case 2528:
case 2447:
case 3722:
case 2489:
case 2335:
case 2262:
case 3609:
case 90:
case 1165:
case 3393:
case 126:
case 434:
case 2157:
case 1205:
case 110:
case 3773:
case 308:
case 1830:
case 2663:
case 629:
case 2422:
case 1901:
case 769:
case 896:
case 3195:
case 1363:
case 3239:
case 1180:
case 461:
case 3747:
case 608:
case 83:
case 2473:
case 405:
case 2075:
case 1587:
case 2519:
case 3236:
case 3134:
case 1759:
case 2342:
case 2708:
case 3150:
case 3502:
case 2876:
case 1949:
case 1627:
case 1694:
case 576:
case 1987:
case 134:
case 1546:
case 1388:
case 426:
case 3178:
case 3636:
case 3497:
case 2966:
case 466:
case 2098:
case 685:
case 25:
case 2826:
case 2037:
case 891:
case 61:
case 369:
case 2969:
case 2504:
case 421:
case 236:
case 3344:
case 3545:
case 729:
case 1235:
case 147:
case 113:
case 3370:
case 887:
case 1785:
case 3361:
case 3030:
case 188:
case 1760:
case 3209:
case 3169:
case 1771:
case 3392:
case 669:
case 3723:
case 918:
case 2882:
case 166:
case 385:
case 2145:
case 2797:
case 2613:
case 2288:
case 3104:
case 121:
case 1531:
case 2978:
case 1115:
case 1643:
case 2851:
case 2053:
case 447:
case 1242:
case 2164:
case 3245:
case 2266:
case 1111:
case 1334:
case 1687:
case 2141:
case 1927:
case 345:
case 1328:
case 2482:
case 491:
case 3602:
case 2269:
case 866:
case 4074:
case 3017:
case 1158:
case 799:
case 2109:
case 602:
case 1601:
case 4040:
case 2418:
case 888:
case 2616:
case 630:
case 22:
case 3163:
case 1395:
case 1781:
case 3232:
case 847:
case 3365:
case 1193:
case 3506:
case 2695:
case 1400:
case 1316:
case 2963:
case 707:
case 943:
case 917:
case 2301:
case 302:
case 1542:
case 294:
case 2426:
case 2634:
case 1319:
case 191:
case 2278:
case 645:
case 2650:
case 3906:
case 2349:
case 543:
case 517:
case 3897:
case 3941:
case 1707:
case 3838:
case 614:
case 1040:
case 732:
case 3739:
case 4078:
case 1461:
case 180:
case 561:
case 1925:
case 1598:
case 910:
case 700:
case 2802:
case 505:
case 3286:
case 3184:
case 3015:
case 1004:
case 3579:
case 1259:
case 961:
case 905:
case 1998:
case 1937:
case 3655:
case 2176:
case 2713:
case 480:
case 1078:
case 2984:
case 4069:
case 1210:
case 3834:
case 934:
case 40:
case 2240:
case 3850:
case 3828:
case 1953:
case 3583:
case 3672:
case 3222:
case 2833:
case 1660:
case 812:
case 1221:
case 2385:
case 2439:
case 3714:
case 3273:
case 1705:
case 1492:
case 534:
case 176:
case 3099:
case 1880:
case 3348:
case 3947:
case 3629:
case 982:
case 1892:
case 93:
case 2122:
case 876:
case 2381:
case 1675:
case 3757:
case 112:
case 2035:
case 1746:
case 2716:
case 1556:
case 3547:
case 3450:
case 1959:
case 582:
case 2908:
case 3626:
case 3434:
case 1298:
case 1787:
case 956:
case 4063:
case 1237:
case 440:
case 2352:
case 2094:
case 1521:
case 2728:
case 2186:
case 2284:
case 3573:
case 265:
case 1012:
case 3813:
case 412:
case 1607:
case 1117:
case 3058:
case 3922:
case 2189:
case 2375:
case 1681:
case 2147:
case 2402:
case 1844:
case 2795:
case 3862:
case 3973:
case 1870:
case 3416:
case 140:
case 3300:
case 2457:
case 74:
case 880:
case 1731:
case 3282:
case 3061:
case 2538:
case 818:
case 3469:
case 2325:
case 1281:
case 1960:
case 3863:
case 2524:
case 3972:
case 3070:
case 1:
case 3218:
case 948:
case 3044:
case 2403:
case 1820:
case 2809:
case 2190:
case 34:
case 3923:
case 2337:
case 1811:
case 2684:
case 1415:
case 2043:
case 2841:
case 2398:
case 2445:
case 548:
case 1207:
case 3888:
case 1167:
case 2155:
case 384:
case 3197:
case 991:
case 3124:
case 3226:
case 3745:
case 3478:
case 684:
case 2704:
case 3955:
case 3590:
case 1384:
case 1698:
case 2172:
case 2432:
case 987:
case 591:
case 2769:
case 3990:
case 1985:
case 1091:
case 1499:
case 1625:
case 3330:
case 3982:
case 183:
case 1552:
case 1899:
case 1621:
case 2129:
case 1493:
case 632:
case 3918:
case 2763:
case 913:
case 1028:
case 1952:
case 3706:
case 3582:
case 615:
case 2238:
case 3764:
case 1896:
case 274:
case 1034:
case 1907:
case 3518:
case 2359:
case 1742:
case 1308:
case 2640:
case 644:
case 2712:
case 3741:
case 1610:
case 4016:
case 295:
case 344:
case 2608:
case 2464:
case 3488:
case 2151:
case 3529:
case 2406:
case 2310:
case 3686:
case 588:
case 566:
case 2845:
case 3255:
case 2049:
case 1794:
case 2441:
case 3412:
case 1815:
case 1411:
case 1575:
case 2409:
case 1458:
case 521:
case 4034:
case 3689:
case 1420:
case 332:
case 3647:
case 3929:
case 988:
case 471:
case 737:
case 2182:
case 4050:
case 1656:
case 118:
case 1285:
case 3290:
case 966:
case 1148:
case 3065:
case 1735:
case 1975:
case 2089:
case 3120:
case 1017:
case 2047:
case 348:
case 3527:
case 3448:
case 1657:
case 1203:
case 2665:
case 3935:
case 114:
case 1188:
case 1726:
case 211:
case 2086:
case 2215:
case 2452:
case 145:
case 691:
case 3328:
case 1112:
case 3927:
case 3994:
case 3334:
case 402:
case 3687:
case 984:
case 3535:
case 2142:
case 54:
case 391:
case 3752:
case 3074:
case 2558:
case 4017:
case 1751:
case 1509:
case 3040:
case 1838:
case 3707:
case 2194:
case 1824:
case 130:
case 3400:
case 2680:
case 648:
case 1506:
case 3231:
case 351:
case 782:
case 2022:
case 2920:
case 3193:
case 73:
case 414:
case 2357:
case 1232:
case 1564:
case 2299:
case 2135:
case 3542:
case 223:
case 102:
case 2871:
case 796:
case 1541:
case 2748:
case 869:
case 1361:
case 1790:
case 2692:
case 3785:
case 1903:
case 688:
case 1370:
case 347:
case 3235:
case 1636:
case 4030:
case 1945:
case 2076:
case 4054:
case 1178:
case 41:
case 3677:
case 1755:
case 1503:
case 2807:
case 3643:
case 1104:
case 1206:
case 845:
case 1264:
case 185:
case 1532:
case 2599:
case 500:
case 705:
case 253:
case 915:
case 2336:
case 2996:
case 1241:
case 544:
case 3771:
case 1392:
case 3931:
case 98:
case 1169:
case 2258:
case 647:
case 3391:
case 1772:
case 2644:
case 3605:
case 726:
case 2485:
case 239:
case 11:
case 2101:
case 3417:
case 979:
case 642:
case 2270:
case 2082:
case 2261:
case 1933:
case 1048:
case 310:
case 3205:
case 1214:
case 3830:
case 272:
case 2018:
case 326:
case 3165:
case 2244:
case 2051:
case 634:
case 2459:
case 429:
case 537:
case 2580:
case 1606:
case 3243:
case 3710:
case 1641:
case 2187:
case 1119:
case 2611:
case 2341:
case 2898:
case 1786:
case 1128:
case 1502:
case 2026:
case 1236:
case 3501:
case 3759:
case 1557:
case 334:
case 3694:
case 3627:
case 250:
case 408:
case 2410:
case 2029:
case 2825:
case 1902:
case 1195:
case 3363:
case 1000:
case 129:
case 2693:
case 2717:
case 1789:
case 807:
case 1320:
case 342:
case 3946:
case 1957:
case 290:
case 747:
case 3549:
case 903:
case 2730:
case 1632:
case 787:
case 2280:
case 3631:
case 2754:
case 3543:
case 3369:
case 107:
case 2821:
case 396:
case 263:
case 2425:
case 1191:
case 3024:
case 538:
case 499:
case 1840:
case 1768:
case 3304:
case 1315:
case 1874:
case 2437:
case 2177:
case 2544:
case 356:
case 2615:
case 1539:
case 656:
case 1113:
case 1645:
case 2592:
case 2859:
case 2055:
case 3249:
case 1067:
case 1779:
case 3161:
case 133:
case 3430:
case 1162:
case 3201:
case 2856:
case 2332:
case 1257:
case 748:
case 682:
case 2105:
case 220:
case 63:
case 1764:
case 569:
case 3581:
case 432:
case 1951:
case 3028:
case 3952:
case 1706:
case 3050:
case 3610:
case 258:
case 2494:
case 4065:
case 3742:
case 2711:
case 1878:
case 3907:
case 1622:
case 444:
case 1709:
case 3621:
case 618:
case 1080:
case 383:
case 3100:
case 3899:
case 1673:
case 415:
case 2831:
case 1317:
case 2175:
case 585:
case 3656:
case 84:
case 2373:
case 1647:
case 132:
case 2617:
case 3975:
case 70:
case 1869:
case 91:
case 3735:
case 2322:
case 683:
case 3016:
case 318:
case 1463:
case 4080:
case 2152:
case 1529:
case 985:
case 884:
case 1488:
case 3340:
case 144:
case 2107:
case 51:
case 3411:
case 3575:
case 1804:
case 1412:
case 2267:
case 3794:
case 1866:
case 1572:
case 1812:
case 3560:
case 1251:
case 3571:
case 815:
case 1668:
case 1404:
case 3252:
case 704:
case 3167:
case 1888:
case 3653:
case 3207:
case 1863:
case 617:
case 3960:
case 3971:
case 1469:
case 2654:
case 514:
case 1923:
case 2185:
case 2799:
case 1044:
case 2200:
case 2039:
case 1679:
case 2431:
case 2171:
case 1703:
case 3499:
case 3625:
case 317:
case 343:
case 712:
case 2567:
case 1354:
case 484:
case 1092:
case 2715:
case 4061:
case 1478:
case 1745:
case 2827:
case 1124:
case 1226:
case 4070:
case 4044:
case 3496:
case 2368:
case 3585:
case 1590:
case 1174:
case 4020:
case 2517:
case 1434:
case 2877:
case 3959:
case 1428:
case 335:
case 1986:
case 2110:
case 3237:
case 507:
case 3298:
case 3787:
case 604:
case 1093:
case 1989:
case 2318:
case 3892:
case 1947:
case 3480:
case 1279:
case 640:
case 1348:
case 1702:
case 3956:
case 1891:
case 907:
case 2382:
case 4011:
case 3746:
case 2765:
case 312:
case 2254:
case 3844:
case 933:
case 3921:
case 2230:
case 559:
case 2009:
case 999:
case 1020:
case 1283:
case 292:
case 1618:
case 1416:
case 879:
case 3870:
case 1733:
case 3063:
case 340:
case 1862:
case 268:
case 438:
case 3521:
case 533:
case 1651:
case 304:
case 1108:
case 252:
case 1419:
case 2326:
case 2487:
case 1813:
case 2449:
case 1573:
case 3910:
case 3012:
case 1976:
case 3259:
case 2849:
case 1413:
case 1736:
case 2443:
case 3338:
case 3937:
case 2667:
case 508:
case 3324:
case 3998:
case 2217:
case 1576:
case 380:
case 3130:
case 1289:
case 1979:
case 1739:
case 179:
case 2846:
case 3865:
case 3256:
case 3685:
case 1690:
case 2792:
case 2405:
case 30:
case 3537:
case 718:
case 2372:
case 60:
case 2390:
case 2032:
case 2125:
case 1491:
case 1983:
case 222:
case 680:
case 2744:
case 376:
case 1895:
case 103:
case 3492:
case 3078:
case 479:
case 1968:
case 2530:
case 771:
case 1583:
case 3953:
case 1850:
case 2477:
case 2137:
case 1834:
case 1121:
case 238:
case 2891:
case 2348:
case 2702:
case 3508:
case 3381:
case 3173:
case 170:
case 1382:
case 665:
case 2174:
case 2276:
case 3908:
case 1877:
case 3307:
case 3719:
case 492:
case 1351:
case 468:
case 3836:
case 3027:
case 563:
case 3094:
case 601:
case 1064:
case 2651:
case 2522:
case 3186:
case 301:
case 1006:
case 1041:
case 516:
case 2573:
case 365:
case 2419:
case 152:
case 725:
case 2011:
case 3042:
case 520:
case 1009:
case 3189:
case 1230:
case 1401:
case 2020:
case 2058:
case 186:
case 916:
case 2300:
case 2733:
case 168:
case 1329:
case 2973:
case 2862:
case 706:
case 2283:
case 192:
case 1446:
case 1323:
case 868:
case 1846:
case 2739:
case 2576:
case 1217:
case 237:
case 2289:
case 2816:
case 1003:
case 146:
case 1792:
case 649:
case 1801:
case 972:
case 3414:
case 886:
case 1405:
case 1887:
case 2579:
case 2286:
case 2184:
case 2015:
case 3208:
case 2976:
case 4032:
case 2413:
case 852:
case 1849:
case 1045:
case 1153:
case 422:
case 3697:
case 3436:
case 3624:
case 2367:
case 3984:
case 2968:
case 1137:
case 1477:
case 2096:
case 2834:
case 1198:
case 950:
case 2828:
case 2850:
case 1032:
case 4045:
case 1770:
case 3385:
case 3179:
case 1390:
case 2273:
case 2983:
case 122:
case 1125:
case 167:
case 2491:
case 203:
case 755:
case 2895:
case 1744:
case 441:
case 1758:
case 2622:
case 2272:
case 1720:
case 2551:
case 2317:
case 127:
case 1435:
case 1175:
case 162:
case 1347:
case 3832:
case 198:
case 809:
case 2706:
case 3788:
case 2951:
case 4057:
case 395:
case 3712:
case 2741:
case 1548:
case 1386:
case 1494:
case 3151:
case 881:
case 3608:
case 244:
case 3464:
case 2926:
case 2686:
case 2529:
case 3441:
case 2412:
case 953:
case 3845:
case 3049:
case 498:
case 674:
case 3087:
case 1107:
case 539:
case 2804:
case 2689:
case 232:
case 897:
case 1181:
case 1617:
case 3409:
case 1373:
case 828:
case 993:
case 2463:
case 458:
case 977:
case 3118:
case 1322:
case 2869:
case 3538:
case 2061:
case 1654:
case 2972:
case 3597:
case 3524:
case 2732:
case 1799:
case 3403:
case 960:
case 1185:
case 128:
case 1379:
case 3809:
case 2668:
case 3938:
case 4039:
case 409:
case 1842:
case 911:
case 3997:
case 2466:
case 3445:
case 701:
case 2251:
case 2812:
case 3841:
case 1376:
case 181:
case 157:
case 2523:
case 1796:
case 841:
case 284:
case 3864:
case 1894:
case 1827:
case 2745:
case 1036:
case 2676:
case 2197:
case 1715:
case 625:
case 858:
case 2478:
case 4014:
case 428:
case 2590:
case 523:
case 3077:
case 2955:
case 1368:
case 473:
case 1160:
case 1835:
case 1039:
case 898:
case 2229:
case 2354:
case 2555:
case 2990:
case 789:
case 2330:
case 2703:
case 631:
case 3928:
case 3595:
case 1580:
case 3052:
case 1853:
case 3486:
case 4029:
case 2408:
case 364:
case 3934:
case 1051:
case 3213:
case 3774:
case 1187:
case 3740:
case 1980:
case 1456:
case 820:
case 3262:
case 2722:
case 1270:
case 3489:
case 3335:
case 1018:
case 3157:
case 1146:
case 2393:
case 1244:
case 2933:
case 946:
case 1717:
case 863:
case 4051:
case 2789:
case 736:
case 2747:
case 2239:
case 229:
case 2000:
case 967:
case 3916:
case 3473:
case 2358:
case 3291:
case 3075:
case 79:
case 1309:
case 1026:
case 3708:
case 2311:
case 2474:
case 2236:
case 1898:
case 2502:
case 1410:
case 3876:
case 3919:
case 4018:
case 75:
case 2440:
case 664:
case 2557:
case 794:
case 3250:
case 3784:
case 3228:
case 850:
case 3234:
case 3913:
case 570:
case 1498:
case 416:
case 1177:
case 1696:
case 1437:
case 3295:
case 319:
case 754:
case 3479:
case 3139:
case 1280:
case 3071:
case 2632:
case 1730:
case 2783:
case 2191:
case 163:
case 1699:
case 2233:
case 3822:
case 4055:
case 233:
case 2536:
case 872:
case 2779:
case 299:
case 120:
case 992:
case 3085:
case 3889:
case 3114:
case 552:
case 3331:
case 619:
case 1856:
case 116:
case 1265:
case 2603:
case 968:
case 2257:
case 2113:
case 586:
case 3468:
case 1615:
case 1055:
case 1859:
case 2067:
case 592:
case 2808:
case 3591:
case 3204:
case 3106:
case 1215:
case 1452:
case 675:
case 3164:
case 3059:
case 3266:
case 214:
case 2726:
case 3451:
case 528:
case 597:
case 245:
case 573:
case 478:
case 2602:
case 1700:
case 3056:
case 1333:
case 839:
case 3482:
case 1885:
case 877:
case 2017:
case 893:
case 76:
case 2203:
case 2657:
case 2380:
case 557:
case 973:
case 32:
case 1958:
case 2365:
case 2564:
case 1357:
case 3823:
case 354:
case 2232:
case 230:
case 2506:
case 4086:
case 2782:
case 3512:
case 2541:
case 178:
case 2633:
case 3872:
case 3963:
case 123:
case 1475:
case 1511:
case 3301:
case 202:
case 2751:
case 3426:
case 3634:
case 509:
case 2964:
case 4047:
case 3349:
case 3650:
case 3278:
case 375:
case 3010:
case 2897:
case 2838:
case 2178:
case 3904:
case 2945:
case 2424:
case 1076:
case 4083:
case 958:
case 3098:
case 624:
case 493:
case 3037:
case 439:
case 527:
case 562:
case 35:
case 1767:
case 2639:
case 1131:
case 1471:
case 269:
case 1875:
case 3132:
case 3566:
case 823:
case 1293:
case 453:
case 3691:
case 2370:
case 39:
case 927:
case 962:
case 1220:
case 1258:
case 541:
case 2209:
case 3662:
case 2932:
case 860:
case 69:
case 2723:
case 2614:
case 1881:
case 3490:
case 3263:
case 139:
case 1339:
case 1644:
case 3103:
case 3724:
case 2532:
case 285:
case 4079:
case 1807:
case 3978:
case 764:
case 2104:
case 3212:
case 1996:
case 3455:
case 811:
case 1211:
case 153:
case 1599:
case 1336:
case 3053:
case 1398:
case 2560:
case 1997:
case 1684:
case 1778:
case 2811:
case 2252:
case 1043:
case 1938:
case 47:
case 1864:
case 3796:
case 2207:
case 1806:
case 381:
case 2960:
case 2281:
case 786:
case 2731:
case 1538:
case 3248:
case 609:
case 3014:
case 3185:
case 4077:
case 397:
case 92:
case 1403:
case 373:
case 3431:
case 3171:
case 954:
case 628:
case 3039:
case 594:
case 3835:
case 1432:
case 1172:
case 673:
case 697:
case 575:
case 2091:
case 2625:
case 243:
case 2499:
case 2985:
case 1123:
case 2893:
case 17:
case 994:
case 895:
case 554:
case 1766:
case 3036:
case 406:
case 3368:
case 4001:
case 2581:
case 1674:
case 1297:
case 1126:
case 271:
case 2028:
case 536:
case 3548:
case 3427:
case 358:
case 641:
case 1712:
case 59:
case 95:
case 1640:
case 4046:
case 2742:
case 3711:
case 2308:
case 2493:
case 2981:
case 2100:
case 2899:
case 936:
case 2552:
case 283:
case 87:
case 1129:
case 2271:
case 2621:
case 722:
case 3033:
case 767:
case 1356:
case 1763:
case 3948:
case 4049:
case 3347:
case 2507:
case 55:
case 4087:
case 3175:
case 362:
case 3435:
case 698:
case 1803:
case 2656:
case 3002:
case 3900:
case 1182:
case 2420:
case 662:
case 1001:
case 3181:
case 2735:
case 3322:
case 1118:
case 495:
case 1321:
case 2285:
case 746:
case 825:
case 1310:
case 924:
case 3152:
case 1464:
case 1608:
case 2019:
case 2374:
case 3442:
case 3107:
case 1049:
case 2794:
case 2727:
case 455:
case 1441:
case 3267:
case 2259:
case 3045:
case 1208:
case 3443:
case 2004:
case 4031:
case 1168:
case 3887:
case 3667:
case 2937:
case 801:
case 2338:
case 2324:
case 622:
case 3217:
case 2865:
case 3846:
case 2154:
case 2069:
case 2461:
case 1414:
case 2537:
case 3405:
case 20:
case 1371:
case 3801:
case 2685:
case 1360:
case 3003:
case 2444:
case 2925:
case 1802:
case 1439:
case 2221:
case 149:
case 889:
case 3930:
case 646:
case 2880:
case 798:
case 276:
case 531:
case 3125:
case 2553:
case 322:
case 727:
case 2492:
case 1638:
case 2743:
case 1984:
case 3554:
case 1624:
case 1274:
case 1176:
case 1697:
case 3530:
case 931:
case 758:
case 1240:
case 3198:
case 2953:
case 2210:
case 3477:
case 3137:
case 3877:
case 3517:
case 1908:
case 2556:
case 235:
case 2237:
case 1352:
case 3110:
case 1094:
case 2749:
case 1027:
case 3351:
case 2892:
case 2701:
case 2559:
case 3600:
case 2956:
case 3121:
case 3382:
case 849:
case 1173:
case 370:
case 2675:
case 1381:
case 4042:
case 189:
case 2746:
case 1035:
case 2921:
case 3254:
case 3156:
case 2117:
case 2681:
case 3805:
case 1814:
case 2861:
case 392:
case 2465:
case 3446:
case 3329:
case 368:
case 4027:
case 4094:
case 797:
case 2870:
case 2521:
case 1186:
case 1284:
case 1728:
case 2652:
case 1750:
case 1974:
case 3159:
case 489:
case 1042:
case 3326:
case 56:
case 352:
case 781:
case 165:
case 3449:
case 757:
case 3460:
case 424:
case 1566:
case 1472:
case 677:
case 1305:
case 3079:
case 574:
case 3515:
case 3471:
case 3131:
case 639:
case 790:
case 2199:
case 2800:
case 1691:
case 2235:
case 1025:
case 2362:
case 4053:
case 974:
case 1569:
case 3915:
case 2227:
case 2196:
case 2677:
case 3767:
case 1826:
case 555:
case 750:
case 995:
case 1098:
case 2115:
case 2084:
case 3068:
case 3807:
case 1613:
case 436:
case 3336:
case 1053:
case 3211:
case 2242:
case 353:
case 3852:
case 1455:
case 1212:
case 1851:
case 2467:
case 3996:
case 3661:
case 1578:
case 1818:
case 2760:
case 3670:
case 2391:
case 1103:
case 3999:
case 266:
case 4037:
case 1263:
case 3485:
case 3596:
case 2158:
case 3089:
case 1109:
case 1890:
case 678:
case 3047:
case 1482:
case 1269:
case 1056:
case 3333:
case 475:
case 1616:
case 4010:
case 12:
case 906:
case 2646:
case 3665:
case 2008:
case 2867:
case 454:
case 1855:
case 1059:
case 4021:
case 3452:
case 3086:
case 311:
case 2649:
case 2927:
case 2994:
case 1619:
case 3407:
case 2535:
case 2111:
case 3142:
case 925:
case 824:
case 4056:
case 1650:
case 1278:
case 1349:
case 1426:
case 1634:
case 194:
case 3558:
case 2942:
case 3296:
case 3127:
case 1010:
case 1912:
case 251:
case 89:
case 1429:
case 2316:
case 660:
case 1823:
case 2193:
case 3022:
case 3920:
case 3871:
case 3135:
case 3475:
case 3511:
case 3299:
case 97:
case 1872:
case 3748:
case 1963:
case 3073:
case 378:
case 763:
case 616:
case 3970:
case 1873:
case 3730:
case 1060:
case 282:
case 1295:
case 3280:
case 3961:
case 1822:
case 2369:
case 989:
case 363:
case 296:
case 3821:
case 3570:
case 2097:
case 1562:
case 1476:
case 1136:
case 3810:
case 1234:
case 2038:
case 2943:
case 1228:
case 3437:
case 3696:
case 4085:
case 46:
case 256:
case 3345:
case 2753:
case 2366:
case 3143:
case 4060:
case 1666:
case 901:
case 965:
case 2287:
case 2798:
case 864:
case 1591:
case 2737:
case 2977:
case 2161:
case 2201:
case 501:
case 2170:
case 2430:
case 663:
case 1483:
case 565:
case 2246:
case 1331:
case 3992:
case 3090:
case 1114:
case 1335:
case 3620:
case 3658:
case 1081:
case 1534:
case 2417:
case 690:
case 1883:
case 3980:
case 3082:
case 86:
case 793:
case 431:
case 777:
case 2854:
case 3244:
case 1157:
case 3018:
case 739:
case 1688:
case 1774:
case 3459:
case 164:
case 1327:
case 3853:
case 1486:
case 650:
case 1052:
case 3580:
case 3149:
case 205:
case 1007:
case 4075:
case 3187:
case 1868:
case 2312:
case 2759:
case 2501:
case 549:
case 3026:
case 3837:
case 1342:
case 234:
case 2987:
case 1919:
case 3565:
case 131:
case 3410:
case 2949:
case 1516:
case 2180:
case 4052:
case 3029:
case 3825:
case 464:
case 2901:
case 3717:
case 3309:
case 3965:
case 2946:
case 2635:
case 1133:
case 3292:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1768662003/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,];
var gg_b = "1768662003/";

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
