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
case 1553:
case 198:
case 568:
case 2555:
case 1974:
case 1239:
case 3834:
case 1105:
case 1058:
case 803:
case 509:
case 2655:
case 3013:
case 1667:
case 1781:
case 2072:
case 325:
case 2329:
case 3554:
case 1899:
case 1826:
case 2929:
case 2823:
case 1831:
case 1448:
case 1962:
case 2089:
case 1451:
case 3145:
case 1442:
case 2690:
case 3499:
case 638:
case 2490:
case 3264:
case 2336:
case 250:
case 2436:
case 3302:
case 1534:
case 3673:
case 1124:
case 1230:
case 3208:
case 3419:
case 1577:
case 392:
case 3741:
case 1472:
case 2168:
case 1965:
case 2134:
case 1905:
case 935:
case 492:
case 1164:
case 1738:
case 3994:
case 2121:
case 1882:
case 2921:
case 1683:
case 1353:
case 1510:
case 3845:
case 3065:
case 1491:
case 3537:
case 2865:
case 2193:
case 2042:
case 709:
case 29:
case 1153:
case 3589:
case 2748:
case 3791:
case 3331:
case 3888:
case 3281:
case 2391:
case 215:
case 816:
case 3689:
case 219:
case 1362:
case 3628:
case 1279:
case 1676:
case 113:
case 3215:
case 2376:
case 3871:
case 2066:
case 823:
case 3690:
case 659:
case 1126:
case 872:
case 3166:
case 3105:
case 2533:
case 534:
case 1690:
case 3025:
case 1846:
case 3691:
case 3701:
case 2418:
case 3035:
case 760:
case 1732:
case 3019:
case 548:
case 583:
case 3110:
case 1741:
case 1185:
case 2237:
case 50:
case 853:
case 1933:
case 3501:
case 2423:
case 3488:
case 1380:
case 2856:
case 2616:
case 3150:
case 390:
case 155:
case 1281:
case 3898:
case 3014:
case 1009:
case 3999:
case 909:
case 3692:
case 1817:
case 839:
case 3489:
case 981:
case 1219:
case 2048:
case 1408:
case 3001:
case 1459:
case 822:
case 210:
case 3594:
case 544:
case 3219:
case 651:
case 171:
case 3249:
case 3238:
case 1484:
case 1949:
case 3776:
case 231:
case 1022:
case 3053:
case 2396:
case 4092:
case 1369:
case 332:
case 1319:
case 3451:
case 3301:
case 38:
case 3512:
case 3107:
case 1645:
case 713:
case 2767:
case 2525:
case 2535:
case 1551:
case 574:
case 2251:
case 3873:
case 1617:
case 1892:
case 3927:
case 2303:
case 3510:
case 2969:
case 2386:
case 52:
case 2226:
case 2528:
case 125:
case 481:
case 312:
case 3288:
case 2405:
case 2751:
case 3967:
case 70:
case 3714:
case 1932:
case 3885:
case 532:
case 579:
case 2599:
case 3094:
case 1107:
case 563:
case 83:
case 889:
case 2959:
case 3304:
case 225:
case 931:
case 3639:
case 990:
case 2130:
case 1287:
case 1866:
case 3549:
case 2974:
case 1705:
case 1508:
case 189:
case 2979:
case 2480:
case 1139:
case 2904:
case 2754:
case 3846:
case 491:
case 3632:
case 3116:
case 123:
case 3564:
case 245:
case 3193:
case 1323:
case 2724:
case 2727:
case 3394:
case 126:
case 60:
case 3262:
case 74:
case 2421:
case 1443:
case 3198:
case 2883:
case 555:
case 196:
case 3332:
case 1275:
case 2844:
case 1582:
case 2631:
case 934:
case 3242:
case 3538:
case 1293:
case 262:
case 3046:
case 1422:
case 2559:
case 2608:
case 309:
case 2875:
case 2649:
case 611:
case 1735:
case 3091:
case 2013:
case 57:
case 3609:
case 1378:
case 2471:
case 3123:
case 852:
case 2549:
case 891:
case 1001:
case 434:
case 2156:
case 1146:
case 3908:
case 2542:
case 3616:
case 373:
case 3833:
case 4039:
case 1417:
case 1795:
case 3318:
case 2695:
case 1507:
case 1877:
case 2617:
case 1842:
case 263:
case 994:
case 89:
case 2632:
case 2914:
case 883:
case 733:
case 3964:
case 426:
case 2693:
case 1012:
case 2815:
case 3050:
case 1749:
case 3257:
case 3587:
case 1959:
case 498:
case 2596:
case 3570:
case 2615:
case 3925:
case 2032:
case 377:
case 3199:
case 4024:
case 2868:
case 3720:
case 3939:
case 2257:
case 3062:
case 488:
case 4023:
case 351:
case 1035:
case 2912:
case 1171:
case 2594:
case 688:
case 2035:
case 1076:
case 1720:
case 68:
case 1567:
case 3924:
case 1967:
case 274:
case 986:
case 3998:
case 2822:
case 3141:
case 117:
case 1779:
case 357:
case 1855:
case 875:
case 3859:
case 2459:
case 322:
case 818:
case 1024:
case 3668:
case 2120:
case 226:
case 2243:
case 2372:
case 543:
case 699:
case 663:
case 405:
case 3982:
case 2605:
case 2609:
case 2569:
case 3733:
case 2893:
case 2212:
case 192:
case 3588:
case 1315:
case 3462:
case 1542:
case 3175:
case 2169:
case 218:
case 2977:
case 2926:
case 3195:
case 3882:
case 1672:
case 3793:
case 3764:
case 569:
case 400:
case 728:
case 3753:
case 110:
case 2717:
case 1860:
case 815:
case 3400:
case 2124:
case 718:
case 566:
case 2756:
case 2510:
case 2556:
case 3273:
case 222:
case 3830:
case 1478:
case 3852:
case 2734:
case 1727:
case 3133:
case 1113:
case 2000:
case 2368:
case 2411:
case 2245:
case 3045:
case 708:
case 1653:
case 2163:
case 624:
case 2155:
case 788:
case 3725:
case 172:
case 587:
case 4043:
case 1150:
case 3825:
case 1765:
case 1350:
case 3378:
case 1317:
case 851:
case 942:
case 1619:
case 2964:
case 1775:
case 3550:
case 1000:
case 1739:
case 1857:
case 2970:
case 1895:
case 1536:
case 1583:
case 2583:
case 3010:
case 3478:
case 2742:
case 1127:
case 368:
case 2540:
case 1144:
case 3500:
case 3970:
case 3401:
case 518:
case 1706:
case 136:
case 2812:
case 1822:
case 1411:
case 177:
case 3194:
case 2577:
case 18:
case 2771:
case 1637:
case 2667:
case 3039:
case 2200:
case 4007:
case 114:
case 620:
case 3475:
case 2008:
case 1908:
case 383:
case 3452:
case 855:
case 2426:
case 3344:
case 2365:
case 1102:
case 3920:
case 2958:
case 3179:
case 2588:
case 575:
case 1955:
case 385:
case 3461:
case 672:
case 477:
case 396:
case 2857:
case 1218:
case 669:
case 2546:
case 4058:
case 1206:
case 1466:
case 287:
case 3447:
case 3106:
case 144:
case 393:
case 1069:
case 3069:
case 2968:
case 536:
case 706:
case 3945:
case 3245:
case 3962:
case 4004:
case 676:
case 456:
case 2233:
case 1415:
case 3361:
case 343:
case 1143:
case 2827:
case 1992:
case 598:
case 2735:
case 551:
case 227:
case 3678:
case 3376:
case 1321:
case 2498:
case 1640:
case 2903:
case 999:
case 908:
case 1500:
case 985:
case 1359:
case 3212:
case 2743:
case 2913:
case 3323:
case 2686:
case 345:
case 3605:
case 608:
case 645:
case 2375:
case 3693:
case 1431:
case 384:
case 1961:
case 4075:
case 440:
case 2146:
case 3746:
case 2860:
case 460:
case 592:
case 1003:
case 1726:
case 2990:
case 3002:
case 1136:
case 3395:
case 3910:
case 1203:
case 340:
case 3828:
case 7:
case 1538:
case 602:
case 3980:
case 1421:
case 2196:
case 1030:
case 2497:
case 3309:
case 1083:
case 1210:
case 2731:
case 190:
case 4047:
case 2221:
case 3154:
case 3829:
case 31:
case 413:
case 2106:
case 2643:
case 2574:
case 729:
case 3072:
case 2429:
case 2587:
case 2945:
case 1137:
case 930:
case 1991:
case 561:
case 1473:
case 2127:
case 3269:
case 1953:
case 2012:
case 9:
case 294:
case 3225:
case 2314:
case 2719:
case 2775:
case 1364:
case 3214:
case 1006:
case 2045:
case 2982:
case 1173:
case 2826:
case 3191:
case 4015:
case 2179:
case 3792:
case 249:
case 2115:
case 3768:
case 887:
case 789:
case 1205:
case 387:
case 2096:
case 3642:
case 1200:
case 278:
case 1274:
case 200:
case 1848:
case 588:
case 2829:
case 420:
case 94:
case 577:
case 2570:
case 906:
case 2697:
case 2769:
case 667:
case 2448:
case 2164:
case 3507:
case 432:
case 3321:
case 3353:
case 1684:
case 1094:
case 3270:
case 1114:
case 3558:
case 1559:
case 1917:
case 810:
case 2323:
case 1100:
case 795:
case 547:
case 1120:
case 3569:
case 499:
case 3578:
case 673:
case 2113:
case 2918:
case 3506:
case 542:
case 3443:
case 2018:
case 3244:
case 73:
case 2381:
case 2462:
case 3870:
case 233:
case 2488:
case 444:
case 2639:
case 462:
case 2491:
case 1330:
case 3132:
case 1413:
case 380:
case 1467:
case 2935:
case 4069:
case 2986:
case 1207:
case 2181:
case 607:
case 128:
case 763:
case 1445:
case 3487:
case 3604:
case 1957:
case 2663:
case 3985:
case 737:
case 3100:
case 2553:
case 3950:
case 286:
case 17:
case 3779:
case 3521:
case 896:
case 2708:
case 1688:
case 301:
case 2685:
case 1373:
case 719:
case 2264:
case 3703:
case 416:
case 2353:
case 2890:
case 1214:
case 1802:
case 1546:
case 3078:
case 3412:
case 1221:
case 2180:
case 2479:
case 4009:
case 2051:
case 3423:
case 174:
case 3439:
case 3894:
case 840:
case 162:
case 62:
case 1835:
case 2716:
case 1622:
case 3959:
case 1270:
case 1256:
case 2730:
case 1613:
case 2790:
case 2158:
case 3838:
case 3047:
case 3592:
case 774:
case 666:
case 90:
case 1532:
case 3428:
case 1233:
case 3627:
case 4042:
case 2192:
case 4018:
case 3056:
case 674:
case 3011:
case 2923:
case 1297:
case 3504:
case 2942:
case 3522:
case 1863:
case 3990:
case 3482:
case 4061:
case 1052:
case 3283:
case 593:
case 1849:
case 3180:
case 1816:
case 3440:
case 1142:
case 885:
case 2578:
case 1397:
case 2575:
case 2460:
case 2798:
case 3390:
case 757:
case 3310:
case 2311:
case 573:
case 3860:
case 1492:
case 138:
case 1260:
case 3371:
case 701:
case 1304:
case 677:
case 158:
case 1941:
case 944:
case 1005:
case 946:
case 2159:
case 2818:
case 3976:
case 3795:
case 1080:
case 2299:
case 1864:
case 2203:
case 3374:
case 3083:
case 397:
case 205:
case 3306:
case 3625:
case 802:
case 2595:
case 2963:
case 1829:
case 2234:
case 1995:
case 1560:
case 2791:
case 711:
case 1160:
case 2358:
case 1490:
case 3721:
case 2276:
case 2452:
case 1184:
case 3660:
case 1748:
case 1918:
case 671:
case 2659:
case 2957:
case 1591:
case 3767:
case 1332:
case 3424:
case 3459:
case 2989:
case 435:
case 3416:
case 2880:
case 3699:
case 95:
case 3726:
case 4037:
case 2223:
case 2477:
case 4005:
case 1626:
case 1930:
case 1898:
case 3647:
case 453:
case 3584:
case 2796:
case 1982:
case 1818:
case 621:
case 524:
case 3813:
case 207:
case 2348:
case 1663:
case 2496:
case 1351:
case 1010:
case 2107:
case 1977:
case 1664:
case 1990:
case 3071:
case 1070:
case 1517:
case 3751:
case 2501:
case 3657:
case 2170:
case 1839:
case 2492:
case 2037:
case 478:
case 3028:
case 3966:
case 2889:
case 119:
case 3463:
case 2131:
case 3807:
case 3818:
case 85:
case 3414:
case 809:
case 1893:
case 554:
case 3277:
case 2145:
case 2171:
case 37:
case 329:
case 3619:
case 1592:
case 2778:
case 505:
case 2142:
case 2162:
case 1044:
case 3467:
case 3359:
case 159:
case 1446:
case 2465:
case 1946:
case 3066:
case 616:
case 3711:
case 3384:
case 3853:
case 2729:
case 2681:
case 3951:
case 122:
case 3063:
case 998:
case 86:
case 1155:
case 2711:
case 3789:
case 1557:
case 860:
case 26:
case 3663:
case 1935:
case 948:
case 2895:
case 1458:
case 1774:
case 1502:
case 2648:
case 526:
case 3307:
case 1756:
case 2646:
case 327:
case 1170:
case 1731:
case 411:
case 2493:
case 765:
case 846:
case 2433:
case 3168:
case 109:
case 2532:
case 726:
case 3526:
case 3909:
case 617:
case 1346:
case 2636:
case 2036:
case 890:
case 1725:
case 352:
case 2830:
case 2671:
case 271:
case 1470:
case 3615:
case 2503:
case 3341:
case 2371:
case 75:
case 878:
case 1744:
case 127:
case 2733:
case 1685:
case 870:
case 710:
case 794:
case 1074:
case 1460:
case 2841:
case 1944:
case 623:
case 3433:
case 2004:
case 2607:
case 2821:
case 2749:
case 1157:
case 2783:
case 3914:
case 1483:
case 1937:
case 1262:
case 16:
case 1996:
case 2178:
case 3089:
case 2718:
case 431:
case 2324:
case 1687:
case 2946:
case 4077:
case 641:
case 495:
case 3435:
case 3595:
case 2784:
case 1600:
case 8:
case 378:
case 892:
case 1457:
case 3995:
case 135:
case 2580:
case 1174:
case 3126:
case 3498:
case 3727:
case 408:
case 1471:
case 4017:
case 1815:
case 1117:
case 304:
case 3775:
case 871:
case 2128:
case 3144:
case 3058:
case 2909:
case 1252:
case 1450:
case 2874:
case 1125:
case 3916:
case 3662:
case 2114:
case 3184:
case 1578:
case 2656:
case 1488:
case 3915:
case 3183:
case 1791:
case 3896:
case 2058:
case 3777:
case 2908:
case 2352:
case 3328:
case 1343:
case 736:
case 2984:
case 2980:
case 3596:
case 334:
case 613:
case 2316:
case 2622:
case 1017:
case 3565:
case 1284:
case 2253:
case 1249:
case 3243:
case 869:
case 549:
case 3291:
case 2077:
case 1409:
case 2885:
case 3454:
case 2683:
case 2548:
case 756:
case 472:
case 276:
case 3124:
case 1477:
case 3223:
case 3282:
case 2050:
case 3496:
case 2088:
case 2031:
case 1652:
case 2301:
case 571:
case 2165:
case 512:
case 1267:
case 1486:
case 540:
case 514:
case 230:
case 2700:
case 1066:
case 3800:
case 2151:
case 3096:
case 3460:
case 820:
case 3097:
case 2326:
case 3918:
case 1657:
case 2322:
case 500:
case 451:
case 3622:
case 2280:
case 2415:
case 1598:
case 3841:
case 2937:
case 3406:
case 3352:
case 100:
case 1541:
case 2261:
case 2482:
case 1587:
case 3681:
case 3677:
case 3357:
case 3766:
case 1217:
case 3181:
case 3494:
case 572:
case 335:
case 3287:
case 2759:
case 3006:
case 3431:
case 1059:
case 2910:
case 3540:
case 692:
case 154:
case 629:
case 2805:
case 3566:
case 806:
case 163:
case 1401:
case 697:
case 1579:
case 918:
case 2604:
case 72:
case 1191:
case 1713:
case 259:
case 1192:
case 102:
case 1231:
case 2469:
case 3259:
case 2563:
case 2833:
case 279:
case 1224:
case 217:
case 2907:
case 1769:
case 3758:
case 3319:
case 581:
case 893:
case 3278:
case 506:
case 2359:
case 2508:
case 3823:
case 3143:
case 2002:
case 817:
case 2702:
case 1476:
case 105:
case 3716:
case 1631:
case 967:
case 248:
case 1562:
case 1674:
case 4078:
case 1498:
case 1717:
case 3935:
case 1122:
case 381:
case 3700:
case 2285:
case 1512:
case 585:
case 926:
case 3479:
case 3042:
case 1804:
case 1306:
case 3620:
case 1501:
case 2834:
case 2023:
case 790:
case 3268:
case 2282:
case 3367:
case 1929:
case 3385:
case 1407:
case 3573:
case 1045:
case 2186:
case 3713:
case 358:
case 2112:
case 1307:
case 2486:
case 2250:
case 267:
case 1036:
case 2043:
case 3038:
case 1390:
case 463:
case 2125:
case 3644:
case 1654:
case 1449:
case 318:
case 1020:
case 295:
case 643:
case 252:
case 414:
case 3055:
case 3936:
case 1088:
case 1019:
case 681:
case 2961:
case 2838:
case 880:
case 1968:
case 2317:
case 4021:
case 1975:
case 3524:
case 707:
case 2728:
case 1141:
case 886:
case 1870:
case 1693:
case 3984:
case 515:
case 3216:
case 856:
case 3991:
case 725:
case 3624:
case 3919:
case 3534:
case 1867:
case 824:
case 1031:
case 913:
case 13:
case 1441:
case 1980:
case 3872:
case 3948:
case 3160:
case 1650:
case 1785:
case 212:
case 2272:
case 2110:
case 633:
case 859:
case 437:
case 4053:
case 32:
case 1226:
case 932:
case 1811:
case 781:
case 2055:
case 241:
case 2579:
case 195:
case 3128:
case 1469:
case 1111:
case 2009:
case 2992:
case 1485:
case 3349:
case 3379:
case 1197:
case 1379:
case 115:
case 3640:
case 466:
case 1750:
case 1057:
case 2761:
case 3084:
case 2557:
case 410:
case 1707:
case 346:
case 3148:
case 3364:
case 963:
case 977:
case 61:
case 1015:
case 3685:
case 1265:
case 1861:
case 1872:
case 3171:
case 2304:
case 3824:
case 778:
case 3906:
case 2475:
case 291:
case 2070:
case 1464:
case 2715:
case 306:
case 2952:
case 2598:
case 2694:
case 3957:
case 319:
case 1220:
case 827:
case 1423:
case 732:
case 3081:
case 834:
case 272:
case 3493:
case 3032:
case 678:
case 1101:
case 3658:
case 1381:
case 1939:
case 2363:
case 1121:
case 1370:
case 3577:
case 3358:
case 1257:
case 3:
case 1375:
case 917:
case 2936:
case 1099:
case 1095:
case 3021:
case 2360:
case 446:
case 1966:
case 2679:
case 2543:
case 3408:
case 4052:
case 1016:
case 1635:
case 941:
case 3667:
case 3070:
case 661:
case 3481:
case 1046:
case 832:
case 3368:
case 1302:
case 921:
case 2173:
case 523:
case 2416:
case 2387:
case 79:
case 447:
case 3387:
case 3099:
case 2400:
case 3874:
case 1133:
case 978:
case 622:
case 3937:
case 1776:
case 1183:
case 3477:
case 1515:
case 344:
case 92:
case 2932:
case 355:
case 330:
case 3774:
case 2499:
case 969:
case 1686:
case 3351:
case 2361:
case 1719:
case 1682:
case 2606:
case 3468:
case 2060:
case 468:
case 3696:
case 3650:
case 1253:
case 1236:
case 269:
case 3551:
case 3770:
case 445:
case 704:
case 2389:
case 1625:
case 727:
case 3895:
case 2641:
case 2888:
case 731:
case 631:
case 167:
case 1757:
case 580:
case 1638:
case 1311:
case 705:
case 2610:
case 3836:
case 899:
case 433:
case 1555:
case 3591:
case 313:
case 606:
case 630:
case 1833:
case 1897:
case 1755:
case 1047:
case 1821:
case 1382:
case 2335:
case 3797:
case 1576:
case 4003:
case 4057:
case 1643:
case 3231:
case 1438:
case 3464:
case 2006:
case 2374:
case 2010:
case 1131:
case 3943:
case 1176:
case 1696:
case 1611:
case 814:
case 3049:
case 3946:
case 1800:
case 1528:
case 1097:
case 3207:
case 3979:
case 2302:
case 649:
case 2424:
case 1805:
case 2380:
case 955:
case 3923:
case 1011:
case 665:
case 63:
case 42:
case 2392:
case 1904:
case 2547:
case 3597:
case 2593:
case 2294:
case 2157:
case 897:
case 1763:
case 139:
case 2987:
case 1837:
case 3296:
case 3041:
case 1675:
case 1314:
case 2468:
case 3892:
case 1590:
case 599:
case 2046:
case 3457:
case 738:
case 1943:
case 1825:
case 2997:
case 3405:
case 1389:
case 2455:
case 1394:
case 3254:
case 830:
case 3483:
case 1416:
case 734:
case 1138:
case 133:
case 180:
case 3901:
case 3176:
case 3799:
case 1586:
case 1387:
case 2839:
case 2122:
case 929:
case 530:
case 3473:
case 2481:
case 997:
case 3236:
case 2325:
case 759:
case 657:
case 1337:
case 323:
case 1859:
case 2431:
case 1041:
case 2446:
case 3108:
case 2256:
case 475:
case 2755:
case 3425:
case 3752:
case 2265:
case 975:
case 3855:
case 4090:
case 1087:
case 1130:
case 3656:
case 2252:
case 238:
case 425:
case 3404:
case 4014:
case 2135:
case 3234:
case 3158:
case 954:
case 3466:
case 2309:
case 3151:
case 784:
case 2809:
case 940:
case 142:
case 2334:
case 2938:
case 2487:
case 1289:
case 3261:
case 1745:
case 3330:
case 2412:
case 722:
case 2722:
case 564:
case 3314:
case 2723:
case 1329:
case 3787:
case 1283:
case 3370:
case 866:
case 350:
case 2626:
case 2472:
case 3068:
case 388:
case 1671:
case 2019:
case 80:
case 2021:
case 4066:
case 3513:
case 2699:
case 494:
case 2039:
case 2259:
case 3876:
case 3602:
case 660:
case 2339:
case 255:
case 3790:
case 829:
case 2520:
case 88:
case 2954:
case 1766:
case 1505:
case 2220:
case 465:
case 2956:
case 153:
case 2242:
case 199:
case 1570:
case 854:
case 1301:
case 2083:
case 798:
case 1518:
case 939:
case 3897:
case 992:
case 1288:
case 1504:
case 1573:
case 2123:
case 3532:
case 2297:
case 4051:
case 3705:
case 1537:
case 2218:
case 3745:
case 867:
case 850:
case 1067:
case 2996:
case 3508:
case 1013:
case 3955:
case 4082:
case 3840:
case 1902:
case 1612:
case 1147:
case 308:
case 2896:
case 3088:
case 2330:
case 3598:
case 2022:
case 191:
case 1661:
case 687:
case 527:
case 3320:
case 382:
case 2774:
case 299:
case 3954:
case 3300:
case 3875:
case 3643:
case 1764:
case 1266:
case 1148:
case 1792:
case 1572:
case 4012:
case 1950:
case 1747:
case 3474:
case 766:
case 605:
case 369:
case 1503:
case 2513:
case 3429:
case 2184:
case 1374:
case 2522:
case 1499:
case 2988:
case 3517:
case 480:
case 3031:
case 2999:
case 3362:
case 1920:
case 1630:
case 3403:
case 3686:
case 1885:
case 2973:
case 821:
case 3732:
case 282:
case 764:
case 2139:
case 150:
case 2975:
case 761:
case 1852:
case 971:
case 2228:
case 937:
case 3034:
case 529:
case 485:
case 804:
case 1250:
case 1158:
case 1513:
case 4010:
case 3806:
case 1786:
case 938:
case 901:
case 337:
case 1243:
case 1481:
case 2502:
case 1728:
case 3702:
case 2341:
case 1824:
case 30:
case 4027:
case 2227:
case 1798:
case 730:
case 3149:
case 372:
case 3960:
case 3218:
case 3271:
case 2456:
case 1181:
case 3438:
case 2053:
case 3430:
case 3969:
case 2585:
case 2437:
case 3803:
case 2894:
case 1156:
case 179:
case 1429:
case 428:
case 2059:
case 3531:
case 3738:
case 353:
case 3343:
case 1581:
case 1632:
case 1190:
case 3679:
case 1777:
case 3511:
case 464:
case 27:
case 2565:
case 2295:
case 454:
case 1565:
case 1767:
case 1539:
case 3365:
case 996:
case 2554:
case 807:
case 401:
case 1797:
case 1854:
case 1621:
case 489:
case 3077:
case 1340:
case 2813:
case 1437:
case 619:
case 1636:
case 1026:
case 1976:
case 2011:
case 2591:
case 3864:
case 1519:
case 952:
case 3722:
case 2845:
case 2065:
case 2981:
case 3258:
case 1034:
case 3608:
case 874:
case 3974:
case 3544:
case 2863:
case 862:
case 3086:
case 3847:
case 1418:
case 361:
case 2630:
case 1608:
case 2763:
case 3326:
case 459:
case 2843:
case 1093:
case 3354:
case 348:
case 3079:
case 2214:
case 3519:
case 797:
case 2930:
case 4033:
case 1820:
case 143:
case 3146:
case 2911:
case 116:
case 422:
case 2064:
case 3448:
case 2851:
case 1372:
case 366:
case 3817:
case 2872:
case 3232:
case 3449:
case 1264:
case 2534:
case 714:
case 3082:
case 3659:
case 2949:
case 3308:
case 2625:
case 1027:
case 3127:
case 112:
case 3856:
case 3831:
case 1971:
case 911:
case 582:
case 2262:
case 1911:
case 928:
case 958:
case 3675:
case 1463:
case 2014:
case 264:
case 1746:
case 1305:
case 321:
case 300:
case 1922:
case 91:
case 3965:
case 103:
case 2698:
case 3398:
case 1440:
case 1406:
case 3022:
case 584:
case 1641:
case 1474:
case 1328:
case 2474:
case 1349:
case 3012:
case 702:
case 4034:
case 2689:
case 3576:
case 2943:
case 3276:
case 3090:
case 3669:
case 4019:
case 314:
case 3048:
case 715:
case 951:
case 457:
case 2445:
case 2906:
case 2450:
case 1335:
case 848:
case 1444:
case 3240:
case 836:
case 773:
case 1845:
case 924:
case 2187:
case 1123:
case 2675:
case 1711:
case 813:
case 776:
case 2732:
case 2194:
case 881:
case 4088:
case 2799:
case 3495:
case 3103:
case 3355:
case 20:
case 1724:
case 2422:
case 1313:
case 800:
case 3822:
case 3975:
case 3804:
case 170:
case 3562:
case 1188:
case 1212:
case 694:
case 3114:
case 49:
case 2087:
case 3018:
case 1627:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1700200802/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,];
var gg_b = "1700200802/";

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
