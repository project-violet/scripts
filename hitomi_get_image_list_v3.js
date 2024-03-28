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
case 2076:
case 2391:
case 2455:
case 83:
case 3649:
case 784:
case 251:
case 2953:
case 1346:
case 3001:
case 202:
case 3759:
case 764:
case 3420:
case 3413:
case 920:
case 2573:
case 1146:
case 1620:
case 1908:
case 651:
case 2327:
case 448:
case 2047:
case 2855:
case 3570:
case 3542:
case 3640:
case 662:
case 1406:
case 575:
case 2567:
case 2850:
case 1547:
case 3276:
case 146:
case 2111:
case 1291:
case 41:
case 3160:
case 2710:
case 2980:
case 3698:
case 3074:
case 408:
case 3293:
case 1128:
case 3661:
case 1474:
case 703:
case 3397:
case 1152:
case 206:
case 1492:
case 4057:
case 794:
case 2671:
case 3611:
case 2034:
case 3743:
case 862:
case 1586:
case 609:
case 1178:
case 3216:
case 2599:
case 348:
case 3096:
case 3409:
case 211:
case 2946:
case 3182:
case 1073:
case 3728:
case 3039:
case 1010:
case 779:
case 684:
case 915:
case 173:
case 1329:
case 3836:
case 3253:
case 2873:
case 74:
case 3132:
case 921:
case 106:
case 1984:
case 1797:
case 1563:
case 17:
case 1696:
case 1974:
case 2253:
case 1236:
case 3978:
case 323:
case 2361:
case 4027:
case 3655:
case 108:
case 2435:
case 4068:
case 3231:
case 1665:
case 2274:
case 1209:
case 112:
case 962:
case 1758:
case 3173:
case 658:
case 2686:
case 148:
case 2243:
case 2132:
case 2071:
case 3043:
case 435:
case 1283:
case 4052:
case 3450:
case 3770:
case 545:
case 3131:
case 229:
case 1301:
case 3701:
case 3653:
case 2325:
case 2667:
case 2385:
case 285:
case 1483:
case 3902:
case 2982:
case 3931:
case 1449:
case 2944:
case 3881:
case 3636:
case 3643:
case 4069:
case 2635:
case 3967:
case 2836:
case 1294:
case 840:
case 1534:
case 2101:
case 4021:
case 2701:
case 656:
case 1461:
case 3642:
case 159:
case 748:
case 1293:
case 3535:
case 3940:
case 38:
case 3691:
case 790:
case 3709:
case 1618:
case 2925:
case 1739:
case 2878:
case 2903:
case 170:
case 623:
case 1554:
case 3155:
case 2912:
case 3410:
case 1075:
case 1197:
case 906:
case 2719:
case 3994:
case 3557:
case 2225:
case 963:
case 2147:
case 3061:
case 1033:
case 2657:
case 2273:
case 1187:
case 3676:
case 3250:
case 2824:
case 1388:
case 443:
case 1859:
case 3936:
case 2422:
case 883:
case 186:
case 2095:
case 1456:
case 568:
case 1721:
case 3656:
case 2453:
case 2466:
case 3684:
case 4010:
case 1922:
case 3981:
case 4090:
case 3273:
case 740:
case 3800:
case 1387:
case 2173:
case 2220:
case 2972:
case 1597:
case 2492:
case 3511:
case 2222:
case 2919:
case 1542:
case 879:
case 1252:
case 2755:
case 1330:
case 1:
case 3532:
case 1744:
case 1526:
case 1353:
case 1730:
case 925:
case 3451:
case 1251:
case 1536:
case 2262:
case 2998:
case 2079:
case 791:
case 3190:
case 702:
case 3058:
case 3883:
case 1162:
case 1533:
case 812:
case 3130:
case 2901:
case 429:
case 3658:
case 2251:
case 2806:
case 3573:
case 3380:
case 51:
case 3618:
case 602:
case 709:
case 366:
case 2893:
case 1419:
case 3924:
case 2974:
case 288:
case 2014:
case 343:
case 2642:
case 3234:
case 878:
case 724:
case 3120:
case 2114:
case 2012:
case 3469:
case 127:
case 3546:
case 1594:
case 1056:
case 3550:
case 2396:
case 1188:
case 2647:
case 2970:
case 217:
case 3041:
case 2177:
case 1065:
case 1949:
case 968:
case 2943:
case 1170:
case 557:
case 712:
case 3417:
case 3823:
case 2882:
case 1140:
case 2813:
case 747:
case 1991:
case 2423:
case 2506:
case 2215:
case 188:
case 3594:
case 2434:
case 3587:
case 328:
case 2733:
case 547:
case 1491:
case 1768:
case 3974:
case 3346:
case 1565:
case 2283:
case 4082:
case 2446:
case 1316:
case 2472:
case 126:
case 3248:
case 2920:
case 1985:
case 2269:
case 322:
case 2403:
case 1154:
case 381:
case 3896:
case 3103:
case 1826:
case 1030:
case 605:
case 301:
case 282:
case 57:
case 2197:
case 2690:
case 1385:
case 3127:
case 2:
case 1174:
case 2474:
case 1185:
case 2672:
case 1029:
case 3093:
case 3126:
case 3170:
case 2115:
case 1444:
case 3828:
case 2579:
case 460:
case 948:
case 55:
case 646:
case 1343:
case 2581:
case 2777:
case 2827:
case 1268:
case 1143:
case 1147:
case 2187:
case 4018:
case 3516:
case 611:
case 3906:
case 678:
case 562:
case 2320:
case 3662:
case 3796:
case 3827:
case 2751:
case 676:
case 3122:
case 943:
case 3712:
case 3672:
case 1031:
case 3829:
case 803:
case 2000:
case 1731:
case 2577:
case 24:
case 2166:
case 256:
case 1817:
case 1715:
case 1837:
case 900:
case 3503:
case 3215:
case 1460:
case 757:
case 1381:
case 438:
case 2163:
case 1975:
case 1001:
case 2308:
case 412:
case 1846:
case 3463:
case 1747:
case 3624:
case 3944:
case 2328:
case 1792:
case 2457:
case 264:
case 56:
case 2929:
case 3571:
case 1275:
case 80:
case 1328:
case 3047:
case 2240:
case 2959:
case 934:
case 1429:
case 2606:
case 2252:
case 2618:
case 2179:
case 1697:
case 1046:
case 1934:
case 3223:
case 3529:
case 1122:
case 2374:
case 1348:
case 3593:
case 1587:
case 2295:
case 4006:
case 3834:
case 295:
case 2799:
case 972:
case 3704:
case 3762:
case 2763:
case 1598:
case 168:
case 3848:
case 1632:
case 4042:
case 1750:
case 294:
case 3725:
case 939:
case 475:
case 1044:
case 3236:
case 1200:
case 960:
case 362:
case 1645:
case 975:
case 2965:
case 3999:
case 2693:
case 48:
case 729:
case 3050:
case 3581:
case 1435:
case 1035:
case 2189:
case 451:
case 3660:
case 3145:
case 1314:
case 2847:
case 2345:
case 1818:
case 3865:
case 1086:
case 1304:
case 3464:
case 2254:
case 2673:
case 3987:
case 165:
case 446:
case 2157:
case 3185:
case 1133:
case 789:
case 3128:
case 2586:
case 2985:
case 1851:
case 1667:
case 3866:
case 2109:
case 1965:
case 762:
case 560:
case 4049:
case 3372:
case 515:
case 3512:
case 3425:
case 3697:
case 3065:
case 1815:
case 32:
case 3855:
case 3116:
case 2740:
case 564:
case 3501:
case 2913:
case 2545:
case 578:
case 405:
case 247:
case 2732:
case 2120:
case 1780:
case 2094:
case 2311:
case 1459:
case 1599:
case 753:
case 3423:
case 2112:
case 3298:
case 2477:
case 2460:
case 2039:
case 1516:
case 1646:
case 2880:
case 2259:
case 1036:
case 1351:
case 3163:
case 19:
case 4035:
case 1306:
case 3396:
case 2224:
case 3711:
case 3048:
case 3988:
case 1049:
case 3644:
case 1498:
case 3808:
case 1463:
case 1981:
case 3324:
case 2737:
case 180:
case 2188:
case 1992:
case 2705:
case 1825:
case 1694:
case 246:
case 2380:
case 1562:
case 2960:
case 1801:
case 296:
case 3693:
case 421:
case 1745:
case 4040:
case 2358:
case 1641:
case 1708:
case 13:
case 1484:
case 2487:
case 1786:
case 1282:
case 2238:
case 977:
case 28:
case 1640:
case 2490:
case 867:
case 1804:
case 2708:
case 2941:
case 1997:
case 368:
case 1053:
case 3830:
case 418:
case 742:
case 722:
case 893:
case 4084:
case 3406:
case 3617:
case 1940:
case 755:
case 2754:
case 947:
case 2155:
case 522:
case 372:
case 4095:
case 3277:
case 2081:
case 2762:
case 3402:
case 3207:
case 2174:
case 876:
case 650:
case 3504:
case 1532:
case 2303:
case 2258:
case 1041:
case 3633:
case 1662:
case 2229:
case 2511:
case 2135:
case 2172:
case 2073:
case 3415:
case 852:
case 3524:
case 1824:
case 1686:
case 3428:
case 3206:
case 3858:
case 1323:
case 3724:
case 769:
case 465:
case 864:
case 257:
case 1475:
case 2417:
case 1194:
case 532:
case 3437:
case 3150:
case 2999:
case 3422:
case 3052:
case 2717:
case 2467:
case 1322:
case 1568:
case 3474:
case 3448:
case 3817:
case 1253:
case 1448:
case 1257:
case 2236:
case 2584:
case 3822:
case 3045:
case 3306:
case 569:
case 2519:
case 2957:
case 695:
case 416:
case 2551:
case 2620:
case 3075:
case 1504:
case 2820:
case 2165:
case 2734:
case 1608:
case 261:
case 1931:
case 3926:
case 970:
case 4070:
case 274:
case 164:
case 2859:
case 1277:
case 2475:
case 3034:
case 2822:
case 4048:
case 2090:
case 2210:
case 2857:
case 3689:
case 535:
case 2098:
case 1777:
case 3137:
case 1321:
case 890:
case 2969:
case 391:
case 82:
case 518:
case 477:
case 3148:
case 3017:
case 2712:
case 2771:
case 3435:
case 2675:
case 3670:
case 822:
case 1592:
case 1633:
case 699:
case 1722:
case 754:
case 93:
case 2863:
case 2335:
case 795:
case 2332:
case 3013:
case 3313:
case 1172:
case 806:
case 3556:
case 1392:
case 3098:
case 1166:
case 1983:
case 413:
case 1360:
case 1588:
case 3135:
case 3340:
case 3783:
case 520:
case 929:
case 1842:
case 1680:
case 340:
case 2918:
case 49:
case 3412:
case 411:
case 1079:
case 3890:
case 3600:
case 3730:
case 1470:
case 2860:
case 2988:
case 447:
case 2255:
case 627:
case 2761:
case 2050:
case 3267:
case 1977:
case 3320:
case 155:
case 3867:
case 3935:
case 1446:
case 2509:
case 3360:
case 504:
case 1264:
case 3832:
case 2794:
case 2928:
case 495:
case 356:
case 1059:
case 698:
case 3756:
case 3274:
case 3567:
case 3035:
case 3769:
case 3062:
case 1376:
case 3598:
case 1894:
case 1120:
case 1571:
case 1466:
case 1890:
case 3630:
case 1699:
case 269:
case 2631:
case 3563:
case 610:
case 2400:
case 1950:
case 2572:
case 3565:
case 2747:
case 583:
case 3361:
case 3993:
case 260:
case 1707:
case 1752:
case 3694:
case 2727:
case 3220:
case 3489:
case 1054:
case 2344:
case 2950:
case 945:
case 1050:
case 87:
case 2736:
case 3797:
case 2973:
case 3141:
case 2865:
case 1978:
case 894:
case 2641:
case 2662:
case 759:
case 2005:
case 1677:
case 918:
case 563:
case 2035:
case 3036:
case 2280:
case 1438:
case 3843:
case 3004:
case 1596:
case 3889:
case 2954:
case 3923:
case 643:
case 1015:
case 3208:
case 787:
case 2202:
case 4075:
case 1728:
case 3578:
case 2932:
case 3604:
case 3446:
case 304:
case 3751:
case 898:
case 3668:
case 1319:
case 1266:
case 1481:
case 1496:
case 2133:
case 1658:
case 579:
case 69:
case 3440:
case 242:
case 1480:
case 2136:
case 1895:
case 3232:
case 1224:
case 3109:
case 1774:
case 472:
case 123:
case 14:
case 1271:
case 4011:
case 4015:
case 2780:
case 3107:
case 433:
case 1397:
case 318:
case 2789:
case 3862:
case 2337:
case 6:
case 2968:
case 3270:
case 3554:
case 2625:
case 800:
case 608:
case 570:
case 2949:
case 2348:
case 1834:
case 117:
case 3212:
case 3824:
case 3312:
case 2598:
case 3379:
case 2669:
case 1619:
case 2465:
case 561:
case 3331:
case 952:
case 1585:
case 2607:
case 1537:
case 357:
case 3507:
case 3473:
case 741:
case 3178:
case 129:
case 613:
case 2700:
case 931:
case 2561:
case 3844:
case 744:
case 3938:
case 1148:
case 2127:
case 1764:
case 624:
case 3572:
case 2668:
case 395:
case 3918:
case 3541:
case 115:
case 2872:
case 1987:
case 782:
case 991:
case 399:
case 739:
case 3683:
case 283:
case 3009:
case 2597:
case 1476:
case 2879:
case 3226:
case 2749:
case 1558:
case 1450:
case 237:
case 118:
case 75:
case 4045:
case 1803:
case 615:
case 566:
case 1082:
case 3526:
case 320:
case 1340:
case 78:
case 3851:
case 1553:
case 3184:
case 1164:
case 2019:
case 3932:
case 1366:
case 31:
case 2097:
case 1127:
case 3952:
case 3375:
case 1901:
case 3710:
case 65:
case 1572:
case 359:
case 1812:
case 3744:
case 210:
case 268:
case 1937:
case 2151:
case 685:
case 548:
case 2449:
case 3835:
case 1979:
case 2100:
case 1112:
case 2023:
case 1775:
case 3802:
case 1027:
case 3254:
case 309:
case 3139:
case 552:
case 2478:
case 955:
case 2592:
case 3815:
case 1410:
case 2383:
case 2140:
case 3259:
case 1687:
case 3976:
case 2180:
case 1520:
case 2811:
case 565:
case 3479:
case 1242:
case 3705:
case 1085:
case 1856:
case 708:
case 230:
case 336:
case 3167:
case 3942:
case 4087:
case 2966:
case 3118:
case 3284:
case 3460:
case 828:
case 3491:
case 72:
case 1227:
case 3562:
case 2398:
case 2234:
case 2018:
case 3278:
case 652:
case 378:
case 1245:
case 361:
case 342:
case 585:
case 3737:
case 3461:
case 2817:
case 3894:
case 8:
case 1693:
case 185:
case 2542:
case 2007:
case 423:
case 1962:
case 3776:
case 1652:
case 1635:
case 3913:
case 3367:
case 655:
case 344:
case 788:
case 3408:
case 1289:
case 1156:
case 805:
case 3181:
case 23:
case 743:
case 524:
case 3068:
case 681:
case 278:
case 1167:
case 3028:
case 1762:
case 2318:
case 482:
case 942:
case 2956:
case 1848:
case 1014:
case 2149:
case 2630:
case 582:
case 2040:
case 3321:
case 1862:
case 3046:
case 1138:
case 209:
case 3073:
case 2233:
case 3558:
case 2108:
case 721:
case 461:
case 3818:
case 3288:
case 3589:
case 1999:
case 3319:
case 1173:
case 3386:
case 667:
case 856:
case 498:
case 3782:
case 3100:
case 1884:
case 2735:
case 401:
case 1318:
case 3543:
case 1240:
case 3538:
case 1250:
case 595:
case 819:
case 3191:
case 3099:
case 2784:
case 1828:
case 3285:
case 2680:
case 426:
case 2504:
case 471:
case 3509:
case 2063:
case 2032:
case 1998:
case 1359:
case 2307:
case 89:
case 2730:
case 895:
case 205:
case 2242:
case 3221:
case 2870:
case 4016:
case 4030:
case 571:
case 737:
case 189:
case 290:
case 1163:
case 287:
case 11:
case 3606:
case 3070:
case 94:
case 30:
case 1308:
case 3941:
case 1008:
case 1767:
case 2395:
case 109:
case 541:
case 1794:
case 3468:
case 207:
case 506:
case 2756:
case 2994:
case 3708:
case 3767:
case 2053:
case 2583:
case 2874:
case 2152:
case 3912:
case 492:
case 2168:
case 3377:
case 1913:
case 1378:
case 3341:
case 2992:
case 2778:
case 2812:
case 1964:
case 1643:
case 1384:
case 2498:
case 3426:
case 2275:
case 2082:
case 3628:
case 1425:
case 1494:
case 2744:
case 1971:
case 1703:
case 3615:
case 364:
case 3873:
case 3634:
case 3217:
case 3037:
case 2491:
case 1551:
case 307:
case 409:
case 1683:
case 3436:
case 3289:
case 2440:
case 1137:
case 2884:
case 4089:
case 2819:
case 3849:
case 198:
case 2890:
case 785:
case 2016:
case 1961:
case 801:
case 245:
case 2517:
case 1932:
case 345:
case 3193:
case 228:
case 3895:
case 43:
case 3566:
case 2881:
case 3014:
case 1071:
case 3778:
case 3106:
case 2753:
case 2529:
case 4074:
case 1111:
case 4017:
case 468:
case 145:
case 3850:
case 3477:
case 3471:
case 809:
case 386:
case 4083:
case 1625:
case 607:
case 3432:
case 1072:
case 1829:
case 2533:
case 2746:
case 1486:
case 2458:
case 1114:
case 1367:
case 2595:
case 454:
case 3262:
case 3860:
case 3257:
case 3687:
case 4008:
case 1232:
case 3607:
case 3592:
case 3792:
case 891:
case 214:
case 3225:
case 3934:
case 508:
case 3892:
case 488:
case 1513:
case 1445:
case 777:
case 1515:
case 2861:
case 3956:
case 3439:
case 987:
case 3032:
case 3059:
case 1706:
case 2480:
case 598:
case 911:
case 3777:
case 1404:
case 3876:
case 2781:
case 2868:
case 2900:
case 653:
case 3765:
case 1129:
case 487:
case 2936:
case 3457:
case 639:
case 713:
case 1776:
case 959:
case 1281:
case 823:
case 167:
case 1545:
case 832:
case 3483:
case 428:
case 3429:
case 1226:
case 1822:
case 1601:
case 917:
case 73:
case 104:
case 1590:
case 1691:
case 1827:
case 1555:
case 1259:
case 2006:
case 2624:
case 4036:
case 969:
case 3381:
case 935:
case 3317:
case 3003:
case 434:
case 1380:
case 3997:
case 458:
case 2898:
case 2470:
case 1416:
case 2144:
case 4000:
case 3311:
case 3552:
case 4050:
case 559:
case 2033:
case 3260:
case 540:
case 510:
case 352:
case 3740:
case 1161:
case 909:
case 3265:
case 3434:
case 3138:
case 2866:
case 1723:
case 826:
case 291:
case 3582:
case 2711:
case 1297:
case 3755:
case 640:
case 2964:
case 827:
case 1807:
case 1413:
case 4047:
case 96:
case 2451:
case 2459:
case 4024:
case 843:
case 824:
case 1751:
case 2420:
case 250:
case 3943:
case 1012:
case 2782:
case 3638:
case 2340:
case 2570:
case 1208:
case 351:
case 139:
case 2939:
case 4081:
case 1732:
case 1215:
case 1736:
case 1781:
case 2829:
case 3031:
case 1037:
case 1342:
case 3745:
case 1398:
case 1204:
case 778:
case 1595:
case 3510:
case 509:
case 1713:
case 161:
case 5:
case 2310:
case 2003:
case 280:
case 1522:
case 172:
case 2758:
case 303:
case 4073:
case 2768:
case 1638:
case 1557:
case 657:
case 734:
case 3174:
case 1443:
case 3648:
case 1698:
case 1712:
case 1584:
case 628:
case 838:
case 2392:
case 2001:
case 671:
case 1861:
case 436:
case 1724:
case 3753:
case 617:
case 3348:
case 577:
case 2987:
case 3117:
case 2513:
case 3610:
case 660:
case 481:
case 219:
case 176:
case 326:
case 1925:
case 3392:
case 2046:
case 2057:
case 3165:
case 3886:
case 1929:
case 3180:
case 2080:
case 121:
case 2277:
case 727:
case 1738:
case 2124:
case 829:
case 3000:
case 3785:
case 908:
case 633:
case 1527:
case 1761:
case 4061:
case 1589:
case 1740:
case 363:
case 2610:
case 1811:
case 3713:
case 3585:
case 3373:
case 2379:
case 783:
case 2049:
case 588:
case 711:
case 3237:
case 1649:
case 3721:
case 136:
case 1427:
case 1299:
case 3718:
case 1535:
case 52:
case 149:
case 691:
case 766:
case 479:
case 715:
case 2752:
case 414:
case 1684:
case 427:
case 2731:
case 2290:
case 1336:
case 2904:
case 3897:
case 533:
case 3734:
case 1644:
case 3404:
case 2938:
case 797:
case 1102:
case 1295:
case 1567:
case 4020:
case 3727:
case 1028:
case 4079:
case 2271:
case 3405:
case 1452:
case 1219:
case 3097:
case 1350:
case 2445:
case 1158:
case 1421:
case 1938:
case 3904:
case 673:
case 3948:
case 3081:
case 2360:
case 255:
case 3263:
case 872:
case 3839:
case 1772:
case 480:
case 1773:
case 820:
case 3347:
case 2421:
case 2312:
case 1254:
case 3211:
case 3235:
case 1941:
case 2835:
case 1968:
case 1614:
case 3652:
case 1936:
case 3077:
case 2037:
case 370:
case 696:
case 2801:
case 2473:
case 3470:
case 2797:
case 1945:
case 1655:
case 2196:
case 1078:
case 2653:
case 334:
case 1688:
case 152:
case 2061:
case 437:
case 818:
case 1650:
case 277:
case 1900:
case 3930:
case 2899:
case 241:
case 3210:
case 3053:
case 2298:
case 534:
case 580:
case 3641:
case 3335:
case 1795:
case 2066:
case 360:
case 2521:
case 1181:
case 3157:
case 2546:
case 1063:
case 686:
case 3911:
case 1212:
case 1986:
case 113:
case 3622:
case 2975:
case 1048:
case 871:
case 3091:
case 286:
case 1897:
case 15:
case 626:
case 798:
case 2759:
case 1578:
case 1972:
case 2548:
case 3051:
case 379:
case 2070:
case 2897:
case 196:
case 178:
case 2895:
case 855:
case 1424:
case 2314:
case 1405:
case 1180:
case 752:
case 1540:
case 2106:
case 1423:
case 2245:
case 1682:
case 720:
case 2438:
case 3539:
case 1957:
case 3016:
case 3239:
case 604:
case 1009:
case 501:
case 2213:
case 2469:
case 922:
case 33:
case 1891:
case 3202:
case 664:
case 1896:
case 950:
case 3603:
case 1341:
case 2304:
case 128:
case 272:
case 330:
case 3325:
case 1273:
case 85:
case 474:
case 339:
case 814:
case 831:
case 2644:
case 1546:
case 2779:
case 612:
case 3080:
case 3961:
case 2531:
case 2058:
case 2627:
case 2142:
case 2582:
case 2709:
case 1823:
case 2508:
case 3903:
case 4092:
case 3144:
case 3018:
case 2068:
case 2643:
case 2554:
case 4:
case 3108:
case 1871:
case 3826:
case 1324:
case 902:
case 849:
case 3095:
case 519:
case 2692:
case 1800:
case 341:
case 2185:
case 1045:
case 4014:
case 1508:
case 946:
case 4091:
case 1830:
case 2840:
case 3447:
case 2942:
case 3485:
case 95:
case 3736:
case 1192:
case 3219:
case 1704:
case 3336:
case 1021:
case 3188:
case 2697:
case 2384:
case 3449:
case 1566:
case 836:
case 1165:
case 3916:
case 1265:
case 1400:
case 3631:
case 3500:
case 1550:
case 2086:
case 390:
case 1559:
case 1958:
case 3789:
case 2153:
case 1603:
case 2048:
case 2381:
case 2961:
case 1849:
case 2783:
case 150:
case 2190:
case 825:
case 1422:
case 1005:
case 3101:
case 1022:
case 2993:
case 194:
case 1766:
case 3275:
case 1858:
case 86:
case 3467:
case 2257:
case 3256:
case 3928:
case 3350:
case 2723:
case 1487:
case 1489:
case 4072:
case 3686:
case 1482:
case 1709:
case 1408:
case 1666:
case 3227:
case 523:
case 1144:
case 90:
case 3609:
case 938:
case 2905:
case 2619:
case 1701:
case 3064:
case 3171:
case 3442:
case 516:
case 543:
case 2272:
case 2718:
case 2212:
case 2193:
case 3299:
case 2378:
case 3087:
case 3344:
case 3515:
case 971:
case 1060:
case 3620:
case 2293:
case 3586:
case 3991:
case 3242:
case 666:
case 2792:
case 2363:
case 3057:
case 1511:
case 424:
case 3169:
case 2427:
case 201:
case 2292:
case 1349:
case 3569:
case 1672:
case 880:
case 3484:
case 2089:
case 632:
case 2594:
case 2148:
case 3162:
case 3140:
case 956:
case 2648:
case 3726:
case 940:
case 1866:
case 2324:
case 1852:
case 3577:
case 1420:
case 4041:
case 3781:
case 1131:
case 1952:
case 3629:
case 2249:
case 3481:
case 133:
case 2462:
case 3559:
case 2154:
case 1261:
case 1121:
case 1369:
case 1917:
case 1347:
case 2802:
case 2666:
case 2171:
case 3891:
case 3224:
case 2429:
case 3632:
case 197:
case 3861:
case 2408:
case 1867:
case 1025:
case 1168:
case 218:
case 1358:
case 3316:
case 821:
case 1528:
case 622:
case 1287:
case 1678:
case 1593:
case 3368:
case 2679:
case 3996:
case 2216:
case 1038:
case 2532:
case 3965:
case 1052:
case 2485:
case 2862:
case 1064:
case 2888:
case 2021:
case 2357:
case 3825:
case 718:
case 1771:
case 3352:
case 2331:
case 3540:
case 1630:
case 1705:
case 3287:
case 621:
case 1355:
case 62:
case 3067:
case 160:
case 1915:
case 1906:
case 3302:
case 3326:
case 2339:
case 3601:
case 1103:
case 2276:
case 2069:
case 642:
case 1412:
case 64:
case 903:
case 1307:
case 2352:
case 845:
case 2104:
case 1238:
case 311:
case 1814:
case 1753:
case 2614:
case 3702:
case 2664:
case 2500:
case 1888:
case 4037:
case 3291:
case 3200:
case 1539:
case 3337:
case 4013:
case 1241:
case 3513:
case 1006:
case 4019:
case 1579:
case 1789:
case 3595:
case 1472:
case 707:
case 2650:
case 1278:
case 1032:
case 258:
case 476:
case 1179:
case 2062:
case 1151:
case 1796:
case 1235:
case 3136:
case 1575:
case 3874:
case 4077:
case 3723:
case 3749:
case 265:
case 3995:
case 1503:
case 3530:
case 300:
case 102:
case 767:
case 496:
case 2156:
case 16:
case 1510:
case 2418:
case 1092:
case 2871:
case 2368:
case 3864:
case 637:
case 1942:
case 2916:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1711612801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,];
var gg_b = "1711612801/";

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
