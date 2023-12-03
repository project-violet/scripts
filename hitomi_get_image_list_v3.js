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
case 3785:
case 2180:
case 4052:
case 1154:
case 3953:
case 405:
case 2472:
case 2383:
case 1577:
case 2793:
case 1279:
case 2014:
case 97:
case 2978:
case 836:
case 1959:
case 1827:
case 2139:
case 2885:
case 2223:
case 1521:
case 2657:
case 2761:
case 3031:
case 3073:
case 3324:
case 1041:
case 3586:
case 639:
case 2414:
case 3884:
case 598:
case 415:
case 2037:
case 3904:
case 2825:
case 110:
case 3138:
case 684:
case 2312:
case 3606:
case 637:
case 2326:
case 3235:
case 235:
case 1060:
case 3536:
case 3232:
case 1314:
case 659:
case 1222:
case 3530:
case 3820:
case 3051:
case 3318:
case 673:
case 3211:
case 3233:
case 3782:
case 611:
case 3841:
case 1346:
case 3610:
case 3275:
case 1326:
case 1217:
case 716:
case 3265:
case 3886:
case 3617:
case 314:
case 1540:
case 2670:
case 3626:
case 2618:
case 396:
case 3755:
case 3321:
case 2136:
case 3351:
case 466:
case 1970:
case 1365:
case 2916:
case 2925:
case 4031:
case 772:
case 117:
case 147:
case 1131:
case 3668:
case 3711:
case 2673:
case 3006:
case 1052:
case 1520:
case 2249:
case 1478:
case 1003:
case 148:
case 2832:
case 813:
case 204:
case 3734:
case 746:
case 3922:
case 3891:
case 1366:
case 2343:
case 1090:
case 3651:
case 2876:
case 2895:
case 3740:
case 2843:
case 2593:
case 1185:
case 1646:
case 3013:
case 2747:
case 3970:
case 2075:
case 1682:
case 1134:
case 695:
case 2617:
case 1027:
case 384:
case 315:
case 597:
case 803:
case 2744:
case 1084:
case 2946:
case 3810:
case 3078:
case 3529:
case 244:
case 3142:
case 1470:
case 2013:
case 425:
case 3773:
case 713:
case 4045:
case 2609:
case 3322:
case 1606:
case 3613:
case 367:
case 2633:
case 1152:
case 555:
case 407:
case 45:
case 865:
case 39:
case 421:
case 3830:
case 1123:
case 2453:
case 1320:
case 1227:
case 2965:
case 1157:
case 3272:
case 3488:
case 2623:
case 3718:
case 3364:
case 641:
case 3875:
case 3749:
case 3514:
case 3779:
case 3079:
case 1929:
case 2935:
case 2575:
case 1149:
case 2154:
case 1636:
case 3140:
case 3769:
case 986:
case 3557:
case 632:
case 2305:
case 2370:
case 3505:
case 3422:
case 2240:
case 1413:
case 393:
case 3633:
case 1987:
case 3614:
case 2426:
case 3074:
case 993:
case 3679:
case 2850:
case 2027:
case 1659:
case 1928:
case 2728:
case 1337:
case 1926:
case 3157:
case 2148:
case 1324:
case 1982:
case 3118:
case 1310:
case 861:
case 3457:
case 2011:
case 1105:
case 3276:
case 3750:
case 214:
case 1551:
case 2694:
case 1774:
case 3312:
case 1535:
case 1269:
case 3234:
case 1080:
case 3392:
case 2830:
case 3741:
case 1393:
case 1747:
case 306:
case 3929:
case 2933:
case 2373:
case 1373:
case 917:
case 295:
case 3041:
case 288:
case 591:
case 127:
case 1153:
case 3920:
case 662:
case 3282:
case 1603:
case 298:
case 3175:
case 2626:
case 1610:
case 3897:
case 1086:
case 1295:
case 2270:
case 2590:
case 1681:
case 1006:
case 2047:
case 3174:
case 3968:
case 350:
case 3899:
case 1343:
case 2387:
case 1455:
case 2706:
case 3489:
case 1770:
case 144:
case 2996:
case 335:
case 809:
case 3506:
case 2614:
case 3854:
case 3393:
case 2392:
case 3796:
case 116:
case 450:
case 192:
case 1410:
case 3084:
case 723:
case 3144:
case 3645:
case 4001:
case 2431:
case 2936:
case 3704:
case 3967:
case 3661:
case 2423:
case 3450:
case 378:
case 3865:
case 1462:
case 3634:
case 3096:
case 159:
case 3554:
case 629:
case 1370:
case 999:
case 2647:
case 1719:
case 1860:
case 2820:
case 2076:
case 1245:
case 3652:
case 1889:
case 848:
case 589:
case 1648:
case 3395:
case 3701:
case 2818:
case 2108:
case 2243:
case 3401:
case 3596:
case 1426:
case 3403:
case 1225:
case 2961:
case 3058:
case 1619:
case 767:
case 3375:
case 3832:
case 1274:
case 3956:
case 3420:
case 287:
case 186:
case 2299:
case 3729:
case 1473:
case 2104:
case 1844:
case 1339:
case 2753:
case 1012:
case 1020:
case 709:
case 1644:
case 2642:
case 3335:
case 866:
case 2837:
case 1667:
case 362:
case 3053:
case 3739:
case 3880:
case 3938:
case 1567:
case 3293:
case 968:
case 2511:
case 391:
case 230:
case 775:
case 2448:
case 2784:
case 1355:
case 3336:
case 1053:
case 3369:
case 1858:
case 2503:
case 906:
case 3151:
case 2268:
case 210:
case 2221:
case 2151:
case 1817:
case 317:
case 1161:
case 519:
case 1884:
case 2868:
case 554:
case 4011:
case 1383:
case 3697:
case 381:
case 1454:
case 3245:
case 3411:
case 882:
case 1692:
case 734:
case 3034:
case 2272:
case 2216:
case 2052:
case 1170:
case 1701:
case 35:
case 2197:
case 731:
case 81:
case 2282:
case 3379:
case 2693:
case 3104:
case 2700:
case 3960:
case 3885:
case 1201:
case 4024:
case 2512:
case 2462:
case 377:
case 1162:
case 2277:
case 2160:
case 2974:
case 1528:
case 2817:
case 1356:
case 689:
case 2689:
case 1223:
case 3134:
case 2487:
case 1983:
case 4032:
case 2152:
case 2749:
case 3036:
case 2418:
case 2114:
case 1649:
case 2319:
case 985:
case 991:
case 2336:
case 3943:
case 2707:
case 2896:
case 1994:
case 3332:
case 3498:
case 2521:
case 1674:
case 2429:
case 1765:
case 625:
case 1434:
case 2081:
case 2347:
case 3615:
case 970:
case 333:
case 3183:
case 1949:
case 2101:
case 751:
case 3940:
case 2466:
case 2886:
case 1727:
case 2494:
case 67:
case 587:
case 2724:
case 762:
case 756:
case 1429:
case 2663:
case 119:
case 3384:
case 1887:
case 1628:
case 420:
case 654:
case 922:
case 700:
case 1637:
case 3261:
case 2801:
case 2231:
case 2983:
case 2750:
case 2456:
case 3308:
case 1724:
case 661:
case 2685:
case 636:
case 226:
case 3754:
case 3538:
case 3048:
case 801:
case 2927:
case 787:
case 3502:
case 2906:
case 3004:
case 1198:
case 3936:
case 964:
case 1990:
case 150:
case 1911:
case 3117:
case 1214:
case 2565:
case 1935:
case 3262:
case 2866:
case 545:
case 1683:
case 3493:
case 1130:
case 2286:
case 3064:
case 839:
case 3826:
case 3337:
case 1093:
case 3647:
case 823:
case 3702:
case 2489:
case 3349:
case 1175:
case 2650:
case 3829:
case 3784:
case 1745:
case 3474:
case 438:
case 655:
case 3946:
case 2551:
case 2814:
case 2699:
case 3069:
case 2890:
case 1781:
case 1241:
case 2794:
case 1354:
case 2892:
case 3071:
case 2846:
case 1312:
case 253:
case 2655:
case 1390:
case 2582:
case 741:
case 844:
case 1461:
case 568:
case 3781:
case 1195:
case 3966:
case 1896:
case 1221:
case 2555:
case 1793:
case 1888:
case 2017:
case 3689:
case 2771:
case 190:
case 169:
case 3791:
case 1988:
case 4041:
case 79:
case 1762:
case 1449:
case 3109:
case 2610:
case 2816:
case 1417:
case 3226:
case 3092:
case 1626:
case 2514:
case 4002:
case 2683:
case 1867:
case 4044:
case 1784:
case 974:
case 3833:
case 3649:
case 3985:
case 14:
case 2067:
case 413:
case 2458:
case 4057:
case 3094:
case 1327:
case 3676:
case 3909:
case 1026:
case 913:
case 1233:
case 283:
case 1951:
case 774:
case 1411:
case 3418:
case 3296:
case 400:
case 2762:
case 3575:
case 3683:
case 3977:
case 1766:
case 1600:
case 1892:
case 1622:
case 3236:
case 2864:
case 2535:
case 1543:
case 1485:
case 1107:
case 2962:
case 2587:
case 3850:
case 586:
case 1578:
case 2133:
case 356:
case 99:
case 1081:
case 1507:
case 3816:
case 1447:
case 3025:
case 854:
case 2004:
case 2451:
case 209:
case 1849:
case 3413:
case 594:
case 2203:
case 3971:
case 2704:
case 2208:
case 3362:
case 2828:
case 1148:
case 3705:
case 164:
case 1486:
case 3396:
case 2894:
case 1180:
case 179:
case 445:
case 2594:
case 1174:
case 1585:
case 3658:
case 281:
case 3872:
case 133:
case 65:
case 1056:
case 2078:
case 3331:
case 1605:
case 1917:
case 3623:
case 3963:
case 2436:
case 2432:
case 1307:
case 3110:
case 1389:
case 2964:
case 482:
case 2881:
case 4086:
case 1612:
case 3532:
case 1919:
case 553:
case 2772:
case 1584:
case 936:
case 373:
case 3149:
case 4028:
case 3113:
case 265:
case 69:
case 939:
case 1899:
case 3385:
case 3435:
case 1250:
case 2146:
case 667:
case 2376:
case 770:
case 870:
case 2839:
case 2318:
case 3874:
case 4072:
case 549:
case 841:
case 3666:
case 4075:
case 3901:
case 3205:
case 820:
case 3685:
case 4034:
case 1262:
case 3467:
case 3468:
case 3590:
case 3067:
case 1143:
case 1452:
case 3526:
case 1703:
case 1758:
case 1852:
case 2838:
case 1204:
case 3033:
case 788:
case 5:
case 77:
case 2528:
case 2035:
case 171:
case 1118:
case 3432:
case 880:
case 1706:
case 1857:
case 4029:
case 2995:
case 3056:
case 437:
case 960:
case 722:
case 938:
case 3822:
case 610:
case 515:
case 289:
case 2166:
case 2636:
case 463:
case 1079:
case 3723:
case 2048:
case 2891:
case 2774:
case 1406:
case 189:
case 3612:
case 2645:
case 387:
case 3444:
case 60:
case 2591:
case 4004:
case 500:
case 2723:
case 2482:
case 2931:
case 332:
case 2063:
case 1323:
case 1779:
case 578:
case 2766:
case 2602:
case 3570:
case 2071:
case 622:
case 2457:
case 3622:
case 2811:
case 2044:
case 2595:
case 2000:
case 2465:
case 877:
case 428:
case 3561:
case 3799:
case 243:
case 431:
case 3921:
case 2195:
case 708:
case 1897:
case 2879:
case 1716:
case 1092:
case 3541:
case 3156:
case 3168:
case 826:
case 1707:
case 1536:
case 2607:
case 1141:
case 293:
case 834:
case 2389:
case 220:
case 1627:
case 3317:
case 2627:
case 2583:
case 3815:
case 2951:
case 1718:
case 2057:
case 2273:
case 571:
case 71:
case 3028:
case 2303:
case 1235:
case 2954:
case 2252:
case 2531:
case 1226:
case 3568:
case 2372:
case 160:
case 853:
case 781:
case 1278:
case 90:
case 399:
case 2219:
case 3044:
case 3900:
case 1073:
case 4055:
case 688:
case 3419:
case 3853:
case 1749:
case 9:
case 203:
case 987:
case 2449:
case 486:
case 1207:
case 2579:
case 239:
case 3108:
case 3864:
case 29:
case 1137:
case 1802:
case 435:
case 502:
case 559:
case 2792:
case 551:
case 1:
case 1101:
case 3700:
case 1059:
case 2695:
case 3366:
case 368:
case 634:
case 2540:
case 268:
case 1237:
case 3775:
case 229:
case 198:
case 2049:
case 2754:
case 50:
case 3860:
case 2760:
case 1401:
case 2082:
case 3469:
case 724:
case 3642:
case 1633:
case 2979:
case 679:
case 430:
case 3066:
case 1909:
case 2361:
case 2539:
case 1135:
case 2770:
case 3000:
case 1347:
case 2757:
case 1272:
case 2596:
case 1823:
case 459:
case 2033:
case 1629:
case 3017:
case 3377:
case 3708:
case 3119:
case 3173:
case 878:
case 2034:
case 3866:
case 3942:
case 1151:
case 548:
case 2520:
case 725:
case 3644:
case 1298:
case 3712:
case 1009:
case 4051:
case 3475:
case 1799:
case 89:
case 2441:
case 2241:
case 2919:
case 2368:
case 1916:
case 2675:
case 845:
case 3527:
case 3859:
case 3550:
case 683:
case 2407:
case 2701:
case 3618:
case 346:
case 1183:
case 2446:
case 2440:
case 3248:
case 2733:
case 2808:
case 2967:
case 2884:
case 359:
case 3752:
case 886:
case 453:
case 3256:
case 2121:
case 540:
case 1160:
case 2256:
case 2834:
case 112:
case 1678:
case 185:
case 798:
case 1890:
case 2226:
case 2385:
case 382:
case 3303:
case 221:
case 2851:
case 3462:
case 383:
case 1688:
case 2153:
case 4058:
case 706:
case 1971:
case 1999:
case 3804:
case 2711:
case 3200:
case 916:
case 1114:
case 3150:
case 2576:
case 628:
case 3954:
case 3483:
case 3988:
case 2984:
case 2348:
case 1242:
case 135:
case 1560:
case 3817:
case 2948:
case 1210:
case 1687:
case 4009:
case 518:
case 3599:
case 3992:
case 2786:
case 2198:
case 1067:
case 2479:
case 13:
case 3580:
case 3515:
case 1722:
case 2206:
case 1416:
case 1694:
case 1946:
case 2492:
case 257:
case 1253:
case 2242:
case 2281:
case 2929:
case 2546:
case 3155:
case 3757:
case 3050:
case 2289:
case 657:
case 170:
case 2002:
case 340:
case 719:
case 3412:
case 675:
case 180:
case 84:
case 2001:
case 2553:
case 901:
case 1028:
case 3263:
case 2726:
case 3607:
case 157:
case 3076:
case 2327:
case 672:
case 897:
case 2334:
case 1931:
case 1418:
case 1615:
case 2396:
case 3925:
case 3338:
case 1677:
case 2649:
case 3452:
case 2822:
case 1601:
case 3230:
case 248:
case 804:
case 3987:
case 162:
case 1518:
case 4082:
case 1116:
case 3188:
case 690:
case 3005:
case 564:
case 3910:
case 1618:
case 2019:
case 2481:
case 2883:
case 3577:
case 2098:
case 1228:
case 1236:
case 1562:
case 3965:
case 4013:
case 11:
case 2867:
case 2065:
case 3077:
case 3919:
case 282:
case 2054:
case 1660:
case 1384:
case 72:
case 371:
case 2721:
case 2938:
case 1284:
case 344:
case 2782:
case 2086:
case 3009:
case 1868:
case 443:
case 3032:
case 199:
case 338:
case 1696:
case 2571:
case 3518:
case 1651:
case 2671:
case 818:
case 3989:
case 58:
case 2616:
case 2301:
case 3915:
case 663:
case 2464:
case 3997:
case 3703:
case 277:
case 510:
case 668:
case 2823:
case 4042:
case 931:
case 2912:
case 2323:
case 3003:
case 1985:
case 2662:
case 1525:
case 2030:
case 1363:
case 3937:
case 499:
case 585:
case 1788:
case 1297:
case 1283:
case 4091:
case 627:
case 109:
case 2118:
case 2339:
case 3097:
case 1190:
case 462:
case 3556:
case 760:
case 2812:
case 1289:
case 1317:
case 1444:
case 1000:
case 2742:
case 1958:
case 165:
case 2620:
case 1263:
case 3346:
case 1840:
case 85:
case 2767:
case 1015:
case 2274:
case 2741:
case 3981:
case 1855:
case 2826:
case 817:
case 1254:
case 476:
case 2802:
case 1078:
case 1565:
case 2691:
case 2424:
case 2061:
case 3274:
case 3326:
case 942:
case 3237:
case 2769:
case 3007:
case 3713:
case 943:
case 2142:
case 1589:
case 324:
case 4092:
case 608:
case 973:
case 618:
case 1837:
case 1597:
case 202:
case 1147:
case 825:
case 664:
case 3152:
case 744:
case 3208:
case 1083:
case 2135:
case 1197:
case 842:
case 1209:
case 457:
case 3103:
case 3460:
case 254:
case 4094:
case 3597:
case 2952:
case 2667:
case 114:
case 1075:
case 1404:
case 2261:
case 1511:
case 3307:
case 640:
case 3022:
case 2651:
case 75:
case 1106:
case 3178:
case 2156:
case 106:
case 790:
case 850:
case 2656:
case 3371:
case 3386:
case 102:
case 2917:
case 4046:
case 2840:
case 4027:
case 1739:
case 1335:
case 3314:
case 1968:
case 2751:
case 1077:
case 2222:
case 3018:
case 2578:
case 3834:
case 3454:
case 1219:
case 2552:
case 3163:
case 1091:
case 3368:
case 615:
case 3551:
case 3738:
case 88:
case 2942:
case 1960:
case 1854:
case 26:
case 2748:
case 1155:
case 1616:
case 363:
case 1005:
case 3951:
case 3751:
case 1818:
case 3400:
case 521:
case 2250:
case 1328:
case 3688:
case 778:
case 3111:
case 2051:
case 3446:
case 3040:
case 4050:
case 301:
case 1013:
case 609:
case 3543:
case 2644:
case 3290:
case 2887:
case 3348:
case 139:
case 1751:
case 1704:
case 3010:
case 2260:
case 1231:
case 3637:
case 1555:
case 2990:
case 926:
case 1834:
case 3443:
case 1173:
case 1675:
case 2419:
case 3166:
case 1049:
case 2375:
case 2196:
case 941:
case 1267:
case 3843:
case 3709:
case 1759:
case 1885:
case 3295:
case 3405:
case 1331:
case 308:
case 1421:
case 2907:
case 458:
case 98:
case 3737:
case 1494:
case 2871:
case 2105:
case 1863:
case 3552:
case 3501:
case 1128:
case 1497:
case 1271:
case 3060:
case 3871:
case 1477:
case 2848:
case 310:
case 3244:
case 1743:
case 3:
case 1586:
case 742:
case 3334:
case 3955:
case 2559:
case 2799:
case 3391:
case 2928:
case 961:
case 1588:
case 1595:
case 900:
case 3239:
case 3203:
case 3657:
case 599:
case 785:
case 1275:
case 2026:
case 24:
case 3198:
case 1308:
case 1206:
case 3964:
case 550:
case 1695:
case 1034:
case 3918:
case 222:
case 183:
case 61:
case 1088:
case 2367:
case 74:
case 677:
case 1908:
case 2905:
case 4066:
case 1864:
case 2315:
case 1613:
case 59:
case 495:
case 1559:
case 2:
case 347:
case 477:
case 1730:
case 2088:
case 1108:
case 596:
case 300:
case 303:
case 4065:
case 940:
case 1266:
case 3333:
case 2918:
case 3560:
case 279:
case 240:
case 419:
case 497:
case 2190:
case 1342:
case 2580:
case 107:
case 1469:
case 504:
case 576:
case 130:
case 2863:
case 2654:
case 1797:
case 1436:
case 2605:
case 3257:
case 1826:
case 4076:
case 3292:
case 2062:
case 2880:
case 2204:
case 701:
case 1876:
case 2960:
case 2236:
case 2083:
case 806:
case 275:
case 3976:
case 1394:
case 3378:
case 201:
case 3646:
case 1734:
case 1580:
case 2452:
case 1381:
case 2577:
case 837:
case 1803:
case 4089:
case 914:
case 3042:
case 4049:
case 1261:
case 507:
case 2294:
case 2937:
case 3839:
case 786:
case 2901:
case 1712:
case 2161:
case 1522:
case 503:
case 1420:
case 975:
case 2400:
case 3373:
case 3517:
case 1468:
case 3383:
case 1906:
case 2515:
case 2338:
case 2681:
case 718:
case 245:
case 2292:
case 1475:
case 814:
case 617:
case 3342:
case 1680:
case 3458:
case 3548:
case 1851:
case 3227:
case 2132:
case 2686:
case 2549:
case 1592:
case 1792:
case 0:
case 759:
case 2374:
case 2944:
case 4071:
case 411:
case 649:
case 952:
case 714:
case 2012:
case 3269:
case 791:
case 815:
case 3828:
case 911:
case 2074:
case 2480:
case 3167:
case 4014:
case 1415:
case 2046:
case 1432:
case 4035:
case 2584:
case 2288:
case 234:
case 4080:
case 3029:
case 3821:
case 3565:
case 1247:
case 1634:
case 904:
case 212:
case 1119:
case 3792:
case 27:
case 1845:
case 337:
case 349:
case 3047:
case 3731:
case 3080:
case 4015:
case 2155:
case 2732:
case 22:
case 478:
case 1998:
case 2939:
case 963:
case 161:
case 174:
case 1672:
case 3672:
case 644:
case 3996:
case 3687:
case 3547:
case 2807:
case 285:
case 3358:
case 196:
case 3745:
case 30:
case 3495:
case 601:
case 588:
case 1532:
case 3049:
case 1460:
case 2893:
case 3027:
case 3008:
case 2201:
case 3016:
case 2680:
case 1002:
case 1348:
case 3298:
case 2163:
case 3442:
case 3212:
case 448:
case 278:
case 2340:
case 1014:
case 2399:
case 733:
case 2997:
case 3492:
case 491:
case 2354:
case 1167:
case 1425:
case 976:
case 748:
case 1352:
case 2126:
case 4061:
case 57:
case 1853:
case 768:
case 1124:
case 3105:
case 1260:
case 3099:
case 494:
case 2183:
case 3655:
case 3639:
case 2474:
case 3011:
case 1218:
case 3294:
case 284:
case 447:
case 513:
case 620:
case 2040:
case 1862:
case 3260:
case 1709:
case 3107:
case 2232:
case 49:
case 773:
case 1037:
case 366:
case 1256:
case 166:
case 1402:
case 3611:
case 2963:
case 793:
case 674:
case 2856:
case 2630:
case 319:
case 1614:
case 3409:
case 1702:
case 1016:
case 3043:
case 1750:
case 1071:
case 3693:
case 3459:
case 3598:
case 2113:
case 1736:
case 2191:
case 3359:
case 3065:
case 2443:
case 404:
case 3052:
case 3433:
case 1756:
case 1796:
case 2377:
case 2943:
case 4083:
case 763:
case 2506:
case 3476:
case 1632:
case 36:
case 3158:
case 2752:
case 2320:
case 2735:
case 2031:
case 910:
case 3399:
case 261:
case 2085:
case 981:
case 1786:
case 353:
case 1996:
case 2999:
case 304:
case 73:
case 3892:
case 4:
case 977:
case 2628:
case 2641:
case 1907:
case 3354:
case 1281:
case 3231:
case 124:
case 780:
case 1992:
case 103:
case 3523:
case 3059:
case 1714:
case 305:
case 489:
case 1140:
case 3716:
case 887:
case 3855:
case 2956:
case 1463:
case 2498:
case 271:
case 2537:
case 3246:
case 857:
case 2358:
case 1656:
case 1129:
case 2589:
case 2117:
case 177:
case 1617:
case 3319:
case 3912:
case 2567:
case 388:
case 1741:
case 3356:
case 1969:
case 120:
case 2116:
case 1095:
case 4085:
case 1506:
case 3477:
case 1035:
case 2805:
case 3771:
case 1811:
case 3581:
case 1427:
case 4010:
case 2237:
case 2422:
case 113:
case 720:
case 3210:
case 1607:
case 2036:
case 2538:
case 3790:
case 1351:
case 322:
case 1102:
case 3776:
case 1519:
case 1819:
case 3605:
case 1570:
case 1515:
case 3068:
case 912:
case 3259:
case 1967:
case 2795:
case 2158:
case 1336:
case 3305:
case 1048:
case 3021:
case 2806:
case 957:
case 1318:
case 3528:
case 2554:
case 3243:
case 2314:
case 80:
case 2923:
case 2211:
case 761:
case 980:
case 1458:
case 1111:
case 2914:
case 2233:
case 4038:
case 1776:
case 533:
case 2179:
case 2309:
case 1378:
case 2386:
case 1760:
case 3376:
case 758:
case 365:
case 2903:
case 1778:
case 1631:
case 4053:
case 3962:
case 2207:
case 3329:
case 1939:
case 712:
case 312:
case 2331:
case 650:
case 3225:
case 446:
case 3858:
case 2678:
case 2264:
case 2674:
case 796:
case 3465:
case 3982:
case 3694:
case 1804:
case 1302:
case 2527:
case 276:
case 2564:
case 2349:
case 3440:
case 2181:
case 2021:
case 2321:
case 485:
case 3835:
case 3145:
case 2619:
case 3424:
case 2447:
case 34:
case 3579:
case 33:
case 2388:
case 2087:
case 1510:
case 2010:
case 2921:
case 944:
case 3621:
case 2712:
case 764:
case 699:
case 1902:
case 2053:
case 3223:
case 3818:
case 2110:
case 1952:
case 2509:
case 2780:
case 2532:
case 223:
case 2976:
case 3717:
case 2875:
case 1496:
case 290:
case 918:
case 2042:
case 176:
case 924:
case 3363:
case 3896:
case 2499:
case 1058:
case 2972:
case 1981:
case 702:
case 1466:
case 3836:
case 2966:
case 2103:
case 1732:
case 309:
case 2468:
case 1814:
case 812:
case 1270:
case 1182:
case 111:
case 3917:
case 1545:
case 2278:
case 958:
case 1820:
case 3482:
case 1502:
case 1481:
case 747:
case 2276:
case 1783:
case 3686:
case 2682:
case 543:
case 1212:
case 582:
case 3629:
case 2796:
case 138:
case 855:
case 595:
case 1530:
case 2980:
case 2909:
case 516:
case 3862:
case 1726:
case 3093:
case 3147:
case 2720:
case 1639:
case 956:
case 665:
case 590:
case 1501:
case 2534:
case 3983:
case 1064:
case 1296:
case 19:
case 386:
case 258:
case 1573:
case 1875:
case 225:
case 2853:
case 3798:
case 743:
case 2862:
case 392:
case 1785:
case 3311:
case 3204:
case 784:
case 2873:
case 1138:
case 3287:
case 3273:
case 2427:
case 2313:
case 1464:
case 3842:
case 1699:
case 2737:
case 2690:
case 2548:
case 3585:
case 3500:
case 1923:
case 2435:
case 1861:
case 3619:
case 1950:
case 3762:
case 3030:
case 2987:
case 47:
case 1550:
case 1018:
case 86:
case 3199:
case 1277:
case 2077:
case 2858:
case 3360:
case 2072:
case 1544:
case 905:
case 2254:
case 417:
case 509:
case 1146:
case 1791:
case 3414:
case 1848:
case 3499:
case 776:
case 1684:
case 4020:
case 1431:
case 272:
case 2469:
case 2797:
case 351:
case 3675:
case 3879:
case 3344:
case 2653:
case 1265:
case 2556:
case 1655:
case 4073:
case 1243:
case 62:
case 82:
case 1676:
case 3286:
case 1978:
case 1856:
case 1924:
case 3913:
case 2787:
case 3082:
case 1428:
case 3486:
case 1541:
case 1974:
case 4043:
case 370:
case 3845:
case 200:
case 705:
case 3907:
case 1203:
case 3643:
case 3284:
case 1564:
case 2445:
case 1309:
case 2982:
case 2107:
case 1442:
case 898:
case 2390:
case 896:
case 3285:
case 745:
case 1700:
case 331:
case 4033:
case 1693:
case 1773:
case 3789:
case 2330:
case 630:
case 3291:
case 3720:
case 2586:
case 2550:
case 32:
case 1546:
case 3604:
case 2949:
case 6:
case 740:
case 3894:
case 3463:
case 2119:
case 3849:
case 218:
case 2897:
case 1166:
case 954:
case 3571:
case 546:
case 2263:
case 3490:
case 3684:
case 3310:
case 978:
case 3423:
case 621:
case 2023:
case 3578:
case 972:
case 2930:
case 1800:
case 2968:
case 3194:
case 3957:
case 2497:
case 2234:
case 3819:
case 824:
case 3445:
case 1711:
case 656:
case 436:
case 3883:
case 3328:
case 2544:
case 352:
case 1025:
case 676:
case 1369:
case 1144:
case 1399:
case 1405:
case 3774:
case 2332:
case 2128:
case 1698:
case 1375:
case 1772:
case 1598:
case 471:
case 2182:
case 3959:
case 91:
case 3503:
case 3190:
case 3015:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1701626401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,];
var gg_b = "1701626401/";

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
