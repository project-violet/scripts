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
case 992:
case 2819:
case 2066:
case 1673:
case 995:
case 3900:
case 1344:
case 4038:
case 3789:
case 3726:
case 809:
case 714:
case 3951:
case 4010:
case 1183:
case 2858:
case 3588:
case 3243:
case 2828:
case 1917:
case 3921:
case 2712:
case 24:
case 2325:
case 2249:
case 194:
case 3465:
case 3332:
case 3506:
case 2896:
case 3910:
case 3362:
case 3435:
case 3743:
case 2390:
case 3696:
case 3882:
case 2202:
case 2381:
case 883:
case 2861:
case 2842:
case 2783:
case 3938:
case 3256:
case 3813:
case 838:
case 2831:
case 3798:
case 3631:
case 1879:
case 2970:
case 301:
case 2198:
case 335:
case 256:
case 3917:
case 1658:
case 1921:
case 3634:
case 1243:
case 728:
case 1803:
case 509:
case 3075:
case 243:
case 2873:
case 760:
case 490:
case 1516:
case 1416:
case 2143:
case 3112:
case 4007:
case 1985:
case 4024:
case 759:
case 1900:
case 3344:
case 2087:
case 1968:
case 690:
case 583:
case 3879:
case 2476:
case 1289:
case 3907:
case 298:
case 1631:
case 1226:
case 2576:
case 1256:
case 1813:
case 1938:
case 1332:
case 491:
case 604:
case 2189:
case 2126:
case 1406:
case 1565:
case 3272:
case 1599:
case 3102:
case 1743:
case 1535:
case 3047:
case 778:
case 1696:
case 4017:
case 1341:
case 1499:
case 1390:
case 2047:
case 1422:
case 1896:
case 107:
case 1682:
case 1522:
case 1452:
case 294:
case 1249:
case 1355:
case 15:
case 781:
case 14:
case 439:
case 3189:
case 3126:
case 2907:
case 398:
case 1613:
case 2954:
case 608:
case 200:
case 1842:
case 1783:
case 566:
case 1172:
case 1381:
case 2112:
case 408:
case 86:
case 2344:
case 1448:
case 1283:
case 3873:
case 1005:
case 1819:
case 2673:
case 595:
case 2917:
case 592:
case 1858:
case 2075:
case 2183:
case 3864:
case 235:
case 1593:
case 1945:
case 1212:
case 232:
case 2664:
case 1493:
case 356:
case 3384:
case 866:
case 2256:
case 2938:
case 198:
case 2631:
case 1476:
case 2226:
case 3613:
case 3381:
case 2642:
case 3861:
case 3783:
case 986:
case 2435:
case 3522:
case 3682:
case 2910:
case 3896:
case 697:
case 938:
case 3390:
case 3552:
case 2882:
case 1189:
case 3809:
case 3977:
case 3712:
case 2565:
case 35:
case 2465:
case 1156:
case 3249:
case 1397:
case 497:
case 2628:
case 143:
case 1834:
case 153:
case 2921:
case 3603:
case 2488:
case 2243:
case 3091:
case 3493:
case 4077:
case 1384:
case 895:
case 146:
case 2298:
case 2756:
case 2789:
case 3036:
case 2726:
case 3548:
case 3080:
case 3702:
case 3819:
case 1873:
case 2516:
case 3283:
case 3448:
case 2279:
case 197:
case 443:
case 453:
case 1560:
case 1586:
case 1529:
case 1689:
case 1231:
case 1530:
case 2196:
case 1077:
case 1242:
case 1261:
case 1802:
case 204:
case 3182:
case 446:
case 2872:
case 2314:
case 813:
case 2054:
case 3994:
case 308:
case 2024:
case 1296:
case 2131:
case 816:
case 721:
case 1179:
case 1418:
case 1228:
case 2119:
case 745:
case 1258:
case 768:
case 3234:
case 1966:
case 1980:
case 1709:
case 1812:
case 1905:
case 4087:
case 1698:
case 2327:
case 502:
case 2975:
case 3467:
case 531:
case 1742:
case 1883:
case 339:
case 2158:
case 656:
case 291:
case 3070:
case 3296:
case 4036:
case 1734:
case 1994:
case 926:
case 516:
case 3728:
case 2038:
case 2649:
case 3418:
case 2546:
case 2068:
case 3209:
case 4005:
case 4066:
case 4080:
case 2446:
case 830:
case 923:
case 1113:
case 607:
case 3626:
case 4091:
case 3689:
case 3529:
case 2320:
case 2492:
case 3560:
case 3459:
case 3559:
case 3429:
case 2010:
case 397:
case 1371:
case 3719:
case 3430:
case 3915:
case 3802:
case 3261:
case 2395:
case 1773:
case 3530:
case 3077:
case 2713:
case 2164:
case 3991:
case 1467:
case 2898:
case 407:
case 1567:
case 2051:
case 2311:
case 3333:
case 2523:
case 2683:
case 1537:
case 3045:
case 3363:
case 3408:
case 3742:
case 139:
case 2553:
case 3883:
case 44:
case 1273:
case 1437:
case 805:
case 2085:
case 3643:
case 976:
case 3228:
case 3905:
case 3812:
case 1264:
case 81:
case 999:
case 3980:
case 3966:
case 905:
case 2709:
case 2812:
case 2905:
case 2966:
case 902:
case 2258:
case 2796:
case 2228:
case 1478:
case 3843:
case 3683:
case 1128:
case 91:
case 2761:
case 2742:
case 2508:
case 1158:
case 2883:
case 3553:
case 2991:
case 1357:
case 3898:
case 3311:
case 2698:
case 1779:
case 2333:
case 1304:
case 3940:
case 1196:
case 3395:
case 3339:
case 2530:
case 537:
case 3369:
case 2560:
case 2459:
case 3213:
case 2231:
case 711:
case 297:
case 2486:
case 1279:
case 2559:
case 2656:
case 3826:
case 2209:
case 3649:
case 2179:
case 2518:
case 2849:
case 3703:
case 2728:
case 1872:
case 3038:
case 2103:
case 1553:
case 635:
case 3158:
case 1423:
case 1134:
case 3128:
case 632:
case 1683:
case 1523:
case 494:
case 1453:
case 576:
case 1940:
case 3304:
case 3975:
case 1051:
case 1311:
case 573:
case 1713:
case 4047:
case 3357:
case 2264:
case 733:
case 1843:
case 1000:
case 1782:
case 3478:
case 3578:
case 600:
case 1446:
case 2113:
case 1649:
case 1546:
case 3054:
case 1282:
case 3314:
case 3872:
case 3024:
case 432:
case 1339:
case 435:
case 2182:
case 1889:
case 1592:
case 3109:
case 3279:
case 4075:
case 1010:
case 1213:
case 913:
case 1492:
case 837:
case 87:
case 1369:
case 3191:
case 1645:
case 3670:
case 2376:
case 558:
case 562:
case 3817:
case 2934:
case 565:
case 2617:
case 1903:
case 1851:
case 1399:
case 674:
case 1441:
case 1462:
case 480:
case 2973:
case 1541:
case 1562:
case 4079:
case 89:
case 1868:
case 2497:
case 371:
case 596:
case 1388:
case 579:
case 2484:
case 3807:
case 1740:
case 355:
case 3775:
case 3824:
case 2654:
case 342:
case 593:
case 3072:
case 352:
case 1838:
case 1913:
case 2624:
case 3247:
case 1677:
case 3444:
case 320:
case 2287:
case 3544:
case 1316:
case 3115:
case 2294:
case 1026:
case 3562:
case 3541:
case 2715:
case 2322:
case 2919:
case 829:
case 59:
case 2012:
case 3441:
case 2352:
case 3043:
case 1180:
case 2525:
case 1747:
case 1166:
case 2600:
case 23:
case 3885:
case 3532:
case 3306:
case 1105:
case 3240:
case 170:
case 3645:
case 2083:
case 862:
case 2205:
case 848:
case 2845:
case 2266:
case 865:
case 2280:
case 1191:
case 2236:
case 944:
case 2621:
case 2581:
case 1817:
case 2928:
case 3098:
case 1544:
case 120:
case 2877:
case 2766:
case 184:
case 1444:
case 2348:
case 4003:
case 3982:
case 2610:
case 3316:
case 618:
case 171:
case 879:
case 2668:
case 3194:
case 2942:
case 145:
case 2791:
case 168:
case 3913:
case 227:
case 1979:
case 210:
case 2393:
case 155:
case 1807:
case 1775:
case 3740:
case 3931:
case 2913:
case 1624:
case 1584:
case 2187:
case 3393:
case 2740:
case 188:
case 3668:
case 1597:
case 3996:
case 2810:
case 3348:
case 614:
case 3736:
case 996:
case 2026:
case 2982:
case 2316:
case 687:
case 3705:
case 3909:
case 3780:
case 979:
case 3147:
case 1934:
case 2098:
case 2821:
case 414:
case 3928:
case 3205:
case 4009:
case 885:
case 519:
case 1140:
case 1376:
case 929:
case 3280:
case 1964:
case 1870:
case 854:
case 2432:
case 2043:
case 3291:
case 3425:
case 3600:
case 3555:
case 2885:
case 377:
case 2532:
case 965:
case 2541:
case 2562:
case 2335:
case 2462:
case 4042:
case 3012:
case 1348:
case 3294:
case 1996:
case 4064:
case 1766:
case 284:
case 2444:
case 3287:
case 220:
case 2544:
case 1877:
case 2979:
case 127:
case 110:
case 1638:
case 255:
case 659:
case 1393:
case 336:
case 245:
case 649:
case 3584:
case 3624:
case 2247:
case 268:
case 333:
case 1961:
case 1942:
case 3497:
case 3597:
case 1049:
case 1555:
case 449:
case 13:
case 2180:
case 2747:
case 1525:
case 1291:
case 2166:
case 1455:
case 1012:
case 554:
case 1715:
case 460:
case 1490:
case 1322:
case 99:
case 1928:
case 2817:
case 678:
case 1581:
case 3794:
case 3934:
case 1266:
case 1280:
case 3787:
case 270:
case 3376:
case 1175:
case 3:
case 1894:
case 2323:
case 851:
case 159:
case 1887:
case 3061:
case 218:
case 3277:
case 3745:
case 1770:
case 1138:
case 872:
case 3949:
case 1367:
case 3154:
case 267:
case 2700:
case 3574:
case 2238:
case 387:
case 2926:
case 128:
case 2989:
case 3902:
case 2615:
case 2268:
case 3009:
case 2200:
case 3640:
case 3028:
case 2170:
case 850:
case 2285:
case 611:
case 3318:
case 1034:
case 178:
case 1121:
case 3117:
case 2768:
case 1571:
case 410:
case 2710:
case 2221:
case 63:
case 2539:
case 3330:
case 2569:
case 2450:
case 1073:
case 3777:
case 3805:
case 2520:
case 2420:
case 3019:
case 3866:
case 1270:
case 4049:
case 2550:
case 3359:
case 2605:
case 989:
case 822:
case 1100:
case 2207:
case 114:
case 2254:
case 1009:
case 3110:
case 2378:
case 732:
case 359:
case 1031:
case 2972:
case 2079:
case 349:
case 1563:
case 2504:
case 2457:
case 2527:
case 2687:
case 633:
case 3138:
case 1533:
case 1042:
case 2557:
case 2404:
case 1107:
case 525:
case 1330:
case 1836:
case 915:
case 274:
case 700:
case 3100:
case 3270:
case 1245:
case 1866:
case 3185:
case 1386:
case 1777:
case 1912:
case 433:
case 2875:
case 569:
case 2145:
case 1891:
case 2754:
case 540:
case 1983:
case 361:
case 2414:
case 420:
case 1501:
case 1768:
case 261:
case 484:
case 2121:
case 3724:
case 589:
case 278:
case 3707:
case 1840:
case 1998:
case 1200:
case 1738:
case 2270:
case 471:
case 374:
case 1550:
case 1392:
case 1666:
case 1569:
case 621:
case 1539:
case 1595:
case 3217:
case 468:
case 452:
case 1943:
case 442:
case 2571:
case 455:
case 1710:
case 1511:
case 3687:
case 3527:
case 324:
case 421:
case 506:
case 3557:
case 118:
case 3427:
case 671:
case 1411:
case 1721:
case 3972:
case 1353:
case 259:
case 645:
case 2894:
case 668:
case 652:
case 1323:
case 503:
case 1615:
case 684:
case 1268:
case 620:
case 617:
case 1785:
case 2647:
case 3177:
case 743:
case 1956:
case 2386:
case 969:
case 2912:
case 2329:
case 3520:
case 3666:
case 2360:
case 3550:
case 2359:
case 174:
case 3469:
case 3420:
case 2866:
case 2019:
case 547:
case 3439:
case 3495:
case 2836:
case 3251:
case 950:
case 3943:
case 3221:
case 3595:
case 3539:
case 3636:
case 181:
case 922:
case 3401:
case 3768:
case 1514:
case 512:
case 2028:
case 1145:
case 3346:
case 3200:
case 1875:
case 3691:
case 1724:
case 4089:
case 2815:
case 3615:
case 2574:
case 951:
case 3238:
case 3956:
case 367:
case 1847:
case 3082:
case 1207:
case 3989:
case 3785:
case 941:
case 2474:
case 1177:
case 2277:
case 180:
case 2042:
case 2107:
case 318:
case 1504:
case 124:
case 803:
case 1457:
case 3511:
case 2745:
case 806:
case 1079:
case 2563:
case 2463:
case 3353:
case 4043:
case 3013:
case 3721:
case 1972:
case 2031:
case 2167:
case 2338:
case 3893:
case 138:
case 1534:
case 3428:
case 183:
case 2137:
case 3688:
case 2941:
case 2962:
case 3848:
case 2050:
case 42:
case 1237:
case 3616:
case 2020:
case 2648:
case 3419:
case 67:
case 3730:
case 2816:
case 3208:
case 3760:
case 3377:
case 894:
case 2095:
case 3786:
case 1071:
case 2932:
case 2792:
case 2351:
case 3461:
case 3033:
case 1737:
case 3230:
case 2321:
case 3260:
case 1984:
case 801:
case 3229:
case 835:
case 2513:
case 3286:
case 2413:
case 3345:
case 1370:
case 1767:
case 4055:
case 3259:
case 3509:
case 3606:
case 2806:
case 38:
case 3218:
case 953:
case 3665:
case 956:
case 2482:
case 3699:
case 4081:
case 2652:
case 3596:
case 3496:
case 2582:
case 3852:
case 2622:
case 740:
case 594:
case 1730:
case 3573:
case 476:
case 1178:
case 1519:
case 3473:
case 1616:
case 3237:
case 3267:
case 1759:
case 1955:
case 623:
case 769:
case 1786:
case 473:
case 1760:
case 2307:
case 338:
case 1893:
case 500:
case 3564:
case 266:
case 2014:
case 3464:
case 386:
case 95:
case 383:
case 3434:
case 1428:
case 722:
case 2278:
case 1558:
case 2108:
case 1981:
case 1409:
case 1665:
case 2129:
case 1218:
case 751:
case 1509:
case 2159:
case 1606:
case 775:
case 1496:
case 1635:
case 1699:
case 1822:
case 772:
case 1708:
case 426:
case 1230:
case 2027:
case 532:
case 676:
case 3767:
case 1063:
case 699:
case 2676:
case 1531:
case 1229:
case 2479:
case 1286:
case 2118:
case 423:
case 309:
case 1413:
case 3579:
case 602:
case 3676:
case 553:
case 2876:
case 2984:
case 392:
case 3317:
case 1321:
case 1753:
case 3057:
case 1622:
case 703:
case 3130:
case 61:
case 3186:
case 3944:
case 2192:
case 3159:
case 1246:
case 1137:
case 1403:
case 1368:
case 1888:
case 2153:
case 1503:
case 3278:
case 366:
case 3354:
case 2464:
case 1001:
case 286:
case 1746:
case 1338:
case 4044:
case 405:
case 789:
case 431:
case 85:
case 402:
case 1020:
case 1648:
case 2573:
case 807:
case 2473:
case 1310:
case 2237:
case 3652:
case 1130:
case 2596:
case 1778:
case 3482:
case 3622:
case 3582:
case 2852:
case 935:
case 3899:
case 2496:
case 2074:
case 2509:
case 36:
case 2606:
case 1160:
case 413:
case 2665:
case 3806:
case 2218:
case 1186:
case 2229:
case 1118:
case 1579:
case 3413:
case 2033:
case 3723:
case 4062:
case 4041:
case 2442:
case 1004:
case 2542:
case 2708:
case 843:
case 1317:
case 3095:
case 2760:
case 2925:
case 900:
case 2759:
case 715:
case 3962:
case 3050:
case 2848:
case 3069:
case 3253:
case 3816:
case 2208:
case 55:
case 3648:
case 3020:
case 712:
case 2428:
case 1278:
case 3888:
case 2981:
case 3403:
case 2458:
case 613:
case 898:
case 3693:
case 3167:
case 1354:
case 2893:
case 166:
case 1324:
case 2718:
case 2084:
case 299:
case 1235:
case 1299:
case 331:
case 434:
case 305:
case 3375:
case 1340:
case 2097:
case 539:
case 1911:
case 1206:
case 1846:
case 1265:
case 276:
case 1526:
case 1686:
case 779:
case 1892:
case 1589:
case 2165:
case 793:
case 463:
case 1660:
case 1659:
case 2106:
case 31:
case 2276:
case 1426:
case 1716:
case 4014:
case 3122:
case 1630:
case 3152:
case 2199:
case 729:
case 2867:
case 116:
case 3667:
case 3193:
case 1598:
case 1853:
case 2188:
case 1901:
case 1608:
case 1823:
case 492:
case 758:
case 1799:
case 634:
case 1735:
case 1995:
case 1939:
case 2971:
case 3878:
case 495:
case 1443:
case 1062:
case 1706:
case 4004:
case 1765:
case 3347:
case 897:
case 1969:
case 3426:
case 2974:
case 2886:
case 991:
case 2692:
case 11:
case 2366:
case 3660:
case 3892:
case 3526:
case 3686:
case 3629:
case 1152:
case 66:
case 2502:
case 1122:
case 1044:
case 1472:
case 839:
case 2222:
case 102:
case 4020:
case 2449:
case 3265:
case 3846:
case 3206:
case 4050:
case 2933:
case 2818:
case 2793:
case 3340:
case 2646:
case 2315:
case 990:
case 3032:
case 2722:
case 2055:
case 3939:
case 3995:
case 597:
case 1148:
case 3799:
case 2090:
case 3920:
case 2412:
case 3706:
case 27:
case 4011:
case 904:
case 130:
case 1667:
case 3498:
case 2483:
case 3608:
case 313:
case 808:
case 79:
case 46:
case 3216:
case 2583:
case 3853:
case 3653:
case 1394:
case 3483:
case 2901:
case 2216:
case 2853:
case 3583:
case 3808:
case 1776:
case 2598:
case 1387:
case 4074:
case 1867:
case 216:
case 2498:
case 2920:
case 2969:
case 3293:
case 2041:
case 2062:
case 3412:
case 2706:
case 37:
case 1971:
case 2288:
case 1678:
case 3752:
case 2543:
case 804:
case 2618:
case 3391:
case 3449:
case 176:
case 3793:
case 2176:
case 3549:
case 3646:
case 1097:
case 2206:
case 2911:
case 32:
case 2788:
case 891:
case 2299:
case 2235:
case 199:
case 3502:
case 3336:
case 2716:
case 3402:
case 3974:
case 3829:
case 2556:
case 3692:
case 3860:
case 2489:
case 2892:
case 2526:
case 3380:
case 2629:
case 939:
case 1165:
case 2456:
case 1412:
case 17:
case 1293:
case 1090:
case 1512:
case 323:
case 409:
case 1752:
case 785:
case 1025:
case 3116:
case 1055:
case 2878:
case 638:
case 2637:
case 754:
case 1808:
case 3394:
case 1483:
case 686:
case 3837:
case 3387:
case 2667:
case 1830:
case 2122:
case 2044:
case 1336:
case 3135:
case 1502:
case 3199:
case 438:
case 1366:
case 3276:
case 1974:
case 3106:
case 21:
case 1692:
case 1886:
case 1933:
case 12:
case 1818:
case 2904:
case 1549:
case 2957:
case 376:
case 2572:
case 609:
case 2472:
case 231:
case 910:
case 584:
case 517:
case 3195:
case 3139:
case 2078:
case 1855:
case 705:
case 1309:
case 1825:
case 1632:
case 4076:
case 731:
case 1774:
case 1545:
case 3570:
case 1733:
case 606:
case 2757:
case 1331:
case 2517:
case 555:
case 1361:
case 1342:
case 1881:
case 1763:
case 603:
case 568:
case 3271:
case 2417:
case 1114:
case 19:
case 2227:
case 1477:
case 2174:
case 254:
case 244:
case 2844:
case 1577:
case 1086:
case 403:
case 1952:
case 730:
case 1059:
case 1922:
case 3771:
case 93:
case 2163:
case 1358:
case 570:
case 3897:
case 3334:
case 2684:
case 362:
case 2507:
case 358:
case 689:
case 2554:
case 3884:
case 348:
case 2424:
case 365:
case 3331:
case 855:
case 2313:
case 3445:
case 842:
case 852:
case 868:
case 3733:
case 845:
case 1037:
case 3114:
case 1271:
case 3881:
case 2551:
case 1067:
case 4022:
case 457:
case 871:
case 2451:
case 4052:
case 193:
case 2295:
case 2690:
case 1139:
case 1195:
case 3396:
case 412:
case 2841:
case 2862:
case 2201:
case 3890:
case 3662:
case 2171:
case 2485:
case 884:
case 2655:
case 2500:
case 1150:
case 1120:
case 2832:
case 3855:
case 933:
case 219:
case 615:
case 2303:
case 1897:
case 612:
case 3328:
case 2538:
case 3127:
case 1884:
case 148:
case 1976:
case 158:
case 1364:
case 870:
case 2438:
case 3577:
case 2965:
case 3030:
case 2750:
case 1644:
case 3233:
case 39:
case 2906:
case 2211:
case 9:
case 2092:
case 3059:
case 3060:
case 2999:
case 3952:
case 3029:
case 3086:
case 657:
case 1373:
case 2739:
case 3092:
case 970:
case 2059:
case 2263:
case 4088:
case 2922:
case 2029:
case 2086:
case 3795:
case 3739:
case 144:
case 1844:
case 1257:
case 2577:
case 3720:
case 3965:
case 2030:
case 1227:
case 2233:
case 29:
case 3906:
case 2477:
case 3211:
case 3750:
case 154:
case 1204:
case 1554:
case 1407:
case 3538:
case 2127:
case 1133:
case 1424:
case 2274:
case 182:
case 3438:
case 2358:
case 319:
case 2018:
case 1697:
case 4016:
case 3046:
case 77:
case 2328:
case 737:
case 3568:
case 3701:
case 3655:
case 2309:
case 3485:
case 2774:
case 1078:
case 3625:
case 2948:
case 945:
case 3841:
case 952:
case 968:
case 2641:
case 3171:
case 72:
case 3382:
case 955:
case 2881:
case 3988:
case 2763:
case 3421:
case 2114:
case 1417:
case 1517:
case 3295:
case 3681:
case 510:
case 984:
case 2361:
case 3451:
case 4065:
case 3053:
case 1757:
case 3220:
case 888:
case 2445:
case 3313:
case 1379:
case 3023:
case 4006:
case 258:
case 3507:
case 2364:
case 3454:
case 1438:
case 3684:
case 1538:
case 265:
case 3554:
case 640:
case 3714:
case 2334:
case 119:
case 1303:
case 726:
case 811:
case 1935:
case 229:
case 625:
case 1999:
case 472:
case 2373:
case 1410:
case 1795:
case 475:
case 1510:
case 2771:
case 622:
case 451:
case 3204:
case 354:
case 1750:
case 2644:
case 1906:
case 1720:
case 1965:
case 3257:
case 675:
case 279:
case 588:
case 1451:
case 3517:
case 1681:
case 1295:
case 536:
case 2101:
case 1250:
case 2570:
case 2037:
case 1711:
case 533:
case 1220:
case 1313:
case 2470:
case 651:
case 3757:
case 2169:
case 799:
case 469:
case 773:
case 1625:
case 3078:
case 1485:
case 1500:
case 1655:
case 1171:
case 3214:
case 1690:
case 564:
case 2195:
case 776:
case 1841:
case 247:
case 981:
case 2312:
case 2874:
case 3674:
case 3992:
case 2144:
case 2022:
case 2755:
case 2515:
case 4023:
case 3762:
case 2415:
case 2930:
case 3065:
case 4053:
case 2383:
case 974:
case 3197:
case 3946:
case 3398:
case 619:
case 215:
case 1857:
case 3633:
case 3184:
case 140:
case 2833:
case 1827:
case 980:
case 514:
case 2281:
case 2302:
case 924:
case 1671:
case 587:
case 3839:
case 3820:
case 3356:
case 3016:
case 1125:
case 2580:
case 3389:
case 2405:
case 172:
case 2591:
case 3440:
case 175:
case 2491:
case 4092:
case 3232:
case 151:
case 3241:
case 2908:
case 1181:
case 2290:
case 3953:
case 141:
case 1372:
case 849:
case 1814:
case 289:
case 578:
case 2494:
case 4078:
case 3827:
case 1811:
case 340:
case 1633:
case 3857:
case 2604:
case 1946:
case 783:
case 1674:
case 3447:
case 3547:
case 2284:
case 1099:
case 1035:
case 322:
case 1065:
case 738:
case 1343:
case 644:
case 786:
case 1741:
case 1006:
case 1540:
case 3575:
case 2967:
case 549:
case 2784:
case 1440:
case 203:
case 372:
case 444:
case 3814:
case 560:
case 206:
case 1953:
case 2614:
case 2797:
case 1262:
case 1241:
case 351:
case 1839:
case 3671:
case 528:
case 2141:
case 709:
case 3190:
case 485:
case 2871:
case 814:
case 3125:
case 1869:
case 3744:
case 2132:
case 3155:
case 1356:
case 2125:
case 1048:
case 1620:
case 1580:
case 867:
case 1566:
case 1669:
case 1650:
case 1466:
case 2155:
case 2744:
case 1436:
case 458:
case 792:
case 3871:
case 1281:
case 306:
case 241:
case 3937:
case 3797:
case 679:
case 1491:
case 818:
case 1255:
case 693:
case 429:
case 1591:
case 3784:
case 2475:
case 1790:
case 496:
case 766:
case 4037:
case 3297:
case 1144:
case 2447:
case 4067:
case 1755:
case 1022:
case 1986:
case 147:
case 1312:
case 1929:
case 3284:
case 240:
case 1918:
case 1833:
case 3604:
case 115:
case 2244:
case 3627:
case 1383:
case 389:
case 662:
case 658:
case 3494:
case 3594:
case 1863:
case 648:
case 1614:
case 49:
case 2262:
case 1797:
case 1937:
case 2953:
case 3290:
case 928:
case 4086:
case 2232:
case 3255:
case 3491:
case 1967:
case 2869:
case 949:
case 2016:
case 1132:
case 3650:
case 2820:
case 3669:
case 3620:
case 3580:
case 2389:
case 3048:
case 4018:
case 959:
case 3639:
case 3281:
case 3695:
case 567:
case 3302:
case 2895:
case 3436:
case 1162:
case 1587:
case 1627:
case 2633:
case 1604:
case 3833:
case 3918:
case 1657:
case 2811:
case 1487:
case 2663:
case 3383:
case 881:
case 1494:
case 2741:
case 2006:
case 69:
case 3930:
case 2065:
case 4008:
case 2343:
case 3052:
case 347:
case 3929:
case 3874:
case 2732:
case 357:
case 3959:
case 961:
case 2992:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1742670001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,];
var gg_b = "1742670001/";

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
    if (rr["hasavif"] == 1) rr["haswebp"] = 1;
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
