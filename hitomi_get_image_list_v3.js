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
case 2517:
case 126:
case 1572:
case 1751:
case 2802:
case 73:
case 720:
case 3129:
case 772:
case 2302:
case 3589:
case 3313:
case 784:
case 3988:
case 2127:
case 1822:
case 1524:
case 2436:
case 1618:
case 4085:
case 388:
case 1650:
case 3349:
case 3340:
case 591:
case 2571:
case 1461:
case 3851:
case 100:
case 1865:
case 4013:
case 1460:
case 2053:
case 4067:
case 2409:
case 3156:
case 3901:
case 3816:
case 1756:
case 890:
case 1358:
case 2698:
case 1036:
case 294:
case 1669:
case 1594:
case 431:
case 511:
case 1454:
case 1583:
case 3374:
case 3474:
case 2403:
case 893:
case 40:
case 727:
case 1755:
case 845:
case 549:
case 2513:
case 2904:
case 2333:
case 808:
case 1884:
case 1578:
case 3214:
case 1944:
case 3543:
case 3614:
case 2914:
case 3557:
case 631:
case 1963:
case 2207:
case 1648:
case 3325:
case 1788:
case 3043:
case 357:
case 265:
case 2522:
case 224:
case 3112:
case 910:
case 170:
case 1441:
case 2499:
case 2774:
case 2970:
case 1066:
case 3678:
case 3700:
case 2483:
case 3352:
case 3528:
case 3793:
case 1962:
case 1645:
case 4000:
case 1859:
case 3144:
case 1123:
case 2748:
case 4059:
case 937:
case 691:
case 3018:
case 3360:
case 2054:
case 1747:
case 3:
case 3979:
case 2999:
case 1637:
case 2209:
case 3898:
case 1748:
case 4047:
case 1068:
case 380:
case 2568:
case 4070:
case 2581:
case 1868:
case 3713:
case 1917:
case 3734:
case 546:
case 584:
case 3740:
case 3118:
case 1158:
case 136:
case 1185:
case 588:
case 3273:
case 342:
case 327:
case 1925:
case 201:
case 2371:
case 4088:
case 1503:
case 469:
case 465:
case 286:
case 3707:
case 2709:
case 2225:
case 3498:
case 3119:
case 999:
case 322:
case 269:
case 1636:
case 1423:
case 939:
case 113:
case 2600:
case 3450:
case 918:
case 3291:
case 4004:
case 2893:
case 621:
case 1353:
case 3990:
case 3078:
case 1346:
case 22:
case 2850:
case 1155:
case 3856:
case 2508:
case 3540:
case 1707:
case 1183:
case 954:
case 2961:
case 3469:
case 4016:
case 3303:
case 1780:
case 2906:
case 560:
case 2678:
case 1201:
case 1165:
case 545:
case 2788:
case 3286:
case 2352:
case 1937:
case 99:
case 2830:
case 3777:
case 3641:
case 2867:
case 554:
case 2434:
case 2391:
case 2005:
case 714:
case 3387:
case 3620:
case 2629:
case 783:
case 1482:
case 1202:
case 2071:
case 3213:
case 132:
case 346:
case 2262:
case 3908:
case 689:
case 2528:
case 818:
case 2218:
case 4006:
case 2758:
case 2737:
case 2375:
case 1039:
case 1782:
case 3217:
case 2293:
case 3927:
case 3207:
case 1174:
case 2019:
case 2241:
case 892:
case 896:
case 1787:
case 2066:
case 1220:
case 601:
case 3523:
case 3729:
case 2874:
case 195:
case 1144:
case 2520:
case 2607:
case 4011:
case 3504:
case 3832:
case 1775:
case 2535:
case 3004:
case 2068:
case 3378:
case 4032:
case 2884:
case 820:
case 913:
case 2819:
case 468:
case 3705:
case 3930:
case 855:
case 3347:
case 1940:
case 3580:
case 1922:
case 3145:
case 172:
case 1082:
case 1544:
case 2201:
case 881:
case 2467:
case 886:
case 1402:
case 3224:
case 2742:
case 1078:
case 2556:
case 3138:
case 31:
case 3477:
case 2280:
case 2877:
case 3741:
case 531:
case 1287:
case 1456:
case 2612:
case 442:
case 1145:
case 3775:
case 3968:
case 1038:
case 162:
case 3287:
case 2487:
case 1617:
case 3361:
case 1877:
case 1968:
case 1793:
case 1652:
case 1384:
case 2481:
case 753:
case 3170:
case 1856:
case 2740:
case 2220:
case 1445:
case 2931:
case 623:
case 457:
case 2312:
case 3014:
case 2031:
case 52:
case 617:
case 2474:
case 774:
case 1500:
case 407:
case 1498:
case 3099:
case 2662:
case 2500:
case 640:
case 3825:
case 2277:
case 4015:
case 1323:
case 2650:
case 3804:
case 2442:
case 3327:
case 1603:
case 3698:
case 1046:
case 680:
case 1587:
case 693:
case 2791:
case 2912:
case 3070:
case 865:
case 3895:
case 2377:
case 677:
case 3723:
case 3418:
case 1998:
case 408:
case 4063:
case 3810:
case 2245:
case 2128:
case 3981:
case 329:
case 1140:
case 1559:
case 3733:
case 2741:
case 2716:
case 1664:
case 989:
case 3343:
case 2012:
case 3481:
case 129:
case 3373:
case 4009:
case 2451:
case 1240:
case 1198:
case 3853:
case 3961:
case 599:
case 2526:
case 3899:
case 3106:
case 754:
case 2527:
case 3929:
case 3984:
case 2309:
case 3073:
case 3314:
case 2319:
case 1588:
case 3116:
case 2771:
case 3025:
case 2158:
case 1302:
case 841:
case 3431:
case 856:
case 1607:
case 637:
case 1002:
case 3995:
case 2936:
case 1173:
case 181:
case 926:
case 2982:
case 2151:
case 2356:
case 2386:
case 384:
case 3989:
case 1696:
case 3249:
case 525:
case 3595:
case 426:
case 695:
case 1761:
case 595:
case 2634:
case 1395:
case 3403:
case 3893:
case 496:
case 1699:
case 2074:
case 1234:
case 1808:
case 308:
case 3007:
case 1807:
case 251:
case 1388:
case 2534:
case 3512:
case 110:
case 1278:
case 2098:
case 4017:
case 3463:
case 1673:
case 2952:
case 2566:
case 242:
case 1023:
case 1079:
case 2541:
case 3370:
case 3999:
case 2234:
case 1921:
case 2089:
case 2015:
case 1750:
case 2392:
case 3299:
case 3002:
case 878:
case 2214:
case 1368:
case 3191:
case 3386:
case 3644:
case 1730:
case 1364:
case 604:
case 3994:
case 3768:
case 458:
case 1801:
case 348:
case 425:
case 3434:
case 1028:
case 279:
case 1221:
case 1471:
case 317:
case 1275:
case 3389:
case 3807:
case 3571:
case 1141:
case 2462:
case 443:
case 8:
case 2460:
case 101:
case 3940:
case 9:
case 1044:
case 3409:
case 1206:
case 2671:
case 2431:
case 4008:
case 3824:
case 540:
case 2577:
case 1521:
case 2359:
case 556:
case 3760:
case 1040:
case 951:
case 2283:
case 4002:
case 1557:
case 1063:
case 950:
case 898:
case 2718:
case 2985:
case 558:
case 367:
case 1055:
case 3216:
case 94:
case 2739:
case 2342:
case 267:
case 1175:
case 1248:
case 2555:
case 2726:
case 196:
case 1842:
case 3537:
case 347:
case 1129:
case 3628:
case 2832:
case 3680:
case 1372:
case 1568:
case 38:
case 2542:
case 1468:
case 1627:
case 2021:
case 3973:
case 707:
case 773:
case 278:
case 670:
case 3331:
case 2890:
case 955:
case 1313:
case 1611:
case 2130:
case 1375:
case 2357:
case 2687:
case 1956:
case 3914:
case 1971:
case 2663:
case 1209:
case 646:
case 1244:
case 1067:
case 3569:
case 305:
case 1294:
case 923:
case 3712:
case 1616:
case 597:
case 228:
case 1504:
case 3997:
case 2203:
case 4087:
case 3388:
case 2163:
case 1857:
case 173:
case 2803:
case 1021:
case 974:
case 3433:
case 1823:
case 1796:
case 3186:
case 2076:
case 2134:
case 3663:
case 2891:
case 213:
case 3629:
case 2710:
case 1716:
case 1678:
case 3875:
case 3866:
case 580:
case 1711:
case 3163:
case 2058:
case 2294:
case 1001:
case 2150:
case 386:
case 1606:
case 1134:
case 3117:
case 1030:
case 2531:
case 1092:
case 703:
case 1007:
case 1274:
case 536:
case 39:
case 3344:
case 3582:
case 2785:
case 1811:
case 581:
case 1277:
case 3588:
case 424:
case 2239:
case 2364:
case 2361:
case 3221:
case 3656:
case 799:
case 2826:
case 2146:
case 1988:
case 3896:
case 3227:
case 1743:
case 4075:
case 768:
case 722:
case 17:
case 2512:
case 2162:
case 3604:
case 3525:
case 1255:
case 1128:
case 3300:
case 780:
case 642:
case 3669:
case 2324:
case 1878:
case 2887:
case 857:
case 2853:
case 229:
case 1479:
case 1317:
case 2950:
case 49:
case 182:
case 1575:
case 2165:
case 1536:
case 1339:
case 4055:
case 2212:
case 1334:
case 517:
case 1930:
case 3153:
case 1148:
case 973:
case 3693:
case 859:
case 1829:
case 2177:
case 952:
case 1845:
case 1403:
case 2927:
case 1786:
case 879:
case 2490:
case 1290:
case 1635:
case 3445:
case 882:
case 2402:
case 2343:
case 1377:
case 664:
case 1464:
case 3365:
case 3737:
case 1041:
case 2593:
case 1005:
case 1797:
case 1783:
case 1018:
case 2171:
case 2385:
case 1400:
case 1410:
case 373:
case 3855:
case 3913:
case 1434:
case 1235:
case 1737:
case 4094:
case 3310:
case 2086:
case 1284:
case 2551:
case 114:
case 3054:
case 2804:
case 3852:
case 2298:
case 1976:
case 2797:
case 548:
case 1299:
case 203:
case 559:
case 3822:
case 295:
case 1130:
case 1200:
case 3692:
case 1233:
case 3385:
case 2365:
case 2264:
case 261:
case 1717:
case 277:
case 3458:
case 2368:
case 56:
case 155:
case 3924:
case 3688:
case 625:
case 138:
case 3916:
case 1869:
case 1838:
case 1051:
case 2257:
case 2849:
case 2105:
case 2820:
case 176:
case 1354:
case 862:
case 3178:
case 1595:
case 2821:
case 3679:
case 3270:
case 3978:
case 46:
case 3019:
case 92:
case 1610:
case 133:
case 2397:
case 3553:
case 2266:
case 3319:
case 2360:
case 3503:
case 2769:
case 171:
case 2911:
case 2897:
case 1939:
case 1910:
case 885:
case 3811:
case 3442:
case 3114:
case 1612:
case 505:
case 3691:
case 2009:
case 3234:
case 82:
case 3274:
case 19:
case 3934:
case 3531:
case 2083:
case 655:
case 2860:
case 1632:
case 787:
case 3084:
case 3124:
case 1919:
case 1178:
case 3210:
case 3907:
case 3077:
case 1726:
case 2092:
case 1984:
case 3975:
case 875:
case 1272:
case 1341:
case 2515:
case 2995:
case 1746:
case 1101:
case 1915:
case 994:
case 471:
case 1888:
case 957:
case 42:
case 2108:
case 498:
case 2730:
case 205:
case 936:
case 3272:
case 218:
case 422:
case 2018:
case 848:
case 1662:
case 3821:
case 743:
case 2749:
case 1213:
case 3188:
case 1663:
case 2482:
case 188:
case 3440:
case 3921:
case 1343:
case 1311:
case 3424:
case 3878:
case 715:
case 2829:
case 565:
case 763:
case 710:
case 3108:
case 3039:
case 1647:
case 1246:
case 285:
case 1146:
case 1436:
case 1509:
case 819:
case 2156:
case 2547:
case 2866:
case 3414:
case 524:
case 2606:
case 758:
case 792:
case 3332:
case 3761:
case 1427:
case 1309:
case 2056:
case 1227:
case 141:
case 570:
case 1546:
case 1295:
case 1728:
case 3109:
case 3022:
case 1451:
case 3613:
case 2040:
case 416:
case 2794:
case 1690:
case 4086:
case 550:
case 328:
case 2242:
case 3358:
case 3735:
case 3121:
case 3904:
case 2297:
case 1025:
case 2760:
case 1874:
case 3085:
case 1059:
case 1974:
case 3157:
case 3401:
case 1115:
case 3785:
case 4069:
case 2703:
case 678:
case 3539:
case 1080:
case 874:
case 3035:
case 877:
case 318:
case 1293:
case 2000:
case 2948:
case 3947:
case 3779:
case 239:
case 1739:
case 3483:
case 914:
case 2798:
case 2949:
case 332:
case 1194:
case 977:
case 1693:
case 2964:
case 3849:
case 2412:
case 2812:
case 4083:
case 1600:
case 3488:
case 3350:
case 2942:
case 3288:
case 3396:
case 2997:
case 798:
case 2899:
case 112:
case 2390:
case 1015:
case 4039:
case 2094:
case 2779:
case 432:
case 315:
case 2339:
case 366:
case 3439:
case 2667:
case 1953:
case 3467:
case 3842:
case 1601:
case 1894:
case 1215:
case 3952:
case 852:
case 248:
case 3289:
case 3909:
case 143:
case 1260:
case 762:
case 825:
case 2604:
case 2601:
case 3649:
case 1547:
case 3034:
case 1784:
case 3650:
case 3489:
case 2314:
case 449:
case 2523:
case 3820:
case 1795:
case 2428:
case 396:
case 1882:
case 3068:
case 2440:
case 1941:
case 3806:
case 2464:
case 1695:
case 2947:
case 833:
case 3164:
case 3517:
case 3518:
case 1742:
case 594:
case 85:
case 1949:
case 2772:
case 2285:
case 836:
case 313:
case 2587:
case 4090:
case 3701:
case 1724:
case 3079:
case 1431:
case 1138:
case 3013:
case 2159:
case 4054:
case 1207:
case 186:
case 430:
case 1864:
case 404:
case 700:
case 1467:
case 304:
case 2140:
case 1126:
case 3047:
case 1520:
case 804:
case 962:
case 3372:
case 3009:
case 391:
case 298:
case 2525:
case 398:
case 3965:
case 2453:
case 1381:
case 1399:
case 2973:
case 88:
case 2093:
case 1896:
case 1843:
case 333:
case 2382:
case 2673:
case 2494:
case 2131:
case 1804:
case 541:
case 2073:
case 3294:
case 2574:
case 1667:
case 3306:
case 3657:
case 1256:
case 2594:
case 3241:
case 3391:
case 1622:
case 451:
case 368:
case 1045:
case 1380:
case 2786:
case 105:
case 3763:
case 2561:
case 444:
case 1389:
case 1765:
case 3326:
case 4001:
case 3830:
case 1157:
case 1830:
case 2691:
case 1511:
case 1839:
case 944:
case 3417:
case 2688:
case 3177:
case 169:
case 2616:
case 32:
case 108:
case 629:
case 2317:
case 3357:
case 3933:
case 3931:
case 3922:
case 3545:
case 1697:
case 2614:
case 3375:
case 2940:
case 336:
case 2679:
case 1683:
case 1570:
case 1815:
case 3184:
case 3662:
case 728:
case 1356:
case 3134:
case 2584:
case 2190:
case 3282:
case 667:
case 1489:
case 1816:
case 2160:
case 1252:
case 2202:
case 3770:
case 739:
case 254:
case 96:
case 757:
case 2858:
case 2145:
case 2215:
case 830:
case 933:
case 1008:
case 1398:
case 1767:
case 3624:
case 2079:
case 3150:
case 3435:
case 1401:
case 466:
case 1013:
case 483:
case 1858:
case 585:
case 1450:
case 3190:
case 940:
case 3485:
case 987:
case 574:
case 1304:
case 832:
case 2855:
case 117:
case 1854:
case 2311:
case 2043:
case 3601:
case 2485:
case 4037:
case 925:
case 1598:
case 730:
case 967:
case 3827:
case 872:
case 2765:
case 1975:
case 3717:
case 2719:
case 3265:
case 352:
case 522:
case 402:
case 654:
case 3411:
case 149:
case 3031:
case 980:
case 1806:
case 4025:
case 179:
case 2336:
case 4061:
case 1192:
case 2454:
case 771:
case 3275:
case 387:
case 969:
case 717:
case 4064:
case 1169:
case 781:
case 3278:
case 452:
case 519:
case 2921:
case 3042:
case 1577:
case 3266:
case 2175:
case 1475:
case 1077:
case 1397:
case 2864:
case 3936:
case 3497:
case 330:
case 2465:
case 1885:
case 53:
case 3865:
case 2398:
case 2470:
case 2437:
case 3758:
case 2238:
case 2237:
case 979:
case 3600:
case 3906:
case 2443:
case 3797:
case 392:
case 1259:
case 2217:
case 1114:
case 3861:
case 492:
case 2674:
case 2313:
case 3703:
case 3535:
case 2008:
case 3718:
case 3425:
case 3010:
case 1633:
case 1330:
case 1350:
case 1425:
case 4091:
case 3736:
case 2554:
case 268:
case 1418:
case 433:
case 1549:
case 2502:
case 2664:
case 2330:
case 2:
case 1029:
case 490:
case 116:
case 3298:
case 3072:
case 16:
case 2938:
case 2562:
case 104:
case 1623:
case 684:
case 3773:
case 2770:
case 2198:
case 534:
case 2316:
case 2660:
case 296:
case 3181:
case 45:
case 1725:
case 2838:
case 3293:
case 924:
case 3087:
case 1548:
case 0:
case 349:
case 871:
case 1502:
case 3783:
case 2514:
case 648:
case 1927:
case 767:
case 323:
case 2197:
case 2337:
case 3715:
case 1893:
case 1058:
case 4081:
case 3330:
case 2259:
case 3142:
case 887:
case 1959:
case 3839:
case 1880:
case 2141:
case 816:
case 485:
case 21:
case 2486:
case 2381:
case 1762:
case 345:
case 3590:
case 1150:
case 3059:
case 1297:
case 72:
case 2882:
case 372:
case 3782:
case 2263:
case 3028:
case 2408:
case 1824:
case 3838:
case 810:
case 418:
case 4023:
case 2681:
case 2290:
case 2925:
case 131:
case 3012:
case 672:
case 1596:
case 198:
case 2300:
case 2898:
case 3131:
case 726:
case 3514:
case 435:
case 956:
case 3935:
case 2344:
case 193:
case 555:
case 111:
case 782:
case 3238:
case 1473:
case 537:
case 1722:
case 1620:
case 2363:
case 2926:
case 360:
case 1222:
case 837:
case 7:
case 2807:
case 1506:
case 343:
case 3251:
case 1615:
case 639:
case 2334:
case 2543:
case 24:
case 788:
case 4019:
case 403:
case 1698:
case 2894:
case 2387:
case 3041:
case 2637:
case 2918:
case 2251:
case 376:
case 1466:
case 1643:
case 1634:
case 477:
case 571:
case 817:
case 807:
case 2609:
case 985:
case 2901:
case 90:
case 1661:
case 64:
case 2992:
case 378:
case 528:
case 2638:
case 1483:
case 3831:
case 702:
case 2256:
case 3938:
case 2346:
case 2060:
case 2115:
case 2157:
case 1799:
case 2221:
case 331:
case 137:
case 1844:
case 854:
case 3576:
case 2085:
case 2488:
case 1907:
case 609:
case 3603:
case 1654:
case 2439:
case 3813:
case 3482:
case 3598:
case 297:
case 1681:
case 2545:
case 2267:
case 1537:
case 1871:
case 2286:
case 1738:
case 2975:
case 2291:
case 2384:
case 1071:
case 3284:
case 650:
case 2946:
case 2161:
case 2424:
case 4003:
case 1149:
case 1978:
case 2969:
case 363:
case 95:
case 1942:
case 1291:
case 746:
case 2491:
case 450:
case 2315:
case 1817:
case 3023:
case 2573:
case 566:
case 733:
case 1528:
case 247:
case 2503:
case 3444:
case 1074:
case 3714:
case 1981:
case 3176:
case 1070:
case 927:
case 3161:
case 1666:
case 257:
case 3728:
case 2553:
case 2635:
case 2524:
case 1701:
case 3884:
case 3668:
case 608:
case 2182:
case 3998:
case 1034:
case 2039:
case 3088:
case 214:
case 718:
case 3530:
case 1539:
case 2168:
case 3101:
case 2728:
case 4065:
case 3171:
case 2590:
case 130:
case 2900:
case 1892:
case 838:
case 1217:
case 3872:
case 1273:
case 1835:
case 20:
case 3316:
case 734:
case 3966:
case 1057:
case 2349:
case 2231:
case 3376:
case 3915:
case 3362:
case 2400:
case 3787:
case 2243:
case 220:
case 1833:
case 786:
case 3056:
case 2869:
case 1024:
case 1906:
case 3021:
case 59:
case 3158:
case 3805:
case 3945:
case 3706:
case 1184:
case 2919:
case 1501:
case 2469:
case 2038:
case 2712:
case 3888:
case 3925:
case 543:
case 847:
case 2653:
case 3179:
case 3329:
case 2796:
case 960:
case 1168:
case 255:
case 1143:
case 1429:
case 1345:
case 3354:
case 3416:
case 1772:
case 3844:
case 3296:
case 2307:
case 3561:
case 2505:
case 2621:
case 3384:
case 1212:
case 1428:
case 2761:
case 3449:
case 2721:
case 582:
case 1965:
case 4030:
case 3426:
case 1245:
case 2717:
case 2787:
case 2078:
case 3086:
case 2329:
case 3165:
case 1186:
case 692:
case 463:
case 3817:
case 2107:
case 2521:
case 86:
case 3060:
case 3490:
case 2597:
case 2258:
case 2781:
case 1075:
case 1951:
case 2626:
case 3020:
case 3337:
case 2230:
case 2247:
case 3033:
case 495:
case 3428:
case 539:
case 1262:
case 3607:
case 3492:
case 377:
case 3136:
case 3466:
case 2260:
case 2889:
case 3228:
case 1832:
case 867:
case 54:
case 949:
case 1457:
case 1582:
case 3443:
case 1490:
case 2125:
case 1438:
case 3011:
case 3499:
case 1188:
case 3798:
case 2883:
case 262:
case 2255:
case 1409:
case 814:
case 189:
case 292:
case 3382:
case 3765:
case 1132:
case 2401:
case 611:
case 653:
case 3263:
case 1250:
case 1540:
case 1413:
case 3405:
case 844:
case 2784:
case 3704:
case 2842:
case 3322:
case 2713:
case 2775:
case 3040:
case 1393:
case 3321:
case 338:
case 1898:
case 794:
case 3254:
case 2567:
case 938:
case 3611:
case 2480:
case 1736:
case 2755:
case 1692:
case 3470:
case 1016:
case 3702:
case 3575:
case 3455:
case 476:
case 3554:
case 3167:
case 2828:
case 2677:
case 2694:
case 1810:
case 2049:
case 1513:
case 102:
case 154:
case 2815:
case 3232:
case 3671:
case 2959:
case 2533:
case 1097:
case 2340:
case 6:
case 1776:
case 2136:
case 1631:
case 3939:
case 2639:
case 1404:
case 2350:
case 2801:
case 643:
case 2692:
case 1474:
case 11:
case 324:
case 2135:
case 1977:
case 711:
case 2878:
case 2050:
case 2993:
case 2236:
case 1757:
case 888:
case 480:
case 1237:
case 3162:
case 70:
case 2119:
case 2559:
case 3271:
case 1735:
case 1117:
case 2327:
case 3261:
case 2708:
case 2746:
case 2613:
case 928:
case 2630:
case 1969:
case 759:
case 1682:
case 1656:
case 2355:
case 1110:
case 3001:
case 1127:
case 58:
case 3823:
case 3972:
case 3032:
case 3757:
case 1586:
case 1257:
case 166:
case 1532:
case 3427:
case 3666:
case 1759:
case 2007:
case 3383:
case 2113:
case 3602:
case 2011:
case 853:
case 2399:
case 603:
case 1825:
case 3413:
case 1912:
case 2195:
case 3577:
case 1916:
case 412:
case 3881:
case 3258:
case 3230:
case 675:
case 2320:
case 2618:
case 29:
case 802:
case 264:
case 3185:
case 576:
case 3367:
case 3759:
case 2176:
case 2070:
case 764:
case 1809:
case 2736:
case 2388:
case 3096:
case 2181:
case 3438:
case 900:
case 3231:
case 35:
case 1367:
case 290:
case 3643:
case 2389:
case 1836:
case 2504:
case 1109:
case 30:
case 2792:
case 244:
case 2250:
case 1781:
case 3593:
case 2693:
case 409:
case 411:
case 2675:
case 2831:
case 3685:
case 2750:
case 2666:
case 1677:
case 2372:
case 1771:
case 3468:
case 2002:
case 3683:
case 901:
case 1310:
case 1031:
case 3197:
case 3756:
case 314:
case 1516:
case 1136:
case 1668:
case 1672:
case 2697:
case 79:
case 312:
case 3111:
case 1170:
case 3005:
case 963:
case 448:
case 2179:
case 410:
case 1286:
case 557:
case 1584:
case 2380:
case 568:
case 2013:
case 1972:
case 1840:
case 1472:
case 2696:
case 1147:
case 4043:
case 2811:
case 2627:
case 889:
case 3742:
case 1392:
case 2457:
case 233:
case 3366:
case 2088:
case 4049:
case 3045:
case 673:
case 3583:
case 275:
case 3812:
case 63:
case 1003:
case 2939:
case 2507:
case 1336:
case 634:
case 1452:
case 1049:
case 454:
case 748:
case 1932:
case 1447:
case 521:
case 2423:
case 272:
case 3724:
case 197:
case 2941:
case 3719:
case 1769:
case 1281:
case 3599:
case 3323:
case 2823:
case 3103:
case 2615:
case 417:
case 3750:
case 293:
case 705:
case 3058:
case 241:
case 2044:
case 3747:
case 2695:
case 361:
case 4056:
case 2415:
case 2631:
case 447:
case 3061:
case 1881:
case 204:
case 310:
case 3573:
case 1753:
case 1060:
case 2006:
case 2427:
case 3847:
case 2916:
case 2773:
case 2564:
case 1098:
case 1337:
case 905:
case 1020:
case 3336:
case 1514:
case 3522:
case 1455:
case 3402:
case 3677:
case 125:
case 1230:
case 1766:
case 3239:
case 1105:
case 2579:
case 2680:
case 3141:
case 770:
case 3980:
case 538:
case 381:
case 760:
case 3351:
case 3205:
case 2501:
case 911:
case 3346:
case 2686:
case 2228:
case 3570:
case 470:
case 1741:
case 2167:
case 1107:
case 1316:
case 2274:
case 1133:
case 1347:
case 2325:
case 1111:
case 1887:
case 1142:
case 5:
case 3475:
case 1642:
case 3328:
case 4046:
case 1569:
case 4078:
case 1831:
case 1573:
case 1223:
case 803:
case 3799:
case 3631:
case 1967:
case 394:
case 1253:
case 2475:
case 1432:
case 3969:
case 2996:
case 3584:
case 3708:
case 3192:
case 1396:
case 66:
case 2544:
case 750:
case 2016:
case 2143:
case 3674:
case 139:
case 3890:
case 2452:
case 1948:
case 1442:
case 3781:
case 1335:
case 3133:
case 1050:
case 3044:
case 3869:
case 2895:
case 3695:
case 2605:
case 2087:
case 839:
case 4042:
case 2987:
case 2910:
case 2915:
case 55:
case 1118:
case 2117:
case 2859:
case 2211:
case 319:
case 1943:
case 620:
case 1412:
case 2795:
case 751:
case 2682:
case 3762:
case 2738:
case 1814:
case 4035:
case 3368:
case 81:
case 3843:
case 160:
case 708:
case 2095:
case 1720:
case 1995:
case 3991:
case 3755:
case 1017:
case 2227:
case 3885:
case 2814:
case 1324:
case 912:
case 3301:
case 3507:
case 1779:
case 2988:
case 2851:
case 3155:
case 2299:
case 3948:
case 2572:
case 682:
case 282:
case 2407:
case 2955:
case 475:
case 1560:
case 1195:
case 1179:
case 598:
case 3684:
case 797:
case 1923:
case 385:
case 649:
case 996:
case 167:
case 1526:
case 1122:
case 2592:
case 3642:
case 1160:
case 4:
case 1553:
case 3897:
case 1626:
case 2276:
case 3559:
case 2472:
case 1873:
case 2632:
case 2846:
case 1458:
case 1614:
case 2706:
case 219:
case 3533:
case 2885:
case 821:
case 2998:
case 3538:
case 4026:
case 1533:
case 121:
case 1478:
case 704:
case 445:
case 3235:
case 1359:
case 3912:
case 364:
case 2958:
case 3868:
case 2345:
case 2852:
case 2509:
case 740:
case 1732:
case 2963:
case 2497:
case 2383:
case 626:
case 2099:
case 2441:
case 3672:
case 1171:
case 988:
case 3457:
case 3064:
case 3510:
case 791:
case 118:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1662091201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,];
var gg_b = "1662091201/";

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
