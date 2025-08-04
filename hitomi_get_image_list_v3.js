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
case 3659:
case 925:
case 1055:
case 1983:
case 17:
case 1568:
case 3285:
case 2518:
case 1688:
case 3787:
case 3762:
case 2812:
case 663:
case 883:
case 2685:
case 2259:
case 538:
case 2750:
case 3081:
case 3100:
case 600:
case 2058:
case 1986:
case 3486:
case 2274:
case 1137:
case 288:
case 336:
case 512:
case 2961:
case 3851:
case 1057:
case 2149:
case 3553:
case 3287:
case 4078:
case 3394:
case 3193:
case 3785:
case 12:
case 3650:
case 2804:
case 4031:
case 3196:
case 1517:
case 1751:
case 991:
case 2774:
case 1154:
case 168:
case 571:
case 3109:
case 1885:
case 1179:
case 3424:
case 3556:
case 1135:
case 1594:
case 373:
case 3920:
case 731:
case 3528:
case 3271:
case 2325:
case 1498:
case 2296:
case 2638:
case 428:
case 1201:
case 3693:
case 1641:
case 3150:
case 2933:
case 3740:
case 1654:
case 183:
case 2671:
case 2187:
case 964:
case 3696:
case 3609:
case 1005:
case 1328:
case 651:
case 2495:
case 46:
case 3822:
case 1635:
case 3039:
case 2870:
case 304:
case 2543:
case 2026:
case 3159:
case 987:
case 2841:
case 2421:
case 1104:
case 3771:
case 2640:
case 3174:
case 478:
case 2709:
case 1849:
case 2200:
case 2879:
case 3503:
case 2185:
case 1306:
case 2414:
case 3030:
case 1670:
case 3801:
case 547:
case 1007:
case 4089:
case 2835:
case 970:
case 149:
case 2854:
case 2023:
case 3964:
case 3077:
case 263:
case 590:
case 1637:
case 3240:
case 3738:
case 3749:
case 3376:
case 3046:
case 1493:
case 1941:
case 202:
case 3993:
case 1027:
case 835:
case 972:
case 2119:
case 279:
case 3620:
case 2764:
case 592:
case 4015:
case 130:
case 2006:
case 2099:
case 1642:
case 2307:
case 3526:
case 574:
case 4068:
case 1323:
case 3909:
case 1496:
case 64:
case 994:
case 3996:
case 1547:
case 2729:
case 3272:
case 911:
case 1954:
case 2575:
case 2264:
case 1872:
case 3345:
case 922:
case 406:
case 2940:
case 2539:
case 2548:
case 1833:
case 1160:
case 706:
case 1795:
case 1183:
case 2720:
case 560:
case 1400:
case 3900:
case 3508:
case 524:
case 3664:
case 3584:
case 1221:
case 1578:
case 2090:
case 503:
case 3895:
case 1702:
case 3082:
case 1474:
case 2357:
case 135:
case 1459:
case 2811:
case 1904:
case 1660:
case 2513:
case 3404:
case 3959:
case 301:
case 2869:
case 629:
case 3719:
case 319:
case 830:
case 443:
case 3164:
case 3761:
case 1566:
case 355:
case 2985:
case 693:
case 3380:
case 2053:
case 2444:
case 2824:
case 3950:
case 679:
case 2581:
case 2355:
case 1669:
case 3065:
case 1450:
case 2883:
case 3120:
case 4032:
case 1589:
case 602:
case 2172:
case 1752:
case 93:
case 1810:
case 3198:
case 2661:
case 3412:
case 654:
case 1912:
case 3852:
case 2136:
case 2962:
case 4076:
case 3219:
case 3710:
case 2315:
case 2674:
case 3910:
case 604:
case 2460:
case 623:
case 2285:
case 1850:
case 2483:
case 3058:
case 3452:
case 81:
case 3274:
case 2486:
case 1288:
case 4007:
case 1318:
case 1204:
case 965:
case 699:
case 3259:
case 1122:
case 2411:
case 2193:
case 1212:
case 910:
case 1066:
case 1382:
case 3888:
case 1874:
case 2851:
case 3961:
case 1419:
case 1461:
case 305:
case 1367:
case 2394:
case 16:
case 783:
case 718:
case 2844:
case 2556:
case 3171:
case 3774:
case 1788:
case 2196:
case 3662:
case 1433:
case 2693:
case 42:
case 1902:
case 1235:
case 1279:
case 3402:
case 2150:
case 1770:
case 273:
case 3084:
case 1078:
case 2590:
case 553:
case 3209:
case 3325:
case 1045:
case 4057:
case 3296:
case 1254:
case 2271:
case 1995:
case 11:
case 3870:
case 1601:
case 1525:
case 456:
case 3495:
case 2822:
case 768:
case 2039:
case 1436:
case 468:
case 2696:
case 2740:
case 3671:
case 3187:
case 1800:
case 1031:
case 2609:
case 3796:
case 2771:
case 1237:
case 1151:
case 1754:
case 2174:
case 831:
case 3200:
case 223:
case 3709:
case 3026:
case 3543:
case 1893:
case 3421:
case 1047:
case 4055:
case 2964:
case 1997:
case 363:
case 2600:
case 2077:
case 1896:
case 68:
case 2749:
case 992:
case 2738:
case 1809:
case 107:
case 3391:
case 2240:
case 2503:
case 3185:
case 3879:
case 3414:
case 915:
case 2801:
case 3003:
case 2620:
case 3530:
case 2698:
case 1507:
case 1449:
case 1829:
case 3764:
case 3161:
case 134:
case 3633:
case 302:
case 2046:
case 1242:
case 806:
case 947:
case 3636:
case 3298:
case 2909:
case 189:
case 2043:
case 237:
case 3220:
case 1864:
case 498:
case 2996:
case 1076:
case 798:
case 2814:
case 1901:
case 3401:
case 587:
case 3307:
case 648:
case 1695:
case 3099:
case 1505:
case 2802:
case 735:
case 1742:
case 2736:
case 435:
case 1820:
case 601:
case 3940:
case 329:
case 3548:
case 520:
case 3539:
case 3392:
case 1898:
case 1339:
case 2895:
case 3028:
case 2470:
case 1592:
case 3720:
case 269:
case 1152:
case 3305:
case 3798:
case 393:
case 2437:
case 2664:
case 3811:
case 3869:
case 2959:
case 201:
case 1724:
case 1121:
case 3451:
case 106:
case 2488:
case 3610:
case 3056:
case 2067:
case 2974:
case 889:
case 995:
case 669:
case 1557:
case 1283:
case 1260:
case 3824:
case 575:
case 1769:
case 912:
case 219:
case 2164:
case 3516:
case 2120:
case 1015:
case 3619:
case 3661:
case 3334:
case 1786:
case 650:
case 2558:
case 3133:
case 3860:
case 3883:
case 2065:
case 1102:
case 1487:
case 2261:
case 1555:
case 4091:
case 3136:
case 2852:
case 3886:
case 1462:
case 2710:
case 1068:
case 3987:
case 2219:
case 248:
case 2412:
case 1760:
case 430:
case 637:
case 1211:
case 1534:
case 1195:
case 19:
case 1783:
case 2330:
case 539:
case 3935:
case 3202:
case 1479:
case 819:
case 3642:
case 44:
case 1435:
case 3979:
case 2377:
case 1454:
case 289:
case 74:
case 944:
case 982:
case 69:
case 3547:
case 3409:
case 2864:
case 137:
case 3954:
case 2242:
case 1523:
case 3714:
case 3295:
case 3326:
case 234:
case 3493:
case 1821:
case 1347:
case 2073:
case 3169:
case 2602:
case 584:
case 542:
case 801:
case 1236:
case 1698:
case 2829:
case 2449:
case 3937:
case 243:
case 1437:
case 1900:
case 1508:
case 2697:
case 3186:
case 2375:
case 1584:
case 3578:
case 3970:
case 1733:
case 1470:
case 567:
case 2592:
case 2339:
case 848:
case 2440:
case 2820:
case 3297:
case 4056:
case 1378:
case 2898:
case 3025:
case 3160:
case 933:
case 1802:
case 2742:
case 3214:
case 3795:
case 2621:
case 2505:
case 1719:
case 493:
case 2197:
case 2944:
case 2283:
case 3566:
case 4028:
case 643:
case 2114:
case 2557:
case 2485:
case 155:
case 517:
case 1082:
case 1488:
case 3474:
case 206:
case 3819:
case 2951:
case 3861:
case 1067:
case 1974:
case 335:
case 1129:
case 976:
case 2017:
case 850:
case 596:
case 2316:
case 1404:
case 1959:
case 101:
case 1389:
case 689:
case 2269:
case 2760:
case 1412:
case 754:
case 1018:
case 4006:
case 3624:
case 3912:
case 2211:
case 3142:
case 2534:
case 2195:
case 3358:
case 398:
case 50:
case 1261:
case 2487:
case 148:
case 1219:
case 1710:
case 2068:
case 779:
case 3669:
case 402:
case 2102:
case 1065:
case 2015:
case 3589:
case 3752:
case 3810:
case 2786:
case 1198:
case 3515:
case 2122:
case 400:
case 3170:
case 1081:
case 1100:
case 3986:
case 4023:
case 1368:
case 463:
case 3137:
case 873:
case 3055:
case 37:
case 3244:
case 1460:
case 2712:
case 1483:
case 4026:
case 2850:
case 3960:
case 3568:
case 2365:
case 3688:
case 1674:
case 1315:
case 1787:
case 3034:
case 2410:
case 1762:
case 558:
case 1196:
case 2788:
case 3751:
case 3154:
case 368:
case 941:
case 1013:
case 3885:
case 356:
case 3924:
case 3612:
case 852:
case 2704:
case 2101:
case 2080:
case 1556:
case 985:
case 3594:
case 3135:
case 136:
case 2874:
case 228:
case 2066:
case 2382:
case 2461:
case 2367:
case 4008:
case 1411:
case 3969:
case 383:
case 2436:
case 451:
case 3005:
case 318:
case 2031:
case 21:
case 3390:
case 927:
case 3679:
case 3942:
case 2995:
case 3328:
case 3635:
case 1039:
case 1590:
case 405:
case 2472:
case 3840:
case 1920:
case 2045:
case 628:
case 3201:
case 2433:
case 3641:
case 1150:
case 705:
case 3722:
case 713:
case 1503:
case 597:
case 788:
case 3399:
case 488:
case 2896:
case 349:
case 3871:
case 1077:
case 1600:
case 2343:
case 4058:
case 3637:
case 1240:
case 3464:
case 413:
case 2270:
case 332:
case 836:
case 3222:
case 1159:
case 5:
case 2779:
case 2735:
case 678:
case 2047:
case 1771:
case 1506:
case 3188:
case 1929:
case 3849:
case 1332:
case 3838:
case 1599:
case 123:
case 1636:
case 3377:
case 2323:
case 3471:
case 1971:
case 3864:
case 3076:
case 2409:
case 1006:
case 9:
case 2642:
case 1099:
case 748:
case 2979:
case 4018:
case 1003:
case 1938:
case 940:
case 3449:
case 3438:
case 1161:
case 334:
case 102:
case 2941:
case 4065:
case 2493:
case 2295:
case 2714:
case 2111:
case 2169:
case 257:
case 2221:
case 719:
case 3375:
case 3922:
case 1028:
case 2545:
case 3592:
case 3152:
case 1229:
case 1305:
case 419:
case 1798:
case 2186:
case 755:
case 527:
case 2160:
case 401:
case 3621:
case 2183:
case 635:
case 2214:
case 3742:
case 2872:
case 1575:
case 2297:
case 3820:
case 1264:
case 1940:
case 1548:
case 2025:
case 3114:
case 769:
case 2566:
case 3944:
case 854:
case 1985:
case 3652:
case 3197:
case 981:
case 469:
case 2686:
case 3313:
case 1811:
case 3017:
case 2459:
case 1869:
case 1513:
case 3724:
case 3121:
case 1357:
case 2819:
case 1451:
case 3286:
case 802:
case 3487:
case 3555:
case 298:
case 3381:
case 1962:
case 630:
case 2358:
case 437:
case 958:
case 3760:
case 14:
case 2142:
case 737:
case 3783:
case 2624:
case 508:
case 2752:
case 2589:
case 657:
case 450:
case 2810:
case 3786:
case 2611:
case 750:
case 2450:
case 829:
case 3102:
case 1058:
case 499:
case 2986:
case 2887:
case 1274:
case 188:
case 452:
case 2137:
case 3952:
case 2862:
case 1685:
case 3089:
case 1812:
case 1750:
case 3644:
case 526:
case 2170:
case 1259:
case 4030:
case 1910:
case 704:
case 423:
case 1518:
case 378:
case 2034:
case 3365:
case 404:
case 2960:
case 2604:
case 2612:
case 36:
case 2924:
case 4048:
case 2885:
case 2135:
case 3704:
case 2353:
case 3080:
case 1171:
case 2517:
case 2751:
case 800:
case 268:
case 2969:
case 22:
case 2744:
case 2141:
case 1804:
case 3066:
case 3461:
case 105:
case 2356:
case 473:
case 2942:
case 3241:
case 533:
case 2390:
case 3601:
case 3525:
case 2654:
case 656:
case 3800:
case 1837:
case 3031:
case 218:
case 2005:
case 4016:
case 736:
case 3902:
case 967:
case 2641:
case 1700:
case 2840:
case 3472:
case 1325:
case 2092:
case 3045:
case 1296:
case 3997:
case 1023:
case 249:
case 2871:
case 78:
case 3896:
case 984:
case 942:
case 4081:
case 3809:
case 2573:
case 307:
case 1497:
case 2464:
case 1185:
case 2306:
case 3914:
case 851:
case 2532:
case 544:
case 582:
case 2303:
case 2838:
case 1026:
case 1543:
case 3346:
case 939:
case 3779:
case 232:
case 3893:
case 1841:
case 3047:
case 2576:
case 1327:
case 3735:
case 805:
case 162:
case 1033:
case 786:
case 3408:
case 3002:
case 2627:
case 3291:
case 3115:
case 2340:
case 1478:
case 3945:
case 3978:
case 486:
case 3570:
case 1243:
case 1606:
case 2475:
case 2273:
case 583:
case 3227:
case 1370:
case 518:
case 2439:
case 2448:
case 1246:
case 2042:
case 838:
case 2232:
case 821:
case 2691:
case 1337:
case 3168:
case 3725:
case 2803:
case 532:
case 3579:
case 316:
case 2776:
case 2501:
case 2349:
case 2338:
case 3117:
case 3426:
case 3554:
case 65:
case 3947:
case 3393:
case 1509:
case 1827:
case 1447:
case 1926:
case 1593:
case 3541:
case 1891:
case 1923:
case 2430:
case 549:
case 2806:
case 1628:
case 2899:
case 626:
case 2773:
case 1153:
case 682:
case 25:
case 3512:
case 1010:
case 1656:
case 794:
case 1718:
case 3617:
case 494:
case 3865:
case 3350:
case 4064:
case 1267:
case 2481:
case 138:
case 2362:
case 121:
case 709:
case 1312:
case 3818:
case 1653:
case 1128:
case 3989:
case 3359:
case 2127:
case 2416:
case 3374:
case 1103:
case 2957:
case 345:
case 2544:
case 2856:
case 3588:
case 3980:
case 2717:
case 2551:
case 906:
case 1265:
case 1574:
case 2385:
case 847:
case 2853:
case 1480:
case 3963:
case 568:
case 2024:
case 1559:
case 276:
case 556:
case 722:
case 3176:
case 890:
case 2794:
case 1767:
case 2215:
case 2763:
case 627:
case 1417:
case 2655:
case 464:
case 815:
case 241:
case 3147:
case 2319:
case 2088:
case 1956:
case 720:
case 3456:
case 2361:
case 2634:
case 1494:
case 2467:
case 1085:
case 3689:
case 110:
case 2107:
case 3044:
case 3453:
case 1324:
case 1123:
case 3757:
case 3569:
case 931:
case 3178:
case 770:
case 3666:
case 1213:
case 2657:
case 1781:
case 1184:
case 3915:
case 165:
case 2310:
case 3145:
case 2280:
case 1360:
case 2263:
case 2465:
case 4093:
case 470:
case 1087:
case 860:
case 487:
case 2858:
case 1468:
case 1062:
case 2105:
case 3583:
case 2266:
case 2012:
case 1216:
case 30:
case 3755:
case 978:
case 787:
case 1684:
case 2157:
case 3403:
case 2692:
case 3645:
case 3329:
case 3973:
case 1730:
case 1248:
case 846:
case 159:
case 2446:
case 4050:
case 2826:
case 1608:
case 2597:
case 2041:
case 2245:
case 3976:
case 810:
case 1071:
case 339:
case 2054:
case 2443:
case 2823:
case 530:
case 3631:
case 3364:
case 425:
case 2521:
case 2278:
case 725:
case 2079:
case 3830:
case 3163:
case 2747:
case 3180:
case 2035:
case 3499:
case 2155:
case 1230:
case 4059:
case 3647:
case 2808:
case 1739:
case 865:
case 414:
case 91:
case 2925:
case 2372:
case 2884:
case 1040:
case 3320:
case 641:
case 2134:
case 2595:
case 3398:
case 4074:
case 1520:
case 3839:
case 3428:
case 1342:
case 3022:
case 124:
case 1990:
case 1598:
case 2070:
case 103:
case 1623:
case 1805:
case 3792:
case 2745:
case 712:
case 3992:
case 1020:
case 681:
case 3522:
case 2978:
case 495:
case 2632:
case 2570:
case 795:
case 1299:
case 1646:
case 2673:
case 3627:
case 1206:
case 1728:
case 412:
case 1165:
case 2537:
case 2002:
case 51:
case 1643:
case 83:
case 3232:
case 3905:
case 2676:
case 1405:
case 2725:
case 3691:
case 3890:
case 1118:
case 1540:
case 3475:
case 1948:
case 1939:
case 3448:
case 1975:
case 3042:
case 122:
case 382:
case 344:
case 886:
case 2117:
case 2554:
case 666:
case 1799:
case 1873:
case 2021:
case 1290:
case 3803:
case 2:
case 3501:
case 1832:
case 2194:
case 2535:
case 1167:
case 2791:
case 2014:
case 1549:
case 1301:
case 2727:
case 1930:
case 507:
case 3773:
case 738:
case 3899:
case 2225:
case 721:
case 109:
case 1064:
case 1977:
case 2309:
case 1587:
case 1253:
case 3060:
case 6:
case 1562:
case 2865:
case 1682:
case 1815:
case 266:
case 853:
case 3934:
case 3768:
case 2818:
case 490:
case 3715:
case 3294:
case 1256:
case 2052:
case 447:
case 640:
case 1868:
case 3362:
case 1981:
case 186:
case 1457:
case 2615:
case 1351:
case 2882:
case 2966:
case 531:
case 894:
case 811:
case 245:
case 3957:
case 1916:
case 2359:
case 462:
case 281:
case 4033:
case 872:
case 376:
case 3215:
case 4036:
case 1756:
case 2176:
case 3385:
case 2963:
case 3024:
case 870:
case 3482:
case 2051:
case 956:
case 1074:
case 3319:
case 3361:
case 3467:
case 385:
case 4040:
case 1982:
case 2524:
case 1258:
case 3655:
case 2816:
case 3289:
case 341:
case 2917:
case 1681:
case 2757:
case 2813:
case 2569:
case 703:
case 2689:
case 1519:
case 667:
case 460:
case 887:
case 1561:
case 2255:
case 2453:
case 2044:
case 1880:
case 3107:
case 492:
case 1965:
case 3465:
case 715:
case 3263:
case 459:
case 2586:
case 4049:
case 4038:
case 759:
case 2178:
case 415:
case 1758:
case 684:
case 820:
case 2145:
case 792:
case 3192:
case 1889:
case 2663:
case 20:
case 1918:
case 1139:
case 2560:
case 97:
case 774:
case 1352:
case 125:
case 308:
case 2131:
case 2734:
case 4071:
case 1613:
case 3266:
case 3105:
case 2583:
case 3826:
case 3927:
case 2973:
case 1321:
case 1847:
case 1946:
case 2932:
case 2205:
case 814:
case 465:
case 3231:
case 534:
case 1726:
case 2406:
case 3079:
case 875:
case 3747:
case 2180:
case 239:
case 3991:
case 4062:
case 1096:
case 60:
case 2292:
case 932:
case 1284:
case 187:
case 1397:
case 327:
case 3925:
case 1425:
case 1845:
case 2398:
case 446:
case 2705:
case 3134:
case 3595:
case 2542:
case 3333:
case 1536:
case 3155:
case 3808:
case 3778:
case 1533:
case 1677:
case 1784:
case 1831:
case 3502:
case 3745:
case 825:
case 2189:
case 2875:
case 1572:
case 3247:
case 2490:
case 4085:
case 2428:
case 2848:
case 1226:
case 3085:
case 1689:
case 4070:
case 2863:
case 2130:
case 310:
case 3716:
case 905:
case 2561:
case 1511:
case 1757:
case 2681:
case 275:
case 555:
case 1813:
case 3126:
case 3311:
case 2059:
case 727:
case 3369:
case 1147:
case 1994:
case 3857:
case 2074:
case 664:
case 1456:
case 501:
case 620:
case 3281:
case 196:
case 780:
case 2352:
case 3468:
case 1583:
case 3062:
case 4054:
case 1257:
case 1734:
case 4035:
case 1663:
case 1755:
case 2175:
case 687:
case 867:
case 2148:
case 548:
case 2918:
case 4079:
case 2758:
case 670:
case 3415:
case 3781:
case 2965:
case 3855:
case 3383:
case 1586:
case 2616:
case 777:
case 988:
case 1292:
case 3071:
case 1877:
case 139:
case 2943:
case 1364:
case 1631:
case 2397:
case 3476:
case 2009:
case 2113:
case 2208:
case 3999:
case 1406:
case 2675:
case 1830:
case 1163:
case 537:
case 2639:
case 4012:
case 1499:
case 3684:
case 1403:
case 900:
case 1932:
case 1678:
case 2093:
case 184:
case 270:
case 3239:
case 963:
case 3248:
case 359:
case 3564:
case 3275:
case 1707:
case 3473:
case 2116:
case 2847:
case 392:
case 2572:
case 360:
case 1490:
case 569:
case 1875:
case 1189:
case 3342:
case 2226:
case 675:
case 324:
case 2677:
case 3158:
case 2533:
case 1792:
case 167:
case 2831:
case 3775:
case 1207:
case 2536:
case 220:
case 1647:
case 3739:
case 3748:
case 691:
case 3040:
case 741:
case 3277:
case 2845:
case 2425:
case 3892:
case 776:
case 2948:
case 3606:
case 2118:
case 1227:
case 2975:
case 2322:
case 1095:
case 1931:
case 1300:
case 3431:
case 2203:
case 1676:
case 476:
case 1168:
case 1725:
case 2790:
case 362:
case 3033:
case 253:
case 866:
case 3500:
case 2299:
case 2206:
case 4011:
case 2020:
case 3603:
case 3825:
case 2492:
case 1978:
case 1570:
case 1632:
case 3984:
case 3243:
case 197:
case 3354:
case 2703:
case 1423:
case 209:
case 426:
case 1225:
case 2876:
case 1309:
case 3923:
case 2064:
case 1097:
case 140:
case 3379:
case 3628:
case 1727:
case 2301:
case 2549:
case 1:
case 1194:
case 881:
case 661:
case 1791:
case 45:
case 2029:
case 2832:
case 3156:
case 1117:
case 2571:
case 2228:
case 1554:
case 1947:
case 3509:
case 2873:
case 3827:
case 294:
case 1021:
case 3447:
case 672:
case 58:
case 3267:
case 3282:
case 609:
case 321:
case 23:
case 1818:
case 2815:
case 744:
case 94:
case 2682:
case 1512:
case 3010:
case 694:
case 611:
case 2434:
case 1694:
case 2253:
case 3718:
case 2455:
case 158:
case 1350:
case 2562:
case 1588:
case 3265:
case 733:
case 371:
case 1963:
case 2143:
case 3559:
case 2913:
case 1504:
case 1176:
case 622:
case 3767:
case 2146:
case 816:
case 2817:
case 8:
case 3218:
case 1173:
case 3466:
case 1615:
case 2457:
case 1374:
case 3103:
case 395:
case 2351:
case 145:
case 1867:
case 2894:
case 1966:
case 1132:
case 3177:
case 3681:
case 1766:
case 660:
case 2658:
case 624:
case 375:
case 2953:
case 210:
case 4022:
case 3519:
case 603:
case 3880:
case 246:
case 1319:
case 1361:
case 1634:
case 2713:
case 2126:
case 3059:
case 1655:
case 141:
case 1289:
case 877:
case 2369:
case 739:
case 4001:
case 3148:
case 3139:
case 3352:
case 325:
case 2087:
case 108:
case 2386:
case 439:
case 2468:
case 1552:
case 827:
case 442:
case 484:
case 1263:
case 2184:
case 784:
case 98:
case 692:
case 1310:
case 265:
case 274:
case 2999:
case 554:
case 3208:
case 3726:
case 3675:
case 3648:
case 923:
case 40:
case 2529:
case 1747:
case 2071:
case 1443:
case 1054:
case 3113:
case 1605:
case 1278:
case 3491:
case 3943:
case 3284:
case 387:
case 3397:
case 2248:
case 259:
case 579:
case 952:
case 370:
case 2730:
case 3116:
case 3321:
case 2473:
case 3427:
case 292:
case 1597:
case 2608:
case 885:
case 2684:
case 502:
case 3723:
case 1157:
case 215:
case 177:
case 2432:
case 1778:
case 3677:
case 3181:
case 3000:
case 3831:
case 1745:
case 973:
case 260:
case 3572:
case 1247:
case 2990:
case 224:
case 593:
case 2342:
case 808:
case 3395:
case 3708:
case 3226:
case 1884:
case 127:
case 1372:
case 3878:
case 496:
case 4051:
case 3845:
case 1134:
case 364:
case 2775:
case 1155:
case 646:
case 2626:
case 2739:
case 320:
case 133:
case 3643:
case 3203:
case 2431:
case 1890:
case 3540:
case 2606:
case 1475:
case 3939:
case 3975:
case 3322:
case 1448:
case 1828:
case 1439:
case 2699:
case 1042:
case 2370:
case 2072:
case 2478:
case 445:
case 1340:
case 1522:
case 2243:
case 2984:
case 2445:
case 3098:
case 2500:
case 695:
case 3646:
case 969:
case 3790:
case 85:
case 2379:
case 1430:
case 1907:
case 3549:
case 3538:
case 2153:
case 3930:
case 290:
case 2628:
case 638:
case 2335:
case 2593:
case 1477:
case 2354:
case 309:
case 621:
case 4052:
case 2891:
case 2923:
case 3064:
case 3977:
case 458:
case 144:
case 2596:
case 3228:
case 3706:
case 311:
case 2827:
case 2743:
case 466:
case 1338:
case 2156:
case 3832:
case 1349:
case 1501:
case 3167:
case 2312:
case 2190:
case 2765:
case 1217:
case 2653:
case 4014:
case 588:
case 1481:
case 2267:
case 1294:
case 1715:
case 740:
case 1362:
case 2550:
case 3587:
case 3253:
case 7:
case 2718:
case 1083:
case 948:
case 15:
case 3815:
case 4:
case 3667:
case 2656:
case 2010:
case 416:
case 1768:
case 3143:
case 2767:
case 1794:
case 1191:
case 1551:
case 4095:
case 2463:
case 2480:
case 1853:
case 2199:
case 2103:
case 2019:
case 3585:
case 882:
case 844:
case 662:
case 1856:
case 955:
case 3894:
case 3916:
case 4002:
case 212:
case 1011:
case 1069:
case 3665:
case 2218:
case 1416:
case 2304:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1754276401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,];
var gg_b = "1754280002/";

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
