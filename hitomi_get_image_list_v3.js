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
case 2835:
case 2053:
case 3676:
case 1769:
case 560:
case 1892:
case 1166:
case 1648:
case 1707:
case 2001:
case 3331:
case 3387:
case 2844:
case 542:
case 1229:
case 936:
case 1093:
case 3045:
case 2672:
case 641:
case 3049:
case 525:
case 532:
case 3804:
case 2020:
case 2555:
case 2600:
case 1414:
case 3886:
case 211:
case 1912:
case 4012:
case 1669:
case 1216:
case 369:
case 2678:
case 3229:
case 3007:
case 1265:
case 551:
case 3153:
case 2543:
case 2390:
case 4076:
case 682:
case 3032:
case 3057:
case 2825:
case 1647:
case 825:
case 3755:
case 2594:
case 1770:
case 1790:
case 2444:
case 1259:
case 2794:
case 2161:
case 364:
case 1888:
case 449:
case 817:
case 3725:
case 524:
case 1633:
case 2033:
case 1344:
case 4036:
case 1776:
case 1337:
case 2008:
case 3221:
case 2980:
case 1722:
case 678:
case 1663:
case 2279:
case 572:
case 1132:
case 3724:
case 665:
case 698:
case 3344:
case 887:
case 3487:
case 2619:
case 307:
case 1900:
case 1949:
case 3370:
case 2994:
case 1828:
case 3744:
case 2068:
case 1065:
case 901:
case 3843:
case 1864:
case 3739:
case 1925:
case 3658:
case 4064:
case 2328:
case 317:
case 4008:
case 3090:
case 2966:
case 1258:
case 1422:
case 3623:
case 2179:
case 3047:
case 625:
case 2571:
case 1941:
case 3213:
case 2262:
case 660:
case 815:
case 3699:
case 3261:
case 1270:
case 1571:
case 4047:
case 28:
case 2273:
case 1022:
case 2225:
case 541:
case 1908:
case 2152:
case 2907:
case 360:
case 3649:
case 2529:
case 3340:
case 2024:
case 2715:
case 576:
case 2468:
case 424:
case 3788:
case 2284:
case 1768:
case 3520:
case 715:
case 3215:
case 2080:
case 198:
case 1605:
case 3287:
case 4059:
case 2693:
case 2762:
case 264:
case 3826:
case 2991:
case 160:
case 667:
case 2071:
case 227:
case 985:
case 1875:
case 1553:
case 4013:
case 1729:
case 3396:
case 1485:
case 179:
case 303:
case 2058:
case 1546:
case 35:
case 265:
case 2669:
case 358:
case 1810:
case 1600:
case 2695:
case 621:
case 2122:
case 2045:
case 2777:
case 752:
case 2256:
case 243:
case 741:
case 335:
case 1468:
case 2184:
case 1903:
case 4000:
case 3117:
case 1386:
case 3041:
case 1013:
case 327:
case 812:
case 891:
case 2171:
case 2466:
case 1799:
case 3997:
case 497:
case 2485:
case 1951:
case 4031:
case 2974:
case 1855:
case 3469:
case 2103:
case 4050:
case 3120:
case 945:
case 2832:
case 2706:
case 3201:
case 2382:
case 3947:
case 2747:
case 107:
case 2617:
case 2148:
case 2173:
case 3705:
case 3894:
case 3285:
case 2992:
case 609:
case 3257:
case 792:
case 1695:
case 1545:
case 1979:
case 2275:
case 3255:
case 3798:
case 314:
case 3704:
case 146:
case 3771:
case 397:
case 2842:
case 3900:
case 109:
case 343:
case 1580:
case 1860:
case 1231:
case 1537:
case 3589:
case 2756:
case 787:
case 2938:
case 2566:
case 639:
case 2362:
case 1694:
case 754:
case 1857:
case 2502:
case 1039:
case 2199:
case 3091:
case 2267:
case 1004:
case 2474:
case 3066:
case 1213:
case 1992:
case 517:
case 2894:
case 3158:
case 638:
case 3244:
case 3795:
case 3126:
case 2288:
case 1233:
case 575:
case 2576:
case 893:
case 2549:
case 2559:
case 224:
case 4023:
case 3790:
case 3143:
case 2877:
case 2924:
case 3732:
case 1884:
case 3304:
case 1379:
case 1643:
case 1562:
case 2799:
case 3318:
case 619:
case 3163:
case 466:
case 1418:
case 1317:
case 1454:
case 2083:
case 1508:
case 574:
case 1803:
case 3598:
case 692:
case 1516:
case 1402:
case 116:
case 442:
case 3150:
case 2134:
case 2703:
case 3987:
case 1450:
case 452:
case 756:
case 3950:
case 732:
case 3016:
case 2574:
case 3438:
case 1931:
case 2789:
case 2921:
case 3246:
case 948:
case 3857:
case 499:
case 811:
case 1512:
case 775:
case 209:
case 1859:
case 368:
case 3345:
case 10:
case 2461:
case 3011:
case 4042:
case 1370:
case 935:
case 2216:
case 2718:
case 508:
case 3180:
case 1985:
case 873:
case 2901:
case 4002:
case 1374:
case 1305:
case 2613:
case 1641:
case 3411:
case 1153:
case 1018:
case 2322:
case 3060:
case 773:
case 896:
case 2859:
case 906:
case 2078:
case 1710:
case 2819:
case 2183:
case 3652:
case 1220:
case 1330:
case 3072:
case 1010:
case 2839:
case 2973:
case 3832:
case 657:
case 403:
case 1989:
case 3363:
case 1716:
case 885:
case 2222:
case 143:
case 3982:
case 2945:
case 2662:
case 3889:
case 2440:
case 3288:
case 2454:
case 2473:
case 867:
case 1274:
case 2542:
case 3256:
case 3462:
case 2854:
case 3297:
case 2809:
case 200:
case 3416:
case 984:
case 3971:
case 2503:
case 2861:
case 1459:
case 197:
case 60:
case 3590:
case 847:
case 1457:
case 700:
case 2178:
case 1618:
case 124:
case 2688:
case 1760:
case 3361:
case 3773:
case 1517:
case 1794:
case 557:
case 1111:
case 2656:
case 1342:
case 2848:
case 75:
case 3341:
case 846:
case 849:
case 2568:
case 2039:
case 3834:
case 46:
case 468:
case 12:
case 1935:
case 1833:
case 250:
case 709:
case 1142:
case 1842:
case 3173:
case 3859:
case 1636:
case 3296:
case 3932:
case 632:
case 1814:
case 1865:
case 839:
case 3838:
case 3556:
case 3877:
case 3881:
case 351:
case 1528:
case 88:
case 1126:
case 2096:
case 1401:
case 62:
case 1077:
case 3779:
case 1578:
case 3638:
case 1398:
case 675:
case 755:
case 3690:
case 2979:
case 282:
case 1858:
case 1099:
case 2081:
case 1487:
case 561:
case 3025:
case 217:
case 931:
case 1037:
case 1737:
case 1261:
case 1698:
case 3669:
case 1880:
case 3413:
case 277:
case 1736:
case 2561:
case 2336:
case 898:
case 210:
case 956:
case 2990:
case 3043:
case 4022:
case 1120:
case 3330:
case 1661:
case 2615:
case 1527:
case 195:
case 2686:
case 483:
case 3749:
case 3323:
case 1279:
case 161:
case 2129:
case 1460:
case 3419:
case 2770:
case 2151:
case 3029:
case 2701:
case 2582:
case 3674:
case 27:
case 870:
case 529:
case 2902:
case 833:
case 312:
case 3965:
case 338:
case 245:
case 2321:
case 2130:
case 1746:
case 3875:
case 1397:
case 3766:
case 2984:
case 903:
case 549:
case 1466:
case 3748:
case 138:
case 826:
case 1492:
case 2784:
case 298:
case 181:
case 633:
case 565:
case 1215:
case 717:
case 2302:
case 3772:
case 2775:
case 3996:
case 3309:
case 2886:
case 2253:
case 3014:
case 515:
case 1887:
case 4066:
case 4005:
case 1779:
case 2513:
case 877:
case 3000:
case 2431:
case 2101:
case 1993:
case 3584:
case 430:
case 3609:
case 95:
case 3444:
case 2414:
case 957:
case 2961:
case 3793:
case 2092:
case 880:
case 3135:
case 478:
case 3391:
case 1595:
case 53:
case 3796:
case 1905:
case 944:
case 1830:
case 2713:
case 805:
case 2309:
case 1438:
case 1741:
case 976:
case 1481:
case 1721:
case 2005:
case 1296:
case 637:
case 2831:
case 1920:
case 3736:
case 3550:
case 183:
case 993:
case 1248:
case 453:
case 513:
case 3200:
case 3031:
case 3108:
case 1538:
case 3863:
case 4009:
case 3218:
case 3147:
case 36:
case 3907:
case 1696:
case 1264:
case 1740:
case 3465:
case 1027:
case 3006:
case 1384:
case 71:
case 3679:
case 1199:
case 2394:
case 966:
case 2280:
case 2690:
case 1524:
case 77:
case 3849:
case 624:
case 2144:
case 45:
case 2261:
case 3379:
case 2670:
case 2927:
case 2192:
case 2679:
case 526:
case 3927:
case 3381:
case 2019:
case 2724:
case 1095:
case 1510:
case 42:
case 136:
case 2015:
case 1744:
case 1798:
case 722:
case 482:
case 1705:
case 4062:
case 1239:
case 1577:
case 1757:
case 2259:
case 3506:
case 1767:
case 1419:
case 1556:
case 1906:
case 1843:
case 64:
case 3855:
case 1349:
case 3547:
case 1800:
case 2014:
case 49:
case 3473:
case 568:
case 244:
case 413:
case 824:
case 1821:
case 2334:
case 2138:
case 2739:
case 34:
case 2244:
case 1448:
case 2337:
case 978:
case 2160:
case 501:
case 196:
case 4088:
case 401:
case 3035:
case 2947:
case 2808:
case 1555:
case 3931:
case 43:
case 241:
case 108:
case 3524:
case 1628:
case 3970:
case 1772:
case 3665:
case 683:
case 1157:
case 1861:
case 3946:
case 821:
case 2453:
case 47:
case 2776:
case 2344:
case 2429:
case 3871:
case 29:
case 900:
case 690:
case 1552:
case 2872:
case 2584:
case 1245:
case 3657:
case 2774:
case 1742:
case 311:
case 3052:
case 3805:
case 2481:
case 141:
case 3956:
case 2439:
case 2888:
case 2734:
case 949:
case 3606:
case 1896:
case 3835:
case 3661:
case 2172:
case 2634:
case 320:
case 2304:
case 1003:
case 2951:
case 491:
case 2828:
case 2540:
case 293:
case 2876:
case 2227:
case 2063:
case 4078:
case 3024:
case 1456:
case 3123:
case 2418:
case 234:
case 2628:
case 2840:
case 1856:
case 713:
case 769:
case 3152:
case 1148:
case 3896:
case 1756:
case 636:
case 2187:
case 1222:
case 1182:
case 3130:
case 2293:
case 1106:
case 1654:
case 1086:
case 1597:
case 2392:
case 2403:
case 2356:
case 2447:
case 194:
case 1904:
case 3752:
case 2554:
case 361:
case 3329:
case 2625:
case 1331:
case 3497:
case 536:
case 2089:
case 3695:
case 555:
case 2077:
case 2913:
case 2507:
case 3466:
case 791:
case 3807:
case 3189:
case 214:
case 595:
case 475:
case 1396:
case 3985:
case 533:
case 4025:
case 3529:
case 1981:
case 2760:
case 1164:
case 1898:
case 998:
case 1588:
case 907:
case 3527:
case 2958:
case 2165:
case 689:
case 1849:
case 221:
case 2463:
case 1763:
case 573:
case 3071:
case 395:
case 1655:
case 4021:
case 645:
case 1518:
case 739:
case 2213:
case 1341:
case 2616:
case 3562:
case 1005:
case 37:
case 174:
case 1057:
case 1808:
case 512:
case 2367:
case 888:
case 2680:
case 1089:
case 2240:
case 3492:
case 2464:
case 467:
case 2446:
case 1521:
case 476:
case 3239:
case 3079:
case 3839:
case 3252:
case 1124:
case 1063:
case 1158:
case 776:
case 3481:
case 553:
case 3128:
case 2915:
case 2047:
case 3579:
case 733:
case 1154:
case 3901:
case 3975:
case 925:
case 2580:
case 2996:
case 3262:
case 2491:
case 856:
case 444:
case 2276:
case 1998:
case 3921:
case 456:
case 2710:
case 2647:
case 175:
case 1036:
case 1929:
case 1263:
case 4044:
case 1594:
case 531:
case 2265:
case 1583:
case 2207:
case 1759:
case 2074:
case 2514:
case 2874:
case 1050:
case 828:
case 1692:
case 668:
case 2563:
case 373:
case 2659:
case 611:
case 416:
case 1285:
case 2206:
case 3977:
case 4079:
case 2969:
case 965:
case 205:
case 295:
case 3510:
case 1942:
case 818:
case 1068:
case 2597:
case 339:
case 2589:
case 1301:
case 2203:
case 274:
case 2949:
case 1753:
case 3457:
case 1879:
case 1188:
case 2884:
case 159:
case 448:
case 3571:
case 3334:
case 2782:
case 3313:
case 186:
case 2816:
case 1408:
case 3175:
case 230:
case 3668:
case 1747:
case 3136:
case 835:
case 1383:
case 4039:
case 2868:
case 1318:
case 3190:
case 3494:
case 432:
case 983:
case 3884:
case 1431:
case 832:
case 3294:
case 3055:
case 1788:
case 2366:
case 93:
case 233:
case 3710:
case 2471:
case 1702:
case 1514:
case 3267:
case 1664:
case 588:
case 3290:
case 2085:
case 1355:
case 4037:
case 1045:
case 1601:
case 2274:
case 2301:
case 2324:
case 492:
case 1686:
case 2050:
case 2123:
case 2166:
case 1064:
case 1444:
case 2834:
case 2126:
case 604:
case 972:
case 734:
case 1197:
case 2291:
case 2345:
case 2398:
case 780:
case 3733:
case 1404:
case 1014:
case 3758:
case 3386:
case 114:
case 2056:
case 3452:
case 1837:
case 3496:
case 3086:
case 2286:
case 947:
case 1697:
case 125:
case 3441:
case 2282:
case 1824:
case 319:
case 2352:
case 1272:
case 2585:
case 1470:
case 946:
case 2986:
case 3234:
case 2787:
case 2342:
case 2230:
case 1400:
case 630:
case 919:
case 479:
case 1123:
case 4006:
case 2681:
case 2239:
case 3326:
case 3450:
case 866:
case 219:
case 3264:
case 283:
case 545:
case 3369:
case 9:
case 745:
case 3012:
case 2827:
case 3164:
case 2303:
case 2810:
case 1366:
case 23:
case 1915:
case 649:
case 1115:
case 2311:
case 3384:
case 2801:
case 296:
case 3350:
case 2143:
case 1732:
case 2384:
case 3691:
case 1011:
case 3537:
case 3099:
case 402:
case 3269:
case 3440:
case 1774:
case 1586:
case 2191:
case 1185:
case 2185:
case 2900:
case 655:
case 2186:
case 1966:
case 485:
case 2290:
case 1364:
case 1681:
case 585:
case 1962:
case 872:
case 3594:
case 1084:
case 2314:
case 2460:
case 1076:
case 2857:
case 1486:
case 1092:
case 1193:
case 330:
case 2236:
case 1091:
case 1238:
case 3720:
case 2797:
case 995:
case 2233:
case 2094:
case 3253:
case 2721:
case 3934:
case 3336:
case 2254:
case 3008:
case 612:
case 2162:
case 326:
case 3627:
case 2119:
case 1607:
case 3654:
case 615:
case 3644:
case 1735:
case 3362:
case 3133:
case 2243:
case 768:
case 3608:
case 3818:
case 1715:
case 1691:
case 3500:
case 2022:
case 1536:
case 2533:
case 3933:
case 372:
case 3250:
case 63:
case 503:
case 2038:
case 3491:
case 1885:
case 3993:
case 1568:
case 331:
case 4071:
case 1984:
case 2402:
case 447:
case 1254:
case 329:
case 1666:
case 352:
case 8:
case 1504:
case 1525:
case 2843:
case 1280:
case 2415:
case 273:
case 3040:
case 318:
case 1500:
case 3372:
case 2486:
case 3471:
case 1959:
case 3308:
case 819:
case 418:
case 3509:
case 3576:
case 457:
case 2891:
case 2952:
case 473:
case 707:
case 1462:
case 2434:
case 2140:
case 1530:
case 2833:
case 465:
case 1129:
case 2034:
case 2135:
case 742:
case 2897:
case 3969:
case 2836:
case 3435:
case 1961:
case 2488:
case 2538:
case 1991:
case 913:
case 3274:
case 2940:
case 3305:
case 84:
case 1831:
case 1320:
case 2867:
case 2922:
case 569:
case 3653:
case 2448:
case 3514:
case 1851:
case 1531:
case 486:
case 1357:
case 2618:
case 3502:
case 98:
case 2294:
case 2030:
case 3056:
case 2737:
case 864:
case 3528:
case 3446:
case 1174:
case 2420:
case 2722:
case 1338:
case 3837:
case 3222:
case 1841:
case 1271:
case 1252:
case 11:
case 3159:
case 1656:
case 3390:
case 1041:
case 2145:
case 1283:
case 4035:
case 2287:
case 1167:
case 2785:
case 1007:
case 3647:
case 3531:
case 2596:
case 3155:
case 167:
case 4061:
case 790:
case 412:
case 3519:
case 1183:
case 3628:
case 1181:
case 381:
case 2341:
case 7:
case 991:
case 1551:
case 1997:
case 3316:
case 1812:
case 3882:
case 1703:
case 518:
case 1473:
case 2788:
case 70:
case 2405:
case 4032:
case 1128:
case 1421:
case 1532:
case 2208:
case 3347:
case 374:
case 3183:
case 2153:
case 2070:
case 2073:
case 3088:
case 4052:
case 1015:
case 996:
case 3194:
case 2167:
case 3217:
case 3667:
case 1260:
case 3968:
case 3410:
case 1827:
case 4069:
case 1965:
case 2943:
case 3:
case 2393:
case 607:
case 1909:
case 3303:
case 2397:
case 2719:
case 620:
case 2665:
case 3727:
case 3592:
case 2652:
case 2229:
case 510:
case 3192:
case 1420:
case 1186:
case 1818:
case 2849:
case 930:
case 384:
case 1712:
case 144:
case 2599:
case 3292:
case 3224:
case 3404:
case 809:
case 1417:
case 1160:
case 3360:
case 597:
case 3675:
case 2247:
case 2283:
case 16:
case 593:
case 3263:
case 2307:
case 1179:
case 2637:
case 3111:
case 2364:
case 1032:
case 92:
case 1738:
case 1662:
case 4074:
case 3616:
case 2899:
case 2484:
case 1724:
case 3785:
case 1049:
case 1429:
case 1969:
case 669:
case 1955:
case 1558:
case 65:
case 2752:
case 2881:
case 1372:
case 2492:
case 2438:
case 112:
case 2408:
case 2154:
case 3597:
case 845:
case 2824:
case 1932:
case 2266:
case 2268:
case 653:
case 2550:
case 1451:
case 1399:
case 2436:
case 650:
case 1303:
case 2061:
case 1116:
case 2603:
case 1409:
case 3620:
case 1001:
case 3100:
case 4033:
case 1593:
case 1674:
case 3094:
case 1284:
case 539:
case 2379:
case 1290:
case 441:
case 3784:
case 2885:
case 3166:
case 1163:
case 894:
case 1968:
case 711:
case 3659:
case 3803:
case 1914:
case 3132:
case 3375:
case 778:
case 3929:
case 3836:
case 2516:
case 249:
case 2495:
case 3503:
case 433:
case 2871:
case 218:
case 106:
case 380:
case 294:
case 151:
case 363:
case 3650:
case 3848:
case 470:
case 3897:
case 1242:
case 3423:
case 1911:
case 1634:
case 3714:
case 2049:
case 710:
case 1777:
case 39:
case 3791:
case 640:
case 863:
case 3973:
case 2224:
case 2733:
case 3265:
case 1236:
case 1083:
case 3146:
case 3271:
case 3885:
case 2190:
case 1644:
case 1090:
case 2578:
case 530:
case 3664:
case 131:
case 1937:
case 3953:
case 570:
case 3544:
case 2450:
case 3634:
case 758:
case 875:
case 1439:
case 2091:
case 2500:
case 2088:
case 2269:
case 33:
case 986:
case 2113:
case 2524:
case 1159:
case 1839:
case 3954:
case 188:
case 563:
case 579:
case 66:
case 1762:
case 202:
case 1307:
case 2908:
case 666:
case 2778:
case 30:
case 3787:
case 1479:
case 3853:
case 1566:
case 1579:
case 2653:
case 389:
case 2579:
case 3577:
case 591:
case 2383:
case 1071:
case 477:
case 3073:
case 301:
case 1957:
case 3693:
case 1375:
case 4077:
case 2348:
case 1683:
case 346:
case 1040:
case 507:
case 1495:
case 2041:
case 3018:
case 3540:
case 2800:
case 3797:
case 3703:
case 1286:
case 2972:
case 746:
case 3605:
case 3646:
case 1974:
case 100:
case 751:
case 2956:
case 2139:
case 1954:
case 1677:
case 3551:
case 2896:
case 1713:
case 185:
case 3454:
case 3564:
case 2118:
case 3844:
case 3427:
case 3087:
case 1563:
case 3342:
case 1463:
case 3354:
case 3955:
case 3299:
case 3036:
case 3786:
case 1000:
case 1169:
case 932:
case 2726:
case 623:
case 2865:
case 3154:
case 1554:
case 2852:
case 3511:
case 474:
case 587:
case 1943:
case 2522:
case 922:
case 3999:
case 1051:
case 2853:
case 694:
case 168:
case 3051:
case 1866:
case 923:
case 1645:
case 1021:
case 446:
case 3093:
case 1632:
case 909:
case 1971:
case 837:
case 78:
case 1291:
case 1901:
case 2036:
case 1534:
case 120:
case 3276:
case 232:
case 1113:
case 2689:
case 1325:
case 3284:
case 918:
case 3096:
case 1727:
case 2376:
case 3548:
case 3854:
case 2730:
case 2004:
case 2406:
case 3115:
case 379:
case 1780:
case 2523:
case 1221:
case 701:
case 4:
case 2916:
case 3277:
case 3003:
case 494:
case 1469:
case 2556:
case 240:
case 1823:
case 2479:
case 297:
case 964:
case 3114:
case 627:
case 1094:
case 1441:
case 1846:
case 762:
case 3177:
case 904:
case 2069:
case 3216:
case 1526:
case 2644:
case 899:
case 1749:
case 941:
case 1639:
case 2967:
case 3467:
case 2766:
case 3295:
case 3145:
case 2779:
case 1262:
case 963:
case 451:
case 3820:
case 189:
case 3208:
case 1933:
case 960:
case 1313:
case 1365:
case 2209:
case 1945:
case 2909:
case 1773:
case 3499:
case 2593:
case 1405:
case 1034:
case 3464:
case 192:
case 1165:
case 260:
case 1043:
case 3582:
case 1311:
case 3936:
case 502:
case 2270:
case 1104:
case 1913:
case 2878:
case 3924:
case 1433:
case 2709:
case 406:
case 223:
case 2115:
case 3026:
case 254:
case 2467:
case 3966:
case 3554:
case 3339:
case 2875:
case 3251:
case 208:
case 2234:
case 4085:
case 2667:
case 3558:
case 2114:
case 1413:
case 3951:
case 458:
case 1890:
case 1761:
case 3468:
case 246:
case 1310:
case 2430:
case 3563:
case 1893:
case 1203:
case 567:
case 1208:
case 3437:
case 3013:
case 1230:
case 3283:
case 1025:
case 3962:
case 170:
case 2109:
case 943:
case 1547:
case 1266:
case 2586:
case 3140:
case 635:
case 1868:
case 3095:
case 1573:
case 2331:
case 4040:
case 783:
case 2735:
case 647:
case 272:
case 1461:
case 3914:
case 2753:
case 4072:
case 3442:
case 3282:
case 1033:
case 463:
case 764:
case 1891:
case 1493:
case 3169:
case 1173:
case 199:
case 3243:
case 3631:
case 1009:
case 3682:
case 322:
case 1726:
case 280:
case 1725:
case 2804:
case 2127:
case 1207:
case 614:
case 3366:
case 2369:
case 1602:
case 3505:
case 3903:
case 2772:
case 1162:
case 1758:
case 3762:
case 225:
case 3034:
case 1682:
case 2802:
case 816:
case 134:
case 2159:
case 3879:
case 2308:
case 3700:
case 2323:
case 3317:
case 2795:
case 3001:
case 1796:
case 2692:
case 808:
case 4034:
case 3522:
case 3860:
case 3615:
case 3248:
case 155:
case 3602:
case 2846:
case 2483:
case 3015:
case 3474:
case 3125:
case 1543:
case 425:
case 626:
case 3327:
case 1883:
case 2862:
case 2177:
case 3493:
case 1102:
case 1333:
case 684:
case 1498:
case 2067:
case 1329:
case 2018:
case 169:
case 2325:
case 1717:
case 2534:
case 4048:
case 2194:
case 3405:
case 686:
case 830:
case 2699:
case 126:
case 2702:
case 3583:
case 2401:
case 228:
case 3981:
case 3822:
case 3232:
case 1295:
case 3759:
case 3021:
case 4054:
case 2412:
case 1276:
case 958:
case 642:
case 2536:
case 2564:
case 1491:
case 341:
case 2870:
case 1690:
case 119:
case 4017:
case 332:
case 558:
case 3064:
case 2744:
case 2318:
case 1200:
case 310:
case 3601:
case 2658:
case 1406:
case 2864:
case 3418:
case 2535:
case 3686:
case 661:
case 404:
case 1910:
case 634:
case 1096:
case 50:
case 1575:
case 2934:
case 967:
case 2773:
case 3483:
case 772:
case 3394:
case 3240:
case 2370:
case 2245:
case 2219:
case 3829:
case 3495:
case 3827:
case 842:
case 3925:
case 2510:
case 878:
case 3374:
case 1728:
case 3707:
case 1565:
case 2879:
case 3388:
case 3656:
case 1055:
case 3553:
case 3776:
case 2898:
case 263:
case 3572:
case 321:
case 2333:
case 2023:
case 2858:
case 87:
case 2743:
case 1980:
case 1172:
case 2937:
case 1387:
case 2457:
case 2570:
case 2347:
case 1334:
case 3712:
case 3378:
case 17:
case 3549:
case 535:
case 850:
case 1211:
case 3346:
case 2942:
case 2847:
case 1267:
case 2663:
case 3443:
case 2387:
case 3619:
case 2181:
case 603:
case 4060:
case 1972:
case 2013:
case 1304:
case 173:
case 2396:
case 3328:
case 961:
case 610:
case 3988:
case 1693:
case 1458:
case 2765:
case 924:
case 910:
case 1234:
case 2587:
case 3781:
case 1247:
case 3986:
case 59:
case 1250:
case 3227:
case 324:
case 1028:
case 1687:
case 738:
case 150:
case 720:
case 2700:
case 1206:
case 3713:
case 97:
case 3905:
case 3543:
case 3432:
case 422:
case 789:
case 3830:
case 785:
case 1246:
case 3449:
case 3938:
case 1178:
case 1136:
case 375:
case 1023:
case 304:
case 1192:
case 2395:
case 3298:
case 431:
case 154:
case 3199:
case 3377:
case 1151:
case 1053:
case 247:
case 2642:
case 3983:
case 392:
case 2505:
case 2158:
case 2147:
case 3389:
case 975:
case 3557:
case 1436:
case 3858:
case 2163:
case 3343:
case 3825:
case 2385:
case 383:
case 3470:
case 2060:
case 2519:
case 2295:
case 1609:
case 2120:
case 1350:
case 629:
case 2565:
case 4016:
case 2997:
case 145:
case 3478:
case 2911:
case 2683:
case 3586:
case 4001:
case 1541:
case 3242:
case 291:
case 3870:
case 2026:
case 171:
case 417:
case 2932:
case 1078:
case 2841:
case 85:
case 436:
case 3010:
case 3774:
case 3957:
case 1754:
case 651:
case 3398:
case 2626:
case 4058:
case 1340:
case 1977:
case 3626:
case 2933:
case 1881:
case 3338:
case 153:
case 2935:
case 3254:
case 2157:
case 1278:
case 2380:
case 554:
case 2957:
case 3260:
case 2818:
case 2614:
case 4070:
case 2188:
case 1144:
case 396:
case 2343:
case 1585:
case 3895:
case 3157:
case 1489:
case 2620:
case 1097:
case 2112:
case 827:
case 3756:
case 2919:
case 1356:
case 1122:
case 2386:
case 365:
case 3050:
case 2496:
case 1624:
case 955:
case 1150:
case 1685:
case 3974:
case 428:
case 3976:
case 982:
case 1088:
case 2409:
case 2910:
case 2830:
case 1895:
case 2072:
case 2442:
case 2455:
case 435:
case 520:
case 685:
case 2526:
case 3680:
case 3728:
case 696:
case 2102:
case 3633:
case 1140:
case 2358:
case 3610:
case 1658:
case 537:
case 1918:
case 1750:
case 2750:
case 487:
case 3058:
case 2218:
case 3588:
case 3178:
case 3817:
case 3868:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1648839601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,];
var gg_b = "1648839601/";

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
