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
case 2808:
case 2135:
case 1490:
case 1802:
case 3070:
case 192:
case 1283:
case 1949:
case 1401:
case 1619:
case 1658:
case 3834:
case 876:
case 2218:
case 2835:
case 3773:
case 188:
case 3667:
case 3522:
case 4038:
case 3895:
case 1083:
case 889:
case 2587:
case 2640:
case 2842:
case 1081:
case 623:
case 1669:
case 3996:
case 95:
case 2623:
case 1124:
case 2505:
case 3504:
case 2420:
case 275:
case 2936:
case 24:
case 2909:
case 524:
case 407:
case 2142:
case 1403:
case 1281:
case 1148:
case 3947:
case 2268:
case 1600:
case 3617:
case 2048:
case 3157:
case 2224:
case 1250:
case 2482:
case 1649:
case 2322:
case 1868:
case 1515:
case 162:
case 2952:
case 2862:
case 1958:
case 729:
case 768:
case 1919:
case 1488:
case 3387:
case 3427:
case 1328:
case 1050:
case 2024:
case 3025:
case 1242:
case 2499:
case 3857:
case 2248:
case 506:
case 802:
case 3678:
case 2351:
case 2921:
case 337:
case 1571:
case 1704:
case 2398:
case 1573:
case 269:
case 2923:
case 3696:
case 1969:
case 3286:
case 1392:
case 3338:
case 2728:
case 2411:
case 983:
case 1684:
case 2183:
case 1294:
case 363:
case 2609:
case 3086:
case 2660:
case 1991:
case 6:
case 1035:
case 2112:
case 2277:
case 580:
case 770:
case 1900:
case 2883:
case 501:
case 874:
case 1429:
case 830:
case 1751:
case 1094:
case 2463:
case 2342:
case 2663:
case 164:
case 652:
case 191:
case 1708:
case 824:
case 1903:
case 2244:
case 1276:
case 720:
case 3245:
case 1022:
case 278:
case 2436:
case 1570:
case 29:
case 1864:
case 1637:
case 2920:
case 2350:
case 1324:
case 700:
case 249:
case 1076:
case 1222:
case 2180:
case 3045:
case 2228:
case 781:
case 1794:
case 1051:
case 1053:
case 2557:
case 2092:
case 716:
case 3639:
case 3606:
case 1742:
case 1098:
case 1302:
case 3032:
case 88:
case 2613:
case 185:
case 196:
case 53:
case 2699:
case 2289:
case 732:
case 1750:
case 1298:
case 3627:
case 3725:
case 576:
case 2682:
case 1449:
case 2292:
case 1901:
case 3581:
case 1814:
case 2661:
case 3232:
case 1004:
case 3562:
case 2975:
case 194:
case 3417:
case 1781:
case 3974:
case 1318:
case 1929:
case 2579:
case 1892:
case 2853:
case 161:
case 1525:
case 2214:
case 1603:
case 2104:
case 1491:
case 821:
case 3056:
case 477:
case 2198:
case 26:
case 3542:
case 2911:
case 2153:
case 530:
case 1469:
case 574:
case 2383:
case 3256:
case 3805:
case 2423:
case 3015:
case 2264:
case 2440:
case 2534:
case 3265:
case 1712:
case 2718:
case 290:
case 3770:
case 2759:
case 1586:
case 2913:
case 2151:
case 3594:
case 1080:
case 455:
case 70:
case 2999:
case 2362:
case 317:
case 1988:
case 1419:
case 502:
case 3927:
case 3508:
case 2452:
case 1493:
case 2982:
case 1601:
case 3073:
case 2851:
case 1280:
case 1690:
case 1128:
case 3187:
case 564:
case 2390:
case 591:
case 3017:
case 212:
case 1810:
case 1994:
case 757:
case 1539:
case 2223:
case 3456:
case 1506:
case 245:
case 3986:
case 2741:
case 1269:
case 1754:
case 4046:
case 3471:
case 1662:
case 3366:
case 3107:
case 236:
case 3172:
case 1343:
case 3:
case 2849:
case 3826:
case 1110:
case 282:
case 2902:
case 1291:
case 1681:
case 171:
case 841:
case 1258:
case 799:
case 1219:
case 1136:
case 1790:
case 433:
case 3185:
case 2252:
case 1293:
case 3355:
case 1950:
case 2354:
case 585:
case 1320:
case 74:
case 892:
case 596:
case 354:
case 1574:
case 835:
case 3473:
case 3465:
case 888:
case 1093:
case 2052:
case 2597:
case 2743:
case 176:
case 3885:
case 2884:
case 2948:
case 3267:
case 3537:
case 231:
case 637:
case 1160:
case 2618:
case 2119:
case 594:
case 1361:
case 3047:
case 1840:
case 2193:
case 561:
case 1422:
case 3686:
case 1382:
case 268:
case 2428:
case 2711:
case 693:
case 2968:
case 1852:
case 3590:
case 497:
case 2775:
case 3501:
case 174:
case 2602:
case 1981:
case 4055:
case 1729:
case 2260:
case 1476:
case 209:
case 3397:
case 2010:
case 2492:
case 1453:
case 3503:
case 1788:
case 2169:
case 2337:
case 2891:
case 1650:
case 2624:
case 862:
case 566:
case 2782:
case 102:
case 3131:
case 1049:
case 2210:
case 2799:
case 3278:
case 2869:
case 2191:
case 1823:
case 2648:
case 2329:
case 3739:
case 3346:
case 1363:
case 234:
case 3970:
case 270:
case 1375:
case 2710:
case 2689:
case 1442:
case 2213:
case 518:
case 2061:
case 592:
case 3116:
case 3855:
case 3206:
case 535:
case 3569:
case 1820:
case 2964:
case 1841:
case 1360:
case 3973:
case 1517:
case 842:
case 1309:
case 546:
case 838:
case 3385:
case 79:
case 2803:
case 3425:
case 588:
case 3591:
case 3816:
case 3155:
case 2282:
case 2154:
case 1120:
case 281:
case 1653:
case 1698:
case 3006:
case 3227:
case 815:
case 200:
case 3747:
case 1408:
case 3307:
case 891:
case 1676:
case 3519:
case 1143:
case 2477:
case 2914:
case 1651:
case 2402:
case 3593:
case 864:
case 2760:
case 3830:
case 2263:
case 2533:
case 1037:
case 3971:
case 1784:
case 2628:
case 286:
case 3486:
case 2709:
case 248:
case 373:
case 104:
case 1494:
case 1567:
case 1029:
case 1237:
case 3074:
case 3796:
case 3470:
case 3897:
case 3331:
case 907:
case 1090:
case 3584:
case 4026:
case 1904:
case 2585:
case 705:
case 1001:
case 2129:
case 1175:
case 2664:
case 3932:
case 3197:
case 1290:
case 927:
case 1201:
case 2137:
case 1111:
case 1483:
case 3846:
case 2829:
case 1875:
case 1863:
case 725:
case 284:
case 2944:
case 790:
case 861:
case 1340:
case 1199:
case 3717:
case 3615:
case 1321:
case 2614:
case 3549:
case 1113:
case 1203:
case 1882:
case 447:
case 2041:
case 1054:
case 643:
case 2319:
case 1003:
case 1899:
case 2507:
case 2393:
case 1922:
case 265:
case 180:
case 1254:
case 2723:
case 544:
case 2241:
case 1769:
case 3221:
case 3743:
case 2885:
case 3052:
case 3597:
case 3240:
case 183:
case 3618:
case 4088:
case 331:
case 1511:
case 1896:
case 640:
case 48:
case 2267:
case 3252:
case 472:
case 3040:
case 113:
case 3546:
case 2529:
case 2067:
case 1563:
case 2925:
case 41:
case 1979:
case 2355:
case 3924:
case 382:
case 3668:
case 2:
case 3849:
case 2826:
case 1561:
case 336:
case 2217:
case 2366:
case 2107:
case 3023:
case 2588:
case 507:
case 1582:
case 4037:
case 3902:
case 2415:
case 3149:
case 1878:
case 2126:
case 2017:
case 1599:
case 1934:
case 1657:
case 404:
case 3720:
case 37:
case 345:
case 2986:
case 3741:
case 398:
case 2456:
case 4090:
case 453:
case 3210:
case 1117:
case 2131:
case 1207:
case 3713:
case 334:
case 855:
case 3918:
case 3489:
case 2346:
case 2706:
case 3191:
case 3869:
case 4001:
case 3761:
case 1007:
case 2503:
case 1226:
case 558:
case 1817:
case 2078:
case 2831:
case 941:
case 2397:
case 406:
case 3782:
case 763:
case 3891:
case 3624:
case 1438:
case 3337:
case 2625:
case 251:
case 2727:
case 2590:
case 3893:
case 3036:
case 3858:
case 3819:
case 992:
case 3530:
case 918:
case 877:
case 3260:
case 147:
case 421:
case 2501:
case 4054:
case 3677:
case 3763:
case 699:
case 1695:
case 3193:
case 3158:
case 3119:
case 3236:
case 2047:
case 3428:
case 1327:
case 3388:
case 2133:
case 368:
case 1867:
case 3060:
case 2686:
case 966:
case 2956:
case 332:
case 3736:
case 2486:
case 3349:
case 3190:
case 3709:
case 386:
case 1785:
case 1687:
case 1297:
case 1434:
case 2971:
case 3101:
case 1046:
case 2074:
case 1495:
case 625:
case 4091:
case 2915:
case 3914:
case 1378:
case 3890:
case 2519:
case 2747:
case 2645:
case 1246:
case 3275:
case 2830:
case 605:
case 4069:
case 827:
case 3760:
case 471:
case 1479:
case 3384:
case 3424:
case 2385:
case 3803:
case 2632:
case 133:
case 3013:
case 2006:
case 2039:
case 3692:
case 994:
case 2155:
case 690:
case 3061:
case 3448:
case 1707:
case 3103:
case 2778:
case 3710:
case 476:
case 3689:
case 3082:
case 3964:
case 311:
case 2116:
case 2855:
case 1523:
case 365:
case 3393:
case 996:
case 985:
case 3358:
case 1457:
case 3507:
case 678:
case 3572:
case 3319:
case 32:
case 1127:
case 3241:
case 1016:
case 2333:
case 3723:
case 1255:
case 3614:
case 2717:
case 252:
case 4084:
case 1731:
case 2945:
case 197:
case 1055:
case 938:
case 3020:
case 474:
case 430:
case 3468:
case 1139:
case 3041:
case 1938:
case 2932:
case 1230:
case 384:
case 1874:
case 2846:
case 991:
case 1733:
case 964:
case 3369:
case 3740:
case 402:
case 2584:
case 3721:
case 1266:
case 1317:
case 2470:
case 2897:
case 1509:
case 2673:
case 2767:
case 1030:
case 2879:
case 3850:
case 464:
case 1592:
case 2553:
case 1825:
case 1365:
case 3142:
case 491:
case 2715:
case 2617:
case 1631:
case 3714:
case 3538:
case 4022:
case 1416:
case 3268:
case 399:
case 2179:
case 3150:
case 1125:
case 2996:
case 1257:
case 850:
case 1589:
case 375:
case 34:
case 3441:
case 4076:
case 3380:
case 668:
case 4051:
case 1985:
case 3420:
case 1455:
case 902:
case 3505:
case 2773:
case 2667:
case 3835:
case 7:
case 3108:
case 1466:
case 3218:
case 3640:
case 634:
case 485:
case 1907:
case 1972:
case 2522:
case 2978:
case 3910:
case 813:
case 442:
case 438:
case 1633:
case 930:
case 974:
case 357:
case 1544:
case 2551:
case 2195:
case 3277:
case 93:
case 3112:
case 2086:
case 461:
case 636:
case 3660:
case 1170:
case 3475:
case 3463:
case 1931:
case 3883:
case 3744:
case 2580:
case 847:
case 612:
case 2696:
case 2286:
case 3812:
case 597:
case 1870:
case 989:
case 751:
case 3636:
case 1332:
case 3183:
case 3728:
case 1295:
case 3411:
case 3413:
case 3181:
case 2967:
case 3499:
case 703:
case 237:
case 1607:
case 2439:
case 466:
case 2406:
case 155:
case 3351:
case 756:
case 1279:
case 3224:
case 1933:
case 3048:
case 2387:
case 3952:
case 3482:
case 3322:
case 4012:
case 1930:
case 3335:
case 3724:
case 2334:
case 2562:
case 435:
case 1171:
case 492:
case 2232:
case 2395:
case 1238:
case 1156:
case 2639:
case 446:
case 2606:
case 2478:
case 980:
case 1407:
case 1038:
case 3699:
case 614:
case 3289:
case 1871:
case 4083:
case 2032:
case 1734:
case 4081:
case 1955:
case 2512:
case 2379:
case 3611:
case 3436:
case 39:
case 3941:
case 1559:
case 3409:
case 2786:
case 378:
case 1865:
case 1795:
case 1287:
case 107:
case 953:
case 2496:
case 2674:
case 1646:
case 1165:
case 2245:
case 441:
case 3460:
case 1087:
case 3982:
case 1502:
case 4042:
case 2357:
case 1630:
case 2927:
case 3876:
case 2187:
case 681:
case 3851:
case 3122:
case 390:
case 2939:
case 3421:
case 2906:
case 3718:
case 3440:
case 752:
case 2535:
case 3264:
case 3643:
case 1145:
case 1666:
case 611:
case 3822:
case 632:
case 3153:
case 695:
case 1548:
case 1757:
case 36:
case 3641:
case 2015:
case 1997:
case 547:
case 3383:
case 2256:
case 325:
case 1616:
case 3579:
case 1524:
case 616:
case 1946:
case 4035:
case 3963:
case 1832:
case 3768:
case 4094:
case 2105:
case 444:
case 972:
case 2071:
case 3214:
case 2838:
case 3104:
case 2160:
case 131:
case 3033:
case 655:
case 1948:
case 2612:
case 1221:
case 3147:
case 3766:
case 963:
case 2093:
case 2836:
case 1597:
case 2809:
case 1240:
case 383:
case 2574:
case 2860:
case 2341:
case 2701:
case 3563:
case 2320:
case 3730:
case 1354:
case 857:
case 2480:
case 4006:
case 4039:
case 2950:
case 1924:
case 3847:
case 2683:
case 1184:
case 2293:
case 560:
case 2136:
case 1021:
case 2258:
case 2069:
case 271:
case 3582:
case 1414:
case 1977:
case 677:
case 2681:
case 2291:
case 1902:
case 2110:
case 1668:
case 1849:
case 746:
case 3178:
case 2343:
case 136:
case 2703:
case 2662:
case 578:
case 3231:
case 3934:
case 792:
case 4074:
case 3755:
case 1720:
case 350:
case 145:
case 17:
case 84:
case 198:
case 1149:
case 3031:
case 2000:
case 899:
case 1959:
case 2375:
case 1329:
case 2642:
case 1489:
case 1191:
case 3405:
case 1648:
case 1869:
case 993:
case 1100:
case 1713:
case 3272:
case 1782:
case 1516:
case 2311:
case 1169:
case 3007:
case 2249:
case 3072:
case 1800:
case 2498:
case 1010:
case 1530:
case 109:
case 2608:
case 1260:
case 347:
case 1602:
case 2729:
case 3167:
case 2451:
case 1775:
case 230:
case 2313:
case 1893:
case 2140:
case 3085:
case 2962:
case 2084:
case 452:
case 1819:
case 56:
case 1428:
case 3634:
case 129:
case 168:
case 3867:
case 2382:
case 3797:
case 3695:
case 2821:
case 2152:
case 1158:
case 1566:
case 1236:
case 179:
case 849:
case 715:
case 2029:
case 1101:
case 3495:
case 1211:
case 204:
case 1075:
case 2494:
case 89:
case 148:
case 132:
case 195:
case 2435:
case 1628:
case 3297:
case 3687:
case 738:
case 2784:
case 4017:
case 1533:
case 1011:
case 1275:
case 1801:
case 796:
case 1760:
case 599:
case 3097:
case 1402:
case 2310:
case 2651:
case 987:
case 2143:
case 116:
case 2676:
case 100:
case 2288:
case 1282:
case 3396:
case 1154:
case 3479:
case 2980:
case 3638:
case 2749:
case 2517:
case 1531:
case 1013:
case 2360:
case 28:
case 2841:
case 111:
case 1854:
case 2088:
case 3523:
case 3707:
case 3347:
case 1061:
case 658:
case 764:
case 1213:
case 1103:
case 2442:
case 1689:
case 12:
case 2769:
case 3016:
case 1241:
case 201:
case 1723:
case 3255:
case 280:
case 2254:
case 2813:
case 2922:
case 2578:
case 423:
case 3510:
case 1393:
case 2352:
case 4047:
case 1358:
case 2899:
case 2161:
case 1572:
case 508:
case 3987:
case 627:
case 3827:
case 2462:
case 3367:
case 1468:
case 3106:
case 210:
case 2882:
case 2113:
case 1526:
case 2203:
case 2481:
case 528:
case 403:
case 2340:
case 2199:
case 2861:
case 2976:
case 2998:
case 3230:
case 3874:
case 451:
case 1829:
case 3560:
case 540:
case 1137:
case 2111:
case 2719:
case 3066:
case 2680:
case 1043:
case 206:
case 2793:
case 114:
case 1664:
case 2163:
case 1129:
case 2001:
case 1391:
case 2811:
case 2904:
case 1740:
case 3905:
case 890:
case 253:
case 1418:
case 3536:
case 761:
case 226:
case 1243:
case 1714:
case 647:
case 548:
case 2281:
case 1850:
case 3592:
case 595:
case 3825:
case 2364:
case 586:
case 882:
case 776:
case 845:
case 4045:
case 719:
case 14:
case 898:
case 1909:
case 1441:
case 2062:
case 199:
case 2848:
case 1623:
case 812:
case 516:
case 2081:
case 1842:
case 3257:
case 1640:
case 65:
case 3907:
case 500:
case 4032:
case 2083:
case 1587:
case 3972:
case 771:
case 3315:
case 2102:
case 288:
case 2212:
case 2177:
case 1764:
case 3886:
case 1259:
case 2545:
case 903:
case 3371:
case 2780:
case 2401:
case 2949:
case 520:
case 1652:
case 292:
case 2283:
case 1018:
case 3186:
case 52:
case 3446:
case 3095:
case 2429:
case 809:
case 377:
case 1744:
case 702:
case 2991:
case 3170:
case 108:
case 2159:
case 829:
case 1609:
case 650:
case 4015:
case 2684:
case 2437:
case 3685:
case 1411:
case 3295:
case 2008:
case 128:
case 1923:
case 2573:
case 2818:
case 722:
case 3870:
case 2235:
case 2859:
case 730:
case 3672:
case 3345:
case 2168:
case 870:
case 1789:
case 2556:
case 140:
case 355:
case 1351:
case 417:
case 1499:
case 2242:
case 1024:
case 2050:
case 3079:
case 683:
case 2919:
case 2488:
case 3738:
case 2328:
case 9:
case 1952:
case 2868:
case 1482:
case 2798:
case 2042:
case 1881:
case 3279:
case 3933:
case 4065:
case 4073:
case 1048:
case 2753:
case 613:
case 2004:
case 3171:
case 1661:
case 3005:
case 952:
case 215:
case 531:
case 3815:
case 1292:
case 2901:
case 2449:
case 1682:
case 2253:
case 3426:
case 3930:
case 2688:
case 4070:
case 820:
case 3038:
case 1289:
case 659:
case 3856:
case 2742:
case 160:
case 2377:
case 3472:
case 1092:
case 1308:
case 3407:
case 1557:
case 739:
case 3287:
case 3795:
case 3697:
case 307:
case 2222:
case 1180:
case 149:
case 2076:
case 1044:
case 2324:
case 3734:
case 1350:
case 582:
case 886:
case 772:
case 2637:
case 2954:
case 1920:
case 2570:
case 3559:
case 3865:
case 3518:
case 327:
case 2022:
case 1460:
case 2276:
case 57:
case 2251:
case 2903:
case 3087:
case 598:
case 2708:
case 2348:
case 3916:
case 2164:
case 3646:
case 1342:
case 3165:
case 534:
case 1876:
case 780:
case 3845:
case 2783:
case 884:
case 701:
case 1122:
case 3502:
case 2458:
case 3630:
case 633:
case 2988:
case 1176:
case 2144:
case 266:
case 2828:
case 3145:
case 2080:
case 1362:
case 3666:
case 814:
case 437:
case 1822:
case 1595:
case 2586:
case 1421:
case 358:
case 2712:
case 1264:
case 3997:
case 1014:
case 2889:
case 82:
case 1423:
case 125:
case 463:
case 1804:
case 2192:
case 1153:
case 2654:
case 3757:
case 865:
case 706:
case 1198:
case 80:
case 1768:
case 2189:
case 105:
case 2762:
case 568:
case 1214:
case 1104:
case 4086:
case 2892:
case 261:
case 726:
case 1579:
case 3616:
case 753:
case 2400:
case 2359:
case 1898:
case 294:
case 2356:
case 392:
case 3693:
case 854:
case 3401:
case 1551:
case 2926:
case 1195:
case 1576:
case 3619:
case 3780:
case 3658:
case 1134:
case 3012:
case 3877:
case 3490:
case 318:
case 3802:
case 909:
case 3314:
case 2528:
case 3083:
case 2972:
case 2466:
case 968:
case 1270:
case 346:
case 3102:
case 1773:
case 1667:
case 3984:
case 1771:
case 2455:
case 3454:
case 2985:
case 449:
case 2589:
case 3081:
case 478:
case 49:
case 934:
case 3124:
case 2416:
case 630:
case 674:
case 1617:
case 1715:
case 2631:
case 2365:
case 2373:
case 3364:
case 1598:
case 2825:
case 3148:
case 573:
case 3649:
case 2514:
case 619:
case 2626:
case 3515:
case 3993:
case 936:
case 3958:
case 851:
case 982:
case 3488:
case 3919:
case 4064:
case 3753:
case 2933:
case 3798:
case 689:
case 255:
case 1678:
case 1406:
case 3556:
case 137:
case 2345:
case 2705:
case 3571:
case 3704:
case 2672:
case 3050:
case 2079:
case 97:
case 945:
case 2685:
case 4014:
case 2295:
case 3294:
case 425:
case 163:
case 2870:
case 3859:
case 2497:
case 3008:
case 3392:
case 823:
case 1580:
case 405:
case 1745:
case 1305:
case 277:
case 2446:
case 2095:
case 1917:
case 671:
case 3429:
case 2170:
case 1086:
case 803:
case 3991:
case 2087:
case 1583:
case 3251:
case 3022:
case 227:
case 2646:
case 2165:
case 1447:
case 44:
case 3076:
case 207:
case 1496:
case 2287:
case 2795:
case 2697:
case 3051:
case 3794:
case 2873:
case 2865:
case 143:
case 1786:
case 3864:
case 2559:
case 5:
case 3954:
case 2485:
case 3324:
case 3484:
case 2955:
case 1032:
case 2115:
case 2856:
case 2205:
case 385:
case 3204:
case 2038:
case 2871:
case 653:
case 1478:
case 1639:
case 3302:
case 3098:
case 3742:
case 2568:
case 2815:
case 2156:
case 315:
case 1395:
case 3990:
case 1232:
case 2171:
case 4018:
case 1334:
case 3750:
case 4059:
case 1725:
case 3901:
case 606:
case 2426:
case 338:
case 1071:
case 3603:
case 3762:
case 1215:
case 3189:
case 1056:
case 3359:
case 394:
case 2370:
case 3318:
case 2946:
case 1974:
case 3781:
case 2431:
case 981:
case 3929:
case 523:
case 2616:
case 1550:
case 3400:
case 2524:
case 3892:
case 3525:
case 604:
case 3469:
case 1256:
case 3889:
case 920:
case 911:
case 4002:
case 2548:
case 3192:
case 503:
case 551:
case 986:
case 3368:
case 1467:
case 68:
case 995:
case 440:
case 3080:
case 117:
case 2666:
case 948:
case 3828:
case 366:
case 932:
case 1887:
case 1535:
case 1273:
case 3712:
case 1265:
case 4024:
case 258:
case 1770:
case 979:
case 639:
case 3280:
case 61:
case 3128:
case 3844:
case 1187:
case 2630:
case 672:
case 3419:
case 1508:
case 3458:
case 1357:
case 4048:
case 3493:
case 1073:
case 1456:
case 250:
case 3269:
case 893:
case 4063:
case 3754:
case 4075:
case 2934:
case 2657:
case 2755:
case 495:
case 940:
case 2599:
case 1807:
case 3000:
case 448:
case 2031:
case 2513:
case 2995:
case 1017:
case 1126:
case 2878:
case 3810:
case 3994:
case 4011:
case 1588:
case 3527:
case 371:
case 3069:
case 1217:
case 3662:
case 543:
case 1107:
case 2231:
case 2561:
case 3703:
case 1826:
case 416:
case 3200:
case 319:
case 2979:
case 3950:
case 908:
case 3320:
case 1925:
case 3480:
case 2196:
case 1067:
case 33:
case 154:
case 3574:
case 2233:
case 1529:
case 3258:
case 3136:
case 4013:
case 3683:
case 3293:
case 389:
case 2896:
case 2511:
case 420:
case 3942:
case 3160:
case 1473:
case 4061:
case 376:
case 1885:
case 3058:
case 2766:
case 3382:
case 1686:
case 863:
case 2867:
case 3635:
case 2327:
case 156:
case 2543:
case 465:
case 3840:
case 123:
case 3821:
case 3152:
case 3694:
case 2695:
case 330:
case 374:
case 2339:
case 2167:
case 1096:
case 1445:
case 3608:
case 4041:
case 755:
case 40:
case 3140:
case 3399:
case 3962:
case 2085:
case 1247:
case 957:
case 3313:
case 1590:
case 3788:
case 692:
case 1727:
case 2679:
case 484:
case 635:
case 3123:
case 3650:
case 517:
case 1397:
case 4043:
case 618:
case 2007:
case 3249:
case 2520:
case 3823:
case 3912:
case 777:
case 587:
case 1346:
case 1970:
case 999:
case 3375:
case 302:
case 2272:
case 2117:
case 2026:
case 646:
case 3049:
case 1131:
case 975:
case 94:
case 688:
case 1239:
case 1116:
case 727:
case 1855:
case 3820:
case 38:
case 431:
case 666:
case 2605:
case 2347:
case 4052:
case 1155:
case 339:
case 3141:
case 1227:
case 1039:
case 707:
case 3309:
case 3749:
case 1385:
case 3980:
case 1425:
case 2479:
case 3450:
case 4023:
case 2246:
case 593:
case 3037:
case 1558:
case 694:
case 3143:
case 1372:
case 482:
case 2378:
case 3651:
case 3567:
case 3237:
case 3029:
case 2495:
case 1074:
case 2046:
case 1130:
case 498:
case 445:
case 3784:
case 2687:
case 2785:
case 1326:
case 3622:
case 1486:
case 2521:
case 3811:
case 685:
case 470:
case 2030:
case 2174:
case 696:
case 1146:
case 1665:
case 3163:
case 2536:
case 1897:
case 3412:
case 3904:
case 3201:
case 3111:
case 3953:
case 2733:
case 615:
case 3323:
case 3483:
case 1846:
case 2560:
case 3998:
case 3863:
case 3793:
case 3758:
case 306:
case 4010:
case 3719:
case 642:
case 3680:
case 3290:
case 3882:
case 3054:
case 2055:
case 4009:
case 3861:
case 3976:
case 4036:
case 1945:
case 664:
case 3340:
case 3700:
case 1615:
case 3481:
case 2731:
case 691:
case 1549:
case 3182:
case 380:
case 2839:
case 2255:
case 2806:
case 4060:
case 3769:
case 2510:
case 3352:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1762660801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,];
var gg_b = "1762660801/";

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
