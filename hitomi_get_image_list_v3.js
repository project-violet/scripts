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
case 705:
case 2214:
case 2986:
case 3963:
case 886:
case 454:
case 2498:
case 236:
case 927:
case 1692:
case 2827:
case 102:
case 2729:
case 3695:
case 2398:
case 1070:
case 2216:
case 2562:
case 68:
case 607:
case 627:
case 3686:
case 1114:
case 1694:
case 2117:
case 1168:
case 1803:
case 1419:
case 2084:
case 3553:
case 2541:
case 3404:
case 105:
case 755:
case 2430:
case 46:
case 3445:
case 1476:
case 527:
case 80:
case 450:
case 3258:
case 3013:
case 602:
case 2373:
case 3751:
case 3439:
case 2965:
case 1466:
case 835:
case 3184:
case 3182:
case 1228:
case 2810:
case 1294:
case 92:
case 3028:
case 2257:
case 1243:
case 3534:
case 190:
case 3495:
case 122:
case 2453:
case 1693:
case 893:
case 3432:
case 3484:
case 2676:
case 3764:
case 1571:
case 3142:
case 1530:
case 1146:
case 955:
case 301:
case 3748:
case 1122:
case 1124:
case 3872:
case 2814:
case 1439:
case 1889:
case 772:
case 1445:
case 1945:
case 1008:
case 2586:
case 3526:
case 3220:
case 3932:
case 91:
case 651:
case 657:
case 993:
case 1310:
case 410:
case 1840:
case 2191:
case 2746:
case 2157:
case 2666:
case 2778:
case 1328:
case 407:
case 1546:
case 3359:
case 3340:
case 140:
case 2479:
case 2158:
case 1485:
case 325:
case 2630:
case 29:
case 3375:
case 1455:
case 3367:
case 256:
case 1939:
case 991:
case 3136:
case 2160:
case 2327:
case 1531:
case 1954:
case 2254:
case 2656:
case 1966:
case 1431:
case 545:
case 3793:
case 2504:
case 2082:
case 2570:
case 2023:
case 498:
case 3812:
case 3146:
case 3244:
case 214:
case 2413:
case 2658:
case 3882:
case 3747:
case 368:
case 2500:
case 3300:
case 3633:
case 3726:
case 2283:
case 638:
case 3166:
case 445:
case 1068:
case 1684:
case 3801:
case 2069:
case 2189:
case 1729:
case 2440:
case 977:
case 3164:
case 2385:
case 1363:
case 2271:
case 1353:
case 1602:
case 2865:
case 512:
case 2483:
case 3363:
case 668:
case 3565:
case 3547:
case 2867:
case 3776:
case 442:
case 4054:
case 269:
case 3057:
case 2507:
case 1373:
case 2681:
case 3396:
case 83:
case 1512:
case 2363:
case 3292:
case 1976:
case 1798:
case 1462:
case 1805:
case 2124:
case 4032:
case 1447:
case 2355:
case 1675:
case 3337:
case 3060:
case 330:
case 1785:
case 771:
case 2471:
case 2135:
case 461:
case 641:
case 1819:
case 2644:
case 2460:
case 3696:
case 232:
case 1458:
case 1733:
case 394:
case 1331:
case 614:
case 2428:
case 1177:
case 2996:
case 3629:
case 2467:
case 24:
case 615:
case 1372:
case 380:
case 2799:
case 3820:
case 2933:
case 622:
case 2897:
case 1400:
case 565:
case 930:
case 3153:
case 3329:
case 2018:
case 747:
case 320:
case 1394:
case 1618:
case 1298:
case 3646:
case 1229:
case 901:
case 1804:
case 2884:
case 489:
case 75:
case 3795:
case 166:
case 1951:
case 3001:
case 1958:
case 2304:
case 2625:
case 1474:
case 1629:
case 3693:
case 1723:
case 183:
case 238:
case 815:
case 1252:
case 4077:
case 3868:
case 3465:
case 1206:
case 1871:
case 1604:
case 1670:
case 2963:
case 2553:
case 3072:
case 558:
case 47:
case 4059:
case 3317:
case 4064:
case 869:
case 3018:
case 3729:
case 1322:
case 2190:
case 2040:
case 1224:
case 4075:
case 2351:
case 1349:
case 2131:
case 2334:
case 2111:
case 842:
case 728:
case 2354:
case 315:
case 3183:
case 556:
case 3719:
case 2010:
case 112:
case 3626:
case 2118:
case 2154:
case 3648:
case 3911:
case 517:
case 3887:
case 2410:
case 522:
case 1974:
case 2213:
case 3397:
case 621:
case 1293:
case 1227:
case 950:
case 2302:
case 1386:
case 1463:
case 1637:
case 2416:
case 1410:
case 1305:
case 2661:
case 2443:
case 3904:
case 1551:
case 3466:
case 566:
case 3350:
case 1145:
case 3635:
case 2015:
case 1489:
case 1979:
case 1153:
case 357:
case 3320:
case 1860:
case 2691:
case 2450:
case 3521:
case 242:
case 3203:
case 1754:
case 2525:
case 3752:
case 2369:
case 2759:
case 2889:
case 851:
case 2445:
case 848:
case 2874:
case 3797:
case 2609:
case 2315:
case 2950:
case 2194:
case 2224:
case 176:
case 2987:
case 4038:
case 2432:
case 135:
case 3503:
case 3101:
case 1194:
case 2068:
case 257:
case 2724:
case 203:
case 3215:
case 948:
case 3562:
case 2088:
case 2188:
case 3944:
case 3106:
case 415:
case 1635:
case 3170:
case 1283:
case 3587:
case 623:
case 340:
case 1509:
case 3536:
case 3056:
case 1917:
case 1094:
case 2537:
case 1894:
case 3212:
case 3966:
case 1248:
case 1430:
case 346:
case 1397:
case 3364:
case 278:
case 391:
case 4011:
case 1812:
case 184:
case 3383:
case 560:
case 3232:
case 3405:
case 2848:
case 1549:
case 2823:
case 1309:
case 4058:
case 2026:
case 148:
case 1824:
case 2745:
case 3430:
case 536:
case 2924:
case 3433:
case 1811:
case 3334:
case 1884:
case 2178:
case 3290:
case 3823:
case 2282:
case 1289:
case 1774:
case 526:
case 3991:
case 2401:
case 2002:
case 3214:
case 487:
case 1861:
case 2308:
case 3542:
case 3643:
case 1876:
case 3023:
case 972:
case 1414:
case 2482:
case 3664:
case 822:
case 2427:
case 2726:
case 2156:
case 1478:
case 3250:
case 875:
case 1588:
case 3960:
case 260:
case 1333:
case 1099:
case 970:
case 2647:
case 483:
case 2014:
case 1108:
case 1203:
case 1388:
case 3416:
case 271:
case 1472:
case 2532:
case 2804:
case 544:
case 1523:
case 1781:
case 3888:
case 1262:
case 1211:
case 2899:
case 2025:
case 982:
case 1382:
case 624:
case 1491:
case 3228:
case 2134:
case 3480:
case 3621:
case 4081:
case 666:
case 568:
case 403:
case 1081:
case 28:
case 2868:
case 72:
case 209:
case 1740:
case 586:
case 2051:
case 440:
case 2559:
case 712:
case 2244:
case 3606:
case 1799:
case 2357:
case 1292:
case 2991:
case 1344:
case 378:
case 947:
case 2352:
case 2133:
case 1040:
case 2187:
case 2052:
case 3261:
case 3022:
case 981:
case 763:
case 3663:
case 352:
case 469:
case 23:
case 2074:
case 594:
case 1141:
case 2779:
case 3864:
case 465:
case 814:
case 990:
case 3757:
case 1640:
case 2908:
case 3443:
case 2067:
case 3821:
case 411:
case 2595:
case 2480:
case 789:
case 1807:
case 2093:
case 1757:
case 2971:
case 3858:
case 1031:
case 2145:
case 765:
case 2968:
case 3178:
case 3144:
case 2598:
case 1056:
case 954:
case 3236:
case 3034:
case 718:
case 1752:
case 1496:
case 2047:
case 2288:
case 17:
case 2431:
case 2337:
case 1934:
case 3392:
case 2234:
case 1596:
case 1525:
case 384:
case 25:
case 3225:
case 1722:
case 3016:
case 1072:
case 1829:
case 2300:
case 3564:
case 1327:
case 742:
case 2403:
case 1412:
case 2497:
case 0:
case 1639:
case 778:
case 908:
case 2395:
case 1366:
case 103:
case 3395:
case 1022:
case 1890:
case 1584:
case 371:
case 939:
case 2419:
case 1562:
case 1513:
case 3850:
case 3371:
case 649:
case 874:
case 1277:
case 1845:
case 699:
case 1236:
case 1396:
case 1743:
case 1838:
case 1259:
case 501:
case 3223:
case 2754:
case 548:
case 107:
case 3787:
case 3656:
case 3779:
case 662:
case 2674:
case 3055:
case 317:
case 3358:
case 3014:
case 300:
case 3559:
case 3808:
case 1467:
case 3054:
case 1534:
case 1131:
case 958:
case 1862:
case 3420:
case 2464:
case 1143:
case 3851:
case 1442:
case 2648:
case 1625:
case 3806:
case 1028:
case 3925:
case 1544:
case 2100:
case 2003:
case 697:
case 3652:
case 2701:
case 399:
case 3431:
case 2451:
case 1106:
case 3218:
case 3398:
case 3266:
case 3352:
case 253:
case 1341:
case 3121:
case 2844:
case 3843:
case 2073:
case 3093:
case 2226:
case 1060:
case 1385:
case 767:
case 425:
case 3535:
case 2567:
case 3802:
case 1138:
case 833:
case 1569:
case 543:
case 2969:
case 4:
case 2381:
case 33:
case 1266:
case 998:
case 3298:
case 3327:
case 194:
case 3524:
case 239:
case 3077:
case 1499:
case 2389:
case 3410:
case 1438:
case 1111:
case 1403:
case 2938:
case 709:
case 781:
case 3282:
case 1923:
case 174:
case 519:
case 373:
case 3135:
case 1823:
case 3384:
case 761:
case 1957:
case 1645:
case 1077:
case 3024:
case 628:
case 1234:
case 2241:
case 225:
case 3574:
case 2324:
case 784:
case 3276:
case 2061:
case 1912:
case 1312:
case 2709:
case 3730:
case 2113:
case 1355:
case 2456:
case 1503:
case 836:
case 1714:
case 1718:
case 397:
case 228:
case 1433:
case 3786:
case 3841:
case 262:
case 2663:
case 2917:
case 3854:
case 3856:
case 121:
case 3715:
case 2642:
case 1213:
case 3901:
case 381:
case 339:
case 2219:
case 2839:
case 953:
case 3551:
case 2326:
case 2446:
case 3181:
case 3641:
case 3003:
case 420:
case 2927:
case 642:
case 2081:
case 2672:
case 3368:
case 3068:
case 1415:
case 965:
case 3243:
case 2094:
case 3020:
case 2614:
case 1291:
case 1564:
case 3558:
case 1390:
case 2551:
case 427:
case 4005:
case 308:
case 2557:
case 3592:
case 3256:
case 2932:
case 164:
case 1671:
case 1169:
case 1276:
case 3382:
case 1642:
case 2613:
case 3732:
case 1786:
case 3556:
case 902:
case 3113:
case 158:
case 2722:
case 2089:
case 2021:
case 2411:
case 1783:
case 240:
case 1017:
case 3342:
case 3211:
case 1381:
case 2531:
case 661:
case 2901:
case 1881:
case 1214:
case 739:
case 2728:
case 1444:
case 446:
case 2058:
case 1275:
case 3613:
case 808:
case 3285:
case 2064:
case 716:
case 1001:
case 215:
case 550:
case 1104:
case 219:
case 1628:
case 272:
case 3360:
case 601:
case 3514:
case 2406:
case 1992:
case 1865:
case 819:
case 3470:
case 3825:
case 2285:
case 128:
case 3245:
case 2390:
case 3830:
case 1950:
case 3040:
case 2152:
case 4084:
case 2678:
case 3269:
case 3783:
case 89:
case 1944:
case 3516:
case 3533:
case 1299:
case 3929:
case 2621:
case 2650:
case 1130:
case 1481:
case 2920:
case 3079:
case 1620:
case 142:
case 791:
case 725:
case 1441:
case 226:
case 281:
case 691:
case 1270:
case 3996:
case 1408:
case 3124:
case 2812:
case 2418:
case 2092:
case 1949:
case 2239:
case 364:
case 401:
case 3555:
case 876:
case 1928:
case 2985:
case 3550:
case 1092:
case 2550:
case 3978:
case 241:
case 3481:
case 2267:
case 3111:
case 125:
case 4074:
case 2192:
case 3033:
case 713:
case 145:
case 1191:
case 850:
case 428:
case 1335:
case 2626:
case 2843:
case 2279:
case 1411:
case 237:
case 3589:
case 2032:
case 402:
case 895:
case 1780:
case 2408:
case 3248:
case 2733:
case 3402:
case 3717:
case 2112:
case 4068:
case 2305:
case 3155:
case 1568:
case 3477:
case 3523:
case 1682:
case 1779:
case 4088:
case 1672:
case 3625:
case 211:
case 2777:
case 2060:
case 961:
case 443:
case 2104:
case 3627:
case 918:
case 1285:
case 2272:
case 1361:
case 581:
case 562:
case 97:
case 1573:
case 2909:
case 567:
case 1647:
case 3545:
case 1166:
case 1735:
case 32:
case 974:
case 2375:
case 1010:
case 2560:
case 2287:
case 1688:
case 100:
case 3822:
case 3522:
case 70:
case 1846:
case 1399:
case 1864:
case 3665:
case 2546:
case 2519:
case 2863:
case 52:
case 3634:
case 2956:
case 2169:
case 2845:
case 168:
case 1083:
case 294:
case 3104:
case 2762:
case 3731:
case 3058:
case 3889:
case 744:
case 631:
case 1875:
case 1574:
case 495:
case 3956:
case 683:
case 1893:
case 3603:
case 350:
case 3036:
case 1459:
case 3273:
case 681:
case 1713:
case 2469:
case 775:
case 2444:
case 1685:
case 3091:
case 2907:
case 2020:
case 1342:
case 34:
case 468:
case 3448:
case 2989:
case 3235:
case 1090:
case 629:
case 2603:
case 2265:
case 139:
case 1908:
case 845:
case 3345:
case 1427:
case 2585:
case 1931:
case 2415:
case 223:
case 1666:
case 1834:
case 3829:
case 2637:
case 2024:
case 2679:
case 434:
case 694:
case 3638:
case 3374:
case 292:
case 3699:
case 3964:
case 3509:
case 2168:
case 1375:
case 883:
case 230:
case 1809:
case 3512:
case 2684:
case 1218:
case 2319:
case 120:
case 1175:
case 416:
case 2364:
case 464:
case 3196:
case 2934:
case 79:
case 1674:
case 1791:
case 13:
case 542:
case 2009:
case 2616:
case 2434:
case 3280:
case 3229:
case 3389:
case 1005:
case 1522:
case 1630:
case 1255:
case 143:
case 3591:
case 2723:
case 2829:
case 1240:
case 196:
case 854:
case 3577:
case 1475:
case 3666:
case 3469:
case 3515:
case 1601:
case 1626:
case 2935:
case 2870:
case 1867:
case 2174:
case 1273:
case 779:
case 491:
case 1638:
case 722:
case 2902:
case 50:
case 1690:
case 1603:
case 583:
case 3723:
case 2922:
case 1898:
case 57:
case 1281:
case 1011:
case 914:
case 3130:
case 3920:
case 1633:
case 821:
case 907:
case 3557:
case 85:
case 1537:
case 866:
case 659:
case 610:
case 2891:
case 626:
case 160:
case 3869:
case 3401:
case 2266:
case 3168:
case 828:
case 2906:
case 1370:
case 41:
case 298:
case 2033:
case 4010:
case 2763:
case 404:
case 3414:
case 1184:
case 514:
case 3737:
case 1942:
case 2692:
case 3202:
case 3070:
case 1904:
case 4070:
case 857:
case 2566:
case 4062:
case 894:
case 2506:
case 3989:
case 1753:
case 2651:
case 3941:
case 3519:
case 3743:
case 3353:
case 2230:
case 1085:
case 2744:
case 3200:
case 288:
case 3031:
case 311:
case 3438:
case 1565:
case 1125:
case 689:
case 486:
case 2412:
case 4053:
case 3071:
case 881:
case 2296:
case 2587:
case 429:
case 118:
case 3238:
case 280:
case 3774:
case 4021:
case 2275:
case 3576:
case 186:
case 3740:
case 2796:
case 3095:
case 2472:
case 3295:
case 3940:
case 243:
case 3436:
case 365:
case 2704:
case 3004:
case 2739:
case 633:
case 2449:
case 3735:
case 1843:
case 2545:
case 161:
case 2569:
case 1518:
case 2582:
case 3728:
case 1542:
case 3916:
case 577:
case 3668:
case 353:
case 1158:
case 329:
case 1787:
case 133:
case 1935:
case 1193:
case 4085:
case 2617:
case 1389:
case 2362:
case 3486:
case 2303:
case 3647:
case 451:
case 679:
case 1910:
case 3997:
case 1933:
case 587:
case 3304:
case 2597:
case 341:
case 570:
case 2353:
case 1870:
case 3472:
case 3462:
case 1432:
case 2286:
case 42:
case 2543:
case 4040:
case 554:
case 478:
case 1837:
case 1667:
case 655:
case 2076:
case 584:
case 944:
case 1352:
case 2128:
case 2803:
case 3917:
case 1656:
case 1336:
case 1545:
case 1057:
case 2102:
case 663:
case 1863:
case 3306:
case 3810:
case 2937:
case 3910:
case 3640:
case 3346:
case 2048:
case 3336:
case 3254:
case 632:
case 1903:
case 3390:
case 532:
case 1911:
case 3710:
case 188:
case 134:
case 3785:
case 1724:
case 96:
case 915:
case 863:
case 127:
case 3267:
case 265:
case 3962:
case 1619:
case 1241:
case 3096:
case 3884:
case 2750:
case 1524:
case 1842:
case 3255:
case 770:
case 432:
case 1087:
case 800:
case 2792:
case 573:
case 2099:
case 872:
case 952:
case 3501:
case 1330:
case 3376:
case 3754:
case 3836:
case 871:
case 3224:
case 2707:
case 3840:
case 2087:
case 1154:
case 424:
case 3201:
case 2422:
case 795:
case 110:
case 2368:
case 1517:
case 409:
case 392:
case 3423:
case 1395:
case 444:
case 3759:
case 3434:
case 3733:
case 2957:
case 2217:
case 942:
case 8:
case 2912:
case 3985:
case 4083:
case 988:
case 3959:
case 1988:
case 856:
case 9:
case 1029:
case 1658:
case 3447:
case 2820:
case 591:
case 913:
case 78:
case 1271:
case 3832:
case 3197:
case 2496:
case 4056:
case 3605:
case 3333:
case 3026:
case 2727:
case 3636:
case 2478:
case 1450:
case 4027:
case 3645:
case 2835:
case 3506:
case 2871:
case 1646:
case 3770:
case 192:
case 1607:
case 951:
case 4007:
case 635:
case 1239:
case 1423:
case 22:
case 3676:
case 293:
case 2633:
case 868:
case 1526:
case 2632:
case 978:
case 314:
case 4092:
case 3085:
case 701:
case 3475:
case 618:
case 1566:
case 2608:
case 3271:
case 574:
case 2655:
case 1627:
case 634:
case 316:
case 338:
case 2382:
case 1149:
case 2855:
case 408:
case 2653:
case 1468:
case 757:
case 2552:
case 3517:
case 1926:
case 3015:
case 2466:
case 1391:
case 530:
case 3860:
case 3581:
case 1943:
case 3108:
case 1918:
case 1113:
case 3490:
case 459:
case 14:
case 1624:
case 2075:
case 1280:
case 3540:
case 4087:
case 3927:
case 859:
case 3579:
case 2310:
case 777:
case 1854:
case 3081:
case 1548:
case 2578:
case 1859:
case 3716:
case 2297:
case 686:
case 3608:
case 1611:
case 3805:
case 170:
case 3945:
case 925:
case 3582:
case 3538:
case 1360:
case 2120:
case 1306:
case 266:
case 101:
case 3721:
case 2743:
case 1826:
case 2110:
case 1802:
case 3038:
case 2356:
case 3681:
case 2741:
case 2558:
case 3972:
case 2605:
case 54:
case 3457:
case 2433:
case 630:
case 3322:
case 576:
case 1422:
case 2580:
case 3344:
case 2383:
case 3150:
case 723:
case 2760:
case 157:
case 3087:
case 2222:
case 3669:
case 2717:
case 2261:
case 3377:
case 1200:
case 2831:
case 756:
case 1858:
case 376:
case 19:
case 2959:
case 1659:
case 1307:
case 888:
case 2834:
case 4078:
case 3672:
case 3847:
case 1152:
case 1318:
case 3310:
case 3653:
case 3981:
case 1965:
case 206:
case 682:
case 2620:
case 2589:
case 247:
case 2880:
case 1282:
case 1717:
case 2607:
case 693:
case 3473:
case 3284:
case 1997:
case 1664:
case 3207:
case 2397:
case 1326:
case 3006:
case 2721:
case 245:
case 2209:
case 1700:
case 1212:
case 2316:
case 472:
case 2749:
case 1401:
case 696:
case 2976:
case 644:
case 3674:
case 3356:
case 1814:
case 3488:
case 2660:
case 2527:
case 3615:
case 1035:
case 858:
case 911:
case 521:
case 1078:
case 2008:
case 2001:
case 3739:
case 4002:
case 302:
case 1790:
case 3082:
case 873:
case 2210:
case 1927:
case 2974:
case 1204:
case 2340:
case 3239:
case 2875:
case 2335:
case 540:
case 3878:
case 731:
case 1205:
case 3782:
case 1380:
case 3262:
case 348:
case 3527:
case 3483:
case 3103:
case 1589:
case 3274:
case 2196:
case 2894:
case 123:
case 3365:
case 36:
case 2590:
case 3617:
case 3288:
case 321:
case 201:
case 975:
case 4018:
case 2171:
case 559:
case 1613:
case 1409:
case 2993:
case 1192:
case 2940:
case 1888:
case 370:
case 613:
case 533:
case 604:
case 1558:
case 3549:
case 2269:
case 3763:
case 3394:
case 2740:
case 173:
case 973:
case 1582:
case 2183:
case 282:
case 2153:
case 2941:
case 337:
case 2773:
case 933:
case 4015:
case 3188:
case 3859:
case 3362:
case 1614:
case 3263:
case 2911:
case 3156:
case 1996:
case 433:
case 62:
case 1668:
case 1049:
case 1069:
case 2869:
case 3204:
case 1465:
case 3913:
case 2801:
case 1047:
case 4050:
case 2790:
case 104:
case 1836:
case 2918:
case 3328:
case 2080:
case 737:
case 3919:
case 1237:
case 1703:
case 1387:
case 1482:
case 295:
case 503:
case 2206:
case 884:
case 2808:
case 1424:
case 2685:
case 1821:
case 1712:
case 969:
case 2306:
case 1272:
case 1159:
case 3251:
case 3662:
case 1999:
case 825:
case 1118:
case 476:
case 680:
case 3051:
case 1340:
case 2781:
case 672:
case 3853:
case 695:
case 1020:
case 3471:
case 1948:
case 3885:
case 2136:
case 116:
case 2738:
case 3967:
case 1018:
case 2588:
case 1202:
case 1762:
case 1425:
case 137:
case 2371:
case 1827:
case 436:
case 7:
case 1254:
case 480:
case 3781:
case 2139:
case 355:
case 3738:
case 3046:
case 2953:
case 1037:
case 360:
case 3325:
case 867:
case 1364:
case 729:
case 227:
case 1925:
case 3977:
case 4013:
case 1434:
case 1508:
case 1609:
case 1828:
case 2177:
case 1612:
case 3037:
case 617:
case 3902:
case 473:
case 400:
case 1971:
case 1103:
case 1132:
case 2508:
case 1404:
case 2990:
case 1559:
case 1009:
case 2687:
case 1377:
case 58:
case 210:
case 1538:
case 2277:
case 580:
case 852:
case 717:
case 1697:
case 2686:
case 4095:
case 1960:
case 3694:
case 2232:
case 3504:
case 1134:
case 870:
case 1583:
case 919:
case 1413:
case 2294:
case 3903:
case 4039:
case 2822:
case 956:
case 3455:
case 1343:
case 3746:
case 3994:
case 1745:
case 3612:
case 3935:
case 788:
case 2548:
case 2700:
case 2859:
case 674:
case 3778:
case 3855:
case 3586:
case 2180:
case 1849:
case 4060:
case 929:
case 2524:
case 1543:
case 3425:
case 820:
case 1337:
case 3154:
case 3573:
case 2126:
case 3008:
case 3213:
case 596:
case 3632:
case 3283:
case 289:
case 149:
case 3080:
case 3388:
case 3709:
case 144:
case 3044:
case 3620:
case 2893:
case 3811:
case 3035:
case 3339:
case 343:
case 2138:
case 1089:
case 3928:
case 1244:
case 3934:
case 2866:
case 2421:
case 748:
case 760:
case 56:
case 2045:
case 2122:
case 2857:
case 1215:
case 146:
case 3567:
case 3165:
case 3602:
case 1102:
case 832:
case 496:
case 2502:
case 2370:
case 2747:
case 296:
case 1691:
case 3560:
case 3048:
case 1533:
case 541:
case 2649:
case 816:
case 3758:
case 1198:
case 599:
case 2505:
case 1284:
case 1061:
case 3943:
case 374:
case 2256:
case 1915:
case 1669:
case 3437:
case 3639:
case 1345:
case 2732:
case 926:
case 187:
case 920:
case 2879:
case 2474:
case 3544:
case 2774:
case 2931:
case 3569:
case 1777:
case 2955:
case 1707:
case 2535:
case 721:
case 307:
case 86:
case 1279:
case 3689:
case 3525:
case 3017:
case 2592:
case 2148:
case 1592:
case 3458:
case 26:
case 3658:
case 2669:
case 2838:
case 108:
case 2259:
case 3160:
case 3773:
case 251:
case 518:
case 2493:
case 3446:
case 3598:
case 1350:
case 2764:
case 3923:
case 2887:
case 2665:
case 3253:
case 312:
case 1016:
case 810:
case 3622:
case 2250:
case 3809:
case 824:
case 1287:
case 1067:
case 3585:
case 606:
case 3468:
case 31:
case 2290:
case 4061:
case 1616:
case 1632:
case 803:
case 2805:
case 2671:
case 1257:
case 792:
case 1288:
case 3950:
case 499:
case 3848:
case 2276:
case 793:
case 1505:
case 3780:
case 1643:
case 2555:
case 1357:
case 3952:
case 3131:
case 2575:
case 244:
case 2615:
case 3361:
case 1563:
case 3894:
case 818:
case 2420:
case 1652:
case 1073:
case 3066:
case 421:
case 3814:
case 2946:
case 3532:
case 1782:
case 839:
case 395:
case 1977:
case 3493:
case 1964:
case 76:
case 2960:
case 3720:
case 1477:
case 3378:
case 323:
case 3143:
case 2816:
case 1880:
case 2129:
case 563:
case 3572:
case 1947:
case 523:
case 2576:
case 943:
case 1696:
case 3065:
case 3896:
case 783:
case 880:
case 1770:
case 830:
case 2544:
case 2:
case 1767:
case 155:
case 2225:
case 3451:
case 2568:
case 549:
case 1267:
case 3798:
case 185:
case 481:
case 2539:
case 1086:
case 1301:
case 3711:
case 3149:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1723982402/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,];
var gg_b = "1723982402/";

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
