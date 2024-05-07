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
case 3897:
case 112:
case 996:
case 2830:
case 1513:
case 2069:
case 1772:
case 3414:
case 1427:
case 3736:
case 2884:
case 4090:
case 3663:
case 3273:
case 2129:
case 874:
case 2962:
case 3155:
case 315:
case 1546:
case 1576:
case 275:
case 1437:
case 729:
case 2851:
case 2733:
case 3445:
case 606:
case 3156:
case 69:
case 881:
case 140:
case 2378:
case 2721:
case 2297:
case 1383:
case 2854:
case 99:
case 545:
case 2439:
case 3300:
case 835:
case 2112:
case 3151:
case 1121:
case 1781:
case 2269:
case 2215:
case 1715:
case 2625:
case 3745:
case 752:
case 1467:
case 3837:
case 2472:
case 1012:
case 1657:
case 3583:
case 1088:
case 1009:
case 1205:
case 1523:
case 2718:
case 1738:
case 1147:
case 1299:
case 2461:
case 2469:
case 728:
case 2547:
case 2109:
case 3095:
case 3105:
case 2708:
case 4086:
case 1469:
case 898:
case 3733:
case 3168:
case 1607:
case 684:
case 160:
case 2254:
case 1221:
case 2111:
case 2599:
case 3385:
case 523:
case 640:
case 3662:
case 3356:
case 3239:
case 1569:
case 2263:
case 3784:
case 1220:
case 352:
case 1555:
case 3161:
case 1838:
case 2310:
case 3779:
case 4087:
case 1422:
case 3746:
case 2128:
case 575:
case 100:
case 2448:
case 3546:
case 178:
case 111:
case 469:
case 202:
case 269:
case 1261:
case 1380:
case 1863:
case 1161:
case 2214:
case 3245:
case 2562:
case 2498:
case 1094:
case 333:
case 1813:
case 1137:
case 1115:
case 2409:
case 1946:
case 585:
case 2507:
case 2564:
case 3386:
case 2642:
case 1975:
case 3824:
case 2536:
case 840:
case 1700:
case 1324:
case 678:
case 2057:
case 2205:
case 2292:
case 470:
case 294:
case 2839:
case 3030:
case 2915:
case 1676:
case 3217:
case 266:
case 614:
case 3321:
case 155:
case 2271:
case 3461:
case 3337:
case 1104:
case 29:
case 402:
case 2160:
case 3858:
case 3465:
case 2505:
case 1287:
case 2688:
case 233:
case 1885:
case 1183:
case 1473:
case 1389:
case 657:
case 3163:
case 2196:
case 1916:
case 964:
case 455:
case 695:
case 1933:
case 1096:
case 360:
case 102:
case 2726:
case 3520:
case 1986:
case 1391:
case 811:
case 3968:
case 3407:
case 1605:
case 3505:
case 948:
case 890:
case 3004:
case 3278:
case 1782:
case 1307:
case 4015:
case 2931:
case 2249:
case 118:
case 177:
case 145:
case 723:
case 1564:
case 2091:
case 185:
case 2404:
case 1767:
case 2087:
case 3652:
case 3157:
case 108:
case 3443:
case 2897:
case 2092:
case 390:
case 2690:
case 1642:
case 1628:
case 3408:
case 2795:
case 3890:
case 248:
case 2918:
case 837:
case 1014:
case 1013:
case 2225:
case 3104:
case 285:
case 3484:
case 2779:
case 2033:
case 2523:
case 719:
case 3642:
case 3298:
case 3862:
case 431:
case 1300:
case 2608:
case 2644:
case 982:
case 2125:
case 1997:
case 1754:
case 1122:
case 2706:
case 2886:
case 1778:
case 1415:
case 3277:
case 970:
case 2277:
case 3638:
case 1148:
case 2257:
case 3350:
case 2031:
case 686:
case 1411:
case 971:
case 2374:
case 3108:
case 67:
case 3354:
case 1499:
case 3412:
case 242:
case 2660:
case 1484:
case 3871:
case 1879:
case 671:
case 253:
case 530:
case 2731:
case 27:
case 2510:
case 1419:
case 468:
case 1660:
case 1234:
case 1351:
case 2138:
case 691:
case 2135:
case 1254:
case 3329:
case 966:
case 2035:
case 1459:
case 3325:
case 3293:
case 1423:
case 2078:
case 4093:
case 4031:
case 350:
case 3665:
case 1741:
case 2943:
case 2475:
case 2783:
case 2933:
case 2923:
case 3879:
case 2045:
case 2504:
case 611:
case 1766:
case 80:
case 1452:
case 3114:
case 1849:
case 2207:
case 3629:
case 2096:
case 1187:
case 2492:
case 1704:
case 2144:
case 3829:
case 2234:
case 2042:
case 981:
case 3588:
case 3020:
case 3919:
case 2916:
case 3836:
case 2024:
case 1134:
case 735:
case 1269:
case 2443:
case 1883:
case 1090:
case 3740:
case 2473:
case 170:
case 3597:
case 2204:
case 1869:
case 1811:
case 2554:
case 2828:
case 3722:
case 3082:
case 2814:
case 1591:
case 171:
case 2720:
case 2121:
case 3049:
case 3449:
case 783:
case 1654:
case 554:
case 2376:
case 863:
case 1566:
case 3074:
case 902:
case 89:
case 1988:
case 3828:
case 2193:
case 819:
case 137:
case 2372:
case 1153:
case 3990:
case 3429:
case 1068:
case 3391:
case 1132:
case 1891:
case 988:
case 91:
case 3200:
case 1493:
case 59:
case 3399:
case 1375:
case 762:
case 1311:
case 2794:
case 696:
case 3022:
case 778:
case 2531:
case 1334:
case 1267:
case 192:
case 1293:
case 1431:
case 1551:
case 3134:
case 1718:
case 3773:
case 3618:
case 1464:
case 1773:
case 562:
case 326:
case 602:
case 904:
case 3027:
case 81:
case 3764:
case 529:
case 430:
case 3503:
case 3050:
case 784:
case 1500:
case 1830:
case 1520:
case 2631:
case 708:
case 3909:
case 1706:
case 4003:
case 3124:
case 3651:
case 1049:
case 3274:
case 2155:
case 3188:
case 3864:
case 879:
case 1694:
case 552:
case 2674:
case 755:
case 2028:
case 1812:
case 1508:
case 288:
case 3925:
case 801:
case 3934:
case 1007:
case 1844:
case 492:
case 2986:
case 3162:
case 1055:
case 1288:
case 327:
case 1658:
case 1828:
case 2955:
case 1116:
case 3150:
case 156:
case 505:
case 1454:
case 1783:
case 3654:
case 451:
case 411:
case 3515:
case 3621:
case 3750:
case 967:
case 1243:
case 4014:
case 933:
case 344:
case 3966:
case 3079:
case 3998:
case 3696:
case 2067:
case 2247:
case 1225:
case 519:
case 3550:
case 3292:
case 1244:
case 165:
case 1048:
case 2002:
case 3066:
case 682:
case 1118:
case 2331:
case 290:
case 3322:
case 3302:
case 2320:
case 2630:
case 764:
case 2988:
case 2463:
case 11:
case 1444:
case 3426:
case 2672:
case 1350:
case 2559:
case 219:
case 1474:
case 2925:
case 665:
case 246:
case 3939:
case 3749:
case 1100:
case 2948:
case 625:
case 3485:
case 297:
case 1609:
case 2640:
case 2610:
case 749:
case 802:
case 2029:
case 3854:
case 2243:
case 3089:
case 1991:
case 3838:
case 2446:
case 1282:
case 1819:
case 3498:
case 1066:
case 3466:
case 1864:
case 660:
case 1531:
case 3702:
case 4071:
case 3896:
case 1141:
case 464:
case 3333:
case 55:
case 500:
case 3641:
case 2511:
case 926:
case 4008:
case 281:
case 204:
case 2454:
case 1442:
case 960:
case 2137:
case 3308:
case 2914:
case 3770:
case 3970:
case 1179:
case 3395:
case 64:
case 214:
case 2992:
case 724:
case 1626:
case 2245:
case 3139:
case 615:
case 1512:
case 429:
case 1414:
case 618:
case 1850:
case 489:
case 3703:
case 3369:
case 3435:
case 3008:
case 2628:
case 3177:
case 655:
case 1833:
case 1002:
case 2483:
case 3872:
case 1390:
case 1262:
case 3754:
case 2784:
case 2821:
case 972:
case 2503:
case 2190:
case 1027:
case 855:
case 2307:
case 2555:
case 85:
case 3382:
case 2383:
case 1361:
case 699:
case 2107:
case 1900:
case 2328:
case 2609:
case 1994:
case 3180:
case 915:
case 742:
case 3005:
case 1521:
case 349:
case 1580:
case 4059:
case 2321:
case 1407:
case 1446:
case 1853:
case 3661:
case 2088:
case 3752:
case 747:
case 921:
case 2362:
case 3616:
case 60:
case 785:
case 1451:
case 3700:
case 1906:
case 2083:
case 3935:
case 725:
case 4088:
case 386:
case 3487:
case 448:
case 1931:
case 4070:
case 3129:
case 1619:
case 2890:
case 3210:
case 3153:
case 1339:
case 2364:
case 1572:
case 4080:
case 2134:
case 2386:
case 1072:
case 4065:
case 3220:
case 2687:
case 3372:
case 2932:
case 818:
case 727:
case 3776:
case 1543:
case 3943:
case 2422:
case 3480:
case 2650:
case 923:
case 2060:
case 3721:
case 396:
case 1967:
case 2789:
case 2891:
case 1851:
case 3199:
case 2695:
case 3695:
case 2019:
case 3852:
case 1534:
case 1816:
case 4046:
case 1224:
case 2719:
case 1776:
case 13:
case 899:
case 1810:
case 674:
case 3208:
case 2651:
case 271:
case 1835:
case 836:
case 2716:
case 3649:
case 3491:
case 522:
case 2048:
case 1852:
case 3029:
case 1040:
case 3728:
case 4:
case 2300:
case 1775:
case 2046:
case 1371:
case 1378:
case 211:
case 287:
case 3338:
case 1675:
case 1392:
case 1686:
case 282:
case 1078:
case 2732:
case 3644:
case 2296:
case 1595:
case 1874:
case 662:
case 1958:
case 3526:
case 1952:
case 1635:
case 307:
case 1504:
case 670:
case 3456:
case 991:
case 2843:
case 1910:
case 3549:
case 1519:
case 436:
case 487:
case 3140:
case 1111:
case 887:
case 166:
case 357:
case 2356:
case 2965:
case 895:
case 415:
case 201:
case 458:
case 2878:
case 4084:
case 954:
case 2167:
case 1992:
case 1312:
case 161:
case 1044:
case 2646:
case 3362:
case 1229:
case 1955:
case 2539:
case 2778:
case 3367:
case 416:
case 798:
case 1425:
case 631:
case 104:
case 3675:
case 3566:
case 3179:
case 1438:
case 3178:
case 284:
case 1665:
case 4019:
case 3165:
case 3602:
case 1957:
case 2262:
case 1831:
case 3033:
case 3495:
case 607:
case 2491:
case 583:
case 2267:
case 1840:
case 2343:
case 553:
case 2885:
case 3402:
case 3589:
case 259:
case 182:
case 2168:
case 1746:
case 2594:
case 98:
case 2390:
case 1329:
case 3715:
case 4004:
case 3650:
case 1977:
case 1848:
case 1656:
case 1688:
case 3158:
case 3289:
case 2757:
case 2874:
case 3645:
case 2276:
case 419:
case 1785:
case 325:
case 3226:
case 412:
case 1313:
case 213:
case 894:
case 2710:
case 1899:
case 2742:
case 830:
case 2482:
case 3242:
case 1670:
case 1461:
case 1886:
case 183:
case 4045:
case 1733:
case 2363:
case 685:
case 1186:
case 1970:
case 995:
case 987:
case 179:
case 296:
case 2382:
case 1979:
case 1730:
case 3979:
case 409:
case 227:
case 1417:
case 3387:
case 78:
case 3394:
case 953:
case 376:
case 3254:
case 628:
case 261:
case 2298:
case 4074:
case 3053:
case 888:
case 716:
case 3648:
case 1384:
case 3822:
case 2412:
case 1744:
case 959:
case 2583:
case 986:
case 3364:
case 576:
case 868:
case 1290:
case 20:
case 591:
case 2912:
case 1018:
case 1106:
case 3284:
case 3012:
case 3171:
case 1143:
case 901:
case 2183:
case 1304:
case 3823:
case 3953:
case 1379:
case 14:
case 12:
case 3542:
case 1131:
case 138:
case 2872:
case 52:
case 2181:
case 882:
case 1689:
case 1352:
case 738:
case 1711:
case 1283:
case 676:
case 2014:
case 28:
case 984:
case 705:
case 4027:
case 3930:
case 139:
case 4005:
case 1327:
case 564:
case 17:
case 2080:
case 2611:
case 1868:
case 586:
case 2921:
case 2981:
case 914:
case 332:
case 3568:
case 3440:
case 2508:
case 4055:
case 661:
case 147:
case 197:
case 3063:
case 1809:
case 3037:
case 3479:
case 3026:
case 3335:
case 1318:
case 3255:
case 2318:
case 1272:
case 3586:
case 737:
case 2954:
case 621:
case 4006:
case 3578:
case 2518:
case 462:
case 3462:
case 2222:
case 368:
case 3422:
case 442:
case 471:
case 3592:
case 30:
case 2306:
case 875:
case 2009:
case 1825:
case 2809:
case 193:
case 1249:
case 2496:
case 2030:
case 2275:
case 113:
case 153:
case 3613:
case 1982:
case 2315:
case 3845:
case 2935:
case 2657:
case 1154:
case 2634:
case 1443:
case 40:
case 3584:
case 2411:
case 2063:
case 4047:
case 1173:
case 3827:
case 2864:
case 1984:
case 3019:
case 673:
case 2764:
case 3459:
case 1633:
case 1091:
case 4039:
case 2388:
case 3593:
case 1791:
case 2332:
case 1278:
case 525:
case 397:
case 2147:
case 2587:
case 3563:
case 1052:
case 2489:
case 3145:
case 66:
case 3098:
case 446:
case 2437:
case 478:
case 1769:
case 1893:
case 2812:
case 2018:
case 1385:
case 772:
case 2227:
case 1062:
case 2871:
case 313:
case 2910:
case 3531:
case 1015:
case 3967:
case 3799:
case 642:
case 3668:
case 3378:
case 3664:
case 1316:
case 3045:
case 4052:
case 2059:
case 1060:
case 4068:
case 330:
case 1093:
case 2924:
case 3166:
case 2598:
case 1168:
case 3524:
case 3704:
case 581:
case 2953:
case 2685:
case 3271:
case 947:
case 2626:
case 3762:
case 280:
case 56:
case 931:
case 2203:
case 884:
case 3450:
case 1296:
case 3397:
case 1109:
case 803:
case 159:
case 3818:
case 338:
case 956:
case 1204:
case 116:
case 703:
case 542:
case 82:
case 3204:
case 1029:
case 2311:
case 859:
case 1518:
case 920:
case 1793:
case 3924:
case 4034:
case 3866:
case 335:
case 2084:
case 3624:
case 3926:
case 1482:
case 1530:
case 1135:
case 438:
case 1797:
case 1539:
case 534:
case 3738:
case 976:
case 3630:
case 1552:
case 250:
case 1836:
case 2879:
case 452:
case 3233:
case 283:
case 507:
case 130:
case 1107:
case 3610:
case 3927:
case 832:
case 2506:
case 32:
case 3041:
case 2652:
case 2904:
case 2244:
case 2470:
case 3262:
case 3249:
case 1938:
case 2856:
case 1800:
case 3657:
case 3632:
case 279:
case 1976:
case 4020:
case 1890:
case 3190:
case 1827:
case 3620:
case 110:
case 979:
case 1043:
case 424:
case 255:
case 1465:
case 2607:
case 1039:
case 1395:
case 1456:
case 304:
case 267:
case 2773:
case 151:
case 1896:
case 225:
case 3048:
case 2808:
case 1332:
case 1347:
case 2438:
case 1748:
case 3120:
case 3032:
case 3607:
case 3835:
case 3543:
case 311:
case 2712:
case 1613:
case 2177:
case 3431:
case 3760:
case 3251:
case 2481:
case 3455:
case 872:
case 2197:
case 4001:
case 1695:
case 1061:
case 2963:
case 2766:
case 1536:
case 2210:
case 1568:
case 2335:
case 595:
case 1847:
case 3234:
case 2407:
case 3236:
case 2236:
case 922:
case 3915:
case 1246:
case 380:
case 945:
case 199:
case 2889:
case 3438:
case 823:
case 4030:
case 2174:
case 493:
case 1439:
case 1806:
case 3945:
case 4063:
case 3198:
case 2344:
case 3309:
case 2697:
case 2402:
case 521:
case 604:
case 3825:
case 2189:
case 3637:
case 834:
case 241:
case 1799:
case 4023:
case 361:
case 1460:
case 3530:
case 3:
case 1875:
case 1345:
case 1643:
case 1574:
case 3125:
case 1445:
case 2762:
case 1973:
case 2180:
case 2187:
case 1447:
case 3805:
case 2049:
case 3260:
case 2037:
case 975:
case 3011:
case 1336:
case 2739:
case 422:
case 1528:
case 2286:
case 1418:
case 3475:
case 2101:
case 912:
case 1582:
case 3921:
case 694:
case 3892:
case 3457:
case 3096:
case 1926:
case 795:
case 3093:
case 4069:
case 3622:
case 626:
case 1063:
case 83:
case 1280:
case 1099:
case 1005:
case 2627:
case 1138:
case 3205:
case 1237:
case 690:
case 2108:
case 2417:
case 2219:
case 2005:
case 799:
case 2434:
case 3994:
case 3723:
case 4073:
case 790:
case 3406:
case 1914:
case 3115:
case 2977:
case 1032:
case 2316:
case 1846:
case 1888:
case 845:
case 152:
case 3898:
case 358:
case 2788:
case 3021:
case 2099:
case 3175:
case 757:
case 2124:
case 2960:
case 420:
case 1866:
case 2433:
case 3698:
case 941:
case 239:
case 3564:
case 2791:
case 3006:
case 2619:
case 1907:
case 479:
case 1214:
case 1794:
case 2416:
case 2308:
case 748:
case 2780:
case 3633:
case 2453:
case 1010:
case 2295:
case 3725:
case 1070:
case 771:
case 2750:
case 873:
case 3149:
case 3472:
case 2006:
case 2546:
case 1281:
case 593:
case 3547:
case 533:
case 2285:
case 309:
case 3667:
case 2027:
case 1581:
case 2768:
case 3532:
case 1257:
case 3582:
case 1399:
case 850:
case 2711:
case 1255:
case 2557:
case 1731:
case 1494:
case 518:
case 2040:
case 2036:
case 3076:
case 142:
case 889:
case 1901:
case 3213:
case 4013:
case 1198:
case 3988:
case 4062:
case 4035:
case 218:
case 707:
case 1067:
case 2911:
case 1604:
case 773:
case 3042:
case 406:
case 4017:
case 379:
case 709:
case 3920:
case 2950:
case 3136:
case 2590:
case 2291:
case 3756:
case 1073:
case 2927:
case 2715:
case 3977:
case 3118:
case 989:
case 3767:
case 2406:
case 3772:
case 3798:
case 3800:
case 3670:
case 706:
case 203:
case 2226:
case 2223:
case 3572:
case 1602:
case 36:
case 3957:
case 2279:
case 1238:
case 3617:
case 3688:
case 1200:
case 1394:
case 3147:
case 1082:
case 2166:
case 2397:
case 1058:
case 2011:
case 2569:
case 1918:
case 3085:
case 136:
case 1515:
case 256:
case 1485:
case 2543:
case 1150:
case 3949:
case 3826:
case 2868:
case 439:
case 951:
case 2479:
case 441:
case 3160:
case 2149:
case 3519:
case 3075:
case 3965:
case 93:
case 496:
case 3474:
case 3913:
case 2994:
case 3768:
case 782:
case 413:
case 1760:
case 2171:
case 1435:
case 2907:
case 2670:
case 2771:
case 2122:
case 427:
case 1259:
case 3141:
case 2597:
case 180:
case 2490:
case 3287:
case 274:
case 1305:
case 232:
case 2903:
case 4066:
case 2880:
case 3473:
case 3669:
case 943:
case 1295:
case 3023:
case 4024:
case 2744:
case 2707:
case 3574:
case 891:
case 3499:
case 2985:
case 2278:
case 1004:
case 3201:
case 753:
case 3741:
case 2817:
case 1424:
case 467:
case 3544:
case 1894:
case 3697:
case 2373:
case 3113:
case 3959:
case 4000:
case 4011:
case 866:
case 2862:
case 3015:
case 2294:
case 2761:
case 189:
case 314:
case 969:
case 1180:
case 3415:
case 356:
case 1338:
case 681:
case 1993:
case 175:
case 3882:
case 824:
case 1077:
case 3355:
case 1031:
case 1547:
case 1535:
case 1495:
case 1175:
case 3863:
case 2633:
case 692:
case 298:
case 930:
case 2061:
case 2106:
case 3436:
case 79:
case 2201:
case 2800:
case 2703:
case 466:
case 2675:
case 1483:
case 817:
case 768:
case 938:
case 3137:
case 679:
case 841:
case 3627:
case 2468:
case 1789:
case 39:
case 2971:
case 1921:
case 4082:
case 377:
case 1125:
case 2142:
case 2571:
case 3181:
case 619:
case 526:
case 25:
case 206:
case 1743:
case 366:
case 666:
case 731:
case 2746:
case 2302:
case 2055:
case 1872:
case 3501:
case 1509:
case 2001:
case 536:
case 3874:
case 1880:
case 3084:
case 3730:
case 1583:
case 3142:
case 1510:
case 1130:
case 563:
case 2680:
case 2351:
case 3558:
case 1019:
case 869:
case 3128:
case 3126:
case 3258:
case 2221:
case 2345:
case 2679:
case 2017:
case 693:
case 292:
case 2700:
case 316:
case 3341:
case 1416:
case 3087:
case 3795:
case 2677:
case 3842:
case 1974:
case 1189:
case 3334:
case 3714:
case 3223:
case 937:
case 746:
case 1020:
case 3512:
case 1030:
case 1458:
case 2350:
case 1046:
case 638:
case 2288:
case 1047:
case 2972:
case 668:
case 839:
case 572:
case 105:
case 3301:
case 70:
case 1124:
case 143:
case 3569:
case 2639:
case 1348:
case 1328:
case 1247:
case 1661:
case 2826:
case 617:
case 486:
case 2612:
case 1285:
case 2573:
case 2666:
case 2466:
case 2044:
case 1453:
case 2566:
case 2289:
case 3646:
case 1692:
case 154:
case 3342:
case 2013:
case 3024:
case 1076:
case 1226:
case 2273:
case 1998:
case 2622:
case 2648:
case 1397:
case 741:
case 1366:
case 423:
case 2064:
case 1990:
case 3944:
case 1028:
case 4044:
case 1662:
case 1648:
case 3527:
case 2053:
case 3705:
case 2464:
case 1629:
case 321:
case 1798:
case 1919:
case 683:
case 2658:
case 3833:
case 3056:
case 2156:
case 3816:
case 3209:
case 3813:
case 1235:
case 1962:
case 2529:
case 1871:
case 2902:
case 3775:
case 3509:
case 336:
case 1687:
case 2870:
case 2041:
case 121:
case 538:
case 3717:
case 1023:
case 2435:
case 1315:
case 726:
case 3102:
case 789:
case 3971:
case 4038:
case 1726:
case 1084:
case 3937:
case 3671:
case 2655:
case 4049:
case 3789:
case 3253:
case 1917:
case 4075:
case 917:
case 1620:
case 3846:
case 994:
case 1016:
case 3985:
case 2235:
case 3240:
case 955:
case 3092:
case 328:
case 3780:
case 3031:
case 2478:
case 1969:
case 46:
case 3685:
case 3690:
case 4076:
case 3035:
case 400:
case 417:
case 651:
case 2418:
case 528:
case 3246:
case 527:
case 886:
case 63:
case 1996:
case 3605:
case 3446:
case 1556:
case 1033:
case 1335:
case 2086:
case 4081:
case 3598:
case 1856:
case 346:
case 1989:
case 1092:
case 1961:
case 805:
case 3917:
case 653:
case 243:
case 3381:
case 1714:
case 2618:
case 374:
case 3596:
case 2551:
case 2323:
case 3713:
case 1559:
case 3173:
case 191:
case 401:
case 540:
case 1149:
case 796:
case 1804:
case 1021:
case 1406:
case 2259:
case 822:
case 1276:
case 3936:
case 3974:
case 1780:
case 3078:
case 2513:
case 1358:
case 1059:
case 721:
case 3539:
case 2736:
case 2724:
case 3373:
case 571:
case 2540:
case 918:
case 476:
case 1400:
case 3439:
case 1292:
case 1577:
case 3238:
case 3486:
case 827:
case 1202:
case 1540:
case 3541:
case 3673:
case 1616:
case 2769:
case 216:
case 867:
case 1578:
case 3873:
case 608:
case 1630:
case 1386:
case 1949:
case 223:
case 2738:
case 2153:
case 1691:
case 1779:
case 230:
case 3186:
case 2852:
case 963:
case 1736:
case 1388:
case 3995:
case 1638:
case 2058:
case 4021:
case 2103:
case 308:
case 263:
case 3307:
case 2939:
case 2094:
case 2556:
case 1653:
case 1621:
case 301:
case 3682:
case 3765:
case 2191:
case 558:
case 221:
case 2268:
case 3232:
case 1720:
case 407:
case 484:
case 3581:
case 3146:
case 2440:
case 876:
case 1611:
case 3346:
case 2694:
case 273:
case 359:
case 2934:
case 3392:
case 2071:
case 212:
case 1144:
case 1428:
case 1765:
case 3753:
case 3769:
case 1932:
case 2102:
case 559:
case 2157:
case 125:
case 2130:
case 697:
case 2159:
case 1120:
case 1489:
case 1355:
case 3363:
case 2976:
case 195:
case 3194:
case 2840:
case 2975:
case 2570:
case 909:
case 2127:
case 3411:
case 2623:
case 550:
case 1963:
case 3127:
case 3276:
case 916:
case 1408:
case 1475:
case 4085:
case 1790:
case 2574:
case 927:
case 3557:
case 3507:
case 88:
case 1867:
case 2860:
case 3707:
case 2560:
case 2797:
case 810:
case 1140:
case 2774:
case 3264:
case 3083:
case 1911:
case 2741:
case 94:
case 3221:
case 1788:
case 1645:
case 1742:
case 2563:
case 3371:
case 2231:
case 1663:
case 1398:
case 2405:
case 2663:
case 2857:
case 101:
case 2796:
case 43:
case 717:
case 2459:
case 2175:
case 3889:
case 1071:
case 351:
case 2450:
case 2901:
case 3248:
case 2735:
case 2798:
case 1136:
case 3865:
case 1659:
case 3405:
case 1215:
case 2705:
case 3774:
case 0:
case 3111:
case 38:
case 3002:
case 2165:
case 2760:
case 76:
case 1042:
case 1712:
case 3463:
case 1410:
case 3046:
case 532:
case 732:
case 2882:
case 3911:
case 1479:
case 2877:
case 1762:
case 3992:
case 2737:
case 2487:
case 181:
case 1468:
case 2550:
case 1517:
case 1532:
case 491:
case 2368:
case 1923:
case 3790:
case 2143:
case 3687:
case 3069:
case 2284:
case 1795:
case 1223:
case 2022:
case 630:
case 434:
case 786:
case 369:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1715076001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,];
var gg_b = "1715076001/";

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
