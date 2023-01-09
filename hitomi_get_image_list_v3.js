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
var o = 1;
switch (g) {
case 3219:
case 876:
case 2883:
case 2125:
case 3200:
case 3653:
case 2339:
case 1349:
case 273:
case 549:
case 3157:
case 358:
case 2514:
case 2170:
case 2344:
case 3453:
case 1908:
case 3460:
case 1810:
case 2258:
case 1792:
case 31:
case 3595:
case 2335:
case 2315:
case 610:
case 1313:
case 2889:
case 4033:
case 3463:
case 2421:
case 4031:
case 80:
case 686:
case 2006:
case 3252:
case 3963:
case 1323:
case 2956:
case 3950:
case 1176:
case 3368:
case 1753:
case 4055:
case 746:
case 2362:
case 3915:
case 1098:
case 1322:
case 1037:
case 434:
case 2905:
case 3426:
case 3015:
case 319:
case 3411:
case 3760:
case 3129:
case 2461:
case 1554:
case 3263:
case 2545:
case 1506:
case 3540:
case 2975:
case 3170:
case 3217:
case 2318:
case 3226:
case 2906:
case 3378:
case 450:
case 2167:
case 124:
case 1659:
case 256:
case 2993:
case 569:
case 3476:
case 1159:
case 131:
case 4051:
case 2990:
case 553:
case 870:
case 66:
case 3327:
case 1656:
case 2632:
case 3371:
case 1404:
case 2679:
case 2992:
case 44:
case 1565:
case 1050:
case 2953:
case 1490:
case 744:
case 3828:
case 375:
case 2482:
case 1358:
case 90:
case 3669:
case 2901:
case 1206:
case 3932:
case 166:
case 452:
case 547:
case 684:
case 123:
case 3109:
case 2864:
case 1907:
case 1531:
case 1307:
case 2417:
case 498:
case 4011:
case 161:
case 3947:
case 2384:
case 2399:
case 198:
case 1948:
case 1259:
case 2062:
case 815:
case 1072:
case 4005:
case 2270:
case 3639:
case 3392:
case 1483:
case 1872:
case 1517:
case 1884:
case 3112:
case 1566:
case 2533:
case 3300:
case 2347:
case 4006:
case 861:
case 3774:
case 1238:
case 2919:
case 3570:
case 3472:
case 2373:
case 1106:
case 1182:
case 1346:
case 56:
case 1263:
case 3630:
case 502:
case 1762:
case 3467:
case 1887:
case 125:
case 3615:
case 2495:
case 3849:
case 2675:
case 2116:
case 276:
case 3116:
case 3196:
case 582:
case 4025:
case 3579:
case 496:
case 1702:
case 3906:
case 1244:
case 2046:
case 2899:
case 3715:
case 2600:
case 1727:
case 2963:
case 3711:
case 3514:
case 2532:
case 3319:
case 3369:
case 3795:
case 3249:
case 2002:
case 81:
case 3572:
case 624:
case 1776:
case 3725:
case 892:
case 2146:
case 1675:
case 195:
case 2894:
case 1435:
case 2995:
case 3373:
case 3335:
case 3384:
case 3475:
case 1538:
case 3259:
case 3945:
case 3641:
case 1430:
case 3154:
case 2730:
case 3809:
case 3000:
case 1924:
case 1193:
case 1204:
case 164:
case 3931:
case 3184:
case 1852:
case 1367:
case 2165:
case 3150:
case 3591:
case 2434:
case 3742:
case 2375:
case 2464:
case 716:
case 2164:
case 3966:
case 2649:
case 3077:
case 2860:
case 1994:
case 3543:
case 1641:
case 3422:
case 2642:
case 309:
case 1503:
case 3909:
case 1270:
case 3137:
case 2678:
case 1748:
case 2778:
case 935:
case 3655:
case 3148:
case 693:
case 4080:
case 3019:
case 1113:
case 3807:
case 3515:
case 909:
case 3549:
case 75:
case 2064:
case 539:
case 1774:
case 2911:
case 1291:
case 409:
case 1047:
case 4018:
case 2208:
case 1651:
case 1360:
case 584:
case 1472:
case 2715:
case 381:
case 2546:
case 1610:
case 2529:
case 1249:
case 39:
case 2900:
case 2667:
case 3547:
case 264:
case 1519:
case 3237:
case 2420:
case 3499:
case 1469:
case 910:
case 1934:
case 3311:
case 3159:
case 1779:
case 521:
case 3428:
case 1831:
case 2105:
case 807:
case 3479:
case 1539:
case 1458:
case 3387:
case 3762:
case 2050:
case 1918:
case 2583:
case 3448:
case 3033:
case 3091:
case 3065:
case 2449:
case 349:
case 739:
case 57:
case 1441:
case 299:
case 3665:
case 2292:
case 3692:
case 824:
case 2881:
case 1438:
case 1599:
case 3822:
case 3020:
case 3802:
case 3142:
case 2336:
case 3593:
case 3619:
case 3745:
case 2299:
case 1156:
case 3642:
case 1108:
case 4049:
case 4061:
case 2940:
case 3980:
case 2854:
case 3567:
case 1958:
case 15:
case 2704:
case 3494:
case 1701:
case 2504:
case 901:
case 3055:
case 1314:
case 2753:
case 326:
case 1043:
case 2517:
case 2582:
case 258:
case 2483:
case 1794:
case 3712:
case 3820:
case 3396:
case 3505:
case 544:
case 3520:
case 3410:
case 4081:
case 3382:
case 3490:
case 3701:
case 77:
case 3082:
case 1559:
case 3114:
case 2592:
case 747:
case 696:
case 1602:
case 3491:
case 3772:
case 2552:
case 823:
case 365:
case 3465:
case 1112:
case 1561:
case 1707:
case 3001:
case 388:
case 1621:
case 2401:
case 3764:
case 3205:
case 151:
case 2194:
case 2711:
case 1849:
case 4000:
case 1460:
case 1645:
case 3190:
case 451:
case 2741:
case 1089:
case 3303:
case 3918:
case 598:
case 751:
case 783:
case 3468:
case 3415:
case 118:
case 3310:
case 698:
case 2505:
case 613:
case 3264:
case 3905:
case 510:
case 1155:
case 3995:
case 3992:
case 34:
case 2961:
case 1558:
case 2648:
case 2616:
case 3728:
case 643:
case 1085:
case 2567:
case 2875:
case 1783:
case 1480:
case 242:
case 3731:
case 1240:
case 2066:
case 3939:
case 3855:
case 1563:
case 99:
case 4034:
case 2920:
case 1326:
case 463:
case 1885:
case 1773:
case 446:
case 1921:
case 4072:
case 3569:
case 480:
case 2481:
case 1020:
case 800:
case 160:
case 3974:
case 1212:
case 355:
case 2818:
case 385:
case 489:
case 263:
case 3830:
case 1286:
case 3416:
case 2126:
case 917:
case 2874:
case 202:
case 10:
case 1813:
case 2410:
case 2870:
case 1504:
case 361:
case 500:
case 905:
case 2487:
case 89:
case 2991:
case 3270:
case 1577:
case 3755:
case 1858:
case 1601:
case 3637:
case 921:
case 1453:
case 4024:
case 1321:
case 1683:
case 49:
case 3158:
case 2081:
case 2343:
case 2351:
case 3198:
case 1136:
case 2139:
case 2476:
case 2630:
case 770:
case 2445:
case 3739:
case 3920:
case 3267:
case 1429:
case 70:
case 3687:
case 3466:
case 3775:
case 1489:
case 3139:
case 4077:
case 3977:
case 1628:
case 2309:
case 1723:
case 2045:
case 455:
case 2478:
case 1933:
case 1459:
case 2727:
case 996:
case 1272:
case 1456:
case 2190:
case 407:
case 3246:
case 1464:
case 3400:
case 3554:
case 2501:
case 3509:
case 200:
case 1369:
case 1771:
case 969:
case 2706:
case 2702:
case 3012:
case 1790:
case 2035:
case 1281:
case 3058:
case 3606:
case 2673:
case 4012:
case 1806:
case 1150:
case 1514:
case 1221:
case 408:
case 2256:
case 2231:
case 2726:
case 2543:
case 973:
case 2847:
case 67:
case 3498:
case 2446:
case 1570:
case 2511:
case 1009:
case 1869:
case 2160:
case 3071:
case 4009:
case 3873:
case 3605:
case 894:
case 3839:
case 1759:
case 1829:
case 3240:
case 1319:
case 2388:
case 1965:
case 866:
case 109:
case 3958:
case 265:
case 140:
case 932:
case 277:
case 1274:
case 1406:
case 3216:
case 4056:
case 834:
case 2617:
case 2666:
case 2329:
case 422:
case 3175:
case 2236:
case 2396:
case 2228:
case 1975:
case 3827:
case 3404:
case 3604:
case 1548:
case 2021:
case 826:
case 3224:
case 4030:
case 3954:
case 3007:
case 1840:
case 1017:
case 3552:
case 1359:
case 2821:
case 2515:
case 2173:
case 1424:
case 1557:
case 1704:
case 949:
case 2742:
case 3681:
case 2071:
case 179:
case 3383:
case 3946:
case 2579:
case 534:
case 1397:
case 1171:
case 959:
case 3291:
case 2030:
case 2690:
case 3610:
case 3557:
case 117:
case 2249:
case 3713:
case 640:
case 1177:
case 1341:
case 1564:
case 2298:
case 2522:
case 2912:
case 2780:
case 3949:
case 3293:
case 3869:
case 485:
case 3425:
case 1777:
case 135:
case 1801:
case 2302:
case 1687:
case 2923:
case 1795:
case 1257:
case 2808:
case 3044:
case 3348:
case 3750:
case 3933:
case 1812:
case 2366:
case 2290:
case 1232:
case 2251:
case 1592:
case 290:
case 3006:
case 2938:
case 2776:
case 2076:
case 622:
case 3649:
case 1454:
case 2930:
case 1386:
case 1293:
case 2791:
case 2652:
case 2924:
case 3215:
case 798:
case 2850:
case 2233:
case 1980:
case 1100:
case 1606:
case 3699:
case 1075:
case 3362:
case 3667:
case 2059:
case 1376:
case 1016:
case 934:
case 1961:
case 1512:
case 2878:
case 2311:
case 332:
case 801:
case 1582:
case 656:
case 217:
case 3120:
case 3837:
case 1088:
case 1371:
case 2371:
case 233:
case 45:
case 3407:
case 1419:
case 2536:
case 2345:
case 286:
case 1740:
case 2166:
case 4073:
case 2680:
case 1862:
case 1375:
case 1694:
case 3948:
case 2790:
case 3072:
case 1352:
case 1420:
case 1897:
case 12:
case 211:
case 162:
case 143:
case 3533:
case 1316:
case 3255:
case 530:
case 632:
case 293:
case 1977:
case 1593:
case 900:
case 331:
case 2983:
case 2645:
case 977:
case 3999:
case 1904:
case 609:
case 2720:
case 1607:
case 3193:
case 2224:
case 603:
case 3095:
case 2931:
case 3910:
case 2087:
case 250:
case 2521:
case 946:
case 1682:
case 2568:
case 720:
case 3430:
case 830:
case 1954:
case 2573:
case 2606:
case 2082:
case 3636:
case 2871:
case 2028:
case 1344:
case 1332:
case 3696:
case 3709:
case 1170:
case 541:
case 2003:
case 3477:
case 1873:
case 1625:
case 2085:
case 551:
case 3686:
case 2277:
case 3471:
case 243:
case 2708:
case 3874:
case 235:
case 1471:
case 789:
case 2294:
case 882:
case 4059:
case 1647:
case 703:
case 1011:
case 2656:
case 1545:
case 3664:
case 1114:
case 1947:
case 2304:
case 2044:
case 1673:
case 755:
case 831:
case 888:
case 3133:
case 1392:
case 3347:
case 3965:
case 2770:
case 1854:
case 3882:
case 251:
case 2723:
case 59:
case 2640:
case 3405:
case 3461:
case 424:
case 3294:
case 3729:
case 3066:
case 3511:
case 1413:
case 1730:
case 2764:
case 3332:
case 1838:
case 867:
case 1055:
case 1695:
case 1589:
case 1535:
case 3057:
case 885:
case 2127:
case 3707:
case 3236:
case 149:
case 1463:
case 3238:
case 1575:
case 768:
case 2459:
case 42:
case 2254:
case 171:
case 2853:
case 2694:
case 727:
case 2016:
case 145:
case 371:
case 527:
case 1845:
case 3457:
case 3625:
case 2174:
case 558:
case 3922:
case 459:
case 3563:
case 3754:
case 3454:
case 1131:
case 982:
case 1432:
case 2614:
case 2760:
case 2908:
case 2306:
case 1970:
case 2571:
case 3053:
case 3040:
case 4076:
case 2851:
case 3233:
case 3674:
case 4075:
case 486:
case 638:
case 884:
case 975:
case 3993:
case 906:
case 2364:
case 330:
case 3528:
case 3785:
case 1608:
case 2531:
case 247:
case 808:
case 1842:
case 3417:
case 2011:
case 784:
case 681:
case 1853:
case 1553:
case 1629:
case 2681:
case 3559:
case 2334:
case 3070:
case 215:
case 3131:
case 943:
case 1507:
case 636:
case 3824:
case 1929:
case 3718:
case 2380:
case 444:
case 3222:
case 2748:
case 863:
case 529:
case 2025:
case 1765:
case 2587:
case 1583:
case 2538:
case 1090:
case 1246:
case 1569:
case 1638:
case 1827:
case 787:
case 1213:
case 2468:
case 1091:
case 357:
case 1681:
case 3708:
case 185:
case 4074:
case 2500:
case 1353:
case 3659:
case 1785:
case 3299:
case 1368:
case 3611:
case 1823:
case 2179:
case 1488:
case 3714:
case 3385:
case 1462:
case 3102:
case 4069:
case 2827:
case 1726:
case 1595:
case 93:
case 1487:
case 142:
case 339:
case 1598:
case 91:
case 3672:
case 3912:
case 439:
case 1168:
case 1362:
case 3100:
case 879:
case 3320:
case 158:
case 283:
case 3397:
case 2475:
case 1317:
case 508:
case 4042:
case 3789:
case 32:
case 1473:
case 3242:
case 3598:
case 767:
case 3600:
case 3670:
case 3810:
case 651:
case 300:
case 1945:
case 3107:
case 1117:
case 3737:
case 1649:
case 4052:
case 3419:
case 3134:
case 1282:
case 2959:
case 2653:
case 594:
case 1706:
case 2997:
case 1001:
case 1214:
case 925:
case 2268:
case 3493:
case 1817:
case 2890:
case 2024:
case 1910:
case 2448:
case 1551:
case 2839:
case 726:
case 3507:
case 963:
case 27:
case 3662:
case 1191:
case 292:
case 999:
case 1040:
case 616:
case 3356:
case 2386:
case 777:
case 1417:
case 721:
case 177:
case 3899:
case 377:
case 3375:
case 2832:
case 1761:
case 2216:
case 1811:
case 1820:
case 2891:
case 1247:
case 1331:
case 2998:
case 3345:
case 2972:
case 816:
case 1525:
case 2703:
case 3473:
case 2560:
case 806:
case 1038:
case 2595:
case 2244:
case 2419:
case 725:
case 2604:
case 1296:
case 1835:
case 1396:
case 2672:
case 604:
case 2794:
case 3986:
case 2836:
case 2100:
case 893:
case 1087:
case 345:
case 2074:
case 3304:
case 2065:
case 237:
case 3928:
case 2886:
case 3317:
case 2369:
case 2519:
case 1839:
case 3181:
case 939:
case 87:
case 3439:
case 1334:
case 1378:
case 3586:
case 3780:
case 1738:
case 1556:
case 2687:
case 1672:
case 3241:
case 503:
case 958:
case 2510:
case 1909:
case 929:
case 2814:
case 2310:
case 2605:
case 1154:
case 2965:
case 809:
case 3346:
case 1188:
case 3452:
case 97:
case 3651:
case 1381:
case 1452:
case 274:
case 1061:
case 3892:
case 627:
case 1712:
case 985:
case 3049:
case 2257:
case 1053:
case 3024:
case 2414:
case 3374:
case 1401:
case 847:
case 3782:
case 2979:
case 3126:
case 3275:
case 3262:
case 1874:
case 2007:
case 868:
case 690:
case 2509:
case 1431:
case 3751:
case 1731:
case 128:
case 3088:
case 1754:
case 2287:
case 2845:
case 600:
case 3338:
case 3842:
case 536:
case 3622:
case 1946:
case 2037:
case 557:
case 3173:
case 4093:
case 2957:
case 3994:
case 3393:
case 2456:
case 3844:
case 2091:
case 2801:
case 3656:
case 2385:
case 2580:
case 1063:
case 2970:
case 1927:
case 3208:
case 3685:
case 1833:
case 652:
case 837:
case 1121:
case 2830:
case 2910:
case 2749:
case 1216:
case 1153:
case 839:
case 1751:
case 2789:
case 679:
case 1516:
case 278:
case 1770:
case 360:
case 705:
case 1393:
case 1010:
case 113:
case 2806:
case 2018:
case 2175:
case 719:
case 1251:
case 3865:
case 3220:
case 2627:
case 1398:
case 2101:
case 1495:
case 2848:
case 2756:
case 3700:
case 764:
case 3832:
case 657:
case 262:
case 2322:
case 1543:
case 3497:
case 1210:
case 1202:
case 3253:
case 3434:
case 208:
case 3935:
case 2102:
case 1720:
case 1677:
case 3188:
case 1209:
case 993:
case 3030:
case 1903:
case 2692:
case 1466:
case 3984:
case 3381:
case 96:
case 2393:
case 3337:
case 1256:
case 3408:
case 3585:
case 2892:
case 3260:
case 2389:
case 804:
case 2492:
case 1361:
case 3155:
case 2927:
case 842:
case 3683:
case 1791:
case 1253:
case 3786:
case 692:
case 2817:
case 448:
case 528:
case 2439:
case 3045:
case 1660:
case 525:
case 2682:
case 3132:
case 1923:
case 454:
case 1233:
case 3907:
case 3756:
case 587:
case 2976:
case 2189:
case 3285:
case 1035:
case 912:
case 3164:
case 2276:
case 392:
case 1881:
case 3005:
case 1095:
case 2200:
case 3483:
case 583:
case 132:
case 14:
case 2154:
case 1937:
case 1014:
case 1004:
case 1969:
case 3060:
case 68:
case 3254:
case 1374:
case 2917:
case 1879:
case 2075:
case 4095:
case 3602:
case 1220:
case 1467:
case 210:
case 3380:
case 1134:
case 3359:
case 2467:
case 2327:
case 3743:
case 2285:
case 785:
case 2333:
case 4065:
case 2143:
case 3531:
case 3592:
case 1757:
case 3584:
case 3047:
case 1485:
case 2922:
case 961:
case 845:
case 2328:
case 3314:
case 1510:
case 3773:
case 2395:
case 2212:
case 1297:
case 2547:
case 3128:
case 3658:
case 972:
case 3043:
case 275:
case 3438:
case 403:
case 425:
case 47:
case 2644:
case 2010:
case 138:
case 139:
case 2150:
case 1052:
case 1916:
case 2305:
case 2750:
case 3500:
case 757:
case 2952:
case 2141:
case 3470:
case 580:
case 2926:
case 1301:
case 1261:
case 3680:
case 325:
case 1605:
case 4054:
case 1158:
case 927:
case 3817:
case 401:
case 3492:
case 781:
case 1760:
case 399:
case 3879:
case 2948:
case 342:
case 2729:
case 2209:
case 2387:
case 2761:
case 3571:
case 948:
case 883:
case 2111:
case 2264:
case 1355:
case 255:
case 1737:
case 2745:
case 2647:
case 3506:
case 3776:
case 550:
case 2377:
case 599:
case 2353:
case 762:
case 565:
case 899:
case 294:
case 3186:
case 3271:
case 2068:
case 509:
case 1767:
case 649:
case 3458:
case 3854:
case 1311:
case 1228:
case 1515:
case 136:
case 2437:
case 112:
case 3235:
case 2954:
case 2473:
case 3104:
case 1637:
case 1626:
case 1734:
case 1837:
case 1788:
case 573:
case 2810:
case 942:
case 2562:
case 2324:
case 1896:
case 232:
case 94:
case 3199:
case 2916:
case 707:
case 3989:
case 1915:
case 2719:
case 3825:
case 393:
case 1886:
case 926:
case 3876:
case 1913:
case 3391:
case 18:
case 2797:
case 3257:
case 398:
case 1890:
case 3911:
case 1049:
case 1542:
case 743:
case 2342:
case 2089:
case 1925:
case 1972:
case 3390:
case 3364:
case 2394:
case 2055:
case 3942:
case 1455:
case 3207:
case 1180:
case 2867:
case 2574:
case 1031:
case 753:
case 3753:
case 920:
case 1183:
case 1940:
case 2005:
case 2782:
case 3123:
case 2400:
case 1560:
case 1905:
case 1218:
case 2566:
case 3597:
case 2180:
case 181:
case 3292:
case 3959:
case 659:
case 2155:
case 782:
case 3953:
case 1997:
case 1046:
case 122:
case 2145:
case 3527:
case 3644:
case 1895:
case 1690:
case 2793:
case 1245:
case 1942:
case 1620:
case 3978:
case 312:
case 1520:
case 1258:
case 3577:
case 919:
case 634:
case 2610:
case 1029:
case 2639:
case 3063:
case 1537:
case 1639:
case 318:
case 3079:
case 130:
case 2659:
case 3846:
case 443:
case 4017:
case 1985:
case 1139:
case 962:
case 1697:
case 2117:
case 2474:
case 3178:
case 3152:
case 1493:
case 1699:
case 95:
case 2677:
case 3168:
case 3583:
case 105:
case 1079:
case 1023:
case 3051:
case 269:
case 563:
case 1932:
case 1739:
case 561:
case 1069:
case 732:
case 230:
case 2090:
case 2933:
case 4015:
case 3937:
case 2332:
case 36:
case 3614:
case 1680:
case 642:
case 240:
case 1475:
case 2611:
case 1384:
case 2246:
case 2441:
case 761:
case 2029:
case 2862:
case 115:
case 468:
case 1032:
case 2365:
case 1941:
case 1123:
case 3023:
case 2551:
case 3650:
case 1179:
case 1333:
case 1863:
case 1799:
case 3990:
case 2418:
case 2360:
case 1132:
case 535:
case 3732:
case 3068:
case 1926:
case 688:
case 2937:
case 2326:
case 1752:
case 2220:
case 2670:
case 170:
case 1318:
case 2569:
case 479:
case 3312:
case 1173:
case 1078:
case 1407:
case 476:
case 2553:
case 2496:
case 1716:
case 3394:
case 1379:
case 1280:
case 1137:
case 4023:
case 3590:
case 4022:
case 1615:
case 1982:
case 1149:
case 2199:
case 2868:
case 26:
case 1062:
case 3721:
case 2354:
case 3357:
case 1242:
case 1351:
case 3206:
case 3601:
case 526:
case 2928:
case 3797:
case 2095:
case 3631:
case 2083:
case 505:
case 1172:
case 4084:
case 1922:
case 1205:
case 2978:
case 2973:
case 1868:
case 3489:
case 252:
case 740:
case 3156:
case 2786:
case 2192:
case 2307:
case 2038:
case 984:
case 2079:
case 493:
case 3740:
case 763:
case 3988:
case 4085:
case 3890:
case 2844:
case 1963:
case 1522:
case 3860:
case 635:
case 346:
case 2869:
case 628:
case 1080:
case 2772:
case 2732:
case 3228:
case 1370:
case 3634:
case 3125:
case 2816:
case 3582:
case 924:
case 2602:
case 4032:
case 121:
case 588:
case 1523:
case 3561:
case 3011:
case 2057:
case 2098:
case 3777:
case 878:
case 3522:
case 2452:
case 1199:
case 730:
case 825:
case 567:
case 1067:
case 3431:
case 3315:
case 134:
case 82:
case 916:
case 1655:
case 3940:
case 394:
case 1234:
case 3694:
case 172:
case 3389:
case 3121:
case 4041:
case 2137:
case 1054:
case 1996:
case 1148:
case 53:
case 1167:
case 23:
case 3765:
case 752:
case 559:
case 4014:
case 2885:
case 2526:
case 3194:
case 429:
case 194:
case 514:
case 3793:
case 1264:
case 1688:
case 1594:
case 2265:
case 1223:
case 25:
case 2372:
case 3096:
case 3612:
case 3967:
case 3153:
case 1451:
case 1567:
case 1021:
case 2513:
case 2949:
case 268:
case 788:
case 3481:
case 4058:
case 3925:
case 16:
case 937:
case 4092:
case 4070:
case 2392:
case 351:
case 3177:
case 3626:
case 3936:
case 2330:
case 1689:
case 2022:
case 750:
case 3296:
case 1224:
case 714:
case 748:
case 4040:
case 1825:
case 374:
case 3459:
case 733:
case 3322:
case 3913:
case 2225:
case 3546:
case 854:
case 3769:
case 3716:
case 3035:
case 457:
case 2913:
case 1211:
case 617:
case 718:
case 239:
case 1763:
case 71:
case 2376:
case 1041:
case 3835:
case 2416:
case 1287:
case 20:
case 1250:
case 2932:
case 766:
case 3204:
case 3308:
case 3525:
case 2431:
case 2934:
case 1952:
case 3414:
case 2196:
case 3288:
case 3297:
case 3399:
case 334:
case 1604:
case 3964:
case 2049:
case 2825:
case 2838:
case 1057:
case 3440:
case 3801:
case 2996:
case 1022:
case 3896:
case 2615:
case 4003:
case 72:
case 3629:
case 2621:
case 110:
case 3232:
case 1529:
case 2382:
case 889:
case 2986:
case 3973:
case 1273:
case 865:
case 678:
case 1661:
case 3372:
case 666:
case 952:
case 2805:
case 1399:
case 2470:
case 1814:
case 591:
case 562:
case 2758:
case 742:
case 2355:
case 2211:
case 1775:
case 3503:
case 205:
case 417:
case 4046:
case 722:
case 103:
case 2357:
case 304:
case 1277:
case 2051:
case 3032:
case 1283:
case 2635:
case 30:
case 2535:
case 1671:
case 3594:
case 1957:
case 3326:
case 799:
case 1436:
case 1478:
case 1284:
case 2458:
case 1073:
case 974:
case 2988:
case 2746:
case 1984:
case 3757:
case 2404:
case 1700:
case 2291:
case 818:
case 1152:
case 1576:
case 154:
case 3778:
case 3693:
case 2381:
case 1449:
case 3227:
case 2807:
case 1692:
case 3710:
case 3902:
case 3108:
case 2092:
case 2234:
case 3185:
case 1276:
case 3826:
case 3526:
case 3026:
case 1387:
case 797:
case 3089:
case 3113:
case 1718:
case 2163:
case 2747:
case 2809:
case 2203:
case 1669:
case 364:
case 340:
case 663:
case 1571:
case 3379:
case 473:
case 3871:
case 2413:
case 133:
case 701:
case 2358:
case 2751:
case 560:
case 4062:
case 1143:
case 3386:
case 1588:
case 677:
case 1174:
case 754:
case 2735:
case 981:
case 3080:
case 2766:
case 3956:
case 335:
case 2779:
case 3172:
case 689:
case 1388:
case 291:
case 1612:
case 537:
case 2281:
case 2713:
case 1636:
case 2565:
case 241:
case 1330:
case 1197:
case 1051:
case 497:
case 3792:
case 3955:
case 1380:
case 911:
case 941:
case 1584:
case 2159:
case 3239:
case 1807:
case 2130:
case 1624:
case 4043:
case 3092:
case 317:
case 2856:
case 3733:
case 1083:
case 106:
case 2556:
case 376:
case 1146:
case 261:
case 69:
case 234:
case 629:
case 1366:
case 1541:
case 2058:
case 540:
case 379:
case 2284:
case 2755:
case 1944:
case 3420:
case 3059:
case 2120:
case 844:
case 3496:
case 1395:
case 1591:
case 3794:
case 3803:
case 2034:
case 3281:
case 3834:
case 645:
case 3781:
case 951:
case 1350:
case 2676:
case 2548:
case 2229:
case 2348:
case 2316:
case 2282:
case 2253:
case 1129:
case 495:
case 1787:
case 891:
case 2785:
case 2540:
case 1663:
case 3187:
case 2946:
case 416:
case 2457:
case 512:
case 578:
case 1025:
case 1164:
case 228:
case 474:
case 3038:
case 37:
case 2240:
case 2696:
case 1412:
case 1714:
case 471:
case 2636:
case 1423:
case 3025:
case 864:
case 302:
case 3352:
case 1579:
case 3627:
case 206:
case 314:
case 3663:
case 1434:
case 3673:
case 1119:
case 2363:
case 1600:
case 1766:
case 432:
case 3746:
case 338:
case 1755:
case 2877:
case 3307:
case 968:
case 2271:
case 4036:
case 2491:
case 2796:
case 711:
case 1126:
case 3724:
case 3923:
case 1477:
case 2613:
case 2837:
case 2834:
case 1540:
case 2078:
case 1118:
case 3099:
case 487:
case 2907:
case 3861:
case 38:
case 1444:
case 2177:
case 1995:
case 3029:
case 1622:
case 700:
case 1200:
case 3342:
case 222:
case 3790:
case 4089:
case 979:
case 3895:
case 272:
case 2114:
case 896:
case 1066:
case 2151:
case 2815:
case 193:
case 1309:
case 1536:
case 1634:
case 3836:
case 1920:
case 3289:
case 3983:
case 1306:
case 840:
case 1036:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1673265602/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,];
var gg_b = "1673265602/";

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
