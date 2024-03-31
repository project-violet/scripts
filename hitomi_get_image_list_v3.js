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
case 1059:
case 566:
case 2703:
case 3812:
case 179:
case 350:
case 1882:
case 3795:
case 1351:
case 2139:
case 1198:
case 150:
case 876:
case 243:
case 2817:
case 668:
case 3592:
case 337:
case 2861:
case 3775:
case 2977:
case 1661:
case 2100:
case 2366:
case 1377:
case 2789:
case 2449:
case 3063:
case 957:
case 1731:
case 301:
case 509:
case 1355:
case 908:
case 1373:
case 749:
case 2436:
case 402:
case 3879:
case 2523:
case 1674:
case 2695:
case 1099:
case 4048:
case 3616:
case 3000:
case 3712:
case 3920:
case 3411:
case 1973:
case 689:
case 4041:
case 2745:
case 2907:
case 734:
case 212:
case 3563:
case 997:
case 2092:
case 3721:
case 3759:
case 1293:
case 1211:
case 2571:
case 1392:
case 1932:
case 3554:
case 864:
case 704:
case 1407:
case 1107:
case 1658:
case 1133:
case 2945:
case 1988:
case 3999:
case 1638:
case 208:
case 3277:
case 3185:
case 3924:
case 2729:
case 1708:
case 3808:
case 3378:
case 2294:
case 1916:
case 3011:
case 2519:
case 2098:
case 933:
case 2865:
case 3893:
case 1090:
case 3413:
case 347:
case 2868:
case 1344:
case 1491:
case 3056:
case 1736:
case 887:
case 1159:
case 1187:
case 2533:
case 3805:
case 23:
case 3989:
case 1722:
case 399:
case 1143:
case 3919:
case 3875:
case 2119:
case 2546:
case 3746:
case 767:
case 3464:
case 1106:
case 250:
case 2645:
case 2251:
case 3593:
case 540:
case 2517:
case 3306:
case 2796:
case 2047:
case 1044:
case 2624:
case 2406:
case 2182:
case 2761:
case 3435:
case 968:
case 3169:
case 2991:
case 3961:
case 1048:
case 3043:
case 4050:
case 3859:
case 2398:
case 1079:
case 2029:
case 1900:
case 3946:
case 3262:
case 2426:
case 3997:
case 596:
case 1947:
case 1723:
case 1117:
case 3840:
case 99:
case 938:
case 1753:
case 1950:
case 2625:
case 1619:
case 3156:
case 2185:
case 2586:
case 839:
case 902:
case 1163:
case 1520:
case 967:
case 2052:
case 1193:
case 284:
case 3160:
case 1728:
case 2489:
case 1763:
case 14:
case 2202:
case 328:
case 1868:
case 215:
case 44:
case 574:
case 1529:
case 664:
case 624:
case 3064:
case 3260:
case 1913:
case 2204:
case 3637:
case 1089:
case 1544:
case 1345:
case 1927:
case 2479:
case 769:
case 4046:
case 3388:
case 1382:
case 895:
case 1578:
case 2851:
case 4021:
case 3878:
case 1150:
case 3244:
case 1385:
case 1594:
case 1602:
case 2562:
case 1785:
case 2311:
case 1515:
case 283:
case 1478:
case 2784:
case 2828:
case 3503:
case 1235:
case 2766:
case 1864:
case 2831:
case 1174:
case 374:
case 3288:
case 200:
case 3431:
case 2383:
case 549:
case 892:
case 1611:
case 174:
case 3557:
case 2923:
case 3794:
case 798:
case 2296:
case 4082:
case 1072:
case 521:
case 1798:
case 3595:
case 1777:
case 3927:
case 427:
case 1980:
case 4081:
case 450:
case 103:
case 669:
case 1953:
case 2697:
case 3017:
case 2608:
case 1791:
case 1945:
case 3733:
case 3098:
case 1828:
case 3521:
case 643:
case 2468:
case 3128:
case 3796:
case 3211:
case 1545:
case 2785:
case 3967:
case 2267:
case 1762:
case 844:
case 226:
case 2948:
case 1291:
case 525:
case 151:
case 294:
case 680:
case 3147:
case 3297:
case 3058:
case 1648:
case 1710:
case 1645:
case 367:
case 2563:
case 3239:
case 147:
case 3869:
case 929:
case 3702:
case 1349:
case 1215:
case 1050:
case 3678:
case 2054:
case 553:
case 2969:
case 1597:
case 1126:
case 782:
case 731:
case 570:
case 1672:
case 3700:
case 1768:
case 2522:
case 82:
case 587:
case 464:
case 3887:
case 3035:
case 2614:
case 1130:
case 2229:
case 630:
case 3657:
case 460:
case 2850:
case 3602:
case 2379:
case 2869:
case 3586:
case 4040:
case 348:
case 2875:
case 1747:
case 35:
case 3075:
case 3831:
case 4008:
case 46:
case 1615:
case 2394:
case 1013:
case 3819:
case 565:
case 1613:
case 1070:
case 1585:
case 2520:
case 1479:
case 2147:
case 3318:
case 1279:
case 2367:
case 3585:
case 756:
case 3127:
case 2197:
case 3587:
case 2322:
case 3155:
case 3649:
case 974:
case 3940:
case 3945:
case 3139:
case 1752:
case 2961:
case 1806:
case 562:
case 958:
case 829:
case 1399:
case 64:
case 2768:
case 2739:
case 2855:
case 1121:
case 2818:
case 2481:
case 1252:
case 582:
case 2958:
case 2747:
case 2208:
case 3112:
case 2106:
case 912:
case 3552:
case 2876:
case 201:
case 629:
case 3673:
case 491:
case 443:
case 359:
case 3955:
case 3145:
case 3698:
case 1598:
case 107:
case 4068:
case 1437:
case 454:
case 1600:
case 1780:
case 913:
case 835:
case 2781:
case 1470:
case 2640:
case 3664:
case 2463:
case 1281:
case 1816:
case 2010:
case 1500:
case 240:
case 3149:
case 3866:
case 3814:
case 2455:
case 2323:
case 1095:
case 4016:
case 3799:
case 3240:
case 1718:
case 711:
case 3735:
case 2388:
case 415:
case 3489:
case 2694:
case 1272:
case 3938:
case 3761:
case 1996:
case 170:
case 2556:
case 2053:
case 1903:
case 3496:
case 3269:
case 119:
case 3415:
case 2611:
case 1276:
case 96:
case 1824:
case 3500:
case 2837:
case 2709:
case 1625:
case 2482:
case 2930:
case 424:
case 3630:
case 1590:
case 36:
case 2751:
case 3373:
case 335:
case 504:
case 1085:
case 801:
case 3473:
case 2685:
case 888:
case 113:
case 3039:
case 2838:
case 42:
case 3193:
case 3975:
case 2669:
case 1983:
case 1250:
case 137:
case 1492:
case 1464:
case 3299:
case 3790:
case 3576:
case 366:
case 228:
case 2175:
case 3660:
case 2289:
case 2646:
case 3268:
case 2028:
case 3652:
case 3126:
case 1556:
case 3252:
case 3449:
case 3154:
case 1285:
case 489:
case 1448:
case 1995:
case 2725:
case 2393:
case 3588:
case 1521:
case 1623:
case 2198:
case 2179:
case 2170:
case 1518:
case 1247:
case 603:
case 168:
case 852:
case 3456:
case 50:
case 414:
case 1700:
case 2418:
case 3379:
case 2151:
case 807:
case 3015:
case 1650:
case 401:
case 2920:
case 79:
case 3951:
case 2642:
case 1840:
case 1580:
case 1574:
case 3773:
case 1793:
case 771:
case 3084:
case 522:
case 299:
case 519:
case 2874:
case 2844:
case 995:
case 2975:
case 163:
case 903:
case 920:
case 2853:
case 2510:
case 88:
case 1622:
case 2266:
case 1335:
case 901:
case 1667:
case 2275:
case 3508:
case 1959:
case 3571:
case 292:
case 3710:
case 38:
case 1852:
case 2491:
case 1026:
case 3082:
case 2303:
case 532:
case 917:
case 1073:
case 685:
case 3762:
case 3677:
case 735:
case 112:
case 3300:
case 3224:
case 3326:
case 2897:
case 3135:
case 3159:
case 2531:
case 2667:
case 10:
case 1096:
case 3696:
case 3359:
case 2904:
case 2805:
case 784:
case 186:
case 1532:
case 1665:
case 3130:
case 2825:
case 355:
case 3780:
case 541:
case 1326:
case 3658:
case 497:
case 937:
case 644:
case 585:
case 777:
case 2362:
case 6:
case 3198:
case 789:
case 3890:
case 2873:
case 3010:
case 1870:
case 1423:
case 1668:
case 1065:
case 2573:
case 3970:
case 2774:
case 3254:
case 699:
case 2265:
case 694:
case 1601:
case 1618:
case 2065:
case 2690:
case 1115:
case 2419:
case 1948:
case 442:
case 146:
case 1456:
case 1241:
case 1268:
case 2906:
case 251:
case 2569:
case 3624:
case 1049:
case 422:
case 3695:
case 2829:
case 2633:
case 2230:
case 3754:
case 3433:
case 2990:
case 2639:
case 822:
case 556:
case 2258:
case 1588:
case 2331:
case 198:
case 2044:
case 2177:
case 67:
case 1859:
case 3982:
case 3065:
case 3838:
case 1713:
case 2012:
case 3360:
case 1311:
case 2549:
case 1854:
case 1063:
case 701:
case 3605:
case 3242:
case 458:
case 2160:
case 2454:
case 1790:
case 1540:
case 4083:
case 2059:
case 3353:
case 944:
case 1139:
case 3386:
case 896:
case 3611:
case 2231:
case 1012:
case 1199:
case 1228:
case 134:
case 1329:
case 249:
case 2660:
case 2978:
case 1693:
case 405:
case 3740:
case 5:
case 307:
case 3911:
case 2929:
case 1165:
case 2252:
case 1283:
case 2706:
case 1836:
case 1308:
case 3613:
case 1873:
case 311:
case 1702:
case 1197:
case 2700:
case 3753:
case 866:
case 3350:
case 165:
case 2495:
case 1123:
case 1140:
case 3560:
case 1011:
case 3030:
case 3191:
case 1998:
case 3599:
case 1801:
case 3734:
case 129:
case 1863:
case 2281:
case 723:
case 2839:
case 1257:
case 2477:
case 2501:
case 2514:
case 2516:
case 3889:
case 612:
case 217:
case 3371:
case 4045:
case 928:
case 1895:
case 897:
case 3596:
case 3335:
case 2671:
case 1212:
case 3305:
case 3768:
case 3134:
case 1664:
case 2302:
case 3168:
case 1744:
case 1707:
case 910:
case 446:
case 3072:
case 879:
case 2661:
case 116:
case 627:
case 197:
case 314:
case 657:
case 2994:
case 1104:
case 3166:
case 1019:
case 395:
case 755:
case 263:
case 3085:
case 3934:
case 1874:
case 2621:
case 2340:
case 1748:
case 515:
case 1411:
case 268:
case 2731:
case 2264:
case 2759:
case 2657:
case 702:
case 3258:
case 1167:
case 607:
case 2949:
case 3559:
case 863:
case 2361:
case 1717:
case 881:
case 95:
case 613:
case 303:
case 396:
case 1183:
case 3426:
case 2190:
case 1245:
case 153:
case 2618:
case 3539:
case 2006:
case 2964:
case 3364:
case 85:
case 3108:
case 2304:
case 1632:
case 4086:
case 758:
case 3811:
case 1017:
case 2987:
case 1010:
case 1195:
case 3807:
case 1484:
case 1306:
case 922:
case 3705:
case 1091:
case 3884:
case 1662:
case 2344:
case 3504:
case 2035:
case 1975:
case 2374:
case 2017:
case 2485:
case 883:
case 1440:
case 70:
case 2040:
case 3492:
case 4025:
case 1678:
case 1589:
case 246:
case 2798:
case 2754:
case 1404:
case 4074:
case 1838:
case 1359:
case 634:
case 2386:
case 2309:
case 12:
case 654:
case 2973:
case 3383:
case 3659:
case 2733:
case 286:
case 1758:
case 932:
case 783:
case 1742:
case 2885:
case 3346:
case 2902:
case 1688:
case 3181:
case 2458:
case 1289:
case 3282:
case 2926:
case 951:
case 3485:
case 622:
case 940:
case 1361:
case 97:
case 2063:
case 3275:
case 3692:
case 911:
case 2863:
case 445:
case 3730:
case 1081:
case 1734:
case 2155:
case 71:
case 417:
case 1698:
case 161:
case 1982:
case 2287:
case 2365:
case 1494:
case 3094:
case 3471:
case 1923:
case 2425:
case 1129:
case 4065:
case 3864:
case 2062:
case 432:
case 2518:
case 2435:
case 1970:
case 1978:
case 1814:
case 3186:
case 991:
case 1135:
case 143:
case 2699:
case 3662:
case 3105:
case 3830:
case 211:
case 219:
case 1087:
case 1317:
case 3138:
case 737:
case 466:
case 3180:
case 1701:
case 3036:
case 3615:
case 1449:
case 3052:
case 104:
case 1699:
case 3003:
case 462:
case 1151:
case 943:
case 1893:
case 3077:
case 2072:
case 2693:
case 3218:
case 827:
case 1883:
case 2023:
case 2922:
case 1845:
case 590:
case 2956:
case 2227:
case 3931:
case 487:
case 4018:
case 1465:
case 1966:
case 423:
case 1149:
case 2283:
case 1564:
case 3766:
case 581:
case 1735:
case 1452:
case 1535:
case 550:
case 2867:
case 818:
case 2288:
case 436:
case 1795:
case 3358:
case 3714:
case 3477:
case 2381:
case 1901:
case 3941:
case 2892:
case 1078:
case 258:
case 1568:
case 456:
case 1692:
case 87:
case 2504:
case 485:
case 2738:
case 3331:
case 3384:
case 3189:
case 2965:
case 3338:
case 2357:
case 2024:
case 236:
case 2354:
case 1548:
case 1582:
case 2064:
case 2133:
case 2216:
case 2899:
case 2575:
case 3727:
case 3427:
case 3241:
case 3040:
case 3556:
case 2473:
case 3430:
case 2075:
case 3984:
case 3498:
case 2905:
case 3895:
case 3442:
case 1531:
case 953:
case 3540:
case 310:
case 318:
case 493:
case 1822:
case 305:
case 4024:
case 1741:
case 845:
case 3202:
case 555:
case 467:
case 413:
case 2320:
case 2039:
case 799:
case 1138:
case 254:
case 110:
case 2593:
case 408:
case 3499:
case 707:
case 1499:
case 477:
case 3728:
case 906:
case 3263:
case 3078:
case 288:
case 3054:
case 3437:
case 2612:
case 597:
case 3527:
case 2183:
case 3459:
case 387:
case 2921:
case 3340:
case 3798:
case 83:
case 2298:
case 3414:
case 2680:
case 528:
case 1846:
case 1109:
case 3719:
case 2570:
case 2034:
case 1328:
case 1558:
case 3309:
case 1248:
case 1027:
case 3633:
case 3460:
case 993:
case 3966:
case 741:
case 1254:
case 2871:
case 3993:
case 601:
case 3293:
case 3079:
case 1162:
case 2173:
case 1391:
case 1605:
case 2391:
case 1569:
case 4051:
case 3776:
case 377:
case 2710:
case 3644:
case 2606:
case 1298:
case 696:
case 2883:
case 3027:
case 2277:
case 3908:
case 439:
case 1577:
case 1000:
case 2087:
case 2528:
case 3634:
case 3618:
case 1229:
case 1971:
case 300:
case 1754:
case 3447:
case 1992:
case 2103:
case 2114:
case 1299:
case 830:
case 1480:
case 2116:
case 3357:
case 3855:
case 2244:
case 15:
case 180:
case 1200:
case 1829:
case 2001:
case 2811:
case 1302:
case 688:
case 1877:
case 60:
case 4085:
case 2688:
case 4094:
case 1029:
case 3188:
case 3013:
case 2506:
case 3005:
case 1008:
case 149:
case 2532:
case 3738:
case 3642:
case 2342:
case 1626:
case 3965:
case 4022:
case 3025:
case 1264:
case 2986:
case 1398:
case 2407:
case 2541:
case 619:
case 1240:
case 1902:
case 3679:
case 3261:
case 3573:
case 1659:
case 1016:
case 181:
case 1190:
case 342:
case 3203:
case 4095:
case 3791:
case 717:
case 1350:
case 4023:
case 392:
case 1951:
case 510:
case 2804:
case 2232:
case 1617:
case 37:
case 2757:
case 3129:
case 4087:
case 48:
case 3412:
case 3142:
case 2130:
case 3531:
case 3352:
case 3507:
case 3717:
case 1860:
case 747:
case 1511:
case 2093:
case 3888:
case 3115:
case 3718:
case 3668:
case 2089:
case 3332:
case 3562:
case 1794:
case 2328:
case 1925:
case 621:
case 4011:
case 1875:
case 3523:
case 1315:
case 3136:
case 2193:
case 2456:
case 416:
case 1230:
case 693:
case 2041:
case 2140:
case 690:
case 2808:
case 2125:
case 618:
case 2742:
case 1438:
case 1604:
case 2648:
case 2849:
case 3873:
case 3883:
case 4056:
case 508:
case 1022:
case 340:
case 2205:
case 2974:
case 2692:
case 3429:
case 2274:
case 861:
case 3772:
case 2981:
case 3578:
case 2213:
case 1683:
case 2305:
case 1482:
case 1488:
case 3482:
case 2128:
case 900:
case 3141:
case 1263:
case 2237:
case 148:
case 979:
case 1071:
case 49:
case 1917:
case 1965:
case 2939:
case 1255:
case 2898:
case 3973:
case 2835:
case 2111:
case 918:
case 2872:
case 990:
case 325:
case 3737:
case 3604:
case 3867:
case 1145:
case 3971:
case 2118:
case 2007:
case 1082:
case 3259:
case 3395:
case 1803:
case 2708:
case 1166:
case 2129:
case 1765:
case 1711:
case 616:
case 677:
case 203:
case 154:
case 17:
case 2217:
case 1032:
case 3490:
case 1179:
case 3053:
case 3225:
case 3516:
case 1775:
case 2544:
case 2767:
case 1969:
case 1514:
case 797:
case 2566:
case 2339:
case 3323:
case 1929:
case 3612:
case 3722:
case 3428:
case 557:
case 816:
case 2773:
case 840:
case 1101:
case 2743:
case 1031:
case 1178:
case 3674:
case 287:
case 500:
case 1226:
case 2250:
case 2067:
case 3797:
case 1656:
case 451:
case 3929:
case 2946:
case 2471:
case 2352:
case 687:
case 3192:
case 3988:
case 1933:
case 3096:
case 3621:
case 3162:
case 2723:
case 3584:
case 1799:
case 774:
case 1766:
case 832:
case 1750:
case 2014:
case 2795:
case 1463:
case 1714:
case 3404:
case 1:
case 645:
case 2218:
case 3382:
case 3298:
case 1474:
case 3986:
case 1990:
case 3002:
case 2598:
case 4073:
case 3601:
case 2158:
case 2775:
case 21:
case 2392:
case 386:
case 3236:
case 3199:
case 3813:
case 189:
case 398:
case 3470:
case 329:
case 3307:
case 3782:
case 409:
case 1755:
case 2908:
case 708:
case 1443:
case 120:
case 1606:
case 388:
case 1374:
case 3723:
case 828:
case 1403:
case 2493:
case 3824:
case 3355:
case 3549:
case 1881:
case 1274:
case 3177:
case 748:
case 3113:
case 1035:
case 1539:
case 2845:
case 1921:
case 1030:
case 3933:
case 875:
case 3278:
case 139:
case 3981:
case 3148:
case 2967:
case 1358:
case 3925:
case 3835:
case 2619:
case 635:
case 1170:
case 1726:
case 3462:
case 3118:
case 3804:
case 1122:
case 2721:
case 1647:
case 529:
case 2822:
case 2864:
case 3506:
case 2962:
case 3935:
case 1640:
case 1654:
case 4092:
case 1918:
case 384:
case 623:
case 931:
case 1433:
case 2084:
case 961:
case 2521:
case 2261:
case 2756:
case 941:
case 946:
case 3898:
case 872:
case 2318:
case 394:
case 2772:
case 2005:
case 1935:
case 3617:
case 1368:
case 3769:
case 2412:
case 1526:
case 3763:
case 2545:
case 3778:
case 3151:
case 1727:
case 2813:
case 3399:
case 420:
case 118:
case 2820:
case 1105:
case 2535:
case 1528:
case 3448:
case 2791:
case 2051:
case 3495:
case 26:
case 3461:
case 795:
case 2462:
case 2889:
case 3693:
case 1210:
case 3235:
case 1767:
case 3294:
case 3124:
case 1866:
case 2574:
case 2744:
case 261:
case 2841:
case 1869:
case 132:
case 987:
case 531:
case 543:
case 216:
case 380:
case 1405:
case 605:
case 2605:
case 3953:
case 1858:
case 608:
case 666:
case 0:
case 145:
case 865:
case 2976:
case 873:
case 2935:
case 985:
case 3080:
case 3071:
case 2378:
case 2670:
case 1603:
case 2560:
case 860:
case 90:
case 949:
case 3376:
case 411:
case 126:
case 3600:
case 2022:
case 209:
case 2242:
case 136:
case 224:
case 3221:
case 4014:
case 3980:
case 1504:
case 898:
case 3917:
case 3880:
case 1628:
case 962:
case 341:
case 3368:
case 2684:
case 3725:
case 3682:
case 3004:
case 3483:
case 1676:
case 536:
case 899:
case 1119:
case 1721:
case 3088:
case 3370:
case 2819:
case 1696:
case 1833:
case 2201:
case 3445:
case 77:
case 3486:
case 3439:
case 1477:
case 3375:
case 3542:
case 1337:
case 3329:
case 960:
case 2840:
case 222:
case 1862:
case 1113:
case 3755:
case 3897:
case 2936:
case 683:
case 3777:
case 2209:
case 56:
case 93:
case 2638:
case 739:
case 686:
case 3885:
case 244:
case 1527:
case 1185:
case 3361:
case 2540:
case 1896:
case 2769:
case 2280:
case 923:
case 1271:
case 3349:
case 473:
case 1489:
case 1826:
case 1712:
case 857:
case 2095:
case 2348:
case 3264:
case 518:
case 2009:
case 2472:
case 3629:
case 3029:
case 2270:
case 3398:
case 3821:
case 33:
case 281:
case 1001:
case 1415:
case 1118:
case 1146:
case 1397:
case 1120:
case 3528:
case 1810:
case 3344:
case 159:
case 3380:
case 1685:
case 1850:
case 1296:
case 1236:
case 2025:
case 1631:
case 463:
case 800:
case 1537:
case 3209:
case 3789:
case 1077:
case 3513:
case 379:
case 1981:
case 2307:
case 1466:
case 1977:
case 1370:
case 3291:
case 1554:
case 709:
case 915:
case 671:
case 1169:
case 2370:
case 2536:
case 3019:
case 572:
case 2886:
case 3122:
case 1127:
case 1114:
case 1425:
case 1761:
case 3788:
case 2086:
case 3009:
case 3525:
case 2884:
case 1695:
case 2000:
case 2758:
case 194:
case 1067:
case 1394:
case 199:
case 3201:
case 3041:
case 890:
case 1325:
case 28:
case 1876:
case 481:
case 89:
case 3215:
case 994:
case 1353:
case 871:
case 1697:
case 238:
case 273:
case 3631:
case 3238:
case 3408:
case 2031:
case 564:
case 2233:
case 2353:
case 2115:
case 1284:
case 1171:
case 3619:
case 847:
case 3314:
case 3422:
case 3583:
case 1819:
case 965:
case 2658:
case 615:
case 2718:
case 1522:
case 4032:
case 1789:
case 114:
case 3839:
case 3116:
case 3256:
case 1196:
case 280:
case 939:
case 248:
case 3758:
case 2527:
case 1134:
case 3356:
case 3406:
case 1890:
case 372:
case 2238:
case 1481:
case 3683:
case 496:
case 1844:
case 870:
case 718:
case 1142:
case 3367:
case 2687:
case 1512:
case 2078:
case 1911:
case 2475:
case 3400:
case 1269:
case 3510:
case 1468:
case 3598:
case 389:
case 2220:
case 2513:
case 3463:
case 2578:
case 3334:
case 551:
case 3881:
case 3392:
case 3566:
case 3018:
case 2196:
case 421:
case 1483:
case 2858:
case 2589:
case 52:
case 2732:
case 1384:
case 302:
case 3245:
case 2954:
case 3837:
case 1565:
case 1637:
case 1607:
case 4066:
case 2073:
case 3548:
case 1581:
case 127:
case 3787:
case 3851:
case 1338:
case 952:
case 1249:
case 3374:
case 2123:
case 2032:
case 94:
case 859:
case 1047:
case 975:
case 2941:
case 3636:
case 1401:
case 1379:
case 1653:
case 1428:
case 3845:
case 3979:
case 2807:
case 2260:
case 2278:
case 115:
case 2195:
case 2558:
case 2809:
case 2126:
case 907:
case 1830:
case 1155:
case 3640:
case 1525:
case 3184:
case 982:
case 172:
case 3745:
case 2003:
case 3051:
case 874:
case 3731:
case 2526:
case 3214:
case 425:
case 503:
case 4044:
case 169:
case 2153:
case 3330:
case 3111:
case 1591:
case 474:
case 894:
case 296:
case 278:
case 1094:
case 3183:
case 563:
case 837:
case 2952:
case 3234:
case 1946:
case 1348:
case 461:
case 2675:
case 290:
case 483:
case 2735:
case 1055:
case 1043:
case 3537:
case 482:
case 2636:
case 1003:
case 821:
case 1446:
case 1042:
case 3158:
case 2653:
case 368:
case 1076:
case 3114:
case 123:
case 309:
case 665:
case 3123:
case 3916:
case 3424:
case 410:
case 1331:
case 1231:
case 1023:
case 2654:
case 2460:
case 3100:
case 229:
case 2156:
case 4000:
case 3014:
case 2547:
case 752:
case 267:
case 2336:
case 480:
case 177:
case 3609:
case 2306:
case 1412:
case 2290:
case 2465:
case 2066:
case 429:
case 205:
case 316:
case 1516:
case 2414:
case 108:
case 3749:
case 3544:
case 3031:
case 3825:
case 2375:
case 2931:
case 376:
case 2932:
case 2647:
case 2440:
case 1319:
case 1430:
case 1904:
case 834:
case 2649:
case 3280:
case 4003:
case 3468:
case 3491:
case 3854:
case 743:
case 1124:
case 1128:
case 1725:
case 950:
case 34:
case 2800:
case 1356:
case 2396:
case 1805:
case 3943:
case 3204:
case 3466:
case 76:
case 58:
case 3922:
case 1444:
case 3176:
case 2548:
case 1053:
case 716:
case 140:
case 2150:
case 3497:
case 4026:
case 3229:
case 2999:
case 1856:
case 2099:
case 977:
case 2049:
case 836:
case 1409:
case 3223:
case 2358:
case 2752:
case 1962:
case 947:
case 1510:
case 1267:
case 3481:
case 391:
case 3146:
case 1610:
case 1513:
case 3939:
case 3336:
case 3524:
case 2447:
case 1778:
case 3900:
case 2803:
case 909:
case 776:
case 3312:
case 378:
case 2110:
case 2826:
case 3653:
case 3784:
case 495:
case 1219:
case 2617:
case 1689:
case 2033:
case 854:
case 3230:
case 3107:
case 2704:
case 1413:
case 3295:
case 266:
case 3217:
case 2430:
case 1005:
case 3248:
case 1503:
case 1275:
case 1300:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1711911601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,];
var gg_b = "1711911601/";

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
