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
case 130:
case 3737:
case 117:
case 449:
case 3134:
case 468:
case 3672:
case 1801:
case 1996:
case 2068:
case 1023:
case 3681:
case 191:
case 1263:
case 3491:
case 1385:
case 2228:
case 1183:
case 1743:
case 766:
case 785:
case 3371:
case 801:
case 990:
case 1834:
case 3452:
case 4025:
case 1820:
case 2341:
case 1675:
case 387:
case 2412:
case 3044:
case 4089:
case 346:
case 2702:
case 3127:
case 3087:
case 2074:
case 592:
case 673:
case 4031:
case 2603:
case 3026:
case 2675:
case 1341:
case 3266:
case 3186:
case 3746:
case 1074:
case 1412:
case 1702:
case 359:
case 3993:
case 3639:
case 2455:
case 314:
case 217:
case 1642:
case 927:
case 3561:
case 1228:
case 2385:
case 2263:
case 291:
case 2513:
case 612:
case 2743:
case 2183:
case 758:
case 3415:
case 3705:
case 711:
case 2067:
case 3985:
case 3755:
case 3811:
case 946:
case 3656:
case 3396:
case 3738:
case 2715:
case 2616:
case 2405:
case 1286:
case 3575:
case 235:
case 1111:
case 2393:
case 1752:
case 3088:
case 37:
case 3476:
case 2661:
case 1430:
case 60:
case 176:
case 1572:
case 1971:
case 2539:
case 1424:
case 2752:
case 494:
case 1661:
case 2581:
case 1892:
case 3365:
case 1506:
case 2982:
case 3163:
case 995:
case 327:
case 780:
case 1220:
case 2971:
case 3712:
case 914:
case 276:
case 1863:
case 148:
case 959:
case 3192:
case 169:
case 2437:
case 1362:
case 3895:
case 2791:
case 1851:
case 1616:
case 4038:
case 1016:
case 1348:
case 2977:
case 3754:
case 2544:
case 2404:
case 2790:
case 1933:
case 153:
case 2714:
case 2587:
case 681:
case 3422:
case 2249:
case 963:
case 1850:
case 1660:
case 2797:
case 1053:
case 1489:
case 2194:
case 899:
case 2580:
case 3568:
case 2970:
case 1359:
case 1425:
case 40:
case 615:
case 1580:
case 559:
case 503:
case 888:
case 2053:
case 694:
case 66:
case 4012:
case 3364:
case 1808:
case 3013:
case 392:
case 3817:
case 2359:
case 3909:
case 2526:
case 3108:
case 2016:
case 1977:
case 3894:
case 1249:
case 3056:
case 2850:
case 1117:
case 3232:
case 578:
case 1714:
case 253:
case 209:
case 2800:
case 590:
case 1668:
case 3006:
case 668:
case 3333:
case 743:
case 2250:
case 4037:
case 3294:
case 3158:
case 1722:
case 3039:
case 531:
case 3567:
case 2821:
case 3149:
case 1674:
case 2309:
case 2179:
case 232:
case 610:
case 2336:
case 1208:
case 2807:
case 2075:
case 2003:
case 132:
case 2132:
case 3370:
case 3497:
case 1821:
case 2835:
case 3818:
case 527:
case 473:
case 3644:
case 1257:
case 1798:
case 1336:
case 1807:
case 2208:
case 4046:
case 992:
case 2849:
case 706:
case 1588:
case 1118:
case 1250:
case 2454:
case 3081:
case 850:
case 844:
case 3879:
case 2668:
case 1623:
case 4005:
case 2:
case 2722:
case 3107:
case 3469:
case 408:
case 2384:
case 2347:
case 1978:
case 3414:
case 3490:
case 1805:
case 1077:
case 1102:
case 2916:
case 2339:
case 1381:
case 1238:
case 2837:
case 2306:
case 2176:
case 3146:
case 3786:
case 3685:
case 188:
case 2783:
case 672:
case 2830:
case 2345:
case 3802:
case 3375:
case 3252:
case 771:
case 2953:
case 604:
case 740:
case 2562:
case 2212:
case 2961:
case 351:
case 4007:
case 326:
case 3009:
case 1070:
case 22:
case 3641:
case 91:
case 965:
case 4035:
case 3466:
case 1143:
case 853:
case 1830:
case 4058:
case 3137:
case 939:
case 3720:
case 1212:
case 1562:
case 2492:
case 2846:
case 4049:
case 2077:
case 1339:
case 470:
case 2451:
case 3124:
case 2805:
case 441:
case 199:
case 1033:
case 2463:
case 986:
case 3701:
case 3565:
case 2238:
case 1837:
case 2381:
case 1176:
case 161:
case 1237:
case 3815:
case 902:
case 974:
case 918:
case 216:
case 457:
case 951:
case 228:
case 926:
case 1795:
case 2273:
case 498:
case 2205:
case 1696:
case 2942:
case 3763:
case 2855:
case 2711:
case 3243:
case 2401:
case 2191:
case 4008:
case 2246:
case 3276:
case 1115:
case 144:
case 150:
case 1975:
case 1230:
case 28:
case 960:
case 2420:
case 1224:
case 1019:
case 8:
case 1766:
case 386:
case 1665:
case 3059:
case 3852:
case 347:
case 2019:
case 1420:
case 244:
case 3353:
case 745:
case 3202:
case 2975:
case 1434:
case 2529:
case 3155:
case 500:
case 2356:
case 3891:
case 3906:
case 261:
case 3662:
case 3728:
case 2486:
case 2078:
case 4050:
case 3939:
case 2696:
case 1152:
case 767:
case 3890:
case 4063:
case 675:
case 4051:
case 1540:
case 2204:
case 3062:
case 1794:
case 3479:
case 3222:
case 560:
case 2854:
case 698:
case 1197:
case 1717:
case 1169:
case 4092:
case 3360:
case 1547:
case 3926:
case 2619:
case 1190:
case 574:
case 2458:
case 1114:
case 3399:
case 3418:
case 1421:
case 2231:
case 1225:
case 3093:
case 393:
case 2114:
case 891:
case 2190:
case 2584:
case 2169:
case 1664:
case 2407:
case 636:
case 3944:
case 3298:
case 2421:
case 3154:
case 3987:
case 4028:
case 1678:
case 689:
case 783:
case 2197:
case 1923:
case 2540:
case 1204:
case 2794:
case 993:
case 1559:
case 723:
case 629:
case 2450:
case 1633:
case 1198:
case 1967:
case 2732:
case 3494:
case 1779:
case 3410:
case 413:
case 2380:
case 2344:
case 3417:
case 2122:
case 3707:
case 2825:
case 2387:
case 835:
case 3374:
case 472:
case 3104:
case 1999:
case 2071:
case 1408:
case 905:
case 2889:
case 848:
case 3041:
case 1387:
case 362:
case 1825:
case 1344:
case 4034:
case 3988:
case 547:
case 233:
case 1122:
case 1457:
case 2326:
case 2960:
case 3578:
case 586:
case 1071:
case 2999:
case 3735:
case 2718:
case 1889:
case 2967:
case 2198:
case 2254:
case 670:
case 2804:
case 742:
case 3125:
case 876:
case 2559:
case 3749:
case 1677:
case 3269:
case 539:
case 3214:
case 3290:
case 1086:
case 3557:
case 1126:
case 1649:
case 894:
case 2322:
case 2027:
case 942:
case 2600:
case 3632:
case 688:
case 815:
case 1658:
case 2020:
case 2299:
case 1709:
case 2034:
case 433:
case 62:
case 2510:
case 2180:
case 104:
case 2607:
case 2740:
case 3997:
case 3288:
case 1635:
case 1398:
case 1260:
case 3389:
case 881:
case 1034:
case 1740:
case 204:
case 1180:
case 655:
case 705:
case 272:
case 2658:
case 2709:
case 3618:
case 53:
case 2736:
case 3123:
case 3325:
case 3887:
case 2126:
case 3508:
case 3733:
case 793:
case 1600:
case 699:
case 1187:
case 1823:
case 1954:
case 1784:
case 1144:
case 571:
case 923:
case 554:
case 983:
case 661:
case 1650:
case 2433:
case 2188:
case 545:
case 762:
case 2518:
case 3535:
case 1867:
case 2268:
case 3160:
case 3558:
case 538:
case 1390:
case 3167:
case 3998:
case 342:
case 2274:
case 1470:
case 3719:
case 3287:
case 3409:
case 567:
case 1092:
case 1397:
case 1532:
case 3244:
case 1899:
case 700:
case 2989:
case 2759:
case 856:
case 1860:
case 3436:
case 1579:
case 323:
case 3500:
case 3440:
case 2532:
case 2397:
case 1274:
case 2470:
case 849:
case 1608:
case 596:
case 868:
case 3922:
case 1188:
case 2867:
case 1268:
case 837:
case 3011:
case 2650:
case 2063:
case 907:
case 401:
case 3610:
case 2051:
case 3484:
case 452:
case 2369:
case 3520:
case 1973:
case 2651:
case 967:
case 461:
case 2050:
case 1628:
case 4078:
case 2391:
case 289:
case 873:
case 3206:
case 1583:
case 2203:
case 2352:
case 1793:
case 3666:
case 945:
case 3245:
case 2853:
case 812:
case 4019:
case 1946:
case 3813:
case 2861:
case 1156:
case 450:
case 444:
case 3312:
case 1924:
case 1853:
case 1471:
case 1275:
case 760:
case 507:
case 136:
case 1482:
case 48:
case 319:
case 2946:
case 1651:
case 3429:
case 3943:
case 340:
case 2973:
case 257:
case 3272:
case 189:
case 652:
case 3796:
case 2583:
case 2315:
case 702:
case 774:
case 718:
case 275:
case 751:
case 338:
case 1627:
case 3915:
case 2049:
case 4077:
case 241:
case 1000:
case 3462:
case 270:
case 3881:
case 488:
case 1601:
case 2145:
case 2785:
case 3103:
case 747:
case 1216:
case 1912:
case 2376:
case 1511:
case 42:
case 3528:
case 3346:
case 1021:
case 2595:
case 2035:
case 71:
case 1620:
case 1007:
case 542:
case 1302:
case 1172:
case 29:
case 2139:
case 1634:
case 1595:
case 2021:
case 455:
case 2181:
case 2741:
case 2912:
case 1106:
case 2511:
case 1376:
case 396:
case 3563:
case 19:
case 3845:
case 2302:
case 2007:
case 2253:
case 2634:
case 1139:
case 3551:
case 477:
case 1058:
case 3142:
case 954:
case 3991:
case 170:
case 2000:
case 3592:
case 3337:
case 80:
case 1955:
case 1842:
case 2216:
case 93:
case 1496:
case 1686:
case 1785:
case 1145:
case 2601:
case 617:
case 3043:
case 3884:
case 1278:
case 2005:
case 2073:
case 3723:
case 1780:
case 1140:
case 906:
case 3349:
case 1833:
case 4042:
case 922:
case 691:
case 2109:
case 212:
case 1597:
case 1332:
case 1950:
case 2499:
case 1219:
case 1569:
case 1147:
case 3358:
case 2908:
case 1030:
case 273:
case 1957:
case 558:
case 1264:
case 2689:
case 1744:
case 511:
case 2625:
case 3488:
case 3698:
case 3840:
case 2264:
case 3002:
case 1460:
case 2514:
case 2957:
case 898:
case 3836:
case 432:
case 1908:
case 2147:
case 566:
case 2787:
case 3917:
case 2631:
case 1625:
case 382:
case 3809:
case 1005:
case 1073:
case 1877:
case 1109:
case 1379:
case 3170:
case 2597:
case 1467:
case 2780:
case 943:
case 520:
case 2833:
case 2900:
case 3932:
case 1159:
case 3531:
case 580:
case 89:
case 864:
case 3480:
case 2878:
case 2310:
case 3848:
case 409:
case 3614:
case 322:
case 1270:
case 1935:
case 3487:
case 3209:
case 3697:
case 4053:
case 2317:
case 3444:
case 2012:
case 624:
case 2819:
case 4061:
case 3052:
case 1148:
case 2907:
case 3236:
case 3760:
case 1317:
case 1921:
case 2935:
case 3918:
case 1522:
case 3308:
case 1864:
case 3178:
case 1819:
case 3426:
case 20:
case 982:
case 2949:
case 2423:
case 2598:
case 3015:
case 2038:
case 763:
case 669:
case 1394:
case 3589:
case 1310:
case 3119:
case 635:
case 3164:
case 2277:
case 2055:
case 2655:
case 2986:
case 1502:
case 1901:
case 1054:
case 3328:
case 703:
case 759:
case 1311:
case 2576:
case 609:
case 653:
case 1927:
case 3546:
case 2193:
case 181:
case 2395:
case 2403:
case 795:
case 3241:
case 26:
case 3761:
case 2475:
case 3445:
case 397:
case 3573:
case 215:
case 778:
case 714:
case 358:
case 2282:
case 311:
case 1612:
case 476:
case 3753:
case 582:
case 1271:
case 2920:
case 95:
case 16:
case 3652:
case 1403:
case 3097:
case 3392:
case 1162:
case 3014:
case 2502:
case 3229:
case 320:
case 1655:
case 3524:
case 3472:
case 934:
case 1756:
case 1193:
case 1395:
case 3691:
case 3165:
case 872:
case 2054:
case 2311:
case 1739:
case 168:
case 3911:
case 3182:
case 256:
case 417:
case 430:
case 3512:
case 3301:
case 2951:
case 2552:
case 997:
case 491:
case 3829:
case 6:
case 1673:
case 1605:
case 1416:
case 380:
case 2141:
case 727:
case 2992:
case 2031:
case 1461:
case 1185:
case 1265:
case 3966:
case 3320:
case 506:
case 110:
case 1129:
case 3334:
case 1089:
case 2630:
case 2745:
case 2265:
case 3098:
case 2646:
case 632:
case 1992:
case 3703:
case 3775:
case 2461:
case 2025:
case 1591:
case 1031:
case 2453:
case 2871:
case 334:
case 790:
case 210:
case 3841:
case 4074:
case 920:
case 2129:
case 249:
case 2928:
case 1637:
case 268:
case 966:
case 4068:
case 2605:
case 3643:
case 35:
case 3386:
case 1552:
case 265:
case 3486:
case 3078:
case 1571:
case 3795:
case 3696:
case 2048:
case 2906:
case 2891:
case 1815:
case 3237:
case 2662:
case 2945:
case 3019:
case 533:
case 3224:
case 2353:
case 1792:
case 2155:
case 3230:
case 3975:
case 3313:
case 2361:
case 3115:
case 642:
case 2483:
case 2059:
case 2792:
case 3434:
case 1155:
case 38:
case 3420:
case 147:
case 999:
case 3766:
case 1059:
case 43:
case 623:
case 1693:
case 3273:
case 2571:
case 3152:
case 955:
case 3205:
case 3855:
case 2763:
case 3401:
case 440:
case 2751:
case 2815:
case 977:
case 2582:
case 2981:
case 2112:
case 328:
case 2411:
case 1146:
case 3463:
case 736:
case 388:
case 1685:
case 2565:
case 3381:
case 1495:
case 1956:
case 2727:
case 3077:
case 3372:
case 2843:
case 3873:
case 892:
case 2047:
case 160:
case 4079:
case 683:
case 467:
case 961:
case 2137:
case 102:
case 3682:
case 118:
case 3492:
case 151:
case 126:
case 2641:
case 1375:
case 1173:
case 4018:
case 1036:
case 1802:
case 775:
case 274:
case 218:
case 3562:
case 1734:
case 226:
case 928:
case 1876:
case 1720:
case 1137:
case 377:
case 607:
case 2596:
case 2036:
case 1466:
case 2802:
case 2252:
case 1641:
case 3824:
case 2495:
case 1565:
case 1215:
case 3306:
case 3176:
case 2956:
case 2786:
case 98:
case 1124:
case 4032:
case 1047:
case 1130:
case 1843:
case 501:
case 2749:
case 2269:
case 200:
case 1700:
case 2214:
case 3779:
case 1494:
case 2085:
case 827:
case 3633:
case 3326:
case 3999:
case 1721:
case 3408:
case 544:
case 262:
case 3831:
case 2609:
case 1417:
case 333:
case 2721:
case 1735:
case 3071:
case 4083:
case 3889:
case 2041:
case 58:
case 1297:
case 2640:
case 2707:
case 3122:
case 1988:
case 696:
case 3670:
case 3387:
case 1758:
case 407:
case 890:
case 516:
case 1214:
case 2410:
case 528:
case 1749:
case 1323:
case 2368:
case 1125:
case 1822:
case 1085:
case 3450:
case 1222:
case 3968:
case 3197:
case 1062:
case 1869:
case 1648:
case 4095:
case 2980:
case 859:
case 1814:
case 1093:
case 2757:
case 1533:
case 878:
case 814:
case 1897:
case 1659:
case 52:
case 3974:
case 2154:
case 3421:
case 2987:
case 1708:
case 3114:
case 2577:
case 3717:
case 3289:
case 3547:
case 1154:
case 3435:
case 4066:
case 2659:
case 1298:
case 619:
case 2093:
case 3388:
case 2926:
case 577:
case 3619:
case 3458:
case 3204:
case 2062:
case 2367:
case 2479:
case 3509:
case 3449:
case 887:
case 352:
case 1570:
case 3096:
case 599:
case 2648:
case 2814:
case 1750:
case 704:
case 2869:
case 3678:
case 3286:
case 862:
case 190:
case 1443:
case 1396:
case 1738:
case 94:
case 1811:
case 3828:
case 3437:
case 479:
case 1985:
case 3572:
case 917:
case 930:
case 227:
case 2151:
case 1866:
case 324:
case 2941:
case 376:
case 3430:
case 756:
case 1088:
case 606:
case 1613:
case 3581:
case 991:
case 800:
case 1128:
case 1712:
case 2866:
case 3060:
case 1542:
case 532:
case 3220:
case 1283:
case 3446:
case 749:
case 27:
case 3393:
case 2476:
case 3195:
case 3661:
case 3851:
case 3473:
case 710:
case 2738:
case 3715:
case 3545:
case 2929:
case 2443:
case 2503:
case 290:
case 369:
case 4014:
case 2755:
case 2811:
case 1192:
case 348:
case 485:
case 2211:
case 391:
case 3513:
case 3385:
case 1491:
case 425:
case 3743:
case 3023:
case 3438:
case 2606:
case 1295:
case 480:
case 1681:
case 4022:
case 3455:
case 3801:
case 214:
case 1672:
case 553:
case 715:
case 2553:
case 1737:
case 76:
case 317:
case 330:
case 3251:
case 2993:
case 34:
case 187:
case 3820:
case 3675:
case 2266:
case 1371:
case 2746:
case 3834:
case 2883:
case 2044:
case 1993:
case 159:
case 2730:
case 3702:
case 2087:
case 2382:
case 781:
case 2724:
case 1645:
case 1266:
case 384:
case 935:
case 1186:
case 1026:
case 3341:
case 2295:
case 2681:
case 1705:
case 195:
case 2737:
case 1553:
case 893:
case 1639:
case 114:
case 178:
case 2377:
case 1948:
case 3:
case 2072:
case 2680:
case 2107:
case 2469:
case 3384:
case 1599:
case 680:
case 2704:
case 3347:
case 1210:
case 2414:
case 3042:
case 1560:
case 2490:
case 886:
case 3849:
case 2121:
case 1135:
case 2081:
case 2879:
case 4076:
case 1725:
case 2731:
case 1626:
case 3208:
case 524:
case 1959:
case 3132:
case 2497:
case 3340:
case 2818:
case 1567:
case 1149:
case 81:
case 2644:
case 3919:
case 3798:
case 1731:
case 482:
case 2567:
case 3821:
case 263:
case 1644:
case 2789:
case 2959:
case 3179:
case 332:
case 65:
case 2560:
case 2158:
case 2210:
case 3978:
case 1107:
case 1072:
case 1377:
case 2599:
case 2832:
case 3800:
case 3623:
case 1879:
case 3588:
case 2333:
case 2135:
case 1121:
case 517:
case 530:
case 3200:
case 1279:
case 3667:
case 309:
case 3933:
case 2378:
case 679:
case 3526:
case 1754:
case 1984:
case 1157:
case 3348:
case 2810:
case 2894:
case 4052:
case 3061:
case 2013:
case 712:
case 2523:
case 1150:
case 3221:
case 1568:
case 54:
case 611:
case 3699:
case 697:
case 2936:
case 422:
case 3053:
case 9:
case 3489:
case 2218:
case 3235:
case 2568:
case 1523:
case 1498:
case 1909:
case 860:
case 584:
case 2940:
case 1688:
case 3797:
case 3404:
case 2279:
case 2422:
case 3249:
case 3117:
case 4015:
case 874:
case 2984:
case 1894:
case 851:
case 3977:
case 2157:
case 1108:
case 2947:
case 1378:
case 620:
case 802:
case 1848:
case 690:
case 1614:
case 568:
case 896:
case 3277:
case 3055:
case 3949:
case 3038:
case 1350:
case 1932:
case 1091:
case 3159:
case 1531:
case 3958:
case 1236:
case 3148:
case 1052:
case 2426:
case 3788:
case 1697:
case 2240:
case 1504:
case 3935:
case 2918:
case 2799:
case 1209:
case 1487:
case 838:
case 2052:
case 2357:
case 3907:
case 4013:
case 1178:
case 7:
case 1308:
case 3864:
case 492:
case 2236:
case 1799:
case 3921:
case 1918:
case 912:
case 2487:
case 2209:
case 206:
case 908:
case 1240:
case 2444:
case 2504:
case 521:
case 1284:
case 556:
case 3310:
case 1247:
case 2848:
case 3394:
case 1767:
case 2614:
case 2690:
case 3900:
case 2932:
case 2531:
case 2091:
case 3233:
case 1015:
case 2170:
case 3037:
case 4039:
case 2622:
case 2248:
case 581:
case 1884:
case 1043:
case 819:
case 871:
case 1698:
case 4045:
case 1335:
case 854:
case 3631:
case 2917:
case 2554:
case 282:
case 2809:
case 3514:
case 2002:
case 3264:
case 2177:
case 3957:
case 3744:
case 463:
case 2836:
case 3787:
case 3870:
case 3625:
case 3726:
case 709:
case 2076:
case 659:
case 1809:
case 603:
case 2698:
case 594:
case 3046:
case 2133:
case 3318:
case 2335:
case 3908:
case 1177:
case 1307:
case 1836:
case 1622:
case 308:
case 3109:
case 3467:
case 312:
case 1170:
case 2043:
case 2884:
case 1910:
case 3877:
case 1248:
case 2847:
case 3005:
case 4081:
case 614:
case 3073:
case 1768:
case 2723:
case 3706:
case 3673:
case 823:
case 3605:
case 2643:
case 25:
case 1742:
case 1911:
case 3928:
case 3739:
case 1885:
case 2456:
case 3089:
case 735:
case 4044:
case 1602:
case 2841:
case 1320:
case 3265:
case 2098:
case 748:
case 3646:
case 769:
case 2703:
case 1293:
case 2413:
case 3025:
case 1555:
case 403:
case 2334:
case 3630:
case 1703:
case 3992:
case 3031:
case 1775:
case 1098:
case 2301:
case 724:
case 3951:
case 776:
case 96:
case 3296:
case 478:
case 1995:
case 2327:
case 1456:
case 2022:
case 2911:
case 3637:
case 321:
case 3963:
case 356:
case 495:
case 1546:
case 1406:
case 3927:
case 1716:
case 2691:
case 2285:
case 2363:
case 1328:
case 3311:
case 3442:
case 431:
case 2014:
case 2229:
case 220:
case 3901:
case 3896:
case 784:
case 1439:
case 2524:
case 2472:
case 2392:
case 2537:
case 2097:
case 266:
case 949:
case 3366:
case 47:
case 3934:
case 692:
case 573:
case 427:
case 921:
case 3162:
case 3282:
case 791:
case 166:
case 1097:
case 1537:
case 1392:
case 2753:
case 3403:
case 3543:
case 1652:
case 3713:
case 2761:
case 315:
case 2328:
case 3576:
case 2615:
case 2546:
case 3193:
case 2406:
case 1862:
case 2716:
case 512:
case 3986:
case 1530:
case 1351:
case 972:
case 2447:
case 2507:
case 2694:
case 1199:
case 1280:
case 3369:
case 904:
case 2922:
case 834:
case 2521:
case 1095:
case 3867:
case 2354:
case 3063:
case 3860:
case 2066:
case 3899:
case 2226:
case 493:
case 4093:
case 2440:
case 3532:
case 1719:
case 3470:
case 1167:
case 1998:
case 85:
case 1287:
case 1226:
case 3759:
case 3608:
case 2998:
case 242:
case 2287:
case 2409:
case 123:
case 3925:
case 2764:
case 880:
case 2280:
case 2160:
case 1507:
case 1610:
case 1354:
case 1011:
case 733:
case 3028:
case 3188:
case 3748:
case 1922:
case 1521:
case 2535:
case 1632:
case 1777:
case 2448:
case 2880:
case 3086:
case 660:
case 1557:
case 3478:
case 2459:
case 2844:
case 820:
case 3398:
case 3736:
case 752:
case 2123:
case 4041:
case 674:
case 618:
case 2325:
case 2887:
case 2389:
case 304:
case 1770:
case 3419:
case 207:
case 372:
case 1826:
case 2168:
case 1123:
case 2331:
case 879:
case 1618:
case 1844:
case 3020:
case 536:
case 107:
case 2826:
case 462:
case 3594:
case 3510:
case 3260:
case 3607:
case 3144:
case 3784:
case 3027:
case 3187:
case 3600:
case 4029:
case 2304:
case 1679:
case 400:
case 2174:
case 897:
case 589:
case 858:
case 3001:
case 1880:
case 4085:
case 811:
case 2990:
case 1448:
case 843:
case 78:
case 1103:
case 1872:
case 3601:
case 2806:
case 2991:
case 460:
case 1881:
case 2032:
case 2592:
case 2337:
case 3627:
case 2952:
case 426:
case 451:
case 3253:
case 402:
case 3620:
case 2142:
case 975:
case 2771:
case 728:
case 4036:
case 3465:
case 1018:
case 3912:
case 3511:
case 1493:
case 3261:
case 1528:
case 998:
case 2213:
case 267:
case 1782:
case 1330:
case 1952:
case 4040:
case 3139:
case 1551:
case 761:
case 1563:
case 2493:
case 2346:
case 662:
case 3595:
case 600:
case 3686:
case 822:
case 3343:
case 744:
case 750:
case 806:
case 2175:
case 3842:
case 2103:
case 3496:
case 2915:
case 238:
case 3049:
case 341:
case 2079:
case 1806:
case 1337:
case 1592:
case 1032:
case 2462:
case 2695:
case 3113:
case 2281:
case 3315:
case 398:
case 3583:
case 1611:
case 2485:
case 1856:
case 271:
case 1010:
case 1094:
case 2429:
case 1534:
case 2943:
case 755:
case 513:
case 3973:
case 882:
case 357:
case 2153:
case 1520:
case 1239:
case 2272:
case 799:
case 1312:
case 929:
case 1527:
case 504:
case 219:
case 3946:
case 1245:
case 3008:
case 1441:
case 1501:
case 2116:
case 2586:
case 3793:
case 2813:
case 2527:
case 970:
case 3861:
case 1976:
case 3692:
case 2312:
case 788:
case 2441:
case 3352:
case 3275:
case 3930:
case 13:
case 486:
case 2765:
case 3471:
case 3937:
case 3050:
case 3663:
case 2856:
case 3391:
case 2206:
case 1796:
case 1338:
case 2239:
case 964:
case 99:
case 1272:
case 2534:
case 154:
case 140:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1757350801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,];
var gg_b = "1757350801/";

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
