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
case 1450:
case 828:
case 304:
case 312:
case 1255:
case 1680:
case 293:
case 2300:
case 923:
case 3426:
case 3697:
case 2510:
case 3692:
case 3260:
case 310:
case 13:
case 2576:
case 1520:
case 1310:
case 3855:
case 1488:
case 518:
case 1093:
case 2422:
case 419:
case 2173:
case 896:
case 501:
case 1354:
case 570:
case 4029:
case 4062:
case 2404:
case 3577:
case 2448:
case 2554:
case 1412:
case 1795:
case 3958:
case 990:
case 2407:
case 2859:
case 2281:
case 1357:
case 222:
case 1994:
case 1352:
case 4064:
case 572:
case 1417:
case 1279:
case 2402:
case 3398:
case 1414:
case 121:
case 2427:
case 644:
case 533:
case 2793:
case 477:
case 992:
case 969:
case 1627:
case 2926:
case 3461:
case 1168:
case 2019:
case 2614:
case 62:
case 2764:
case 1916:
case 343:
case 809:
case 2767:
case 1602:
case 3289:
case 3185:
case 119:
case 207:
case 4093:
case 1970:
case 585:
case 3845:
case 1584:
case 177:
case 1834:
case 1067:
case 1648:
case 1889:
case 1251:
case 2906:
case 1607:
case 2387:
case 3546:
case 1064:
case 1604:
case 2965:
case 1587:
case 1622:
case 1669:
case 2339:
case 1719:
case 1009:
case 1837:
case 2688:
case 2849:
case 1308:
case 2038:
case 2544:
case 3478:
case 3725:
case 957:
case 2868:
case 2547:
case 652:
case 2132:
case 3904:
case 4030:
case 631:
case 2508:
case 1344:
case 3023:
case 3533:
case 645:
case 2542:
case 1328:
case 3616:
case 2480:
case 3663:
case 3766:
case 3924:
case 2528:
case 2189:
case 2285:
case 749:
case 2650:
case 686:
case 2318:
case 1760:
case 91:
case 1610:
case 2408:
case 1676:
case 1773:
case 3957:
case 2447:
case 642:
case 224:
case 2444:
case 2620:
case 2299:
case 1075:
case 574:
case 640:
case 759:
case 2830:
case 4068:
case 2580:
case 511:
case 3053:
case 1418:
case 2442:
case 1193:
case 3394:
case 1380:
case 2060:
case 3779:
case 1540:
case 1221:
case 1895:
case 508:
case 353:
case 563:
case 2396:
case 1652:
case 556:
case 1596:
case 300:
case 3561:
case 580:
case 4071:
case 1487:
case 3910:
case 2893:
case 3446:
case 3490:
case 1654:
case 3821:
case 1059:
case 3751:
case 2034:
case 1304:
case 2684:
case 3474:
case 1935:
case 2507:
case 1322:
case 2089:
case 2454:
case 2548:
case 2504:
case 3477:
case 3908:
case 995:
case 3947:
case 2864:
case 3115:
case 2457:
case 3219:
case 2037:
case 2809:
case 2312:
case 1732:
case 2687:
case 1986:
case 428:
case 726:
case 2527:
case 1819:
case 2682:
case 2933:
case 1737:
case 3123:
case 3472:
case 2452:
case 3942:
case 939:
case 1327:
case 2138:
case 2502:
case 2829:
case 1517:
case 1071:
case 2191:
case 2524:
case 3928:
case 1734:
case 4075:
case 1400:
case 6:
case 3526:
case 3363:
case 46:
case 1109:
case 2223:
case 3370:
case 2618:
case 1642:
case 279:
case 3238:
case 78:
case 2749:
case 638:
case 1266:
case 1628:
case 1167:
case 529:
case 798:
case 1129:
case 661:
case 1049:
case 2203:
case 3813:
case 315:
case 217:
case 1420:
case 3866:
case 109:
case 3085:
case 1608:
case 2215:
case 3456:
case 3805:
case 2410:
case 3307:
case 3732:
case 3986:
case 1908:
case 1947:
case 2743:
case 1219:
case 750:
case 4081:
case 453:
case 2690:
case 3935:
case 1474:
case 3369:
case 3322:
case 3512:
case 127:
case 768:
case 466:
case 2045:
case 691:
case 2229:
case 2262:
case 703:
case 400:
case 3071:
case 1745:
case 285:
case 2498:
case 2267:
case 387:
case 731:
case 3734:
case 1928:
case 2166:
case 507:
case 2051:
case 2431:
case 3327:
case 3789:
case 414:
case 2105:
case 1043:
case 3514:
case 2918:
case 3302:
case 67:
case 49:
case 3737:
case 3266:
case 2785:
case 2563:
case 2803:
case 1825:
case 2982:
case 2633:
case 1686:
case 2987:
case 965:
case 3068:
case 843:
case 4053:
case 1506:
case 3891:
case 589:
case 3225:
case 3129:
case 3162:
case 2984:
case 805:
case 3049:
case 55:
case 744:
case 1578:
case 836:
case 2435:
case 1392:
case 797:
case 2101:
case 3676:
case 2656:
case 3760:
case 3358:
case 2378:
case 2486:
case 3610:
case 973:
case 1053:
case 3418:
case 1952:
case 3193:
case 951:
case 593:
case 932:
case 1755:
case 2594:
case 284:
case 2121:
case 1801:
case 2900:
case 100:
case 1561:
case 171:
case 2672:
case 810:
case 1631:
case 1081:
case 272:
case 1698:
case 1779:
case 2079:
case 3130:
case 1199:
case 328:
case 19:
case 812:
case 3059:
case 102:
case 4043:
case 1490:
case 2781:
case 3654:
case 3201:
case 1976:
case 964:
case 3487:
case 2811:
case 319:
case 3440:
case 1185:
case 3624:
case 105:
case 3029:
case 3602:
case 3963:
case 776:
case 698:
case 1237:
case 3627:
case 3832:
case 2390:
case 3622:
case 3669:
case 3587:
case 3837:
case 68:
case 3009:
case 3064:
case 738:
case 1546:
case 3067:
case 7:
case 1590:
case 2988:
case 3584:
case 3834:
case 1969:
case 1143:
case 412:
case 2715:
case 1023:
case 404:
case 626:
case 2066:
case 2151:
case 1948:
case 1907:
case 2703:
case 2535:
case 2606:
case 1725:
case 2013:
case 3171:
case 54:
case 1924:
case 3738:
case 2494:
case 2025:
case 2917:
case 410:
case 1616:
case 941:
case 579:
case 1766:
case 1663:
case 1902:
case 3328:
case 2626:
case 2497:
case 1883:
case 1426:
case 1697:
case 3500:
case 962:
case 211:
case 3255:
case 802:
case 2463:
case 3030:
case 2275:
case 1841:
case 2940:
case 89:
case 1694:
case 1181:
case 4015:
case 3241:
case 960:
case 3310:
case 853:
case 110:
case 1260:
case 33:
case 1273:
case 983:
case 1465:
case 1692:
case 800:
case 2377:
case 934:
case 1879:
case 3412:
case 2141:
case 282:
case 1574:
case 443:
case 740:
case 659:
case 3354:
case 1153:
case 3992:
case 181:
case 2661:
case 1331:
case 2711:
case 3997:
case 1398:
case 321:
case 136:
case 3279:
case 3175:
case 1721:
case 2372:
case 742:
case 2598:
case 3352:
case 290:
case 1710:
case 3897:
case 1000:
case 2981:
case 1880:
case 1530:
case 3641:
case 354:
case 2278:
case 564:
case 313:
case 2675:
case 1140:
case 1858:
case 1020:
case 3161:
case 3056:
case 516:
case 922:
case 627:
case 3436:
case 3892:
case 2180:
case 3798:
case 3731:
case 2489:
case 437:
case 615:
case 2261:
case 3077:
case 3511:
case 376:
case 361:
case 551:
case 2437:
case 3321:
case 4084:
case 338:
case 3960:
case 2896:
case 3973:
case 95:
case 1757:
case 3301:
case 3:
case 1941:
case 88:
case 1471:
case 3248:
case 1824:
case 257:
case 2671:
case 2784:
case 2739:
case 1529:
case 1188:
case 548:
case 2814:
case 3222:
case 137:
case 989:
case 1827:
case 3204:
case 1983:
case 2329:
case 2362:
case 1869:
case 2367:
case 1637:
case 2782:
case 3046:
case 3126:
case 1848:
case 1150:
case 1689:
case 2812:
case 1567:
case 2985:
case 2309:
case 1039:
case 3645:
case 1459:
case 1084:
case 2364:
case 3202:
case 1114:
case 69:
case 47:
case 3366:
case 2047:
case 602:
case 2226:
case 2127:
case 614:
case 1338:
case 2668:
case 2718:
case 3305:
case 2124:
case 2591:
case 1216:
case 2888:
case 2649:
case 1475:
case 4000:
case 867:
case 1728:
case 2850:
case 1951:
case 2028:
case 2206:
case 671:
case 3816:
case 1744:
case 2122:
case 688:
case 1708:
case 4020:
case 2042:
case 449:
case 2473:
case 1747:
case 3515:
case 2460:
case 3033:
case 3325:
case 2104:
case 2438:
case 18:
case 1780:
case 2491:
case 3355:
case 3423:
case 3172:
case 4050:
case 3177:
case 605:
case 2157:
case 3415:
case 4088:
case 3341:
case 534:
case 3995:
case 1360:
case 32:
case 3174:
case 1373:
case 709:
case 2154:
case 506:
case 2176:
case 1096:
case 2277:
case 2419:
case 560:
case 3061:
case 3156:
case 1852:
case 2999:
case 3831:
case 849:
case 1462:
case 3581:
case 303:
case 2274:
case 1120:
case 247:
case 1040:
case 1298:
case 1467:
case 787:
case 126:
case 1464:
case 1857:
case 2693:
case 467:
case 2796:
case 3252:
case 1905:
case 1727:
case 979:
case 2142:
case 2887:
case 1118:
case 2069:
case 2022:
case 3345:
case 2004:
case 2664:
case 2839:
case 1966:
case 2128:
case 2048:
case 3938:
case 2884:
case 1571:
case 2024:
case 2495:
case 1748:
case 1925:
case 2629:
case 3351:
case 535:
case 2108:
case 2532:
case 604:
case 2027:
case 2246:
case 2915:
case 612:
case 2882:
case 1619:
case 295:
case 3190:
case 2788:
case 1828:
case 1050:
case 397:
case 3383:
case 636:
case 2818:
case 1286:
case 925:
case 3605:
case 3242:
case 1808:
case 678:
case 796:
case 1182:
case 1568:
case 1847:
case 3835:
case 3763:
case 3585:
case 159:
case 2368:
case 1638:
case 1088:
case 3770:
case 1549:
case 681:
case 486:
case 788:
case 2545:
case 2890:
case 3337:
case 3966:
case 3702:
case 3012:
case 468:
case 1345:
case 766:
case 2282:
case 2846:
case 445:
case 3727:
case 1411:
case 3493:
case 3769:
case 3722:
case 2186:
case 3704:
case 431:
case 248:
case 3925:
case 2284:
case 3571:
case 265:
case 714:
case 2135:
case 2551:
case 2765:
case 1208:
case 1026:
case 2833:
case 2615:
case 1919:
case 2063:
case 842:
case 2016:
case 1625:
case 2962:
case 3235:
case 1190:
case 144:
case 1244:
case 197:
case 3050:
case 3088:
case 3549:
case 1770:
case 1006:
case 1613:
case 1835:
case 1763:
case 2967:
case 1666:
case 3808:
case 2964:
case 42:
case 3847:
case 3568:
case 3182:
case 1605:
case 2385:
case 1065:
case 1242:
case 2405:
case 1172:
case 1797:
case 2993:
case 677:
case 497:
case 2856:
case 2413:
case 1078:
case 592:
case 50:
case 38:
case 4026:
case 1174:
case 2353:
case 2541:
case 970:
case 3360:
case 398:
case 1403:
case 12:
case 1210:
case 1177:
case 876:
case 2097:
case 3901:
case 813:
case 3120:
case 3040:
case 230:
case 3695:
case 168:
case 103:
case 918:
case 2381:
case 1601:
case 3096:
case 186:
case 1257:
case 1061:
case 3409:
case 2761:
case 232:
case 2877:
case 984:
case 3100:
case 326:
case 3464:
case 3298:
case 2874:
case 152:
case 273:
case 131:
case 3467:
case 3854:
case 3827:
case 140:
case 3632:
case 235:
case 1222:
case 1165:
case 781:
case 2643:
case 2746:
case 3562:
case 3529:
case 3188:
case 4077:
case 3802:
case 3319:
case 476:
case 696:
case 778:
case 1248:
case 1207:
case 461:
case 1106:
case 2217:
case 844:
case 2479:
case 1202:
case 1224:
case 3150:
case 3848:
case 299:
case 1090:
case 4072:
case 142:
case 3039:
case 2170:
case 1126:
case 2968:
case 3869:
case 3822:
case 2214:
case 3945:
case 3117:
case 3728:
case 3263:
case 2566:
case 2323:
case 2685:
case 3270:
case 2513:
case 704:
case 2806:
case 3742:
case 2086:
case 2865:
case 1937:
case 2733:
case 2636:
case 454:
case 710:
case 413:
case 1515:
case 1033:
case 1683:
case 2303:
case 1932:
case 975:
case 4056:
case 1863:
case 2315:
case 2441:
case 3112:
case 1258:
case 852:
case 1599:
case 3530:
case 3776:
case 3673:
case 234:
case 2653:
case 2399:
case 1897:
case 3710:
case 886:
case 963:
case 908:
case 1892:
case 1056:
case 3468:
case 3196:
case 3297:
case 868:
case 349:
case 2878:
case 956:
case 3449:
case 1655:
case 113:
case 3979:
case 3593:
case 1511:
case 2197:
case 3752:
case 609:
case 2194:
case 262:
case 82:
case 705:
case 743:
case 1679:
case 547:
case 594:
case 1178:
case 2681:
case 2774:
case 283:
case 3754:
case 258:
case 2777:
case 2192:
case 260:
case 138:
case 2068:
case 1119:
case 1215:
case 1388:
case 3823:
case 4060:
case 2129:
case 2162:
case 2588:
case 2838:
case 117:
case 2891:
case 1990:
case 3365:
case 3785:
case 179:
case 3326:
case 2167:
case 2628:
case 2213:
case 3570:
case 660:
case 1749:
case 3736:
case 3633:
case 3815:
case 3982:
case 3083:
case 1618:
case 1223:
case 683:
case 1768:
case 2109:
case 1829:
case 1502:
case 2789:
case 3431:
case 634:
case 2734:
case 3051:
case 3267:
case 3498:
case 2071:
case 505:
case 1314:
case 1933:
case 3264:
case 1032:
case 1317:
case 2514:
case 3209:
case 2324:
case 1457:
case 3646:
case 1522:
case 2732:
case 1312:
case 2348:
case 1809:
case 1037:
case 3262:
case 3229:
case 3045:
case 747:
case 2512:
case 1454:
case 1089:
case 3690:
case 2935:
case 125:
case 3920:
case 578:
case 3781:
case 3674:
case 2059:
case 228:
case 2487:
case 3811:
case 370:
case 2657:
case 3293:
case 1340:
case 3672:
case 2482:
case 4034:
case 3900:
case 2596:
case 333:
case 2221:
case 85:
case 4037:
case 1396:
case 3361:
case 820:
case 1060:
case 1600:
case 1775:
case 3121:
case 512:
case 3594:
case 384:
case 2998:
case 1580:
case 3899:
case 2931:
case 1620:
case 1444:
case 1558:
case 1974:
case 26:
case 318:
case 3378:
case 3486:
case 3592:
case 1447:
case 510:
case 3656:
case 699:
case 479:
case 2773:
case 3101:
case 1480:
case 2791:
case 3917:
case 2342:
case 1318:
case 3494:
case 1285:
case 1189:
case 2738:
case 3497:
case 1137:
case 2328:
case 1542:
case 2518:
case 630:
case 3914:
case 1508:
case 1132:
case 790:
case 673:
case 493:
case 1547:
case 1868:
case 3715:
case 3836:
case 2344:
case 3665:
case 1038:
case 632:
case 2347:
case 2308:
case 1688:
case 3013:
case 3703:
case 3606:
case 3912:
case 3151:
case 3885:
case 4095:
case 2719:
case 2669:
case 1339:
case 2622:
case 2587:
case 2834:
case 1387:
case 2607:
case 3271:
case 1729:
case 1762:
case 1612:
case 2889:
case 2648:
case 1767:
case 1382:
case 723:
case 2149:
case 2970:
case 107:
case 2624:
case 2168:
case 2582:
case 2627:
case 1709:
case 1764:
case 1614:
case 1552:
case 1793:
case 3001:
case 566:
case 1427:
case 3661:
case 949:
case 571:
case 2352:
case 2994:
case 122:
case 1424:
case 3372:
case 1095:
case 991:
case 308:
case 2279:
case 1402:
case 824:
case 363:
case 382:
case 502:
case 757:
case 2412:
case 2795:
case 1554:
case 2357:
case 59:
case 3374:
case 407:
case 2093:
case 1404:
case 1557:
case 2310:
case 3678:
case 2241:
case 3356:
case 1875:
case 15:
case 1576:
case 23:
case 311:
case 4091:
case 2873:
case 648:
case 1961:
case 2860:
case 3470:
case 3940:
case 769:
case 2450:
case 2030:
case 3179:
case 3463:
case 1300:
case 3416:
case 193:
case 2680:
case 2255:
case 1531:
case 108:
case 3095:
case 1881:
case 2980:
case 236:
case 163:
case 1598:
case 818:
case 799:
case 3696:
case 3793:
case 1711:
case 2331:
case 1661:
case 475:
case 695:
case 2572:
case 913:
case 2577:
case 320:
case 281:
case 2153:
case 2011:
case 735:
case 2701:
case 3422:
case 528:
case 639:
case 884:
case 3281:
case 2574:
case 3407:
case 1141:
case 3554:
case 278:
case 4025:
case 9:
case 210:
case 2260:
case 3320:
case 3510:
case 2181:
case 174:
case 35:
case 56:
case 2406:
case 1678:
case 1799:
case 3730:
case 961:
case 2099:
case 1416:
case 393:
case 4005:
case 1470:
case 2841:
case 3961:
case 2426:
case 870:
case 111:
case 4013:
case 1853:
case 4066:
case 61:
case 942:
case 647:
case 1268:
case 2533:
case 694:
case 1723:
case 1626:
case 1494:
case 3528:
case 3285:
case 2924:
case 3134:
case 1333:
case 3480:
case 2616:
case 2713:
case 1917:
case 1025:
case 2478:
case 2386:
case 2725:
case 411:
case 1606:
case 3091:
case 2948:
case 940:
case 3544:
case 389:
case 1885:
case 1151:
case 3038:
case 3688:
case 3849:
case 885:
case 1836:
case 2023:
case 1715:
case 2143:
case 1005:
case 2969:
case 2922:
case 1586:
case 2335:
case 955:
case 3508:
case 3132:
case 2904:
case 3868:
case 3387:
case 3762:
case 3729:
case 3612:
case 1346:
case 4001:
case 2845:
case 175:
case 1988:
case 783:
case 3243:
case 3339:
case 3384:
case 2232:
case 760:
case 2136:
case 3764:
case 482:
case 2237:
case 3709:
case 3871:
case 762:
case 205:
case 1950:
case 2185:
case 3767:
case 3617:
case 2446:
case 1677:
case 2910:
case 92:
case 4051:
case 170:
case 101:
case 29:
case 2295:
case 2199:
case 446:
case 2821:
case 1674:
case 172:
case 2081:
case 253:
case 1361:
case 288:
case 3759:
case 1900:
case 133:
case 2801:
case 3211:
case 3340:
case 2397:
case 1899:
case 1041:
case 2755:
case 931:
case 3060:
case 3600:
case 1597:
case 2394:
case 2952:
case 2053:
case 3447:
case 1656:
case 1101:
case 945:
case 3408:
case 53:
case 856:
case 1378:
case 968:
case 1592:
case 4083:
case 3195:
case 118:
case 950:
case 3444:
case 3620:
case 808:
case 1435:
case 863:
case 2866:
case 317:
case 2506:
case 2635:
case 1365:
case 3990:
case 34:
case 1984:
case 1987:
case 2686:
case 3410:
case 2805:
case 484:
case 623:
case 2456:
case 3215:
case 3119:
case 3476:
case 3618:
case 3768:
case 2526:
case 2316:
case 1083:
case 3749:
case 2291:
case 2825:
case 1516:
case 379:
case 1918:
case 3452:
case 2043:
case 1105:
case 1209:
case 3933:
case 3527:
case 3032:
case 3317:
case 1166:
case 1267:
case 185:
case 3191:
case 1113:
case 773:
case 690:
case 3829:
case 3502:
case 1431:
case 3548:
case 3867:
case 3089:
case 2474:
case 3507:
case 1690:
case 3684:
case 1262:
case 1125:
case 1045:
case 577:
case 3034:
case 3687:
case 3312:
case 60:
case 3037:
case 3809:
case 3864:
case 2219:
case 3457:
case 1743:
case 472:
case 1646:
case 997:
case 3504:
case 2477:
case 2844:
case 3336:
case 2691:
case 2549:
case 1750:
case 3218:
case 3623:
case 139:
case 4080:
case 2847:
case 2182:
case 1349:
case 2808:
case 608:
case 2842:
case 4058:
case 663:
case 3833:
case 3615:
case 3583:
case 2050:
case 2828:
case 3070:
case 2235:
case 3706:
case 2184:
case 2704:
case 3186:
case 1915:
case 1246:
case 1027:
case 1532:
case 2722:
case 2769:
case 3343:
case 267:
case 3239:
case 1290:
case 2571:
case 365:
case 1662:
case 2332:
case 2707:
case 2925:
case 1495:
case 348:
case 1712:
case 1048:
case 2012:
case 1667:
case 3421:
case 1128:
case 542:
case 1717:
case 1839:
case 1007:
case 1884:
case 2493:
case 1069:
case 2118:
case 1923:
case 674:
case 494:
case 1537:
case 2905:
case 41:
case 1664:
case 1004:
case 2857:
case 1359:
case 4002:
case 226:
case 2100:
case 4024:
case 1796:
case 3761:
case 4027:
case 996:
case 2298:
case 2462:
case 4004:
case 1999:
case 5:
case 4022:
case 4069:
case 147:
case 725:
case 1277:
case 2096:
case 3381:
case 96:
case 2852:
case 1110:
case 3872:
case 3425:
case 2360:
case 2758:
case 3699:
case 3541:
case 3353:
case 3220:
case 2373:
case 1560:
case 1256:
case 1800:
case 928:
case 1375:
case 2876:
case 495:
case 675:
case 3092:
case 513:
case 28:
case 3131:
case 1058:
case 1820:
case 3198:
case 2780:
case 3413:
case 977:
case 492:
case 2747:
case 1473:
case 1042:
case 1122:
case 1107:
case 1206:
case 2951:
case 633:
case 1850:
case 3441:
case 2112:
case 4076:
case 75:
case 3288:
case 1591:
case 1124:
case 3323:
case 3250:
case 169:
case 2263:
case 1102:
case 1649:
case 490:
case 1888:
case 3455:
case 601:
case 3733:
case 3086:
case 2114:
case 3865:
case 2391:
case 2742:
case 919:
case 2338:
case 1127:
case 722:
case 2039:
case 1985:
case 2567:
case 4052:
case 2689:
case 3479:
case 1364:
case 2084:
case 895:
case 3949:
case 2637:
case 1367:
case 2087:
case 2822:
case 3214:
case 3968:
case 2564:
case 3643:
case 3746:
case 720:
case 2827:
case 684:
case 1671:
case 3212:
case 2802:
case 4057:
case 1817:
case 2562:
case 2529:
case 2188:
case 3790:
case 1739:
case 358:
case 3681:
case 545:
case 2471:
case 93:
case 1158:
case 1840:
case 586:
case 3501:
case 306:
case 550:
case 360:
case 2757:
case 1953:
case 3192:
case 3197:
case 3772:
case 1437:
case 457:
case 1434:
case 1180:
case 3445:
case 2955:
case 123:
case 552:
case 3194:
case 1489:
case 3240:
case 1054:
case 707:
case 2297:
case 1076:
case 2196:
case 2468:
case 291:
case 1010:
case 4028:
case 847:
case 921:
case 2979:
case 894:
case 3959:
case 2294:
case 4042:
case 1981:
case 789:
case 2000:
case 685:
case 190:
case 3756:
case 4044:
case 2673:
case 1192:
case 1777:
case 2973:
case 679:
case 499:
case 1501:
case 3432:
case 238:
case 2960:
case 1861:
case 2178:
case 1098:
case 441:
case 2:
case 3158:
case 1451:
case 3595:
case 775:
case 1311:
case 2074:
case 1194:
case 435:
case 2731:
case 3054:
case 1975:
case 2798:
case 864:
case 323:
case 64:
case 2511:
case 1296:
case 617:
case 526:
case 1772:
case 3057:
case 2485:
case 3675:
case 1959:
case 936:
case 3010:
case 3076:
case 2161:
case 4035:
case 134:
case 1483:
case 832:
case 2897:
case 978:
case 3330:
case 2894:
case 4086:
case 3720:
case 2863:
case 2816:
case 774:
case 1971:
case 3206:
case 1441:
case 3850:
case 2325:
case 1826:
case 2515:
case 3460:
case 2453:
case 3042:
case 3473:
case 3265:
case 3122:
case 3008:
case 905:
case 3718:
case 3127:
case 2523:
case 1505:
case 711:
case 1865:
case 2313:
case 3538:
case 1455:
case 3649:
case 1806:
case 1513:
case 3591:
case 1035:
case 369:
case 458:
case 624:
case 2227:
case 2046:
case 3782:
case 2202:
case 1163:
case 708:
case 2645:
case 3309:
case 199:
case 3812:
case 1790:
case 3817:
case 2106:
case 782:
case 3671:
case 3784:
case 357:
case 567:
case 3329:
case 3362:
case 240:
case 3519:
case 1643:
case 462:
case 3814:
case 135:
case 173:
case 252:
case 1874:
case 3740:
case 1611:
case 132:
case 465:
case 3272:
case 448:
case 834:
case 746:
case 2257:
case 286:
case 3274:
case 31:
case 203:
case 268:
case 1930:
case 130:
case 2831:
case 3573:
case 2341:
case 2553:
case 2792:
case 902:
case 2177:
case 914:
case 1094:
case 862:
case 3080:
case 22:
case 3058:
case 3820:
case 549:
case 971:
case 1198:
case 1131:
case 3438:
case 3911:
case 953:
case 1993:
case 988:
case 1092:
case 591:
case 2423:
case 3375:
case 1200:
case 3349:
case 2886:
case 2065:
case 339:
case 1909:
case 1726:
case 2536:
case 2770:
case 3368:
case 3750:
case 2585:
case 620:
case 1706:
case 2625:
case 1016:
case 1063:
case 718:
case 899:
case 297:
case 2244:
case 2190:
case 1070:
case 395:
case 2146:
case 1615:
case 927:
case 622:
case 1833:
case 2247:
case 2026:
case 3818:
case 1284:
case 3662:
case 3629:
case 3712:
case 3144:
case 432:
case 1551:
case 451:
case 1135:
case 165:
case 3290:
case 3027:
case 3246:
case 3915:
case 3532:
case 915:
case 3108:
case 701:
case 2351:
case 770:
case 693:
case 1282:
case 430:
case 2345:
case 2411:
case 3923:
case 3609:
case 3537:
case 772:
case 3534:
case 3128:
case 1421:
case 3667:
case 1890:
case 2991:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1756544402/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,];
var gg_b = "1756544402/";

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
