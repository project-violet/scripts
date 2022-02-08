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
case 276:
case 2448:
case 449:
case 971:
case 2458:
case 1648:
case 609:
case 2774:
case 2330:
case 2701:
case 1762:
case 3343:
case 3326:
case 1008:
case 2952:
case 3653:
case 170:
case 1085:
case 1614:
case 1734:
case 943:
case 2028:
case 3663:
case 1247:
case 1189:
case 2879:
case 1325:
case 1920:
case 2685:
case 344:
case 1240:
case 2254:
case 3209:
case 2975:
case 2782:
case 604:
case 567:
case 2970:
case 1510:
case 3257:
case 2968:
case 1863:
case 1215:
case 3016:
case 3398:
case 2617:
case 3807:
case 2778:
case 3095:
case 2420:
case 2510:
case 3735:
case 1903:
case 405:
case 2760:
case 3846:
case 3066:
case 169:
case 2216:
case 1299:
case 3851:
case 393:
case 3377:
case 3238:
case 1096:
case 3637:
case 2825:
case 99:
case 1092:
case 445:
case 418:
case 709:
case 2149:
case 300:
case 1035:
case 3948:
case 3721:
case 2465:
case 2605:
case 564:
case 1390:
case 659:
case 2878:
case 1210:
case 601:
case 2484:
case 725:
case 462:
case 3926:
case 1963:
case 3665:
case 806:
case 3920:
case 262:
case 3729:
case 2410:
case 1422:
case 2532:
case 2356:
case 682:
case 1104:
case 3455:
case 3759:
case 1365:
case 590:
case 3680:
case 2961:
case 525:
case 752:
case 2459:
case 2322:
case 1708:
case 3279:
case 690:
case 3792:
case 3779:
case 594:
case 107:
case 1217:
case 2632:
case 735:
case 2870:
case 2157:
case 3177:
case 1536:
case 1586:
case 696:
case 434:
case 1056:
case 3081:
case 515:
case 3433:
case 832:
case 2485:
case 478:
case 1292:
case 1381:
case 1230:
case 3771:
case 458:
case 1806:
case 2649:
case 959:
case 774:
case 2755:
case 3471:
case 2382:
case 341:
case 3172:
case 410:
case 1376:
case 3806:
case 2055:
case 3915:
case 307:
case 1304:
case 325:
case 175:
case 1592:
case 1797:
case 768:
case 2939:
case 1611:
case 4002:
case 2990:
case 2297:
case 2457:
case 2816:
case 1773:
case 2697:
case 535:
case 1166:
case 2940:
case 63:
case 834:
case 2470:
case 3724:
case 2210:
case 382:
case 3922:
case 552:
case 236:
case 1577:
case 1722:
case 1886:
case 3277:
case 3028:
case 2806:
case 728:
case 3733:
case 1500:
case 2687:
case 1777:
case 1120:
case 817:
case 1687:
case 3446:
case 1935:
case 642:
case 2152:
case 1837:
case 734:
case 3271:
case 1009:
case 1272:
case 1141:
case 50:
case 978:
case 3309:
case 1302:
case 2424:
case 2559:
case 2503:
case 3984:
case 2139:
case 3581:
case 212:
case 905:
case 3890:
case 3048:
case 277:
case 3972:
case 149:
case 1059:
case 41:
case 2601:
case 3739:
case 53:
case 3557:
case 1505:
case 3302:
case 2828:
case 3173:
case 3391:
case 1578:
case 3678:
case 323:
case 1496:
case 2035:
case 1142:
case 2145:
case 1301:
case 2177:
case 3171:
case 942:
case 607:
case 1070:
case 1669:
case 1256:
case 2206:
case 593:
case 1383:
case 2433:
case 671:
case 2247:
case 2501:
case 859:
case 1484:
case 751:
case 3802:
case 2454:
case 1830:
case 854:
case 118:
case 2512:
case 3973:
case 3369:
case 1236:
case 951:
case 3828:
case 260:
case 1024:
case 3138:
case 2721:
case 1515:
case 3750:
case 1805:
case 2517:
case 1485:
case 4001:
case 2147:
case 473:
case 2440:
case 486:
case 2092:
case 2384:
case 3142:
case 2389:
case 1581:
case 32:
case 1795:
case 2289:
case 697:
case 4043:
case 310:
case 3994:
case 1197:
case 1570:
case 3240:
case 1291:
case 494:
case 1259:
case 1751:
case 2233:
case 2735:
case 557:
case 3950:
case 1258:
case 3224:
case 387:
case 3444:
case 308:
case 1565:
case 2436:
case 2658:
case 1022:
case 3268:
case 1102:
case 1478:
case 3519:
case 3773:
case 3178:
case 595:
case 134:
case 2846:
case 1566:
case 1066:
case 1943:
case 3482:
case 227:
case 591:
case 1749:
case 425:
case 1584:
case 2711:
case 3955:
case 2300:
case 3628:
case 2054:
case 2887:
case 2027:
case 3649:
case 1007:
case 1838:
case 2001:
case 3199:
case 62:
case 57:
case 3891:
case 1664:
case 3376:
case 3842:
case 698:
case 2412:
case 860:
case 568:
case 2179:
case 997:
case 4072:
case 297:
case 1004:
case 573:
case 2345:
case 2473:
case 3681:
case 1623:
case 831:
case 1270:
case 1780:
case 982:
case 3630:
case 1654:
case 3223:
case 1719:
case 865:
case 2241:
case 3020:
case 2282:
case 624:
case 1843:
case 2244:
case 2450:
case 2380:
case 1683:
case 2704:
case 1808:
case 1760:
case 416:
case 2225:
case 3985:
case 2978:
case 984:
case 3691:
case 3338:
case 3043:
case 975:
case 3909:
case 1633:
case 3143:
case 2460:
case 945:
case 1971:
case 495:
case 2725:
case 2125:
case 788:
case 1025:
case 2873:
case 317:
case 3541:
case 1634:
case 3027:
case 3645:
case 1840:
case 3047:
case 2994:
case 1964:
case 2520:
case 22:
case 1386:
case 3191:
case 2694:
case 3732:
case 3430:
case 662:
case 2464:
case 1163:
case 3126:
case 1912:
case 3065:
case 1244:
case 2280:
case 3900:
case 2045:
case 2075:
case 2142:
case 1660:
case 915:
case 1853:
case 2607:
case 3586:
case 1858:
case 3989:
case 1203:
case 3428:
case 3274:
case 3887:
case 1901:
case 1861:
case 3227:
case 2083:
case 2334:
case 2333:
case 2335:
case 701:
case 691:
case 1658:
case 3813:
case 1615:
case 900:
case 1449:
case 2506:
case 3540:
case 2245:
case 1922:
case 948:
case 3831:
case 3765:
case 336:
case 2945:
case 1338:
case 309:
case 111:
case 2888:
case 464:
case 2733:
case 855:
case 3485:
case 3977:
case 3486:
case 661:
case 3609:
case 3838:
case 2275:
case 2771:
case 1721:
case 1747:
case 470:
case 1583:
case 1641:
case 3000:
case 1367:
case 2619:
case 3582:
case 2892:
case 520:
case 2146:
case 1877:
case 1410:
case 3002:
case 4061:
case 2853:
case 726:
case 135:
case 1332:
case 1759:
case 1815:
case 2692:
case 4016:
case 1235:
case 3584:
case 3121:
case 1497:
case 862:
case 1790:
case 1194:
case 3082:
case 17:
case 782:
case 1113:
case 1715:
case 3102:
case 3980:
case 3070:
case 2586:
case 68:
case 1816:
case 2641:
case 2624:
case 3667:
case 181:
case 2985:
case 3335:
case 221:
case 420:
case 532:
case 891:
case 1552:
case 2046:
case 367:
case 3006:
case 2862:
case 2794:
case 3175:
case 779:
case 2856:
case 3185:
case 3301:
case 3415:
case 3148:
case 3212:
case 2105:
case 229:
case 3517:
case 78:
case 2476:
case 1122:
case 2974:
case 3042:
case 2386:
case 2603:
case 3213:
case 1595:
case 912:
case 2359:
case 3518:
case 3749:
case 1824:
case 781:
case 2087:
case 1519:
case 730:
case 3056:
case 2429:
case 3524:
case 126:
case 980:
case 1276:
case 667:
case 3157:
case 3904:
case 3299:
case 3049:
case 2743:
case 506:
case 2073:
case 3332:
case 0:
case 427:
case 814:
case 630:
case 3445:
case 857:
case 23:
case 2452:
case 3149:
case 2912:
case 3319:
case 878:
case 2121:
case 676:
case 611:
case 2150:
case 4056:
case 3840:
case 1373:
case 769:
case 1305:
case 985:
case 1679:
case 533:
case 1817:
case 2524:
case 2132:
case 4004:
case 3844:
case 3296:
case 1995:
case 497:
case 475:
case 3944:
case 1818:
case 815:
case 3710:
case 3155:
case 254:
case 3785:
case 2561:
case 1023:
case 3040:
case 474:
case 1201:
case 2270:
case 2222:
case 2416:
case 1945:
case 73:
case 2153:
case 3823:
case 1823:
case 2709:
case 334:
case 3945:
case 3465:
case 1296:
case 3441:
case 164:
case 3402:
case 712:
case 1850:
case 2857:
case 2169:
case 631:
case 3418:
case 3494:
case 1717:
case 2343:
case 2894:
case 3675:
case 2574:
case 3366:
case 3931:
case 3555:
case 1473:
case 1405:
case 1245:
case 3501:
case 3496:
case 3873:
case 2982:
case 1526:
case 3464:
case 4059:
case 2903:
case 2163:
case 3605:
case 1057:
case 2220:
case 1131:
case 1881:
case 163:
case 4038:
case 2492:
case 619:
case 25:
case 3146:
case 1437:
case 714:
case 2071:
case 3918:
case 3742:
case 3763:
case 3071:
case 444:
case 245:
case 373:
case 3334:
case 3399:
case 820:
case 3429:
case 3421:
case 2855:
case 961:
case 3516:
case 3863:
case 1309:
case 115:
case 3705:
case 2880:
case 454:
case 3057:
case 472:
case 3895:
case 858:
case 2161:
case 3259:
case 718:
case 3795:
case 1513:
case 1399:
case 3579:
case 2500:
case 1482:
case 2040:
case 585:
case 1569:
case 1075:
case 2425:
case 94:
case 597:
case 1575:
case 2980:
case 234:
case 688:
case 3745:
case 243:
case 1756:
case 1531:
case 2677:
case 3762:
case 4048:
case 312:
case 1913:
case 4030:
case 369:
case 974:
case 1281:
case 3550:
case 1282:
case 412:
case 2529:
case 1878:
case 82:
case 2003:
case 487:
case 1493:
case 2678:
case 1527:
case 2296:
case 3596:
case 1690:
case 2504:
case 2437:
case 3489:
case 528:
case 1625:
case 1147:
case 3247:
case 2554:
case 417:
case 2777:
case 969:
case 2180:
case 2684:
case 2984:
case 3472:
case 2204:
case 3995:
case 669:
case 3672:
case 674:
case 3374:
case 1635:
case 2490:
case 2013:
case 1733:
case 523:
case 2242:
case 3971:
case 1929:
case 239:
case 2172:
case 2079:
case 1177:
case 3951:
case 193:
case 2267:
case 2876:
case 1947:
case 2655:
case 3836:
case 3432:
case 1735:
case 1763:
case 2293:
case 3986:
case 1198:
case 2976:
case 1001:
case 1674:
case 2115:
case 1380:
case 159:
case 2238:
case 908:
case 2656:
case 3196:
case 220:
case 3913:
case 3206:
case 2753:
case 2230:
case 2923:
case 1093:
case 315:
case 759:
case 4095:
case 542:
case 2865:
case 2193:
case 3504:
case 461:
case 3552:
case 3265:
case 504:
case 1803:
case 3286:
case 1073:
case 3580:
case 2759:
case 4081:
case 1973:
case 1520:
case 2097:
case 152:
case 3544:
case 1424:
case 1887:
case 265:
case 1454:
case 1199:
case 2713:
case 2741:
case 2310:
case 1550:
case 4082:
case 491:
case 1003:
case 377:
case 3616:
case 3167:
case 924:
case 3232:
case 3019:
case 3704:
case 3708:
case 2763:
case 3991:
case 1694:
case 3080:
case 1663:
case 2313:
case 2752:
case 448:
case 117:
case 1117:
case 2943:
case 2290:
case 3506:
case 3372:
case 1252:
case 2757:
case 927:
case 3414:
case 3258:
case 856:
case 1134:
case 80:
case 223:
case 4088:
case 925:
case 61:
case 88:
case 3855:
case 4010:
case 3825:
case 2796:
case 2120:
case 638:
case 438:
case 2074:
case 794:
case 4086:
case 1970:
case 3601:
case 2219:
case 988:
case 2528:
case 1414:
case 2872:
case 1551:
case 3205:
case 888:
case 1172:
case 2156:
case 1221:
case 2679:
case 877:
case 2468:
case 2783:
case 1930:
case 3314:
case 1006:
case 2929:
case 1847:
case 2556:
case 1150:
case 1356:
case 1408:
case 4003:
case 993:
case 3244:
case 3686:
case 3924:
case 2277:
case 2398:
case 1225:
case 1596:
case 2553:
case 2893:
case 3715:
case 2651:
case 3165:
case 1522:
case 1931:
case 2808:
case 550:
case 2:
case 1758:
case 527:
case 3736:
case 1984:
case 176:
case 3093:
case 1548:
case 47:
case 2215:
case 3385:
case 2155:
case 71:
case 2688:
case 3962:
case 192:
case 1140:
case 398:
case 2804:
case 3014:
case 4062:
case 2141:
case 2843:
case 3959:
case 129:
case 2228:
case 780:
case 883:
case 2474:
case 3354:
case 3013:
case 3010:
case 2789:
case 2588:
case 2402:
case 2612:
case 561:
case 2519:
case 2937:
case 972:
case 3559:
case 2367:
case 2717:
case 1153:
case 992:
case 1906:
case 3619:
case 2390:
case 3468:
case 979:
case 2487:
case 3634:
case 2404:
case 3538:
case 3170:
case 2170:
case 2646:
case 1255:
case 3123:
case 3467:
case 3624:
case 3243:
case 3438:
case 3393:
case 603:
case 264:
case 3830:
case 3406:
case 2696:
case 3364:
case 2802:
case 1547:
case 3161:
case 2924:
case 3254:
case 1825:
case 2522:
case 326:
case 2229:
case 1982:
case 879:
case 1624:
case 3073:
case 3768:
case 2020:
case 3698:
case 2798:
case 1765:
case 3490:
case 2319:
case 2317:
case 4069:
case 3834:
case 1854:
case 1732:
case 1768:
case 710:
case 1926:
case 268:
case 1653:
case 2263:
case 330:
case 2369:
case 2025:
case 3156:
case 1:
case 1311:
case 3144:
case 645:
case 1187:
case 2284:
case 301:
case 1165:
case 66:
case 299:
case 3648:
case 1488:
case 2107:
case 1643:
case 1549:
case 3747:
case 1676:
case 3520:
case 2339:
case 172:
case 1486:
case 3798:
case 3515:
case 1253:
case 1340:
case 2638:
case 3602:
case 3956:
case 1420:
case 261:
case 917:
case 2394:
case 3992:
case 3037:
case 863:
case 625:
case 2657:
case 3783:
case 3643:
case 1037:
case 1718:
case 2286:
case 704:
case 3537:
case 3542:
case 587:
case 1334:
case 238:
case 1444:
case 3474:
case 2676:
case 2728:
case 798:
case 589:
case 9:
case 920:
case 1441:
case 3764:
case 3030:
case 1233:
case 2581:
case 1972:
case 1580:
case 2765:
case 46:
case 1502:
case 3015:
case 3974:
case 95:
case 1015:
case 2472:
case 158:
case 2197:
case 327:
case 1989:
case 931:
case 1784:
case 2558:
case 3753:
case 1726:
case 3827:
case 1737:
case 1968:
case 3063:
case 1487:
case 1109:
case 3534:
case 232:
case 3857:
case 3405:
case 144:
case 1921:
case 1379:
case 485:
case 1953:
case 2769:
case 2702:
case 242:
case 1980:
case 3450:
case 1053:
case 3614:
case 3921:
case 2261:
case 2718:
case 2690:
case 133:
case 2383:
case 1065:
case 1071:
case 3237:
case 1231:
case 1610:
case 1612:
case 120:
case 3226:
case 1651:
case 222:
case 3726:
case 3620:
case 466:
case 3220:
case 1111:
case 546:
case 198:
case 2467:
case 3051:
case 2191:
case 218:
case 4090:
case 381:
case 3262:
case 1313:
case 2712:
case 3910:
case 256:
case 2119:
case 2539:
case 8:
case 518:
case 2800:
case 1310:
case 2496:
case 1985:
case 52:
case 1491:
case 675:
case 3221:
case 2400:
case 1171:
case 3379:
case 2779:
case 3104:
case 1238:
case 1429:
case 720:
case 3339:
case 2568:
case 1466:
case 548:
case 3568:
case 313:
case 4040:
case 433:
case 562:
case 1475:
case 1967:
case 2340:
case 246:
case 285:
case 1133:
case 3045:
case 3285:
case 432:
case 1403:
case 2240:
case 3330:
case 1123:
case 1114:
case 770:
case 2538:
case 3587:
case 1461:
case 187:
case 1411:
case 3754:
case 761:
case 808:
case 3280:
case 1041:
case 3889:
case 255:
case 3341:
case 1859:
case 2742:
case 3847:
case 1523:
case 544:
case 348:
case 2754:
case 3140:
case 3741:
case 484:
case 909:
case 1866:
case 2949:
case 2371:
case 1833:
case 1344:
case 2811:
case 204:
case 2591:
case 1556:
case 2323:
case 2598:
case 1700:
case 3357:
case 1260:
case 1891:
case 3635:
case 928:
case 802:
case 411:
case 1812:
case 2633:
case 1541:
case 3383:
case 2183:
case 3394:
case 2338:
case 2642:
case 3786:
case 3746:
case 2578:
case 3497:
case 85:
case 2719:
case 2989:
case 613:
case 3423:
case 3716:
case 2815:
case 3487:
case 2239:
case 3774:
case 390:
case 1087:
case 3466:
case 643:
case 343:
case 1477:
case 685:
case 1054:
case 3521:
case 2823:
case 1785:
case 2791:
case 3316:
case 2129:
case 2681:
case 517:
case 1650:
case 2732:
case 3451:
case 3731:
case 130:
case 3307:
case 3371:
case 2737:
case 3195:
case 2675:
case 3310:
case 3133:
case 2890:
case 813:
case 1283:
case 3180:
case 1821:
case 1712:
case 3375:
case 283:
case 2427:
case 2291:
case 2746:
case 3276:
case 2900:
case 799:
case 1535:
case 1394:
case 2810:
case 2432:
case 2256:
case 108:
case 2085:
case 3476:
case 778:
case 2868:
case 3:
case 3772:
case 923:
case 127:
case 146:
case 2091:
case 2185:
case 2009:
case 2395:
case 1149:
case 3636:
case 1774:
case 2551:
case 946:
case 932:
case 2729:
case 845:
case 4087:
case 581:
case 4024:
case 350:
case 3669:
case 2884:
case 1800:
case 12:
case 2673:
case 2935:
case 2237:
case 349:
case 2772:
case 929:
case 467:
case 1290:
case 1640:
case 3353:
case 3976:
case 2620:
case 2441:
case 3611:
case 3780:
case 2136:
case 3033:
case 715:
case 615:
case 641:
case 1112:
case 3239:
case 554:
case 2067:
case 3987:
case 1709:
case 3660:
case 2770:
case 263:
case 19:
case 1013:
case 3122:
case 1152:
case 1925:
case 272:
case 539:
case 1205:
case 87:
case 2366:
case 1702:
case 2069:
case 3202:
case 2182:
case 2421:
case 3707:
case 2393:
case 3805:
case 560:
case 3166:
case 2439:
case 155:
case 3812:
case 3346:
case 2030:
case 2188:
case 3096:
case 1665:
case 2926:
case 3261:
case 2723:
case 1783:
case 3760:
case 1214:
case 1693:
case 956:
case 2508:
case 4027:
case 407:
case 852:
case 3796:
case 1638:
case 2587:
case 1562:
case 1616:
case 566:
case 3907:
case 86:
case 843:
case 4014:
case 598:
case 2499:
case 2950:
case 559:
case 2579:
case 2787:
case 489:
case 844:
case 2051:
case 13:
case 1729:
case 702:
case 3527:
case 1095:
case 2428:
case 3250:
case 687:
case 713:
case 3159:
case 1628:
case 3141:
case 1594:
case 286:
case 2498:
case 1997:
case 3790:
case 2731:
case 446:
case 2557:
case 3491:
case 1063:
case 2951:
case 1976:
case 3416:
case 383:
case 1401:
case 2482:
case 1960:
case 2836:
case 1220:
case 1443:
case 4000:
case 1226:
case 1707:
case 241:
case 413:
case 2292:
case 1407:
case 2123:
case 1593:
case 400:
case 2056:
case 500:
case 2683:
case 399:
case 1942:
case 1439:
case 1434:
case 11:
case 3597:
case 1190:
case 168:
case 1589:
case 1271:
case 1489:
case 1331:
case 1560:
case 366:
case 1218:
case 1632:
case 3571:
case 1898:
case 2471:
case 3999:
case 3068:
case 745:
case 4:
case 3110:
case 1273:
case 1452:
case 2190:
case 3671:
case 1370:
case 3009:
case 3498:
case 636:
case 342:
case 3638:
case 2443:
case 2352:
case 3623:
case 3184:
case 2232:
case 2959:
case 389:
case 2863:
case 38:
case 1951:
case 2442:
case 612:
case 2332:
case 1012:
case 1450:
case 3251:
case 777:
case 3198:
case 1028:
case 3874:
case 4045:
case 2014:
case 105:
case 165:
case 3899:
case 2312:
case 2885:
case 1011:
case 1933:
case 3912:
case 2090:
case 1179:
case 3883:
case 3145:
case 359:
case 1667:
case 291:
case 2058:
case 3053:
case 2897:
case 1865:
case 81:
case 3306:
case 3585:
case 1010:
case 2705:
case 1494:
case 3646:
case 2883:
case 2967:
case 2936:
case 3967:
case 1457:
case 1928:
case 3113:
case 3281:
case 28:
case 3449:
case 3074:
case 2279:
case 3484:
case 2871:
case 3576:
case 2057:
case 104:
case 2362:
case 2493:
case 2541:
case 996:
case 1125:
case 2572:
case 2418:
case 14:
case 628:
case 3539:
case 2346:
case 1348:
case 695:
case 1029:
case 3703:
case 3505:
case 1067:
case 2221:
case 3856:
case 1883:
case 469:
case 2088:
case 3422:
case 1498:
case 3294:
case 2576:
case 936:
case 1873:
case 4092:
case 1741:
case 3437:
case 2566:
case 1387:
case 966:
case 2258:
case 3961:
case 1517:
case 414:
case 507:
case 3078:
case 652:
case 531:
case 1274:
case 2213:
case 705:
case 2438:
case 756:
case 1772:
case 3453:
case 2029:
case 1764:
case 2927:
case 2948:
case 3120:
case 1789:
case 2063:
case 2342:
case 1321:
case 3829:
case 2563:
case 3946:
case 639:
case 1587:
case 3654:
case 3197:
case 153:
case 655:
case 2348:
case 3718:
case 3439:
case 1521:
case 1020:
case 1359:
case 733:
case 947:
case 3871:
case 1574:
case 2860:
case 558:
case 580:
case 2399:
case 3896:
case 498:
case 1845:
case 1312:
case 3264:
case 2845:
case 3725:
case 2268:
case 2253:
case 2043:
case 1894:
case 1372:
case 2720:
case 1585:
case 786:
case 3282:
case 493:
case 2550:
case 3821:
case 880:
case 2133:
case 2788:
case 3508:
case 3814:
case 1036:
case 1303:
case 1135:
case 556:
case 608:
case 3888:
case 1870:
case 1836:
case 3283:
case 3981:
case 230:
case 3968:
case 1529:
case 3367:
case 2747:
case 3035:
case 1027:
case 43:
case 357:
case 1426:
case 1753:
case 3431:
case 2634:
case 4036:
case 935:
case 2738:
case 3509:
case 647:
case 1136:
case 2882:
case 1542:
case 1711:
case 729:
case 861:
case 3941:
case 3531:
case 3186:
case 3452:
case 1279:
case 746:
case 1397:
case 2715:
case 3397:
case 3864:
case 874:
case 3554:
case 4019:
case 1927:
case 2194:
case 1885:
case 3176:
case 2061:
case 1382:
case 2536:
case 3233:
case 1872:
case 3965:
case 2081:
case 2908:
case 2444:
case 2849:
case 2600:
case 3118:
case 3600:
case 3387:
case 3674:
case 2983:
case 572:
case 2205:
case 2698:
case 1156:
case 2349:
case 2365:
case 749:
case 440:
case 1511:
case 3365:
case 1771:
case 3819:
case 3607:
case 3349:
case 1269:
case 1322:
case 3866:
case 174:
case 2965:
case 1512:
case 1103:
case 148:
case 1254:
case 907:
case 2803:
case 2838:
case 2724:
case 1492:
case 1469:
case 4083:
case 1068:
case 3562:
case 1219:
case 3845:
case 3859:
case 3182:
case 3908:
case 3770:
case 2260:
case 4015:
case 4067:
case 2301:
case 2813:
case 981:
case 1799:
case 2375:
case 1180:
case 2674:
case 1939:
case 2314:
case 339:
case 2217:
case 944:
case 2534:
case 1746:
case 2969:
case 3523:
case 2716:
case 2835:
case 1421:
case 670:
case 1495:
case 1040:
case 4026:
case 830:
case 2272:
case 3131:
case 248:
case 1546:
case 3361:
case 3289:
case 2113:
case 195:
case 1389:
case 3613:
case 1127:
case 4052:
case 3407:
case 102:
case 1573:
case 1077:
case 1046:
case 3270:
case 919:
case 1544:
case 1267:
case 257:
case 1736:
case 3308:
case 1748:
case 2562:
case 3425:
case 1755:
case 3117:
case 280:
case 1257:
case 3090:
case 3930:
case 2407:
case 3041:
case 1567:
case 1451:
case 2977:
case 2613:
case 3137:
case 1385:
case 2331:
case 708:
case 1440:
case 3075:
case 2021:
case 4089:
case 3536:
case 2537:
case 1588:
case 4028:
case 1948:
case 911:
case 2930:
case 3152:
case 783:
case 3598:
case 2910:
case 128:
case 1966:
case 1752:
case 3088:
case 180:
case 1124:
case 455:
case 228:
case 1787:
case 1899:
case 789:
case 2866:
case 100:
case 743:
case 1143:
case 1501:
case 1090:
case 2861:
case 3215:
case 237:
case 1950:
case 2015:
case 1132:
case 2784:
case 2906:
case 916:
case 2086:
case 592:
case 3982:
case 2672:
case 811:
case 1692:
case 2647:
case 4091:
case 3803:
case 1516:
case 3897:
case 2363:
case 2874:
case 2659:
case 678:
case 2727:
case 2032:
case 2818:
case 3249:
case 3129:
case 3139:
case 1467:
case 3996:
case 2002:
case 1251:
case 1553:
case 2895:
case 1465:
case 1324:
case 4042:
case 1105:
case 1507:
case 1406:
case 3127:
case 1039:
case 1229:
case 1893:
case 292:
case 1082:
case 385:
case 516:
case 1670:
case 1993:
case 171:
case 2414:
case 216:
case 656:
case 186:
case 3822:
case 599:
case 1164:
case 2355:
case 2231:
case 140:
case 1685:
case 2066:
case 1418:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1644354001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,];
var gg_b = "1644354001/";

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
