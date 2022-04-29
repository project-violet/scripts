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
case 1935:
case 3531:
case 3292:
case 3395:
case 1989:
case 4004:
case 4089:
case 1064:
case 79:
case 3114:
case 3857:
case 1302:
case 2141:
case 2536:
case 696:
case 2850:
case 3314:
case 2938:
case 3825:
case 733:
case 3170:
case 3143:
case 3612:
case 1233:
case 1043:
case 1815:
case 2414:
case 2820:
case 2863:
case 157:
case 693:
case 2440:
case 29:
case 134:
case 3949:
case 1616:
case 2782:
case 3546:
case 2241:
case 2762:
case 1472:
case 993:
case 2510:
case 2540:
case 2827:
case 564:
case 1784:
case 1363:
case 3909:
case 2339:
case 2867:
case 974:
case 1461:
case 938:
case 2048:
case 133:
case 765:
case 2067:
case 2900:
case 2531:
case 3744:
case 360:
case 59:
case 3272:
case 658:
case 3009:
case 82:
case 3195:
case 875:
case 988:
case 3299:
case 2846:
case 2502:
case 3290:
case 3320:
case 1441:
case 58:
case 913:
case 1166:
case 3212:
case 3068:
case 3729:
case 1054:
case 1250:
case 870:
case 3278:
case 3466:
case 2831:
case 1944:
case 2271:
case 2656:
case 95:
case 2087:
case 3813:
case 3508:
case 1065:
case 2970:
case 2567:
case 290:
case 1931:
case 607:
case 3168:
case 3509:
case 2135:
case 1828:
case 2435:
case 1882:
case 2222:
case 3681:
case 2429:
case 3844:
case 1799:
case 1521:
case 2167:
case 884:
case 3786:
case 1273:
case 1372:
case 3273:
case 3053:
case 279:
case 691:
case 457:
case 1201:
case 425:
case 1177:
case 677:
case 3795:
case 1749:
case 2330:
case 1326:
case 917:
case 3384:
case 2138:
case 849:
case 1533:
case 3522:
case 3372:
case 385:
case 1440:
case 743:
case 3880:
case 170:
case 609:
case 1319:
case 2404:
case 3884:
case 2203:
case 3602:
case 1402:
case 3077:
case 1271:
case 3733:
case 3113:
case 4042:
case 377:
case 832:
case 3688:
case 2473:
case 2171:
case 3280:
case 945:
case 1551:
case 3558:
case 2908:
case 908:
case 1919:
case 1667:
case 3826:
case 513:
case 1298:
case 953:
case 2572:
case 589:
case 2077:
case 3097:
case 1431:
case 1280:
case 1782:
case 3035:
case 1001:
case 3357:
case 2216:
case 1066:
case 1647:
case 1596:
case 3829:
case 1260:
case 2521:
case 51:
case 3808:
case 2691:
case 1538:
case 2678:
case 960:
case 714:
case 2515:
case 955:
case 2246:
case 1525:
case 2927:
case 2041:
case 1104:
case 3613:
case 1645:
case 3824:
case 147:
case 3662:
case 415:
case 2388:
case 1172:
case 523:
case 2574:
case 1774:
case 1391:
case 2493:
case 2344:
case 3855:
case 1712:
case 566:
case 1275:
case 2182:
case 1990:
case 1771:
case 3051:
case 1610:
case 3179:
case 1068:
case 1572:
case 2592:
case 2002:
case 1660:
case 2721:
case 559:
case 3899:
case 1285:
case 1962:
case 411:
case 3231:
case 2795:
case 4085:
case 2528:
case 2005:
case 1091:
case 3364:
case 1477:
case 896:
case 1764:
case 2959:
case 3827:
case 711:
case 1529:
case 2904:
case 3489:
case 2967:
case 4083:
case 2479:
case 3263:
case 1998:
case 1133:
case 912:
case 892:
case 2055:
case 1541:
case 1494:
case 2606:
case 2985:
case 2107:
case 2891:
case 352:
case 3723:
case 77:
case 3746:
case 3663:
case 2059:
case 868:
case 1207:
case 618:
case 1734:
case 2920:
case 3025:
case 3657:
case 1009:
case 3870:
case 166:
case 2275:
case 122:
case 159:
case 1323:
case 529:
case 2902:
case 1190:
case 977:
case 801:
case 424:
case 182:
case 2550:
case 2126:
case 127:
case 3126:
case 2134:
case 835:
case 3345:
case 3010:
case 3749:
case 3387:
case 330:
case 3895:
case 2359:
case 3092:
case 2704:
case 788:
case 2352:
case 3840:
case 3620:
case 1711:
case 1436:
case 3284:
case 1718:
case 3244:
case 1467:
case 3067:
case 3589:
case 449:
case 3050:
case 3682:
case 1680:
case 2027:
case 2742:
case 1146:
case 1341:
case 3232:
case 2007:
case 2038:
case 2329:
case 3382:
case 270:
case 3158:
case 2779:
case 1872:
case 1106:
case 1797:
case 132:
case 2308:
case 3326:
case 3333:
case 606:
case 2368:
case 2751:
case 1995:
case 2633:
case 359:
case 1501:
case 3929:
case 4092:
case 598:
case 105:
case 3322:
case 201:
case 1889:
case 1688:
case 1838:
case 1587:
case 90:
case 1203:
case 4016:
case 1109:
case 1953:
case 3737:
case 2039:
case 2637:
case 2075:
case 3595:
case 989:
case 3386:
case 1644:
case 1593:
case 2144:
case 2155:
case 2091:
case 1198:
case 5:
case 2052:
case 3349:
case 3264:
case 3453:
case 651:
case 1362:
case 3502:
case 3806:
case 2672:
case 3042:
case 434:
case 3625:
case 3313:
case 2997:
case 1482:
case 1176:
case 978:
case 1779:
case 2926:
case 3080:
case 3030:
case 3627:
case 3614:
case 212:
case 60:
case 2560:
case 2746:
case 3902:
case 846:
case 3507:
case 1295:
case 135:
case 140:
case 499:
case 999:
case 3570:
case 3066:
case 986:
case 2799:
case 3148:
case 3734:
case 43:
case 1842:
case 794:
case 1016:
case 934:
case 26:
case 2459:
case 1255:
case 2981:
case 1445:
case 1942:
case 817:
case 2987:
case 387:
case 1954:
case 1527:
case 1303:
case 1912:
case 3186:
case 2534:
case 4033:
case 3365:
case 2462:
case 301:
case 1149:
case 3288:
case 1518:
case 1213:
case 1570:
case 4032:
case 2040:
case 2064:
case 3426:
case 1634:
case 3277:
case 1730:
case 2601:
case 1383:
case 3027:
case 660:
case 3171:
case 1798:
case 3083:
case 3633:
case 3255:
case 3727:
case 1868:
case 3289:
case 769:
case 3935:
case 331:
case 1794:
case 659:
case 3339:
case 3271:
case 3135:
case 475:
case 3197:
case 759:
case 1321:
case 2537:
case 3947:
case 2754:
case 432:
case 2545:
case 3510:
case 719:
case 565:
case 3239:
case 218:
case 910:
case 3049:
case 1401:
case 1707:
case 300:
case 1178:
case 3858:
case 2864:
case 1175:
case 1410:
case 2933:
case 820:
case 3442:
case 3021:
case 1663:
case 2835:
case 287:
case 1970:
case 6:
case 2214:
case 3490:
case 1591:
case 2969:
case 1191:
case 1183:
case 1446:
case 1237:
case 1709:
case 3137:
case 2031:
case 3462:
case 990:
case 131:
case 519:
case 1425:
case 2427:
case 545:
case 3984:
case 3119:
case 1320:
case 3636:
case 2417:
case 458:
case 2430:
case 2218:
case 1655:
case 344:
case 3802:
case 773:
case 1802:
case 3409:
case 1307:
case 1826:
case 2143:
case 1365:
case 316:
case 3861:
case 1850:
case 2506:
case 3914:
case 581:
case 2764:
case 1558:
case 1605:
case 2202:
case 1092:
case 3952:
case 3317:
case 1746:
case 4094:
case 2806:
case 3440:
case 3150:
case 2960:
case 1447:
case 2139:
case 2833:
case 1458:
case 20:
case 161:
case 1957:
case 3930:
case 991:
case 1483:
case 3157:
case 1638:
case 3209:
case 3491:
case 3380:
case 3057:
case 3805:
case 3743:
case 1624:
case 1340:
case 2905:
case 2315:
case 936:
case 857:
case 2403:
case 1435:
case 1022:
case 1886:
case 3173:
case 2852:
case 1952:
case 2466:
case 1475:
case 624:
case 1895:
case 503:
case 1550:
case 2205:
case 2873:
case 496:
case 3757:
case 521:
case 3697:
case 280:
case 906:
case 3371:
case 965:
case 1664:
case 863:
case 1045:
case 2348:
case 2100:
case 3090:
case 167:
case 446:
case 3198:
case 966:
case 1796:
case 2816:
case 2674:
case 1795:
case 389:
case 2335:
case 3141:
case 3078:
case 1414:
case 2253:
case 3200:
case 3610:
case 2963:
case 3555:
case 2591:
case 1684:
case 1443:
case 3266:
case 754:
case 2178:
case 572:
case 239:
case 1682:
case 1007:
case 1082:
case 3431:
case 604:
case 2124:
case 3668:
case 2728:
case 3606:
case 2226:
case 3894:
case 1566:
case 1036:
case 3075:
case 2749:
case 3981:
case 922:
case 855:
case 311:
case 1405:
case 2974:
case 790:
case 1887:
case 1419:
case 548:
case 1187:
case 1705:
case 492:
case 25:
case 3039:
case 2731:
case 1386:
case 2428:
case 1049:
case 2390:
case 1555:
case 1598:
case 2725:
case 2468:
case 3901:
case 2:
case 1757:
case 2045:
case 3917:
case 396:
case 4065:
case 680:
case 461:
case 2547:
case 2309:
case 3920:
case 2576:
case 202:
case 2129:
case 2553:
case 1873:
case 3860:
case 2230:
case 873:
case 2476:
case 655:
case 916:
case 2998:
case 1378:
case 867:
case 2986:
case 3515:
case 3142:
case 3862:
case 3719:
case 1967:
case 91:
case 3265:
case 757:
case 4024:
case 2603:
case 4046:
case 2875:
case 1219:
case 2183:
case 3451:
case 2580:
case 3941:
case 787:
case 3748:
case 2158:
case 1631:
case 3120:
case 2192:
case 3944:
case 165:
case 2660:
case 1116:
case 3340:
case 4038:
case 1908:
case 3014:
case 2539:
case 3572:
case 1000:
case 3637:
case 1351:
case 2250:
case 582:
case 1565:
case 2248:
case 3972:
case 4029:
case 1437:
case 119:
case 3833:
case 2980:
case 621:
case 1392:
case 1291:
case 2556:
case 2886:
case 403:
case 1781:
case 2791:
case 1093:
case 2966:
case 925:
case 1926:
case 1905:
case 3185:
case 3096:
case 3525:
case 2019:
case 3885:
case 2208:
case 347:
case 2932:
case 2907:
case 160:
case 2097:
case 3169:
case 498:
case 1582:
case 1209:
case 3966:
case 178:
case 2377:
case 3414:
case 272:
case 2803:
case 2274:
case 1825:
case 2149:
case 3923:
case 2543:
case 3957:
case 947:
case 727:
case 3608:
case 57:
case 3228:
case 690:
case 2254:
case 2661:
case 3881:
case 3108:
case 1287:
case 2972:
case 739:
case 2317:
case 400:
case 3132:
case 2870:
case 1258:
case 2489:
case 1928:
case 209:
case 2590:
case 2161:
case 3282:
case 902:
case 2289:
case 3422:
case 1906:
case 123:
case 1693:
case 3853:
case 1820:
case 2140:
case 1985:
case 1454:
case 1067:
case 1723:
case 2279:
case 3193:
case 1569:
case 1852:
case 3912:
case 561:
case 3721:
case 3091:
case 1554:
case 1530:
case 2518:
case 1661:
case 2654:
case 853:
case 760:
case 2426:
case 2334:
case 1048:
case 362:
case 1622:
case 431:
case 3274:
case 2024:
case 3951:
case 299:
case 3676:
case 1678:
case 3401:
case 844:
case 592:
case 1694:
case 192:
case 10:
case 3556:
case 3436:
case 3216:
case 308:
case 2650:
case 524:
case 3820:
case 3379:
case 1336:
case 2301:
case 2992:
case 3988:
case 1618:
case 1561:
case 641:
case 1801:
case 285:
case 2249:
case 1773:
case 3998:
case 3337:
case 3348:
case 619:
case 1983:
case 348:
case 2063:
case 2610:
case 2482:
case 3926:
case 2917:
case 2438:
case 2376:
case 1583:
case 4060:
case 1486:
case 1510:
case 162:
case 674:
case 3565:
case 1252:
case 3563:
case 2166:
case 3331:
case 997:
case 616:
case 2871:
case 1348:
case 1640:
case 527:
case 2014:
case 1937:
case 1992:
case 101:
case 2733:
case 395:
case 3553:
case 1670:
case 2347:
case 0:
case 342:
case 3897:
case 2460:
case 1257:
case 220:
case 3691:
case 2032:
case 2575:
case 1988:
case 1279:
case 2181:
case 2217:
case 200:
case 746:
case 336:
case 1470:
case 800:
case 1182:
case 476:
case 2620:
case 3167:
case 3631:
case 1111:
case 2227:
case 2659:
case 3976:
case 3505:
case 3538:
case 375:
case 1827:
case 1981:
case 859:
case 956:
case 1951:
case 3958:
case 2010:
case 3771:
case 568:
case 1776:
case 799:
case 2752:
case 2922:
case 987:
case 920:
case 3910:
case 187:
case 1659:
case 3022:
case 423:
case 2299:
case 869:
case 2667:
case 2776:
case 242:
case 1544:
case 1726:
case 2111:
case 1692:
case 2582:
case 3214:
case 1522:
case 3521:
case 494:
case 2991:
case 620:
case 2653:
case 2207:
case 2627:
case 2006:
case 3029:
case 783:
case 1662:
case 346:
case 1979:
case 1543:
case 774:
case 2387:
case 3342:
case 3407:
case 1763:
case 3472:
case 3798:
case 1910:
case 1984:
case 3769:
case 3968:
case 1422:
case 1524:
case 3577:
case 1869:
case 2612:
case 236:
case 2600:
case 2866:
case 707:
case 2658:
case 741:
case 681:
case 3192:
case 2630:
case 3815:
case 3133:
case 3418:
case 2395:
case 317:
case 1080:
case 2357:
case 406:
case 3332:
case 148:
case 189:
case 4052:
case 3991:
case 2356:
case 2422:
case 1534:
case 3361:
case 1877:
case 1547:
case 3811:
case 883:
case 2373:
case 932:
case 1577:
case 961:
case 199:
case 1429:
case 689:
case 926:
case 491:
case 1580:
case 3887:
case 98:
case 1567:
case 3448:
case 1308:
case 845:
case 1140:
case 3980:
case 1056:
case 3439:
case 2512:
case 1945:
case 1511:
case 3878:
case 2681:
case 2611:
case 304:
case 3074:
case 601:
case 2792:
case 2152:
case 672:
case 3287:
case 2999:
case 3219:
case 811:
case 1560:
case 1247:
case 3043:
case 1357:
case 900:
case 1722:
case 3818:
case 391:
case 3468:
case 3562:
case 3965:
case 2525:
case 2154:
case 3985:
case 1025:
case 3932:
case 2394:
case 2720:
case 3996:
case 1387:
case 2843:
case 770:
case 2937:
case 2965:
case 3482:
case 3647:
case 1360:
case 1071:
case 2767:
case 1079:
case 197:
case 2814:
case 1665:
case 803:
case 3596:
case 1086:
case 3226:
case 2579:
case 2327:
case 4079:
case 3766:
case 370:
case 600:
case 3936:
case 809:
case 487:
case 1540:
case 4095:
case 919:
case 1315:
case 2457:
case 1760:
case 555:
case 2444:
case 1940:
case 557:
case 1015:
case 2805:
case 3660:
case 924:
case 608:
case 2266:
case 3146:
case 2669:
case 2994:
case 824:
case 3711:
case 1902:
case 3222:
case 1288:
case 84:
case 3673:
case 367:
case 2119:
case 1296:
case 1497:
case 481:
case 383:
case 2447:
case 3665:
case 4000:
case 695:
case 1617:
case 2235:
case 205:
case 3597:
case 546:
case 2436:
case 2389:
case 480:
case 2677:
case 72:
case 177:
case 3261:
case 297:
case 4078:
case 4036:
case 1006:
case 2269:
case 1971:
case 3485:
case 3235:
case 4023:
case 3537:
case 1221:
case 1904:
case 3799:
case 2663:
case 526:
case 1039:
case 2353:
case 3275:
case 2257:
case 3702:
case 1073:
case 284:
case 414:
case 841:
case 3939:
case 2180:
case 2617:
case 282:
case 1098:
case 2412:
case 3759:
case 647:
case 2765:
case 470:
case 2737:
case 2020:
case 2485:
case 2735:
case 3626:
case 2527:
case 2015:
case 3629:
case 755:
case 1864:
case 1708:
case 3732:
case 825:
case 599:
case 1986:
case 2017:
case 2729:
case 626:
case 785:
case 2640:
case 3098:
case 1744:
case 3211:
case 3079:
case 2618:
case 3408:
case 2193:
case 1854:
case 941:
case 2844:
case 3913:
case 2497:
case 4022:
case 1157:
case 1330:
case 734:
case 2215:
case 862:
case 3776:
case 442:
case 1297:
case 39:
case 2622:
case 102:
case 53:
case 1029:
case 694:
case 2114:
case 211:
case 3925:
case 1559:
case 2826:
case 234:
case 2150:
case 3728:
case 3845:
case 1686:
case 1770:
case 3104:
case 611:
case 1823:
case 1018:
case 69:
case 777:
case 2047:
case 2559:
case 2231:
case 2604:
case 2673:
case 1936:
case 350:
case 2094:
case 613:
case 397:
case 747:
case 1564:
case 558:
case 3710:
case 2808:
case 1604:
case 3848:
case 2416:
case 968:
case 2101:
case 702:
case 1186:
case 87:
case 3123:
case 307:
case 1367:
case 876:
case 66:
case 4091:
case 3931:
case 2200:
case 3865:
case 1041:
case 1700:
case 3099:
case 1626:
case 3687:
case 114:
case 1328:
case 1595:
case 1698:
case 1404:
case 2954:
case 2931:
case 1611:
case 614:
case 2723:
case 2634:
case 587:
case 1625:
case 1317:
case 3253:
case 3701:
case 1963:
case 2278:
case 1829:
case 56:
case 3874:
case 2448:
case 1409:
case 2961:
case 2930:
case 1545:
case 106:
case 726:
case 34:
case 842:
case 3659:
case 194:
case 3487:
case 3437:
case 3454:
case 836:
case 1179:
case 4043:
case 94:
case 3585:
case 3778:
case 3360:
case 882:
case 706:
case 1040:
case 2676:
case 2366:
case 3403:
case 314:
case 2113:
case 3062:
case 528:
case 2546:
case 3628:
case 3329:
case 1478:
case 1978:
case 3234:
case 402:
case 3469:
case 1132:
case 4073:
case 1487:
case 1724:
case 942:
case 55:
case 2092:
case 1128:
case 1481:
case 337:
case 3670:
case 3524:
case 1072:
case 3346:
case 3350:
case 562:
case 1215:
case 17:
case 3081:
case 1368:
case 3707:
case 1816:
case 643:
case 3187:
case 1020:
case 2709:
case 4014:
case 450:
case 1421:
case 3237:
case 1633:
case 3486:
case 3907:
case 856:
case 962:
case 4069:
case 1982:
case 1805:
case 2293:
case 3204:
case 3286:
case 3155:
case 3977:
case 948:
case 274:
case 1154:
case 533:
case 3677:
case 2291:
case 2662:
case 2481:
case 1118:
case 1812:
case 3341:
case 345:
case 2895:
case 2096:
case 1753:
case 3210:
case 410:
case 2804:
case 617:
case 3830:
case 1185:
case 3882:
case 1821:
case 3983:
case 1327:
case 886:
case 1907:
case 3059:
case 2349:
case 3166:
case 1289:
case 3413:
case 3139:
case 1650:
case 1316:
case 2030:
case 3161:
case 3758:
case 2411:
case 255:
case 1702:
case 2548:
case 1024:
case 1017:
case 3281:
case 2855:
case 745:
case 3224:
case 3194:
case 2179:
case 3410:
case 3877:
case 2761:
case 382:
case 4030:
case 2533:
case 2084:
case 168:
case 1226:
case 1778:
case 1740:
case 155:
case 3908:
case 1843:
case 2160:
case 3693:
case 453:
case 575:
case 2763:
case 1803:
case 3147:
case 1671:
case 3717:
case 3478:
case 1658:
case 2312:
case 2944:
case 3480:
case 3358:
case 1729:
case 2036:
case 717:
case 2316:
case 269:
case 1894:
case 2858:
case 455:
case 819:
case 2853:
case 2783:
case 1473:
case 176:
case 1464:
case 1077:
case 1848:
case 4057:
case 3503:
case 1394:
case 417:
case 3165:
case 1225:
case 1643:
case 251:
case 2741:
case 2450:
case 2557:
case 1588:
case 394:
case 2824:
case 3745:
case 3488:
case 3470:
case 429:
case 378:
case 369:
case 2722:
case 1836:
case 2818:
case 3725:
case 3576:
case 3227:
case 3328:
case 692:
case 1628:
case 143:
case 2665:
case 540:
case 3903:
case 1324:
case 3304:
case 2305:
case 3152:
case 2759:
case 1786:
case 1752:
case 3989:
case 118:
case 1689:
case 1174:
case 3532:
case 3946:
case 3026:
case 154:
case 3846:
case 70:
case 3652:
case 909:
case 1151:
case 3392:
case 813:
case 2554:
case 3851:
case 1603:
case 124:
case 761:
case 75:
case 1200:
case 2796:
case 2367:
case 1976:
case 865:
case 2298:
case 610:
case 3708:
case 2343:
case 273:
case 1691:
case 2163:
case 3071:
case 2089:
case 812:
case 710:
case 3055:
case 2624:
case 3151:
case 3130:
case 3933:
case 456:
case 3423:
case 2252:
case 2142:
case 2822:
case 2584:
case 1112:
case 830:
case 3526:
case 1637:
case 3497:
case 3254:
case 1359:
case 2773:
case 67:
case 1993:
case 2682:
case 2268:
case 3477:
case 2901:
case 340:
case 1224:
case 1159:
case 758:
case 584:
case 3644:
case 3741:
case 232:
case 3578:
case 1462:
case 698:
case 1283:
case 3031:
case 1586:
case 259:
case 483:
case 3005:
case 3956:
case 64:
case 3377:
case 3779:
case 3604:
case 740:
case 1471:
case 2451:
case 1941:
case 1747:
case 2082:
case 648:
case 2859:
case 226:
case 3720:
case 3523:
case 302:
case 3385:
case 3567:
case 2095:
case 2885:
case 2790:
case 718:
case 2122:
case 3817:
case 3100:
case 1329:
case 3127:
case 2837:
case 2623:
case 21:
case 2474:
case 3028:
case 1293:
case 1033:
case 4049:
case 897:
case 2072:
case 512:
case 1206:
case 2127:
case 3444:
case 2983:
case 2868:
case 3128:
case 3400:
case 1619:
case 2834:
case 141:
case 1875:
case 976:
case 1173:
case 2800:
case 115:
case 3841:
case 1314:
case 2616:
case 1042:
case 944:
case 258:
case 2256:
case 4017:
case 2391:
case 996:
case 3037:
case 1408:
case 2958:
case 1674:
case 16:
case 1556:
case 3516:
case 86:
case 3177:
case 1972:
case 1110:
case 1156:
case 2715:
case 1938:
case 1755:
case 1169:
case 1135:
case 1968:
case 368:
case 4062:
case 2380:
case 721:
case 310:
case 1991:
case 1274:
case 1474:
case 500:
case 1397:
case 3731:
case 1856:
case 3319:
case 3243:
case 381:
case 1434:
case 2516:
case 3076:
case 967:
case 3735:
case 343:
case 715:
case 2364:
case 1703:
case 3549:
case 1918:
case 1609:
case 2690:
case 1019:
case 2358:
case 2223:
case 1352:
case 1124:
case 276:
case 1449:
case 1900:
case 2786:
case 579:
case 3199:
case 3718:
case 19:
case 2471:
case 975:
case 3997:
case 2251:
case 97:
case 994:
case 703:
case 83:
case 2169:
case 3415:
case 291:
case 1903:
case 3692:
case 1161:
case 2797:
case 3892:
case 1002:
case 2971:
case 937:
case 4012:
case 1306:
case 3087:
case 1649:
case 2542:
case 940:
case 1131:
case 437:
case 3942:
case 409:
case 2292:
case 1532:
case 708:
case 805:
case 120:
case 2102:
case 3715:
case 1549:
case 1716:
case 2910:
case 1880:
case 2461:
case 3335:
case 636:
case 2350:
case 4061:
case 2847:
case 416:
case 3248:
case 2988:
case 1076:
case 1278:
case 3704:
case 2883:
case 1811:
case 27:
case 1732:
case 1741:
case 3653:
case 3580:
case 1516:
case 2869:
case 2491:
case 2784:
case 3789:
case 4080:
case 2472:
case 782:
case 1382:
case 1695:
case 1738:
case 1552:
case 638:
case 3390:
case 190:
case 4047:
case 1526:
case 4086:
case 1094:
case 3308:
case 2184:
case 1466:
case 224:
case 635:
case 1614:
case 628:
case 539:
case 8:
case 1046:
case 629:
case 560:
case 3575:
case 1515:
case 2186:
case 3033:
case 837:
case 1537:
case 164:
case 1768:
case 117:
case 2148:
case 1859:
case 1844:
case 2860:
case 2508:
case 3301:
case 3783:
case 796:
case 2819:
case 298:
case 1353:
case 1818:
case 847:
case 713:
case 2703:
case 781:
case 213:
case 3433:
case 1101:
case 664:
case 1313:
case 3696:
case 2398:
case 1921:
case 506:
case 1791:
case 240:
case 2263:
case 2242:
case 2157:
case 678:
case 2668:
case 3432:
case 998:
case 1476:
case 2331:
case 2402:
case 326:
case 861:
case 3291:
case 901:
case 3373:
case 171:
case 3052:
case 2283:
case 798:
case 3680:
case 198:
case 3006:
case 1227:
case 1188:
case 839:
case 1426:
case 2519:
case 110:
case 1069:
case 2128:
case 2371:
case 3541:
case 2535:
case 1012:
case 981:
case 2884:
case 3520:
case 1956:
case 2410:
case 3396:
case 320:
case 2881:
case 3992:
case 544:
case 3700:
case 3810:
case 2828:
case 894:
case 2501:
case 137:
case 668:
case 1165:
case 1004:
case 3017:
case 427:
case 3593:
case 1847:
case 22:
case 578:
case 1300:
case 441:
case 982:
case 3961:
case 3421:
case 525:
case 1144:
case 508:
case 3481:
case 3250:
case 9:
case 1575:
case 514:
case 3330:
case 3013:
case 1370:
case 1681:
case 1377:
case 2856:
case 2639:
case 1423:
case 1506:
case 229:
case 914:
case 797:
case 1155:
case 768:
case 247:
case 1890:
case 1137:
case 2614:
case 2108:
case 4003:
case 306:
case 2710:
case 537:
case 2090:
case 1503:
case 2392:
case 1787:
case 2935:
case 1943:
case 3590:
case 3111:
case 3873:
case 1777:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1651237201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,];
var gg_b = "1651237201/";

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
