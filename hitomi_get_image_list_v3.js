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
case 2683:
case 2900:
case 800:
case 3571:
case 241:
case 206:
case 3822:
case 1805:
case 1147:
case 3232:
case 775:
case 252:
case 2281:
case 256:
case 1286:
case 2797:
case 3241:
case 3915:
case 1465:
case 1495:
case 1571:
case 2311:
case 1444:
case 2731:
case 4083:
case 2334:
case 3580:
case 4071:
case 910:
case 2989:
case 728:
case 3647:
case 1525:
case 2895:
case 1316:
case 2401:
case 638:
case 2618:
case 831:
case 1917:
case 2346:
case 3644:
case 964:
case 1029:
case 3983:
case 1524:
case 1795:
case 2836:
case 3299:
case 2833:
case 1862:
case 1233:
case 3892:
case 356:
case 2785:
case 2717:
case 847:
case 636:
case 204:
case 1890:
case 1774:
case 3522:
case 114:
case 3578:
case 4057:
case 1390:
case 997:
case 2030:
case 1023:
case 3593:
case 3414:
case 1651:
case 2006:
case 1818:
case 1435:
case 2451:
case 1686:
case 2430:
case 2272:
case 4031:
case 1191:
case 2515:
case 2001:
case 293:
case 3501:
case 4008:
case 2023:
case 602:
case 816:
case 3628:
case 793:
case 2659:
case 1369:
case 511:
case 3961:
case 931:
case 2109:
case 226:
case 1979:
case 31:
case 789:
case 2700:
case 1782:
case 2648:
case 2742:
case 2403:
case 246:
case 966:
case 2230:
case 373:
case 275:
case 3739:
case 447:
case 801:
case 2017:
case 1302:
case 3833:
case 3199:
case 2070:
case 3814:
case 3636:
case 756:
case 1231:
case 3011:
case 3891:
case 369:
case 2696:
case 1110:
case 632:
case 2152:
case 541:
case 2180:
case 738:
case 2028:
case 3038:
case 3528:
case 3278:
case 2691:
case 3224:
case 3168:
case 4091:
case 1114:
case 3690:
case 2558:
case 759:
case 3990:
case 1240:
case 2242:
case 2813:
case 55:
case 2806:
case 231:
case 26:
case 2344:
case 3550:
case 2056:
case 697:
case 1428:
case 1246:
case 1060:
case 304:
case 1717:
case 2100:
case 1858:
case 3671:
case 718:
case 3300:
case 3328:
case 2606:
case 2907:
case 1313:
case 4034:
case 312:
case 3313:
case 3415:
case 2186:
case 3452:
case 2055:
case 3598:
case 1164:
case 14:
case 2337:
case 3963:
case 2036:
case 787:
case 1558:
case 171:
case 781:
case 3616:
case 590:
case 3659:
case 141:
case 2303:
case 1456:
case 128:
case 3544:
case 2220:
case 1596:
case 1552:
case 2536:
case 387:
case 2548:
case 2819:
case 1767:
case 932:
case 4007:
case 467:
case 4037:
case 1126:
case 753:
case 306:
case 2224:
case 1662:
case 3720:
case 520:
case 2483:
case 32:
case 2421:
case 1803:
case 3959:
case 1601:
case 2681:
case 4020:
case 1701:
case 63:
case 2658:
case 3309:
case 1852:
case 3405:
case 3058:
case 1498:
case 1477:
case 393:
case 3275:
case 2234:
case 3954:
case 1926:
case 1875:
case 4013:
case 588:
case 1309:
case 565:
case 2425:
case 3812:
case 1443:
case 2906:
case 2986:
case 922:
case 1735:
case 2441:
case 540:
case 3341:
case 1859:
case 2669:
case 1986:
case 892:
case 1835:
case 3827:
case 1622:
case 1817:
case 2060:
case 1214:
case 1517:
case 2084:
case 3936:
case 692:
case 1413:
case 798:
case 2468:
case 792:
case 2972:
case 537:
case 672:
case 1955:
case 3169:
case 1476:
case 118:
case 3437:
case 2132:
case 3496:
case 2312:
case 87:
case 3866:
case 722:
case 3681:
case 1582:
case 1145:
case 3529:
case 403:
case 2952:
case 3815:
case 39:
case 2975:
case 1179:
case 484:
case 2697:
case 888:
case 329:
case 3605:
case 2201:
case 1673:
case 2980:
case 1483:
case 315:
case 3531:
case 3884:
case 1468:
case 4081:
case 2619:
case 548:
case 3625:
case 3046:
case 2187:
case 843:
case 3327:
case 2993:
case 301:
case 886:
case 1899:
case 1238:
case 3306:
case 2103:
case 2510:
case 1095:
case 1604:
case 394:
case 287:
case 2462:
case 1237:
case 1513:
case 227:
case 3043:
case 3935:
case 1409:
case 3500:
case 3034:
case 335:
case 3311:
case 2589:
case 2182:
case 4094:
case 1370:
case 1733:
case 1222:
case 66:
case 2864:
case 2711:
case 200:
case 2716:
case 1226:
case 1936:
case 784:
case 1011:
case 120:
case 1178:
case 2522:
case 1915:
case 1989:
case 569:
case 1799:
case 144:
case 1148:
case 665:
case 61:
case 2051:
case 2762:
case 2145:
case 1207:
case 1229:
case 445:
case 3870:
case 3131:
case 1942:
case 47:
case 2400:
case 866:
case 713:
case 2559:
case 902:
case 1992:
case 3176:
case 771:
case 3359:
case 1536:
case 1038:
case 1077:
case 1215:
case 2177:
case 2567:
case 3363:
case 1255:
case 3312:
case 3448:
case 173:
case 595:
case 1022:
case 1259:
case 3122:
case 2730:
case 951:
case 2545:
case 991:
case 2482:
case 3894:
case 4049:
case 1691:
case 1867:
case 3994:
case 1506:
case 2473:
case 508:
case 1608:
case 3067:
case 554:
case 2446:
case 1623:
case 2597:
case 3156:
case 451:
case 3880:
case 1085:
case 2828:
case 3844:
case 456:
case 116:
case 149:
case 430:
case 584:
case 724:
case 420:
case 2199:
case 1678:
case 1881:
case 1411:
case 1535:
case 2584:
case 248:
case 2065:
case 2215:
case 1743:
case 2748:
case 372:
case 318:
case 3261:
case 1270:
case 3426:
case 3583:
case 635:
case 2390:
case 3425:
case 1657:
case 2715:
case 619:
case 269:
case 822:
case 1869:
case 2542:
case 3177:
case 3666:
case 2582:
case 2539:
case 2744:
case 1790:
case 3226:
case 1595:
case 2890:
case 3130:
case 2645:
case 3849:
case 2781:
case 324:
case 2204:
case 1455:
case 683:
case 737:
case 1336:
case 2381:
case 3386:
case 1830:
case 840:
case 1951:
case 3851:
case 3677:
case 2703:
case 2775:
case 1232:
case 2660:
case 3911:
case 3658:
case 1585:
case 280:
case 3115:
case 3540:
case 3289:
case 276:
case 2295:
case 2128:
case 422:
case 3296:
case 2105:
case 3750:
case 2188:
case 2133:
case 2393:
case 3249:
case 2974:
case 1471:
case 1563:
case 1561:
case 3316:
case 41:
case 2811:
case 1711:
case 1136:
case 3022:
case 3878:
case 2164:
case 1768:
case 3817:
case 601:
case 73:
case 3351:
case 1129:
case 2258:
case 1405:
case 604:
case 973:
case 2093:
case 1973:
case 2106:
case 2474:
case 3714:
case 1643:
case 3389:
case 1485:
case 3802:
case 1367:
case 358:
case 1566:
case 86:
case 242:
case 1749:
case 2780:
case 2197:
case 1057:
case 2300:
case 2069:
case 2231:
case 1396:
case 3264:
case 1436:
case 2831:
case 757:
case 1459:
case 2140:
case 666:
case 998:
case 3019:
case 2284:
case 375:
case 2976:
case 2270:
case 288:
case 3797:
case 442:
case 209:
case 145:
case 2405:
case 2903:
case 700:
case 429:
case 1826:
case 1340:
case 3993:
case 3953:
case 2600:
case 2163:
case 2323:
case 3184:
case 2225:
case 58:
case 3146:
case 777:
case 439:
case 1810:
case 3930:
case 2181:
case 2266:
case 767:
case 2969:
case 3192:
case 2444:
case 260:
case 3432:
case 3055:
case 2367:
case 2098:
case 563:
case 2307:
case 40:
case 2489:
case 3803:
case 1001:
case 522:
case 2552:
case 2504:
case 1840:
case 2262:
case 1987:
case 1916:
case 1791:
case 3091:
case 1305:
case 240:
case 1837:
case 2256:
case 3737:
case 1929:
case 2273:
case 3063:
case 362:
case 3057:
case 1668:
case 2918:
case 1772:
case 1797:
case 3365:
case 3159:
case 360:
case 2290:
case 622:
case 448:
case 3402:
case 3142:
case 428:
case 761:
case 3723:
case 4088:
case 3079:
case 1283:
case 2239:
case 2904:
case 1568:
case 238:
case 1472:
case 1205:
case 839:
case 2071:
case 3419:
case 977:
case 1964:
case 3218:
case 2363:
case 3181:
case 1235:
case 720:
case 94:
case 811:
case 923:
case 237:
case 844:
case 3354:
case 1168:
case 1740:
case 2471:
case 872:
case 735:
case 2372:
case 2223:
case 300:
case 3707:
case 3039:
case 2268:
case 16:
case 2261:
case 3890:
case 3795:
case 2979:
case 203:
case 49:
case 580:
case 562:
case 98:
case 2502:
case 3163:
case 734:
case 3123:
case 2391:
case 2293:
case 400:
case 165:
case 2117:
case 2306:
case 1224:
case 3912:
case 1341:
case 1287:
case 2253:
case 2485:
case 1364:
case 943:
case 2027:
case 762:
case 279:
case 3554:
case 3295:
case 2783:
case 3840:
case 361:
case 2074:
case 1527:
case 621:
case 1261:
case 1187:
case 628:
case 2778:
case 1470:
case 3494:
case 2923:
case 79:
case 1332:
case 504:
case 2636:
case 958:
case 2420:
case 858:
case 532:
case 2470:
case 970:
case 1133:
case 1100:
case 2528:
case 1358:
case 2977:
case 1248:
case 1503:
case 2205:
case 2110:
case 3768:
case 3239:
case 2546:
case 2908:
case 2460:
case 3751:
case 2005:
case 1924:
case 2191:
case 3096:
case 3874:
case 1844:
case 3258:
case 159:
case 1157:
case 325:
case 1755:
case 2041:
case 277:
case 3418:
case 2943:
case 1494:
case 1141:
case 1440:
case 1094:
case 2333:
case 2360:
case 2157:
case 3489:
case 2386:
case 89:
case 528:
case 2015:
case 3903:
case 1204:
case 643:
case 2111:
case 2354:
case 3769:
case 2228:
case 1291:
case 933:
case 1999:
case 3212:
case 1300:
case 3412:
case 1185:
case 1317:
case 1360:
case 2025:
case 2283:
case 3523:
case 2857:
case 709:
case 824:
case 698:
case 3773:
case 1384:
case 364:
case 172:
case 1201:
case 3221:
case 1737:
case 36:
case 4014:
case 868:
case 559:
case 2967:
case 3684:
case 3377:
case 2611:
case 3995:
case 1298:
case 1457:
case 3297:
case 3537:
case 969:
case 2588:
case 3668:
case 1294:
case 2605:
case 3204:
case 1194:
case 1308:
case 1325:
case 1177:
case 3428:
case 4000:
case 434:
case 2189:
case 2209:
case 2626:
case 1153:
case 2035:
case 3246:
case 2769:
case 575:
case 919:
case 2310:
case 2635:
case 2521:
case 780:
case 316:
case 3444:
case 2809:
case 3116:
case 3704:
case 3830:
case 512:
case 2227:
case 3290:
case 2434:
case 2054:
case 1184:
case 3129:
case 1580:
case 3809:
case 1670:
case 597:
case 1928:
case 1122:
case 1715:
case 2672:
case 3719:
case 3337:
case 3782:
case 1072:
case 1508:
case 1676:
case 82:
case 2361:
case 201:
case 469:
case 232:
case 486:
case 3147:
case 564:
case 2048:
case 3000:
case 25:
case 3202:
case 2159:
case 3269:
case 2174:
case 90:
case 1918:
case 2984:
case 3881:
case 3478:
case 3581:
case 856:
case 2513:
case 3216:
case 3324:
case 4050:
case 935:
case 3748:
case 3393:
case 1732:
case 1510:
case 88:
case 2910:
case 1624:
case 3260:
case 3977:
case 1654:
case 2325:
case 3214:
case 561:
case 3741:
case 466:
case 2724:
case 2271:
case 518:
case 2959:
case 2790:
case 2942:
case 558:
case 3251:
case 3217:
case 2628:
case 2264:
case 3329:
case 2246:
case 2043:
case 2321:
case 1451:
case 2803:
case 322:
case 1816:
case 2313:
case 2298:
case 2475:
case 3134:
case 2374:
case 835:
case 1479:
case 1362:
case 1461:
case 3876:
case 3317:
case 2564:
case 909:
case 3918:
case 2408:
case 1718:
case 4069:
case 3867:
case 1716:
case 3174:
case 2275:
case 2382:
case 3909:
case 239:
case 3634:
case 2219:
case 3766:
case 1223:
case 412:
case 3589:
case 4041:
case 244:
case 3700:
case 2457:
case 2120:
case 3548:
case 194:
case 526:
case 476:
case 832:
case 514:
case 2495:
case 449:
case 3742:
case 3834:
case 3676:
case 874:
case 2299:
case 3385:
case 963:
case 4062:
case 2194:
case 1310:
case 2072:
case 3626:
case 452:
case 3734:
case 2019:
case 2726:
case 992:
case 3081:
case 794:
case 2826:
case 3916:
case 258:
case 44:
case 3965:
case 805:
case 3492:
case 3259:
case 255:
case 2723:
case 3564:
case 1860:
case 1724:
case 2746:
case 745:
case 2602:
case 1212:
case 2412:
case 4015:
case 2848:
case 938:
case 1279:
case 3220:
case 1484:
case 2799:
case 3632:
case 3832:
case 1823:
case 3406:
case 1027:
case 2991:
case 3847:
case 2569:
case 2062:
case 2955:
case 1640:
case 3029:
case 613:
case 1189:
case 3836:
case 3323:
case 2947:
case 3948:
case 1930:
case 4016:
case 1217:
case 3667:
case 905:
case 976:
case 3567:
case 1125:
case 441:
case 3767:
case 743:
case 1822:
case 3597:
case 524:
case 2917:
case 2076:
case 2789:
case 3969:
case 2514:
case 475:
case 2798:
case 3350:
case 1944:
case 20:
case 261:
case 3023:
case 3344:
case 2670:
case 3730:
case 1642:
case 3453:
case 126:
case 2134:
case 2058:
case 1847:
case 2442:
case 2997:
case 1473:
case 3893:
case 547:
case 3446:
case 125:
case 2782:
case 2395:
case 924:
case 386:
case 4082:
case 1131:
case 2095:
case 2125:
case 3854:
case 3456:
case 3175:
case 3885:
case 1299:
case 1906:
case 509:
case 2328:
case 495:
case 877:
case 2934:
case 1577:
case 3083:
case 3591:
case 3906:
case 3243:
case 3408:
case 195:
case 2033:
case 163:
case 91:
case 122:
case 3484:
case 862:
case 837:
case 2469:
case 1615:
case 1:
case 330:
case 2144:
case 250:
case 3372:
case 2507:
case 556:
case 161:
case 1663:
case 1115:
case 2096:
case 3687:
case 3521:
case 3503:
case 817:
case 1664:
case 1320:
case 1758:
case 3674:
case 833:
case 2278:
case 1271:
case 1889:
case 233:
case 3488:
case 53:
case 3943:
case 1677:
case 2213:
case 421:
case 271:
case 2235:
case 4019:
case 3989:
case 1329:
case 2063:
case 918:
case 1630:
case 1617:
case 2842:
case 3640:
case 2654:
case 2067:
case 3889:
case 1381:
case 3191:
case 2738:
case 3486:
case 2936:
case 513:
case 1570:
case 46:
case 2415:
case 3691:
case 571:
case 1734:
case 2342:
case 33:
case 2458:
case 3865:
case 733:
case 940:
case 3133:
case 3025:
case 1914:
case 1798:
case 1888:
case 651:
case 2138:
case 1646:
case 3315:
case 1814:
case 631:
case 2000:
case 1586:
case 2897:
case 1028:
case 3565:
case 411:
case 2722:
case 1948:
case 70:
case 2678:
case 1721:
case 1447:
case 1900:
case 707:
case 708:
case 2845:
case 1198:
case 2932:
case 417:
case 3596:
case 2764:
case 1667:
case 213:
case 1108:
case 433:
case 1356:
case 1514:
case 920:
case 1123:
case 3470:
case 405:
case 1199:
case 355:
case 2585:
case 2176:
case 3114:
case 2707:
case 3066:
case 3467:
case 117:
case 2557:
case 609:
case 1101:
case 4024:
case 2166:
case 365:
case 3053:
case 3178:
case 1807:
case 2276:
case 857:
case 4033:
case 2855:
case 2509:
case 996:
case 3112:
case 4009:
case 3682:
case 739:
case 154:
case 1480:
case 4076:
case 2407:
case 3457:
case 2994:
case 374:
case 328:
case 3744:
case 2192:
case 1744:
case 2087:
case 2190:
case 953:
case 2097:
case 22:
case 2568:
case 3808:
case 2992:
case 624:
case 965:
case 2816:
case 539:
case 2856:
case 3257:
case 4068:
case 731:
case 3845:
case 1249:
case 343:
case 3952:
case 2899:
case 2274:
case 677:
case 1927:
case 2124:
case 2229:
case 859:
case 303:
case 3514:
case 2637:
case 2531:
case 763:
case 1591:
case 3789:
case 3862:
case 1292:
case 1993:
case 3092:
case 76:
case 530:
case 473:
case 2254:
case 627:
case 0:
case 35:
case 2416:
case 2787:
case 1696:
case 744:
case 3728:
case 3805:
case 812:
case 281:
case 436:
case 305:
case 1952:
case 3506:
case 1893:
case 3268:
case 2929:
case 2212:
case 2530:
case 995:
case 2772:
case 290:
case 2459:
case 3934:
case 4030:
case 197:
case 851:
case 1603:
case 3765:
case 1225:
case 2317:
case 177:
case 2638:
case 2922:
case 1666:
case 187:
case 908:
case 3717:
case 2080:
case 3637:
case 3108:
case 2866:
case 3823:
case 1550:
case 1432:
case 3333:
case 599:
case 3008:
case 1834:
case 3696:
case 1509:
case 1290:
case 2428:
case 2130:
case 1289:
case 2838:
case 2431:
case 3378:
case 1988:
case 796:
case 2741:
case 292:
case 3196:
case 2688:
case 585:
case 3207:
case 2702:
case 3572:
case 887:
case 480:
case 1874:
case 212:
case 3788:
case 3270:
case 3170:
case 1427:
case 2079:
case 3729:
case 2802:
case 808:
case 2156:
case 752:
case 2064:
case 465:
case 2835:
case 3561:
case 435:
case 2735:
case 2279:
case 4044:
case 2549:
case 4051:
case 3519:
case 3111:
case 2426:
case 1460:
case 2218:
case 2535:
case 1068:
case 384:
case 2625:
case 688:
case 942:
case 1454:
case 1897:
case 674:
case 1954:
case 626:
case 1268:
case 2357:
case 1764:
case 1612:
case 3804:
case 603:
case 2728:
case 406:
case 378:
case 2849:
case 4060:
case 2257:
case 3463:
case 3743:
case 494:
case 2998:
case 272:
case 2039:
case 552:
case 2779:
case 2633:
case 1882:
case 1333:
case 662:
case 380:
case 3949:
case 1371:
case 1560:
case 24:
case 2324:
case 1015:
case 1783:
case 654:
case 54:
case 3569:
case 1921:
case 2921:
case 1385:
case 2467:
case 3185:
case 155:
case 1024:
case 2743:
case 1386:
case 2091:
case 2773:
case 3420:
case 2945:
case 1042:
case 3558:
case 2436:
case 1959:
case 3787:
case 2647:
case 1236:
case 1628:
case 2245:
case 936:
case 1082:
case 3401:
case 1968:
case 3497:
case 791:
case 12:
case 1905:
case 1873:
case 2859:
case 3427:
case 1078:
case 523:
case 2612:
case 3786:
case 1347:
case 1970:
case 3722:
case 3979:
case 3060:
case 2695:
case 2114:
case 4028:
case 956:
case 2232:
case 2267:
case 2578:
case 56:
case 2378:
case 1196:
case 1306:
case 4077:
case 1581:
case 2901:
case 1784:
case 3937:
case 2500:
case 2318:
case 2581:
case 3155:
case 669:
case 2810:
case 1516:
case 51:
case 3613:
case 2316:
case 3504:
case 3820:
case 1026:
case 3179:
case 1162:
case 2244:
case 3967:
case 1304:
case 515:
case 786:
case 1748:
case 3047:
case 296:
case 2995:
case 2455:
case 3848:
case 4036:
case 1556:
case 2720:
case 2761:
case 3649:
case 2874:
case 2112:
case 1966:
case 3538:
case 1254:
case 3694:
case 2478:
case 806:
case 2265:
case 809:
case 2149:
case 3126:
case 4035:
case 3883:
case 670:
case 491:
case 314:
case 3759:
case 647:
case 2846:
case 1850:
case 3711:
case 3971:
case 3037:
case 3:
case 3487:
case 336:
case 934:
case 1438:
case 2081:
case 1710:
case 3346:
case 1397:
case 2912:
case 1128:
case 3459:
case 115:
case 849:
case 3120:
case 2576:
case 747:
case 2343:
case 2596:
case 988:
case 2758:
case 2385:
case 885:
case 968:
case 2721:
case 2684:
case 3305:
case 1382:
case 3941:
case 1611:
case 3622:
case 42:
case 961:
case 2018:
case 323:
case 229:
case 1050:
case 971:
case 2082:
case 2677:
case 1605:
case 3070:
case 2734:
case 1424:
case 1144:
case 1808:
case 1301:
case 980:
case 11:
case 167:
case 2251:
case 2641:
case 2249:
case 1006:
case 2745:
case 1211:
case 502:
case 3367:
case 2573:
case 2285:
case 3763:
case 815:
case 2376:
case 2503:
case 3986:
case 2492:
case 3072:
case 460:
case 482:
case 3475:
case 3285:
case 3235:
case 106:
case 3843:
case 848:
case 2668:
case 1555:
case 127:
case 660:
case 156:
case 2147:
case 2752:
case 4072:
case 2104:
case 2650:
case 1610:
case 190:
case 284:
case 1593:
case 1625:
case 2863:
case 765:
case 29:
case 1020:
case 3942:
case 2876:
case 3031:
case 1824:
case 3974:
case 3227:
case 2083:
case 726:
case 1106:
case 1587:
case 529:
case 1687:
case 1694:
case 3857:
case 3424:
case 108:
case 1861:
case 2944:
case 960:
case 496:
case 1426:
case 1967:
case 3875:
case 1296:
case 3248:
case 179:
case 2896:
case 283:
case 1150:
case 1671:
case 850:
case 418:
case 75:
case 785:
case 1075:
case 332:
case 2667:
case 614:
case 3716:
case 3471:
case 3586:
case 3303:
case 3044:
case 1616:
case 1154:
case 4084:
case 2501:
case 3477:
case 3005:
case 1324:
case 675:
case 1355:
case 1453:
case 1097:
case 2713:
case 3049:
case 568:
case 3584:
case 2841:
case 2505:
case 289:
case 1210:
case 533:
case 981:
case 3831:
case 3715:
case 1950:
case 3183:
case 2999:
case 3800:
case 1746:
case 2339:
case 795:
case 2609:
case 1648:
case 2939:
case 1620:
case 1885:
case 1689:
case 878:
case 367:
case 1828:
case 2146:
case 1049:
case 1488:
case 2050:
case 828:
case 3104:
case 2704:
case 3498:
case 1421:
case 3090:
case 2142:
case 2964:
case 2554:
case 3084:
case 1099:
case 3352:
case 2737:
case 525:
case 3568:
case 234:
case 912:
case 3030:
case 3998:
case 321:
case 3712:
case 1346:
case 399:
case 3454:
case 1631:
case 254:
case 1263:
case 3061:
case 1272:
case 3680:
case 2352:
case 1984:
case 2348:
case 3100:
case 30:
case 2587:
case 3981:
case 2788:
case 4061:
case 3160:
case 2739:
case 19:
case 1161:
case 4021:
case 2397:
case 339:
case 3920:
case 2464:
case 1886:
case 2694:
case 776:
case 1636:
case 1422:
case 3699:
case 1448:
case 1088:
case 917:
case 2837:
case 1496:
case 1389:
case 1043:
case 3128:
case 3434:
case 2102:
case 2865:
case 2078:
case 2398:
case 3778:
case 984:
case 1107:
case 2757:
case 760:
case 650:
case 3559:
case 2673:
case 1228:
case 2666:
case 2651:
case 2066:
case 1041:
case 1653:
case 2807:
case 1842:
case 2665:
case 701:
case 1876:
case 382:
case 3033:
case 3095:
case 2305:
case 2941:
case 1165:
case 3672:
case 285:
case 1056:
case 949:
case 897:
case 450:
case 625:
case 3480:
case 3740:
case 202:
case 2237:
case 2450:
case 2938:
case 2607:
case 680:
case 3403:
case 3747:
case 1574:
case 381:
case 18:
case 1002:
case 2881:
case 898:
case 1111:
case 600:
case 3841:
case 3353:
case 1170:
case 544:
case 2488:
case 137:
case 1221:
case 189:
case 3910:
case 157:
case 3609:
case 2384:
case 1778:
case 974:
case 2143:
case 2094:
case 3631:
case 1343:
case 103:
case 2003:
case 3404:
case 1947:
case 2560:
case 521:
case 4012:
case 2815:
case 3293:
case 772:
case 2185:
case 1629:
case 210:
case 1812:
case 685:
case 593:
case 431:
case 462:
case 2255:
case 2771:
case 545:
case 3520:
case 3951:
case 829:
case 810:
case 3098:
case 3429:
case 2556:
case 2749:
case 2630:
case 1174:
case 1946:
case 1641:
case 2217:
case 2608:
case 2424:
case 3976:
case 3811:
case 3555:
case 3879:
case 1058:
case 911:
case 596:
case 671:
case 517:
case 1553:
case 1766:
case 1965:
case 873:
case 4065:
case 797:
case 1741:
case 2280:
case 1820:
case 3604:
case 1975:
case 1712:
case 3826:
case 2139:
case 2365:
case 3686:
case 882:
case 3824:
case 3779:
case 1652:
case 2427:
case 894:
case 921:
case 3868:
case 1708:
case 223:
case 3151:
case 1414:
case 3530:
case 3650:
case 2088:
case 883:
case 133:
case 3944:
case 1116:
case 3433:
case 4090:
case 251:
case 308:
case 2448:
case 3755:
case 3599:
case 1821:
case 819:
case 2708:
case 1602:
case 3829:
case 1963:
case 3799:
case 1695:
case 543:
case 1548:
case 2770:
case 1030:
case 664:
case 3764:
case 591:
case 3322:
case 2622:
case 605:
case 679:
case 3335:
case 3371:
case 2233:
case 3438:
case 1531:
case 3771:
case 1528:
case 1985:
case 349:
case 3205:
case 146:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1664784002/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,];
var gg_b = "1664784002/";

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
