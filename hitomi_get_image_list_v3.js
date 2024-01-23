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
var o = 0;
switch (g) {
case 1348:
case 1947:
case 3289:
case 3277:
case 2519:
case 3530:
case 3755:
case 639:
case 2360:
case 3366:
case 4047:
case 2057:
case 2526:
case 2841:
case 591:
case 2172:
case 713:
case 2320:
case 116:
case 1861:
case 3509:
case 3198:
case 3260:
case 1574:
case 1041:
case 1007:
case 1452:
case 3840:
case 2697:
case 2417:
case 1047:
case 2406:
case 990:
case 352:
case 1315:
case 369:
case 3172:
case 2929:
case 2935:
case 568:
case 1054:
case 3374:
case 3721:
case 4015:
case 2721:
case 2440:
case 1728:
case 465:
case 3331:
case 2217:
case 3266:
case 3037:
case 1119:
case 2902:
case 1190:
case 1876:
case 1765:
case 2374:
case 3792:
case 3422:
case 1823:
case 2933:
case 13:
case 1700:
case 2177:
case 3227:
case 3345:
case 864:
case 1309:
case 1986:
case 1611:
case 2650:
case 289:
case 1556:
case 192:
case 2812:
case 2462:
case 1029:
case 2198:
case 3590:
case 2016:
case 1526:
case 1575:
case 1888:
case 1992:
case 625:
case 626:
case 1583:
case 1618:
case 371:
case 699:
case 548:
case 2555:
case 2938:
case 3604:
case 2338:
case 869:
case 2106:
case 1843:
case 1056:
case 2015:
case 2719:
case 2430:
case 3404:
case 522:
case 1717:
case 180:
case 1554:
case 3351:
case 224:
case 2453:
case 3083:
case 1657:
case 230:
case 325:
case 1344:
case 2041:
case 471:
case 2542:
case 2223:
case 995:
case 1072:
case 754:
case 4091:
case 2164:
case 1972:
case 2319:
case 1164:
case 1074:
case 3359:
case 2713:
case 1884:
case 3110:
case 1551:
case 1044:
case 1372:
case 238:
case 3746:
case 1922:
case 2378:
case 3246:
case 1151:
case 2228:
case 1820:
case 2840:
case 1753:
case 3928:
case 2788:
case 257:
case 425:
case 81:
case 2907:
case 1207:
case 955:
case 2118:
case 953:
case 2047:
case 3847:
case 4019:
case 235:
case 2434:
case 2614:
case 2420:
case 3184:
case 56:
case 3386:
case 634:
case 3369:
case 2448:
case 1764:
case 1679:
case 2966:
case 2226:
case 1238:
case 4038:
case 2500:
case 3132:
case 1273:
case 1716:
case 1780:
case 63:
case 113:
case 620:
case 2148:
case 1468:
case 1719:
case 1500:
case 422:
case 2660:
case 665:
case 872:
case 3241:
case 3540:
case 1417:
case 1501:
case 1653:
case 2505:
case 1668:
case 2026:
case 2543:
case 2670:
case 3150:
case 3817:
case 1570:
case 1958:
case 977:
case 2044:
case 680:
case 2205:
case 1883:
case 2175:
case 3423:
case 123:
case 3786:
case 1076:
case 777:
case 1558:
case 3294:
case 862:
case 2059:
case 2939:
case 3685:
case 3905:
case 1293:
case 3002:
case 2701:
case 3533:
case 2611:
case 335:
case 1441:
case 3611:
case 3228:
case 1232:
case 1071:
case 2974:
case 1467:
case 3602:
case 3270:
case 2426:
case 2867:
case 1409:
case 3888:
case 2833:
case 354:
case 3915:
case 2922:
case 1120:
case 3868:
case 705:
case 2696:
case 619:
case 853:
case 577:
case 1161:
case 2006:
case 1069:
case 2277:
case 648:
case 118:
case 386:
case 187:
case 3695:
case 3021:
case 3353:
case 3610:
case 2089:
case 1312:
case 3248:
case 886:
case 2402:
case 1895:
case 2749:
case 1565:
case 1476:
case 1493:
case 1392:
case 134:
case 1286:
case 1325:
case 59:
case 501:
case 3931:
case 3953:
case 4044:
case 917:
case 2058:
case 1156:
case 873:
case 3885:
case 2459:
case 1589:
case 2862:
case 2627:
case 830:
case 1609:
case 1970:
case 3910:
case 3753:
case 858:
case 3579:
case 3176:
case 36:
case 966:
case 275:
case 2452:
case 2601:
case 2443:
case 2350:
case 1248:
case 1259:
case 316:
case 2791:
case 2061:
case 157:
case 1241:
case 1745:
case 2410:
case 3864:
case 1942:
case 854:
case 1531:
case 2311:
case 314:
case 831:
case 1981:
case 1322:
case 1246:
case 1918:
case 2675:
case 3005:
case 2726:
case 1962:
case 631:
case 2605:
case 763:
case 1024:
case 490:
case 2149:
case 3683:
case 136:
case 2804:
case 547:
case 686:
case 3833:
case 1288:
case 519:
case 3669:
case 3675:
case 2874:
case 1593:
case 2761:
case 675:
case 3988:
case 2682:
case 3453:
case 4030:
case 1817:
case 2971:
case 1448:
case 1087:
case 3297:
case 2080:
case 247:
case 1070:
case 3390:
case 3534:
case 751:
case 4052:
case 3235:
case 2917:
case 3583:
case 850:
case 117:
case 3253:
case 183:
case 1935:
case 3558:
case 2157:
case 417:
case 906:
case 1225:
case 496:
case 2275:
case 2728:
case 2720:
case 3876:
case 2001:
case 1396:
case 1955:
case 58:
case 178:
case 1436:
case 1385:
case 1491:
case 2718:
case 1075:
case 1928:
case 312:
case 3410:
case 2065:
case 1266:
case 1683:
case 4095:
case 3839:
case 715:
case 3919:
case 2553:
case 3998:
case 3436:
case 3435:
case 870:
case 35:
case 2359:
case 3938:
case 3529:
case 1160:
case 3268:
case 2071:
case 2936:
case 3521:
case 3936:
case 3794:
case 724:
case 2560:
case 3944:
case 3058:
case 525:
case 110:
case 2903:
case 1455:
case 1961:
case 3531:
case 3047:
case 1278:
case 2959:
case 2155:
case 3304:
case 1997:
case 3127:
case 1393:
case 319:
case 1694:
case 717:
case 3954:
case 18:
case 2870:
case 1249:
case 4087:
case 863:
case 1979:
case 2873:
case 3992:
case 2978:
case 1410:
case 292:
case 2288:
case 2193:
case 131:
case 1805:
case 3612:
case 3016:
case 1830:
case 1971:
case 956:
case 3681:
case 1473:
case 723:
case 784:
case 3319:
case 536:
case 1305:
case 1427:
case 39:
case 2361:
case 1380:
case 493:
case 1797:
case 3544:
case 2946:
case 3757:
case 752:
case 2300:
case 2262:
case 60:
case 3330:
case 2707:
case 2722:
case 3357:
case 2879:
case 760:
case 1313:
case 3754:
case 262:
case 2678:
case 2950:
case 295:
case 1261:
case 1864:
case 965:
case 520:
case 2002:
case 3119:
case 2712:
case 1751:
case 1608:
case 1240:
case 322:
case 78:
case 382:
case 2400:
case 889:
case 1721:
case 1215:
case 480:
case 2979:
case 1519:
case 3539:
case 3362:
case 470:
case 2901:
case 1015:
case 746:
case 3541:
case 3566:
case 1179:
case 1020:
case 2524:
case 416:
case 3696:
case 3432:
case 3306:
case 3667:
case 2815:
case 2845:
case 3403:
case 550:
case 3443:
case 1480:
case 435:
case 1520:
case 1761:
case 3256:
case 4036:
case 1148:
case 2335:
case 2956:
case 1628:
case 3254:
case 301:
case 1597:
case 1428:
case 102:
case 1369:
case 2493:
case 2940:
case 1874:
case 958:
case 1492:
case 3493:
case 1946:
case 3916:
case 3820:
case 2733:
case 478:
case 2580:
case 2145:
case 3273:
case 929:
case 2191:
case 2113:
case 3:
case 3842:
case 482:
case 1022:
case 255:
case 584:
case 356:
case 2385:
case 3518:
case 268:
case 3923:
case 4060:
case 3019:
case 3971:
case 621:
case 2636:
case 3243:
case 3614:
case 3707:
case 53:
case 2928:
case 2569:
case 3034:
case 3261:
case 3128:
case 2354:
case 592:
case 1648:
case 728:
case 3749:
case 4054:
case 3507:
case 3088:
case 54:
case 824:
case 421:
case 3630:
case 3328:
case 3828:
case 2431:
case 2124:
case 1264:
case 2395:
case 3616:
case 440:
case 45:
case 1216:
case 3105:
case 451:
case 2740:
case 193:
case 2596:
case 2168:
case 3770:
case 505:
case 3824:
case 1229:
case 3458:
case 1134:
case 347:
case 3196:
case 1053:
case 105:
case 162:
case 3138:
case 3966:
case 2829:
case 3091:
case 2872:
case 985:
case 1470:
case 4020:
case 46:
case 711:
case 2714:
case 163:
case 1333:
case 1622:
case 1274:
case 2458:
case 2776:
case 3917:
case 3852:
case 2913:
case 2000:
case 121:
case 1421:
case 876:
case 6:
case 4058:
case 3788:
case 1560:
case 2248:
case 3114:
case 1406:
case 3317:
case 2748:
case 479:
case 2730:
case 2143:
case 3874:
case 3238:
case 3334:
case 3216:
case 2550:
case 1201:
case 1123:
case 1008:
case 1059:
case 1102:
case 340:
case 1887:
case 1090:
case 3804:
case 1594:
case 1866:
case 1169:
case 104:
case 3062:
case 866:
case 3401:
case 3416:
case 3364:
case 3524:
case 2122:
case 3837:
case 1542:
case 1750:
case 3165:
case 284:
case 3222:
case 401:
case 52:
case 2237:
case 2251:
case 1365:
case 1923:
case 2295:
case 2129:
case 1968:
case 981:
case 424:
case 1299:
case 1094:
case 1865:
case 403:
case 2435:
case 3079:
case 1445:
case 3790:
case 2826:
case 2571:
case 922:
case 875:
case 1182:
case 125:
case 3564:
case 3846:
case 1013:
case 2069:
case 2180:
case 2910:
case 1010:
case 3337:
case 3652:
case 3904:
case 821:
case 835:
case 439:
case 1859:
case 1125:
case 1905:
case 1702:
case 787:
case 2231:
case 2346:
case 1903:
case 1933:
case 1110:
case 190:
case 3858:
case 3622:
case 1816:
case 1375:
case 1707:
case 1489:
case 663:
case 1260:
case 1347:
case 3956:
case 1280:
case 2497:
case 3358:
case 3633:
case 518:
case 544:
case 2529:
case 904:
case 2094:
case 3773:
case 2663:
case 3689:
case 2561:
case 2994:
case 2579:
case 1267:
case 773:
case 2911:
case 3747:
case 2582:
case 3577:
case 2108:
case 3831:
case 3712:
case 1446:
case 4021:
case 2383:
case 3934:
case 3121:
case 3387:
case 2747:
case 2986:
case 1191:
case 3171:
case 2012:
case 2025:
case 1000:
case 1996:
case 4016:
case 1122:
case 530:
case 2339:
case 586:
case 828:
case 2328:
case 2404:
case 3288:
case 3732:
case 2931:
case 2717:
case 2854:
case 12:
case 3028:
case 1213:
case 2314:
case 462:
case 959:
case 1195:
case 1746:
case 1391:
case 3214:
case 1302:
case 3054:
case 605:
case 2757:
case 2926:
case 3433:
case 1661:
case 3456:
case 1539:
case 188:
case 649:
case 2565:
case 2099:
case 3972:
case 3398:
case 3543:
case 4028:
case 4023:
case 1001:
case 2014:
case 2429:
case 991:
case 1723:
case 415:
case 1705:
case 1469:
case 1282:
case 986:
case 28:
case 978:
case 3049:
case 1327:
case 1290:
case 2953:
case 827:
case 305:
case 3489:
case 783:
case 1771:
case 2787:
case 765:
case 2039:
case 270:
case 2969:
case 4072:
case 2151:
case 1180:
case 4025:
case 3056:
case 3677:
case 949:
case 1873:
case 1472:
case 3004:
case 982:
case 154:
case 593:
case 3250:
case 1600:
case 169:
case 4013:
case 1424:
case 3200:
case 2666:
case 2899:
case 3519:
case 1359:
case 3347:
case 2303:
case 2544:
case 2396:
case 3179:
case 2856:
case 3593:
case 2509:
case 1532:
case 2135:
case 1925:
case 1454:
case 293:
case 3406:
case 1218:
case 2868:
case 1178:
case 2261:
case 141:
case 3393:
case 3613:
case 2298:
case 1419:
case 3115:
case 2130:
case 2187:
case 2900:
case 3378:
case 3231:
case 2081:
case 3714:
case 2381:
case 329:
case 271:
case 3029:
case 579:
case 1957:
case 159:
case 1778:
case 3787:
case 973:
case 3302:
case 3057:
case 1374:
case 3488:
case 25:
case 1098:
case 1247:
case 3763:
case 2941:
case 613:
case 1326:
case 3202:
case 3587:
case 1630:
case 3816:
case 2250:
case 1379:
case 492:
case 708:
case 3287:
case 3089:
case 3659:
case 747:
case 987:
case 1747:
case 3589:
case 1696:
case 1826:
case 260:
case 294:
case 650:
case 667:
case 1851:
case 3947:
case 313:
case 2732:
case 2520:
case 2754:
case 266:
case 1339:
case 1033:
case 2930:
case 1390:
case 560:
case 811:
case 1488:
case 2123:
case 656:
case 3687:
case 2715:
case 1999:
case 2289:
case 3360:
case 3117:
case 3445:
case 2270:
case 3473:
case 2474:
case 220:
case 290:
case 3112:
case 925:
case 3550:
case 362:
case 1220:
case 2093:
case 3605:
case 597:
case 1806:
case 2101:
case 2283:
case 429:
case 1494:
case 2414:
case 2376:
case 2137:
case 1343:
case 4007:
case 1998:
case 2482:
case 3688:
case 3961:
case 91:
case 996:
case 300:
case 3274:
case 1328:
case 1844:
case 2306:
case 1283:
case 2545:
case 2995:
case 4042:
case 2133:
case 160:
case 280:
case 3424:
case 1091:
case 1030:
case 2225:
case 3922:
case 1932:
case 1975:
case 3809:
case 3537:
case 474:
case 1640:
case 1737:
case 2062:
case 3780:
case 209:
case 7:
case 3326:
case 114:
case 2517:
case 199:
case 4041:
case 1793:
case 2692:
case 3738:
case 3525:
case 1733:
case 3032:
case 1012:
case 2589:
case 1720:
case 2642:
case 1363:
case 2568:
case 497:
case 337:
case 2438:
case 2515:
case 1040:
case 2691:
case 1924:
case 395:
case 642:
case 941:
case 1055:
case 2702:
case 894:
case 2957:
case 2479:
case 90:
case 2214:
case 1205:
case 3948:
case 468:
case 3240:
case 1254:
case 2574:
case 2488:
case 1692:
case 2120:
case 1963:
case 2640:
case 3810:
case 1643:
case 2110:
case 2334:
case 1907:
case 1650:
case 2983:
case 3031:
case 3217:
case 1578:
case 3708:
case 3252:
case 3710:
case 3417:
case 1991:
case 3245:
case 3000:
case 2344:
case 3482:
case 1540:
case 2221:
case 580:
case 486:
case 2252:
case 587:
case 1341:
case 1197:
case 2777:
case 1400:
case 1456:
case 2078:
case 531:
case 2877:
case 1828:
case 3086:
case 2851:
case 4018:
case 2693:
case 1789:
case 2752:
case 676:
case 1756:
case 3125:
case 1515:
case 1485:
case 83:
case 838:
case 288:
case 1035:
case 51:
case 793:
case 1308:
case 3562:
case 3157:
case 2301:
case 4053:
case 3258:
case 3226:
case 2581:
case 1423:
case 3159:
case 2336:
case 103:
case 88:
case 3574:
case 3578:
case 3711:
case 1993:
case 1862:
case 2765:
case 281:
case 1323:
case 1337:
case 1516:
case 2371:
case 4000:
case 2471:
case 3822:
case 644:
case 1527:
case 3469:
case 3064:
case 3795:
case 799:
case 3895:
case 2222:
case 779:
case 2699:
case 1685:
case 55:
case 590:
case 1763:
case 1124:
case 276:
case 3978:
case 3269:
case 1904:
case 3502:
case 1573:
case 2302:
case 80:
case 3361:
case 2755:
case 3674:
case 2233:
case 1941:
case 101:
case 147:
case 1065:
case 3305:
case 2460:
case 3706:
case 4010:
case 1514:
case 2276:
case 1768:
case 1303:
case 2593:
case 2825:
case 1691:
case 3212:
case 524:
case 4082:
case 3729:
case 3463:
case 789:
case 2649:
case 2260:
case 936:
case 2989:
case 1366:
case 1405:
case 2083:
case 1695:
case 3395:
case 1219:
case 2105:
case 472:
case 3854:
case 616:
case 552:
case 1082:
case 1360:
case 1167:
case 1673:
case 2134:
case 2988:
case 261:
case 566:
case 258:
case 657:
case 909:
case 1416:
case 243:
case 1769:
case 1791:
case 2794:
case 1430:
case 847:
case 2455:
case 1994:
case 2327:
case 2165:
case 2394:
case 1451:
case 1571:
case 3087:
case 3637:
case 1294:
case 3867:
case 3397:
case 1466:
case 2341:
case 1026:
case 3958:
case 709:
case 1649:
case 87:
case 3886:
case 2711:
case 3835:
case 1381:
case 1584:
case 2444:
case 1025:
case 3977:
case 3219:
case 1300:
case 1028:
case 702:
case 436:
case 2082:
case 2588:
case 1781:
case 1960:
case 551:
case 3310:
case 963:
case 848:
case 1595:
case 2034:
case 945:
case 2861:
case 3976:
case 1495:
case 4085:
case 939:
case 2570:
case 2206:
case 3382:
case 3307:
case 1200:
case 2297:
case 1592:
case 2040:
case 1034:
case 3094:
case 3371:
case 972:
case 883:
case 3187:
case 3168:
case 810:
case 4063:
case 302:
case 2531:
case 2610:
case 453:
case 1867:
case 2823:
case 595:
case 3962:
case 272:
case 1296:
case 2345:
case 504:
case 291:
case 2778:
case 2775:
case 216:
case 2056:
case 1084:
case 3450:
case 1638:
case 303:
case 3671:
case 3642:
case 2235:
case 1306:
case 1576:
case 1318:
case 2281:
case 317:
case 814:
case 500:
case 487:
case 3818:
case 3135:
case 3471:
case 3484:
case 2456:
case 2705:
case 2240:
case 3293:
case 2201:
case 1021:
case 3209:
case 1591:
case 2908:
case 3911:
case 2530:
case 2598:
case 100:
case 324:
case 1204:
case 2027:
case 2858:
case 2948:
case 24:
case 3389:
case 3588:
case 3798:
case 3515:
case 604:
case 2045:
case 3372:
case 4045:
case 339:
case 2004:
case 3716:
case 3506:
case 1431:
case 766:
case 1552:
case 2241:
case 3025:
case 1496:
case 1499:
case 2176:
case 3045:
case 3802:
case 1741:
case 2976:
case 2745:
case 825:
case 549:
case 3074:
case 942:
case 861:
case 4070:
case 2439:
case 3782:
case 538:
case 2372:
case 3815:
case 2215:
case 1310:
case 3452:
case 475:
case 907:
case 1732:
case 1569:
case 695:
case 2655:
case 2888:
case 3522:
case 2809:
case 3985:
case 3046:
case 3870:
case 3955:
case 390:
case 1894:
case 1647:
case 1447:
case 2619:
case 2499:
case 248:
case 26:
case 725:
case 1235:
case 2245:
case 442:
case 43:
case 3100:
case 252:
case 3055:
case 3575:
case 2811:
case 3003:
case 1154:
case 609:
case 993:
case 111:
case 1743:
case 529:
case 307:
case 1173:
case 3015:
case 1812:
case 4001:
case 1775:
case 2773:
case 1397:
case 1790:
case 3935:
case 3678:
case 3314:
case 1853:
case 112:
case 2895:
case 2199:
case 3850:
case 3183:
case 1704:
case 968:
case 1825:
case 1772:
case 79:
case 3301:
case 2600:
case 1050:
case 1856:
case 2817:
case 1536:
case 2296:
case 3084:
case 1268:
case 389:
case 1900:
case 3559:
case 4086:
case 741:
case 1965:
case 1210:
case 2863:
case 2019:
case 1572:
case 2207:
case 2267:
case 2859:
case 1471:
case 3455:
case 2017:
case 1688:
case 2054:
case 2656:
case 1465:
case 2578:
case 366:
case 2169:
case 3102:
case 1187:
case 495:
case 353:
case 2534:
case 2095:
case 974:
case 3775:
case 882:
case 3722:
case 2844:
case 3881:
case 1713:
case 132:
case 1297:
case 2880:
case 3644:
case 2179:
case 1846:
case 1194:
case 608:
case 207:
case 1724:
case 3743:
case 409:
case 2625:
case 3813:
case 2317:
case 1754:
case 1442:
case 304:
case 1438:
case 4022:
case 718:
case 2212:
case 687:
case 3783:
case 3655:
case 961:
case 3454:
case 202:
case 413:
case 3586:
case 214:
case 3573:
case 2031:
case 2063:
case 3547:
case 49:
case 38:
case 2576:
case 3207:
case 2674:
case 1462:
case 22:
case 2287:
case 3981:
case 2664:
case 3322:
case 3009:
case 2375:
case 4088:
case 774:
case 212:
case 4090:
case 3077:
case 3767:
case 3656:
case 1512:
case 1017:
case 829:
case 1426:
case 3751:
case 1228:
case 3438:
case 2246:
case 2244:
case 2038:
case 1831:
case 1982:
case 767:
case 3279:
case 2975:
case 3760:
case 3175:
case 753:
case 2436:
case 331:
case 744:
case 3621:
case 185:
case 2068:
case 2533:
case 34:
case 1113:
case 1407:
case 397:
case 1802:
case 3478:
case 582:
case 32:
case 2466:
case 1604:
case 3081:
case 3841:
case 499:
case 208:
case 1893:
case 14:
case 1172:
case 1177:
case 2477:
case 1760:
case 2782:
case 2954:
case 2291:
case 466:
case 2512:
case 1889:
case 731:
case 3863:
case 1880:
case 3448:
case 1002:
case 259:
case 3255:
case 2962:
case 514:
case 19:
case 1227:
case 2992:
case 1605:
case 1577:
case 3666:
case 1166:
case 3439:
case 1324:
case 1944:
case 1989:
case 651:
case 433:
case 2064:
case 143:
case 1782:
case 2073:
case 1307:
case 3801:
case 3038:
case 3807:
case 1567:
case 617:
case 3908:
case 2066:
case 2855:
case 1435:
case 2630:
case 1911:
case 3592:
case 430:
case 3352:
case 1529:
case 2556:
case 3229:
case 460:
case 3733:
case 3434:
case 671:
case 2982:
case 1139:
case 3325:
case 920:
case 2669:
case 1651:
case 1292:
case 2079:
case 3705:
case 66:
case 1319:
case 3661:
case 2308:
case 2583:
case 1350:
case 636:
case 1680:
case 511:
case 3090:
case 1255:
case 3092:
case 670:
case 2282:
case 890:
case 3766:
case 3627:
case 918:
case 1886:
case 2046:
case 98:
case 707:
case 2943:
case 2266:
case 4062:
case 234:
case 1403:
case 2401:
case 3430:
case 3155:
case 2566:
case 727:
case 2624:
case 2686:
case 1073:
case 318:
case 3563:
case 3555:
case 3764:
case 250:
case 679:
case 3793:
case 729:
case 2196:
case 2144:
case 912:
case 29:
case 2731:
case 158:
case 3796:
case 306:
case 357:
case 388:
case 3271:
case 1092:
case 3249:
case 3476:
case 4032:
case 1042:
case 139:
case 174:
case 1115:
case 733:
case 156:
case 3425:
case 1077:
case 2838:
case 361:
case 938:
case 1795:
case 191:
case 375:
case 1217:
case 126:
case 3527:
case 3765:
case 521:
case 2738:
case 962:
case 2521:
case 2537:
case 2348:
case 254:
case 857:
case 2023:
case 851:
case 3640:
case 1355:
case 2384:
case 3143:
case 2072:
case 3296:
case 3987:
case 2299:
case 1411:
case 2690:
case 1639:
case 3504:
case 3441:
case 3994:
case 1052:
case 1301:
case 3234:
case 4031:
case 3459:
case 1939:
case 567:
case 2573:
case 4074:
case 1731:
case 532:
case 2514:
case 20:
case 3377:
case 1555:
case 1285:
case 3941:
case 2785:
case 2422:
case 50:
case 3178:
case 804:
case 2942:
case 269:
case 3865:
case 1272:
case 1557:
case 3594:
case 706:
case 3769:
case 491:
case 3980:
case 833:
case 1271:
case 1926:
case 2067:
case 3993:
case 3697:
case 1815:
case 3601:
case 743:
case 1138:
case 574:
case 1703:
case 1693:
case 3264:
case 3806:
case 3823:
case 884:
case 97:
case 3321:
case 3192:
case 2279:
case 3662:
case 2984:
case 3232:
case 4043:
case 310:
case 2010:
case 562:
case 952:
case 877:
case 2024:
case 1641:
case 3967:
case 1157:
case 1839:
case 449:
case 1152:
case 2890:
case 855:
case 41:
case 2842:
case 150:
case 3513:
case 954:
case 1614:
case 1130:
case 2729:
case 4065:
case 871:
case 4027:
case 1813:
case 170:
case 3472:
case 2478:
case 2503:
case 3600:
case 2710:
case 910:
case 3408:
case 2011:
case 684:
case 892:
case 2450:
case 2667:
case 1804:
case 3340:
case 5:
case 3026:
case 3634:
case 1104:
case 1080:
case 1418:
case 1602:
case 1361:
case 3181:
case 1538:
case 1744:
case 194:
case 3606:
case 3383:
case 2463:
case 3379:
case 881:
case 2292:
case 1304:
case 406:
case 2136:
case 1634:
case 837:
case 2622:
case 3940:
case 3866:
case 1014:
case 227:
case 3778:
case 2915:
case 2492:
case 3239:
case 426:
case 3990:
case 1670:
case 2594:
case 2820:
case 1533:
case 3470:
case 3849:
case 2107:
case 1824:
case 2807:
case 3597:
case 359:
case 2961:
case 1146:
case 1412:
case 1627:
case 2021:
case 428:
case 1562:
case 3740:
case 1714:
case 1269:
case 2271:
case 2487:
case 2897:
case 3409:
case 1437:
case 3703:
case 1983:
case 4006:
case 3481:
case 603:
case 2641:
case 484:
case 4079:
case 3373:
case 215:
case 3929:
case 4081:
case 2860:
case 2132:
case 3680:
case 2599:
case 3591:
case 2070:
case 3825:
case 2771:
case 2993:
case 1617:
case 2264:
case 65:
case 1687:
case 1730:
case 106:
case 3505:
case 3800:
case 1475:
case 556:
case 1897:
case 3615:
case 3188:
case 3526:
case 4049:
case 3845:
case 423:
case 2522:
case 3041:
case 3324:
case 815:
case 891:
case 1535:
case 372:
case 3093:
case 1320:
case 3126:
case 1599:
case 142:
case 3657:
case 3607:
case 351:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1706000402/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,];
var gg_b = "1706000402/";

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
      subdomainx = String.fromCharCode(97 + gg_m[x]);
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
