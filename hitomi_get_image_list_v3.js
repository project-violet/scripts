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
case 787:
case 3567:
case 3613:
case 2760:
case 1816:
case 1612:
case 914:
case 1236:
case 1738:
case 2036:
case 3047:
case 2732:
case 2049:
case 1306:
case 1249:
case 1123:
case 3455:
case 2618:
case 2971:
case 3264:
case 454:
case 192:
case 1345:
case 1247:
case 3036:
case 55:
case 2613:
case 887:
case 442:
case 1733:
case 685:
case 2122:
case 3569:
case 741:
case 3732:
case 890:
case 2455:
case 3971:
case 3477:
case 2761:
case 3819:
case 4030:
case 2534:
case 2310:
case 3239:
case 161:
case 3246:
case 614:
case 2237:
case 3748:
case 1922:
case 3205:
case 312:
case 2817:
case 2800:
case 1039:
case 565:
case 2239:
case 539:
case 2477:
case 3761:
case 3743:
case 2819:
case 2335:
case 3928:
case 1566:
case 2205:
case 1005:
case 2246:
case 1604:
case 3237:
case 1171:
case 373:
case 2748:
case 2323:
case 3552:
case 2251:
case 3293:
case 2145:
case 2092:
case 1787:
case 1292:
case 1553:
case 756:
case 1098:
case 2935:
case 3328:
case 704:
case 1111:
case 3910:
case 3907:
case 3400:
case 1322:
case 3417:
case 3092:
case 1580:
case 26:
case 3909:
case 2552:
case 2293:
case 1558:
case 2910:
case 633:
case 3298:
case 945:
case 2877:
case 1824:
case 355:
case 1050:
case 2250:
case 3283:
case 129:
case 2673:
case 2401:
case 209:
case 1797:
case 4057:
case 1416:
case 2288:
case 2786:
case 747:
case 1110:
case 3678:
case 1725:
case 3754:
case 3911:
case 3082:
case 309:
case 1581:
case 132:
case 2855:
case 1672:
case 255:
case 920:
case 2754:
case 1799:
case 3288:
case 2223:
case 416:
case 257:
case 1652:
case 2875:
case 2351:
case 1023:
case 3270:
case 2905:
case 2691:
case 138:
case 3022:
case 1392:
case 4079:
case 647:
case 2398:
case 3726:
case 3228:
case 2430:
case 956:
case 904:
case 2774:
case 2658:
case 3415:
case 2136:
case 2939:
case 3905:
case 2653:
case 3680:
case 2022:
case 1463:
case 1164:
case 3223:
case 3946:
case 630:
case 3149:
case 3351:
case 3462:
case 2270:
case 1785:
case 47:
case 3136:
case 3939:
case 3398:
case 2726:
case 4077:
case 1028:
case 745:
case 604:
case 820:
case 246:
case 165:
case 1137:
case 2350:
case 2572:
case 139:
case 3859:
case 302:
case 1520:
case 656:
case 2857:
case 947:
case 2431:
case 833:
case 3681:
case 2859:
case 1727:
case 3690:
case 1573:
case 1440:
case 346:
case 4055:
case 2383:
case 2271:
case 923:
case 3350:
case 1146:
case 1949:
case 3572:
case 561:
case 1894:
case 930:
case 1795:
case 1139:
case 3388:
case 3857:
case 2831:
case 1667:
case 1198:
case 1336:
case 567:
case 3512:
case 1151:
case 2983:
case 286:
case 2644:
case 3950:
case 1206:
case 1349:
case 793:
case 4001:
case 2045:
case 3364:
case 1245:
case 3459:
case 1347:
case 3211:
case 3702:
case 2512:
case 3831:
case 2988:
case 3457:
case 199:
case 1669:
case 3045:
case 941:
case 1982:
case 1518:
case 1193:
case 1494:
case 3006:
case 3998:
case 1188:
case 532:
case 270:
case 1010:
case 3815:
case 3339:
case 2210:
case 2207:
case 3346:
case 1150:
case 2862:
case 2993:
case 3714:
case 2475:
case 687:
case 3305:
case 4017:
case 4000:
case 448:
case 251:
case 2815:
case 2339:
case 3207:
case 3210:
case 2998:
case 785:
case 529:
case 4019:
case 641:
case 1863:
case 198:
case 2305:
case 1841:
case 3666:
case 1992:
case 1183:
case 1484:
case 3337:
case 2714:
case 1009:
case 3475:
case 3993:
case 510:
case 2348:
case 746:
case 2709:
case 3519:
case 909:
case 2735:
case 2996:
case 579:
case 3452:
case 4004:
case 3710:
case 3707:
case 2663:
case 2500:
case 1154:
case 320:
case 3125:
case 401:
case 702:
case 2668:
case 233:
case 1630:
case 3348:
case 3709:
case 2519:
case 100:
case 2710:
case 3517:
case 3500:
case 3641:
case 846:
case 1480:
case 1491:
case 3199:
case 66:
case 1662:
case 3008:
case 3867:
case 3332:
case 1333:
case 2986:
case 345:
case 1203:
case 578:
case 2003:
case 2869:
case 3202:
case 3954:
case 484:
case 2501:
case 1925:
case 96:
case 4012:
case 2187:
case 2008:
case 1631:
case 2332:
case 58:
case 3869:
case 2202:
case 3640:
case 2711:
case 3501:
case 655:
case 857:
case 3986:
case 3003:
case 1999:
case 1844:
case 4072:
case 3555:
case 1659:
case 2095:
case 2142:
case 444:
case 503:
case 2469:
case 1148:
case 719:
case 172:
case 452:
case 3142:
case 1881:
case 3354:
case 1325:
case 751:
case 2386:
case 819:
case 285:
case 3960:
case 2029:
case 1397:
case 3027:
case 912:
case 54:
case 3771:
case 1657:
case 113:
case 870:
case 2728:
case 3852:
case 2961:
case 2226:
case 2684:
case 2085:
case 673:
case 42:
case 293:
case 2770:
case 786:
case 3085:
case 886:
case 1466:
case 2274:
case 1074:
case 2138:
case 3728:
case 3226:
case 612:
case 3684:
case 3434:
case 3770:
case 2577:
case 393:
case 1132:
case 2723:
case 3624:
case 3286:
case 618:
case 4:
case 812:
case 2254:
case 2902:
case 3559:
case 3025:
case 459:
case 2783:
case 773:
case 3750:
case 1413:
case 1114:
case 3254:
case 1225:
case 110:
case 1873:
case 873:
case 951:
case 3676:
case 1594:
case 3872:
case 3099:
case 1418:
case 2624:
case 2788:
case 1782:
case 1297:
case 411:
case 2412:
case 3296:
case 3798:
case 1289:
case 3374:
case 1556:
case 1385:
case 290:
case 43:
case 670:
case 1677:
case 918:
case 566:
case 1679:
case 3089:
case 1096:
case 3575:
case 3404:
case 4052:
case 3326:
case 241:
case 2087:
case 2108:
case 3793:
case 651:
case 2314:
case 1619:
case 323:
case 2530:
case 1048:
case 709:
case 2127:
case 2705:
case 381:
case 247:
case 2804:
case 3926:
case 2195:
case 2042:
case 1421:
case 855:
case 513:
case 657:
case 1242:
case 3705:
case 2515:
case 902:
case 281:
case 3248:
case 2737:
case 3530:
case 755:
case 3746:
case 3042:
case 3974:
case 1541:
case 1563:
case 1600:
case 1061:
case 1043:
case 3562:
case 2261:
case 2129:
case 1813:
case 957:
case 3616:
case 3812:
case 2033:
case 1233:
case 86:
case 1126:
case 417:
case 256:
case 1929:
case 3260:
case 2472:
case 124:
case 3302:
case 4069:
case 646:
case 3038:
case 2812:
case 3033:
case 4067:
case 1308:
case 2616:
case 3531:
case 1238:
case 2302:
case 1473:
case 1736:
case 1995:
case 2038:
case 602:
case 1818:
case 1237:
case 810:
case 1479:
case 972:
case 1761:
case 1743:
case 3039:
case 1310:
case 3922:
case 1205:
case 779:
case 2005:
case 4041:
case 1246:
case 1748:
case 2039:
case 2742:
case 546:
case 361:
case 1239:
case 994:
case 710:
case 1477:
case 1335:
case 453:
case 1049:
case 1732:
case 1618:
case 426:
case 2424:
case 1971:
case 2123:
case 3733:
case 2345:
case 878:
case 1760:
case 2816:
case 78:
case 2612:
case 3247:
case 1036:
case 2733:
case 1122:
case 4040:
case 392:
case 3345:
case 88:
case 2170:
case 2544:
case 3306:
case 3123:
case 1455:
case 2247:
case 557:
case 3612:
case 3236:
case 2128:
case 3816:
case 475:
case 1288:
case 2088:
case 2107:
case 803:
case 2725:
case 2824:
case 3083:
case 551:
case 229:
case 1401:
case 3590:
case 109:
case 3581:
case 332:
case 3107:
case 3110:
case 1678:
case 1754:
case 1911:
case 2135:
case 3416:
case 2799:
case 3088:
case 3282:
case 1620:
case 2876:
case 3824:
case 1855:
case 4094:
case 155:
case 3050:
case 2906:
case 1283:
case 1371:
case 1298:
case 1796:
case 934:
case 1106:
case 1909:
case 2051:
case 367:
case 1251:
case 3322:
case 2292:
case 2787:
case 3580:
case 3591:
case 2553:
case 2558:
case 586:
case 1907:
case 1910:
case 966:
case 518:
case 3098:
case 1328:
case 3787:
case 3553:
case 16:
case 2591:
case 3051:
case 4084:
case 1552:
case 1370:
case 267:
case 1293:
case 824:
case 1431:
case 2578:
case 3936:
case 2947:
case 94:
case 3071:
case 146:
case 265:
case 1964:
case 1690:
case 3105:
case 2382:
case 3578:
case 2936:
case 2139:
case 700:
case 1859:
case 2727:
case 3520:
case 2573:
case 222:
case 1383:
case 496:
case 365:
case 2146:
case 2894:
case 1398:
case 1430:
case 3785:
case 2468:
case 1136:
case 1939:
case 924:
case 1658:
case 3070:
case 1223:
case 1875:
case 1149:
case 1691:
case 238:
case 866:
case 1680:
case 2392:
case 1147:
case 766:
case 477:
case 1726:
case 1653:
case 338:
case 2222:
case 2441:
case 3392:
case 2164:
case 3652:
case 2884:
case 3023:
case 1270:
case 3484:
case 68:
case 1337:
case 1862:
case 1475:
case 894:
case 1993:
case 398:
case 471:
case 119:
case 772:
case 3035:
case 1830:
case 2010:
case 170:
case 1207:
case 979:
case 1305:
case 2863:
case 298:
case 3456:
case 2992:
case 2484:
case 2183:
case 713:
case 1346:
case 1209:
case 1951:
case 1714:
case 2009:
case 3007:
case 151:
case 2634:
case 2035:
case 1998:
case 509:
case 3188:
case 3193:
case 1644:
case 1983:
case 436:
case 2206:
case 3840:
case 399:
case 2245:
case 118:
case 3982:
case 1831:
case 1457:
case 2667:
case 3703:
case 2336:
case 2011:
case 1211:
case 1702:
case 2669:
case 2840:
case 299:
case 464:
case 1364:
case 3245:
case 2982:
case 1459:
case 2193:
case 3708:
case 3206:
case 1950:
case 3011:
case 1512:
case 679:
case 3513:
case 3198:
case 2703:
case 1986:
case 2203:
case 3999:
case 629:
case 3844:
case 3338:
case 1640:
case 234:
case 3490:
case 3002:
case 3481:
case 2516:
case 3631:
case 3706:
case 3208:
case 4013:
case 2997:
case 928:
case 2338:
case 1202:
case 1954:
case 1711:
case 334:
case 2481:
case 2002:
case 3203:
case 2844:
case 2999:
case 2196:
case 1360:
case 85:
case 2745:
case 3333:
case 587:
case 2631:
case 2208:
case 1332:
case 1199:
case 1996:
case 1735:
case 3662:
case 822:
case 3186:
case 628:
case 3989:
case 300:
case 1500:
case 1517:
case 1663:
case 1641:
case 3480:
case 3866:
case 2342:
case 2453:
case 765:
case 1348:
case 2014:
case 739:
case 200:
case 1707:
case 865:
case 2866:
case 3342:
case 2480:
case 3154:
case 120:
case 1125:
case 2989:
case 839:
case 3987:
case 932:
case 3615:
case 2458:
case 421:
case 1197:
case 133:
case 483:
case 2630:
case 3014:
case 1770:
case 661:
case 3132:
case 3387:
case 1434:
case 992:
case 3858:
case 2722:
case 2026:
case 427:
case 1226:
case 1961:
case 1684:
case 899:
case 1085:
case 2853:
case 3891:
case 3880:
case 3466:
case 3074:
case 1579:
case 2285:
case 114:
case 2387:
case 3722:
case 799:
case 1948:
case 2132:
case 443:
case 1723:
case 3853:
case 974:
case 2466:
case 1274:
case 2880:
case 1138:
case 2074:
case 3285:
case 1396:
case 2675:
case 2160:
case 3026:
case 1852:
case 1771:
case 313:
case 530:
case 2148:
case 1932:
case 3397:
case 1027:
case 3933:
case 2227:
case 3161:
case 3229:
case 3143:
case 898:
case 3576:
case 4020:
case 1095:
case 2659:
case 3881:
case 1354:
case 3890:
case 523:
case 394:
case 3325:
case 961:
case 1469:
case 2933:
case 3227:
case 674:
case 2657:
case 213:
case 3659:
case 2576:
case 294:
case 2325:
case 2890:
case 3295:
case 2229:
case 1386:
case 2444:
case 3399:
case 185:
case 1029:
case 3524:
case 3287:
case 378:
case 491:
case 1089:
case 1103:
case 3096:
case 1404:
case 2289:
case 187:
case 2556:
case 190:
case 2821:
case 3102:
case 4058:
case 278:
case 1751:
case 1108:
case 1374:
case 440:
case 3556:
case 4091:
case 4080:
case 2584:
case 2096:
case 1783:
case 2114:
case 2413:
case 3297:
case 379:
case 2878:
case 2327:
case 3329:
case 1465:
case 2299:
case 310:
case 3225:
case 2820:
case 2395:
case 1097:
case 998:
case 3327:
case 1412:
case 3878:
case 861:
case 1750:
case 3908:
case 2225:
case 1025:
case 2418:
case 2594:
case 2086:
case 1788:
case 425:
case 1865:
case 2303:
case 2126:
case 2929:
case 3060:
case 1472:
case 1185:
case 41:
case 3736:
case 3174:
case 2747:
case 104:
case 3749:
case 3032:
case 2813:
case 3308:
case 1033:
case 95:
case 2233:
case 3927:
case 324:
case 1038:
case 2174:
case 2473:
case 3747:
case 3126:
case 3929:
case 622:
case 2818:
case 1812:
case 3478:
case 3233:
case 2927:
case 2032:
case 2308:
case 1616:
case 514:
case 3043:
case 1804:
case 1562:
case 638:
case 1195:
case 1042:
case 1974:
case 24:
case 1739:
case 2242:
case 3600:
case 1530:
case 2048:
case 1746:
case 2568:
case 1705:
case 585:
case 34:
case 2541:
case 2563:
case 2600:
case 3242:
case 2061:
case 2043:
case 1243:
case 1926:
case 1261:
case 1129:
case 1515:
case 181:
case 431:
case 3048:
case 1406:
case 3355:
case 3871:
case 3586:
case 1117:
case 1100:
case 695:
case 2554:
case 1057:
case 2257:
case 3627:
case 2259:
case 921:
case 563:
case 432:
case 1059:
case 1525:
case 2695:
case 2094:
case 4083:
case 2355:
case 2871:
case 375:
case 3257:
case 1589:
case 1075:
case 2379:
case 2056:
case 1256:
case 3917:
case 3685:
case 2116:
case 2410:
case 2407:
case 1791:
case 71:
case 3379:
case 3056:
case 1822:
case 2900:
case 2084:
case 1626:
case 467:
case 2870:
case 3410:
case 1587:
case 621:
case 3116:
case 2435:
case 2828:
case 549:
case 2230:
case 3428:
case 353:
case 3215:
case 1766:
case 762:
case 2068:
case 1268:
case 2807:
case 3561:
case 1062:
case 60:
case 2124:
case 1542:
case 3979:
case 627:
case 3176:
case 825:
case 3041:
case 4039:
case 3068:
case 2215:
case 3810:
case 2319:
case 935:
case 3230:
case 589:
case 2835:
case 3548:
case 1263:
case 2979:
case 2176:
case 1241:
case 3317:
case 1422:
case 2063:
case 4005:
case 2543:
case 4046:
case 1155:
case 3423:
case 2231:
case 927:
case 1744:
case 1316:
case 2608:
case 3769:
case 106:
case 3560:
case 2955:
case 1806:
case 791:
case 154:
case 2301:
case 516:
case 474:
case 3811:
case 3231:
case 891:
case 588:
case 142:
case 837:
case 4064:
case 1538:
case 3301:
case 2040:
case 943:
case 2560:
case 326:
case 163:
case 3219:
case 691:
case 1157:
case 2514:
case 3704:
case 962:
case 3315:
case 4010:
case 4007:
case 3194:
case 2362:
case 2837:
case 1661:
case 350:
case 1000:
case 637:
case 3642:
case 2200:
case 925:
case 735:
case 2219:
case 2704:
case 1019:
case 250:
case 2805:
case 1363:
case 498:
case 1956:
case 2493:
case 2975:
case 3837:
case 4009:
case 937:
case 2488:
case 1216:
case 4011:
case 843:
case 3184:
case 3483:
case 662:
case 1660:
case 1175:
case 1849:
case 1994:
case 236:
case 3864:
case 991:
case 364:
case 2156:
case 2959:
case 1001:
case 2638:
case 3502:
case 2712:
case 2633:
case 3638:
case 499:
case 2502:
case 3712:
case 2483:
case 3450:
case 743:
case 1713:
case 80:
case 336:
case 1224:
case 3255:
case 1686:
case 1162:
case 465:
case 61:
case 3699:
case 3076:
case 1595:
case 1940:
case 439:
case 3359:
case 3141:
case 1882:
case 821:
case 1130:
case 3772:
case 2168:
case 2697:
case 883:
case 3625:
case 2076:
case 721:
case 2163:
case 1276:
case 2464:
case 4071:
case 2255:
case 1394:
case 783:
case 1055:
case 3024:
case 3168:
case 3697:
case 1720:
case 1115:
case 997:
case 3888:
case 3357:
case 116:
case 2437:
case 4023:
case 2851:
case 1585:
case 45:
case 188:
case 2279:
case 3574:
case 3405:
case 3140:
case 377:
case 795:
case 3930:
case 2898:
case 2687:
case 2140:
case 3375:
case 680:
case 2962:
case 3526:
case 1384:
case 2893:
case 2446:
case 1721:
case 17:
case 3687:
case 1968:
case 2930:
case 1077:
case 554:
case 3461:
case 2777:
case 3144:
case 1693:
case 864:
case 1889:
case 1442:
case 1353:
case 12:
case 926:
case 736:
case 343:
case 2448:
case 3934:
case 3779:
case 3021:
case 836:
case 1391:
case 1522:
case 2692:
case 2570:
case 3777:
case 2144:
case 3523:
case 2934:
case 1358:
case 243:
case 3448:
case 2272:
case 3460:
case 850:
case 1944:
case 1072:
case 2854:
case 144:
case 1776:
case 1433:
case 1134:
case 494:
case 1390:
case 269:
case 152:
case 2166:
case 2073:
case 2682:
case 2571:
case 2460:
case 2886:
case 1650:
case 3078:
case 1897:
case 750:
case 2432:
case 1724:
case 2013:
case 3832:
case 3212:
case 2511:
case 3636:
case 3701:
case 3158:
case 675:
case 877:
case 3018:
case 1506:
case 2265:
case 3860:
case 1065:
case 295:
case 434:
case 1990:
case 3180:
case 2454:
case 2153:
case 2212:
case 2158:
case 1497:
case 1012:
case 558:
case 53:
case 3013:
case 1838:
case 2180:
case 4002:
case 1425:
case 1716:
case 3265:
case 2018:
case 2860:
case 1152:
case 2649:
case 2486:
case 1344:
case 777:
case 395:
case 466:
case 1218:
case 383:
case 4014:
case 2507:
case 2510:
case 3717:
case 3700:
case 505:
case 511:
case 3496:
case 2719:
case 1004:
case 3843:
case 3861:
case 975:
case 896:
case 3181:
case 1842:
case 3507:
case 2717:
case 2700:
case 101:
case 5:
case 2535:
case 400:
case 2181:
case 1637:
case 2843:
case 2861:
case 1313:
case 3267:
case 1740:
case 2365:
case 3044:
case 1803:
case 3606:
case 2269:
case 3645:
case 2312:
case 1611:
case 276:
case 2267:
case 1808:
case 696:
case 2802:
case 2645:
case 2972:
case 3365:
case 2044:
case 1244:
case 1429:
case 2814:
case 4048:
case 3762:
case 3539:
case 2178:
case 1034:
case 331:
case 1741:
case 1763:
case 1609:
case 3730:
case 1172:
case 3546:
case 3066:
case 44:
case 3505:
case 3173:
case 380:
case 2539:
case 3178:
case 677:
case 2762:
case 544:
case 1768:
case 19:
case 2173:
case 2474:
case 2505:
case 1266:
case 3715:
case 297:
case 3252:
case 2826:
case 671:
case 340:
case 3874:
case 158:
case 3080:
case 13:
case 1885:
case 1784:
case 936:
case 726:
case 2598:
case 3775:
case 1628:
case 3058:
case 240:
case 1291:
case 3622:
case 826:
case 2874:
case 1623:
case 2593:
case 2118:
case 2252:
case 337:
case 3826:
case 1756:
case 1258:
case 391:
case 1112:
case 584:
case 2775:
case 3598:
case 1:
case 501:
case 3757:
case 325:
case 1671:
case 1403:
case 1918:
case 636:
case 3090:
case 4054:
case 3402:
case 1895:
case 1794:
case 2588:
case 2912:
case 1827:
case 971:
case 1281:
case 1373:
case 1290:
case 410:
case 2402:
case 2081:
case 753:
case 2965:
case 225:
case 4086:
case 3912:
case 950:
case 3759:
case 1913:
case 1408:
case 3588:
case 1919:
case 1752:
case 3587:
case 2780:
case 2791:
case 2589:
case 3626:
case 3822:
case 2256:
case 2753:
case 1435:
case 1377:
case 601:
case 3674:
case 3758:
case 46:
case 3256:
case 3589:
case 1084:
case 2626:
case 1409:
case 1596:
case 3075:
case 175:
case 2057:
case 1257:
case 3916:
case 1411:
case 2781:
case 2599:
case 684:
case 3294:
case 4082:
case 382:
case 3376:
case 1554:
case 409:
case 79:
case 3790:
case 3781:
case 571:
case 3057:
case 2119:
case 2916:
case 915:
case 282:
case 1695:
case 2059:
case 2525:
case 1094:
case 455:
case 3324:
case 1355:
case 2294:
case 4049:
case 206:
case 1955:
case 3240:
case 2602:
case 2179:
case 3538:
case 2976:
case 3177:
case 2744:
case 2316:
case 907:
case 1608:
case 73:
case 1811:
case 4036:
case 2240:
case 3179:
case 3976:
case 2538:
case 3845:
case 858:
case 1471:
case 2924:
case 83:
case 652:
case 3806:
case 4047:
case 1769:
case 2177:
case 1532:
case 3316:
case 62:
case 2062:
case 1124:
case 3155:
case 2542:
case 1300:
case 3614:
case 2030:
case 7:
case 811:
case 1548:
case 1068:
case 759:
case 2268:
case 3015:
case 1810:
case 1807:
case 1979:
case 1176:
case 2263:
case 1734:
case 2241:
case 1063:
case 1561:
case 859:
case 1809:
case 1215:
case 3766:
case 952:
case 1319:
case 1428:
case 705:
case 659:
case 4006:
case 2175:
case 2994:
case 2849:
case 3713:
case 2503:
case 486:
case 1156:
case 1959:
case 2001:
case 1201:
case 1016:
case 2718:
case 2632:
case 1488:
case 707:
case 2216:
case 958:
case 72:
case 3847:
case 164:
case 2340:
case 349:
case 807:
case 1184:
case 3503:
case 3175:
case 3849:
case 3836:
case 1633:
case 2508:
case 3632:
case 611:
case 1765:
case 3216:
case 1957:
case 658:
case 63:
case 1837:
case 2984:
case 2661:
case 2000:
case 171:
case 2492:
case 248:
case 3956:
case 1217:
case 3159:
case 1498:
case 1514:
case 3019:
case 9:
case 744:
case 470:
case 150:
case 3000:
case 3017:
case 2363:
case 348:
case 911:
case 1642:
case 2159:
case 1194:
case 3984:
case 3661:
case 451:
case 752:
case 2648:
case 363:
case 1219:
case 1704:
case 3077:
case 1915:
case 37:
case 784:
case 3968:
case 2696:
case 216:
case 3384:
case 1851:
case 2585:
case 1279:
case 2963:
case 288:
case 2079:
case 2356:
case 27:
case 2721:
case 526:
case 2077:
case 177:
case 1277:
case 3941:
case 3963:
case 1574:
case 3356:
case 1140:
case 316:
case 1446:
case 884:
case 1893:
case 1357:
case 1168:
case 3720:
case 3115:
case 446:
case 2686:
case 3394:
case 2162:
case 3778:
case 3654:
case 289:
case 3276:
case 99:
case 2115:
case 3773:
case 3436:
case 1931:
case 3130:
case 715:
case 1772:
case 1076:
case 402:
case 389:
case 3940:
case 1359:
case 1141:
case 701:
case 1163:
case 2394:
case 3162:
case 2055:
case 1883:
case 196:
case 3688:
case 580:
case 2134:
case 1078:
case 2776:
case 4027:
case 2433:
case 960:
case 748:
case 597:
case 2278:
case 1272:
case 654:
case 531:
case 3390:
case 3825:
case 3381:
case 1020:
case 2220:
case 606:
case 3438:
case 3776:
case 3433:
case 2897:
case 863:
case 3278:
case 1432:
case 2688:
case 2724:
case 2381:
case 2438:
case 344:
case 848:
case 1460:
case 2650:
case 3899:
case 485:
case 135:
case 493:
case 1448:
case 954:
case 3358:
case 1523:
case 2889:
case 3391:
case 3522:
case 414:
case 2966:
case 2169:
case 2887:
case 1934:
case 942:
case 51:
case 2167:
case 1528:
case 2380:
case 3442:
case 2391:
case 1692:
case 2522:
case 32:
case 3966:
case 1570:
case 1896:
case 849:
case 3693:
case 2651:
case 1952:
case 1204:
case 315:
case 2004:
case 3953:
case 2605:
case 1507:
case 1334:
case 525:
case 2639:
case 3980:
case 2953:
case 420:
case 1190:
case 1181:
case 2637:
case 215:
case 3004:
case 889:
case 1861:
case 201:
case 982:
case 1700:
case 3958:
case 121:
case 3639:
case 183:
case 433:
case 3716:
case 2499:
case 3152:
case 3344:
case 195:
case 3218:
case 2664:
case 2981:
case 3838:
case 1153:
case 3425:
case 1454:
case 540:
case 2213:
case 87:
case 788:
case 3497:
case 2833:
case 3012:
case 384:
case 3664:
case 3545:
case 1180:
case 2425:
case 1191:
case 445:
case 2716:
case 3506:
case 1486:
case 1860:
case 2152:
case 2344:
case 1212:
case 1701:
case 1158:
case 2497:
case 3213:
case 4008:
case 1832:
case 1367:
case 1426:
case 2609:
case 882:
case 1537:
case 688:
case 2172:
case 2485:
case 3768:
case 1120:
case 39:
case 3921:
case 1814:
case 1178:
case 2034:
case 2741:
case 3607:
case 1234:
case 989:
case 3485:
case 2768:
case 2266:
case 180:
case 430:
case 1730:
case 3034:
case 481:
case 2610:
case 423:
case 2803:
case 2549:
case 1365:
case 689:
case 3244:
case 3429:
case 1121:
case 2495:
case 2313:
case 3067:
case 916:
case 3611:
case 2536:
case 2740:
case 3973:
case 3495:
case 3069:
case 4038:
case 1564:
case 3549:
case 3803:
case 2244:
case 1606:
case 1731:
case 3536:
case 527:
case 2547:
case 3740:
case 50:
case 3313:
case 2067:
case 1267:
case 2808:
case 3408:
case 3913:
case 311:
case 760:
case 1912:
case 2378:
case 2:
case 1550:
case 649:
case 2918:
case 2403:
case 963:
case 3281:
case 3290:
case 583:
case 2895:
case 2320:
case 3378:
case 3827:
case 2408:
case 2290:
case 4025:
case 1090:
case 359:
case 1081:
case 3320:
case 860:
case 2829:
case 1583:
case 1757:
case 3104:
case 2784:
case 706:
case 1113:
case 754:
case 3756:
case 191:
case 1551:
case 4089:
case 648:
case 137:
case 1826:
case 2165:
case 2670:
case 3291:
case 258:
case 23:
case 2885:
case 441:
case 2756:
case 1058:
case 4087:
case 3784:
case 140:
case 3253:
case 3592:
case 3321:
case 358:
case 806:
case 1593:
case 1118:
case 1904:
case 2623:
case 1252:
case 3670:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1758733201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,];
var gg_b = "1758733201/";

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
