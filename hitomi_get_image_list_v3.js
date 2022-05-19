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
case 2484:
case 502:
case 86:
case 2672:
case 509:
case 3758:
case 3227:
case 3857:
case 1095:
case 3958:
case 358:
case 592:
case 1822:
case 3736:
case 529:
case 177:
case 1867:
case 2451:
case 4002:
case 1685:
case 1625:
case 4044:
case 3537:
case 2704:
case 3697:
case 1966:
case 368:
case 3802:
case 2107:
case 3544:
case 77:
case 1268:
case 3935:
case 2214:
case 2708:
case 738:
case 2206:
case 3238:
case 51:
case 488:
case 1478:
case 2688:
case 3166:
case 355:
case 3306:
case 2348:
case 2685:
case 308:
case 898:
case 3779:
case 1876:
case 1231:
case 172:
case 2925:
case 860:
case 2697:
case 527:
case 3249:
case 3508:
case 1577:
case 1639:
case 333:
case 2157:
case 881:
case 2681:
case 148:
case 3099:
case 2785:
case 689:
case 1413:
case 2060:
case 1991:
case 494:
case 1724:
case 312:
case 3805:
case 1359:
case 832:
case 585:
case 3677:
case 983:
case 2021:
case 1656:
case 3142:
case 3454:
case 1501:
case 2054:
case 705:
case 2588:
case 2725:
case 2555:
case 1504:
case 2990:
case 2150:
case 995:
case 1831:
case 3631:
case 2129:
case 2028:
case 2131:
case 3556:
case 3368:
case 784:
case 1512:
case 2004:
case 760:
case 3528:
case 363:
case 1763:
case 2310:
case 1039:
case 3616:
case 3744:
case 325:
case 1769:
case 1247:
case 1257:
case 403:
case 2958:
case 1562:
case 734:
case 580:
case 2312:
case 4016:
case 2614:
case 2662:
case 3202:
case 870:
case 1534:
case 3715:
case 166:
case 3647:
case 3097:
case 2948:
case 484:
case 3341:
case 837:
case 1553:
case 1624:
case 1737:
case 3523:
case 1048:
case 3348:
case 2125:
case 3513:
case 1213:
case 1796:
case 3511:
case 3451:
case 1372:
case 3393:
case 648:
case 3499:
case 2918:
case 2392:
case 2548:
case 3194:
case 228:
case 2971:
case 2179:
case 2345:
case 1827:
case 3453:
case 2137:
case 2457:
case 3670:
case 292:
case 645:
case 1155:
case 398:
case 337:
case 3241:
case 3412:
case 3051:
case 1347:
case 4038:
case 2923:
case 2241:
case 4030:
case 1526:
case 1123:
case 4057:
case 596:
case 721:
case 2455:
case 2952:
case 2643:
case 1957:
case 653:
case 1848:
case 2239:
case 221:
case 1590:
case 298:
case 3465:
case 2905:
case 2975:
case 269:
case 3536:
case 1990:
case 3632:
case 2374:
case 2105:
case 3846:
case 2568:
case 3490:
case 549:
case 1086:
case 3231:
case 2424:
case 2492:
case 778:
case 176:
case 2984:
case 3196:
case 3570:
case 759:
case 3002:
case 2228:
case 3069:
case 1888:
case 3887:
case 48:
case 3639:
case 441:
case 2487:
case 3814:
case 1226:
case 2924:
case 706:
case 442:
case 3961:
case 316:
case 3910:
case 1963:
case 4037:
case 1947:
case 1691:
case 1355:
case 2938:
case 2537:
case 267:
case 2480:
case 2474:
case 2966:
case 958:
case 3252:
case 3201:
case 3763:
case 1236:
case 2152:
case 139:
case 2156:
case 3178:
case 3858:
case 2088:
case 392:
case 2335:
case 2974:
case 2767:
case 49:
case 3315:
case 3133:
case 1824:
case 2749:
case 1931:
case 3723:
case 293:
case 4009:
case 14:
case 1811:
case 3526:
case 356:
case 2904:
case 3440:
case 2915:
case 1787:
case 2886:
case 2059:
case 3461:
case 3117:
case 2177:
case 3439:
case 1362:
case 123:
case 2195:
case 2282:
case 499:
case 2385:
case 1825:
case 3803:
case 1955:
case 1273:
case 4004:
case 3471:
case 1799:
case 3800:
case 3043:
case 1941:
case 830:
case 2084:
case 468:
case 418:
case 1260:
case 317:
case 2781:
case 397:
case 37:
case 840:
case 2046:
case 1650:
case 2317:
case 1586:
case 702:
case 443:
case 1946:
case 861:
case 4083:
case 3072:
case 912:
case 2701:
case 1214:
case 3110:
case 2171:
case 2743:
case 2015:
case 3111:
case 841:
case 4019:
case 3256:
case 2522:
case 1753:
case 190:
case 412:
case 3547:
case 1807:
case 651:
case 2645:
case 3675:
case 1973:
case 3642:
case 167:
case 1419:
case 195:
case 1272:
case 2833:
case 3376:
case 25:
case 2756:
case 519:
case 1195:
case 1404:
case 3778:
case 2020:
case 2387:
case 2269:
case 2824:
case 3137:
case 1815:
case 1112:
case 2679:
case 3129:
case 3994:
case 2369:
case 2017:
case 3493:
case 1142:
case 2378:
case 573:
case 798:
case 3655:
case 1274:
case 819:
case 230:
case 2181:
case 869:
case 3463:
case 3788:
case 4005:
case 1749:
case 3271:
case 3385:
case 703:
case 1617:
case 1472:
case 986:
case 2063:
case 2259:
case 2237:
case 258:
case 1027:
case 2405:
case 493:
case 3548:
case 538:
case 2658:
case 661:
case 2836:
case 2795:
case 467:
case 3379:
case 883:
case 1261:
case 1666:
case 419:
case 2595:
case 3998:
case 3223:
case 470:
case 1109:
case 3813:
case 1445:
case 3130:
case 1860:
case 2787:
case 2290:
case 3080:
case 2012:
case 3147:
case 1902:
case 335:
case 3519:
case 2074:
case 1135:
case 514:
case 4043:
case 1694:
case 2825:
case 1879:
case 3774:
case 1792:
case 3727:
case 1500:
case 1187:
case 1145:
case 2351:
case 2820:
case 781:
case 1930:
case 691:
case 2631:
case 2665:
case 3957:
case 3867:
case 2592:
case 387:
case 831:
case 3922:
case 2940:
case 3075:
case 3127:
case 2203:
case 3485:
case 2199:
case 2308:
case 1845:
case 9:
case 2085:
case 606:
case 3295:
case 726:
case 3019:
case 1767:
case 940:
case 3316:
case 1431:
case 2921:
case 1459:
case 1293:
case 1912:
case 3630:
case 1129:
case 1572:
case 1026:
case 2263:
case 2843:
case 3136:
case 2070:
case 1409:
case 1994:
case 2429:
case 2366:
case 3824:
case 1415:
case 431:
case 53:
case 583:
case 205:
case 1698:
case 3377:
case 189:
case 3339:
case 4079:
case 2571:
case 2558:
case 3443:
case 3068:
case 447:
case 2865:
case 242:
case 3486:
case 1042:
case 535:
case 3792:
case 1207:
case 1120:
case 1847:
case 2435:
case 4084:
case 1916:
case 163:
case 2266:
case 2050:
case 3771:
case 1164:
case 1468:
case 2321:
case 445:
case 1244:
case 2469:
case 559:
case 1172:
case 1292:
case 1837:
case 3049:
case 429:
case 1228:
case 3874:
case 1975:
case 2120:
case 300:
case 4053:
case 1319:
case 2586:
case 3895:
case 1923:
case 1871:
case 3233:
case 3851:
case 198:
case 2409:
case 1730:
case 3001:
case 1296:
case 1315:
case 3533:
case 44:
case 3664:
case 1076:
case 748:
case 3003:
case 175:
case 868:
case 862:
case 1427:
case 439:
case 1759:
case 2080:
case 3650:
case 1201:
case 1669:
case 1291:
case 2799:
case 2285:
case 23:
case 2805:
case 3037:
case 2909:
case 2399:
case 3414:
case 3595:
case 1744:
case 2693:
case 1044:
case 1289:
case 1600:
case 2629:
case 2801:
case 2421:
case 1508:
case 999:
case 4047:
case 182:
case 3663:
case 578:
case 3750:
case 788:
case 88:
case 2069:
case 306:
case 2994:
case 369:
case 4069:
case 492:
case 3419:
case 2625:
case 2475:
case 4040:
case 939:
case 1861:
case 1893:
case 1696:
case 2176:
case 3052:
case 980:
case 1870:
case 3404:
case 647:
case 2471:
case 2209:
case 1340:
case 3931:
case 1425:
case 613:
case 3009:
case 453:
case 1997:
case 2872:
case 1160:
case 2437:
case 3669:
case 2458:
case 3370:
case 1337:
case 1202:
case 1079:
case 4007:
case 1205:
case 1762:
case 2748:
case 3578:
case 450:
case 1789:
case 256:
case 97:
case 3434:
case 321:
case 3324:
case 421:
case 1288:
case 45:
case 2493:
case 3967:
case 2928:
case 4060:
case 204:
case 299:
case 371:
case 212:
case 2735:
case 3435:
case 1661:
case 611:
case 930:
case 1055:
case 3016:
case 393:
case 1659:
case 354:
case 1456:
case 1173:
case 977:
case 1968:
case 876:
case 2213:
case 2372:
case 3565:
case 2531:
case 3207:
case 2617:
case 879:
case 1083:
case 55:
case 3988:
case 921:
case 1954:
case 2968:
case 3167:
case 3717:
case 2056:
case 193:
case 2358:
case 3518:
case 3535:
case 890:
case 3159:
case 2802:
case 1779:
case 1682:
case 3087:
case 3263:
case 730:
case 924:
case 3180:
case 593:
case 3487:
case 2943:
case 2747:
case 1537:
case 3741:
case 2281:
case 2218:
case 2566:
case 1543:
case 1961:
case 1964:
case 2100:
case 133:
case 537:
case 2332:
case 591:
case 3733:
case 1773:
case 1587:
case 2300:
case 3684:
case 1768:
case 3200:
case 2155:
case 3928:
case 2034:
case 1219:
case 1936:
case 3580:
case 2044:
case 1299:
case 2885:
case 2526:
case 3960:
case 3411:
case 877:
case 1379:
case 2287:
case 165:
case 1012:
case 3208:
case 2611:
case 3198:
case 3579:
case 1464:
case 701:
case 3121:
case 2506:
case 112:
case 2182:
case 619:
case 857:
case 2016:
case 2035:
case 3613:
case 260:
case 3917:
case 858:
case 3656:
case 58:
case 993:
case 2651:
case 2274:
case 3189:
case 3740:
case 437:
case 1784:
case 4071:
case 3460:
case 145:
case 1019:
case 3923:
case 793:
case 178:
case 3562:
case 1392:
case 2565:
case 2616:
case 3050:
case 1830:
case 3819:
case 2347:
case 2623:
case 2858:
case 1663:
case 3730:
case 151:
case 1301:
case 3954:
case 3182:
case 746:
case 1093:
case 3017:
case 1124:
case 3728:
case 328:
case 679:
case 1174:
case 3114:
case 1979:
case 3026:
case 3870:
case 1633:
case 3146:
case 3335:
case 3457:
case 541:
case 1339:
case 3281:
case 203:
case 2500:
case 4003:
case 1349:
case 2523:
case 892:
case 624:
case 174:
case 2615:
case 1323:
case 1420:
case 536:
case 1171:
case 1570:
case 3100:
case 1476:
case 1533:
case 3115:
case 2226:
case 1051:
case 1374:
case 3336:
case 3517:
case 2676:
case 652:
case 3726:
case 797:
case 3593:
case 89:
case 2039:
case 1407:
case 211:
case 1567:
case 3053:
case 1718:
case 2008:
case 2769:
case 78:
case 2073:
case 2888:
case 2271:
case 2123:
case 3602:
case 344:
case 1090:
case 638:
case 1797:
case 1511:
case 2356:
case 2115:
case 120:
case 1828:
case 1179:
case 1630:
case 3109:
case 3816:
case 1862:
case 2052:
case 2707:
case 3543:
case 1826:
case 1985:
case 3568:
case 607:
case 2897:
case 3938:
case 3836:
case 1435:
case 365:
case 404:
case 4024:
case 131:
case 1878:
case 895:
case 1281:
case 1096:
case 3845:
case 766:
case 3179:
case 3539:
case 2336:
case 1949:
case 1490:
case 1563:
case 59:
case 2732:
case 3925:
case 1956:
case 3352:
case 749:
case 3280:
case 3576:
case 295:
case 3661:
case 625:
case 95:
case 2541:
case 455:
case 601:
case 873:
case 128:
case 249:
case 1383:
case 2980:
case 2862:
case 1530:
case 1234:
case 1618:
case 1326:
case 1519:
case 402:
case 1131:
case 944:
case 2584:
case 1060:
case 711:
case 826:
case 243:
case 2273:
case 1599:
case 2721:
case 776:
case 3273:
case 2989:
case 451:
case 777:
case 2404:
case 1369:
case 3066:
case 2736:
case 994:
case 874:
case 3920:
case 672:
case 3128:
case 2613:
case 3597:
case 3300:
case 390:
case 3266:
case 1960:
case 2792:
case 740:
case 238:
case 697:
case 1692:
case 750:
case 664:
case 2695:
case 343:
case 2543:
case 1755:
case 2711:
case 2852:
case 315:
case 1608:
case 3693:
case 526:
case 2742:
case 1357:
case 3245:
case 2200:
case 3808:
case 1119:
case 3108:
case 3347:
case 1635:
case 1517:
case 288:
case 501:
case 1502:
case 1640:
case 3700:
case 4052:
case 2495:
case 2061:
case 1018:
case 1005:
case 1333:
case 3030:
case 772:
case 694:
case 1528:
case 2528:
case 1851:
case 946:
case 2334:
case 2326:
case 2765:
case 1040:
case 3113:
case 2078:
case 3838:
case 2871:
case 1676:
case 71:
case 987:
case 2998:
case 302:
case 69:
case 2082:
case 2593:
case 2867:
case 914:
case 1883:
case 3611:
case 1072:
case 1421:
case 3105:
case 3673:
case 318:
case 3876:
case 2230:
case 3853:
case 3469:
case 2859:
case 3970:
case 720:
case 3:
case 366:
case 1675:
case 490:
case 2978:
case 3839:
case 2031:
case 3277:
case 990:
case 2249:
case 319:
case 2210:
case 3654:
case 1680:
case 3101:
case 1588:
case 207:
case 3390:
case 1859:
case 2931:
case 3492:
case 3088:
case 1695:
case 3591:
case 846:
case 3899:
case 2768:
case 1782:
case 3135:
case 3599:
case 3183:
case 13:
case 3609:
case 1934:
case 1495:
case 3171:
case 130:
case 2648:
case 3086:
case 3926:
case 792:
case 1426:
case 98:
case 1:
case 3232:
case 3718:
case 2981:
case 3859:
case 2386:
case 1465:
case 1710:
case 3381:
case 226:
case 3990:
case 2987:
case 2684:
case 1615:
case 323:
case 424:
case 236:
case 2361:
case 602:
case 3343:
case 3190:
case 3651:
case 3703:
case 2596:
case 3685:
case 875:
case 3615:
case 2652:
case 2932:
case 836:
case 2217:
case 1581:
case 127:
case 2390:
case 3287:
case 1775:
case 595:
case 2168:
case 3083:
case 3004:
case 3645:
case 643:
case 2473:
case 2418:
case 3821:
case 1343:
case 1193:
case 806:
case 28:
case 1535:
case 3236:
case 3298:
case 1668:
case 35:
case 31:
case 3986:
case 274:
case 3900:
case 2604:
case 214:
case 2231:
case 109:
case 1253:
case 961:
case 3363:
case 626:
case 216:
case 1017:
case 1513:
case 937:
case 2906:
case 2812:
case 1636:
case 1312:
case 2267:
case 905:
case 4031:
case 2590:
case 3622:
case 3070:
case 1937:
case 2636:
case 3199:
case 282:
case 998:
case 327:
case 2945:
case 2880:
case 3608:
case 1804:
case 1117:
case 3662:
case 1474:
case 2806:
case 2532:
case 1726:
case 2569:
case 430:
case 768:
case 3966:
case 1004:
case 629:
case 1373:
case 137:
case 1259:
case 1116:
case 279:
case 2501:
case 1522:
case 2546:
case 478:
case 2065:
case 2926:
case 2618:
case 257:
case 322:
case 1353:
case 2402:
case 4072:
case 3024:
case 1544:
case 3091:
case 2438:
case 548:
case 3914:
case 1477:
case 3156:
case 2191:
case 2899:
case 3481:
case 2165:
case 1838:
case 364:
case 2324:
case 1015:
case 2379:
case 2005:
case 3646:
case 19:
case 2887:
case 3916:
case 2770:
case 1688:
case 2784:
case 2671:
case 433:
case 3762:
case 530:
case 2006:
case 1225:
case 1620:
case 1388:
case 2907:
case 1706:
case 1133:
case 2339:
case 462:
case 2741:
case 1332:
case 938:
case 3643:
case 3459:
case 2667:
case 1263:
case 3592:
case 463:
case 161:
case 656:
case 872:
case 2996:
case 569:
case 1601:
case 374:
case 1412:
case 2826:
case 2360:
case 2320:
case 981:
case 2775:
case 712:
case 3772:
case 4018:
case 567:
case 3557:
case 3907:
case 1158:
case 303:
case 510:
case 670:
case 1037:
case 598:
case 3705:
case 3479:
case 1321:
case 162:
case 3084:
case 4029:
case 2959:
case 2172:
case 284:
case 1043:
case 1678:
case 1220:
case 1665:
case 1812:
case 191:
case 3040:
case 719:
case 3181:
case 4055:
case 3387:
case 1852:
case 2889:
case 2448:
case 2377:
case 383:
case 3850:
case 2908:
case 3349:
case 997:
case 1134:
case 2173:
case 3369:
case 2043:
case 3313:
case 2468:
case 4041:
case 4042:
case 2561:
case 3269:
case 3062:
case 2731:
case 1780:
case 3488:
case 2234:
case 3875:
case 988:
case 617:
case 1481:
case 1191:
case 1940:
case 4094:
case 3394:
case 2570:
case 164:
case 3131:
case 3911:
case 126:
case 2184:
case 635:
case 1351:
case 3753:
case 2389:
case 125:
case 1447:
case 512:
case 1433:
case 2341:
case 332:
case 2452:
case 225:
case 594:
case 2485:
case 3695:
case 2718:
case 2694:
case 1754:
case 2547:
case 2047:
case 2737:
case 385:
case 1950:
case 1761:
case 91:
case 2854:
case 329:
case 1102:
case 545:
case 2997:
case 3433:
case 2786:
case 3573:
case 604:
case 1242:
case 4073:
case 2478:
case 941:
case 3378:
case 38:
case 2295:
case 1047:
case 3963:
case 728:
case 3143:
case 1970:
case 3585:
case 3825:
case 2782:
case 3953:
case 3330:
case 1944:
case 381:
case 3058:
case 2315:
case 1006:
case 3720:
case 1846:
case 3213:
case 1327:
case 33:
case 2760:
case 834:
case 968:
case 3014:
case 1001:
case 2319:
case 3854:
case 4027:
case 3919:
case 3555:
case 2413:
case 2124:
case 3811:
case 3260:
case 1980:
case 1772:
case 197:
case 1988:
case 1653:
case 1627:
case 1311:
case 3509:
case 1170:
case 1458:
case 2227:
case 3310:
case 2525:
case 3397:
case 1814:
case 386:
case 1066:
case 2445:
case 3652:
case 1621:
case 1020:
case 1127:
case 114:
case 3940:
case 1224:
case 2130:
case 1062:
case 1198:
case 1318:
case 3160:
case 1094:
case 115:
case 2898:
case 3551:
case 3504:
case 671:
case 3530:
case 787:
case 336:
case 2431:
case 1277:
case 1118:
case 3724:
case 3754:
case 1059:
case 1414:
case 2910:
case 379:
case 3882:
case 2728:
case 2153:
case 3582:
case 1189:
case 1423:
case 1265:
case 1192:
case 184:
case 3268:
case 4039:
case 2170:
case 2896:
case 2076:
case 1547:
case 2363:
case 2041:
case 2564:
case 239:
case 1446:
case 2426:
case 345:
case 1719:
case 3596:
case 1081:
case 3545:
case 2680:
case 50:
case 2553:
case 2730:
case 1100:
case 4067:
case 822:
case 1440:
case 1184:
case 2018:
case 2702:
case 4046:
case 3475:
case 654:
case 3863:
case 1439:
case 2098:
case 3637:
case 2902:
case 3687:
case 833:
case 3468:
case 2284:
case 244:
case 2572:
case 27:
case 2655:
case 814:
case 1681:
case 1679:
case 1361:
case 104:
case 1384:
case 2419:
case 3908:
case 2488:
case 100:
case 3473:
case 1958:
case 3342:
case 3204:
case 1057:
case 2934:
case 3358:
case 2154:
case 3676:
case 845:
case 631:
case 3590:
case 1907:
case 3764:
case 2071:
case 2178:
case 3356:
case 3420:
case 3861:
case 3742:
case 2001:
case 1728:
case 2511:
case 1933:
case 669:
case 459:
case 807:
case 2710:
case 1310:
case 2127:
case 432:
case 762:
case 925:
case 362:
case 3798:
case 373:
case 3284:
case 2240:
case 3812:
case 1215:
case 1196:
case 2136:
case 309:
case 4034:
case 685:
case 3392:
case 3090:
case 1358:
case 2831:
case 1209:
case 2612:
case 3955:
case 773:
case 605:
case 1673:
case 476:
case 3344:
case 2338:
case 1402:
case 3089:
case 472:
case 232:
case 2068:
case 1314:
case 2491:
case 1546:
case 3950:
case 2638:
case 2482:
case 1972:
case 761:
case 2291:
case 3801:
case 1462:
case 786:
case 2608:
case 1177:
case 3331:
case 1531:
case 1835:
case 1655:
case 3906:
case 2751:
case 506:
case 179:
case 3638:
case 818:
case 919:
case 1649:
case 847:
case 2276:
case 2758:
case 1561:
case 3438:
case 3901:
case 427:
case 1687:
case 3503:
case 2815:
case 3964:
case 2343:
case 1254:
case 844:
case 901:
case 1010:
case 2830:
case 3903:
case 3832:
case 1509:
case 3410:
case 974:
case 2717:
case 1538:
case 1952:
case 377:
case 704:
case 4012:
case 3032:
case 46:
case 785:
case 3672:
case 206:
case 1924:
case 1227:
case 817:
case 771:
case 1748:
case 551:
case 3942:
case 1149:
case 1070:
case 217:
case 2808:
case 3276:
case 160:
case 1455:
case 1382:
case 3680:
case 3842:
case 2420:
case 1756:
case 741:
case 3671:
case 3781:
case 1790:
case 2144:
case 2019:
case 717:
case 1894:
case 1475:
case 1348:
case 2186:
case 2204:
case 1397:
case 1725:
case 1982:
case 2772:
case 1881:
case 3162:
case 2892:
case 1248:
case 2255:
case 3891:
case 471:
case 146:
case 132:
case 650:
case 454:
case 188:
case 2139:
case 851:
case 2726:
case 1808:
case 1536:
case 3621:
case 3921:
case 17:
case 2247:
case 1613:
case 1436:
case 525:
case 1049:
case 3107:
case 2549:
case 2577:
case 2095:
case 2116:
case 3389:
case 2040:
case 1803:
case 1750:
case 2698:
case 1579:
case 3959:
case 976:
case 816:
case 2235:
case 3329:
case 2757:
case 1400:
case 574:
case 856:
case 1153:
case 2161:
case 684:
case 3193:
case 3320:
case 563:
case 603:
case 3587:
case 3896:
case 2637:
case 263:
case 2254:
case 3462:
case 1541:
case 923:
case 1144:
case 1722:
case 2811:
case 3323:
case 3304:
case 3574:
case 790:
case 2827:
case 3822:
case 1977:
case 2322:
case 888:
case 465:
case 2922:
case 900:
case 39:
case 2064:
case 280:
case 1258:
case 4086:
case 1295:
case 3984:
case 2719:
case 1638:
case 2104:
case 2250:
case 1629:
case 2635:
case 2498:
case 3627:
case 3929:
case 1029:
case 2138:
case 3770:
case 2560:
case 2713:
case 1266:
case 2456:
case 2822:
case 1713:
case 3817:
case 718:
case 409:
case 4066:
case 2520:
case 3164:
case 627:
case 3209:
case 2626:
case 3659:
case 618:
case 1671:
case 582:
case 568:
case 2524:
case 1550:
case 3360:
case 1486:
case 1161:
case 2325:
case 61:
case 2752:
case 3104:
case 2723:
case 4075:
case 1611:
case 2627:
case 1401:
case 1607:
case 2993:
case 1176:
case 3745:
case 1469:
case 1752:
case 542:
case 324:
case 68:
case 1592:
case 1521:
case 3729:
case 2075:
case 3140:
case 1897:
case 2774:
case 808:
case 2853:
case 2167:
case 3305:
case 3586:
case 2396:
case 3567:
case 2093:
case 3480:
case 3841:
case 3804:
case 2894:
case 1836:
case 3314:
case 218:
case 4064:
case 3531:
case 2497:
case 735:
case 634:
case 3698:
case 3403:
case 3340:
case 2529:
case 215:
case 2380:
case 2003:
case 1717:
case 2508:
case 4092:
case 2329:
case 3428:
case 4014:
case 360:
case 2357:
case 1473:
case 633:
case 1183:
case 340:
case 3844:
case 1491:
case 1279:
case 4088:
case 473:
case 3025:
case 2746:
case 3987:
case 3765:
case 3791:
case 2245:
case 237:
case 2092:
case 2783:
case 2535:
case 2834:
case 1061:
case 3501:
case 1800:
case 815:
case 1953:
case 1578:
case 3353:
case 2654:
case 394:
case 696:
case 141:
case 2817:
case 1294:
case 3830:
case 2828:
case 1626:
case 1240:
case 1344:
case 1631:
case 3648:
case 799:
case 765:
case 1703:
case 3601:
case 2878:
case 1022:
case 3312:
case 2286:
case 3354:
case 3191:
case 508:
case 751:
case 3073:
case 789:
case 1865:
case 3139:
case 1451:
case 507:
case 1278:
case 2118:
case 3881:
case 3981:
case 561:
case 2857:
case 420:
case 2884:
case 2354:
case 1857:
case 1128:
case 2861:
case 1417:
case 2393:
case 3031:
case 2509:
case 3707:
case 3406:
case 3123:
case 503:
case 438:
case 3939:
case 859:
case 673:
case 4049:
case 3265:
case 801:
case 1335:
case 261:
case 739:
case 2653:
case 1747:
case 252:
case 612:
case 3338:
case 287:
case 307:
case 3945:
case 138:
case 716:
case 2946:
case 2109:
case 456:
case 3678:
case 2869:
case 2142:
case 1987:
case 1346:
case 3500:
case 1689:
case 682:
case 2302:
case 2706:
case 2370:
case 1525:
case 2814:
case 3395:
case 2193:
case 1899:
case 3350:
case 314:
case 3041:
case 3077:
case 3563:
case 1113:
case 736:
case 3588:
case 2797:
case 384:
case 2764:
case 183:
case 2460:
case 171:
case 1905:
case 3506:
case 4091:
case 1720:
case 143:
case 1308:
case 2318:
case 3498:
case 2313:
case 2722:
case 2406:
case 330:
case 2754:
case 1731:
case 2502:
case 3094:
case 2091:
case 3163:
case 3701:
case 1307:
case 202:
case 1603:
case 2992:
case 516:
case 884:
case 3262:
case 4013:
case 3429:
case 3332:
case 2724:
case 1942:
case 3847:
case 3229:
case 2720:
case 3968:
case 2440:
case 255:
case 426:
case 3885:
case 1783:
case 1712:
case 2689:
case 3760:
case 3617:
case 136:
case 2972:
case 3172:
case 2023:
case 1813:
case 590:
case 2912:
case 3927:
case 1122:
case 3122:
case 283:
case 3250:
case 121:
case 1210:
case 229:
case 2476:
case 2192:
case 3686:
case 3380:
case 1269:
case 1664:
case 2583:
case 3402:
case 1036:
case 1707:
case 1313:
case 2459:
case 2449:
case 742:
case 3898:
case 973:
case 1866:
case 3532:
case 2607:
case 3496:
case 154:
case 3124:
case 2716:
case 2870:
case 678:
case 2038:
case 680:
case 1569:
case 29:
case 663:
case 553:
case 3794:
case 2788:
case 3401:
case 4058:
case 444:
case 2257:
case 1185:
case 2544:
case 275:
case 3721:
case 1199:
case 73:
case 201:
case 2248:
case 1662:
case 346:
case 3889:
case 731:
case 2944:
case 413:
case 3996:
case 886:
case 1880:
case 1898:
case 3151:
case 3569:
case 2873:
case 286:
case 2415:
case 3334:
case 1038:
case 2042:
case 1760:
case 1921:
case 1366:
case 2066:
case 3649:
case 3102:
case 960:
case 2807:
case 96:
case 2901:
case 1356:
case 2542:
case 910:
case 2327:
case 3702:
case 515:
case 3251:
case 1667:
case 1716:
case 1654:
case 3293:
case 22:
case 3321:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1652925602/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,];
var gg_b = "1652925602/";

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
