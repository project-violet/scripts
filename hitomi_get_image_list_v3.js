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
case 2150:
case 876:
case 1449:
case 1913:
case 22:
case 944:
case 2264:
case 3511:
case 495:
case 2793:
case 2898:
case 3542:
case 1062:
case 2377:
case 2383:
case 1305:
case 1106:
case 1526:
case 2921:
case 2855:
case 2324:
case 3958:
case 648:
case 2200:
case 1547:
case 170:
case 1634:
case 4030:
case 2582:
case 3696:
case 2145:
case 2378:
case 1053:
case 3720:
case 2346:
case 2268:
case 1833:
case 107:
case 2894:
case 1889:
case 3064:
case 1679:
case 1544:
case 30:
case 3494:
case 1963:
case 3000:
case 1629:
case 2214:
case 3957:
case 1281:
case 1041:
case 776:
case 102:
case 3440:
case 1012:
case 3235:
case 2328:
case 57:
case 1590:
case 559:
case 2217:
case 1401:
case 1545:
case 1182:
case 272:
case 60:
case 3998:
case 3495:
case 3229:
case 3871:
case 1992:
case 1949:
case 1635:
case 994:
case 445:
case 2144:
case 2712:
case 2753:
case 3955:
case 698:
case 200:
case 2609:
case 3821:
case 1308:
case 384:
case 83:
case 2421:
case 3559:
case 2215:
case 499:
case 3184:
case 1360:
case 1270:
case 527:
case 1936:
case 2612:
case 315:
case 555:
case 3994:
case 423:
case 3173:
case 3319:
case 2029:
case 73:
case 3187:
case 2148:
case 3781:
case 3997:
case 758:
case 2375:
case 1307:
case 1232:
case 3015:
case 2325:
case 2079:
case 267:
case 1901:
case 288:
case 2857:
case 320:
case 1866:
case 1220:
case 3457:
case 3656:
case 2709:
case 522:
case 1093:
case 1370:
case 2959:
case 118:
case 3580:
case 199:
case 1826:
case 1423:
case 3163:
case 2555:
case 433:
case 2730:
case 2275:
case 2225:
case 2411:
case 1332:
case 3899:
case 145:
case 3811:
case 1204:
case 2598:
case 1848:
case 1686:
case 1487:
case 532:
case 2442:
case 2772:
case 794:
case 3075:
case 2461:
case 2019:
case 3329:
case 4093:
case 2091:
case 261:
case 654:
case 3705:
case 3906:
case 1890:
case 663:
case 2540:
case 2597:
case 3334:
case 521:
case 1985:
case 2882:
case 2672:
case 3113:
case 3202:
case 1533:
case 3337:
case 2594:
case 3931:
case 2116:
case 3025:
case 958:
case 3077:
case 2558:
case 3704:
case 3610:
case 363:
case 2459:
case 514:
case 1669:
case 867:
case 3074:
case 149:
case 3101:
case 2595:
case 4062:
case 1973:
case 460:
case 1987:
case 1791:
case 1197:
case 3024:
case 2314:
case 3571:
case 2228:
case 3335:
case 1984:
case 1194:
case 700:
case 23:
case 1769:
case 3803:
case 2554:
case 1702:
case 2403:
case 976:
case 258:
case 3604:
case 3710:
case 2961:
case 1072:
case 1566:
case 2043:
case 2367:
case 1155:
case 2283:
case 2277:
case 2227:
case 1205:
case 407:
case 1850:
case 585:
case 3431:
case 630:
case 101:
case 1030:
case 3982:
case 503:
case 1619:
case 1485:
case 1988:
case 2300:
case 788:
case 4053:
case 2051:
case 773:
case 3531:
case 215:
case 1933:
case 3612:
case 4007:
case 2391:
case 62:
case 2997:
case 3148:
case 4004:
case 2503:
case 2015:
case 3325:
case 3854:
case 1664:
case 3037:
case 854:
case 367:
case 3506:
case 3857:
case 3653:
case 1768:
case 3709:
case 863:
case 3034:
case 1667:
case 3895:
case 3147:
case 2229:
case 2998:
case 1700:
case 2871:
case 4010:
case 763:
case 1813:
case 1070:
case 507:
case 4008:
case 1416:
case 3712:
case 3858:
case 1161:
case 1020:
case 1293:
case 300:
case 3609:
case 1668:
case 2369:
case 3190:
case 284:
case 2821:
case 159:
case 2279:
case 2237:
case 2302:
case 3421:
case 377:
case 3215:
case 1764:
case 1032:
case 3980:
case 2067:
case 432:
case 3693:
case 3378:
case 830:
case 2497:
case 3268:
case 2720:
case 3346:
case 948:
case 3894:
case 1433:
case 20:
case 1489:
case 644:
case 2351:
case 1765:
case 1322:
case 2440:
case 298:
case 915:
case 426:
case 3217:
case 2954:
case 3150:
case 32:
case 1715:
case 3264:
case 136:
case 2511:
case 4005:
case 127:
case 3793:
case 2386:
case 1892:
case 3971:
case 1253:
case 2185:
case 3339:
case 421:
case 3377:
case 2995:
case 3383:
case 2796:
case 1587:
case 2880:
case 730:
case 3327:
case 1103:
case 394:
case 3218:
case 1081:
case 1241:
case 2455:
case 2958:
case 599:
case 1625:
case 2708:
case 137:
case 884:
case 3274:
case 126:
case 3364:
case 2078:
case 1353:
case 273:
case 2604:
case 2286:
case 3961:
case 2046:
case 3043:
case 3277:
case 431:
case 2149:
case 1450:
case 3227:
case 2660:
case 3831:
case 3318:
case 1944:
case 1312:
case 4056:
case 2982:
case 1341:
case 132:
case 3300:
case 2192:
case 930:
case 2039:
case 3558:
case 263:
case 1552:
case 2704:
case 1272:
case 3086:
case 3368:
case 820:
case 3278:
case 3459:
case 2074:
case 1725:
case 2859:
case 848:
case 2251:
case 3595:
case 1445:
case 1775:
case 121:
case 3942:
case 455:
case 3911:
case 1513:
case 1005:
case 3317:
case 3133:
case 3189:
case 2027:
case 3461:
case 3630:
case 2152:
case 2329:
case 3091:
case 2705:
case 1727:
case 3622:
case 1501:
case 2906:
case 3540:
case 114:
case 2482:
case 798:
case 1393:
case 2334:
case 3672:
case 1447:
case 1646:
case 3882:
case 1783:
case 719:
case 1950:
case 1774:
case 1444:
case 3116:
case 2931:
case 1627:
case 819:
case 3959:
case 47:
case 2605:
case 1823:
case 3555:
case 2163:
case 2219:
case 1624:
case 371:
case 3166:
case 3275:
case 63:
case 80:
case 3499:
case 3411:
case 2899:
case 3069:
case 1674:
case 1549:
case 3002:
case 230:
case 963:
case 2842:
case 1683:
case 501:
case 103:
case 1010:
case 1778:
case 1746:
case 1476:
case 1639:
case 1887:
case 3354:
case 3825:
case 51:
case 35:
case 379:
case 2928:
case 3170:
case 1407:
case 716:
case 3357:
case 3951:
case 1047:
case 1287:
case 811:
case 1223:
case 509:
case 546:
case 1138:
case 1460:
case 3120:
case 2978:
case 3685:
case 3419:
case 3500:
case 1352:
case 1129:
case 3358:
case 1076:
case 3042:
case 912:
case 1562:
case 143:
case 1048:
case 3011:
case 2802:
case 369:
case 3099:
case 84:
case 2321:
case 1706:
case 4016:
case 3196:
case 2977:
case 3785:
case 2371:
case 2535:
case 456:
case 1137:
case 1179:
case 816:
case 3517:
case 2162:
case 724:
case 2529:
case 1830:
case 583:
case 3723:
case 1301:
case 1822:
case 2031:
case 2925:
case 2690:
case 468:
case 1907:
case 2726:
case 4089:
case 2776:
case 2446:
case 482:
case 2748:
case 2478:
case 2843:
case 3181:
case 2975:
case 79:
case 3846:
case 3688:
case 3878:
case 3919:
case 3773:
case 880:
case 3443:
case 3394:
case 2006:
case 2644:
case 1336:
case 3003:
case 1135:
case 439:
case 89:
case 3231:
case 3902:
case 478:
case 1908:
case 2790:
case 3969:
case 638:
case 65:
case 1285:
case 1910:
case 2424:
case 1045:
case 2474:
case 2744:
case 2203:
case 365:
case 2538:
case 934:
case 824:
case 808:
case 1349:
case 1392:
case 2439:
case 2676:
case 2477:
case 2141:
case 3788:
case 3687:
case 3839:
case 2716:
case 2280:
case 216:
case 2418:
case 2040:
case 99:
case 3818:
case 3979:
case 628:
case 2591:
case 604:
case 1996:
case 1841:
case 5:
case 182:
case 1795:
case 2519:
case 1385:
case 3800:
case 1186:
case 924:
case 2464:
case 38:
case 1654:
case 1089:
case 3306:
case 1249:
case 168:
case 187:
case 834:
case 3752:
case 1456:
case 3298:
case 481:
case 2097:
case 592:
case 2414:
case 1481:
case 2055:
case 390:
case 2616:
case 2835:
case 2417:
case 3613:
case 3240:
case 3080:
case 3817:
case 3297:
case 1757:
case 2965:
case 2130:
case 211:
case 4045:
case 493:
case 1151:
case 1809:
case 3868:
case 2502:
case 178:
case 1236:
case 1970:
case 812:
case 3258:
case 1252:
case 452:
case 2543:
case 1893:
case 3382:
case 2057:
case 208:
case 2879:
case 2837:
case 2054:
case 3636:
case 3749:
case 2551:
case 1956:
case 3429:
case 1755:
case 3528:
case 425:
case 3601:
case 916:
case 457:
case 1640:
case 1213:
case 1102:
case 564:
case 3108:
case 817:
case 1169:
case 29:
case 1794:
case 4026:
case 2733:
case 135:
case 3254:
case 1432:
case 3736:
case 3935:
case 156:
case 1384:
case 3438:
case 3021:
case 304:
case 2342:
case 542:
case 1698:
case 2586:
case 3692:
case 1797:
case 911:
case 1981:
case 1263:
case 1191:
case 340:
case 3539:
case 3527:
case 1323:
case 750:
case 712:
case 3107:
case 1655:
case 3071:
case 2465:
case 68:
case 2095:
case 3380:
case 4049:
case 1570:
case 1805:
case 2231:
case 557:
case 3626:
case 3790:
case 2156:
case 1167:
case 1761:
case 704:
case 728:
case 3203:
case 3112:
case 2059:
case 3538:
case 2874:
case 1611:
case 3483:
case 3648:
case 3747:
case 1100:
case 3439:
case 2398:
case 2673:
case 1520:
case 3141:
case 552:
case 2883:
case 2788:
case 2486:
case 2687:
case 2877:
case 3162:
case 141:
case 3109:
case 543:
case 3925:
case 3428:
case 2340:
case 3647:
case 1742:
case 1472:
case 1114:
case 3446:
case 3975:
case 3748:
case 2787:
case 442:
case 2878:
case 2773:
case 3006:
case 2394:
case 3537:
case 1117:
case 3644:
case 938:
case 4001:
case 1247:
case 1087:
case 1073:
case 183:
case 2358:
case 2042:
case 2568:
case 2011:
case 1084:
case 3321:
case 1808:
case 1244:
case 790:
case 2402:
case 2469:
case 88:
case 2196:
case 3977:
case 2514:
case 3261:
case 4:
case 3193:
case 2986:
case 1316:
case 3974:
case 196:
case 3750:
case 2825:
case 1603:
case 279:
case 975:
case 25:
case 3928:
case 3425:
case 2564:
case 3299:
case 3211:
case 2170:
case 1088:
case 1804:
case 1366:
case 3242:
case 1276:
case 3082:
case 191:
case 1556:
case 2951:
case 2567:
case 2132:
case 4063:
case 2120:
case 2061:
case 1972:
case 3891:
case 890:
case 3978:
case 3745:
case 2500:
case 2943:
case 2419:
case 492:
case 1832:
case 2254:
case 3838:
case 3733:
case 2649:
case 3311:
case 875:
case 4023:
case 2935:
case 228:
case 1376:
case 2257:
case 3914:
case 380:
case 1348:
case 1175:
case 616:
case 2539:
case 240:
case 2701:
case 2527:
case 4084:
case 1013:
case 405:
case 1125:
case 1326:
case 2071:
case 1962:
case 64:
case 4073:
case 4087:
case 3465:
case 765:
case 3968:
case 2104:
case 990:
case 2865:
case 3834:
case 3900:
case 1063:
case 1941:
case 2434:
case 192:
case 1896:
case 1344:
case 3221:
case 3633:
case 324:
case 3415:
case 98:
case 3918:
case 3879:
case 3054:
case 2749:
case 2815:
case 4088:
case 3361:
case 213:
case 578:
case 2528:
case 1780:
case 611:
case 539:
case 2108:
case 3172:
case 2814:
case 624:
case 446:
case 3417:
case 2080:
case 2240:
case 2817:
case 2938:
case 2297:
case 1409:
case 551:
case 3468:
case 153:
case 940:
case 838:
case 164:
case 3502:
case 3569:
case 1289:
case 2294:
case 1049:
case 904:
case 85:
case 2331:
case 1174:
case 556:
case 1560:
case 1001:
case 2818:
case 1350:
case 2255:
case 779:
case 3591:
case 1177:
case 3519:
case 3400:
case 1441:
case 1771:
case 2934:
case 913:
case 1993:
case 2575:
case 2800:
case 1036:
case 3464:
case 147:
case 1507:
case 28:
case 3303:
case 1127:
case 869:
case 2864:
case 2306:
case 34:
case 2105:
case 2298:
case 3467:
case 4085:
case 3666:
case 2663:
case 3097:
case 1294:
case 2289:
case 59:
case 339:
case 2049:
case 3754:
case 2621:
case 264:
case 3236:
case 378:
case 2128:
case 2409:
case 253:
case 2462:
case 891:
case 1763:
case 3862:
case 3151:
case 9:
case 465:
case 783:
case 1938:
case 3932:
case 1080:
case 1240:
case 1613:
case 3920:
case 3143:
case 2671:
case 705:
case 1298:
case 3456:
case 1929:
case 3657:
case 2453:
case 883:
case 1663:
case 3654:
case 805:
case 274:
case 1525:
case 2036:
case 3033:
case 1105:
case 1306:
case 3089:
case 3841:
case 1255:
case 656:
case 242:
case 1934:
case 2441:
case 635:
case 997:
case 2560:
case 475:
case 1331:
case 2350:
case 1979:
case 3812:
case 4003:
case 1524:
case 2909:
case 1071:
case 841:
case 4042:
case 709:
case 1104:
case 2870:
case 2013:
case 1527:
case 1701:
case 1107:
case 2326:
case 3740:
case 3981:
case 2348:
case 1692:
case 3797:
case 2175:
case 2376:
case 1539:
case 1577:
case 140:
case 3119:
case 2052:
case 3191:
case 71:
case 3387:
case 3263:
case 2:
case 3794:
case 2832:
case 1021:
case 104:
case 516:
case 356:
case 1935:
case 1649:
case 3432:
case 81:
case 3522:
case 1528:
case 45:
case 2780:
case 479:
case 3169:
case 3755:
case 678:
case 1110:
case 2953:
case 3530:
case 351:
case 942:
case 947:
case 974:
case 809:
case 2912:
case 741:
case 2344:
case 1815:
case 3798:
case 1258:
case 3496:
case 3697:
case 1578:
case 1382:
case 2896:
case 3066:
case 292:
case 2941:
case 296:
case 753:
case 3179:
case 3313:
case 3137:
case 428:
case 2023:
case 404:
case 4021:
case 1395:
case 629:
case 2581:
case 1986:
case 3134:
case 440:
case 1514:
case 2808:
case 946:
case 1099:
case 169:
case 1011:
case 3408:
case 1469:
case 1402:
case 1358:
case 2073:
case 283:
case 2810:
case 2247:
case 3129:
case 2087:
case 3410:
case 343:
case 3288:
case 1568:
case 3509:
case 941:
case 352:
case 2972:
case 686:
case 1500:
case 310:
case 1491:
case 3631:
case 2860:
case 3090:
case 3138:
case 1518:
case 3512:
case 2226:
case 1132:
case 2165:
case 1357:
case 2930:
case 2366:
case 2088:
case 2248:
case 2556:
case 3273:
case 1951:
case 413:
case 15:
case 2603:
case 1825:
case 1354:
case 693:
case 3606:
case 357:
case 1170:
case 3044:
case 138:
case 3284:
case 1564:
case 1398:
case 2100:
case 3392:
case 892:
case 1687:
case 1839:
case 3782:
case 1486:
case 1877:
case 2520:
case 1788:
case 490:
case 2118:
case 246:
case 1059:
case 610:
case 652:
case 386:
case 4080:
case 905:
case 2699:
case 1824:
case 657:
case 625:
case 3045:
case 393:
case 3910:
case 3285:
case 996:
case 1969:
case 3908:
case 1902:
case 175:
case 2389:
case 1515:
case 1784:
case 3960:
case 2711:
case 1397:
case 991:
case 2114:
case 797:
case 2742:
case 1878:
case 1919:
case 1688:
case 2596:
case 3682:
case 3872:
case 3822:
case 3050:
case 48:
case 1828:
case 643:
case 1340:
case 792:
case 2168:
case 1451:
case 2522:
case 397:
case 3780:
case 2169:
case 2213:
case 2102:
case 893:
case 729:
case 982:
case 2530:
case 664:
case 3953:
case 1361:
case 1918:
case 1879:
case 1415:
case 2694:
case 1837:
case 1221:
case 108:
case 968:
case 987:
case 1054:
case 781:
case 2893:
case 3063:
case 1900:
case 2798:
case 2496:
case 1834:
case 2697:
case 2572:
case 2066:
case 2388:
case 3941:
case 392:
case 3962:
case 2655:
case 647:
case 3680:
case 3505:
case 2323:
case 434:
case 3326:
case 58:
case 3125:
case 2797:
case 1586:
case 1342:
case 2420:
case 2373:
case 2119:
case 2387:
case 2263:
case 3052:
case 2191:
case 1917:
case 793:
case 1311:
case 2432:
case 2853:
case 843:
case 2456:
case 2657:
case 3453:
case 1097:
case 3856:
case 1303:
case 3721:
case 752:
case 14:
case 3127:
case 2249:
case 3139:
case 2795:
case 1519:
case 540:
case 3177:
case 282:
case 2841:
case 2996:
case 951:
case 3441:
case 3771:
case 342:
case 757:
case 6:
case 4006:
case 116:
case 1716:
case 3508:
case 364:
case 2754:
case 956:
case 2970:
case 1359:
case 278:
case 2757:
case 3510:
case 3409:
case 3462:
case 1766:
case 2658:
case 3092:
case 697:
case 1835:
case 1616:
case 2201:
case 743:
case 3178:
case 2481:
case 810:
case 1172:
case 2695:
case 3146:
case 2143:
case 1579:
case 1644:
case 3117:
case 3389:
case 416:
case 4040:
case 925:
case 229:
case 835:
case 2960:
case 957:
case 751:
case 2336:
case 1748:
case 1776:
case 1446:
case 3742:
case 3472:
case 3596:
case 2050:
case 4094:
case 1726:
case 569:
case 341:
case 3430:
case 952:
case 910:
case 2830:
case 3661:
case 2904:
case 1477:
case 3642:
case 1648:
case 1483:
case 943:
case 112:
case 1141:
case 4055:
case 3520:
case 1538:
case 346:
case 3118:
case 1112:
case 309:
case 2349:
case 3611:
case 3699:
case 3167:
case 735:
case 1424:
case 293:
case 2285:
case 1153:
case 2045:
case 3761:
case 117:
case 3570:
case 3805:
case 538:
case 1380:
case 579:
case 55:
case 31:
case 2908:
case 3250:
case 1745:
case 1475:
case 1978:
case 3972:
case 609:
case 1946:
case 252:
case 210:
case 4057:
case 768:
case 646:
case 408:
case 424:
case 2631:
case 2460:
case 2138:
case 3226:
case 3930:
case 3276:
case 3248:
case 3804:
case 3366:
case 3088:
case 2047:
case 2287:
case 3556:
case 3807:
case 929:
case 3603:
case 3759:
case 839:
case 2606:
case 2407:
case 2284:
case 2044:
case 1974:
case 3316:
case 575:
case 2137:
case 1750:
case 2179:
case 3290:
case 1977:
case 1939:
case 1645:
case 480:
case 778:
case 1193:
case 2134:
case 4058:
case 1371:
case 3244:
case 868:
case 134:
case 3808:
case 3703:
case 887:
case 1802:
case 986:
case 2905:
case 641:
case 2706:
case 383:
case 2129:
case 2352:
case 2288:
case 2048:
case 2410:
case 4095:
case 827:
case 3589:
case 3208:
case 1337:
case 836:
case 2950:
case 926:
case 1025:
case 1931:
case 2444:
case 415:
case 3210:
case 3985:
case 695:
case 1334:
case 3488:
case 2783:
case 2888:
case 2678:
case 2777:
case 2447:
case 2501:
case 2727:
case 4015:
case 1906:
case 2490:
case 1705:
case 2060:
case 3890:
case 932:
case 1075:
case 3651:
case 2724:
case 3158:
case 4065:
case 2592:
case 1842:
case 3876:
case 3848:
case 3204:
case 3320:
case 2677:
case 2476:
case 2639:
case 2945:
case 2683:
case 203:
case 3207:
case 1811:
case 345:
case 2884:
case 3751:
case 1291:
case 831:
case 3157:
case 727:
case 3260:
case 1580:
case 318:
case 2728:
case 2627:
case 3423:
case 3154:
case 3826:
case 232:
case 3988:
case 3691:
case 76:
case 1982:
case 2885:
case 3198:
case 1660:
case 3205:
case 566:
case 1149:
case 1431:
case 1286:
case 1046:
case 699:
case 3072:
case 4000:
case 173:
case 571:
case 3356:
case 3155:
case 618:
case 4018:
case 1607:
case 3702:
case 1708:
case 498:
case 2625:
case 226:
case 87:
case 237:
case 3516:
case 2222:
case 1760:
case 2005:
case 2513:
case 4068:
case 3973:
case 1571:
case 2976:
case 1024:
case 2948:
case 2445:
case 1608:
case 2725:
case 4017:
case 154:
case 3602:
case 306:
case 289:
case 3140:
case 985:
case 2926:
case 3923:
case 1101:
case 1859:
case 2552:
case 163:
case 1610:
case 1039:
case 1077:
case 2362:
case 2272:
case 903:
case 2309:
case 198:
case 3012:
case 1235:
case 577:
case 2159:
case 3401:
case 633:
case 119:
case 1351:
case 3963:
case 500:
case 1561:
case 2765:
case 3629:
case 3679:
case 96:
case 1064:
case 3738:
case 3833:
case 885:
case 4028:
case 10:
case 2056:
case 1067:
case 803:
case 2209:
case 2588:
case 714:
case 1720:
case 1497:
case 463:
case 3729:
case 2665:
case 1958:
case 567:
case 1880:
case 1017:
case 3305:
case 703:
case 2103:
case 3526:
case 3734:
case 3062:
case 360:
case 1542:
case 3576:
case 1185:
case 3492:
case 1796:
case 4024:
case 1995:
case 1620:
case 2573:
case 3913:
case 3449:
case 255:
case 959:
case 1632:
case 3131:
case 227:
case 2715:
case 2584:
case 236:
case 3304:
case 120:
case 4075:
case 2466:
case 2667:
case 2863:
case 2768:
case 1656:
case 3220:
case 1457:
case 1238:
case 148:
case 1015:
case 1454:
case 889:
case 821:
case 1391:
case 1319:
case 2142:
case 2600:
case 1997:
case 726:
case 2111:
case 3735:
case 2199:
case 2618:
case 52:
case 3550:
case 2717:
case 1279:
case 826:
case 1302:
case 1237:
case 184:
case 3308:
case 602:
case 837:
case 955:
case 2032:
case 2764:
case 1559:
case 2020:
case 2852:
case 3452:
case 1756:
case 3635:
case 3816:
case 3413:
case 670:
case 2617:
case 2416:
case 2718:
case 2070:
case 3182:
case 1065:
case 3992:
case 1229:
case 1495:
case 1911:
case 733:
case 42:
case 1228:
case 1999:
case 2194:
case 295:
case 1317:
case 2845:
case 3976:
case 1942:
case 1314:
case 321:
case 2197:
case 2381:
case 206:
case 3926:
case 2923:
case 249:
case 945:
case 614:
case 3552:
case 1558:
case 1278:
case 3362:
case 1368:
case 3272:
case 2485:
case 2988:
case 3341:
case 201:
case 1051:
case 3885:
case 3947:
case 1300:
case 2198:
case 2205:
case 603:
case 3450:
case 1227:
case 3312:
case 2022:
case 2850:
case 2566:
case 923:
case 3353:
case 1557:
case 2356:
case 2155:
case 1367:
case 13:
case 3180:
case 1364:
case 1403:
case 2487:
case 472:
case 2473:
case 2743:
case 3639:
case 3887:
case 1442:
case 3677:
case 3746:
case 3778:
case 3873:
case 3010:
case 870:
case 1225:
case 385:
case 906:
case 1499:
case 2484:
case 1002:
case 166:
case 3674:
case 3549:
case 245:
case 807:
case 2751:
case 1555:
case 626:
case 1166:
case 400:
case 1275:
case 1730:
case 3426:
case 3627:
case 4038:
case 2154:
case 2826:
case 2589:
case 2208:
case 2844:
case 3950:
case 3536:
case 1315:
case 176:
case 3171:
case 223:
case 2985:
case 860:
case 2396:
case 3004:
case 3783:
case 2195:
case 1672:
case 770:
case 3727:
case 3628:
case 1903:
case 3121:
case 707:
case 1461:
case 3724:
case 563:
case 1091:
case 1630:
case 161:
case 4034:
case 631:
case 359:
case 37:
case 1190:
case 1980:
case 1421:
case 177:
case 1038:
case 3293:
case 3161:
case 1858:
case 233:
case 795:
case 2452:
case 3668:
case 1662:
case 2296:
case 2816:
case 2949:
case 1712:
case 3617:
case 3416:
case 1144:
case 172:
case 1741:
case 1471:
case 1895:
case 2182:
case 2545:
case 749:
case 2992:
case 3700:
case 801:
case 3614:
case 3096:
case 2463:
case 3466:
case 1034:
case 1762:
case 2093:
case 1709:
case 3863:
case 701:
case 1854:
case 36:
case 2232:
case 849:
case 1126:
case 622:
case 1506:
case 167:
case 2901:
case 806:
case 3664:
case 1037:
case 162:
case 627:
case 3714:
case 1176:
case 902:
case 1531:
case 2360:
case 895:
case 2735:
case 3989:
case 2550:
case 3241:
case 1855:
case 1324:
case 3081:
case 520:
case 2952:
case 745:
case 3665:
case 3523:
case 2106:
case 2305:
case 548:
case 2526:
case 3212:
case 1921:
case 194:
case 3253:
case 2576:
case 3892:
case 1898:
case 933:
case 718:
case 3587:
case 2492:
case 823:
case 2256:
case 355:
case 515:
case 2737:
case 2913:
case 1150:
case 2131:
case 3916:
case 1374:
case 3584:
case 3801:
case 3322:
case 2401:
case 1217:
case 2963:
case 202:
case 3966:
case 4043:
case 331:
case 1214:
case 3765:
case 2629:
case 2544:
case 845:
case 3489:
case 3056:
case 1897:
case 2634:
case 1346:
case 1145:
case 3262:
case 1582:
case 2053:
case 4051:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1756047601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,];
var gg_b = "1756047601/";

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
