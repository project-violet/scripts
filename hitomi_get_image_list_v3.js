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
case 2431:
case 2210:
case 3453:
case 3866:
case 121:
case 1689:
case 398:
case 2922:
case 2798:
case 4085:
case 1379:
case 159:
case 149:
case 1702:
case 1145:
case 2715:
case 1796:
case 2885:
case 3032:
case 2854:
case 4054:
case 2871:
case 4023:
case 3320:
case 364:
case 1157:
case 3017:
case 2173:
case 2528:
case 2394:
case 1426:
case 1526:
case 290:
case 2428:
case 1382:
case 728:
case 1199:
case 2247:
case 3828:
case 410:
case 1537:
case 2208:
case 1739:
case 2405:
case 2089:
case 3423:
case 336:
case 1863:
case 2174:
case 2558:
case 2393:
case 2750:
case 1877:
case 3009:
case 3585:
case 1556:
case 660:
case 2072:
case 2824:
case 276:
case 3040:
case 3793:
case 2466:
case 1127:
case 2566:
case 4053:
case 3204:
case 1760:
case 1161:
case 212:
case 3047:
case 2901:
case 1721:
case 3357:
case 3641:
case 1334:
case 2757:
case 407:
case 1919:
case 518:
case 1491:
case 1591:
case 1115:
case 2196:
case 527:
case 686:
case 3179:
case 2240:
case 1738:
case 700:
case 2736:
case 1530:
case 2946:
case 1907:
case 3010:
case 2727:
case 2761:
case 1774:
case 3692:
case 2935:
case 215:
case 1150:
case 3327:
case 2429:
case 1751:
case 3083:
case 3361:
case 357:
case 2497:
case 1542:
case 821:
case 2597:
case 1688:
case 859:
case 2799:
case 3859:
case 1378:
case 3665:
case 2376:
case 1003:
case 1597:
case 2688:
case 1232:
case 1686:
case 3655:
case 1497:
case 617:
case 3869:
case 51:
case 1376:
case 928:
case 1799:
case 3987:
case 470:
case 1727:
case 3351:
case 301:
case 1761:
case 628:
case 3830:
case 3374:
case 216:
case 3193:
case 3041:
case 3608:
case 777:
case 3733:
case 438:
case 917:
case 2774:
case 1529:
case 1102:
case 2591:
case 429:
case 685:
case 1736:
case 496:
case 2430:
case 2738:
case 2211:
case 2767:
case 3683:
case 1459:
case 2721:
case 2773:
case 3734:
case 939:
case 584:
case 2334:
case 4070:
case 187:
case 2569:
case 3194:
case 985:
case 2877:
case 1750:
case 39:
case 1151:
case 2556:
case 1458:
case 2456:
case 1393:
case 3617:
case 2918:
case 176:
case 1916:
case 1824:
case 3011:
case 335:
case 1853:
case 887:
case 2995:
case 3914:
case 1284:
case 1208:
case 3564:
case 2206:
case 1247:
case 1952:
case 2292:
case 2512:
case 1089:
case 1505:
case 2962:
case 853:
case 1871:
case 578:
case 332:
case 1854:
case 600:
case 1428:
case 1167:
case 2526:
case 2382:
case 1720:
case 272:
case 815:
case 1528:
case 900:
case 444:
case 1531:
case 3396:
case 3980:
case 454:
case 3913:
case 1590:
case 1885:
case 1922:
case 1798:
case 259:
case 2719:
case 851:
case 3668:
case 841:
case 1375:
case 896:
case 2967:
case 1685:
case 210:
case 2921:
case 2517:
case 2973:
case 829:
case 3934:
case 3028:
case 1100:
case 1701:
case 1671:
case 2343:
case 4072:
case 702:
case 3031:
case 318:
case 1654:
case 2872:
case 2938:
case 1623:
case 3090:
case 3637:
case 3809:
case 1381:
case 2122:
case 1063:
case 2951:
case 65:
case 1291:
case 2085:
case 2509:
case 1735:
case 2409:
case 3058:
case 1927:
case 1118:
case 1961:
case 3472:
case 547:
case 557:
case 223:
case 2540:
case 1195:
case 144:
case 1511:
case 838:
case 3817:
case 2259:
case 1064:
case 369:
case 2663:
case 3787:
case 490:
case 3589:
case 3005:
case 705:
case 1162:
case 867:
case 3832:
case 94:
case 3489:
case 2387:
case 1624:
case 2902:
case 415:
case 1256:
case 2258:
case 2380:
case 1998:
case 2670:
case 2266:
case 3588:
case 564:
case 303:
case 3181:
case 3780:
case 965:
case 3488:
case 2555:
case 167:
case 3979:
case 1237:
case 3349:
case 1406:
case 2584:
case 748:
case 2547:
case 2700:
case 2205:
case 3271:
case 854:
case 3982:
case 598:
case 3825:
case 844:
case 3223:
case 4003:
case 2314:
case 3630:
case 487:
case 2525:
case 731:
case 3403:
case 962:
case 3884:
case 906:
case 3362:
case 1752:
case 2228:
case 1441:
case 23:
case 453:
case 2960:
case 196:
case 3224:
case 1107:
case 443:
case 3669:
case 1886:
case 3253:
case 141:
case 4088:
case 2795:
case 1950:
case 2583:
case 2483:
case 662:
case 3029:
case 295:
case 2107:
case 1146:
case 2716:
case 296:
case 241:
case 1510:
case 3993:
case 1795:
case 2886:
case 2541:
case 2441:
case 13:
case 1888:
case 1718:
case 3263:
case 997:
case 3316:
case 3865:
case 605:
case 229:
case 3659:
case 1290:
case 1525:
case 535:
case 3352:
case 363:
case 1314:
case 3042:
case 74:
case 2070:
case 1228:
case 3187:
case 2752:
case 3629:
case 1547:
case 1484:
case 2506:
case 1408:
case 2592:
case 1700:
case 1508:
case 2406:
case 3069:
case 666:
case 2212:
case 2119:
case 1749:
case 2722:
case 2998:
case 2565:
case 1258:
case 1380:
case 966:
case 1902:
case 2915:
case 3091:
case 238:
case 1996:
case 2256:
case 902:
case 1455:
case 3486:
case 3030:
case 378:
case 416:
case 1152:
case 1663:
case 3037:
case 680:
case 2162:
case 1387:
case 1054:
case 2269:
case 3631:
case 3012:
case 1344:
case 1071:
case 1974:
case 3346:
case 892:
case 31:
case 2291:
case 631:
case 1951:
case 3056:
case 3335:
case 123:
case 2746:
case 1116:
case 2511:
case 2195:
case 244:
case 254:
case 1440:
case 2961:
case 1024:
case 807:
case 1938:
case 1343:
case 384:
case 765:
case 3605:
case 1664:
case 1229:
case 2945:
case 3113:
case 2375:
case 3301:
case 2242:
case 1432:
case 1297:
case 1719:
case 2149:
case 3270:
case 1517:
case 3775:
case 2701:
case 2100:
case 110:
case 2685:
case 1921:
case 958:
case 1417:
case 3946:
case 283:
case 656:
case 2010:
case 832:
case 1351:
case 646:
case 1830:
case 2692:
case 3935:
case 1733:
case 3529:
case 315:
case 1647:
case 1608:
case 1891:
case 2327:
case 2083:
case 2361:
case 3232:
case 3686:
case 257:
case 2399:
case 3003:
case 247:
case 2665:
case 1944:
case 991:
case 3376:
case 889:
case 2975:
case 1734:
case 1092:
case 3901:
case 3459:
case 2357:
case 1610:
case 387:
case 2641:
case 1194:
case 2289:
case 1367:
case 2182:
case 3757:
case 261:
case 804:
case 1065:
case 47:
case 4029:
case 1943:
case 510:
case 3102:
case 2272:
case 3736:
case 3088:
case 3004:
case 2345:
case 3952:
case 1914:
case 994:
case 3208:
case 1464:
case 2471:
case 2178:
case 745:
case 755:
case 668:
case 90:
case 2454:
case 3505:
case 2571:
case 2423:
case 427:
case 2485:
case 3558:
case 236:
case 3393:
case 1617:
case 60:
case 3750:
case 1360:
case 2009:
case 2585:
case 3458:
case 4031:
case 418:
case 376:
case 3072:
case 507:
case 3824:
case 1011:
case 3255:
case 3466:
case 135:
case 1632:
case 694:
case 2204:
case 2288:
case 3566:
case 2398:
case 2524:
case 2553:
case 3138:
case 1779:
case 2866:
case 1302:
case 3531:
case 2424:
case 1563:
case 2858:
case 3490:
case 619:
case 3715:
case 1913:
case 3590:
case 1463:
case 3283:
case 3823:
case 1640:
case 2032:
case 3225:
case 3854:
case 919:
case 1812:
case 2805:
case 779:
case 2203:
case 264:
case 3871:
case 1782:
case 973:
case 2134:
case 2017:
case 3173:
case 3394:
case 3167:
case 469:
case 3720:
case 1203:
case 2812:
case 3949:
case 2782:
case 1320:
case 232:
case 1032:
case 1611:
case 567:
case 4012:
case 883:
case 1794:
case 2609:
case 3526:
case 2837:
case 1134:
case 372:
case 4068:
case 3136:
case 1315:
case 3689:
case 1524:
case 2779:
case 1553:
case 2868:
case 3241:
case 2577:
case 3702:
case 349:
case 570:
case 3145:
case 2913:
case 2856:
case 3796:
case 2463:
case 1858:
case 4056:
case 3379:
case 359:
case 2477:
case 3877:
case 29:
case 409:
case 1585:
case 1009:
case 3556:
case 375:
case 289:
case 1288:
case 861:
case 3468:
case 1204:
case 3918:
case 2286:
case 2632:
case 3995:
case 3537:
case 2914:
case 2464:
case 3206:
case 2564:
case 3292:
case 4026:
case 1828:
case 3437:
case 3512:
case 1454:
case 1423:
case 596:
case 1471:
case 1554:
case 3739:
case 1336:
case 3115:
case 1829:
case 679:
case 2338:
case 3491:
case 324:
case 1345:
case 3530:
case 942:
case 3603:
case 952:
case 613:
case 1981:
case 1055:
case 3211:
case 3086:
case 1179:
case 2625:
case 3767:
case 1084:
case 1008:
case 3120:
case 3773:
case 2006:
case 2092:
case 836:
case 1289:
case 719:
case 1897:
case 3870:
case 2373:
case 3334:
case 979:
case 2194:
case 3569:
case 4042:
case 4069:
case 1776:
case 3688:
case 2655:
case 2470:
case 157:
case 1399:
case 1025:
case 544:
case 430:
case 2778:
case 955:
case 2944:
case 620:
case 3378:
case 1665:
case 920:
case 2351:
case 201:
case 864:
case 478:
case 183:
case 4030:
case 2041:
case 2193:
case 645:
case 1327:
case 2608:
case 3751:
case 1083:
case 1361:
case 3774:
case 1692:
case 655:
case 1606:
case 2630:
case 2503:
case 1042:
case 576:
case 307:
case 2403:
case 163:
case 911:
case 2884:
case 2808:
case 2691:
case 4008:
case 788:
case 2362:
case 2847:
case 3228:
case 1187:
case 1892:
case 3804:
case 3410:
case 3888:
case 3960:
case 3231:
case 2224:
case 3510:
case 1993:
case 3290:
case 3135:
case 1263:
case 1316:
case 3483:
case 2395:
case 1659:
case 2713:
case 4083:
case 3258:
case 2588:
case 3313:
case 2504:
case 483:
case 1030:
case 2642:
case 178:
case 2181:
case 2404:
case 1586:
case 2488:
case 2810:
case 3508:
case 2349:
case 3584:
case 3447:
case 3484:
case 392:
case 3408:
case 2982:
case 2271:
case 457:
case 1069:
case 11:
case 3509:
case 3085:
case 1628:
case 3440:
case 323:
case 3707:
case 3540:
case 1068:
case 2744:
case 914:
case 1114:
case 4017:
case 1690:
case 2817:
case 3259:
case 269:
case 515:
case 774:
case 878:
case 1012:
case 1976:
case 2589:
case 3344:
case 464:
case 3023:
case 2489:
case 3054:
case 3889:
case 3432:
case 543:
case 3719:
case 1666:
case 1270:
case 2668:
case 310:
case 3967:
case 793:
case 1658:
case 2028:
case 184:
case 2031:
case 218:
case 2612:
case 1605:
case 587:
case 626:
case 1781:
case 3024:
case 3053:
case 2840:
case 1113:
case 1:
case 4009:
case 3122:
case 699:
case 3664:
case 3229:
case 2180:
case 2781:
case 284:
case 3671:
case 4011:
case 950:
case 435:
case 118:
case 3381:
case 625:
case 209:
case 3077:
case 1743:
case 489:
case 1809:
case 2:
case 1668:
case 127:
case 925:
case 3242:
case 524:
case 3149:
case 2666:
case 2775:
case 1934:
case 1028:
case 640:
case 3100:
case 650:
case 1319:
case 169:
case 2037:
case 988:
case 2690:
case 3162:
case 516:
case 1832:
case 3269:
case 1489:
case 1005:
case 1589:
case 2631:
case 2628:
case 1933:
case 3735:
case 1058:
case 21:
case 3291:
case 1348:
case 1572:
case 2335:
case 344:
case 3511:
case 1066:
case 354:
case 671:
case 3230:
case 2264:
case 1059:
case 2629:
case 559:
case 549:
case 3492:
case 370:
case 3406:
case 1349:
case 726:
case 1223:
case 1300:
case 1254:
case 799:
case 3119:
case 1982:
case 572:
case 3565:
case 869:
case 2091:
case 1713:
case 3465:
case 103:
case 2322:
case 693:
case 1780:
case 1488:
case 367:
case 3268:
case 2841:
case 281:
case 1588:
case 1642:
case 1224:
case 396:
case 3107:
case 1253:
case 3541:
case 351:
case 3148:
case 2316:
case 2263:
case 1395:
case 2659:
case 1029:
case 3950:
case 2277:
case 4065:
case 2352:
case 1503:
case 2042:
case 3070:
case 1362:
case 2892:
case 575:
case 2187:
case 2144:
case 1714:
case 4092:
case 3226:
case 1691:
case 1884:
case 4006:
case 2273:
case 442:
case 899:
case 2267:
case 4075:
case 88:
case 452:
case 2221:
case 2125:
case 397:
case 663:
case 826:
case 1257:
case 2535:
case 1372:
case 963:
case 1245:
case 1843:
case 2183:
case 2881:
case 1507:
case 2546:
case 1448:
case 2238:
case 1141:
case 2711:
case 1682:
case 111:
case 1548:
case 413:
case 2446:
case 1407:
case 293:
case 2155:
case 1227:
case 3104:
case 1261:
case 1165:
case 2274:
case 3835:
case 445:
case 455:
case 1991:
case 1419:
case 1969:
case 366:
case 630:
case 2082:
case 1106:
case 3575:
case 1299:
case 1717:
case 302:
case 1192:
case 1887:
case 1844:
case 2108:
case 2184:
case 3475:
case 3650:
case 2516:
case 3172:
case 1111:
case 1710:
case 1968:
case 2140:
case 3279:
case 114:
case 1495:
case 2966:
case 2416:
case 288:
case 2958:
case 3074:
case 3822:
case 582:
case 2033:
case 1298:
case 1215:
case 2202:
case 1956:
case 2109:
case 3923:
case 77:
case 3954:
case 91:
case 2905:
case 1076:
case 1462:
case 3971:
case 3282:
case 528:
case 222:
case 380:
case 1937:
case 3645:
case 2034:
case 3073:
case 1747:
case 3852:
case 585:
case 1633:
case 250:
case 1926:
case 3021:
case 1784:
case 1708:
case 2132:
case 909:
case 811:
case 1549:
case 2386:
case 3699:
case 1250:
case 2990:
case 1304:
case 3924:
case 348:
case 1678:
case 1755:
case 3038:
case 684:
case 2931:
case 2260:
case 1990:
case 3977:
case 2304:
case 2250:
case 1765:
case 3963:
case 927:
case 3355:
case 730:
case 40:
case 3036:
case 1676:
case 3480:
case 1931:
case 2755:
case 494:
case 52:
case 2926:
case 2814:
case 150:
case 2400:
case 3651:
case 2708:
case 918:
case 1706:
case 2747:
case 1034:
case 2500:
case 1792:
case 1928:
case 781:
case 4014:
case 3674:
case 3384:
case 874:
case 3057:
case 1132:
case 627:
case 3862:
case 1239:
case 3703:
case 1905:
case 2076:
case 2725:
case 2562:
case 3638:
case 893:
case 3514:
case 2220:
case 122:
case 3414:
case 1552:
case 3027:
case 2518:
case 4080:
case 473:
case 3061:
case 1516:
case 2710:
case 2968:
case 1741:
case 763:
case 419:
case 3621:
case 1109:
case 2956:
case 4013:
case 2634:
case 888:
case 3276:
case 2519:
case 7:
case 4087:
case 2844:
case 3020:
case 3332:
case 2106:
case 2887:
case 784:
case 1501:
case 2192:
case 2227:
case 3848:
case 456:
case 2261:
case 603:
case 193:
case 1274:
case 822:
case 2843:
case 1435:
case 362:
case 3340:
case 1929:
case 3309:
case 1446:
case 2407:
case 2548:
case 306:
case 2448:
case 1881:
case 577:
case 3772:
case 2507:
case 2141:
case 1711:
case 1238:
case 3696:
case 1267:
case 3602:
case 1875:
case 3444:
case 3587:
case 3789:
case 2257:
case 3819:
case 3970:
case 1125:
case 71:
case 1550:
case 580:
case 1758:
case 2129:
case 255:
case 146:
case 493:
case 328:
case 156:
case 2910:
case 901:
case 1044:
case 1371:
case 2643:
case 382:
case 819:
case 1323:
case 1087:
case 1705:
case 3903:
case 2712:
case 1249:
case 2197:
case 2882:
case 2925:
case 317:
case 3648:
case 3326:
case 558:
case 894:
case 548:
case 3482:
case 1169:
case 3839:
case 2984:
case 2947:
case 2252:
case 3001:
case 3988:
case 3904:
case 1218:
case 868:
case 3860:
case 1731:
case 2216:
case 1295:
case 339:
case 1893:
case 1515:
case 1043:
case 1191:
case 3763:
case 1324:
case 1598:
case 1353:
case 99:
case 3989:
case 1797:
case 3123:
case 989:
case 3578:
case 1014:
case 3342:
case 440:
case 1499:
case 783:
case 2370:
case 3275:
case 137:
case 1599:
case 505:
case 2201:
case 604:
case 3281:
case 3016:
case 3838:
case 1911:
case 10:
case 2551:
case 1156:
case 3185:
case 2474:
case 2574:
case 2158:
case 1729:
case 3851:
case 2190:
case 2614:
case 3330:
case 4033:
case 2833:
case 2235:
case 932:
case 3874:
case 502:
case 1445:
case 3391:
case 1536:
case 173:
case 2246:
case 488:
case 1207:
case 471:
case 3153:
case 566:
case 3662:
case 1126:
case 2567:
case 422:
case 3434:
case 1759:
case 2421:
case 2573:
case 2917:
case 2467:
case 2128:
case 1876:
case 891:
case 1457:
case 856:
case 1421:
case 3899:
case 3000:
case 2126:
case 1567:
case 3244:
case 998:
case 16:
case 3359:
case 1769:
case 3049:
case 2557:
case 1833:
case 1614:
case 1538:
case 2436:
case 1438:
case 2248:
case 1730:
case 698:
case 108:
case 2461:
case 3095:
case 1940:
case 3329:
case 2527:
case 3836:
case 294:
case 2561:
case 636:
case 1574:
case 852:
case 842:
case 3243:
case 20:
case 3845:
case 1909:
case 360:
case 2156:
case 506:
case 1105:
case 2112:
case 268:
case 2219:
case 1834:
case 879:
case 701:
case 562:
case 2137:
case 1613:
case 3397:
case 113:
case 1363:
case 411:
case 3753:
case 1955:
case 2295:
case 4093:
case 2130:
case 2218:
case 2965:
case 1687:
case 32:
case 2515:
case 3850:
case 2043:
case 1596:
case 3331:
case 2169:
case 661:
case 2420:
case 2728:
case 2992:
case 2520:
case 142:
case 1908:
case 2323:
case 2354:
case 54:
case 2200:
case 120:
case 2044:
case 735:
case 55:
case 1737:
case 2371:
case 1643:
case 1925:
case 3723:
case 808:
case 4094:
case 789:
case 2705:
case 2142:
case 1712:
case 1882:
case 647:
case 2758:
case 1222:
case 2450:
case 2675:
case 86:
case 3815:
case 3366:
case 2550:
case 1983:
case 3280:
case 3007:
case 3593:
case 1910:
case 3493:
case 2385:
case 1560:
case 246:
case 2073:
case 3034:
case 3792:
case 340:
case 350:
case 2021:
case 1347:
case 2306:
case 2392:
case 2661:
case 2627:
case 1308:
case 1057:
case 3522:
case 552:
case 2699:
case 3386:
case 1413:
case 3990:
case 1513:
case 1977:
case 3422:
case 542:
case 248:
case 1580:
case 2924:
case 2816:
case 1293:
case 2038:
case 2786:
case 1895:
case 1788:
case 4016:
case 258:
case 2172:
case 2279:
case 3741:
case 3966:
case 1027:
case 2657:
case 371:
case 865:
case 14:
case 3202:
case 231:
case 520:
case 15:
case 1621:
case 707:
case 2985:
case 3078:
case 1703:
case 2189:
case 2636:
case 2282:
case 1849:
case 1099:
case 1964:
case 322:
case 1325:
case 1414:
case 555:
case 280:
case 3452:
case 545:
case 1514:
case 2645:
case 393:
case 428:
case 1807:
case 710:
case 3079:
case 2104:
case 2188:
case 4046:
case 3274:
case 2835:
case 1098:
case 1443:
case 1015:
case 1543:
case 4035:
case 638:
case 1317:
case 2278:
case 508:
case 3082:
case 938:
case 202:
case 1332:
case 3147:
case 2575:
case 670:
case 85:
case 2475:
case 2650:
case 1020:
case 3108:
case 3875:
case 3273:
case 941:
case 2801:
case 2698:
case 4001:
case 1544:
case 951:
case 3267:
case 723:
case 2039:
case 1789:
case 2103:
case 1970:
case 162:
case 3929:
case 1050:
case 485:
case 234:
case 2620:
case 3435:
case 106:
case 1772:
case 3711:
case 3110:
case 651:
case 439:
case 3245:
case 2050:
case 1311:
case 695:
case 105:
case 262:
case 2340:
case 3682:
case 568:
case 63:
case 3236:
case 311:
case 3548:
case 3407:
case 3093:
case 3740:
case 744:
case 2487:
case 2544:
case 1615:
case 1698:
case 3942:
case 594:
case 2970:
case 3257:
case 2819:
case 3679:
case 848:
case 2276:
case 2660:
case 573:
case 2317:
case 3419:
case 3969:
case 3094:
case 1650:
case 1575:
case 3106:
case 102:
case 692:
case 519:
case 1188:
case 1104:
case 1481:
case 4007:
case 3261:
case 4048:
case 992:
case 1846:
case 2186:
case 1002:
case 1096:
case 880:
case 1233:
case 3165:
case 2098:
case 1835:
case 591:
case 546:
case 1971:
case 1636:
case 4049:
case 3725:
case 556:
case 3562:
case 3303:
case 180:
case 4000:
case 796:
case 2964:
case 2800:
case 751:
case 2414:
case 3495:
case 2027:
case 3518:
case 623:
case 3418:
case 3880:
case 1172:
case 3111:
case 3595:
case 3710:
case 3813:
case 2621:
case 25:
case 1051:
case 131:
case 3956:
case 1822:
case 3298:
case 2310:
case 24:
case 2513:
case 3304:
case 2977:
case 2963:
case 399:
case 2413:
case 1699:
case 2704:
case 2788:
case 2480:
case 2818:
case 1924:
case 1816:
case 148:
case 3678:
case 897:
case 3755:
case 3400:
case 3784:
case 1073:
case 3747:
case 1852:
case 2057:
case 2384:
case 4062:
case 738:
case 2347:
case 1306:
case 3190:
case 649:
case 1177:
case 2851:
case 3791:
case 3235:
case 2022:
case 3833:
case 4051:
case 659:
case 2391:
case 712:
case 1861:
case 3131:
case 972:
case 2662:
case 3538:
case 2153:
case 3567:
case 200:
case 753:
case 3521:
case 3573:
case 672:
case 743:
case 1899:
case 480:
case 3467:
case 2369:
case 949:
case 2695:
case 3932:
case 1359:
case 3769:
case 959:
case 574:
case 715:
case 1857:
case 2770:
case 2123:
case 1062:
case 177:
case 975:
case 2578:
case 2154:
case 1476:
case 2867:
case 2342:
case 4073:
case 1164:
case 4067:
case 2052:
case 3201:
case 4038:
case 448:
case 2016:
case 2281:
case 458:
case 3940:
case 1329:
case 3551:
case 2185:
case 3909:
case 160:
case 2600:
case 675:
case 2326:
case 4039:
case 1494:
case 2582:
case 1328:
case 860:
case 3984:
case 3159:
case 3947:
case 3075:
case 525:
case 3252:
case 2001:
case 2904:
case 624:
case 1390:
case 3081:
case 3363:
case 4060:
case 877:
case 3955:
case 790:
case 2579:
case 1986:
case 3502:
case 1850:
case 405:
case 1331:
case 3496:
case 540:
case 285:
case 434:
case 1815:
case 1366:
case 3983:
case 522:
case 3222:
case 3129:
case 355:
case 1493:
case 228:
case 1048:
case 3560:
case 3460:
case 1280:
case 2312:
case 776:
case 2764:
case 2337:
case 3439:
case 2903:
case 588:
case 1771:
case 1170:
case 217:
case 1723:
case 3925:
case 4020:
case 2305:
case 2820:
case 117:
case 915:
case 3681:
case 3705:
case 3142:
case 1337:
case 775:
case 1035:
case 2601:
case 3675:
case 4015:
case 1368:
case 2213:
case 2366:
case 3550:
case 1896:
case 2007:
case 2280:
case 2358:
case 1046:
case 3941:
case 3766:
case 391:
case 2493:
case 1356:
case 653:
case 912:
case 139:
case 3893:
case 1904:
case 1479:
case 772:
case 643:
case 406:
case 1860:
case 3731:
case 1763:
case 3324:
case 987:
case 3353:
case 4050:
case 185:
case 3515:
case 3043:
case 1777:
case 2850:
case 462:
case 22:
case 3191:
case 2331:
case 1482:
case 3169:
case 2328:
case 2594:
case 749:
case 2494:
case 612:
case 2635:
case 1001:
case 58:
case 943:
case 3520:
case 1281:
case 1838:
case 4036:
case 2836:
case 394:
case 3527:
case 3561:
case 2018:
case 1600:
case 1533:
case 3729:
case 2243:
case 260:
case 1433:
case 4057:
case 839:
case 1154:
case 368:
case 2576:
case 3112:
case 1171:
case 1770:
case 2857:
case 3219:
case 976:
case 337:
case 3599:
case 1052:
case 1867:
case 3137:
case 2397:
case 716:
case 1821:
case 1534:
case 2244:
case 3126:
case 1434:
case 3457:
case 2359:
case 2616:
case 828:
case 2049:
case 2652:
case 2163:
case 1874:
case 233:
case 1022:
case 3445:
case 319:
case 882:
case 44:
case 3013:
case 2177:
case 3545:
case 373:
case 1124:
case 3080:
case 3207:
case 3436:
case 817:
case 1662:
case 990:
case 3536:
case 1391:
case 2861:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1749733201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,];
var gg_b = "1749733201/";

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
