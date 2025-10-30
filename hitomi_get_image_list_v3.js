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
case 2746:
case 510:
case 165:
case 2669:
case 358:
case 3197:
case 317:
case 1374:
case 3219:
case 2133:
case 1507:
case 2744:
case 4082:
case 1170:
case 1580:
case 425:
case 905:
case 1815:
case 917:
case 3917:
case 3931:
case 4019:
case 2859:
case 3061:
case 1661:
case 1293:
case 861:
case 186:
case 379:
case 1720:
case 1254:
case 3718:
case 972:
case 4067:
case 3321:
case 2822:
case 3417:
case 2043:
case 2570:
case 372:
case 2180:
case 61:
case 2386:
case 2313:
case 1848:
case 1309:
case 2631:
case 2563:
case 979:
case 10:
case 3478:
case 2892:
case 2950:
case 3391:
case 1324:
case 4015:
case 1008:
case 3608:
case 1819:
case 1396:
case 312:
case 2780:
case 746:
case 919:
case 1436:
case 1064:
case 870:
case 2464:
case 391:
case 583:
case 1353:
case 1326:
case 3587:
case 1120:
case 3177:
case 319:
case 3057:
case 3215:
case 1394:
case 4051:
case 3465:
case 3749:
case 1910:
case 3666:
case 2707:
case 3118:
case 2466:
case 669:
case 690:
case 912:
case 3042:
case 3727:
case 1642:
case 341:
case 261:
case 2144:
case 3312:
case 2698:
case 1763:
case 3389:
case 326:
case 2230:
case 59:
case 2872:
case 3893:
case 3371:
case 4048:
case 1867:
case 2966:
case 883:
case 432:
case 1410:
case 2340:
case 406:
case 3428:
case 210:
case 1260:
case 3248:
case 2855:
case 2628:
case 84:
case 1157:
case 3891:
case 2392:
case 3373:
case 1077:
case 3020:
case 3677:
case 369:
case 2477:
case 2268:
case 3166:
case 1348:
case 2813:
case 2418:
case 3360:
case 2945:
case 1528:
case 720:
case 3946:
case 619:
case 2432:
case 508:
case 1018:
case 1987:
case 2204:
case 4005:
case 1238:
case 224:
case 151:
case 2717:
case 3108:
case 2731:
case 847:
case 1900:
case 1690:
case 362:
case 2542:
case 3821:
case 1289:
case 3164:
case 1462:
case 990:
case 788:
case 37:
case 969:
case 2359:
case 1598:
case 2062:
case 3944:
case 2884:
case 2932:
case 3446:
case 1487:
case 3645:
case 3253:
case 3226:
case 3294:
case 2918:
case 2087:
case 2646:
case 4024:
case 175:
case 3534:
case 299:
case 677:
case 1565:
case 2128:
case 4094:
case 626:
case 3224:
case 808:
case 1739:
case 3296:
case 4026:
case 1962:
case 2644:
case 2198:
case 1788:
case 2535:
case 641:
case 1351:
case 1958:
case 2355:
case 2427:
case 1531:
case 592:
case 1285:
case 1670:
case 1742:
case 3209:
case 3543:
case 967:
case 3980:
case 833:
case 1367:
case 2798:
case 1188:
case 3697:
case 367:
case 599:
case 3871:
case 3393:
case 2372:
case 1805:
case 2561:
case 842:
case 247:
case 2497:
case 3889:
case 489:
case 1221:
case 2728:
case 43:
case 3812:
case 605:
case 658:
case 3838:
case 2680:
case 66:
case 2539:
case 4074:
case 542:
case 2178:
case 1894:
case 1853:
case 2927:
case 1826:
case 860:
case 899:
case 31:
case 672:
case 2252:
case 4076:
case 533:
case 1161:
case 811:
case 1382:
case 1757:
case 255:
case 1569:
case 91:
case 3274:
case 1941:
case 1319:
case 2303:
case 297:
case 1896:
case 2997:
case 892:
case 2229:
case 1099:
case 4007:
case 1985:
case 2388:
case 1846:
case 2751:
case 3001:
case 3714:
case 1601:
case 2475:
case 2339:
case 3476:
case 3675:
case 468:
case 1519:
case 2249:
case 894:
case 3629:
case 1029:
case 3207:
case 4080:
case 2674:
case 2452:
case 128:
case 3474:
case 767:
case 3783:
case 235:
case 71:
case 4033:
case 2820:
case 2091:
case 2975:
case 1491:
case 1759:
case 484:
case 2085:
case 1331:
case 3013:
case 2999:
case 1613:
case 3343:
case 594:
case 3409:
case 1047:
case 1485:
case 1241:
case 173:
case 2511:
case 2748:
case 3233:
case 2021:
case 638:
case 2890:
case 2952:
case 3593:
case 3084:
case 227:
case 844:
case 3554:
case 2361:
case 3862:
case 3502:
case 2968:
case 1365:
case 3334:
case 113:
case 3858:
case 3426:
case 603:
case 3246:
case 3625:
case 2357:
case 2425:
case 2782:
case 2245:
case 1159:
case 2481:
case 3130:
case 1079:
case 1200:
case 1912:
case 3679:
case 388:
case 77:
case 2906:
case 1807:
case 1971:
case 2495:
case 762:
case 646:
case 835:
case 1095:
case 4046:
case 2624:
case 1328:
case 253:
case 1548:
case 876:
case 1711:
case 2218:
case 3560:
case 3926:
case 3953:
case 535:
case 2404:
case 2115:
case 3668:
case 3183:
case 3116:
case 2863:
case 3310:
case 229:
case 3405:
case 3606:
case 1006:
case 2406:
case 2767:
case 2089:
case 696:
case 2605:
case 1755:
case 2012:
case 827:
case 2979:
case 131:
case 2981:
case 364:
case 2522:
case 1412:
case 3841:
case 1030:
case 791:
case 3179:
case 3059:
case 2861:
case 3571:
case 3181:
case 3298:
case 4028:
case 321:
case 3747:
case 3022:
case 712:
case 1622:
case 1786:
case 3951:
case 2709:
case 1713:
case 459:
case 903:
case 3195:
case 1460:
case 3228:
case 2983:
case 2916:
case 1831:
case 2648:
case 303:
case 2060:
case 452:
case 620:
case 1878:
case 434:
case 1784:
case 401:
case 2320:
case 946:
case 1692:
case 3092:
case 2540:
case 664:
case 3300:
case 3106:
case 726:
case 285:
case 2264:
case 4065:
case 3451:
case 3799:
case 3775:
case 52:
case 2930:
case 1524:
case 2208:
case 1014:
case 314:
case 1234:
case 1402:
case 996:
case 2002:
case 914:
case 1346:
case 3683:
case 3752:
case 1526:
case 2615:
case 1594:
case 2774:
case 1960:
case 2483:
case 1016:
case 3521:
case 3341:
case 3011:
case 1637:
case 3704:
case 866:
case 181:
case 1333:
case 1898:
case 1493:
case 2054:
case 758:
case 1740:
case 1454:
case 3768:
case 3152:
case 4031:
case 2363:
case 3810:
case 22:
case 495:
case 2667:
case 3199:
case 3706:
case 3467:
case 3591:
case 585:
case 2370:
case 2586:
case 374:
case 1101:
case 3231:
case 3217:
case 3175:
case 3585:
case 457:
case 1456:
case 418:
case 1243:
case 1655:
case 1954:
case 2619:
case 885:
case 3003:
case 2682:
case 779:
case 2835:
case 3725:
case 3482:
case 1184:
case 3836:
case 3269:
case 2857:
case 1956:
case 1923:
case 3781:
case 76:
case 3779:
case 3358:
case 2724:
case 2109:
case 566:
case 4069:
case 772:
case 3147:
case 1865:
case 1380:
case 1186:
case 2796:
case 445:
case 1576:
case 1408:
case 732:
case 1803:
case 865:
case 1464:
case 1036:
case 3636:
case 3758:
case 3379:
case 3162:
case 3435:
case 2882:
case 2635:
case 978:
case 2436:
case 3942:
case 3545:
case 2326:
case 496:
case 2546:
case 739:
case 3634:
case 1707:
case 1034:
case 743:
case 3065:
case 2202:
case 2066:
case 2434:
case 3222:
case 301:
case 1144:
case 886:
case 2936:
case 1837:
case 1964:
case 2642:
case 2770:
case 923:
case 3306:
case 1230:
case 1872:
case 3259:
case 3098:
case 2305:
case 1908:
case 3368:
case 2410:
case 2934:
case 3577:
case 1966:
case 421:
case 3292:
case 1010:
case 1855:
case 1733:
case 446:
case 3518:
case 565:
case 323:
case 4059:
case 345:
case 737:
case 265:
case 1746:
case 3069:
case 1669:
case 684:
case 3352:
case 3141:
case 170:
case 3549:
case 3961:
case 1133:
case 1301:
case 19:
case 2050:
case 1744:
case 1450:
case 3375:
case 438:
case 3439:
case 2163:
case 3816:
case 2688:
case 4003:
case 2943:
case 850:
case 3700:
case 3488:
case 3883:
case 3597:
case 2720:
case 357:
case 2254:
case 550:
case 3272:
case 3830:
case 2533:
case 3237:
case 1822:
case 2848:
case 183:
case 1313:
case 2309:
case 3017:
case 1631:
case 3031:
case 1617:
case 3988:
case 2223:
case 2256:
case 3643:
case 3255:
case 1570:
case 3527:
case 2790:
case 4011:
case 3762:
case 1563:
case 3078:
case 14:
case 1678:
case 2285:
case 2742:
case 2139:
case 3213:
case 3804:
case 2958:
case 3470:
case 1355:
case 2531:
case 2517:
case 171:
case 1247:
case 2367:
case 2663:
case 2291:
case 2188:
case 1840:
case 3463:
case 3710:
case 1949:
case 1169:
case 95:
case 3284:
case 1372:
case 4013:
case 298:
case 575:
case 3033:
case 2441:
case 1311:
case 645:
case 3963:
case 536:
case 1117:
case 1539:
case 875:
case 1275:
case 3550:
case 2853:
case 1927:
case 3970:
case 2458:
case 968:
case 502:
case 3825:
case 1058:
case 551:
case 3736:
case 3658:
case 2894:
case 3881:
case 2382:
case 2757:
case 695:
case 2569:
case 368:
case 1252:
case 248:
case 3879:
case 3895:
case 2319:
case 1765:
case 509:
case 1449:
case 1303:
case 1229:
case 1607:
case 464:
case 3240:
case 1268:
case 2620:
case 2077:
case 678:
case 3134:
case 2018:
case 1886:
case 1204:
case 2987:
case 133:
case 2809:
case 2528:
case 2032:
case 548:
case 2900:
case 3743:
case 202:
case 2690:
case 1322:
case 124:
case 1731:
case 1717:
case 4040:
case 3490:
case 1778:
case 2598:
case 1359:
case 2271:
case 3662:
case 1206:
case 1884:
case 236:
case 3136:
case 898:
case 2135:
case 2462:
case 3046:
case 1646:
case 1225:
case 3383:
case 1932:
case 3316:
case 3110:
case 1128:
case 3875:
case 3566:
case 300:
case 515:
case 160:
case 1977:
case 2876:
case 659:
case 2565:
case 3829:
case 3508:
case 1644:
case 111:
case 1295:
case 900:
case 2142:
case 1535:
case 787:
case 652:
case 420:
case 3600:
case 1000:
case 2351:
case 192:
case 601:
case 2874:
case 1198:
case 3366:
case 213:
case 2703:
case 1968:
case 3940:
case 2365:
case 1719:
case 68:
case 643:
case 3583:
case 1782:
case 3026:
case 880:
case 1245:
case 1653:
case 1626:
case 3094:
case 573:
case 3516:
case 2025:
case 3364:
case 2551:
case 632:
case 1335:
case 2081:
case 194:
case 1481:
case 2912:
case 2079:
case 116:
case 2200:
case 606:
case 2095:
case 1624:
case 2989:
case 828:
case 3024:
case 3096:
case 1906:
case 2807:
case 2971:
case 1870:
case 3827:
case 1404:
case 700:
case 3102:
case 2328:
case 1925:
case 693:
case 47:
case 2004:
case 2737:
case 1218:
case 462:
case 1863:
case 3440:
case 4090:
case 3754:
case 3220:
case 2772:
case 3530:
case 1089:
case 1767:
case 256:
case 2398:
case 3005:
case 2471:
case 1995:
case 1071:
case 2489:
case 3897:
case 1151:
case 3638:
case 3756:
case 204:
case 1038:
case 122:
case 1979:
case 1012:
case 4020:
case 490:
case 231:
case 2833:
case 2846:
case 504:
case 1751:
case 2258:
case 3986:
case 3913:
case 531:
case 1167:
case 1388:
case 2601:
case 1339:
case 2029:
case 3984:
case 2137:
case 784:
case 1503:
case 1715:
case 2172:
case 2921:
case 1452:
case 3074:
case 1674:
case 228:
case 1975:
case 2378:
case 2567:
case 176:
case 3877:
case 1820:
case 389:
case 33:
case 1091:
case 3263:
case 3818:
case 3413:
case 2686:
case 2047:
case 982:
case 2317:
case 2331:
case 1447:
case 3486:
case 1999:
case 2613:
case 3270:
case 3009:
case 1609:
case 1555:
case 1119:
case 2103:
case 1021:
case 1890:
case 3760:
case 2241:
case 1511:
case 1748:
case 625:
case 273:
case 1537:
case 2421:
case 1929:
case 127:
case 1361:
case 4070:
case 831:
case 1182:
case 1572:
case 989:
case 804:
case 93:
case 3484:
case 2611:
case 2637:
case 281:
case 2333:
case 3411:
case 1093:
case 530:
case 745:
case 1174:
case 3472:
case 1054:
case 3771:
case 1705:
case 12:
case 3789:
case 2828:
case 2456:
case 3712:
case 1513:
case 2243:
case 1370:
case 4061:
case 1176:
case 1586:
case 2101:
case 3656:
case 3738:
case 1056:
case 1023:
case 3547:
case 3019:
case 2993:
case 2603:
case 3403:
case 2954:
case 3529:
case 4039:
case 325:
case 563:
case 2184:
case 1794:
case 3937:
case 3552:
case 1835:
case 757:
case 682:
case 1:
case 718:
case 2956:
case 3288:
case 3191:
case 1501:
case 2865:
case 1796:
case 2576:
case 405:
case 3866:
case 1109:
case 1250:
case 3185:
case 3575:
case 458:
case 3791:
case 3459:
case 939:
case 3506:
case 2030:
case 2505:
case 881:
case 1124:
case 3785:
case 1196:
case 332:
case 2831:
case 426:
case 1648:
case 3504:
case 263:
case 3318:
case 2460:
case 343:
case 932:
case 1983:
case 1153:
case 1126:
case 1320:
case 339:
case 2210:
case 1540:
case 2692:
case 778:
case 4042:
case 906:
case 1105:
case 993:
case 1264:
case 2236:
case 3051:
case 1651:
case 3171:
case 3922:
case 185:
case 687:
case 3959:
case 419:
case 4057:
case 701:
case 1002:
case 230:
case 491:
case 1266:
case 1839:
case 4035:
case 2234:
case 2402:
case 581:
case 393:
case 3345:
case 2594:
case 412:
case 2016:
case 3525:
case 1888:
case 2346:
case 2140:
case 1416:
case 759:
case 2083:
case 2553:
case 2526:
case 1015:
case 2752:
case 1345:
case 3774:
case 2948:
case 2415:
case 193:
case 1525:
case 3888:
case 1257:
case 653:
case 2729:
case 2104:
case 2265:
case 1992:
case 3002:
case 3266:
case 3839:
case 2775:
case 3414:
case 1112:
case 761:
case 3776:
case 838:
case 1138:
case 3208:
case 574:
case 1051:
case 2106:
case 3651:
case 2300:
case 1581:
case 622:
case 3105:
case 644:
case 2799:
case 1189:
case 2451:
case 3264:
case 1492:
case 1377:
case 3320:
case 874:
case 18:
case 2448:
case 2843:
case 1318:
case 3983:
case 3916:
case 3648:
case 1504:
case 1048:
case 2022:
case 3390:
case 3196:
case 694:
case 616:
case 366:
case 2630:
case 3861:
case 2362:
case 2059:
case 2298:
case 1459:
case 2181:
case 1791:
case 2967:
case 1866:
case 676:
case 783:
case 1575:
case 3501:
case 2147:
case 2834:
case 2781:
case 521:
case 9:
case 1955:
case 2358:
case 3726:
case 238:
case 3682:
case 2482:
case 125:
case 1937:
case 4050:
case 3794:
case 1403:
case 1529:
case 1019:
case 3586:
case 3370:
case 1455:
case 79:
case 2217:
case 2231:
case 1623:
case 1738:
case 3056:
case 1547:
case 274:
case 3023:
case 1712:
case 2810:
case 596:
case 3363:
case 2199:
case 3667:
case 3584:
case 3174:
case 3054:
case 1472:
case 1654:
case 1903:
case 2768:
case 2072:
case 1693:
case 1261:
case 1397:
case 2521:
case 770:
case 3842:
case 846:
case 635:
case 1411:
case 2037:
case 2129:
case 3572:
case 1773:
case 755:
case 1484:
case 327:
case 4027:
case 3361:
case 2554:
case 976:
case 3748:
case 3537:
case 6:
case 3952:
case 3447:
case 407:
case 0:
case 1832:
case 3085:
case 3227:
case 3555:
case 3999:
case 1486:
case 415:
case 2013:
case 2086:
case 1413:
case 1818:
case 2409:
case 2556:
case 2976:
case 1877:
case 1691:
case 1263:
case 13:
case 3975:
case 2730:
case 747:
case 1074:
case 2652:
case 3429:
case 888:
case 3249:
case 1984:
case 2629:
case 3475:
case 1350:
case 2714:
case 448:
case 62:
case 771:
case 1401:
case 2675:
case 2699:
case 3167:
case 3947:
case 3499:
case 1986:
case 2887:
case 935:
case 3751:
case 3979:
case 1612:
case 711:
case 953:
case 1756:
case 3522:
case 2114:
case 3038:
case 3981:
case 3342:
case 792:
case 3071:
case 4032:
case 2606:
case 1897:
case 187:
case 3089:
case 2924:
case 1530:
case 4018:
case 3559:
case 3115:
case 451:
case 2183:
case 3592:
case 1793:
case 2668:
case 2310:
case 3863:
case 2116:
case 1440:
case 1220:
case 3925:
case 2994:
case 2604:
case 1827:
case 3870:
case 799:
case 436:
case 3906:
case 3696:
case 1096:
case 3495:
case 2244:
case 1308:
case 2695:
case 666:
case 3624:
case 2496:
case 724:
case 316:
case 2130:
case 1364:
case 3479:
case 2681:
case 3335:
case 2858:
case 2246:
case 916:
case 749:
case 3782:
case 1173:
case 3357:
case 994:
case 1053:
case 3653:
case 3968:
case 220:
case 1160:
case 1366:
case 733:
case 2536:
case 3198:
case 3535:
case 1564:
case 1600:
case 3279:
case 999:
case 3295:
case 2444:
case 4025:
case 2224:
case 1829:
case 1044:
case 399:
case 3977:
case 100:
case 2534:
case 81:
case 2302:
case 3128:
case 240:
case 1110:
case 2446:
case 1316:
case 2645:
case 2253:
case 2226:
case 1899:
case 3087:
case 3769:
case 3918:
case 3445:
case 4095:
case 1383:
case 610:
case 3557:
case 1046:
case 3225:
case 2164:
case 27:
case 1662:
case 3778:
case 3884:
case 2108:
case 3731:
case 3717:
case 933:
case 324:
case 4068:
case 2090:
case 3542:
case 262:
case 867:
case 2360:
case 924:
case 333:
case 2885:
case 4006:
case 3165:
case 3432:
case 3204:
case 2618:
case 1134:
case 3392:
case 2891:
case 2677:
case 269:
case 290:
case 349:
case 404:
case 1420:
case 3477:
case 3268:
case 1240:
case 590:
case 3449:
case 3765:
case 569:
case 1734:
case 3229:
case 397:
case 3997:
case 2766:
case 1895:
case 1879:
case 3252:
case 2933:
case 727:
case 355:
case 4075:
case 168:
case 1825:
case 3178:
case 683:
case 776:
case 3058:
case 1658:
case 955:
case 2764:
case 1970:
case 4029:
case 562:
case 3539:
case 3680:
case 57:
case 3275:
case 997:
case 428:
case 1201:
case 3117:
case 2480:
case 3633:
case 1033:
case 2812:
case 3311:
case 1641:
case 3041:
case 87:
case 184:
case 862:
case 2907:
case 735:
case 3372:
case 670:
case 2354:
case 540:
case 3949:
case 347:
case 2889:
case 3840:
case 1463:
case 473:
case 69:
case 2980:
case 947:
case 3798:
case 2063:
case 1470:
case 3247:
case 371:
case 2150:
case 1213:
case 2209:
case 890:
case 2543:
case 2627:
case 3678:
case 3892:
case 2478:
case 26:
case 2267:
case 481:
case 2417:
case 1347:
case 877:
case 3180:
case 1643:
case 1527:
case 383:
case 3313:
case 1988:
case 1017:
case 3617:
case 3107:
case 655:
case 1237:
case 826:
case 2321:
case 2732:
case 2149:
case 2061:
case 3859:
case 1830:
case 7:
case 697:
case 841:
case 1461:
case 541:
case 1883:
case 1488:
case 72:
case 1399:
case 3744:
case 3450:
case 2650:
case 2802:
case 39:
case 1961:
case 3133:
case 1549:
case 647:
case 1814:
case 577:
case 1141:
case 370:
case 99:
case 3746:
case 1352:
case 2197:
case 258:
case 1787:
case 2469:
case 2282:
case 558:
case 517:
case 2823:
case 86:
case 1957:
case 123:
case 2248:
case 1741:
case 310:
case 3855:
case 1610:
case 1292:
case 660:
case 3340:
case 699:
case 2797:
case 872:
case 3908:
case 1098:
case 611:
case 1306:
case 785:
case 3230:
case 226:
case 1100:
case 2498:
case 2893:
case 3872:
case 3964:
case 2042:
case 3590:
case 879:
case 2338:
case 241:
case 1935:
case 910:
case 692:
case 361:
case 3811:
case 2312:
case 2749:
case 2465:
case 2666:
case 2118:
case 1634:
case 3707:
case 3034:
case 3665:
case 579:
case 1065:
case 2177:
case 2587:
case 178:
case 3216:
case 633:
case 1325:
case 4014:
case 2215:
case 1381:
case 2664:
case 2500:
case 3036:
case 1636:
case 3464:
case 766:
case 4083:
case 1395:
case 3803:
case 805:
case 56:
case 817:
case 1147:
case 3576:
case 1834:
case 1967:
case 2866:
case 2239:
case 2575:
case 2955:
case 1358:
case 2599:
case 2191:
case 532:
case 3956:
case 70:
case 554:
case 673:
case 225:
case 1836:
case 2911:
case 49:
case 3184:
case 2552:
case 138:
case 543:
case 2082:
case 3603:
case 3993:
case 539:
case 3954:
case 2808:
case 2403:
case 2529:
case 3456:
case 3423:
case 3655:
case 3243:
case 1055:
case 2455:
case 2327:
case 2547:
case 174:
case 3101:
case 88:
case 2656:
case 843:
case 1591:
case 680:
case 1810:
case 2067:
case 854:
case 1768:
case 2693:
case 3672:
case 1919:
case 3740:
case 1072:
case 1152:
case 832:
case 2397:
case 237:
case 3493:
case 3898:
case 1011:
case 1037:
case 628:
case 44:
case 3594:
case 1415:
case 2257:
case 3016:
case 3083:
case 1683:
case 3140:
case 3346:
case 2850:
case 3973:
case 4036:
case 2602:
case 1729:
case 3234:
case 1104:
case 3402:
case 3014:
case 2138:
case 930:
case 1775:
case 196:
case 3524:
case 2112:
case 2189:
case 1799:
case 2579:
case 631:
case 1106:
case 2051:
case 2171:
case 2581:
case 239:
case 461:
case 3692:
case 28:
case 3902:
case 3878:
case 1125:
case 2492:
case 3817:
case 2332:
case 2504:
case 103:
case 1448:
case 3460:
case 2318:
case 1843:
case 1228:
case 2721:
case 2242:
case 1195:
case 2785:
case 963:
case 254:
case 232:
case 3786:
case 2791:
case 1571:
case 2506:
case 1179:
case 3030:
case 410:
case 1059:
case 2638:
case 2756:
case 449:
case 3412:
case 2612:
case 3833:
case 3438:
case 356:
case 2005:
case 3398:
case 433:
case 1405:
case 3489:
case 2897:
case 1996:
case 956:
case 1310:
case 775:
case 1573:
case 2793:
case 1183:
case 630:
case 3068:
case 1668:
case 889:
case 2827:
case 1953:
case 4062:
case 83:
case 2102:
case 1994:
case 931:
case 1560:
case 3737:
case 3548:
case 1604:
case 2308:
case 913:
case 2849:
case 1905:
case 3989:
case 1496:
case 53:
case 3807:
case 1424:
case 3122:
case 2514:
case 589:
case 3971:
case 3551:
case 3081:
case 499:
case 3079:
case 1679:
case 1130:
case 709:
case 2173:
case 2583:
case 582:
case 3515:
case 2026:
case 1494:
case 411:
case 2053:
case 2094:
case 1453:
case 1858:
case 3287:
case 3025:
case 1246:
case 1625:
case 2160:
case 2366:
case 492:
case 3703:
case 1334:
case 1084:
case 3684:
case 1554:
case 2773:
case 2621:
case 3103:
case 1233:
case 1974:
case 2760:
case 2413:
case 1086:
case 1556:
case 973:
case 3317:
case 2009:
case 1013:
case 3613:
case 3759:
case 4041:
case 1730:
case 3567:
case 2877:
case 289:
case 23:
case 2901:
case 1652:
case 707:
case 3172:
case 3582:
case 1783:
case 328:
case 3844:
case 3137:
case 2984:
case 4058:
case 2702:
case 3519:
case 980:
case 3155:
case 455:
case 1476:
case 408:
case 2350:
case 1001:
case 3601:
case 1714:
case 2986:
case 3258:
case 1909:
case 497:
case 3985:
case 3824:
case 1407:
case 773:
case 686:
case 3049:
case 2007:
case 3382:
case 2881:
case 1274:
case 3569:
case 268:
case 2879:
case 3161:
case 3458:
case 948:
case 2825:
case 2736:
case 2658:
case 2201:
case 2963:
case 1276:
case 435:
case 60:
case 2080:
case 2550:
case 665:
case 284:
case 476:
case 2033:
case 4091:
case 3441:
case 1354:
case 728:
case 3805:
case 2284:
case 1907:
case 4085:
case 307:
case 1697:
case 4021:
case 3578:
case 3188:
case 25:
case 1150:
case 3285:
case 998:
case 1323:
case 1356:
case 3139:
case 2213:
case 1543:
case 2804:
case 3517:
case 3351:
case 3400:
case 3788:
case 731:
case 2829:
case 2508:
case 3962:
case 1444:
case 1750:
case 3142:
case 704:
case 1224:
case 3739:
case 2875:
case 2920:
case 1534:
case 1302:
case 2687:
case 2383:
case 2046:
case 2110:
case 3045:
case 2899:
case 3487:
case 1944:
case 2662:
case 909:
case 3462:
case 3135:
case 302:
case 3900:
case 429:
case 351:
case 1108:
case 3238:
case 2847:
case 4089:
case 1946:
case 85:
case 3018:
case 1618:
case 3809:
case 4071:
case 3348:
case 713:
case 3528:
case 1885:
case 2420:
case 936:
case 1510:
case 650:
case 1373:
case 3157:
case 444:
case 2028:
case 2532:
case 730:
case 1856:
case 2957:
case 223:
case 3260:
case 2741:
case 1965:
case 2187:
case 177:
case 1797:
case 259:
case 3934:
case 3867:
case 2610:
case 2292:
case 895:
case 1854:
case 3763:
case 1562:
case 201:
case 2222:
case 3936:
case 1312:
case 1338:
case 1118:
case 2634:
case 557:
case 1749:
case 763:
case 1465:
case 1132:
case 3066:
case 2325:
case 1928:
case 3394:
case 1215:
case 1177:
case 3120:
case 595:
case 3546:
case 2758:
case 2636:
case 2379:
case 4002:
case 651:
case 1251:
case 2435:
case 191:
case 1035:
case 602:
case 3064:
case 1664:
case 3819:
case 3190:
case 112:
case 3396:
case 1608:
case 636:
case 1391:
case 16:
case 30:
case 2939:
case 1267:
case 2158:
case 986:
case 2078:
case 4093:
case 3443:
case 3848:
case 3223:
case 3256:
case 1385:
case 2017:
case 1417:
case 859:
case 4054:
case 1149:
case 648:
case 1718:
case 2211:
case 1969:
case 2237:
case 295:
case 578:
case 1777:
case 2461:
case 801:
case 1061:
case 3661:
case 2272:
case 3293:
case 386:
case 4056:
case 2830:
case 3688:
case 2816:
case 3163:
case 1931:
case 501:
case 2399:
case 2700:
case 534:
case 3943:
case 2883:
case 2488:
case 3639:
case 878:
case 1650:
case 3050:
case 1978:
case 2375:
case 4:
case 3507:
case 1219:
case 2961:
case 2203:
case 3374:
case 1745:
case 245:
case 698:
case 365:
case 523:
case 158:
case 117:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1761847202/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,];
var gg_b = "1761847202/";

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
