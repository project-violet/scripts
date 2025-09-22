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
case 1736:
case 358:
case 2687:
case 168:
case 2362:
case 2389:
case 2443:
case 1242:
case 3645:
case 3566:
case 3002:
case 3069:
case 3822:
case 3671:
case 98:
case 894:
case 1170:
case 1178:
case 1097:
case 2405:
case 209:
case 3082:
case 719:
case 2074:
case 3603:
case 2702:
case 1472:
case 2273:
case 494:
case 3323:
case 2337:
case 1899:
case 3370:
case 85:
case 2281:
case 809:
case 2782:
case 379:
case 681:
case 2639:
case 3774:
case 2656:
case 2419:
case 3458:
case 3333:
case 2327:
case 132:
case 504:
case 1352:
case 2960:
case 1644:
case 2238:
case 2629:
case 1793:
case 1663:
case 1540:
case 1548:
case 3563:
case 1089:
case 3251:
case 888:
case 1979:
case 1829:
case 1955:
case 372:
case 2290:
case 1733:
case 1454:
case 3014:
case 3249:
case 156:
case 1778:
case 1770:
case 1175:
case 2397:
case 139:
case 1159:
case 779:
case 2912:
case 1126:
case 1839:
case 855:
case 1586:
case 2699:
case 2714:
case 785:
case 913:
case 1015:
case 3359:
case 2182:
case 3375:
case 2318:
case 2310:
case 2169:
case 3326:
case 203:
case 1557:
case 985:
case 255:
case 2052:
case 2464:
case 1796:
case 2235:
case 480:
case 912:
case 2965:
case 1193:
case 2866:
case 3954:
case 950:
case 1807:
case 526:
case 758:
case 2217:
case 1027:
case 3479:
case 2653:
case 2880:
case 2888:
case 2903:
case 1376:
case 4020:
case 4081:
case 2073:
case 1504:
case 19:
case 2971:
case 4001:
case 1210:
case 3684:
case 1584:
case 2028:
case 2081:
case 2800:
case 2149:
case 1325:
case 4073:
case 1691:
case 1854:
case 4038:
case 3361:
case 3795:
case 2444:
case 1429:
case 3519:
case 431:
case 2151:
case 2030:
case 2846:
case 524:
case 1335:
case 448:
case 831:
case 1398:
case 3117:
case 177:
case 737:
case 240:
case 1407:
case 1560:
case 3668:
case 616:
case 535:
case 3738:
case 440:
case 3135:
case 2864:
case 3176:
case 3701:
case 3939:
case 429:
case 3505:
case 2716:
case 2547:
case 3773:
case 2274:
case 3282:
case 3728:
case 1297:
case 3324:
case 745:
case 3999:
case 2805:
case 496:
case 345:
case 2749:
case 2025:
case 1215:
case 630:
case 3612:
case 94:
case 1512:
case 1724:
case 3422:
case 223:
case 1967:
case 1373:
case 4025:
case 296:
case 2906:
case 1330:
case 4017:
case 2035:
case 1734:
case 2252:
case 2579:
case 1453:
case 101:
case 506:
case 4035:
case 3394:
case 2948:
case 337:
case 3051:
case 3735:
case 2654:
case 2463:
case 3717:
case 2090:
case 3665:
case 1565:
case 3858:
case 2177:
case 3850:
case 1395:
case 1761:
case 2819:
case 663:
case 3521:
case 3120:
case 2957:
case 3128:
case 3725:
case 3588:
case 3580:
case 3776:
case 3500:
case 3467:
case 3508:
case 896:
case 3173:
case 1922:
case 2705:
case 1475:
case 2573:
case 3516:
case 2849:
case 199:
case 2100:
case 560:
case 2108:
case 2121:
case 2528:
case 3577:
case 267:
case 2694:
case 1834:
case 3993:
case 3091:
case 644:
case 3898:
case 3890:
case 1355:
case 2538:
case 66:
case 2530:
case 3244:
case 3043:
case 1060:
case 1493:
case 2292:
case 328:
case 2365:
case 2164:
case 3835:
case 942:
case 3817:
case 961:
case 3179:
case 533:
case 1861:
case 1245:
case 3758:
case 1542:
case 3642:
case 3005:
case 1283:
case 349:
case 2047:
case 42:
case 3975:
case 3825:
case 2813:
case 1271:
case 743:
case 3926:
case 2402:
case 3085:
case 2780:
case 1423:
case 1012:
case 2788:
case 2721:
case 2384:
case 2185:
case 3372:
case 949:
case 425:
case 2304:
case 2700:
case 342:
case 1754:
case 2962:
case 928:
case 1358:
case 3895:
case 2143:
case 4079:
case 3996:
case 539:
case 3452:
case 2746:
case 361:
case 3755:
case 1240:
case 2119:
case 192:
case 187:
case 2877:
case 2368:
case 1496:
case 2267:
case 434:
case 1649:
case 126:
case 3801:
case 3088:
case 3080:
case 2624:
case 1206:
case 2816:
case 1172:
case 3873:
case 2937:
case 3978:
case 2915:
case 1347:
case 234:
case 3970:
case 3820:
case 2414:
case 3008:
case 1938:
case 308:
case 2092:
case 878:
case 1756:
case 3243:
case 2744:
case 300:
case 1729:
case 3066:
case 382:
case 1878:
case 1870:
case 1920:
case 315:
case 607:
case 124:
case 690:
case 40:
case 436:
case 789:
case 3205:
case 1981:
case 989:
case 1682:
case 698:
case 3697:
case 259:
case 1901:
case 3122:
case 236:
case 1071:
case 1823:
case 383:
case 3481:
case 2626:
case 3428:
case 3420:
case 1284:
case 3610:
case 1518:
case 1510:
case 37:
case 3401:
case 975:
case 470:
case 1896:
case 2636:
case 3792:
case 278:
case 3430:
case 147:
case 3044:
case 270:
case 2258:
case 2250:
case 1707:
case 2477:
case 2766:
case 3219:
case 478:
case 1995:
case 2144:
case 2345:
case 1836:
case 3307:
case 3231:
case 3732:
case 1040:
case 3063:
case 3490:
case 491:
case 3246:
case 1434:
case 3609:
case 1562:
case 1753:
case 1156:
case 2451:
case 1392:
case 3387:
case 501:
case 3221:
case 1976:
case 1006:
case 1614:
case 3280:
case 3288:
case 106:
case 13:
case 375:
case 2449:
case 3208:
case 805:
case 1859:
case 4067:
case 1925:
case 2802:
case 783:
case 2022:
case 1212:
case 2413:
case 31:
case 3767:
case 2678:
case 915:
case 1515:
case 1057:
case 3637:
case 253:
case 1799:
case 715:
case 389:
case 452:
case 891:
case 1998:
case 210:
case 3329:
case 700:
case 2763:
case 2552:
case 2279:
case 2255:
case 3435:
case 1527:
case 997:
case 982:
case 410:
case 3627:
case 3192:
case 3934:
case 1893:
case 646:
case 900:
case 3802:
case 1103:
case 1171:
case 1706:
case 2476:
case 3413:
case 3022:
case 1578:
case 489:
case 2615:
case 3678:
case 163:
case 305:
case 875:
case 353:
case 2637:
case 617:
case 936:
case 2874:
case 1183:
case 289:
case 3166:
case 1145:
case 3032:
case 1740:
case 3763:
case 1748:
case 3279:
case 162:
case 2435:
case 1533:
case 1951:
case 2264:
case 391:
case 3144:
case 3345:
case 130:
case 770:
case 978:
case 2307:
case 3696:
case 1254:
case 2961:
case 1596:
case 2689:
case 2246:
case 2662:
case 3451:
case 778:
case 138:
case 475:
case 1913:
case 1011:
case 2280:
case 3067:
case 2208:
case 275:
case 1099:
case 889:
case 2481:
case 815:
case 3814:
case 677:
case 47:
case 2420:
case 2428:
case 2618:
case 3675:
case 2610:
case 1559:
case 1272:
case 1703:
case 3416:
case 1039:
case 1771:
case 2401:
case 883:
case 3942:
case 4044:
case 2353:
case 2792:
case 378:
case 808:
case 1536:
case 1056:
case 3250:
case 3258:
case 370:
case 800:
case 2219:
case 1745:
case 3766:
case 1862:
case 1541:
case 897:
case 400:
case 69:
case 2852:
case 718:
case 3744:
case 200:
case 918:
case 2132:
case 408:
case 2994:
case 3340:
case 297:
case 2399:
case 215:
case 1157:
case 1815:
case 753:
case 3386:
case 705:
case 3247:
case 598:
case 2205:
case 2697:
case 2582:
case 2311:
case 169:
case 1674:
case 87:
case 1916:
case 283:
case 905:
case 507:
case 1837:
case 3306:
case 2755:
case 1534:
case 3634:
case 2933:
case 3119:
case 3877:
case 4046:
case 2150:
case 967:
case 2838:
case 767:
case 3360:
case 3368:
case 3598:
case 3267:
case 843:
case 3624:
case 2801:
case 1712:
case 2088:
case 2873:
case 3816:
case 1385:
case 3937:
case 2828:
case 3915:
case 4088:
case 3414:
case 4021:
case 2881:
case 2000:
case 1625:
case 72:
case 3185:
case 3721:
case 3105:
case 114:
case 2147:
case 1914:
case 1676:
case 3576:
case 1415:
case 3708:
case 1427:
case 3535:
case 3055:
case 3232:
case 2895:
case 1842:
case 3143:
case 1168:
case 1561:
case 2064:
case 1391:
case 3746:
case 261:
case 1765:
case 1695:
case 2941:
case 633:
case 2043:
case 3595:
case 228:
case 3292:
case 3164:
case 4043:
case 2179:
case 2936:
case 3719:
case 2642:
case 1207:
case 586:
case 2750:
case 632:
case 2005:
case 3482:
case 1704:
case 2474:
case 3047:
case 2959:
case 2975:
case 4005:
case 2876:
case 32:
case 3402:
case 2085:
case 1321:
case 3705:
case 1410:
case 1673:
case 2747:
case 3997:
case 3180:
case 1902:
case 1969:
case 660:
case 3188:
case 3785:
case 1620:
case 934:
case 1768:
case 3743:
case 157:
case 1760:
case 2577:
case 56:
case 2993:
case 544:
case 3146:
case 2898:
case 6:
case 4091:
case 3131:
case 820:
case 2244:
case 3538:
case 2953:
case 2531:
case 563:
case 2138:
case 3654:
case 3891:
case 1554:
case 1448:
case 4051:
case 3098:
case 171:
case 2717:
case 2665:
case 3090:
case 2546:
case 2850:
case 3177:
case 1804:
case 3957:
case 2128:
case 2120:
case 2049:
case 1486:
case 2580:
case 2588:
case 1406:
case 2776:
case 2101:
case 2467:
case 541:
case 2173:
case 2999:
case 184:
case 4013:
case 3805:
case 1457:
case 1278:
case 245:
case 538:
case 2422:
case 1223:
case 3076:
case 323:
case 445:
case 3906:
case 1868:
case 1655:
case 3555:
case 3579:
case 2432:
case 1233:
case 3017:
case 2790:
case 3940:
case 740:
case 948:
case 237:
case 1061:
case 1377:
case 3948:
case 2929:
case 1944:
case 2668:
case 3777:
case 3095:
case 2660:
case 516:
case 340:
case 3466:
case 1293:
case 2334:
case 3113:
case 24:
case 2176:
case 2505:
case 2773:
case 2202:
case 264:
case 796:
case 2585:
case 996:
case 2720:
case 2282:
case 2781:
case 923:
case 2324:
case 2125:
case 1349:
case 647:
case 3903:
case 84:
case 3001:
case 1313:
case 2016:
case 1226:
case 3821:
case 1572:
case 1275:
case 3028:
case 2684:
case 3149:
case 3081:
case 3983:
case 3808:
case 4016:
case 3945:
case 2907:
case 190:
case 569:
case 107:
case 2077:
case 2361:
case 1094:
case 1236:
case 2519:
case 1742:
case 1650:
case 3030:
case 3550:
case 4077:
case 3846:
case 1241:
case 1865:
case 1622:
case 3522:
case 687:
case 3225:
case 1070:
case 866:
case 75:
case 1900:
case 3182:
case 1197:
case 3310:
case 2375:
case 3318:
case 2174:
case 709:
case 1803:
case 1980:
case 909:
case 355:
case 165:
case 95:
case 1871:
case 2341:
case 3532:
case 693:
case 3052:
case 3464:
case 1789:
case 3965:
case 1845:
case 2954:
case 1261:
case 2336:
case 872:
case 3653:
case 1553:
case 2640:
case 2563:
case 3446:
case 3431:
case 3844:
case 3290:
case 1224:
case 3567:
case 3400:
case 1715:
case 1118:
case 819:
case 1382:
case 3397:
case 3421:
case 4014:
case 651:
case 466:
case 1302:
case 273:
case 1737:
case 1599:
case 3488:
case 3480:
case 3699:
case 3769:
case 1026:
case 1484:
case 2323:
case 3337:
case 1806:
case 2378:
case 3114:
case 3315:
case 3281:
case 1905:
case 1886:
case 1797:
case 3220:
case 279:
case 1075:
case 1404:
case 2774:
case 3656:
case 127:
case 812:
case 1840:
case 1109:
case 1162:
case 3968:
case 1189:
case 3960:
case 850:
case 2544:
case 1529:
case 3629:
case 1587:
case 780:
case 3687:
case 3362:
case 3309:
case 212:
case 1127:
case 1919:
case 2832:
case 2152:
case 574:
case 902:
case 2396:
case 1468:
case 1460:
case 412:
case 980:
case 1507:
case 1991:
case 3485:
case 4082:
case 213:
case 2822:
case 703:
case 755:
case 4069:
case 4002:
case 3904:
case 1115:
case 557:
case 1857:
case 903:
case 285:
case 1718:
case 413:
case 3405:
case 2447:
case 2603:
case 144:
case 3086:
case 863:
case 735:
case 622:
case 2818:
case 3875:
case 3826:
case 3976:
case 2011:
case 1221:
case 1722:
case 1280:
case 3614:
case 3006:
case 3265:
case 3434:
case 3935:
case 2366:
case 3917:
case 230:
case 1231:
case 747:
case 3836:
case 2254:
case 3048:
case 2596:
case 1732:
case 1689:
case 841:
case 1627:
case 262:
case 2053:
case 2951:
case 1264:
case 3187:
case 3893:
case 1934:
case 462:
case 3990:
case 3998:
case 3107:
case 4053:
case 3461:
case 2344:
case 2145:
case 830:
case 2740:
case 2652:
case 2748:
case 241:
case 263:
case 2183:
case 2949:
case 463:
case 1476:
case 2171:
case 11:
case 2706:
case 2578:
case 1582:
case 2674:
case 3739:
case 3003:
case 3071:
case 3367:
case 1122:
case 2837:
case 115:
case 3870:
case 469:
case 2815:
case 3878:
case 1502:
case 324:
case 3981:
case 3083:
case 2007:
case 1066:
case 3045:
case 2593:
case 3729:
case 3833:
case 2977:
case 2827:
case 197:
case 182:
case 3938:
case 3930:
case 108:
case 3707:
case 347:
case 54:
case 2148:
case 629:
case 2140:
case 2809:
case 3995:
case 2889:
case 4029:
case 1291:
case 2536:
case 2056:
case 1438:
case 3510:
case 3284:
case 2771:
case 17:
case 1167:
case 216:
case 3322:
case 335:
case 2526:
case 2783:
case 566:
case 1996:
case 2561:
case 2253:
case 1452:
case 2765:
case 2617:
case 2635:
case 3358:
case 573:
case 2914:
case 1147:
case 1513:
case 3470:
case 3478:
case 2415:
case 143:
case 2625:
case 3012:
case 3423:
case 1820:
case 1978:
case 602:
case 799:
case 1008:
case 1000:
case 326:
case 688:
case 1549:
case 999:
case 3649:
case 3206:
case 1088:
case 2211:
case 1021:
case 3172:
case 2385:
case 1838:
case 655:
case 603:
case 2343:
case 3496:
case 1046:
case 2534:
case 3240:
case 2054:
case 3894:
case 58:
case 1031:
case 1150:
case 392:
case 3379:
case 1898:
case 457:
case 3355:
case 3154:
case 792:
case 787:
case 1019:
case 2638:
case 2630:
case 2768:
case 257:
case 2256:
case 2594:
case 1091:
case 1993:
case 3834:
case 2364:
case 3441:
case 2681:
case 2239:
case 793:
case 3084:
case 512:
case 2418:
case 2410:
case 1516:
case 2673:
case 3459:
case 3974:
case 399:
case 2380:
case 2388:
case 2112:
case 3271:
case 3772:
case 2497:
case 149:
case 874:
case 1474:
case 304:
case 1959:
case 1975:
case 281:
case 1817:
case 1155:
case 1179:
case 1936:
case 3245:
case 3861:
case 1266:
case 1642:
case 3542:
case 694:
case 120:
case 2331:
case 3060:
case 128:
case 2287:
case 579:
case 1564:
case 2233:
case 3227:
case 301:
case 777:
case 2963:
case 2377:
case 3330:
case 2655:
case 2679:
case 3301:
case 2316:
case 954:
case 1847:
case 3328:
case 1999:
case 284:
case 2270:
case 2457:
case 3215:
case 145:
case 2278:
case 691:
case 3724:
case 3512:
case 1612:
case 1776:
case 3600:
case 1467:
case 79:
case 2884:
case 3411:
case 4024:
case 1173:
case 1521:
case 3621:
case 1120:
case 1049:
case 1580:
case 1214:
case 1588:
case 2440:
case 3646:
case 1665:
case 1717:
case 1850:
case 51:
case 3761:
case 653:
case 4034:
case 1051:
case 3631:
case 1953:
case 1130:
case 471:
case 1138:
case 3289:
case 1735:
case 589:
case 2296:
case 2034:
case 60:
case 636:
case 407:
case 2865:
case 3992:
case 3134:
case 1987:
case 1591:
case 1907:
case 207:
case 1795:
case 583:
case 1361:
case 717:
case 2094:
case 2572:
case 3584:
case 1684:
case 3210:
case 3124:
case 3325:
case 3376:
case 995:
case 597:
case 2226:
case 3504:
case 1585:
case 1720:
case 1728:
case 2483:
case 1125:
case 1324:
case 670:
case 1939:
case 1176:
case 14:
case 678:
case 3605:
case 1505:
case 2403:
case 1773:
case 2293:
case 411:
case 1738:
case 3042:
case 1334:
case 898:
case 3398:
case 3390:
case 1855:
case 2944:
case 1117:
case 1668:
case 3560:
case 807:
case 377:
case 1543:
case 1660:
case 2445:
case 2369:
case 542:
case 173:
case 865:
case 733:
case 1686:
case 2737:
case 3723:
case 1014:
case 2224:
case 3506:
case 3778:
case 2667:
case 2715:
case 2511:
case 3829:
case 3979:
case 543:
case 2727:
case 732:
case 172:
case 3062:
case 3454:
case 3733:
case 1640:
case 932:
case 3540:
case 2096:
case 3663:
case 3141:
case 2465:
case 3089:
case 1393:
case 3856:
case 1251:
case 2964:
case 3807:
case 768:
case 321:
case 2033:
case 2709:
case 2553:
case 2789:
case 1892:
case 760:
case 3193:
case 3887:
case 2988:
case 2803:
case 2980:
case 4070:
case 4078:
case 1326:
case 9:
case 1657:
case 3037:
case 3557:
case 265:
case 2921:
case 18:
case 1213:
case 2023:
case 2622:
case 1359:
case 2900:
case 2197:
case 4023:
case 1375:
case 3571:
case 3178:
case 2857:
case 3:
case 3170:
case 1082:
case 1447:
case 3503:
case 46:
case 3726:
case 1002:
case 3583:
case 1683:
case 2137:
case 113:
case 1972:
case 444:
case 1152:
case 3741:
case 1396:
case 2468:
case 3242:
case 150:
case 2507:
case 2460:
case 1566:
case 1645:
case 3666:
case 3545:
case 2692:
case 158:
case 3736:
case 4093:
case 1832:
case 721:
case 2041:
case 549:
case 3644:
case 1544:
case 62:
case 2529:
case 2294:
case 2036:
case 1450:
case 227:
case 4041:
case 1333:
case 332:
case 2109:
case 2848:
case 756:
case 528:
case 1378:
case 4026:
case 1370:
case 2905:
case 2797:
case 179:
case 2075:
case 3018:
case 844:
case 2404:
case 2539:
case 3472:
case 1216:
case 4075:
case 520:
case 956:
case 2806:
case 333:
case 2196:
case 2352:
case 3189:
case 3943:
case 1238:
case 1629:
case 2793:
case 3556:
case 52:
case 3294:
case 3036:
case 1656:
case 3848:
case 1863:
case 1327:
case 3109:
case 3162:
case 620:
case 2899:
case 2947:
case 3886:
case 8:
case 1782:
case 2018:
case 2010:
case 3797:
case 3539:
case 1639:
case 3404:
case 3026:
case 1273:
case 2811:
case 1702:
case 1769:
case 4010:
case 628:
case 1337:
case 965:
case 2170:
case 3857:
case 3314:
case 3710:
case 2775:
case 3718:
case 344:
case 2503:
case 4:
case 2583:
case 1984:
case 765:
case 468:
case 3468:
case 2545:
case 3093:
case 2666:
case 1592:
case 268:
case 3587:
case 3127:
case 2950:
case 832:
case 2133:
case 1866:
case 3261:
case 2807:
case 1217:
case 221:
case 3553:
case 3033:
case 1653:
case 3931:
case 1464:
case 1532:
case 2796:
case 3946:
case 3980:
case 944:
case 365:
case 2557:
case 155:
case 3871:
case 3921:
case 3412:
case 3023:
case 1714:
case 1522:
case 3070:
case 3883:
case 3908:
case 4037:
case 3197:
case 744:
case 1318:
case 839:
case 1912:
case 1421:
case 2839:
case 456:
case 3737:
case 439:
case 1699:
case 786:
case 1480:
case 2723:
case 3224:
case 3667:
case 2778:
case 3715:
case 986:
case 3118:
case 2374:
case 642:
case 3511:
case 2159:
case 239:
case 3382:
case 2829:
case 2979:
case 727:
case 2955:
case 3727:
case 1290:
case 2009:
case 3234:
case 3096:
case 2540:
case 2548:
case 3465:
case 2089:
case 927:
case 3964:
case 2685:
case 1274:
case 3483:
case 129:
case 784:
case 454:
case 3349:
case 578:
case 3471:
case 1113:
case 2605:
case 1547:
case 984:
case 89:
case 148:
case 67:
case 477:
case 1864:
case 2398:
case 311:
case 277:
case 1095:
case 2407:
case 1466:
case 2161:
case 2794:
case 3445:
case 1151:
case 2456:
case 1550:
case 3658:
case 1030:
case 1558:
case 3742:
case 3865:
case 1846:
case 971:
case 398:
case 2691:
case 2317:
case 1945:
case 2854:
case 1444:
case 536:
case 50:
case 1831:
case 682:
case 3259:
case 1672:
case 2210:
case 2218:
case 3275:
case 1808:
case 946:
case 1800:
case 2124:
case 2325:
case 49:
case 600:
case 1001:
case 1888:
case 608:
case 2376:
case 29:
case 1971:
case 1073:
case 2439:
case 1713:
case 3406:
case 2600:
case 346:
case 3884:
case 2411:
case 1116:
case 2922:
case 2621:
case 3804:
case 552:
case 3486:
case 2680:
case 518:
case 689:
case 2209:
case 1463:
case 790:
case 801:
case 2646:
case 2932:
case 2395:
case 1819:
case 2631:
case 553:
case 505:
case 907:
case 417:
case 3296:
case 1654:
case 3034:
case 3233:
case 201:
case 122:
case 2227:
case 817:
case 3963:
case 1948:
case 675:
case 3061:
case 1940:
case 1751:
case 3142:
case 401:
case 1843:
case 3868:
case 1555:
case 911:
case 3679:
case 1252:
case 2453:
case 2237:
case 591:
case 123:
case 2373:
case 2967:
case 1885:
case 2320:
case 384:
case 895:
case 2215:
case 1025:
case 3278:
case 3270:
case 3457:
case 2381:
case 2512:
case 2724:
case 3380:
case 404:
case 1402:
case 1469:
case 3784:
case 714:
case 1482:
case 3308:
case 1910:
case 381:
case 4068:
case 2861:
case 1719:
case 3331:
case 2068:
case 1595:
case 3695:
case 2060:
case 3287:
case 594:
case 2493:
case 1164:
case 2379:
case 2355:
case 2154:
case 685:
case 1131:
case 2436:
case 1538:
case 1050:
case 3594:
case 613:
case 1851:
case 3256:
case 55:
case 2441:
case 1581:
case 4004:
case 3969:
case 1785:
case 3239:
case 1121:
case 1520:
case 2084:
case 3410:
case 2475:
case 1705:
case 804:
case 374:
case 2616:
case 2004:
case 612:
case 3673:
case 2974:
case 2824:
case 1100:
case 1849:
case 4084:
case 299:
case 1108:
case 1915:
case 2347:
case 426:
case 774:
case 3305:
case 3299:
case 1414:
case 588:
case 580:
case 1267:
case 3712:
case 2206:
case 2172:
case 1816:
case 3184:
case 3385:
case 3343:
case 1368:
case 2952:
case 1764:
case 2496:
case 2065:
case 851:
case 3489:
case 3409:
case 2248:
case 3534:
case 619:
case 2240:
case 292:
case 503:
case 957:
case 555:
case 3168:
case 1989:
case 3561:
case 3765:
case 1517:
case 981:
case 1746:
case 3391:
case 2433:
case 1232:
case 781:
case 2754:
case 2350:
case 1909:
case 1731:
case 2358:
case 3319:
case 887:
case 1304:
case 4012:
case 3914:
case 314:
case 1576:
case 2478:
case 125:
case 1780:
case 1788:
case 893:
case 938:
case 1477:
case 1250:
case 2707:
case 1766:
case 3745:
case 3809:
case 3148:
case 529:
case 3889:
case 447:
case 2896:
case 2787:
case 178:
case 64:
case 3575:
case 2510:
case 2111:
case 435:
case 1416:
case 3559:
case 540:
case 316:
case 2322:
case 3186:
case 1357:
case 2199:
case 2204:
case 369:
case 2003:
case 1574:
case 424:
case 2823:
case 2367:
case 2071:
case 1306:
case 3837:
case 3815:
case 2928:
case 3157:
case 2870:
case 2920:
case 763:
case 835:
case 4003:
case 4071:
case 2602:
case 2083:
case 3007:
case 1744:
case 847:
case 2729:
case 1693:
case 2833:
case 3363:
case 3827:
case 2930:
case 941:
case 762:
case 1092:
case 3087:
case 2260:
case 2268:
case 362:
case 2527:
case 152:
case 1633:
case 3053:
case 3951:
case 3533:
case 3145:
case 1166:
case 2461:
case 1279:
case 1763:
case 3740:
case 3652:
case 1032:
case 1255:
case 3786:
case 153:
case 2537:
case 105:
case 363:
case 2799:
case 1623:
case 969:
case 3183:
case 1802:
case 1022:
case 2212:
case 1413:
case 3171:
case 3570:
case 2515:
case 1449:
case 916:
case 2086:
case 2424:
case 3099:
case 3810:
case 406:
case 3818:
case 2875:
case 522:
case 1303:
case 4086:
case 2976:
case 716:
case 1371:
case 2434:
case 2562:
case 4048:
case 1451:
case 2156:
case 4040:
case 1345:
case 2917:
case 1144:
case 523:
case 191:
case 2836:
case 645:
case 330:
case 2040:
case 3596:
case 3254:
case 1696:
case 2048:
case 596:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1758542401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,];
var gg_b = "1758542401/";

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
