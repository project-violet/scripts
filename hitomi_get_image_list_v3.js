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
case 3392:
case 3485:
case 2461:
case 1858:
case 1696:
case 2916:
case 3992:
case 75:
case 2747:
case 2149:
case 667:
case 3741:
case 410:
case 3576:
case 160:
case 4016:
case 1868:
case 2316:
case 2451:
case 3156:
case 692:
case 1957:
case 540:
case 2019:
case 1985:
case 1522:
case 632:
case 1937:
case 2062:
case 3166:
case 2373:
case 1041:
case 3668:
case 1325:
case 735:
case 3638:
case 2291:
case 2001:
case 3007:
case 1148:
case 2839:
case 638:
case 1070:
case 1582:
case 3896:
case 269:
case 1925:
case 505:
case 1018:
case 1675:
case 3846:
case 1232:
case 2683:
case 2241:
case 1707:
case 1198:
case 1585:
case 649:
case 1922:
case 1537:
case 3542:
case 3278:
case 3913:
case 652:
case 1322:
case 2854:
case 2573:
case 2815:
case 282:
case 1177:
case 1886:
case 1779:
case 3976:
case 1721:
case 3100:
case 3422:
case 722:
case 1672:
case 2405:
case 2516:
case 1413:
case 477:
case 1781:
case 3995:
case 2144:
case 3603:
case 2710:
case 623:
case 626:
case 717:
case 2660:
case 3395:
case 2893:
case 728:
case 2194:
case 1982:
case 2035:
case 151:
case 755:
case 2065:
case 2843:
case 3686:
case 288:
case 2055:
case 658:
case 2912:
case 1446:
case 783:
case 560:
case 4069:
case 3396:
case 688:
case 2339:
case 1708:
case 2312:
case 3080:
case 2969:
case 181:
case 2939:
case 3667:
case 3685:
case 2631:
case 223:
case 3717:
case 2711:
case 1496:
case 2593:
case 3119:
case 2224:
case 3132:
case 3784:
case 3946:
case 1749:
case 3008:
case 3298:
case 920:
case 909:
case 3099:
case 3209:
case 376:
case 1958:
case 373:
case 1368:
case 3625:
case 714:
case 1475:
case 1720:
case 2709:
case 244:
case 2798:
case 1586:
case 531:
case 3724:
case 2515:
case 103:
case 252:
case 2406:
case 3375:
case 479:
case 1867:
case 1885:
case 1266:
case 249:
case 2748:
case 1236:
case 3975:
case 3729:
case 3127:
case 2088:
case 2179:
case 2777:
case 2393:
case 1926:
case 2704:
case 4093:
case 1753:
case 1733:
case 3622:
case 1472:
case 1763:
case 2993:
case 1326:
case 1613:
case 669:
case 408:
case 238:
case 37:
case 1071:
case 2343:
case 2569:
case 2290:
case 1882:
case 2559:
case 2943:
case 3372:
case 350:
case 3063:
case 3426:
case 2934:
case 1288:
case 402:
case 4054:
case 3575:
case 2354:
case 4034:
case 4064:
case 292:
case 2915:
case 1903:
case 3094:
case 2450:
case 2271:
case 3135:
case 3740:
case 3789:
case 3403:
case 1538:
case 1090:
case 811:
case 2229:
case 1645:
case 1558:
case 3155:
case 3682:
case 2460:
case 1276:
case 3800:
case 1310:
case 891:
case 3965:
case 3987:
case 2045:
case 3314:
case 2574:
case 572:
case 3355:
case 1186:
case 2507:
case 1877:
case 4081:
case 3335:
case 2381:
case 1910:
case 3387:
case 2690:
case 3365:
case 600:
case 3955:
case 2095:
case 2205:
case 3410:
case 3888:
case 3222:
case 2134:
case 1455:
case 624:
case 1435:
case 212:
case 1487:
case 377:
case 2640:
case 3282:
case 643:
case 2894:
case 2629:
case 645:
case 227:
case 218:
case 3677:
case 2143:
case 2979:
case 1295:
case 1126:
case 578:
case 3532:
case 3927:
case 26:
case 2193:
case 2470:
case 3609:
case 2251:
case 960:
case 1401:
case 2624:
case 2899:
case 3836:
case 1578:
case 263:
case 1242:
case 266:
case 3175:
case 3702:
case 7:
case 2231:
case 3237:
case 271:
case 2725:
case 1510:
case 3301:
case 64:
case 1158:
case 4074:
case 3555:
case 2581:
case 3535:
case 520:
case 509:
case 1138:
case 480:
case 3587:
case 2418:
case 851:
case 2849:
case 2880:
case 3901:
case 1347:
case 3952:
case 3332:
case 3362:
case 1809:
case 3319:
case 2521:
case 3527:
case 3962:
case 310:
case 3447:
case 3751:
case 2112:
case 2159:
case 2757:
case 1462:
case 1397:
case 3761:
case 2737:
case 1452:
case 2139:
case 1419:
case 3196:
case 3731:
case 2092:
case 1997:
case 1764:
case 507:
case 3610:
case 1734:
case 762:
case 3145:
case 3730:
case 1272:
case 3760:
case 1635:
case 1687:
case 1754:
case 2440:
case 172:
case 1715:
case 1060:
case 2944:
case 2786:
case 3195:
case 1598:
case 3226:
case 2520:
case 2879:
case 1509:
case 2821:
case 3015:
case 4044:
case 450:
case 3865:
case 4063:
case 881:
case 2881:
case 3900:
case 3835:
case 1977:
case 71:
case 2726:
case 2549:
case 2580:
case 2072:
case 4053:
case 2353:
case 1304:
case 1511:
case 3043:
case 3814:
case 47:
case 768:
case 1878:
case 666:
case 3988:
case 1743:
case 3093:
case 178:
case 3556:
case 1627:
case 2471:
case 981:
case 1309:
case 2758:
case 4020:
case 66:
case 1083:
case 379:
case 2544:
case 2920:
case 2075:
case 3832:
case 475:
case 3498:
case 2223:
case 940:
case 3409:
case 2424:
case 713:
case 627:
case 245:
case 1125:
case 243:
case 111:
case 461:
case 715:
case 1296:
case 3528:
case 473:
case 2173:
case 2641:
case 3366:
case 2484:
case 3336:
case 1712:
case 4008:
case 3647:
case 1632:
case 224:
case 2283:
case 789:
case 3142:
case 1275:
case 80:
case 1652:
case 1185:
case 1167:
case 3356:
case 1739:
case 1137:
case 3588:
case 2417:
case 2563:
case 200:
case 2533:
case 1911:
case 905:
case 2691:
case 4049:
case 4080:
case 3697:
case 2349:
case 2380:
case 3069:
case 3268:
case 490:
case 906:
case 2206:
case 3238:
case 2096:
case 903:
case 3039:
case 3500:
case 1504:
case 2874:
case 2553:
case 2807:
case 1577:
case 3801:
case 2949:
case 3002:
case 1901:
case 574:
case 2106:
case 1587:
case 2025:
case 431:
case 2970:
case 201:
case 1648:
case 2817:
case 4070:
case 219:
case 579:
case 1237:
case 69:
case 1285:
case 1702:
case 4018:
case 2318:
case 2183:
case 2407:
case 2474:
case 1856:
case 3401:
case 622:
case 1698:
case 1609:
case 2742:
case 2991:
case 1611:
case 3419:
case 725:
case 941:
case 121:
case 1225:
case 1761:
case 3397:
case 3773:
case 617:
case 2391:
case 3432:
case 723:
case 2123:
case 110:
case 628:
case 2037:
case 1146:
case 285:
case 3031:
case 1932:
case 2085:
case 3947:
case 2792:
case 3809:
case 3898:
case 980:
case 1497:
case 656:
case 3716:
case 1332:
case 2699:
case 1952:
case 2608:
case 1919:
case 3051:
case 2341:
case 3666:
case 2057:
case 2150:
case 841:
case 670:
case 3435:
case 2481:
case 3378:
case 767:
case 1888:
case 65:
case 28:
case 2130:
case 502:
case 3978:
case 1955:
case 1914:
case 307:
case 3628:
case 1478:
case 451:
case 1335:
case 1355:
case 3877:
case 2795:
case 3804:
case 732:
case 1314:
case 72:
case 1965:
case 1987:
case 3310:
case 2829:
case 2082:
case 696:
case 1327:
case 2776:
case 636:
case 1562:
case 2889:
case 738:
case 2653:
case 1604:
case 2421:
case 3600:
case 2479:
case 1705:
case 3597:
case 2713:
case 2663:
case 1828:
case 2890:
case 3948:
case 2775:
case 3897:
case 3006:
case 2038:
case 1528:
case 2239:
case 2269:
case 2068:
case 764:
case 2674:
case 2212:
case 2058:
case 1409:
case 1832:
case 2540:
case 295:
case 2924:
case 1862:
case 769:
case 3998:
case 2841:
case 236:
case 3847:
case 403:
case 405:
case 179:
case 1448:
case 2324:
case 304:
case 930:
case 296:
case 1819:
case 2571:
case 3577:
case 2529:
case 1500:
case 1238:
case 1268:
case 2746:
case 1012:
case 1059:
case 3436:
case 850:
case 2499:
case 481:
case 4084:
case 2384:
case 2161:
case 3137:
case 68:
case 1411:
case 1356:
case 3739:
case 973:
case 2131:
case 2796:
case 3275:
case 1142:
case 3662:
case 2449:
case 270:
case 1956:
case 3632:
case 1647:
case 975:
case 3759:
case 1366:
case 3157:
case 2389:
case 97:
case 2494:
case 3050:
case 1054:
case 788:
case 2293:
case 1015:
case 1678:
case 255:
case 2940:
case 577:
case 2524:
case 3509:
case 950:
case 1226:
case 1195:
case 3060:
case 3715:
case 2243:
case 2390:
case 3665:
case 1750:
case 4090:
case 1328:
case 2681:
case 3655:
case 747:
case 1760:
case 3734:
case 875:
case 1388:
case 378:
case 3400:
case 1093:
case 614:
case 2264:
case 2234:
case 3122:
case 2433:
case 2026:
case 1536:
case 2772:
case 4071:
case 3304:
case 1855:
case 3377:
case 4029:
case 890:
case 2971:
case 601:
case 3904:
case 1835:
case 830:
case 2929:
case 2584:
case 1887:
case 1865:
case 810:
case 1376:
case 3672:
case 3255:
case 1422:
case 699:
case 3214:
case 6:
case 821:
case 3287:
case 1976:
case 550:
case 3235:
case 2727:
case 2281:
case 3779:
case 2643:
case 268:
case 639:
case 1626:
case 3557:
case 2305:
case 2850:
case 74:
case 1913:
case 2860:
case 2693:
case 1542:
case 634:
case 1079:
case 1188:
case 3537:
case 3922:
case 297:
case 3495:
case 3382:
case 1686:
case 407:
case 2190:
case 3982:
case 1872:
case 2714:
case 1395:
case 3445:
case 2634:
case 2654:
case 1995:
case 262:
case 2078:
case 3781:
case 2735:
case 2140:
case 2416:
case 1513:
case 1875:
case 3357:
case 3937:
case 2961:
case 2931:
case 2951:
case 1342:
case 4061:
case 2361:
case 700:
case 3367:
case 1156:
case 3385:
case 2732:
case 2184:
case 1457:
case 2473:
case 1576:
case 2097:
case 2274:
case 2612:
case 1992:
case 2659:
case 2639:
case 3696:
case 724:
case 2669:
case 530:
case 3858:
case 2117:
case 3111:
case 659:
case 1392:
case 3109:
case 910:
case 648:
case 1770:
case 746:
case 3262:
case 743:
case 3232:
case 3219:
case 3252:
case 213:
case 1896:
case 3925:
case 561:
case 573:
case 1074:
case 1007:
case 1297:
case 1545:
case 2902:
case 576:
case 1638:
case 180:
case 3325:
case 2823:
case 1668:
case 2302:
case 687:
case 1718:
case 1426:
case 1033:
case 150:
case 287:
case 1063:
case 3676:
case 657:
case 1596:
case 3228:
case 2493:
case 1845:
case 3613:
case 3763:
case 3472:
case 616:
case 1622:
case 3733:
case 1895:
case 615:
case 478:
case 30:
case 1127:
case 2443:
case 1729:
case 2700:
case 3110:
case 259:
case 2263:
case 1155:
case 3558:
case 1114:
case 3645:
case 712:
case 1165:
case 2454:
case 1187:
case 1876:
case 2506:
case 242:
case 1135:
case 1740:
case 1789:
case 2415:
case 472:
case 3744:
case 2253:
case 1094:
case 684:
case 2330:
case 2360:
case 3695:
case 1486:
case 3303:
case 2805:
case 1575:
case 1813:
case 2960:
case 3089:
case 3288:
case 1790:
case 2728:
case 1209:
case 2220:
case 1298:
case 3147:
case 2673:
case 3749:
case 3780:
case 974:
case 1657:
case 2141:
case 1946:
case 662:
case 2412:
case 3642:
case 1717:
case 1685:
case 2616:
case 2323:
case 3825:
case 4023:
case 1996:
case 3084:
case 1049:
case 1080:
case 2766:
case 637:
case 1248:
case 1572:
case 3197:
case 3799:
case 3708:
case 2736:
case 2756:
case 190:
case 697:
case 3692:
case 2208:
case 2098:
case 1842:
case 1975:
case 2530:
case 1020:
case 541:
case 2560:
case 3885:
case 2831:
case 305:
case 2383:
case 3024:
case 61:
case 3837:
case 404:
case 1375:
case 2118:
case 802:
case 1468:
case 2851:
case 2983:
case 294:
case 3256:
case 771:
case 3938:
case 1724:
case 2170:
case 175:
case 409:
case 3586:
case 1892:
case 2249:
case 2:
case 763:
case 3358:
case 4006:
case 161:
case 1211:
case 3958:
case 1550:
case 194:
case 3406:
case 3873:
case 853:
case 3554:
case 2468:
case 352:
case 3515:
case 1383:
case 3534:
case 1861:
case 1530:
case 1560:
case 349:
case 273:
case 828:
case 2211:
case 3602:
case 276:
case 95:
case 817:
case 261:
case 1048:
case 2892:
case 3483:
case 3107:
case 1280:
case 1249:
case 445:
case 970:
case 2101:
case 2724:
case 1906:
case 1170:
case 2637:
case 3661:
case 3056:
case 2685:
case 3593:
case 326:
case 83:
case 1469:
case 325:
case 2132:
case 424:
case 3224:
case 1412:
case 2209:
case 2099:
case 2298:
case 3423:
case 3036:
case 2008:
case 3651:
case 1141:
case 2657:
case 3912:
case 995:
case 1011:
case 936:
case 3369:
case 2572:
case 1802:
case 3359:
case 1736:
case 1191:
case 1323:
case 3939:
case 2996:
case 589:
case 996:
case 230:
case 2277:
case 93:
case 3229:
case 1454:
case 597:
case 2187:
case 2403:
case 142:
case 2789:
case 2740:
case 1415:
case 1434:
case 2114:
case 99:
case 1233:
case 3430:
case 1263:
case 3964:
case 2790:
case 895:
case 1728:
case 3354:
case 2575:
case 32:
case 2044:
case 1960:
case 2486:
case 1583:
case 3364:
case 154:
case 1950:
case 562:
case 392:
case 2972:
case 338:
case 1294:
case 953:
case 1493:
case 3290:
case 3569:
case 4072:
case 680:
case 3559:
case 955:
case 2033:
case 187:
case 250:
case 3088:
case 2546:
case 3121:
case 3704:
case 85:
case 3393:
case 3179:
case 1244:
case 2771:
case 641:
case 3993:
case 709:
case 3402:
case 116:
case 241:
case 113:
case 463:
case 465:
case 2770:
case 711:
case 3120:
case 2595:
case 88:
case 3241:
case 3812:
case 2718:
case 2638:
case 280:
case 1823:
case 704:
case 2074:
case 2297:
case 2007:
case 1902:
case 2545:
case 3001:
case 3869:
case 986:
case 2896:
case 983:
case 369:
case 1361:
case 184:
case 2156:
case 3218:
case 901:
case 1951:
case 3019:
case 2342:
case 1931:
case 3032:
case 1047:
case 2136:
case 2513:
case 3199:
case 1351:
case 2485:
case 4092:
case 1752:
case 3431:
case 2392:
case 1719:
case 1639:
case 3916:
case 189:
case 1669:
case 1097:
case 914:
case 1274:
case 1612:
case 3747:
case 1659:
case 1732:
case 1184:
case 1762:
case 1806:
case 1473:
case 3194:
case 2872:
case 3065:
case 801:
case 1190:
case 3055:
case 2686:
case 388:
case 3843:
case 2345:
case 819:
case 197:
case 1735:
case 1221:
case 1787:
case 554:
case 3650:
case 1654:
case 347:
case 3144:
case 1279:
case 2995:
case 412:
case 1078:
case 1664:
case 814:
case 3710:
case 772:
case 4095:
case 1171:
case 1643:
case 675:
case 168:
case 1129:
case 587:
case 2976:
case 661:
case 3133:
case 2210:
case 3516:
case 676:
case 2376:
case 4076:
case 3405:
case 1561:
case 2188:
case 3027:
case 2021:
case 1531:
case 1860:
case 2913:
case 46:
case 2542:
case 2278:
case 2079:
case 1850:
case 548:
case 886:
case 382:
case 2626:
case 2313:
case 3815:
case 4013:
case 883:
case 3573:
case 959:
case 1433:
case 2113:
case 2566:
case 19:
case 2988:
case 942:
case 1254:
case 122:
case 3471:
case 4088:
case 2477:
case 2556:
case 1621:
case 1929:
case 3881:
case 3333:
case 2900:
case 2865:
case 3072:
case 954:
case 2286:
case 3549:
case 4000:
case 1329:
case 3963:
case 34:
case 1517:
case 1371:
case 2814:
case 2043:
case 3353:
case 208:
case 2855:
case 3879:
case 3944:
case 834:
case 2064:
case 1989:
case 1940:
case 751:
case 2054:
case 1293:
case 2015:
case 153:
case 42:
case 202:
case 2678:
case 3344:
case 1340:
case 1389:
case 839:
case 1086:
case 2760:
case 2145:
case 621:
case 1390:
case 899:
case 4028:
case 2750:
case 1681:
case 1444:
case 948:
case 1243:
case 3703:
case 3394:
case 887:
case 3563:
case 1384:
case 300:
case 3349:
case 2697:
case 934:
case 3691:
case 2012:
case 2039:
case 2500:
case 2238:
case 3980:
case 3949:
case 458:
case 3553:
case 1151:
case 3399:
case 2336:
case 1818:
case 3484:
case 4066:
case 3173:
case 3283:
case 1480:
case 999:
case 2142:
case 423:
case 3417:
case 1161:
case 3046:
case 2411:
case 2356:
case 760:
case 4056:
case 274:
case 1420:
case 2498:
case 2783:
case 501:
case 1607:
case 444:
case 1212:
case 2528:
case 1038:
case 842:
case 346:
case 1269:
case 343:
case 3594:
case 1775:
case 3758:
case 196:
case 3320:
case 2819:
case 135:
case 1324:
case 731:
case 3075:
case 136:
case 133:
case 2832:
case 195:
case 3768:
case 791:
case 514:
case 3844:
case 522:
case 997:
case 3979:
case 53:
case 1776:
case 2927:
case 3193:
case 36:
case 3379:
case 59:
case 4027:
case 2327:
case 884:
case 3321:
case 2172:
case 70:
case 1713:
case 327:
case 3629:
case 1479:
case 3671:
case 2604:
case 1421:
case 318:
case 2410:
case 1745:
case 3164:
case 2222:
case 1518:
case 3154:
case 816:
case 1481:
case 1644:
case 3689:
case 2965:
case 517:
case 2800:
case 1570:
case 1082:
case 3853:
case 3574:
case 1871:
case 3690:
case 4087:
case 3863:
case 857:
case 3381:
case 2478:
case 2914:
case 1694:
case 1123:
case 1649:
case 1391:
case 2751:
case 915:
case 2731:
case 2196:
case 3785:
case 3139:
case 3169:
case 3737:
case 916:
case 2761:
case 3617:
case 1991:
case 2611:
case 3202:
case 740:
case 1608:
case 183:
case 2919:
case 55:
case 4062:
case 602:
case 2352:
case 2319:
case 1792:
case 3579:
case 3820:
case 3042:
case 2962:
case 2146:
case 570:
case 781:
case 3521:
case 185:
case 1067:
case 608:
case 119:
case 1370:
case 3374:
case 706:
case 2555:
case 4001:
case 1817:
case 2514:
case 703:
case 1884:
case 2565:
case 1106:
case 2535:
case 1970:
case 3581:
case 3907:
case 984:
case 3880:
case 2609:
case 1918:
case 533:
case 3470:
case 1273:
case 365:
case 2856:
case 114:
case 464:
case 2866:
case 596:
case 366:
case 2175:
case 862:
case 2836:
case 3808:
case 989:
case 3261:
case 3725:
case 371:
case 535:
case 2237:
case 3231:
case 3796:
case 2185:
case 2739:
case 2167:
case 2137:
case 3161:
case 2619:
case 2632:
case 370:
case 1173:
case 2157:
case 3818:
case 3151:
case 2456:
case 2577:
case 4011:
case 838:
case 3984:
case 3746:
case 1096:
case 1206:
case 3870:
case 3917:
case 1380:
case 1349:
case 607:
case 129:
case 3384:
case 100:
case 3499:
case 1116:
case 2436:
case 3408:
case 1533:
case 949:
case 3924:
case 1738:
case 395:
case 1768:
case 3540:
case 3589:
case 958:
case 2847:
case 1544:
case 333:
case 1618:
case 3841:
case 2909:
case 832:
case 571:
case 2083:
case 780:
case 393:
case 396:
case 1320:
case 3102:
case 2897:
case 1594:
case 3775:
case 499:
case 926:
case 3590:
case 1424:
case 3058:
case 3212:
case 3607:
case 4048:
case 2348:
case 439:
case 1670:
case 1223:
case 3420:
case 2793:
case 2377:
case 2488:
case 3517:
case 2810:
case 1963:
case 14:
case 932:
case 518:
case 3971:
case 1549:
case 1580:
case 1072:
case 3584:
case 1881:
case 527:
case 0:
case 448:
case 1471:
case 2743:
case 3215:
case 322:
case 826:
case 823:
case 1429:
case 2122:
case 825:
case 3105:
case 56:
case 1508:
case 2754:
case 1440:
case 2715:
case 3243:
case 3681:
case 2687:
case 2665:
case 1994:
case 2272:
case 844:
case 3086:
case 2655:
case 2734:
case 3494:
case 3340:
case 353:
case 1490:
case 3003:
case 2428:
case 998:
case 1944:
case 2060:
case 2509:
case 3067:
case 3085:
case 524:
case 2031:
case 730:
case 3824:
case 484:
case 2898:
case 2809:
case 1820:
case 790:
case 2716:
case 3057:
case 2666:
case 3341:
case 4047:
case 2051:
case 2347:
case 2848:
case 1202:
case 1092:
case 3742:
case 1617:
case 529:
case 500:
case 2452:
case 1785:
case 1767:
case 489:
case 1112:
case 1159:
case 2462:
case 2397:
case 3680:
case 3649:
case 1684:
case 672:
case 171:
case 1899:
case 2578:
case 413:
case 847:
case 2242:
case 3318:
case 314:
case 761:
case 3474:
case 415:
case 3918:
case 3620:
case 2002:
case 1581:
case 2138:
case 1418:
case 3884:
case 888:
case 2811:
case 1374:
case 319:
case 543:
case 3370:
case 3216:
case 620:
case 468:
case 3421:
case 1671:
case 3479:
case 3591:
case 2245:
case 3890:
case 54:
case 3663:
case 1076:
case 3633:
case 1722:
case 604:
case 16:
case 41:
case 1379:
case 1193:
case 1921:
case 3022:
case 3776:
case 2005:
case 2295:
case 2126:
case 77:
case 1013:
case 3694:
case 207:
case 437:
case 1045:
case 3795:
case 2804:
case 1507:
case 2877:
case 2186:
case 3570:
case 497:
case 1689:
case 1115:
case 3644:
case 462:
case 112:
case 2435:
case 2103:
case 1154:
case 3518:
case 1782:
case 864:
case 1205:
case 3130:
case 38:
case 3360:
case 1915:
case 455:
case 3583:
case 132:
case 3960:
case 12:
case 453:
case 1354:
case 3728:
case 3350:
case 2040:
case 2089:
case 359:
case 3263:
case 1460:
case 777:
case 1430:
case 2645:
case 3434:
case 2386:
case 3464:
case 4086:
case 1181:
case 342:
case 167:
case 3506:
case 2538:
case 417:
case 2200:
case 660:
case 428:
case 2744:
case 2986:
case 1271:
case 4026:
case 2613:
case 2733:
case 824:
case 1777:
case 582:
case 348:
case 1240:
case 1289:
case 3443:
case 2676:
case 829:
case 800:
case 3523:
case 1512:
case 198:
case 1569:
case 3788:
case 1000:
case 2029:
case 2228:
case 2882:
case 3077:
case 3294:
case 1284:
case 339:
case 2938:
case 3906:
case 2720:
case 144:
case 3249:
case 3:
case 3048:
case 2586:
case 1483:
case 924:
case 4068:
case 569:
case 2475:
case 3306:
case 2338:
case 1217:
case 149:
case 3560:
case 3299:
case 2236:
case 900:
case 3861:
case 334:
case 3831:
case 1564:
case 2867:
case 433:
case 203:
case 1873:
case 2503:
case 436:
case 394:
case 564:
case 3983:
case 495:
case 2084:
case 2825:
case 3191:
case 3736:
case 1359:
case 2708:
case 2799:
case 2197:
case 3802:
case 1369:
case 1339:
case 3756:
case 3011:
case 2692:
case 2446:
case 1543:
case 3141:
case 1066:
case 3673:
case 2780:
case 2749:
case 2526:
case 1423:
case 1036:
case 1651:
case 1224:
case 721:
case 125:
case 470:
case 45:
case 2642:
case 1711:
case 2496:
case 943:
case 1631:
case 1056:
case 1661:
case 1660:
case 532:
case 3714:
case 1710:
case 2445:
case 866:
case 3078:
case 3615:
case 3279:
case 147:
case 863:
case 3654:
case 640:
case 871:
case 918:
case 2227:
case 2382:
case 4082:
case 3010:
case 1014:
case 188:
case 1055:
case 251:
case 337:
case 3502:
case 681:
case 1778:
case 2476:
case 1573:
case 2557:
case 3551:
case 4022:
case 603:
case 3850:
case 3830:
case 3905:
case 31:
case 605:
case 3531:
case 2585:
case 2537:
case 2413:
case 1516:
case 2214:
case 538:
case 2255:
case 2672:
case 3281:
case 3727:
case 2721:
case 2104:
case 2886:
case 2779:
case 3643:
case 3171:
case 291:
case 2070:
case 2582:
case 2925:
case 169:
case 1869:
case 4025:
case 2325:
case 401:
case 779:
case 357:
case 1812:
case 1859:
case 2707:
case 552:
case 2198:
case 1120:
case 2109:
case 414:
case 1683:
case 315:
case 313:
case 549:
case 2252:
case 812:
case 2675:
case 774:
case 2838:
case 3806:
case 3184:
case 1270:
case 1316:
case 1451:
case 1180:
case 2442:
case 827:
case 1916:
case 1431:
case 971:
case 3752:
case 818:
case 2357:
case 523:
case 2041:
case 1797:
case 1199:
case 1108:
case 526:
case 2985:
case 3931:
case 1062:
case 1218:
case 485:
case 3331:
case 4085:
case 3883:
case 4037:
case 525:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1757926801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,];
var gg_b = "1757926801/";

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
