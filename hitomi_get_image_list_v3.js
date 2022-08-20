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
case 3628:
case 2131:
case 2749:
case 3934:
case 1532:
case 2220:
case 1271:
case 2671:
case 1726:
case 200:
case 1614:
case 2873:
case 3253:
case 327:
case 2640:
case 801:
case 1622:
case 1716:
case 3746:
case 1953:
case 371:
case 3418:
case 3392:
case 4015:
case 491:
case 3836:
case 1986:
case 3160:
case 2732:
case 1168:
case 241:
case 1544:
case 2286:
case 838:
case 3601:
case 3749:
case 957:
case 1138:
case 3370:
case 3595:
case 1508:
case 2844:
case 49:
case 1922:
case 614:
case 1661:
case 2895:
case 1937:
case 2459:
case 377:
case 904:
case 1596:
case 404:
case 1992:
case 1326:
case 943:
case 1492:
case 1758:
case 1691:
case 2471:
case 3798:
case 2900:
case 934:
case 927:
case 3526:
case 3895:
case 2814:
case 857:
case 884:
case 3950:
case 2091:
case 3038:
case 1414:
case 1820:
case 1690:
case 138:
case 3439:
case 1809:
case 3956:
case 3321:
case 3303:
case 898:
case 1516:
case 1195:
case 3266:
case 2878:
case 3340:
case 2854:
case 2596:
case 2495:
case 2339:
case 4070:
case 843:
case 2240:
case 337:
case 220:
case 1519:
case 3520:
case 3586:
case 1727:
case 1993:
case 2555:
case 2337:
case 2218:
case 3612:
case 2042:
case 411:
case 3397:
case 192:
case 4079:
case 47:
case 3648:
case 276:
case 1445:
case 2724:
case 2493:
case 353:
case 3571:
case 2996:
case 2835:
case 2974:
case 1904:
case 753:
case 2594:
case 268:
case 3724:
case 1055:
case 1151:
case 2074:
case 790:
case 3187:
case 1268:
case 4057:
case 579:
case 2448:
case 3172:
case 1673:
case 570:
case 4:
case 2246:
case 3659:
case 2014:
case 713:
case 1909:
case 4080:
case 2391:
case 1610:
case 118:
case 1198:
case 2309:
case 1928:
case 2310:
case 4061:
case 1867:
case 1011:
case 1685:
case 2897:
case 955:
case 3349:
case 529:
case 394:
case 196:
case 1918:
case 3430:
case 3144:
case 2284:
case 3958:
case 887:
case 3665:
case 1333:
case 289:
case 836:
case 2857:
case 2721:
case 4032:
case 458:
case 1936:
case 3907:
case 1781:
case 379:
case 3983:
case 3315:
case 3016:
case 3456:
case 3761:
case 518:
case 1769:
case 2224:
case 3654:
case 3447:
case 3387:
case 2695:
case 424:
case 2554:
case 478:
case 2090:
case 2575:
case 129:
case 143:
case 1959:
case 861:
case 1236:
case 1830:
case 3556:
case 2529:
case 4052:
case 808:
case 2128:
case 177:
case 299:
case 1714:
case 1826:
case 1652:
case 2669:
case 105:
case 524:
case 1863:
case 758:
case 2362:
case 3313:
case 3996:
case 2087:
case 183:
case 1902:
case 208:
case 3259:
case 2358:
case 2507:
case 2318:
case 1618:
case 2656:
case 629:
case 1244:
case 1598:
case 422:
case 1294:
case 1017:
case 626:
case 2397:
case 1073:
case 873:
case 2136:
case 2359:
case 1884:
case 3534:
case 3507:
case 2407:
case 3265:
case 1536:
case 2366:
case 2634:
case 2504:
case 1103:
case 1985:
case 1132:
case 4095:
case 921:
case 3651:
case 210:
case 3121:
case 2805:
case 3491:
case 3949:
case 649:
case 708:
case 3001:
case 4085:
case 7:
case 500:
case 235:
case 2158:
case 3098:
case 3588:
case 3535:
case 3018:
case 811:
case 3451:
case 660:
case 3613:
case 1545:
case 2381:
case 134:
case 2281:
case 3345:
case 1799:
case 3641:
case 1499:
case 169:
case 3420:
case 948:
case 3336:
case 1002:
case 1093:
case 561:
case 1955:
case 2862:
case 882:
case 2287:
case 3481:
case 1379:
case 3634:
case 1681:
case 3017:
case 2083:
case 2389:
case 2782:
case 908:
case 2568:
case 864:
case 2717:
case 1024:
case 1134:
case 3570:
case 3490:
case 742:
case 1971:
case 3431:
case 1126:
case 1527:
case 3281:
case 573:
case 338:
case 3523:
case 2830:
case 595:
case 1903:
case 1021:
case 101:
case 3304:
case 2396:
case 569:
case 2730:
case 913:
case 1587:
case 870:
case 4006:
case 1666:
case 2552:
case 3182:
case 2041:
case 786:
case 1043:
case 2015:
case 519:
case 2378:
case 3104:
case 3784:
case 3174:
case 1636:
case 1844:
case 874:
case 3166:
case 3877:
case 2315:
case 938:
case 3419:
case 30:
case 2261:
case 3003:
case 976:
case 3826:
case 2167:
case 62:
case 1071:
case 3393:
case 1446:
case 1883:
case 2944:
case 2697:
case 493:
case 706:
case 297:
case 1230:
case 3989:
case 3114:
case 3437:
case 1509:
case 3979:
case 1783:
case 915:
case 3023:
case 1790:
case 357:
case 3975:
case 3756:
case 804:
case 342:
case 3390:
case 738:
case 1169:
case 2511:
case 2408:
case 214:
case 1816:
case 841:
case 892:
case 1473:
case 1376:
case 1759:
case 3291:
case 3552:
case 2480:
case 3167:
case 599:
case 209:
case 3750:
case 664:
case 2231:
case 1967:
case 1407:
case 1033:
case 703:
case 1694:
case 1378:
case 2135:
case 4066:
case 2557:
case 12:
case 4042:
case 1345:
case 587:
case 429:
case 2871:
case 3363:
case 3569:
case 1348:
case 415:
case 2570:
case 1667:
case 3350:
case 2810:
case 2149:
case 3293:
case 2539:
case 1868:
case 2171:
case 702:
case 3134:
case 796:
case 336:
case 2739:
case 1905:
case 988:
case 4091:
case 3083:
case 1000:
case 2798:
case 3406:
case 2932:
case 1295:
case 2438:
case 135:
case 386:
case 732:
case 1133:
case 2432:
case 2657:
case 2619:
case 1701:
case 3105:
case 700:
case 2409:
case 2832:
case 2829:
case 3318:
case 2563:
case 2326:
case 1032:
case 814:
case 86:
case 1178:
case 2435:
case 609:
case 1683:
case 3846:
case 1227:
case 4008:
case 2443:
case 1393:
case 2300:
case 2056:
case 3091:
case 2678:
case 4013:
case 1381:
case 1305:
case 2290:
case 1100:
case 3755:
case 3289:
case 3316:
case 1191:
case 225:
case 109:
case 3414:
case 2756:
case 3241:
case 2836:
case 735:
case 1338:
case 1385:
case 3664:
case 762:
case 486:
case 3195:
case 3516:
case 2129:
case 3162:
case 944:
case 637:
case 2911:
case 2040:
case 1096:
case 1004:
case 1175:
case 3033:
case 1388:
case 3337:
case 619:
case 1641:
case 1757:
case 1900:
case 1307:
case 1651:
case 1257:
case 3201:
case 1382:
case 66:
case 1047:
case 3581:
case 1956:
case 2653:
case 2964:
case 3578:
case 3219:
case 2330:
case 3911:
case 768:
case 1335:
case 773:
case 2691:
case 3347:
case 3511:
case 92:
case 3650:
case 3744:
case 542:
case 2961:
case 2144:
case 1575:
case 2150:
case 1147:
case 3396:
case 2509:
case 797:
case 686:
case 144:
case 2637:
case 655:
case 2538:
case 1319:
case 2681:
case 4069:
case 2134:
case 1760:
case 2297:
case 3480:
case 696:
case 3710:
case 965:
case 1603:
case 2882:
case 1485:
case 3729:
case 112:
case 2458:
case 2201:
case 781:
case 743:
case 2447:
case 1654:
case 3944:
case 2052:
case 402:
case 3197:
case 174:
case 2728:
case 2650:
case 489:
case 1048:
case 3602:
case 2018:
case 4068:
case 3041:
case 3079:
case 1724:
case 3442:
case 446:
case 3546:
case 2795:
case 1050:
case 1678:
case 1802:
case 372:
case 1962:
case 830:
case 370:
case 2680:
case 3202:
case 3987:
case 1199:
case 2375:
case 1109:
case 1187:
case 1821:
case 1766:
case 286:
case 3680:
case 2415:
case 2940:
case 3899:
case 4078:
case 3427:
case 3519:
case 2858:
case 2079:
case 3088:
case 3740:
case 1078:
case 3053:
case 3262:
case 1933:
case 1522:
case 875:
case 2141:
case 3142:
case 1559:
case 1530:
case 2518:
case 3267:
case 987:
case 2254:
case 2867:
case 3071:
case 1070:
case 621:
case 756:
case 3185:
case 3261:
case 2374:
case 918:
case 1340:
case 3074:
case 2348:
case 74:
case 710:
case 1556:
case 2347:
case 340:
case 3338:
case 1201:
case 914:
case 2319:
case 3834:
case 2537:
case 3061:
case 1113:
case 3341:
case 1281:
case 2469:
case 2722:
case 1149:
case 83:
case 3351:
case 675:
case 58:
case 1287:
case 1895:
case 2998:
case 2655:
case 932:
case 2061:
case 389:
case 2904:
case 2349:
case 3675:
case 3621:
case 3631:
case 1225:
case 850:
case 1190:
case 3117:
case 2500:
case 3157:
case 2828:
case 128:
case 711:
case 2989:
case 2320:
case 2073:
case 1696:
case 578:
case 1803:
case 2565:
case 588:
case 541:
case 2174:
case 3224:
case 2180:
case 4029:
case 1849:
case 2642:
case 2025:
case 3833:
case 2368:
case 981:
case 3633:
case 2328:
case 3946:
case 694:
case 2546:
case 369:
case 224:
case 1068:
case 3194:
case 2037:
case 1006:
case 185:
case 793:
case 774:
case 1110:
case 2214:
case 545:
case 1979:
case 1104:
case 2888:
case 2598:
case 583:
case 1880:
case 114:
case 901:
case 2197:
case 1193:
case 2647:
case 1440:
case 1412:
case 2914:
case 457:
case 2399:
case 2676:
case 1139:
case 3268:
case 3220:
case 3328:
case 2364:
case 242:
case 17:
case 3435:
case 1554:
case 2819:
case 3461:
case 1145:
case 413:
case 2918:
case 146:
case 2853:
case 3246:
case 2306:
case 2586:
case 2794:
case 2080:
case 1835:
case 584:
case 1935:
case 1613:
case 1317:
case 2303:
case 1399:
case 1565:
case 3478:
case 2544:
case 3260:
case 3764:
case 1450:
case 673:
case 375:
case 314:
case 1008:
case 433:
case 453:
case 1465:
case 3683:
case 635:
case 641:
case 120:
case 215:
case 1558:
case 3047:
case 40:
case 3402:
case 1970:
case 1804:
case 3068:
case 3464:
case 2147:
case 1772:
case 3317:
case 3178:
case 2838:
case 1468:
case 721:
case 2851:
case 2193:
case 3320:
case 766:
case 2617:
case 3173:
case 1423:
case 3711:
case 2454:
case 349:
case 1120:
case 1591:
case 2641:
case 679:
case 1291:
case 2140:
case 425:
case 854:
case 304:
case 3854:
case 1751:
case 3360:
case 2198:
case 121:
case 316:
case 982:
case 1834:
case 3525:
case 2188:
case 2360:
case 4016:
case 1054:
case 779:
case 1235:
case 2773:
case 345:
case 1534:
case 3843:
case 3805:
case 1060:
case 554:
case 2248:
case 1331:
case 3549:
case 1267:
case 484:
case 3504:
case 1994:
case 1741:
case 1282:
case 315:
case 946:
case 1084:
case 4003:
case 4077:
case 1818:
case 94:
case 350:
case 1897:
case 3804:
case 1585:
case 3616:
case 3686:
case 516:
case 941:
case 1570:
case 3982:
case 1159:
case 1171:
case 1612:
case 2170:
case 3:
case 3817:
case 2984:
case 1351:
case 63:
case 2975:
case 280:
case 3575:
case 2707:
case 2774:
case 37:
case 3120:
case 2797:
case 3745:
case 1510:
case 3476:
case 3984:
case 99:
case 2485:
case 688:
case 2189:
case 332:
case 2088:
case 1462:
case 3385:
case 2095:
case 517:
case 73:
case 2521:
case 3611:
case 1627:
case 1439:
case 3709:
case 611:
case 720:
case 2599:
case 266:
case 547:
case 3860:
case 1944:
case 698:
case 1161:
case 259:
case 2060:
case 1049:
case 3603:
case 1386:
case 203:
case 3553:
case 751:
case 2419:
case 2889:
case 2616:
case 3827:
case 642:
case 3693:
case 627:
case 1949:
case 3095:
case 1837:
case 1089:
case 3760:
case 3656:
case 3378:
case 61:
case 2973:
case 1679:
case 434:
case 2227:
case 3102:
case 281:
case 234:
case 1262:
case 1460:
case 1977:
case 3759:
case 1642:
case 1090:
case 3109:
case 911:
case 930:
case 2941:
case 2267:
case 2012:
case 244:
case 3658:
case 2917:
case 1653:
case 2473:
case 6:
case 3851:
case 2965:
case 905:
case 1207:
case 3539:
case 1233:
case 1350:
case 1014:
case 261:
case 719:
case 3359:
case 1877:
case 3324:
case 2011:
case 156:
case 1477:
case 581:
case 1927:
case 96:
case 3723:
case 3527:
case 1931:
case 3844:
case 606:
case 2062:
case 1359:
case 2377:
case 1861:
case 2780:
case 1778:
case 2139:
case 31:
case 2294:
case 1074:
case 2425:
case 2840:
case 2275:
case 1941:
case 880:
case 3890:
case 3183:
case 3584:
case 3470:
case 3891:
case 26:
case 333:
case 3902:
case 1018:
case 2107:
case 736:
case 2670:
case 2045:
case 3081:
case 1087:
case 1572:
case 3501:
case 251:
case 3404:
case 3881:
case 3297:
case 924:
case 180:
case 2489:
case 4028:
case 1122:
case 3484:
case 507:
case 2550:
case 22:
case 2790:
case 4004:
case 2449:
case 1539:
case 3395:
case 2970:
case 306:
case 2766:
case 2833:
case 3993:
case 833:
case 2731:
case 91:
case 27:
case 2163:
case 3644:
case 2251:
case 1890:
case 3701:
case 2186:
case 1329:
case 417:
case 2417:
case 3463:
case 3770:
case 2602:
case 3168:
case 1774:
case 1560:
case 4058:
case 1297:
case 3380:
case 1869:
case 2215:
case 4082:
case 1792:
case 1646:
case 2108:
case 1237:
case 3362:
case 2465:
case 3394:
case 218:
case 3816:
case 3169:
case 858:
case 1099:
case 2053:
case 1789:
case 1459:
case 1106:
case 1699:
case 2452:
case 1736:
case 3290:
case 2096:
case 3216:
case 3832:
case 2063:
case 108:
case 1026:
case 2783:
case 1079:
case 1062:
case 319:
case 1186:
case 2094:
case 3591:
case 3298:
case 395:
case 2907:
case 1564:
case 3783:
case 382:
case 2410:
case 2939:
case 2202:
case 1203:
case 1871:
case 2195:
case 3952:
case 953:
case 393:
case 1974:
case 572:
case 2223:
case 2017:
case 1719:
case 970:
case 437:
case 2806:
case 4064:
case 980:
case 971:
case 1767:
case 312:
case 1364:
case 2638:
case 1951:
case 552:
case 3299:
case 187:
case 1125:
case 624:
case 2439:
case 5:
case 3141:
case 589:
case 2383:
case 1357:
case 2593:
case 1353:
case 567:
case 2222:
case 1771:
case 2887:
case 1960:
case 3935:
case 2175:
case 684:
case 3084:
case 2043:
case 3781:
case 2373:
case 1921:
case 1954:
case 2845:
case 1964:
case 2312:
case 3012:
case 4046:
case 34:
case 366:
case 4025:
case 725:
case 1602:
case 1124:
case 1513:
case 3443:
case 3801:
case 1447:
case 962:
case 356:
case 2595:
case 3374:
case 3722:
case 2703:
case 3361:
case 167:
case 2104:
case 438:
case 2885:
case 2569:
case 2776:
case 939:
case 475:
case 2898:
case 2834:
case 3585:
case 2338:
case 1411:
case 2988:
case 3518:
case 1709:
case 3086:
case 1497:
case 692:
case 1711:
case 2609:
case 2019:
case 956:
case 3541:
case 4076:
case 3240:
case 3124:
case 130:
case 2100:
case 364:
case 4048:
case 2855:
case 2881:
case 1434:
case 1444:
case 2481:
case 4074:
case 712:
case 3866:
case 3403:
case 992:
case 648:
case 496:
case 2035:
case 1449:
case 3869:
case 666:
case 2994:
case 1065:
case 325:
case 2559:
case 3557:
case 1116:
case 2370:
case 3999:
case 2162:
case 1020:
case 3473:
case 994:
case 3494:
case 2386:
case 2960:
case 3698:
case 633:
case 1700:
case 452:
case 2277:
case 562:
case 230:
case 508:
case 3515:
case 1318:
case 46:
case 322:
case 3830:
case 2793:
case 2064:
case 1784:
case 1969:
case 1252:
case 2822:
case 3679:
case 1419:
case 531:
case 1215:
case 2875:
case 586:
case 188:
case 1573:
case 1831:
case 3250:
case 2547:
case 360:
case 1813:
case 3521:
case 2050:
case 800:
case 3205:
case 1205:
case 1634:
case 329:
case 3503:
case 2478:
case 3330:
case 3073:
case 2482:
case 1743:
case 3165:
case 3425:
case 2376:
case 1848:
case 2413:
case 2154:
case 1428:
case 1431:
case 2450:
case 106:
case 1214:
case 3391:
case 2803:
case 4019:
case 2242:
case 3213:
case 2232:
case 1822:
case 1:
case 3055:
case 2199:
case 2420:
case 390:
case 3389:
case 2209:
case 1686:
case 2293:
case 3892:
case 846:
case 3465:
case 1898:
case 3771:
case 1392:
case 3867:
case 737:
case 1095:
case 2299:
case 575:
case 2217:
case 3707:
case 3966:
case 2618:
case 3346:
case 2734:
case 1040:
case 2068:
case 1194:
case 190:
case 749:
case 2733:
case 381:
case 3692:
case 1768:
case 2308:
case 3955:
case 3373:
case 1424:
case 2635:
case 2000:
case 1144:
case 3075:
case 3492:
case 3610:
case 3379:
case 2345:
case 699:
case 2633:
case 2662:
case 1650:
case 1216:
case 1493:
case 449:
case 3019:
case 2400:
case 1466:
case 1063:
case 1592:
case 2092:
case 1165:
case 945:
case 3874:
case 691:
case 3080:
case 897:
case 522:
case 1284:
case 199:
case 610:
case 3522:
case 2796:
case 3034:
case 1980:
case 392:
case 603:
case 3992:
case 2496:
case 2009:
case 2740:
case 678:
case 574:
case 3820:
case 2846:
case 1958:
case 1747:
case 929:
case 3873:
case 3514:
case 2483:
case 2207:
case 2761:
case 42:
case 3368:
case 3674:
case 1019:
case 906:
case 2930:
case 2765:
case 3344:
case 1732:
case 2442:
case 716:
case 2119:
case 1367:
case 615:
case 3148:
case 2865:
case 1402:
case 3567:
case 2278:
case 2431:
case 3056:
case 2856:
case 2936:
case 1586:
case 2380:
case 618:
case 3705:
case 2869:
case 3972:
case 1733:
case 659:
case 448:
case 3848:
case 3921:
case 2931:
case 2807:
case 226:
case 1857:
case 2301:
case 182:
case 2082:
case 2239:
case 3780:
case 2266:
case 3637:
case 383:
case 3488:
case 3196:
case 1911:
case 3410:
case 163:
case 560:
case 3502:
case 556:
case 752:
case 217:
case 1377:
case 2321:
case 632:
case 2522:
case 2725:
case 2105:
case 3203:
case 3423:
case 3077:
case 3560:
case 3050:
case 150:
case 646:
case 445:
case 1702:
case 36:
case 1748:
case 2726:
case 1461:
case 3889:
case 2241:
case 3070:
case 2519:
case 2023:
case 810:
case 376:
case 593:
case 1525:
case 2403:
case 3661:
case 1330:
case 2355:
case 2047:
case 2492:
case 2229:
case 1919:
case 84:
case 2384:
case 521:
case 1127:
case 697:
case 1069:
case 3184:
case 1247:
case 65:
case 2185:
case 3011:
case 466:
case 4022:
case 1426:
case 3937:
case 888:
case 806:
case 1521:
case 1360:
case 2991:
case 2335:
case 3517:
case 674:
case 3014:
case 57:
case 82:
case 1689:
case 2256:
case 1059:
case 1325:
case 231:
case 460:
case 527:
case 447:
case 3810:
case 3155:
case 2926:
case 2781:
case 2636:
case 2786:
case 3244:
case 3409:
case 1164:
case 2542:
case 3554:
case 171:
case 600:
case 2059:
case 3301:
case 3706:
case 2879:
case 2848:
case 2935:
case 1288:
case 3429:
case 3948:
case 3909:
case 2698:
case 1012:
case 3307:
case 1531:
case 3551:
case 2093:
case 2959:
case 2016:
case 2968:
case 1693:
case 3191:
case 3925:
case 3004:
case 24:
case 3029:
case 3927:
case 2212:
case 2421:
case 2764:
case 3688:
case 1045:
case 3051:
case 90:
case 748:
case 238:
case 2541:
case 891:
case 1375:
case 3163:
case 288:
case 876:
case 2184:
case 3432:
case 3107:
case 2066:
case 3533:
case 3530:
case 2250:
case 3597:
case 539:
case 3272:
case 2751:
case 3234:
case 985:
case 54:
case 1827:
case 1416:
case 845:
case 1796:
case 754:
case 3063:
case 2759:
case 3450:
case 1142:
case 3310:
case 9:
case 380:
case 2689:
case 3348:
case 4007:
case 1495:
case 1520:
case 1946:
case 2194:
case 3236:
case 1420:
case 403:
case 1344:
case 1415:
case 1298:
case 1718:
case 3796:
case 499:
case 3334:
case 2771:
case 3218:
case 1926:
case 2102:
case 3013:
case 3970:
case 1208:
case 1429:
case 1606:
case 1738:
case 2372:
case 3543:
case 1562:
case 3278:
case 1111:
case 3383:
case 2236:
case 1441:
case 598:
case 2945:
case 21:
case 2767:
case 3542:
case 48:
case 1275:
case 2446:
case 506:
case 3292:
case 2464:
case 1828:
case 2334:
case 1146:
case 3130:
case 487:
case 1524:
case 1277:
case 903:
case 3030:
case 2549:
case 1815:
case 1265:
case 3126:
case 3773:
case 359:
case 2775:
case 1272:
case 3248:
case 1501:
case 3630:
case 3242:
case 3813:
case 1665:
case 3483:
case 2820:
case 3906:
case 3444:
case 2639:
case 260:
case 3049:
case 3199:
case 958:
case 191:
case 3986:
case 3684:
case 147:
case 1537:
case 1387:
case 935:
case 3119:
case 3678:
case 1135:
case 3152:
case 1943:
case 59:
case 2133:
case 495:
case 1749:
case 3513:
case 1080:
case 2839:
case 1401:
case 1595:
case 3332:
case 3842:
case 2317:
case 872:
case 1948:
case 463:
case 3258:
case 741:
case 2860:
case 3214:
case 1695:
case 3965:
case 643:
case 2434:
case 3322:
case 3015:
case 4051:
case 2784:
case 662:
case 3819:
case 969:
case 2153:
case 963:
case 799:
case 763:
case 1274:
case 374:
case 3997:
case 2737:
case 2313:
case 79:
case 3273:
case 3696:
case 2304:
case 2213:
case 3006:
case 1854:
case 490:
case 67:
case 4002:
case 2112:
case 2987:
case 1879:
case 1285:
case 1108:
case 975:
case 2709:
case 3795:
case 2078:
case 117:
case 1746:
case 3005:
case 1930:
case 2560:
case 3757:
case 2418:
case 4001:
case 104:
case 3978:
case 3426:
case 2124:
case 39:
case 384:
case 1599:
case 239:
case 1041:
case 1728:
case 677:
case 1847:
case 777:
case 3868:
case 3988:
case 2630:
case 3845:
case 2255:
case 2363:
case 1486:
case 2506:
case 1865:
case 93:
case 2474:
case 722:
case 1860:
case 2566:
case 513:
case 1243:
case 3256:
case 1107:
case 2475:
case 1005:
case 2486:
case 1878:
case 2436:
case 3287:
case 1470:
case 996:
case 3477:
case 1549:
case 3251:
case 2402:
case 3097:
case 2160:
case 3809:
case 262:
case 3990:
case 668:
case 2152:
case 4026:
case 2367:
case 2165:
case 2652:
case 1500:
case 1046:
case 2453:
case 3311:
case 464:
case 1633:
case 43:
case 2322:
case 111:
case 326:
case 1072:
case 909:
case 176:
case 2876:
case 1263:
case 1396:
case 503:
case 2921:
case 852:
case 765:
case 1526:
case 1649:
case 1076:
case 1668:
case 1621:
case 237:
case 3690:
case 2809:
case 1457:
case 1484:
case 828:
case 3898:
case 1196:
case 1400:
case 2685:
case 2221:
case 2101:
case 1872:
case 2341:
case 931:
case 1458:
case 3742:
case 2142:
case 2357:
case 3076:
case 3861:
case 928:
case 2668:
case 1336:
case 3198:
case 358:
case 1028:
case 3247:
case 849:
case 2288:
case 245:
case 3615:
case 2324:
case 3893:
case 1546:
case 2972:
case 3580:
case 2426:
case 303:
case 274:
case 137:
case 1660:
case 1887:
case 3179:
case 1123:
case 597:
case 973:
case 2296:
case 1027:
case 2610:
case 2252:
case 3731:
case 3864:
case 893:
case 2468:
case 3467:
case 2562:
case 3186:
case 1939:
case 1437:
case 1218:
case 3226:
case 181:
case 886:
case 3140:
case 999:
case 3884:
case 2949:
case 160:
case 3045:
case 3592:
case 3743:
case 1404:
case 2476:
case 2487:
case 113:
case 1671:
case 1015:
case 3625:
case 1761:
case 4084:
case 35:
case 821:
case 2607:
case 3769:
case 1251:
case 2505:
case 3555:
case 469:
case 949:
case 2260:
case 2379:
case 2718:
case 3677:
case 219:
case 1862:
case 1626:
case 1607:
case 3563:
case 334:
case 3482:
case 3131:
case 3587:
case 3286:
case 3583:
case 3652:
case 15:
case 1692:
case 2292:
case 1952:
case 625:
case 3113:
case 2058:
case 2110:
case 3078:
case 1836:
case 1923:
case 714:
case 2644:
case 2208:
case 1372:
case 2997:
case 1137:
case 2388:
case 4009:
case 2428:
case 3655:
case 485:
case 3528:
case 2351:
case 3943:
case 3211:
case 33:
case 477:
case 2333:
case 1968:
case 1313:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1661036401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,];
var gg_b = "1661036401/";

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
