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
var o = 1;
switch (g) {
case 1559:
case 3372:
case 222:
case 2492:
case 2327:
case 2917:
case 993:
case 3689:
case 793:
case 2428:
case 2222:
case 3518:
case 3289:
case 3825:
case 3596:
case 3037:
case 3247:
case 3868:
case 2618:
case 575:
case 1506:
case 3959:
case 1846:
case 2486:
case 2795:
case 1615:
case 3416:
case 3549:
case 3512:
case 4058:
case 3952:
case 1421:
case 3077:
case 1204:
case 432:
case 3720:
case 557:
case 876:
case 1746:
case 2816:
case 1425:
case 3401:
case 1722:
case 3672:
case 3498:
case 2396:
case 1483:
case 3323:
case 1357:
case 3023:
case 2786:
case 3589:
case 357:
case 1700:
case 4073:
case 2633:
case 932:
case 345:
case 3044:
case 100:
case 2124:
case 326:
case 1370:
case 1601:
case 701:
case 3963:
case 883:
case 1804:
case 2243:
case 74:
case 785:
case 2147:
case 3623:
case 1972:
case 3501:
case 3677:
case 2557:
case 2214:
case 4040:
case 359:
case 811:
case 2219:
case 3796:
case 2652:
case 1143:
case 1729:
case 4036:
case 3643:
case 3888:
case 2360:
case 3776:
case 646:
case 962:
case 1424:
case 1038:
case 2211:
case 586:
case 2836:
case 2584:
case 2762:
case 1106:
case 2685:
case 2162:
case 3832:
case 1243:
case 2612:
case 3058:
case 3452:
case 2996:
case 3899:
case 427:
case 399:
case 2621:
case 949:
case 688:
case 3885:
case 2708:
case 3236:
case 3106:
case 2336:
case 1607:
case 723:
case 224:
case 530:
case 1664:
case 3321:
case 300:
case 664:
case 1653:
case 2436:
case 985:
case 1258:
case 423:
case 3192:
case 3503:
case 3522:
case 2789:
case 916:
case 2570:
case 2743:
case 2011:
case 3045:
case 1646:
case 3537:
case 3955:
case 1131:
case 576:
case 3719:
case 2957:
case 2613:
case 1089:
case 1502:
case 3173:
case 2522:
case 36:
case 1881:
case 1366:
case 183:
case 82:
case 191:
case 1046:
case 2659:
case 1927:
case 1674:
case 2217:
case 85:
case 2331:
case 3438:
case 2194:
case 3657:
case 1438:
case 88:
case 2822:
case 2592:
case 3078:
case 1077:
case 525:
case 1933:
case 2954:
case 1611:
case 2590:
case 277:
case 3221:
case 2047:
case 1979:
case 3390:
case 3568:
case 2741:
case 2974:
case 3951:
case 3741:
case 405:
case 783:
case 3100:
case 2050:
case 3227:
case 2624:
case 139:
case 3819:
case 2905:
case 987:
case 3172:
case 1977:
case 2363:
case 3403:
case 891:
case 1642:
case 2627:
case 1472:
case 394:
case 3091:
case 365:
case 1254:
case 3308:
case 2241:
case 1683:
case 1400:
case 3539:
case 3566:
case 3300:
case 487:
case 494:
case 2142:
case 426:
case 402:
case 1016:
case 1427:
case 3344:
case 3702:
case 1812:
case 339:
case 519:
case 2283:
case 1541:
case 2927:
case 1183:
case 542:
case 3309:
case 3081:
case 209:
case 3785:
case 1989:
case 669:
case 2389:
case 467:
case 1750:
case 398:
case 1743:
case 1922:
case 2916:
case 3523:
case 2774:
case 1164:
case 2945:
case 3598:
case 2654:
case 3820:
case 390:
case 1361:
case 1825:
case 3051:
case 3376:
case 3865:
case 1119:
case 1655:
case 2989:
case 4008:
case 3911:
case 2167:
case 3514:
case 3287:
case 208:
case 1411:
case 812:
case 2453:
case 3534:
case 929:
case 3896:
case 443:
case 1383:
case 3487:
case 685:
case 3771:
case 1829:
case 346:
case 2061:
case 2334:
case 2028:
case 1419:
case 2619:
case 1807:
case 3891:
case 566:
case 122:
case 2295:
case 2842:
case 1093:
case 2317:
case 2898:
case 1440:
case 3251:
case 3822:
case 2076:
case 2319:
case 3314:
case 2092:
case 1433:
case 3553:
case 900:
case 1216:
case 746:
case 1451:
case 2890:
case 1866:
case 886:
case 2498:
case 4045:
case 2959:
case 708:
case 740:
case 4064:
case 3330:
case 3095:
case 2827:
case 971:
case 2359:
case 672:
case 864:
case 560:
case 452:
case 1915:
case 2553:
case 2304:
case 3621:
case 3210:
case 3480:
case 3402:
case 2120:
case 3760:
case 3864:
case 61:
case 3936:
case 4076:
case 1439:
case 1950:
case 2251:
case 2703:
case 2784:
case 1014:
case 1376:
case 65:
case 1036:
case 699:
case 2723:
case 3312:
case 2195:
case 3995:
case 2420:
case 3890:
case 3957:
case 3862:
case 1197:
case 2790:
case 1011:
case 1753:
case 526:
case 1187:
case 732:
case 2480:
case 1791:
case 2302:
case 3470:
case 460:
case 3182:
case 1862:
case 979:
case 2065:
case 3433:
case 1147:
case 3351:
case 594:
case 1941:
case 1392:
case 2759:
case 2328:
case 1239:
case 3976:
case 2826:
case 1045:
case 4035:
case 1969:
case 3838:
case 865:
case 1718:
case 3331:
case 57:
case 3448:
case 1129:
case 1576:
case 3497:
case 2023:
case 3380:
case 1152:
case 3271:
case 3660:
case 2271:
case 4093:
case 964:
case 3965:
case 1371:
case 3282:
case 124:
case 2165:
case 1127:
case 3615:
case 3115:
case 3283:
case 4067:
case 1203:
case 1808:
case 1230:
case 1343:
case 3278:
case 2676:
case 3256:
case 4080:
case 3938:
case 591:
case 753:
case 1513:
case 976:
case 99:
case 1955:
case 2582:
case 695:
case 273:
case 1107:
case 136:
case 2085:
case 2307:
case 2792:
case 953:
case 3142:
case 3521:
case 1136:
case 1309:
case 3072:
case 1415:
case 1564:
case 2158:
case 3834:
case 1177:
case 954:
case 853:
case 1295:
case 2680:
case 1856:
case 714:
case 774:
case 3664:
case 3239:
case 817:
case 3747:
case 1823:
case 461:
case 5:
case 3454:
case 3847:
case 1205:
case 3494:
case 1044:
case 30:
case 2944:
case 867:
case 2290:
case 4074:
case 2640:
case 1048:
case 1228:
case 2724:
case 858:
case 3736:
case 2904:
case 1616:
case 3101:
case 254:
case 2333:
case 1959:
case 1481:
case 2394:
case 1189:
case 966:
case 1951:
case 1130:
case 1911:
case 1229:
case 3691:
case 2090:
case 3667:
case 3382:
case 1193:
case 181:
case 2604:
case 248:
case 454:
case 3267:
case 700:
case 3892:
case 1511:
case 896:
case 3874:
case 3083:
case 2184:
case 3053:
case 906:
case 1221:
case 537:
case 2012:
case 3502:
case 3618:
case 214:
case 4025:
case 559:
case 2122:
case 2014:
case 275:
case 3981:
case 3043:
case 373:
case 170:
case 298:
case 524:
case 2798:
case 3198:
case 1311:
case 855:
case 385:
case 582:
case 2692:
case 3228:
case 2052:
case 3445:
case 2609:
case 332:
case 1504:
case 3715:
case 1991:
case 2527:
case 1852:
case 4057:
case 2343:
case 480:
case 2727:
case 1331:
case 3348:
case 2484:
case 3388:
case 108:
case 2495:
case 1626:
case 1868:
case 3340:
case 2146:
case 2739:
case 3979:
case 759:
case 3790:
case 2471:
case 2440:
case 2512:
case 3038:
case 477:
case 86:
case 3477:
case 2401:
case 952:
case 2589:
case 297:
case 81:
case 3305:
case 610:
case 2936:
case 1848:
case 2520:
case 3180:
case 2183:
case 312:
case 523:
case 2605:
case 579:
case 1720:
case 2009:
case 1908:
case 1268:
case 1905:
case 2029:
case 1302:
case 3366:
case 1304:
case 1761:
case 3400:
case 267:
case 1698:
case 2942:
case 3007:
case 3226:
case 3958:
case 897:
case 2393:
case 2116:
case 2506:
case 1971:
case 1455:
case 1094:
case 149:
case 1957:
case 755:
case 294:
case 334:
case 3440:
case 2048:
case 3262:
case 229:
case 3926:
case 1688:
case 841:
case 2426:
case 3126:
case 555:
case 2981:
case 2870:
case 3622:
case 2346:
case 2456:
case 2675:
case 1393:
case 120:
case 3968:
case 592:
case 2487:
case 1085:
case 1307:
case 142:
case 1182:
case 1781:
case 311:
case 2424:
case 3284:
case 1690:
case 2277:
case 271:
case 1831:
case 1082:
case 3166:
case 779:
case 1648:
case 1259:
case 2430:
case 2423:
case 3580:
case 1111:
case 3682:
case 2450:
case 1461:
case 1443:
case 429:
case 486:
case 1535:
case 4081:
case 4071:
case 2196:
case 95:
case 1395:
case 3550:
case 1448:
case 1162:
case 3548:
case 1695:
case 147:
case 2552:
case 1832:
case 3751:
case 2350:
case 1394:
case 782:
case 1522:
case 1929:
case 2055:
case 1942:
case 1473:
case 16:
case 3369:
case 821:
case 280:
case 152:
case 3324:
case 2843:
case 3725:
case 3750:
case 1924:
case 1536:
case 3740:
case 369:
case 2404:
case 2875:
case 3724:
case 3432:
case 2399:
case 4047:
case 2161:
case 324:
case 1857:
case 3069:
case 3866:
case 2886:
case 671:
case 717:
case 3531:
case 2372:
case 2437:
case 3803:
case 3008:
case 1958:
case 2749:
case 367:
case 419:
case 2625:
case 1567:
case 2323:
case 2049:
case 2209:
case 2398:
case 800:
case 2832:
case 1346:
case 395:
case 3092:
case 2289:
case 1403:
case 158:
case 1884:
case 3050:
case 1650:
case 718:
case 283:
case 3609:
case 3872:
case 1806:
case 2030:
case 647:
case 3807:
case 3253:
case 1544:
case 471:
case 1022:
case 2192:
case 3799:
case 413:
case 680:
case 2475:
case 2977:
case 2103:
case 2657:
case 144:
case 1885:
case 1287:
case 572:
case 1200:
case 951:
case 1174:
case 2329:
case 3127:
case 3770:
case 1747:
case 2284:
case 842:
case 2128:
case 1780:
case 404:
case 1837:
case 2616:
case 2433:
case 2155:
case 719:
case 237:
case 3882:
case 2937:
case 2736:
case 3353:
case 67:
case 2242:
case 786:
case 1099:
case 1529:
case 1496:
case 1604:
case 83:
case 1879:
case 1510:
case 2991:
case 2464:
case 3047:
case 3130:
case 3572:
case 4056:
case 3444:
case 109:
case 1966:
case 213:
case 3849:
case 1839:
case 997:
case 735:
case 164:
case 804:
case 2479:
case 1906:
case 2823:
case 2776:
case 3513:
case 1697:
case 305:
case 2104:
case 1219:
case 1282:
case 3619:
case 636:
case 3869:
case 130:
case 3313:
case 2649:
case 689:
case 2463:
case 3505:
case 2038:
case 2768:
case 1740:
case 1418:
case 3254:
case 2238:
case 3472:
case 2397:
case 259:
case 1269:
case 844:
case 484:
case 1810:
case 2180:
case 3225:
case 565:
case 2859:
case 4021:
case 2636:
case 146:
case 796:
case 167:
case 1275:
case 1754:
case 2051:
case 3520:
case 959:
case 403:
case 757:
case 4060:
case 2256:
case 3019:
case 2650:
case 4077:
case 3336:
case 341:
case 1702:
case 321:
case 2729:
case 3412:
case 1312:
case 2111:
case 1863:
case 2410:
case 340:
case 1681:
case 1054:
case 2254:
case 3944:
case 3086:
case 3593:
case 3249:
case 492:
case 1871:
case 2149:
case 1990:
case 2303:
case 70:
case 1074:
case 2390:
case 50:
case 2109:
case 3273:
case 266:
case 3168:
case 3347:
case 2407:
case 2819:
case 3257:
case 1602:
case 361:
case 3187:
case 49:
case 3265:
case 1738:
case 1437:
case 3420:
case 1009:
case 2040:
case 1534:
case 2516:
case 2477:
case 247:
case 1649:
case 2164:
case 2361:
case 474:
case 946:
case 1889:
case 1286:
case 933:
case 437:
case 1587:
case 94:
case 2248:
case 3749:
case 974:
case 3490:
case 1065:
case 1056:
case 239:
case 1384:
case 3650:
case 2972:
case 4020:
case 1574:
case 2711:
case 943:
case 1097:
case 2855:
case 2824:
case 3637:
case 1365:
case 485:
case 3204:
case 202:
case 3928:
case 2207:
case 3476:
case 2431:
case 3798:
case 1883:
case 3506:
case 2133:
case 3666:
case 4019:
case 3033:
case 1543:
case 3591:
case 2694:
case 2007:
case 1485:
case 1800:
case 1139:
case 137:
case 742:
case 3035:
case 629:
case 1469:
case 3921:
case 808:
case 2864:
case 2318:
case 3011:
case 2999:
case 1803:
case 3758:
case 1208:
case 262:
case 4037:
case 1041:
case 749:
case 807:
case 1489:
case 2205:
case 35:
case 834:
case 1514:
case 2297:
case 2239:
case 2285:
case 2555:
case 973:
case 1545:
case 2235:
case 370:
case 2159:
case 2117:
case 1320:
case 1918:
case 3705:
case 2259:
case 2581:
case 3459:
case 3610:
case 105:
case 937:
case 1794:
case 1507:
case 1749:
case 2551:
case 3167:
case 235:
case 1880:
case 3140:
case 2532:
case 3431:
case 2245:
case 3175:
case 1952:
case 1321:
case 3442:
case 3234:
case 2679:
case 3577:
case 1798:
case 961:
case 1271:
case 329:
case 874:
case 69:
case 2831:
case 2001:
case 1391:
case 3449:
case 3259:
case 1326:
case 3690:
case 1264:
case 3587:
case 1053:
case 2775:
case 1279:
case 1676:
case 1732:
case 1261:
case 3421:
case 1789:
case 1013:
case 3430:
case 3602:
case 3391:
case 374:
case 2678:
case 1288:
case 2599:
case 336:
case 2634:
case 4072:
case 3557:
case 1325:
case 3561:
case 1075:
case 4059:
case 384:
case 1030:
case 2496:
case 3694:
case 9:
case 2800:
case 2939:
case 618:
case 192:
case 552:
case 3411:
case 2169:
case 1404:
case 331:
case 2358:
case 3961:
case 3022:
case 1396:
case 3845:
case 143:
case 1537:
case 1799:
case 661:
case 581:
case 2940:
case 1635:
case 2460:
case 3953:
case 3552:
case 3922:
case 3094:
case 2745:
case 1154:
case 3972:
case 392:
case 1542:
case 1515:
case 3946:
case 2483:
case 3002:
case 1171:
case 19:
case 1201:
case 3595:
case 1303:
case 261:
case 3787:
case 406:
case 4066:
case 724:
case 2511:
case 944:
case 3268:
case 3654:
case 829:
case 3679:
case 1811:
case 3581:
case 3335:
case 439:
case 3207:
case 2216:
case 863:
case 2629:
case 2961:
case 3570:
case 3756:
case 1308:
case 1241:
case 3241:
case 957:
case 2247:
case 2279:
case 1252:
case 3450:
case 1612:
case 2986:
case 1329:
case 3087:
case 942:
case 1144:
case 2549:
case 353:
case 3544:
case 1764:
case 1579:
case 1677:
case 491:
case 2301:
case 2857:
case 1701:
case 2979:
case 2411:
case 2740:
case 596:
case 2186:
case 482:
case 1931:
case 1680:
case 1027:
case 516:
case 627:
case 1527:
case 3773:
case 3688:
case 3296:
case 845:
case 2565:
case 2046:
case 3141:
case 3711:
case 1887:
case 835:
case 2735:
case 3146:
case 3301:
case 3853:
case 996:
case 304:
case 3560:
case 1492:
case 2908:
case 3697:
case 2535:
case 2804:
case 3379:
case 1412:
case 173:
case 644:
case 22:
case 351:
case 2566:
case 2591:
case 2757:
case 2034:
case 2150:
case 761:
case 1430:
case 880:
case 2533:
case 3112:
case 2173:
case 3006:
case 1117:
case 350:
case 2888:
case 1105:
case 2383:
case 3709:
case 3897:
case 3794:
case 2351:
case 1671:
case 72:
case 3224:
case 1474:
case 1034:
case 2731:
case 1021:
case 4004:
case 376:
case 3025:
case 2264:
case 2764:
case 2846:
case 299:
case 2348:
case 1057:
case 1500:
case 2469:
case 2349:
case 14:
case 3482:
case 2206:
case 204:
case 698:
case 2893:
case 1553:
case 3121:
case 939:
case 2814:
case 1096:
case 1986:
case 697:
case 3663:
case 3696:
case 2406:
case 3562:
case 2761:
case 1297:
case 924:
case 489:
case 347:
case 1214:
case 2461:
case 945:
case 895:
case 1631:
case 1172:
case 1774:
case 2156:
case 3000:
case 91:
case 450:
case 1709:
case 1128:
case 1771:
case 302:
case 2082:
case 1108:
case 1350:
case 2812:
case 3270:
case 455:
case 898:
case 1315:
case 3110:
case 3184:
case 2080:
case 3107:
case 2820:
case 2756:
case 3608:
case 1928:
case 1873:
case 255:
case 1426:
case 2294:
case 3629:
case 4089:
case 1477:
case 1423:
case 379:
case 290:
case 3408:
case 1035:
case 3457:
case 2022:
case 3414:
case 1344:
case 789:
case 1040:
case 3429:
case 2257:
case 2500:
case 1449:
case 2391:
case 2448:
case 2919:
case 564:
case 2177:
case 889:
case 212:
case 673:
case 3186:
case 3656:
case 2306:
case 3576:
case 927:
case 2191:
case 2608:
case 4049:
case 2747:
case 904:
case 3902:
case 289:
case 792:
case 2930:
case 2687:
case 655:
case 1844:
case 2968:
case 3701:
case 875:
case 3399:
case 41:
case 3507:
case 763:
case 2872:
case 3231:
case 221:
case 989:
case 1226:
case 739:
case 3780:
case 849:
case 3616:
case 435:
case 2753:
case 3970:
case 3230:
case 3098:
case 3055:
case 3133:
case 3079:
case 2499:
case 2839:
case 132:
case 465:
case 1853:
case 1126:
case 330:
case 3243:
case 679:
case 2844:
case 2140:
case 1909:
case 3213:
case 1736:
case 1486:
case 3276:
case 3703:
case 2746:
case 1669:
case 787:
case 2221:
case 663:
case 2992:
case 3018:
case 520:
case 1583:
case 3042:
case 2931:
case 2885:
case 3759:
case 3738:
case 2607:
case 1549:
case 2664:
case 1854:
case 2934:
case 3815:
case 1457:
case 190:
case 3792:
case 3409:
case 2148:
case 32:
case 2376:
case 562:
case 3202:
case 3319:
case 1274:
case 1118:
case 316:
case 1997:
case 598:
case 1156:
case 2671:
case 1196:
case 2282:
case 1600:
case 3887:
case 2880:
case 1920:
case 2113:
case 1407:
case 2807:
case 4006:
case 1401:
case 2059:
case 1158:
case 1084:
case 2503:
case 926:
case 2344:
case 1176:
case 2079:
case 1684:
case 3729:
case 504:
case 4052:
case 2313:
case 2494:
case 2261:
case 2829:
case 1327:
case 2068:
case 3212:
case 968:
case 260:
case 3511:
case 2525:
case 1225:
case 1078:
case 3737:
case 3607:
case 1163:
case 1170:
case 3436:
case 3339:
case 826:
case 2309:
case 2696:
case 2799:
case 2332:
case 3934:
case 1619:
case 2335:
case 3935:
case 2357:
case 1673:
case 2300:
case 3350:
case 1378:
case 2688:
case 174:
case 1734:
case 2540:
case 3722:
case 2796:
case 3527:
case 1195:
case 2062:
case 3716:
case 1503:
case 529:
case 386:
case 463:
case 1006:
case 532:
case 230:
case 2472:
case 1838:
case 1728:
case 2123:
case 1491:
case 1659:
case 3169:
case 1568:
case 2229:
case 1012:
case 1069:
case 80:
case 2462:
case 2622:
case 2175:
case 420:
case 343:
case 1348:
case 141:
case 2849:
case 2497:
case 1175:
case 2797:
case 3671:
case 3201:
case 3031:
case 3778:
case 2063:
case 641:
case 421:
case 3871:
case 2821:
case 56:
case 1714:
case 1232:
case 2125:
case 614:
case 2135:
case 2400:
case 2683:
case 1603:
case 3651:
case 2809:
case 678:
case 3843:
case 436:
case 3742:
case 1833:
case 1948:
case 3463:
case 3024:
case 2070:
case 1693:
case 92:
case 362:
case 1070:
case 2366:
case 1994:
case 3425:
case 422:
case 3971:
case 3984:
case 1263:
case 1260:
case 3464:
case 3217:
case 2315:
case 657:
case 2674:
case 1025:
case 682:
case 809:
case 2204:
case 2983:
case 631:
case 914:
case 1087:
case 3704:
case 412:
case 621:
case 3988:
case 1276:
case 3235:
case 2213:
case 3805:
case 220:
case 1061:
case 3183:
case 758:
case 442:
case 741:
case 528:
case 1341:
case 2459:
case 1752:
case 1713:
case 3176:
case 2507:
case 1265:
case 195:
case 2704:
case 2179:
case 1352:
case 3465:
case 2854:
case 764:
case 3540:
case 640:
case 3132:
case 2434:
case 1572:
case 1902:
case 1551:
case 372:
case 206:
case 3181:
case 956:
case 2375:
case 986:
case 3076:
case 3009:
case 3206:
case 587:
case 1188:
case 1621:
case 3061:
case 2883:
case 2227:
case 3291:
case 1137:
case 707:
case 3332:
case 2151:
case 2755:
case 3295:
case 810:
case 3673:
case 3536:
case 4078:
case 692:
case 2952:
case 1399:
case 2976:
case 501:
case 2818:
case 1813:
case 3103:
case 3138:
case 2422:
case 3404:
case 2521:
case 3407:
case 1907:
case 3642:
case 3635:
case 3831:
case 318:
case 3293:
case 2602:
case 1116:
case 3706:
case 507:
case 2538:
case 1644:
case 3753:
case 184:
case 2395:
case 634:
case 3905:
case 947:
case 2172:
case 1570:
case 905:
case 2767:
case 2265:
case 816:
case 684:
case 4075:
case 781:
case 3543:
case 3377:
case 670:
case 2817:
case 2201:
case 1115:
case 3524:
case 3526:
case 1186:
case 3419:
case 3685:
case 3782:
case 2392:
case 925:
case 3584:
case 1735:
case 702:
case 2505:
case 1926:
case 2439:
case 3286:
case 47:
case 823:
case 866:
case 1847:
case 1267:
case 2280:
case 1777:
case 418:
case 2691:
case 2510:
case 3880:
case 3001:
case 2473:
case 3969:
case 185:
case 2139:
case 2121:
case 1792:
case 1033:
case 303:
case 3707:
case 3070:
case 319:
case 1899:
case 3492:
case 518:
case 870:
case 1982:
case 2374:
case 2938:
case 3059:
case 1194:
case 1353:
case 2322:
case 269:
case 1125:
case 1793:
case 1528:
case 1523:
case 1072:
case 296:
case 2571:
case 1953:
case 1484:
case 1656:
case 3989:
case 3370:
case 743:
case 2083:
case 3653:
case 308:
case 3617:
case 1622:
case 2143:
case 3406:
case 3606:
case 2734:
case 568:
case 765:
case 2072:
case 2478:
case 107:
case 887:
case 3658:
case 265:
case 2967:
case 882:
case 915:
case 3712:
case 3152:
case 1725:
case 226:
case 580:
case 988:
case 1532:
case 1051:
case 4032:
case 893:
case 2086:
case 3299:
case 52:
case 3405:
case 2802:
case 2572:
case 2663:
case 1555:
case 157:
case 2850:
case 936:
case 431:
case 622:
case 25:
case 3765:
case 1842:
case 3504:
case 998:
case 3541:
case 45:
case 1563:
case 2545:
case 1538:
case 3117:
case 2416:
case 3546:
case 2815:
case 1428:
case 4010:
case 4012:
case 2896:
case 1336:
case 3468:
case 1850:
case 3395:
case 4030:
case 2260:
case 551:
case 1960:
case 2686:
case 690:
case 3848:
case 1667:
case 1388:
case 1687:
case 1582:
case 1613:
case 2531:
case 145:
case 1571:
case 3208:
case 193:
case 3275:
case 1717:
case 2379:
case 918:
case 3315:
case 2106:
case 4053:
case 1026:
case 704:
case 377:
case 264:
case 2287:
case 2036:
case 2631:
case 400:
case 3073:
case 1292:
case 1223:
case 2058:
case 3748:
case 1301:
case 991:
case 2785:
case 462:
case 1770:
case 3525:
case 66:
case 3156:
case 4048:
case 1305:
case 2596:
case 4095:
case 3852:
case 2750:
case 2198:
case 1912:
case 1380:
case 1993:
case 59:
case 972:
case 3375:
case 3674:
case 2502:
case 1550:
case 2805:
case 2865:
case 2114:
case 4091:
case 1246:
case 2073:
case 1436:
case 3917:
case 687:
case 3279:
case 2909:
case 2600:
case 1368:
case 3687:
case 1739:
case 857:
case 2218:
case 604:
case 3010:
case 3960:
case 2240:
case 354:
case 2316:
case 3592:
case 3458:
case 1783:
case 3451:
case 3977:
case 1212:
case 2427:
case 2228:
case 3460:
case 1140:
case 3129:
case 55:
case 2906:
case 1882:
case 3533:
case 3222:
case 17:
case 2365:
case 1888:
case 2268:
case 1596:
case 4015:
case 2067:
case 3328:
case 1801:
case 3159:
case 245:
case 2594:
case 3875:
case 805:
case 3397:
case 1533:
case 1682:
case 3987:
case 2728:
case 3817:
case 3272:
case 1285:
case 791:
case 2716:
case 2656:
case 3165:
case 360:
case 1202:
case 3554:
case 169:
case 231:
case 407:
case 3840:
case 165:
case 1984:
case 745:
case 101:
case 1460:
case 3185:
case 2136:
case 469:
case 1945:
case 1741:
case 1623:
case 250:
case 476:
case 1874:
case 1495:
case 2666:
case 2601:
case 3093:
case 2837:
case 2781:
case 3139:
case 241:
case 872:
case 691:
case 995:
case 3898:
case 1002:
case 2429:
case 1145:
case 3479:
case 801:
case 1452:
case 4084:
case 963:
case 3294:
case 1934:
case 3171:
case 513:
case 2672:
case 2100:
case 4003:
case 1340:
case 574:
case 521:
case 1463:
case 2154:
case 3258:
case 497:
case 4005:
case 3700:
case 161:
case 2615:
case 2529:
case 207:
case 333:
case 60:
case 3699:
case 3594:
case 1890:
case 1410:
case 1835:
case 424:
case 4013:
case 3060:
case 1531:
case 1123:
case 1191:
case 3013:
case 1606:
case 1917:
case 2388:
case 2131:
case 1896:
case 2950:
case 2758:
case 1446:
case 1020:
case 1347:
case 3603:
case 3966:
case 4028:
case 1245:
case 3781:
case 291:
case 2087:
case 4031:
case 3893:
case 2642:
case 1954:
case 2144:
case 219:
case 177:
case 3367:
case 2064:
case 3990:
case 4022:
case 3124:
case 2643:
case 166:
case 2035:
case 3065:
case 2137:
case 1141:
case 540:
case 3311:
case 1760:
case 2373:
case 2902:
case 2598:
case 3929:
case 1557:
case 295:
case 2504:
case 23:
case 3434:
case 2468:
case 1554:
case 113:
case 2003:
case 270:
case 1821:
case 3118:
case 3912:
case 1715:
case 1004:
case 3054:
case 1377:
case 1242:
case 3027:
case 3041:
case 3583:
case 3993:
case 1181:
case 716:
case 3381:
case 1745:
case 199:
case 977:
case 2695:
case 1479:
case 2718:
case 2806:
case 1830:
case 1614:
case 1482:
case 1161:
case 1974:
case 1374:
case 1359:
case 1192:
case 3244:
case 676:
case 662:
case 358:
case 1497:
case 1943:
case 4043:
case 806:
case 27:
case 1815:
case 633:
case 2084:
case 2308:
case 1851:
case 1913:
case 2465:
case 479:
case 2043:
case 3088:
case 288:
case 96:
case 4039:
case 561:
case 917:
case 2717:
case 1442:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1649739602/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,];
var gg_b = "1649739602/";

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
