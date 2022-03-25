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
case 79:
case 1539:
case 2219:
case 2462:
case 3391:
case 1960:
case 1517:
case 1246:
case 1335:
case 3882:
case 2085:
case 2692:
case 2473:
case 162:
case 1997:
case 3328:
case 3267:
case 1631:
case 1383:
case 749:
case 2613:
case 774:
case 3411:
case 2365:
case 85:
case 3179:
case 1732:
case 3287:
case 556:
case 3329:
case 2733:
case 3016:
case 263:
case 1391:
case 3092:
case 1915:
case 2486:
case 566:
case 1012:
case 858:
case 727:
case 1876:
case 443:
case 1771:
case 1196:
case 2487:
case 496:
case 964:
case 2368:
case 3249:
case 3767:
case 1452:
case 2939:
case 1866:
case 3274:
case 3475:
case 3291:
case 2155:
case 3795:
case 602:
case 3498:
case 2469:
case 667:
case 1964:
case 220:
case 3598:
case 1129:
case 1187:
case 1586:
case 185:
case 1612:
case 1909:
case 4080:
case 1028:
case 1086:
case 3218:
case 686:
case 3364:
case 3241:
case 4024:
case 1128:
case 2252:
case 4033:
case 819:
case 461:
case 1279:
case 4009:
case 1117:
case 486:
case 2894:
case 1434:
case 3715:
case 316:
case 1446:
case 2119:
case 171:
case 2475:
case 29:
case 3255:
case 2945:
case 1725:
case 2225:
case 230:
case 3734:
case 2420:
case 537:
case 876:
case 903:
case 2276:
case 2932:
case 1759:
case 983:
case 1687:
case 2952:
case 1329:
case 1010:
case 1068:
case 3096:
case 2985:
case 1900:
case 1826:
case 3141:
case 1476:
case 581:
case 280:
case 3487:
case 2592:
case 2307:
case 2719:
case 617:
case 3732:
case 1839:
case 1312:
case 2872:
case 3899:
case 3504:
case 2069:
case 2748:
case 3730:
case 3891:
case 1291:
case 2029:
case 2501:
case 3012:
case 1475:
case 182:
case 2920:
case 382:
case 1206:
case 626:
case 1593:
case 3432:
case 1455:
case 2510:
case 128:
case 3448:
case 3533:
case 2465:
case 1533:
case 765:
case 3549:
case 336:
case 534:
case 3706:
case 3169:
case 1975:
case 3128:
case 2603:
case 794:
case 943:
case 1666:
case 113:
case 3440:
case 3344:
case 351:
case 527:
case 3289:
case 1780:
case 3050:
case 4036:
case 3444:
case 500:
case 2284:
case 4021:
case 513:
case 2436:
case 1485:
case 1030:
case 2669:
case 1617:
case 2653:
case 1607:
case 3137:
case 3741:
case 616:
case 2880:
case 4066:
case 957:
case 1416:
case 329:
case 3955:
case 2234:
case 3283:
case 4084:
case 3521:
case 4077:
case 3837:
case 3773:
case 3412:
case 1828:
case 1860:
case 3754:
case 3832:
case 1007:
case 3608:
case 1568:
case 886:
case 3931:
case 2775:
case 3265:
case 1950:
case 1741:
case 3383:
case 1769:
case 1750:
case 1814:
case 3404:
case 3396:
case 1698:
case 3548:
case 3912:
case 3941:
case 1365:
case 3490:
case 2341:
case 3705:
case 1029:
case 1491:
case 238:
case 910:
case 3233:
case 1091:
case 704:
case 1929:
case 3056:
case 622:
case 3992:
case 1531:
case 2787:
case 3985:
case 1557:
case 4071:
case 146:
case 1098:
case 1272:
case 2738:
case 3685:
case 2670:
case 327:
case 3968:
case 2803:
case 2352:
case 800:
case 3003:
case 1864:
case 1444:
case 257:
case 3138:
case 3634:
case 3099:
case 1183:
case 3691:
case 1912:
case 2699:
case 3818:
case 887:
case 1460:
case 6:
case 196:
case 3231:
case 2902:
case 736:
case 2448:
case 3566:
case 3847:
case 375:
case 978:
case 3268:
case 632:
case 2279:
case 3665:
case 2636:
case 3213:
case 3944:
case 1655:
case 2129:
case 2242:
case 1388:
case 1774:
case 3266:
case 1870:
case 2451:
case 174:
case 2318:
case 3775:
case 2796:
case 578:
case 1379:
case 2550:
case 2354:
case 3468:
case 2246:
case 2907:
case 2789:
case 1573:
case 2432:
case 2563:
case 1350:
case 570:
case 1945:
case 2128:
case 728:
case 3965:
case 1144:
case 3247:
case 2144:
case 160:
case 35:
case 2575:
case 1486:
case 2506:
case 233:
case 109:
case 2910:
case 3972:
case 3121:
case 3957:
case 2633:
case 100:
case 600:
case 2735:
case 1288:
case 2941:
case 907:
case 1267:
case 2838:
case 1809:
case 2263:
case 3889:
case 3547:
case 2165:
case 3488:
case 3129:
case 4068:
case 2737:
case 3073:
case 718:
case 1833:
case 304:
case 952:
case 881:
case 1553:
case 168:
case 3462:
case 888:
case 3631:
case 565:
case 895:
case 2993:
case 235:
case 3491:
case 41:
case 3139:
case 2797:
case 1425:
case 3118:
case 3900:
case 2755:
case 1561:
case 4020:
case 3888:
case 3660:
case 2966:
case 3920:
case 2860:
case 3295:
case 129:
case 3336:
case 3764:
case 608:
case 3817:
case 92:
case 3851:
case 2606:
case 309:
case 370:
case 3243:
case 1165:
case 2783:
case 920:
case 1247:
case 435:
case 271:
case 190:
case 2046:
case 3672:
case 188:
case 3738:
case 2666:
case 40:
case 3904:
case 2812:
case 3554:
case 821:
case 2708:
case 133:
case 2445:
case 2028:
case 4035:
case 1653:
case 1400:
case 405:
case 3461:
case 127:
case 54:
case 847:
case 7:
case 2918:
case 1441:
case 359:
case 2335:
case 1063:
case 671:
case 2233:
case 2388:
case 1955:
case 2202:
case 2593:
case 52:
case 243:
case 695:
case 3380:
case 685:
case 1981:
case 2728:
case 3161:
case 4019:
case 773:
case 10:
case 2629:
case 2383:
case 2376:
case 809:
case 4046:
case 1271:
case 2164:
case 1373:
case 2146:
case 1014:
case 3418:
case 3662:
case 2191:
case 4044:
case 1886:
case 684:
case 1301:
case 3323:
case 783:
case 689:
case 1898:
case 419:
case 3324:
case 3895:
case 767:
case 2647:
case 1103:
case 1222:
case 2819:
case 229:
case 249:
case 3393:
case 1619:
case 3611:
case 3636:
case 2808:
case 2075:
case 3047:
case 1813:
case 3553:
case 1251:
case 3275:
case 101:
case 738:
case 3640:
case 3250:
case 3880:
case 3768:
case 2900:
case 3486:
case 1911:
case 2961:
case 1357:
case 4016:
case 2042:
case 2177:
case 2192:
case 2832:
case 1879:
case 938:
case 1804:
case 1823:
case 3452:
case 264:
case 954:
case 3694:
case 1282:
case 3415:
case 2734:
case 3205:
case 701:
case 1822:
case 4026:
case 3182:
case 3414:
case 753:
case 3781:
case 2652:
case 3194:
case 3401:
case 3815:
case 3060:
case 31:
case 3529:
case 2564:
case 1045:
case 2293:
case 3466:
case 3731:
case 3450:
case 3544:
case 2472:
case 892:
case 3347:
case 824:
case 1035:
case 2185:
case 3751:
case 437:
case 874:
case 3168:
case 2668:
case 2893:
case 2283:
case 3008:
case 2275:
case 2925:
case 2992:
case 1978:
case 1120:
case 2521:
case 77:
case 2934:
case 1342:
case 2676:
case 4090:
case 1970:
case 1392:
case 948:
case 1907:
case 528:
case 3856:
case 3542:
case 1570:
case 1953:
case 400:
case 1992:
case 2241:
case 1101:
case 3070:
case 1140:
case 1442:
case 149:
case 1526:
case 1479:
case 2289:
case 636:
case 826:
case 3081:
case 2871:
case 1946:
case 3518:
case 2695:
case 3584:
case 1020:
case 2515:
case 3596:
case 3027:
case 2411:
case 2763:
case 1040:
case 1504:
case 2058:
case 1194:
case 3761:
case 163:
case 1938:
case 2447:
case 3763:
case 2142:
case 1321:
case 1173:
case 3456:
case 2544:
case 447:
case 1370:
case 481:
case 1831:
case 2980:
case 1893:
case 3896:
case 2630:
case 2235:
case 897:
case 1322:
case 3654:
case 2152:
case 1228:
case 2743:
case 2044:
case 1309:
case 198:
case 4074:
case 3185:
case 497:
case 3136:
case 3002:
case 1332:
case 861:
case 1522:
case 2634:
case 175:
case 1798:
case 262:
case 1462:
case 267:
case 1192:
case 1644:
case 3246:
case 2111:
case 3814:
case 3639:
case 1844:
case 3998:
case 2071:
case 1717:
case 276:
case 191:
case 1132:
case 3963:
case 1166:
case 1049:
case 3036:
case 2828:
case 2443:
case 63:
case 637:
case 15:
case 3641:
case 1575:
case 2996:
case 1567:
case 1853:
case 760:
case 3259:
case 3927:
case 2489:
case 1461:
case 2760:
case 2923:
case 314:
case 3695:
case 3310:
case 159:
case 223:
case 2671:
case 2942:
case 2883:
case 3394:
case 436:
case 2391:
case 473:
case 58:
case 1855:
case 1410:
case 3046:
case 2067:
case 2045:
case 2940:
case 241:
case 947:
case 3282:
case 526:
case 3677:
case 529:
case 2059:
case 119:
case 3840:
case 2525:
case 3229:
case 1515:
case 4034:
case 2851:
case 624:
case 2295:
case 3033:
case 3857:
case 1973:
case 1027:
case 3668:
case 3869:
case 478:
case 3373:
case 2000:
case 1051:
case 3442:
case 387:
case 3342:
case 698:
case 2158:
case 3377:
case 2798:
case 3765:
case 144:
case 1185:
case 810:
case 1584:
case 1789:
case 2537:
case 3699:
case 806:
case 2801:
case 1359:
case 3496:
case 3037:
case 1848:
case 2566:
case 921:
case 1177:
case 3961:
case 2888:
case 3844:
case 2664:
case 1078:
case 4027:
case 34:
case 2463:
case 1131:
case 1273:
case 3435:
case 3619:
case 441:
case 2835:
case 3191:
case 2426:
case 2306:
case 655:
case 180:
case 3064:
case 4051:
case 2746:
case 3186:
case 2905:
case 2396:
case 3908:
case 672:
case 1366:
case 417:
case 3090:
case 1976:
case 2003:
case 321:
case 3276:
case 272:
case 2507:
case 1724:
case 1926:
case 811:
case 2441:
case 3574:
case 649:
case 2393:
case 3014:
case 2127:
case 3104:
case 917:
case 2605:
case 4091:
case 1438:
case 3108:
case 791:
case 1423:
case 595:
case 2079:
case 2853:
case 1943:
case 2646:
case 2516:
case 966:
case 3366:
case 1431:
case 3618:
case 2105:
case 1333:
case 1276:
case 2895:
case 3919:
case 334:
case 2752:
case 3074:
case 61:
case 1634:
case 2136:
case 3374:
case 1927:
case 3207:
case 1163:
case 3860:
case 1437:
case 3034:
case 3687:
case 4055:
case 3239:
case 3094:
case 3263:
case 3786:
case 2642:
case 3670:
case 1360:
case 4001:
case 1740:
case 1923:
case 4012:
case 2168:
case 2947:
case 2248:
case 3354:
case 1596:
case 2886:
case 82:
case 3187:
case 3397:
case 323:
case 1730:
case 3315:
case 3838:
case 3585:
case 2450:
case 1092:
case 712:
case 1694:
case 1728:
case 3708:
case 3942:
case 757:
case 577:
case 1506:
case 2065:
case 4075:
case 3742:
case 2683:
case 206:
case 4063:
case 859:
case 3756:
case 3578:
case 1620:
case 324:
case 3994:
case 74:
case 4014:
case 356:
case 1914:
case 2482:
case 3799:
case 3757:
case 2470:
case 1217:
case 315:
case 3666:
case 2874:
case 489:
case 1074:
case 1556:
case 2304:
case 2061:
case 1208:
case 568:
case 569:
case 588:
case 2180:
case 430:
case 3704:
case 1275:
case 1001:
case 1961:
case 721:
case 373:
case 3690:
case 3883:
case 2844:
case 2718:
case 3406:
case 3865:
case 8:
case 39:
case 335:
case 3294:
case 1583:
case 3042:
case 285:
case 3458:
case 3392:
case 744:
case 856:
case 3445:
case 2099:
case 2367:
case 977:
case 1807:
case 1055:
case 2730:
case 562:
case 926:
case 3459:
case 2824:
case 2369:
case 4088:
case 763:
case 3679:
case 1154:
case 1233:
case 307:
case 1859:
case 2:
case 2456:
case 1613:
case 2711:
case 3195:
case 3692:
case 345:
case 3288:
case 2220:
case 702:
case 1838:
case 2317:
case 3925:
case 3651:
case 3480:
case 834:
case 2198:
case 2991:
case 2018:
case 2659:
case 2638:
case 972:
case 3357:
case 2054:
case 1236:
case 2493:
case 3989:
case 3723:
case 2170:
case 896:
case 2627:
case 1999:
case 1470:
case 3271:
case 2145:
case 1656:
case 3176:
case 3864:
case 3140:
case 1817:
case 875:
case 1704:
case 2385:
case 2846:
case 3813:
case 2938:
case 2611:
case 3952:
case 202:
case 2637:
case 612:
case 769:
case 2107:
case 1148:
case 2678:
case 2645:
case 1705:
case 3950:
case 3981:
case 3993:
case 3712:
case 3123:
case 2612:
case 3478:
case 3983:
case 24:
case 1835:
case 1292:
case 2156:
case 1066:
case 1456:
case 1382:
case 4093:
case 3270:
case 2767:
case 2259:
case 2909:
case 135:
case 2083:
case 1837:
case 2148:
case 2950:
case 3395:
case 1285:
case 3100:
case 3300:
case 3219:
case 3417:
case 448:
case 687:
case 2209:
case 761:
case 3986:
case 988:
case 3804:
case 1715:
case 3525:
case 2051:
case 3097:
case 1944:
case 360:
case 2066:
case 384:
case 3852:
case 1510:
case 1532:
case 1159:
case 3210:
case 2294:
case 746:
case 3363:
case 2848:
case 4002:
case 3193:
case 3337:
case 2298:
case 2080:
case 2048:
case 2196:
case 2387:
case 1458:
case 1761:
case 2912:
case 42:
case 2214:
case 3439:
case 3649:
case 480:
case 3964:
case 3589:
case 2373:
case 2989:
case 1714:
case 270:
case 660:
case 545:
case 2429:
case 3240:
case 1645:
case 1675:
case 3809:
case 1549:
case 2386:
case 2108:
case 3134:
case 3057:
case 1841:
case 1374:
case 3534:
case 4087:
case 785:
case 3313:
case 3633:
case 849:
case 3855:
case 28:
case 706:
case 1875:
case 715:
case 2406:
case 1514:
case 792:
case 1508:
case 975:
case 2403:
case 1676:
case 1191:
case 553:
case 1412:
case 425:
case 3257:
case 2282:
case 3311:
case 1403:
case 1390:
case 1931:
case 985:
case 3823:
case 1435:
case 2687:
case 693:
case 380:
case 868:
case 596:
case 1937:
case 1385:
case 3296:
case 1760:
case 3885:
case 2392:
case 3224:
case 492:
case 2556:
case 2223:
case 3160:
case 396:
case 963:
case 2875:
case 3144:
case 2928:
case 186:
case 1387:
case 426:
case 1594:
case 2943:
case 1662:
case 3735:
case 523:
case 3625:
case 1497:
case 799:
case 3061:
case 3780:
case 3587:
case 1180:
case 780:
case 680:
case 2187:
case 533:
case 1540:
case 1447:
case 3680:
case 376:
case 2016:
case 1059:
case 2291:
case 1119:
case 1793:
case 1749:
case 2060:
case 2339:
case 1872:
case 3460:
case 369:
case 742:
case 2057:
case 106:
case 3026:
case 179:
case 3565:
case 1492:
case 2053:
case 1688:
case 2161:
case 3583:
case 1115:
case 2726:
case 745:
case 3017:
case 96:
case 4056:
case 153:
case 522:
case 66:
case 2227:
case 1097:
case 2030:
case 2033:
case 1668:
case 2256:
case 530:
case 2117:
case 1227:
case 3520:
case 4049:
case 75:
case 1651:
case 3052:
case 3603:
case 2551:
case 3484:
case 3341:
case 2602:
case 1240:
case 2707:
case 3316:
case 1428:
case 1255:
case 2915:
case 3967:
case 2975:
case 2073:
case 1429:
case 1413:
case 2101:
case 1404:
case 781:
case 170:
case 2206:
case 4:
case 1453:
case 3721:
case 1317:
case 1576:
case 990:
case 161:
case 3038:
case 2087:
case 900:
case 1854:
case 3368:
case 877:
case 650:
case 3599:
case 841:
case 4015:
case 4081:
case 1426:
case 3425:
case 4010:
case 1677:
case 3861:
case 3647:
case 722:
case 3615:
case 854:
case 2805:
case 1768:
case 1747:
case 1552:
case 2533:
case 3586:
case 1603:
case 3779:
case 3068:
case 3467:
case 618:
case 4045:
case 2319:
case 1896:
case 776:
case 1237:
case 1661:
case 3089:
case 2330:
case 482:
case 1974:
case 2962:
case 713:
case 1008:
case 3492:
case 403:
case 812:
case 3866:
case 2520:
case 3973:
case 3510:
case 273:
case 2978:
case 2866:
case 635:
case 1824:
case 25:
case 3689:
case 1484:
case 2006:
case 195:
case 340:
case 1951:
case 1604:
case 1111:
case 1324:
case 3320:
case 2531:
case 1773:
case 3667:
case 2025:
case 3472:
case 20:
case 2917:
case 2240:
case 2100:
case 2964:
case 3053:
case 1449:
case 517:
case 411:
case 290:
case 2331:
case 221:
case 310:
case 3746:
case 1347:
case 1851:
case 1371:
case 2639:
case 2822:
case 3661:
case 691:
case 211:
case 1884:
case 2586:
case 1680:
case 3049:
case 3244:
case 969:
case 683:
case 1122:
case 1932:
case 1990:
case 193:
case 2753:
case 3975:
case 253:
case 814:
case 412:
case 2047:
case 357:
case 3635:
case 2951:
case 3029:
case 433:
case 3853:
case 1618:
case 2919:
case 3988:
case 1674:
case 2261:
case 2086:
case 3678:
case 4013:
case 1679:
case 2609:
case 2887:
case 401:
case 697:
case 880:
case 3801:
case 1733:
case 1142:
case 1298:
case 2171:
case 3770:
case 942:
case 3063:
case 11:
case 2884:
case 12:
case 76:
case 3443:
case 2548:
case 3871:
case 1765:
case 344:
case 2418:
case 4030:
case 254:
case 3501:
case 342:
case 673:
case 2350:
case 1988:
case 1495:
case 471:
case 3945:
case 3040:
case 4072:
case 2901:
case 3437:
case 1883:
case 381:
case 3571:
case 383:
case 43:
case 3497:
case 1591:
case 3436:
case 97:
case 2539:
case 406:
case 3928:
case 1306:
case 1231:
case 3811:
case 420:
case 495:
case 152:
case 2113:
case 2814:
case 3794:
case 830:
case 941:
case 1421:
case 1720:
case 521:
case 1369:
case 2157:
case 1560:
case 3833:
case 829:
case 169:
case 2677:
case 1130:
case 3938:
case 1102:
case 3272:
case 3539:
case 1223:
case 3901:
case 3227:
case 703:
case 1957:
case 3870:
case 2477:
case 817:
case 1521:
case 3524:
case 688:
case 64:
case 1525:
case 3749:
case 1590:
case 1536:
case 2667:
case 1326:
case 543:
case 1415:
case 716:
case 2682:
case 466:
case 3242:
case 17:
case 3718:
case 248:
case 2172:
case 2118:
case 979:
case 3658:
case 2608:
case 2037:
case 2757:
case 3209:
case 934:
case 2124:
case 1099:
case 1094:
case 3580:
case 2424:
case 2055:
case 244:
case 3540:
case 2790:
case 748:
case 1327:
case 2658:
case 3124:
case 252:
case 2820:
case 1195:
case 1113:
case 1349:
case 3424:
case 1513:
case 476:
case 3083:
case 3059:
case 114:
case 3506:
case 3279:
case 3688:
case 1530:
case 2742:
case 2480:
case 2467:
case 504:
case 1939:
case 3836:
case 498:
case 3711:
case 2184:
case 3933:
case 2097:
case 407:
case 867:
case 3389:
case 3930:
case 2231:
case 572:
case 1050:
case 2262:
case 3962:
case 3340:
case 155:
case 3188:
case 1664:
case 2810:
case 965:
case 1920:
case 1123:
case 894:
case 367:
case 1149:
case 1172:
case 1819:
case 232:
case 3044:
case 1763:
case 81:
case 3722:
case 2523:
case 1639:
case 911:
case 2807:
case 2588:
case 520:
case 73:
case 3420:
case 2498:
case 1581:
case 3041:
case 2921:
case 130:
case 3114:
case 1323:
case 3433:
case 1916:
case 1466:
case 747:
case 2721:
case 468:
case 3796:
case 2929:
case 2635:
case 3684:
case 2437:
case 1670:
case 2956:
case 3879:
case 869:
case 974:
case 3537:
case 2878:
case 2315:
case 1018:
case 1902:
case 2178:
case 2458:
case 1903:
case 278:
case 1786:
case 2698:
case 1810:
case 2852:
case 1791:
case 1118:
case 2002:
case 2427:
case 3652:
case 418:
case 657:
case 26:
case 592:
case 3915:
case 176:
case 634:
case 850:
case 732:
case 50:
case 3499:
case 3922:
case 2876:
case 2419:
case 3999:
case 2766:
case 2546:
case 3416:
case 2413:
case 3130:
case 593:
case 300:
case 1252:
case 1795:
case 3760:
case 3858:
case 167:
case 931:
case 3091:
case 1186:
case 13:
case 1304:
case 2811:
case 282:
case 3126:
case 1805:
case 2842:
case 1757:
case 1640:
case 2740:
case 3907:
case 126:
case 3293:
case 2827:
case 1225:
case 914:
case 488:
case 2190:
case 3446:
case 151:
case 2137:
case 890:
case 1524:
case 1546:
case 1598:
case 1548:
case 2112:
case 1616:
case 1201:
case 904:
case 2594:
case 862:
case 3996:
case 3110:
case 620:
case 363:
case 2446:
case 1595:
case 640:
case 1109:
case 288:
case 1606:
case 3969:
case 3954:
case 2693:
case 3005:
case 949:
case 2679:
case 2987:
case 726:
case 2141:
case 2703:
case 1948:
case 1153:
case 960:
case 3893:
case 2540:
case 3752:
case 3676:
case 2305:
case 457:
case 1701:
case 3245:
case 1736:
case 1605:
case 68:
case 709:
case 643:
case 762:
case 2530:
case 1538:
case 820:
case 2212:
case 3303:
case 2359:
case 3516:
case 1847:
case 958:
case 141:
case 973:
case 1463:
case 4060:
case 4092:
case 183:
case 386:
case 3745:
case 1949:
case 30:
case 255:
case 1667:
case 836:
case 3868:
case 2519:
case 3846:
case 803:
case 4083:
case 3111:
case 2930:
case 3473:
case 207:
case 893:
case 2370:
case 1061:
case 89:
case 2967:
case 3616:
case 209:
case 959:
case 3551:
case 1260:
case 2160:
case 3517:
case 2082:
case 2732:
case 3402:
case 2559:
case 2869:
case 4000:
case 1348:
case 3545:
case 3011:
case 3909:
case 1162:
case 1367:
case 3006:
case 338:
case 1797:
case 1156:
case 1073:
case 1710:
case 1398:
case 3158:
case 3602:
case 3500:
case 1775:
case 3256:
case 4017:
case 2868:
case 2599:
case 3729:
case 1362:
case 2313:
case 3419:
case 2005:
case 3151:
case 265:
case 1918:
case 3531:
case 3360:
case 3887:
case 3375:
case 2576:
case 2217:
case 3976:
case 246:
case 3216:
case 2213:
case 2979:
case 2299:
case 2747:
case 2922:
case 2899:
case 980:
case 1980:
case 4078:
case 3762:
case 3854:
case 3872:
case 669:
case 1328:
case 421:
case 2723:
case 3535:
case 3335:
case 3572:
case 458:
case 2570:
case 2013:
case 658:
case 2768:
case 639:
case 275:
case 4095:
case 1052:
case 1467:
case 3166:
case 2715:
case 764:
case 4086:
case 2994:
case 3427:
case 4089:
case 1933:
case 2110:
case 2524:
case 140:
case 3133:
case 2751:
case 1587:
case 1895:
case 2739:
case 2731:
case 124:
case 3821:
case 2244:
case 741:
case 2024:
case 750:
case 1544:
case 4079:
case 3659:
case 2513:
case 372:
case 3471:
case 645:
case 1108:
case 3701:
case 1811:
case 2597:
case 2340:
case 1294:
case 301:
case 2349:
case 455:
case 2133:
case 70:
case 3835:
case 322:
case 1489:
case 2662:
case 2404:
case 3632:
case 142:
case 1707:
case 2455:
case 2221:
case 205:
case 1913:
case 2960:
case 364:
case 998:
case 145:
case 1133:
case 226:
case 2375:
case 999:
case 3164:
case 1232:
case 853:
case 378:
case 1820:
case 2806:
case 2849:
case 1627:
case 3507:
case 2561:
case 1922:
case 696:
case 1286:
case 3894:
case 3325:
case 1585:
case 245:
case 1782:
case 95:
case 1487:
case 848:
case 2776:
case 2366:
case 3022:
case 1406:
case 710:
case 3588:
case 3261:
case 2114:
case 2008:
case 1754:
case 3339:
case 3698:
case 3936:
case 2049:
case 3530:
case 3515:
case 554:
case 1862:
case 69:
case 937:
case 2877:
case 3845:
case 2130:
case 2526:
case 3307:
case 2351:
case 2837:
case 428:
case 607:
case 1265:
case 1411:
case 1868:
case 427:
case 604:
case 1967:
case 3911:
case 2460:
case 392:
case 3381:
case 3280:
case 1954:
case 2786:
case 1551:
case 3974:
case 3713:
case 1167:
case 2591:
case 1752:
case 2916:
case 1579:
case 2946:
case 4038:
case 3630:
case 580:
case 3849:
case 1044:
case 3980:
case 1885:
case 3720:
case 694:
case 1218:
case 2300:
case 1005:
case 3921:
case 2590:
case 2149:
case 3890:
case 2163:
case 3403:
case 1742:
case 4054:
case 2502:
case 4073:
case 1788:
case 3629:
case 1703:
case 787:
case 350:
case 3362:
case 3147:
case 3379:
case 2641:
case 1965:
case 2205:
case 3593:
case 2585:
case 3834:
case 452:
case 2688:
case 3600:
case 3743:
case 404:
case 293:
case 284:
case 1084:
case 899:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1648249201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,];
var gg_b = "1648249201/";

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
