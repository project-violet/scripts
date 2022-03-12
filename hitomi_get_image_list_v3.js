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
case 1924:
case 2208:
case 3376:
case 923:
case 168:
case 2383:
case 3142:
case 1258:
case 2492:
case 2181:
case 286:
case 1821:
case 949:
case 3516:
case 8:
case 2210:
case 1615:
case 1556:
case 3284:
case 3640:
case 3367:
case 2257:
case 891:
case 2426:
case 1772:
case 2184:
case 1756:
case 3692:
case 2244:
case 3064:
case 3862:
case 623:
case 2262:
case 2379:
case 1305:
case 2330:
case 1983:
case 151:
case 3918:
case 3469:
case 3657:
case 2417:
case 3131:
case 665:
case 4087:
case 3224:
case 2740:
case 2342:
case 2803:
case 3689:
case 1881:
case 2026:
case 120:
case 1374:
case 1561:
case 1635:
case 2060:
case 180:
case 3414:
case 680:
case 118:
case 2833:
case 2690:
case 2960:
case 3298:
case 1422:
case 1174:
case 2517:
case 3223:
case 751:
case 2245:
case 307:
case 2768:
case 3694:
case 145:
case 3482:
case 3031:
case 846:
case 2360:
case 3412:
case 1056:
case 3882:
case 3536:
case 835:
case 3098:
case 3506:
case 1354:
case 3867:
case 1762:
case 1644:
case 2749:
case 258:
case 2594:
case 766:
case 1558:
case 2134:
case 589:
case 439:
case 2635:
case 757:
case 1467:
case 2253:
case 3688:
case 1880:
case 1124:
case 512:
case 1697:
case 2747:
case 4047:
case 2782:
case 2876:
case 2378:
case 3950:
case 3887:
case 1650:
case 886:
case 2538:
case 2294:
case 4057:
case 3292:
case 499:
case 3324:
case 371:
case 3236:
case 1307:
case 1631:
case 2471:
case 1280:
case 1851:
case 1169:
case 2173:
case 3771:
case 2530:
case 2886:
case 2658:
case 2745:
case 423:
case 3996:
case 577:
case 1965:
case 1613:
case 2686:
case 548:
case 294:
case 2201:
case 219:
case 2559:
case 3822:
case 358:
case 1476:
case 1627:
case 51:
case 1652:
case 1362:
case 3107:
case 3338:
case 2188:
case 2982:
case 2553:
case 3480:
case 2508:
case 411:
case 620:
case 916:
case 2565:
case 2823:
case 2892:
case 720:
case 1447:
case 2304:
case 2091:
case 2878:
case 4038:
case 3834:
case 3826:
case 1057:
case 345:
case 972:
case 3655:
case 3465:
case 1204:
case 3666:
case 2339:
case 862:
case 3979:
case 1035:
case 4048:
case 974:
case 2705:
case 1382:
case 1922:
case 1123:
case 3085:
case 2135:
case 3636:
case 2925:
case 3021:
case 2238:
case 1591:
case 2156:
case 2390:
case 4018:
case 3891:
case 1796:
case 415:
case 2377:
case 3541:
case 2490:
case 786:
case 633:
case 1879:
case 3500:
case 3552:
case 1412:
case 3876:
case 1597:
case 1031:
case 1043:
case 2329:
case 1648:
case 4014:
case 162:
case 2775:
case 3099:
case 3847:
case 938:
case 3028:
case 2047:
case 748:
case 2405:
case 386:
case 3256:
case 2171:
case 457:
case 1493:
case 4065:
case 1033:
case 1512:
case 2991:
case 3944:
case 2408:
case 2328:
case 3103:
case 3505:
case 3965:
case 3644:
case 2040:
case 634:
case 377:
case 1930:
case 2687:
case 2702:
case 3858:
case 2423:
case 1084:
case 1005:
case 3554:
case 2862:
case 2096:
case 2207:
case 1486:
case 2126:
case 1669:
case 2213:
case 1112:
case 3110:
case 144:
case 3757:
case 3456:
case 4072:
case 1883:
case 1297:
case 1536:
case 644:
case 1884:
case 1592:
case 3590:
case 2721:
case 450:
case 2571:
case 4021:
case 1927:
case 1237:
case 35:
case 1776:
case 2907:
case 3705:
case 1401:
case 1308:
case 1468:
case 3115:
case 2315:
case 2973:
case 4020:
case 1117:
case 3997:
case 3793:
case 2443:
case 3801:
case 534:
case 251:
case 770:
case 3192:
case 2500:
case 745:
case 451:
case 2578:
case 2547:
case 1483:
case 1911:
case 3899:
case 2528:
case 2172:
case 1248:
case 2771:
case 2807:
case 738:
case 2698:
case 3262:
case 3851:
case 2896:
case 3925:
case 1595:
case 2938:
case 1352:
case 3607:
case 2357:
case 2613:
case 2147:
case 3429:
case 3073:
case 2708:
case 2808:
case 2349:
case 2798:
case 1152:
case 3202:
case 989:
case 2476:
case 845:
case 2525:
case 3122:
case 1875:
case 2496:
case 1867:
case 2742:
case 55:
case 1963:
case 3435:
case 3424:
case 2415:
case 2069:
case 1348:
case 1100:
case 1718:
case 667:
case 3025:
case 1279:
case 2008:
case 981:
case 2051:
case 2756:
case 3838:
case 2879:
case 1876:
case 2062:
case 1000:
case 2211:
case 1798:
case 445:
case 189:
case 2121:
case 3389:
case 1409:
case 706:
case 1622:
case 1456:
case 489:
case 2501:
case 3542:
case 679:
case 396:
case 3308:
case 3434:
case 412:
case 3920:
case 2108:
case 3180:
case 917:
case 832:
case 388:
case 4006:
case 929:
case 653:
case 1196:
case 1834:
case 771:
case 3981:
case 351:
case 594:
case 1766:
case 2354:
case 814:
case 3770:
case 2942:
case 159:
case 2872:
case 443:
case 668:
case 4067:
case 1134:
case 3761:
case 66:
case 1754:
case 1323:
case 2419:
case 344:
case 378:
case 3571:
case 3560:
case 3076:
case 3557:
case 1216:
case 2441:
case 963:
case 4005:
case 3569:
case 3449:
case 3936:
case 2601:
case 1717:
case 0:
case 2760:
case 1063:
case 2612:
case 4075:
case 56:
case 2395:
case 1651:
case 2531:
case 3109:
case 2522:
case 943:
case 282:
case 3598:
case 3040:
case 2466:
case 3421:
case 569:
case 1580:
case 473:
case 844:
case 177:
case 3111:
case 422:
case 4076:
case 645:
case 2332:
case 865:
case 2009:
case 69:
case 582:
case 1529:
case 3802:
case 3784:
case 2693:
case 3361:
case 2483:
case 3613:
case 2301:
case 2622:
case 4040:
case 2400:
case 678:
case 617:
case 2975:
case 2992:
case 4083:
case 1866:
case 24:
case 2813:
case 1457:
case 3976:
case 2535:
case 1454:
case 2144:
case 565:
case 200:
case 1683:
case 1794:
case 195:
case 1235:
case 407:
case 1778:
case 2570:
case 3800:
case 518:
case 524:
case 1533:
case 1450:
case 2999:
case 2402:
case 3083:
case 4095:
case 40:
case 1497:
case 3346:
case 2623:
case 3078:
case 3328:
case 1231:
case 3854:
case 575:
case 1907:
case 205:
case 2503:
case 1852:
case 1233:
case 3261:
case 1915:
case 3989:
case 1692:
case 1681:
case 2927:
case 171:
case 3419:
case 2292:
case 2965:
case 1098:
case 1506:
case 1418:
case 2772:
case 4010:
case 324:
case 496:
case 2477:
case 2902:
case 2922:
case 1267:
case 871:
case 2542:
case 677:
case 671:
case 883:
case 53:
case 628:
case 1041:
case 1206:
case 2937:
case 3749:
case 4011:
case 3872:
case 2827:
case 3411:
case 3871:
case 767:
case 1554:
case 1732:
case 1106:
case 3798:
case 1466:
case 599:
case 3444:
case 490:
case 789:
case 3194:
case 3651:
case 1488:
case 1001:
case 2098:
case 206:
case 1013:
case 373:
case 298:
case 2459:
case 1465:
case 1170:
case 3160:
case 1935:
case 1151:
case 2296:
case 584:
case 2551:
case 3634:
case 2178:
case 627:
case 761:
case 332:
case 397:
case 3849:
case 2072:
case 334:
case 2663:
case 87:
case 3185:
case 707:
case 2818:
case 3026:
case 1662:
case 1477:
case 3151:
case 2860:
case 588:
case 7:
case 1703:
case 2655:
case 1728:
case 142:
case 4088:
case 265:
case 855:
case 3326:
case 3683:
case 3656:
case 1845:
case 3775:
case 1749:
case 3508:
case 2533:
case 784:
case 1892:
case 625:
case 1839:
case 969:
case 2543:
case 2852:
case 2577:
case 3553:
case 3398:
case 2521:
case 2523:
case 3104:
case 2434:
case 1605:
case 1901:
case 73:
case 1994:
case 3583:
case 2382:
case 1495:
case 2038:
case 93:
case 3114:
case 3171:
case 2802:
case 129:
case 9:
case 1968:
case 3391:
case 796:
case 529:
case 3811:
case 4036:
case 2921:
case 3022:
case 2962:
case 2670:
case 1827:
case 216:
case 155:
case 3956:
case 1260:
case 125:
case 2894:
case 2258:
case 1451:
case 3402:
case 3088:
case 2752:
case 3333:
case 1816:
case 1205:
case 1642:
case 2041:
case 1715:
case 3729:
case 1729:
case 2276:
case 2495:
case 1268:
case 3462:
case 1565:
case 3916:
case 3347:
case 2588:
case 413:
case 1491:
case 1472:
case 4066:
case 3713:
case 3675:
case 2783:
case 2411:
case 1403:
case 954:
case 556:
case 704:
case 287:
case 1855:
case 2287:
case 222:
case 713:
case 3635:
case 3245:
case 3312:
case 690:
case 2282:
case 317:
case 799:
case 2265:
case 13:
case 1146:
case 3238:
case 2955:
case 4079:
case 2728:
case 3645:
case 1212:
case 1658:
case 3019:
case 2116:
case 808:
case 3709:
case 2165:
case 1578:
case 1969:
case 3842:
case 2243:
case 3696:
case 2174:
case 649:
case 3483:
case 3044:
case 2987:
case 1726:
case 3302:
case 4094:
case 3628:
case 339:
case 535:
case 2110:
case 1120:
case 1024:
case 743:
case 2825:
case 952:
case 213:
case 3661:
case 3533:
case 2094:
case 1747:
case 197:
case 148:
case 899:
case 3087:
case 4061:
case 694:
case 2432:
case 2934:
case 434:
case 581:
case 2274:
case 1646:
case 2685:
case 3148:
case 2081:
case 2250:
case 3464:
case 734:
case 3830:
case 3230:
case 551:
case 3209:
case 638:
case 3731:
case 909:
case 80:
case 3723:
case 2071:
case 3479:
case 2113:
case 1405:
case 2275:
case 828:
case 311:
case 3357:
case 2644:
case 3127:
case 2729:
case 875:
case 2838:
case 773:
case 541:
case 1861:
case 3596:
case 1517:
case 2138:
case 2806:
case 3309:
case 4064:
case 4012:
case 3768:
case 1492:
case 1202:
case 663:
case 642:
case 2163:
case 1208:
case 1291:
case 3365:
case 1957:
case 892:
case 94:
case 684:
case 3208:
case 382:
case 3155:
case 1870:
case 896:
case 3139:
case 3650:
case 3257:
case 2944:
case 2948:
case 3665:
case 3949:
case 4:
case 2255:
case 318:
case 2829:
case 961:
case 3716:
case 447:
case 3329:
case 1887:
case 2579:
case 2323:
case 2912:
case 4086:
case 531:
case 2757:
case 3034:
case 3135:
case 3001:
case 2915:
case 2448:
case 3969:
case 2853:
case 3522:
case 1097:
case 1843:
case 742:
case 2677:
case 2743:
case 1126:
case 1130:
case 904:
case 1779:
case 2627:
case 1399:
case 2065:
case 522:
case 507:
case 2844:
case 3952:
case 228:
case 3442:
case 2197:
case 2964:
case 3360:
case 3592:
case 3318:
case 4078:
case 1096:
case 48:
case 3388:
case 932:
case 3550:
case 3422:
case 1192:
case 3252:
case 532:
case 4059:
case 619:
case 152:
case 59:
case 760:
case 2139:
case 1353:
case 136:
case 1587:
case 3864:
case 2582:
case 3038:
case 1677:
case 4024:
case 3217:
case 2569:
case 2412:
case 2348:
case 3648:
case 2242:
case 3296:
case 1498:
case 1128:
case 718:
case 362:
case 81:
case 130:
case 1173:
case 550:
case 3210:
case 3158:
case 3840:
case 3742:
case 701:
case 1349:
case 2895:
case 2457:
case 127:
case 867:
case 3699:
case 328:
case 2106:
case 43:
case 5:
case 102:
case 2374:
case 2650:
case 183:
case 3013:
case 2316:
case 3514:
case 3294:
case 1548:
case 1473:
case 1626:
case 2130:
case 2273:
case 2037:
case 3935:
case 428:
case 31:
case 79:
case 608:
case 1333:
case 607:
case 3455:
case 1496:
case 1891:
case 3817:
case 1685:
case 1932:
case 1797:
case 758:
case 97:
case 338:
case 2295:
case 2631:
case 2625:
case 3687:
case 67:
case 3546:
case 369:
case 3964:
case 1817:
case 479:
case 3187:
case 1264:
case 921:
case 2993:
case 3951:
case 882:
case 2689:
case 4063:
case 2237:
case 1223:
case 4044:
case 727:
case 3496:
case 1989:
case 2996:
case 3351:
case 238:
case 2073:
case 1654:
case 501:
case 521:
case 2607:
case 525:
case 768:
case 3875:
case 2185:
case 1773:
case 1549:
case 2946:
case 3423:
case 1694:
case 579:
case 190:
case 3695:
case 2169:
case 918:
case 2221:
case 3359:
case 2943:
case 1440:
case 691:
case 1825:
case 2164:
case 827:
case 2984:
case 3921:
case 968:
case 3095:
case 1287:
case 503:
case 1594:
case 2810:
case 381:
case 2389:
case 3646:
case 3702:
case 907:
case 2467:
case 1912:
case 2368:
case 3203:
case 2024:
case 270:
case 2097:
case 2546:
case 1857:
case 3460:
case 3133:
case 3621:
case 2141:
case 1702:
case 2022:
case 229:
case 2804:
case 1504:
case 3425:
case 2774:
case 1385:
case 2260:
case 622:
case 1085:
case 2392:
case 3174:
case 1859:
case 3825:
case 2652:
case 1090:
case 2416:
case 1406:
case 1976:
case 111:
case 1165:
case 1299:
case 3626:
case 1802:
case 88:
case 3451:
case 3754:
case 2455:
case 1760:
case 1671:
case 3679:
case 1393:
case 3880:
case 3652:
case 2363:
case 1226:
case 2361:
case 1068:
case 2619:
case 3932:
case 3741:
case 3466:
case 3562:
case 2494:
case 1878:
case 703:
case 612:
case 3356:
case 2628:
case 3912:
case 2046:
case 3191:
case 3715:
case 247:
case 1059:
case 100:
case 1695:
case 1475:
case 1322:
case 1764:
case 3832:
case 616:
case 2303:
case 3042:
case 2111:
case 888:
case 1505:
case 2012:
case 3963:
case 2326:
case 1836:
case 343:
case 1388:
case 117:
case 3310:
case 170:
case 3315:
case 3487:
case 2297:
case 1949:
case 1530:
case 852:
case 1341:
case 1743:
case 2603:
case 2781:
case 2288:
case 505:
case 2630:
case 526:
case 1076:
case 1699:
case 4032:
case 3263:
case 544:
case 1339:
case 3279:
case 271:
case 660:
case 3027:
case 948:
case 3900:
case 446:
case 2220:
case 1547:
case 1190:
case 3534:
case 1415:
case 2018:
case 3676:
case 1438:
case 978:
case 3226:
case 3495:
case 2308:
case 2075:
case 26:
case 1078:
case 3711:
case 2298:
case 3343:
case 2511:
case 571:
case 3746:
case 2023:
case 2639:
case 2866:
case 3909:
case 1262:
case 2249:
case 3767:
case 2788:
case 1087:
case 3445:
case 2299:
case 711:
case 962:
case 939:
case 1507:
case 3307:
case 2497:
case 1416:
case 1593:
case 1095:
case 2562:
case 2832:
case 1782:
case 1531:
case 1380:
case 260:
case 3011:
case 2193:
case 2848:
case 3024:
case 750:
case 2913:
case 3094:
case 893:
case 70:
case 3942:
case 105:
case 3831:
case 3439:
case 2839:
case 1904:
case 3823:
case 1027:
case 3163:
case 3206:
case 2226:
case 4008:
case 1423:
case 1971:
case 3392:
case 3118:
case 1789:
case 754:
case 1608:
case 336:
case 3566:
case 3759:
case 3962:
case 2451:
case 2410:
case 6:
case 3381:
case 95:
case 2589:
case 2776:
case 3068:
case 3121:
case 4042:
case 1055:
case 2856:
case 3321:
case 931:
case 3725:
case 36:
case 1484:
case 1543:
case 2918:
case 2137:
case 2230:
case 2101:
case 3342:
case 363:
case 1138:
case 3719:
case 3092:
case 759:
case 3037:
case 2545:
case 275:
case 2744:
case 3548:
case 2224:
case 777:
case 3601:
case 1985:
case 1621:
case 1243:
case 950:
case 674:
case 1799:
case 346:
case 895:
case 2233:
case 259:
case 1637:
case 1542:
case 3938:
case 903:
case 2394:
case 1803:
case 3276:
case 2869:
case 1083:
case 131:
case 2217:
case 2502:
case 3056:
case 2581:
case 1429:
case 1618:
case 3975:
case 1696:
case 1102:
case 1964:
case 580:
case 2974:
case 3734:
case 2367:
case 2267:
case 2828:
case 1596:
case 2821:
case 1727:
case 1404:
case 424:
case 1463:
case 352:
case 4022:
case 2790:
case 787:
case 2324:
case 1411:
case 1921:
case 2811:
case 1359:
case 227:
case 2846:
case 452:
case 2665:
case 1187:
case 367:
case 121:
case 2429:
case 309:
case 3501:
case 357:
case 2070:
case 1387:
case 3407:
case 1633:
case 467:
case 889:
case 1030:
case 3427:
case 3301:
case 365:
case 3081:
case 3806:
case 2437:
case 1555:
case 3331:
case 2445:
case 3886:
case 681:
case 873:
case 2977:
case 2475:
case 1315:
case 1003:
case 1893:
case 3035:
case 124:
case 508:
case 3833:
case 1700:
case 323:
case 585:
case 2643:
case 2279:
case 157:
case 1853:
case 1257:
case 3595:
case 4039:
case 1199:
case 1197:
case 3612:
case 2678:
case 3364:
case 3393:
case 4033:
case 2799:
case 3149:
case 3674:
case 3316:
case 1632:
case 1823:
case 3888:
case 2090:
case 3137:
case 3005:
case 268:
case 3718:
case 2750:
case 1144:
case 1073:
case 3268:
case 2050:
case 2734:
case 1818:
case 2053:
case 101:
case 458:
case 935:
case 167:
case 2118:
case 2651:
case 3901:
case 2510:
case 1998:
case 3820:
case 3403:
case 1763:
case 3009:
case 3889:
case 2549:
case 1303:
case 2680:
case 292:
case 404:
case 957:
case 3380:
case 1390:
case 2739:
case 1787:
case 2812:
case 3902:
case 463:
case 3362:
case 3730:
case 3289:
case 3220:
case 2336:
case 2387:
case 2550:
case 1376:
case 3691:
case 1427:
case 2247:
case 848:
case 2124:
case 2317:
case 3000:
case 3117:
case 3531:
case 3150:
case 3873:
case 1135:
case 2602:
case 2430:
case 429:
case 2713:
case 1222:
case 214:
case 2529:
case 1347:
case 596:
case 1009:
case 3559:
case 402:
case 4090:
case 2280:
case 3066:
case 2442:
case 314:
case 2209:
case 2620:
case 1164:
case 568:
case 800:
case 1831:
case 1753:
case 2327:
case 1928:
case 557:
case 1552:
case 1910:
case 2398:
case 2235:
case 869:
case 3978:
case 3836:
case 3568:
case 1125:
case 3052:
case 3745:
case 2049:
case 1938:
case 1464:
case 1826:
case 1959:
case 3915:
case 220:
case 2365:
case 3972:
case 1310:
case 1437:
case 1941:
case 2014:
case 3409:
case 3721:
case 2474:
case 2534:
case 3837:
case 1131:
case 337:
case 3278:
case 985:
case 1734:
case 2637:
case 1295:
case 1254:
case 2149:
case 841:
case 225:
case 1459:
case 2335:
case 4045:
case 230:
case 3605:
case 1790:
case 2514:
case 3878:
case 312:
case 1999:
case 546:
case 1850:
case 2722:
case 3844:
case 279:
case 1572:
case 2498:
case 3420:
case 1220:
case 2380:
case 1153:
case 1898:
case 2926:
case 762:
case 2067:
case 4015:
case 1940:
case 630:
case 2520:
case 27:
case 1625:
case 1082:
case 613:
case 3311:
case 859:
case 1154:
case 3492:
case 2552:
case 2167:
case 2518:
case 1872:
case 54:
case 2440:
case 3157:
case 1351:
case 3030:
case 3443:
case 3436:
case 3764:
case 3175:
case 2682:
case 1725:
case 2662:
case 1150:
case 1017:
case 203:
case 3829:
case 1751:
case 461:
case 3246:
case 643:
case 1395:
case 3814:
case 2087:
case 3178:
case 1215:
case 1104:
case 2891:
case 2469:
case 2610:
case 1829:
case 335:
case 1919:
case 3517:
case 655:
case 3684:
case 1708:
case 1430:
case 3249:
case 1720:
case 196:
case 1568:
case 2688:
case 2321:
case 3399:
case 3958:
case 2779:
case 498:
case 1813:
case 2263:
case 60:
case 782:
case 1383:
case 937:
case 2063:
case 3350:
case 3337:
case 1224:
case 1436:
case 1523:
case 1143:
case 1950:
case 366:
case 1577:
case 1598:
case 322:
case 3781:
case 2572:
case 2656:
case 3379:
case 2195:
case 2157:
case 2229:
case 3845:
case 2805:
case 1758:
case 959:
case 697:
case 280:
case 1882:
case 1246:
case 564:
case 816:
case 986:
case 3446:
case 1002:
case 3314:
case 2234:
case 12:
case 497:
case 1905:
case 1738:
case 438:
case 176:
case 1944:
case 879:
case 3993:
case 297:
case 3457:
case 2030:
case 3960:
case 2428:
case 2029:
case 3233:
case 234:
case 1088:
case 2509:
case 1894:
case 1210:
case 3773:
case 72:
case 289:
case 3998:
case 325:
case 578:
case 2532:
case 3999:
case 68:
case 860:
case 1611:
case 2683:
case 2381:
case 736:
case 482:
case 636:
case 3075:
case 3218:
case 2196:
case 764:
case 2003:
case 3693:
case 811:
case 3205:
case 856:
case 887:
case 4091:
case 2614:
case 2007:
case 3395:
case 1712:
case 601:
case 2733:
case 204:
case 717:
case 108:
case 405:
case 3051:
case 635:
case 2089:
case 1396:
case 2953:
case 1822:
case 2945:
case 797:
case 185:
case 181:
case 1735:
case 587:
case 2659:
case 1721:
case 3029:
case 2168:
case 1107:
case 2901:
case 3807:
case 3580:
case 3523:
case 2609:
case 3739:
case 1801:
case 84:
case 3545:
case 3712:
case 2586:
case 611:
case 1479:
case 3493:
case 2845:
case 3355:
case 3204:
case 756:
case 3369:
case 676:
case 2077:
case 1837:
case 3049:
case 3497:
case 2994:
case 3803:
case 2989:
case 662:
case 2306:
case 1923:
case 3618:
case 2908:
case 539:
case 3579:
case 3166:
case 3219:
case 1956:
case 2931:
case 2890:
case 2899:
case 340:
case 390:
case 2697:
case 1638:
case 199:
case 3577:
case 3432:
case 3941:
case 3584:
case 2681:
case 3744:
case 1719:
case 2676:
case 2424:
case 469:
case 1414:
case 1007:
case 103:
case 1474:
case 746:
case 1181:
case 615:
case 1800:
case 3089:
case 468:
case 2841:
case 3606:
case 1981:
case 2337:
case 1978:
case 1288:
case 3199:
case 3906:
case 3417:
case 2917:
case 274:
case 1234:
case 1410:
case 3251:
case 3988:
case 1917:
case 96:
case 2512:
case 2391:
case 392:
case 1840:
case 3558:
case 3222:
case 409:
case 14:
case 3096:
case 940:
case 783:
case 2736:
case 3197:
case 291:
case 11:
case 3843:
case 820:
case 1370:
case 1364:
case 192:
case 3593:
case 1250:
case 146:
case 253:
case 1069:
case 91:
case 1047:
case 1933:
case 4050:
case 1520:
case 493:
case 2397:
case 3306:
case 246:
case 3701:
case 572:
case 3968:
case 936:
case 3277:
case 2958:
case 2219:
case 2115:
case 2646:
case 927:
case 3860:
case 1886:
case 1089:
case 1482:
case 2725:
case 993:
case 3144:
case 1462:
case 3181:
case 3865:
case 2186:
case 1193:
case 528:
case 801:
case 109:
case 2611:
case 2660:
case 2272:
case 2433:
case 3839:
case 1053:
case 261:
case 3020:
case 4054:
case 3317:
case 1008:
case 1599:
case 1424:
case 3325:
case 2634:
case 3604:
case 1147:
case 2180:
case 3677:
case 3248:
case 2835:
case 2526:
case 455:
case 2102:
case 1589:
case 2983:
case 3852:
case 3614:
case 1908:
case 1571:
case 960:
case 2684:
case 2291:
case 1973:
case 817:
case 1765:
case 2187:
case 3260:
case 295:
case 2170:
case 857:
case 331:
case 2189:
case 2971:
case 3012:
case 2928:
case 774:
case 2352:
case 3625:
case 2714:
case 737:
case 3779:
case 3340:
case 1155:
case 3182:
case 1114:
case 3123:
case 1873:
case 1372:
case 1503:
case 2796:
case 3510:
case 2763:
case 3680:
case 1441:
case 1480:
case 3461:
case 752:
case 1612:
case 657:
case 1513:
case 1705:
case 2236:
case 217:
case 2145:
case 1535:
case 3050:
case 3897:
case 2307:
case 1906:
case 500:
case 2092:
case 1118:
case 3529:
case 277:
case 1616:
case 1178:
case 2887:
case 702:
case 1397:
case 3586:
case 3431:
case 194:
case 19:
case 2055:
case 1021:
case 2001:
case 2883:
case 1099:
case 2793:
case 850:
case 708:
case 2194:
case 1664:
case 1990:
case 2597:
case 1601:
case 1054:
case 2425:
case 3344:
case 2773:
case 2015:
case 182:
case 1833:
case 1023:
case 2254:
case 1037:
case 408:
case 2642:
case 2310:
case 2200:
case 3330:
case 1445:
case 504:
case 3016:
case 65:
case 1298:
case 2911:
case 2664:
case 2753:
case 2107:
case 1830:
case 1629:
case 1446:
case 2088:
case 3186:
case 3272:
case 2632:
case 3254:
case 2277:
case 1460:
case 3868:
case 2701:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1647072001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,];
var gg_b = "1647072001/";

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
