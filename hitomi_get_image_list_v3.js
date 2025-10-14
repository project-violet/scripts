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
case 504:
case 462:
case 2099:
case 3865:
case 13:
case 2569:
case 2432:
case 335:
case 3061:
case 4056:
case 913:
case 762:
case 3005:
case 286:
case 2383:
case 3746:
case 2457:
case 1807:
case 583:
case 252:
case 1841:
case 3218:
case 3112:
case 3037:
case 2994:
case 1067:
case 2829:
case 1177:
case 3906:
case 1706:
case 676:
case 2302:
case 1597:
case 3052:
case 651:
case 3416:
case 3803:
case 2022:
case 1050:
case 3438:
case 549:
case 2381:
case 3593:
case 2271:
case 2449:
case 2369:
case 2775:
case 1124:
case 3173:
case 1110:
case 148:
case 1843:
case 2340:
case 2136:
case 2460:
case 3882:
case 1495:
case 2118:
case 1254:
case 3427:
case 2892:
case 3308:
case 663:
case 2058:
case 1001:
case 2560:
case 2710:
case 2973:
case 2724:
case 1047:
case 987:
case 2090:
case 1595:
case 3527:
case 1861:
case 855:
case 2671:
case 1889:
case 3080:
case 910:
case 2483:
case 2357:
case 2455:
case 580:
case 690:
case 3206:
case 1521:
case 2612:
case 559:
case 2549:
case 1718:
case 345:
case 506:
case 3936:
case 1323:
case 623:
case 3408:
case 3833:
case 835:
case 3850:
case 1863:
case 2360:
case 1497:
case 127:
case 641:
case 715:
case 1448:
case 1368:
case 1082:
case 2469:
case 3618:
case 2349:
case 2777:
case 701:
case 660:
case 3338:
case 1321:
case 1954:
case 3754:
case 2876:
case 3491:
case 2184:
case 779:
case 2135:
case 116:
case 4040:
case 935:
case 3326:
case 1933:
case 3733:
case 702:
case 1496:
case 3750:
case 1311:
case 3689:
case 2922:
case 3963:
case 2699:
case 313:
case 1513:
case 3415:
case 2444:
case 1645:
case 750:
case 642:
case 1129:
case 489:
case 721:
case 1667:
case 3317:
case 1282:
case 4081:
case 1188:
case 4069:
case 2958:
case 3663:
case 1931:
case 3731:
case 1761:
case 3961:
case 2290:
case 3905:
case 1789:
case 3989:
case 1705:
case 2622:
case 1633:
case 223:
case 443:
case 274:
case 3084:
case 2658:
case 430:
case 1737:
case 3479:
case 2094:
case 1967:
case 1818:
case 1836:
case 4083:
case 2564:
case 2143:
case 1945:
case 1959:
case 3680:
case 3703:
case 1903:
case 2189:
case 1647:
case 3579:
case 2690:
case 1250:
case 2464:
case 2344:
case 1665:
case 566:
case 1698:
case 1114:
case 2258:
case 491:
case 2152:
case 1982:
case 791:
case 3641:
case 2012:
case 1411:
case 2792:
case 4060:
case 114:
case 3515:
case 2163:
case 2073:
case 3765:
case 3747:
case 3261:
case 3205:
case 440:
case 4032:
case 1231:
case 3228:
case 3122:
case 1659:
case 524:
case 276:
case 3935:
case 813:
case 3907:
case 3158:
case 1245:
case 3252:
case 1741:
case 761:
case 1682:
case 2729:
case 733:
case 3237:
case 1806:
case 3018:
case 686:
case 1998:
case 3036:
case 3798:
case 3643:
case 461:
case 1413:
case 408:
case 214:
case 4095:
case 2396:
case 2411:
case 65:
case 510:
case 3304:
case 3077:
case 2982:
case 1258:
case 3145:
case 894:
case 1152:
case 2698:
case 2743:
case 3276:
case 2233:
case 959:
case 1464:
case 2601:
case 1344:
case 1128:
case 1222:
case 2250:
case 917:
case 870:
case 1189:
case 1071:
case 4068:
case 1161:
case 980:
case 648:
case 2959:
case 366:
case 667:
case 864:
case 3586:
case 2998:
case 2806:
case 3929:
case 485:
case 3504:
case 2741:
case 1788:
case 2267:
case 3988:
case 63:
case 3220:
case 2066:
case 2176:
case 3692:
case 176:
case 2735:
case 2231:
case 3150:
case 2603:
case 3478:
case 1456:
case 3790:
case 1990:
case 1819:
case 2947:
case 193:
case 3010:
case 3024:
case 1073:
case 373:
case 1544:
case 2901:
case 1163:
case 824:
case 3758:
case 141:
case 1776:
case 364:
case 1107:
case 638:
case 4048:
case 2282:
case 2188:
case 904:
case 1877:
case 1556:
case 2667:
case 3614:
case 2645:
case 3620:
case 3198:
case 1444:
case 1364:
case 896:
case 2513:
case 3486:
case 2763:
case 2259:
case 3075:
case 2631:
case 2311:
case 2950:
case 3404:
case 2945:
case 3914:
case 949:
case 1720:
case 2752:
case 1714:
case 2836:
case 1143:
case 3378:
case 2818:
case 3182:
case 3288:
case 2572:
case 1658:
case 2298:
case 2633:
case 2265:
case 3159:
case 2201:
case 1622:
case 2650:
case 2705:
case 2761:
case 3103:
case 2931:
case 2728:
case 370:
case 190:
case 3019:
case 2313:
case 2852:
case 2323:
case 2736:
case 849:
case 2718:
case 42:
case 2654:
case 2837:
case 2521:
case 1294:
case 3088:
case 1455:
case 3442:
case 72:
case 2966:
case 1483:
case 317:
case 3530:
case 2889:
case 1671:
case 3553:
case 2805:
case 2861:
case 3219:
case 2595:
case 1090:
case 2047:
case 3351:
case 1973:
case 2246:
case 1710:
case 3899:
case 3910:
case 103:
case 1724:
case 2001:
case 1560:
case 2666:
case 1557:
case 498:
case 2321:
case 1912:
case 3439:
case 3400:
case 3977:
case 798:
case 1469:
case 1777:
case 2448:
case 2368:
case 2523:
case 607:
case 616:
case 227:
case 447:
case 3551:
case 2863:
case 1360:
case 1440:
case 996:
case 2395:
case 1971:
case 3822:
case 3353:
case 3771:
case 339:
case 3385:
case 3146:
case 3330:
case 3275:
case 2059:
case 3020:
case 2266:
case 457:
case 3014:
case 2045:
case 2597:
case 964:
case 2177:
case 2067:
case 1994:
case 1829:
case 3154:
case 535:
case 3587:
case 757:
case 1888:
case 719:
case 152:
case 2784:
case 3224:
case 1457:
case 2835:
case 1383:
case 2880:
case 3462:
case 3500:
case 1569:
case 839:
case 1581:
case 2548:
case 23:
case 2423:
case 383:
case 1099:
case 3166:
case 132:
case 3430:
case 1058:
case 3485:
case 3076:
case 1892:
case 728:
case 555:
case 349:
case 2254:
case 2495:
case 1694:
case 577:
case 1340:
case 1460:
case 1136:
case 2124:
case 614:
case 3975:
case 1449:
case 4072:
case 1369:
case 2468:
case 2348:
case 3300:
case 1555:
case 3339:
case 3542:
case 1583:
case 1535:
case 256:
case 2476:
case 3891:
case 2030:
case 271:
case 2053:
case 4077:
case 1679:
case 3095:
case 3501:
case 308:
case 1915:
case 1226:
case 672:
case 1463:
case 466:
case 1343:
case 2986:
case 3068:
case 3382:
case 2529:
case 3178:
case 2904:
case 1217:
case 766:
case 3450:
case 3021:
case 3808:
case 1507:
case 1016:
case 2392:
case 282:
case 3433:
case 3301:
case 3365:
case 2420:
case 2414:
case 3467:
case 18:
case 1979:
case 3347:
case 3779:
case 724:
case 3503:
case 2111:
case 998:
case 244:
case 1380:
case 3559:
case 424:
case 1335:
case 3213:
case 1270:
case 2592:
case 3134:
case 4024:
case 533:
case 2604:
case 1341:
case 1489:
case 1405:
case 3696:
case 2329:
case 1428:
case 496:
case 2802:
case 1164:
case 2686:
case 1074:
case 3023:
case 3726:
case 2492:
case 1926:
case 1215:
case 1561:
case 885:
case 2039:
case 3911:
case 764:
case 1505:
case 3350:
case 3048:
case 3482:
case 1895:
case 1528:
case 3827:
case 188:
case 464:
case 502:
case 919:
case 1670:
case 3097:
case 2514:
case 3567:
case 1868:
case 2204:
case 1917:
case 2678:
case 2849:
case 3717:
case 3403:
case 550:
case 61:
case 3838:
case 1821:
case 4075:
case 3459:
case 2286:
case 2934:
case 3498:
case 1144:
case 937:
case 928:
case 1328:
case 3331:
case 105:
case 2488:
case 1279:
case 1305:
case 3611:
case 1389:
case 1407:
case 2:
case 1626:
case 543:
case 111:
case 96:
case 808:
case 3533:
case 1435:
case 2576:
case 246:
case 426:
case 234:
case 2634:
case 2857:
case 530:
case 4019:
case 2196:
case 2756:
case 669:
case 2832:
case 726:
case 1617:
case 3186:
case 2314:
case 770:
case 1823:
case 3874:
case 1352:
case 646:
case 634:
case 2324:
case 3870:
case 2310:
case 1181:
case 2148:
case 1079:
case 1627:
case 1406:
case 1293:
case 3139:
case 269:
case 32:
case 2653:
case 125:
case 908:
case 2685:
case 2630:
case 1616:
case 112:
case 3366:
case 3446:
case 2962:
case 480:
case 3621:
case 459:
case 2419:
case 2732:
case 1318:
case 1140:
case 2197:
case 1336:
case 1974:
case 3923:
case 417:
case 780:
case 3774:
case 1723:
case 985:
case 1183:
case 2985:
case 2909:
case 522:
case 3142:
case 299:
case 3248:
case 1927:
case 1795:
case 819:
case 178:
case 1015:
case 654:
case 1291:
case 1102:
case 2864:
case 3623:
case 1674:
case 501:
case 2086:
case 579:
case 439:
case 1768:
case 2287:
case 1518:
case 3921:
case 1938:
case 3096:
case 515:
case 1721:
case 3297:
case 1916:
case 1436:
case 1160:
case 404:
case 218:
case 1070:
case 2319:
case 1993:
case 3879:
case 39:
case 3793:
case 1418:
case 319:
case 2942:
case 3153:
case 898:
case 3346:
case 4020:
case 2251:
case 3130:
case 357:
case 4014:
case 1608:
case 3223:
case 1274:
case 2121:
case 1306:
case 2078:
case 3697:
case 847:
case 2702:
case 1625:
case 636:
case 2410:
case 2424:
case 3791:
case 328:
case 281:
case 90:
case 1227:
case 3011:
case 3295:
case 1748:
case 2781:
case 449:
case 36:
case 2253:
case 2769:
case 82:
case 4076:
case 2375:
case 3151:
case 2209:
case 2230:
case 3997:
case 3725:
case 656:
case 1216:
case 1925:
case 2123:
case 671:
case 609:
case 1132:
case 3162:
case 2987:
case 1896:
case 1908:
case 2034:
case 557:
case 3257:
case 1410:
case 3473:
case 3640:
case 2306:
case 4089:
case 2149:
case 3056:
case 1262:
case 1168:
case 519:
case 1121:
case 575:
case 362:
case 2274:
case 2384:
case 2608:
case 3116:
case 4052:
case 950:
case 1783:
case 1942:
case 1755:
case 1639:
case 3955:
case 815:
case 295:
case 3669:
case 1195:
case 4037:
case 2418:
case 2993:
case 1319:
case 1575:
case 2160:
case 2436:
case 392:
case 4063:
case 2584:
case 3471:
case 455:
case 777:
case 943:
case 1987:
case 2506:
case 2132:
case 477:
case 3886:
case 3602:
case 528:
case 3940:
case 3064:
case 755:
case 2797:
case 2216:
case 1285:
case 1209:
case 1844:
case 1375:
case 265:
case 1253:
case 3969:
case 1477:
case 129:
case 2693:
case 3981:
case 3412:
case 2227:
case 1900:
case 1642:
case 1939:
case 3700:
case 930:
case 181:
case 2991:
case 2026:
case 3260:
case 2723:
case 4035:
case 2140:
case 4080:
case 3125:
case 2318:
case 1856:
case 1419:
case 3512:
case 3762:
case 212:
case 3957:
case 2616:
case 1630:
case 1609:
case 2484:
case 1653:
case 3571:
case 445:
case 2293:
case 2627:
case 2406:
case 1242:
case 4041:
case 2079:
case 991:
case 3255:
case 2181:
case 3373:
case 1951:
case 1310:
case 4007:
case 745:
case 3660:
case 3283:
case 3834:
case 688:
case 3240:
case 598:
case 2916:
case 2872:
case 2721:
case 1749:
case 1377:
case 3632:
case 3949:
case 2768:
case 1287:
case 2674:
case 1864:
case 1475:
case 2536:
case 862:
case 1651:
case 547:
case 1510:
case 2291:
case 2015:
case 1760:
case 315:
case 2795:
case 2927:
case 3193:
case 961:
case 11:
case 3371:
case 2811:
case 199:
case 379:
case 4043:
case 1286:
case 1934:
case 302:
case 2772:
case 2537:
case 840:
case 1087:
case 1849:
case 1678:
case 2868:
case 713:
case 2552:
case 1514:
case 1764:
case 3040:
case 3964:
case 321:
case 3599:
case 2443:
case 3069:
case 2895:
case 3081:
case 350:
case 3179:
case 3853:
case 2711:
case 1000:
case 389:
case 1039:
case 1492:
case 3244:
case 2091:
case 833:
case 1314:
case 343:
case 3002:
case 625:
case 1978:
case 1832:
case 3778:
case 1756:
case 3490:
case 992:
case 2337:
case 3862:
case 1634:
case 1857:
case 146:
case 2480:
case 853:
case 2626:
case 1:
case 2305:
case 3522:
case 2389:
case 2441:
case 1042:
case 2328:
case 330:
case 1429:
case 2093:
case 3399:
case 2970:
case 4084:
case 2563:
case 2144:
case 843:
case 2507:
case 3264:
case 2217:
case 3422:
case 2038:
case 2541:
case 1588:
case 1904:
case 410:
case 1529:
case 1986:
case 1234:
case 710:
case 487:
case 3786:
case 1840:
case 1113:
case 3170:
case 353:
case 1744:
case 3944:
case 3060:
case 2027:
case 3590:
case 1881:
case 830:
case 3800:
case 391:
case 3458:
case 171:
case 2535:
case 2580:
case 3499:
case 2543:
case 802:
case 1329:
case 695:
case 1172:
case 67:
case 2461:
case 1604:
case 3057:
case 361:
case 2270:
case 1883:
case 144:
case 2335:
case 915:
case 3126:
case 136:
case 1111:
case 4018:
case 1855:
case 3842:
case 2979:
case 28:
case 333:
case 2452:
case 1414:
case 2615:
case 3157:
case 292:
case 1708:
case 3584:
case 3908:
case 3896:
case 2787:
case 529:
case 1268:
case 3238:
case 3132:
case 2594:
case 2174:
case 2886:
case 1725:
case 2064:
case 1997:
case 3925:
case 3797:
case 812:
case 432:
case 1151:
case 572:
case 4058:
case 365:
case 2969:
case 2981:
case 1948:
case 911:
case 1295:
case 1454:
case 2739:
case 2655:
case 137:
case 905:
case 2260:
case 128:
case 700:
case 2640:
case 486:
case 1697:
case 3625:
case 2232:
case 786:
case 633:
case 3274:
case 3384:
case 3608:
case 2116:
case 1346:
case 157:
case 2983:
case 752:
case 2955:
case 2742:
case 395:
case 2669:
case 175:
case 3418:
case 1648:
case 1793:
case 1879:
case 3070:
case 452:
case 1013:
case 3160:
case 621:
case 2657:
case 147:
case 2834:
case 3916:
case 3225:
case 1096:
case 1921:
case 1354:
case 3872:
case 2312:
case 1738:
case 51:
case 742:
case 1817:
case 3768:
case 599:
case 1968:
case 222:
case 3102:
case 3208:
case 602:
case 2044:
case 2960:
case 198:
case 1727:
case 2193:
case 2371:
case 2269:
case 3811:
case 895:
case 2785:
case 3183:
case 3723:
case 3140:
case 3336:
case 2125:
case 2878:
case 2649:
case 569:
case 1668:
case 3638:
case 1621:
case 2512:
case 4090:
case 1187:
case 630:
case 1366:
case 403:
case 1446:
case 2108:
case 2191:
case 3484:
case 325:
case 3627:
case 1695:
case 3169:
case 3406:
case 3079:
case 2494:
case 3181:
case 2751:
case 484:
case 1345:
case 423:
case 3352:
case 1401:
case 2002:
case 2664:
case 2778:
case 1447:
case 2956:
case 3337:
case 1672:
case 2862:
case 723:
case 2558:
case 311:
case 1533:
case 3407:
case 2083:
case 3626:
case 1611:
case 2522:
case 3389:
case 3279:
case 3441:
case 4094:
case 3361:
case 3328:
case 230:
case 3093:
case 1913:
case 3713:
case 3970:
case 534:
case 474:
case 3563:
case 546:
case 2358:
case 202:
case 2734:
case 1459:
case 615:
case 3537:
case 1838:
case 3821:
case 1403:
case 1717:
case 1296:
case 2656:
case 2040:
case 2964:
case 1613:
case 3670:
case 441:
case 3443:
case 388:
case 2069:
case 3895:
case 1827:
case 1048:
case 250:
case 2179:
case 1482:
case 1911:
case 1350:
case 3711:
case 3561:
case 289:
case 2809:
case 1333:
case 622:
case 2885:
case 2244:
case 3091:
case 3215:
case 2499:
case 3074:
case 1398:
case 476:
case 3543:
case 3164:
case 2117:
case 240:
case 793:
case 3489:
case 776:
case 1696:
case 2256:
case 3341:
case 493:
case 720:
case 4073:
case 2057:
case 3380:
case 1559:
case 2126:
case 978:
case 2842:
case 38:
case 1467:
case 2390:
case 1779:
case 233:
case 662:
case 3452:
case 3615:
case 2644:
case 1433:
case 1808:
case 1450:
case 1996:
case 1021:
case 3038:
case 731:
case 2049:
case 1272:
case 1382:
case 509:
case 1068:
case 912:
case 571:
case 1825:
case 3897:
case 582:
case 108:
case 1501:
case 2944:
case 2060:
case 1547:
case 3848:
case 2590:
case 805:
case 2839:
case 1303:
case 2800:
case 2458:
case 1359:
case 3580:
case 1644:
case 2301:
case 2365:
case 133:
case 4066:
case 3051:
case 2347:
case 2893:
case 285:
case 3855:
case 2503:
case 1842:
case 3883:
case 1126:
case 91:
case 2213:
case 161:
case 3592:
case 2134:
case 69:
case 3172:
case 140:
case 619:
case 2582:
case 1117:
case 3686:
case 2023:
case 356:
case 3476:
case 2891:
case 3030:
case 371:
case 1458:
case 3085:
case 2303:
case 1800:
case 1839:
case 714:
case 3053:
case 3869:
case 2095:
case 2501:
case 208:
case 1060:
case 8:
case 153:
case 2598:
case 628:
case 834:
case 3986:
case 2068:
case 3529:
case 2272:
case 1704:
case 66:
case 2996:
case 2808:
case 1264:
case 3392:
case 2433:
case 871:
case 2770:
case 1851:
case 130:
case 2611:
case 1083:
case 3576:
case 668:
case 334:
case 1558:
case 3857:
case 2104:
case 3196:
case 2672:
case 3756:
case 2447:
case 3832:
case 1778:
case 2401:
case 1002:
case 3320:
case 2465:
case 3492:
case 1830:
case 2333:
case 1809:
case 3000:
case 2911:
case 1853:
case 2350:
case 1322:
case 2048:
case 1081:
case 2531:
case 2827:
case 3860:
case 121:
case 1599:
case 3764:
case 2097:
case 416:
case 3520:
case 3514:
case 2545:
case 2567:
case 3204:
case 3678:
case 2717:
case 3087:
case 2403:
case 716:
case 2972:
case 698:
case 3934:
case 3286:
case 1734:
case 102:
case 2826:
case 1730:
case 1709:
case 3985:
case 1785:
case 399:
case 1281:
case 4082:
case 3953:
case 1753:
case 3239:
case 3200:
case 1193:
case 31:
case 936:
case 944:
case 1960:
case 3510:
case 3651:
case 1573:
case 3524:
case 3864:
case 4059:
case 122:
case 3086:
case 3287:
case 3749:
case 1949:
case 1632:
case 3662:
case 2096:
case 2738:
case 1312:
case 1240:
case 578:
case 438:
case 1657:
case 1834:
case 247:
case 1660:
case 881:
case 268:
case 3324:
case 3951:
case 1373:
case 2870:
case 74:
case 512:
case 971:
case 3242:
case 2695:
case 2100:
case 1191:
case 3685:
case 3609:
case 4065:
case 60:
case 4047:
case 2187:
case 1762:
case 1512:
case 2554:
case 3856:
case 2668:
case 3419:
case 1649:
case 525:
case 1932:
case 3197:
case 1260:
case 1683:
case 228:
case 237:
case 381:
case 1655:
case 1739:
case 2011:
case 3781:
case 2948:
case 26:
case 1981:
case 3519:
case 9:
case 869:
case 1969:
case 3375:
case 2151:
case 3285:
case 3209:
case 3230:
case 2725:
case 1064:
case 1940:
case 1602:
case 497:
case 3123:
case 1174:
case 1886:
case 4033:
case 1594:
case 4050:
case 2221:
case 946:
case 1804:
case 1787:
case 2162:
case 2268:
case 2072:
case 1249:
case 565:
case 1471:
case 608:
case 192:
case 3575:
case 2013:
case 3319:
case 29:
case 1681:
case 2648:
case 1127:
case 899:
case 3195:
case 1669:
case 219:
case 3600:
case 3942:
case 1742:
case 2153:
case 81:
case 2185:
case 2130:
case 2466:
case 4045:
case 2223:
case 767:
case 43:
case 1138:
case 3121:
case 4031:
case 685:
case 595:
case 3262:
case 3078:
case 954:
case 2697:
case 1640:
case 467:
case 1257:
case 73:
case 1473:
case 3424:
case 551:
case 2586:
case 1036:
case 3998:
case 224:
case 576:
case 1643:
case 520:
case 2929:
case 3596:
case 744:
case 2988:
case 2214:
case 683:
case 4051:
case 2220:
case 3176:
case 1907:
case 2133:
case 1846:
case 1935:
case 296:
case 938:
case 1122:
case 2150:
case 1205:
case 1289:
case 1747:
case 1379:
case 3947:
case 3965:
case 816:
case 2024:
case 807:
case 604:
case 709:
case 563:
case 94:
case 2992:
case 314:
case 3054:
case 771:
case 2688:
case 2304:
case 1641:
case 2077:
case 2629:
case 4030:
case 2386:
case 4009:
case 2145:
case 4085:
case 3120:
case 3698:
case 456:
case 3743:
case 2276:
case 1943:
case 482:
case 1417:
case 3250:
case 649:
case 1579:
case 110:
case 3647:
case 958:
case 1703:
case 3903:
case 1635:
case 1263:
case 266:
case 3752:
case 2920:
case 1952:
case 606:
case 4:
case 1207:
case 3818:
case 2182:
case 1767:
case 2288:
case 1241:
case 7:
case 1937:
case 3737:
case 1084:
case 3633:
case 3046:
case 95:
case 1905:
case 3650:
case 3511:
case 1989:
case 3931:
case 3313:
case 2873:
case 446:
case 574:
case 226:
case 2758:
case 264:
case 1637:
case 1854:
case 560:
case 3188:
case 2578:
case 639:
case 4039:
case 3645:
case 2292:
case 1570:
case 2165:
case 113:
case 2486:
case 454:
case 3259:
case 2075:
case 1963:
case 3631:
case 1628:
case 4087:
case 967:
case 1605:
case 3496:
case 1750:
case 3950:
case 754:
case 2404:
case 1661:
case 93:
case 1733:
case 316:
case 2092:
case 1491:
case 1338:
case 3321:
case 2562:
case 41:
case 1618:
case 1194:
case 3082:
case 3368:
case 71:
case 3523:
case 1636:
case 2610:
case 1425:
case 3863:
case 867:
case 1327:
case 3395:
case 2353:
case 239:
case 3003:
case 2330:
case 2309:
case 1408:
case 2275:
case 3323:
case 1284:
case 3098:
case 2677:
case 1918:
case 3568:
case 469:
case 1867:
case 34:
case 1493:
case 3654:
case 3837:
case 1538:
case 670:
case 2362:
case 2442:
case 3966:
case 1766:
case 217:
case 1035:
case 206:
case 2553:
case 85:
case 3861:
case 2219:
case 259:
case 1831:
case 2351:
case 3065:
case 358:
case 897:
case 2166:
case 2409:
case 2430:
case 2485:
case 2076:
case 1308:
case 429:
case 2387:
case 1606:
case 1882:
case 348:
case 1325:
case 666:
case 1173:
case 4034:
case 472:
case 2975:
case 2619:
case 3348:
case 1438:
case 2542:
case 397:
case 858:
case 177:
case 1391:
case 2020:
case 3266:
case 3045:
case 1525:
case 696:
case 586:
case 3706:
case 1112:
case 3841:
case 500:
case 673:
case 3807:
case 204:
case 1508:
case 1236:
case 418:
case 3946:
case 367:
case 2210:
case 3835:
case 624:
case 3880:
case 1171:
case 1089:
case 1005:
case 2462:
case 916:
case 3031:
case 1393:
case 2919:
case 907:
case 3548:
case 552:
case 3423:
case 1474:
case 1865:
case 283:
case 2675:
case 803:
case 3583:
case 1300:
case 3022:
case 923:
case 3381:
case 3449:
case 255:
case 3369:
case 3775:
case 2063:
case 4026:
case 3502:
case 3136:
case 765:
case 2325:
case 3460:
case 3694:
case 2882:
case 2606:
case 3212:
case 2427:
case 149:
case 55:
case 610:
case 1277:
case 3892:
case 2308:
case 1409:
case 1166:
case 1485:
case 1675:
case 3099:
case 2865:
case 2474:
case 3581:
case 1890:
case 3719:
case 3569:
case 3432:
case 2028:
case 1342:
case 1539:
case 2089:
case 386:
case 1224:
case 960:
case 3457:
case 1210:
case 2508:
case 2236:
case 2984:
case 1587:
case 53:
case 2218:
case 2112:
case 3829:
case 2525:
case 2898:
case 795:
case 1020:
case 77:
case 567:
case 1014:
case 2408:
case 1275:
case 1146:
case 1385:
case 1309:
case 342:
case 1330:
case 139:
case 1487:
case 993:
case 2850:
case 1353:
case 1822:
case 800:
case 1771:
case 951:
case 976:
case 2425:
case 1624:
case 920:
case 2043:
case 2574:
case 3481:
case 3469:
case 3532:
case 1977:
case 778:
case 1400:
case 1712:
case 2338:
case 2754:
case 3912:
case 3876:
case 538:
case 4015:
case 2316:
case 613:
case 527:
case 3710:
case 3973:
case 3724:
case 303:
case 1910:
case 3090:
case 159:
case 54:
case 3671:
case 106:
case 2035:
case 1530:
case 1509:
case 1585:
case 3357:
case 1362:
case 1088:
case 2041:
case 2206:
case 2538:
case 2867:
case 2493:
case 425:
case 245:
case 3332:
case 832:
case 3820:
case 2374:
case 3814:
case 126:
case 2663:
case 2235:
case 3999:
case 2370:
case 1799:
case 390:
case 2731:
case 1103:
case 2905:
case 2989:
case 3622:
case 1159:
case 863:
case 374:
case 1534:
case 4093:
case 2937:
case 405:
case 2767:
case 1182:
case 2479:
case 3356:
case 1288:
case 3564:
case 411:
case 1914:
case 2952:
case 1920:
case 2733:
case 900:
case 2661:
case 2605:
case 2190:
case 1147:
case 820:
case 2628:
case 986:
case 851:
case 2963:
case 3699:
case 213:
case 1165:
case 1486:
case 3444:
case 1198:
case 4091:
case 1292:
case 1614:
case 1620:
case 2652:
case 3556:
case 2317:
case 2854:
case 488:
case 3776:
case 3958:
case 1758:
case 2701:
case 3163:
case 3073:
case 1790:
case 942:
case 2379:
case 2261:
case 3819:
case 2289:
case 1478:
case 860:
case 2228:
case 1150:
case 376:
case 2935:
case 3299:
case 1133:
case 351:
case 4074:
case 2907:
case 1692:
case 2158:
case 2252:
case 3788:
case 1504:
case 2941:
case 635:
case 2237:
case 2018:
case 841:
case 2798:
case 2643:
case 124:
case 1586:
case 166:
case 2263:
case 1434:
case 903:
case 2703:
case 3161:
case 3105:
case 890:
case 3071:
case 1131:
case 514:
case 823:
case 2315:
case 2199:
case 1276:
case 2943:
case 1386:
case 3258:
case 1629:
case 2782:
case 984:
case 2641:
case 1688:
case 4027:
case 3792:
case 2607:
case 1992:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1760421601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,];
var gg_b = "1760421601/";

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
