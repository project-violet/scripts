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
case 1267:
case 3862:
case 1179:
case 2399:
case 3740:
case 1282:
case 206:
case 749:
case 3479:
case 1001:
case 1404:
case 370:
case 61:
case 3112:
case 3908:
case 3704:
case 2152:
case 418:
case 2426:
case 2686:
case 564:
case 2141:
case 2368:
case 2737:
case 1729:
case 793:
case 1538:
case 649:
case 91:
case 3305:
case 3442:
case 3892:
case 2741:
case 535:
case 48:
case 744:
case 3726:
case 3137:
case 94:
case 84:
case 1699:
case 2601:
case 1040:
case 4022:
case 1493:
case 1523:
case 3836:
case 2138:
case 3110:
case 2718:
case 3153:
case 1231:
case 3196:
case 506:
case 1584:
case 1533:
case 2383:
case 2194:
case 3194:
case 2812:
case 313:
case 384:
case 3954:
case 1226:
case 3038:
case 2008:
case 3667:
case 3458:
case 4027:
case 412:
case 3769:
case 0:
case 2541:
case 874:
case 2277:
case 3889:
case 542:
case 1062:
case 3461:
case 2570:
case 1581:
case 1047:
case 2504:
case 1426:
case 288:
case 3712:
case 262:
case 851:
case 2810:
case 1381:
case 1695:
case 2282:
case 1058:
case 1210:
case 1161:
case 1036:
case 1297:
case 757:
case 3585:
case 3515:
case 1187:
case 1645:
case 3494:
case 3767:
case 3491:
case 2809:
case 2715:
case 374:
case 165:
case 685:
case 2431:
case 2288:
case 427:
case 2828:
case 2031:
case 2979:
case 3905:
case 2857:
case 1204:
case 63:
case 3796:
case 1333:
case 3390:
case 2606:
case 225:
case 3437:
case 3342:
case 3178:
case 2338:
case 3793:
case 881:
case 3221:
case 1626:
case 1546:
case 1207:
case 693:
case 1390:
case 304:
case 3181:
case 2841:
case 2922:
case 3453:
case 2681:
case 4092:
case 2604:
case 1091:
case 855:
case 813:
case 2684:
case 917:
case 1013:
case 547:
case 1015:
case 786:
case 1732:
case 3860:
case 1790:
case 295:
case 71:
case 452:
case 1527:
case 404:
case 3288:
case 2260:
case 3456:
case 2362:
case 2926:
case 598:
case 2127:
case 3714:
case 989:
case 725:
case 3285:
case 76:
case 3045:
case 2018:
case 2462:
case 3778:
case 2250:
case 419:
case 2760:
case 2088:
case 2973:
case 2344:
case 1747:
case 112:
case 2489:
case 571:
case 1879:
case 2432:
case 3804:
case 3665:
case 3044:
case 631:
case 2189:
case 1115:
case 804:
case 1110:
case 4:
case 1603:
case 3543:
case 3716:
case 2321:
case 1770:
case 2401:
case 724:
case 470:
case 1702:
case 3335:
case 259:
case 2789:
case 3768:
case 1057:
case 2588:
case 2628:
case 1310:
case 2004:
case 906:
case 1579:
case 1551:
case 1117:
case 774:
case 3126:
case 1625:
case 3306:
case 4021:
case 359:
case 1078:
case 3562:
case 2292:
case 2251:
case 602:
case 2527:
case 3250:
case 554:
case 2817:
case 522:
case 392:
case 223:
case 1432:
case 3013:
case 3929:
case 2961:
case 2491:
case 2824:
case 1466:
case 996:
case 1628:
case 2593:
case 2093:
case 2892:
case 2178:
case 673:
case 2568:
case 49:
case 3464:
case 1364:
case 3825:
case 2064:
case 2391:
case 3122:
case 531:
case 914:
case 1665:
case 4049:
case 3525:
case 2318:
case 1135:
case 735:
case 2782:
case 1988:
case 1649:
case 1171:
case 2476:
case 158:
case 3919:
case 3777:
case 1990:
case 3304:
case 2051:
case 577:
case 1600:
case 2236:
case 2244:
case 3152:
case 630:
case 669:
case 2849:
case 1542:
case 3117:
case 249:
case 2013:
case 3631:
case 1748:
case 3942:
case 1097:
case 489:
case 148:
case 587:
case 3689:
case 2361:
case 1242:
case 1669:
case 3050:
case 2767:
case 1451:
case 2959:
case 2173:
case 750:
case 2033:
case 2581:
case 3054:
case 1182:
case 1946:
case 2911:
case 2317:
case 2421:
case 267:
case 383:
case 909:
case 1201:
case 731:
case 1870:
case 1825:
case 1331:
case 162:
case 2231:
case 1100:
case 2471:
case 3482:
case 2963:
case 1308:
case 2955:
case 2833:
case 3425:
case 2665:
case 3764:
case 3301:
case 763:
case 2063:
case 3247:
case 1519:
case 3587:
case 1663:
case 3024:
case 2532:
case 1155:
case 3932:
case 305:
case 1952:
case 2046:
case 2921:
case 2025:
case 3604:
case 432:
case 4074:
case 3843:
case 1445:
case 2295:
case 825:
case 1517:
case 3655:
case 524:
case 361:
case 2666:
case 2587:
case 2123:
case 1446:
case 34:
case 2908:
case 1521:
case 2165:
case 3569:
case 707:
case 1119:
case 695:
case 2610:
case 523:
case 2237:
case 1564:
case 3816:
case 357:
case 2658:
case 1400:
case 762:
case 3030:
case 4056:
case 390:
case 2108:
case 1920:
case 2845:
case 1131:
case 3093:
case 2560:
case 961:
case 1136:
case 1418:
case 318:
case 1096:
case 1804:
case 394:
case 3830:
case 2970:
case 3341:
case 3721:
case 3223:
case 789:
case 2699:
case 1587:
case 568:
case 943:
case 137:
case 1124:
case 3328:
case 3925:
case 3814:
case 299:
case 1270:
case 1682:
case 986:
case 3130:
case 3354:
case 245:
case 3698:
case 1731:
case 1387:
case 500:
case 2056:
case 3824:
case 1806:
case 1923:
case 2750:
case 204:
case 2014:
case 591:
case 3985:
case 886:
case 760:
case 1816:
case 2071:
case 2621:
case 1505:
case 1652:
case 2997:
case 1854:
case 4060:
case 3074:
case 2860:
case 3455:
case 745:
case 4061:
case 3085:
case 862:
case 2240:
case 33:
case 1922:
case 893:
case 1465:
case 1959:
case 3640:
case 308:
case 450:
case 3952:
case 2163:
case 1223:
case 2918:
case 1277:
case 2888:
case 1872:
case 3297:
case 3855:
case 1038:
case 3139:
case 3522:
case 3592:
case 1305:
case 1061:
case 1773:
case 3898:
case 1374:
case 3014:
case 2129:
case 3598:
case 451:
case 1838:
case 2032:
case 454:
case 2801:
case 401:
case 3647:
case 2980:
case 1700:
case 2161:
case 3307:
case 2659:
case 2059:
case 3485:
case 3168:
case 3205:
case 3143:
case 2696:
case 2100:
case 2597:
case 4039:
case 3750:
case 294:
case 3902:
case 1037:
case 309:
case 2027:
case 604:
case 1643:
case 3927:
case 1740:
case 2106:
case 3760:
case 1668:
case 2413:
case 904:
case 3207:
case 705:
case 2464:
case 1602:
case 3664:
case 2544:
case 2706:
case 352:
case 562:
case 2002:
case 498:
case 2171:
case 1572:
case 2654:
case 2585:
case 1921:
case 1772:
case 3571:
case 3033:
case 3011:
case 3029:
case 1335:
case 102:
case 3715:
case 1635:
case 1873:
case 2216:
case 252:
case 1470:
case 1907:
case 407:
case 1941:
case 1898:
case 3852:
case 1416:
case 993:
case 3368:
case 2101:
case 2556:
case 2524:
case 186:
case 300:
case 520:
case 3435:
case 1296:
case 1771:
case 3287:
case 3384:
case 1215:
case 3646:
case 251:
case 2537:
case 1073:
case 3628:
case 2564:
case 2924:
case 3111:
case 2742:
case 2799:
case 72:
case 1910:
case 837:
case 1850:
case 2309:
case 681:
case 281:
case 2107:
case 3132:
case 3941:
case 829:
case 3747:
case 918:
case 2443:
case 2803:
case 3076:
case 696:
case 2235:
case 2864:
case 3480:
case 2049:
case 1278:
case 3711:
case 1749:
case 1567:
case 988:
case 3064:
case 177:
case 1935:
case 3982:
case 2543:
case 3083:
case 2258:
case 2822:
case 2104:
case 3899:
case 64:
case 4011:
case 3696:
case 2823:
case 2170:
case 2894:
case 3445:
case 3694:
case 2559:
case 3472:
case 3548:
case 1674:
case 279:
case 85:
case 1034:
case 3733:
case 3406:
case 1578:
case 1435:
case 3957:
case 3519:
case 2508:
case 1083:
case 782:
case 3870:
case 3837:
case 1636:
case 2631:
case 1528:
case 1779:
case 1318:
case 987:
case 2883:
case 1304:
case 834:
case 609:
case 132:
case 2701:
case 582:
case 2999:
case 3151:
case 3546:
case 3481:
case 2781:
case 3068:
case 3959:
case 1244:
case 1526:
case 1631:
case 1039:
case 728:
case 301:
case 2445:
case 2829:
case 1348:
case 1311:
case 2416:
case 1962:
case 161:
case 755:
case 3753:
case 4036:
case 2167:
case 41:
case 118:
case 3909:
case 1601:
case 290:
case 3278:
case 2365:
case 706:
case 585:
case 2243:
case 2905:
case 3618:
case 3352:
case 2748:
case 2371:
case 828:
case 499:
case 1662:
case 493:
case 626:
case 1672:
case 573:
case 439:
case 3251:
case 4043:
case 1063:
case 521:
case 2099:
case 2743:
case 415:
case 1029:
case 1337:
case 1874:
case 1307:
case 3239:
case 3540:
case 1683:
case 734:
case 1065:
case 928:
case 3411:
case 3673:
case 603:
case 3447:
case 3878:
case 1618:
case 1494:
case 2517:
case 2851:
case 888:
case 144:
case 3433:
case 635:
case 3109:
case 2930:
case 426:
case 3973:
case 1993:
case 3254:
case 467:
case 2017:
case 2367:
case 1376:
case 990:
case 3031:
case 356:
case 2977:
case 434:
case 3828:
case 435:
case 2278:
case 2719:
case 921:
case 2396:
case 566:
case 2990:
case 3489:
case 1414:
case 780:
case 268:
case 2242:
case 2785:
case 1456:
case 1474:
case 2876:
case 2387:
case 1592:
case 2200:
case 1203:
case 1565:
case 608:
case 53:
case 1484:
case 1734:
case 561:
case 2116:
case 3912:
case 970:
case 933:
case 463:
case 1812:
case 2377:
case 1885:
case 233:
case 15:
case 3191:
case 1791:
case 237:
case 1067:
case 1183:
case 1571:
case 167:
case 3101:
case 246:
case 3969:
case 664:
case 4044:
case 959:
case 1671:
case 1842:
case 4001:
case 1094:
case 362:
case 854:
case 3720:
case 1763:
case 1847:
case 2488:
case 670:
case 2096:
case 3338:
case 3361:
case 461:
case 1762:
case 843:
case 1375:
case 3616:
case 2523:
case 3293:
case 2440:
case 1386:
case 322:
case 9:
case 2498:
case 802:
case 2874:
case 730:
case 815:
case 3835:
case 476:
case 1975:
case 183:
case 442:
case 3583:
case 504:
case 3523:
case 2169:
case 2919:
case 3271:
case 2373:
case 1077:
case 416:
case 3745:
case 75:
case 3788:
case 2985:
case 2858:
case 2739:
case 4020:
case 3376:
case 136:
case 1598:
case 1826:
case 1956:
case 2363:
case 2214:
case 2653:
case 2633:
case 3820:
case 721:
case 3065:
case 2582:
case 175:
case 81:
case 212:
case 1829:
case 3492:
case 1064:
case 2704:
case 1217:
case 1163:
case 484:
case 794:
case 39:
case 701:
case 3576:
case 3980:
case 2050:
case 120:
case 3997:
case 109:
case 2952:
case 216:
case 622:
case 119:
case 2788:
case 1520:
case 2707:
case 2773:
case 3991:
case 396:
case 2602:
case 1241:
case 2154:
case 3047:
case 367:
case 1328:
case 1637:
case 1664:
case 3542:
case 1315:
case 22:
case 3145:
case 3822:
case 1713:
case 3162:
case 1650:
case 861:
case 1965:
case 3624:
case 3127:
case 605:
case 2306:
case 116:
case 1915:
case 494:
case 4094:
case 1372:
case 2998:
case 3557:
case 3266:
case 3125:
case 593:
case 3931:
case 1408:
case 1753:
case 2945:
case 303:
case 3135:
case 1531:
case 865:
case 460:
case 2623:
case 1580:
case 2847:
case 495:
case 3956:
case 291:
case 1401:
case 552:
case 754:
case 556:
case 1028:
case 3006:
case 792:
case 3387:
case 2132:
case 1646:
case 1478:
case 2356:
case 3180:
case 3420:
case 1711:
case 3693:
case 2572:
case 644:
case 697:
case 2553:
case 410:
case 1852:
case 1134:
case 3292:
case 2983:
case 3340:
case 1793:
case 2691:
case 3847:
case 1848:
case 133:
case 3831:
case 3512:
case 3334:
case 3146:
case 2816:
case 1313:
case 1916:
case 3937:
case 1259:
case 3215:
case 994:
case 263:
case 3906:
case 3019:
case 1537:
case 3625:
case 2652:
case 1566:
case 2800:
case 1101:
case 1265:
case 2728:
case 931:
case 1276:
case 3596:
case 1199:
case 3987:
case 1673:
case 4082:
case 188:
case 1987:
case 2804:
case 2991:
case 887:
case 311:
case 3681:
case 1098:
case 108:
case 2415:
case 2468:
case 3243:
case 1295:
case 3016:
case 915:
case 1153:
case 3159:
case 3591:
case 2009:
case 382:
case 1250:
case 3238:
case 4009:
case 2944:
case 3195:
case 1797:
case 2566:
case 2191:
case 2770:
case 86:
case 3477:
case 2271:
case 1951:
case 3659:
case 1048:
case 1140:
case 4065:
case 2456:
case 78:
case 2074:
case 1509:
case 3868:
case 3774:
case 3084:
case 3805:
case 1845:
case 4068:
case 1655:
case 2671:
case 2187:
case 1185:
case 611:
case 3269:
case 3082:
case 155:
case 1752:
case 852:
case 180:
case 2774:
case 3717:
case 800:
case 1540:
case 1950:
case 1840:
case 1615:
case 3055:
case 595:
case 3943:
case 505:
case 1927:
case 1576:
case 955:
case 3976:
case 1998:
case 105:
case 1341:
case 2513:
case 3002:
case 1209:
case 2763:
case 3607:
case 32:
case 870:
case 555:
case 2571:
case 254:
case 3974:
case 52:
case 2386:
case 2539:
case 488:
case 2102:
case 819:
case 3690:
case 1507:
case 510:
case 3327:
case 2410:
case 1861:
case 1897:
case 3261:
case 189:
case 3821:
case 475:
case 1271:
case 3280:
case 682:
case 3308:
case 3922:
case 1978:
case 3375:
case 2418:
case 474:
case 1964:
case 648:
case 1025:
case 166:
case 217:
case 171:
case 2855:
case 2109:
case 314:
case 211:
case 3259:
case 3758:
case 3007:
case 2729:
case 3736:
case 2522:
case 3600:
case 957:
case 920:
case 2227:
case 3267:
case 3826:
case 3613:
case 1415:
case 2333:
case 2982:
case 50:
case 3508:
case 2126:
case 2472:
case 2786:
case 3283:
case 1588:
case 2964:
case 1105:
case 3131:
case 3270:
case 1932:
case 632:
case 919:
case 980:
case 1480:
case 1268:
case 255:
case 3315:
case 2826:
case 2149:
case 1808:
case 2181:
case 785:
case 3779:
case 3182:
case 3910:
case 2813:
case 365:
case 2673:
case 1351:
case 1010:
case 3577:
case 2975:
case 3535:
case 2806:
case 2130:
case 2213:
case 1157:
case 833:
case 2040:
case 1859:
case 3169:
case 3645:
case 2722:
case 330:
case 1202:
case 197:
case 3536:
case 3138:
case 3346:
case 406:
case 360:
case 1055:
case 226:
case 2357:
case 1141:
case 1728:
case 2234:
case 3156:
case 1191:
case 2337:
case 3916:
case 3506:
case 1072:
case 3648:
case 87:
case 1476:
case 1133:
case 1984:
case 1856:
case 574:
case 727:
case 1167:
case 3290:
case 3549:
case 2121:
case 1459:
case 209:
case 2981:
case 944:
case 2579:
case 658:
case 4015:
case 3770:
case 3652:
case 2614:
case 143:
case 910:
case 3834:
case 3356:
case 1406:
case 1079:
case 1568:
case 809:
case 4034:
case 193:
case 3377:
case 3797:
case 1274:
case 857:
case 1751:
case 3372:
case 736:
case 2105:
case 2600:
case 2732:
case 1680:
case 2038:
case 768:
case 80:
case 1473:
case 1563:
case 3680:
case 221:
case 3237:
case 2805:
case 2724:
case 1026:
case 3367:
case 895:
case 1906:
case 2035:
case 21:
case 2419:
case 3791:
case 429:
case 511:
case 2133:
case 2897:
case 3807:
case 4019:
case 3509:
case 2297:
case 716:
case 3147:
case 3409:
case 3115:
case 228:
case 797:
case 103:
case 1144:
case 3566:
case 3309:
case 2954:
case 1638:
case 3176:
case 3079:
case 3424:
case 20:
case 1739:
case 1258:
case 2461:
case 2987:
case 3590:
case 480:
case 2350:
case 3380:
case 477:
case 2640:
case 2470:
case 2550:
case 2201:
case 1974:
case 2394:
case 3190:
case 747:
case 732:
case 1502:
case 2174:
case 387:
case 1060:
case 327:
case 3979:
case 2573:
case 3504:
case 1421:
case 3311:
case 2001:
case 3966:
case 1033:
case 449:
case 3105:
case 4054:
case 621:
case 3463:
case 3371:
case 3088:
case 3236:
case 3926:
case 2265:
case 543:
case 1963:
case 1050:
case 1491:
case 3970:
case 59:
case 1508:
case 939:
case 3009:
case 2758:
case 3134:
case 1698:
case 3210:
case 618:
case 3676:
case 1903:
case 3183:
case 3900:
case 1831:
case 2762:
case 3032:
case 1288:
case 2846:
case 2768:
case 1836:
case 3496:
case 2198:
case 578:
case 3986:
case 3498:
case 4046:
case 1570:
case 1755:
case 3373:
case 2305:
case 215:
case 1504:
case 1893:
case 3413:
case 2547:
case 679:
case 483:
case 3597:
case 2951:
case 1236:
case 502:
case 156:
case 766:
case 1824:
case 4078:
case 2482:
case 3322:
case 2995:
case 2048:
case 1999:
case 3530:
case 1447:
case 3556:
case 2193:
case 3823:
case 2608:
case 23:
case 3850:
case 508:
case 1894:
case 1741:
case 117:
case 1513:
case 1918:
case 402:
case 2727:
case 1794:
case 3904:
case 2281:
case 3913:
case 3383:
case 1846:
case 164:
case 1970:
case 3490:
case 378:
case 1361:
case 1510:
case 3595:
case 3087:
case 2021:
case 2139:
case 4088:
case 2563:
case 2644:
case 841:
case 3049:
case 3268:
case 613:
case 558:
case 1666:
case 3761:
case 1049:
case 2339:
case 3296:
case 3264:
case 2052:
case 2938:
case 491:
case 1172:
case 2505:
case 3349:
case 1317:
case 1554:
case 2784:
case 2795:
case 381:
case 2755:
case 151:
case 1042:
case 1658:
case 2884:
case 2307:
case 3915:
case 430:
case 2311:
case 2976:
case 2072:
case 3279:
case 3385:
case 1714:
case 3738:
case 468:
case 935:
case 2693:
case 210:
case 1214:
case 3582:
case 1186:
case 1940:
case 2853:
case 1985:
case 788:
case 3787:
case 3553:
case 270:
case 3614:
case 849:
case 154:
case 3989:
case 1744:
case 765:
case 1723:
case 549:
case 739:
case 3363:
case 1624:
case 1738:
case 440:
case 4089:
case 2574:
case 3581:
case 2134:
case 3310:
case 3041:
case 4052:
case 859:
case 3670:
case 3438:
case 2290:
case 3015:
case 1041:
case 2617:
case 759:
case 1887:
case 1545:
case 628:
case 3078:
case 3996:
case 2862:
case 286:
case 1913:
case 1102:
case 3564:
case 3627:
case 234:
case 896:
case 3314:
case 2514:
case 1490:
case 3938:
case 3058:
case 3783:
case 203:
case 2650:
case 4087:
case 1019:
case 3003:
case 3593:
case 1405:
case 634:
case 2389:
case 1604:
case 3114:
case 3060:
case 2202:
case 3231:
case 1396:
case 1450:
case 912:
case 3657:
case 1774:
case 2185:
case 3998:
case 699:
case 1914:
case 3799:
case 1468:
case 1830:
case 1326:
case 1263:
case 1501:
case 178:
case 3688:
case 1697:
case 3888:
case 2972:
case 1301:
case 816:
case 2831:
case 2796:
case 753:
case 264:
case 2135:
case 2992:
case 871:
case 469:
case 718:
case 1087:
case 346:
case 1608:
case 2674:
case 2366:
case 639:
case 3742:
case 150:
case 778:
case 172:
case 3475:
case 1462:
case 2398:
case 3218:
case 74:
case 1880:
case 3486:
case 1899:
case 4085:
case 818:
case 3362:
case 490:
case 3580:
case 36:
case 3450:
case 3532:
case 1086:
case 2496:
case 3780:
case 848:
case 1279:
case 2069:
case 2272:
case 684:
case 3092:
case 3521:
case 2931:
case 1377:
case 3071:
case 3096:
case 24:
case 140:
case 2567:
case 3907:
case 1821:
case 960:
case 1441:
case 1108:
case 1750:
case 2379:
case 2122:
case 1266:
case 1971:
case 940:
case 3729:
case 3746:
case 38:
case 2246:
case 1795:
case 927:
case 1703:
case 3331:
case 643:
case 3366:
case 2798:
case 184:
case 3651:
case 842:
case 1074:
case 2045:
case 339:
case 444:
case 190:
case 2454:
case 2734:
case 4004:
case 2548:
case 1828:
case 3466:
case 2530:
case 3637:
case 2844:
case 1591:
case 1176:
case 2442:
case 1654:
case 2557:
case 1678:
case 2580:
case 903:
case 625:
case 570:
case 567:
case 3493:
case 948:
case 2261:
case 2441:
case 3077:
case 2890:
case 146:
case 934:
case 2284:
case 1967:
case 285:
case 462:
case 872:
case 2484:
case 3051:
case 2565:
case 3163:
case 3608:
case 1865:
case 3284:
case 3809:
case 2285:
case 839:
case 27:
case 2210:
case 2287:
case 4000:
case 3691:
case 3214:
case 1619:
case 182:
case 261:
case 364:
case 3000:
case 1245:
case 431:
case 479:
case 2506:
case 2448:
case 3533:
case 2259:
case 2375:
case 2927:
case 1851:
case 1871:
case 1316:
case 1431:
case 1667:
case 633:
case 3365:
case 2393:
case 1346:
case 3448:
case 2153:
case 1800:
case 1769:
case 3154:
case 2692:
case 781:
case 315:
case 551:
case 1122:
case 844:
case 1733:
case 1151:
case 2175:
case 2940:
case 2404:
case 2199:
case 1228:
case 620:
case 3075:
case 600:
case 3056:
case 272:
case 1208:
case 1444:
case 3885:
case 3057:
case 3235:
case 376:
case 2228:
case 1745:
case 2771:
case 1043:
case 2720:
case 515:
case 1934:
case 355:
case 2620:
case 436:
case 1032:
case 1912:
case 2738:
case 1727:
case 95:
case 2016:
case 2887:
case 950:
case 1552:
case 1143:
case 399:
case 377:
case 2717:
case 2267:
case 1515:
case 1522:
case 1547:
case 1213:
case 2830:
case 740:
case 2380:
case 62:
case 2586:
case 1701:
case 12:
case 3994:
case 3882:
case 1340:
case 3313:
case 1518:
case 1142:
case 1329:
case 3470:
case 2495:
case 2341:
case 2941:
case 2730:
case 123:
case 26:
case 1648:
case 945:
case 589:
case 2006:
case 1560:
case 70:
case 662:
case 601:
case 2429:
case 3336:
case 2825:
case 1300:
case 3752:
case 2055:
case 3563:
case 2996:
case 974:
case 3678:
case 2112:
case 349:
case 2867:
case 1721:
case 2075:
case 3840:
case 3718:
case 677:
case 2904:
case 3381:
case 1275:
case 3570:
case 55:
case 2578:
case 1383:
case 92:
case 2239:
case 2555:
case 88:
case 3853:
case 1612:
case 2111:
case 2713:
case 2757:
case 616:
case 1994:
case 938:
case 1294:
case 720:
case 333:
case 3559:
case 2450:
case 3312:
case 863:
case 328:
case 3245:
case 3099:
case 930:
case 3408:
case 3671:
case 3844:
case 319:
case 47:
case 3896:
case 11:
case 1123:
case 485:
case 3924:
case 2384:
case 1938:
case 3656:
case 3347:
case 4025:
case 1059:
case 526:
case 337:
case 656:
case 2197:
case 17:
case 2501:
case 892:
case 497:
case 3066:
case 3727:
case 1044:
case 3735:
case 3465:
case 332:
case 1012:
case 2898:
case 4035:
case 3734:
case 1775:
case 2286:
case 823:
case 3782:
case 1837:
case 4010:
case 1783:
case 3895:
case 2275:
case 2276:
case 213:
case 373:
case 3209:
case 514:
case 3880:
case 925:
case 624:
case 3964:
case 2700:
case 1344:
case 3391:
case 2151:
case 2900:
case 2252:
case 1677:
case 368:
case 1148:
case 2043:
case 1688:
case 975:
case 3244:
case 1982:
case 3172:
case 3219:
case 3248:
case 4093:
case 2885:
case 2672:
case 1255:
case 2863:
case 1485:
case 2346:
case 2769:
case 3568:
case 2903:
case 3344:
case 83:
case 3028:
case 836:
case 1347:
case 3187:
case 3067:
case 2852:
case 3230:
case 2327:
case 4037:
case 3473:
case 2627:
case 796:
case 2212:
case 3081:
case 1823:
case 393:
case 56:
case 1557:
case 2814:
case 2168:
case 3295:
case 599:
case 2326:
case 2636:
case 2669:
case 3679:
case 3775:
case 926:
case 3798:
case 2291:
case 320:
case 1817:
case 1977:
case 2655:
case 1075:
case 1676:
case 3701:
case 3141:
case 2615:
case 743:
case 2221:
case 1089:
case 3148:
case 3086:
case 2656:
case 1229:
case 5:
case 1180:
case 3605:
case 4075:
case 3158:
case 2143:
case 2125:
case 971:
case 3921:
case 3602:
case 1944:
case 3876:
case 2540:
case 953:
case 1367:
case 2459:
case 877:
case 963:
case 807:
case 168:
case 4042:
case 588:
case 3478:
case 2186:
case 3626:
case 2414:
case 195:
case 3436:
case 2834:
case 2668:
case 2667:
case 858:
case 1730:
case 1007:
case 1216:
case 3749:
case 174:
case 2679:
case 726:
case 733:
case 2710:
case 2502:
case 2012:
case 1106:
case 2577:
case 229:
case 2843:
case 1853:
case 776:
case 1696:
case 54:
case 1280:
case 2775:
case 145:
case 2203:
case 2916:
case 2077:
case 124:
case 2303:
case 51:
case 1597:
case 3202:
case 3975:
case 2148:
case 1641:
case 1198:
case 125:
case 2089:
case 1200:
case 3584:
case 1781:
case 1104:
case 761:
case 3227:
case 3359:
case 1338:
case 403:
case 3630:
case 2612:
case 1399:
case 1076:
case 4051:
case 2511:
case 4070:
case 265:
case 342:
case 471:
case 472:
case 277:
case 2589:
case 3995:
case 2452:
case 1589:
case 3440:
case 1417:
case 1647:
case 3949:
case 1380:
case 688:
case 3785:
case 3198:
case 4033:
case 3001:
case 1407:
case 2827:
case 3513:
case 2533:
case 1022:
case 1976:
case 1027:
case 1021:
case 3108:
case 2451:
case 2764:
case 90:
case 712:
case 1006:
case 1687:
case 3990:
case 4072:
case 2971:
case 3140:
case 128:
case 2854:
case 345:
case 3854:
case 114:
case 4057:
case 3129:
case 3874:
case 2576:
case 1080:
case 1158:
case 1787:
case 1166:
case 661:
case 2535:
case 2128:
case 2520:
case 3200:
case 3353:
case 894:
case 2611:
case 3725:
case 3042:
case 1644:
case 704:
case 2136:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1705075202/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,];
var gg_b = "1705075202/";

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
