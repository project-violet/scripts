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
case 3806:
case 2722:
case 4029:
case 1834:
case 2754:
case 1459:
case 3821:
case 3778:
case 2714:
case 1311:
case 1351:
case 3209:
case 3332:
case 3134:
case 3621:
case 694:
case 151:
case 42:
case 155:
case 1121:
case 1247:
case 1335:
case 3403:
case 1563:
case 1920:
case 2191:
case 3606:
case 2336:
case 2802:
case 3764:
case 1097:
case 3726:
case 1488:
case 1370:
case 3701:
case 679:
case 1213:
case 2027:
case 734:
case 1564:
case 3404:
case 1526:
case 3461:
case 1595:
case 3133:
case 1436:
case 1254:
case 571:
case 3699:
case 2292:
case 375:
case 3763:
case 1927:
case 727:
case 2753:
case 3296:
case 2359:
case 2997:
case 622:
case 805:
case 3448:
case 2319:
case 2986:
case 1377:
case 2411:
case 2747:
case 2020:
case 3899:
case 3046:
case 3592:
case 4005:
case 4091:
case 3590:
case 2014:
case 1092:
case 2054:
case 1546:
case 58:
case 287:
case 3673:
case 3909:
case 3476:
case 1242:
case 1786:
case 1220:
case 1947:
case 2472:
case 56:
case 3245:
case 624:
case 2290:
case 3428:
case 3095:
case 1681:
case 416:
case 1953:
case 3026:
case 196:
case 1797:
case 3873:
case 3980:
case 2742:
case 3668:
case 3398:
case 711:
case 3282:
case 3597:
case 715:
case 3841:
case 3586:
case 1738:
case 305:
case 2992:
case 501:
case 2582:
case 692:
case 871:
case 3925:
case 2600:
case 2889:
case 1940:
case 2053:
case 1227:
case 3868:
case 3996:
case 637:
case 3375:
case 1174:
case 2286:
case 2047:
case 1285:
case 2618:
case 73:
case 3770:
case 2463:
case 884:
case 2666:
case 3165:
case 616:
case 2624:
case 3194:
case 956:
case 241:
case 3219:
case 2612:
case 245:
case 2588:
case 673:
case 3816:
case 3856:
case 2975:
case 424:
case 925:
case 69:
case 1037:
case 2812:
case 1894:
case 2559:
case 2852:
case 2824:
case 2866:
case 1865:
case 3751:
case 1162:
case 546:
case 2748:
case 1378:
case 3392:
case 2269:
case 3413:
case 1116:
case 1577:
case 3288:
case 1156:
case 437:
case 2937:
case 2076:
case 2823:
case 3236:
case 3839:
case 492:
case 4031:
case 1030:
case 2478:
case 219:
case 3414:
case 3422:
case 3440:
case 1363:
case 1693:
case 2536:
case 4055:
case 2464:
case 1769:
case 2426:
case 135:
case 4015:
case 2703:
case 3072:
case 382:
case 582:
case 754:
case 1139:
case 818:
case 2309:
case 800:
case 1487:
case 2230:
case 3397:
case 3959:
case 3919:
case 1167:
case 1879:
case 1572:
case 2275:
case 1737:
case 2004:
case 2184:
case 995:
case 2817:
case 364:
case 564:
case 3386:
case 114:
case 2061:
case 3051:
case 1903:
case 3011:
case 2298:
case 4083:
case 2382:
case 3530:
case 2446:
case 3867:
case 3988:
case 917:
case 384:
case 2617:
case 2048:
case 657:
case 743:
case 2969:
case 4084:
case 518:
case 3390:
case 1160:
case 168:
case 1904:
case 300:
case 500:
case 710:
case 1730:
case 708:
case 1948:
case 3427:
case 2608:
case 3338:
case 2610:
case 870:
case 2728:
case 2650:
case 1798:
case 648:
case 3485:
case 4008:
case 2576:
case 967:
case 184:
case 2490:
case 3032:
case 1530:
case 1867:
case 1179:
case 4050:
case 3903:
case 1011:
case 2272:
case 164:
case 1386:
case 2977:
case 1442:
case 314:
case 514:
case 2385:
case 987:
case 4044:
case 729:
case 3276:
case 2327:
case 704:
case 3879:
case 1598:
case 3572:
case 4071:
case 1070:
case 2528:
case 1919:
case 3167:
case 4043:
case 2342:
case 2951:
case 2683:
case 780:
case 2150:
case 2108:
case 1427:
case 4017:
case 1338:
case 388:
case 588:
case 2497:
case 3948:
case 831:
case 3730:
case 2171:
case 2059:
case 760:
case 2970:
case 3775:
case 677:
case 568:
case 2144:
case 3961:
case 772:
case 1077:
case 1413:
case 2615:
case 1656:
case 2655:
case 1616:
case 146:
case 550:
case 2354:
case 3480:
case 2314:
case 2972:
case 2831:
case 3865:
case 3894:
case 3732:
case 44:
case 220:
case 1862:
case 3976:
case 1569:
case 1816:
case 2855:
case 1856:
case 2736:
case 1194:
case 1259:
case 940:
case 1219:
case 3364:
case 3694:
case 2152:
case 3301:
case 2166:
case 2340:
case 2124:
case 666:
case 639:
case 774:
case 3139:
case 868:
case 182:
case 2251:
case 642:
case 3425:
case 531:
case 2123:
case 535:
case 2788:
case 2561:
case 1193:
case 2313:
case 3511:
case 2353:
case 1422:
case 512:
case 269:
case 1839:
case 4024:
case 2759:
case 3030:
case 1414:
case 3261:
case 1777:
case 2235:
case 1236:
case 428:
case 607:
case 3075:
case 596:
case 1026:
case 3797:
case 1980:
case 2025:
case 723:
case 466:
case 3913:
case 1181:
case 439:
case 2096:
case 1095:
case 3953:
case 1337:
case 2087:
case 4018:
case 2246:
case 2107:
case 3786:
case 3220:
case 51:
case 217:
case 486:
case 3242:
case 1909:
case 855:
case 1476:
case 18:
case 2520:
case 1:
case 2430:
case 1078:
case 3546:
case 295:
case 2118:
case 1674:
case 3285:
case 628:
case 2158:
case 2745:
case 2376:
case 1746:
case 1987:
case 2901:
case 3940:
case 2995:
case 1868:
case 1996:
case 1641:
case 1925:
case 2080:
case 1330:
case 781:
case 785:
case 442:
case 3954:
case 2978:
case 1586:
case 1063:
case 2585:
case 3922:
case 765:
case 830:
case 2009:
case 2189:
case 2328:
case 3168:
case 2527:
case 1398:
case 1668:
case 3370:
case 1795:
case 2796:
case 2725:
case 526:
case 2469:
case 3097:
case 1726:
case 1280:
case 3247:
case 2691:
case 3335:
case 3563:
case 3920:
case 1606:
case 3086:
case 1621:
case 1134:
case 351:
case 1945:
case 2946:
case 3121:
case 355:
case 2787:
case 555:
case 941:
case 2082:
case 1332:
case 2553:
case 3942:
case 896:
case 225:
case 1778:
case 2348:
case 3419:
case 2547:
case 530:
case 330:
case 1046:
case 2554:
case 2432:
case 3090:
case 2829:
case 3377:
case 698:
case 738:
case 2226:
case 2264:
case 1296:
case 3833:
case 3038:
case 1763:
case 3222:
case 3254:
case 283:
case 1369:
case 2278:
case 175:
case 3501:
case 3595:
case 2303:
case 4002:
case 3436:
case 1404:
case 3564:
case 3526:
case 1997:
case 176:
case 3264:
case 3780:
case 3226:
case 2240:
case 2927:
case 3295:
case 629:
case 2833:
case 1753:
case 363:
case 4006:
case 230:
case 3514:
case 113:
case 604:
case 2578:
case 493:
case 1411:
case 1020:
case 962:
case 2595:
case 3540:
case 2501:
case 2436:
case 1525:
case 2526:
case 2038:
case 1388:
case 1470:
case 3629:
case 2222:
case 2199:
case 2254:
case 970:
case 1587:
case 383:
case 583:
case 2214:
case 2563:
case 2920:
case 2106:
case 2247:
case 3691:
case 2335:
case 1105:
case 2086:
case 1191:
case 251:
case 3787:
case 2634:
case 2488:
case 777:
case 1027:
case 3796:
case 891:
case 3725:
case 3469:
case 1754:
case 2459:
case 521:
case 2419:
case 2792:
case 325:
case 525:
case 356:
case 1580:
case 3513:
case 2942:
case 1053:
case 3995:
case 1013:
case 1297:
case 1600:
case 3926:
case 106:
case 3964:
case 1720:
case 3118:
case 1286:
case 423:
case 2174:
case 1618:
case 2285:
case 1047:
case 674:
case 2790:
case 40:
case 766:
case 3009:
case 3328:
case 3189:
case 1742:
case 2954:
case 786:
case 900:
case 3978:
case 1818:
case 658:
case 856:
case 3246:
case 2947:
case 167:
case 2220:
case 1785:
case 517:
case 3498:
case 821:
case 2797:
case 296:
case 825:
case 602:
case 1727:
case 2913:
case 707:
case 4041:
case 1040:
case 3542:
case 964:
case 187:
case 1238:
case 3430:
case 1545:
case 1014:
case 1054:
case 2881:
case 1149:
case 3649:
case 3475:
case 3782:
case 231:
case 2248:
case 1464:
case 3123:
case 4056:
case 2363:
case 3788:
case 74:
case 458:
case 2139:
case 1028:
case 389:
case 589:
case 2570:
case 3251:
case 3347:
case 3235:
case 623:
case 2893:
case 971:
case 60:
case 975:
case 2204:
case 3548:
case 2075:
case 3270:
case 3313:
case 3353:
case 569:
case 3719:
case 3492:
case 2030:
case 1478:
case 119:
case 1866:
case 4039:
case 2203:
case 3831:
case 3972:
case 2865:
case 2894:
case 447:
case 1519:
case 1155:
case 3615:
case 2156:
case 3354:
case 250:
case 1269:
case 3314:
case 1748:
case 1325:
case 3152:
case 2326:
case 1612:
case 3124:
case 1463:
case 3503:
case 3631:
case 2395:
case 3166:
case 2301:
case 3340:
case 1624:
case 1131:
case 1666:
case 520:
case 320:
case 1975:
case 1387:
case 2037:
case 2976:
case 1704:
case 2409:
case 3855:
case 1761:
case 3277:
case 681:
case 3815:
case 1844:
case 3088:
case 288:
case 2948:
case 1183:
case 3486:
case 3683:
case 2798:
case 1003:
case 1650:
case 1871:
case 1237:
case 2482:
case 905:
case 2160:
case 2346:
case 901:
case 67:
case 1808:
case 693:
case 3935:
case 2730:
case 1850:
case 3171:
case 1810:
case 733:
case 429:
case 3970:
case 2445:
case 1643:
case 2032:
case 1382:
case 3143:
case 2228:
case 2903:
case 1298:
case 1617:
case 1657:
case 1969:
case 3576:
case 480:
case 3327:
case 2572:
case 472:
case 798:
case 3528:
case 1843:
case 460:
case 9:
case 3385:
case 1061:
case 638:
case 4060:
case 1275:
case 3684:
case 2737:
case 2276:
case 1184:
case 794:
case 3671:
case 1019:
case 3850:
case 1171:
case 1320:
case 1144:
case 2936:
case 3644:
case 3237:
case 2660:
case 218:
case 779:
case 452:
case 3871:
case 1911:
case 3183:
case 1486:
case 1951:
case 2485:
case 1683:
case 2772:
case 2860:
case 819:
case 2427:
case 2338:
case 3608:
case 3857:
case 627:
case 3275:
case 1684:
case 3817:
case 3184:
case 408:
case 264:
case 2386:
case 1385:
case 722:
case 2397:
case 1528:
case 1327:
case 1438:
case 2070:
case 91:
case 2988:
case 3048:
case 841:
case 3657:
case 3969:
case 1576:
case 845:
case 2420:
case 1272:
case 3298:
case 2530:
case 3643:
case 1490:
case 1143:
case 2867:
case 1759:
case 2532:
case 1719:
case 3380:
case 1270:
case 1313:
case 1353:
case 724:
case 3076:
case 3937:
case 43:
case 3823:
case 1548:
case 2072:
case 1211:
case 282:
case 3028:
case 3232:
case 649:
case 1788:
case 3536:
case 930:
case 1123:
case 3464:
case 1855:
case 2735:
case 2816:
case 1736:
case 478:
case 792:
case 3975:
case 697:
case 120:
case 2862:
case 3387:
case 3704:
case 2569:
case 1631:
case 3463:
case 1503:
case 1124:
case 1166:
case 1340:
case 2770:
case 2165:
case 3131:
case 3624:
case 3666:
case 541:
case 2194:
case 632:
case 1152:
case 3612:
case 345:
case 1314:
case 3748:
case 2662:
case 2392:
case 4093:
case 2288:
case 1615:
case 2616:
case 3115:
case 2453:
case 1655:
case 926:
case 3519:
case 2447:
case 2711:
case 2751:
case 1972:
case 2586:
case 2063:
case 3858:
case 876:
case 1978:
case 3992:
case 201:
case 3742:
case 2668:
case 2398:
case 2282:
case 2597:
case 1437:
case 1328:
case 1189:
case 1745:
case 2375:
case 2987:
case 63:
case 2746:
case 1376:
case 3720:
case 1118:
case 1158:
case 3618:
case 3047:
case 3582:
case 3889:
case 506:
case 1926:
case 773:
case 1964:
case 1995:
case 2868:
case 79:
case 1901:
case 3013:
case 2996:
case 1475:
case 1782:
case 3149:
case 1649:
case 191:
case 3545:
case 2078:
case 195:
case 3807:
case 3054:
case 1520:
case 1963:
case 2:
case 387:
case 914:
case 1096:
case 1849:
case 2181:
case 3040:
case 2001:
case 2095:
case 2026:
case 2873:
case 2980:
case 2538:
case 3785:
case 26:
case 117:
case 3472:
case 2337:
case 2245:
case 1087:
case 271:
case 3587:
case 2369:
case 806:
case 3129:
case 1629:
case 2404:
case 3435:
case 1540:
case 912:
case 3596:
case 2133:
case 3986:
case 1522:
case 3451:
case 2899:
case 2046:
case 931:
case 434:
case 935:
case 2287:
case 2592:
case 72:
case 1201:
case 1295:
case 3359:
case 3997:
case 3319:
case 2448:
case 867:
case 1513:
case 1553:
case 540:
case 2209:
case 4033:
case 1263:
case 1891:
case 3754:
case 3714:
case 45:
case 2821:
case 2778:
case 3802:
case 1725:
case 2280:
case 3509:
case 3740:
case 2701:
case 1796:
case 887:
case 2134:
case 427:
case 2621:
case 1787:
case 1304:
case 1605:
case 1691:
case 610:
case 3336:
case 3191:
case 2606:
case 3223:
case 3908:
case 1716:
case 1835:
case 2239:
case 4003:
case 3950:
case 83:
case 1651:
case 1870:
case 1611:
case 3151:
case 552:
case 613:
case 3135:
case 3944:
case 2161:
case 2433:
case 2084:
case 2523:
case 2960:
case 3321:
case 953:
case 1811:
case 3170:
case 3429:
case 1851:
case 3765:
case 3539:
case 3971:
case 3491:
case 3405:
case 2512:
case 878:
case 1739:
case 939:
case 966:
case 3943:
case 1877:
case 1255:
case 2688:
case 1215:
case 3399:
case 3957:
case 180:
case 2262:
case 3917:
case 1169:
case 3212:
case 2619:
case 279:
case 3224:
case 3266:
case 1231:
case 854:
case 1402:
case 3562:
case 510:
case 4061:
case 1984:
case 3516:
case 2888:
case 2015:
case 3208:
case 3837:
case 1400:
case 1062:
case 3779:
case 1418:
case 4028:
case 3250:
case 2939:
case 2571:
case 1137:
case 2784:
case 1489:
case 33:
case 174:
case 4076:
case 2550:
case 199:
case 2510:
case 3094:
case 3830:
case 2389:
case 1039:
case 808:
case 2128:
case 1407:
case 1672:
case 2783:
case 3172:
case 687:
case 3875:
case 2962:
case 3257:
case 3217:
case 3093:
case 2481:
case 2916:
case 354:
case 2956:
case 102:
case 3924:
case 944:
case 1872:
case 3898:
case 770:
case 3912:
case 2267:
case 2300:
case 3952:
case 3374:
case 3449:
case 2318:
case 224:
case 2358:
case 2557:
case 1760:
case 2517:
case 2176:
case 667:
case 1626:
case 2941:
case 1423:
case 3164:
case 959:
case 2140:
case 2366:
case 2696:
case 3195:
case 2324:
case 1533:
case 1601:
case 76:
case 2493:
case 1365:
case 3081:
case 4047:
case 3599:
case 3734:
case 1878:
case 1721:
case 3892:
case 10:
case 2791:
case 1895:
case 1801:
case 7:
case 2896:
case 1073:
case 1826:
case 1864:
case 1229:
case 2122:
case 3356:
case 998:
case 3362:
case 3692:
case 2154:
case 1192:
case 549:
case 3178:
case 1863:
case 29:
case 2206:
case 597:
case 185:
case 2221:
case 273:
case 2113:
case 3455:
case 85:
case 3415:
case 332:
case 216:
case 1041:
case 1412:
case 1534:
case 165:
case 311:
case 2323:
case 161:
case 933:
case 1452:
case 3521:
case 4054:
case 3163:
case 2465:
case 1663:
case 701:
case 2880:
case 1949:
case 3733:
case 1408:
case 3781:
case 1197:
case 2882:
case 2589:
case 3697:
case 2241:
case 849:
case 3218:
case 2274:
case 413:
case 3483:
case 17:
case 2091:
case 334:
case 3686:
case 4020:
case 1450:
case 3034:
case 1410:
case 3897:
case 248:
case 3541:
case 2682:
case 1444:
case 1379:
case 2749:
case 2268:
case 928:
case 3574:
case 3886:
case 138:
case 1190:
case 203:
case 1646:
case 3207:
case 3690:
case 2921:
case 2645:
case 22:
case 1457:
case 1417:
case 3573:
case 94:
case 2308:
case 55:
case 257:
case 832:
case 3890:
case 1846:
case 1768:
case 1581:
case 1249:
case 3902:
case 2350:
case 2273:
case 2310:
case 483:
case 3929:
case 2885:
case 937:
case 3471:
case 3444:
case 3379:
case 2182:
case 1897:
case 2460:
case 3021:
case 2384:
case 3410:
case 393:
case 4045:
case 1483:
case 134:
case 1686:
case 1697:
case 1200:
case 1568:
case 2627:
case 2642:
case 2383:
case 1890:
case 3099:
case 2467:
case 3846:
case 1638:
case 924:
case 2281:
case 2842:
case 865:
case 3457:
case 3417:
case 1573:
case 2718:
case 3991:
case 127:
case 2620:
case 3905:
case 3190:
case 3646:
case 1146:
case 1690:
case 1360:
case 3443:
case 3678:
case 1692:
case 3192:
case 149:
case 1178:
case 253:
case 2654:
case 3229:
case 2355:
case 2622:
case 1316:
case 2315:
case 242:
case 2702:
case 893:
case 3826:
case 3864:
case 87:
case 3895:
case 689:
case 3801:
case 922:
case 4009:
case 3706:
case 207:
case 30:
case 2822:
case 1958:
case 2007:
case 1599:
case 796:
case 2439:
case 2814:
case 3878:
case 3721:
case 2187:
case 1195:
case 3533:
case 3601:
case 2331:
case 3695:
case 4080:
case 1081:
case 2125:
case 3394:
case 3626:
case 1164:
case 3423:
case 1900:
case 2813:
case 3068:
case 2089:
case 979:
case 1506:
case 3424:
case 1163:
case 994:
case 2591:
case 3663:
case 3799:
case 565:
case 3412:
case 111:
case 561:
case 1521:
case 2462:
case 3041:
case 266:
case 1455:
case 2653:
case 4025:
case 1415:
case 381:
case 581:
case 2234:
case 417:
case 385:
case 585:
case 1907:
case 2018:
case 3205:
case 620:
case 3291:
case 2583:
case 436:
case 469:
case 399:
case 599:
case 1094:
case 2468:
case 13:
case 3137:
case 3489:
case 1373:
case 2349:
case 3283:
case 2474:
case 3418:
case 1837:
case 1560:
case 3062:
case 1208:
case 3016:
case 2993:
case 2676:
case 2473:
case 1449:
case 712:
case 957:
case 880:
case 1912:
case 2828:
case 1966:
case 502:
case 302:
case 1924:
case 3872:
case 695:
case 154:
case 872:
case 1257:
case 2876:
case 1368:
case 347:
case 1172:
case 1830:
case 2750:
case 1243:
case 735:
case 2710:
case 860:
case 1794:
case 3067:
case 2499:
case 1832:
case 1971:
case 529:
case 329:
case 2752:
case 3811:
case 4059:
case 2724:
case 1429:
case 3670:
case 4019:
case 3851:
case 714:
case 1765:
case 3334:
case 1321:
case 2848:
case 504:
case 2391:
case 2136:
case 3870:
case 3651:
case 1111:
case 3983:
case 3611:
case 1079:
case 874:
case 2043:
case 1632:
case 1950:
case 259:
case 3132:
case 1908:
case 2861:
case 3716:
case 3835:
case 3756:
case 3762:
case 2017:
case 899:
case 1223:
case 2804:
case 1556:
case 847:
case 3677:
case 1562:
case 3402:
case 110:
case 3060:
case 360:
case 3984:
case 4036:
case 1224:
case 2803:
case 3231:
case 572:
case 372:
case 1212:
case 2071:
case 2159:
case 1252:
case 2119:
case 1669:
case 2723:
case 1917:
case 3169:
case 973:
case 2188:
case 3255:
case 99:
case 3594:
case 2010:
case 916:
case 788:
case 3739:
case 2050:
case 1943:
case 2406:
case 3333:
case 1491:
case 1405:
case 2603:
case 272:
case 2231:
case 626:
case 3265:
case 1619:
case 3071:
case 1967:
case 1888:
case 655:
case 84:
case 2677:
case 194:
case 2060:
case 911:
case 2402:
case 533:
case 2984:
case 1512:
case 1434:
case 2739:
case 3010:
case 2594:
case 3421:
case 1819:
case 1103:
case 1524:
case 3406:
case 1566:
case 3979:
case 2565:
case 3603:
case 3531:
case 3723:
case 2169:
case 2877:
case 997:
case 1256:
case 2334:
case 598:
case 3848:
case 1523:
case 1104:
case 1960:
case 949:
case 204:
case 1636:
case 1161:
case 468:
case 3136:
case 630:
case 1433:
case 3661:
case 3391:
case 2635:
case 3712:
case 2067:
case 1731:
case 2670:
case 122:
case 2851:
case 488:
case 1715:
case 3017:
case 3648:
case 1148:
case 2870:
case 1239:
case 1302:
case 2132:
case 359:
case 2130:
case 3994:
case 1543:
case 1267:
case 1300:
case 3828:
case 2579:
case 202:
case 2872:
case 2931:
case 3965:
case 2175:
case 3676:
case 1557:
case 3473:
case 2284:
case 1176:
case 1517:
case 95:
case 4037:
case 1318:
case 3744:
case 124:
case 1358:
case 34:
case 1783:
case 2672:
case 247:
case 2198:
case 3710:
case 1389:
case 2039:
case 1916:
case 927:
case 1956:
case 2915:
case 3023:
case 1962:
case 3584:
case 789:
case 4075:
case 3468:
case 274:
case 1307:
case 1260:
case 2489:
case 3583:
case 2381:
case 4030:
case 1031:
case 192:
case 3066:
case 3024:
case 1510:
case 2767:
case 299:
case 2400:
case 2016:
case 3743:
case 2418:
case 3349:
case 2283:
case 1729:
case 650:
case 1465:
case 4092:
case 2393:
case 2663:
case 3591:
case 2412:
case 1494:
case 2799:
case 910:
case 2452:
case 261:
case 2949:
case 586:
case 386:
case 3089:
case 3109:
case 281:
case 1221:
case 285:
case 1206:
case 19:
case 3058:
case 844:
case 2074:
case 3018:
case 2205:
case 3000:
case 2041:
case 3462:
case 1680:
case 1809:
case 3180:
case 0:
case 366:
case 3981:
case 3653:
case 3456:
case 3702:
case 791:
case 2864:
case 2826:
case 3840:
case 2895:
case 3233:
case 1049:
case 1154:
case 3614:
case 2678:
case 553:
case 3654:
case 2192:
case 1887:
case 2229:
case 3355:
case 1122:
case 342:
case 542:
case 631:
case 3315:
case 1324:
case 1140:
case 1696:
case 1366:
case 1493:
case 2365:
case 2601:
case 2533:
case 2626:
case 3125:
case 1352:
case 1941:
case 2423:
case 1625:
case 307:
case 507:
case 2706:
case 1705:
case 3822:
case 1791:
case 3007:
case 2721:
case 2099:
case 1507:
case 1308:
case 3820:
case 1029:
case 1273:
case 3789:
case 3383:
case 2768:
case 2581:
case 1142:
case 344:
case 544:
case 3718:
case 12:
case 1906:
case 2774:
case 3620:
case 2991:
case 4086:
case 3934:
case 886:
case 1645:
case 3281:
case 3549:
case 426:
case 2457:
case 2741:
case 1371:
case 2444:
case 1749:
case 2379:
case 3933:
case 721:
case 3182:
case 1343:
case 3460:
case 1518:
case 2929:
case 93:
case 3885:
case 756:
case 1999:
case 4038:
case 1241:
case 1589:
case 2408:
case 2021:
case 293:
case 27:
case 1274:
case 3685:
case 4090:
case 1091:
case 668:
case 2186:
case 1005:
case 2006:
case 377:
case 2573:
case 1281:
case 1549:
case 947:
case 1145:
case 776:
case 1934:
case 303:
case 503:
case 3645:
case 2207:
case 2690:
case 3479:
case 3906:
case 52:
case 1758:
case 2838:
case 2033:
case 1383:
case 1642:
case 3142:
case 144:
case 873:
case 1820:
case 3029:
case 816:
case 3274:
case 1685:
case 3091:
case 600:
case 3185:
case 4046:
case 234:
case 958:
case 1707:
case 1384:
case 2781:
case 3127:
case 3882:
case 3241:
case 3589:
case 3357:
case 3317:
case 2886:
case 471:
case 2897:
case 548:
case 1002:
case 3343:
case 3500:
case 2541:
case 3682:
case 1827:
case 3749:
case 1933:
case 1416:
case 3113:
case 2455:
case 1981:
case 1653:
case 857:
case 4064:
case 2415:
case 316:
case 516:
case 3680:
case 3809:
case 1180:
case 39:
case 3147:
case 1058:
case 297:
case 980:
case 46:
case 2907:
case 573:
case 373:
case 3221:
case 803:
case 2202:
case 3609:
case 3973:
case 3880:
case 972:
case 2521:
case 48:
case 3323:
case 3729:
case 2506:
case 1847:
case 1505:
case 4078:
case 2431:
case 2734:
case 848:
case 1439:
case 2599:
case 1814:
case 2918:
case 3974:
case 3705:
case 2958:
case 1822:
case 3312:
case 1125:
case 3941:
case 2900:
case 3625:
case 662:
case 3366:
case 1331:
case 2081:
case 1196:
case 1640:
case 1622:
case 2316:
case 1355:
case 2356:
case 1315:
case 3154:
case 1614:
case 2362:
case 3114:
case 2178:
case 249:
case 3049:
case 1233:
case 787:
case 3825:
case 682:
case 929:
case 2989:
case 1023:
case 938:
case 1584:
case 3916:
case 3481:
case 3956:
case 254:
case 1750:
case 1628:
case 14:
case 1279:
case 2368:
case 2698:
case 2172:
case 2374:
case 2449:
case 524:
case 66:
case 278:
case 719:
case 3176:
case 2924:
case 309:
case 2952:
case 2630:
case 3267:
case 2341:
case 1828:
case 2779:
case 1474:
case 3939:
case 1743:
case 2373:
case 2210:
case 3015:
case 2837:
case 1757:
case 993:
case 2923:
case 1441:
case 3510:
case 2271:
case 462:
case 1583:
case 3031:
case 392:
case 1066:
case 1024:
case 3784:
case 23:
case 2244:
case 3508:
case 1468:
case 470:
case 1329:
case 1188:
case 3216:
case 1008:
case 2793:
case 3688:
case 2917:
case 1723:
case 985:
case 3524:
case 1406:
case 3566:
case 1979:
case 3083:
case 1010:
case 4051:
case 1050:
case 3819:
case 210:
case 2869:
case 133:
case 961:
case 208:
case 464:
case 2516:
case 1555:
case 1044:
case 1515:
case 3619:
case 4070:
case 2212:
case 3659:
case 2252:
case 579:
case 379:
case 2266:
case 1803:
case 1265:
case 2950:
case 2632:
case 3239:
case 243:
case 2910:
case 2111:
case 2079:
case 252:
case 1017:
case 1648:
case 1804:
case 923:
case 2908:
case 3715:
case 892:
case 90:
case 3836:
case 1293:
case 1724:
case 2429:
case 1766:
case 2170:
case 522:
case 322:
case 1712:
case 2539:
case 1499:
case 1752:
case 400:
case 3636:
case 2135:
case 2306:
case 1136:
case 1661:
case 198:
case 4077:
case 1604:
case 2321:
case 1848:
case 3104:
case 3523:
case 3960:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1756908001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,];
var gg_b = "1756908001/";

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
