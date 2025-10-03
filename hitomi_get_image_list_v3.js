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
case 2407:
case 2800:
case 815:
case 2853:
case 3976:
case 253:
case 1916:
case 3825:
case 2683:
case 1907:
case 352:
case 3337:
case 3267:
case 3741:
case 1497:
case 1890:
case 394:
case 2062:
case 987:
case 490:
case 2997:
case 11:
case 2835:
case 127:
case 689:
case 2554:
case 2413:
case 2500:
case 3379:
case 2039:
case 2553:
case 717:
case 283:
case 3094:
case 634:
case 1244:
case 863:
case 3945:
case 1914:
case 2185:
case 1110:
case 3501:
case 3029:
case 957:
case 2535:
case 2898:
case 1679:
case 3619:
case 611:
case 452:
case 3583:
case 1959:
case 2088:
case 1790:
case 2756:
case 3841:
case 363:
case 4093:
case 1398:
case 1354:
case 2459:
case 1492:
case 3698:
case 1947:
case 3654:
case 3262:
case 2819:
case 3155:
case 1527:
case 1548:
case 3725:
case 1217:
case 2308:
case 3277:
case 3136:
case 2123:
case 3884:
case 2447:
case 2428:
case 2840:
case 2067:
case 482:
case 3883:
case 2798:
case 4029:
case 2390:
case 608:
case 3541:
case 3495:
case 3239:
case 716:
case 1080:
case 2015:
case 3600:
case 2294:
case 1335:
case 1152:
case 372:
case 3369:
case 3653:
case 3921:
case 94:
case 1300:
case 3391:
case 1848:
case 1431:
case 894:
case 2920:
case 1204:
case 630:
case 273:
case 2229:
case 2540:
case 760:
case 2119:
case 278:
case 3855:
case 798:
case 916:
case 4014:
case 3836:
case 993:
case 960:
case 2524:
case 3289:
case 3980:
case 17:
case 1030:
case 1021:
case 1444:
case 756:
case 1475:
case 2826:
case 1064:
case 603:
case 2095:
case 74:
case 1552:
case 3671:
case 1611:
case 1412:
case 3618:
case 1148:
case 209:
case 4007:
case 3186:
case 3834:
case 2943:
case 3028:
case 3047:
case 3860:
case 2912:
case 3382:
case 2771:
case 3536:
case 2523:
case 1446:
case 520:
case 475:
case 3183:
case 671:
case 1682:
case 1066:
case 2216:
case 1710:
case 23:
case 2785:
case 2526:
case 4013:
case 385:
case 1318:
case 2946:
case 2038:
case 429:
case 2207:
case 622:
case 2726:
case 3733:
case 1404:
case 3101:
case 1510:
case 917:
case 2634:
case 651:
case 2818:
case 619:
case 841:
case 3699:
case 1929:
case 964:
case 265:
case 2153:
case 2571:
case 2723:
case 3661:
case 2494:
case 1074:
case 3014:
case 3295:
case 2089:
case 2965:
case 3125:
case 1994:
case 3624:
case 2906:
case 296:
case 2247:
case 2228:
case 1122:
case 1993:
case 3951:
case 1752:
case 4002:
case 3623:
case 3870:
case 3477:
case 15:
case 1849:
case 4059:
case 1326:
case 146:
case 681:
case 56:
case 1406:
case 2154:
case 2518:
case 1668:
case 329:
case 2493:
case 3042:
case 3368:
case 1687:
case 3007:
case 2950:
case 787:
case 3238:
case 4028:
case 4047:
case 3734:
case 2202:
case 1857:
case 1450:
case 2799:
case 258:
case 1323:
case 3056:
case 3284:
case 700:
case 2949:
case 1504:
case 926:
case 1069:
case 1985:
case 2910:
case 1449:
case 3035:
case 851:
case 2219:
case 819:
case 445:
case 3788:
case 3862:
case 2594:
case 481:
case 2558:
case 1091:
case 3053:
case 3241:
case 3767:
case 1565:
case 2615:
case 1850:
case 2896:
case 668:
case 1712:
case 1971:
case 3772:
case 2381:
case 177:
case 77:
case 1918:
case 2346:
case 1744:
case 1517:
case 2667:
case 3577:
case 0:
case 1197:
case 3054:
case 14:
case 1227:
case 3098:
case 881:
case 2593:
case 2672:
case 261:
case 156:
case 2113:
case 3562:
case 845:
case 419:
case 2894:
case 198:
case 3839:
case 1550:
case 1503:
case 248:
case 2499:
case 1394:
case 629:
case 91:
case 2235:
case 1703:
case 1131:
case 2365:
case 1079:
case 3201:
case 3460:
case 3867:
case 3040:
case 2084:
case 675:
case 3629:
case 1999:
case 1581:
case 176:
case 2793:
case 2304:
case 1575:
case 1544:
case 2909:
case 3515:
case 1924:
case 2200:
case 345:
case 75:
case 3658:
case 1452:
case 2041:
case 1923:
case 3693:
case 1651:
case 2298:
case 1192:
case 403:
case 2662:
case 2086:
case 2254:
case 514:
case 3455:
case 1543:
case 1396:
case 3567:
case 3739:
case 2677:
case 2303:
case 2128:
case 322:
case 2423:
case 2794:
case 3588:
case 1546:
case 871:
case 3696:
case 1926:
case 2083:
case 1208:
case 2102:
case 3433:
case 1875:
case 3138:
case 1704:
case 1844:
case 3351:
case 2729:
case 1146:
case 3188:
case 430:
case 3616:
case 2502:
case 1342:
case 334:
case 3538:
case 1087:
case 825:
case 2218:
case 1112:
case 3613:
case 3172:
case 1143:
case 12:
case 1820:
case 1068:
case 50:
case 3023:
case 2948:
case 3376:
case 682:
case 2714:
case 2528:
case 2689:
case 2802:
case 3024:
case 2742:
case 3115:
case 3061:
case 3441:
case 3595:
case 727:
case 1175:
case 2859:
case 584:
case 2034:
case 2419:
case 1314:
case 3374:
case 95:
case 1249:
case 904:
case 1531:
case 3099:
case 2285:
case 830:
case 2707:
case 1919:
case 1181:
case 479:
case 652:
case 2828:
case 2440:
case 3979:
case 2847:
case 3363:
case 615:
case 5:
case 3233:
case 2226:
case 1666:
case 2516:
case 193:
case 3932:
case 1720:
case 1347:
case 1954:
case 342:
case 3236:
case 1422:
case 1998:
case 3628:
case 3366:
case 1302:
case 434:
case 2542:
case 1078:
case 2454:
case 4026:
case 116:
case 1664:
case 2514:
case 2400:
case 2807:
case 2261:
case 489:
case 726:
case 2320:
case 1165:
case 2331:
case 3139:
case 1209:
case 3425:
case 1621:
case 1792:
case 379:
case 3305:
case 3085:
case 1605:
case 3969:
case 3321:
case 2759:
case 938:
case 2456:
case 3260:
case 3401:
case 947:
case 1956:
case 2842:
case 4061:
case 2990:
case 3234:
case 2813:
case 3364:
case 2435:
case 1384:
case 628:
case 2489:
case 2786:
case 473:
case 1832:
case 383:
case 2215:
case 3500:
case 1989:
case 3171:
case 3553:
case 1591:
case 2783:
case 1569:
case 1341:
case 966:
case 3556:
case 2029:
case 2170:
case 1004:
case 862:
case 462:
case 1182:
case 1003:
case 318:
case 1050:
case 2825:
case 1476:
case 3416:
case 1386:
case 4072:
case 2784:
case 3853:
case 1891:
case 1473:
case 1178:
case 2272:
case 3554:
case 3118:
case 221:
case 3413:
case 1006:
case 106:
case 144:
case 1627:
case 2093:
case 526:
case 3997:
case 2267:
case 873:
case 3856:
case 2741:
case 252:
case 774:
case 3077:
case 2337:
case 2600:
case 3294:
case 1044:
case 2369:
case 272:
case 3258:
case 2653:
case 215:
case 754:
case 2921:
case 1075:
case 2541:
case 643:
case 2239:
case 1301:
case 1995:
case 3625:
case 3390:
case 3124:
case 2883:
case 3798:
case 3229:
case 3540:
case 2160:
case 1081:
case 3601:
case 1690:
case 3920:
case 2886:
case 2134:
case 739:
case 967:
case 2635:
case 914:
case 1579:
case 3199:
case 2905:
case 770:
case 3459:
case 2438:
case 3756:
case 883:
case 1046:
case 1938:
case 1466:
case 3402:
case 3088:
case 3322:
case 132:
case 4077:
case 3735:
case 362:
case 2884:
case 199:
case 418:
case 3428:
case 3992:
case 3700:
case 2963:
case 3067:
case 2277:
case 527:
case 1012:
case 2586:
case 2332:
case 107:
case 2155:
case 1879:
case 1043:
case 1251:
case 2262:
case 1463:
case 3819:
case 1711:
case 3912:
case 191:
case 2382:
case 458:
case 3523:
case 2047:
case 3242:
case 309:
case 546:
case 124:
case 504:
case 2186:
case 2834:
case 3213:
case 2618:
case 3899:
case 1273:
case 3038:
case 3946:
case 1988:
case 2533:
case 2770:
case 1276:
case 1137:
case 3824:
case 2002:
case 3140:
case 3823:
case 896:
case 3670:
case 2560:
case 731:
case 1649:
case 378:
case 3981:
case 3599:
case 1031:
case 255:
case 714:
case 3095:
case 3214:
case 637:
case 3561:
case 1274:
case 939:
case 1480:
case 3826:
case 767:
case 2980:
case 3310:
case 3975:
case 1657:
case 2289:
case 1263:
case 3518:
case 3154:
case 229:
case 2042:
case 878:
case 1451:
case 43:
case 2013:
case 1333:
case 795:
case 2477:
case 538:
case 3761:
case 3906:
case 396:
case 1097:
case 212:
case 3799:
case 974:
case 497:
case 980:
case 358:
case 2016:
case 1582:
case 120:
case 1266:
case 2734:
case 3202:
case 500:
case 3496:
case 1355:
case 409:
case 3633:
case 135:
case 2699:
case 1878:
case 3904:
case 2733:
case 2570:
case 3156:
case 3660:
case 1787:
case 710:
case 3429:
case 1221:
case 1230:
case 388:
case 950:
case 57:
case 1768:
case 3089:
case 1609:
case 1360:
case 2755:
case 766:
case 1334:
case 623:
case 2439:
case 83:
case 2295:
case 1191:
case 3153:
case 365:
case 3458:
case 9:
case 3723:
case 636:
case 1264:
case 3571:
case 1511:
case 3100:
case 3672:
case 1551:
case 3593:
case 167:
case 678:
case 1612:
case 2562:
case 3418:
case 557:
case 2098:
case 1643:
case 2715:
case 4083:
case 1022:
case 2577:
case 39:
case 3829:
case 2283:
case 1008:
case 3688:
case 1237:
case 1367:
case 1176:
case 3596:
case 3116:
case 2839:
case 337:
case 3894:
case 3107:
case 3312:
case 203:
case 4086:
case 3893:
case 907:
case 2862:
case 4041:
case 3910:
case 3375:
case 587:
case 609:
case 1315:
case 3949:
case 999:
case 697:
case 2284:
case 3529:
case 1681:
case 271:
case 940:
case 2911:
case 3025:
case 932:
case 4084:
case 2053:
case 1644:
case 2767:
case 3615:
case 63:
case 836:
case 3594:
case 3147:
case 448:
case 3423:
case 2436:
case 3794:
case 3350:
case 1617:
case 2739:
case 1955:
case 3303:
case 219:
case 2693:
case 2572:
case 1027:
case 437:
case 3298:
case 1163:
case 251:
case 3254:
case 1468:
case 2351:
case 1362:
case 461:
case 3729:
case 336:
case 3426:
case 1880:
case 2815:
case 1487:
case 2696:
case 1933:
case 3083:
case 3102:
case 402:
case 1166:
case 688:
case 4025:
case 696:
case 2201:
case 1934:
case 2460:
case 2040:
case 3256:
case 1604:
case 3084:
case 2019:
case 3365:
case 861:
case 944:
case 3235:
case 1269:
case 906:
case 2694:
case 837:
case 1164:
case 2658:
case 613:
case 3639:
case 1665:
case 2515:
case 3909:
case 3304:
case 577:
case 3424:
case 2762:
case 3952:
case 4001:
case 1121:
case 2614:
case 706:
case 2115:
case 2061:
case 2838:
case 653:
case 305:
case 3802:
case 174:
case 3742:
case 1530:
case 618:
case 3060:
case 2484:
case 3440:
case 2270:
case 3034:
case 2345:
case 869:
case 1863:
case 1479:
case 1984:
case 289:
case 1864:
case 2937:
case 3033:
case 2026:
case 2607:
case 2373:
case 469:
case 234:
case 2538:
case 1:
case 2616:
case 560:
case 2188:
case 2483:
case 1774:
case 3714:
case 3547:
case 3528:
case 3948:
case 2023:
case 3036:
case 3927:
case 2376:
case 516:
case 2486:
case 935:
case 3218:
case 2789:
case 211:
case 259:
case 1278:
case 2172:
case 1057:
case 2305:
case 828:
case 1763:
case 3816:
case 1876:
case 3320:
case 1925:
case 3695:
case 2139:
case 3514:
case 4034:
case 3453:
case 3747:
case 1545:
case 3194:
case 3261:
case 1049:
case 1873:
case 96:
case 3299:
case 3990:
case 3842:
case 2234:
case 2738:
case 3456:
case 732:
case 2260:
case 3070:
case 4036:
case 2602:
case 208:
case 3196:
case 2932:
case 1576:
case 3908:
case 3226:
case 2233:
case 3814:
case 2659:
case 4055:
case 1874:
case 3454:
case 2162:
case 4033:
case 3513:
case 52:
case 3498:
case 154:
case 3542:
case 517:
case 673:
case 2177:
case 242:
case 3223:
case 2647:
case 428:
case 3970:
case 581:
case 2985:
case 2069:
case 2806:
case 286:
case 901:
case 3279:
case 866:
case 3090:
case 1240:
case 2410:
case 1485:
case 2817:
case 2803:
case 2457:
case 2743:
case 1896:
case 810:
case 1025:
case 2971:
case 1558:
case 1615:
case 2680:
case 545:
case 3675:
case 1957:
case 314:
case 3643:
case 24:
case 2248:
case 551:
case 2506:
case 3612:
case 1113:
case 3173:
case 3478:
case 1593:
case 2918:
case 1829:
case 2804:
case 3022:
case 1667:
case 2517:
case 2744:
case 1116:
case 2503:
case 3367:
case 3237:
case 895:
case 331:
case 1858:
case 3372:
case 1107:
case 4048:
case 2781:
case 778:
case 2290:
case 1256:
case 3604:
case 758:
case 2581:
case 2999:
case 867:
case 2358:
case 3269:
case 287:
case 713:
case 1235:
case 1499:
case 1365:
case 2120:
case 814:
case 3339:
case 3960:
case 2717:
case 3580:
case 2544:
case 2575:
case 1639:
case 3164:
case 1041:
case 1253:
case 3291:
case 831:
case 2924:
case 1461:
case 395:
case 1952:
case 2846:
case 2706:
case 4090:
case 276:
case 2329:
case 918:
case 2409:
case 796:
case 620:
case 1677:
case 3955:
case 1423:
case 1128:
case 2222:
case 1147:
case 1254:
case 1086:
case 2512:
case 3606:
case 2192:
case 2651:
case 3027:
case 765:
case 414:
case 3487:
case 503:
case 2704:
case 3232:
case 123:
case 983:
case 3362:
case 1306:
case 467:
case 2208:
case 1102:
case 3603:
case 310:
case 2037:
case 2926:
case 3933:
case 965:
case 3:
case 454:
case 2342:
case 492:
case 3983:
case 1559:
case 3282:
case 2146:
case 988:
case 1397:
case 3566:
case 1502:
case 3986:
case 542:
case 1547:
case 1714:
case 3805:
case 530:
case 2673:
case 439:
case 783:
case 1218:
case 884:
case 870:
case 264:
case 105:
case 2797:
case 3052:
case 525:
case 2144:
case 484:
case 2674:
case 913:
case 2645:
case 1271:
case 3009:
case 1742:
case 374:
case 2257:
case 380:
case 579:
case 958:
case 1802:
case 3866:
case 996:
case 1440:
case 3389:
case 2181:
case 3505:
case 3479:
case 3863:
case 1419:
case 2314:
case 80:
case 892:
case 1034:
case 854:
case 1716:
case 2520:
case 2531:
case 3776:
case 644:
case 2731:
case 293:
case 2150:
case 2103:
case 2666:
case 2328:
case 773:
case 1507:
case 3705:
case 1226:
case 143:
case 1638:
case 3432:
case 1908:
case 3287:
case 3338:
case 4:
case 354:
case 169:
case 3151:
case 30:
case 3692:
case 3721:
case 1513:
case 1454:
case 2106:
case 2359:
case 3268:
case 3764:
case 2117:
case 450:
case 2597:
case 3876:
case 762:
case 640:
case 1816:
case 632:
case 2900:
case 1224:
case 2792:
case 2621:
case 2630:
case 2953:
case 1807:
case 3491:
case 1747:
case 3545:
case 1320:
case 2165:
case 1331:
case 370:
case 589:
case 1702:
case 4052:
case 3766:
case 3901:
case 2956:
case 1990:
case 607:
case 384:
case 1299:
case 3049:
case 1813:
case 1070:
case 4009:
case 699:
case 2605:
case 474:
case 997:
case 2104:
case 2490:
case 2897:
case 1456:
case 680:
case 1416:
case 3476:
case 2246:
case 3050:
case 2637:
case 2907:
case 3182:
case 1740:
case 1853:
case 590:
case 1407:
case 1800:
case 2916:
case 1327:
case 1348:
case 3532:
case 4012:
case 1442:
case 21:
case 3648:
case 549:
case 306:
case 3006:
case 3869:
case 1413:
case 3178:
case 705:
case 227:
case 1835:
case 432:
case 1077:
case 2890:
case 4046:
case 2808:
case 840:
case 2727:
case 2157:
case 3384:
case 3591:
case 1039:
case 3445:
case 2319:
case 1414:
case 3474:
case 3989:
case 2244:
case 3280:
case 2275:
case 3832:
case 2149:
case 3569:
case 4075:
case 4044:
case 1898:
case 1535:
case 2281:
case 899:
case 2590:
case 1185:
case 2110:
case 2902:
case 2790:
case 2632:
case 1756:
case 4006:
case 2354:
case 1735:
case 3537:
case 340:
case 2203:
case 3046:
case 2250:
case 1308:
case 2217:
case 552:
case 1700:
case 4050:
case 1753:
case 4003:
case 1447:
case 1840:
case 1992:
case 162:
case 399:
case 1819:
case 3168:
case 2206:
case 1293:
case 3879:
case 2492:
case 3043:
case 2947:
case 1072:
case 2548:
case 684:
case 307:
case 670:
case 3012:
case 937:
case 769:
case 1258:
case 2152:
case 1294:
case 3430:
case 4004:
case 2356:
case 948:
case 3995:
case 1625:
case 173:
case 3081:
case 3325:
case 3405:
case 1540:
case 99:
case 902:
case 2669:
case 1519:
case 2300:
case 1199:
case 4065:
case 3579:
case 2420:
case 2848:
case 806:
case 2431:
case 844:
case 1357:
case 1140:
case 2481:
case 3179:
case 1599:
case 1981:
case 3868:
case 3782:
case 1119:
case 2064:
case 2475:
case 1826:
case 761:
case 3480:
case 2444:
case 2611:
case 1561:
case 3274:
case 631:
case 2552:
case 2030:
case 3657:
case 2021:
case 1310:
case 27:
case 2385:
case 820:
case 3370:
case 575:
case 1943:
case 420:
case 1523:
case 238:
case 391:
case 1912:
case 835:
case 247:
case 1899:
case 2412:
case 529:
case 3092:
case 2757:
case 2443:
case 109:
case 2127:
case 1785:
case 13:
case 3988:
case 2852:
case 1038:
case 1946:
case 2682:
case 200:
case 3137:
case 2446:
case 3276:
case 1634:
case 86:
case 2231:
case 723:
case 2929:
case 1818:
case 335:
case 666:
case 1352:
case 3169:
case 1429:
case 2324:
case 891:
case 1585:
case 1660:
case 2510:
case 1309:
case 1156:
case 2404:
case 1726:
case 3939:
case 1089:
case 3609:
case 2994:
case 3221:
case 2958:
case 1100:
case 1494:
case 3511:
case 4020:
case 1723:
case 1153:
case 3191:
case 3334:
case 2045:
case 2074:
case 3333:
case 2709:
case 3977:
case 1655:
case 25:
case 541:
case 1198:
case 2292:
case 3578:
case 1493:
case 2406:
case 1518:
case 1724:
case 3097:
case 1247:
case 2122:
case 1228:
case 196:
case 1761:
case 1906:
case 1885:
case 1496:
case 2857:
case 2450:
case 2108:
case 1202:
case 3582:
case 2323:
case 491:
case 905:
case 3132:
case 1950:
case 113:
case 424:
case 4092:
case 2687:
case 3355:
case 3775:
case 3517:
case 4037:
case 3744:
case 3918:
case 1978:
case 2388:
case 1562:
case 887:
case 3506:
case 356:
case 267:
case 1098:
case 755:
case 34:
case 3865:
case 536:
case 972:
case 915:
case 103:
case 2372:
case 457:
case 2646:
case 2008:
case 3503:
case 1470:
case 3817:
case 768:
case 1056:
case 638:
case 1862:
case 2279:
case 2851:
case 785:
case 949:
case 1380:
case 3985:
case 1767:
case 3680:
case 3565:
case 2145:
case 487:
case 990:
case 3971:
case 1772:
case 3712:
case 1189:
case 171:
case 3850:
case 3743:
case 3457:
case 1455:
case 2606:
case 151:
case 498:
case 357:
case 3923:
case 3651:
case 886:
case 59:
case 502:
case 1968:
case 122:
case 1436:
case 3222:
case 2955:
case 1739:
case 2617:
case 1567:
case 3765:
case 2166:
case 2377:
case 3208:
case 1987:
case 210:
case 2603:
case 2933:
case 2650:
case 877:
case 2487:
case 3844:
case 44:
case 1138:
case 3875:
case 3079:
case 3750:
case 65:
case 84:
case 3812:
case 3358:
case 2269:
case 646:
case 387:
case 1872:
case 2105:
case 3999:
case 994:
case 952:
case 3290:
case 1460:
case 3409:
case 1225:
case 295:
case 2130:
case 2121:
case 3846:
case 1888:
case 376:
case 3329:
case 898:
case 1658:
case 2291:
case 145:
case 486:
case 3924:
case 3717:
case 1515:
case 2665:
case 274:
case 3257:
case 280:
case 2866:
case 2773:
case 794:
case 3674:
case 2211:
case 2564:
case 1614:
case 3797:
case 1595:
case 3144:
case 721:
case 929:
case 3520:
case 4011:
case 3531:
case 3249:
case 189:
case 2984:
case 816:
case 627:
case 3892:
case 2863:
case 3314:
case 2389:
case 3181:
case 2505:
case 975:
case 912:
case 782:
case 1483:
case 1188:
case 2830:
case 2821:
case 543:
case 3087:
case 1937:
case 3313:
case 1895:
case 1538:
case 134:
case 3342:
case 1486:
case 32:
case 3448:
case 3143:
case 364:
case 159:
case 3592:
case 111:
case 1789:
case 2563:
case 3112:
case 2745:
case 2774:
case 3316:
case 1139:
case 985:
case 1071:
case 749:
case 2925:
case 3165:
case 505:
case 1589:
case 3900:
case 179:
case 2057:
case 3953:
case 3630:
case 2876:
case 3209:
case 1260:
case 3490:
case 1085:
case 3605:
case 2049:
case 763:
case 626:
case 270:
case 941:
case 82:
case 864:
case 1234:
case 2766:
case 3956:
case 4068:
case 42:
case 2287:
case 417:
case 2705:
case 1659:
case 1363:
case 1889:
case 3347:
case 3328:
case 2576:
case 3150:
case 3666:
case 1602:
case 3082:
case 3408:
case 1177:
case 3302:
case 130:
case 1795:
case 3422:
case 3998:
case 3954:
case 20:
case 292:
case 4087:
case 2721:
case 316:
case 3663:
case 1162:
case 2338:
case 1018:
case 715:
case 3244:
case 1215:
case 711:
case 3275:
case 759:
case 1058:
case 2445:
case 2111:
case 1379:
case 2065:
case 1945:
case 2384:
case 3808:
case 3748:
case 1525:
case 3157:
case 922:
case 3281:
case 3822:
case 2004:
case 2569:
case 1619:
case 1783:
case 734:
case 4080:
case 2737:
case 919:
case 951:
case 3916:
case 1976:
case 2532:
case 2891:
case 1784:
case 3246:
case 1096:
case 2182:
case 1288:
case 3508:
case 1825:
case 2476:
case 3942:
case 1801:
case 1337:
case 3913:
case 2017:
case 1973:
case 2383:
case 121:
case 2869:
case 2178:
case 2473:
case 3051:
case 1093:
case 2648:
case 3243:
case 2006:
case 3109:
case 660:
case 2301:
case 693:
case 2421:
case 115:
case 3691:
case 3152:
case 172:
case 1369:
case 3335:
case 583:
case 3080:
case 1600:
case 903:
case 1239:
case 1541:
case 3420:
case 3848:
case 3431:
case 3827:
case 1886:
case 3708:
case 1134:
case 3353:
case 1391:
case 3300:
case 2579:
case 708:
case 2405:
case 1584:
case 2732:
case 3204:
case 2081:
case 2466:
case 518:
case 3250:
case 3959:
case 1583:
case 3354:
case 553:
case 41:
case 1966:
case 190:
case 163:
case 1133:
case 1438:
case 3632:
case 3527:
case 1725:
case 207:
case 725:
case 2012:
case 1586:
case 2463:
case 1262:
case 149:
case 2043:
case 2879:
case 3947:
case 1963:
case 2622:
case 2791:
case 1136:
case 1277:
case 3217:
case 1834:
case 3063:
case 2967:
case 1555:
case 2273:
case 3678:
case 2568:
case 141:
case 2972:
case 1536:
case 1382:
case 2711:
case 771:
case 3297:
case 1028:
case 1047:
case 3749:
case 979:
case 2276:
case 3809:
case 1002:
case 3682:
case 1378:
case 404:
case 3852:
case 2587:
case 1534:
case 85:
case 4074:
case 846:
case 3371:
case 656:
case 1685:
case 2610:
case 1560:
case 3509:
case 2915:
case 908:
case 698:
case 2274:
case 3552:
case 1833:
case 565:
case 3444:
case 48:
case 3810:
case 597:
case 1951:
case 3752:
case 1623:
case 400:
case 2962:
case 3292:
case 687:
case 304:
case 2578:
case 2451:
case 1042:
case 1462:
case 3406:
case 3668:
case 509:
case 2333:
case 1013:
case 745:
case 3073:
case 1387:
case 2132:
case 4063:
case 3996:
case 1760:
case 781:
case 3687:
case 2355:
case 447:
case 2811:
case 438:
case 2582:
case 1016:
case 2336:
case 1734:
case 87:
case 4021:
case 47:
case 1101:
case 3404:
case 1733:
case 3324:
case 2878:
case 3929:
case 2169:
case 578:
case 3220:
case 38:
case 3231:
case 719:
case 3045:
case 2334:
case 1439:
case 3465:
case 3074:
case 934:
case 2652:
case 2264:
case 2191:
case 3994:
case 1624:
case 2221:
case 2230:
case 2939:
case 1755:
case 1125:
case 2360:
case 2609:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1759474801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,];
var gg_b = "1759474801/";

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
