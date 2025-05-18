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
case 2422:
case 3552:
case 791:
case 1444:
case 3171:
case 1099:
case 795:
case 1714:
case 3642:
case 2142:
case 3715:
case 1409:
case 3273:
case 2354:
case 578:
case 2671:
case 798:
case 1031:
case 3835:
case 1377:
case 1105:
case 1259:
case 1784:
case 1498:
case 512:
case 3149:
case 3582:
case 367:
case 2519:
case 2036:
case 2384:
case 1834:
case 575:
case 769:
case 2559:
case 58:
case 580:
case 1871:
case 2087:
case 3021:
case 2297:
case 1825:
case 990:
case 3669:
case 3178:
case 419:
case 2876:
case 4010:
case 605:
case 896:
case 3920:
case 1597:
case 2790:
case 507:
case 1001:
case 2057:
case 1849:
case 2662:
case 1390:
case 2006:
case 3162:
case 1038:
case 608:
case 629:
case 2465:
case 1804:
case 3134:
case 202:
case 3888:
case 3701:
case 1627:
case 3996:
case 3306:
case 1932:
case 1964:
case 332:
case 445:
case 474:
case 3965:
case 1403:
case 3686:
case 3357:
case 1775:
case 2116:
case 2140:
case 3818:
case 130:
case 420:
case 1253:
case 2272:
case 3858:
case 1721:
case 3607:
case 3550:
case 3387:
case 3656:
case 2643:
case 1111:
case 1572:
case 3423:
case 3510:
case 3546:
case 3616:
case 3294:
case 4082:
case 281:
case 812:
case 3731:
case 27:
case 2595:
case 1561:
case 1266:
case 1085:
case 2929:
case 1433:
case 3663:
case 3708:
case 875:
case 844:
case 3881:
case 42:
case 2566:
case 13:
case 2261:
case 1295:
case 1118:
case 133:
case 288:
case 4012:
case 3799:
case 423:
case 3922:
case 1843:
case 3811:
case 273:
case 1015:
case 1728:
case 878:
case 3851:
case 1055:
case 2118:
case 188:
case 233:
case 2843:
case 3944:
case 1328:
case 2158:
case 860:
case 3658:
case 2055:
case 3399:
case 3618:
case 3548:
case 2728:
case 453:
case 181:
case 3308:
case 835:
case 45:
case 2392:
case 2561:
case 2266:
case 831:
case 185:
case 17:
case 1163:
case 3594:
case 1792:
case 3736:
case 1929:
case 2433:
case 2295:
case 1660:
case 23:
case 1261:
case 1827:
case 2213:
case 230:
case 1140:
case 1272:
case 3210:
case 1156:
case 3611:
case 2326:
case 170:
case 1643:
case 1375:
case 1420:
case 863:
case 1107:
case 1321:
case 1553:
case 268:
case 1726:
case 3717:
case 3090:
case 2860:
case 3579:
case 2283:
case 3338:
case 2627:
case 1268:
case 2093:
case 3681:
case 315:
case 2964:
case 1583:
case 2403:
case 3706:
case 736:
case 3301:
case 261:
case 3400:
case 3127:
case 2568:
case 789:
case 56:
case 1017:
case 1662:
case 659:
case 1496:
case 3432:
case 2849:
case 387:
case 2804:
case 3393:
case 1465:
case 3903:
case 1087:
case 2871:
case 2825:
case 1169:
case 349:
case 1297:
case 1876:
case 1923:
case 2439:
case 694:
case 979:
case 2597:
case 3026:
case 747:
case 3385:
case 2105:
case 927:
case 2219:
case 2031:
case 531:
case 30:
case 3402:
case 3092:
case 1036:
case 1777:
case 117:
case 1649:
case 2834:
case 1384:
case 3282:
case 4094:
case 2289:
case 2754:
case 704:
case 3967:
case 1422:
case 3573:
case 2714:
case 2099:
case 3869:
case 3624:
case 2878:
case 3252:
case 1354:
case 406:
case 1625:
case 4048:
case 2124:
case 1142:
case 2409:
case 3212:
case 1314:
case 1270:
case 560:
case 1671:
case 767:
case 3013:
case 2050:
case 2639:
case 398:
case 2046:
case 1940:
case 2951:
case 1809:
case 3139:
case 369:
case 2911:
case 1907:
case 4087:
case 3083:
case 2691:
case 402:
case 2290:
case 2164:
case 4006:
case 1986:
case 391:
case 4057:
case 3927:
case 1462:
case 1696:
case 3829:
case 3191:
case 584:
case 1434:
case 1789:
case 3352:
case 627:
case 3144:
case 2958:
case 540:
case 3312:
case 1214:
case 2918:
case 106:
case 1839:
case 2554:
case 3215:
case 1145:
case 2644:
case 2770:
case 3255:
case 2514:
case 1094:
case 1577:
case 1963:
case 1719:
case 2988:
case 417:
case 4036:
case 1759:
case 2102:
case 3066:
case 1891:
case 1404:
case 2359:
case 525:
case 3536:
case 666:
case 1460:
case 3019:
case 3488:
case 2905:
case 2633:
case 22:
case 1361:
case 1803:
case 3208:
case 3133:
case 47:
case 2292:
case 2082:
case 2130:
case 2366:
case 481:
case 3418:
case 153:
case 3089:
case 3299:
case 376:
case 3458:
case 2528:
case 809:
case 2052:
case 2820:
case 223:
case 488:
case 2924:
case 3976:
case 2012:
case 241:
case 1783:
case 3506:
case 245:
case 2603:
case 2147:
case 2935:
case 2383:
case 3517:
case 134:
case 1713:
case 248:
case 3:
case 2772:
case 1443:
case 1526:
case 843:
case 3587:
case 2575:
case 220:
case 2313:
case 3350:
case 1372:
case 2353:
case 3310:
case 3451:
case 2521:
case 2226:
case 250:
case 3623:
case 2713:
case 3416:
case 3341:
case 2620:
case 2443:
case 2526:
case 3456:
case 3746:
case 2221:
case 2867:
case 3097:
case 120:
case 1521:
case 3978:
case 1226:
case 499:
case 1353:
case 2372:
case 3486:
case 461:
case 3217:
case 1935:
case 3780:
case 145:
case 1768:
case 3257:
case 2833:
case 4093:
case 3206:
case 3934:
case 1427:
case 322:
case 3830:
case 2368:
case 3925:
case 715:
case 4015:
case 711:
case 3437:
case 123:
case 772:
case 3070:
case 336:
case 1924:
case 3348:
case 3508:
case 855:
case 592:
case 2460:
case 2592:
case 718:
case 982:
case 3847:
case 1395:
case 864:
case 1905:
case 4085:
case 2766:
case 3394:
case 1292:
case 3531:
case 3236:
case 3904:
case 2803:
case 3800:
case 25:
case 977:
case 3585:
case 2094:
case 3864:
case 3629:
case 2759:
case 3960:
case 1102:
case 1988:
case 555:
case 1698:
case 347:
case 1277:
case 1359:
case 1865:
case 4031:
case 2404:
case 2471:
case 558:
case 1958:
case 3373:
case 3122:
case 389:
case 2048:
case 2214:
case 2839:
case 69:
case 3752:
case 1389:
case 1514:
case 2622:
case 2145:
case 3712:
case 1770:
case 1644:
case 1290:
case 1164:
case 2898:
case 2986:
case 3196:
case 1132:
case 2696:
case 2079:
case 901:
case 4001:
case 703:
case 2434:
case 905:
case 3943:
case 2956:
case 70:
case 2844:
case 3072:
case 1046:
case 3469:
case 2940:
case 1797:
case 119:
case 1639:
case 2809:
case 2478:
case 2397:
case 929:
case 2041:
case 516:
case 4075:
case 717:
case 3951:
case 1072:
case 2053:
case 3639:
case 319:
case 298:
case 3050:
case 2013:
case 3822:
case 893:
case 2191:
case 1165:
case 2664:
case 2927:
case 291:
case 2293:
case 104:
case 3080:
case 3132:
case 1802:
case 3290:
case 3691:
case 2083:
case 2255:
case 586:
case 3644:
case 1712:
case 702:
case 996:
case 3476:
case 1442:
case 1752:
case 2773:
case 3609:
case 1555:
case 3958:
case 1515:
case 3359:
case 1061:
case 3277:
case 147:
case 3896:
case 1960:
case 1832:
case 2382:
case 3988:
case 1585:
case 616:
case 3761:
case 770:
case 3366:
case 3082:
case 1904:
case 4084:
case 1394:
case 3292:
case 32:
case 3905:
case 1463:
case 1847:
case 3395:
case 2059:
case 2630:
case 2794:
case 2019:
case 1949:
case 1599:
case 0:
case 2976:
case 3924:
case 4054:
case 426:
case 4014:
case 590:
case 2458:
case 1971:
case 539:
case 2089:
case 2418:
case 122:
case 944:
case 2103:
case 59:
case 2779:
case 557:
case 432:
case 3147:
case 3935:
case 912:
case 1257:
case 788:
case 252:
case 374:
case 345:
case 2201:
case 1486:
case 1379:
case 658:
case 1217:
case 3226:
case 2451:
case 2411:
case 2350:
case 3313:
case 320:
case 3575:
case 978:
case 1341:
case 1710:
case 1456:
case 3772:
case 1287:
case 2:
case 1623:
case 348:
case 1440:
case 1416:
case 1346:
case 1310:
case 2978:
case 418:
case 1451:
case 1741:
case 73:
case 1350:
case 2120:
case 2407:
case 1587:
case 3867:
case 2097:
case 3526:
case 2746:
case 2456:
case 866:
case 3443:
case 3753:
case 2341:
case 2440:
case 3969:
case 2287:
case 3275:
case 411:
case 3368:
case 334:
case 609:
case 2830:
case 1380:
case 1647:
case 2501:
case 1517:
case 1779:
case 3833:
case 1238:
case 152:
case 935:
case 1600:
case 2538:
case 472:
case 2217:
case 931:
case 1506:
case 527:
case 2379:
case 3783:
case 684:
case 2599:
case 1976:
case 3942:
case 64:
case 754:
case 2437:
case 176:
case 2971:
case 1167:
case 353:
case 2925:
case 35:
case 2800:
case 1133:
case 2904:
case 2463:
case 799:
case 3361:
case 96:
case 3592:
case 1231:
case 2949:
case 1536:
case 1630:
case 2508:
case 842:
case 1794:
case 2061:
case 514:
case 3129:
case 1095:
case 2782:
case 1602:
case 247:
case 542:
case 1198:
case 4092:
case 1066:
case 1382:
case 3759:
case 2832:
case 3094:
case 1405:
case 3963:
case 3719:
case 3145:
case 3937:
case 1109:
case 1773:
case 2442:
case 3214:
case 3425:
case 1312:
case 3048:
case 2122:
case 2373:
case 2515:
case 2645:
case 1144:
case 3471:
case 2593:
case 3079:
case 3590:
case 1632:
case 2802:
case 3986:
case 2196:
case 487:
case 204:
case 1435:
case 1083:
case 195:
case 3907:
case 1139:
case 169:
case 3809:
case 3940:
case 3916:
case 3844:
case 1013:
case 3956:
case 566:
case 2943:
case 1212:
case 3314:
case 3671:
case 2755:
case 103:
case 3625:
case 2125:
case 1624:
case 1869:
case 859:
case 1315:
case 1967:
case 1933:
case 3559:
case 2429:
case 1605:
case 1282:
case 3384:
case 3777:
case 4066:
case 562:
case 3519:
case 2582:
case 4095:
case 1026:
case 1842:
case 3876:
case 2824:
case 469:
case 2021:
case 3087:
case 2075:
case 302:
case 4083:
case 1903:
case 1393:
case 2162:
case 3006:
case 3017:
case 3634:
case 2357:
case 2580:
case 1400:
case 723:
case 660:
case 172:
case 925:
case 2317:
case 921:
case 452:
case 1991:
case 537:
case 2279:
case 1757:
case 1863:
case 324:
case 2306:
case 1579:
case 1090:
case 3186:
case 638:
case 2888:
case 1338:
case 3321:
case 2616:
case 2510:
case 2546:
case 2423:
case 909:
case 846:
case 3420:
case 3513:
case 3375:
case 2607:
case 1210:
case 1246:
case 1611:
case 2143:
case 3156:
case 2818:
case 118:
case 1651:
case 1787:
case 3116:
case 3140:
case 3660:
case 3261:
case 663:
case 1430:
case 4019:
case 720:
case 2881:
case 2708:
case 594:
case 1736:
case 4059:
case 3595:
case 3163:
case 37:
case 1998:
case 381:
case 2336:
case 2294:
case 2160:
case 4089:
case 2851:
case 1548:
case 1807:
case 3137:
case 1658:
case 373:
case 476:
case 2248:
case 226:
case 2922:
case 1856:
case 559:
case 2637:
case 1944:
case 741:
case 943:
case 1840:
case 388:
case 745:
case 2054:
case 2548:
case 3728:
case 2618:
case 2909:
case 1811:
case 2807:
case 2658:
case 1014:
case 3158:
case 1248:
case 3843:
case 1922:
case 333:
case 1054:
case 33:
case 3433:
case 3085:
case 2331:
case 2594:
case 1881:
case 1708:
case 1663:
case 1336:
case 3392:
case 1731:
case 2998:
case 2308:
case 680:
case 1510:
case 2939:
case 1546:
case 368:
case 1423:
case 1241:
case 3151:
case 675:
case 1616:
case 1640:
case 2837:
case 1550:
case 1656:
case 797:
case 3326:
case 2541:
case 3721:
case 612:
case 1858:
case 2250:
case 3213:
case 1818:
case 218:
case 3568:
case 2400:
case 1580:
case 2301:
case 3181:
case 678:
case 2991:
case 1279:
case 365:
case 3403:
case 1965:
case 81:
case 1317:
case 132:
case 2681:
case 2447:
case 3093:
case 2863:
case 3627:
case 964:
case 1701:
case 577:
case 3283:
case 882:
case 3932:
case 1306:
case 3860:
case 2579:
case 2717:
case 1996:
case 2903:
case 3804:
case 2635:
case 3390:
case 3900:
case 2432:
case 3849:
case 877:
case 992:
case 3135:
case 3001:
case 706:
case 3074:
case 2026:
case 1920:
case 1178:
case 2842:
case 3439:
case 4072:
case 1021:
case 3825:
case 1075:
case 801:
case 1104:
case 2282:
case 3008:
case 3930:
case 1785:
case 447:
case 3498:
case 3784:
case 3259:
case 1582:
case 2402:
case 1149:
case 4061:
case 3105:
case 2385:
case 1755:
case 2212:
case 808:
case 3409:
case 1715:
case 2176:
case 3124:
case 203:
case 1273:
case 1125:
case 3099:
case 3570:
case 2355:
case 1512:
case 1642:
case 1552:
case 510:
case 3444:
case 3754:
case 3533:
case 709:
case 2788:
case 2801:
case 728:
case 1608:
case 1763:
case 11:
case 1857:
case 2636:
case 3136:
case 633:
case 832:
case 1388:
case 1631:
case 92:
case 182:
case 923:
case 2071:
case 2718:
case 3628:
case 63:
case 1989:
case 4009:
case 113:
case 380:
case 3042:
case 2128:
case 3567:
case 3973:
case 3826:
case 371:
case 4091:
case 2831:
case 1381:
case 3503:
case 262:
case 1786:
case 344:
case 2606:
case 375:
case 3468:
case 38:
case 668:
case 1480:
case 3157:
case 630:
case 699:
case 2062:
case 3106:
case 3892:
case 941:
case 312:
case 743:
case 3727:
case 2547:
case 3187:
case 1450:
case 74:
case 2307:
case 1311:
case 920:
case 378:
case 784:
case 2899:
case 3069:
case 3472:
case 661:
case 1446:
case 1351:
case 2340:
case 2316:
case 3621:
case 3220:
case 2223:
case 2441:
case 2687:
case 3378:
case 439:
case 108:
case 490:
case 1953:
case 1769:
case 3497:
case 129:
case 3941:
case 2815:
case 259:
case 2855:
case 919:
case 1264:
case 3362:
case 2735:
case 1190:
case 3086:
case 294:
case 2968:
case 1983:
case 3334:
case 3591:
case 3296:
case 867:
case 2885:
case 1693:
case 2564:
case 3979:
case 2342:
case 396:
case 3222:
case 1655:
case 3948:
case 2154:
case 1545:
case 2114:
case 1615:
case 3776:
case 3614:
case 1412:
case 3470:
case 2245:
case 237:
case 2705:
case 1966:
case 3304:
case 1685:
case 2184:
case 2893:
case 3063:
case 4033:
case 1305:
case 1995:
case 532:
case 49:
case 1482:
case 2502:
case 1705:
case 1060:
case 137:
case 1893:
case 427:
case 3459:
case 2202:
case 572:
case 1184:
case 2305:
case 511:
case 2482:
case 3704:
case 1229:
case 2655:
case 3018:
case 3489:
case 1342:
case 3376:
case 3209:
case 849:
case 518:
case 3115:
case 2742:
case 792:
case 1245:
case 2412:
case 194:
case 1968:
case 2264:
case 3980:
case 3884:
case 2232:
case 2983:
case 3565:
case 3081:
case 1564:
case 3762:
case 1885:
case 80:
case 3690:
case 3291:
case 1532:
case 2953:
case 3946:
case 3910:
case 3854:
case 208:
case 3950:
case 229:
case 803:
case 479:
case 3778:
case 1855:
case 159:
case 856:
case 2674:
case 1121:
case 1899:
case 3743:
case 3453:
case 2523:
case 2446:
case 360:
case 1078:
case 338:
case 1316:
case 1340:
case 2707:
case 950:
case 3828:
case 1223:
case 1441:
case 3174:
case 2126:
case 624:
case 4065:
case 3483:
case 162:
case 670:
case 3101:
case 442:
case 2381:
case 716:
case 2480:
case 2638:
case 1606:
case 1479:
case 2836:
case 1808:
case 3203:
case 414:
case 1781:
case 1657:
case 50:
case 1034:
case 335:
case 2200:
case 3875:
case 1718:
case 3199:
case 363:
case 2989:
case 1758:
case 1448:
case 3912:
case 953:
case 2737:
case 2076:
case 3024:
case 2699:
case 3952:
case 549:
case 818:
case 1128:
case 673:
case 3131:
case 587:
case 1788:
case 1801:
case 2817:
case 3760:
case 95:
case 1636:
case 1530:
case 2608:
case 21:
case 1049:
case 2857:
case 997:
case 688:
case 1838:
case 815:
case 2806:
case 3982:
case 1004:
case 2230:
case 2631:
case 2401:
case 2894:
case 3064:
case 1286:
case 4034:
case 3303:
case 321:
case 1417:
case 2183:
case 1679:
case 1747:
case 325:
case 1096:
case 2300:
case 2680:
case 650:
case 1406:
case 2586:
case 2281:
case 142:
case 3227:
case 2091:
case 3861:
case 924:
case 2347:
case 3150:
case 2507:
case 1487:
case 328:
case 1216:
case 1511:
case 3110:
case 1172:
case 2153:
case 2848:
case 634:
case 2039:
case 2516:
case 2540:
case 3720:
case 340:
case 2610:
case 876:
case 3653:
case 1207:
case 3426:
case 2556:
case 2251:
case 707:
case 3613:
case 2431:
case 4004:
case 1984:
case 2166:
case 2330:
case 1880:
case 2098:
case 778:
case 3868:
case 2879:
case 981:
case 653:
case 3666:
case 595:
case 2977:
case 1730:
case 2563:
case 783:
case 591:
case 775:
case 1914:
case 2044:
case 973:
case 2537:
case 569:
case 78:
case 1850:
case 2218:
case 1954:
case 697:
case 1846:
case 2258:
case 2499:
case 343:
case 1518:
case 988:
case 3955:
case 166:
case 4071:
case 2841:
case 8:
case 1558:
case 3915:
case 2542:
case 2189:
case 2612:
case 869:
case 2067:
case 3897:
case 2224:
case 3152:
case 1242:
case 1928:
case 3525:
case 2745:
case 3689:
case 2205:
case 2682:
case 29:
case 3504:
case 1702:
case 3659:
case 891:
case 2033:
case 2485:
case 3398:
case 437:
case 606:
case 552:
case 3908:
case 3549:
case 4060:
case 3030:
case 3182:
case 2992:
case 459:
case 3578:
case 3339:
case 1197:
case 1975:
case 3974:
case 4043:
case 2873:
case 2926:
case 1852:
case 290:
case 2569:
case 1812:
case 3490:
case 1764:
case 3047:
case 902:
case 1732:
case 2493:
case 3901:
case 3534:
case 2003:
case 1535:
case 2364:
case 3765:
case 2332:
case 3000:
case 1235:
case 3957:
case 4027:
case 2732:
case 1493:
case 3262:
case 1364:
case 2535:
case 3791:
case 1332:
case 3906:
case 2882:
case 3396:
case 3889:
case 2197:
case 3278:
case 429:
case 2020:
case 889:
case 408:
case 139:
case 19:
case 157:
case 2329:
case 2702:
case 1159:
case 477:
case 3798:
case 3484:
case 3249:
case 1033:
case 2505:
case 804:
case 3204:
case 1302:
case 1992:
case 3744:
case 1542:
case 3271:
case 1189:
case 3414:
case 1652:
case 2673:
case 2242:
case 3709:
case 3322:
case 1224:
case 1415:
case 193:
case 2170:
case 1745:
case 1455:
case 2022:
case 1537:
case 2850:
case 3813:
case 1218:
case 2914:
case 1044:
case 1258:
case 4076:
case 3853:
case 1499:
case 316:
case 413:
case 2954:
case 933:
case 1009:
case 266:
case 735:
case 3045:
case 1841:
case 2558:
case 3428:
case 482:
case 3194:
case 2984:
case 3883:
case 1288:
case 1098:
case 2263:
case 2880:
case 1330:
case 2588:
case 1408:
case 2436:
case 738:
case 504:
case 1977:
case 2694:
case 1195:
case 2240:
case 2511:
case 2487:
case 1507:
case 2641:
case 3475:
case 2551:
case 968:
case 3421:
case 3243:
case 2323:
case 1153:
case 2172:
case 358:
case 1610:
case 2207:
case 1039:
case 1540:
case 1474:
case 76:
case 674:
case 3141:
case 645:
case 1556:
case 1251:
case 763:
case 1183:
case 3527:
case 2747:
case 1990:
case 2457:
case 954:
case 3866:
case 2096:
case 1300:
case 214:
case 3703:
case 364:
case 3179:
case 1680:
case 648:
case 3895:
case 932:
case 3347:
case 1895:
case 3091:
case 471:
case 2227:
case 2683:
case 155:
case 1179:
case 48:
case 3281:
case 3586:
case 1668:
case 1703:
case 151:
case 475:
case 444:
case 3300:
case 2180:
case 746:
case 3401:
case 3894:
case 2064:
case 1141:
case 3650:
case 478:
case 3251:
case 2426:
case 3556:
case 2543:
case 3723:
case 158:
case 2720:
case 3039:
case 3211:
case 1421:
case 3153:
case 2146:
case 823:
case 3113:
case 841:
case 3563:
case 3977:
case 874:
case 2560:
case 1733:
case 3879:
case 284:
case 636:
case 407:
case 24:
case 2002:
case 1045:
case 2915:
case 1428:
case 848:
case 2955:
case 243:
case 1767:
case 1853:
case 762:
case 820:
case 2872:
case 4042:
case 116:
case 1813:
case 3537:
case 3044:
case 393:
case 3745:
case 819:
case 548:
case 2344:
case 2571:
case 1322:
case 3224:
case 3652:
case 1414:
case 3067:
case 3612:
case 1744:
case 1454:
case 3189:
case 1271:
case 520:
case 3542:
case 2309:
case 3302:
case 1204:
case 1936:
case 2908:
case 545:
case 574:
case 689:
case 2398:
case 967:
case 3485:
case 2659:
case 3159:
case 1484:
case 1249:
case 2931:
case 1798:
case 3119:
case 357:
case 4040:
case 4016:
case 2870:
case 604:
case 339:
case 390:
case 3873:
case 1739:
case 1697:
case 4007:
case 523:
case 2578:
case 1791:
case 52:
case 2938:
case 2000:
case 1234:
case 2765:
case 192:
case 3364:
case 2391:
case 2901:
case 3493:
case 1859:
case 1365:
case 3235:
case 1819:
case 2490:
case 2396:
case 2234:
case 3882:
case 2791:
case 3535:
case 2262:
case 292:
case 2917:
case 3732:
case 2859:
case 2365:
case 55:
case 2819:
case 1562:
case 669:
case 1490:
case 2957:
case 987:
case 3764:
case 949:
case 2023:
case 553:
case 1974:
case 806:
case 3852:
case 4011:
case 3975:
case 2987:
case 3197:
case 1578:
case 3921:
case 4088:
case 90:
case 2204:
case 534:
case 2484:
case 1504:
case 2798:
case 3329:
case 1689:
case 2173:
case 4058:
case 1571:
case 3345:
case 2225:
case 2271:
case 2576:
case 903:
case 2744:
case 2454:
case 2670:
case 3524:
case 1367:
case 1915:
case 3237:
case 3518:
case 366:
case 1955:
case 3954:
case 2148:
case 2767:
case 2853:
case 3022:
case 4005:
case 2029:
case 676:
case 3161:
case 2733:
case 3436:
case 3588:
case 1666:
case 3880:
case 46:
case 1868:
case 3263:
case 2883:
case 1333:
case 2260:
case 1695:
case 1543:
case 652:
case 2141:
case 853:
case 506:
case 1653:
case 782:
case 3323:
case 3551:
case 438:
case 2320:
case 2475:
case 1150:
case 3487:
case 3216:
case 1861:
case 1227:
case 1683:
case 255:
case 4035:
case 3065:
case 2895:
case 2179:
case 911:
case 2668:
case 314:
case 3168:
case 2866:
case 3096:
case 972:
case 1180:
case 897:
case 435:
case 1064:
case 3581:
case 1993:
case 3417:
case 121:
case 1303:
case 2461:
case 3004:
case 1495:
case 484:
case 1108:
case 207:
case 3838:
case 1233:
case 16:
case 824:
case 2360:
case 1982:
case 3636:
case 656:
case 1692:
case 3530:
case 3801:
case 1131:
case 1760:
case 2533:
case 1005:
case 2567:
case 1024:
case 1199:
case 3025:
case 443:
case 870:
case 3448:
case 3758:
case 346:
case 3718:
case 3071:
case 952:
case 3547:
case 881:
case 135:
case 4064:
case 3617:
case 212:
case 3386:
case 2892:
case 3657:
case 1138:
case 618:
case 1203:
case 885:
case 3808:
case 2157:
case 244:
case 2117:
case 2503:
case 1035:
case 1101:
case 271:
case 3751:
case 3441:
case 3223:
case 1828:
case 3356:
case 428:
case 283:
case 611:
case 3711:
case 9:
case 3340:
case 440:
case 672:
case 3121:
case 873:
case 2472:
case 1743:
case 1453:
case 278:
case 3307:
case 2187:
case 3997:
case 1413:
case 1051:
case 2941:
case 1239:
case 1814:
case 757:
case 1946:
case 2016:
case 2040:
case 969:
case 573:
case 687:
case 1690:
case 1734:
case 991:
case 793:
case 4047:
case 817:
case 2334:
case 1193:
case 394:
case 3735:
case 2362:
case 2654:
case 2371:
case 1209:
case 2544:
case 3724:
case 2776:
case 2037:
case 2614:
case 3473:
case 1115:
case 3114:
case 1018:
case 570:
case 296:
case 1376:
case 2509:
case 1244:
case 524:
case 3502:
case 1704:
case 1185:
case 2684:
case 790:
case 739:
case 3961:
case 1749:
case 1459:
case 1298:
case 3184:
case 2890:
case 1419:
case 4030:
case 337:
case 1598:
case 2704:
case 1349:
case 1684:
case 2677:
case 1994:
case 3685:
case 2459:
case 561:
case 3529:
case 947:
case 1470:
case 989:
case 3412:
case 667:
case 1614:
case 1776:
case 3452:
case 599:
case 2209:
case 568:
case 2244:
case 2489:
case 1509:
case 1948:
case 3655:
case 1222:
case 2291:
case 3027:
case 2596:
case 2690:
case 1265:
case 1877:
case 3335:
case 2762:
case 2081:
case 3693:
case 3983:
case 305:
case 1296:
case 492:
case 1334:
case 3190:
case 2980:
case 301:
case 1941:
case 2011:
case 2814:
case 1056:
case 329:
case 3913:
case 308:
case 1539:
case 2946:
case 4023:
case 3953:
case 1016:
case 1343:
case 1621:
case 3756:
case 3446:
case 2743:
case 3351:
case 1187:
case 2413:
case 3311:
case 3200:
case 235:
case 3601:
case 766:
case 2203:
case 1468:
case 144:
case 175:
case 922:
case 3247:
case 2327:
case 3638:
case 3480:
case 1157:
case 18:
case 171:
case 3786:
case 2483:
case 1503:
case 830:
case 3358:
case 1826:
case 1973:
case 742:
case 313:
case 3699:
case 2821:
case 2267:
case 263:
case 2199:
case 936:
case 4045:
case 1628:
case 3631:
case 626:
case 3230:
case 1360:
case 3806:
case 2982:
case 3192:
case 107:
case 26:
case 31:
case 2466:
case 865:
case 3919:
case 3763:
case 2692:
case 1533:
case 861:
case 3959:
case 3817:
case 2005:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1747573201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,];
var gg_b = "1747573201/";

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
