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
var o = 1;
switch (g) {
case 4021:
case 1924:
case 3485:
case 2064:
case 1332:
case 1464:
case 2208:
case 1802:
case 3590:
case 678:
case 2602:
case 2546:
case 568:
case 2961:
case 391:
case 3506:
case 3311:
case 236:
case 471:
case 3513:
case 1656:
case 3308:
case 582:
case 3838:
case 1191:
case 2856:
case 3248:
case 767:
case 914:
case 2081:
case 1481:
case 2738:
case 2585:
case 2593:
case 1295:
case 557:
case 2490:
case 299:
case 2391:
case 607:
case 2223:
case 116:
case 857:
case 2902:
case 2052:
case 758:
case 1006:
case 2510:
case 2771:
case 1956:
case 2406:
case 3474:
case 2413:
case 1013:
case 4090:
case 416:
case 1861:
case 656:
case 127:
case 2132:
case 1377:
case 4001:
case 2454:
case 1822:
case 435:
case 2396:
case 3200:
case 2598:
case 3955:
case 2369:
case 3340:
case 2733:
case 2300:
case 2830:
case 1001:
case 1445:
case 2401:
case 2776:
case 2045:
case 3704:
case 2240:
case 1899:
case 833:
case 1630:
case 3269:
case 533:
case 3328:
case 3072:
case 1719:
case 1018:
case 78:
case 704:
case 2617:
case 1279:
case 3554:
case 1982:
case 3655:
case 3619:
case 1604:
case 3188:
case 2343:
case 3697:
case 928:
case 2541:
case 443:
case 1026:
case 3316:
case 1169:
case 2966:
case 3501:
case 3844:
case 545:
case 3782:
case 1196:
case 2086:
case 22:
case 2177:
case 901:
case 4062:
case 394:
case 3440:
case 1069:
case 1126:
case 3534:
case 474:
case 3543:
case 25:
case 2496:
case 3218:
case 1477:
case 213:
case 911:
case 3627:
case 4069:
case 3968:
case 3254:
case 1579:
case 543:
case 2318:
case 1205:
case 1631:
case 2503:
case 3789:
case 2567:
case 2831:
case 2301:
case 958:
case 1162:
case 145:
case 1101:
case 480:
case 3912:
case 433:
case 2540:
case 2362:
case 3398:
case 2889:
case 3731:
case 1043:
case 1689:
case 2443:
case 34:
case 364:
case 3172:
case 2629:
case 1118:
case 1727:
case 967:
case 2753:
case 3935:
case 714:
case 4034:
case 1931:
case 1386:
case 133:
case 1712:
case 260:
case 2528:
case 835:
case 3403:
case 2298:
case 1735:
case 3668:
case 3105:
case 3416:
case 2326:
case 2909:
case 2758:
case 2059:
case 1415:
case 2210:
case 516:
case 3221:
case 1749:
case 3591:
case 2448:
case 1847:
case 701:
case 4020:
case 406:
case 1973:
case 2647:
case 3607:
case 691:
case 1381:
case 1694:
case 1480:
case 3663:
case 2285:
case 2894:
case 527:
case 3408:
case 1190:
case 3:
case 2714:
case 3773:
case 4048:
case 827:
case 617:
case 106:
case 246:
case 3411:
case 2152:
case 3310:
case 1020:
case 3814:
case 2873:
case 2274:
case 3213:
case 3206:
case 2947:
case 1673:
case 468:
case 307:
case 3548:
case 1707:
case 3794:
case 1809:
case 2164:
case 1860:
case 182:
case 2660:
case 3083:
case 262:
case 2313:
case 3374:
case 3423:
case 3907:
case 3963:
case 4091:
case 1994:
case 3858:
case 2246:
case 2770:
case 356:
case 2511:
case 3125:
case 2836:
case 2306:
case 3725:
case 3606:
case 2575:
case 1937:
case 1874:
case 858:
case 2209:
case 943:
case 2910:
case 3461:
case 3542:
case 332:
case 3360:
case 608:
case 3921:
case 3309:
case 1925:
case 3484:
case 2260:
case 1107:
case 811:
case 259:
case 128:
case 1236:
case 2646:
case 3024:
case 1314:
case 2985:
case 2993:
case 401:
case 3852:
case 597:
case 1846:
case 2114:
case 677:
case 1810:
case 3621:
case 3475:
case 1438:
case 2739:
case 2974:
case 3913:
case 1042:
case 3056:
case 2442:
case 3906:
case 1637:
case 2247:
case 1885:
case 2584:
case 1294:
case 3864:
case 782:
case 2685:
case 639:
case 2693:
case 1706:
case 1471:
case 1625:
case 2071:
case 2158:
case 867:
case 318:
case 4042:
case 1713:
case 576:
case 1530:
case 1135:
case 4055:
case 2044:
case 2599:
case 1972:
case 3392:
case 2368:
case 1289:
case 2033:
case 2229:
case 3886:
case 927:
case 3178:
case 3051:
case 3772:
case 1055:
case 3329:
case 2455:
case 1019:
case 234:
case 2698:
case 3268:
case 3954:
case 1898:
case 745:
case 2497:
case 3189:
case 3499:
case 1387:
case 3212:
case 2327:
case 1672:
case 3466:
case 114:
case 3227:
case 2998:
case 3519:
case 3555:
case 780:
case 3422:
case 58:
case 3654:
case 971:
case 1605:
case 1726:
case 1168:
case 1504:
case 3082:
case 1679:
case 3900:
case 1796:
case 982:
case 3050:
case 3255:
case 3219:
case 1988:
case 2777:
case 2468:
case 3492:
case 1204:
case 624:
case 1769:
case 1803:
case 968:
case 1344:
case 2667:
case 404:
case 735:
case 3643:
case 3130:
case 3535:
case 3089:
case 3996:
case 18:
case 1251:
case 4068:
case 3969:
case 104:
case 2940:
case 2319:
case 3366:
case 1155:
case 1550:
case 1119:
case 2916:
case 250:
case 1027:
case 2903:
case 2427:
case 2053:
case 2222:
case 3568:
case 2176:
case 1979:
case 3399:
case 1734:
case 1282:
case 2888:
case 1197:
case 4012:
case 1688:
case 1840:
case 2299:
case 1589:
case 2435:
case 29:
case 2640:
case 2133:
case 4027:
case 3943:
case 2412:
case 3322:
case 354:
case 1012:
case 3696:
case 3934:
case 3877:
case 1049:
case 2449:
case 2911:
case 396:
case 3920:
case 3361:
case 342:
case 980:
case 2284:
case 771:
case 2732:
case 3507:
case 476:
case 2857:
case 1224:
case 789:
case 2058:
case 2759:
case 632:
case 2623:
case 2014:
case 321:
case 2261:
case 287:
case 2547:
case 2138:
case 3691:
case 1365:
case 3156:
case 1791:
case 2560:
case 2165:
case 377:
case 3549:
case 2342:
case 1007:
case 1957:
case 497:
case 3094:
case 1063:
case 1808:
case 2202:
case 1983:
case 2611:
case 3620:
case 1995:
case 411:
case 1811:
case 716:
case 3124:
case 3757:
case 3815:
case 3859:
case 1470:
case 4007:
case 1256:
case 649:
case 3648:
case 618:
case 3832:
case 727:
case 458:
case 2509:
case 2748:
case 4014:
case 1449:
case 3102:
case 3060:
case 2683:
case 960:
case 2594:
case 1857:
case 2458:
case 1759:
case 1171:
case 1058:
case 2657:
case 3980:
case 3932:
case 431:
case 736:
case 3324:
case 3711:
case 3175:
case 3570:
case 2720:
case 1261:
case 4058:
case 1547:
case 1138:
case 2365:
case 2142:
case 3959:
case 3708:
case 3009:
case 3915:
case 1165:
case 1560:
case 3184:
case 152:
case 1923:
case 1407:
case 541:
case 1463:
case 4070:
case 3494:
case 2063:
case 3680:
case 2808:
case 1611:
case 2995:
case 841:
case 129:
case 905:
case 3820:
case 2536:
case 822:
case 3723:
case 559:
case 2573:
case 3514:
case 1275:
case 297:
case 1070:
case 2470:
case 3659:
case 609:
case 2256:
case 3848:
case 522:
case 429:
case 913:
case 3122:
case 3450:
case 395:
case 1879:
case 475:
case 2988:
case 962:
case 1777:
case 663:
case 2333:
case 2204:
case 2803:
case 2769:
case 2867:
case 1616:
case 1603:
case 2816:
case 444:
case 3276:
case 46:
case 988:
case 1397:
case 3977:
case 3304:
case 2376:
case 3199:
case 2700:
case 3117:
case 28:
case 144:
case 1940:
case 2578:
case 204:
case 3728:
case 37:
case 2550:
case 1628:
case 1916:
case 150:
case 2119:
case 2027:
case 2453:
case 1053:
case 49:
case 2828:
case 1592:
case 2979:
case 1176:
case 1888:
case 2282:
case 2197:
case 946:
case 3431:
case 2743:
case 3800:
case 2688:
case 2840:
case 3382:
case 820:
case 3703:
case 1299:
case 2035:
case 3767:
case 2589:
case 834:
case 2230:
case 534:
case 1266:
case 4087:
case 3896:
case 72:
case 3478:
case 520:
case 2012:
case 1217:
case 2530:
case 434:
case 3826:
case 600:
case 2444:
case 420:
case 1599:
case 3741:
case 1368:
case 2433:
case 1033:
case 363:
case 550:
case 3686:
case 4076:
case 3350:
case 3945:
case 713:
case 1566:
case 3451:
case 2112:
case 1419:
case 2718:
case 4044:
case 2905:
case 1455:
case 1522:
case 134:
case 999:
case 4033:
case 1153:
case 2476:
case 1745:
case 3862:
case 2898:
case 1292:
case 705:
case 2582:
case 790:
case 3430:
case 3801:
case 3544:
case 936:
case 3099:
case 2762:
case 473:
case 3645:
case 2353:
case 3017:
case 2672:
case 3066:
case 3854:
case 875:
case 310:
case 3022:
case 173:
case 56:
case 544:
case 2605:
case 1641:
case 844:
case 3576:
case 86:
case 2168:
case 3192:
case 1805:
case 3287:
case 2841:
case 969:
case 1335:
case 3482:
case 3806:
case 3336:
case 1674:
case 3981:
case 2358:
case 852:
case 3214:
case 2273:
case 1170:
case 1575:
case 2937:
case 3538:
case 3785:
case 829:
case 1764:
case 1209:
case 1910:
case 201:
case 92:
case 141:
case 648:
case 3084:
case 1502:
case 1065:
case 1260:
case 3890:
case 2163:
case 3639:
case 1781:
case 122:
case 2721:
case 2236:
case 1985:
case 3424:
case 915:
case 2314:
case 3373:
case 1993:
case 3964:
case 792:
case 2846:
case 441:
case 3270:
case 1114:
case 3821:
case 1610:
case 1752:
case 531:
case 2438:
case 1739:
case 3394:
case 3681:
case 1837:
case 1307:
case 686:
case 2790:
case 3456:
case 1442:
case 2637:
case 2885:
case 312:
case 1584:
case 2294:
case 3002:
case 3565:
case 2893:
case 3160:
case 1685:
case 762:
case 3664:
case 2625:
case 309:
case 2471:
case 2706:
case 1071:
case 1158:
case 2370:
case 1825:
case 887:
case 4080:
case 1909:
case 2459:
case 899:
case 3325:
case 1758:
case 2113:
case 257:
case 2749:
case 3760:
case 3281:
case 2432:
case 2237:
case 1647:
case 3914:
case 4015:
case 2381:
case 4059:
case 950:
case 2936:
case 3807:
case 2583:
case 3337:
case 3264:
case 722:
case 2595:
case 3863:
case 3008:
case 1293:
case 2225:
case 1523:
case 759:
case 2557:
case 1714:
case 1960:
case 3011:
case 1321:
case 146:
case 192:
case 2352:
case 462:
case 1947:
case 3614:
case 637:
case 2673:
case 975:
case 569:
case 347:
case 3970:
case 869:
case 1609:
case 2707:
case 2339:
case 2809:
case 2763:
case 1164:
case 2860:
case 3193:
case 1660:
case 836:
case 162:
case 536:
case 1313:
case 3457:
case 1246:
case 3252:
case 681:
case 1511:
case 188:
case 1469:
case 2768:
case 3792:
case 3835:
case 2126:
case 3245:
case 2096:
case 370:
case 815:
case 1878:
case 490:
case 3812:
case 1186:
case 113:
case 1354:
case 734:
case 952:
case 1992:
case 3827:
case 274:
case 1318:
case 52:
case 720:
case 3372:
case 1503:
case 2631:
case 803:
case 1567:
case 61:
case 413:
case 2345:
case 929:
case 190:
case 3198:
case 1787:
case 1145:
case 1540:
case 2978:
case 1362:
case 460:
case 2043:
case 2689:
case 1629:
case 2727:
case 2829:
case 2931:
case 773:
case 2712:
case 3067:
case 1692:
case 3016:
case 1326:
case 355:
case 2054:
case 2377:
case 2904:
case 1454:
case 4045:
case 2822:
case 1396:
case 3976:
case 670:
case 2682:
case 3103:
case 3405:
case 3041:
case 1882:
case 860:
case 235:
case 2001:
case 1776:
case 1240:
case 3388:
case 2797:
case 775:
case 1418:
case 2755:
case 2018:
case 3472:
case 2817:
case 1666:
case 31:
case 3277:
case 744:
case 560:
case 2866:
case 3944:
case 2279:
case 55:
case 750:
case 3128:
case 922:
case 1343:
case 60:
case 1541:
case 1462:
case 2505:
case 2100:
case 684:
case 2062:
case 3098:
case 403:
case 1922:
case 3676:
case 1426:
case 3545:
case 1966:
case 79:
case 1999:
case 890:
case 3722:
case 3379:
case 2486:
case 415:
case 1851:
case 655:
case 3085:
case 2924:
case 2802:
case 731:
case 3093:
case 2464:
case 1208:
case 271:
case 973:
case 1602:
case 3123:
case 169:
case 3671:
case 2315:
case 1984:
case 1546:
case 3552:
case 3965:
case 1320:
case 4064:
case 1961:
case 2021:
case 1421:
case 1675:
case 136:
case 1574:
case 888:
case 2191:
case 3842:
case 3638:
case 562:
case 469:
case 2481:
case 2884:
case 1180:
case 1593:
case 3564:
case 752:
case 1490:
case 1684:
case 2742:
case 2090:
case 337:
case 920:
case 1391:
case 2624:
case 1824:
case 2525:
case 1902:
case 2452:
case 1052:
case 1510:
case 2006:
case 1406:
case 2956:
case 3938:
case 546:
case 1413:
case 499:
case 3074:
case 1661:
case 892:
case 3395:
case 2148:
case 1975:
case 2537:
case 3702:
case 4052:
case 3581:
case 2466:
case 1066:
case 1129:
case 784:
case 2417:
case 2212:
case 70:
case 3872:
case 1645:
case 2235:
case 895:
case 2499:
case 800:
case 1801:
case 410:
case 4022:
case 2189:
case 193:
case 2597:
case 3805:
case 1576:
case 3641:
case 4017:
case 3786:
case 69:
case 373:
case 2654:
case 493:
case 2422:
case 3312:
case 2555:
case 2519:
case 3998:
case 2227:
case 3566:
case 981:
case 230:
case 1350:
case 283:
case 2886:
case 57:
case 163:
case 3368:
case 2918:
case 3044:
case 565:
case 1826:
case 3497:
case 1862:
case 66:
case 644:
case 2004:
case 3187:
case 463:
case 3153:
case 937:
case 320:
case 334:
case 3455:
case 3419:
case 2906:
case 3561:
case 1109:
case 2056:
case 629:
case 953:
case 819:
case 2913:
case 409:
case 3837:
case 1681:
case 3739:
case 1394:
case 3038:
case 848:
case 502:
case 747:
case 1746:
case 2621:
case 652:
case 4002:
case 2173:
case 3114:
case 1774:
case 2136:
case 218:
case 3071:
case 109:
case 3693:
case 1664:
case 4075:
case 3685:
case 2263:
case 1160:
case 1565:
case 3946:
case 2864:
case 3584:
case 2360:
case 232:
case 3910:
case 1061:
case 1793:
case 3209:
case 3764:
case 886:
case 1147:
case 1538:
case 1813:
case 1214:
case 3674:
case 1981:
case 1806:
case 1258:
case 1964:
case 2852:
case 3993:
case 1424:
case 1373:
case 2024:
case 1652:
case 359:
case 687:
case 1710:
case 1571:
case 322:
case 3260:
case 2249:
case 438:
case 3065:
case 2484:
case 2839:
case 1084:
case 2620:
case 538:
case 4047:
case 266:
case 737:
case 3407:
case 352:
case 3342:
case 1184:
case 2549:
case 2783:
case 2832:
case 2648:
case 781:
case 2242:
case 1848:
case 239:
case 1615:
case 3070:
case 2859:
case 1723:
case 2757:
case 779:
case 1436:
case 208:
case 4009:
case 3623:
case 3171:
case 3715:
case 3857:
case 3895:
case 2563:
case 3284:
case 242:
case 3911:
case 1060:
case 1102:
case 3449:
case 2384:
case 1915:
case 448:
case 984:
case 3780:
case 387:
case 221:
case 419:
case 622:
case 812:
case 1175:
case 509:
case 1473:
case 3014:
case 2073:
case 402:
case 1932:
case 863:
case 2104:
case 285:
case 1431:
case 2031:
case 3888:
case 2399:
case 3176:
case 2568:
case 3967:
case 3222:
case 3053:
case 3427:
case 350:
case 3916:
case 3628:
case 2366:
case 3529:
case 2151:
case 254:
case 2078:
case 3412:
case 1677:
case 3266:
case 1716:
case 3133:
case 2669:
case 39:
case 47:
case 3435:
case 1703:
case 1276:
case 4029:
case 3603:
case 725:
case 593:
case 2297:
case 1092:
case 1587:
case 2492:
case 1740:
case 893:
case 3777:
case 3879:
case 1553:
case 2050:
case 195:
case 100:
case 1728:
case 3355:
case 3940:
case 36:
case 2512:
case 344:
case 4092:
case 510:
case 1117:
case 1244:
case 2996:
case 2634:
case 620:
case 2089:
case 1304:
case 1489:
case 634:
case 400:
case 1897:
case 3922:
case 1799:
case 3541:
case 870:
case 3804:
case 2498:
case 2876:
case 765:
case 2697:
case 2730:
case 23:
case 2619:
case 1128:
case 2655:
case 1717:
case 1819:
case 2554:
case 77:
case 3851:
case 32:
case 3086:
case 1722:
case 1379:
case 3999:
case 2518:
case 2782:
case 3917:
case 2303:
case 2367:
case 3966:
case 3426:
case 2316:
case 3882:
case 80:
case 3369:
case 613:
case 2955:
case 1405:
case 1041:
case 2562:
case 2005:
case 2441:
case 1116:
case 2200:
case 884:
case 3744:
case 41:
case 3622:
case 700:
case 3454:
case 1944:
case 2296:
case 605:
case 1277:
case 11:
case 3666:
case 855:
case 3418:
case 2328:
case 2269:
case 3240:
case 2704:
case 1388:
case 3776:
case 2526:
case 3830:
case 3052:
case 1775:
case 3902:
case 2446:
case 1111:
case 3223:
case 872:
case 786:
case 3391:
case 1665:
case 137:
case 1108:
case 399:
case 2756:
case 1564:
case 2865:
case 3593:
case 3585:
case 572:
case 3738:
case 1581:
case 4046:
case 181:
case 1702:
case 1383:
case 3975:
case 963:
case 1074:
case 662:
case 2323:
case 3413:
case 1938:
case 3159:
case 2942:
case 179:
case 1965:
case 748:
case 1552:
case 1425:
case 3984:
case 369:
case 1123:
case 2220:
case 2157:
case 719:
case 2871:
case 3211:
case 3602:
case 1280:
case 1761:
case 2590:
case 2195:
case 547:
case 3208:
case 2493:
case 702:
case 910:
case 1085:
case 692:
case 3081:
case 2037:
case 3765:
case 1232:
case 1784:
case 1215:
case 3421:
case 336:
case 3675:
case 4085:
case 4093:
case 3961:
case 291:
case 1010:
case 2410:
case 993:
case 2794:
case 1532:
case 3390:
case 3491:
case 2137:
case 1614:
case 3947:
case 2213:
case 3274:
case 1110:
case 3873:
case 1559:
case 1658:
case 3306:
case 2125:
case 388:
case 3511:
case 3770:
case 2858:
case 3246:
case 1252:
case 2963:
case 447:
case 1023:
case 1457:
case 2374:
case 3508:
case 2095:
case 900:
case 1747:
case 1193:
case 1849:
case 1914:
case 537:
case 1281:
case 3448:
case 2591:
case 1760:
case 278:
case 2221:
case 3210:
case 4008:
case 2870:
case 3059:
case 3758:
case 3015:
case 3909:
case 738:
case 837:
case 1670:
case 3152:
case 1146:
case 3960:
case 1011:
case 965:
case 881:
case 3714:
case 1008:
case 1863:
case 3293:
case 1958:
case 2408:
case 879:
case 3894:
case 1337:
case 1807:
case 3285:
case 2663:
case 636:
case 3080:
case 2607:
case 3753:
case 825:
case 4016:
case 2596:
case 4003:
case 2172:
case 10:
case 264:
case 123:
case 4067:
case 1286:
case 3443:
case 2226:
case 3434:
case 3889:
case 2398:
case 3540:
case 2569:
case 3787:
case 155:
case 2416:
case 2105:
case 948:
case 62:
case 3692:
case 81:
case 2668:
case 919:
case 40:
case 853:
case 2467:
case 423:
case 2262:
case 3298:
case 2927:
case 1868:
case 2403:
case 553:
case 1479:
case 2778:
case 2079:
case 902:
case 3850:
case 3354:
case 3186:
case 1812:
case 3878:
case 3496:
case 2750:
case 763:
case 35:
case 2201:
case 2635:
case 1305:
case 2534:
case 1835:
case 3929:
case 1792:
case 2440:
case 294:
case 3469:
case 1040:
case 1198:
case 3567:
case 2789:
case 1488:
case 3241:
case 470:
case 3318:
case 1827:
case 1653:
case 3829:
case 1935:
case 2577:
case 1596:
case 1172:
case 921:
case 164:
case 20:
case 223:
case 2286:
case 3043:
case 4079:
case 1226:
case 1731:
case 3034:
case 3978:
case 1912:
case 2141:
case 2016:
case 1500:
case 1668:
case 1467:
case 3735:
case 44:
case 3588:
case 2003:
case 1927:
case 2868:
case 1403:
case 2479:
case 1079:
case 1778:
case 333:
case 3386:
case 380:
case 942:
case 3931:
case 996:
case 1218:
case 730:
case 783:
case 3272:
case 270:
case 724:
case 1612:
case 1201:
case 1534:
case 2305:
case 3126:
case 2835:
case 1440:
case 2792:
case 2040:
case 194:
case 3162:
case 2687:
case 3345:
case 1088:
case 2488:
case 966:
case 3205:
case 1887:
case 2372:
case 2028:
case 1853:
case 374:
case 2827:
case 1968:
case 494:
case 2653:
case 1627:
case 3763:
case 456:
case 3339:
case 4057:
case 1548:
case 107:
case 2970:
case 3091:
case 4083:
case 3673:
case 1206:
case 1814:
case 1346:
case 3352:
case 2658:
case 1125:
case 3994:
case 368:
case 3636:
case 2457:
case 1907:
case 891:
case 2495:
case 2483:
case 2580:
case 382:
case 2185:
case 940:
case 1290:
case 1385:
case 3973:
case 2914:
case 3237:
case 1393:
case 3432:
case 3847:
case 272:
case 1591:
case 3749:
case 357:
case 1221:
case 3113:
case 671:
case 2325:
case 3415:
case 2670:
case 3020:
case 1310:
case 861:
case 3557:
case 2709:
case 2008:
case 2958:
case 2264:
case 2807:
case 478:
case 561:
case 398:
case 3381:
case 1607:
case 2046:
case 1446:
case 3452:
case 578:
case 3525:
case 3257:
case 2971:
case 1756:
case 2564:
case 3283:
case 3884:
case 3439:
case 8:
case 281:
case 3861:
case 2702:
case 668:
case 2395:
case 739:
case 1474:
case 1323:
case 1521:
case 5:
case 279:
case 807:
case 2552:
case 708:
case 2425:
case 1871:
case 657:
case 389:
case 4037:
case 126:
case 2280:
case 371:
case 1195:
case 742:
case 3464:
case 491:
case 3802:
case 1493:
case 3332:
case 1485:
case 3924:
case 2085:
case 2638:
case 1248:
case 856:
case 117:
case 2437:
case 1037:
case 426:
case 2232:
case 3656:
case 721:
case 2784:
case 3875:
case 556:
case 2215:
case 1724:
case 698:
case 3021:
case 191:
case 1410:
case 3062:
case 2098:
case 3505:
case 2799:
case 1498:
case 594:
case 1188:
case 3604:
case 2766:
case 13:
case 1619:
case 1655:
case 3982:
case 2717:
case 1554:
case 3279:
case 3930:
case 932:
case 3651:
case 3572:
case 1518:
case 3196:
case 1303:
case 43:
case 633:
case 2633:
case 1844:
case 2545:
case 1243:
case 3026:
case 864:
case 3288:
case 84:
case 1955:
case 1441:
case 2116:
case 2103:
case 3682:
case 1200:
case 4072:
case 2167:
case 2976:
case 1997:
case 740:
case 564:
case 3904:
case 3377:
case 3054:
case 1296:
case 4005:
case 2944:
case 951:
case 2933:
case 3018:
case 3755:
case 1328:
case 3797:
case 3899:
case 674:
case 1269:
case 1704:
case 2388:
case 3951:
case 3001:
case 1526:
case 824:
case 2800:
case 3743:
case 4078:
case 2330:
case 454:
case 1031:
case 3197:
case 830:
case 265:
case 883:
case 3487:
case 1568:
case 9:
case 583:
case 73:
case 1317:
case 3453:
case 3027:
case 3119:
case 3155:
case 1696:
case 3012:
case 485:
case 1779:
case 154:
case 1151:
case 1322:
case 1943:
case 2896:
case 978:
case 1669:
case 3035:
case 2869:
case 2382:
case 3816:
case 3531:
case 956:
case 1297:
case 2587:
case 3769:
case 3068:
case 2740:
case 1492:
case 1219:
case 295:
case 1050:
case 200:
case 2450:
case 2351:
case 2728:
case 304:
case 3578:
case 38:
case 1996:
case 3376:
case 1788:
case 2233:
case 1089:
case 1643:
case 440:
case 3536:
case 1124:
case 2271:
case 3995:
case 1375:
case 3808:
case 2494:
case 3338:
case 532:
case 3957:
case 3007:
case 1549:
case 2238:
case 2632:
case 3256:
case 2848:
case 761:
case 139:
case 3371:
case 1991:
case 3470:
case 4094:
case 477:
case 2514:
case 994:
case 1757:
case 2980:
case 1036:
case 601:
case 3458:
case 421:
case 3823:
case 3594:
case 1563:
case 1361:
case 142:
case 1920:
case 3695:
case 202:
case 3683:
case 2060:
case 2102:
case 196:
case 4073:
case 1460:
case 3748:
case 849:
case 1384:
case 3142:
case 2959:
case 1156:
case 3365:
case 1691:
case 4036:
case 818:
case 628:
case 2891:
case 121:
case 518:
case 3720:
case 1948:
case 2175:
case 376:
case 2711:
case 3414:
case 496:
case 2324:
case 1073:
case 791:
case 2932:
case 1906:
case 2456:
case 3042:
case 1056:
case 1913:
case 2394:
case 3438:
case 542:
case 2746:
case 1621:
case 1475:
case 508:
case 2821:
case 3713:
case 451:
case 3524:
case 756:
case 2939:
case 1136:
case 3625:
case 209:
case 2664:
case 1347:
case 2160:
case 1263:
case 3294:
case 2952:
case 3149:
case 1402:
case 1864:
case 1207:
case 1360:
case 866:
case 4024:
case 132:
case 2061:
case 2538:
case 3937:
case 877:
case 3273:
case 2214:
case 3358:
case 1725:
case 2981:
case 2336:
case 238:
case 2806:
case 1852:
case 2964:
case 2373:
case 667:
case 2424:
case 2652:
case 3721:
case 7:
case 2710:
case 2571:
case 2639:
case 3163:
case 1194:
case 839:
case 3925:
case 1309:
case 2066:
case 1926:
case 4082:
case 1417:
case 3353:
case 2818:
case 2533:
case 1235:
case 3762:
case 2099:
case 840:
case 1845:
case 2331:
case 1189:
case 1030:
case 991:
case 2430:
case 1597:
case 2482:
case 3841:
case 3168:
case 2192:
case 926:
case 3605:
case 1654:
case 4030:
case 2378:
case 1422:
case 2253:
case 1555:
case 1150:
case 210:
case 1519:
case 1962:
case 3112:
case 2945:
case 4004:
case 1051:
case 1178:
case 130:
case 183:
case 1886:
case 3754:
case 3289:
case 1392:
case 2741:
case 3972:
case 1626:
case 794:
case 3135:
case 3530:
case 3582:
case 2404:
case 1268:
case 3898:
case 1004:
case 2389:
case 4051:
case 424:
case 3701:
case 3476:
case 854:
case 3250:
case 3019:
case 3905:
case 1329:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1757883601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,];
var gg_b = "1757880001/";

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
