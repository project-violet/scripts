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
case 2877:
case 3287:
case 289:
case 1523:
case 2321:
case 623:
case 3487:
case 3339:
case 3275:
case 992:
case 2751:
case 2564:
case 3784:
case 963:
case 3105:
case 3368:
case 1110:
case 1060:
case 4043:
case 3889:
case 873:
case 1606:
case 2335:
case 309:
case 573:
case 3041:
case 2479:
case 281:
case 1133:
case 1091:
case 2711:
case 104:
case 3336:
case 305:
case 2086:
case 3078:
case 285:
case 1786:
case 2106:
case 452:
case 664:
case 2276:
case 3966:
case 2443:
case 3288:
case 2610:
case 2791:
case 1161:
case 3367:
case 3501:
case 3772:
case 3122:
case 944:
case 2563:
case 1361:
case 3842:
case 3783:
case 3017:
case 328:
case 1963:
case 1883:
case 3495:
case 1350:
case 2897:
case 1720:
case 555:
case 1170:
case 1200:
case 348:
case 1852:
case 2219:
case 3136:
case 21:
case 2299:
case 3529:
case 2020:
case 4044:
case 2531:
case 2817:
case 1931:
case 3662:
case 2259:
case 60:
case 1812:
case 1071:
case 362:
case 2416:
case 551:
case 851:
case 1310:
case 3057:
case 2670:
case 2135:
case 2216:
case 4056:
case 3139:
case 496:
case 2296:
case 1481:
case 859:
case 3018:
case 1390:
case 1508:
case 3455:
case 16:
case 3792:
case 559:
case 2747:
case 3255:
case 336:
case 3030:
case 1629:
case 2491:
case 2568:
case 1939:
case 974:
case 2126:
case 450:
case 2380:
case 3788:
case 2853:
case 2776:
case 3102:
case 2291:
case 224:
case 1562:
case 2743:
case 3272:
case 2962:
case 586:
case 598:
case 564:
case 2332:
case 705:
case 3082:
case 4051:
case 3624:
case 2830:
case 1076:
case 1338:
case 3934:
case 3053:
case 3608:
case 2536:
case 3074:
case 1289:
case 1626:
case 1936:
case 823:
case 1489:
case 1337:
case 3093:
case 843:
case 263:
case 152:
case 1503:
case 2893:
case 2460:
case 292:
case 1887:
case 1366:
case 4011:
case 701:
case 2251:
case 3125:
case 673:
case 1875:
case 2260:
case 3970:
case 50:
case 1528:
case 2796:
case 1016:
case 736:
case 3492:
case 2638:
case 9:
case 3049:
case 2540:
case 3506:
case 2928:
case 2471:
case 2744:
case 1940:
case 1855:
case 3755:
case 2271:
case 3961:
case 1632:
case 1059:
case 3623:
case 3212:
case 3054:
case 3933:
case 4048:
case 1044:
case 1680:
case 762:
case 793:
case 3412:
case 1096:
case 2716:
case 4047:
case 3046:
case 2814:
case 3715:
case 2666:
case 2132:
case 3073:
case 1056:
case 2756:
case 1420:
case 2873:
case 3452:
case 2927:
case 2637:
case 1242:
case 46:
case 1527:
case 3990:
case 1905:
case 2248:
case 987:
case 2846:
case 3252:
case 3164:
case 1099:
case 2180:
case 1442:
case 2894:
case 3795:
case 1700:
case 639:
case 3299:
case 4055:
case 1929:
case 1214:
case 3020:
case 2529:
case 3499:
case 1717:
case 207:
case 1103:
case 112:
case 2783:
case 2842:
case 177:
case 594:
case 3563:
case 1758:
case 1273:
case 1446:
case 228:
case 978:
case 3456:
case 2752:
case 756:
case 894:
case 1473:
case 248:
case 2820:
case 1246:
case 3908:
case 1304:
case 1757:
case 3244:
case 870:
case 2018:
case 410:
case 2526:
case 3857:
case 447:
case 3502:
case 1847:
case 3771:
case 236:
case 2255:
case 1327:
case 3121:
case 293:
case 635:
case 1092:
case 3416:
case 1667:
case 1449:
case 620:
case 2098:
case 3670:
case 3818:
case 2057:
case 1413:
case 3335:
case 3279:
case 2889:
case 1538:
case 209:
case 2077:
case 4088:
case 1213:
case 381:
case 1293:
case 2475:
case 389:
case 3923:
case 216:
case 201:
case 425:
case 3633:
case 3965:
case 2275:
case 2339:
case 2487:
case 792:
case 1851:
case 1274:
case 1785:
case 445:
case 430:
case 3089:
case 3106:
case 2140:
case 1128:
case 1566:
case 3878:
case 606:
case 611:
case 3443:
case 175:
case 2886:
case 3276:
case 132:
case 2501:
case 1303:
case 2367:
case 1282:
case 374:
case 1901:
case 2772:
case 184:
case 1537:
case 1072:
case 1811:
case 2937:
case 1605:
case 619:
case 3690:
case 2336:
case 33:
case 4087:
case 1418:
case 2331:
case 1859:
case 88:
case 3081:
case 4052:
case 2933:
case 2212:
case 3849:
case 2665:
case 962:
case 993:
case 3716:
case 3329:
case 3045:
case 2049:
case 540:
case 1844:
case 7:
case 535:
case 477:
case 1906:
case 820:
case 3744:
case 2845:
case 1561:
case 2363:
case 3522:
case 835:
case 1498:
case 3247:
case 840:
case 2881:
case 3854:
case 2755:
case 127:
case 3927:
case 2452:
case 2283:
case 3756:
case 3448:
case 1297:
case 278:
case 0:
case 1123:
case 3637:
case 2164:
case 2800:
case 2483:
case 3248:
case 2795:
case 3894:
case 3180:
case 3904:
case 839:
case 668:
case 3326:
case 1095:
case 2715:
case 2046:
case 3000:
case 694:
case 1510:
case 3666:
case 2094:
case 531:
case 1217:
case 511:
case 506:
case 2082:
case 3211:
case 1663:
case 1534:
case 471:
case 806:
case 3830:
case 1088:
case 2624:
case 2535:
case 2053:
case 2934:
case 1730:
case 1625:
case 3491:
case 344:
case 2030:
case 3776:
case 1365:
case 3853:
case 2472:
case 324:
case 3291:
case 1782:
case 1478:
case 1631:
case 2272:
case 3743:
case 130:
case 1323:
case 2013:
case 3451:
case 2163:
case 815:
case 3903:
case 537:
case 475:
case 1485:
case 3893:
case 1241:
case 129:
case 901:
case 837:
case 916:
case 2125:
case 3874:
case 2775:
case 2284:
case 515:
case 1124:
case 3260:
case 1477:
case 484:
case 789:
case 1441:
case 1879:
case 781:
case 2608:
case 4072:
case 909:
case 1075:
case 121:
case 2131:
case 1087:
case 1713:
case 2356:
case 3613:
case 1261:
case 2592:
case 3440:
case 338:
case 1250:
case 3222:
case 1802:
case 486:
case 761:
case 2998:
case 3395:
case 2176:
case 850:
case 1598:
case 2726:
case 2319:
case 914:
case 2957:
case 1433:
case 3008:
case 3315:
case 1026:
case 1518:
case 769:
case 3693:
case 173:
case 2917:
case 3731:
case 2409:
case 1643:
case 1517:
case 4006:
case 3007:
case 1831:
case 1210:
case 1676:
case 2209:
case 423:
case 2316:
case 3725:
case 3630:
case 3548:
case 1029:
case 2552:
case 1345:
case 776:
case 3205:
case 2344:
case 3187:
case 2583:
case 1381:
case 157:
case 3763:
case 1558:
case 3405:
case 3355:
case 297:
case 3387:
case 3591:
case 3468:
case 2221:
case 40:
case 3239:
case 633:
case 1578:
case 3614:
case 1699:
case 2421:
case 155:
case 3646:
case 2600:
case 767:
case 688:
case 2116:
case 2066:
case 1737:
case 1434:
case 3673:
case 3511:
case 24:
case 3023:
case 300:
case 291:
case 3115:
case 1644:
case 1080:
case 1769:
case 4021:
case 2199:
case 2645:
case 1738:
case 1616:
case 982:
case 2584:
case 3551:
case 2865:
case 2985:
case 3195:
case 1984:
case 2376:
case 3560:
case 2119:
case 3388:
case 299:
case 2941:
case 2977:
case 280:
case 3267:
case 2343:
case 159:
case 1032:
case 318:
case 86:
case 1659:
case 1577:
case 2151:
case 3463:
case 3900:
case 1594:
case 3184:
case 1995:
case 1805:
case 997:
case 2994:
case 1546:
case 1009:
case 2595:
case 2160:
case 2010:
case 1790:
case 3392:
case 1611:
case 3556:
case 3425:
case 376:
case 2371:
case 2347:
case 3027:
case 164:
case 2914:
case 2709:
case 3599:
case 1915:
case 2686:
case 1514:
case 3004:
case 3810:
case 650:
case 3685:
case 3028:
case 3559:
case 2111:
case 3850:
case 214:
case 2426:
case 2033:
case 361:
case 1342:
case 2706:
case 3402:
case 1186:
case 3352:
case 738:
case 457:
case 903:
case 2689:
case 1840:
case 2828:
case 3544:
case 1770:
case 2148:
case 1120:
case 999:
case 3618:
case 3870:
case 980:
case 2587:
case 2391:
case 2480:
case 282:
case 455:
case 2993:
case 3372:
case 66:
case 2232:
case 1438:
case 3003:
case 1513:
case 3698:
case 991:
case 27:
case 3736:
case 2432:
case 700:
case 1238:
case 4001:
case 3579:
case 1836:
case 1734:
case 2930:
case 1389:
case 533:
case 2642:
case 4080:
case 3658:
case 1021:
case 1237:
case 3062:
case 3112:
case 1466:
case 2171:
case 1553:
case 3384:
case 1266:
case 1868:
case 3739:
case 2401:
case 888:
case 2034:
case 459:
case 2360:
case 3768:
case 2646:
case 967:
case 4067:
case 627:
case 3379:
case 1149:
case 2673:
case 168:
case 48:
case 1154:
case 254:
case 194:
case 435:
case 4036:
case 1991:
case 3572:
case 3221:
case 440:
case 512:
case 2468:
case 1462:
case 2375:
case 395:
case 812:
case 472:
case 2239:
case 3144:
case 3421:
case 3978:
case 2268:
case 2467:
case 1960:
case 1403:
case 1194:
case 2764:
case 1353:
case 3780:
case 3119:
case 1951:
case 439:
case 1146:
case 3376:
case 1765:
case 734:
case 2195:
case 122:
case 3977:
case 3823:
case 399:
case 170:
case 1723:
case 1173:
case 200:
case 553:
case 1655:
case 3732:
case 4039:
case 3681:
case 77:
case 2654:
case 3199:
case 2236:
case 431:
case 902:
case 853:
case 2989:
case 2869:
case 3399:
case 406:
case 2008:
case 411:
case 3918:
case 1130:
case 1675:
case 4005:
case 649:
case 283:
case 1002:
case 2693:
case 3406:
case 2702:
case 641:
case 2571:
case 961:
case 2240:
case 3998:
case 1228:
case 3808:
case 3957:
case 879:
case 3726:
case 3319:
case 1346:
case 1708:
case 419:
case 714:
case 2175:
case 3396:
case 832:
case 758:
case 976:
case 3824:
case 2725:
case 1427:
case 3344:
case 1174:
case 1193:
case 1404:
case 3958:
case 415:
case 1031:
case 1227:
case 1542:
case 2405:
case 3997:
case 532:
case 3409:
case 625:
case 566:
case 1113:
case 4040:
case 630:
case 1829:
case 866:
case 4022:
case 2024:
case 3729:
case 3316:
case 1025:
case 3913:
case 3232:
case 1692:
case 1067:
case 2003:
case 3432:
case 2736:
case 37:
case 1979:
case 2698:
case 74:
case 2657:
case 2264:
case 3148:
case 653:
case 135:
case 2870:
case 1423:
case 780:
case 2183:
case 2464:
case 1612:
case 334:
case 3391:
case 172:
case 1703:
case 1197:
case 1465:
case 3993:
case 1223:
case 1821:
case 3201:
case 510:
case 1762:
case 2543:
case 3171:
case 527:
case 2739:
case 422:
case 3351:
case 1976:
case 954:
case 1198:
case 3588:
case 1385:
case 3034:
case 808:
case 3930:
case 1835:
case 3620:
case 131:
case 3642:
case 508:
case 267:
case 2062:
case 4064:
case 1683:
case 675:
case 2231:
case 1005:
case 1318:
case 2599:
case 3709:
case 3914:
case 265:
case 3515:
case 2810:
case 2004:
case 1999:
case 632:
case 1809:
case 1919:
case 2890:
case 1407:
case 2900:
case 2463:
case 3151:
case 2519:
case 845:
case 1224:
case 666:
case 3595:
case 1500:
case 1185:
case 3994:
case 2556:
case 545:
case 3973:
case 1177:
case 825:
case 3347:
case 1424:
case 3371:
case 1141:
case 1956:
case 276:
case 1727:
case 2383:
case 529:
case 3191:
case 2202:
case 2850:
case 3555:
case 2981:
case 3954:
case 2596:
case 1545:
case 1178:
case 3348:
case 1996:
case 703:
case 2945:
case 1208:
case 829:
case 3226:
case 1806:
case 671:
case 3689:
case 2685:
case 1916:
case 59:
case 679:
case 821:
case 541:
case 1684:
case 2028:
case 1040:
case 2641:
case 2677:
case 3050:
case 2559:
case 3111:
case 3061:
case 2833:
case 521:
case 89:
case 1484:
case 1163:
case 1013:
case 3503:
case 1787:
case 229:
case 2241:
case 2485:
case 2277:
case 3887:
case 3967:
case 1284:
case 1775:
case 3079:
case 2441:
case 249:
case 2774:
case 2477:
case 2124:
case 869:
case 3626:
case 2879:
case 971:
case 405:
case 1131:
case 221:
case 3337:
case 2713:
case 1093:
case 569:
case 2087:
case 865:
case 4085:
case 2663:
case 1082:
case 313:
case 1624:
case 4077:
case 4041:
case 2534:
case 409:
case 2935:
case 3338:
case 2625:
case 1053:
case 1934:
case 1030:
case 3629:
case 1364:
case 3939:
case 1788:
case 1472:
case 225:
case 416:
case 401:
case 2108:
case 975:
case 2921:
case 576:
case 3486:
case 3562:
case 2323:
case 245:
case 1302:
case 1283:
case 3420:
case 1452:
case 227:
case 4018:
case 2773:
case 2856:
case 178:
case 3527:
case 3504:
case 3905:
case 2497:
case 1483:
case 1800:
case 2794:
case 247:
case 1252:
case 1164:
case 3099:
case 2458:
case 2165:
case 1795:
case 2015:
case 2746:
case 2308:
case 436:
case 2510:
case 1509:
case 1046:
case 493:
case 1715:
case 2899:
case 867:
case 654:
case 1910:
case 2714:
case 1094:
case 3815:
case 567:
case 208:
case 4057:
case 333:
case 2533:
case 1331:
case 160:
case 1623:
case 2418:
case 1212:
case 1054:
case 3680:
case 953:
case 618:
case 2664:
case 802:
case 2749:
case 3166:
case 1492:
case 2257:
case 2896:
case 2298:
case 3855:
case 1292:
case 1363:
case 1950:
case 3922:
case 1755:
case 3632:
case 2550:
case 3059:
case 2253:
case 3786:
case 2566:
case 4013:
case 930:
case 2482:
case 2778:
case 3609:
case 1886:
case 1966:
case 3011:
case 3872:
case 3161:
case 2282:
case 526:
case 925:
case 1367:
case 1501:
case 232:
case 2891:
case 1772:
case 846:
case 3150:
case 2072:
case 266:
case 4074:
case 3133:
case 1627:
case 304:
case 2605:
case 4093:
case 1604:
case 2230:
case 1078:
case 3060:
case 2569:
case 3789:
case 3334:
case 1969:
case 2413:
case 4082:
case 2622:
case 99:
case 2932:
case 4030:
case 1287:
case 2362:
case 538:
case 1475:
case 2293:
case 3523:
case 2777:
case 2127:
case 2474:
case 101:
case 279:
case 2741:
case 2980:
case 1487:
case 1339:
case 1275:
case 1784:
case 1580:
case 752:
case 1105:
case 3964:
case 2785:
case 3565:
case 2274:
case 2757:
case 2926:
case 2454:
case 3481:
case 1305:
case 1018:
case 2798:
case 3390:
case 2636:
case 36:
case 478:
case 2254:
case 518:
case 3281:
case 4014:
case 3902:
case 2327:
case 3812:
case 193:
case 162:
case 2092:
case 1098:
case 800:
case 3134:
case 1057:
case 4054:
case 2214:
case 2052:
case 3048:
case 1415:
case 3333:
case 1058:
case 3621:
case 3931:
case 107:
case 3361:
case 277:
case 1842:
case 3507:
case 1017:
case 212:
case 2103:
case 554:
case 128:
case 1495:
case 2294:
case 1752:
case 3635:
case 1340:
case 854:
case 667:
case 3200:
case 1820:
case 788:
case 3852:
case 1295:
case 3524:
case 2848:
case 927:
case 3095:
case 1814:
case 1000:
case 1799:
case 2019:
case 3510:
case 1666:
case 2138:
case 2056:
case 3217:
case 1927:
case 2420:
case 296:
case 288:
case 2527:
case 3856:
case 2242:
case 3773:
case 1637:
case 310:
case 3258:
case 2895:
case 347:
case 3794:
case 1846:
case 3819:
case 1248:
case 3497:
case 2504:
case 3015:
case 3165:
case 1505:
case 1180:
case 1719:
case 1326:
case 691:
case 834:
case 2745:
case 2528:
case 1796:
case 3324:
case 3906:
case 1669:
case 3896:
case 882:
case 1471:
case 3457:
case 582:
case 2922:
case 1101:
case 3561:
case 2781:
case 62:
case 1522:
case 534:
case 1271:
case 3418:
case 2137:
case 41:
case 1081:
case 4020:
case 2680:
case 2044:
case 3816:
case 3749:
case 2096:
case 1045:
case 3879:
case 2289:
case 603:
case 2936:
case 1129:
case 39:
case 771:
case 3075:
case 3087:
case 3602:
case 3713:
case 1567:
case 2503:
case 252:
case 3793:
case 485:
case 2887:
case 192:
case 3277:
case 1460:
case 1903:
case 514:
case 3485:
case 1893:
case 3570:
case 2079:
case 1251:
case 1874:
case 779:
case 950:
case 2366:
case 3124:
case 1260:
case 3477:
case 3285:
case 349:
case 2286:
case 784:
case 489:
case 2629:
case 3876:
case 1539:
case 325:
case 1853:
case 1380:
case 2939:
case 1291:
case 2486:
case 3782:
case 3478:
case 1962:
case 1743:
case 330:
case 3323:
case 4089:
case 2043:
case 213:
case 1211:
case 3663:
case 3935:
case 2369:
case 697:
case 904:
case 3088:
case 481:
case 1411:
case 3625:
case 3730:
case 2071:
case 591:
case 2812:
case 1259:
case 82:
case 1416:
case 84:
case 1216:
case 1135:
case 52:
case 1670:
case 3249:
case 1818:
case 1296:
case 880:
case 3454:
case 1908:
case 3304:
case 3926:
case 26:
case 3636:
case 456:
case 3798:
case 2390:
case 2281:
case 2445:
case 3871:
case 3254:
case 1502:
case 3847:
case 1:
case 1771:
case 2892:
case 599:
case 3327:
case 2902:
case 1747:
case 67:
case 3103:
case 895:
case 312:
case 3797:
case 2507:
case 1256:
case 3494:
case 377:
case 2361:
case 1563:
case 1419:
case 187:
case 2742:
case 1907:
case 710:
case 1525:
case 1748:
case 2720:
case 2635:
case 3848:
case 595:
case 2200:
case 933:
case 3668:
case 3929:
case 2048:
case 4081:
case 3052:
case 3214:
case 708:
case 1020:
case 1499:
case 2333:
case 3717:
case 2931:
case 3811:
case 204:
case 1690:
case 658:
case 13:
case 3230:
case 1086:
case 1106:
case 2370:
case 3482:
case 3566:
case 1610:
case 1878:
case 492:
case 897:
case 2609:
case 1276:
case 3303:
case 174:
case 2872:
case 2161:
case 1791:
case 1476:
case 444:
case 3293:
case 1841:
case 3362:
case 1877:
case 3474:
case 3127:
case 1321:
case 2523:
case 424:
case 729:
case 1564:
case 803:
case 3860:
case 3980:
case 3274:
case 2565:
case 3785:
case 2884:
case 1760:
case 2190:
case 1089:
case 2060:
case 2051:
case 3413:
case 1335:
case 3538:
case 371:
case 3622:
case 1661:
case 741:
case 2397:
case 3955:
case 1383:
case 1722:
case 3750:
case 2358:
case 1861:
case 1172:
case 1740:
case 2178:
case 1352:
case 2545:
case 2728:
case 3320:
case 2944:
case 609:
case 2806:
case 3840:
case 2208:
case 1945:
case 426:
case 2996:
case 3660:
case 1685:
case 3006:
case 3549:
case 1516:
case 3651:
case 4007:
case 4024:
case 85:
case 1559:
case 169:
case 323:
case 206:
case 211:
case 1231:
case 364:
case 1312:
case 165:
case 3710:
case 1599:
case 3189:
case 2999:
case 1678:
case 1810:
case 3594:
case 1184:
case 1890:
case 3805:
case 1225:
case 2919:
case 2500:
case 3009:
case 757:
case 1705:
case 2398:
case 1519:
case 1392:
case 398:
case 1263:
case 1556:
case 1425:
case 2727:
case 2956:
case 176:
case 2424:
case 2177:
case 578:
case 2762:
case 3466:
case 1617:
case 239:
case 1543:
case 1384:
case 3035:
case 2157:
case 994:
case 418:
case 878:
case 2198:
case 3734:
case 2118:
case 628:
case 4023:
case 3389:
case 3437:
case 2652:
case 3530:
case 231:
case 4065:
case 1658:
case 3021:
case 2683:
case 1062:
case 167:
case 1697:
case 3647:
case 3438:
case 102:
case 2117:
case 560:
case 2692:
case 636:
case 3238:
case 1579:
case 1657:
case 28:
case 3836:
case 3770:
case 2378:
case 1264:
case 1152:
case 759:
case 3386:
case 662:
case 3120:
case 2423:
case 1870:
case 3975:
case 2036:
case 235:
case 1767:
case 2703:
case 272:
case 217:
case 3593:
case 2612:
case 1464:
case 2223:
case 220:
case 3867:
case 942:
case 3142:
case 1372:
case 1725:
case 2204:
case 919:
case 1548:
case 2724:
case 1920:
case 798:
case 786:
case 146:
case 3597:
case 1942:
case 2354:
case 1405:
case 126:
case 2031:
case 2227:
case 3410:
case 805:
case 1731:
case 4028:
case 2063:
case 1682:
case 2688:
case 1024:
case 469:
case 3676:
case 764:
case 1653:
case 505:
case 1008:
case 3433:
case 723:
case 1674:
case 1315:
case 3026:
case 2314:
case 3233:
case 465:
case 1693:
case 509:
case 2002:
case 501:
case 516:
case 2428:
case 1702:
case 2373:
case 1222:
case 3802:
case 2394:
case 3679:
case 2346:
case 476:
case 816:
case 937:
case 1422:
case 1188:
case 2403:
case 1649:
case 3270:
case 1195:
case 3864:
case 3984:
case 660:
case 972:
case 2146:
case 3100:
case 1560:
case 1388:
case 2382:
case 940:
case 70:
case 2203:
case 222:
case 935:
case 1267:
case 3541:
case 270:
case 351:
case 1023:
case 562:
case 98:
case 1115:
case 3644:
case 1236:
case 3769:
case 893:
case 3696:
case 4062:
case 862:
case 1989:
case 1869:
case 3738:
case 3234:
case 1646:
case 2695:
case 402:
case 807:
case 2149:
case 931:
case 1673:
case 1511:
case 3656:
case 1439:
case 3972:
case 2393:
case 1468:
case 2801:
case 1155:
case 294:
case 2586:
case 1375:
case 1614:
case 2462:
case 548:
case 3699:
case 1268:
case 828:
case 2437:
case 3068:
case 3835:
case 44:
case 2530:
case 491:
case 1735:
case 768:
case 2237:
case 331:
case 3683:
case 1201:
case 955:
case 4038:
case 556:
case 2582:
case 3943:
case 3762:
case 1147:
case 3377:
case 4069:
case 61:
case 3341:
case 1171:
case 1862:
case 1982:
case 2988:
case 1351:
case 499:
case 856:
case 3198:
case 2839:
case 1588:
case 3385:
case 1034:
case 2386:
case 335:
case 3036:
case 2975:
case 1280:
case 722:
case 3612:
case 1391:
case 317:
case 3703:
case 1587:
case 3465:
case 2142:
case 1993:
case 2867:
case 182:
case 742:
case 3223:
case 2671:
case 3692:
case 1311:
case 2513:
case 4066:
case 3117:
case 1432:
case 17:
case 3979:
case 2269:
case 2238:
case 1949:
case 2651:
case 3684:
case 689:
case 2733:
case 1050:
case 1061:
case 223:
case 3959:
case 114:
case 592:
case 1033:
case 3408:
case 3358:
case 2320:
case 315:
case 3208:
case 1828:
case 1226:
case 3806:
case 1689:
case 3704:
case 3919:
case 2805:
case 3357:
case 403:
case 1946:
case 957:
case 2790:
case 1160:
case 3224:
case 1595:
case 2009:
case 3185:
case 1994:
case 844:
case 3207:
case 1973:
case 286:
case 3177:
case 3424:
case 1371:
case 319:
case 2573:
case 3141:
case 3956:
case 158:
case 3727:
case 311:
case 3672:
case 685:
case 3005:
case 1515:
case 2514:
case 3809:
case 1229:
case 2915:
case 78:
case 251:
case 14:
case 2769:
case 2738:
case 3114:
case 3064:
case 2270:
case 3880:
case 3403:
case 342:
case 1584:
case 1780:
case 8:
case 3951:
case 2100:
case 3146:
case 717:
case 2864:
case 90:
case 180:
case 1977:
case 735:
case 5:
case 199:
case 3382:
case 370:
case 3723:
case 2577:
case 2659:
case 2032:
case 3173:
case 4034:
case 259:
case 3393:
case 2972:
case 1701:
case 1572:
case 1037:
case 3801:
case 1221:
case 739:
case 195:
case 434:
case 3615:
case 2699:
case 2619:
case 1066:
case 47:
case 368:
case 81:
case 1159:
case 2737:
case 2656:
case 1435:
case 1359:
case 2410:
case 3113:
case 644:
case 3829:
case 4050:
case 711:
case 3349:
case 1179:
case 414:
case 1396:
case 3204:
case 1824:
case 585:
case 3427:
case 2952:
case 3174:
case 4033:
case 998:
case 2290:
case 3193:
case 3707:
case 885:
case 3031:
case 1807:
case 3227:
case 2863:
case 3542:
case 1997:
case 2558:
case 715:
case 3182:
case 3971:
case 590:
case 4010:
case 589:
case 2557:
case 889:
case 2679:
case 3826:
case 1998:
case 3153:
case 2461:
case 3394:
case 1957:
case 2450:
case 1319:
case 1726:
case 3708:
case 3346:
case 737:
case 2518:
case 881:
case 663:
case 3314:
case 4090:
case 581:
case 2912:
case 3002:
case 3687:
case 273:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1747116001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,];
var gg_b = "1747116001/";

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
