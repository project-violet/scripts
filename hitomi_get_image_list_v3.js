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
case 3153:
case 1915:
case 1198:
case 702:
case 302:
case 3457:
case 525:
case 3017:
case 2900:
case 1409:
case 3132:
case 1263:
case 2418:
case 521:
case 3057:
case 2591:
case 1798:
case 1006:
case 3120:
case 742:
case 2541:
case 3641:
case 3755:
case 830:
case 2029:
case 3115:
case 123:
case 3374:
case 2426:
case 3715:
case 1285:
case 2429:
case 2026:
case 3155:
case 1913:
case 1994:
case 1148:
case 3497:
case 1264:
case 2511:
case 3926:
case 3288:
case 2287:
case 3754:
case 4087:
case 2709:
case 3114:
case 3145:
case 88:
case 2106:
case 1758:
case 853:
case 190:
case 2109:
case 3714:
case 1284:
case 2706:
case 3097:
case 967:
case 3929:
case 1118:
case 1995:
case 3154:
case 473:
case 2957:
case 3958:
case 1914:
case 1945:
case 3795:
case 3047:
case 2048:
case 2230:
case 3918:
case 3143:
case 292:
case 2448:
case 3400:
case 187:
case 3749:
case 1027:
case 2105:
case 631:
case 1723:
case 145:
case 1150:
case 3376:
case 101:
case 3925:
case 30:
case 70:
case 141:
case 1996:
case 105:
case 2024:
case 2090:
case 2705:
case 1123:
case 3746:
case 2238:
case 3237:
case 1861:
case 2703:
case 1125:
case 866:
case 3796:
case 1404:
case 1946:
case 3672:
case 656:
case 274:
case 3923:
case 1881:
case 1062:
case 1004:
case 2407:
case 2440:
case 1949:
case 237:
case 503:
case 1725:
case 658:
case 1959:
case 467:
case 1124:
case 1405:
case 2727:
case 1916:
case 149:
case 271:
case 2023:
case 2127:
case 3128:
case 1005:
case 211:
case 2410:
case 275:
case 109:
case 2425:
case 2104:
case 104:
case 3116:
case 913:
case 634:
case 617:
case 1740:
case 3924:
case 2782:
case 3159:
case 1140:
case 1370:
case 144:
case 29:
case 2182:
case 2025:
case 1107:
case 8:
case 2878:
case 2704:
case 2762:
case 3716:
case 973:
case 1286:
case 38:
case 3585:
case 3978:
case 3320:
case 181:
case 1827:
case 1398:
case 1974:
case 2665:
case 2890:
case 2824:
case 263:
case 185:
case 1178:
case 2536:
case 2663:
case 3563:
case 3636:
case 961:
case 2840:
case 2539:
case 2571:
case 965:
case 583:
case 1461:
case 1081:
case 1862:
case 1804:
case 3344:
case 2823:
case 2309:
case 3775:
case 802:
case 3354:
case 1318:
case 2810:
case 842:
case 1622:
case 2850:
case 1630:
case 3314:
case 3175:
case 1805:
case 3393:
case 1667:
case 3343:
case 2684:
case 2761:
case 527:
case 3477:
case 2181:
case 1588:
case 1975:
case 969:
case 3502:
case 2664:
case 3564:
case 3077:
case 2078:
case 3773:
case 1326:
case 3634:
case 2534:
case 2818:
case 782:
case 950:
case 615:
case 2592:
case 3776:
case 3131:
case 1809:
case 3179:
case 1350:
case 3176:
case 1806:
case 3731:
case 1638:
case 2305:
case 239:
case 217:
case 234:
case 2303:
case 1560:
case 2826:
case 277:
case 7:
case 3:
case 2542:
case 3328:
case 2327:
case 2686:
case 2552:
case 3970:
case 1324:
case 464:
case 2689:
case 235:
case 3633:
case 2533:
case 2666:
case 3897:
case 1201:
case 2512:
case 3635:
case 3847:
case 2382:
case 3356:
case 469:
case 674:
case 637:
case 614:
case 107:
case 933:
case 368:
case 4021:
case 768:
case 1770:
case 2765:
case 4048:
case 2030:
case 99:
case 2185:
case 273:
case 2022:
case 213:
case 1971:
case 2165:
case 492:
case 911:
case 3771:
case 1678:
case 3468:
case 1064:
case 2467:
case 1002:
case 975:
case 1484:
case 2087:
case 3674:
case 650:
case 2487:
case 2763:
case 3171:
case 3139:
case 549:
case 2067:
case 1464:
case 860:
case 3967:
case 633:
case 2968:
case 103:
case 1722:
case 1065:
case 3351:
case 1485:
case 4029:
case 3675:
case 1130:
case 974:
case 1122:
case 722:
case 1083:
case 3581:
case 2681:
case 1787:
case 2218:
case 1463:
case 4018:
case 2573:
case 2184:
case 1209:
case 1167:
case 545:
case 2258:
case 3257:
case 2784:
case 2661:
case 1063:
case 1483:
case 1767:
case 2102:
case 2164:
case 3930:
case 855:
case 2579:
case 2531:
case 3631:
case 1066:
case 3192:
case 587:
case 1466:
case 49:
case 2576:
case 1942:
case 2225:
case 2980:
case 1934:
case 471:
case 590:
case 4010:
case 357:
case 757:
case 129:
case 3938:
case 411:
case 4050:
case 836:
case 3152:
case 474:
case 196:
case 4040:
case 3712:
case 4007:
case 859:
case 2766:
case 2207:
case 3208:
case 3112:
case 198:
case 2189:
case 523:
case 2786:
case 2438:
case 3752:
case 437:
case 414:
case 3080:
case 316:
case 716:
case 1227:
case 4090:
case 3060:
case 2290:
case 318:
case 3480:
case 718:
case 479:
case 776:
case 1912:
case 1941:
case 233:
case 1698:
case 3653:
case 1866:
case 958:
case 2365:
case 3277:
case 547:
case 4078:
case 2520:
case 1869:
case 1886:
case 3632:
case 2532:
case 956:
case 3613:
case 2513:
case 2594:
case 3694:
case 2383:
case 3339:
case 3141:
case 3655:
case 1648:
case 931:
case 3336:
case 2363:
case 3751:
case 2593:
case 3693:
case 1658:
case 3837:
case 2514:
case 2838:
case 1322:
case 977:
case 3111:
case 3654:
case 152:
case 934:
case 3711:
case 613:
case 3509:
case 1911:
case 1387:
case 3880:
case 2364:
case 760:
case 250:
case 360:
case 1951:
case 1629:
case 1367:
case 2543:
case 2822:
case 2421:
case 2830:
case 1650:
case 3505:
case 3334:
case 1610:
case 1401:
case 2887:
case 3888:
case 1864:
case 1802:
case 3172:
case 589:
case 431:
case 82:
case 3699:
case 2599:
case 876:
case 2596:
case 2867:
case 754:
case 264:
case 354:
case 3772:
case 3312:
case 1865:
case 417:
case 265:
case 183:
case 2389:
case 3352:
case 2386:
case 1885:
case 351:
case 751:
case 1721:
case 2627:
case 2528:
case 2270:
case 2369:
case 2559:
case 738:
case 338:
case 2101:
case 2516:
case 3616:
case 2604:
case 2662:
case 736:
case 3619:
case 1508:
case 2701:
case 2682:
case 581:
case 3582:
case 3496:
case 1704:
case 391:
case 1762:
case 4086:
case 3252:
case 2370:
case 19:
case 3099:
case 3108:
case 2740:
case 1601:
case 1782:
case 795:
case 4066:
case 1104:
case 3874:
case 4089:
case 513:
case 204:
case 424:
case 1423:
case 2956:
case 3982:
case 726:
case 209:
case 2005:
case 2790:
case 3046:
case 111:
case 3235:
case 1050:
case 1727:
case 2621:
case 1023:
case 2959:
case 115:
case 897:
case 2124:
case 37:
case 498:
case 2881:
case 1407:
case 3456:
case 2482:
case 903:
case 3016:
case 2949:
case 137:
case 3019:
case 2946:
case 496:
case 943:
case 2861:
case 1238:
case 399:
case 3416:
case 647:
case 3056:
case 799:
case 2125:
case 2462:
case 2123:
case 2750:
case 425:
case 1024:
case 2427:
case 3428:
case 3903:
case 2710:
case 245:
case 421:
case 83:
case 2723:
case 201:
case 2150:
case 3455:
case 924:
case 3015:
case 287:
case 192:
case 2129:
case 2729:
case 3055:
case 2993:
case 1957:
case 2945:
case 312:
case 685:
case 712:
case 3420:
case 2118:
case 3117:
case 2943:
case 2758:
case 3757:
case 290:
case 3879:
case 3432:
case 1109:
case 3413:
case 1706:
case 1098:
case 1551:
case 2158:
case 3157:
case 1709:
case 681:
case 3876:
case 3094:
case 1498:
case 3453:
case 772:
case 2264:
case 2718:
case 3032:
case 1870:
case 996:
case 2913:
case 3377:
case 2994:
case 2378:
case 4085:
case 2920:
case 3495:
case 2953:
case 403:
case 684:
case 3700:
case 2265:
case 3095:
case 1029:
case 921:
case 3045:
case 1418:
case 2263:
case 3014:
case 1058:
case 3797:
case 2955:
case 1947:
case 4083:
case 3493:
case 3445:
case 3414:
case 3271:
case 2198:
case 1221:
case 2770:
case 533:
case 1362:
case 1304:
case 3844:
case 3815:
case 3308:
case 1535:
case 1512:
case 2324:
case 605:
case 1689:
case 894:
case 33:
case 3479:
case 73:
case 1552:
case 3894:
case 3431:
case 3820:
case 131:
case 645:
case 1327:
case 177:
case 2976:
case 3680:
case 1829:
case 3660:
case 2979:
case 380:
case 609:
case 826:
case 1305:
case 3637:
case 3814:
case 1858:
case 397:
case 649:
case 3854:
case 1818:
case 1534:
case 1592:
case 3474:
case 1078:
case 1825:
case 2326:
case 3899:
case 3587:
case 2588:
case 1602:
case 1664:
case 840:
case 1781:
case 1478:
case 623:
case 1181:
case 2667:
case 2568:
case 3896:
case 3251:
case 2803:
case 1684:
case 1761:
case 2630:
case 3530:
case 3357:
case 2358:
case 3522:
case 732:
case 332:
case 564:
case 1823:
case 3981:
case 3849:
case 1309:
case 2461:
case 983:
case 1683:
case 452:
case 2862:
case 1539:
case 3777:
case 3859:
case 2178:
case 1807:
case 2348:
case 2481:
case 2061:
case 1663:
case 3300:
case 1840:
case 3856:
case 3473:
case 3819:
case 1824:
case 285:
case 2398:
case 2974:
case 3397:
case 281:
case 2827:
case 1977:
case 1685:
case 3966:
case 405:
case 2912:
case 3841:
case 1301:
case 3989:
case 2227:
case 3228:
case 4027:
case 2670:
case 401:
case 3042:
case 1189:
case 3092:
case 2204:
case 1438:
case 3034:
case 3216:
case 1786:
case 1769:
case 1166:
case 3259:
case 3256:
case 3434:
case 2282:
case 1766:
case 1186:
case 2205:
case 348:
case 229:
case 706:
case 3780:
case 449:
case 3160:
case 3249:
case 746:
case 990:
case 308:
case 2992:
case 3299:
case 1576:
case 2942:
case 86:
case 1980:
case 2466:
case 3052:
case 65:
case 3412:
case 987:
case 224:
case 2738:
case 3737:
case 592:
case 2486:
case 2066:
case 3471:
case 945:
case 3293:
case 3036:
case 2063:
case 3768:
case 2767:
case 4006:
case 886:
case 4009:
case 1573:
case 1184:
case 2167:
case 1681:
case 2463:
case 3788:
case 941:
case 2085:
case 1226:
case 1575:
case 1988:
case 243:
case 2065:
case 1229:
case 2485:
case 2730:
case 1968:
case 423:
case 320:
case 2722:
case 2801:
case 490:
case 2402:
case 1298:
case 2464:
case 1067:
case 3213:
case 1783:
case 909:
case 2002:
case 3294:
case 575:
case 3232:
case 1087:
case 1163:
case 511:
case 3578:
case 3677:
case 862:
case 3983:
case 1821:
case 904:
case 1785:
case 1430:
case 652:
case 487:
case 3963:
case 3255:
case 59:
case 1248:
case 2607:
case 2508:
case 3507:
case 3608:
case 1556:
case 1701:
case 848:
case 3540:
case 3836:
case 2863:
case 629:
case 846:
case 1662:
case 2883:
case 1559:
case 3839:
case 3472:
case 3871:
case 2721:
case 1528:
case 1627:
case 1270:
case 36:
case 624:
case 165:
case 1389:
case 283:
case 1366:
case 3590:
case 625:
case 3231:
case 3360:
case 3279:
case 2884:
case 1603:
case 3525:
case 2625:
case 3276:
case 1599:
case 3380:
case 989:
case 1021:
case 2650:
case 3550:
case 2972:
case 3337:
case 1421:
case 3529:
case 1595:
case 1384:
case 3041:
case 893:
case 485:
case 2951:
case 3441:
case 1364:
case 539:
case 2911:
case 3526:
case 2517:
case 3834:
case 3518:
case 1554:
case 517:
case 534:
case 3892:
case 577:
case 1606:
case 2557:
case 2658:
case 3091:
case 4061:
case 1838:
case 2991:
case 1555:
case 3835:
case 2648:
case 3548:
case 3647:
case 2500:
case 3600:
case 1363:
case 531:
case 788:
case 535:
case 3852:
case 1532:
case 2886:
case 1513:
case 1594:
case 1385:
case 947:
case 1520:
case 2869:
case 3697:
case 2597:
case 3833:
case 3411:
case 558:
case 1365:
case 2889:
case 3274:
case 133:
case 2156:
case 79:
case 39:
case 3182:
case 2759:
case 3025:
case 2877:
case 3878:
case 1108:
case 3762:
case 3425:
case 2719:
case 1874:
case 3104:
case 1499:
case 2116:
case 3601:
case 2924:
case 1212:
case 817:
case 834:
case 195:
case 2159:
case 1708:
case 2128:
case 3050:
case 311:
case 839:
case 3410:
case 3423:
case 375:
case 775:
case 2940:
case 1449:
case 682:
case 315:
case 457:
case 17:
case 1049:
case 593:
case 128:
case 371:
case 1962:
case 1521:
case 2923:
case 520:
case 737:
case 858:
case 1234:
case 1016:
case 337:
case 2196:
case 668:
case 2237:
case 1416:
case 4037:
case 1459:
case 374:
case 666:
case 1905:
case 379:
case 476:
case 922:
case 4060:
case 3705:
case 2331:
case 2746:
case 3424:
case 1875:
case 2376:
case 2925:
case 1242:
case 319:
case 416:
case 3490:
case 831:
case 2918:
case 2143:
case 2373:
case 392:
case 792:
case 1015:
case 3448:
case 1044:
case 2000:
case 2743:
case 1415:
case 1444:
case 3048:
case 1055:
case 2793:
case 3109:
case 1879:
case 2714:
case 508:
case 2268:
case 1053:
case 3098:
case 3551:
case 957:
case 1420:
case 1117:
case 2154:
case 1453:
case 2497:
case 172:
case 3498:
case 3511:
case 548:
case 2926:
case 1032:
case 2754:
case 4088:
case 68:
case 1157:
case 3709:
case 2114:
case 2145:
case 2375:
case 1020:
case 3106:
case 1876:
case 2744:
case 3429:
case 1495:
case 1443:
case 140:
case 1147:
case 2641:
case 2755:
case 3029:
case 2115:
case 2144:
case 100:
case 3426:
case 630:
case 2948:
case 2194:
case 2132:
case 3418:
case 1236:
case 2417:
case 1045:
case 2691:
case 1454:
case 3591:
case 1093:
case 2753:
case 242:
case 918:
case 1271:
case 2713:
case 976:
case 202:
case 2794:
case 1493:
case 2017:
case 2732:
case 3018:
case 2316:
case 3362:
case 758:
case 814:
case 837:
case 3848:
case 874:
case 3382:
case 756:
case 454:
case 3689:
case 2566:
case 879:
case 1031:
case 2897:
case 64:
case 588:
case 731:
case 2569:
case 13:
case 3686:
case 2652:
case 2970:
case 60:
case 586:
case 1431:
case 451:
case 3070:
case 2399:
case 3826:
case 777:
case 2642:
case 1680:
case 317:
case 180:
case 717:
case 3470:
case 3829:
case 3303:
case 1895:
case 2731:
case 1637:
case 3305:
case 875:
case 2857:
case 1893:
case 811:
case 339:
case 436:
case 1272:
case 871:
case 3818:
case 3534:
case 2692:
case 2776:
case 438:
case 2349:
case 2179:
case 815:
case 959:
case 3825:
case 3078:
case 1899:
case 1896:
case 1251:
case 2173:
case 2343:
case 3684:
case 2584:
case 3478:
case 1074:
case 2477:
case 3850:
case 1846:
case 3306:
case 2175:
case 2345:
case 1357:
case 2393:
case 3823:
case 1849:
case 2775:
case 602:
case 3539:
case 2639:
case 1073:
case 955:
case 1816:
case 2174:
case 1473:
case 56:
case 1347:
case 1177:
case 2355:
case 951:
case 1856:
case 1291:
case 1300:
case 3840:
case 2353:
case 938:
case 3824:
case 1475:
case 363:
case 253:
case 763:
case 28:
case 2332:
case 2585:
case 2313:
case 936:
case 1075:
case 3290:
case 3301:
case 2735:
case 1989:
case 864:
case 276:
case 654:
case 2080:
case 1042:
case 40:
case 2460:
case 22:
case 1986:
case 942:
case 1228:
case 1570:
case 3769:
case 2112:
case 2133:
case 3166:
case 3438:
case 2752:
case 2152:
case 2712:
case 2037:
case 3038:
case 2733:
case 3207:
case 1492:
case 2208:
case 540:
case 2372:
case 148:
case 1180:
case 2938:
case 106:
case 1760:
case 3250:
case 1160:
case 638:
case 3223:
case 108:
case 512:
case 367:
case 257:
case 767:
case 1433:
case 1052:
case 1299:
case 3576:
case 865:
case 2679:
case 1737:
case 1012:
case 1851:
case 3531:
case 655:
case 910:
case 3960:
case 1293:
case 3258:
case 2257:
case 2561:
case 3661:
case 2922:
case 442:
case 3102:
case 1872:
case 3164:
case 3702:
case 222:
case 402:
case 2581:
case 1788:
case 3218:
case 3573:
case 1071:
case 594:
case 2675:
case 1902:
case 599:
case 2311:
case 2967:
case 3968:
case 1984:
case 3229:
case 2351:
case 3574:
case 57:
case 660:
case 2488:
case 2139:
case 3298:
case 1253:
case 3067:
case 850:
case 3163:
case 2771:
case 1677:
case 1578:
case 1220:
case 526:
case 2468:
case 3467:
case 51:
case 313:
case 1244:
case 3785:
case 713:
case 410:
case 3422:
case 2200:
case 3765:
case 2391:
case 3030:
case 3185:
case 3022:
case 470:
case 1540:
case 3556:
case 3701:
case 1836:
case 1839:
case 1472:
case 3101:
case 657:
case 2504:
case 2921:
case 482:
case 3662:
case 2352:
case 4:
case 251:
case 761:
case 3627:
case 3270:
case 3369:
case 1524:
case 365:
case 255:
case 765:
case 2696:
case 3596:
case 618:
case 1360:
case 2503:
case 3603:
case 254:
case 62:
case 616:
case 1380:
case 2172:
case 2342:
case 1276:
case 1525:
case 678:
case 2699:
case 3599:
case 3021:
case 1523:
case 3421:
case 3605:
case 1337:
case 350:
case 260:
case 597:
case 1368:
case 3595:
case 3384:
case 2860:
case 1275:
case 1526:
case 48:
case 1388:
case 2880:
case 3364:
case 3302:
case 1518:
case 1834:
case 1491:
case 3554:
case 1892:
case 162:
case 1273:
case 2751:
case 3593:
case 873:
case 2693:
case 1091:
case 1657:
case 2645:
case 2614:
case 3838:
case 9:
case 2655:
case 3555:
case 1548:
case 1835:
case 1600:
case 2336:
case 2339:
case 188:
case 2371:
case 2141:
case 3278:
case 2277:
case 4077:
case 3520:
case 1852:
case 1011:
case 3594:
case 1451:
case 733:
case 1274:
case 2653:
case 3553:
case 1411:
case 968:
case 576:
case 3283:
case 3406:
case 2493:
case 1457:
case 2414:
case 518:
case 2197:
case 3944:
case 2239:
case 1720:
case 2045:
case 3263:
case 578:
case 1417:
case 1057:
case 1691:
case 2454:
case 4036:
case 1753:
case 889:
case 1120:
case 516:
case 3955:
case 3409:
case 1132:
case 1115:
case 723:
case 200:
case 420:
case 2700:
case 3265:
case 1641:
case 2095:
case 884:
case 2747:
case 1155:
case 3913:
case 3994:
case 2377:
case 3378:
case 3285:
case 1744:
case 1715:
case 2495:
case 2443:
case 1193:
case 2020:
case 2876:
case 3202:
case 2013:
case 1288:
case 3718:
case 2032:
case 1754:
case 2420:
case 3995:
case 3118:
case 2117:
case 1154:
case 3758:
case 790:
case 1745:
case 885:
case 2432:
case 1714:
case 2879:
case 390:
case 1268:
case 2413:
case 1651:
case 2053:
case 3126:
case 1743:
case 3729:
case 2055:
case 1958:
case 3914:
case 2455:
case 1447:
case 2044:
case 2015:
case 1400:
case 787:
case 110:
case 1918:
case 3129:
case 2242:
case 1925:
case 4042:
case 1280:
case 3710:
case 63:
case 2875:
case 2028:
case 701:
case 1376:
case 1146:
case 745:
case 301:
case 3150:
case 294:
case 1331:
case 1746:
case 3750:
case 705:
case 741:
case 305:
case 3110:
case 2903:
case 1672:
case 2019:
case 1008:
case 3462:
case 1799:
case 2873:
case 3725:
case 807:
case 4092:
case 3881:
case 2234:
case 3949:
case 446:
case 3916:
case 3190:
case 2904:
case 228:
case 2521:
case 408:
case 2962:
case 3959:
case 27:
case 3956:
case 709:
case 2982:
case 3790:
case 2235:
case 3003:
case 3740:
case 1924:
case 2233:
case 2708:
case 2874:
case 1116:
case 2496:
case 1119:
case 3286:
case 1716:
case 2927:
case 2252:
case 3370:
case 744:
case 344:
case 3107:
case 2108:
case 781:
case 2075:
case 2828:
case 536:
case 672:
case 1313:
case 2475:
case 153:
case 385:
case 890:
case 612:
case 3398:
case 2397:
case 3974:
case 2241:
case 538:
case 4041:
case 1808:
case 3178:
case 2347:
case 3348:
case 2177:
case 3481:
case 551:
case 4091:
case 1563:
case 2300:
case 2856:
case 2819:
case 1774:
case 96:
case 3461:
case 1583:
case 3862:
case 1639:
case 2859:
case 1671:
case 2317:
case 3318:
case 232:
case 488:
case 2849:
case 3630:
case 2530:
case 1175:
case 1345:
case 3358:
case 789:
case 2961:
case 2522:
case 389:
case 3622:
case 384:
case 600:
case 784:
case 4051:
case 2668:
case 3329:
case 823:
case 1173:
case 1343:
case 1395:
case 1077:
case 2474:
case 1773:
case 2688:
case 2587:
case 3975:
case 3687:
case 2211:
case 1564:
case 1776:
case 3323:
case 67:
case 2854:
case 1634:
case 849:
case 1692:
case 560:
case 61:
case 4072:
case 1346:
case 3350:
case 809:
case 3638:
case 1779:
case 2538:
case 2637:
case 2893:
case 695:
case 3976:
case 1642:
case 691:
case 3325:
case 845:
case 1586:
case 23:
case 1970:
case 801:
case 1652:
case 2894:
case 986:
case 2076:
case 1569:
case 1328:
case 2031:
case 1566:
case 1633:
case 1897:
case 841:
case 805:
case 3324:
case 1589:
case 166:
case 1319:
case 2308:
case 1847:
case 1635:
case 2855:
case 347:
case 3170:
case 699:
case 747:
case 168:
case 3770:
case 307:
case 2815:
case 991:
case 1200:
case 1247:
case 852:
case 2244:
case 4015:
case 2213:
case 3064:
case 472:
case 4094:
case 4013:
case 4032:
case 1088:
case 1136:
case 1771:
case 4020:
case 3577:
case 3678:
case 2578:
case 2985:
case 2677:
case 2220:
case 928:
case 3084:
case 1341:
case 1297:
case 3402:
case 293:
case 1068:
case 1674:
case 2965:
case 4043:
case 2295:
case 3065:
case 2243:
case 3485:
case 1351:
case 703:
case 303:
case 3465:
case 440:
case 3130:
case 2964:
case 743:
case 2168:
case 3167:
case 2039:
case 1581:
case 4054:
case 2436:
case 1217:
case 2788:
case 3787:
case 2254:
case 1930:
case 2471:
case 4014:
case 1257:
case 2293:
case 2214:
case 3063:
case 1561:
case 4093:
case 2768:
case 3767:
case 3206:
case 3089:
case 510:
case 3469:
case 1134:
case 324:
case 3738:
case 2737:
case 2012:
case 1679:
case 3486:
case 3203:
case 3066:
case 1631:
case 2299:
case 3138:
case 3069:
case 3489:
case 85:
case 491:
case 570:
case 66:
case 1734:
case 1742:
case 2780:
case 912:
case 4049:
case 2249:
case 428:
case 3992:
case 2760:
case 3205:
case 4046:
case 329:
case 729:
case 499:
case 396:
case 2434:
case 3282:
case 3935:
case 4019:
case 1152:
case 3204:
case 3262:
case 1437:
case 2216:
case 4016:
case 1112:
case 1133:
case 2986:
case 542:
case 3670:
case 2570:
case 321:
case 1080:
case 2042:
case 1460:
case 2966:
case 3933:
case 325:
case 725:
case 1060:
case 2841:
case 118:
case 1735:
case 2442:
case 3698:
case 3866:
case 2833:
case 2812:
case 803:
case 3941:
case 620:
case 4074:
case 1613:
case 1620:
case 3869:
case 1371:
case 286:
case 93:
case 3547:
case 3648:
case 2647:
case 1741:
case 3500:
case 1336:
case 3322:
case 1111:
case 3330:
case 3557:
case 3658:
case 1693:
case 1837:
case 1645:
case 3261:
case 1151:
case 1509:
case 4073:
case 3618:
case 3517:
case 2518:
case 2491:
case 980:
case 2892:
case 262:
case 752:
case 1711:
case 2441:
case 3387:
case 2388:
case 997:
case 3629:
case 3367:
case 693:
case 2368:
case 1695:
case 2041:
case 1643:
case 3951:
case 3650:
case 3972:
case 2337:
case 3338:
case 1505:
case 530:
case 1392:
case 3610:
case 3623:
case 1649:
case 2525:
case 3625:
case 3401:
case 43:
case 821:
case 1888:
case 2380:
case 1172:
case 1342:
case 154:
case 932:
case 1772:
case 2360:
case 1503:
case 3624:
case 824:
case 1333:
case 1312:
case 3865:
case 2590:
case 151:
case 75:
case 1352:
case 35:
case 26:
case 3885:
case 553:
case 1921:
case 2839:
case 2472:
case 497:
case 2871:
case 829:
case 3508:
case 2608:
case 2836:
case 3863:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1760184002/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,];
var gg_b = "1760184002/";

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
