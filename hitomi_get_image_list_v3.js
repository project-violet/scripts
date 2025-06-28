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
case 154:
case 3180:
case 3255:
case 13:
case 819:
case 2125:
case 1797:
case 1058:
case 2939:
case 1640:
case 3885:
case 1026:
case 1400:
case 3545:
case 1454:
case 1479:
case 3620:
case 1032:
case 3705:
case 932:
case 639:
case 2598:
case 1310:
case 2820:
case 2685:
case 3209:
case 2378:
case 1704:
case 1544:
case 2817:
case 3266:
case 1884:
case 613:
case 1352:
case 3347:
case 2763:
case 856:
case 701:
case 3321:
case 580:
case 3617:
case 1568:
case 563:
case 1081:
case 1954:
case 1979:
case 672:
case 2589:
case 1279:
case 712:
case 2168:
case 3613:
case 2144:
case 1323:
case 3966:
case 3649:
case 833:
case 1775:
case 3083:
case 2767:
case 1338:
case 3504:
case 3550:
case 3744:
case 3411:
case 2331:
case 3167:
case 450:
case 474:
case 2262:
case 3301:
case 2484:
case 582:
case 81:
case 217:
case 1134:
case 3818:
case 63:
case 3240:
case 670:
case 298:
case 2348:
case 1609:
case 1670:
case 3395:
case 3896:
case 3163:
case 3575:
case 2618:
case 285:
case 350:
case 645:
case 1591:
case 1992:
case 3135:
case 1574:
case 1217:
case 1559:
case 2105:
case 3377:
case 3593:
case 930:
case 1213:
case 3654:
case 3600:
case 1745:
case 97:
case 2984:
case 4076:
case 2630:
case 2780:
case 236:
case 465:
case 1292:
case 2854:
case 941:
case 2382:
case 664:
case 2376:
case 3225:
case 3064:
case 2095:
case 640:
case 1867:
case 92:
case 1245:
case 2518:
case 1033:
case 3388:
case 4082:
case 631:
case 3048:
case 3729:
case 1570:
case 406:
case 3861:
case 1792:
case 1749:
case 3834:
case 2980:
case 324:
case 1037:
case 1056:
case 1424:
case 3604:
case 122:
case 2170:
case 811:
case 444:
case 483:
case 3031:
case 2850:
case 1945:
case 460:
case 3468:
case 1357:
case 3082:
case 494:
case 4048:
case 3740:
case 3968:
case 306:
case 1835:
case 1445:
case 1322:
case 3612:
case 3351:
case 2480:
case 2166:
case 971:
case 455:
case 383:
case 3244:
case 1566:
case 4031:
case 142:
case 360:
case 1691:
case 715:
case 1130:
case 2762:
case 424:
case 1353:
case 787:
case 263:
case 1674:
case 278:
case 2360:
case 690:
case 2616:
case 3520:
case 517:
case 3898:
case 3645:
case 397:
case 1493:
case 1880:
case 1540:
case 1625:
case 318:
case 598:
case 1904:
case 2585:
case 793:
case 2086:
case 3315:
case 585:
case 929:
case 3816:
case 2267:
case 2698:
case 2845:
case 2435:
case 447:
case 3766:
case 3491:
case 140:
case 1185:
case 1250:
case 1975:
case 2263:
case 2967:
case 164:
case 327:
case 1497:
case 2140:
case 2043:
case 3513:
case 3974:
case 1293:
case 642:
case 175:
case 2689:
case 1008:
case 190:
case 949:
case 2019:
case 3709:
case 418:
case 800:
case 2235:
case 3549:
case 427:
case 1511:
case 1450:
case 2935:
case 758:
case 347:
case 1993:
case 1297:
case 1668:
case 462:
case 553:
case 2047:
case 2387:
case 1314:
case 2824:
case 3905:
case 4014:
case 976:
case 1125:
case 368:
case 2797:
case 373:
case 3662:
case 3145:
case 567:
case 3996:
case 2116:
case 270:
case 698:
case 777:
case 2198:
case 23:
case 522:
case 617:
case 1598:
case 628:
case 1685:
case 2712:
case 1735:
case 2640:
case 2026:
case 2454:
case 1239:
case 401:
case 752:
case 2954:
case 2979:
case 2750:
case 2704:
case 468:
case 2327:
case 3930:
case 2352:
case 3418:
case 653:
case 2775:
case 3230:
case 3829:
case 1589:
case 1892:
case 412:
case 3761:
case 2200:
case 3308:
case 4002:
case 1168:
case 774:
case 1262:
case 2417:
case 1534:
case 239:
case 614:
case 2161:
case 3985:
case 540:
case 9:
case 3175:
case 2724:
case 564:
case 2609:
case 1364:
case 3285:
case 1618:
case 2492:
case 185:
case 2413:
case 1962:
case 410:
case 834:
case 2220:
case 4022:
case 3328:
case 3090:
case 85:
case 3333:
case 4036:
case 4057:
case 1348:
case 3866:
case 3193:
case 2574:
case 153:
case 1462:
case 1105:
case 3365:
case 2591:
case 3053:
case 272:
case 2371:
case 2992:
case 1630:
case 590:
case 136:
case 3798:
case 3022:
case 1854:
case 2213:
case 2917:
case 2745:
case 2006:
case 1984:
case 2033:
case 2509:
case 2792:
case 2749:
case 3489:
case 86:
case 3003:
case 2713:
case 525:
case 2867:
case 907:
case 3539:
case 4094:
case 783:
case 1850:
case 1804:
case 760:
case 1784:
case 1001:
case 2037:
case 2118:
case 4071:
case 3663:
case 588:
case 222:
case 1170:
case 3635:
case 1073:
case 3785:
case 1166:
case 1893:
case 755:
case 1530:
case 2924:
case 2720:
case 2357:
case 2336:
case 2835:
case 2445:
case 3891:
case 409:
case 180:
case 3154:
case 3179:
case 163:
case 1360:
case 2674:
case 178:
case 1897:
case 2566:
case 1346:
case 1086:
case 3332:
case 4023:
case 3680:
case 904:
case 938:
case 98:
case 1267:
case 1698:
case 2412:
case 1845:
case 2275:
case 2540:
case 2625:
case 3234:
case 343:
case 946:
case 3120:
case 4041:
case 240:
case 2185:
case 2204:
case 2250:
case 1967:
case 264:
case 4027:
case 797:
case 2008:
case 2529:
case 1111:
case 1019:
case 1467:
case 996:
case 513:
case 3038:
case 393:
case 3117:
case 3023:
case 275:
case 1689:
case 2993:
case 2297:
case 762:
case 2668:
case 3434:
case 926:
case 1387:
case 1047:
case 2314:
case 3027:
case 443:
case 2511:
case 2450:
case 3041:
case 220:
case 3192:
case 458:
case 2869:
case 3537:
case 3556:
case 61:
case 730:
case 237:
case 741:
case 825:
case 4066:
case 1926:
case 2747:
case 1932:
case 2915:
case 3946:
case 1226:
case 3367:
case 1107:
case 895:
case 3246:
case 1564:
case 105:
case 119:
case 1708:
case 3533:
case 888:
case 1676:
case 3101:
case 1888:
case 3890:
case 3:
case 2594:
case 2359:
case 1660:
case 845:
case 2571:
case 1281:
case 216:
case 3822:
case 3778:
case 1899:
case 4070:
case 3857:
case 2415:
case 1981:
case 1000:
case 4:
case 1194:
case 3177:
case 2636:
case 2622:
case 3186:
case 3460:
case 1765:
case 2777:
case 2858:
case 261:
case 569:
case 3976:
case 2178:
case 4011:
case 25:
case 3658:
case 381:
case 208:
case 2988:
case 1578:
case 3782:
case 3632:
case 2288:
case 3380:
case 2510:
case 3802:
case 2826:
case 901:
case 2442:
case 2325:
case 732:
case 2701:
case 481:
case 1687:
case 2881:
case 3119:
case 2999:
case 1017:
case 3681:
case 1469:
case 2552:
case 813:
case 2084:
case 2344:
case 1013:
case 3764:
case 2523:
case 2488:
case 3508:
case 1733:
case 3748:
case 3029:
case 2242:
case 4040:
case 476:
case 2299:
case 3121:
case 1092:
case 1049:
case 3482:
case 3025:
case 1886:
case 958:
case 984:
case 1706:
case 346:
case 3532:
case 1678:
case 2751:
case 1546:
case 3264:
case 3248:
case 2080:
case 1233:
case 2473:
case 426:
case 2742:
case 1933:
case 1237:
case 2477:
case 3760:
case 304:
case 3948:
case 559:
case 892:
case 3362:
case 1928:
case 102:
case 4044:
case 26:
case 3964:
case 3558:
case 2623:
case 3282:
case 2808:
case 2638:
case 1819:
case 2495:
case 4025:
case 842:
case 1114:
case 1433:
case 2273:
case 1843:
case 2977:
case 2187:
case 3608:
case 446:
case 2973:
case 3852:
case 2277:
case 1437:
case 1456:
case 1265:
case 3044:
case 3827:
case 1587:
case 1024:
case 2183:
case 3431:
case 1769:
case 48:
case 3068:
case 396:
case 1821:
case 3172:
case 2652:
case 516:
case 993:
case 831:
case 2309:
case 2370:
case 1664:
case 2833:
case 1318:
case 786:
case 2828:
case 2772:
case 2603:
case 3803:
case 1408:
case 3628:
case 1075:
case 3633:
case 2067:
case 987:
case 909:
case 1895:
case 840:
case 703:
case 2986:
case 3807:
case 4059:
case 2176:
case 2063:
case 269:
case 2856:
case 389:
case 3978:
case 307:
case 1801:
case 2607:
case 2355:
case 611:
case 1190:
case 508:
case 1093:
case 166:
case 2243:
case 3506:
case 1732:
case 2715:
case 3746:
case 2035:
case 1153:
case 2536:
case 2219:
case 2921:
case 3871:
case 1560:
case 3091:
case 1136:
case 3142:
case 890:
case 2919:
case 3665:
case 2247:
case 1877:
case 2943:
case 2865:
case 1097:
case 3059:
case 1758:
case 3752:
case 2481:
case 3350:
case 3304:
case 1915:
case 1148:
case 47:
case 159:
case 321:
case 3741:
case 814:
case 3902:
case 1721:
case 137:
case 3018:
case 608:
case 3137:
case 3156:
case 2548:
case 2888:
case 1719:
case 65:
case 2226:
case 1131:
case 3375:
case 3688:
case 1503:
case 2107:
case 3738:
case 3876:
case 2564:
case 3595:
case 4030:
case 1215:
case 1472:
case 2232:
case 205:
case 421:
case 1571:
case 330:
case 1391:
case 116:
case 1972:
case 1653:
case 341:
case 3577:
case 1374:
case 2194:
case 3165:
case 1657:
case 3642:
case 2851:
case 3393:
case 974:
case 1806:
case 3312:
case 491:
case 2426:
case 2171:
case 256:
case 1415:
case 2432:
case 2842:
case 1178:
case 1062:
case 479:
case 2269:
case 3771:
case 3990:
case 817:
case 134:
case 1988:
case 108:
case 885:
case 2765:
case 1777:
case 3453:
case 2316:
case 1826:
case 1602:
case 3422:
case 3345:
case 3586:
case 952:
case 3436:
case 3846:
case 1832:
case 1499:
case 3457:
case 637:
case 828:
case 2969:
case 2646:
case 2578:
case 21:
case 2138:
case 3547:
case 1552:
case 3324:
case 2906:
case 1527:
case 1701:
case 379:
case 1541:
case 836:
case 1614:
case 3936:
case 1999:
case 3957:
case 3222:
case 616:
case 2141:
case 3257:
case 3519:
case 3236:
case 2092:
case 3543:
case 2152:
case 2013:
case 1538:
case 1795:
case 1251:
case 1523:
case 2206:
case 977:
case 3490:
case 3878:
case 1901:
case 399:
case 3098:
case 1473:
case 4089:
case 2956:
case 3722:
case 2228:
case 726:
case 3736:
case 1799:
case 962:
case 2385:
case 927:
case 2706:
case 505:
case 3515:
case 2546:
case 1751:
case 2678:
case 449:
case 3126:
case 3471:
case 3207:
case 3903:
case 16:
case 1995:
case 1146:
case 2465:
case 1477:
case 1201:
case 3753:
case 2928:
case 2102:
case 3619:
case 2965:
case 2114:
case 2843:
case 2428:
case 1187:
case 4016:
case 2583:
case 3403:
case 3392:
case 499:
case 3349:
case 878:
case 3089:
case 863:
case 1808:
case 3181:
case 947:
case 3790:
case 556:
case 3643:
case 2819:
case 880:
case 1329:
case 3572:
case 738:
case 429:
case 1627:
case 3407:
case 2821:
case 1973:
case 3294:
case 2456:
case 3621:
case 2587:
case 533:
case 2408:
case 335:
case 3864:
case 2648:
case 1419:
case 2576:
case 882:
case 3695:
case 39:
case 3438:
case 1833:
case 2318:
case 3210:
case 1772:
case 1603:
case 651:
case 3588:
case 486:
case 1856:
case 1837:
case 3452:
case 32:
case 2190:
case 2631:
case 3714:
case 2050:
case 44:
case 1176:
case 994:
case 1486:
case 960:
case 49:
case 3941:
case 1522:
case 2208:
case 944:
case 983:
case 4061:
case 1035:
case 3702:
case 3673:
case 2153:
case 3599:
case 386:
case 2330:
case 3238:
case 3952:
case 435:
case 2726:
case 3927:
case 3551:
case 2682:
case 2877:
case 3252:
case 1943:
case 1865:
case 2097:
case 303:
case 1366:
case 2908:
case 200:
case 371:
case 707:
case 42:
case 2560:
case 1553:
case 1221:
case 2136:
case 2157:
case 1694:
case 3131:
case 3503:
case 1688:
case 1723:
case 1876:
case 2246:
case 1595:
case 3039:
case 957:
case 873:
case 1096:
case 191:
case 1137:
case 2533:
case 632:
case 3719:
case 2528:
case 1202:
case 3148:
case 3869:
case 359:
case 538:
case 121:
case 1741:
case 2487:
case 1128:
case 337:
case 3721:
case 1752:
case 2363:
case 2669:
case 1350:
case 2195:
case 3915:
case 1727:
case 2335:
case 1312:
case 2778:
case 719:
case 3415:
case 2446:
case 1914:
case 2177:
case 972:
case 1699:
case 3786:
case 3636:
case 3806:
case 3653:
case 2173:
case 141:
case 3594:
case 1577:
case 2983:
case 1397:
case 3359:
case 3182:
case 17:
case 1860:
case 459:
case 596:
case 913:
case 316:
case 3391:
case 3972:
case 437:
case 2853:
case 2632:
case 621:
case 3288:
case 276:
case 3451:
case 2802:
case 1290:
case 3773:
case 3602:
case 3826:
case 1422:
case 970:
case 2276:
case 1846:
case 3832:
case 3442:
case 3777:
case 361:
case 2976:
case 507:
case 132:
case 2658:
case 281:
case 308:
case 334:
case 1543:
case 1672:
case 3538:
case 3795:
case 3523:
case 3488:
case 1883:
case 2508:
case 71:
case 630:
case 2960:
case 2748:
case 3242:
case 1236:
case 2476:
case 1519:
case 4062:
case 3368:
case 2011:
case 3701:
case 179:
case 3541:
case 810:
case 1957:
case 3999:
case 2731:
case 2143:
case 2681:
case 3552:
case 1887:
case 461:
case 3527:
case 3084:
case 3344:
case 351:
case 28:
case 2760:
case 3201:
case 2948:
case 2362:
case 1753:
case 1126:
case 1903:
case 635:
case 3995:
case 2558:
case 2482:
case 2025:
case 1907:
case 1203:
case 931:
case 3610:
case 2264:
case 3901:
case 2248:
case 1878:
case 3340:
case 964:
case 1722:
case 887:
case 3502:
case 2810:
case 62:
case 1736:
case 809:
case 5:
case 3799:
case 3973:
case 149:
case 3514:
case 2044:
case 3401:
case 46:
case 3641:
case 2431:
case 2841:
case 686:
case 296:
case 3311:
case 2068:
case 702:
case 2581:
case 3652:
case 1403:
case 2282:
case 1392:
case 1790:
case 3638:
case 3495:
case 226:
case 3788:
case 2838:
case 1619:
case 2448:
case 3273:
case 3187:
case 64:
case 603:
case 2608:
case 2776:
case 2823:
case 920:
case 1313:
case 1831:
case 1441:
case 992:
case 2807:
case 3421:
case 3063:
case 2637:
case 3447:
case 3837:
case 289:
case 2569:
case 700:
case 12:
case 1034:
case 581:
case 3607:
case 699:
case 1427:
case 3355:
case 1910:
case 3309:
case 3370:
case 1695:
case 1848:
case 858:
case 3443:
case 3833:
case 967:
case 1169:
case 3590:
case 80:
case 884:
case 4035:
case 1210:
case 1423:
case 3772:
case 3286:
case 2803:
case 2339:
case 2628:
case 766:
case 2633:
case 2142:
case 2199:
case 2665:
case 3247:
case 2894:
case 2074:
case 103:
case 1938:
case 3366:
case 1227:
case 4063:
case 893:
case 2478:
case 1238:
case 1952:
case 1410:
case 2506:
case 4067:
case 1223:
case 2746:
case 3160:
case 1882:
case 3522:
case 1354:
case 1300:
case 1673:
case 3536:
case 3219:
case 1542:
case 186:
case 3557:
case 3361:
case 319:
case 2156:
case 3548:
case 3676:
case 599:
case 1101:
case 852:
case 1070:
case 456:
case 1009:
case 1528:
case 4000:
case 1890:
case 4079:
case 1483:
case 3226:
case 2375:
case 2688:
case 3107:
case 2723:
case 3564:
case 305:
case 3958:
case 3103:
case 2752:
case 998:
case 917:
case 1669:
case 3481:
case 2350:
case 3258:
case 2304:
case 1195:
case 433:
case 1055:
case 2414:
case 1537:
case 1487:
case 716:
case 3194:
case 1177:
case 2642:
case 2030:
case 405:
case 1283:
case 2402:
case 3426:
case 948:
case 2651:
case 1778:
case 356:
case 1446:
case 2710:
case 3000:
case 953:
case 3079:
case 230:
case 737:
case 1853:
case 549:
case 2214:
case 1287:
case 1983:
case 333:
case 3316:
case 2436:
case 59:
case 3969:
case 3646:
case 2615:
case 1632:
case 31:
case 176:
case 1802:
case 3406:
case 2290:
case 3269:
case 232:
case 181:
case 1186:
case 4017:
case 1976:
case 2222:
case 3733:
case 41:
case 1029:
case 850:
case 2519:
case 2236:
case 3092:
case 586:
case 3049:
case 3389:
case 2543:
case 3152:
case 2672:
case 3013:
case 2883:
case 3206:
case 2490:
case 3017:
case 1731:
case 54:
case 1814:
case 503:
case 1681:
case 2887:
case 3123:
case 1011:
case 1260:
case 279:
case 2922:
case 75:
case 708:
case 734:
case 2936:
case 2253:
case 2957:
case 1119:
case 2126:
case 1231:
case 2207:
case 2132:
case 1115:
case 1558:
case 3256:
case 3465:
case 3933:
case 3237:
case 104:
case 18:
case 1760:
case 521:
case 2753:
case 3102:
case 894:
case 591:
case 2878:
case 1248:
case 2098:
case 299:
case 3233:
case 311:
case 3937:
case 2722:
case 824:
case 1810:
case 3228:
case 2320:
case 2736:
case 2757:
case 2686:
case 1482:
case 2907:
case 982:
case 3886:
case 1931:
case 1526:
case 3045:
case 2158:
case 3385:
case 146:
case 2515:
case 1264:
case 1431:
case 2271:
case 1841:
case 3769:
case 806:
case 751:
case 1982:
case 196:
case 1068:
case 3821:
case 402:
case 1852:
case 3265:
case 3456:
case 541:
case 2621:
case 1384:
case 3587:
case 76:
case 3024:
case 3965:
case 2994:
case 3433:
case 2403:
case 2349:
case 2089:
case 2971:
case 2181:
case 2790:
case 2643:
case 2572:
case 400:
case 1569:
case 3801:
case 22:
case 1188:
case 3190:
case 2910:
case 897:
case 2714:
case 3004:
case 2601:
case 1656:
case 1787:
case 1803:
case 3408:
case 1339:
case 3075:
case 3895:
case 3664:
case 2695:
case 29:
case 2848:
case 4012:
case 604:
case 2588:
case 2252:
case 4004:
case 1074:
case 24:
case 2227:
case 769:
case 2241:
case 271:
case 579:
case 3560:
case 1091:
case 3157:
case 2941:
case 3208:
case 2300:
case 2673:
case 2542:
case 2599:
case 3330:
case 3093:
case 963:
case 2952:
case 3873:
case 3726:
case 4075:
case 2410:
case 847:
case 3732:
case 1005:
case 980:
case 2927:
case 3682:
case 2223:
case 2885:
case 2386:
case 2046:
case 1218:
case 3735:
case 745:
case 2270:
case 101:
case 524:
case 2791:
case 2466:
case 891:
case 168:
case 2774:
case 3125:
case 173:
case 1662:
case 1145:
case 3939:
case 91:
case 2319:
case 1829:
case 830:
case 506:
case 3849:
case 1761:
case 1308:
case 1496:
case 3072:
case 3813:
case 2649:
case 2083:
case 4015:
case 3817:
case 2455:
case 795:
case 560:
case 1930:
case 2524:
case 2347:
case 3763:
case 754:
case 1811:
case 2617:
case 317:
case 436:
case 1789:
case 265:
case 3561:
case 832:
case 2240:
case 1870:
case 3088:
case 2395:
case 1150:
case 2896:
case 2575:
case 673:
case 385:
case 1567:
case 2076:
case 4051:
case 2504:
case 2744:
case 453:
case 562:
case 919:
case 1563:
case 1175:
case 905:
case 3534:
case 772:
case 2768:
case 3484:
case 1356:
case 2593:
case 2725:
case 3174:
case 3159:
case 2679:
case 2654:
case 3984:
case 3051:
case 417:
case 3191:
case 336:
case 3780:
case 2911:
case 1798:
case 933:
case 1485:
case 3879:
case 3854:
case 1535:
case 1036:
case 879:
case 1057:
case 4088:
case 3382:
case 3042:
case 274:
case 2929:
case 1053:
case 739:
case 1112:
case 956:
case 3284:
case 1365:
case 2711:
case 3001:
case 1998:
case 480:
case 1663:
case 552:
case 3170:
case 3109:
case 899:
case 2925:
case 2031:
case 3850:
case 4077:
case 115:
case 2139:
case 3634:
case 2225:
case 255:
case 1216:
case 1667:
case 658:
case 3518:
case 3280:
case 294:
case 829:
case 60:
case 684:
case 283:
case 1874:
case 1094:
case 3077:
case 260:
case 1891:
case 4001:
case 577:
case 1100:
case 966:
case 1179:
case 2697:
case 363:
case 378:
case 3360:
case 2399:
case 2342:
case 2740:
case 792:
case 206:
case 2968:
case 2500:
case 2554:
case 2612:
case 3073:
case 1306:
case 1498:
case 2351:
case 2944:
case 3480:
case 3166:
case 3893:
case 900:
case 4095:
case 623:
case 2491:
case 1358:
case 3263:
case 3967:
case 835:
case 911:
case 1234:
case 1562:
case 2459:
case 89:
case 4021:
case 3616:
case 2645:
case 297:
case 790:
case 565:
case 2162:
case 609:
case 218:
case 1010:
case 687:
case 82:
case 3585:
case 3086:
case 775:
case 1680:
case 2816:
case 0:
case 3963:
case 3267:
case 3698:
case 550:
case 2291:
case 574:
case 2624:
case 1381:
case 1041:
case 3463:
case 1868:
case 3021:
case 731:
case 740:
case 2259:
case 2274:
case 1434:
case 3387:
case 764:
case 3824:
case 2905:
case 3383:
case 2513:
case 4086:
case 2974:
case 1038:
case 2959:
case 2205:
case 84:
case 3689:
case 1718:
case 2770:
case 3019:
case 3235:
case 2549:
case 3467:
case 3310:
case 3712:
case 1209:
case 2840:
case 2430:
case 3793:
case 3640:
case 908:
case 3454:
case 325:
case 95:
case 1620:
case 3479:
case 1386:
case 273:
case 2662:
case 2145:
case 2996:
case 3116:
case 2918:
case 587:
case 8:
case 1791:
case 1466:
case 1970:
case 4081:
case 1966:
case 1692:
case 2418:
case 4026:
case 2124:
case 1343:
case 3338:
case 2230:
case 1470:
case 3629:
case 1409:
case 1319:
case 2829:
case 714:
case 345:
case 3279:
case 2761:
case 2496:
case 2308:
case 650:
case 1613:
case 3189:
case 2811:
case 1321:
case 2734:
case 43:
case 1617:
case 3568:
case 3900:
case 3081:
case 2014:
case 3327:
case 1266:
case 3611:
case 2930:
case 1524:
case 413:
case 3670:
case 1395:
case 2104:
case 2150:
case 937:
case 1896:
case 2567:
case 4006:
case 959:
case 3303:
case 3220:
case 2639:
case 736:
case 881:
case 1240:
case 3920:
case 3069:
case 50:
case 357:
case 1768:
case 1301:
case 2356:
case 472:
case 2337:
case 558:
case 3161:
case 753:
case 2985:
case 1744:
case 3655:
case 3724:
case 748:
case 1229:
case 210:
case 2485:
case 3249:
case 3292:
case 1512:
case 677:
case 2036:
case 2057:
case 3213:
case 2197:
case 3917:
case 1654:
case 1600:
case 3006:
case 1830:
case 523:
case 3913:
case 2193:
case 3574:
case 1377:
case 150:
case 4069:
case 174:
case 1060:
case 1929:
case 3591:
case 3666:
case 372:
case 3371:
case 3992:
case 2112:
case 4065:
case 568:
case 846:
case 215:
case 1139:
case 442:
case 3863:
case 501:
case 1444:
case 3555:
case 287:
case 3056:
case 3424:
case 763:
case 778:
case 1650:
case 322:
case 3390:
case 1675:
case 1388:
case 3570:
case 627:
case 838:
case 88:
case 3749:
case 2003:
case 3713:
case 1064:
case 155:
case 3867:
case 2891:
case 3353:
case 2989:
case 826:
case 2071:
case 2100:
case 2154:
case 2179:
case 1697:
case 3674:
case 2859:
case 144:
case 183:
case 3065:
case 160:
case 3130:
case 2635:
case 2498:
case 2306:
case 2805:
case 647:
case 4033:
case 1399:
case 3357:
case 1425:
case 1082:
case 106:
case 1968:
case 3445:
case 3835:
case 492:
case 20:
case 1459:
case 331:
case 2961:
case 694:
case 258:
case 1491:
case 3185:
case 162:
case 364:
case 3904:
case 1315:
case 951:
case 475:
case 3412:
case 3275:
case 1520:
case 4008:
case 3493:
case 1078:
case 3880:
case 2934:
case 3540:
case 118:
case 3754:
case 3700:
case 624:
case 807:
case 3779:
case 3993:
case 223:
case 1274:
case 1517:
case 2052:
case 1905:
case 1291:
case 3511:
case 3404:
case 320:
case 606:
case 2149:
case 3912:
case 431:
case 782:
case 2868:
case 3644:
case 1889:
case 510:
case 1372:
case 3529:
case 1991:
case 3475:
case 1592:
case 1974:
case 293:
case 2038:
case 2023:
case 1184:
case 375:
case 2796:
case 2461:
case 644:
case 683:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1751097602/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,];
var gg_b = "1751097602/";

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
