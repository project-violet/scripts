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
case 2624:
case 199:
case 488:
case 3066:
case 3276:
case 2383:
case 1580:
case 621:
case 978:
case 1026:
case 1974:
case 2834:
case 3033:
case 4052:
case 3097:
case 841:
case 2805:
case 1494:
case 1459:
case 1193:
case 3875:
case 2139:
case 2589:
case 472:
case 2897:
case 2824:
case 1576:
case 862:
case 1282:
case 3367:
case 140:
case 3994:
case 1602:
case 3569:
case 673:
case 2062:
case 1921:
case 2580:
case 2039:
case 1329:
case 664:
case 3624:
case 817:
case 1113:
case 519:
case 1826:
case 2152:
case 4034:
case 3348:
case 662:
case 1581:
case 3798:
case 1240:
case 537:
case 79:
case 597:
case 799:
case 949:
case 2896:
case 2490:
case 3368:
case 3829:
case 2493:
case 1913:
case 1649:
case 3543:
case 2978:
case 3831:
case 765:
case 3904:
case 3973:
case 1291:
case 3467:
case 4008:
case 2844:
case 1694:
case 2507:
case 756:
case 1945:
case 3137:
case 847:
case 891:
case 2621:
case 3075:
case 3741:
case 1771:
case 3041:
case 3801:
case 2481:
case 3814:
case 354:
case 2341:
case 969:
case 2588:
case 1648:
case 1731:
case 959:
case 1441:
case 556:
case 22:
case 730:
case 794:
case 1420:
case 2144:
case 3865:
case 2080:
case 2701:
case 2472:
case 815:
case 503:
case 2768:
case 3925:
case 1931:
case 930:
case 3794:
case 2194:
case 2496:
case 3451:
case 3262:
case 693:
case 602:
case 3074:
case 3255:
case 2506:
case 2794:
case 1354:
case 1768:
case 704:
case 2874:
case 1574:
case 617:
case 3660:
case 3246:
case 3671:
case 1590:
case 1161:
case 251:
case 391:
case 2251:
case 1582:
case 110:
case 1724:
case 1698:
case 2254:
case 3691:
case 3129:
case 3329:
case 518:
case 1481:
case 1549:
case 1480:
case 497:
case 1238:
case 628:
case 195:
case 706:
case 2000:
case 865:
case 2397:
case 2148:
case 2566:
case 3004:
case 1795:
case 2615:
case 3708:
case 493:
case 3230:
case 4:
case 1716:
case 718:
case 4011:
case 4038:
case 2927:
case 2778:
case 2884:
case 5:
case 3416:
case 1814:
case 477:
case 3212:
case 2827:
case 1815:
case 2721:
case 3711:
case 361:
case 492:
case 2042:
case 271:
case 1593:
case 1060:
case 901:
case 2683:
case 1908:
case 1142:
case 1661:
case 2361:
case 1021:
case 3802:
case 1886:
case 3861:
case 3374:
case 992:
case 422:
case 1937:
case 186:
case 3250:
case 3901:
case 1558:
case 544:
case 3300:
case 1443:
case 1964:
case 446:
case 2937:
case 3636:
case 636:
case 2204:
case 2784:
case 2674:
case 3011:
case 520:
case 2053:
case 502:
case 4002:
case 3083:
case 1213:
case 3657:
case 593:
case 177:
case 3548:
case 580:
case 4022:
case 4065:
case 1125:
case 1633:
case 3161:
case 940:
case 632:
case 1041:
case 1754:
case 1811:
case 1956:
case 2428:
case 3676:
case 852:
case 4084:
case 561:
case 3124:
case 2757:
case 3195:
case 3717:
case 1805:
case 1689:
case 2811:
case 1746:
case 2278:
case 3284:
case 848:
case 3520:
case 1286:
case 1357:
case 2313:
case 2747:
case 290:
case 2719:
case 1885:
case 220:
case 3510:
case 1399:
case 598:
case 1455:
case 415:
case 2818:
case 3837:
case 275:
case 3036:
case 2495:
case 1065:
case 222:
case 1961:
case 3164:
case 1508:
case 3337:
case 3078:
case 943:
case 2685:
case 2157:
case 2551:
case 2277:
case 642:
case 3220:
case 1628:
case 2939:
case 3:
case 2676:
case 1394:
case 1542:
case 2762:
case 3544:
case 3024:
case 1564:
case 3453:
case 1705:
case 1912:
case 3003:
case 2893:
case 1243:
case 465:
case 2212:
case 3227:
case 4074:
case 2658:
case 3915:
case 1477:
case 2329:
case 1025:
case 2772:
case 1557:
case 1019:
case 3700:
case 1010:
case 3145:
case 2639:
case 363:
case 3857:
case 1955:
case 3488:
case 241:
case 727:
case 1323:
case 3766:
case 2614:
case 2434:
case 2888:
case 466:
case 1064:
case 1256:
case 1744:
case 2807:
case 2384:
case 915:
case 1562:
case 762:
case 3500:
case 2259:
case 2418:
case 3521:
case 1758:
case 3169:
case 3210:
case 3859:
case 1530:
case 2477:
case 2440:
case 539:
case 1643:
case 567:
case 3591:
case 912:
case 281:
case 2635:
case 4016:
case 2283:
case 418:
case 3911:
case 1861:
case 1107:
case 1823:
case 807:
case 2651:
case 2895:
case 482:
case 2519:
case 1488:
case 671:
case 819:
case 723:
case 247:
case 1680:
case 1561:
case 2520:
case 3339:
case 4076:
case 3697:
case 3007:
case 3072:
case 270:
case 596:
case 3336:
case 2128:
case 919:
case 336:
case 2435:
case 1478:
case 1456:
case 3545:
case 1429:
case 3575:
case 2415:
case 3537:
case 2840:
case 3823:
case 3308:
case 3715:
case 1990:
case 203:
case 1260:
case 2273:
case 1804:
case 2857:
case 3396:
case 3160:
case 1971:
case 2536:
case 1105:
case 1571:
case 1135:
case 986:
case 280:
case 3073:
case 1784:
case 1977:
case 4051:
case 1290:
case 3170:
case 538:
case 1528:
case 889:
case 2931:
case 2352:
case 1796:
case 3461:
case 2256:
case 1405:
case 45:
case 3207:
case 1374:
case 2133:
case 3580:
case 932:
case 2816:
case 2733:
case 2373:
case 1388:
case 3435:
case 678:
case 3460:
case 338:
case 1578:
case 4024:
case 3304:
case 3439:
case 3864:
case 1857:
case 483:
case 3533:
case 252:
case 851:
case 3765:
case 1982:
case 371:
case 2838:
case 973:
case 1403:
case 1194:
case 2408:
case 21:
case 3093:
case 1924:
case 3448:
case 3511:
case 2482:
case 1496:
case 1776:
case 3050:
case 3215:
case 3372:
case 2228:
case 840:
case 1185:
case 2229:
case 3840:
case 757:
case 1304:
case 1386:
case 2584:
case 781:
case 369:
case 1300:
case 421:
case 1259:
case 91:
case 2399:
case 1692:
case 3955:
case 786:
case 213:
case 3444:
case 3369:
case 172:
case 2432:
case 3919:
case 2868:
case 921:
case 960:
case 1883:
case 1996:
case 2270:
case 329:
case 1565:
case 1474:
case 738:
case 2240:
case 910:
case 149:
case 266:
case 2642:
case 2150:
case 766:
case 946:
case 107:
case 3465:
case 331:
case 3710:
case 1001:
case 3054:
case 2015:
case 808:
case 1802:
case 2607:
case 1451:
case 2963:
case 313:
case 3881:
case 1606:
case 2089:
case 2029:
case 2158:
case 1833:
case 654:
case 3217:
case 535:
case 3576:
case 3950:
case 858:
case 782:
case 509:
case 2671:
case 2782:
case 3513:
case 2773:
case 747:
case 2300:
case 148:
case 2999:
case 3355:
case 2463:
case 1013:
case 3619:
case 2952:
case 3069:
case 1916:
case 486:
case 3783:
case 3194:
case 1192:
case 1375:
case 451:
case 1130:
case 2036:
case 658:
case 750:
case 3289:
case 3429:
case 549:
case 1047:
case 982:
case 3293:
case 2761:
case 1090:
case 733:
case 4018:
case 3907:
case 1601:
case 2967:
case 2770:
case 1350:
case 3920:
case 4029:
case 3552:
case 428:
case 383:
case 19:
case 1894:
case 3888:
case 677:
case 1436:
case 55:
case 1719:
case 194:
case 2903:
case 3795:
case 2189:
case 37:
case 2785:
case 1655:
case 1174:
case 871:
case 3186:
case 38:
case 3913:
case 54:
case 1196:
case 3408:
case 1583:
case 4087:
case 1141:
case 1016:
case 1383:
case 2836:
case 3386:
case 392:
case 3614:
case 767:
case 1008:
case 2746:
case 3648:
case 3104:
case 2617:
case 3382:
case 153:
case 66:
case 1340:
case 3793:
case 2877:
case 2619:
case 917:
case 3602:
case 227:
case 440:
case 1852:
case 1987:
case 1855:
case 1656:
case 2600:
case 3677:
case 1595:
case 3256:
case 2989:
case 669:
case 1057:
case 2611:
case 2350:
case 4069:
case 2605:
case 3491:
case 1984:
case 2353:
case 3414:
case 1936:
case 1516:
case 2096:
case 3824:
case 715:
case 1214:
case 36:
case 474:
case 364:
case 1610:
case 3605:
case 2302:
case 1156:
case 2681:
case 2820:
case 1492:
case 146:
case 1446:
case 1330:
case 1222:
case 3131:
case 1175:
case 468:
case 3307:
case 3706:
case 1318:
case 1293:
case 2304:
case 2073:
case 3362:
case 1821:
case 167:
case 601:
case 1834:
case 2145:
case 993:
case 29:
case 1969:
case 2299:
case 1810:
case 2375:
case 3038:
case 501:
case 1079:
case 2346:
case 2030:
case 3806:
case 3830:
case 752:
case 128:
case 680:
case 834:
case 1298:
case 2209:
case 448:
case 2649:
case 198:
case 2530:
case 907:
case 2759:
case 1049:
case 3409:
case 4061:
case 1147:
case 2542:
case 3144:
case 3895:
case 721:
case 1569:
case 771:
case 4086:
case 99:
case 1547:
case 1050:
case 656:
case 3735:
case 749:
case 2301:
case 1306:
case 3688:
case 1960:
case 1644:
case 226:
case 265:
case 2366:
case 3834:
case 3497:
case 4049:
case 3696:
case 2812:
case 3891:
case 798:
case 3927:
case 1225:
case 1624:
case 699:
case 2010:
case 3991:
case 1745:
case 934:
case 2854:
case 522:
case 1850:
case 2322:
case 242:
case 3669:
case 1747:
case 2692:
case 2916:
case 3445:
case 2823:
case 114:
case 395:
case 2544:
case 2763:
case 1313:
case 1864:
case 2791:
case 3079:
case 1877:
case 3568:
case 2822:
case 1594:
case 2369:
case 4039:
case 2156:
case 2590:
case 1457:
case 3345:
case 2722:
case 2362:
case 2164:
case 1164:
case 4062:
case 1683:
case 2962:
case 3197:
case 1681:
case 3570:
case 158:
case 1607:
case 2864:
case 277:
case 1422:
case 351:
case 4000:
case 3561:
case 2560:
case 505:
case 2005:
case 1540:
case 1252:
case 2680:
case 1034:
case 2583:
case 3699:
case 178:
case 2509:
case 2622:
case 431:
case 489:
case 2475:
case 1081:
case 2752:
case 2340:
case 1751:
case 230:
case 1158:
case 1750:
case 1504:
case 3140:
case 4004:
case 3381:
case 491:
case 3219:
case 1027:
case 2641:
case 964:
case 2878:
case 3147:
case 2727:
case 1127:
case 2907:
case 2167:
case 3952:
case 3441:
case 1939:
case 774:
case 3628:
case 1592:
case 2294:
case 4020:
case 2718:
case 3254:
case 132:
case 1708:
case 2792:
case 3502:
case 1699:
case 1932:
case 1106:
case 3601:
case 1714:
case 1759:
case 700:
case 2948:
case 605:
case 3853:
case 2797:
case 234:
case 112:
case 1727:
case 2410:
case 2707:
case 2842:
case 1888:
case 3060:
case 367:
case 3013:
case 229:
case 1725:
case 2980:
case 1669:
case 2979:
case 4089:
case 3894:
case 2848:
case 3393:
case 411:
case 1017:
case 1970:
case 1177:
case 2579:
case 2856:
case 2789:
case 3701:
case 3772:
case 3406:
case 1061:
case 1411:
case 1369:
case 2174:
case 1851:
case 2115:
case 2130:
case 1605:
case 4031:
case 1302:
case 2537:
case 3850:
case 1319:
case 4053:
case 424:
case 304:
case 3554:
case 4091:
case 1355:
case 3788:
case 1039:
case 3291:
case 2120:
case 3138:
case 2819:
case 3914:
case 2032:
case 1123:
case 291:
case 3835:
case 3002:
case 2100:
case 1284:
case 403:
case 759:
case 2595:
case 1433:
case 3390:
case 895:
case 3263:
case 496:
case 2630:
case 2997:
case 2450:
case 3438:
case 3040:
case 3721:
case 381:
case 1490:
case 1943:
case 800:
case 3929:
case 1596:
case 1663:
case 3542:
case 3689:
case 2234:
case 2488:
case 51:
case 1339:
case 3241:
case 3573:
case 81:
case 279:
case 2957:
case 523:
case 3562:
case 1944:
case 1828:
case 874:
case 2591:
case 1040:
case 248:
case 3908:
case 2049:
case 2423:
case 863:
case 3751:
case 2570:
case 1109:
case 2533:
case 168:
case 3490:
case 4015:
case 134:
case 1533:
case 970:
case 1762:
case 2492:
case 309:
case 3800:
case 1263:
case 3556:
case 2906:
case 1414:
case 2420:
case 3995:
case 264:
case 2800:
case 3898:
case 2540:
case 2310:
case 559:
case 1086:
case 3022:
case 1211:
case 3599:
case 606:
case 927:
case 2206:
case 2860:
case 2960:
case 2293:
case 3111:
case 2396:
case 1082:
case 3966:
case 2659:
case 3389:
case 4095:
case 3391:
case 2175:
case 3165:
case 2485:
case 1199:
case 3622:
case 249:
case 1997:
case 1843:
case 2904:
case 1327:
case 979:
case 1505:
case 1264:
case 2713:
case 3559:
case 470:
case 2972:
case 3847:
case 1904:
case 4075:
case 2573:
case 1460:
case 1406:
case 3361:
case 2385:
case 3351:
case 469:
case 2898:
case 3887:
case 3173:
case 1253:
case 3016:
case 2442:
case 3642:
case 1051:
case 3177:
case 455:
case 3499:
case 1083:
case 3656:
case 923:
case 3278:
case 3265:
case 2723:
case 655:
case 2869:
case 4028:
case 3209:
case 3469:
case 1813:
case 2915:
case 3162:
case 2845:
case 287:
case 694:
case 2887:
case 3791:
case 2001:
case 627:
case 3564:
case 35:
case 3201:
case 3958:
case 3703:
case 3096:
case 3088:
case 929:
case 3463:
case 3462:
case 2215:
case 1611:
case 2662:
case 3529:
case 853:
case 682:
case 2612:
case 2652:
case 1467:
case 101:
case 2983:
case 1612:
case 4021:
case 1949:
case 3714:
case 883:
case 160:
case 1518:
case 3373:
case 3032:
case 690:
case 2364:
case 2853:
case 856:
case 1400:
case 2394:
case 289:
case 521:
case 540:
case 2241:
case 2933:
case 3567:
case 103:
case 3558:
case 2705:
case 2242:
case 828:
case 945:
case 2268:
case 4063:
case 3659:
case 1093:
case 1309:
case 2508:
case 316:
case 2377:
case 1998:
case 916:
case 2266:
case 3059:
case 855:
case 34:
case 2257:
case 879:
case 1018:
case 1882:
case 3965:
case 3560:
case 660:
case 1767:
case 463:
case 2202:
case 2647:
case 4009:
case 63:
case 3589:
case 3452:
case 2928:
case 3344:
case 17:
case 2311:
case 2405:
case 717:
case 2959:
case 2056:
case 2233:
case 3049:
case 1426:
case 1450:
case 1645:
case 3673:
case 2505:
case 3849:
case 987:
case 4014:
case 42:
case 3650:
case 2924:
case 3572:
case 1392:
case 3350:
case 3551:
case 1095:
case 1207:
case 343:
case 1820:
case 2449:
case 1900:
case 2305:
case 3683:
case 2663:
case 1121:
case 1887:
case 2160:
case 3198:
case 1197:
case 3180:
case 2634:
case 2787:
case 426:
case 2524:
case 126:
case 613:
case 2637:
case 1404:
case 2393:
case 3725:
case 2388:
case 3749:
case 144:
case 3780:
case 1418:
case 1615:
case 189:
case 1940:
case 3999:
case 2636:
case 1597:
case 577:
case 3512:
case 2881:
case 3477:
case 3645:
case 67:
case 2742:
case 348:
case 860:
case 2909:
case 1832:
case 3208:
case 1684:
case 849:
case 1659:
case 1782:
case 824:
case 92:
case 711:
case 3051:
case 136:
case 1468:
case 46:
case 2183:
case 1975:
case 1014:
case 3935:
case 443:
case 1865:
case 2104:
case 2597:
case 624:
case 1289:
case 1:
case 98:
case 2190:
case 3910:
case 2344:
case 219:
case 1925:
case 845:
case 228:
case 3960:
case 2987:
case 143:
case 564:
case 1621:
case 2153:
case 2037:
case 846:
case 3883:
case 2099:
case 914:
case 3986:
case 2413:
case 2920:
case 2936:
case 3171:
case 44:
case 3742:
case 3923:
case 2260:
case 3547:
case 1965:
case 360:
case 3176:
case 3275:
case 1132:
case 1233:
case 212:
case 2531:
case 1589:
case 3288:
case 3539:
case 245:
case 1359:
case 1575:
case 150:
case 697:
case 683:
case 3934:
case 1502:
case 2342:
case 2913:
case 530:
case 3597:
case 2074:
case 3969:
case 1346:
case 393:
case 1668:
case 1524:
case 1842:
case 3102:
case 141:
case 3786:
case 1515:
case 2870:
case 2112:
case 406:
case 1723:
case 754:
case 2760:
case 2182:
case 2890:
case 785:
case 517:
case 4012:
case 595:
case 1104:
case 1798:
case 3065:
case 3876:
case 2222:
case 2998:
case 1062:
case 315:
case 2247:
case 980:
case 2359:
case 3422:
case 2390:
case 3266:
case 904:
case 1697:
case 4057:
case 2826:
case 404:
case 378:
case 2193:
case 3866:
case 2686:
case 3166:
case 1349:
case 1543:
case 812:
case 1947:
case 1088:
case 27:
case 1657:
case 1360:
case 1208:
case 830:
case 3768:
case 775:
case 2885:
case 3450:
case 1377:
case 183:
case 2422:
case 1430:
case 2645:
case 3101:
case 139:
case 2237:
case 73:
case 2923:
case 87:
case 696:
case 210:
case 2335:
case 2549:
case 137:
case 3327:
case 1950:
case 3682:
case 2892:
case 1471:
case 2326:
case 709:
case 2511:
case 3620:
case 3818:
case 3029:
case 3600:
case 2067:
case 2149:
case 2946:
case 3403:
case 2017:
case 2063:
case 2616:
case 323:
case 2930:
case 827:
case 761:
case 2374:
case 3607:
case 373:
case 2724:
case 1739:
case 3485:
case 3332:
case 439:
case 2461:
case 3338:
case 2912:
case 542:
case 876:
case 1789:
case 1679:
case 2728:
case 2646:
case 3434:
case 2318:
case 3017:
case 433:
case 2427:
case 1373:
case 3647:
case 8:
case 1299:
case 1641:
case 3807:
case 3862:
case 3333:
case 2179:
case 854:
case 3205:
case 2358:
case 2835:
case 1015:
case 3756:
case 3455:
case 1268:
case 1889:
case 2735:
case 2425:
case 1749:
case 2258:
case 1232:
case 3604:
case 2474:
case 239:
case 1519:
case 2513:
case 1205:
case 3773:
case 125:
case 1042:
case 2529:
case 2386:
case 1218:
case 2131:
case 2712:
case 1223:
case 335:
case 2365:
case 358:
case 120:
case 2046:
case 3152:
case 3736:
case 32:
case 1248:
case 524:
case 1352:
case 3021:
case 3770:
case 2711:
case 1919:
case 135:
case 2085:
case 1099:
case 3006:
case 3031:
case 3839:
case 2076:
case 2141:
case 416:
case 3430:
case 802:
case 3685:
case 2558:
case 1413:
case 3456:
case 3295:
case 3187:
case 739:
case 259:
case 3401:
case 768:
case 1525:
case 2846:
case 2218:
case 2367:
case 330:
case 1144:
case 3303:
case 933:
case 260:
case 796:
case 3027:
case 2078:
case 1020:
case 374:
case 1466:
case 2289:
case 3879:
case 3743:
case 478:
case 1738:
case 3746:
case 2949:
case 1862:
case 3482:
case 2008:
case 4025:
case 2129:
case 437:
case 1469:
case 770:
case 2134:
case 3281:
case 3243:
case 2387:
case 797:
case 618:
case 1024:
case 1896:
case 3039:
case 586:
case 1671:
case 3587:
case 753:
case 2599:
case 600:
case 3142:
case 1486:
case 2555:
case 3046:
case 2122:
case 3203:
case 3481:
case 3745:
case 3997:
case 3168:
case 1691:
case 2469:
case 3473:
case 377:
case 2324:
case 966:
case 1310:
case 1254:
case 1295:
case 379:
case 3058:
case 2298:
case 1305:
case 3855:
case 2381:
case 645:
case 2698:
case 3680:
case 39:
case 1134:
case 3590:
case 20:
case 1180:
case 2176:
case 878:
case 741:
case 735:
case 2515:
case 3446:
case 3342:
case 2499:
case 1512:
case 4094:
case 588:
case 1873:
case 3819:
case 2057:
case 2743:
case 2332:
case 3229:
case 1637:
case 3234:
case 1520:
case 1737:
case 2265:
case 2097:
case 691:
case 1986:
case 1567:
case 1028:
case 124:
case 479:
case 3378:
case 1216:
case 2803:
case 1255:
case 2276:
case 1718:
case 536:
case 2633:
case 3931:
case 3128:
case 1609:
case 2095:
case 3734:
case 328:
case 456:
case 205:
case 3546:
case 1176:
case 3930:
case 2483:
case 2504:
case 3379:
case 1072:
case 2356:
case 2592:
case 405:
case 1415:
case 1552:
case 3608:
case 4072:
case 1765:
case 3493:
case 2391:
case 65:
case 3189:
case 1412:
case 661:
case 3387:
case 3937:
case 532:
case 417:
case 3415:
case 1449:
case 2901:
case 2866:
case 651:
case 2502:
case 833:
case 1485:
case 2706:
case 742:
case 777:
case 1267:
case 1948:
case 1203:
case 955:
case 1599:
case 3968:
case 3738:
case 513:
case 974:
case 3695:
case 686:
case 349:
case 3211:
case 181:
case 698:
case 1187:
case 3797:
case 3666:
case 1929:
case 1534:
case 3722:
case 1379:
case 2950:
case 2050:
case 1501:
case 298:
case 2437:
case 1217:
case 2670:
case 2769:
case 1733:
case 3175:
case 1793:
case 3433:
case 2371:
case 2765:
case 2201:
case 3130:
case 2445:
case 2052:
case 2795:
case 2315:
case 3578:
case 637:
case 2457:
case 12:
case 4046:
case 1535:
case 1545:
case 672:
case 2407:
case 2574:
case 1231:
case 1425:
case 689:
case 2867:
case 94:
case 2441:
case 591:
case 342:
case 1706:
case 2538:
case 2199:
case 3179:
case 2021:
case 890:
case 1458:
case 1773:
case 2188:
case 1891:
case 2207:
case 1102:
case 1258:
case 3755:
case 2019:
case 453:
case 3936:
case 3988:
case 1953:
case 2489:
case 269:
case 2439:
case 1314:
case 2561:
case 47:
case 2586:
case 1647:
case 1792:
case 3967:
case 1389:
case 3726:
case 3719:
case 432:
case 2922:
case 2239:
case 548:
case 3117:
case 2031:
case 3954:
case 2682:
case 610:
case 3498:
case 2729:
case 2841:
case 2988:
case 2955:
case 1342:
case 2753:
case 644:
case 2308:
case 3598:
case 397:
case 3843:
case 3113:
case 3335:
case 2403:
case 3466:
case 33:
case 3813:
case 3827:
case 41:
case 823:
case 3981:
case 1753:
case 10:
case 1636:
case 3305:
case 2178:
case 2941:
case 2716:
case 2993:
case 3769:
case 4043:
case 1385:
case 1923:
case 2347:
case 652:
case 2436:
case 4042:
case 380:
case 464:
case 3983:
case 3884:
case 639:
case 614:
case 1103:
case 1506:
case 96:
case 3151:
case 925:
case 2231:
case 2243:
case 2618:
case 4070:
case 3963:
case 1629:
case 344:
case 95:
case 2159:
case 58:
case 244:
case 2185:
case 3247:
case 784:
case 176:
case 396:
case 570:
case 2351:
case 2732:
case 1098:
case 215:
case 2581:
case 3631:
case 1892:
case 3412:
case 1423:
case 4037:
case 1787:
case 612:
case 64:
case 1247:
case 109:
case 3632:
case 3867:
case 3034:
case 3771:
case 3877:
case 1799:
case 414:
case 2040:
case 2327:
case 3792:
case 2071:
case 2378:
case 1818:
case 267:
case 2839:
case 3641:
case 676:
case 3748:
case 2027:
case 1555:
case 3882:
case 1084:
case 306:
case 3633:
case 454:
case 557:
case 3328:
case 4044:
case 3202:
case 151:
case 850:
case 68:
case 2786:
case 4050:
case 187:
case 2940:
case 1879:
case 3431:
case 3674:
case 3505:
case 3249:
case 3625:
case 1627:
case 2943:
case 191:
case 1116:
case 2567:
case 2814:
case 3971:
case 3838:
case 1675:
case 547:
case 2828:
case 1536:
case 1447:
case 106:
case 2696:
case 2825:
case 546:
case 558:
case 1356:
case 712:
case 1419:
case 3081:
case 2905:
case 2609:
case 2232:
case 2102:
case 1829:
case 2953:
case 988:
case 3067:
case 3516:
case 1642:
case 1783:
case 789:
case 3340:
case 1584:
case 839:
case 1454:
case 2879:
case 3349:
case 3662:
case 2043:
case 1181:
case 650:
case 1730:
case 2702:
case 2380:
case 3729:
case 3302:
case 625:
case 4048:
case 236:
case 2011:
case 375:
case 4030:
case 719:
case 2604:
case 2334:
case 2601:
case 2419:
case 990:
case 894:
case 3468:
case 1053:
case 1343:
case 2638:
case 2320:
case 3413:
case 3953:
case 859:
case 2429:
case 1341:
case 3665:
case 3856:
case 1070:
case 2368:
case 3115:
case 2486:
case 1911:
case 587:
case 1531:
case 1345:
case 1209:
case 2404:
case 504:
case 1173:
case 562:
case 3586:
case 3240:
case 238:
case 1362:
case 942:
case 3086:
case 4071:
case 4001:
case 2779:
case 2725:
case 3105:
case 1358:
case 3084:
case 1473:
case 83:
case 2263:
case 2886:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1696021201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,];
var gg_b = "1696021201/";

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
