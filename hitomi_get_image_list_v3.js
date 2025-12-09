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
case 1817:
case 1559:
case 1676:
case 3623:
case 3020:
case 4082:
case 1442:
case 426:
case 219:
case 2887:
case 3264:
case 3689:
case 1216:
case 3312:
case 3815:
case 2881:
case 3171:
case 3539:
case 3468:
case 2286:
case 503:
case 3880:
case 1811:
case 3567:
case 3399:
case 1805:
case 285:
case 1302:
case 3206:
case 2072:
case 3801:
case 1752:
case 2894:
case 2039:
case 2067:
case 49:
case 2476:
case 2609:
case 1525:
case 2061:
case 3932:
case 3419:
case 2716:
case 2916:
case 1786:
case 1019:
case 2023:
case 1249:
case 2818:
case 868:
case 60:
case 3140:
case 3956:
case 2459:
case 2089:
case 156:
case 3306:
case 3563:
case 710:
case 1813:
case 1028:
case 3982:
case 2147:
case 90:
case 3627:
case 853:
case 432:
case 2696:
case 1736:
case 1936:
case 787:
case 180:
case 2949:
case 1850:
case 3446:
case 2749:
case 582:
case 3803:
case 2837:
case 3667:
case 2869:
case 1068:
case 839:
case 3672:
case 1092:
case 3523:
case 3661:
case 1659:
case 2425:
case 1576:
case 981:
case 841:
case 3830:
case 1316:
case 897:
case 2056:
case 1976:
case 689:
case 192:
case 1776:
case 4027:
case 2158:
case 714:
case 590:
case 3723:
case 1320:
case 3989:
case 3789:
case 2486:
case 2822:
case 113:
case 2549:
case 3100:
case 816:
case 2082:
case 1209:
case 1144:
case 12:
case 419:
case 2502:
case 3464:
case 446:
case 1242:
case 3346:
case 3870:
case 3424:
case 4061:
case 873:
case 1110:
case 222:
case 554:
case 3582:
case 1185:
case 2871:
case 1536:
case 615:
case 2909:
case 3228:
case 2862:
case 3843:
case 3556:
case 1360:
case 184:
case 3963:
case 4072:
case 915:
case 389:
case 3187:
case 3763:
case 783:
case 2359:
case 1893:
case 4067:
case 2720:
case 2516:
case 507:
case 2920:
case 898:
case 878:
case 2814:
case 3579:
case 1725:
case 1108:
case 1135:
case 232:
case 2130:
case 1884:
case 3155:
case 2259:
case 564:
case 4023:
case 2103:
case 1449:
case 3727:
case 1260:
case 4089:
case 3499:
case 2796:
case 788:
case 3169:
case 2265:
case 1552:
case 3328:
case 2225:
case 2649:
case 525:
case 1064:
case 3412:
case 804:
case 821:
case 3772:
case 118:
case 1897:
case 2602:
case 4063:
case 1759:
case 2032:
case 13:
case 1878:
case 1309:
case 706:
case 3895:
case 2960:
case 3315:
case 1167:
case 59:
case 3230:
case 57:
case 378:
case 1172:
case 3666:
case 2836:
case 1497:
case 2381:
case 1139:
case 1729:
case 2231:
case 3548:
case 2473:
case 2788:
case 604:
case 2269:
case 621:
case 3165:
case 3441:
case 2237:
case 2387:
case 1445:
case 254:
case 4010:
case 522:
case 1718:
case 1250:
case 1918:
case 2440:
case 120:
case 1562:
case 2255:
case 3358:
case 1522:
case 3093:
case 3735:
case 526:
case 1484:
case 2333:
case 998:
case 4044:
case 2974:
case 3604:
case 3957:
case 2645:
case 2691:
case 304:
case 3908:
case 1043:
case 1731:
case 1640:
case 2229:
case 3125:
case 1213:
case 403:
case 1937:
case 3899:
case 2300:
case 1288:
case 748:
case 1802:
case 1305:
case 367:
case 3626:
case 1338:
case 2075:
case 705:
case 1955:
case 3301:
case 1070:
case 678:
case 2218:
case 2750:
case 2168:
case 2471:
case 1313:
case 2066:
case 3785:
case 912:
case 2711:
case 1434:
case 3207:
case 3824:
case 536:
case 482:
case 3258:
case 1981:
case 408:
case 1987:
case 1787:
case 612:
case 349:
case 1238:
case 3201:
case 1493:
case 3806:
case 1388:
case 225:
case 2462:
case 2917:
case 1540:
case 511:
case 693:
case 2192:
case 2477:
case 3454:
case 957:
case 2584:
case 1374:
case 779:
case 2886:
case 393:
case 1662:
case 312:
case 931:
case 649:
case 1514:
case 3215:
case 2119:
case 3330:
case 1816:
case 2004:
case 1994:
case 3566:
case 130:
case 1794:
case 3097:
case 737:
case 2355:
case 2634:
case 3303:
case 2287:
case 1350:
case 751:
case 916:
case 3648:
case 3953:
case 1900:
case 2128:
case 195:
case 3744:
case 2705:
case 2369:
case 631:
case 207:
case 494:
case 474:
case 1217:
case 3675:
case 1683:
case 677:
case 3241:
case 2085:
case 1594:
case 3966:
case 368:
case 747:
case 3544:
case 2613:
case 1629:
case 2240:
case 140:
case 2010:
case 454:
case 791:
case 3553:
case 1450:
case 1500:
case 1291:
case 941:
case 2688:
case 2984:
case 759:
case 2273:
case 1618:
case 1474:
case 2431:
case 3247:
case 2825:
case 1714:
case 3343:
case 2865:
case 3990:
case 728:
case 1488:
case 203:
case 134:
case 3354:
case 435:
case 968:
case 3704:
case 2418:
case 3657:
case 339:
case 2991:
case 4075:
case 2945:
case 1007:
case 2745:
case 1393:
case 4048:
case 1156:
case 2778:
case 1740:
case 1631:
case 1058:
case 2517:
case 2859:
case 1637:
case 1284:
case 2483:
case 546:
case 2112:
case 1001:
case 1669:
case 1413:
case 3510:
case 1182:
case 1581:
case 2214:
case 2371:
case 1773:
case 80:
case 2650:
case 3152:
case 1293:
case 1569:
case 1438:
case 1537:
case 600:
case 3254:
case 124:
case 425:
case 2550:
case 250:
case 3243:
case 2262:
case 1681:
case 4066:
case 2298:
case 2433:
case 1922:
case 3186:
case 1722:
case 2314:
case 3088:
case 2876:
case 1132:
case 2617:
case 3458:
case 1531:
case 663:
case 2574:
case 958:
case 1030:
case 1345:
case 1391:
case 769:
case 2035:
case 2993:
case 363:
case 286:
case 1417:
case 1962:
case 1762:
case 2008:
case 1809:
case 1777:
case 294:
case 1694:
case 3868:
case 2638:
case 2051:
case 1771:
case 1798:
case 2934:
case 2734:
case 1583:
case 3480:
case 1998:
case 4090:
case 1411:
case 3050:
case 3748:
case 3653:
case 3948:
case 2481:
case 165:
case 4004:
case 629:
case 464:
case 3775:
case 2605:
case 3987:
case 995:
case 3787:
case 3163:
case 1084:
case 3622:
case 4083:
case 1201:
case 3493:
case 3388:
case 1443:
case 4029:
case 344:
case 223:
case 3313:
case 1985:
case 1785:
case 443:
case 695:
case 3434:
case 131:
case 2715:
case 1710:
case 1526:
case 2475:
case 745:
case 238:
case 2547:
case 1910:
case 157:
case 3981:
case 4018:
case 3781:
case 1566:
case 3994:
case 5:
case 2701:
case 944:
case 1097:
case 479:
case 3698:
case 896:
case 1648:
case 2670:
case 4031:
case 1744:
case 2351:
case 3095:
case 3041:
case 3733:
case 3374:
case 2357:
case 1280:
case 437:
case 2308:
case 193:
case 786:
case 112:
case 2643:
case 2040:
case 451:
case 1078:
case 2879:
case 3514:
case 510:
case 1091:
case 1045:
case 3123:
case 1215:
case 794:
case 774:
case 3816:
case 2022:
case 2251:
case 259:
case 1441:
case 2160:
case 3577:
case 3445:
case 2554:
case 3718:
case 4081:
case 461:
case 2856:
case 609:
case 3983:
case 1315:
case 1230:
case 1812:
case 3172:
case 178:
case 4087:
case 198:
case 3571:
case 2882:
case 2385:
case 247:
case 3929:
case 1380:
case 2570:
case 920:
case 3737:
case 83:
case 1034:
case 2098:
case 3802:
case 3305:
case 3769:
case 3338:
case 1626:
case 760:
case 2703:
case 2903:
case 3673:
case 3849:
case 228:
case 1358:
case 703:
case 3522:
case 1935:
case 1690:
case 3121:
case 448:
case 2695:
case 309:
case 2930:
case 1604:
case 2120:
case 3054:
case 1908:
case 233:
case 2062:
case 3043:
case 3213:
case 3640:
case 3922:
case 243:
case 3179:
case 725:
case 1458:
case 3531:
case 3384:
case 1557:
case 2823:
case 68:
case 438:
case 1270:
case 1407:
case 3293:
case 1401:
case 1551:
case 3569:
case 862:
case 129:
case 41:
case 3537:
case 2083:
case 2503:
case 2615:
case 1254:
case 301:
case 2029:
case 3405:
case 1610:
case 2366:
case 3555:
case 158:
case 624:
case 1868:
case 469:
case 3971:
case 3798:
case 1480:
case 2037:
case 1748:
case 866:
case 1653:
case 1948:
case 3600:
case 1415:
case 365:
case 3397:
case 707:
case 3633:
case 279:
case 3842:
case 2863:
case 3030:
case 3391:
case 163:
case 924:
case 38:
case 3962:
case 2943:
case 4073:
case 2743:
case 3762:
case 2390:
case 2754:
case 3977:
case 2607:
case 2954:
case 3518:
case 1074:
case 153:
case 3533:
case 447:
case 3474:
case 3618:
case 1017:
case 634:
case 491:
case 2558:
case 227:
case 3914:
case 3714:
case 1011:
case 1295:
case 168:
case 2451:
case 1966:
case 3594:
case 2501:
case 2290:
case 459:
case 3629:
case 1846:
case 3015:
case 3245:
case 261:
case 3291:
case 3500:
case 3637:
case 2867:
case 2348:
case 852:
case 3284:
case 2580:
case 428:
case 2872:
case 3669:
case 2094:
case 1651:
case 248:
case 735:
case 1038:
case 4077:
case 2747:
case 1005:
case 177:
case 3182:
case 1926:
case 770:
case 205:
case 2000:
case 3334:
case 2515:
case 433:
case 2266:
case 1635:
case 1990:
case 3488:
case 955:
case 3587:
case 1354:
case 4071:
case 2941:
case 1704:
case 139:
case 1904:
case 1608:
case 3740:
case 3940:
case 3028:
case 1982:
case 181:
case 1173:
case 1627:
case 2646:
case 2467:
case 2712:
case 1324:
case 2439:
case 599:
case 2197:
case 3936:
case 579:
case 2191:
case 2076:
case 3625:
case 551:
case 2178:
case 1306:
case 1299:
case 840:
case 855:
case 537:
case 487:
case 656:
case 3874:
case 736:
case 1114:
case 3659:
case 2282:
case 1009:
case 3576:
case 3665:
case 1589:
case 1042:
case 1212:
case 3316:
case 917:
case 4052:
case 834:
case 2528:
case 2256:
case 2427:
case 3850:
case 1803:
case 956:
case 543:
case 2799:
case 1667:
case 1639:
case 3166:
case 1312:
case 3216:
case 2924:
case 1815:
case 3148:
case 2279:
case 3175:
case 2628:
case 2232:
case 1539:
case 1572:
case 2382:
case 1096:
case 1880:
case 2134:
case 2025:
case 3409:
case 362:
case 1162:
case 214:
case 1177:
case 2619:
case 3442:
case 548:
case 4036:
case 1264:
case 2193:
case 34:
case 561:
case 1979:
case 3525:
case 1858:
case 1932:
case 2423:
case 64:
case 1224:
case 662:
case 865:
case 1060:
case 79:
case 3786:
case 2065:
case 283:
case 366:
case 1122:
case 88:
case 527:
case 2546:
case 1527:
case 1428:
case 3752:
case 3952:
case 3838:
case 3349:
case 2964:
case 1682:
case 3024:
case 2150:
case 3449:
case 1927:
case 2746:
case 1727:
case 4076:
case 93:
case 2564:
case 1137:
case 1169:
case 3402:
case 1328:
case 2866:
case 3157:
case 2174:
case 918:
case 3006:
case 3925:
case 2389:
case 1131:
case 3725:
case 1656:
case 1532:
case 3135:
case 2239:
case 1721:
case 75:
case 63:
case 1319:
case 2:
case 2267:
case 1118:
case 3891:
case 1246:
case 2363:
case 1016:
case 2804:
case 2227:
case 1961:
case 2456:
case 1761:
case 33:
case 3878:
case 3309:
case 3765:
case 2890:
case 2188:
case 1841:
case 1895:
case 3296:
case 1392:
case 523:
case 2482:
case 1129:
case 287:
case 1368:
case 2826:
case 3220:
case 3064:
case 51:
case 406:
case 2221:
case 3897:
case 318:
case 1100:
case 4025:
case 3153:
case 2105:
case 414:
case 2728:
case 3144:
case 115:
case 844:
case 2036:
case 984:
case 2138:
case 2327:
case 1346:
case 2263:
case 3242:
case 2432:
case 2321:
case 372:
case 0:
case 1723:
case 2719:
case 676:
case 3320:
case 719:
case 1989:
case 1789:
case 313:
case 684:
case 746:
case 1679:
case 571:
case 1632:
case 1843:
case 742:
case 3360:
case 1854:
case 830:
case 1187:
case 672:
case 189:
case 76:
case 3686:
case 396:
case 4059:
case 1870:
case 1424:
case 1049:
case 2339:
case 785:
case 2289:
case 3652:
case 4065:
case 3834:
case 3099:
case 992:
case 2740:
case 4070:
case 2393:
case 1778:
case 1991:
case 1745:
case 2007:
case 721:
case 3941:
case 3630:
case 234:
case 1865:
case 103:
case 2488:
case 3266:
case 1650:
case 2773:
case 562:
case 3515:
case 1398:
case 3603:
case 2973:
case 1044:
case 305:
case 1214:
case 2581:
case 767:
case 2655:
case 2413:
case 160:
case 1429:
case 4054:
case 2182:
case 3839:
case 2669:
case 348:
case 1997:
case 409:
case 3872:
case 2001:
case 1112:
case 54:
case 927:
case 1511:
case 2284:
case 2015:
case 648:
case 2245:
case 361:
case 3827:
case 3204:
case 2629:
case 1010:
case 1455:
case 2278:
case 798:
case 3290:
case 778:
case 2594:
case 3451:
case 802:
case 2683:
case 3408:
case 2714:
case 1322:
case 327:
case 3558:
case 948:
case 3457:
case 2474:
case 2820:
case 3507:
case 1273:
case 3087:
case 1984:
case 1784:
case 1688:
case 475:
case 2518:
case 495:
case 2777:
case 174:
case 3954:
case 3607:
case 4047:
case 194:
case 712:
case 2417:
case 1106:
case 28:
case 2378:
case 1993:
case 1793:
case 186:
case 1487:
case 2391:
case 3863:
case 2633:
case 2529:
case 1605:
case 1513:
case 2397:
case 265:
case 1481:
case 2600:
case 3770:
case 1124:
case 2411:
case 2798:
case 1734:
case 556:
case 2771:
case 2971:
case 4095:
case 3601:
case 337:
case 2694:
case 1051:
case 145:
case 3029:
case 3366:
case 979:
case 150:
case 2405:
case 3453:
case 1400:
case 224:
case 1277:
case 3615:
case 201:
case 637:
case 3083:
case 3680:
case 731:
case 1611:
case 1494:
case 2438:
case 2293:
case 3823:
case 1574:
case 3248:
case 580:
case 2179:
case 1876:
case 2132:
case 182:
case 1314:
case 343:
case 2722:
case 1433:
case 2234:
case 1229:
case 2213:
case 1678:
case 1414:
case 1645:
case 739:
case 1691:
case 2054:
case 1333:
case 3641:
case 4001:
case 2484:
case 947:
case 209:
case 887:
case 971:
case 328:
case 1750:
case 1048:
case 3703:
case 2070:
case 4058:
case 3903:
case 797:
case 2338:
case 170:
case 2969:
case 2305:
case 671:
case 1697:
case 2288:
case 1300:
case 647:
case 2937:
case 3196:
case 513:
case 2274:
case 2311:
case 3257:
case 928:
case 1913:
case 3426:
case 2729:
case 8:
case 3882:
case 2139:
case 3235:
case 3310:
case 1836:
case 933:
case 2783:
case 576:
case 1255:
case 3543:
case 220:
case 2718:
case 2918:
case 1387:
case 3554:
case 2577:
case 154:
case 628:
case 440:
case 633:
case 1237:
case 2317:
case 4080:
case 3022:
case 753:
case 1788:
case 3490:
case 1988:
case 1593:
case 2816:
case 1004:
case 3707:
case 2677:
case 2123:
case 1119:
case 3335:
case 2514:
case 1281:
case 3832:
case 3210:
case 2662:
case 3958:
case 3758:
case 763:
case 1331:
case 3285:
case 3308:
case 1693:
case 1886:
case 1090:
case 2041:
case 2211:
case 3357:
case 2374:
case 107:
case 1369:
case 2047:
case 1905:
case 2217:
case 275:
case 1634:
case 638:
case 2698:
case 3901:
case 230:
case 1738:
case 1938:
case 1852:
case 338:
case 3448:
case 2573:
case 3715:
case 1498:
case 1711:
case 2313:
case 1329:
case 1168:
case 323:
case 1471:
case 1591:
case 2540:
case 1717:
case 669:
case 2388:
case 125:
case 1578:
case 3244:
case 3595:
case 2787:
case 3142:
case 518:
case 2099:
case 3664:
case 2834:
case 1180:
case 3512:
case 2536:
case 2652:
case 2185:
case 1871:
case 3289:
case 122:
case 1276:
case 3372:
case 3339:
case 3875:
case 2893:
case 296:
case 1359:
case 1862:
case 1365:
case 3117:
case 1909:
case 1822:
case 213:
case 1325:
case 3719:
case 2416:
case 2976:
case 4046:
case 3479:
case 2776:
case 3432:
case 1056:
case 2012:
case 3263:
case 44:
case 3599:
case 1101:
case 22:
case 1452:
case 3036:
case 3728:
case 3105:
case 3624:
case 2396:
case 1549:
case 218:
case 2897:
case 1602:
case 3052:
case 610:
case 833:
case 3524:
case 1873:
case 111:
case 2220:
case 387:
case 544:
case 1225:
case 3113:
case 2296:
case 4068:
case 910:
case 1960:
case 70:
case 2965:
case 3890:
case 2878:
case 1079:
case 136:
case 2759:
case 1032:
case 23:
case 1840:
case 3363:
case 3227:
case 2845:
case 480:
case 2884:
case 3323:
case 3267:
case 987:
case 2586:
case 1376:
case 3272:
case 132:
case 871:
case 2135:
case 2925:
case 4028:
case 2157:
case 1920:
case 2552:
case 2151:
case 2402:
case 1996:
case 2449:
case 3946:
case 2024:
case 3150:
case 310:
case 4019:
case 859:
case 2349:
case 496:
case 1067:
case 2752:
case 2838:
case 914:
case 2952:
case 3668:
case 3844:
case 2302:
case 484:
case 3853:
case 1800:
case 3489:
case 2986:
case 383:
case 614:
case 16:
case 851:
case 1642:
case 3692:
case 555:
case 837:
case 3423:
case 1061:
case 3059:
case 142:
case 1609:
case 2525:
case 3356:
case 3193:
case 4012:
case 1887:
case 42:
case 1560:
case 3463:
case 3619:
case 683:
case 3025:
case 2676:
case 2409:
case 2559:
case 3134:
case 413:
case 1286:
case 3382:
case 3810:
case 715:
case 2216:
case 492:
case 1027:
case 2046:
case 472:
case 1902:
case 1869:
case 2068:
case 1837:
case 902:
case 3799:
case 2850:
case 3427:
case 3528:
case 280:
case 1352:
case 3256:
case 1855:
case 3184:
case 602:
case 1660:
case 2316:
case 3332:
case 306:
case 3379:
case 501:
case 524:
case 2576:
case 2659:
case 3857:
case 2092:
case 2460:
case 1542:
case 1089:
case 1465:
case 256:
case 2888:
case 2190:
case 861:
case 2625:
case 1509:
case 302:
case 3592:
case 2019:
case 1023:
case 3191:
case 3145:
case 3568:
case 2736:
case 388:
case 3197:
case 2936:
case 1696:
case 58:
case 3646:
case 4006:
case 906:
case 2126:
case 217:
case 1147:
case 1829:
case 2813:
case 890:
case 3760:
case 3960:
case 531:
case 1506:
case 3079:
case 336:
case 557:
case 2246:
case 632:
case 2772:
case 2972:
case 3602:
case 2939:
case 1221:
case 3436:
case 2967:
case 2412:
case 40:
case 3873:
case 1524:
case 3649:
case 2847:
case 1826:
case 3225:
case 780:
case 2328:
case 1866:
case 854:
case 2169:
case 3796:
case 593:
case 573:
case 1746:
case 2727:
case 512:
case 2682:
case 110:
case 2155:
case 1261:
case 1:
case 1267:
case 911:
case 1239:
case 481:
case 2579:
case 3516:
case 3920:
case 37:
case 1361:
case 2963:
case 2187:
case 3742:
case 2763:
case 807:
case 3877:
case 2854:
case 926:
case 1792:
case 3616:
case 3862:
case 2556:
case 2406:
case 3709:
case 3365:
case 3898:
case 864:
case 1968:
case 4060:
case 3871:
case 1339:
case 1875:
case 2219:
case 3115:
case 2870:
case 1263:
case 2346:
case 2464:
case 326:
case 1036:
case 3452:
case 215:
case 504:
case 3082:
case 4020:
case 521:
case 1624:
case 2292:
case 99:
case 97:
case 3549:
case 2989:
case 922:
case 3107:
case 1919:
case 567:
case 69:
case 1606:
case 3158:
case 1479:
case 1432:
case 1321:
case 1184:
case 2042:
case 3063:
case 2830:
case 2212:
case 3236:
case 20:
case 1808:
case 3831:
case 2661:
case 65:
case 3702:
case 3902:
case 2672:
case 3869:
case 1851:
case 1799:
case 1427:
case 3949:
case 3749:
case 2446:
case 4016:
case 1439:
case 188:
case 563:
case 1467:
case 1712:
case 1646:
case 2982:
case 3147:
case 3542:
case 3195:
case 2306:
case 3089:
case 1178:
case 2756:
case 3509:
case 102:
case 1592:
case 1145:
case 3620:
case 183:
case 2122:
case 796:
case 36:
case 776:
case 3642:
case 2663:
case 2060:
case 2224:
case 2807:
case 1423:
case 3716:
case 784:
case 3916:
case 2732:
case 4049:
case 2979:
case 3609:
case 342:
case 1964:
case 553:
case 3067:
case 3039:
case 1668:
case 3072:
case 2801:
case 1844:
case 385:
case 2206:
case 2428:
case 1546:
case 886:
case 2399:
case 1134:
case 2567:
case 2880:
case 1382:
case 3286:
case 2468:
case 539:
case 1628:
case 1279:
case 3881:
case 1924:
case 1724:
case 3027:
case 3021:
case 713:
case 3887:
case 850:
case 319:
case 3560:
case 1463:
case 642:
case 2623:
case 577:
case 3154:
case 597:
case 2020:
case 66:
case 415:
case 541:
case 1706:
case 792:
case 2561:
case 772:
case 2775:
case 775:
case 3513:
case 4091:
case 3605:
case 608:
case 1970:
case 151:
case 1770:
case 2948:
case 1037:
case 645:
case 473:
case 982:
case 2480:
case 3373:
case 3734:
case 1601:
case 1485:
case 137:
case 258:
case 1326:
case 908:
case 2341:
case 2074:
case 374:
case 394:
case 1954:
case 3008:
case 1390:
case 1658:
case 1943:
case 3588:
case 263:
case 3487:
case 950:
case 1304:
case 457:
case 2557:
case 744:
case 1248:
case 1823:
case 1018:
case 2458:
case 3617:
case 2508:
case 3314:
case 431:
case 694:
case 674:
case 1530:
case 3298:
case 2610:
case 2243:
case 846:
case 3277:
case 1503:
case 3400:
case 2254:
case 986:
case 416:
case 1680:
case 50:
case 3611:
case 229:
case 3494:
case 2551:
case 449:
case 2152:
case 974:
case 3650:
case 3053:
case 3398:
case 1515:
case 105:
case 3371:
case 360:
case 297:
case 2726:
case 2510:
case 277:
case 2926:
case 1747:
case 1094:
case 1839:
case 2038:
case 2651:
case 1375:
case 2370:
case 1580:
case 3483:
case 1867:
case 1348:
case 4093:
case 3978:
case 3778:
case 3945:
case 3791:
case 3745:
case 3418:
case 1741:
case 2354:
case 3362:
case 1408:
case 3322:
case 1226:
case 3431:
case 2017:
case 1558:
case 2247:
case 603:
case 1087:
case 498:
case 478:
case 3984:
case 3784:
case 253:
case 1435:
case 3688:
case 2403:
case 85:
case 2553:
case 2846:
case 3613:
case 3455:
case 1290:
case 3085:
case 3469:
case 2766:
case 2966:
case 1451:
case 3437:
case 2011:
case 2241:
case 2295:
case 660:
case 3905:
case 2944:
case 4074:
case 1670:
case 2953:
case 2864:
case 925:
case 3287:
case 2097:
case 3738:
case 3004:
case 2330:
case 2091:
case 1707:
case 2045:
case 2215:
case 1335:
case 1879:
case 4050:
case 3281:
case 1958:
case 212:
case 1210:
case 2176:
case 1040:
case 3422:
case 1285:
case 78:
case 293:
case 3886:
case 3545:
case 2454:
case 4013:
case 3477:
case 3200:
case 3591:
case 1109:
case 3717:
case 3578:
case 325:
case 2201:
case 429:
case 216:
case 3294:
case 1541:
case 1595:
case 3318:
case 1475:
case 138:
case 2258:
case 701:
case 1448:
case 724:
case 2207:
case 2470:
case 3383:
case 1715:
case 231:
case 3711:
case 3329:
case 2985:
case 3066:
case 964:
case 123:
case 3471:
case 3950:
case 3048:
case 3146:
case 2301:
case 3394:
case 267:
case 2751:
case 335:
case 1344:
case 1071:
case 3300:
case 836:
case 1196:
case 1353:
case 1062:
case 441:
case 3229:
case 2708:
case 3691:
case 4005:
case 221:
case 3645:
case 515:
case 3333:
case 3774:
case 2757:
case 2957:
case 2604:
case 1695:
case 1641:
case 734:
case 1930:
case 2307:
case 2935:
case 2093:
case 811:
case 2690:
case 2735:
case 128:
case 654:
case 2159:
case 3255:
case 1856:
case 3440:
case 1404:
case 468:
case 1160:
case 970:
case 990:
case 1022:
case 1251:
case 2165:
case 3269:
case 3788:
case 3988:
case 3593:
case 171:
case 1570:
case 4017:
case 1257:
case 2548:
case 147:
case 1385:
case 2575:
case 3231:
case 1426:
case 1882:
case 740:
case 1208:
case 589:
case 1310:
case 2812:
case 2230:
case 2315:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1765278002/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,];
var gg_b = "1765278002/";

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
