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
case 337:
case 73:
case 1873:
case 1827:
case 345:
case 3995:
case 2700:
case 1288:
case 2988:
case 1455:
case 2014:
case 1110:
case 3398:
case 2385:
case 2883:
case 1493:
case 988:
case 1367:
case 2446:
case 2596:
case 2726:
case 3684:
case 2816:
case 2278:
case 41:
case 2403:
case 2919:
case 1219:
case 3498:
case 3548:
case 1197:
case 2364:
case 940:
case 2000:
case 1393:
case 1895:
case 1017:
case 3168:
case 2485:
case 1958:
case 2258:
case 351:
case 2642:
case 778:
case 3037:
case 1071:
case 3535:
case 3665:
case 3623:
case 550:
case 423:
case 3878:
case 2026:
case 3216:
case 74:
case 2714:
case 1631:
case 3283:
case 2824:
case 3509:
case 1520:
case 1236:
case 3205:
case 1790:
case 2081:
case 1355:
case 1878:
case 2654:
case 1216:
case 3475:
case 2734:
case 1611:
case 3561:
case 3631:
case 998:
case 2983:
case 1283:
case 2905:
case 3520:
case 3853:
case 421:
case 3355:
case 4007:
case 1548:
case 248:
case 2112:
case 1498:
case 2888:
case 189:
case 4094:
case 2029:
case 3393:
case 3467:
case 3017:
case 2092:
case 1168:
case 151:
case 2227:
case 1973:
case 353:
case 1037:
case 3071:
case 3506:
case 1535:
case 2939:
case 2253:
case 1224:
case 925:
case 2836:
case 238:
case 280:
case 3090:
case 3493:
case 1640:
case 1130:
case 137:
case 3771:
case 3628:
case 1657:
case 3375:
case 1858:
case 3827:
case 1995:
case 2599:
case 145:
case 2449:
case 3288:
case 3455:
case 399:
case 2792:
case 1388:
case 1275:
case 1579:
case 2975:
case 676:
case 2610:
case 2533:
case 834:
case 2663:
case 2625:
case 631:
case 3439:
case 802:
case 1267:
case 893:
case 2967:
case 2128:
case 2589:
case 1985:
case 3576:
case 1419:
case 3298:
case 1903:
case 2203:
case 398:
case 4011:
case 3556:
case 641:
case 2131:
case 494:
case 2358:
case 1293:
case 3780:
case 4057:
case 2264:
case 1562:
case 1255:
case 1632:
case 249:
case 1559:
case 1488:
case 4084:
case 3885:
case 130:
case 1752:
case 216:
case 3949:
case 657:
case 2082:
case 1142:
case 881:
case 3316:
case 2604:
case 431:
case 3562:
case 3559:
case 1305:
case 1187:
case 1383:
case 3769:
case 3752:
case 1885:
case 2867:
case 1949:
case 295:
case 2495:
case 125:
case 2668:
case 2538:
case 779:
case 752:
case 1316:
case 2770:
case 2177:
case 937:
case 1766:
case 2327:
case 2111:
case 2208:
case 3293:
case 1908:
case 1154:
case 2453:
case 643:
case 4028:
case 912:
case 2050:
case 506:
case 4031:
case 711:
case 2473:
case 2070:
case 262:
case 457:
case 2157:
case 3849:
case 3985:
case 3069:
case 228:
case 3419:
case 3052:
case 2353:
case 1405:
case 3436:
case 406:
case 2630:
case 441:
case 2560:
case 951:
case 2395:
case 2140:
case 557:
case 1080:
case 2791:
case 1044:
case 2521:
case 3275:
case 3579:
case 3607:
case 1416:
case 297:
case 1066:
case 3944:
case 669:
case 3980:
case 1764:
case 2511:
case 3708:
case 442:
case 1554:
case 979:
case 474:
case 3966:
case 1746:
case 3872:
case 3270:
case 892:
case 261:
case 542:
case 3334:
case 1587:
case 737:
case 3749:
case 1952:
case 2269:
case 1969:
case 1003:
case 2847:
case 2252:
case 2565:
case 2390:
case 1085:
case 3542:
case 2755:
case 3901:
case 735:
case 3179:
case 1046:
case 696:
case 2371:
case 532:
case 3250:
case 3291:
case 4018:
case 2113:
case 747:
case 1414:
case 1064:
case 3008:
case 3696:
case 2317:
case 2584:
case 2093:
case 2121:
case 1880:
case 909:
case 1844:
case 517:
case 2540:
case 2490:
case 404:
case 1801:
case 3049:
case 1176:
case 865:
case 1703:
case 432:
case 3852:
case 3247:
case 873:
case 1381:
case 1326:
case 417:
case 1699:
case 2870:
case 3801:
case 2189:
case 3176:
case 1049:
case 205:
case 2798:
case 1869:
case 3785:
case 1247:
case 3622:
case 882:
case 3699:
case 469:
case 277:
case 964:
case 720:
case 2643:
case 2337:
case 3972:
case 3046:
case 1179:
case 2133:
case 1434:
case 1250:
case 1291:
case 1008:
case 3880:
case 14:
case 846:
case 2437:
case 801:
case 799:
case 632:
case 596:
case 1334:
case 3400:
case 275:
case 3314:
case 1749:
case 108:
case 1162:
case 1159:
case 3969:
case 4060:
case 1542:
case 3085:
case 13:
case 263:
case 2882:
case 4013:
case 2201:
case 1980:
case 1708:
case 3481:
case 3554:
case 2620:
case 1966:
case 3156:
case 3426:
case 3746:
case 686:
case 1872:
case 604:
case 313:
case 3106:
case 798:
case 3871:
case 3773:
case 818:
case 3447:
case 1758:
case 3727:
case 3504:
case 1148:
case 3095:
case 1482:
case 1990:
case 32:
case 3161:
case 2736:
case 2352:
case 2369:
case 3541:
case 3450:
case 3053:
case 1078:
case 3370:
case 2199:
case 1058:
case 179:
case 2788:
case 568:
case 2900:
case 3229:
case 2122:
case 3795:
case 1200:
case 2452:
case 2469:
case 3391:
case 610:
case 3470:
case 3073:
case 3689:
case 468:
case 1621:
case 2926:
case 1226:
case 1281:
case 3510:
case 3347:
case 422:
case 1686:
case 3851:
case 1382:
case 2016:
case 2466:
case 3802:
case 1510:
case 2814:
case 3281:
case 1347:
case 1563:
case 2005:
case 2724:
case 3686:
case 1143:
case 1851:
case 1890:
case 2444:
case 2480:
case 1753:
case 2507:
case 3382:
case 2992:
case 1525:
case 3200:
case 1795:
case 2039:
case 788:
case 1937:
case 2237:
case 1470:
case 826:
case 1073:
case 1689:
case 2301:
case 668:
case 12:
case 3951:
case 29:
case 2024:
case 2783:
case 1541:
case 1491:
case 1450:
case 1120:
case 2202:
case 2881:
case 3109:
case 1902:
case 1234:
case 2826:
case 622:
case 510:
case 3645:
case 113:
case 164:
case 1871:
case 2366:
case 1597:
case 410:
case 309:
case 45:
case 3148:
case 3638:
case 1817:
case 1095:
case 1850:
case 1891:
case 2554:
case 1511:
case 3244:
case 780:
case 70:
case 2746:
case 3266:
case 3620:
case 4079:
case 1471:
case 1648:
case 3615:
case 1138:
case 1755:
case 1067:
case 363:
case 1390:
case 1351:
case 356:
case 1847:
case 1252:
case 314:
case 1565:
case 3098:
case 1269:
case 3606:
case 3302:
case 868:
case 375:
case 626:
case 77:
case 3133:
case 2046:
case 3643:
case 1186:
case 1093:
case 1584:
case 2880:
case 2414:
case 2064:
case 1113:
case 1160:
case 3991:
case 1767:
case 3947:
case 305:
case 2176:
case 2801:
case 3189:
case 970:
case 2574:
case 2622:
case 2326:
case 3767:
case 1947:
case 1528:
case 278:
case 1798:
case 2049:
case 105:
case 3870:
case 3775:
case 2434:
case 1133:
case 3272:
case 790:
case 3186:
case 1337:
case 24:
case 3540:
case 2008:
case 3317:
case 2696:
case 1402:
case 3113:
case 1950:
case 1991:
case 2334:
case 3471:
case 3648:
case 729:
case 3138:
case 1970:
case 1882:
case 3755:
case 1118:
case 3145:
case 3565:
case 3252:
case 3847:
case 3269:
case 1302:
case 2429:
case 3850:
case 3793:
case 9:
case 4076:
case 3523:
case 1280:
case 3511:
case 2944:
case 618:
case 3075:
case 1531:
case 2872:
case 3577:
case 107:
case 2966:
case 804:
case 2135:
case 3739:
case 1719:
case 1892:
case 211:
case 2482:
case 2568:
case 573:
case 3380:
case 1829:
case 3800:
case 209:
case 2758:
case 565:
case 1656:
case 2214:
case 3783:
case 817:
case 170:
case 1290:
case 3705:
case 2990:
case 619:
case 832:
case 465:
case 2078:
case 646:
case 1469:
case 1452:
case 2200:
case 1900:
case 503:
case 467:
case 252:
case 1788:
case 279:
case 2917:
case 3992:
case 842:
case 1676:
case 815:
case 2971:
case 2226:
case 1926:
case 1834:
case 3196:
case 567:
case 671:
case 2382:
case 3507:
case 3480:
case 3594:
case 3724:
case 18:
case 100:
case 1036:
case 492:
case 3814:
case 2281:
case 2802:
case 1466:
case 4048:
case 673:
case 1507:
case 2753:
case 419:
case 1444:
case 1083:
case 1594:
case 300:
case 38:
case 1724:
case 2563:
case 3036:
case 1005:
case 2633:
case 963:
case 446:
case 956:
case 1814:
case 2391:
case 3452:
case 3122:
case 2229:
case 3900:
case 4009:
case 1:
case 2292:
case 3676:
case 716:
case 2689:
case 2073:
case 1237:
case 519:
case 501:
case 1039:
case 754:
case 3914:
case 3656:
case 2120:
case 1881:
case 603:
case 482:
case 2541:
case 1024:
case 370:
case 1705:
case 19:
case 739:
case 2871:
case 1662:
case 2618:
case 213:
case 571:
case 785:
case 3892:
case 2817:
case 3512:
case 1800:
case 3829:
case 2115:
case 2727:
case 2447:
case 544:
case 2771:
case 894:
case 3522:
case 3792:
case 2125:
case 1988:
case 299:
case 129:
case 2288:
case 3295:
case 3599:
case 2827:
case 1194:
case 2493:
case 2543:
case 1781:
case 1883:
case 954:
case 444:
case 459:
case 380:
case 1385:
case 1805:
case 3836:
case 338:
case 916:
case 707:
case 1014:
case 1464:
case 3253:
case 691:
case 2978:
case 1596:
case 939:
case 1485:
case 3092:
case 3308:
case 843:
case 2197:
case 3888:
case 2104:
case 1403:
case 1919:
case 502:
case 2506:
case 2071:
case 705:
case 253:
case 1642:
case 4030:
case 534:
case 3654:
case 1026:
case 493:
case 2355:
case 2141:
case 683:
case 1081:
case 2790:
case 2751:
case 985:
case 3905:
case 1936:
case 3983:
case 220:
case 2631:
case 2561:
case 644:
case 2216:
case 962:
case 247:
case 681:
case 2677:
case 491:
case 3081:
case 1905:
case 3936:
case 3824:
case 2509:
case 2283:
case 390:
case 3714:
case 235:
case 928:
case 2927:
case 4010:
case 4063:
case 1308:
case 1112:
case 2498:
case 3403:
case 884:
case 1687:
case 841:
case 3346:
case 2973:
case 3642:
case 1273:
case 1408:
case 4004:
case 3385:
case 1924:
case 3805:
case 2398:
case 3303:
case 2953:
case 2002:
case 483:
case 1034:
case 3816:
case 2130:
case 2640:
case 2684:
case 3446:
case 2657:
case 237:
case 1522:
case 1819:
case 1792:
case 4041:
case 1599:
case 2858:
case 3521:
case 240:
case 3791:
case 2808:
case 3395:
case 3560:
case 2388:
case 2436:
case 3513:
case 1533:
case 2772:
case 2607:
case 2694:
case 1975:
case 2275:
case 3070:
case 1625:
case 3353:
case 1782:
case 3998:
case 2419:
case 2903:
case 1285:
case 1589:
case 1458:
case 2985:
case 1128:
case 2267:
case 1131:
case 3373:
case 3875:
case 1246:
case 2072:
case 1478:
case 1641:
case 187:
case 3091:
case 3453:
case 3208:
case 1993:
case 929:
case 3249:
case 1518:
case 2142:
case 3495:
case 3545:
case 3867:
case 395:
case 2769:
case 3047:
case 288:
case 2632:
case 1955:
case 2488:
case 154:
case 2562:
case 1604:
case 46:
case 7:
case 3538:
case 3668:
case 938:
case 3518:
case 225:
case 1249:
case 3082:
case 1545:
case 1495:
case 2885:
case 2383:
case 2803:
case 2305:
case 2187:
case 354:
case 1165:
case 980:
case 90:
case 2612:
case 3604:
case 1770:
case 3697:
case 1538:
case 1668:
case 3131:
case 1875:
case 2556:
case 3478:
case 387:
case 3641:
case 2339:
case 1453:
case 2154:
case 2908:
case 3993:
case 1327:
case 162:
case 2174:
case 66:
case 1353:
case 3782:
case 2298:
case 3458:
case 3589:
case 385:
case 3967:
case 2001:
case 1521:
case 1184:
case 1791:
case 2483:
case 2080:
case 1893:
case 1140:
case 458:
case 4042:
case 1513:
case 3663:
case 2416:
case 3533:
case 197:
case 2066:
case 3610:
case 770:
case 1963:
case 3841:
case 367:
case 2263:
case 926:
case 1910:
case 3411:
case 1328:
case 1675:
case 2994:
case 1294:
case 1431:
case 4039:
case 1178:
case 960:
case 808:
case 3006:
case 2603:
case 1667:
case 670:
case 4016:
case 1537:
case 1868:
case 392:
case 3384:
case 2442:
case 146:
case 3195:
case 3465:
case 1048:
case 2799:
case 2529:
case 2812:
case 1925:
case 4083:
case 59:
case 84:
case 1693:
case 3720:
case 136:
case 3551:
case 3043:
case 3761:
case 2136:
case 2241:
case 1904:
case 49:
case 171:
case 1997:
case 2022:
case 1428:
case 3715:
case 1748:
case 3968:
case 1331:
case 878:
case 373:
case 3377:
case 2932:
case 1232:
case 1825:
case 2912:
case 1323:
case 3997:
case 3748:
case 470:
case 382:
case 1968:
case 3158:
case 1706:
case 1377:
case 2139:
case 3232:
case 2096:
case 570:
case 3693:
case 3709:
case 1810:
case 2514:
case 1761:
case 2105:
case 3941:
case 1863:
case 69:
case 2832:
case 1571:
case 3035:
case 1698:
case 268:
case 3667:
case 3537:
case 1384:
case 3868:
case 192:
case 1517:
case 1340:
case 1195:
case 346:
case 1465:
case 3048:
case 48:
case 400:
case 3925:
case 2500:
case 1804:
case 2487:
case 1020:
case 2454:
case 1841:
case 3910:
case 3207:
case 1411:
case 4019:
case 3675:
case 1357:
case 3328:
case 3294:
case 2230:
case 2796:
case 1930:
case 58:
case 500:
case 3178:
case 505:
case 1688:
case 3974:
case 702:
case 2167:
case 3257:
case 1228:
case 3062:
case 2404:
case 318:
case 864:
case 2547:
case 2823:
case 661:
case 2325:
case 2550:
case 405:
case 2721:
case 2713:
case 2760:
case 971:
case 3572:
case 3624:
case 3569:
case 2341:
case 3552:
case 3639:
case 2425:
case 3987:
case 3762:
case 296:
case 2857:
case 2242:
case 575:
case 2570:
case 781:
case 563:
case 2738:
case 744:
case 1619:
case 1332:
case 3605:
case 3079:
case 1146:
case 1231:
case 507:
case 1580:
case 1494:
case 3108:
case 2840:
case 2021:
case 475:
case 2463:
case 3954:
case 1164:
case 3616:
case 2397:
case 3223:
case 456:
case 901:
case 2060:
case 946:
case 2977:
case 903:
case 461:
case 605:
case 3636:
case 1605:
case 1683:
case 3231:
case 2911:
case 2368:
case 1108:
case 3544:
case 3494:
case 992:
case 1616:
case 1223:
case 2923:
case 1569:
case 2965:
case 1265:
case 1639:
case 1552:
case 2287:
case 1987:
case 2718:
case 242:
case 1762:
case 967:
case 783:
case 2673:
case 3076:
case 215:
case 1149:
case 879:
case 4075:
case 3619:
case 3854:
case 4055:
case 232:
case 1284:
case 614:
case 1572:
case 2733:
case 1624:
case 1779:
case 2653:
case 663:
case 217:
case 656:
case 3056:
case 809:
case 3688:
case 791:
case 2274:
case 1974:
case 811:
case 286:
case 1842:
case 2582:
case 2018:
case 2198:
case 118:
case 3887:
case 1059:
case 2789:
case 4093:
case 3776:
case 2938:
case 595:
case 276:
case 2309:
case 1169:
case 3962:
case 324:
case 837:
case 4091:
case 4050:
case 703:
case 1499:
case 255:
case 2028:
case 3876:
case 3754:
case 495:
case 2348:
case 2731:
case 2256:
case 983:
case 2833:
case 36:
case 1879:
case 1976:
case 206:
case 241:
case 1042:
case 2276:
case 687:
case 2818:
case 1862:
case 3087:
case 2671:
case 562:
case 2728:
case 3774:
case 851:
case 497:
case 528:
case 3979:
case 2986:
case 4070:
case 462:
case 1681:
case 3856:
case 2960:
case 847:
case 1626:
case 3054:
case 2409:
case 2913:
case 2921:
case 597:
case 820:
case 539:
case 695:
case 2933:
case 2077:
case 1856:
case 2023:
case 2150:
case 3626:
case 3260:
case 1054:
case 3322:
case 902:
case 3221:
case 2461:
case 3399:
case 2011:
case 934:
case 3042:
case 2567:
case 853:
case 3862:
case 358:
case 2065:
case 2757:
case 2415:
case 2406:
case 1774:
case 2838:
case 243:
case 1144:
case 2040:
case 1180:
case 972:
case 454:
case 2821:
case 449:
case 416:
case 662:
case 4082:
case 2813:
case 2315:
case 1564:
case 2711:
case 2860:
case 981:
case 2602:
case 2306:
case 233:
case 3879:
case 2777:
case 1496:
case 2170:
case 549:
case 3238:
case 746:
case 719:
case 899:
case 516:
case 3742:
case 2320:
case 2262:
case 294:
case 1959:
case 3245:
case 1218:
case 697:
case 1101:
case 2057:
case 2765:
case 1421:
case 2094:
case 1741:
case 1843:
case 448:
case 1345:
case 1151:
case 827:
case 334:
case 1010:
case 2209:
case 2114:
case 3102:
case 2516:
case 2896:
case 1486:
case 548:
case 2732:
case 393:
case 2235:
case 1935:
case 898:
case 1025:
case 3915:
case 2476:
case 3489:
case 3558:
case 221:
case 47:
case 302:
case 1704:
case 3296:
case 3730:
case 2126:
case 3809:
case 1820:
case 1041:
case 1553:
case 1861:
case 3943:
case 2672:
case 3068:
case 1725:
case 3418:
case 1595:
case 1445:
case 2999:
case 1321:
case 2922:
case 1222:
case 3848:
case 2100:
case 40:
case 480:
case 359:
case 1004:
case 372:
case 690:
case 2032:
case 3835:
case 3647:
case 4034:
case 825:
case 1386:
case 183:
case 1438:
case 1682:
case 1418:
case 3725:
case 1068:
case 3595:
case 4014:
case 3321:
case 181:
case 3097:
case 3313:
case 2129:
case 144:
case 2588:
case 3004:
case 2462:
case 96:
case 1333:
case 1647:
case 2379:
case 3682:
case 3438:
case 67:
case 1730:
case 1578:
case 1691:
case 3820:
case 1809:
case 3041:
case 3861:
case 2243:
case 3710:
case 1943:
case 3763:
case 638:
case 193:
case 4026:
case 223:
case 2206:
case 680:
case 60:
case 1768:
case 3025:
case 490:
case 2215:
case 3948:
case 2519:
case 4081:
case 3797:
case 1489:
case 2899:
case 102:
case 2712:
case 250:
case 3741:
case 21:
case 3345:
case 2362:
case 1102:
case 2666:
case 3909:
case 1920:
case 3413:
case 2134:
case 590:
case 2644:
case 2479:
case 640:
case 2238:
case 3170:
case 1028:
case 1889:
case 3361:
case 155:
case 1945:
case 3918:
case 2152:
case 3262:
case 394:
case 2169:
case 768:
case 3555:
case 3320:
case 1309:
case 3711:
case 3315:
case 1348:
case 3813:
case 3443:
case 3084:
case 3723:
case 2508:
case 80:
case 333:
case 3306:
case 1256:
case 2614:
case 2956:
case 1598:
case 184:
case 2859:
case 3567:
case 2042:
case 2976:
case 1182:
case 141:
case 427:
case 3838:
case 1617:
case 4066:
case 848:
case 1986:
case 3279:
case 2172:
case 2286:
case 527:
case 1921:
case 2213:
case 2322:
case 3740:
case 4001:
case 921:
case 2856:
case 540:
case 357:
case 2233:
case 625:
case 3986:
case 1575:
case 75:
case 1461:
case 1011:
case 4069:
case 1420:
case 3913:
case 2054:
case 1740:
case 1784:
case 1191:
case 1150:
case 1065:
case 1415:
case 1757:
case 3728:
case 3448:
case 91:
case 384:
case 1147:
case 1343:
case 3818:
case 2585:
case 341:
case 306:
case 2692:
case 2396:
case 2629:
case 2774:
case 1406:
case 1860:
case 2634:
case 1813:
case 2180:
case 1084:
case 1593:
case 2144:
case 1777:
case 3690:
case 26:
case 1306:
case 3833:
case 3256:
case 3731:
case 1602:
case 530:
case 2074:
case 1765:
case 2101:
case 3889:
case 2218:
case 627:
case 2962:
case 1555:
case 194:
case 3309:
case 1320:
case 1505:
case 2063:
case 717:
case 451:
case 897:
case 3362:
case 2460:
case 3359:
case 941:
case 2345:
case 2151:
case 3261:
case 1583:
case 1094:
case 984:
case 2741:
case 350:
case 3644:
case 3479:
case 699:
case 3680:
case 1896:
case 535:
case 828:
case 551:
case 1356:
case 1652:
case 2935:
case 704:
case 1539:
case 1669:
case 3206:
case 589:
case 323:
case 2573:
case 957:
case 786:
case 3601:
case 3899:
case 121:
case 291:
case 3519:
case 3822:
case 3215:
case 2948:
case 435:
case 1126:
case 1456:
case 3996:
case 2763:
case 1672:
case 976:
case 2710:
case 666:
case 412:
case 2041:
case 955:
case 1794:
case 1524:
case 3462:
case 3588:
case 3459:
case 1100:
case 2313:
case 2595:
case 1999:
case 537:
case 715:
case 2438:
case 2386:
case 2171:
case 545:
case 2806:
case 1032:
case 620:
case 1462:
case 4051:
case 4090:
case 244:
case 1459:
case 2848:
case 3922:
case 647:
case 796:
case 2137:
case 2333:
case 2835:
case 854:
case 849:
case 3032:
case 2691:
case 2578:
case 3456:
case 689:
case 2389:
case 3376:
case 2943:
case 3672:
case 3707:
case 3181:
case 3539:
case 2906:
case 123:
case 885:
case 293:
case 2670:
case 2558:
case 3476:
case 769:
case 1215:
case 566:
case 420:
case 4017:
case 2920:
case 1536:
case 1220:
case 3209:
case 3114:
case 1362:
case 234:
case 637:
case 11:
case 1261:
case 2318:
case 3094:
case 150:
case 4071:
case 1644:
case 1479:
case 453:
case 466:
case 943:
case 3516:
case 645:
case 2328:
case 1907:
case 2207:
case 733:
case 996:
case 4027:
case 807:
case 3581:
case 3454:
case 2009:
case 2178:
case 3230:
case 4073:
case 856:
case 2537:
case 863:
case 1685:
case 1603:
case 794:
case 875:
case 2035:
case 3832:
case 2925:
case 1812:
case 1225:
case 246:
case 1592:
case 1442:
case 2868:
case 464:
case 2830:
case 1534:
case 1241:
case 4095:
case 3514:
case 1646:
case 3807:
case 3894:
case 1342:
case 15:
case 2709:
case 743:
case 3268:
case 1099:
case 4053:
case 1204:
case 2904:
case 3139:
case 2735:
case 805:
case 3474:
case 3649:
case 2968:
case 2127:
case 2311:
case 1268:
case 3099:
case 2457:
case 2715:
case 3297:
case 2212:
case 3204:
case 1139:
case 784:
case 511:
case 509:
case 917:
case 1474:
case 741:
case 1096:
case 1116:
case 3534:
case 2863:
case 2365:
case 757:
case 2810:
case 1183:
case 310:
case 2484:
case 2043:
case 1894:
case 409:
case 3342:
case 3685:
case 579:
case 3603:
case 168:
case 2006:
case 1832:
case 2571:
case 3812:
case 1500:
case 3529:
case 3225:
case 2465:
case 3188:
case 2015:
case 3722:
case 2340:
case 2195:
case 3592:
case 861:
case 292:
case 664:
case 2061:
case 915:
case 2423:
case 3210:
case 2743:
case 1581:
case 1124:
case 974:
case 267:
case 1454:
case 2841:
case 613:
case 2930:
case 1230:
case 1374:
case 3695:
case 1038:
case 3330:
case 578:
case 2432:
case 2776:
case 1865:
case 4008:
case 44:
case 2103:
case 304:
case 95:
case 1404:
case 3198:
case 3468:
case 723:
case 2185:
case 3582:
case 2228:
case 3957:
case 1167:
case 1811:
case 3984:
case 3940:
case 4049:
case 1550:
case 1441:
case 1591:
case 2854:
case 1325:
case 1678:
case 2056:
case 317:
case 3653:
case 1786:
case 315:
case 3828:
case 3673:
case 2942:
case 342:
case 3718:
case 1155:
case 2619:
case 53:
case 2874:
case 1570:
case 1658:
case 2231:
case 2146:
case 2636:
case 2566:
case 3033:
case 3977:
case 2332:
case 3923:
case 43:
case 1304:
case 1463:
case 1021:
case 1840:
case 2580:
case 408:
case 88:
case 800:
case 968:
case 2605:
case 1033:
case 2277:
case 2616:
case 3397:
case 2954:
case 1254:
case 3463:
case 3021:
case 3193:
case 2108:
case 3840:
case 4003:
case 1368:
case 3884:
case 1911:
case 1828:
case 2149:
case 115:
case 1673:
case 1089:
case 2759:
case 174:
case 142:
case 2987:
case 3745:
case 2639:
case 3341:
case 64:
case 3570:
case 3658:
case 132:
case 1940:
case 2240:
case 3550:
case 3823:
case 3877:
case 2779:
case 2624:
case 1831:
case 2572:
case 721:
case 2974:
case 1274:
case 1330:
case 3865:
case 3497:
case 2059:
case 3310:
case 1198:
case 2412:
case 218:
case 1468:
case 2842:
case 2257:
case 3167:
case 1957:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1746914401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,];
var gg_b = "1746914401/";

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
