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
case 1645:
case 807:
case 1494:
case 609:
case 1749:
case 2422:
case 1808:
case 1034:
case 861:
case 3963:
case 572:
case 1489:
case 3030:
case 2277:
case 737:
case 1269:
case 3725:
case 136:
case 262:
case 3893:
case 3866:
case 1752:
case 3490:
case 1175:
case 566:
case 925:
case 334:
case 3249:
case 2054:
case 100:
case 3095:
case 224:
case 2349:
case 1870:
case 2352:
case 152:
case 672:
case 3131:
case 3769:
case 1225:
case 3665:
case 276:
case 1307:
case 2924:
case 3047:
case 704:
case 2597:
case 2081:
case 834:
case 3336:
case 2686:
case 183:
case 610:
case 3756:
case 2058:
case 1862:
case 1315:
case 36:
case 2180:
case 3412:
case 711:
case 3401:
case 3117:
case 1498:
case 2715:
case 415:
case 1038:
case 307:
case 941:
case 2079:
case 71:
case 1804:
case 3696:
case 3348:
case 3663:
case 2248:
case 1834:
case 1116:
case 3135:
case 1221:
case 689:
case 3661:
case 2541:
case 2737:
case 89:
case 2510:
case 2768:
case 696:
case 3929:
case 1173:
case 3257:
case 725:
case 3587:
case 1528:
case 2427:
case 2122:
case 3721:
case 3074:
case 3306:
case 3614:
case 1046:
case 3723:
case 596:
case 3190:
case 1610:
case 3965:
case 589:
case 3372:
case 1368:
case 2740:
case 1692:
case 2702:
case 3101:
case 91:
case 2881:
case 741:
case 3112:
case 2711:
case 540:
case 3847:
case 2624:
case 2480:
case 1364:
case 2883:
case 2713:
case 2776:
case 911:
case 2:
case 3405:
case 3618:
case 3042:
case 432:
case 1524:
case 1340:
case 1311:
case 3520:
case 3344:
case 1867:
case 904:
case 391:
case 2085:
case 2974:
case 3534:
case 379:
case 2695:
case 1887:
case 1530:
case 425:
case 72:
case 2460:
case 1384:
case 1595:
case 458:
case 2896:
case 2861:
case 1399:
case 520:
case 3217:
case 2993:
case 3380:
case 2550:
case 2029:
case 2900:
case 1731:
case 20:
case 2942:
case 4048:
case 2227:
case 2959:
case 2406:
case 3681:
case 745:
case 2751:
case 3152:
case 2333:
case 44:
case 1939:
case 484:
case 3567:
case 214:
case 698:
case 2818:
case 3086:
case 1421:
case 4036:
case 1456:
case 2674:
case 921:
case 1909:
case 2160:
case 2995:
case 3028:
case 3203:
case 1087:
case 2726:
case 1591:
case 2303:
case 3201:
case 2865:
case 2301:
case 2061:
case 2436:
case 3546:
case 2063:
case 2096:
case 382:
case 1712:
case 2691:
case 2930:
case 1701:
case 2829:
case 2693:
case 3157:
case 3452:
case 1790:
case 1271:
case 523:
case 882:
case 956:
case 1425:
case 281:
case 1121:
case 3235:
case 945:
case 3789:
case 3562:
case 2539:
case 244:
case 365:
case 3794:
case 3979:
case 1123:
case 297:
case 1578:
case 2659:
case 353:
case 2477:
case 3983:
case 1500:
case 932:
case 1355:
case 3716:
case 2106:
case 138:
case 3958:
case 3322:
case 1020:
case 1289:
case 2678:
case 623:
case 1559:
case 1263:
case 3884:
case 4067:
case 3714:
case 1296:
case 4038:
case 3899:
case 3621:
case 1743:
case 1741:
case 692:
case 1537:
case 1880:
case 1568:
case 3548:
case 1479:
case 483:
case 1949:
case 3139:
case 3761:
case 3763:
case 2341:
case 3210:
case 738:
case 2287:
case 2637:
case 2557:
case 2668:
case 2392:
case 3292:
case 2170:
case 1540:
case 2664:
case 1324:
case 1502:
case 3544:
case 3320:
case 1576:
case 6:
case 3055:
case 2094:
case 2724:
case 2071:
case 2613:
case 3851:
case 5:
case 1792:
case 3450:
case 1564:
case 605:
case 4034:
case 3409:
case 1827:
case 2016:
case 1454:
case 240:
case 3888:
case 3956:
case 3921:
case 2462:
case 3439:
case 3084:
case 576:
case 3923:
case 2167:
case 2549:
case 243:
case 3669:
case 662:
case 1957:
case 2552:
case 3765:
case 266:
case 524:
case 2898:
case 562:
case 1745:
case 145:
case 403:
case 1158:
case 3577:
case 1183:
case 757:
case 2968:
case 156:
case 1652:
case 1265:
case 2964:
case 3150:
case 4070:
case 2075:
case 1386:
case 2894:
case 3855:
case 2889:
case 480:
case 2408:
case 371:
case 2940:
case 2902:
case 2911:
case 2871:
case 3297:
case 2913:
case 1319:
case 2446:
case 685:
case 4008:
case 1027:
case 2134:
case 3088:
case 141:
case 919:
case 2120:
case 875:
case 184:
case 3068:
case 14:
case 703:
case 2270:
case 1072:
case 3037:
case 2793:
case 3370:
case 1603:
case 2825:
case 3192:
case 2791:
case 2021:
case 399:
case 1905:
case 2208:
case 2023:
case 3308:
case 2984:
case 1048:
case 2869:
case 2503:
case 1917:
case 1393:
case 2953:
case 3040:
case 3002:
case 1300:
case 2951:
case 3013:
case 3671:
case 952:
case 2590:
case 1739:
case 1161:
case 900:
case 2856:
case 2778:
case 1285:
case 678:
case 2988:
case 158:
case 125:
case 1196:
case 1359:
case 1429:
case 780:
case 2187:
case 1933:
case 3064:
case 3807:
case 2482:
case 597:
case 2700:
case 1690:
case 2742:
case 3445:
case 2655:
case 1836:
case 58:
case 3975:
case 2535:
case 2759:
case 3362:
case 3815:
case 268:
case 3239:
case 2262:
case 1378:
case 3689:
case 333:
case 1254:
case 4020:
case 1584:
case 3209:
case 3998:
case 2505:
case 2025:
case 2517:
case 1901:
case 2730:
case 783:
case 3580:
case 3837:
case 1872:
case 1848:
case 949:
case 1709:
case 903:
case 369:
case 3754:
case 1418:
case 3492:
case 1750:
case 2926:
case 1617:
case 3197:
case 1330:
case 2651:
case 3441:
case 806:
case 514:
case 3971:
case 2747:
case 60:
case 2653:
case 2487:
case 3802:
case 3973:
case 2688:
case 3367:
case 1844:
case 137:
case 3758:
case 2056:
case 1935:
case 3145:
case 1165:
case 1281:
case 567:
case 1990:
case 501:
case 700:
case 1553:
case 3864:
case 1283:
case 1588:
case 298:
case 3015:
case 1258:
case 1463:
case 752:
case 3989:
case 3994:
case 1714:
case 3263:
case 2648:
case 3458:
case 2159:
case 315:
case 1623:
case 2363:
case 407:
case 3296:
case 2805:
case 3261:
case 1506:
case 461:
case 1621:
case 3185:
case 3743:
case 1026:
case 765:
case 2977:
case 46:
case 3568:
case 2447:
case 2178:
case 1548:
case 1139:
case 247:
case 1763:
case 1210:
case 2012:
case 2672:
case 1243:
case 1387:
case 902:
case 2090:
case 3513:
case 3502:
case 2833:
case 3540:
case 2224:
case 3022:
case 2174:
case 108:
case 1544:
case 2936:
case 950:
case 2193:
case 3792:
case 4030:
case 1888:
case 1718:
case 2495:
case 3827:
case 2035:
case 1956:
case 815:
case 2005:
case 674:
case 1099:
case 1245:
case 1084:
case 154:
case 821:
case 487:
case 222:
case 2677:
case 795:
case 3080:
case 3957:
case 3229:
case 626:
case 2525:
case 1826:
case 345:
case 3745:
case 3158:
case 2459:
case 3649:
case 4078:
case 2147:
case 2972:
case 2803:
case 1577:
case 3652:
case 2442:
case 356:
case 3265:
case 548:
case 2365:
case 3181:
case 3797:
case 2491:
case 2031:
case 856:
case 845:
case 2286:
case 651:
case 3154:
case 4074:
case 1109:
case 2130:
case 3507:
case 1053:
case 750:
case 551:
case 32:
case 4093:
case 1051:
case 1536:
case 55:
case 321:
case 3319:
case 2835:
case 1656:
case 2474:
case 702:
case 3515:
case 1088:
case 2419:
case 3006:
case 2708:
case 1346:
case 3374:
case 384:
case 961:
case 2274:
case 1068:
case 3603:
case 96:
case 1497:
case 3601:
case 1192:
case 858:
case 4019:
case 825:
case 199:
case 2598:
case 3905:
case 3048:
case 1308:
case 787:
case 2980:
case 2057:
case 3877:
case 1832:
case 3391:
case 3917:
case 3366:
case 3393:
case 2770:
case 2242:
case 1002:
case 1040:
case 3465:
case 563:
case 3555:
case 3635:
case 1076:
case 546:
case 2927:
case 2259:
case 3044:
case 3359:
case 3196:
case 2128:
case 3429:
case 242:
case 2573:
case 1143:
case 1064:
case 3690:
case 2571:
case 1694:
case 1445:
case 1975:
case 3836:
case 3114:
case 3060:
case 628:
case 1815:
case 2278:
case 2622:
case 1362:
case 133:
case 660:
case 304:
case 130:
case 3395:
case 2186:
case 987:
case 3806:
case 3901:
case 1580:
case 4024:
case 1868:
case 1250:
case 539:
case 1837:
case 76:
case 465:
case 3709:
case 311:
case 3418:
case 2119:
case 270:
case 169:
case 3617:
case 1492:
case 761:
case 1197:
case 106:
case 2230:
case 31:
case 3077:
case 1971:
case 1410:
case 81:
case 1443:
case 1781:
case 1973:
case 3129:
case 482:
case 3844:
case 2627:
case 1367:
case 227:
case 337:
case 3414:
case 3165:
case 3990:
case 3631:
case 2383:
case 734:
case 3283:
case 1007:
case 4028:
case 1527:
case 3860:
case 3588:
case 1989:
case 3463:
case 516:
case 1779:
case 1994:
case 3461:
case 3036:
case 274:
case 3494:
case 2455:
case 3749:
case 3808:
case 617:
case 226:
case 2369:
case 3332:
case 2232:
case 1893:
case 1490:
case 2565:
case 3752:
case 1866:
case 1914:
case 3846:
case 4055:
case 1249:
case 134:
case 1133:
case 3943:
case 1252:
case 3870:
case 2529:
case 2050:
case 3225:
case 517:
case 3941:
case 2777:
case 1665:
case 3471:
case 3307:
case 25:
case 531:
case 1336:
case 3519:
case 800:
case 1918:
case 1878:
case 3315:
case 1756:
case 2920:
case 16:
case 1800:
case 1403:
case 63:
case 1117:
case 836:
case 769:
case 2199:
case 2736:
case 107:
case 3038:
case 1859:
case 4088:
case 1663:
case 2323:
case 2514:
case 1135:
case 1661:
case 594:
case 2772:
case 1093:
case 4051:
case 1431:
case 1066:
case 1830:
case 1257:
case 3528:
case 2982:
case 1587:
case 1895:
case 380:
case 488:
case 3189:
case 471:
case 2488:
case 1074:
case 849:
case 218:
case 1721:
case 2563:
case 3046:
case 1614:
case 2748:
case 1306:
case 2561:
case 1723:
case 1965:
case 2453:
case 3337:
case 2268:
case 3070:
case 2237:
case 3368:
case 2687:
case 1101:
case 1417:
case 906:
case 3364:
case 1847:
case 2264:
case 303:
case 2039:
case 880:
case 1618:
case 2744:
case 2213:
case 3997:
case 2211:
case 3340:
case 3524:
case 1000:
case 2202:
case 187:
case 786:
case 3838:
case 454:
case 4084:
case 1520:
case 3376:
case 2760:
case 2276:
case 3609:
case 659:
case 77:
case 475:
case 2946:
case 2780:
case 2841:
case 2413:
case 2402:
case 3887:
case 788:
case 2107:
case 3530:
case 2908:
case 150:
case 3595:
case 3384:
case 2554:
case 3156:
case 329:
case 239:
case 908:
case 4013:
case 4002:
case 2464:
case 559:
case 3351:
case 2097:
case 2251:
case 754:
case 216:
case 2253:
case 2468:
case 3731:
case 2132:
case 3169:
case 3547:
case 2667:
case 829:
case 1327:
case 1679:
case 2558:
case 195:
case 3388:
case 627:
case 2288:
case 499:
case 1985:
case 1231:
case 2892:
case 1152:
case 1233:
case 4068:
case 2579:
case 1658:
case 2962:
case 293:
case 1538:
case 512:
case 1086:
case 3275:
case 3298:
case 3456:
case 2398:
case 1508:
case 3950:
case 1203:
case 4007:
case 2670:
case 708:
case 3591:
case 2043:
case 2164:
case 1201:
case 3593:
case 1212:
case 1546:
case 988:
case 971:
case 2934:
case 3574:
case 2415:
case 2608:
case 1798:
case 3882:
case 182:
case 1570:
case 2140:
case 3326:
case 2226:
case 3703:
case 3273:
case 4032:
case 1452:
case 469:
case 1235:
case 673:
case 3121:
case 1685:
case 1819:
case 2967:
case 1794:
case 165:
case 2604:
case 1562:
case 3469:
case 1771:
case 2137:
case 1290:
case 1981:
case 2585:
case 2255:
case 3294:
case 430:
case 3289:
case 1322:
case 338:
case 255:
case 1504:
case 2389:
case 3735:
case 228:
case 1799:
case 604:
case 1974:
case 3115:
case 423:
case 1695:
case 1784:
case 51:
case 1814:
case 3780:
case 1065:
case 3402:
case 3440:
case 2650:
case 2717:
case 710:
case 3970:
case 3843:
case 2530:
case 1863:
case 1509:
case 3284:
case 1896:
case 2384:
case 1460:
case 3908:
case 2595:
case 2399:
case 2156:
case 1861:
case 3299:
case 611:
case 1993:
case 3464:
case 1550:
case 1280:
case 1029:
case 1991:
case 2351:
case 3581:
case 3251:
case 2733:
case 3583:
case 1472:
case 743:
case 3132:
case 2731:
case 2169:
case 10:
case 2547:
case 3667:
case 637:
case 2388:
case 1227:
case 766:
case 3638:
case 167:
case 3288:
case 1406:
case 101:
case 4021:
case 537:
case 1331:
case 996:
case 3579:
case 2820:
case 3962:
case 393:
case 114:
case 257:
case 1978:
case 3727:
case 2275:
case 1818:
case 1788:
case 772:
case 2421:
case 477:
case 641:
case 2298:
case 2456:
case 1160:
case 1674:
case 2950:
case 1303:
case 2591:
case 2566:
case 1312:
case 1865:
case 2593:
case 846:
case 54:
case 3934:
case 2574:
case 1096:
case 3407:
case 3111:
case 740:
case 1691:
case 3102:
case 1930:
case 541:
case 1693:
case 2703:
case 18:
case 1600:
case 972:
case 789:
case 2271:
case 3897:
case 2425:
case 181:
case 2121:
case 1335:
case 3967:
case 3604:
case 1755:
case 144:
case 1539:
case 1659:
case 658:
case 2578:
case 713:
case 2500:
case 1172:
case 1947:
case 3092:
case 3394:
case 3585:
case 2294:
case 2289:
case 2020:
case 909:
case 2559:
case 420:
case 363:
case 2735:
case 374:
case 440:
case 2808:
case 348:
case 326:
case 3369:
case 2332:
case 3682:
case 4073:
case 2269:
case 3151:
case 4071:
case 532:
case 1054:
case 2416:
case 4089:
case 1349:
case 3009:
case 2943:
case 252:
case 1928:
case 3050:
case 3987:
case 2225:
case 3777:
case 176:
case 2910:
case 720:
case 35:
case 3207:
case 1083:
case 3426:
case 2992:
case 2519:
case 1236:
case 351:
case 1686:
case 2315:
case 413:
case 3920:
case 62:
case 1180:
case 1707:
case 1619:
case 1715:
case 1885:
case 2498:
case 3356:
case 3199:
case 621:
case 185:
case 2804:
case 2067:
case 2008:
case 2223:
case 977:
case 1248:
case 2116:
case 2221:
case 2945:
case 2475:
case 1737:
case 2171:
case 1510:
case 1543:
case 2528:
case 192:
case 3982:
case 1427:
case 280:
case 1854:
case 318:
case 3809:
case 410:
case 2046:
case 3748:
case 3155:
case 4075:
case 3451:
case 2641:
case 515:
case 2643:
case 3268:
case 768:
case 2070:
case 3237:
case 1628:
case 1272:
case 3687:
case 3850:
case 1881:
case 2364:
case 3264:
case 1713:
case 203:
case 1260:
case 1776:
case 2062:
case 3039:
case 2198:
case 3499:
case 249:
case 3744:
case 1764:
case 1592:
case 2302:
case 3211:
case 2340:
case 3202:
case 2311:
case 443:
case 2004:
case 2867:
case 1879:
case 1919:
case 3760:
case 3708:
case 1120:
case 2374:
case 3849:
case 414:
case 3274:
case 1766:
case 3852:
case 1793:
case 2603:
case 3124:
case 2072:
case 2612:
case 2601:
case 842:
case 1774:
case 401:
case 3486:
case 3598:
case 2905:
case 467:
case 1023:
case 2048:
case 1984:
case 3746:
case 3980:
case 3057:
case 40:
case 3293:
case 1626:
case 2393:
case 3770:
case 1501:
case 1951:
case 2465:
case 1590:
case 1856:
case 3385:
case 3594:
case 2161:
case 924:
case 2285:
case 1778:
case 3259:
case 2163:
case 258:
case 335:
case 2196:
case 2359:
case 1187:
case 342:
case 2933:
case 1700:
case 2931:
case 2690:
case 1759:
case 1535:
case 2114:
case 2836:
case 2060:
case 123:
case 168:
case 3622:
case 638:
case 204:
case 2395:
case 2584:
case 2599:
case 3734:
case 4018:
case 905:
case 1517:
case 1025:
case 2912:
case 2901:
case 1350:
case 529:
case 1823:
case 497:
case 1420:
case 1684:
case 827:
case 2709:
case 1821:
case 211:
case 481:
case 629:
case 3119:
case 478:
case 1795:
case 2750:
case 3857:
case 3424:
case 3230:
case 2330:
case 1651:
case 1531:
case 1747:
case 312:
case 1533:
case 3627:
case 870:
case 762:
case 4063:
case 1056:
case 2935:
case 2551:
case 3381:
case 2631:
case 2990:
case 992:
case 3247:
case 2633:
case 2860:
case 657:
case 198:
case 4014:
case 2461:
case 3159:
case 3396:
case 2458:
case 78:
case 3363:
case 2296:
case 3805:
case 3361:
case 2185:
case 781:
case 778:
case 3817:
case 3787:
case 2537:
case 1932:
case 744:
case 3977:
case 2741:
case 2710:
case 3447:
case 1467:
case 394:
case 1438:
case 2949:
case 347:
case 3523:
case 680:
case 3606:
case 2214:
case 967:
case 3012:
case 1310:
case 3228:
case 1343:
case 3003:
case 2952:
case 1392:
case 476:
case 2513:
case 2502:
case 3833:
case 2540:
case 1664:
case 1907:
case 1170:
case 424:
case 1220:
case 3174:
case 4054:
case 3936:
case 2218:
case 1875:
case 2576:
case 1094:
case 3318:
case 1724:
case 2564:
case 1640:
case 3191:
case 1073:
case 462:
case 549:
case 1611:
case 1108:
case 2454:
case 3644:
case 2827:
case 1676:
case 109:
case 552:
case 3948:
case 1138:
case 143:
case 831:
case 3478:
case 322:
case 1282:
case 1632:
case 636:
case 232:
case 166:
case 2080:
case 83:
case 500:
case 701:
case 944:
case 1898:
case 2485:
case 3906:
case 981:
case 978:
case 1404:
case 2745:
case 364:
case 3459:
case 600:
case 3972:
case 3803:
case 2652:
case 1968:
case 2183:
case 3801:
case 2265:
case 3812:
case 3365:
case 519:
case 2797:
case 1607:
case 3493:
case 1075:
case 2386:
case 3556:
case 110:
case 1615:
case 3130:
case 492:
case 2507:
case 1873:
case 1911:
case 1871:
case 1397:
case 221:
case 817:
case 1976:
case 331:
case 3219:
case 2027:
case 3944:
case 1786:
case 823:
case 1419:
case 582:
case 868:
case 1708:
case 2346:
case 2698:
case 493:
case 3120:
case 1274:
case 1852:
case 3766:
case 2370:
case 2497:
case 3791:
case 3774:
case 1486:
case 299:
case 1598:
case 3208:
case 3023:
case 951:
case 3984:
case 1746:
case 1291:
case 1980:
case 2832:
case 3869:
case 3503:
case 3512:
case 95:
case 3501:
case 1770:
case 1200:
case 2673:
case 2013:
case 3590:
case 1762:
case 3856:
case 2076:
case 173:
case 2304:
case 653:
case 2616:
case 1259:
case 1128:
case 3482:
case 142:
case 718:
case 1573:
case 926:
case 565:
case 553:
case 1571:
case 3700:
case 2694:
case 948:
case 3535:
case 3759:
case 2362:
case 2785:
case 323:
case 3262:
case 2239:
case 2689:
case 463:
case 75:
case 320:
case 679:
case 428:
case 877:
case 502:
case 898:
case 2998:
case 3025:
case 3517:
case 3730:
case 1052:
case 446:
case 2868:
case 650:
case 3684:
case 3420:
case 3234:
case 3821:
case 3699:
case 3795:
case 269:
case 2754:
case 2492:
case 3926:
case 1230:
case 1680:
case 1424:
case 1857:
case 3651:
case 2813:
case 2971:
case 3531:
case 112:
case 2781:
case 3182:
case 3487:
case 1428:
case 2367:
case 3238:
case 3267:
case 2758:
case 4041:
case 4010:
case 1247:
case 4043:
case 2007:
case 1358:
case 2015:
case 2527:
case 2989:
case 2994:
case 1767:
case 820:
case 2779:
case 2675:
case 377:
case 1648:
case 2714:
case 2506:
case 2899:
case 840:
case 2621:
case 1361:
case 2026:
case 1817:
case 1142:
case 1100:
case 3932:
case 2572:
case 1447:
case 313:
case 2548:
case 194:
case 3467:
case 1523:
case 2761:
case 2139:
case 3438:
case 1606:
case 2796:
case 1521:
case 2210:
case 1001:
case 2241:
case 1012:
case 755:
case 3287:
case 3343:
case 2387:
case 2243:
case 763:
case 587:
case 1090:
case 3664:
case 591:
case 1430:
case 1224:
case 3220:
case 3089:
case 3434:
case 1660:
case 939:
case 3915:
case 3875:
case 1936:
case 2055:
case 3071:
case 3613:
case 896:
case 2851:
case 1191:
case 426:
case 3611:
case 3108:
case 3016:
case 1495:
case 2560:
case 687:
case 1644:
case 448:
case 2718:
case 2888:
case 1035:
case 691:
case 960:
case 3345:
case 309:
case 1005:
case 2245:
case 2439:
case 3462:
case 2923:
case 1478:
case 3167:
case 343:
case 1677:
case 3282:
case 122:
case 2382:
case 3552:
case 534:
case 1017:
case 2826:
case 946:
case 1906:
case 164:
case 4039:
case 1459:
case 2577:
case 1803:
case 1972:
case 3937:
case 1400:
case 2729:
case 1782:
case 1365:
case 1812:
case 3607:
case 1033:
case 3964:
case 1491:
case 27:
case 1890:
case 1466:
case 1286:
case 1636:
case 1556:
case 2855:
case 3894:
case 3889:
case 418:
case 3719:
case 310:
case 1195:
case 2109:
case 3615:
case 288:
case 13:
case 3940:
case 3902:
case 1130:
case 2053:
case 3911:
case 3871:
case 739:
case 866:
case 2297:
case 3976:
case 2536:
case 843:
case 2656:
case 1219:
case 990:
case 1474:
case 1944:
case 3134:
case 3816:
case 1115:
case 2534:
case 630:
case 506:
case 3814:
case 3136:
case 814:
case 1440:
case 1402:
case 1843:
case 1970:
case 569:
case 1284:
case 3509:
case 801:
case 250:
case 1554:
case 3896:
case 2205:
case 3305:
case 3966:
case 3317:
case 2217:
case 2380:
case 3550:
case 3630:
case 3991:
case 606:
case 1097:
case 1583:
case 4057:
case 30:
case 1468:
case 3900:
case 3942:
case 3177:
case 295:
case 1904:
case 1667:
case 722:
case 2327:
case 1288:
case 1638:
case 3959:
case 3227:
case 301:
case 2985:
case 3406:
case 2681:
case 2231:
case 3753:
case 2233:
case 764:
case 2152:
case 3751:
case 2683:
case 3647:
case 2824:
case 3448:
case 1579:
case 3978:
case 314:
case 2538:
case 3788:
case 1727:
case 1375:
case 586:
case 931:
case 2028:
case 1164:
case 3865:
case 93:
case 2212:
case 1041:
case 844:
case 881:
case 878:
case 3144:
case 3691:
case 1140:
case 412:
case 3829:
case 1113:
case 575:
case 2157:
case 3642:
case 533:
case 1897:
case 378:
case 381:
case 964:
case 2819:
case 2789:
case 2562:
case 3539:
case 265:
case 3755:
case 1604:
case 2979:
case 397:
case 2449:
case 3659:
case 253:
case 794:
case 1168:
case 1432:
case 2983:
case 4052:
case 922:
case 2981:
case 1092:
case 2773:
case 3018:
case 1255:
case 155:
case 3678:
case 163:
case 885:
case 712:
case 2996:
case 3422:
case 2963:
case 654:
case 2377:
case 2891:
case 2030:
case 1153:
case 1232:
case 362:
case 2725:
case 1682:
case 942:
case 2866:
case 1151:
case 2490:
case 1565:
case 3545:
case 2435:
case 3054:
case 973:
case 324:
case 1529:
case 2133:
case 3352:
case 2582:
case 3928:
case 2769:
case 554:
case 2665:
case 4090:
case 2047:
case 3083:
case 1207:
case 4003:
case 759:
case 3081:
case 2336:
case 151:
case 2918:
case 671:
case 1215:
case 2756:
case 494:
case 1839:
case 3180:
case 2412:
case 571:
case 3885:
case 261:
case 3715:
case 2859:
case 57:
case 1736:
case 3079:
case 1706:
case 2663:
case 1514:
case 2661:
case 1321:
case 3541:
case 1772:
case 3510:
case 735:
case 2929:
case 2257:
case 2091:
case 43:
case 392:
case 1596:
case 3854:
case 2895:
case 1809:
case 3122:
case 118:
case 2723:
case 2190:
case 912:
case 2965:
case 1453:
case 1687:
case 1237:
case 2417:
case 3740:
case 2112:
case 3711:
case 2103:
case 2847:
case 3713:
case 1264:
case 1620:
case 464:
case 970:
case 3:
case 1499:
case 3986:
case 2618:
case 1213:
case 4017:
case 1126:
case 508:
case 29:
case 2000:
case 2042:
case 2344:
case 959:
case 305:
case 291:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1755550802/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,];
var gg_b = "1755550802/";

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
