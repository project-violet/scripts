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
case 2565:
case 96:
case 3134:
case 3506:
case 2587:
case 2203:
case 1073:
case 1820:
case 637:
case 2114:
case 1493:
case 2462:
case 436:
case 3456:
case 2548:
case 3343:
case 25:
case 1767:
case 3733:
case 3126:
case 306:
case 1082:
case 2832:
case 1261:
case 3812:
case 544:
case 1004:
case 1841:
case 798:
case 2274:
case 2982:
case 1423:
case 2715:
case 3032:
case 3990:
case 3677:
case 2012:
case 2371:
case 3941:
case 3735:
case 4045:
case 330:
case 1501:
case 286:
case 224:
case 1522:
case 1425:
case 1140:
case 1357:
case 1912:
case 1670:
case 1191:
case 1517:
case 2808:
case 3368:
case 1075:
case 1184:
case 261:
case 1155:
case 1927:
case 341:
case 2252:
case 3920:
case 4050:
case 999:
case 2530:
case 3846:
case 2975:
case 3289:
case 935:
case 185:
case 458:
case 1474:
case 3028:
case 21:
case 2223:
case 3309:
case 1538:
case 601:
case 2249:
case 3661:
case 2354:
case 2385:
case 2461:
case 1842:
case 3639:
case 625:
case 3534:
case 2165:
case 2187:
case 2439:
case 89:
case 3419:
case 1403:
case 1081:
case 2148:
case 887:
case 3596:
case 328:
case 1262:
case 3:
case 1452:
case 332:
case 1689:
case 1192:
case 1911:
case 2163:
case 1584:
case 2130:
case 1405:
case 3110:
case 2898:
case 2295:
case 1666:
case 3069:
case 3270:
case 2251:
case 2225:
case 698:
case 2828:
case 2757:
case 2764:
case 2383:
case 1540:
case 395:
case 3900:
case 3086:
case 1122:
case 1559:
case 1801:
case 256:
case 1654:
case 3633:
case 1685:
case 3660:
case 613:
case 3374:
case 555:
case 2944:
case 1116:
case 1409:
case 3303:
case 2863:
case 2980:
case 966:
case 1378:
case 2006:
case 1080:
case 3658:
case 2198:
case 3048:
case 3810:
case 1319:
case 2756:
case 2243:
case 1520:
case 465:
case 870:
case 404:
case 2887:
case 3305:
case 2865:
case 2366:
case 3063:
case 1037:
case 373:
case 864:
case 2131:
case 2010:
case 817:
case 3111:
case 2848:
case 3527:
case 2389:
case 149:
case 3415:
case 1100:
case 28:
case 753:
case 107:
case 2532:
case 220:
case 115:
case 334:
case 1770:
case 1541:
case 297:
case 1590:
case 3107:
case 542:
case 2034:
case 896:
case 1356:
case 1884:
case 1996:
case 1429:
case 2096:
case 2778:
case 2476:
case 3393:
case 4023:
case 2598:
case 238:
case 1802:
case 2026:
case 216:
case 1499:
case 3938:
case 2528:
case 1260:
case 4093:
case 3847:
case 3323:
case 3888:
case 1840:
case 3254:
case 3267:
case 1926:
case 653:
case 1018:
case 3197:
case 1988:
case 2664:
case 2657:
case 2132:
case 488:
case 3457:
case 3826:
case 713:
case 1500:
case 2586:
case 3283:
case 493:
case 1450:
case 229:
case 1838:
case 1947:
case 2088:
case 1141:
case 1671:
case 140:
case 222:
case 1445:
case 1120:
case 3902:
case 3834:
case 3272:
case 1468:
case 4051:
case 3127:
case 879:
case 2531:
case 3395:
case 131:
case 857:
case 543:
case 659:
case 3180:
case 80:
case 1678:
case 3729:
case 726:
case 1148:
case 677:
case 3358:
case 1514:
case 1981:
case 2553:
case 3998:
case 784:
case 1619:
case 610:
case 1924:
case 2842:
case 3016:
case 586:
case 2036:
case 1354:
case 1886:
case 2538:
case 2313:
case 1994:
case 1869:
case 691:
case 2094:
case 3144:
case 285:
case 652:
case 3969:
case 2122:
case 370:
case 2816:
case 712:
case 55:
case 3750:
case 3335:
case 1383:
case 1764:
case 1757:
case 1225:
case 364:
case 305:
case 2907:
case 2101:
case 3894:
case 3000:
case 321:
case 2666:
case 900:
case 2502:
case 223:
case 1898:
case 435:
case 3881:
case 3466:
case 3824:
case 750:
case 1130:
case 1011:
case 2584:
case 1163:
case 3137:
case 2555:
case 2117:
case 3042:
case 2192:
case 975:
case 2521:
case 719:
case 4035:
case 2452:
case 396:
case 3118:
case 3709:
case 2138:
case 2841:
case 2004:
case 2261:
case 1832:
case 3059:
case 958:
case 2754:
case 2449:
case 3580:
case 3219:
case 2239:
case 1548:
case 645:
case 1656:
case 1046:
case 3908:
case 1462:
case 348:
case 3278:
case 3875:
case 2946:
case 3693:
case 2153:
case 1203:
case 1975:
case 427:
case 372:
case 2102:
case 1027:
case 3020:
case 3873:
case 2495:
case 947:
case 777:
case 759:
case 143:
case 2927:
case 1563:
case 161:
case 2184:
case 3695:
case 2155:
case 1205:
case 909:
case 2075:
case 2997:
case 3041:
case 2191:
case 2140:
case 3932:
case 2451:
case 3470:
case 3882:
case 1371:
case 1097:
case 2783:
case 357:
case 1715:
case 379:
case 520:
case 2926:
case 2018:
case 3536:
case 58:
case 2891:
case 4062:
case 1209:
case 2159:
case 1528:
case 2079:
case 481:
case 2499:
case 3594:
case 3774:
case 1918:
case 3581:
case 138:
case 72:
case 1598:
case 1476:
case 571:
case 614:
case 3914:
case 2429:
case 2996:
case 466:
case 2258:
case 1719:
case 2855:
case 47:
case 2884:
case 3643:
case 1034:
case 231:
case 333:
case 830:
case 3002:
case 3705:
case 689:
case 2468:
case 3021:
case 2120:
case 1814:
case 2445:
case 4077:
case 2789:
case 2542:
case 904:
case 3084:
case 122:
case 3055:
case 3650:
case 3040:
case 2190:
case 556:
case 841:
case 360:
case 2450:
case 129:
case 2235:
case 1569:
case 403:
case 682:
case 1370:
case 1132:
case 2988:
case 1047:
case 1657:
case 1664:
case 1756:
case 2319:
case 1458:
case 1243:
case 4061:
case 2906:
case 522:
case 3793:
case 1006:
case 3573:
case 1508:
case 2892:
case 2817:
case 1229:
case 3136:
case 3504:
case 2116:
case 3723:
case 1460:
case 3609:
case 39:
case 1944:
case 1299:
case 2685:
case 2044:
case 156:
case 1613:
case 3361:
case 3467:
case 3454:
case 529:
case 1433:
case 3725:
case 3264:
case 3257:
case 8:
case 993:
case 2770:
case 369:
case 215:
case 1532:
case 207:
case 2683:
case 3844:
case 1250:
case 2100:
case 1169:
case 3483:
case 1389:
case 494:
case 3880:
case 362:
case 1131:
case 3963:
case 1937:
case 242:
case 3092:
case 538:
case 3575:
case 3795:
case 895:
case 2910:
case 680:
case 714:
case 1366:
case 1268:
case 62:
case 767:
case 1857:
case 1426:
case 1864:
case 662:
case 2479:
case 898:
case 599:
case 3618:
case 4046:
case 2638:
case 3123:
case 32:
case 3736:
case 1244:
case 1999:
case 45:
case 1519:
case 3453:
case 1614:
case 2653:
case 2043:
case 3193:
case 2029:
case 1578:
case 1798:
case 1496:
case 3781:
case 1943:
case 2308:
case 3724:
case 3265:
case 2206:
case 1156:
case 3503:
case 3327:
case 2589:
case 4012:
case 774:
case 3195:
case 2045:
case 2742:
case 3421:
case 424:
case 1731:
case 760:
case 2566:
case 3263:
case 1237:
case 3829:
case 3505:
case 687:
case 461:
case 2700:
case 443:
case 354:
case 1950:
case 4027:
case 576:
case 2170:
case 2640:
case 127:
case 1786:
case 1488:
case 923:
case 1687:
case 2296:
case 2958:
case 3593:
case 41:
case 660:
case 2872:
case 1119:
case 1406:
case 3214:
case 2480:
case 2234:
case 79:
case 3103:
case 1556:
case 382:
case 674:
case 3680:
case 1648:
case 1058:
case 2960:
case 3174:
case 176:
case 633:
case 3085:
case 3054:
case 1909:
case 3067:
case 527:
case 1316:
case 2759:
case 2444:
case 3523:
case 1279:
case 2933:
case 3401:
case 1732:
case 314:
case 247:
case 2601:
case 2288:
case 2854:
case 2386:
case 3307:
case 2247:
case 4011:
case 3525:
case 3809:
case 2935:
case 135:
case 762:
case 2741:
case 3551:
case 3311:
case 3072:
case 1663:
case 3152:
case 2692:
case 2437:
case 2189:
case 3417:
case 3492:
case 2166:
case 1410:
case 4007:
case 2753:
case 2348:
case 3978:
case 1039:
case 456:
case 3852:
case 2939:
case 2481:
case 2003:
case 1273:
case 657:
case 3681:
case 3208:
case 3529:
case 2387:
case 3805:
case 2961:
case 3694:
case 1204:
case 2154:
case 2074:
case 672:
case 2494:
case 3636:
case 1061:
case 2436:
case 3109:
case 2738:
case 3416:
case 3718:
case 1974:
case 23:
case 265:
case 3400:
case 1115:
case 319:
case 204:
case 1557:
case 2183:
case 1564:
case 2600:
case 471:
case 648:
case 4010:
case 3232:
case 2297:
case 1686:
case 2740:
case 931:
case 3550:
case 57:
case 194:
case 2791:
case 853:
case 3310:
case 955:
case 696:
case 2642:
case 2755:
case 2172:
case 3545:
case 48:
case 3442:
case 2721:
case 3089:
case 717:
case 1905:
case 420:
case 1411:
case 312:
case 581:
case 2005:
case 1952:
case 2363:
case 1392:
case 1923:
case 4034:
case 3459:
case 17:
case 594:
case 2567:
case 978:
case 748:
case 1513:
case 1338:
case 2404:
case 3825:
case 3326:
case 3228:
case 1949:
case 2023:
case 2870:
case 3851:
case 438:
case 4026:
case 3298:
case 3895:
case 2473:
case 3396:
case 181:
case 670:
case 1787:
case 308:
case 3673:
case 1748:
case 2314:
case 617:
case 1446:
case 1353:
case 796:
case 4047:
case 3893:
case 2211:
case 949:
case 757:
case 2620:
case 1302:
case 288:
case 103:
case 3675:
case 2717:
case 2792:
case 3737:
case 2095:
case 3145:
case 1355:
case 1856:
case 3168:
case 429:
case 4088:
case 1077:
case 1632:
case 377:
case 1164:
case 1157:
case 2690:
case 813:
case 942:
case 3070:
case 3490:
case 2025:
case 3441:
case 1933:
case 575:
case 1009:
case 3394:
case 2060:
case 2279:
case 1328:
case 4081:
case 1444:
case 34:
case 500:
case 2218:
case 26:
case 2909:
case 1960:
case 3013:
case 2058:
case 2178:
case 3746:
case 1234:
case 2556:
case 3253:
case 3487:
case 3139:
case 826:
case 3324:
case 70:
case 1872:
case 3606:
case 1958:
case 1296:
case 2665:
case 158:
case 1398:
case 485:
case 3562:
case 3381:
case 3221:
case 2630:
case 3972:
case 3610:
case 518:
case 819:
case 3727:
case 924:
case 102:
case 2410:
case 3255:
case 986:
case 292:
case 3463:
case 1692:
case 2663:
case 299:
case 3983:
case 1935:
case 1247:
case 2300:
case 1622:
case 3860:
case 1854:
case 812:
case 943:
case 1885:
case 3833:
case 1288:
case 2813:
case 147:
case 3291:
case 2732:
case 109:
case 536:
case 3015:
case 2035:
case 3797:
case 2156:
case 1308:
case 2076:
case 2496:
case 2943:
case 4004:
case 2578:
case 91:
case 1043:
case 2929:
case 2614:
case 2434:
case 2280:
case 502:
case 2519:
case 2244:
case 1418:
case 547:
case 3561:
case 509:
case 3626:
case 1099:
case 468:
case 4073:
case 2864:
case 2728:
case 100:
case 2488:
case 3707:
case 227:
case 1691:
case 3688:
case 1170:
case 3201:
case 2341:
case 2950:
case 891:
case 3971:
case 2390:
case 3647:
case 3222:
case 1700:
case 290:
case 2447:
case 2769:
case 1566:
case 2237:
case 877:
case 3711:
case 558:
case 1068:
case 3375:
case 60:
case 1684:
case 1589:
case 1210:
case 810:
case 3176:
case 4018:
case 3056:
case 398:
case 1962:
case 2446:
case 2748:
case 2993:
case 2224:
case 880:
case 2062:
case 956:
case 639:
case 82:
case 1473:
case 706:
case 2608:
case 383:
case 632:
case 1870:
case 2294:
case 2949:
case 3560:
case 565:
case 504:
case 2338:
case 2513:
case 266:
case 3216:
case 1585:
case 1567:
case 1554:
case 27:
case 2923:
case 346:
case 3877:
case 325:
case 1641:
case 1051:
case 1977:
case 3200:
case 1171:
case 1207:
case 2164:
case 3970:
case 3612:
case 53:
case 3697:
case 741:
case 971:
case 2951:
case 2515:
case 1701:
case 2497:
case 3432:
case 628:
case 3242:
case 3710:
case 997:
case 854:
case 2856:
case 2427:
case 2355:
case 193:
case 2730:
case 1572:
case 730:
case 301:
case 203:
case 1792:
case 2302:
case 188:
case 1620:
case 3344:
case 13:
case 2974:
case 1738:
case 1436:
case 1616:
case 2282:
case 641:
case 478:
case 3428:
case 1961:
case 1185:
case 2204:
case 1154:
case 1167:
case 3078:
case 2698:
case 3158:
case 588:
case 2273:
case 3796:
case 3498:
case 4044:
case 2903:
case 593:
case 1246:
case 3380:
case 814:
case 2392:
case 2952:
case 867:
case 3337:
case 1363:
case 3989:
case 2878:
case 3431:
case 1005:
case 929:
case 2411:
case 1702:
case 2275:
case 415:
case 2905:
case 1721:
case 407:
case 1330:
case 1052:
case 3839:
case 1227:
case 1642:
case 1791:
case 2407:
case 337:
case 294:
case 1297:
case 442:
case 2322:
case 2557:
case 3747:
case 3469:
case 732:
case 165:
case 104:
case 2311:
case 2637:
case 2072:
case 957:
case 894:
case 2775:
case 153:
case 2152:
case 749:
case 3189:
case 707:
case 3166:
case 2105:
case 1858:
case 439:
case 1727:
case 1610:
case 1221:
case 432:
case 1015:
case 309:
case 347:
case 3601:
case 1833:
case 742:
case 3247:
case 972:
case 1860:
case 3369:
case 3935:
case 2422:
case 3570:
case 2551:
case 3790:
case 3960:
case 631:
case 2174:
case 2085:
case 0:
case 1336:
case 289:
case 3759:
case 1238:
case 3444:
case 2549:
case 2704:
case 2913:
case 1161:
case 428:
case 1967:
case 3009:
case 1954:
case 3398:
case 358:
case 1381:
case 1562:
case 640:
case 4028:
case 3296:
case 2593:
case 1487:
case 3480:
case 2103:
case 1253:
case 2680:
case 1057:
case 1222:
case 1177:
case 441:
case 1971:
case 254:
case 3691:
case 1201:
case 3170:
case 678:
case 2071:
case 2312:
case 2397:
case 3050:
case 921:
case 2125:
case 54:
case 3589:
case 3210:
case 755:
case 2230:
case 3655:
case 917:
case 2195:
case 2552:
case 2421:
case 964:
case 1876:
case 3068:
case 3566:
case 2829:
case 1217:
case 2346:
case 406:
case 3653:
case 87:
case 607:
case 1373:
case 2781:
case 3308:
case 2868:
case 649:
case 3206:
case 2287:
case 2503:
case 2679:
case 1304:
case 2149:
case 1626:
case 2574:
case 2618:
case 1561:
case 336:
case 3638:
case 3418:
case 2850:
case 881:
case 2736:
case 2438:
case 2849:
case 259:
case 3207:
case 1535:
case 1697:
case 1970:
case 3171:
case 2269:
case 3641:
case 3051:
case 2070:
case 3025:
case 210:
case 2441:
case 962:
case 3475:
case 3211:
case 2231:
case 388:
case 2675:
case 3717:
case 3792:
case 2737:
case 3572:
case 101:
case 2145:
case 1710:
case 2168:
case 1242:
case 1627:
case 252:
case 685:
case 3473:
case 987:
case 2143:
case 208:
case 2673:
case 3314:
case 99:
case 198:
case 2129:
case 3962:
case 1176:
case 1877:
case 2199:
case 3482:
case 768:
case 146:
case 1533:
case 2459:
case 3554:
case 3567:
case 2682:
case 2326:
case 2604:
case 1379:
case 3023:
case 3870:
case 2851:
case 3052:
case 974:
case 3227:
case 1839:
case 3755:
case 3172:
case 2545:
case 2442:
case 3721:
case 960:
case 583:
case 3005:
case 1611:
case 2803:
case 3363:
case 2568:
case 304:
case 3183:
case 1747:
case 245:
case 4063:
case 1290:
case 2874:
case 473:
case 250:
case 4030:
case 546:
case 137:
case 3740:
case 851:
case 3074:
case 1726:
case 3494:
case 2599:
case 4065:
case 2636:
case 226:
case 3616:
case 4048:
case 2416:
case 2718:
case 3753:
case 3003:
case 2919:
case 2624:
case 2208:
case 1158:
case 3387:
case 2529:
case 2805:
case 3365:
case 86:
case 3866:
case 3320:
case 4041:
case 1263:
case 995:
case 2711:
case 729:
case 2876:
case 1552:
case 1421:
case 1195:
case 1843:
case 457:
case 1327:
case 1455:
case 479:
case 1484:
case 888:
case 3488:
case 3786:
case 1071:
case 472:
case 1957:
case 1964:
case 2688:
case 1151:
case 2201:
case 4020:
case 2177:
case 2064:
case 3390:
case 2057:
case 2222:
case 722:
case 3769:
case 12:
case 1850:
case 3244:
case 1736:
case 3359:
case 928:
case 180:
case 2561:
case 514:
case 1794:
case 448:
case 2626:
case 1149:
case 2304:
case 1679:
case 3426:
case 2696:
case 496:
case 1287:
case 3156:
case 68:
case 1724:
case 1868:
case 2373:
case 3798:
case 3943:
case 620:
case 697:
case 2634:
case 3614:
case 2539:
case 1453:
case 3280:
case 3519:
case 399:
case 2983:
case 1422:
case 335:
case 1551:
case 1809:
case 2860:
case 52:
case 1307:
case 4042:
case 3813:
case 2291:
case 771:
case 2577:
case 3732:
case 963:
case 114:
case 2015:
case 167:
case 2797:
case 2221:
case 3630:
case 616:
case 2972:
case 2610:
case 470:
case 865:
case 3342:
case 2727:
case 2858:
case 2255:
case 1492:
case 1417:
case 2463:
case 405:
case 930:
case 2202:
case 1152:
case 78:
case 1775:
case 1637:
case 351:
case 4000:
case 3178:
case 182:
case 2746:
case 2253:
case 1103:
case 1214:
case 3708:
case 2487:
case 2465:
case 629:
case 756:
case 2606:
case 1593:
case 83:
case 3665:
case 1773:
case 2562:
case 2381:
case 2985:
case 2967:
case 554:
case 3060:
case 1704:
case 2238:
case 189:
case 3316:
case 2835:
case 2336:
case 1085:
case 36:
case 1067:
case 1054:
case 1174:
case 376:
case 3407:
case 2486:
case 237:
case 394:
case 1550:
case 2607:
case 150:
case 2861:
case 1232:
case 4092:
case 4017:
case 1874:
case 2241:
case 3669:
case 2135:
case 2469:
case 1400:
case 119:
case 508:
case 809:
case 3392:
case 3631:
case 1803:
case 2611:
case 2337:
case 4022:
case 112:
case 2431:
case 3275:
case 469:
case 3905:
case 1442:
case 1545:
case 2839:
case 2158:
case 1681:
case 49:
case 1624:
case 3273:
case 1919:
case 552:
case 3039:
case 1543:
case 2734:
case 2344:
case 577:
case 1416:
case 3061:
case 559:
case 2259:
case 1109:
case 661:
case 126:
case 1779:
case 3628:
case 184:
case 510:
case 2428:
case 1694:
case 3321:
case 2627:
case 460:
case 875:
case 3995:
case 934:
case 3856:
case 724:
case 3730:
case 3384:
case 1420:
case 201:
case 1675:
case 1231:
case 1893:
case 584:
case 4002:
case 1070:
case 1823:
case 1347:
case 2200:
case 2535:
case 3157:
case 1286:
case 177:
case 2612:
case 2697:
case 3951:
case 3391:
case 973:
case 3515:
case 159:
case 526:
case 3497:
case 3412:
case 4084:
case 2432:
case 1851:
case 2379:
case 1604:
case 3949:
case 1228:
case 1326:
case 519:
case 1509:
case 1825:
case 1682:
case 366:
case 2318:
case 1744:
case 1459:
case 2533:
case 37:
case 3923:
case 246:
case 550:
case 1199:
case 2877:
case 4038:
case 2646:
case 2056:
case 3353:
case 1129:
case 298:
case 1334:
case 3446:
case 3748:
case 1673:
case 3224:
case 836:
case 3787:
case 2706:
case 1143:
case 3765:
case 381:
case 512:
case 1895:
case 1956:
case 1986:
case 3251:
case 164:
case 3225:
case 842:
case 105:
case 913:
case 596:
case 2547:
case 3828:
case 3757:
case 3764:
case 1836:
case 3383:
case 1335:
case 2588:
case 170:
case 2086:
case 1969:
case 2:
case 4083:
case 232:
case 1652:
case 1745:
case 1489:
case 666:
case 2942:
case 2110:
case 815:
case 1466:
case 794:
case 1605:
case 3295:
case 548:
case 4085:
case 3924:
case 4067:
case 2534:
case 1743:
case 1998:
case 3187:
case 1358:
case 489:
case 2419:
case 3514:
case 3678:
case 2596:
case 228:
case 2776:
case 3831:
case 1799:
case 3936:
case 2028:
case 1579:
case 31:
case 1360:
case 1144:
case 3223:
case 579:
case 878:
case 3354:
case 3367:
case 1333:
case 3886:
case 3385:
case 1518:
case 3461:
case 1928:
case 1016:
case 3808:
case 263:
case 2266:
case 3563:
case 3205:
case 343:
case 1873:
case 1020:
case 241:
case 454:
case 3252:
case 3027:
case 2920:
case 172:
case 3530:
case 3975:
case 953:
case 2990:
case 3012:
case 2147:
case 3097:
case 2941:
case 157:
case 230:
case 386:
case 324:
case 1625:
case 1932:
case 1090:
case 1544:
case 3713:
case 781:
case 3832:
case 1179:
case 2812:
case 2959:
case 2399:
case 564:
case 1118:
case 2760:
case 3982:
case 3114:
case 94:
case 1875:
case 1376:
case 3462:
case 148:
case 3656:
case 1908:
case 2827:
case 2456:
case 3548:
case 2343:
case 1219:
case 322:
case 1055:
case 790:
case 1752:
case 459:
case 477:
case 2902:
case 1021:
case 2921:
case 1002:
case 2127:
case 66:
case 410:
case 2955:
case 2896:
case 676:
case 2511:
case 2197:
case 2112:
case 1879:
case 2991:
case 174:
case 59:
case 3132:
case 2940:
case 711:
case 2457:
case 587:
case 2507:
case 1471:
case 329:
case 1215:
case 3088:
case 1650:
case 316:
case 1774:
case 2938:
case 3528:
case 2847:
case 1699:
case 3209:
case 2323:
case 1213:
case 3979:
case 692:
case 1104:
case 2267:
case 1038:
case 2761:
case 699:
case 2014:
case 1053:
case 635:
case 2739:
case 3096:
case 3476:
case 2393:
case 1914:
case 2953:
case 3598:
case 338:
case 751:
case 3435:
case 2922:
case 38:
case 2271:
case 2635:
case 4089:
case 169:
case 3532:
case 320:
case 397:
case 412:
case 3186:
case 1264:
case 1725:
case 1472:
case 1795:
case 2063:
case 1930:
case 1092:
case 273:
case 1963:
case 2352:
case 3010:
case 450:
case 3937:
case 2030:
case 2992:
case 2917:
case 844:
case 735:
case 3245:
case 1880:
case 3848:
case 925:
case 799:
case 3389:
case 776:
case 1837:
case 627:
case 3980:
case 1573:
case 533:
case 426:
case 2658:
case 1181:
case 1965:
case 2048:
case 885:
case 1124:
case 1339:
case 3458:
case 3756:
case 3243:
case 3830:
case 187:
case 2413:
case 3128:
case 983:
case 1749:
case 1454:
case 1485:
case 356:
case 1361:
case 1582:
case 2633:
case 998:
case 19:
case 2374:
case 1609:
case 3944:
case 3460:
case 1723:
case 1136:
case 3912:
case 1188:
case 2804:
case 3364:
case 3140:
case 3357:
case 2470:
case 3522:
case 2625:
case 793:
case 2882:
case 3501:
case 1941:
case 3859:
case 1677:
case 1990:
case 1032:
case 1510:
case 1920:
case 272:
case 3102:
case 141:
case 3495:
case 829:
case 3121:
case 4057:
case 3927:
case 2695:
case 967:
case 3155:
case 914:
case 3517:
case 1368:
case 2580:
case 604:
case 2219:
case 1456:
case 1827:
case 1758:
case 5:
case 532:
case 3493:
case 2376:
case 2875:
case 3946:
case 368:
case 2693:
case 1329:
case 3153:
case 1506:
case 982:
case 2118:
case 2623:
case 3890:
case 1897:
case 3261:
case 106:
case 539:
case 838:
case 3082:
case 3449:
case 595:
case 2544:
case 2605:
case 3666:
case 3502:
case 323:
case 1031:
case 3405:
case 820:
case 2466:
case 1942:
case 2137:
case 3555:
case 3117:
case 3911:
case 2652:
case 4015:
case 3521:
case 704:
case 132:
case 2969:
case 1086:
case 270:
case 1900:
case 3315:
case 139:
case 3816:
case 3771:
case 871:
case 2335:
case 2986:
case 3907:
case 3101:
case 2894:
case 530:
case 3036:
case 2518:
case 1807:
case 2333:
case 3313:
case 1526:
case 2144:
case 3094:
case 1028:
case 128:
case 1776:
case 73:
case 1478:
case 3262:
case 1811:
case 1596:
case 92:
case 563:
case 1098:
case 1419:
case 2358:
case 2743:
case 1534:
case 1106:
case 4013:
case 1639:
case 3842:
case 1527:
case 437:
case 2880:
case 2963:
case 342:
case 2092:
case 2575:
case 1063:
case 2795:
case 977:
case 3037:
case 3672:
case 1806:
case 3520:
case 2264:
case 1107:
case 1901:
case 952:
case 2022:
case 618:
case 3590:
case 2751:
case 991:
case 3770:
case 3541:
case 702:
case 269:
case 315:
case 1512:
case 2844:
case 349:
case 1271:
case 1922:
case 3409:
case 4078:
case 2504:
case 3654:
case 3667:
case 2194:
case 4019:
case 3044:
case 3801:
case 908:
case 2361:
case 2467:
case 2454:
case 287:
case 3319:
case 1546:
case 1810:
case 2339:
case 2965:
case 1048:
case 81:
case 675:
case 2948:
case 1762:
case 378:
case 3276:
case 3817:
case 600:
case 1303:
case 2837:
case 3671:
case 2650:
case 658:
case 2091:
case 3141:
case 2471:
case 3450:
case 3235:
case 1283:
case 3500:
case 1826:
case 1464:
case 1457:
case 1325:
case 1351:
case 1940:
case 1197:
case 1112:
case 3988:
case 1991:
case 331:
case 1896:
case 700:
case 1511:
case 1984:
case 1955:
case 233:
case 425:
case 2668:
case 950:
case 886:
case 2705:
case 1272:
case 3766:
case 2021:
case 775:
case 3120:
case 3445:
case 3789:
case 824:
case 3542:
case 2175:
case 2752:
case 2084:
case 2362:
case 3802:
case 1953:
case 1393:
case 609:
case 2629:
case 2703:
case 1146:
case 926:
case 3443:
case 1739:
case 984:
case 3258:
case 3356:
case 3855:
case 3884:
case 2643:
case 3821:
case 2053:
case 1014:
case 1761:
case 3926:
case 1285:
case 3233:
case 1254:
case 1888:
case 2213:
case 3516:
case 1323:
case 602:
case 3079:
case 3499:
case 2594:
case 2774:
case 534:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1762268402/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,];
var gg_b = "1762268402/";

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
