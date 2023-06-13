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
case 1541:
case 4031:
case 3450:
case 1433:
case 1133:
case 1345:
case 1059:
case 608:
case 3289:
case 3139:
case 1239:
case 3152:
case 3365:
case 1840:
case 675:
case 242:
case 1969:
case 2076:
case 2367:
case 2389:
case 2664:
case 916:
case 731:
case 2558:
case 146:
case 1328:
case 290:
case 3928:
case 3537:
case 1613:
case 2128:
case 1434:
case 75:
case 3957:
case 2699:
case 2086:
case 1757:
case 1719:
case 638:
case 2462:
case 3649:
case 281:
case 1327:
case 3852:
case 740:
case 3765:
case 2111:
case 2372:
case 2182:
case 2474:
case 2177:
case 2600:
case 3267:
case 3007:
case 2133:
case 1445:
case 806:
case 3310:
case 3819:
case 681:
case 3825:
case 1612:
case 140:
case 3073:
case 3001:
case 3313:
case 1857:
case 3544:
case 3774:
case 1165:
case 2077:
case 1847:
case 483:
case 2497:
case 3666:
case 1224:
case 2371:
case 1522:
case 3675:
case 2223:
case 3304:
case 63:
case 915:
case 1552:
case 3839:
case 554:
case 3794:
case 2654:
case 2702:
case 962:
case 1124:
case 3269:
case 2601:
case 3469:
case 295:
case 1438:
case 769:
case 3132:
case 3217:
case 3973:
case 3601:
case 1519:
case 2930:
case 1112:
case 2915:
case 1411:
case 1051:
case 767:
case 1601:
case 2458:
case 3203:
case 271:
case 2679:
case 1614:
case 3058:
case 3268:
case 2163:
case 1064:
case 1755:
case 3182:
case 1715:
case 732:
case 810:
case 3834:
case 847:
case 3054:
case 2590:
case 2538:
case 2689:
case 426:
case 3791:
case 570:
case 3606:
case 178:
case 909:
case 3927:
case 455:
case 12:
case 1109:
case 2455:
case 3596:
case 1898:
case 2230:
case 3540:
case 55:
case 2089:
case 1620:
case 3119:
case 3368:
case 3559:
case 1960:
case 2761:
case 1943:
case 3560:
case 3323:
case 3512:
case 4089:
case 4081:
case 1282:
case 663:
case 3494:
case 3673:
case 3083:
case 1790:
case 2244:
case 905:
case 137:
case 3354:
case 809:
case 1713:
case 3507:
case 2261:
case 2192:
case 530:
case 2577:
case 1194:
case 2317:
case 3476:
case 883:
case 236:
case 509:
case 1884:
case 3146:
case 1940:
case 1652:
case 3622:
case 1867:
case 1741:
case 1422:
case 2527:
case 3202:
case 2340:
case 629:
case 61:
case 4014:
case 42:
case 123:
case 6:
case 2055:
case 686:
case 1144:
case 1444:
case 2749:
case 790:
case 2647:
case 913:
case 948:
case 2892:
case 3254:
case 3538:
case 3237:
case 2584:
case 3286:
case 1247:
case 621:
case 248:
case 2735:
case 979:
case 299:
case 170:
case 500:
case 2346:
case 3524:
case 1819:
case 1245:
case 2982:
case 2880:
case 3853:
case 2636:
case 2893:
case 1508:
case 1489:
case 631:
case 2078:
case 1956:
case 1185:
case 1057:
case 1736:
case 1818:
case 1182:
case 2274:
case 440:
case 3685:
case 1538:
case 1712:
case 737:
case 1828:
case 1893:
case 1677:
case 1039:
case 3501:
case 327:
case 1047:
case 966:
case 2941:
case 2117:
case 2571:
case 2971:
case 1645:
case 2800:
case 2275:
case 3787:
case 2662:
case 3993:
case 1683:
case 2888:
case 2614:
case 1216:
case 1055:
case 3583:
case 257:
case 736:
case 2769:
case 2144:
case 1547:
case 1116:
case 2319:
case 2137:
case 1754:
case 206:
case 3277:
case 3439:
case 2101:
case 2171:
case 2919:
case 3898:
case 121:
case 2357:
case 3856:
case 829:
case 1417:
case 1062:
case 3241:
case 1031:
case 719:
case 748:
case 2554:
case 4063:
case 3549:
case 3003:
case 1154:
case 3790:
case 890:
case 1835:
case 2873:
case 573:
case 3841:
case 1248:
case 1806:
case 4037:
case 2407:
case 3404:
case 287:
case 3670:
case 3117:
case 1850:
case 727:
case 1317:
case 1524:
case 2217:
case 3057:
case 1395:
case 4016:
case 701:
case 912:
case 2335:
case 2206:
case 1460:
case 3882:
case 406:
case 3963:
case 4059:
case 3803:
case 723:
case 3920:
case 3923:
case 2023:
case 3864:
case 3154:
case 1475:
case 3121:
case 2305:
case 2926:
case 3551:
case 593:
case 2218:
case 1628:
case 197:
case 1542:
case 1063:
case 2524:
case 3031:
case 1596:
case 3042:
case 1745:
case 3915:
case 911:
case 3263:
case 2028:
case 1792:
case 3405:
case 2635:
case 724:
case 47:
case 3198:
case 3574:
case 2745:
case 50:
case 258:
case 2070:
case 175:
case 2557:
case 1616:
case 999:
case 2899:
case 3243:
case 221:
case 1015:
case 1326:
case 1639:
case 595:
case 3127:
case 558:
case 691:
case 645:
case 1034:
case 3678:
case 2980:
case 3393:
case 3341:
case 1111:
case 44:
case 2990:
case 1666:
case 2555:
case 1607:
case 1769:
case 626:
case 932:
case 532:
case 3380:
case 3970:
case 650:
case 3944:
case 1008:
case 3210:
case 124:
case 3844:
case 952:
case 2314:
case 2268:
case 2330:
case 1555:
case 246:
case 1882:
case 401:
case 3967:
case 1791:
case 2626:
case 3764:
case 159:
case 3528:
case 2574:
case 3797:
case 1371:
case 2852:
case 1335:
case 1670:
case 283:
case 3663:
case 1517:
case 1733:
case 1939:
case 3488:
case 2430:
case 3291:
case 1810:
case 2996:
case 685:
case 381:
case 799:
case 2072:
case 2961:
case 2219:
case 1626:
case 1431:
case 3816:
case 763:
case 3316:
case 4056:
case 3438:
case 3629:
case 3582:
case 3347:
case 2913:
case 460:
case 2743:
case 1370:
case 571:
case 2578:
case 2695:
case 3028:
case 3039:
case 2588:
case 889:
case 3723:
case 14:
case 1518:
case 3069:
case 1625:
case 1104:
case 3253:
case 522:
case 3386:
case 2535:
case 278:
case 3911:
case 2197:
case 377:
case 860:
case 65:
case 3339:
case 1610:
case 1854:
case 2802:
case 3837:
case 846:
case 3902:
case 3933:
case 3327:
case 3105:
case 3677:
case 2889:
case 1567:
case 3827:
case 2832:
case 878:
case 3503:
case 1201:
case 3989:
case 3094:
case 3880:
case 2966:
case 3545:
case 465:
case 416:
case 4091:
case 2307:
case 57:
case 3988:
case 879:
case 2292:
case 3342:
case 3894:
case 1586:
case 1707:
case 111:
case 3868:
case 1600:
case 3584:
case 2955:
case 231:
case 2920:
case 3131:
case 501:
case 794:
case 1007:
case 1012:
case 1038:
case 3734:
case 219:
case 3883:
case 990:
case 2595:
case 2851:
case 2280:
case 900:
case 1632:
case 1175:
case 3251:
case 1534:
case 1648:
case 2329:
case 112:
case 3191:
case 3842:
case 2651:
case 3573:
case 2674:
case 1291:
case 8:
case 2453:
case 349:
case 459:
case 2082:
case 1420:
case 2649:
case 857:
case 1372:
case 3046:
case 41:
case 907:
case 997:
case 1130:
case 317:
case 3147:
case 2809:
case 1213:
case 3714:
case 1675:
case 2251:
case 375:
case 4068:
case 2484:
case 1469:
case 3941:
case 2981:
case 1584:
case 1569:
case 107:
case 1430:
case 2164:
case 186:
case 2149:
case 3624:
case 1066:
case 1982:
case 3170:
case 3706:
case 180:
case 762:
case 3829:
case 1255:
case 444:
case 3826:
case 350:
case 1321:
case 3279:
case 3738:
case 845:
case 1200:
case 2311:
case 3086:
case 3349:
case 1627:
case 3411:
case 314:
case 1137:
case 3200:
case 1837:
case 575:
case 2999:
case 3576:
case 1455:
case 1360:
case 1892:
case 3305:
case 3230:
case 3235:
case 3628:
case 3135:
case 804:
case 335:
case 866:
case 994:
case 2284:
case 2669:
case 604:
case 1946:
case 2264:
case 2147:
case 2666:
case 2890:
case 1470:
case 2498:
case 367:
case 3067:
case 2855:
case 4015:
case 1079:
case 92:
case 2707:
case 3282:
case 3375:
case 2547:
case 2841:
case 1011:
case 1183:
case 2938:
case 798:
case 1060:
case 1836:
case 2273:
case 463:
case 3732:
case 3729:
case 280:
case 1080:
case 3594:
case 3892:
case 670:
case 3016:
case 1698:
case 1333:
case 947:
case 547:
case 1405:
case 1814:
case 3184:
case 3722:
case 275:
case 2848:
case 2797:
case 1302:
case 1091:
case 2755:
case 3916:
case 423:
case 3005:
case 555:
case 2710:
case 2087:
case 545:
case 174:
case 3451:
case 1525:
case 3818:
case 3071:
case 1510:
case 2581:
case 1703:
case 858:
case 3306:
case 4013:
case 2231:
case 3274:
case 3352:
case 3381:
case 2263:
case 244:
case 2731:
case 576:
case 1374:
case 3635:
case 3658:
case 199:
case 3389:
case 1796:
case 3553:
case 2974:
case 3585:
case 2562:
case 2321:
case 473:
case 366:
case 1105:
case 3997:
case 74:
case 3143:
case 3510:
case 2343:
case 2728:
case 639:
case 3597:
case 1264:
case 728:
case 2009:
case 2916:
case 3218:
case 3964:
case 812:
case 2544:
case 2013:
case 2130:
case 1965:
case 4020:
case 391:
case 3770:
case 91:
case 2494:
case 395:
case 2187:
case 2297:
case 1322:
case 3564:
case 466:
case 2556:
case 2819:
case 3533:
case 3851:
case 2918:
case 505:
case 3745:
case 2189:
case 487:
case 2826:
case 1697:
case 898:
case 1773:
case 1125:
case 2399:
case 425:
case 1071:
case 776:
case 313:
case 1504:
case 2094:
case 956:
case 3259:
case 10:
case 3027:
case 930:
case 3090:
case 2537:
case 2296:
case 552:
case 2690:
case 2103:
case 3455:
case 773:
case 1002:
case 3884:
case 3364:
case 902:
case 556:
case 2084:
case 533:
case 3598:
case 3000:
case 2113:
case 1167:
case 2377:
case 3798:
case 35:
case 1131:
case 2630:
case 3614:
case 3591:
case 2712:
case 1140:
case 105:
case 4060:
case 2381:
case 2386:
case 2109:
case 2640:
case 49:
case 3667:
case 514:
case 540:
case 891:
case 390:
case 1246:
case 297:
case 261:
case 3763:
case 3429:
case 378:
case 4093:
case 320:
case 752:
case 1926:
case 412:
case 1076:
case 127:
case 1143:
case 3814:
case 3467:
case 1364:
case 429:
case 679:
case 3050:
case 2716:
case 3917:
case 1621:
case 1471:
case 819:
case 1664:
case 3087:
case 2793:
case 3733:
case 3768:
case 1006:
case 1572:
case 4:
case 666:
case 1373:
case 676:
case 3104:
case 1352:
case 2576:
case 3620:
case 2824:
case 2726:
case 3976:
case 1439:
case 468:
case 729:
case 2242:
case 2515:
case 185:
case 182:
case 3475:
case 914:
case 198:
case 1136:
case 2543:
case 2879:
case 606:
case 3805:
case 980:
case 2863:
case 1244:
case 842:
case 2876:
case 1658:
case 3496:
case 2001:
case 1179:
case 893:
case 2485:
case 434:
case 1916:
case 3605:
case 712:
case 59:
case 3626:
case 991:
case 1046:
case 888:
case 1795:
case 841:
case 1442:
case 1440:
case 1560:
case 2191:
case 353:
case 3211:
case 2518:
case 3949:
case 3266:
case 3931:
case 1283:
case 3830:
case 451:
case 3272:
case 3518:
case 3219:
case 3399:
case 1272:
case 3367:
case 2836:
case 3535:
case 525:
case 2711:
case 1113:
case 1462:
case 2380:
case 2312:
case 826:
case 2172:
case 348:
case 2418:
case 607:
case 2255:
case 3178:
case 4032:
case 482:
case 863:
case 936:
case 758:
case 365:
case 1849:
case 3760:
case 4077:
case 2240:
case 4085:
case 2302:
case 559:
case 3619:
case 1226:
case 1173:
case 2799:
case 83:
case 2306:
case 2506:
case 480:
case 1878:
case 2681:
case 4035:
case 2066:
case 627:
case 2068:
case 3908:
case 93:
case 590:
case 3162:
case 318:
case 1799:
case 1929:
case 15:
case 2213:
case 713:
case 3292:
case 1808:
case 2579:
case 989:
case 3767:
case 3195:
case 3441:
case 3293:
case 3876:
case 1774:
case 848:
case 1410:
case 3278:
case 1082:
case 2861:
case 1853:
case 3423:
case 445:
case 3402:
case 2395:
case 2098:
case 3690:
case 3444:
case 2642:
case 2061:
case 2024:
case 1746:
case 3599:
case 1922:
case 654:
case 3716:
case 3983:
case 3061:
case 2271:
case 3458:
case 856:
case 682:
case 745:
case 94:
case 1243:
case 256:
case 2300:
case 3565:
case 982:
case 1151:
case 2914:
case 3692:
case 972:
case 849:
case 562:
case 2384:
case 243:
case 1866:
case 2789:
case 3379:
case 404:
case 2871:
case 3457:
case 1222:
case 3489:
case 2276:
case 2629:
case 2233:
case 3741:
case 2423:
case 2000:
case 3822:
case 3721:
case 3428:
case 245:
case 1581:
case 457:
case 2532:
case 793:
case 2633:
case 901:
case 3661:
case 1110:
case 926:
case 3875:
case 3612:
case 3943:
case 3795:
case 2492:
case 3668:
case 4069:
case 1863:
case 338:
case 1037:
case 3138:
case 3712:
case 684:
case 1887:
case 795:
case 1404:
case 2663:
case 2097:
case 2204:
case 2741:
case 520:
case 3801:
case 249:
case 16:
case 88:
case 3299:
case 835:
case 1203:
case 1122:
case 203:
case 3478:
case 3647:
case 413:
case 3113:
case 754:
case 3100:
case 2935:
case 803:
case 419:
case 3815:
case 792:
case 1484:
case 104:
case 528:
case 2188:
case 1781:
case 580:
case 2472:
case 2030:
case 1550:
case 4029:
case 578:
case 674:
case 1252:
case 3407:
case 4058:
case 1218:
case 3644:
case 2909:
case 113:
case 2383:
case 1588:
case 2945:
case 1963:
case 3309:
case 2693:
case 2121:
case 322:
case 2419:
case 3169:
case 2904:
case 3718:
case 3975:
case 3913:
case 2327:
case 3751:
case 3095:
case 1384:
case 2323:
case 2236:
case 2060:
case 3835:
case 2249:
case 2027:
case 3952:
case 813:
case 2652:
case 2369:
case 1380:
case 1590:
case 3351:
case 1617:
case 2723:
case 1868:
case 3961:
case 3527:
case 2931:
case 1896:
case 2705:
case 1223:
case 2325:
case 957:
case 3854:
case 2791:
case 1998:
case 2102:
case 2977:
case 3654:
case 344:
case 250:
case 3688:
case 868:
case 3750:
case 851:
case 1275:
case 1115:
case 2992:
case 274:
case 1468:
case 3748:
case 3075:
case 1936:
case 820:
case 833:
case 659:
case 1571:
case 188:
case 3971:
case 3247:
case 1604:
case 1987:
case 442:
case 1376:
case 746:
case 1129:
case 119:
case 2934:
case 1149:
case 3406:
case 3485:
case 177:
case 3674:
case 202:
case 1723:
case 2499:
case 3234:
case 2530:
case 4078:
case 418:
case 2539:
case 1208:
case 3569:
case 3448:
case 122:
case 2039:
case 2486:
case 2020:
case 2463:
case 3196:
case 630:
case 1258:
case 970:
case 1996:
case 3759:
case 485:
case 617:
case 2748:
case 3228:
case 3932:
case 436:
case 2226:
case 3735:
case 3828:
case 766:
case 969:
case 619:
case 515:
case 1807:
case 775:
case 1636:
case 2507:
case 1186:
case 3034:
case 2358:
case 3053:
case 4017:
case 4025:
case 2751:
case 542:
case 1363:
case 1726:
case 173:
case 2625:
case 398:
case 2482:
case 1862:
case 120:
case 643:
case 3665:
case 1284:
case 254:
case 611:
case 628:
case 546:
case 750:
case 2987:
case 2825:
case 1945:
case 521:
case 2624:
case 24:
case 1298:
case 1681:
case 664:
case 2611:
case 1811:
case 3974:
case 2398:
case 1312:
case 599:
case 1747:
case 486:
case 2258:
case 2563:
case 3980:
case 923:
case 2075:
case 1817:
case 3813:
case 3728:
case 3048:
case 417:
case 954:
case 1486:
case 1189:
case 1667:
case 2247:
case 1563:
case 383:
case 18:
case 1461:
case 2632:
case 1646:
case 334:
case 2040:
case 1875:
case 1378:
case 26:
case 2414:
case 1304:
case 2694:
case 1894:
case 2450:
case 330:
case 995:
case 2529:
case 2064:
case 2290:
case 1783:
case 1999:
case 2270:
case 2504:
case 2612:
case 696:
case 1977:
case 2221:
case 2396:
case 2968:
case 2803:
case 3855:
case 1498:
case 3262:
case 3271:
case 1381:
case 4066:
case 1339:
case 3900:
case 1942:
case 462:
case 2857:
case 1762:
case 2854:
case 512:
case 761:
case 2203:
case 3461:
case 3847:
case 2924:
case 324:
case 3869:
case 481:
case 2207:
case 2180:
case 0:
case 976:
case 1578:
case 2012:
case 2815:
case 2856:
case 3581:
case 950:
case 3032:
case 2585:
case 82:
case 4051:
case 218:
case 3863:
case 2684:
case 1888:
case 2678:
case 1399:
case 3947:
case 3021:
case 2958:
case 2196:
case 1861:
case 329:
case 3240:
case 3953:
case 2645:
case 3618:
case 2179:
case 3700:
case 3231:
case 310:
case 3013:
case 3398:
case 3907:
case 4018:
case 266:
case 1657:
case 3587:
case 2781:
case 1217:
case 3232:
case 3477:
case 3298:
case 2364:
case 1014:
case 3480:
case 616:
case 2827:
case 1506:
case 1485:
case 2150:
case 1928:
case 2522:
case 415:
case 2056:
case 933:
case 1512:
case 3257:
case 2457:
case 1699:
case 2161:
case 3185:
case 1041:
case 2925:
case 2867:
case 2946:
case 2391:
case 1163:
case 2210:
case 1678:
case 1067:
case 2378:
case 3097:
case 1261:
case 2786:
case 625:
case 2036:
case 1786:
case 1024:
case 2214:
case 3802:
case 3571:
case 1340:
case 3137:
case 3634:
case 3495:
case 3453:
case 1981:
case 1092:
case 2440:
case 2668:
case 2048:
case 2286:
case 3783:
case 3330:
case 458:
case 1976:
case 4072:
case 424:
case 4073:
case 503:
case 260:
case 1418:
case 582:
case 1336:
case 2644:
case 3954:
case 1199:
case 1078:
case 217:
case 656:
case 2368:
case 3459:
case 3188:
case 2298:
case 2478:
case 2653:
case 2512:
case 2817:
case 2655:
case 2093:
case 1593:
case 1920:
case 1603:
case 1570:
case 1467:
case 1749:
case 3486:
case 1320:
case 461:
case 2721:
case 2814:
case 2341:
case 2911:
case 2373:
case 623:
case 73:
case 917:
case 1483:
case 1793:
case 1738:
case 518:
case 2834:
case 207:
case 1752:
case 3041:
case 215:
case 1027:
case 3776:
case 3500:
case 1353:
case 1721:
case 1841:
case 239:
case 2452:
case 3878:
case 3303:
case 1970:
case 3704:
case 4004:
case 3986:
case 325:
case 1313:
case 694:
case 1873:
case 1481:
case 1671:
case 3611:
case 1537:
case 2823:
case 3383:
case 2954:
case 3019:
case 2006:
case 1673:
case 1710:
case 2365:
case 2997:
case 3808:
case 1472:
case 2829:
case 3157:
case 286:
case 1210:
case 1980:
case 1253:
case 2734:
case 238:
case 3578:
case 1377:
case 781:
case 862:
case 2282:
case 3065:
case 1152:
case 3577:
case 3335:
case 141:
case 653:
case 1402:
case 3360:
case 154:
case 443:
case 2379:
case 859:
case 1437:
case 624:
case 2792:
case 2315:
case 3593:
case 3412:
case 942:
case 2975:
case 2671:
case 3568:
case 3466:
case 1236:
case 3630:
case 2610:
case 2594:
case 753:
case 1145:
case 577:
case 3608:
case 1665:
case 2846:
case 1054:
case 3377:
case 3491:
case 13:
case 1933:
case 373:
case 2245:
case 3995:
case 1030:
case 2350:
case 1765:
case 4052:
case 204:
case 3181:
case 3300:
case 3498:
case 3422:
case 3430:
case 3101:
case 181:
case 1859:
case 3824:
case 2493:
case 2778:
case 2865:
case 2840:
case 3192:
case 924:
case 2124:
case 519:
case 1459:
case 3144:
case 1740:
case 36:
case 3403:
case 1095:
case 447:
case 3705:
case 1343:
case 1075:
case 3810:
case 2963:
case 3895:
case 2105:
case 2805:
case 326:
case 3326:
case 4009:
case 1393:
case 1478:
case 2970:
case 3950:
case 1265:
case 882:
case 3561:
case 800:
case 3567:
case 205:
case 3996:
case 3474:
case 1605:
case 3595:
case 9:
case 3711:
case 2513:
case 3427:
case 2973:
case 3530:
case 1955:
case 2205:
case 2551:
case 3615:
case 357:
case 1805:
case 2005:
case 402:
case 2657:
case 2361:
case 655:
case 2119:
case 508:
case 2858:
case 2908:
case 2417:
case 3222:
case 755:
case 1285:
case 428:
case 1917:
case 2336:
case 2670:
case 1018:
case 2351:
case 964:
case 649:
case 2003:
case 2675:
case 3669:
case 3702:
case 2808:
case 2095:
case 2285:
case 393:
case 2096:
case 2613:
case 3473:
case 2215:
case 3384:
case 2468:
case 1816:
case 2033:
case 1634:
case 62:
case 3224:
case 2489:
case 2190:
case 2041:
case 2697:
case 875:
case 2602:
case 1838:
case 1494:
case 1102:
case 2511:
case 612:
case 2029:
case 279:
case 1931:
case 1907:
case 603:
case 2476:
case 539:
case 3793:
case 3653:
case 4036:
case 1877:
case 3060:
case 3696:
case 3248:
case 817:
case 20:
case 3505:
case 1401:
case 605:
case 988:
case 1271:
case 352:
case 2229:
case 1238:
case 945:
case 223:
case 1891:
case 1392:
case 1013:
case 3325:
case 298:
case 2718:
case 1734:
case 1010:
case 2872:
case 2603:
case 3724:
case 2936:
case 741:
case 67:
case 3889:
case 1035:
case 360:
case 408:
case 3646:
case 715:
case 3038:
case 1990:
case 3103:
case 2159:
case 2942:
case 1934:
case 341:
case 788:
case 149:
case 3534:
case 339:
case 3334:
case 1123:
case 1957:
case 983:
case 2972:
case 1650:
case 3208:
case 2114:
case 646:
case 2447:
case 1869:
case 3163:
case 2265:
case 96:
case 757:
case 1595:
case 3425:
case 1318:
case 3999:
case 2167:
case 2353:
case 548:
case 3541:
case 4083:
case 3737:
case 1056:
case 823:
case 2487:
case 252:
case 3912:
case 1846:
case 1406:
case 3363:
case 688:
case 2619:
case 1358:
case 1001:
case 2356:
case 3336:
case 780:
case 3708:
case 678:
case 1543:
case 3470:
case 316:
case 227:
case 2415:
case 478:
case 21:
case 2444:
case 1032:
case 3456:
case 1515:
case 2208:
case 3128:
case 3686:
case 2411:
case 2870:
case 2480:
case 3417:
case 2831:
case 2456:
case 3413:
case 2976:
case 1694:
case 108:
case 2122:
case 2339:
case 2337:
case 2822:
case 953:
case 347:
case 1647:
case 3387:
case 2032:
case 1842:
case 1044:
case 2232:
case 2842:
case 3755:
case 1094:
case 3627:
case 504:
case 3201:
case 356:
case 2570:
case 922:
case 1843:
case 1266:
case 2473:
case 4010:
case 1788:
case 2011:
case 3401:
case 2220:
case 3921:
case 1700:
case 2790:
case 1424:
case 491:
case 184:
case 3483:
case 3865:
case 1070:
case 336:
case 704:
case 1656:
case 2582:
case 1787:
case 1899:
case 2566:
case 569:
case 544:
case 3893:
case 2360:
case 749:
case 99:
case 1412:
case 142:
case 23:
case 2618:
case 1120:
case 1288:
case 1598:
case 4082:
case 711:
case 3926:
case 3625:
case 201:
case 1227:
case 689:
case 2700:
case 2050:
case 1267:
case 1633:
case 2969:
case 1162:
case 1497:
case 2643:
case 3134:
case 2433:
case 114:
case 3575:
case 2393:
case 2022:
case 1967:
case 2228:
case 3035:
case 974:
case 2134:
case 2891:
case 1365:
case 407:
case 3906:
case 1785:
case 251:
case 303:
case 779:
case 1751:
case 2765:
case 3332:
case 3084:
case 3426:
case 3637:
case 1190:
case 2448:
case 1351:
case 1918:
case 2770:
case 474:
case 2833:
case 1913:
case 2035:
case 2259:
case 2552:
case 2677:
case 707:
case 725:
case 895:
case 1314:
case 164:
case 3164:
case 3636:
case 3484:
case 1308:
case 3650:
case 2526:
case 2896:
case 524:
case 2224:
case 4040:
case 3517:
case 2912:
case 43:
case 2176:
case 1268:
case 1802:
case 3264:
case 955:
case 323:
case 200:
case 3775:
case 3072:
case 747:
case 3531:
case 1768:
case 3651:
case 2847:
case 1387:
case 220:
case 2073:
case 3994:
case 1973:
case 1872:
case 1098:
case 1448:
case 610:
case 1535:
case 2328:
case 2243:
case 171:
case 2604:
case 3079:
case 3940:
case 1564:
case 1855:
case 2400:
case 1204:
case 268:
case 2446:
case 3194:
case 2701:
case 148:
case 448:
case 998:
case 1454:
case 156:
case 38:
case 1909:
case 2038:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1686693601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,];
var gg_b = "1686693601/";

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
