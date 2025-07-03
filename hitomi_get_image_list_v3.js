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
case 2375:
case 2007:
case 792:
case 1749:
case 2536:
case 2283:
case 970:
case 1410:
case 3804:
case 2820:
case 110:
case 267:
case 1033:
case 2244:
case 1167:
case 1819:
case 1531:
case 3423:
case 2805:
case 2050:
case 121:
case 3316:
case 3308:
case 1229:
case 1887:
case 2750:
case 3725:
case 2112:
case 1864:
case 3918:
case 1060:
case 3546:
case 4046:
case 1646:
case 438:
case 1444:
case 3150:
case 1951:
case 2696:
case 862:
case 25:
case 2688:
case 2494:
case 2358:
case 2641:
case 3842:
case 2577:
case 4091:
case 1691:
case 105:
case 2956:
case 900:
case 3878:
case 0:
case 1085:
case 640:
case 1049:
case 3124:
case 316:
case 3217:
case 4070:
case 3570:
case 1670:
case 4077:
case 3577:
case 3210:
case 2591:
case 982:
case 2700:
case 376:
case 3358:
case 1541:
case 3641:
case 3724:
case 2462:
case 2217:
case 2093:
case 2495:
case 2570:
case 1901:
case 2234:
case 2878:
case 1043:
case 3707:
case 2252:
case 52:
case 216:
case 2906:
case 88:
case 460:
case 100:
case 2316:
case 734:
case 341:
case 1596:
case 1067:
case 40:
case 16:
case 3494:
case 836:
case 626:
case 3235:
case 751:
case 3202:
case 2546:
case 157:
case 2374:
case 367:
case 1784:
case 1039:
case 2057:
case 3961:
case 1160:
case 1767:
case 2012:
case 3832:
case 2423:
case 3050:
case 689:
case 975:
case 1434:
case 3007:
case 1743:
case 4036:
case 539:
case 1973:
case 2289:
case 2245:
case 3283:
case 2793:
case 3799:
case 115:
case 910:
case 1262:
case 288:
case 3024:
case 1149:
case 2804:
case 306:
case 2000:
case 2855:
case 3820:
case 4028:
case 447:
case 3361:
case 2035:
case 3439:
case 2621:
case 2433:
case 3144:
case 688:
case 1803:
case 1450:
case 707:
case 3815:
case 3789:
case 3034:
case 599:
case 3830:
case 1285:
case 3052:
case 3975:
case 3538:
case 4038:
case 1638:
case 184:
case 2299:
case 3183:
case 1424:
case 2189:
case 2837:
case 146:
case 1859:
case 2010:
case 920:
case 125:
case 2814:
case 3356:
case 2710:
case 2224:
case 3200:
case 2581:
case 1301:
case 3717:
case 3110:
case 2876:
case 2207:
case 3752:
case 3089:
case 3045:
case 616:
case 1871:
case 2572:
case 2318:
case 3847:
case 794:
case 461:
case 2908:
case 3135:
case 896:
case 1890:
case 3467:
case 3212:
case 2548:
case 1233:
case 3686:
case 1586:
case 2840:
case 1123:
case 2044:
case 3257:
case 2225:
case 2102:
case 3916:
case 1723:
case 556:
case 240:
case 3572:
case 3306:
case 3460:
case 1897:
case 1239:
case 3735:
case 2484:
case 3702:
case 2257:
case 676:
case 2212:
case 1351:
case 4048:
case 1648:
case 326:
case 65:
case 3224:
case 3152:
case 901:
case 2356:
case 2863:
case 3869:
case 57:
case 2734:
case 2443:
case 3485:
case 3083:
case 2045:
case 3449:
case 2110:
case 5:
case 1493:
case 3876:
case 3299:
case 1762:
case 2789:
case 2034:
case 732:
case 389:
case 2052:
case 3010:
case 1968:
case 3814:
case 3145:
case 560:
case 793:
case 1366:
case 2526:
case 1267:
case 606:
case 111:
case 1521:
case 1457:
case 1194:
case 925:
case 1023:
case 946:
case 2363:
case 1523:
case 3431:
case 3623:
case 2629:
case 1186:
case 3942:
case 576:
case 1021:
case 3535:
case 4035:
case 1635:
case 4002:
case 3502:
case 721:
case 3376:
case 3748:
case 3978:
case 1288:
case 32:
case 809:
case 3781:
case 67:
case 1397:
case 3818:
case 6:
case 4010:
case 3510:
case 1610:
case 2291:
case 2181:
case 133:
case 2552:
case 55:
case 3340:
case 2270:
case 1562:
case 3662:
case 2861:
case 705:
case 3695:
case 3126:
case 934:
case 3236:
case 3583:
case 1683:
case 660:
case 2589:
case 3228:
case 60:
case 1919:
case 2315:
case 2496:
case 3048:
case 339:
case 2330:
case 398:
case 1721:
case 1644:
case 3955:
case 2920:
case 1866:
case 261:
case 3314:
case 665:
case 298:
case 1086:
case 588:
case 1098:
case 2544:
case 3496:
case 1873:
case 2048:
case 1594:
case 239:
case 700:
case 14:
case 3330:
case 151:
case 361:
case 1121:
case 2337:
case 76:
case 3920:
case 2904:
case 819:
case 927:
case 2583:
case 1689:
case 3861:
case 1913:
case 2081:
case 3441:
case 828:
case 638:
case 2228:
case 3932:
case 3905:
case 2277:
case 1428:
case 3291:
case 715:
case 3347:
case 1371:
case 3026:
case 2806:
case 2340:
case 3534:
case 1390:
case 1436:
case 3148:
case 1382:
case 3856:
case 1992:
case 3363:
case 992:
case 2623:
case 516:
case 2535:
case 3246:
case 2376:
case 1786:
case 3170:
case 2791:
case 3028:
case 844:
case 784:
case 3777:
case 83:
case 406:
case 1624:
case 3524:
case 1971:
case 2500:
case 725:
case 2940:
case 2177:
case 4007:
case 1990:
case 526:
case 21:
case 3272:
case 1982:
case 1650:
case 4050:
case 3550:
case 1365:
case 2525:
case 545:
case 2969:
case 3963:
case 1392:
case 1796:
case 1811:
case 2633:
case 3639:
case 107:
case 993:
case 467:
case 2746:
case 771:
case 2046:
case 194:
case 701:
case 3486:
case 1221:
case 177:
case 3498:
case 1131:
case 238:
case 3684:
case 3930:
case 2327:
case 1096:
case 3875:
case 299:
case 1088:
case 441:
case 360:
case 1959:
case 955:
case 2937:
case 3736:
case 2685:
case 3643:
case 2238:
case 2874:
case 1699:
case 2128:
case 2593:
case 3922:
case 818:
case 2136:
case 917:
case 1313:
case 1041:
case 476:
case 1903:
case 265:
case 3354:
case 3238:
case 3874:
case 3128:
case 4093:
case 2736:
case 416:
case 994:
case 1549:
case 2643:
case 3685:
case 2332:
case 3091:
case 1909:
case 155:
case 3136:
case 1481:
case 2667:
case 2930:
case 2875:
case 399:
case 20:
case 3046:
case 2498:
case 1472:
case 1953:
case 2320:
case 783:
case 1560:
case 3355:
case 3937:
case 1868:
case 1031:
case 1625:
case 2146:
case 3969:
case 2963:
case 31:
case 1188:
case 2858:
case 3342:
case 3421:
case 1533:
case 2639:
case 3976:
case 1286:
case 1298:
case 1657:
case 3746:
case 2:
case 4057:
case 27:
case 3512:
case 2248:
case 1364:
case 1997:
case 132:
case 2524:
case 540:
case 2281:
case 1600:
case 2170:
case 3816:
case 1387:
case 193:
case 2036:
case 2191:
case 3770:
case 3940:
case 488:
case 3177:
case 712:
case 1458:
case 1615:
case 1503:
case 3603:
case 2609:
case 658:
case 2275:
case 1943:
case 1773:
case 3411:
case 2383:
case 969:
case 3522:
case 1622:
case 3999:
case 2514:
case 131:
case 2161:
case 2537:
case 3826:
case 1559:
case 3659:
case 190:
case 2006:
case 3274:
case 1984:
case 154:
case 259:
case 1394:
case 1967:
case 662:
case 2957:
case 2335:
case 2302:
case 2576:
case 428:
case 953:
case 419:
case 1151:
case 3682:
case 3216:
case 4063:
case 3563:
case 2925:
case 2540:
case 1886:
case 1701:
case 508:
case 2156:
case 1898:
case 263:
case 1475:
case 3690:
case 840:
case 2848:
case 3907:
case 2468:
case 2310:
case 3756:
case 1647:
case 2872:
case 1571:
case 3671:
case 2697:
case 2352:
case 2907:
case 3540:
case 1640:
case 544:
case 2671:
case 3900:
case 586:
case 442:
case 3697:
case 2924:
case 3258:
case 296:
case 3468:
case 3310:
case 2547:
case 2756:
case 1101:
case 3335:
case 1474:
case 3302:
case 785:
case 4076:
case 1676:
case 2106:
case 2118:
case 479:
case 636:
case 1669:
case 2216:
case 1323:
case 3925:
case 3881:
case 2682:
case 4037:
case 889:
case 1637:
case 2826:
case 3018:
case 2659:
case 1553:
case 3006:
case 3653:
case 3514:
case 4014:
case 1614:
case 409:
case 359:
case 169:
case 1051:
case 2274:
case 518:
case 2056:
case 990:
case 1766:
case 931:
case 2515:
case 1821:
case 2522:
case 2999:
case 1362:
case 1949:
case 772:
case 529:
case 1779:
case 2411:
case 2345:
case 4004:
case 3504:
case 1655:
case 3555:
case 4055:
case 1360:
case 1406:
case 3016:
case 748:
case 3008:
case 4027:
case 3451:
case 987:
case 2836:
case 3944:
case 3261:
case 3774:
case 664:
case 2532:
case 1768:
case 135:
case 2554:
case 1519:
case 2613:
case 3175:
case 2401:
case 1962:
case 3393:
case 3983:
case 1273:
case 2989:
case 2775:
case 443:
case 2307:
case 59:
case 2075:
case 2473:
case 28:
case 2934:
case 3846:
case 2917:
case 236:
case 1111:
case 3300:
case 3256:
case 3910:
case 3687:
case 478:
case 3074:
case 3870:
case 714:
case 3357:
case 4078:
case 3578:
case 1678:
case 3312:
case 2350:
case 3325:
case 2692:
case 3891:
case 816:
case 4042:
case 2218:
case 2206:
case 2578:
case 876:
case 429:
case 1339:
case 2074:
case 1461:
case 2870:
case 3108:
case 2542:
case 1841:
case 663:
case 3665:
case 797:
case 3877:
case 2716:
case 2708:
case 2891:
case 2846:
case 841:
case 781:
case 3917:
case 3307:
case 2158:
case 3952:
case 3075:
case 2479:
case 1896:
case 3473:
case 1888:
case 38:
case 3934:
case 2910:
case 2687:
case 336:
case 3324:
case 1266:
case 2619:
case 3058:
case 1513:
case 2175:
case 4005:
case 1632:
case 4032:
case 3554:
case 867:
case 3945:
case 1279:
case 579:
case 2983:
case 3989:
case 713:
case 968:
case 1343:
case 1011:
case 2016:
case 704:
case 2008:
case 130:
case 2504:
case 935:
case 1620:
case 3520:
case 4020:
case 2944:
case 2261:
case 2774:
case 1384:
case 444:
case 1367:
case 2527:
case 806:
case 2451:
case 3836:
case 1396:
case 2948:
case 790:
case 3142:
case 1430:
case 1388:
case 33:
case 2346:
case 1998:
case 1986:
case 3276:
case 208:
case 3459:
case 754:
case 2508:
case 2516:
case 3269:
case 972:
case 1187:
case 3240:
case 1780:
case 123:
case 1511:
case 112:
case 8:
case 3403:
case 3054:
case 2391:
case 2247:
case 2981:
case 87:
case 1297:
case 1658:
case 1415:
case 1341:
case 3558:
case 4058:
case 3926:
case 1713:
case 985:
case 180:
case 2215:
case 1209:
case 3705:
case 1447:
case 3732:
case 4075:
case 3575:
case 1675:
case 1119:
case 924:
case 559:
case 2222:
case 1080:
case 318:
case 3237:
case 2704:
case 3482:
case 2574:
case 137:
case 2893:
case 2120:
case 329:
case 642:
case 2727:
case 3104:
case 2237:
case 3755:
case 3704:
case 2127:
case 2482:
case 1259:
case 218:
case 1469:
case 185:
case 2214:
case 980:
case 2155:
case 3078:
case 3120:
case 1885:
case 229:
case 865:
case 3574:
case 1674:
case 378:
case 1921:
case 124:
case 1476:
case 3668:
case 1568:
case 1203:
case 2328:
case 2732:
case 462:
case 2471:
case 1064:
case 899:
case 1860:
case 3215:
case 753:
case 3154:
case 3222:
case 3105:
case 2490:
case 343:
case 1113:
case 619:
case 795:
case 1271:
case 3981:
case 69:
case 1019:
case 172:
case 3825:
case 2377:
case 3409:
case 2005:
case 2403:
case 2054:
case 3247:
case 912:
case 923:
case 308:
case 458:
case 1165:
case 3948:
case 23:
case 1608:
case 3263:
case 4008:
case 2269:
case 1414:
case 3742:
case 286:
case 3800:
case 3453:
case 2459:
case 3972:
case 3055:
case 2178:
case 2020:
case 596:
case 173:
case 686:
case 3147:
case 3802:
case 63:
case 82:
case 1190:
case 2015:
case 3419:
case 3991:
case 1009:
case 2747:
case 2140:
case 2977:
case 3946:
case 148:
case 3163:
case 2817:
case 2030:
case 58:
case 3651:
case 3348:
case 1551:
case 768:
case 1265:
case 2176:
case 922:
case 1292:
case 536:
case 3372:
case 1053:
case 1618:
case 1753:
case 219:
case 2255:
case 1442:
case 3714:
case 114:
case 3069:
case 2845:
case 3883:
case 2561:
case 1862:
case 1321:
case 2114:
case 3076:
case 3232:
case 1709:
case 3487:
case 2928:
case 2047:
case 3254:
case 898:
case 342:
case 3464:
case 839:
case 1213:
case 1566:
case 1097:
case 2338:
case 2480:
case 3040:
case 2722:
case 3844:
case 1103:
case 463:
case 3715:
case 1071:
case 2464:
case 914:
case 1219:
case 3326:
case 2205:
case 678:
case 3928:
case 1703:
case 3047:
case 3673:
case 1090:
case 2115:
case 3936:
case 1894:
case 3338:
case 861:
case 2040:
case 3063:
case 2069:
case 3465:
case 1759:
case 319:
case 2220:
case 2737:
case 1082:
case 3255:
case 4061:
case 3561:
case 174:
case 3114:
case 328:
case 2076:
case 279:
case 3730:
case 3889:
case 2883:
case 3030:
case 209:
case 2348:
case 791:
case 1398:
case 464:
case 2946:
case 1782:
case 1059:
case 2518:
case 1420:
case 3176:
case 3763:
case 2014:
case 2147:
case 2970:
case 1501:
case 3022:
case 2835:
case 1197:
case 1790:
case 1405:
case 1003:
case 1656:
case 4056:
case 3556:
case 847:
case 1287:
case 3977:
case 1264:
case 2381:
case 2419:
case 3397:
case 1818:
case 3964:
case 3241:
case 2371:
case 1781:
case 500:
case 3610:
case 1510:
case 2652:
case 3851:
case 56:
case 2436:
case 333:
case 2390:
case 2980:
case 3186:
case 2965:
case 2992:
case 1369:
case 1623:
case 2529:
case 2382:
case 1942:
case 873:
case 420:
case 3021:
case 411:
case 2801:
case 3602:
case 1502:
case 1978:
case 3288:
case 1748:
case 139:
case 483:
case 3879:
case 2873:
case 234:
case 515:
case 3866:
case 1904:
case 2359:
case 1337:
case 2121:
case 1314:
case 3595:
case 3470:
case 557:
case 3683:
case 650:
case 1126:
case 694:
case 3491:
case 3309:
case 2477:
case 1228:
case 1081:
case 716:
case 961:
case 3919:
case 2913:
case 510:
case 1545:
case 3689:
case 1589:
case 1738:
case 1322:
case 1861:
case 1315:
case 2919:
case 1726:
case 1905:
case 2309:
case 897:
case 2721:
case 334:
case 3098:
case 655:
case 227:
case 3086:
case 741:
case 34:
case 1330:
case 1496:
case 3873:
case 3121:
case 351:
case 3231:
case 2353:
case 75:
case 2186:
case 3992:
case 1363:
case 1856:
case 632:
case 1172:
case 813:
case 2021:
case 3798:
case 2635:
case 2602:
case 1291:
case 1347:
case 2610:
case 292:
case 2397:
case 2241:
case 582:
case 3617:
case 1517:
case 1270:
case 92:
case 3652:
case 1552:
case 3436:
case 633:
case 2188:
case 3392:
case 1550:
case 3650:
case 3365:
case 2031:
case 2625:
case 3796:
case 1248:
case 2612:
case 3811:
case 17:
case 2298:
case 2286:
case 307:
case 1028:
case 3426:
case 1281:
case 3971:
case 2600:
case 156:
case 2364:
case 366:
case 2997:
case 3741:
case 3380:
case 415:
case 3990:
case 293:
case 1507:
case 3607:
case 3543:
case 2585:
case 1643:
case 938:
case 1599:
case 3699:
case 2693:
case 511:
case 2319:
case 1354:
case 1305:
case 1332:
case 3584:
case 1684:
case 1486:
case 3221:
case 46:
case 3088:
case 3567:
case 1667:
case 1930:
case 1875:
case 217:
case 2868:
case 1320:
case 3959:
case 160:
case 2953:
case 965:
case 3448:
case 2567:
case 2096:
case 199:
case 584:
case 277:
case 2584:
case 2131:
case 1046:
case 294:
case 4060:
case 1660:
case 1937:
case 2959:
case 546:
case 482:
case 1128:
case 3693:
case 1874:
case 885:
case 3549:
case 4085:
case 2543:
case 726:
case 960:
case 355:
case 405:
case 3909:
case 1091:
case 571:
case 634:
case 2313:
case 2041:
case 1136:
case 1500:
case 2971:
case 789:
case 266:
case 849:
case 3997:
case 2624:
case 2741:
case 501:
case 1791:
case 1816:
case 1808:
case 2990:
case 3141:
case 2607:
case 9:
case 2380:
case 2438:
case 2650:
case 3031:
case 1525:
case 3196:
case 3188:
case 11:
case 1557:
case 3657:
case 1421:
case 4033:
case 1633:
case 1976:
case 2796:
case 410:
case 2811:
case 872:
case 1378:
case 2767:
case 1012:
case 2160:
case 1057:
case 1374:
case 257:
case 3402:
case 835:
case 625:
case 2784:
case 3435:
case 270:
case 3167:
case 2813:
case 3819:
case 72:
case 321:
case 906:
case 1025:
case 1631:
case 3531:
case 1423:
case 684:
case 2295:
case 188:
case 671:
case 2262:
case 3979:
case 1245:
case 2452:
case 1827:
case 2743:
case 3785:
case 2434:
case 3410:
case 375:
case 2628:
case 1000:
case 1855:
case 3143:
case 2185:
case 1804:
case 3966:
case 2541:
case 1842:
case 941:
case 3691:
case 2677:
case 3085:
case 2043:
case 2489:
case 3049:
case 2445:
case 1234:
case 1217:
case 3670:
case 1570:
case 95:
case 3887:
case 1725:
case 1316:
case 1308:
case 3229:
case 1906:
case 200:
case 1918:
case 3864:
case 2739:
case 3733:
case 3444:
case 1150:
case 1757:
case 1546:
case 2596:
case 1712:
case 2067:
case 1112:
case 282:
case 450:
case 300:
case 2864:
case 2887:
case 1750:
case 141:
case 2139:
case 1157:
case 2229:
case 36:
case 1494:
case 2951:
case 1696:
case 3084:
case 2733:
case 1125:
case 2444:
case 1235:
case 1202:
case 761:
case 494:
case 2646:
case 2691:
case 3677:
case 3865:
case 683:
case 176:
case 1724:
case 1641:
case 3541:
case 3043:
case 3489:
case 2049:
case 2483:
case 1536:
case 1283:
case 2979:
case 3452:
case 1375:
case 2785:
case 1007:
case 3434:
case 2749:
case 891:
case 3417:
case 315:
case 527:
case 1799:
case 3262:
case 3149:
case 2143:
case 466:
case 2966:
case 611:
case 2368:
case 2410:
case 1528:
case 275:
case 3628:
case 1961:
case 1244:
case 167:
case 357:
case 407:
case 2402:
case 3039:
case 2435:
case 2033:
case 3160:
case 887:
case 1854:
case 2184:
case 1050:
case 370:
case 2167:
case 3813:
case 2760:
case 1830:
case 756:
case 2243:
case 1975:
case 1052:
case 2379:
case 3373:
case 3407:
case 1745:
case 1538:
case 831:
case 2366:
case 3859:
case 3424:
case 346:
case 517:
case 325:
case 2968:
case 854:
case 3195:
case 675:
case 2457:
case 2284:
case 1439:
case 211:
case 989:
case 3794:
case 1144:
case 371:
case 3029:
case 2023:
case 2809:
case 3803:
case 1815:
case 220:
case 945:
case 70:
case 140:
case 2672:
case 1102:
case 301:
case 3729:
case 2723:
case 593:
case 2648:
case 2351:
case 1212:
case 3890:
case 283:
case 1484:
case 3598:
case 4086:
case 3586:
case 1356:
case 3882:
case 1200:
case 1958:
case 1110:
case 3499:
case 3301:
case 1734:
case 1045:
case 682:
case 3911:
case 1581:
case 1134:
case 126:
case 1224:
case 145:
case 1117:
case 1869:
case 600:
case 1485:
case 2911:
case 3095:
case 765:
case 2301:
case 507:
case 2729:
case 3723:
case 738:
case 799:
case 1460:
case 3897:
case 566:
case 1735:
case 3129:
case 2598:
case 1702:
case 2233:
case 1840:
case 3648:
case 3351:
case 3267:
case 2794:
case 1974:
case 311:
case 1744:
case 1621:
case 320:
case 3194:
case 615:
case 3023:
case 2450:
case 284:
case 1299:
case 2638:
case 189:
case 2285:
case 2249:
case 3379:
case 2373:
case 433:
case 2407:
case 1783:
case 2162:
case 3968:
case 657:
case 2195:
case 3400:
case 3853:
case 2859:
case 2626:
case 492:
case 550:
case 2424:
case 246:
case 3780:
case 487:
case 3187:
case 3422:
case 4011:
case 3164:
case 908:
case 323:
case 2290:
case 807:
case 1377:
case 1032:
case 2787:
case 1850:
case 1403:
case 2764:
case 3297:
case 272:
case 3341:
case 3658:
case 3415:
case 249:
case 866:
case 3388:
case 1142:
case 2192:
case 673:
case 2437:
case 3765:
case 764:
case 491:
case 2608:
case 3792:
case 285:
case 1214:
case 595:
case 3463:
case 3065:
case 943:
case 2476:
case 1104:
case 1155:
case 3713:
case 202:
case 1471:
case 2087:
case 1732:
case 894:
case 3209:
case 2203:
case 2568:
case 1336:
case 569:
case 850:
case 3675:
case 3119:
case 2113:
case 3884:
case 3080:
case 3087:
case 2447:
case 674:
case 2209:
case 3568:
case 1668:
case 1215:
case 590:
case 763:
case 1497:
case 2713:
case 3719:
case 3064:
case 280:
case 2884:
case 1132:
case 1105:
case 1222:
case 1154:
case 2675:
case 2253:
case 3259:
case 385:
case 2092:
case 3331:
case 2463:
case 2065:
case 2843:
case 3849:
case 1120:
case 1078:
case 1893:
case 855:
case 3674:
case 681:
case 178:
case 2986:
case 468:
case 2430:
case 832:
case 622:
case 1778:
case 2388:
case 2396:
case 1263:
case 3608:
case 3616:
case 2792:
case 3282:
case 1453:
case 1800:
case 1742:
case 2511:
case 1812:
case 944:
case 3290:
case 2780:
case 2839:
case 93:
case 3764:
case 2013:
case 2658:
case 2415:
case 1981:
case 1391:
case 435:
case 986:
case 1409:
case 2398:
case 1946:
case 1163:
case 1776:
case 2386:
case 4051:
case 109:
case 2996:
case 3182:
case 1014:
case 3606:
case 3455:
case 3618:
case 1518:
case 2420:
case 623:
case 1037:
case 373:
case 3171:
case 2197:
case 3280:
case 1835:
case 3190:
case 1381:
case 1419:
case 2941:
case 3797:
case 2405:
case 3009:
case 1991:
case 2003:
case 3709:
case 2703:
case 281:
case 919:
case 1254:
case 1122:
case 1232:
case 591:
case 3566:
case 3097:
case 142:
case 1464:
case 3103:
case 762:
case 2894:
case 3579:
case 4079:
case 453:
case 2082:
case 3442:
case 2759:
case 1714:
case 314:
case 1069:
case 680:
case 179:
case 3478:
case 297:
case 3895:
case 3862:
case 3321:
case 587:
case 535:
case 2931:
case 1063:
case 2442:
case 1255:
case 1204:
case 2753:
case 397:
case 3661:
case 1889:
case 1845:
case 3153:
case 2478:
case 2097:
case 1715:
case 78:
case 3071:
case 1928:
case 1047:
case 381:
case 624:
case 3894:
case 736:
case 3573:
case 4073:
case 2579:
case 1936:
case 1722:
case 979:
case 568:
case 2280:
case 4001:
case 3501:
case 1601:
case 909:
case 3790:
case 2171:
case 3197:
case 1140:
case 3287:
case 3829:
case 2823:
case 3405:
case 2009:
case 3003:
case 3656:
case 2190:
case 3264:
case 2797:
case 322:
case 1030:
case 3996:
case 19:
case 454:
case 248:
case 1169:
case 1817:
case 2053:
case 2606:
case 2455:
case 490:
case 2618:
case 3059:
case 3420:
case 552:
case 431:
case 2292:
case 331:
case 2614:
case 390:
case 73:
case 2960:
case 1761:
case 354:
case 1274:
case 3984:
case 825:
case 846:
case 3394:
case 786:
case 3458:
case 413:
case 2173:
case 2766:
case 1603:
case 1056:
case 3503:
case 295:
case 1411:
case 2949:
case 3943:
case 3166:
case 2395:
case 871:
case 3622:
case 1522:
case 3701:
case 2640:
case 1352:
case 549:
case 1907:
case 253:
case 1690:
case 2079:
case 4090:
case 3475:
case 1756:
case 3647:
case 1547:
case 2597:
case 2066:
case 196:
case 4071:
case 1106:
case 2751:
case 2474:
case 3582:
case 4082:
case 572:
case 729:
case 2669:
case 3663:
case 1563:
case 3329:
case 2323:
case 1576:
case 3933:
case 1957:
case 3474:
case 1912:
case 523:
case 3751:
case 778:
case 1925:
case 3669:
case 2663:
case 996:
case 2151:
case 1718:
case 1706:
case 3211:
case 163:
case 353:
case 2590:
case 2475:
case 2701:
case 2886:
case 883:
case 743:
case 3597:
case 1258:
case 1872:
case 1900:
case 2571:
case 3101:
case 1468:
case 1310:
case 811:
case 2503:
case 1609:
case 4009:
case 2615:
case 2179:
case 3395:
case 3821:
case 537:
case 1993:
case 3949:
case 3985:
case 964:
case 2166:
case 290:
case 1653:
case 4053:
case 3960:
case 3637:
case 1537:
case 231:
case 1161:
case 708:
case 3416:
case 3408:
case 3051:
case 369:
case 448:
case 1344:
case 2984:
case 3768:
case 1619:
case 597:
case 2168:
case 3995:
case 287:
case 2343:
case 3385:
case 3349:
case 1983:
case 2279:
case 3273:
case 1555:
case 3360:
case 1504:
case 3604:
case 230:
case 581:
case 1008:
case 291:
case 2367:
case 1774:
case 875:
case 158:
case 368:
case 2384:
case 1944:
case 1902:
case 1935:
case 2339:
case 98:
case 805:
case 2251:
case 1312:
case 3678:
case 1716:
case 2929:
case 2592:
case 485:
case 2565:
case 3642:
case 513:
case 522:
case 2888:
case 742:
case 1158:
case 1479:
case 504:
case 2580:
case 1300:
case 352:
case 3111:
case 162:
case 3587:
case 4087:
case 1687:
case 3068:
case 1256:
case 2201:
case 1917:
case 800:
case 3888:
case 3711:
case 3896:
case 1952:
case 1075:
case 2587:
case 252:
case 1324:
case 719:
case 2678:
case 1108:
case 3339:
case 2642:
case 3841:
case 653:
case 3929:
case 4092:
case 1692:
case 962:
case 1665:
case 728:
case 1350:
case 1877:
case 1520:
case 3620:
case 2418:
case 2655:
case 2406:
case 79:
case 2604:
case 3384:
case 1836:
case 3367:
case 2627:
case 503:
case 1058:
case 2519:
case 3266:
case 4013:
case 3654:
case 3456:
case 1505:
case 3605:
case 3632:
case 412:
case 2349:
case 3011:
case 3279:
case 1989:
case 870:
case 958:
case 2962:
case 1399:
case 3168:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1751515202/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,];
var gg_b = "1751515202/";

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
