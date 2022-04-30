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
case 335:
case 2454:
case 3593:
case 1019:
case 1875:
case 222:
case 2849:
case 1642:
case 3634:
case 2014:
case 1795:
case 3213:
case 1902:
case 2435:
case 3402:
case 2044:
case 570:
case 2205:
case 2306:
case 2443:
case 392:
case 3266:
case 2658:
case 3442:
case 3876:
case 791:
case 3162:
case 1467:
case 2260:
case 3002:
case 2537:
case 3881:
case 3618:
case 2860:
case 827:
case 1490:
case 2453:
case 247:
case 2234:
case 2732:
case 3620:
case 2632:
case 3310:
case 2351:
case 3882:
case 3243:
case 3970:
case 2298:
case 1241:
case 4030:
case 1801:
case 394:
case 762:
case 2302:
case 3506:
case 943:
case 2773:
case 820:
case 3524:
case 138:
case 706:
case 1469:
case 2605:
case 3883:
case 2544:
case 1230:
case 666:
case 373:
case 1195:
case 496:
case 3844:
case 3352:
case 83:
case 482:
case 3819:
case 3864:
case 3824:
case 1407:
case 3708:
case 3999:
case 3462:
case 828:
case 1164:
case 2531:
case 3268:
case 1509:
case 3060:
case 3491:
case 410:
case 933:
case 1621:
case 2581:
case 745:
case 1632:
case 3522:
case 2478:
case 3746:
case 2681:
case 697:
case 574:
case 2638:
case 1988:
case 4033:
case 687:
case 3242:
case 2011:
case 3081:
case 1282:
case 2186:
case 3483:
case 2365:
case 1855:
case 990:
case 517:
case 1582:
case 2767:
case 3859:
case 1281:
case 1058:
case 5:
case 3180:
case 1429:
case 2574:
case 523:
case 2104:
case 2323:
case 686:
case 894:
case 3101:
case 1708:
case 2484:
case 2496:
case 3146:
case 1557:
case 1580:
case 1763:
case 2768:
case 2617:
case 923:
case 595:
case 2111:
case 1343:
case 3780:
case 1937:
case 1267:
case 3207:
case 1910:
case 3764:
case 2610:
case 2364:
case 3249:
case 1153:
case 1954:
case 148:
case 435:
case 764:
case 246:
case 1598:
case 1663:
case 2250:
case 919:
case 3315:
case 1249:
case 1729:
case 1074:
case 2238:
case 1344:
case 2427:
case 2203:
case 555:
case 1338:
case 3777:
case 2175:
case 3135:
case 2124:
case 2985:
case 74:
case 3469:
case 3107:
case 3502:
case 2445:
case 779:
case 3933:
case 2720:
case 3576:
case 214:
case 2173:
case 1891:
case 1905:
case 964:
case 3654:
case 1455:
case 3443:
case 1303:
case 3370:
case 3411:
case 2197:
case 254:
case 3650:
case 1453:
case 2795:
case 4044:
case 3248:
case 3030:
case 48:
case 2522:
case 3287:
case 277:
case 2915:
case 3519:
case 2506:
case 3055:
case 1310:
case 2475:
case 3212:
case 24:
case 1125:
case 1671:
case 1423:
case 3291:
case 1403:
case 3792:
case 2535:
case 3913:
case 2747:
case 1806:
case 3256:
case 1143:
case 2492:
case 3698:
case 1832:
case 2884:
case 2118:
case 2164:
case 2050:
case 1797:
case 904:
case 1665:
case 713:
case 3940:
case 857:
case 955:
case 1496:
case 542:
case 1086:
case 3166:
case 2913:
case 2041:
case 438:
case 564:
case 869:
case 120:
case 2120:
case 3848:
case 466:
case 889:
case 3330:
case 1508:
case 1261:
case 2161:
case 302:
case 1275:
case 2280:
case 1485:
case 2607:
case 2663:
case 508:
case 531:
case 2289:
case 2766:
case 505:
case 147:
case 2719:
case 1995:
case 164:
case 1051:
case 576:
case 3220:
case 625:
case 2825:
case 4027:
case 524:
case 2042:
case 1328:
case 1379:
case 462:
case 1934:
case 2649:
case 1052:
case 2130:
case 3979:
case 3701:
case 3558:
case 126:
case 2008:
case 3498:
case 2906:
case 3770:
case 579:
case 1152:
case 721:
case 3306:
case 2604:
case 947:
case 2418:
case 3849:
case 4066:
case 3687:
case 478:
case 1090:
case 2361:
case 3967:
case 51:
case 2946:
case 3380:
case 2440:
case 3398:
case 444:
case 3438:
case 1484:
case 2305:
case 3042:
case 3426:
case 45:
case 2315:
case 830:
case 109:
case 1749:
case 815:
case 1005:
case 3758:
case 575:
case 3076:
case 4023:
case 587:
case 1411:
case 3114:
case 1156:
case 1938:
case 3801:
case 2596:
case 2058:
case 1099:
case 2575:
case 1167:
case 2007:
case 88:
case 2325:
case 323:
case 3057:
case 529:
case 3799:
case 3719:
case 1577:
case 1670:
case 1235:
case 835:
case 320:
case 3737:
case 4010:
case 1680:
case 2824:
case 1376:
case 2304:
case 909:
case 3517:
case 2816:
case 4012:
case 583:
case 93:
case 804:
case 19:
case 3663:
case 442:
case 720:
case 3314:
case 3868:
case 3874:
case 888:
case 2754:
case 3471:
case 1719:
case 134:
case 2410:
case 2096:
case 2284:
case 2107:
case 359:
case 2160:
case 1714:
case 1468:
case 3537:
case 1711:
case 411:
case 825:
case 3992:
case 1764:
case 1987:
case 151:
case 3871:
case 3247:
case 1189:
case 903:
case 56:
case 3272:
case 3791:
case 2263:
case 3825:
case 2821:
case 730:
case 1120:
case 3024:
case 3159:
case 1611:
case 1360:
case 3604:
case 1420:
case 1681:
case 1964:
case 1395:
case 1945:
case 2005:
case 475:
case 519:
case 2621:
case 1947:
case 1145:
case 473:
case 1549:
case 2246:
case 1477:
case 287:
case 2227:
case 2033:
case 3827:
case 2370:
case 553:
case 3501:
case 3052:
case 8:
case 3138:
case 2790:
case 1034:
case 2961:
case 3782:
case 1489:
case 2398:
case 3929:
case 1220:
case 1639:
case 1584:
case 620:
case 2524:
case 2782:
case 3785:
case 1728:
case 2923:
case 1196:
case 2751:
case 2902:
case 1743:
case 2995:
case 1135:
case 2812:
case 77:
case 1438:
case 3697:
case 3185:
case 3965:
case 1828:
case 1647:
case 913:
case 934:
case 530:
case 3733:
case 2577:
case 2594:
case 2609:
case 3668:
case 204:
case 453:
case 885:
case 3609:
case 1501:
case 2905:
case 2910:
case 1323:
case 1259:
case 1773:
case 1930:
case 452:
case 3924:
case 3866:
case 2854:
case 727:
case 35:
case 2218:
case 375:
case 3361:
case 811:
case 2886:
case 1481:
case 1173:
case 1803:
case 141:
case 1431:
case 269:
case 2001:
case 3815:
case 2900:
case 954:
case 3766:
case 679:
case 3472:
case 3823:
case 1254:
case 3588:
case 2553:
case 3533:
case 1560:
case 1917:
case 1304:
case 3228:
case 4032:
case 4062:
case 4035:
case 1972:
case 2358:
case 2990:
case 123:
case 3893:
case 558:
case 3528:
case 3826:
case 1636:
case 3736:
case 192:
case 2702:
case 1552:
case 3956:
case 1630:
case 1733:
case 3300:
case 3787:
case 2620:
case 404:
case 2132:
case 2930:
case 3239:
case 1833:
case 3044:
case 3022:
case 2807:
case 3399:
case 1782:
case 1061:
case 2757:
case 3054:
case 314:
case 2869:
case 1804:
case 3532:
case 426:
case 1645:
case 1036:
case 293:
case 549:
case 2765:
case 935:
case 2299:
case 484:
case 3912:
case 3074:
case 3304:
case 1128:
case 212:
case 4071:
case 149:
case 1443:
case 3420:
case 1641:
case 1194:
case 866:
case 1679:
case 1716:
case 3366:
case 2857:
case 3627:
case 1461:
case 3050:
case 1736:
case 2081:
case 4053:
case 1568:
case 4065:
case 2444:
case 540:
case 2691:
case 3747:
case 2975:
case 3546:
case 1437:
case 1464:
case 2047:
case 1777:
case 4088:
case 1735:
case 3617:
case 2899:
case 2557:
case 2679:
case 3672:
case 2432:
case 1515:
case 1567:
case 391:
case 867:
case 3713:
case 1067:
case 1137:
case 2885:
case 2659:
case 3218:
case 4094:
case 3224:
case 3413:
case 479:
case 358:
case 2207:
case 1176:
case 3947:
case 1475:
case 2836:
case 895:
case 839:
case 2409:
case 1965:
case 162:
case 750:
case 3414:
case 1669:
case 2307:
case 2931:
case 630:
case 395:
case 846:
case 3485:
case 2841:
case 2780:
case 896:
case 1974:
case 3600:
case 464:
case 1781:
case 2268:
case 1247:
case 3841:
case 1426:
case 2493:
case 265:
case 2343:
case 773:
case 2626:
case 2808:
case 3270:
case 2588:
case 300:
case 3934:
case 1162:
case 2682:
case 161:
case 767:
case 2200:
case 1701:
case 82:
case 17:
case 241:
case 2903:
case 2055:
case 108:
case 633:
case 597:
case 4015:
case 1786:
case 2179:
case 2599:
case 1424:
case 3033:
case 2953:
case 3409:
case 3089:
case 1796:
case 1698:
case 1666:
case 1880:
case 436:
case 3332:
case 3154:
case 696:
case 1206:
case 3945:
case 4024:
case 1491:
case 1018:
case 199:
case 3294:
case 1449:
case 1766:
case 2217:
case 3865:
case 1410:
case 273:
case 2555:
case 3735:
case 3193:
case 1723:
case 1216:
case 432:
case 1412:
case 3559:
case 2480:
case 165:
case 1874:
case 1916:
case 1624:
case 3594:
case 2013:
case 1894:
case 2145:
case 852:
case 3091:
case 3386:
case 3741:
case 52:
case 328:
case 1289:
case 363:
case 2640:
case 282:
case 3225:
case 2258:
case 1372:
case 2:
case 2804:
case 398:
case 3157:
case 135:
case 3975:
case 3288:
case 285:
case 2189:
case 683:
case 3644:
case 2071:
case 2401:
case 1246:
case 3170:
case 3642:
case 402:
case 1608:
case 2347:
case 2167:
case 3763:
case 501:
case 2063:
case 2419:
case 1531:
case 3750:
case 3510:
case 1257:
case 1150:
case 357:
case 3786:
case 2769:
case 4052:
case 631:
case 2194:
case 1753:
case 385:
case 2698:
case 3795:
case 288:
case 1293:
case 864:
case 2121:
case 1815:
case 3667:
case 3963:
case 1316:
case 2296:
case 2028:
case 673:
case 3689:
case 2082:
case 842:
case 2259:
case 3147:
case 2310:
case 1769:
case 581:
case 672:
case 1215:
case 868:
case 3184:
case 3236:
case 3021:
case 250:
case 1362:
case 150:
case 2031:
case 1860:
case 3359:
case 2603:
case 3520:
case 1068:
case 944:
case 3996:
case 2371:
case 2328:
case 3958:
case 3017:
case 455:
case 2959:
case 3210:
case 2979:
case 332:
case 3277:
case 784:
case 911:
case 2010:
case 3776:
case 2722:
case 993:
case 1008:
case 3702:
case 2308:
case 1778:
case 3645:
case 1370:
case 684:
case 1103:
case 3941:
case 1334:
case 1591:
case 560:
case 1081:
case 4002:
case 1146:
case 213:
case 3949:
case 2877:
case 1676:
case 185:
case 2399:
case 1350:
case 3968:
case 3406:
case 3706:
case 2247:
case 2122:
case 2087:
case 3993:
case 1239:
case 1159:
case 826:
case 460:
case 2270:
case 353:
case 153:
case 3216:
case 2514:
case 3165:
case 1979:
case 1252:
case 2140:
case 1928:
case 3526:
case 3796:
case 1978:
case 2711:
case 111:
case 3938:
case 2950:
case 2352:
case 3230:
case 196:
case 3:
case 3311:
case 2778:
case 2726:
case 3066:
case 2710:
case 2520:
case 4054:
case 1601:
case 2090:
case 3705:
case 14:
case 474:
case 1792:
case 877:
case 128:
case 4079:
case 2700:
case 1499:
case 3145:
case 2525:
case 3124:
case 3812:
case 3069:
case 2141:
case 1983:
case 3633:
case 892:
case 3752:
case 3405:
case 693:
case 3043:
case 798:
case 1104:
case 3173:
case 4039:
case 2693:
case 324:
case 770:
case 2495:
case 635:
case 3265:
case 2999:
case 456:
case 486:
case 1040:
case 1811:
case 2897:
case 3727:
case 2935:
case 1936:
case 1322:
case 1428:
case 3192:
case 2845:
case 3615:
case 3448:
case 403:
case 186:
case 3063:
case 3743:
case 1172:
case 284:
case 2103:
case 930:
case 3971:
case 3396:
case 3327:
case 3835:
case 1794:
case 3381:
case 2123:
case 1385:
case 3779:
case 1668:
case 206:
case 386:
case 772:
case 1638:
case 1436:
case 2037:
case 98:
case 879:
case 1963:
case 2781:
case 2229:
case 2561:
case 1625:
case 2783:
case 233:
case 4093:
case 712:
case 526:
case 1093:
case 3773:
case 3267:
case 3614:
case 2070:
case 1618:
case 3899:
case 1807:
case 3539:
case 3497:
case 3328:
case 2324:
case 3342:
case 518:
case 189:
case 2745:
case 2674:
case 2295:
case 2483:
case 698:
case 1536:
case 2927:
case 1340:
case 2864:
case 2696:
case 2034:
case 761:
case 244:
case 158:
case 661:
case 912:
case 2830:
case 3891:
case 1192:
case 1223:
case 500:
case 848:
case 3692:
case 3203:
case 3141:
case 3666:
case 3156:
case 1308:
case 2593:
case 1920:
case 2251:
case 3088:
case 2791:
case 3481:
case 1161:
case 2764:
case 191:
case 3591:
case 235:
case 1602:
case 960:
case 2025:
case 3515:
case 3977:
case 1990:
case 1597:
case 1661:
case 3732:
case 3303:
case 600:
case 10:
case 1664:
case 654:
case 187:
case 309:
case 844:
case 1518:
case 3974:
case 209:
case 202:
case 3231:
case 3984:
case 1414:
case 205:
case 1822:
case 2701:
case 1651:
case 2526:
case 2056:
case 3345:
case 3494:
case 3036:
case 1392:
case 1011:
case 1566:
case 430:
case 2721:
case 3394:
case 370:
case 995:
case 1532:
case 3555:
case 3474:
case 1727:
case 3199:
case 655:
case 945:
case 4060:
case 1311:
case 90:
case 694:
case 1565:
case 1397:
case 2635:
case 2095:
case 2012:
case 2156:
case 2579:
case 2507:
case 963:
case 3734:
case 219:
case 3183:
case 1417:
case 18:
case 724:
case 1330:
case 1826:
case 1002:
case 1028:
case 1356:
case 3348:
case 667:
case 2639:
case 3901:
case 2252:
case 1141:
case 70:
case 2976:
case 3205:
case 4014:
case 390:
case 3635:
case 2813:
case 2350:
case 183:
case 329:
case 2462:
case 701:
case 2183:
case 2678:
case 2329:
case 2762:
case 3362:
case 3371:
case 2661:
case 2373:
case 3378:
case 3492:
case 184:
case 1336:
case 1944:
case 2746:
case 3326:
case 2788:
case 1730:
case 2723:
case 1710:
case 777:
case 311:
case 3172:
case 1098:
case 3153:
case 900:
case 2378:
case 1846:
case 1126:
case 2675:
case 2372:
case 3104:
case 556:
case 3509:
case 607:
case 1968:
case 2750:
case 870:
case 3417:
case 1623:
case 3186:
case 420:
case 1482:
case 1155:
case 711:
case 557:
case 3569:
case 3083:
case 1996:
case 130:
case 1991:
case 1134:
case 3489:
case 2848:
case 2376:
case 3804:
case 664:
case 659:
case 515:
case 471:
case 200:
case 96:
case 1823:
case 3032:
case 1076:
case 3031:
case 700:
case 3259:
case 3416:
case 1041:
case 261:
case 1784:
case 3903:
case 1576:
case 218:
case 3973:
case 2552:
case 3049:
case 55:
case 3603:
case 563:
case 3862:
case 1776:
case 1904:
case 2748:
case 1913:
case 1748:
case 3557:
case 64:
case 1151:
case 3658:
case 2863:
case 3720:
case 3317:
case 159:
case 427:
case 2415:
case 1298:
case 290:
case 228:
case 1276:
case 54:
case 2494:
case 1440:
case 1483:
case 2002:
case 1318:
case 1511:
case 1367:
case 1877:
case 1722:
case 1033:
case 1922:
case 862:
case 1358:
case 3078:
case 1095:
case 3781:
case 2155:
case 30:
case 92:
case 949:
case 2337:
case 3628:
case 1911:
case 1286:
case 2148:
case 3896:
case 2874:
case 783:
case 965:
case 3487:
case 146:
case 992:
case 2705:
case 315:
case 1640:
case 1022:
case 3217:
case 1494:
case 3997:
case 2538:
case 1994:
case 3721:
case 1163:
case 1524:
case 3197:
case 2006:
case 2920:
case 2154:
case 3606:
case 2957:
case 3233:
case 238:
case 1465:
case 389:
case 2391:
case 1432:
case 227:
case 637:
case 1590:
case 2193:
case 3980:
case 414:
case 2460:
case 356:
case 2880:
case 3480:
case 2486:
case 805:
case 3034:
case 2138:
case 1762:
case 3788:
case 176:
case 1619:
case 2785:
case 1263:
case 1973:
case 3839:
case 1551:
case 3142:
case 2519:
case 1329:
case 9:
case 3683:
case 1971:
case 538:
case 3467:
case 1731:
case 1347:
case 1720:
case 2756:
case 3182:
case 2595:
case 1127:
case 1157:
case 4059:
case 1713:
case 545:
case 2236:
case 3102:
case 355:
case 3164:
case 1690:
case 3830:
case 3793:
case 2587:
case 3619:
case 765:
case 1211:
case 3369:
case 1202:
case 1872:
case 807:
case 2858:
case 3542:
case 4040:
case 3312:
case 1900:
case 2998:
case 488:
case 2332:
case 2618:
case 1783:
case 834:
case 507:
case 2872:
case 708:
case 681:
case 1447:
case 3556:
case 3842:
case 2431:
case 2314:
case 95:
case 2004:
case 946:
case 884:
case 4016:
case 940:
case 704:
case 1649:
case 2956:
case 2786:
case 84:
case 42:
case 4043:
case 2158:
case 1017:
case 1460:
case 316:
case 3769:
case 3308:
case 1981:
case 565:
case 2704:
case 744:
case 124:
case 3222:
case 1626:
case 361:
case 2834:
case 3227:
case 2119:
case 2165:
case 833:
case 707:
case 167:
case 2065:
case 1747:
case 3080:
case 3016:
case 642:
case 1814:
case 3338:
case 2982:
case 3675:
case 1950:
case 2916:
case 492:
case 2949:
case 3577:
case 172:
case 2125:
case 4037:
case 3906:
case 1121:
case 2256:
case 1761:
case 3269:
case 1346:
case 3077:
case 3861:
case 1506:
case 298:
case 2918:
case 4026:
case 1088:
case 3568:
case 3444:
case 2097:
case 1445:
case 140:
case 2914:
case 3356:
case 873:
case 2174:
case 2137:
case 3437:
case 725:
case 1603:
case 2048:
case 450:
case 3341:
case 2287:
case 461:
case 1472:
case 368:
case 477:
case 2787:
case 1200:
case 760:
case 3090:
case 1269:
case 3911:
case 874:
case 3998:
case 3363:
case 1876:
case 157:
case 69:
case 2606:
case 1091:
case 2026:
case 407:
case 3611:
case 799:
case 6:
case 3595:
case 2578:
case 939:
case 3372:
case 2281:
case 2339:
case 3574:
case 1190:
case 2810:
case 3316:
case 3336:
case 73:
case 741:
case 340:
case 1434:
case 3665:
case 590:
case 168:
case 1297:
case 1089:
case 4028:
case 4075:
case 3870:
case 1375:
case 915:
case 2312:
case 3599:
case 3907:
case 662:
case 4038:
case 1867:
case 1238:
case 210:
case 217:
case 44:
case 1740:
case 3305:
case 3039:
case 699:
case 2360:
case 3584:
case 101:
case 1599:
case 670:
case 1080:
case 795:
case 2220:
case 610:
case 3900:
case 441:
case 3009:
case 2954:
case 1955:
case 3649:
case 2695:
case 1320:
case 2879:
case 291:
case 2657:
case 1774:
case 3714:
case 2951:
case 3119:
case 1513:
case 1706:
case 1383:
case 2379:
case 3856:
case 1174:
case 838:
case 3322:
case 3379:
case 4085:
case 882:
case 1629:
case 1050:
case 195:
case 2092:
case 3710:
case 2662:
case 2046:
case 4013:
case 3612:
case 2131:
case 2984:
case 299:
case 1144:
case 1572:
case 3257:
case 4074:
case 922:
case 3177:
case 3813:
case 3695:
case 4020:
case 1831:
case 1285:
case 2353:
case 880:
case 1300:
case 3404:
case 1314:
case 446:
case 91:
case 4055:
case 1873:
case 413:
case 2941:
case 2715:
case 663:
case 3575:
case 3851:
case 2822:
case 1816:
case 2983:
case 2647:
case 317:
case 2730:
case 463:
case 3808:
case 932:
case 3916:
case 3535:
case 1331:
case 648:
case 3726:
case 3453:
case 2297:
case 853:
case 3299:
case 2086:
case 2533:
case 1388:
case 3513:
case 1683:
case 2015:
case 2429:
case 516:
case 3116:
case 21:
case 749:
case 61:
case 1384:
case 3636:
case 1528:
case 3886:
case 2392:
case 2128:
case 2939:
case 1969:
case 371:
case 1024:
case 1849:
case 2322:
case 3158:
case 1039:
case 2634:
case 78:
case 3877:
case 1130:
case 2666:
case 421:
case 578:
case 752:
case 2472:
case 2459:
case 2643:
case 1025:
case 2867:
case 3389:
case 2354:
case 133:
case 3120:
case 3854:
case 1790:
case 1817:
case 171:
case 3093:
case 925:
case 236:
case 1771:
case 481:
case 3252:
case 297:
case 2185:
case 2947:
case 3014:
case 836:
case 1339:
case 338:
case 1470:
case 1486:
case 156:
case 4063:
case 3064:
case 2564:
case 1805:
case 2827:
case 1032:
case 117:
case 3121:
case 2590:
case 3037:
case 3374:
case 1554:
case 3263:
case 2441:
case 3103:
case 605:
case 3552:
case 2724:
case 3297:
case 1299:
case 3527:
case 881:
case 2688:
case 548:
case 3258:
case 1097:
case 3264:
case 1262:
case 3553:
case 1210:
case 4001:
case 3723:
case 2761:
case 596:
case 3286:
case 3596:
case 2098:
case 2699:
case 2500:
case 580:
case 3115:
case 2646:
case 322:
case 2828:
case 3915:
case 1072:
case 3729:
case 1129:
case 1533:
case 1622:
case 2668:
case 2712:
case 3925:
case 592:
case 566:
case 451:
case 3887:
case 863:
case 2932:
case 3742:
case 2550:
case 2406:
case 3353:
case 443:
case 952:
case 1459:
case 3807:
case 3565:
case 1942:
case 1821:
case 3271:
case 3822:
case 2752:
case 1168:
case 34:
case 789:
case 87:
case 336:
case 1871:
case 2108:
case 658:
case 39:
case 1653:
case 3274:
case 3477:
case 2244:
case 2143:
case 3331:
case 3424:
case 348:
case 1637:
case 1480:
case 1986:
case 25:
case 1925:
case 3514:
case 3390:
case 2226:
case 489:
case 624:
case 2077:
case 2355:
case 2243:
case 1985:
case 3440:
case 1004:
case 4073:
case 2543:
case 1620:
case 808:
case 3309:
case 1862:
case 738:
case 2991:
case 1885:
case 1416:
case 2135:
case 1570:
case 2677:
case 3621:
case 1717:
case 2739:
case 3339:
case 837:
case 1369:
case 2035:
case 1682:
case 1510:
case 2613:
case 1450:
case 470:
case 719:
case 3800:
case 3676:
case 2937:
case 1021:
case 349:
case 2208:
case 3495:
case 3082:
case 968:
case 3922:
case 106:
case 4061:
case 1956:
case 537:
case 2171:
case 1422:
case 2040:
case 2819:
case 1402:
case 2891:
case 3245:
case 1221:
case 3897:
case 2187:
case 571:
case 2602:
case 1791:
case 2926:
case 3969:
case 4050:
case 283:
case 1355:
case 2317:
case 1700:
case 3452:
case 2283:
case 1884:
case 3441:
case 3809:
case 344:
case 2384:
case 3561:
case 1046:
case 3133:
case 2233:
case 2094:
case 181:
case 3751:
case 343:
case 3754:
case 1543:
case 1737:
case 2929:
case 2598:
case 2054:
case 3647:
case 1117:
case 3884:
case 2583:
case 4069:
case 3094:
case 2029:
case 1421:
case 4018:
case 2023:
case 3972:
case 3045:
case 768:
case 3895:
case 3065:
case 1222:
case 3639:
case 1248:
case 3983:
case 872:
case 3140:
case 1446:
case 360:
case 618:
case 2709:
case 1113:
case 3026:
case 1253:
case 1633:
case 2497:
case 376:
case 3008:
case 262:
case 3516:
case 3171:
case 3765:
case 2411:
case 346:
case 2811:
case 3475:
case 2471:
case 2482:
case 1085:
case 1976:
case 3391:
case 226:
case 2386:
case 3436:
case 3608:
case 2463:
case 132:
case 383:
case 3505:
case 422:
case 1010:
case 2541:
case 3357:
case 2862:
case 2625:
case 657:
case 2213:
case 225:
case 510:
case 1419:
case 378:
case 535:
case 2706:
case 3598:
case 3728:
case 3260:
case 1667:
case 2887:
case 3805:
case 3051:
case 3273:
case 1818:
case 1452:
case 898:
case 1788:
case 3757:
case 901:
case 1180:
case 3238:
case 2177:
case 57:
case 831:
case 4:
case 3383:
case 2199:
case 2363:
case 2805:
case 1448:
case 1745:
case 781:
case 3652:
case 823:
case 974:
case 2542:
case 3196:
case 551:
case 629:
case 49:
case 504:
case 1476:
case 3581:
case 2727:
case 1295:
case 1521:
case 396:
case 3512:
case 2477:
case 1244:
case 1631:
case 2449:
case 12:
case 1191:
case 1989:
case 3059:
case 491:
case 20:
case 4077:
case 1573:
case 1237:
case 2692:
case 2062:
case 3954:
case 1138:
case 2253:
case 3739:
case 1858:
case 3421:
case 1757:
case 714:
case 790:
case 3686:
case 4064:
case 97:
case 136:
case 2069:
case 953:
case 3298:
case 3797:
case 110:
case 3028:
case 1463:
case 528:
case 104:
case 2072:
case 2195:
case 1734:
case 2512:
case 1186:
case 3703:
case 22:
case 89:
case 1738:
case 2977:
case 3680:
case 2687:
case 380:
case 3643:
case 3235:
case 3946:
case 2209:
case 1545:
case 2330:
case 514:
case 671:
case 3790:
case 3229:
case 487:
case 942:
case 1000:
case 1473:
case 1702:
case 1754:
case 1165:
case 3657:
case 1517:
case 207:
case 2424:
case 729:
case 2469:
case 546:
case 2291:
case 3651:
case 2191:
case 972:
case 4067:
case 573:
case 223:
case 3582:
case 1405:
case 3544:
case 3690:
case 1569:
case 3753:
case 367:
case 1851:
case 975:
case 1287:
case 2377:
case 1650:
case 1634:
case 170:
case 3134:
case 599:
case 1187:
case 1752:
case 3292:
case 1694:
case 2928:
case 3990:
case 2279:
case 1368:
case 281:
case 3798:
case 1381:
case 3429:
case 908:
case 1042:
case 2073:
case 2348:
case 1718:
case 3538:
case 3358:
case 2022:
case 3935:
case 2898:
case 3435:
case 3320:
case 3523:
case 2580:
case 497:
case 3108:
case 577:
case 3160:
case 973:
case 603:
case 622:
case 1154:
case 2230:
case 1760:
case 3360:
case 1901:
case 2996:
case 1878:
case 3499:
case 2847:
case 3840:
case 532:
case 4046:
case 2188:
case 1240:
case 4045:
case 3960:
case 2181:
case 447:
case 3775:
case 2451:
case 1574:
case 1962:
case 1907:
case 2064:
case 1181:
case 988:
case 3838:
case 3778:
case 506:
case 1512:
case 634:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1651291201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,];
var gg_b = "1651291201/";

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
