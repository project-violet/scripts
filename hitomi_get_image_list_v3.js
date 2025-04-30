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
case 3308:
case 684:
case 3013:
case 341:
case 1536:
case 1809:
case 3847:
case 1545:
case 325:
case 3432:
case 3231:
case 1361:
case 1233:
case 602:
case 361:
case 2149:
case 3027:
case 1740:
case 837:
case 1714:
case 240:
case 2373:
case 2159:
case 2068:
case 73:
case 410:
case 228:
case 260:
case 1042:
case 1555:
case 3974:
case 1659:
case 4042:
case 2875:
case 2599:
case 284:
case 2623:
case 1718:
case 905:
case 2903:
case 1773:
case 3039:
case 1219:
case 110:
case 692:
case 842:
case 3735:
case 2064:
case 3927:
case 3380:
case 2314:
case 904:
case 2786:
case 640:
case 1911:
case 285:
case 2831:
case 1952:
case 3287:
case 982:
case 4052:
case 1649:
case 2247:
case 171:
case 1806:
case 1539:
case 558:
case 3640:
case 927:
case 1732:
case 1108:
case 3955:
case 3254:
case 3186:
case 2307:
case 3888:
case 2135:
case 3440:
case 2077:
case 2848:
case 3936:
case 1030:
case 2985:
case 2604:
case 3323:
case 2156:
case 3210:
case 2171:
case 2284:
case 2225:
case 631:
case 1891:
case 2404:
case 2024:
case 1104:
case 3618:
case 1527:
case 3673:
case 3825:
case 973:
case 3036:
case 3473:
case 1456:
case 1578:
case 2810:
case 3884:
case 3395:
case 2085:
case 3045:
case 986:
case 3552:
case 2288:
case 3542:
case 3055:
case 3248:
case 2608:
case 2582:
case 733:
case 1446:
case 3749:
case 2854:
case 2408:
case 2501:
case 231:
case 1635:
case 2332:
case 758:
case 1646:
case 2928:
case 2188:
case 3835:
case 2034:
case 3765:
case 1537:
case 2886:
case 275:
case 1387:
case 1400:
case 60:
case 3594:
case 3560:
case 4020:
case 3026:
case 819:
case 1905:
case 2892:
case 1684:
case 29:
case 547:
case 1425:
case 199:
case 274:
case 1818:
case 1484:
case 3856:
case 3871:
case 3319:
case 2938:
case 1172:
case 950:
case 789:
case 1116:
case 854:
case 1850:
case 1722:
case 3110:
case 2184:
case 1693:
case 2256:
case 3691:
case 1375:
case 2616:
case 1493:
case 3598:
case 20:
case 3757:
case 3491:
case 134:
case 499:
case 675:
case 1263:
case 2787:
case 674:
case 69:
case 3406:
case 1709:
case 84:
case 1688:
case 2100:
case 1020:
case 917:
case 2246:
case 3662:
case 3286:
case 2543:
case 1488:
case 1814:
case 2235:
case 98:
case 3505:
case 701:
case 736:
case 359:
case 2754:
case 1465:
case 3849:
case 481:
case 2051:
case 2012:
case 2147:
case 3029:
case 2515:
case 3081:
case 2391:
case 3859:
case 4094:
case 1994:
case 983:
case 3316:
case 3372:
case 1119:
case 168:
case 3066:
case 3520:
case 976:
case 2821:
case 3002:
case 3422:
case 2758:
case 2419:
case 1344:
case 2259:
case 3966:
case 3902:
case 1526:
case 218:
case 314:
case 3981:
case 448:
case 1457:
case 1791:
case 3409:
case 2951:
case 181:
case 2976:
case 1762:
case 2912:
case 315:
case 1569:
case 1133:
case 3131:
case 1832:
case 2165:
case 1647:
case 2249:
case 791:
case 536:
case 3788:
case 501:
case 2748:
case 1998:
case 1870:
case 2518:
case 765:
case 75:
case 2452:
case 745:
case 1592:
case 2190:
case 1298:
case 1355:
case 2652:
case 3989:
case 2164:
case 2949:
case 721:
case 1403:
case 3682:
case 490:
case 3266:
case 100:
case 1336:
case 3202:
case 2642:
case 5:
case 1345:
case 442:
case 4023:
case 1468:
case 744:
case 1095:
case 3139:
case 2442:
case 3174:
case 3281:
case 1603:
case 3482:
case 2241:
case 3601:
case 1586:
case 1668:
case 1917:
case 857:
case 623:
case 2514:
case 2881:
case 1017:
case 3841:
case 1843:
case 437:
case 544:
case 2736:
case 1260:
case 277:
case 3330:
case 3785:
case 142:
case 1995:
case 2745:
case 3021:
case 2103:
case 2866:
case 1023:
case 4095:
case 1464:
case 810:
case 3089:
case 1490:
case 2049:
case 545:
case 3504:
case 1853:
case 3876:
case 1152:
case 2550:
case 1664:
case 383:
case 1690:
case 376:
case 3812:
case 3178:
case 2713:
case 4008:
case 4063:
case 3523:
case 62:
case 1677:
case 1815:
case 3499:
case 466:
case 651:
case 3986:
case 3517:
case 1628:
case 2185:
case 2971:
case 3703:
case 538:
case 3145:
case 1701:
case 3136:
case 3768:
case 1782:
case 429:
case 2507:
case 553:
case 1589:
case 3092:
case 129:
case 2382:
case 4004:
case 2774:
case 616:
case 1624:
case 2301:
case 2056:
case 1130:
case 1485:
case 2177:
case 3834:
case 166:
case 1980:
case 4080:
case 350:
case 1378:
case 3879:
case 3311:
case 1313:
case 2826:
case 3061:
case 3352:
case 146:
case 2855:
case 669:
case 3697:
case 2277:
case 454:
case 2988:
case 1434:
case 3054:
case 2522:
case 1753:
case 373:
case 649:
case 386:
case 3712:
case 1634:
case 2729:
case 3824:
case 119:
case 3267:
case 1337:
case 2781:
case 1105:
case 2509:
case 1587:
case 3394:
case 1916:
case 3360:
case 3885:
case 1230:
case 2138:
case 1972:
case 2702:
case 2845:
case 4072:
case 2285:
case 3169:
case 3058:
case 1438:
case 3944:
case 3533:
case 2605:
case 3245:
case 3910:
case 1366:
case 16:
case 327:
case 269:
case 2405:
case 419:
case 2224:
case 2343:
case 249:
case 2093:
case 835:
case 2737:
case 1381:
case 570:
case 997:
case 834:
case 3126:
case 2900:
case 1770:
case 3615:
case 2179:
case 3828:
case 61:
case 2420:
case 2134:
case 3398:
case 154:
case 687:
case 3255:
case 1899:
case 868:
case 511:
case 163:
case 3864:
case 3734:
case 1612:
case 2065:
case 3890:
case 3227:
case 1252:
case 3516:
case 1797:
case 3031:
case 1451:
case 698:
case 3779:
case 2698:
case 1412:
case 3320:
case 3278:
case 3305:
case 3075:
case 756:
case 1548:
case 2957:
case 208:
case 4019:
case 2268:
case 1919:
case 2839:
case 1160:
case 2683:
case 1194:
case 3643:
case 382:
case 941:
case 1801:
case 3102:
case 2494:
case 3803:
case 3738:
case 3166:
case 3868:
case 2694:
case 1183:
case 556:
case 1554:
case 298:
case 2660:
case 394:
case 395:
case 2813:
case 443:
case 3129:
case 2047:
case 4033:
case 1544:
case 3470:
case 608:
case 213:
case 3670:
case 2965:
case 711:
case 2264:
case 1193:
case 2684:
case 1775:
case 572:
case 1892:
case 2905:
case 174:
case 40:
case 717:
case 2172:
case 4038:
case 2484:
case 3410:
case 1322:
case 2818:
case 3250:
case 2116:
case 2280:
case 3214:
case 3915:
case 3240:
case 967:
case 1886:
case 887:
case 550:
case 2537:
case 3454:
case 3733:
case 3808:
case 634:
case 2387:
case 2400:
case 1309:
case 3347:
case 3654:
case 1861:
case 81:
case 4079:
case 3997:
case 699:
case 2263:
case 849:
case 1787:
case 3648:
case 1100:
case 2020:
case 2502:
case 2688:
case 869:
case 3015:
case 2581:
case 1235:
case 2488:
case 4034:
case 2840:
case 3541:
case 1934:
case 1543:
case 1038:
case 1553:
case 3576:
case 2722:
case 2850:
case 3719:
case 58:
case 3273:
case 1256:
case 3512:
case 2529:
case 1472:
case 517:
case 1125:
case 2005:
case 3658:
case 338:
case 209:
case 1672:
case 474:
case 49:
case 772:
case 2493:
case 826:
case 3475:
case 1157:
case 681:
case 1391:
case 344:
case 1710:
case 2295:
case 220:
case 364:
case 3122:
case 268:
case 2119:
case 1633:
case 365:
case 583:
case 1754:
case 1889:
case 1362:
case 345:
case 3970:
case 1076:
case 808:
case 3431:
case 3109:
case 1147:
case 2665:
case 1012:
case 193:
case 3487:
case 3953:
case 2762:
case 1976:
case 898:
case 4076:
case 2133:
case 1912:
case 1249:
case 3687:
case 822:
case 2998:
case 2354:
case 1419:
case 2344:
case 3716:
case 3384:
case 2310:
case 3579:
case 2094:
case 1758:
case 3895:
case 2526:
case 3772:
case 1259:
case 1619:
case 2457:
case 2791:
case 2750:
case 1318:
case 1003:
case 2123:
case 140:
case 1373:
case 3356:
case 3371:
case 3819:
case 57:
case 356:
case 739:
case 192:
case 1068:
case 3082:
case 2117:
case 3704:
case 782:
case 2536:
case 257:
case 2361:
case 2545:
case 2052:
case 705:
case 1964:
case 3524:
case 4064:
case 1265:
case 610:
case 2714:
case 1990:
case 595:
case 795:
case 2567:
case 3489:
case 2449:
case 3996:
case 1831:
case 2911:
case 3209:
case 1247:
case 1761:
case 3763:
case 2952:
case 1875:
case 1623:
case 3621:
case 184:
case 1599:
case 4003:
case 3901:
case 2459:
case 2773:
case 1350:
case 539:
case 440:
case 492:
case 2219:
case 3528:
case 4068:
case 1968:
case 370:
case 933:
case 3816:
case 1858:
case 3872:
case 3173:
case 1156:
case 1604:
case 4085:
case 1985:
case 2321:
case 3118:
case 527:
case 3564:
case 3590:
case 2891:
case 816:
case 431:
case 2539:
case 2732:
case 1680:
case 352:
case 786:
case 1135:
case 3099:
case 1480:
case 3349:
case 1582:
case 2180:
case 2435:
case 3140:
case 1288:
case 851:
case 3999:
case 4077:
case 2446:
case 3661:
case 1663:
case 1789:
case 3486:
case 2635:
case 1501:
case 3461:
case 3686:
case 106:
case 3262:
case 82:
case 1332:
case 2646:
case 2656:
case 1293:
case 3492:
case 1024:
case 2104:
case 1596:
case 671:
case 3717:
case 2513:
case 1810:
case 2272:
case 2578:
case 1844:
case 3723:
case 1721:
case 219:
case 11:
case 4093:
case 3991:
case 1993:
case 2337:
case 875:
case 1781:
case 449:
case 3669:
case 1084:
case 2587:
case 1509:
case 3547:
case 1836:
case 1702:
case 1138:
case 2972:
case 3469:
case 1277:
case 66:
case 3299:
case 3557:
case 2434:
case 3626:
case 1228:
case 1370:
case 874:
case 2753:
case 89:
case 1000:
case 64:
case 3906:
case 2120:
case 1729:
case 80:
case 3062:
case 1900:
case 3006:
case 2329:
case 619:
case 2575:
case 2899:
case 1620:
case 254:
case 1088:
case 2016:
case 255:
case 3794:
case 2438:
case 2531:
case 3830:
case 169:
case 3760:
case 2072:
case 2366:
case 26:
case 2638:
case 1737:
case 3565:
case 597:
case 1343:
case 803:
case 3602:
case 3481:
case 3666:
case 108:
case 1874:
case 1839:
case 1506:
case 2919:
case 3338:
case 588:
case 3201:
case 3681:
case 3402:
case 3466:
case 1683:
case 1769:
case 2194:
case 263:
case 741:
case 2651:
case 725:
case 2612:
case 2558:
case 2033:
case 761:
case 2451:
case 2252:
case 413:
case 2412:
case 1726:
case 3429:
case 2211:
case 2544:
case 1047:
case 1112:
case 3379:
case 1397:
case 1151:
case 956:
case 3720:
case 561:
case 2715:
case 1290:
case 525:
case 1264:
case 3334:
case 541:
case 3525:
case 4065:
case 1965:
case 1494:
case 2801:
case 122:
case 3022:
case 2019:
case 788:
case 1694:
case 2183:
case 379:
case 1660:
case 3437:
case 1057:
case 408:
case 2554:
case 200:
case 477:
case 1642:
case 3894:
case 4059:
case 2561:
case 3860:
case 2923:
case 2345:
case 1241:
case 3243:
case 3324:
case 1442:
case 3535:
case 2283:
case 3546:
case 2917:
case 2586:
case 3627:
case 3413:
case 1411:
case 1573:
case 3478:
case 980:
case 662:
case 1212:
case 3032:
case 860:
case 759:
case 3253:
case 1276:
case 1251:
case 2355:
case 892:
case 3678:
case 2298:
case 9:
case 2592:
case 1190:
case 3613:
case 515:
case 3427:
case 1164:
case 690:
case 3196:
case 2464:
case 3898:
case 3007:
case 1049:
case 715:
case 637:
case 600:
case 3377:
case 1399:
case 2664:
case 884:
case 391:
case 2853:
case 1829:
case 3328:
case 3270:
case 965:
case 262:
case 1540:
case 2142:
case 3474:
case 2017:
case 3182:
case 95:
case 885:
case 1881:
case 1514:
case 2260:
case 1736:
case 945:
case 2023:
case 1866:
case 2995:
case 921:
case 1745:
case 3101:
case 2294:
case 242:
case 666:
case 3973:
case 1956:
case 4056:
case 2339:
case 1185:
case 3667:
case 778:
case 332:
case 3805:
case 42:
case 646:
case 389:
case 1124:
case 1507:
case 3549:
case 3559:
case 953:
case 1713:
case 1279:
case 2677:
case 3297:
case 2428:
case 2963:
case 3820:
case 3752:
case 1935:
case 1727:
case 4035:
case 2815:
case 1234:
case 2628:
case 3390:
case 3014:
case 2080:
case 938:
case 1946:
case 3455:
case 3199:
case 1396:
case 3215:
case 1046:
case 3940:
case 3655:
case 2063:
case 229:
case 2424:
case 3645:
case 2685:
case 3073:
case 1056:
case 3436:
case 1071:
case 578:
case 1301:
case 347:
case 3303:
case 3368:
case 1869:
case 1532:
case 3445:
case 2130:
case 1644:
case 3775:
case 1610:
case 1191:
case 39:
case 374:
case 1357:
case 438:
case 3322:
case 3938:
case 2319:
case 1250:
case 4015:
case 1240:
case 2148:
case 2835:
case 92:
case 2846:
case 2765:
case 1454:
case 2594:
case 3079:
case 1808:
case 2026:
case 1162:
case 2560:
case 678:
case 2747:
case 1997:
case 2406:
case 2926:
case 1448:
case 3934:
case 3235:
case 2583:
case 1719:
case 1576:
case 858:
case 1551:
case 1218:
case 2969:
case 2144:
case 3472:
case 1273:
case 3271:
case 2110:
case 3616:
case 2757:
case 30:
case 2598:
case 2292:
case 138:
case 3672:
case 1475:
case 737:
case 144:
case 1393:
case 1817:
case 2725:
case 590:
case 3041:
case 2937:
case 480:
case 1675:
case 1122:
case 1823:
case 165:
case 2505:
case 2849:
case 1388:
case 1970:
case 1053:
case 3433:
case 2700:
case 1431:
case 4070:
case 977:
case 3362:
case 303:
case 145:
case 614:
case 3012:
case 1070:
case 1953:
case 3951:
case 4053:
case 445:
case 1300:
case 879:
case 1487:
case 2929:
case 2131:
case 3165:
case 1687:
case 3249:
case 2609:
case 3758:
case 1384:
case 3597:
case 3419:
case 2221:
case 762:
case 923:
case 2902:
case 464:
case 2966:
case 3619:
case 790:
case 1:
case 2622:
case 214:
case 1325:
case 537:
case 742:
case 4043:
case 3941:
case 500:
case 1943:
case 3373:
case 340:
case 1356:
case 1371:
case 1819:
case 3318:
case 2939:
case 3159:
case 156:
case 328:
case 224:
case 836:
case 2974:
case 2857:
case 2275:
case 3695:
case 763:
case 2308:
case 2847:
case 241:
case 411:
case 1585:
case 3964:
case 2027:
case 3990:
case 1096:
case 2632:
case 1780:
case 2407:
case 3786:
case 3340:
case 1489:
case 2530:
case 3831:
case 2978:
case 3761:
case 624:
case 1763:
case 1689:
case 1209:
case 2607:
case 3257:
case 1982:
case 4082:
case 3792:
case 3875:
case 1577:
case 641:
case 3623:
case 1621:
case 3350:
case 2039:
case 3903:
case 1528:
case 3423:
case 3617:
case 661:
case 302:
case 719:
case 170:
case 926:
case 1359:
case 297:
case 3604:
case 3985:
case 2210:
case 2945:
case 1173:
case 1564:
case 56:
case 2067:
case 3404:
case 2893:
case 1590:
case 555:
case 2161:
case 396:
case 2640:
case 152:
case 3028:
case 3680:
case 3146:
case 2186:
case 2254:
case 607:
case 2414:
case 3480:
case 630:
case 949:
case 3077:
case 1099:
case 3135:
case 2440:
case 2542:
case 2055:
case 3288:
case 1114:
case 3582:
case 3608:
case 1661:
case 1486:
case 3663:
case 3977:
case 2800:
case 3501:
case 1503:
case 452:
case 1206:
case 1461:
case 3463:
case 1568:
case 1686:
case 754:
case 755:
case 2673:
case 76:
case 2825:
case 3596:
case 230:
case 2036:
case 3844:
case 2418:
case 1692:
case 2511:
case 207:
case 3810:
case 2884:
case 2258:
case 3085:
case 1150:
case 2552:
case 3721:
case 31:
case 3781:
case 3025:
case 2741:
case 4091:
case 3836:
case 3509:
case 1547:
case 387:
case 3845:
case 3702:
case 1469:
case 3766:
case 3855:
case 3277:
case 2697:
case 1626:
case 4006:
case 433:
case 3522:
case 4062:
case 3000:
case 3370:
case 2519:
case 2712:
case 3729:
case 1426:
case 2615:
case 2126:
case 1006:
case 1197:
case 3420:
case 2828:
case 2415:
case 853:
case 3620:
case 3088:
case 2048:
case 2877:
case 2954:
case 2533:
case 2169:
case 1794:
case 3285:
case 1830:
case 2910:
case 3605:
case 2236:
case 3867:
case 3405:
case 686:
case 349:
case 3224:
case 673:
case 3925:
case 3737:
case 1565:
case 2383:
case 2305:
case 2075:
case 308:
case 3957:
case 204:
case 845:
case 1666:
case 1588:
case 3483:
case 695:
case 4022:
case 85:
case 985:
case 3506:
case 1922:
case 3839:
case 1402:
case 3769:
case 3683:
case 282:
case 3203:
case 3315:
case 1593:
case 984:
case 2734:
case 1629:
case 2227:
case 694:
case 844:
case 205:
case 2453:
case 3947:
case 2213:
case 3726:
case 902:
case 2572:
case 2320:
case 1584:
case 1811:
case 1379:
case 604:
case 2087:
case 295:
case 2470:
case 940:
case 2931:
case 3047:
case 3878:
case 1720:
case 1852:
case 3151:
case 1153:
case 3176:
case 992:
case 682:
case 2670:
case 928:
case 3827:
case 1525:
case 3965:
case 880:
case 2738:
case 3494:
case 1022:
case 1637:
case 2239:
case 3694:
case 2975:
case 1705:
case 3057:
case 43:
case 605:
case 3959:
case 2401:
case 1730:
case 2682:
case 993:
case 2508:
case 2266:
case 748:
case 1860:
case 2921:
case 1535:
case 2281:
case 2601:
case 1324:
case 720:
case 768:
case 1546:
case 3837:
case 491:
case 1478:
case 101:
case 3212:
case 3411:
case 1253:
case 3276:
case 3251:
case 1427:
case 1678:
case 918:
case 581:
case 2989:
case 4007:
case 2496:
case 3164:
case 3755:
case 1377:
case 3399:
case 2504:
case 1007:
case 3049:
case 2127:
case 3550:
case 401:
case 2812:
case 1270:
case 2113:
case 436:
case 1639:
case 520:
case 1883:
case 2580:
case 3881:
case 1182:
case 3540:
case 2841:
case 3059:
case 2330:
case 377:
case 2785:
case 1674:
case 2021:
case 3802:
case 1918:
case 2269:
case 4018:
case 1667:
case 1973:
case 3956:
case 2838:
case 2703:
case 4073:
case 2768:
case 1805:
case 1742:
case 28:
case 3124:
case 3507:
case 650:
case 2226:
case 1559:
case 3778:
case 2961:
case 1820:
case 3279:
case 672:
case 3234:
case 1040:
case 2517:
case 1014:
case 90:
case 617:
case 1455:
case 2834:
case 4040:
case 3046:
case 2790:
case 4014:
case 99:
case 2086:
case 1914:
case 250:
case 3128:
case 2879:
case 3826:
case 2352:
case 2342:
case 32:
case 3382:
case 167:
case 489:
case 3301:
case 1018:
case 1436:
case 3056:
case 599:
case 351:
case 432:
case 709:
case 1445:
case 3532:
case 3238:
case 734:
case 141:
case 1847:
case 1078:
case 3536:
case 357:
case 1013:
case 1363:
case 1231:
case 3361:
case 3545:
case 3052:
case 513:
case 2107:
case 161:
case 1189:
case 2335:
case 2346:
case 2780:
case 1632:
case 2001:
case 1121:
case 3750:
case 3822:
case 1939:
case 2819:
case 2371:
case 598:
case 3555:
case 611:
case 124:
case 3117:
case 3392:
case 1974:
case 488:
case 2982:
case 722:
case 1304:
case 188:
case 1074:
case 943:
case 1756:
case 1039:
case 2901:
case 508:
case 2222:
case 2421:
case 3567:
case 4027:
case 1735:
case 461:
case 2489:
case 3449:
case 2996:
case 1746:
case 1865:
case 2708:
case 441:
case 1607:
case 425:
case 211:
case 1161:
case 3163:
case 3806:
case 1614:
case 96:
case 252:
case 817:
case 1186:
case 1955:
case 1440:
case 3574:
case 2349:
case 1414:
case 1888:
case 526:
case 197:
case 71:
case 270:
case 430:
case 4036:
case 1936:
case 1450:
case 1945:
case 2795:
case 1210:
case 4045:
case 2118:
case 3321:
case 1244:
case 1067:
case 2564:
case 1192:
case 954:
case 652:
case 3656:
case 2291:
case 1967:
case 2492:
case 2717:
case 107:
case 1511:
case 497:
case 3513:
case 3471:
case 1473:
case 1759:
case 749:
case 2723:
case 1395:
case 51:
case 1258:
case 872:
case 3180:
case 1542:
case 1055:
case 2140:
case 1749:
case 2999:
case 2486:
case 2661:
case 670:
case 3635:
case 2503:
case 1800:
case 2568:
case 2686:
case 2461:
case 3646:
case 2206:
case 2214:
case 1835:
case 716:
case 2240:
case 3600:
case 2915:
case 653:
case 1765:
case 2454:
case 2097:
case 2733:
case 2808:
case 2347:
case 2654:
case 2162:
case 2106:
case 3920:
case 3905:
case 2191:
case 3684:
case 2610:
case 966:
case 3425:
case 1856:
case 3172:
case 1871:
case 3818:
case 3484:
case 2410:
case 3116:
case 3625:
case 52:
case 946:
case 3850:
case 72:
case 2458:
case 2719:
case 3693:
case 2512:
case 1691:
case 1969:
case 4069:
case 2218:
case 751:
case 3375:
case 2658:
case 238:
case 2804:
case 478:
case 1598:
case 1757:
case 3709:
case 1747:
case 335:
case 1406:
case 3331:
case 3263:
case 1333:
case 2648:
case 4026:
case 3688:
case 3502:
case 1926:
case 1286:
case 3488:
case 2365:
case 3581:
case 2448:
case 516:
case 3840:
case 2631:
case 1505:
case 25:
case 3465:
case 3098:
case 3807:
case 1849:
case 680:
case 3348:
case 723:
case 804:
case 245:
case 2431:
case 2053:
case 990:
case 6:
case 942:
case 1029:
case 415:
case 3665:
case 414:
case 2475:
case 577:
case 4037:
case 2043:
case 1725:
case 348:
case 3083:
case 2817:
case 244:
case 3295:
case 3358:
case 2675:
case 1859:
case 1316:
case 2823:
case 264:
case 320:
case 1372:
case 368:
case 2716:
case 65:
case 1422:
case 2384:
case 2579:
case 4002:
case 3060:
case 3526:
case 2:
case 3217:
case 2943:
case 1793:
case 1175:
case 3457:
case 4081:
case 1981:
case 895:
case 894:
case 2487:
case 937:
case 644:
case 1409:
case 3706:
case 900:
case 2070:
case 381:
case 87:
case 3762:
case 3133:
case 4029:
case 1929:
case 3647:
case 2207:
case 664:
case 3998:
case 459:
case 3354:
case 483:
case 2413:
case 2571:
case 201:
case 2556:
case 824:
case 236:
case 3298:
case 3355:
case 2907:
case 593:
case 3336:
case 981:
case 1202:
case 337:
case 3403:
case 1508:
case 2894:
case 2730:
case 1682:
case 3095:
case 2385:
case 1563:
case 1921:
case 518:
case 3345:
case 2324:
case 2243:
case 1482:
case 1601:
case 3283:
case 1174:
case 2546:
case 841:
case 3668:
case 3586:
case 3917:
case 3142:
case 601:
case 362:
case 1841:
case 2883:
case 3260:
case 1021:
case 3995:
case 3023:
case 342:
case 3294:
case 3464:
case 503:
case 2007:
case 3490:
case 1127:
case 2898:
case 1504:
case 2377:
case 948:
case 3664:
case 1851:
case 888:
case 1178:
case 3690:
case 176:
case 920:
case 2328:
case 3111:
case 2559:
case 2711:
case 450:
case 2297:
case 1699:
case 3677:
case 3963:
case 2752:
case 3521:
case 667:
case 1961:
case 775:
case 2364:
case 1986:
case 3080:
case 2014:
case 2390:
case 1517:
case 897:
case 3628:
case 934:
case 1155:
case 2040:
case 3477:
case 909:
case 1838:
case 1703:
case 2050:
case 2973:
case 1145:
case 50:
case 935:
case 2667:
case 3339:
case 472:
case 774:
case 1136:
case 4092:
case 1992:
case 2805:
case 2742:
case 3782:
case 3374:
case 289:
case 2549:
case 3424:
case 267:
case 1342:
case 3205:
case 48:
case 3904:
case 574:
case 2073:
case 247:
case 3624:
case 2018:
case 3485:
case 2368:
case 70:
case 2445:
case 3130:
case 632:
case 2199:
case 1764:
case 2455:
case 3327:
case 3980:
case 2940:
case 575:
case 2215:
case 999:
case 366:
case 1311:
case 3897:
case 689:
case 3378:
case 3220:
case 1352:
case 346:
case 3063:
case 506:
case 796:
case 2798:
case 2557:
case 2115:
case 2626:
case 1497:
case 3120:
case 2906:
case 1776:
case 2962:
case 2426:
case 3634:
case 1712:
case 1824:
case 633:
case 1267:
case 3337:
case 3587:
case 3916:
case 4058:
case 2547:
case 658:
case 1958:
case 3972:
case 427:
case 1360:
case 1885:
case 4044:
case 2830:
case 1944:
case 1533:
case 2794:
case 2760:
case 3072:
case 36:
case 1236:
case 2565:
case 1383:
case 3381:
case 2091:
case 2351:
case 473:
case 1126:
case 2006:
case 233:
case 3770:
case 1615:
case 2062:
case 2197:
case 486:
case 596:
case 3575:
case 1048:
case 1877:
case 1954:
case 1255:
case 354:
case 3651:
case 3676:
case 1653:
case 1227:
case 2593:
case 3612:
case 1031:
case 1779:
case 3476:
case 3558:
case 1516:
case 1320:
case 910:
case 3211:
case 2170:
case 1213:
case 2429:
case 1137:
case 502:
case 1075:
case 2666:
case 494:
case 2588:
case 23:
case 3242:
case 104:
case 1443:
case 792:
case 2282:
case 584:
case 2922:
case 3160:
case 760:
case 1643:
case 3641:
case 182:
case 2500:
case 3019:
case 3369:
case 560:
case 784:
case 1868:
case 1975:
case 3882:
case 815:
case 1274:
case 3183:
case 3554:
case 2437:
case 702:
case 1931:
case 1129:
case 1470:
case 3544:
case 4031:
case 1087:
case 195:
case 63:
case 2811:
case 405:
case 814:
case 2852:
case 2720:
case 785:
case 3198:
case 2525:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1746054001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,];
var gg_b = "1746054001/";

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
