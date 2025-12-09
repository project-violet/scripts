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
case 459:
case 3255:
case 1873:
case 1608:
case 2401:
case 131:
case 1578:
case 3867:
case 1639:
case 1139:
case 1036:
case 1280:
case 3133:
case 289:
case 2793:
case 85:
case 3058:
case 3082:
case 2267:
case 3181:
case 969:
case 3541:
case 329:
case 394:
case 2099:
case 1015:
case 2828:
case 2163:
case 1595:
case 1758:
case 2837:
case 2519:
case 2696:
case 1026:
case 1217:
case 3623:
case 565:
case 2042:
case 515:
case 1577:
case 1840:
case 2244:
case 2994:
case 298:
case 2972:
case 1629:
case 1716:
case 1613:
case 3016:
case 2065:
case 333:
case 473:
case 1107:
case 1569:
case 3619:
case 3460:
case 3238:
case 861:
case 90:
case 2827:
case 1735:
case 3471:
case 1757:
case 570:
case 2430:
case 2268:
case 2809:
case 4076:
case 745:
case 820:
case 2305:
case 3035:
case 1169:
case 3279:
case 1669:
case 1410:
case 3196:
case 3519:
case 2902:
case 1513:
case 1452:
case 3163:
case 3828:
case 1488:
case 3855:
case 1066:
case 2284:
case 3420:
case 2181:
case 3766:
case 2715:
case 40:
case 4053:
case 3523:
case 3793:
case 1177:
case 3267:
case 1677:
case 2082:
case 1818:
case 531:
case 2133:
case 1424:
case 1306:
case 3884:
case 2633:
case 2237:
case 2879:
case 3414:
case 809:
case 835:
case 851:
case 2375:
case 827:
case 2736:
case 2255:
case 1240:
case 2844:
case 1178:
case 3430:
case 115:
case 1817:
case 165:
case 2057:
case 3809:
case 336:
case 1508:
case 3838:
case 2471:
case 1487:
case 300:
case 1742:
case 1695:
case 1195:
case 2238:
case 2726:
case 3065:
case 2227:
case 3994:
case 3141:
case 880:
case 3641:
case 959:
case 1434:
case 170:
case 3042:
case 2209:
case 901:
case 3034:
case 1343:
case 1442:
case 3845:
case 2311:
case 1734:
case 3862:
case 2190:
case 568:
case 2690:
case 748:
case 3730:
case 2064:
case 3087:
case 3929:
case 2262:
case 781:
case 1787:
case 1030:
case 2995:
case 2245:
case 1250:
case 2977:
case 2854:
case 1370:
case 158:
case 2047:
case 164:
case 1981:
case 1724:
case 1212:
case 893:
case 2436:
case 1102:
case 4070:
case 547:
case 1001:
case 3285:
case 2969:
case 3714:
case 694:
case 3222:
case 1752:
case 2389:
case 717:
case 3908:
case 2885:
case 2822:
case 3151:
case 3651:
case 3939:
case 3010:
case 1361:
case 3493:
case 1499:
case 3052:
case 3720:
case 3088:
case 1933:
case 3590:
case 2415:
case 3466:
case 1457:
case 1300:
case 1764:
case 3245:
case 2907:
case 3995:
case 698:
case 3832:
case 2913:
case 1435:
case 600:
case 2929:
case 2087:
case 168:
case 1194:
case 1291:
case 3064:
case 2730:
case 710:
case 760:
case 2862:
case 4021:
case 3551:
case 1060:
case 78:
case 3426:
case 3304:
case 2:
case 2845:
case 443:
case 2232:
case 2349:
case 636:
case 2590:
case 558:
case 3415:
case 564:
case 2088:
case 2052:
case 2392:
case 2254:
case 2939:
case 2151:
case 2374:
case 2493:
case 1383:
case 946:
case 1458:
case 689:
case 1425:
case 3885:
case 3389:
case 838:
case 1331:
case 1246:
case 2714:
case 3436:
case 1963:
case 2024:
case 1747:
case 442:
case 3854:
case 744:
case 2701:
case 3329:
case 3882:
case 3858:
case 387:
case 1323:
case 566:
case 829:
case 1319:
case 2718:
case 3307:
case 2395:
case 552:
case 2055:
case 3553:
case 2899:
case 1293:
case 1943:
case 1454:
case 1767:
case 3079:
case 3176:
case 3676:
case 1073:
case 3299:
case 3949:
case 3506:
case 1836:
case 3773:
case 2084:
case 2911:
case 227:
case 1779:
case 2225:
case 832:
case 235:
case 960:
case 910:
case 320:
case 1744:
case 2576:
case 4033:
case 2703:
case 1675:
case 112:
case 2216:
case 2027:
case 3265:
case 2106:
case 3044:
case 1333:
case 3992:
case 921:
case 156:
case 2009:
case 3242:
case 3974:
case 311:
case 2235:
case 1198:
case 1040:
case 1698:
case 2842:
case 1970:
case 634:
case 2369:
case 467:
case 417:
case 26:
case 21:
case 2491:
case 2653:
case 3816:
case 166:
case 2067:
case 3225:
case 116:
case 3258:
case 917:
case 351:
case 1105:
case 1605:
case 309:
case 3084:
case 1921:
case 1575:
case 152:
case 179:
case 2299:
case 889:
case 563:
case 2079:
case 3028:
case 2412:
case 3780:
case 25:
case 2313:
case 3899:
case 743:
case 1893:
case 1900:
case 638:
case 457:
case 3037:
case 2450:
case 3718:
case 410:
case 287:
case 3446:
case 2329:
case 1728:
case 948:
case 1363:
case 1056:
case 3653:
case 1462:
case 1396:
case 1659:
case 380:
case 153:
case 3369:
case 2068:
case 2486:
case 3235:
case 4063:
case 2242:
case 1738:
case 261:
case 1017:
case 2974:
case 211:
case 2835:
case 1597:
case 1003:
case 3106:
case 3703:
case 3216:
case 2308:
case 220:
case 1709:
case 742:
case 334:
case 474:
case 2864:
case 3670:
case 1438:
case 1260:
case 1409:
case 772:
case 1830:
case 2234:
case 3500:
case 3403:
case 701:
case 4051:
case 3045:
case 3834:
case 2183:
case 1504:
case 2543:
case 1762:
case 3975:
case 392:
case 978:
case 3521:
case 1091:
case 2848:
case 3456:
case 8:
case 3062:
case 620:
case 1674:
case 1692:
case 1745:
case 1351:
case 2085:
case 3418:
case 2022:
case 3643:
case 1649:
case 1149:
case 1820:
case 2712:
case 2121:
case 1428:
case 3888:
case 3852:
case 1455:
case 3997:
case 2905:
case 3247:
case 2561:
case 3810:
case 2473:
case 2252:
case 2570:
case 445:
case 2054:
case 393:
case 2100:
case 687:
case 149:
case 3824:
case 3786:
case 2661:
case 1860:
case 3848:
case 1906:
case 2062:
case 2456:
case 1549:
case 292:
case 1189:
case 895:
case 945:
case 2045:
case 3183:
case 2834:
case 3032:
case 1953:
case 1444:
case 2403:
case 3131:
case 2500:
case 3959:
case 1871:
case 61:
case 2670:
case 680:
case 234:
case 1754:
case 719:
case 2531:
case 3210:
case 3054:
case 3394:
case 3847:
case 3372:
case 478:
case 3561:
case 2746:
case 1722:
case 2810:
case 2852:
case 2888:
case 3905:
case 627:
case 4090:
case 3121:
case 974:
case 3224:
case 3712:
case 3750:
case 3022:
case 2418:
case 3085:
case 609:
case 1201:
case 1104:
case 2583:
case 1604:
case 2738:
case 4008:
case 1857:
case 2226:
case 1242:
case 356:
case 2003:
case 3333:
case 3505:
case 1835:
case 2727:
case 3432:
case 51:
case 3175:
case 3675:
case 56:
case 922:
case 691:
case 3744:
case 4039:
case 120:
case 580:
case 1308:
case 2983:
case 1816:
case 2462:
case 1740:
case 728:
case 3768:
case 2159:
case 905:
case 3381:
case 939:
case 3698:
case 3198:
case 1313:
case 4029:
case 15:
case 313:
case 3319:
case 3559:
case 527:
case 187:
case 649:
case 1825:
case 2737:
case 4007:
case 2018:
case 1858:
case 509:
case 877:
case 2728:
case 2341:
case 2598:
case 1329:
case 216:
case 3779:
case 1773:
case 3697:
case 3197:
case 2575:
case 831:
case 1299:
case 279:
case 2921:
case 2215:
case 3266:
case 1079:
case 3454:
case 2040:
case 2698:
case 1756:
case 1257:
case 2970:
case 2826:
case 69:
case 3445:
case 1377:
case 4069:
case 1842:
case 561:
case 353:
case 180:
case 3159:
case 3931:
case 3462:
case 1153:
case 3056:
case 16:
case 11:
case 982:
case 870:
case 1038:
case 1216:
case 262:
case 2175:
case 1703:
case 2333:
case 1606:
case 741:
case 3003:
case 3597:
case 2432:
case 3226:
case 256:
case 423:
case 1009:
case 2454:
case 2767:
case 1904:
case 379:
case 3215:
case 3921:
case 1084:
case 109:
case 2697:
case 3605:
case 587:
case 135:
case 1258:
case 2779:
case 3598:
case 3236:
case 3755:
case 3728:
case 2323:
case 1446:
case 2422:
case 3018:
case 4095:
case 2485:
case 3737:
case 1718:
case 799:
case 213:
case 263:
case 724:
case 3900:
case 2559:
case 3893:
case 1055:
case 2815:
case 3866:
case 1028:
case 2214:
case 2050:
case 2722:
case 2111:
case 3437:
case 2785:
case 2592:
case 2574:
case 703:
case 1997:
case 2012:
case 2390:
case 538:
case 3976:
case 1480:
case 3820:
case 3149:
case 3649:
case 2201:
case 1143:
case 2604:
case 1418:
case 2220:
case 3484:
case 349:
case 858:
case 2754:
case 193:
case 3814:
case 663:
case 2444:
case 2953:
case 1302:
case 3830:
case 3409:
case 702:
case 2871:
case 3260:
case 1170:
case 134:
case 1887:
case 1998:
case 771:
case 3351:
case 3745:
case 3511:
case 3692:
case 3192:
case 3271:
case 1661:
case 391:
case 3674:
case 2860:
case 1062:
case 1456:
case 908:
case 1521:
case 656:
case 3762:
case 3504:
case 1834:
case 138:
case 1847:
case 1252:
case 2814:
case 1054:
case 1210:
case 1100:
case 4094:
case 408:
case 706:
case 2046:
case 593:
case 3201:
case 1085:
case 1750:
case 1712:
case 2820:
case 2976:
case 1621:
case 1121:
case 666:
case 2149:
case 1905:
case 3390:
case 847:
case 3111:
case 3050:
case 3722:
case 3214:
case 3574:
case 997:
case 77:
case 3230:
case 1183:
case 1543:
case 1440:
case 3689:
case 3189:
case 1287:
case 2091:
case 1848:
case 2192:
case 2511:
case 2692:
case 2351:
case 2745:
case 2174:
case 291:
case 1786:
case 2427:
case 3732:
case 2438:
case 1864:
case 2830:
case 1234:
case 1631:
case 1131:
case 3444:
case 1032:
case 1596:
case 1119:
case 1619:
case 3569:
case 2195:
case 1563:
case 3448:
case 1227:
case 3716:
case 2765:
case 3629:
case 3203:
case 3840:
case 1209:
case 403:
case 270:
case 1123:
case 2434:
case 1623:
case 1868:
case 3026:
case 1397:
case 2990:
case 2240:
case 2539:
case 2178:
case 812:
case 862:
case 265:
case 2817:
case 2508:
case 3376:
case 2487:
case 3735:
case 640:
case 2424:
case 3036:
case 3139:
case 3218:
case 3578:
case 331:
case 355:
case 3108:
case 3608:
case 704:
case 1237:
case 1879:
case 1255:
case 797:
case 1375:
case 132:
case 614:
case 2507:
case 2669:
case 664:
case 658:
case 437:
case 3595:
case 2410:
case 2273:
case 2488:
case 1902:
case 2353:
case 813:
case 1284:
case 589:
case 1181:
case 1681:
case 1715:
case 1025:
case 2177:
case 2677:
case 1058:
case 2376:
case 4005:
case 1827:
case 2735:
case 2757:
case 3508:
case 708:
case 406:
case 1809:
case 3817:
case 315:
case 3678:
case 1268:
case 3178:
case 790:
case 3990:
case 2577:
case 1042:
case 2026:
case 2217:
case 3434:
case 198:
case 1972:
case 2840:
case 1581:
case 1244:
case 2203:
case 902:
case 2613:
case 2113:
case 3856:
case 1065:
case 3195:
case 618:
case 3695:
case 654:
case 3677:
case 1267:
case 3177:
case 1793:
case 3799:
case 3066:
case 2015:
case 1663:
case 1163:
case 33:
case 3513:
case 1696:
case 2782:
case 3410:
case 2758:
case 2725:
case 1837:
case 3507:
case 3169:
case 2873:
case 2447:
case 485:
case 2108:
case 2951:
case 2218:
case 2639:
case 2139:
case 1401:
case 507:
case 255:
case 2578:
case 189:
case 647:
case 2036:
case 1884:
case 3424:
case 3306:
case 2280:
case 1285:
case 3001:
case 2996:
case 2246:
case 3602:
case 2747:
case 2963:
case 1024:
case 924:
case 3594:
case 3212:
case 999:
case 3724:
case 3981:
case 364:
case 3572:
case 677:
case 358:
case 3370:
case 3250:
case 3933:
case 1720:
case 2812:
case 1052:
case 3499:
case 783:
case 2850:
case 1651:
case 1151:
case 2482:
case 2383:
case 726:
case 428:
case 44:
case 655:
case 3788:
case 3891:
case 1862:
case 1845:
case 941:
case 1:
case 1232:
case 2748:
case 2321:
case 1907:
case 3286:
case 3919:
case 2764:
case 2502:
case 484:
case 1913:
case 2694:
case 2194:
case 2941:
case 2291:
case 2172:
case 2672:
case 1929:
case 218:
case 2071:
case 3923:
case 1730:
case 1389:
case 2020:
case 3425:
case 347:
case 1822:
case 3458:
case 1415:
case 2499:
case 63:
case 1977:
case 2981:
case 2212:
case 258:
case 1047:
case 723:
case 488:
case 786:
case 3747:
case 2102:
case 1436:
case 1969:
case 3996:
case 2001:
case 2923:
case 89:
case 3291:
case 3194:
case 3941:
case 354:
case 94:
case 670:
case 705:
case 5:
case 739:
case 3764:
case 2030:
case 3457:
case 499:
case 424:
case 615:
case 665:
case 3321:
case 3748:
case 1760:
case 1426:
case 3886:
case 2734:
case 1978:
case 240:
case 722:
case 2891:
case 1190:
case 1690:
case 3130:
case 3630:
case 3289:
case 1547:
case 1187:
case 208:
case 1687:
case 2514:
case 2171:
case 2671:
case 2274:
case 1870:
case 3935:
case 1495:
case 2419:
case 3957:
case 2160:
case 2660:
case 3874:
case 1346:
case 828:
case 1634:
case 2322:
case 578:
case 3441:
case 99:
case 2889:
case 3362:
case 1548:
case 1652:
case 3463:
case 1152:
case 1110:
case 1610:
case 1469:
case 3560:
case 3496:
case 1843:
case 2804:
case 3751:
case 3345:
case 2481:
case 4091:
case 884:
case 3204:
case 1124:
case 1624:
case 2433:
case 626:
case 174:
case 1702:
case 3114:
case 397:
case 3925:
case 3614:
case 3571:
case 605:
case 3790:
case 3889:
case 1429:
case 3423:
case 1883:
case 545:
case 3322:
case 639:
case 4050:
case 2892:
case 1510:
case 2874:
case 2957:
case 1270:
case 3419:
case 1588:
case 1090:
case 1648:
case 1148:
case 3354:
case 3942:
case 622:
case 3514:
case 1664:
case 3274:
case 1261:
case 308:
case 841:
case 3094:
case 1524:
case 765:
case 178:
case 1772:
case 888:
case 2130:
case 3501:
case 2614:
case 2925:
case 2114:
case 297:
case 2571:
case 1966:
case 3332:
case 3999:
case 2204:
case 3530:
case 2101:
case 1243:
case 2849:
case 1386:
case 824:
case 2751:
case 2345:
case 73:
case 623:
case 2463:
case 604:
case 2451:
case 2069:
case 1901:
case 2193:
case 952:
case 3115:
case 4040:
case 3615:
case 803:
case 1081:
case 2947:
case 916:
case 2796:
case 966:
case 3368:
case 2526:
case 1542:
case 1125:
case 167:
case 117:
case 1682:
case 3136:
case 3039:
case 714:
case 456:
case 223:
case 758:
case 3008:
case 1876:
case 1920:
case 4073:
case 2384:
case 2536:
case 239:
case 1635:
case 871:
case 2078:
case 181:
case 1157:
case 3367:
case 3379:
case 560:
case 3875:
case 12:
case 1494:
case 2337:
case 2095:
case 3723:
case 1019:
case 1930:
case 3593:
case 2275:
case 1116:
case 222:
case 3013:
case 825:
case 2741:
case 2355:
case 837:
case 3490:
case 2515:
case 3566:
case 3898:
case 1713:
case 1023:
case 3719:
case 413:
case 463:
case 3327:
case 4003:
case 2733:
case 806:
case 323:
case 550:
case 517:
case 1317:
case 3309:
case 2988:
case 2636:
case 2952:
case 2344:
case 1402:
case 3805:
case 1535:
case 3526:
case 2368:
case 1769:
case 226:
case 3763:
case 747:
case 3297:
case 3947:
case 4056:
case 1699:
case 2781:
case 3166:
case 1777:
case 283:
case 3069:
case 3693:
case 1096:
case 121:
case 2626:
case 1971:
case 1558:
case 1795:
case 1582:
case 157:
case 1525:
case 581:
case 1318:
case 1380:
case 2987:
case 690:
case 2029:
case 1853:
case 2013:
case 1665:
case 3275:
case 2566:
case 3328:
case 548:
case 3741:
case 4080:
case 3355:
case 3095:
case 3337:
case 160:
case 2593:
case 3859:
case 2875:
case 282:
case 768:
case 2379:
case 718:
case 466:
case 416:
case 754:
case 175:
case 2934:
case 1778:
case 1960:
case 305:
case 3078:
case 3536:
case 1806:
case 452:
case 3074:
case 2783:
case 602:
case 3550:
case 2909:
case 3310:
case 542:
case 3388:
case 34:
case 3294:
case 3691:
case 968:
case 4020:
case 1662:
case 1585:
case 1792:
case 2686:
case 2186:
case 3761:
case 756:
case 458:
case 241:
case 1301:
case 3770:
case 3968:
case 1070:
case 762:
case 1940:
case 2872:
case 2347:
case 288:
case 1532:
case 3802:
case 1405:
case 2937:
case 1330:
case 2364:
case 543:
case 2700:
case 4030:
case 2476:
case 3387:
case 384:
case 2650:
case 2150:
case 2011:
case 2721:
case 2112:
case 2348:
case 2612:
case 299:
case 3979:
case 440:
case 1043:
case 3334:
case 2004:
case 388:
case 3872:
case 940:
case 341:
case 1632:
case 1132:
case 2406:
case 2324:
case 3546:
case 3938:
case 3089:
case 685:
case 1498:
case 2191:
case 2944:
case 1890:
case 228:
case 1789:
case 2453:
case 2272:
case 1917:
case 2310:
case 3909:
case 2550:
case 1622:
case 1122:
case 2646:
case 546:
case 2334:
case 3348:
case 3984:
case 324:
case 1562:
case 1704:
case 2743:
case 143:
case 3011:
case 2967:
case 1980:
case 3476:
case 284:
case 3364:
case 1918:
case 1251:
case 779:
case 1000:
case 468:
case 2802:
case 454:
case 1497:
case 3955:
case 3277:
case 1167:
case 3357:
case 3400:
case 2005:
case 3335:
case 3097:
case 3503:
case 3776:
case 1263:
case 3673:
case 1076:
case 1527:
case 1797:
case 1538:
case 1296:
case 1946:
case 3269:
case 1179:
case 2922:
case 2985:
case 3316:
case 2208:
case 684:
case 1411:
case 303:
case 230:
case 2954:
case 2239:
case 2118:
case 2342:
case 1404:
case 2443:
case 2180:
case 569:
case 2680:
case 2540:
case 1881:
case 1528:
case 1315:
case 1555:
case 2656:
case 2399:
case 2932:
case 1819:
case 1537:
case 3807:
case 2895:
case 3382:
case 3358:
case 965:
case 3278:
case 1168:
case 1489:
case 3640:
case 3098:
case 2878:
case 882:
case 970:
case 2117:
case 2617:
case 101:
case 3431:
case 2229:
case 1775:
case 159:
case 2103:
case 2603:
case 1144:
case 1991:
case 1644:
case 2573:
case 2706:
case 50:
case 2213:
case 2470:
case 455:
case 628:
case 3295:
case 2421:
case 3540:
case 3680:
case 1233:
case 3180:
case 3342:
case 3877:
case 470:
case 3869:
case 1137:
case 1155:
case 1863:
case 1128:
case 2556:
case 415:
case 465:
case 2808:
case 3985:
case 699:
case 3922:
case 1705:
case 2097:
case 1912:
case 1544:
case 2776:
case 1684:
case 2503:
case 823:
case 2839:
case 2277:
case 573:
case 2517:
case 2357:
case 3470:
case 1138:
case 1986:
case 2945:
case 3207:
case 3706:
case 3573:
case 202:
case 1627:
case 2962:
case 3603:
case 3103:
case 1609:
case 385:
case 79:
case 3878:
case 1223:
case 2098:
case 4066:
case 2140:
case 641:
case 43:
case 1841:
case 2580:
case 2325:
case 2518:
case 2358:
case 1759:
case 2483:
case 1474:
case 3895:
case 1492:
case 10:
case 1366:
case 2813:
case 3656:
case 1387:
case 524:
case 2251:
case 2654:
case 874:
case 3330:
case 346:
case 3405:
case 1802:
case 2497:
case 3532:
case 1146:
case 1586:
case 3043:
case 2185:
case 2622:
case 2122:
case 3973:
case 2021:
case 787:
case 1049:
case 1967:
case 75:
case 2704:
case 2360:
case 2083:
case 1761:
case 541:
case 3792:
case 3645:
case 4088:
case 4052:
case 601:
case 2498:
case 2789:
case 128:
case 1453:
case 1191:
case 1944:
case 1691:
case 2903:
case 1352:
case 1294:
case 1092:
case 1310:
case 1550:
case 3061:
case 4024:
case 3940:
case 3290:
case 3554:
case 1968:
case 1770:
case 3301:
case 2031:
case 761:
case 711:
case 1406:
case 2632:
case 1150:
case 1011:
case 343:
case 3360:
case 2749:
case 124:
case 676:
case 199:
case 1721:
case 2973:
case 495:
case 1004:
case 3622:
case 3185:
case 3685:
case 1928:
case 727:
case 2405:
case 4064:
case 1937:
case 246:
case 709:
case 3918:
case 1364:
case 3371:
case 1700:
case 1476:
case 3980:
case 3956:
case 3632:
case 3031:
case 141:
case 2301:
case 2314:
case 1731:
case 2070:
case 1872:
case 188:
case 1347:
case 3475:
case 1894:
case 528:
case 2290:
case 2940:
case 2061:
case 1783:
case 2162:
case 2662:
case 3890:
case 2320:
case 1927:
case 1686:
case 1186:
case 1938:
case 3083:
case 2522:
case 2145:
case 2585:
case 1640:
case 1140:
case 1580:
case 3489:
case 936:
case 2759:
case 125:
case 3668:
case 3823:
case 137:
case 1325:
case 1358:
case 792:
case 1807:
case 407:
case 2492:
case 2474:
case 2393:
case 1813:
case 3315:
case 1295:
case 2579:
case 171:
case 2638:
case 2986:
case 900:
case 2138:
case 2627:
case 102:
case 3991:
case 3336:
case 359:
case 432:
case 3775:
case 301:
case 82:
case 2109:
case 3679:
case 1269:
case 3946:
case 4057:
case 530:
case 1808:
case 3538:
case 3797:
case 2705:
case 3527:
case 2684:
case 1503:
case 2184:
case 269:
case 1335:
case 1517:
case 1357:
case 1839:
case 3167:
case 2950:
case 1277:
case 3509:
case 989:
case 2233:
case 2449:
case 3326:
case 2568:
case 433:
case 3411:
case 103:
case 2137:
case 2896:
case 1316:
case 2155:
case 867:
case 2863:
case 2628:
case 817:
case 1878:
case 1117:
case 1617:
case 2584:
case 2241:
case 2336:
case 2144:
case 2991:
case 272:
case 2775:
case 3127:
case 3627:
case 1213:
case 1573:
case 3579:
case 1207:
case 3986:
case 3138:
case 3638:
case 933:
case 1399:
case 821:
case 3053:
case 2315:
case 2528:
case 3366:
case 2798:
case 2537:
case 3492:
case 642:
case 3474:
case 1059:
case 2168:
case 2823:
case 88:
case 810:
case 3841:
case 860:
case 17:
case 1365:
case 3128:
case 3863:
case 3155:
case 3137:
case 2411:
case 4042:
case 3896:
case 3568:
case 2326:
case 400:
case 273:
case 1342:
case 1618:
case 1180:
case 1680:
case 1540:
case 4065:
case 907:
case 106:
case 3184:
case 3544:
case 3281:
case 929:
case 1005:
case 369:
case 2527:
case 3705:
case 2797:
case 2263:
case 2179:
case 376:
case 738:
case 436:
case 2538:
case 2296:
case 2946:
case 1849:
case 707:
case 1620:
case 1120:
case 729:
case 1345:
case 1751:
case 2386:
case 3843:
case 1560:
case 3110:
case 3688:
case 3936:
case 3188:
case 3391:
case 3548:
case 938:
case 3564:
case 1571:
case 732:
case 2587:
case 2647:
case 3702:
case 667:
case 617:
case 1002:
case 3221:
case 2439:
case 2800:
case 1204:
case 2993:
case 1601:
case 2243:
case 1101:
case 3870:
case 2664:
case 493:
case 3547:
case 278:
case 2772:
case 1916:
case 2524:
case 2794:
case 1630:
case 3478:
case 345:
case 2831:
case 2429:
case 681:
case 3634:
case 3231:
case 1874:
case 2407:
case 2350:
case 1892:
case 648:
case 2552:
case 2648:
case 2148:
case 2413:
case 789:
case 3439:
case 3243:
case 1530:
case 3993:
case 3800:
case 1332:
case 2221:
case 2124:
case 3966:
case 2915:
case 3147:
case 2702:
case 2564:
case 3408:
case 2936:
case 2652:
case 504:
case 2152:
case 597:
case 2110:
case 1811:
case 2051:
case 2469:
case 2477:
case 993:
case 2843:
case 3534:
case 2200:
case 1804:
case 3386:
case 1481:
case 3821:
case 843:
case 3588:
case 700:
case 3413:
case 1419:
case 2495:
case 4022:
case 3350:
case 3407:
case 496:
case 798:
case 2231:
case 2346:
case 3883:
case 1423:
case 3429:
case 1790:
case 190:
case 1501:
case 3831:
case 2283:
case 842:
case 438:
case 3772:
case 378:
case 992:
case 3524:
case 1094:
case 610:
case 2547:
case 2187:
case 2687:
case 108:
case 1671:
case 68:
case 2926:
case 1274:
case 2870:
case 1942:
case 1354:
case 522:
case 3373:
case 3494:
case 3253:
case 96:
case 1875:
case 859:
case 2778:
case 980:
case 2960:
case 381:
case 2806:
case 2795:
case 257:
case 3707:
case 2642:
case 505:
case 2318:
case 1719:
case 221:
case 1987:
case 3206:
case 539:
case 2380:
case 645:
case 1566:
case 28:
case 1490:
case 1013:
case 3116:
case 3729:
case 2165:
case 3616:
case 1593:
case 3930:
case 3019:
case 1723:
case 3682:
case 3182:
case 126:
case 3914:
case 317:
case 3542:
case 3081:
case 1615:
case 1924:
case 1781:
case 2063:
case 2356:
case 2699:
case 2516:
case 3565:
case 523:
case 4068:
case 3920:
case 1733:
case 411:
case 1008:
case 3739:
case 1910:
case 420:
case 2557:
case 2317:
case 2535:
case 1136:
case 2303:
case 1952:
case 1344:
case 3033:
case 1859:
case 2019:
case 1337:
case 1095:
case 1515:
case 582:
case 38:
case 122:
case 2729:
case 3853:
case 2599:
case 3041:
case 4028:
case 4055:
case 2206:
case 3318:
case 3525:
case 3642:
case 911:
case 3795:
case 2023:
case 3971:
case 1964:
case 321:
case 2135:
case 2635:
case 1384:
case 3806:
case 1536:
case 1078:
case 281:
case 3960:
case 2157:
case 451:
case 375:
case 427:
case 4084:
case 2494:
case 2253:
case 2472:
case 1805:
case 2033:
case 876:
case 3303:
case 3317:
case 2708:
case 1338:
case 819:
case 2876:
case 95:
case 3096:
case 2901:
case 1193:
case 1069:
case 3777:
case 3063:
case 1666:
case 1166:
case 3356:
case 1763:
case 2542:
case 3769:
case 2625:
case 2182:
case 2658:
case 2158:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1765260001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,];
var gg_b = "1765260001/";

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
