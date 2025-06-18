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
case 3961:
case 137:
case 2622:
case 1013:
case 841:
case 1206:
case 1564:
case 3540:
case 2367:
case 1759:
case 242:
case 2460:
case 1958:
case 1843:
case 2143:
case 1618:
case 92:
case 657:
case 3329:
case 1428:
case 3194:
case 622:
case 2743:
case 1669:
case 3800:
case 412:
case 3939:
case 261:
case 809:
case 2859:
case 2396:
case 3946:
case 570:
case 1159:
case 2412:
case 3335:
case 1503:
case 295:
case 2775:
case 4006:
case 1086:
case 2019:
case 1532:
case 960:
case 2604:
case 2836:
case 676:
case 1136:
case 1020:
case 2521:
case 3895:
case 1149:
case 294:
case 339:
case 3616:
case 616:
case 703:
case 3473:
case 1749:
case 2981:
case 2499:
case 718:
case 2565:
case 2874:
case 665:
case 3387:
case 2153:
case 691:
case 3480:
case 423:
case 613:
case 2841:
case 3075:
case 1888:
case 3813:
case 2188:
case 706:
case 1255:
case 941:
case 924:
case 178:
case 1510:
case 2011:
case 9:
case 82:
case 608:
case 2244:
case 2414:
case 118:
case 1562:
case 3567:
case 2340:
case 3990:
case 2385:
case 1000:
case 2217:
case 288:
case 2094:
case 3792:
case 2866:
case 1741:
case 909:
case 572:
case 1576:
case 3886:
case 3119:
case 29:
case 1639:
case 1646:
case 2457:
case 2872:
case 1625:
case 4045:
case 3177:
case 1751:
case 3365:
case 1172:
case 1095:
case 2851:
case 1983:
case 3918:
case 1534:
case 470:
case 1772:
case 1280:
case 1151:
case 2430:
case 3053:
case 512:
case 3321:
case 1273:
case 755:
case 3173:
case 4019:
case 3854:
case 3030:
case 2685:
case 2640:
case 1474:
case 3145:
case 3251:
case 1071:
case 2199:
case 2570:
case 748:
case 4077:
case 199:
case 2324:
case 300:
case 351:
case 3780:
case 1277:
case 15:
case 3272:
case 2220:
case 3057:
case 1436:
case 2286:
case 1449:
case 3348:
case 4068:
case 63:
case 3266:
case 1361:
case 3504:
case 442:
case 3091:
case 2516:
case 1589:
case 2302:
case 780:
case 3621:
case 3047:
case 2760:
case 272:
case 1193:
case 871:
case 328:
case 2475:
case 754:
case 1684:
case 3665:
case 1929:
case 182:
case 3609:
case 3844:
case 540:
case 1793:
case 1325:
case 896:
case 2650:
case 1339:
case 3155:
case 830:
case 1728:
case 3297:
case 3274:
case 3635:
case 1451:
case 2130:
case 1830:
case 2696:
case 231:
case 3099:
case 1909:
case 3468:
case 210:
case 542:
case 2548:
case 1965:
case 1305:
case 2080:
case 1581:
case 3236:
case 3383:
case 1318:
case 2157:
case 1857:
case 2932:
case 3852:
case 3524:
case 2808:
case 3477:
case 154:
case 2730:
case 440:
case 782:
case 2322:
case 167:
case 1891:
case 1682:
case 594:
case 1847:
case 1079:
case 3842:
case 2191:
case 635:
case 1466:
case 971:
case 2363:
case 3012:
case 4038:
case 2200:
case 4011:
case 1017:
case 2488:
case 1238:
case 1211:
case 4094:
case 1441:
case 488:
case 3316:
case 369:
case 1390:
case 2964:
case 3492:
case 302:
case 1044:
case 1497:
case 2747:
case 2114:
case 2791:
case 996:
case 2558:
case 1271:
case 917:
case 3376:
case 45:
case 2736:
case 3454:
case 1663:
case 2749:
case 3795:
case 3323:
case 1153:
case 2174:
case 853:
case 2382:
case 1509:
case 1068:
case 1981:
case 2948:
case 2853:
case 3398:
case 1565:
case 2774:
case 838:
case 2149:
case 206:
case 3924:
case 2690:
case 1077:
case 1604:
case 1849:
case 3894:
case 2669:
case 1743:
case 3479:
case 482:
case 2605:
case 3310:
case 2503:
case 313:
case 3066:
case 1859:
case 161:
case 580:
case 1460:
case 3214:
case 3097:
case 2013:
case 1143:
case 2631:
case 2618:
case 3838:
case 2958:
case 2843:
case 1337:
case 639:
case 2280:
case 2245:
case 2151:
case 3299:
case 2983:
case 3720:
case 376:
case 3471:
case 2661:
case 140:
case 1254:
case 3786:
case 582:
case 3074:
case 2226:
case 3607:
case 3452:
case 1350:
case 3186:
case 938:
case 391:
case 2523:
case 2646:
case 3819:
case 365:
case 2384:
case 2172:
case 3120:
case 1872:
case 3049:
case 3036:
case 2625:
case 1587:
case 2408:
case 1385:
case 3364:
case 1501:
case 3442:
case 3212:
case 1447:
case 1217:
case 3904:
case 218:
case 4044:
case 364:
case 2166:
case 1279:
case 2797:
case 55:
case 1866:
case 3113:
case 599:
case 683:
case 2766:
case 2141:
case 3892:
case 1841:
case 4079:
case 856:
case 1038:
case 3303:
case 1011:
case 3963:
case 278:
case 4017:
case 2325:
case 90:
case 1475:
case 2929:
case 2684:
case 112:
case 1160:
case 3144:
case 3855:
case 2728:
case 335:
case 3288:
case 1443:
case 1213:
case 1650:
case 3779:
case 3996:
case 2346:
case 1006:
case 1302:
case 1516:
case 2589:
case 4013:
case 3400:
case 2128:
case 1962:
case 3307:
case 710:
case 3179:
case 3590:
case 2901:
case 343:
case 2812:
case 731:
case 602:
case 1112:
case 1220:
case 126:
case 2052:
case 3603:
case 1799:
case 2277:
case 1923:
case 2987:
case 3569:
case 3495:
case 3505:
case 2436:
case 2449:
case 518:
case 3008:
case 1934:
case 3531:
case 3826:
case 2268:
case 723:
case 1199:
case 3845:
case 2071:
case 3880:
case 299:
case 3664:
case 1453:
case 4020:
case 2527:
case 2474:
case 2899:
case 981:
case 3940:
case 418:
case 2044:
case 1304:
case 3243:
case 1488:
case 2507:
case 3413:
case 2441:
case 726:
case 868:
case 2814:
case 1055:
case 697:
case 3275:
case 3806:
case 248:
case 2847:
case 1191:
case 506:
case 929:
case 3142:
case 3525:
case 2891:
case 3623:
case 2294:
case 2466:
case 1903:
case 3093:
case 1363:
case 2857:
case 3937:
case 1932:
case 170:
case 2318:
case 3771:
case 1157:
case 346:
case 267:
case 1322:
case 3327:
case 2108:
case 254:
case 1808:
case 1667:
case 1730:
case 3662:
case 2921:
case 2708:
case 3610:
case 3253:
case 2115:
case 2451:
case 1045:
case 905:
case 1080:
case 2305:
case 3171:
case 1757:
case 2369:
case 110:
case 537:
case 4095:
case 849:
case 3903:
case 2012:
case 1546:
case 850:
case 682:
case 4043:
case 3147:
case 1028:
case 2687:
case 3191:
case 2842:
case 539:
case 4075:
case 1742:
case 1275:
case 1634:
case 884:
case 3055:
case 2106:
case 3558:
case 1389:
case 1413:
case 1561:
case 3304:
case 202:
case 1985:
case 3964:
case 2492:
case 1752:
case 310:
case 3678:
case 2468:
case 2871:
case 3080:
case 2984:
case 2629:
case 1253:
case 2274:
case 13:
case 331:
case 3696:
case 3073:
case 998:
case 1950:
case 1662:
case 3667:
case 1327:
case 2601:
case 4053:
case 1556:
case 2383:
case 1771:
case 952:
case 370:
case 1486:
case 2419:
case 699:
case 3932:
case 735:
case 3295:
case 2852:
case 583:
case 1937:
case 3893:
case 950:
case 143:
case 2817:
case 2266:
case 2755:
case 2621:
case 2047:
case 3302:
case 586:
case 2879:
case 4088:
case 1400:
case 1967:
case 2411:
case 1996:
case 2155:
case 3443:
case 2438:
case 3650:
case 1779:
case 2297:
case 2014:
case 135:
case 2563:
case 648:
case 1717:
case 655:
case 3475:
case 2665:
case 901:
case 2844:
case 2609:
case 2180:
case 2145:
case 3324:
case 3570:
case 985:
case 1880:
case 1154:
case 898:
case 654:
case 2030:
case 2126:
case 1015:
case 2854:
case 3583:
case 1518:
case 1008:
case 3998:
case 3333:
case 1505:
case 1754:
case 1381:
case 2726:
case 1569:
case 2272:
case 251:
case 2057:
case 3799:
case 326:
case 3220:
case 680:
case 852:
case 2969:
case 597:
case 3587:
case 2309:
case 286:
case 2905:
case 2820:
case 2177:
case 528:
case 191:
case 1452:
case 3350:
case 2119:
case 1186:
case 2321:
case 1868:
case 3927:
case 3254:
case 2719:
case 1786:
case 1471:
case 708:
case 2168:
case 1922:
case 76:
case 2918:
case 1720:
case 1299:
case 2931:
case 1332:
case 3337:
case 2406:
case 3535:
case 3011:
case 1963:
case 3038:
case 4012:
case 1260:
case 3414:
case 3244:
case 2813:
case 2578:
case 2192:
case 3529:
case 1892:
case 3633:
case 3188:
case 3897:
case 2228:
case 551:
case 1059:
case 720:
case 402:
case 3491:
case 164:
case 3989:
case 3094:
case 157:
case 1364:
case 3340:
case 2956:
case 3604:
case 1072:
case 1195:
case 3849:
case 400:
case 1689:
case 239:
case 394:
case 3252:
case 2895:
case 4030:
case 2537:
case 3019:
case 3753:
case 3874:
case 1398:
case 569:
case 3499:
case 3509:
case 502:
case 1051:
case 1795:
case 2473:
case 1454:
case 3663:
case 3271:
case 1700:
case 1811:
case 2683:
case 2111:
case 791:
case 2455:
case 3143:
case 1041:
case 2585:
case 3622:
case 2670:
case 1362:
case 4091:
case 3460:
case 3907:
case 1097:
case 603:
case 1902:
case 497:
case 3367:
case 16:
case 4014:
case 776:
case 3396:
case 3775:
case 1247:
case 283:
case 1310:
case 3242:
case 3412:
case 678:
case 2194:
case 2329:
case 1100:
case 2925:
case 1479:
case 2738:
case 2711:
case 3378:
case 2327:
case 508:
case 2420:
case 1370:
case 3921:
case 3472:
case 1524:
case 476:
case 1852:
case 1383:
case 513:
case 1419:
case 56:
case 815:
case 3581:
case 416:
case 4049:
case 4036:
case 626:
case 1984:
case 3965:
case 380:
case 1468:
case 23:
case 3054:
case 728:
case 3115:
case 491:
case 3451:
case 1274:
case 2253:
case 1106:
case 3814:
case 520:
case 4059:
case 2275:
case 3044:
case 464:
case 3390:
case 457:
case 91:
case 2389:
case 1316:
case 1502:
case 2413:
case 3507:
case 3294:
case 3017:
case 2546:
case 1012:
case 2623:
case 2539:
case 612:
case 3466:
case 97:
case 2093:
case 3079:
case 1842:
case 700:
case 874:
case 3847:
case 3682:
case 1259:
case 1687:
case 3891:
case 2525:
case 2142:
case 631:
case 1982:
case 2569:
case 557:
case 1726:
case 1348:
case 2381:
case 564:
case 2754:
case 3449:
case 1057:
case 4051:
case 2603:
case 3052:
case 420:
case 1272:
case 610:
case 975:
case 151:
case 3277:
case 234:
case 2880:
case 1145:
case 915:
case 1180:
case 3474:
case 2531:
case 2015:
case 1126:
case 1854:
case 2826:
case 966:
case 3268:
case 235:
case 1297:
case 413:
case 1563:
case 2855:
case 623:
case 3935:
case 1411:
case 3339:
case 1155:
case 914:
case 576:
case 3793:
case 3860:
case 1609:
case 2978:
case 863:
case 1665:
case 3929:
case 3193:
case 591:
case 2117:
case 565:
case 2744:
case 1879:
case 3589:
case 2590:
case 3361:
case 1755:
case 642:
case 990:
case 3166:
case 3741:
case 303:
case 1228:
case 3797:
case 3656:
case 257:
case 2212:
case 2442:
case 1567:
case 3916:
case 264:
case 1293:
case 318:
case 3562:
case 222:
case 1596:
case 821:
case 844:
case 3510:
case 94:
case 1648:
case 3141:
case 739:
case 2681:
case 3197:
case 3888:
case 1075:
case 3273:
case 2786:
case 1719:
case 2922:
case 1168:
case 3661:
case 1321:
case 3970:
case 3226:
case 446:
case 2074:
case 1777:
case 3415:
case 783:
case 858:
case 3151:
case 1658:
case 2720:
case 1918:
case 907:
case 1931:
case 2299:
case 1820:
case 186:
case 1905:
case 3172:
case 3095:
case 1177:
case 3751:
case 3408:
case 2877:
case 216:
case 1309:
case 2582:
case 833:
case 3639:
case 1768:
case 3646:
case 291:
case 2452:
case 2186:
case 1119:
case 892:
case 265:
case 43:
case 1886:
case 2417:
case 3503:
case 183:
case 989:
case 2310:
case 2291:
case 890:
case 3493:
case 836:
case 3669:
case 1925:
case 2479:
case 1194:
case 3618:
case 1111:
case 1683:
case 1455:
case 1138:
case 3631:
case 2838:
case 3843:
case 3958:
case 443:
case 1670:
case 2444:
case 786:
case 3206:
case 3564:
case 1585:
case 2041:
case 3875:
case 84:
case 1301:
case 1088:
case 1961:
case 1215:
case 945:
case 3382:
case 3948:
case 2933:
case 220:
case 2454:
case 1473:
case 3736:
case 3749:
case 2376:
case 2051:
case 1550:
case 2323:
case 2795:
case 306:
case 3020:
case 3149:
case 2072:
case 434:
case 3690:
case 992:
case 640:
case 1537:
case 1208:
case 4015:
case 3086:
case 659:
case 229:
case 2118:
case 684:
case 2131:
case 1450:
case 1643:
case 793:
case 1831:
case 1573:
case 3883:
case 2705:
case 2554:
case 601:
case 2822:
case 2484:
case 1234:
case 1048:
case 955:
case 171:
case 3870:
case 1330:
case 2287:
case 31:
case 1298:
case 2919:
case 882:
case 3727:
case 2731:
case 2169:
case 204:
case 1276:
case 2718:
case 196:
case 3371:
case 3056:
case 2105:
case 3600:
case 1223:
case 2977:
case 3189:
case 3025:
case 1890:
case 2804:
case 1763:
case 3695:
case 2579:
case 3593:
case 1314:
case 1262:
case 3267:
case 2201:
case 2517:
case 4010:
case 2007:
case 2674:
case 2235:
case 2992:
case 3342:
case 1440:
case 85:
case 4062:
case 3296:
case 1913:
case 2544:
case 3988:
case 453:
case 967:
case 2790:
case 1058:
case 2229:
case 2863:
case 1704:
case 1555:
case 2265:
case 2756:
case 1724:
case 374:
case 2027:
case 2641:
case 538:
case 3250:
case 3613:
case 2571:
case 1070:
case 2697:
case 3848:
case 2833:
case 3354:
case 3781:
case 1733:
case 3476:
case 982:
case 553:
case 1232:
case 3005:
case 2156:
case 3237:
case 2824:
case 3508:
case 1124:
case 3069:
case 3498:
case 268:
case 1360:
case 132:
case 3462:
case 3090:
case 1203:
case 3620:
case 2146:
case 2761:
case 2139:
case 315:
case 3707:
case 880:
case 3379:
case 1478:
case 2739:
case 796:
case 3107:
case 375:
case 2651:
case 3317:
case 854:
case 1506:
case 698:
case 4003:
case 1264:
case 3285:
case 1496:
case 2911:
case 2938:
case 3858:
case 2885:
case 3703:
case 72:
case 1140:
case 1029:
case 3164:
case 1185:
case 3914:
case 405:
case 2906:
case 2366:
case 806:
case 2062:
case 2397:
case 1942:
case 568:
case 1001:
case 2500:
case 3991:
case 2341:
case 3313:
case 1388:
case 307:
case 1594:
case 50:
case 124:
case 141:
case 3224:
case 3957:
case 34:
case 2693:
case 2784:
case 2351:
case 3617:
case 1612:
case 2405:
case 3549:
case 2628:
case 4081:
case 1087:
case 1750:
case 2098:
case 978:
case 547:
case 760:
case 3821:
case 2850:
case 2418:
case 2431:
case 3386:
case 1281:
case 481:
case 3865:
case 1884:
case 1422:
case 1971:
case 1660:
case 3644:
case 2372:
case 1737:
case 404:
case 2184:
case 2878:
case 3960:
case 2513:
case 4089:
case 2064:
case 3541:
case 7:
case 3263:
case 1592:
case 3829:
case 2461:
case 3671:
case 1178:
case 2955:
case 724:
case 1196:
case 741:
case 3835:
case 1630:
case 1767:
case 2615:
case 3762:
case 3110:
case 2359:
case 2608:
case 1979:
case 1796:
case 504:
case 762:
case 3710:
case 358:
case 187:
case 1167:
case 1375:
case 3566:
case 345:
case 1917:
case 3912:
case 2216:
case 1778:
case 2003:
case 3123:
case 3176:
case 937:
case 344:
case 1577:
case 321:
case 1424:
case 1691:
case 12:
case 878:
case 1882:
case 2182:
case 4027:
case 2520:
case 256:
case 1021:
case 2374:
case 3642:
case 1353:
case 2973:
case 3551:
case 818:
case 2270:
case 2782:
case 1568:
case 3395:
case 2980:
case 1065:
case 3776:
case 1009:
case 2336:
case 615:
case 425:
case 3941:
case 2391:
case 1544:
case 970:
case 352:
case 2347:
case 1007:
case 2653:
case 2058:
case 1790:
case 666:
case 1229:
case 2704:
case 2555:
case 2104:
case 3889:
case 1579:
case 1190:
case 2890:
case 931:
case 3116:
case 1804:
case 398:
case 52:
case 1649:
case 1636:
case 1201:
case 3512:
case 327:
case 4035:
case 3966:
case 105:
case 211:
case 2722:
case 1919:
case 812:
case 38:
case 2437:
case 3770:
case 181:
case 1287:
case 1105:
case 409:
case 2869:
case 587:
case 1977:
case 462:
case 230:
case 2276:
case 3783:
case 296:
case 2805:
case 2920:
case 1718:
case 441:
case 1554:
case 1705:
case 2818:
case 2573:
case 3611:
case 3183:
case 2450:
case 2526:
case 2643:
case 923:
case 1308:
case 3033:
case 2545:
case 560:
case 4087:
case 2122:
case 271:
case 747:
case 2580:
case 3409:
case 4:
case 1822:
case 3170:
case 3827:
case 2675:
case 1328:
case 3429:
case 562:
case 1802:
case 704:
case 487:
case 509:
case 3668:
case 1161:
case 3807:
case 926:
case 2478:
case 2496:
case 3063:
case 1938:
case 1393:
case 3158:
case 1651:
case 2506:
case 781:
case 2016:
case 1125:
case 1542:
case 3547:
case 5:
case 2360:
case 232:
case 1672:
case 1994:
case 460:
case 2825:
case 2900:
case 2467:
case 3591:
case 2846:
case 3355:
case 1139:
case 385:
case 524:
case 912:
case 67:
case 3557:
case 10:
case 301:
case 1666:
case 2399:
case 3949:
case 168:
case 2856:
case 4065:
case 1156:
case 2232:
case 2995:
case 3345:
case 4009:
case 525:
case 384:
case 1824:
case 823:
case 2724:
case 1209:
case 61:
case 3881:
case 1571:
case 42:
case 350:
case 3974:
case 1833:
case 349:
case 4021:
case 1641:
case 2688:
case 3655:
case 2281:
case 411:
case 1850:
case 3915:
case 621:
case 1034:
case 1372:
case 895:
case 1184:
case 496:
case 861:
case 209:
case 3553:
case 717:
case 2422:
case 3109:
case 1351:
case 1784:
case 3765:
case 3256:
case 2137:
case 777:
case 241:
case 593:
case 224:
case 1837:
case 3709:
case 1693:
case 1098:
case 2750:
case 3908:
case 2:
case 1469:
case 4048:
case 1405:
case 1628:
case 3121:
case 471:
case 3416:
case 1500:
case 3239:
case 1062:
case 1397:
case 2404:
case 633:
case 3067:
case 153:
case 2785:
case 959:
case 1258:
case 3645:
case 2185:
case 645:
case 3575:
case 1840:
case 3864:
case 138:
case 2699:
case 3261:
case 2207:
case 3543:
case 2511:
case 1010:
case 1926:
case 1270:
case 3834:
case 2227:
case 3050:
case 961:
case 1283:
case 3231:
case 64:
case 1980:
case 995:
case 1945:
case 3823:
case 3269:
case 379:
case 690:
case 4083:
case 1586:
case 3876:
case 636:
case 3037:
case 1520:
case 156:
case 1456:
case 2353:
case 22:
case 2691:
case 3735:
case 2375:
case 596:
case 1608:
case 2796:
case 530:
case 1446:
case 840:
case 2657:
case 511:
case 2343:
case 89:
case 432:
case 260:
case 2592:
case 1513:
case 1878:
case 2944:
case 3394:
case 4016:
case 3040:
case 1064:
case 2402:
case 2767:
case 2630:
case 1615:
case 493:
case 1896:
case 2196:
case 177:
case 1955:
case 2887:
case 244:
case 2198:
case 3520:
case 356:
case 3182:
case 2734:
case 822:
case 1037:
case 2123:
case 4018:
case 1205:
case 3586:
case 662:
case 1269:
case 2084:
case 414:
case 624:
case 2723:
case 2395:
case 3945:
case 2999:
case 2481:
case 913:
case 96:
case 2222:
case 1050:
case 2798:
case 2551:
case 864:
case 3926:
case 6:
case 1787:
case 3270:
case 816:
case 233:
case 1810:
case 3955:
case 415:
case 2110:
case 2300:
case 1129:
case 2960:
case 3513:
case 865:
case 1588:
case 2597:
case 2671:
case 2263:
case 2829:
case 1290:
case 2566:
case 1729:
case 2204:
case 1338:
case 51:
case 1993:
case 2652:
case 3003:
case 563:
case 3216:
case 3439:
case 1311:
case 1862:
case 317:
case 475:
case 876:
case 3867:
case 2801:
case 1735:
case 2536:
case 3628:
case 2549:
case 3595:
case 2821:
case 3098:
case 1908:
case 566:
case 3469:
case 873:
case 1709:
case 3351:
case 3784:
case 2617:
case 813:
case 1553:
case 2427:
case 2865:
case 3184:
case 1165:
case 2732:
case 3372:
case 575:
case 2644:
case 1721:
case 463:
case 41:
case 808:
case 1319:
case 3431:
case 1655:
case 2233:
case 3248:
case 3010:
case 2202:
case 1626:
case 4046:
case 1261:
case 687:
case 574:
case 1096:
case 338:
case 1575:
case 2703:
case 1864:
case 3885:
case 2164:
case 3258:
case 353:
case 2764:
case 3490:
case 3397:
case 2947:
case 2313:
case 820:
case 1246:
case 719:
case 2489:
case 2991:
case 3341:
case 3500:
case 1239:
case 3761:
case 3146:
case 934:
case 3139:
case 2707:
case 1959:
case 2090:
case 1758:
case 1591:
case 1677:
case 3672:
case 3994:
case 1547:
case 2620:
case 1401:
case 3089:
case 3125:
case 3542:
case 78:
case 2410:
case 2240:
case 1158:
case 2317:
case 846:
case 2858:
case 3725:
case 1063:
case 590:
case 3746:
case 3161:
case 1807:
case 536:
case 2379:
case 1429:
case 3328:
case 798:
case 2250:
case 2613:
case 3641:
case 150:
case 2848:
case 1974:
case 1692:
case 1881:
case 3265:
case 1284:
case 2434:
case 630:
case 727:
case 2031:
case 1530:
case 2018:
case 2237:
case 184:
case 3824:
case 935:
case 3156:
case 2005:
case 1380:
case 368:
case 4084:
case 507:
case 2069:
case 214:
case 2498:
case 1748:
case 2781:
case 2354:
case 1557:
case 3552:
case 1326:
case 3221:
case 2267:
case 3517:
case 127:
case 1966:
case 2039:
case 2528:
case 3649:
case 521:
case 544:
case 749:
case 2189:
case 1116:
case 93:
case 2816:
case 1889:
case 3190:
case 2695:
case 1716:
case 3229:
case 3863:
case 3790:
case 3992:
case 3674:
case 1002:
case 2464:
case 407:
case 1997:
case 3007:
case 2061:
case 2988:
case 3544:
case 1941:
case 3484:
case 592:
case 3822:
case 2870:
case 1409:
case 27:
case 3308:
case 1033:
case 4082:
case 2127:
case 785:
case 1638:
case 2352:
case 533:
case 329:
case 3705:
case 3554:
case 2883:
case 1951:
case 1783:
case 2371:
case 3718:
case 304:
case 3169:
case 558:
case 436:
case 835:
case 1694:
case 1972:
case 3105:
case 2056:
case 490:
case 1421:
case 381:
case 1282:
case 3315:
case 2432:
case 3919:
case 1652:
case 3657:
case 2311:
case 3778:
case 1912:
case 2290:
case 2729:
case 145:
case 1204:
case 58:
case 3375:
case 2735:
case 1162:
case 158:
case 2928:
case 387:
case 3796:
case 736:
case 3979:
case 1762:
case 2458:
case 3630:
case 3767:
case 2701:
case 133:
case 939:
case 1671:
case 3178:
case 4004:
case 3592:
case 1829:
case 360:
case 2129:
case 2085:
case 1541:
case 2040:
case 2588:
case 2394:
case 3944:
case 1407:
case 3009:
case 2231:
case 707:
case 3433:
case 2448:
case 1084:
case 189:
case 983:
case 3568:
case 1395:
case 3614:
case 401:
case 1222:
case 1798:
case 3954:
case 2606:
case 1642:
case 2898:
case 3353:
case 4022:
case 2187:
case 3021:
case 449:
case 1734:
case 1572:
case 3882:
case 144:
case 3577:
case 3424:
case 121:
case 1887:
case 1198:
case 3691:
case 598:
case 1176:
case 2823:
case 2269:
case 527:
case 1123:
case 2037:
case 3519:
case 3740:
case 1103:
case 4002:
case 1313:
case 3388:
case 3594:
case 2246:
case 3001:
case 1991:
case 2392:
case 584:
case 677:
case 325:
case 1947:
case 3463:
case 839:
case 3511:
case 3035:
case 1202:
case 2543:
case 1914:
case 498:
case 3185:
case 1164:
case 3699:
case 2078:
case 2864:
case 721:
case 2165:
case 2377:
case 1809:
case 1644:
case 3737:
case 758:
case 4024:
case 883:
case 3422:
case 1320:
case 3884:
case 1865:
case 190:
case 2553:
case 309:
case 3150:
case 1386:
case 48:
case 3281:
case 1233:
case 2655:
case 656:
case 1930:
case 745:
case 2915:
case 1679:
case 1536:
case 792:
case 1549:
case 2121:
case 1082:
case 3612:
case 1617:
case 2256:
case 2832:
case 1224:
case 3856:
case 2949:
case 1069:
case 1498:
case 1237:
case 2487:
case 1508:
case 2345:
case 2380:
case 629:
case 2326:
case 802:
case 2748:
case 869:
case 1354:
case 1848:
case 2881:
case 1250:
case 3688:
case 249:
case 2148:
case 1515:
case 174:
case 2530:
case 1018:
case 3083:
case 604:
case 3496:
case 71:
case 3264:
case 175:
case 1107:
case 3861:
case 2668:
case 3478:
case 605:
case 1707:
case 3839:
case 3702:
case 1686:
case 393:
case 900:
case 2355:
case 2547:
case 3203:
case 1620:
case 2401:
case 2591:
case 3467:
case 2758:
case 2677:
case 1344:
case 3360:
case 1462:
case 1600:
case 2972:
case 3276:
case 3805:
case 396:
case 2783:
case 1371:
case 2024:
case 330:
case 163:
case 1727:
case 969:
case 28:
case 2282:
case 902:
case 3122:
case 1870:
case 3545:
case 766:
case 17:
case 1127:
case 2827:
case 3234:
case 2599:
case 3573:
case 3818:
case 1883:
case 2951:
case 715:
case 3831:
case 3450:
case 2638:
case 1352:
case 3357:
case 1278:
case 3163:
case 519:
case 3913:
case 714:
case 1296:
case 2941:
case 3653:
case 2002:
case 1342:
case 851:
case 3210:
case 227:
case 1403:
case 1046:
case 579:
case 2306:
case 1267:
case 1593:
case 3314:
case 4078:
case 3104:
case 1695:
case 1189:
case 2116:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1750287601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,];
var gg_b = "1750287601/";

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
