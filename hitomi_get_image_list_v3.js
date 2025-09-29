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
case 2104:
case 3512:
case 2970:
case 2310:
case 2787:
case 1982:
case 1468:
case 4016:
case 92:
case 2622:
case 3053:
case 3822:
case 140:
case 1378:
case 1109:
case 2952:
case 3740:
case 1757:
case 1945:
case 1357:
case 1790:
case 1665:
case 4051:
case 39:
case 1868:
case 2630:
case 3995:
case 675:
case 620:
case 635:
case 367:
case 3773:
case 3176:
case 1077:
case 2088:
case 2663:
case 2179:
case 393:
case 276:
case 2292:
case 3507:
case 412:
case 722:
case 1174:
case 1726:
case 1123:
case 1671:
case 590:
case 2708:
case 712:
case 1818:
case 1445:
case 2870:
case 3901:
case 2192:
case 2506:
case 34:
case 1882:
case 3495:
case 3930:
case 2898:
case 3509:
case 1188:
case 1482:
case 4066:
case 2023:
case 1112:
case 1418:
case 758:
case 1845:
case 190:
case 1537:
case 1741:
case 1384:
case 2062:
case 231:
case 1400:
case 3813:
case 1831:
case 1341:
case 2389:
case 540:
case 4047:
case 2443:
case 1107:
case 2225:
case 3413:
case 1800:
case 899:
case 1759:
case 6:
case 91:
case 580:
case 374:
case 2843:
case 2333:
case 1576:
case 139:
case 2354:
case 1359:
case 1693:
case 2204:
case 2754:
case 179:
case 1262:
case 3183:
case 383:
case 2136:
case 2733:
case 646:
case 1189:
case 148:
case 2899:
case 2307:
case 2505:
case 3334:
case 922:
case 3699:
case 2290:
case 1078:
case 3844:
case 637:
case 1902:
case 356:
case 3203:
case 1616:
case 365:
case 2681:
case 1649:
case 3156:
case 2964:
case 3881:
case 3734:
case 1419:
case 3040:
case 1846:
case 1494:
case 245:
case 2524:
case 4065:
case 2278:
case 219:
case 686:
case 3111:
case 3275:
case 2499:
case 1133:
case 1736:
case 723:
case 413:
case 3614:
case 2696:
case 509:
case 1392:
case 3742:
case 126:
case 3024:
case 1792:
case 2997:
case 3073:
case 450:
case 3510:
case 598:
case 3432:
case 2788:
case 516:
case 2135:
case 1777:
case 41:
case 1980:
case 3587:
case 2620:
case 969:
case 2388:
case 4071:
case 2008:
case 1026:
case 3261:
case 1917:
case 3129:
case 342:
case 3554:
case 2586:
case 3161:
case 2864:
case 3981:
case 3238:
case 1260:
case 3944:
case 71:
case 1821:
case 2323:
case 696:
case 1469:
case 2914:
case 116:
case 198:
case 1779:
case 800:
case 838:
case 1421:
case 2591:
case 351:
case 1402:
case 1108:
case 382:
case 3227:
case 2774:
case 878:
case 1919:
case 2464:
case 641:
case 2897:
case 1254:
case 3175:
case 3932:
case 2178:
case 2309:
case 1041:
case 2089:
case 3697:
case 958:
case 713:
case 1480:
case 2850:
case 2709:
case 1084:
case 201:
case 3091:
case 3650:
case 1647:
case 2259:
case 511:
case 1059:
case 3706:
case 2450:
case 3103:
case 2284:
case 3256:
case 2872:
case 1527:
case 1325:
case 4093:
case 2497:
case 2190:
case 3672:
case 2033:
case 912:
case 1429:
case 294:
case 2599:
case 3808:
case 2020:
case 1461:
case 1771:
case 2608:
case 921:
case 3267:
case 2763:
case 3933:
case 2166:
case 3954:
case 1911:
case 1594:
case 255:
case 266:
case 3169:
case 3989:
case 2873:
case 377:
case 2032:
case 1519:
case 3673:
case 3596:
case 1829:
case 1220:
case 1861:
case 790:
case 1956:
case 391:
case 4036:
case 3487:
case 1690:
case 1765:
case 2096:
case 3014:
case 2730:
case 1244:
case 1365:
case 3410:
case 1803:
case 2330:
case 2216:
case 3294:
case 998:
case 3117:
case 2840:
case 916:
case 1281:
case 2722:
case 2081:
case 1927:
case 1403:
case 2147:
case 3246:
case 3219:
case 739:
case 2044:
case 1875:
case 1296:
case 328:
case 1678:
case 3099:
case 396:
case 2886:
case 318:
case 2151:
case 3489:
case 1811:
case 1793:
case 3854:
case 3343:
case 2633:
case 169:
case 2564:
case 3072:
case 3743:
case 3146:
case 1569:
case 3908:
case 1659:
case 1393:
case 2905:
case 1521:
case 364:
case 3119:
case 341:
case 1456:
case 2491:
case 740:
case 642:
case 261:
case 244:
case 1961:
case 1181:
case 2713:
case 2891:
case 3050:
case 1641:
case 352:
case 2973:
case 2486:
case 4004:
case 2924:
case 3097:
case 2689:
case 1427:
case 2597:
case 1748:
case 1903:
case 988:
case 1120:
case 604:
case 4079:
case 1348:
case 27:
case 2550:
case 3798:
case 3860:
case 3352:
case 3221:
case 1066:
case 2266:
case 3167:
case 3460:
case 1827:
case 2572:
case 3064:
case 1715:
case 1580:
case 4026:
case 1928:
case 2688:
case 1677:
case 3685:
case 2320:
case 11:
case 69:
case 2885:
case 798:
case 824:
case 3182:
case 2732:
case 150:
case 1263:
case 52:
case 1937:
case 3530:
case 1855:
case 2115:
case 2271:
case 3642:
case 1658:
case 3909:
case 2842:
case 1201:
case 990:
case 488:
case 2030:
case 113:
case 1883:
case 1751:
case 693:
case 3714:
case 2434:
case 4057:
case 3100:
case 2453:
case 3974:
case 2396:
case 1351:
case 3923:
case 3407:
case 375:
case 1113:
case 1716:
case 2853:
case 3807:
case 320:
case 3563:
case 721:
case 411:
case 1316:
case 335:
case 2381:
case 2744:
case 667:
case 1230:
case 2001:
case 1976:
case 1518:
case 1093:
case 3772:
case 3988:
case 513:
case 409:
case 1213:
case 3231:
case 3912:
case 3043:
case 2570:
case 1828:
case 421:
case 3372:
case 1582:
case 3409:
case 2806:
case 2609:
case 1955:
case 3200:
case 4084:
case 2942:
case 1747:
case 2598:
case 1428:
case 3595:
case 1122:
case 4041:
case 2293:
case 1604:
case 1545:
case 3052:
case 868:
case 3098:
case 416:
case 1679:
case 3513:
case 980:
case 2095:
case 1983:
case 1163:
case 3282:
case 683:
case 1476:
case 940:
case 2543:
case 12:
case 550:
case 3764:
case 3245:
case 353:
case 3907:
case 3627:
case 3002:
case 2715:
case 2517:
case 2315:
case 3069:
case 747:
case 3978:
case 3435:
case 2975:
case 2132:
case 1266:
case 3021:
case 985:
case 3638:
case 787:
case 2066:
case 3990:
case 3345:
case 17:
case 46:
case 3547:
case 1550:
case 1660:
case 2348:
case 2120:
case 4074:
case 919:
case 594:
case 1395:
case 3745:
case 2427:
case 1313:
case 3331:
case 497:
case 2144:
case 1486:
case 3199:
case 431:
case 349:
case 3272:
case 2641:
case 2181:
case 1891:
case 315:
case 1116:
case 1713:
case 2856:
case 3566:
case 867:
case 2684:
case 471:
case 161:
case 2929:
case 3700:
case 3926:
case 1905:
case 133:
case 3017:
case 1247:
case 184:
case 3250:
case 3441:
case 1564:
case 1633:
case 3611:
case 269:
case 1654:
case 3080:
case 2793:
case 3297:
case 3490:
case 1701:
case 3214:
case 2296:
case 1251:
case 2875:
case 995:
case 3878:
case 1301:
case 2049:
case 1440:
case 4007:
case 1147:
case 3150:
case 2403:
case 3094:
case 2016:
case 561:
case 1840:
case 1216:
case 88:
case 3857:
case 2281:
case 3603:
case 3046:
case 3019:
case 533:
case 1249:
case 2567:
case 2803:
case 1730:
case 797:
case 3935:
case 3478:
case 573:
case 2938:
case 2475:
case 3164:
case 2956:
case 1991:
case 2220:
case 1405:
case 258:
case 3551:
case 2519:
case 487:
case 901:
case 1032:
case 166:
case 874:
case 3516:
case 2594:
case 57:
case 1166:
case 1986:
case 4088:
case 399:
case 3549:
case 1473:
case 1608:
case 3959:
case 883:
case 4012:
case 502:
case 1599:
case 1020:
case 212:
case 3826:
case 2429:
case 1363:
case 3702:
case 2015:
case 3593:
case 3018:
case 3369:
case 3321:
case 1953:
case 1543:
case 2939:
case 3479:
case 706:
case 2876:
case 3721:
case 454:
case 856:
case 3879:
case 2476:
case 2766:
case 132:
case 2679:
case 2531:
case 1095:
case 892:
case 10:
case 172:
case 3045:
case 1171:
case 2347:
case 2545:
case 2604:
case 1293:
case 2837:
case 2101:
case 719:
case 2122:
case 1942:
case 745:
case 2747:
case 1406:
case 401:
case 3958:
case 2955:
case 1609:
case 987:
case 2582:
case 3825:
case 3000:
case 557:
case 2625:
case 947:
case 3380:
case 2213:
case 3717:
case 4033:
case 2437:
case 1165:
case 3515:
case 103:
case 2130:
case 3404:
case 2518:
case 2349:
case 1001:
case 4087:
case 1744:
case 2316:
case 3571:
case 2749:
case 1834:
case 1022:
case 3794:
case 1853:
case 2113:
case 2716:
case 1344:
case 3746:
case 3143:
case 851:
case 2351:
case 1396:
case 2222:
case 338:
case 300:
case 378:
case 2751:
case 1030:
case 3346:
case 2636:
case 419:
case 882:
case 503:
case 3319:
case 2201:
case 729:
case 2065:
case 3655:
case 1842:
case 931:
case 3367:
case 2658:
case 3565:
case 1332:
case 1115:
case 1271:
case 3858:
case 3767:
case 3892:
case 971:
case 3477:
case 1485:
case 3904:
case 2195:
case 406:
case 3492:
case 1688:
case 2928:
case 1906:
case 4008:
case 3925:
case 795:
case 3458:
case 660:
case 2455:
case 3711:
case 1136:
case 1733:
case 2693:
case 239:
case 3311:
case 3028:
case 2431:
case 433:
case 2759:
case 886:
case 484:
case 2025:
case 3206:
case 1613:
case 1389:
case 877:
case 2341:
case 1009:
case 2400:
case 3756:
case 2784:
case 2831:
case 461:
case 3134:
case 1789:
case 2384:
case 1062:
case 131:
case 3037:
case 837:
case 290:
case 3848:
case 2335:
case 2845:
case 536:
case 402:
case 1360:
case 2418:
case 1023:
case 2112:
case 3504:
case 1852:
case 1898:
case 2968:
case 2735:
case 3965:
case 3185:
case 547:
case 957:
case 47:
case 1470:
case 16:
case 2079:
case 587:
case 3525:
case 1506:
case 2882:
case 3327:
case 3076:
case 1870:
case 3682:
case 2445:
case 3618:
case 2615:
case 1158:
case 2818:
case 1452:
case 794:
case 3815:
case 1708:
case 1943:
case 136:
case 1012:
case 494:
case 600:
case 2174:
case 4020:
case 1258:
case 3993:
case 466:
case 841:
case 455:
case 1179:
case 1534:
case 187:
case 881:
case 77:
case 3361:
case 2092:
case 2058:
case 702:
case 3055:
case 2583:
case 3761:
case 852:
case 3865:
case 1630:
case 3303:
case 1998:
case 2868:
case 2665:
case 2790:
case 972:
case 2945:
case 3703:
case 3106:
case 280:
case 1125:
case 2207:
case 3948:
case 3234:
case 932:
case 744:
case 2757:
case 3253:
case 761:
case 2390:
case 1710:
case 2378:
case 2109:
case 3577:
case 3915:
case 1622:
case 1236:
case 3775:
case 2162:
case 2982:
case 2778:
case 597:
case 1601:
case 3465:
case 1310:
case 1970:
case 531:
case 1104:
case 773:
case 1033:
case 1054:
case 1497:
case 2527:
case 1872:
case 3680:
case 1284:
case 1157:
case 221:
case 3140:
case 955:
case 3447:
case 966:
case 3617:
case 1259:
case 2417:
case 2647:
case 757:
case 1362:
case 3056:
case 1850:
case 2538:
case 807:
case 1709:
case 2704:
case 2480:
case 1089:
case 1309:
case 1472:
case 2233:
case 2967:
case 3737:
case 129:
case 2254:
case 1897:
case 1464:
case 2919:
case 162:
case 1723:
case 3105:
case 2946:
case 2556:
case 1374:
case 3038:
case 2666:
case 432:
case 1060:
case 4095:
case 2779:
case 2469:
case 3951:
case 298:
case 689:
case 40:
case 216:
case 3124:
case 2260:
case 820:
case 3559:
case 3621:
case 649:
case 3466:
case 154:
case 3776:
case 2994:
case 195:
case 3916:
case 1864:
case 3027:
case 2511:
case 3949:
case 2802:
case 3376:
case 625:
case 1712:
case 973:
case 2917:
case 3578:
case 1388:
case 670:
case 1620:
case 810:
case 2980:
case 2160:
case 1135:
case 1972:
case 630:
case 2777:
case 4063:
case 1788:
case 1632:
case 732:
case 1540:
case 2792:
case 2503:
case 1997:
case 70:
case 595:
case 3947:
case 2208:
case 3205:
case 2651:
case 4030:
case 2561:
case 8:
case 119:
case 1814:
case 2154:
case 1499:
case 2133:
case 2287:
case 2529:
case 1524:
case 97:
case 1159:
case 3449:
case 3383:
case 2057:
case 3619:
case 211:
case 185:
case 3191:
case 1184:
case 2419:
case 1964:
case 1010:
case 2616:
case 501:
case 4022:
case 3339:
case 2902:
case 3849:
case 2446:
case 4001:
case 2078:
case 1290:
case 1141:
case 3075:
case 1644:
case 2189:
case 3451:
case 3540:
case 3632:
case 1667:
case 2342:
case 2832:
case 2024:
case 915:
case 823:
case 949:
case 1590:
case 1755:
case 2420:
case 3226:
case 1205:
case 1061:
case 559:
case 1947:
case 3950:
case 2820:
case 2261:
case 2005:
case 3388:
case 427:
case 2785:
case 385:
case 82:
case 1191:
case 1240:
case 2203:
case 3707:
case 524:
case 3681:
case 1339:
case 1694:
case 2353:
case 2699:
case 1075:
case 3141:
case 3290:
case 1451:
case 2496:
case 3414:
case 1739:
case 1526:
case 3505:
case 3307:
case 2444:
case 666:
case 3696:
case 478:
case 3278:
case 1186:
case 2275:
case 2896:
case 3814:
case 438:
case 3159:
case 345:
case 1416:
case 1646:
case 3524:
case 1003:
case 1619:
case 292:
case 2040:
case 1383:
case 3573:
case 4031:
case 850:
case 3709:
case 124:
case 1847:
case 1056:
case 3362:
case 2697:
case 3089:
case 778:
case 2211:
case 3762:
case 2175:
case 3897:
case 3178:
case 3309:
case 3472:
case 2672:
case 3054:
case 568:
case 1680:
case 3872:
case 2256:
case 81:
case 1291:
case 999:
case 3284:
case 4000:
case 2920:
case 204:
case 1728:
case 514:
case 3450:
case 2706:
case 1447:
case 417:
case 1559:
case 2944:
case 727:
case 1124:
case 3235:
case 1173:
case 354:
case 3999:
case 1621:
case 1466:
case 4082:
case 2238:
case 3864:
case 4018:
case 395:
case 242:
case 661:
case 2664:
case 2129:
case 3586:
case 1376:
case 1949:
case 2554:
case 159:
case 644:
case 930:
case 3774:
case 3464:
case 2589:
case 1105:
case 3723:
case 633:
case 908:
case 4045:
case 3374:
case 251:
case 925:
case 1866:
case 3914:
case 3323:
case 3060:
case 1329:
case 2463:
case 4067:
case 1285:
case 2176:
case 2773:
case 2724:
case 267:
case 1055:
case 1729:
case 1471:
case 1761:
case 2324:
case 2913:
case 3012:
case 869:
case 1242:
case 3708:
case 3258:
case 1871:
case 3308:
case 2507:
case 293:
case 2863:
case 3534:
case 3553:
case 499:
case 3088:
case 2034:
case 3585:
case 1375:
case 2588:
case 3710:
case 3622:
case 917:
case 3007:
case 3310:
case 1465:
case 1775:
case 2137:
case 3236:
case 2283:
case 789:
case 2512:
case 3104:
case 408:
case 29:
case 3998:
case 2995:
case 3630:
case 1865:
case 1083:
case 2340:
case 2830:
case 749:
case 1558:
case 2401:
case 430:
case 1948:
case 4046:
case 3125:
case 1592:
case 1703:
case 715:
case 2422:
case 425:
case 1253:
case 4019:
case 2740:
case 3389:
case 1631:
case 2228:
case 3613:
case 3225:
case 3443:
case 725:
case 1134:
case 371:
case 397:
case 3789:
case 1493:
case 2139:
case 730:
case 2391:
case 1356:
case 449:
case 2574:
case 2963:
case 3733:
case 3136:
case 2237:
case 2183:
case 2786:
case 632:
case 1893:
case 234:
case 363:
case 4080:
case 1311:
case 2386:
case 3333:
case 1600:
case 927:
case 2006:
case 4017:
case 2413:
case 24:
case 1327:
case 3506:
case 4069:
case 2670:
case 3279:
case 3870:
case 2901:
case 1142:
case 1448:
case 2922:
case 1618:
case 1815:
case 3158:
case 3360:
case 3177:
case 2276:
case 900:
case 28:
case 3898:
case 3760:
case 603:
case 3470:
case 938:
case 2923:
case 4003:
case 1746:
case 2100:
case 724:
case 816:
case 898:
case 100:
case 3030:
case 1346:
case 3796:
case 468:
case 178:
case 1319:
case 2799:
case 1436:
case 3001:
case 687:
case 235:
case 220:
case 2399:
case 2634:
case 3344:
case 3853:
case 1794:
case 3022:
case 275:
case 3834:
case 3781:
case 2131:
case 1492:
case 2522:
case 1877:
case 3063:
case 3688:
case 3320:
case 2685:
case 3148:
case 3442:
case 2145:
case 3612:
case 809:
case 2812:
case 1152:
case 2501:
case 1655:
case 3842:
case 2909:
case 2412:
case 2118:
case 4061:
case 2642:
case 3271:
case 3115:
case 3485:
case 517:
case 1477:
case 1767:
case 2488:
case 2182:
case 1904:
case 1170:
case 2282:
case 1936:
case 2513:
case 372:
case 2052:
case 2874:
case 3215:
case 2:
case 3623:
case 1045:
case 2218:
case 1369:
case 1018:
case 3248:
case 1702:
case 3953:
case 1321:
case 848:
case 3934:
case 1302:
case 1769:
case 811:
case 1082:
case 631:
case 1000:
case 3806:
case 1825:
case 2409:
case 2372:
case 1628:
case 2606:
case 3570:
case 1380:
case 2043:
case 500:
case 3165:
case 3985:
case 4011:
case 2462:
case 1404:
case 1780:
case 66:
case 1317:
case 1515:
case 1992:
case 3293:
case 1548:
case 2862:
case 2350:
case 1637:
case 3552:
case 3598:
case 1425:
case 1031:
case 3609:
case 826:
case 714:
case 1603:
case 1046:
case 125:
case 2294:
case 2117:
case 1857:
case 3216:
case 1368:
case 1019:
case 2640:
case 606:
case 2180:
case 2960:
case 3730:
case 589:
case 1768:
case 1172:
case 1935:
case 1478:
case 130:
case 3701:
case 2520:
case 3044:
case 228:
case 4039:
case 3322:
case 549:
case 2219:
case 3440:
case 1457:
case 3301:
case 205:
case 1094:
case 3722:
case 3147:
case 2581:
case 3424:
case 3473:
case 199:
case 2954:
case 1549:
case 619:
case 2933:
case 2267:
case 879:
case 2605:
case 3363:
case 1826:
case 3020:
case 2808:
case 3599:
case 291:
case 3991:
case 1629:
case 685:
case 2102:
case 3514:
case 2121:
case 2673:
case 1941:
case 2989:
case 246:
case 277:
case 3873:
case 1990:
case 880:
case 2860:
case 1638:
case 2352:
case 3660:
case 2798:
case 1547:
case 3550:
case 2269:
case 1345:
case 302:
case 1957:
case 33:
case 2398:
case 968:
case 3395:
case 2202:
case 1718:
case 2370:
case 2910:
case 1382:
case 601:
case 2460:
case 2987:
case 1782:
case 1978:
case 4076:
case 264:
case 662:
case 241:
case 1859:
case 1484:
case 570:
case 3247:
case 384:
case 1250:
case 1017:
case 3905:
case 1926:
case 1611:
case 3654:
case 1441:
case 1114:
case 2854:
case 2489:
case 3151:
case 218:
case 296:
case 373:
case 1080:
case 530:
case 1841:
case 3689:
case 2097:
case 3924:
case 252:
case 149:
case 4037:
case 2889:
case 1199:
case 3891:
case 3116:
case 2194:
case 115:
case 281:
case 1731:
case 2050:
case 1656:
case 361:
case 760:
case 2691:
case 3149:
case 344:
case 1566:
case 3428:
case 1595:
case 2425:
case 967:
case 15:
case 1809:
case 3101:
case 2804:
case 2637:
case 3604:
case 3347:
case 323:
case 2548:
case 1797:
case 2317:
case 3093:
case 3518:
case 2404:
case 3130:
case 1988:
case 1168:
case 1772:
case 2977:
case 765:
case 1606:
case 3625:
case 1912:
case 756:
case 993:
case 404:
case 3582:
case 690:
case 1409:
case 806:
case 3828:
case 3500:
case 2676:
case 885:
case 1070:
case 2298:
case 217:
case 3295:
case 2479:
case 1474:
case 442:
case 2321:
case 1764:
case 2252:
case 3015:
case 1423:
case 2369:
case 1245:
case 1:
case 1218:
case 99:
case 1513:
case 3531:
case 2270:
case 1098:
case 3476:
case 451:
case 2879:
case 845:
case 3983:
case 107:
case 2892:
case 350:
case 751:
case 2767:
case 3937:
case 3263:
case 1962:
case 4073:
case 2477:
case 2858:
case 1118:
case 1412:
case 829:
case 3568:
case 3658:
case 5:
case 1812:
case 983:
case 934:
case 3928:
case 4005:
case 1685:
case 3677:
case 227:
case 2877:
case 1522:
case 2198:
case 31:
case 94:
case 854:
case 456:
case 1653:
case 1399:
case 3749:
case 120:
case 1563:
case 2639:
case 3839:
case 1799:
case 2068:
case 2683:
case 3636:
case 3201:
case 1714:
case 278:
case 98:
case 4040:
case 1407:
case 1923:
case 3351:
case 3929:
case 1691:
case 3684:
case 3047:
case 1050:
case 3856:
case 215:
case 1217:
case 181:
case 1194:
case 2884:
case 528:
case 3411:
case 152:
case 3641:
case 443:
case 1097:
case 1280:
case 3144:
case 2841:
case 2080:
case 698:
case 289:
case 2297:
case 1854:
case 2114:
case 3196:
case 616:
case 118:
case 1072:
case 434:
case 2441:
case 483:
case 836:
case 2611:
case 2300:
case 3393:
case 2926:
case 4006:
case 2250:
case 3456:
case 141:
case 876:
case 1119:
case 577:
case 1987:
case 2021:
case 546:
case 3975:
case 3517:
case 1460:
case 956:
case 1770:
case 965:
case 2069:
case 322:
case 3827:
case 537:
case 591:
case 2627:
case 1370:
case 3903:
case 1202:
case 3748:
case 2745:
case 3120:
case 2264:
case 2957:
case 2835:
case 48:
case 3066:
case 1221:
case 1352:
case 992:
case 177:
case 467:
case 1169:
case 871:
case 648:
case 146:
case 1673:
case 78:
case 3519:
case 1121:
case 2067:
case 2661:
case 2426:
case 831:
case 1408:
case 1102:
case 358:
case 2629:
case 3956:
case 611:
case 3220:
case 897:
case 1808:
case 312:
case 863:
case 3771:
case 2959:
case 1544:
case 3626:
case 299:
case 1954:
case 3232:
case 3911:
case 1267:
case 904:
case 2516:
case 74:
case 3371:
case 2150:
case 1810:
case 1246:
case 3927:
case 774:
case 4034:
case 1887:
case 128:
case 3296:
case 626:
case 2197:
case 552:
case 1099:
case 734:
case 1520:
case 2675:
case 2478:
case 2172:
case 3765:
case 3475:
case 3938:
case 2890:
case 982:
case 3051:
case 2368:
case 2019:
case 1640:
case 1410:
case 3803:
case 951:
case 3567:
case 1532:
case 3281:
case 1294:
case 1117:
case 225:
case 2046:
case 2603:
case 564:
case 2866:
case 398:
case 2951:
case 3556:
case 151:
case 3666:
case 857:
case 2105:
case 3402:
case 3108:
case 1589:
case 3919:
case 4052:
case 2376:
case 1554:
case 2949:
case 259:
case 3802:
case 3511:
case 142:
case 1129:
case 453:
case 1981:
case 928:
case 2466:
case 1238:
case 3869:
case 905:
case 2124:
case 3821:
case 4070:
case 1944:
case 2559:
case 4043:
case 2447:
case 775:
case 1103:
case 2617:
case 2728:
case 592:
case 410:
case 2140:
case 2291:
case 1256:
case 2328:
case 1306:
case 3325:
case 2680:
case 3527:
case 1672:
case 3254:
case 1932:
case 1175:
case 991:
case 3233:
case 2056:
case 622:
case 3084:
case 2535:
case 565:
case 3538:
case 3304:
case 1650:
case 45:
case 214:
case 3210:
case 2449:
case 192:
case 3057:
case 612:
case 1040:
case 2003:
case 2646:
case 3819:
case 1481:
case 2416:
case 2783:
case 2186:
case 3287:
case 3133:
case 1896:
case 3154:
case 2851:
case 1111:
case 268:
case 3561:
case 348:
case 3969:
case 435:
case 2451:
case 3189:
case 1844:
case 3921:
case 1353:
case 1334:
case 165:
case 156:
case 658:
case 1881:
case 2191:
case 2240:
case 1156:
case 964:
case 1138:
case 1510:
case 941:
case 1229:
case 582:
case 803:
case 1385:
case 3377:
case 1587:
case 753:
case 3917:
case 1005:
case 1261:
case 1820:
case 3208:
case 7:
case 2947:
case 542:
case 2205:
case 1127:
case 2061:
case 1420:
case 2029:
case 3758:
case 326:
case 3792:
case 1024:
case 407:
case 3358:
case 1073:
case 2557:
case 2355:
case 777:
case 1698:
case 1930:
case 746:
case 3079:
case 3188:
case 1509:
case 3482:
case 593:
case 18:
case 1276:
case 2185:
case 2965:
case 3735:
case 2415:
case 3112:
case 2645:
case 2848:
case 3537:
case 2338:
case 1652:
case 4064:
case 3818:
case 2815:
case 1155:
case 935:
case 2618:
case 3445:
case 3223:
case 2727:
case 3615:
case 2448:
case 2142:
case 2076:
case 786:
case 1901:
case 567:
case 2682:
case 1495:
case 3882:
case 3431:
case 2028:
case 1643:
case 2311:
case 339:
case 2600:
case 3576:
case 1386:
case 174:
case 3209:
case 855:
case 728:
case 496:
case 1786:
case 1183:
case 1963:
case 1237:
case 2893:
case 379:
case 3262:
case 2037:
case 3384:
case 3741:
case 452:
case 1523:
case 3341:
case 2134:
case 1791:
case 2153:
case 3400:
case 2206:
case 3107:
case 4050:
case 2579:
case 1740:
case 2253:
case 87:
case 2234:
case 3390:
case 260:
case 1422:
case 574:
case 2592:
case 2106:
case 1830:
case 3790:
case 2558:
case 1401:
case 3555:
case 3357:
case 3036:
case 2083:
case 1340:
case 2303:
case 3868:
case 19:
case 583:
case 9:
case 61:
case 4014:
case 428:
case 1430:
case 953:
case 1801:
case 3982:
case 3468:
case 3162:
case 650:
case 2775:
case 1283:
case 2915:
case 3918:
case 3109:
case 3378:
case 1588:
case 741:
case 340:
case 1822:
case 1053:
case 1034:
case 833:
case 884:
case 1085:
case 193:
case 58:
case 1863:
case 1507:
case 3326:
case 1305:
case 2993:
case 613:
case 3174:
case 1255:
case 3671:
case 1705:
case 3123:
case 3931:
case 437:
case 3058:
case 2729:
case 1724:
case 2361:
case 2285:
case 1463:
case 2329:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1759168801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,];
var gg_b = "1759168801/";

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
