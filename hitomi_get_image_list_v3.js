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
case 4026:
case 2995:
case 320:
case 998:
case 2851:
case 1671:
case 2768:
case 142:
case 2302:
case 39:
case 2809:
case 2715:
case 1620:
case 190:
case 2330:
case 129:
case 2244:
case 3347:
case 2789:
case 1684:
case 3064:
case 174:
case 2454:
case 3816:
case 1197:
case 1986:
case 3263:
case 466:
case 534:
case 936:
case 2254:
case 1690:
case 3632:
case 3357:
case 2676:
case 2832:
case 1377:
case 2188:
case 149:
case 3527:
case 3486:
case 377:
case 2444:
case 2974:
case 2925:
case 2780:
case 2152:
case 1136:
case 2800:
case 3600:
case 2841:
case 3536:
case 2775:
case 2724:
case 510:
case 340:
case 2981:
case 1611:
case 2169:
case 1366:
case 2667:
case 3867:
case 14:
case 2978:
case 1787:
case 706:
case 3612:
case 2184:
case 2812:
case 46:
case 3024:
case 93:
case 2321:
case 2319:
case 2370:
case 2199:
case 2282:
case 2551:
case 2697:
case 2258:
case 1396:
case 1116:
case 1642:
case 1923:
case 939:
case 2171:
case 602:
case 2385:
case 911:
case 1773:
case 3753:
case 3493:
case 146:
case 207:
case 1631:
case 2728:
case 3080:
case 4066:
case 1807:
case 1546:
case 1993:
case 1326:
case 3089:
case 3743:
case 2391:
case 917:
case 1669:
case 60:
case 58:
case 1556:
case 2965:
case 2310:
case 3903:
case 2190:
case 955:
case 3156:
case 3068:
case 1176:
case 1004:
case 3423:
case 2541:
case 3672:
case 2248:
case 1:
case 2636:
case 462:
case 180:
case 2411:
case 26:
case 1353:
case 2578:
case 3373:
case 2909:
case 1523:
case 988:
case 3695:
case 2951:
case 2429:
case 2895:
case 1706:
case 2220:
case 389:
case 2749:
case 3638:
case 2490:
case 2814:
case 1946:
case 407:
case 3614:
case 1476:
case 1605:
case 1863:
case 3456:
case 2158:
case 1654:
case 133:
case 2290:
case 2874:
case 3625:
case 1276:
case 3256:
case 1593:
case 538:
case 1002:
case 763:
case 2932:
case 1956:
case 356:
case 3976:
case 2701:
case 1103:
case 2484:
case 2534:
case 3967:
case 1030:
case 116:
case 2881:
case 995:
case 2762:
case 3681:
case 2420:
case 667:
case 941:
case 2211:
case 2941:
case 80:
case 262:
case 3193:
case 3313:
case 2900:
case 2017:
case 1267:
case 382:
case 3997:
case 577:
case 131:
case 2026:
case 2488:
case 1436:
case 2452:
case 3062:
case 1747:
case 1091:
case 2912:
case 150:
case 334:
case 3678:
case 3717:
case 1658:
case 1907:
case 1010:
case 2469:
case 1079:
case 2514:
case 3059:
case 310:
case 11:
case 4043:
case 3001:
case 2304:
case 943:
case 2231:
case 1427:
case 592:
case 806:
case 3207:
case 2538:
case 2037:
case 3333:
case 386:
case 1227:
case 59:
case 3049:
case 4053:
case 2525:
case 2269:
case 2574:
case 1019:
case 2460:
case 2722:
case 3050:
case 3927:
case 3766:
case 2442:
case 2818:
case 137:
case 335:
case 2288:
case 2603:
case 1236:
case 2581:
case 2865:
case 1892:
case 646:
case 1121:
case 3830:
case 3149:
case 3498:
case 3758:
case 4052:
case 2196:
case 774:
case 2987:
case 2661:
case 1170:
case 1119:
case 243:
case 1928:
case 3435:
case 258:
case 2253:
case 1550:
case 72:
case 3351:
case 1371:
case 3519:
case 1408:
case 3521:
case 4069:
case 2973:
case 3228:
case 1208:
case 1964:
case 3162:
case 2243:
case 4060:
case 6:
case 1540:
case 2126:
case 413:
case 3428:
case 1501:
case 3300:
case 2913:
case 1683:
case 2367:
case 2005:
case 3063:
case 3235:
case 2793:
case 2453:
case 722:
case 4031:
case 1559:
case 485:
case 1311:
case 3264:
case 3579:
case 3510:
case 3657:
case 3298:
case 1677:
case 2857:
case 2376:
case 1179:
case 564:
case 300:
case 3591:
case 1390:
case 1562:
case 626:
case 1734:
case 816:
case 1998:
case 3140:
case 674:
case 1245:
case 1102:
case 850:
case 439:
case 270:
case 3885:
case 1360:
case 2685:
case 1915:
case 411:
case 1592:
case 3606:
case 1003:
case 3424:
case 2048:
case 746:
case 629:
case 2806:
case 831:
case 3945:
case 4011:
case 1204:
case 1331:
case 1968:
case 1994:
case 3821:
case 96:
case 1738:
case 3289:
case 3480:
case 4090:
case 690:
case 454:
case 221:
case 106:
case 247:
case 1696:
case 2397:
case 2117:
case 3705:
case 2619:
case 62:
case 1161:
case 1714:
case 1850:
case 3294:
case 64:
case 1859:
case 2610:
case 2679:
case 3494:
case 3754:
case 3879:
case 3372:
case 3489:
case 1637:
case 1352:
case 7:
case 1840:
case 1388:
case 1139:
case 1801:
case 241:
case 1862:
case 3415:
case 3275:
case 3224:
case 726:
case 1255:
case 837:
case 1404:
case 2183:
case 3023:
case 3539:
case 2166:
case 3468:
case 2557:
case 1445:
case 3122:
case 417:
case 3891:
case 1975:
case 1924:
case 1515:
case 3292:
case 3961:
case 3338:
case 2029:
case 1712:
case 2887:
case 3504:
case 1439:
case 3687:
case 1305:
case 4048:
case 1568:
case 3742:
case 2217:
case 3545:
case 842:
case 778:
case 2947:
case 1992:
case 3314:
case 2011:
case 61:
case 494:
case 1202:
case 23:
case 780:
case 3168:
case 650:
case 2466:
case 1594:
case 619:
case 829:
case 3731:
case 2483:
case 1104:
case 1828:
case 3902:
case 3046:
case 1155:
case 1922:
case 3124:
case 3175:
case 637:
case 2084:
case 3381:
case 1580:
case 875:
case 849:
case 255:
case 1835:
case 2813:
case 232:
case 441:
case 3769:
case 3222:
case 2277:
case 1898:
case 568:
case 84:
case 822:
case 1354:
case 163:
case 1461:
case 901:
case 3325:
case 2020:
case 3180:
case 3752:
case 1575:
case 217:
case 1239:
case 3788:
case 2645:
case 678:
case 1285:
case 3771:
case 71:
case 1751:
case 1491:
case 3462:
case 2833:
case 1036:
case 3720:
case 2052:
case 2604:
case 2426:
case 443:
case 2587:
case 1221:
case 3970:
case 458:
case 1889:
case 2746:
case 3249:
case 846:
case 903:
case 1027:
case 4054:
case 3401:
case 2573:
case 3378:
case 1949:
case 680:
case 750:
case 1358:
case 1382:
case 3459:
case 1219:
case 3921:
case 1270:
case 364:
case 1479:
case 2513:
case 1901:
case 1732:
case 2496:
case 2756:
case 3198:
case 213:
case 3450:
case 3259:
case 4044:
case 1470:
case 1564:
case 1279:
case 3508:
case 1421:
case 2237:
case 3007:
case 2303:
case 616:
case 3910:
case 1348:
case 737:
case 4005:
case 3240:
case 826:
case 3334:
case 3201:
case 2143:
case 1824:
case 3262:
case 3991:
case 3855:
case 1108:
case 2226:
case 1741:
case 1598:
case 1097:
case 3135:
case 3164:
case 712:
case 1962:
case 1662:
case 1433:
case 2415:
case 2224:
case 2275:
case 2023:
case 2539:
case 3557:
case 3058:
case 53:
case 3166:
case 1078:
case 704:
case 956:
case 3082:
case 3691:
case 2955:
case 3177:
case 395:
case 1566:
case 808:
case 1157:
case 197:
case 2754:
case 2810:
case 1659:
case 3679:
case 3610:
case 2280:
case 3336:
case 1837:
case 982:
case 341:
case 327:
case 1640:
case 539:
case 1583:
case 394:
case 2289:
case 3621:
case 2480:
case 4056:
case 2821:
case 321:
case 1649:
case 517:
case 2744:
case 347:
case 179:
case 3786:
case 3117:
case 388:
case 2502:
case 2093:
case 3397:
case 1650:
case 2294:
case 2819:
case 3670:
case 3619:
case 17:
case 2268:
case 1517:
case 989:
case 370:
case 3806:
case 3547:
case 2606:
case 705:
case 2424:
case 2945:
case 2298:
case 2657:
case 604:
case 2332:
case 200:
case 584:
case 1703:
case 3137:
case 1095:
case 2748:
case 2839:
case 2101:
case 1487:
case 952:
case 1537:
case 1038:
case 2428:
case 3044:
case 1866:
case 3793:
case 1473:
case 1014:
case 2908:
case 2579:
case 2264:
case 465:
case 1622:
case 3602:
case 358:
case 1273:
case 2802:
case 1413:
case 2519:
case 1074:
case 2351:
case 3054:
case 3443:
case 2521:
case 2309:
case 3973:
case 1953:
case 536:
case 934:
case 1692:
case 3506:
case 1081:
case 1346:
case 2647:
case 585:
case 2149:
case 2830:
case 3630:
case 1287:
case 3723:
case 3987:
case 2758:
case 2150:
case 2585:
case 2729:
case 2855:
case 1624:
case 1012:
case 336:
case 3042:
case 1767:
case 1926:
case 708:
case 153:
case 2164:
case 3756:
case 3496:
case 2198:
case 1776:
case 2318:
case 3513:
case 1937:
case 2790:
case 2450:
case 3237:
case 2979:
case 3303:
case 1680:
case 2334:
case 2449:
case 3746:
case 2970:
case 2919:
case 1323:
case 181:
case 2401:
case 805:
case 2440:
case 128:
case 3296:
case 3573:
case 1716:
case 99:
case 2250:
case 2799:
case 2459:
case 1173:
case 1668:
case 2845:
case 3153:
case 2771:
case 2633:
case 2720:
case 999:
case 1072:
case 3833:
case 2128:
case 3088:
case 1698:
case 1257:
case 3417:
case 2939:
case 3071:
case 2325:
case 608:
case 2180:
case 594:
case 115:
case 2788:
case 317:
case 521:
case 3957:
case 547:
case 3608:
case 2124:
case 2808:
case 157:
case 1727:
case 1966:
case 3283:
case 1635:
case 3266:
case 3813:
case 3099:
case 2673:
case 1032:
case 130:
case 354:
case 2760:
case 3707:
case 938:
case 2395:
case 2902:
case 151:
case 3483:
case 1628:
case 1247:
case 2292:
case 3533:
case 2189:
case 2338:
case 339:
case 1917:
case 2687:
case 1000:
case 3887:
case 527:
case 1041:
case 1797:
case 1457:
case 3477:
case 595:
case 2314:
case 3947:
case 853:
case 273:
case 1948:
case 3310:
case 3965:
case 1478:
case 744:
case 1218:
case 3458:
case 1132:
case 3541:
case 3500:
case 2423:
case 3918:
case 1529:
case 1265:
case 1033:
case 3872:
case 2015:
case 2672:
case 1852:
case 3248:
case 482:
case 1100:
case 301:
case 1141:
case 1708:
case 3129:
case 456:
case 3111:
case 3764:
case 3391:
case 772:
case 1590:
case 1869:
case 56:
case 296:
case 848:
case 2576:
case 489:
case 618:
case 1151:
case 1599:
case 562:
case 828:
case 4022:
case 1109:
case 881:
case 3728:
case 2080:
case 1607:
case 2306:
case 3978:
case 3812:
case 2075:
case 3184:
case 1520:
case 3321:
case 745:
case 2146:
case 48:
case 2612:
case 791:
case 3199:
case 1350:
case 3319:
case 1571:
case 1278:
case 724:
case 1418:
case 2897:
case 3258:
case 238:
case 2600:
case 1087:
case 292:
case 2641:
case 3800:
case 3572:
case 776:
case 1829:
case 1495:
case 2536:
case 3775:
case 3981:
case 697:
case 644:
case 3254:
case 1225:
case 672:
case 4049:
case 2463:
case 3832:
case 1073:
case 1656:
case 2632:
case 3053:
case 857:
case 3444:
case 793:
case 2028:
case 2527:
case 3974:
case 1438:
case 3780:
case 1172:
case 271:
case 851:
case 1905:
case 1392:
case 3043:
case 1112:
case 3794:
case 4001:
case 3454:
case 459:
case 718:
case 1899:
case 4040:
case 67:
case 1214:
case 3361:
case 1560:
case 3142:
case 3616:
case 299:
case 2816:
case 3851:
case 814:
case 1871:
case 303:
case 2651:
case 2597:
case 624:
case 3302:
case 1542:
case 3131:
case 1704:
case 2609:
case 566:
case 3809:
case 29:
case 434:
case 679:
case 645:
case 1295:
case 2107:
case 1174:
case 3972:
case 3818:
case 872:
case 1988:
case 2618:
case 2634:
case 440:
case 3288:
case 1739:
case 3834:
case 1272:
case 1412:
case 2803:
case 3865:
case 3581:
case 3252:
case 2665:
case 366:
case 825:
case 286:
case 1324:
case 1969:
case 1375:
case 2407:
case 615:
case 3355:
case 4028:
case 1554:
case 2050:
case 3574:
case 477:
case 844:
case 897:
case 1693:
case 210:
case 824:
case 1368:
case 1505:
case 1931:
case 1702:
case 614:
case 4064:
case 2040:
case 845:
case 3538:
case 1960:
case 1730:
case 3026:
case 1623:
case 1212:
case 651:
case 3452:
case 781:
case 1138:
case 1882:
case 49:
case 1114:
case 234:
case 3912:
case 1394:
case 25:
case 3242:
case 507:
case 1241:
case 1409:
case 2726:
case 473:
case 2967:
case 3565:
case 3308:
case 2092:
case 3420:
case 1047:
case 893:
case 3762:
case 1548:
case 1791:
case 648:
case 1929:
case 3471:
case 3017:
case 3900:
case 1335:
case 362:
case 3941:
case 2193:
case 4015:
case 2625:
case 2674:
case 1854:
case 3290:
case 3874:
case 4089:
case 653:
case 3701:
case 1134:
case 2446:
case 715:
case 2737:
case 496:
case 1165:
case 3083:
case 1844:
case 2123:
case 2916:
case 369:
case 289:
case 1999:
case 3838:
case 2638:
case 1770:
case 1984:
case 2614:
case 3490:
case 3182:
case 1805:
case 3158:
case 3066:
case 714:
case 1251:
case 160:
case 1785:
case 628:
case 3271:
case 3578:
case 3909:
case 3077:
case 4075:
case 818:
case 36:
case 4024:
case 1400:
case 1971:
case 438:
case 3951:
case 4070:
case 1188:
case 1780:
case 1974:
case 3438:
case 1925:
case 3172:
case 1254:
case 2690:
case 3890:
case 3274:
case 3569:
case 3225:
case 2377:
case 1405:
case 3073:
case 1832:
case 1053:
case 967:
case 437:
case 3811:
case 695:
case 3322:
case 222:
case 2366:
case 1841:
case 3588:
case 2127:
case 4085:
case 817:
case 3755:
case 3829:
case 1572:
case 1724:
case 2629:
case 3552:
case 3281:
case 4091:
case 3295:
case 1512:
case 3820:
case 2733:
case 2671:
case 1160:
case 1851:
case 688:
case 3745:
case 242:
case 1768:
case 3542:
case 1794:
case 1938:
case 3425:
case 2986:
case 1205:
case 670:
case 2317:
case 3013:
case 743:
case 3944:
case 1244:
case 4010:
case 2963:
case 3905:
case 229:
case 1330:
case 41:
case 3392:
case 3238:
case 3884:
case 1043:
case 3112:
case 304:
case 2669:
case 813:
case 2556:
case 1532:
case 2713:
case 3100:
case 963:
case 1627:
case 2326:
case 226:
case 4002:
case 3708:
case 4061:
case 3340:
case 836:
case 1541:
case 1918:
case 2004:
case 2688:
case 1636:
case 3265:
case 2652:
case 3529:
case 727:
case 1248:
case 741:
case 1482:
case 416:
case 1965:
case 3218:
case 2176:
case 3478:
case 3132:
case 2045:
case 1798:
case 1551:
case 1319:
case 1370:
case 658:
case 2642:
case 3278:
case 2396:
case 1697:
case 1258:
case 3349:
case 480:
case 3958:
case 794:
case 1321:
case 3520:
case 1812:
case 2403:
case 1184:
case 747:
case 3982:
case 1448:
case 2055:
case 2631:
case 898:
case 246:
case 2546:
case 478:
case 2660:
case 1171:
case 884:
case 770:
case 643:
case 2773:
case 3134:
case 1701:
case 1740:
case 2956:
case 1148:
case 717:
case 1484:
case 636:
case 2103:
case 3854:
case 1874:
case 1759:
case 1499:
case 2654:
case 3398:
case 2276:
case 3118:
case 3451:
case 4004:
case 2061:
case 1471:
case 3929:
case 2267:
case 1017:
case 3241:
case 3409:
case 3200:
case 505:
case 1420:
case 1308:
case 755:
case 685:
case 1565:
case 1881:
case 1762:
case 3548:
case 2343:
case 3441:
case 2523:
case 3400:
case 3971:
case 1429:
case 2706:
case 360:
case 73:
case 504:
case 906:
case 1411:
case 3785:
case 1909:
case 754:
case 16:
case 3984:
case 3719:
case 3770:
case 446:
case 2946:
case 1299:
case 1490:
case 1182:
case 1158:
case 858:
case 3805:
case 2605:
case 2476:
case 169:
case 3686:
case 1083:
case 2886:
case 1749:
case 1838:
case 3999:
case 1284:
case 3721:
case 739:
case 475:
case 1460:
case 1525:
case 1269:
case 2893:
case 212:
case 308:
case 3693:
case 166:
case 827:
case 3375:
case 3969:
case 3324:
case 736:
case 3739:
case 3412:
case 1865:
case 3272:
case 3006:
case 1603:
case 2236:
case 3848:
case 44:
case 1252:
case 3125:
case 632:
case 2085:
case 909:
case 1972:
case 2757:
case 1818:
case 713:
case 2497:
case 3988:
case 63:
case 250:
case 2091:
case 870:
case 784:
case 2297:
case 2658:
case 654:
case 1242:
case 3942:
case 3730:
case 219:
case 231:
case 1144:
case 3212:
case 2747:
case 1595:
case 3138:
case 442:
case 1452:
case 3544:
case 474:
case 847:
case 1231:
case 2586:
case 894:
case 611:
case 3960:
case 3195:
case 639:
case 429:
case 1514:
case 1469:
case 3931:
case 3505:
case 888:
case 3368:
case 21:
case 1345:
case 3702:
case 1453:
case 3866:
case 3473:
case 1005:
case 2822:
case 3014:
case 3622:
case 2191:
case 3038:
case 2683:
case 209:
case 1126:
case 2540:
case 376:
case 3883:
case 2765:
case 3703:
case 2562:
case 393:
case 3095:
case 1639:
case 1857:
case 1376:
case 2677:
case 3877:
case 3356:
case 20:
case 528:
case 2179:
case 2110:
case 1987:
case 1316:
case 2778:
case 1196:
case 86:
case 3817:
case 2399:
case 3081:
case 2121:
case 91:
case 1847:
case 2892:
case 1630:
case 1443:
case 3106:
case 2320:
case 2408:
case 869:
case 2549:
case 1253:
case 3273:
case 3025:
case 461:
case 2371:
case 553:
case 2550:
case 1336:
case 2352:
case 3837:
case 4016:
case 866:
case 2801:
case 141:
case 3583:
case 3601:
case 2840:
case 2139:
case 3566:
case 397:
case 3157:
case 2980:
case 1610:
case 514:
case 2774:
case 2725:
case 2859:
case 1058:
case 1557:
case 3078:
case 1166:
case 2975:
case 2924:
case 2369:
case 530:
case 2781:
case 3433:
case 463:
case 1183:
case 933:
case 2404:
case 1327:
case 551:
case 2795:
case 2455:
case 1547:
case 1806:
case 707:
case 4067:
case 2003:
case 978:
case 2592:
case 3233:
case 2968:
case 2204:
case 557:
case 2102:
case 37:
case 3517:
case 1933:
case 2915:
case 2360:
case 188:
case 3896:
case 603:
case 1117:
case 2342:
case 391:
case 2714:
case 2989:
case 583:
case 324:
case 1670:
case 194:
case 4076:
case 206:
case 3649:
case 345:
case 1786:
case 2130:
case 1266:
case 57:
case 9:
case 2402:
case 2835:
case 1813:
case 762:
case 2922:
case 2643:
case 3966:
case 155:
case 3447:
case 2524:
case 2575:
case 3736:
case 1020:
case 3977:
case 591:
case 3257:
case 3698:
case 2898:
case 1277:
case 2461:
case 1071:
case 2354:
case 3051:
case 4003:
case 597:
case 3457:
case 1217:
case 2067:
case 1011:
case 2261:
case 2992:
case 1947:
case 3247:
case 2515:
case 2439:
case 3386:
case 139:
case 2230:
case 3041:
case 1887:
case 1707:
case 2589:
case 351:
case 2828:
case 2104:
case 1483:
case 1466:
case 2145:
case 1873:
case 406:
case 154:
case 2959:
case 2880:
case 3680:
case 94:
case 2421:
case 1031:
case 185:
case 2940:
case 1756:
case 2535:
case 1513:
case 2901:
case 2210:
case 2564:
case 2419:
case 662:
case 3937:
case 409:
case 3926:
case 3113:
case 1042:
case 353:
case 2291:
case 975:
case 2108:
case 136:
case 1226:
case 2700:
case 402:
case 3615:
case 974:
case 576:
case 1426:
case 3668:
case 2868:
case 2751:
case 1906:
case 328:
case 1296:
case 2894:
case 1069:
case 66:
case 2270:
case 2382:
case 3694:
case 1746:
case 942:
case 2221:
case 1437:
case 381:
case 3187:
case 807:
case 198:
case 261:
case 3696:
case 291:
case 1502:
case 620:
case 3342:
case 3850:
case 3989:
case 738:
case 810:
case 563:
case 2650:
case 1294:
case 3994:
case 2147:
case 3738:
case 1289:
case 245:
case 3849:
case 279:
case 1744:
case 2307:
case 1475:
case 3003:
case 1606:
case 1215:
case 2233:
case 3592:
case 3795:
case 1945:
case 3204:
case 2517:
case 1904:
case 4000:
case 834:
case 1561:
case 852:
case 1955:
case 1122:
case 4009:
case 415:
case 3369:
case 3975:
case 1891:
case 3862:
case 2433:
case 3781:
case 3255:
case 3626:
case 4051:
case 2837:
case 1280:
case 3637:
case 2583:
case 3840:
case 2640:
case 2157:
case 773:
case 297:
case 640:
case 3980:
case 244:
case 3774:
case 3522:
case 1879:
case 1494:
case 1754:
case 3408:
case 79:
case 2953:
case 2413:
case 2273:
case 1351:
case 3550:
case 2025:
case 1464:
case 3185:
case 2074:
case 3371:
case 302:
case 1498:
case 1758:
case 2817:
case 4072:
case 3778:
case 3170:
case 1585:
case 1782:
case 3892:
case 2346:
case 2692:
case 2287:
case 567:
case 1149:
case 1830:
case 3562:
case 777:
case 2095:
case 908:
case 3765:
case 3734:
case 3998:
case 1839:
case 1332:
case 1657:
case 3718:
case 3179:
case 3390:
case 100:
case 1159:
case 2213:
case 1235:
case 3666:
case 673:
case 2473:
case 1063:
case 740:
case 2866:
case 2943:
case 3559:
case 2622:
case 1908:
case 3208:
case 448:
case 2883:
case 276:
case 3935:
case 1300:
case 1428:
case 3501:
case 309:
case 1086:
case 2716:
case 3358:
case 228:
case 1459:
case 1250:
case 3410:
case 164:
case 1921:
case 3219:
case 1784:
case 1970:
case 2689:
case 3889:
case 4074:
case 4025:
case 1440:
case 2996:
case 1249:
case 281:
case 1401:
case 2323:
case 2187:
case 2072:
case 3815:
case 3036:
case 2615:
case 689:
case 1985:
case 509:
case 1128:
case 1804:
case 4081:
case 710:
case 838:
case 1771:
case 2393:
case 2767:
case 1711:
case 3962:
case 3291:
case 2624:
case 2406:
case 1855:
case 1729:
case 3700:
case 3741:
case 1365:
case 1910:
case 3959:
case 2543:
case 1240:
case 1334:
case 165:
case 287:
case 2776:
case 248:
case 3732:
case 1259:
case 682:
case 1450:
case 752:
case 3279:
case 2937:
case 2133:
case 491:
case 1731:
case 2628:
case 871:
case 1902:
case 1056:
case 3145:
case 3653:
case 2853:
case 1673:
case 1760:
case 479:
case 1422:
case 230:
case 1742:
case 3067:
case 3305:
case 2363:
case 4065:
case 2797:
case 4034:
case 905:
case 3992:
case 3261:
case 1338:
case 1961:
case 2247:
case 3712:
case 659:
case 789:
case 2041:
case 3344:
case 2000:
case 2917:
case 3439:
case 2386:
case 3524:
case 1492:
case 1752:
case 472:
case 686:
case 2447:
case 4078:
case 3772:
case 756:
case 3239:
case 2009:
case 3430:
case 2977:
case 3898:
case 1939:
case 2257:
case 3354:
case 2051:
case 3402:
case 3835:
case 2983:
case 2635:
case 2664:
case 1769:
case 425:
case 3864:
case 1808:
case 635:
case 3155:
case 3580:
case 1175:
case 2843:
case 2727:
case 257:
case 877:
case 914:
case 516:
case 346:
case 2109:
case 1306:
case 2607:
case 3546:
case 864:
case 1753:
case 533:
case 3396:
case 2842:
case 1897:
case 2418:
case 3642:
case 3116:
case 3787:
case 1223:
case 460:
case 2349:
case 2982:
case 1146:
case 1024:
case 1075:
case 3403:
case 3004:
case 3688:
case 2234:
case 2301:
case 2852:
case 1836:
case 1672:
case 2033:
case 1015:
case 3652:
case 3:
case 3203:
case 957:
case 173:
case 2132:
case 1567:
case 2218:
case 1068:
case 4047:
case 915:
case 3669:
case 3713:
case 3167:
case 1576:
case 196:
case 3556:
case 1293:
case 1827:
case 326:
case 3993:
case 3326:
case 1089:
case 2708:
case 1743:
case 2362:
case 374:
case 1064:
case 3986:
case 2905:
case 1286:
case 537:
case 3684:
case 2392:
case 2238:
case 3846:
case 1609:
case 2704:
case 1107:
case 3620:
case 3733:
case 1651:
case 120:
case 981:
case 3671:
case 668:
case 2542:
case 1098:
case 32:
case 1597:
case 140:
case 3366:
case 4006:
case 322:
case 34:
case 1867:
case 3383:
case 2087:
case 2281:
case 3629:
case 2829:
case 2495:
case 953:
case 349:
case 1527:
case 1028:
case 519:
case 177:
case 3136:
case 408:
case 2438:
case 2414:
case 2225:
case 2569:
case 2274:
case 550:
case 3690:
case 1876:
case 1357:
case 700:
case 3856:
case 2073:
case 3427:
case 1001:
case 2195:
case 2960:
case 2315:
case 1207:
case 3079:
case 3907:
case 3010:
case 31:
case 2702:
case 54:
case 522:
case 3563:
case 2931:
case 2368:
case 350:
case 3091:
case 134:
case 2761:
case 2114:
case 2882:
case 2858:
case 1163:
case 764:
case 549:
case 2138:
case 3436:
case 2212:
case 1062:
case 337:
case 1634:
case 2380:
case 1803:
case 2412:
case 2174:
case 2952:
case 1936:
case 1618:
case 3497:
case 3757:
case 3070:
case 2554:
case 208:
case 312:
case 2693:
case 542:
case 1927:
case 993:
case 186:
case 4073:
case 2969:
case 2984:
case 2770:
case 2719:
case 2178:
case 3605:
case 3476:
case 1456:
case 378:
case 1796:
case 2432:
case 2805:
case 3644:
case 189:
case 3886:
case 2686:
case 1387:
case 5:
case 2721:
case 2999:
case 1246:
case 3523:
case 2400:
case 3039:
case 526:
case 924:
case 2971:
case 3706:
case 991:
case 2785:
case 380:
case 2251:
case 945:
case 260:
case 2558:
case 664:
case 18:
case 3467:
case 1373:
case 3061:
case 800:
case 2451:
case 4033:
case 182:
case 3267:
case 1313:
case 2335:
case 2409:
case 1967:
case 2200:
case 316:
case 944:
case 2047:
case 1092:
case 2911:
case 3956:
case 156:
case 3103:
case 2165:
case 1737:
case 1446:
case 2990:
case 3654:
case 2854:
case 1625:
case 2118:
case 3593:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1746968401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,];
var gg_b = "1746968401/";

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
