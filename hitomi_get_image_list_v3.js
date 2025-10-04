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
case 448:
case 1287:
case 2286:
case 2902:
case 2952:
case 3336:
case 3312:
case 2776:
case 326:
case 1944:
case 559:
case 1859:
case 2651:
case 2303:
case 2540:
case 2211:
case 4087:
case 2601:
case 2353:
case 1584:
case 2094:
case 3919:
case 3837:
case 963:
case 308:
case 2980:
case 1809:
case 2616:
case 2206:
case 2982:
case 3239:
case 3407:
case 1883:
case 990:
case 1617:
case 1439:
case 1207:
case 440:
case 2845:
case 1428:
case 995:
case 3029:
case 445:
case 3457:
case 4057:
case 2383:
case 1868:
case 3023:
case 1554:
case 2950:
case 300:
case 3233:
case 1889:
case 2681:
case 1504:
case 1433:
case 558:
case 1702:
case 1040:
case 83:
case 2264:
case 2084:
case 3324:
case 3470:
case 449:
case 2977:
case 1782:
case 2054:
case 3925:
case 2393:
case 550:
case 555:
case 2004:
case 4072:
case 3871:
case 3472:
case 3665:
case 1700:
case 2118:
case 140:
case 361:
case 3033:
case 1869:
case 1375:
case 145:
case 2661:
case 3223:
case 3190:
case 1863:
case 2056:
case 3028:
case 1429:
case 1057:
case 2369:
case 2572:
case 2006:
case 1438:
case 3918:
case 2294:
case 689:
case 1564:
case 962:
case 233:
case 3192:
case 3827:
case 1267:
case 377:
case 2620:
case 2266:
case 957:
case 2086:
case 183:
case 3326:
case 2125:
case 3442:
case 1556:
case 3685:
case 2204:
case 2614:
case 1762:
case 1898:
case 1721:
case 3935:
case 2254:
case 3841:
case 4042:
case 680:
case 2113:
case 3655:
case 1946:
case 4040:
case 643:
case 3100:
case 1415:
case 2096:
case 3605:
case 781:
case 1070:
case 149:
case 597:
case 2064:
case 3334:
case 3182:
case 2778:
case 330:
case 2995:
case 3323:
case 1275:
case 3329:
case 1599:
case 7:
case 2089:
case 2743:
case 291:
case 4075:
case 3010:
case 2269:
case 773:
case 2394:
case 2053:
case 2867:
case 543:
case 338:
case 2003:
case 2366:
case 656:
case 3165:
case 3036:
case 1367:
case 697:
case 1426:
case 2059:
case 3226:
case 3660:
case 1705:
case 1589:
case 1804:
case 1949:
case 1568:
case 1795:
case 2842:
case 1943:
case 2101:
case 2093:
case 2151:
case 2354:
case 891:
case 3537:
case 453:
case 1509:
case 1117:
case 2840:
case 2116:
case 802:
case 1553:
case 2955:
case 984:
case 3647:
case 152:
case 3234:
case 1503:
case 1434:
case 658:
case 2386:
case 1387:
case 22:
case 2619:
case 2008:
case 3680:
case 2613:
case 3930:
case 336:
case 3212:
case 222:
case 2311:
case 2773:
case 3105:
case 3339:
case 2268:
case 2306:
case 2088:
case 1598:
case 655:
case 1765:
case 3328:
case 1357:
case 3155:
case 3932:
case 2748:
case 1075:
case 3631:
case 3682:
case 2807:
case 2283:
case 2063:
case 3445:
case 77:
case 2779:
case 1245:
case 3333:
case 2857:
case 82:
case 2364:
case 1896:
case 153:
case 987:
case 3677:
case 2897:
case 3034:
case 2122:
case 1424:
case 2396:
case 1558:
case 1864:
case 3195:
case 164:
case 1397:
case 1508:
case 2872:
case 2293:
case 1563:
case 1372:
case 1569:
case 1979:
case 2120:
case 1588:
case 2098:
case 2299:
case 2471:
case 2334:
case 2440:
case 877:
case 3064:
case 2605:
case 3587:
case 3096:
case 2150:
case 458:
case 806:
case 3947:
case 1718:
case 2655:
case 2841:
case 3254:
case 1649:
case 1533:
case 3614:
case 3204:
case 1539:
case 450:
case 1341:
case 861:
case 2685:
case 3119:
case 3557:
case 2180:
case 779:
case 825:
case 3398:
case 3597:
case 459:
case 775:
case 652:
case 3086:
case 770:
case 277:
case 206:
case 548:
case 65:
case 667:
case 1826:
case 3570:
case 3011:
case 2918:
case 228:
case 3006:
case 3572:
case 2695:
case 3875:
case 1735:
case 514:
case 778:
case 3388:
case 2028:
case 3056:
case 3962:
case 2223:
case 919:
case 1176:
case 540:
case 3661:
case 704:
case 3622:
case 2033:
case 727:
case 805:
case 1371:
case 3399:
case 1529:
case 1538:
case 2472:
case 800:
case 2160:
case 916:
case 3004:
case 150:
case 1679:
case 3393:
case 1648:
case 2925:
case 3054:
case 1824:
case 3296:
case 3977:
case 947:
case 209:
case 158:
case 874:
case 2324:
case 2121:
case 3264:
case 1464:
case 1713:
case 3632:
case 1810:
case 3900:
case 707:
case 2233:
case 200:
case 3950:
case 205:
case 931:
case 2023:
case 3383:
case 2457:
case 3256:
case 3542:
case 2029:
case 1456:
case 3845:
case 517:
case 1406:
case 2407:
case 3616:
case 332:
case 3980:
case 1836:
case 208:
case 2919:
case 546:
case 58:
case 2312:
case 653:
case 3135:
case 3952:
case 1337:
case 2487:
case 3902:
case 809:
case 3286:
case 2913:
case 1812:
case 1515:
case 3299:
case 3098:
case 3120:
case 1041:
case 3625:
case 1732:
case 617:
case 3575:
case 1493:
case 2690:
case 564:
case 2527:
case 1730:
case 3396:
case 2224:
case 553:
case 211:
case 3897:
case 3161:
case 3364:
case 3857:
case 2333:
case 1791:
case 2445:
case 3063:
case 3283:
case 1917:
case 480:
case 921:
case 3807:
case 3748:
case 734:
case 3289:
case 2932:
case 2155:
case 2981:
case 2600:
case 2328:
case 2210:
case 2650:
case 3268:
case 2541:
case 1468:
case 3773:
case 2105:
case 3253:
case 1178:
case 3114:
case 2652:
case 322:
case 1403:
case 2602:
case 4037:
case 1149:
case 236:
case 3613:
case 488:
case 2930:
case 968:
case 2680:
case 1143:
case 14:
case 3008:
case 3209:
case 3437:
case 32:
case 3259:
case 2185:
case 2026:
case 2234:
case 1646:
case 838:
case 3840:
case 3116:
case 55:
case 1536:
case 1720:
case 741:
case 2537:
case 1722:
case 571:
case 3151:
case 3304:
case 3101:
case 614:
case 3545:
case 4041:
case 640:
case 1498:
case 2914:
case 3427:
case 1173:
case 2226:
case 3258:
case 442:
case 1458:
case 3009:
case 30:
case 1408:
case 2165:
case 3618:
case 3003:
case 2920:
case 1179:
case 966:
case 3191:
case 3394:
case 2338:
case 3068:
case 391:
case 3743:
case 3089:
case 180:
case 2475:
case 2323:
case 3995:
case 3263:
case 737:
case 3187:
case 1385:
case 418:
case 3738:
case 2550:
case 1878:
case 3814:
case 3729:
case 2531:
case 116:
case 2349:
case 2582:
case 375:
case 955:
case 2942:
case 410:
case 4047:
case 1544:
case 304:
case 3107:
case 1305:
case 327:
case 3157:
case 3519:
case 1984:
case 1128:
case 1090:
case 3513:
case 1634:
case 2502:
case 2855:
case 994:
case 1247:
case 444:
case 2794:
case 378:
case 3447:
case 2592:
case 1031:
case 3170:
case 1221:
case 2704:
case 131:
case 1262:
case 3421:
case 3822:
case 1395:
case 3197:
case 1050:
case 419:
case 1000:
case 1742:
case 595:
case 281:
case 1576:
case 1002:
case 1740:
case 2577:
case 4060:
case 1052:
case 2784:
case 379:
case 2967:
case 598:
case 2044:
case 687:
case 3715:
case 1626:
case 3172:
case 3460:
case 554:
case 1994:
case 1080:
case 2590:
case 956:
case 1047:
case 4090:
case 115:
case 1123:
case 4077:
case 3518:
case 1574:
case 1290:
case 307:
case 2970:
case 324:
case 1138:
case 144:
case 2865:
case 2521:
case 3733:
case 2972:
case 3492:
case 1365:
case 2756:
case 2373:
case 1707:
case 2706:
case 2074:
case 2419:
case 684:
case 3801:
case 3480:
case 1636:
case 56:
case 557:
case 1797:
case 1060:
case 3452:
case 1546:
case 2547:
case 1612:
case 2413:
case 1202:
case 4080:
case 2764:
case 3402:
case 2987:
case 3400:
case 3881:
case 4082:
case 3535:
case 1250:
case 1772:
case 3450:
case 119:
case 1956:
case 4050:
case 1021:
case 2907:
case 3431:
case 3140:
case 1282:
case 1906:
case 4000:
case 696:
case 272:
case 2890:
case 66:
case 3175:
case 2703:
case 1055:
case 1390:
case 2709:
case 3520:
case 662:
case 2759:
case 469:
case 2279:
case 3825:
case 2783:
case 4065:
case 2248:
case 3561:
case 2043:
case 1265:
case 1085:
case 2892:
case 2768:
case 3672:
case 2852:
case 1953:
case 2555:
case 192:
case 2141:
case 2430:
case 468:
case 2344:
case 988:
case 3687:
case 872:
case 2505:
case 3937:
case 3724:
case 2401:
case 493:
case 1844:
case 87:
case 2451:
case 1543:
case 465:
case 2799:
case 1628:
case 985:
case 1300:
case 3657:
case 3217:
case 2882:
case 1983:
case 2416:
case 1095:
case 2585:
case 1639:
case 1417:
case 1989:
case 1578:
case 2432:
case 1633:
case 1549:
case 1134:
case 1382:
case 3516:
case 3485:
case 2073:
case 2788:
case 1136:
case 702:
case 1065:
case 2137:
case 2243:
case 2048:
case 3941:
case 695:
case 1998:
case 2079:
case 70:
case 2278:
case 3581:
case 3835:
case 3532:
case 1615:
case 1205:
case 3530:
case 3405:
case 3455:
case 1255:
case 663:
case 2847:
case 337:
case 698:
case 273:
case 4055:
case 2346:
case 791:
case 4005:
case 1347:
case 1623:
case 2422:
case 1548:
case 2461:
case 1362:
case 1124:
case 1573:
case 2975:
case 3495:
case 3017:
case 1638:
case 1629:
case 2565:
case 2798:
case 492:
case 699:
case 1874:
case 168:
case 8:
case 1360:
case 2171:
case 466:
case 2420:
case 490:
case 2140:
case 2816:
case 3907:
case 1683:
case 1381:
case 945:
case 2645:
case 1928:
case 2450:
case 1668:
case 1316:
case 2535:
case 914:
case 2832:
case 1933:
case 709:
case 4019:
case 1213:
case 1603:
case 1351:
case 3987:
case 948:
case 498:
case 2830:
case 3547:
case 1301:
case 824:
case 2851:
case 3244:
case 1330:
case 3796:
case 4013:
case 157:
case 2142:
case 876:
case 1219:
case 2480:
case 1018:
case 3637:
case 3419:
case 726:
case 3373:
case 1035:
case 3671:
case 1699:
case 3756:
case 518:
case 774:
case 2733:
case 4025:
case 3521:
case 3865:
case 3379:
case 224:
case 2490:
case 3970:
case 666:
case 276:
case 3997:
case 499:
case 1476:
case 510:
case 949:
case 515:
case 1608:
case 3590:
case 3274:
case 1019:
case 1474:
case 2172:
case 878:
case 669:
case 3044:
case 3967:
case 279:
case 804:
case 496:
case 4018:
case 98:
case 827:
case 381:
case 190:
case 195:
case 917:
case 1196:
case 1669:
case 2197:
case 870:
case 2822:
case 2421:
case 3704:
case 1938:
case 2675:
case 1322:
case 693:
case 278:
case 3246:
case 3552:
case 3502:
case 2513:
case 3076:
case 1156:
case 199:
case 761:
case 2157:
case 227:
case 725:
case 3940:
case 204:
case 2107:
case 547:
case 668:
case 3942:
case 3349:
case 3531:
case 3885:
case 3500:
case 3343:
case 1235:
case 1698:
case 665:
case 660:
case 2187:
case 1199:
case 593:
case 1220:
case 1318:
case 3171:
case 2818:
case 1694:
case 3860:
case 647:
case 568:
case 3821:
case 1016:
case 565:
case 1222:
case 1261:
case 187:
case 1684:
case 3346:
case 2640:
case 1183:
case 2551:
case 569:
case 237:
case 3847:
case 1189:
case 730:
case 484:
case 2455:
case 1934:
case 1168:
case 3758:
case 735:
case 1214:
case 1604:
case 1091:
case 3414:
case 3079:
case 3763:
case 1449:
case 3243:
case 413:
case 1109:
case 1517:
case 841:
case 4014:
case 631:
case 2516:
case 3769:
case 3793:
case 4016:
case 1281:
case 1232:
case 618:
case 3585:
case 3416:
case 2607:
case 4081:
case 2217:
case 711:
case 2657:
case 3451:
case 1313:
case 59:
case 1936:
case 566:
case 3401:
case 2937:
case 3505:
case 3802:
case 4001:
case 1230:
case 1686:
case 2813:
case 3141:
case 1020:
case 615:
case 3852:
case 4051:
case 412:
case 1325:
case 4091:
case 3892:
case 1108:
case 3789:
case 2465:
case 3043:
case 113:
case 2561:
case 3783:
case 1448:
case 2971:
case 3078:
case 1291:
case 487:
case 3759:
case 967:
case 1696:
case 95:
case 2736:
case 1737:
case 2175:
case 3703:
case 184:
case 2712:
case 1664:
case 1163:
case 372:
case 124:
case 3964:
case 344:
case 3787:
case 107:
case 2476:
case 3277:
case 176:
case 1477:
case 857:
case 427:
case 896:
case 310:
case 2225:
case 1739:
case 3365:
case 475:
case 2699:
case 1891:
case 3757:
case 1492:
case 3873:
case 318:
case 2391:
case 3612:
case 1830:
case 67:
case 1402:
case 2351:
case 2603:
case 2213:
case 2154:
case 2653:
case 2104:
case 3546:
case 3770:
case 2444:
case 479:
case 3797:
case 296:
case 3060:
case 2018:
case 1801:
case 2609:
case 1480:
case 2219:
case 1142:
case 26:
case 3911:
case 2683:
case 1482:
case 1816:
case 1431:
case 3282:
case 3906:
case 3956:
case 794:
case 2316:
case 3772:
case 651:
case 3115:
case 1450:
case 1317:
case 2933:
case 1881:
case 1535:
case 170:
case 3843:
case 895:
case 316:
case 3092:
case 2698:
case 3878:
case 2235:
case 1729:
case 3385:
case 1513:
case 407:
case 3634:
case 127:
case 3355:
case 1519:
case 863:
case 3984:
case 3767:
case 299:
case 347:
case 2156:
case 3139:
case 3544:
case 2106:
case 3305:
case 3742:
case 3000:
case 581:
case 756:
case 1861:
case 2196:
case 3050:
case 2929:
case 1170:
case 1462:
case 2663:
case 3262:
case 3082:
case 1675:
case 2322:
case 2164:
case 2938:
case 2019:
case 3994:
case 2218:
case 673:
case 2608:
case 93:
case 3260:
case 6:
case 1460:
case 254:
case 3966:
case 3052:
case 2013:
case 932:
case 899:
case 3002:
case 2478:
case 788:
case 1581:
case 1835:
case 2604:
case 1532:
case 2214:
case 3112:
case 21:
case 1642:
case 3065:
case 1516:
case 743:
case 2517:
case 1501:
case 434:
case 573:
case 1551:
case 2183:
case 3255:
case 137:
case 3615:
case 1726:
case 3205:
case 1530:
case 1405:
case 2168:
case 2727:
case 2934:
case 3629:
case 3573:
case 1017:
case 3638:
case 3362:
case 3988:
case 2032:
case 141:
case 3124:
case 2261:
case 2222:
case 2318:
case 2199:
case 2030:
case 887:
case 3360:
case 92:
case 2694:
case 2001:
case 1818:
case 368:
case 903:
case 3958:
case 1927:
case 1734:
case 2193:
case 922:
case 3876:
case 134:
case 2169:
case 2188:
case 1520:
case 2664:
case 3377:
case 284:
case 2473:
case 2325:
case 1672:
case 3993:
case 3126:
case 2108:
case 3265:
case 1710:
case 1825:
case 786:
case 1522:
case 551:
case 213:
case 2291:
case 2014:
case 3999:
case 3844:
case 2251:
case 902:
case 2313:
case 1724:
case 3909:
case 39:
case 2611:
case 2686:
case 1687:
case 2230:
case 2198:
case 2020:
case 3549:
case 3968:
case 2022:
case 3331:
case 3382:
case 1514:
case 3633:
case 301:
case 441:
case 3639:
case 3417:
case 3350:
case 2216:
case 2606:
case 1657:
case 4074:
case 637:
case 579:
case 3013:
case 1967:
case 926:
case 1784:
case 2052:
case 2966:
case 1627:
case 3658:
case 2260:
case 3320:
case 3218:
case 2080:
case 1418:
case 2994:
case 3474:
case 3019:
case 3938:
case 3164:
case 2031:
case 1592:
case 1754:
case 2262:
case 1704:
case 2221:
case 3929:
case 390:
case 3688:
case 749:
case 816:
case 2742:
case 2000:
case 527:
case 4046:
case 2544:
case 2139:
case 3156:
case 2128:
case 740:
case 2984:
case 1502:
case 1805:
case 714:
case 1076:
case 1246:
case 2247:
case 1855:
case 3186:
case 2849:
case 2954:
case 2385:
case 2904:
case 1343:
case 2878:
case 570:
case 1885:
case 2843:
case 3111:
case 1942:
case 3314:
case 2610:
case 3689:
case 818:
case 3668:
case 3316:
case 2250:
case 3332:
case 925:
case 1957:
case 3381:
case 2062:
case 2956:
case 2906:
case 3939:
case 2636:
case 2911:
case 3219:
case 3609:
case 815:
case 1637:
case 2280:
case 977:
case 1796:
case 3659:
case 362:
case 1547:
case 2770:
case 634:
case 3351:
case 3603:
case 2986:
case 2202:
case 2612:
case 3391:
case 1865:
case 218:
case 1379:
case 2873:
case 3693:
case 1972:
case 1348:
case 2879:
case 78:
case 3225:
case 2707:
case 1373:
case 746:
case 819:
case 210:
case 2047:
case 1711:
case 2624:
case 576:
case 1997:
case 2123:
case 1276:
case 2277:
case 215:
case 3476:
case 2996:
case 4076:
case 524:
case 1970:
case 2129:
case 2574:
case 507:
case 2138:
case 2964:
case 1786:
case 3656:
case 1799:
case 2543:
case 753:
case 2639:
case 1416:
case 1585:
case 2983:
case 1882:
case 1481:
case 2633:
case 935:
case 2989:
case 3061:
case 2134:
case 3022:
case 2549:
case 2968:
case 764:
case 3020:
case 1555:
case 3319:
case 2953:
case 1852:
case 676:
case 1802:
case 3230:
case 3686:
case 3201:
case 624:
case 2909:
case 1401:
case 1451:
case 3313:
case 2844:
case 2959:
case 938:
case 1279:
case 151:
case 1491:
case 4073:
case 1078:
case 3291:
case 1248:
case 1783:
case 1049:
case 4048:
case 1789:
case 1273:
case 801:
case 3158:
case 4079:
case 3325:
case 1892:
case 1595:
case 3163:
case 172:
case 1753:
case 1703:
case 384:
case 473:
case 1709:
case 3188:
case 3737:
case 2055:
case 534:
case 1877:
case 2005:
case 4:
case 3696:
case 3051:
case 3193:
case 627:
case 1860:
case 3926:
case 2958:
case 268:
case 936:
case 3694:
case 869:
case 293:
case 1374:
case 771:
case 1171:
case 2548:
case 541:
case 3261:
case 3081:
case 2321:
case 221:
case 2988:
case 75:
case 767:
case 2638:
case 670:
case 3741:
case 2295:
case 3016:
case 2573:
case 2963:
case 1862:
case 675:
case 868:
case 3168:
case 1758:
case 679:
case 2615:
case 1708:
case 2255:
case 2110:
case 3183:
case 269:
case 2347:
case 387:
case 893:
case 1346:
case 4078:
case 3159:
case 2285:
case 0:
case 860:
case 821:
case 451:
case 1243:
case 3335:
case 31:
case 1788:
case 2112:
case 3449:
case 1048:
case 2775:
case 3103:
case 3214:
case 3604:
case 312:
case 1763:
case 3478:
case 1238:
case 314:
case 3007:
case 1039:
case 1190:
case 3863:
case 405:
case 4023:
case 2735:
case 3057:
case 1229:
case 1177:
case 3423:
case 3375:
case 1223:
case 4038:
case 161:
case 1033:
case 383:
case 1326:
case 2327:
case 3267:
case 2466:
case 177:
case 426:
case 856:
case 3858:
case 2826:
case 1192:
case 2494:
case 3747:
case 2454:
case 2649:
case 754:
case 1841:
case 2533:
case 2404:
case 1152:
case 1935:
case 2341:
case 3506:
case 2144:
case 2643:
case 1180:
case 1131:
case 1182:
case 2484:
case 4015:
case 790:
case 297:
case 3511:
case 349:
case 409:
case 602:
case 3415:
case 3760:
case 3946:
case 2718:
case 623:
case 3584:
case 1837:
case 108:
case 259:
case 2411:
case 2836:
case 3809:
case 126:
case 3944:
case 346:
case 406:
case 2337:
case 382:
case 894:
case 1336:
case 2515:
case 2486:
case 2812:
case 3287:
case 1487:
case 4039:
case 1147:
case 1023:
case 105:
case 4028:
case 1457:
case 855:
case 2725:
case 981:
case 3883:
case 2406:
case 3617:
case 3439:
case 2719:
case 2824:
case 3566:
case 3780:
case 603:
case 3976:
case 1015:
case 2496:
case 1497:
case 1121:
case 1324:
case 1162:
case 1470:
case 258:
case 3702:
case 2529:
case 1665:
case 3700:
case 2174:
case 1160:
case 2673:
case 3893:
case 1472:
case 76:
case 757:
case 3899:
case 2679:
case 250:
case 1871:
case 2523:
case 3782:
case 796:
case 1925:
case 1652:
case 2453:
case 242:
case 2178:
case 3886:
case 3412:
case 1602:
case 2534:
case 2403:
case 3811:
case 3436:
case 1680:
case 2409:
case 438:
case 713:
case 2459:
case 2644:
case 1185:
case 1445:
case 2791:
case 3245:
case 3075:
case 1631:
case 3806:
case 2917:
case 3598:
case 1328:
case 3357:
case 2833:
case 1932:
case 3410:
case 1105:
case 1339:
case 1650:
case 3508:
case 2526:
case 3558:
case 1527:
case 364:
case 4024:
case 2701:
case 973:
case 886:
case 3896:
case 353:
case 9:
case 1677:
case 1034:
case 3979:
case 3569:
case 2041:
case 2732:
case 3973:
case 591:
case 285:
case 1961:
case 1338:
case 2488:
case 1329:
case 280:
case 1571:
case 1010:
case 3275:
case 135:
case 1621:
case 2227:
case 3705:
case 2037:
case 288:
case 712:
case 3367:
case 502:
case 2148:
case 1920:
case 4026:
case 2722:
case 880:
case 951:
case 3943:
case 371:
case 3949:
case 3589:
case 1914:
case 3978:
case 2498:
case 2071:
case 1234:
case 2512:
case 888:
case 3340:
case 3553:
case 1647:
case 352:
case 3559:
case 97:
case 1537:
case 3884:
case 289:
case 367:
case 35:
case 355:
case 970:
case 2731:
case 3648:
case 3523:
case 1054:
case 1691:
case 350:
case 3538:
case 2750:
case 1992:
case 1118:
case 1399:
case 1264:
case 882:
case 3464:
case 3713:
case 509:
case 1084:
case 2752:
case 1296:
case 1977:
case 1744:
case 846:
case 1567:
case 719:
case 4064:
case 904:
case 3824:
case 3719:
case 2439:
case 1982:
case 1206:
case 1542:
case 3456:
case 710:
case 2428:
case 500:
case 2792:
case 1383:
case 1632:
case 1900:
case 2345:
case 1902:
case 2803:
case 611:
case 1286:
case 1630:
case 4011:
case 3812:
case 13:
case 2790:
case 433:
case 718:
case 282:
case 1066:
case 574:
case 1952:
case 3337:
case 1540:
case 246:
case 1651:
case 508:
case 2859:
case 979:
case 1776:
case 4086:
case 3836:
case 3411:
case 526:
case 2584:
case 1601:
case 1353:
case 924:
case 3718:
case 2946:
case 4084:
case 848:
case 1096:
case 907:
case 638:
case 249:
case 2070:
case 1284:
case 976:
case 3484:
case 356:
case 529:
case 4054:
case 1557:
case 2242:
case 3643:
case 2506:
case 4004:
case 2072:
case 2721:
case 3404:
case 2898:
case 2762:
case 1204:
case 1254:
case 3649:
case 1570:
case 2747:
case 248:
case 2974:
case 3494:
case 528:
case 4066:
case 43:
case 2564:
case 1308:
case 1620:
case 3466:
case 2267:
case 4094:
case 1358:
case 1086:
case 432:
case 2596:
case 1363:
case 2888:
case 240:
case 3176:
case 520:
case 2375:
case 1622:
case 2423:
case 2429:
case 1056:
case 2438:
case 1572:
case 2007:
case 267:
case 3536:
case 389:
case 760:
case 3720:
case 606:
case 2884:
case 1840:
case 765:
case 1132:
case 1181:
case 1905:
case 2434:
case 2503:
case 677:
case 1635:
case 3498:
case 1441:
case 2795:
case 3241:
case 1304:
case 1545:
case 3761:
case 1093:
case 1151:
case 3722:
case 2583:
case 3179:
case 102:
case 1867:
case 123:
case 343:
case 538:
case 3674:
case 2894:
case 1618:
case 1366:
case 422:
case 852:
case 2705:
case 1258:
case 1059:
case 3227:
case 3458:
case 2045:
case 530:
case 1083:
case 2593:
case 191:
case 1743:
case 769:
case 1089:
case 380:
case 4063:
case 1269:
case 385:
case 2973:
case 1872:
case 3781:
case 3732:
case 2563:
case 792:
case 1965:
case 3041:
case 600:
case 1625:
case 4093:
case 1299:
case 1098:
case 3271:
case 3499:
case 79:
case 1122:
case 1897:
case 1161:
case 1364:
case 2370:
case 3701:
case 2424:
case 264:
case 608:
case 3730:
case 2508:
case 1870:
case 1773:
case 2307:
case 1289:
case 1356:
case 2806:
case 491:
case 2075:
case 941:
case 3828:
case 3644:
case 402:
case 3459:
case 3237:
case 3143:
case 34:
case 2436:
case 2811:
case 853:
case 1209:
case 423:
case 4003:
case 3403:
case 1887:
case 1613:
case 40:
case 1203:
case 1311:
case 864:
case 342:
case 122:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1759604401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,];
var gg_b = "1759604401/";

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
