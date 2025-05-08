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
case 2203:
case 2764:
case 2578:
case 318:
case 2894:
case 1622:
case 518:
case 3265:
case 3556:
case 3999:
case 2199:
case 1255:
case 2141:
case 3117:
case 1081:
case 401:
case 1644:
case 1394:
case 1946:
case 1899:
case 2945:
case 2632:
case 1643:
case 4042:
case 2256:
case 538:
case 2565:
case 2893:
case 4024:
case 2204:
case 2763:
case 1008:
case 3278:
case 3008:
case 2555:
case 138:
case 1846:
case 240:
case 1278:
case 2251:
case 1705:
case 1503:
case 662:
case 1317:
case 1759:
case 567:
case 3194:
case 36:
case 2509:
case 3643:
case 1345:
case 1117:
case 741:
case 3394:
case 3946:
case 3644:
case 2993:
case 1079:
case 81:
case 3081:
case 3622:
case 3710:
case 845:
case 118:
case 2706:
case 3255:
case 2073:
case 1064:
case 3271:
case 1848:
case 3054:
case 2494:
case 879:
case 1001:
case 3575:
case 310:
case 290:
case 510:
case 4007:
case 2348:
case 1088:
case 2284:
case 973:
case 3583:
case 159:
case 3712:
case 791:
case 3774:
case 2571:
case 2493:
case 359:
case 3441:
case 1446:
case 3558:
case 2589:
case 1620:
case 3237:
case 130:
case 2059:
case 896:
case 3499:
case 1583:
case 2786:
case 4040:
case 781:
case 2779:
case 1054:
case 3289:
case 1006:
case 3064:
case 229:
case 3001:
case 174:
case 1575:
case 1773:
case 3215:
case 841:
case 2435:
case 2714:
case 3750:
case 717:
case 1760:
case 3838:
case 2640:
case 649:
case 959:
case 2967:
case 4030:
case 2190:
case 3990:
case 1357:
case 3247:
case 2211:
case 628:
case 2052:
case 1436:
case 3328:
case 853:
case 2515:
case 2713:
case 1328:
case 2867:
case 2062:
case 1247:
case 2797:
case 910:
case 1431:
case 1492:
case 3200:
case 822:
case 768:
case 974:
case 477:
case 3719:
case 2828:
case 47:
case 405:
case 2957:
case 2607:
case 1167:
case 573:
case 373:
case 1511:
case 1750:
case 967:
case 3438:
case 3202:
case 1490:
case 96:
case 2125:
case 2:
case 1014:
case 439:
case 2377:
case 676:
case 3936:
case 3634:
case 2136:
case 1992:
case 3633:
case 2336:
case 1825:
case 620:
case 3977:
case 2177:
case 102:
case 754:
case 3762:
case 3097:
case 1126:
case 3831:
case 1836:
case 3121:
case 2457:
case 1013:
case 3126:
case 795:
case 1518:
case 3013:
case 3836:
case 1121:
case 302:
case 4091:
case 502:
case 1977:
case 1633:
case 2428:
case 2392:
case 2642:
case 3280:
case 60:
case 891:
case 918:
case 2580:
case 1936:
case 1634:
case 938:
case 450:
case 779:
case 2131:
case 786:
case 1202:
case 2623:
case 2687:
case 1321:
case 3877:
case 2050:
case 2789:
case 2920:
case 922:
case 386:
case 2444:
case 586:
case 3286:
case 2422:
case 1585:
case 2398:
case 3279:
case 421:
case 196:
case 830:
case 2579:
case 1784:
case 1930:
case 2198:
case 1208:
case 1432:
case 1491:
case 2056:
case 1573:
case 24:
case 3496:
case 2061:
case 3320:
case 3491:
case 3573:
case 442:
case 354:
case 3775:
case 554:
case 2066:
case 3208:
case 2212:
case 2051:
case 1078:
case 3784:
case 941:
case 160:
case 596:
case 216:
case 3930:
case 4090:
case 3585:
case 236:
case 643:
case 1286:
case 2330:
case 3727:
case 1830:
case 186:
case 385:
case 224:
case 1120:
case 179:
case 3254:
case 1089:
case 1505:
case 2844:
case 2210:
case 991:
case 145:
case 2068:
case 1264:
case 2553:
case 2132:
case 3991:
case 492:
case 3569:
case 1143:
case 1559:
case 2027:
case 3617:
case 2332:
case 1288:
case 3195:
case 2084:
case 1849:
case 2995:
case 4031:
case 13:
case 1144:
case 1263:
case 28:
case 1756:
case 3253:
case 693:
case 3896:
case 2506:
case 2699:
case 2349:
case 1037:
case 2922:
case 3122:
case 3263:
case 3704:
case 2501:
case 3761:
case 3037:
case 3891:
case 2205:
case 3832:
case 3849:
case 4036:
case 1195:
case 1617:
case 53:
case 2646:
case 2944:
case 3693:
case 981:
case 1932:
case 4077:
case 1991:
case 612:
case 1645:
case 1395:
case 317:
case 2196:
case 3143:
case 29:
case 31:
case 2943:
case 3694:
case 3344:
case 1569:
case 683:
case 3322:
case 1254:
case 2058:
case 3498:
case 2765:
case 209:
case 3201:
case 1949:
case 1440:
case 93:
case 1626:
case 3015:
case 937:
case 581:
case 381:
case 3621:
case 434:
case 469:
case 684:
case 3887:
case 3334:
case 2677:
case 426:
case 3082:
case 1635:
case 1942:
case 3823:
case 470:
case 2636:
case 2934:
case 3333:
case 2780:
case 3824:
case 4046:
case 3839:
case 1923:
case 2252:
case 3047:
case 3270:
case 608:
case 2011:
case 2625:
case 414:
case 2262:
case 3923:
case 694:
case 3000:
case 1134:
case 1333:
case 1129:
case 656:
case 946:
case 591:
case 211:
case 2342:
case 1329:
case 1334:
case 3942:
case 1823:
case 231:
case 2142:
case 1015:
case 3924:
case 3626:
case 3939:
case 3440:
case 3562:
case 2829:
case 1621:
case 223:
case 541:
case 1272:
case 2018:
case 996:
case 457:
case 45:
case 644:
case 2140:
case 122:
case 3940:
case 3439:
case 3424:
case 2219:
case 1907:
case 3667:
case 1657:
case 3560:
case 3628:
case 478:
case 1213:
case 553:
case 353:
case 3442:
case 76:
case 2514:
case 2747:
case 2433:
case 1560:
case 1628:
case 1442:
case 3213:
case 1716:
case 1424:
case 979:
case 986:
case 322:
case 62:
case 1667:
case 1519:
case 2307:
case 1487:
case 252:
case 2513:
case 1002:
case 960:
case 3214:
case 141:
case 3272:
case 3402:
case 2740:
case 1567:
case 3815:
case 163:
case 2916:
case 3650:
case 3882:
case 604:
case 1528:
case 3087:
case 2672:
case 438:
case 950:
case 1311:
case 3039:
case 640:
case 1915:
case 2300:
case 2613:
case 1800:
case 1982:
case 3847:
case 1619:
case 3042:
case 2033:
case 3800:
case 2267:
case 1042:
case 2590:
case 46:
case 2228:
case 1039:
case 1316:
case 2147:
case 3111:
case 698:
case 2911:
case 363:
case 2315:
case 75:
case 1900:
case 3528:
case 1238:
case 1402:
case 1557:
case 2382:
case 3729:
case 2818:
case 666:
case 410:
case 2531:
case 3980:
case 2180:
case 2226:
case 977:
case 4006:
case 4054:
case 725:
case 3482:
case 474:
case 4053:
case 1652:
case 905:
case 1225:
case 1236:
case 958:
case 3447:
case 648:
case 2380:
case 1447:
case 1535:
case 1733:
case 4088:
case 2742:
case 3400:
case 2577:
case 770:
case 3521:
case 842:
case 459:
case 2670:
case 2739:
case 3902:
case 3118:
case 906:
case 1526:
case 726:
case 4064:
case 2723:
case 665:
case 1734:
case 3040:
case 690:
case 1802:
case 769:
case 734:
case 2536:
case 271:
case 1007:
case 857:
case 3865:
case 3593:
case 2546:
case 1855:
case 3795:
case 105:
case 85:
case 2803:
case 3030:
case 1098:
case 1517:
case 3166:
case 1303:
case 2664:
case 2966:
case 1722:
case 1156:
case 1809:
case 2951:
case 1161:
case 2601:
case 2355:
case 1356:
case 878:
case 2484:
case 3366:
case 2663:
case 1304:
case 1299:
case 2155:
case 2749:
case 3955:
case 3351:
case 1965:
case 2861:
case 713:
case 3878:
case 1241:
case 2791:
case 3594:
case 3909:
case 1669:
case 2732:
case 1743:
case 3246:
case 17:
case 2856:
case 2804:
case 2851:
case 672:
case 3669:
case 3241:
case 2217:
case 3437:
case 577:
case 3545:
case 37:
case 3743:
case 57:
case 1246:
case 1366:
case 3304:
case 2653:
case 3356:
case 3361:
case 3299:
case 2020:
case 3722:
case 2654:
case 3303:
case 2904:
case 792:
case 2961:
case 1151:
case 558:
case 2245:
case 2458:
case 106:
case 3098:
case 3744:
case 1184:
case 1383:
case 1327:
case 1455:
case 661:
case 2681:
case 2868:
case 150:
case 1889:
case 1248:
case 3465:
case 2044:
case 1368:
case 2389:
case 3937:
case 339:
case 1971:
case 2189:
case 3989:
case 2608:
case 519:
case 2337:
case 299:
case 3612:
case 3720:
case 814:
case 1384:
case 2456:
case 2461:
case 1127:
case 3091:
case 220:
case 2548:
case 3032:
case 2983:
case 3384:
case 2927:
case 1096:
case 3375:
case 2968:
case 1989:
case 4013:
case 1674:
case 1976:
case 3049:
case 119:
case 3409:
case 3368:
case 139:
case 721:
case 1673:
case 2686:
case 825:
case 1465:
case 1871:
case 3248:
case 2730:
case 3327:
case 3455:
case 2542:
case 2777:
case 636:
case 1414:
case 321:
case 1472:
case 2460:
case 3162:
case 1970:
case 3223:
case 750:
case 624:
case 2524:
case 4065:
case 1618:
case 486:
case 1352:
case 4078:
case 2725:
case 2523:
case 460:
case 3497:
case 616:
case 495:
case 3242:
case 1497:
case 3413:
case 719:
case 3529:
case 1870:
case 2792:
case 1242:
case 2067:
case 2370:
case 342:
case 542:
case 1239:
case 3352:
case 2028:
case 64:
case 1223:
case 1162:
case 3970:
case 2170:
case 1287:
case 1721:
case 485:
case 4009:
case 3090:
case 1038:
case 2234:
case 121:
case 3414:
case 2450:
case 764:
case 1872:
case 392:
case 592:
case 1240:
case 1814:
case 283:
case 758:
case 1119:
case 3207:
case 4071:
case 1997:
case 705:
case 446:
case 2026:
case 2372:
case 3350:
case 3728:
case 468:
case 113:
case 1025:
case 2313:
case 182:
case 2114:
case 925:
case 2172:
case 3972:
case 232:
case 1813:
case 2452:
case 1757:
case 1470:
case 43:
case 2540:
case 1767:
case 3319:
case 1092:
case 293:
case 687:
case 2960:
case 926:
case 3025:
case 1150:
case 582:
case 2615:
case 863:
case 706:
case 533:
case 1350:
case 4076:
case 3240:
case 2738:
case 3872:
case 1207:
case 417:
case 41:
case 125:
case 1464:
case 526:
case 2410:
case 3454:
case 982:
case 1298:
case 3185:
case 913:
case 2381:
case 3230:
case 2689:
case 1668:
case 481:
case 4015:
case 3112:
case 2974:
case 3373:
case 3174:
case 864:
case 839:
case 2973:
case 514:
case 294:
case 2637:
case 570:
case 1041:
case 1463:
case 1684:
case 2181:
case 1979:
case 3981:
case 1808:
case 3385:
case 3046:
case 2093:
case 2186:
case 3041:
case 2017:
case 1453:
case 2405:
case 2459:
case 3488:
case 114:
case 3099:
case 1312:
case 1173:
case 1879:
case 3520:
case 1658:
case 2671:
case 1174:
case 1373:
case 134:
case 1112:
case 1454:
case 2873:
case 284:
case 2386:
case 850:
case 3401:
case 557:
case 2959:
case 1801:
case 806:
case 3159:
case 3745:
case 35:
case 1169:
case 55:
case 1048:
case 1794:
case 2810:
case 652:
case 3854:
case 942:
case 3806:
case 1953:
case 2222:
case 2163:
case 1603:
case 2364:
case 3963:
case 1481:
case 3479:
case 2301:
case 2905:
case 3105:
case 3666:
case 1604:
case 1954:
case 378:
case 3651:
case 2869:
case 453:
case 1249:
case 2799:
case 3901:
case 3717:
case 1291:
case 2741:
case 3544:
case 1232:
case 1369:
case 3359:
case 2388:
case 1408:
case 227:
case 1595:
case 1793:
case 22:
case 3853:
case 3408:
case 2805:
case 1544:
case 3232:
case 422:
case 200:
case 877:
case 3793:
case 4080:
case 0:
case 3954:
case 3656:
case 3110:
case 2353:
case 1964:
case 3604:
case 2106:
case 2859:
case 3661:
case 2678:
case 1305:
case 1651:
case 2306:
case 2549:
case 1963:
case 623:
case 3310:
case 701:
case 1105:
case 2665:
case 858:
case 15:
case 157:
case 1745:
case 1159:
case 1806:
case 2591:
case 1854:
case 2473:
case 2532:
case 1056:
case 2491:
case 1004:
case 2208:
case 3066:
case 147:
case 880:
case 3212:
case 1061:
case 1737:
case 1443:
case 14:
case 3274:
case 848:
case 2784:
case 3581:
case 3820:
case 516:
case 296:
case 316:
case 1198:
case 2930:
case 3130:
case 336:
case 2585:
case 2009:
case 1422:
case 703:
case 135:
case 866:
case 3330:
case 2727:
case 7:
case 1398:
case 1648:
case 3495:
case 2512:
case 2768:
case 1789:
case 2898:
case 1444:
case 3273:
case 3508:
case 2758:
case 3003:
case 124:
case 3920:
case 2065:
case 335:
case 535:
case 443:
case 3422:
case 865:
case 3398:
case 451:
case 1581:
case 1820:
case 515:
case 3579:
case 3586:
case 1285:
case 4057:
case 3198:
case 2998:
case 3004:
case 1066:
case 3056:
case 34:
case 2078:
case 2496:
case 3443:
case 1051:
case 3737:
case 2320:
case 1212:
case 3922:
case 493:
case 2756:
case 2263:
case 840:
case 1075:
case 2037:
case 3778:
case 1554:
case 2849:
case 1995:
case 2288:
case 1084:
case 1269:
case 1332:
case 1641:
case 23:
case 2693:
case 2343:
case 3420:
case 3588:
case 217:
case 397:
case 39:
case 2143:
case 59:
case 1822:
case 2344:
case 2996:
case 1068:
case 1210:
case 2505:
case 2322:
case 1844:
case 2076:
case 1553:
case 2498:
case 309:
case 509:
case 2254:
case 3210:
case 4026:
case 3068:
case 911:
case 2206:
case 109:
case 2395:
case 412:
case 3709:
case 1196:
case 4035:
case 197:
case 1588:
case 3027:
case 2617:
case 3391:
case 432:
case 3332:
case 2195:
case 3084:
case 3995:
case 1646:
case 1944:
case 3075:
case 387:
case 2253:
case 2896:
case 58:
case 682:
case 1205:
case 1778:
case 3554:
case 1564:
case 3506:
case 3349:
case 3699:
case 1011:
case 3123:
case 2987:
case 3833:
case 1934:
case 4017:
case 1929:
case 3692:
case 455:
case 626:
case 1677:
case 1933:
case 987:
case 3142:
case 2635:
case 861:
case 98:
case 2626:
case 3323:
case 3829:
case 2718:
case 1570:
case 634:
case 1702:
case 2015:
case 803:
case 1124:
case 766:
case 2621:
case 1387:
case 2329:
case 3677:
case 2082:
case 729:
case 1142:
case 3929:
case 2129:
case 909:
case 1631:
case 3780:
case 2824:
case 4093:
case 997:
case 2842:
case 748:
case 3252:
case 2270:
case 1016:
case 1187:
case 494:
case 1833:
case 3747:
case 2550:
case 3572:
case 1700:
case 935:
case 400:
case 222:
case 1140:
case 2907:
case 3107:
case 1690:
case 3782:
case 798:
case 3638:
case 657:
case 552:
case 3429:
case 3513:
case 915:
case 323:
case 1429:
case 1513:
case 2002:
case 2807:
case 3018:
case 1250:
case 3597:
case 2519:
case 2423:
case 3690:
case 152:
case 2487:
case 1307:
case 3140:
case 2439:
case 924:
case 3219:
case 1572:
case 2560:
case 2628:
case 1433:
case 1514:
case 253:
case 3700:
case 3266:
case 3555:
case 1256:
case 340:
case 3753:
case 2841:
case 1399:
case 1632:
case 9:
case 1691:
case 1341:
case 2899:
case 1945:
case 1788:
case 4033:
case 267:
case 903:
case 3085:
case 26:
case 2393:
case 3509:
case 3346:
case 3696:
case 1141:
case 1917:
case 897:
case 2394:
case 601:
case 2622:
case 2551:
case 198:
case 1578:
case 1764:
case 1203:
case 1199:
case 504:
case 2566:
case 3073:
case 809:
case 2561:
case 3764:
case 3578:
case 3894:
case 398:
case 1845:
case 2999:
case 3701:
case 2117:
case 2695:
case 2345:
case 2079:
case 1993:
case 1146:
case 2145:
case 3788:
case 3945:
case 3341:
case 3691:
case 462:
case 3632:
case 188:
case 1085:
case 887:
case 238:
case 2846:
case 3565:
case 961:
case 88:
case 1266:
case 2705:
case 1251:
case 1817:
case 2278:
case 1708:
case 2441:
case 1493:
case 1571:
case 3005:
case 2237:
case 548:
case 348:
case 1069:
case 1284:
case 2088:
case 3059:
case 1148:
case 1283:
case 836:
case 190:
case 566:
case 1698:
case 1348:
case 471:
case 1227:
case 3779:
case 2848:
case 3537:
case 2064:
case 2276:
case 972:
case 3268:
case 1445:
case 2006:
case 3010:
case 2271:
case 2773:
case 3494:
case 129:
case 210:
case 835:
case 390:
case 365:
case 3283:
case 3227:
case 1779:
case 1630:
case 3698:
case 1059:
case 815:
case 148:
case 2785:
case 3148:
case 1417:
case 1576:
case 2620:
case 2774:
case 1589:
case 180:
case 3493:
case 3571:
case 711:
case 1052:
case 3867:
case 428:
case 3797:
case 990:
case 1713:
case 1190:
case 3828:
case 1582:
case 2357:
case 2425:
case 1426:
case 606:
case 1640:
case 3607:
case 1967:
case 449:
case 2516:
case 3500:
case 2760:
case 2890:
case 1435:
case 823:
case 3928:
case 948:
case 797:
case 658:
case 3547:
case 2838:
case 79:
case 3640:
case 605:
case 3426:
case 3967:
case 1957:
case 709:
case 1138:
case 1828:
case 2367:
case 677:
case 3211:
case 2070:
case 3857:
case 3515:
case 2431:
case 3713:
case 2126:
case 3624:
case 3926:
case 715:
case 3639:
case 619:
case 202:
case 420:
case 2825:
case 1336:
case 3392:
case 1019:
case 3331:
case 74:
case 2280:
case 3935:
case 747:
case 811:
case 3821:
case 3580:
case 476:
case 2992:
case 1826:
case 3192:
case 103:
case 735:
case 3623:
case 2326:
case 2072:
case 1:
case 3050:
case 1125:
case 1623:
case 736:
case 3835:
case 1050:
case 3125:
case 5:
case 3060:
case 1687:
case 2634:
case 1821:
case 1580:
case 3136:
case 1192:
case 161:
case 1131:
case 3826:
case 940:
case 724:
case 1428:
case 2633:
case 3336:
case 904:
case 2977:
case 40:
case 1331:
case 407:
case 3019:
case 1392:
case 1642:
case 2762:
case 1770:
case 2097:
case 1926:
case 716:
case 2831:
case 1467:
case 2121:
case 499:
case 3457:
case 3502:
case 3325:
case 151:
case 1736:
case 416:
case 660:
case 2413:
case 3792:
case 3067:
case 1852:
case 2352:
case 4066:
case 3028:
case 1523:
case 707:
case 3952:
case 2152:
case 2726:
case 927:
case 92:
case 1962:
case 2618:
case 1524:
case 424:
case 143:
case 1777:
case 436:
case 3229:
case 2090:
case 3234:
case 2533:
case 2472:
case 1234:
case 1229:
case 1450:
case 3460:
case 1170:
case 789:
case 2162:
case 776:
case 685:
case 3524:
case 3587:
case 2224:
case 4004:
case 944:
case 4056:
case 2239:
case 2362:
case 3725:
case 4061:
case 3419:
case 3523:
case 696:
case 3736:
case 1233:
case 351:
case 1067:
case 1731:
case 2870:
case 1862:
case 1452:
case 1507:
case 2757:
case 2611:
case 3647:
case 3397:
case 393:
case 2160:
case 282:
case 1114:
case 646:
case 233:
case 1113:
case 1372:
case 3021:
case 112:
case 2240:
case 3682:
case 3850:
case 497:
case 3919:
case 183:
case 49:
case 1738:
case 512:
case 292:
case 1850:
case 312:
case 583:
case 3035:
case 383:
case 61:
case 1919:
case 2207:
case 645:
case 3026:
case 2913:
case 749:
case 2350:
case 4075:
case 1647:
case 1397:
case 48:
case 2914:
case 2150:
case 3600:
case 984:
case 332:
case 2470:
case 532:
case 3507:
case 4084:
case 637:
case 2767:
case 2897:
case 2986:
case 2684:
case 3812:
case 3017:
case 2041:
case 1093:
case 3405:
case 156:
case 3179:
case 1181:
case 411:
case 555:
case 1469:
case 3459:
case 1637:
case 194:
case 912:
case 4016:
case 1108:
case 2520:
case 681:
case 3671:
case 1676:
case 3873:
case 889:
case 384:
case 3386:
case 2464:
case 1381:
case 431:
case 2401:
case 1748:
case 1094:
case 1985:
case 1045:
case 3410:
case 226:
case 1873:
case 875:
case 2454:
case 3748:
case 2185:
case 3689:
case 2658:
case 2908:
case 3108:
case 2879:
case 269:
case 3912:
case 3974:
case 3676:
case 771:
case 2373:
case 1459:
case 108:
case 4011:
case 3973:
case 2173:
case 1598:
case 1017:
case 270:
case 1812:
case 1186:
case 80:
case 155:
case 691:
case 2981:
case 1179:
case 807:
case 2385:
case 556:
case 2408:
case 3805:
case 2232:
case 2291:
case 12:
case 2793:
case 3746:
case 2595:
case 3412:
case 2954:
case 2656:
case 3353:
case 828:
case 2888:
case 2661:
case 1799:
case 943:
case 3485:
case 1364:
case 3306:
case 1163:
case 3153:
case 3354:
case 951:
case 641:
case 1596:
case 3969:
case 2169:
case 1959:
case 2801:
case 344:
case 3591:
case 2794:
case 1810:
case 2048:
case 1244:
case 3532:
case 3959:
case 1295:
case 2745:
case 3596:
case 1969:
case 1532:
case 3244:
case 1473:
case 2854:
case 2806:
case 2486:
case 2963:
case 1306:
case 3301:
case 3905:
case 1665:
case 2105:
case 3164:
case 1106:
case 3363:
case 2964:
case 278:
case 1910:
case 1154:
case 2305:
case 2522:
case 1678:
case 3799:
case 3101:
case 3741:
case 100:
case 2717:
case 622:
case 2359:
case 1412:
case 2296:
case 52:
case 3182:
case 2982:
case 162:
case 2800:
case 488:
case 1811:
case 4085:
case 2915:
case 3115:
case 440:
case 638:
case 1613:
case 2480:
case 975:
case 618:
case 263:
case 90:
case 3911:
case 907:
case 3315:
case 1672:
case 2528:
case 2660:
case 404:
case 1614:
case 3034:
case 999:
case 3029:
case 3382:
case 1418:
case 3740:
case 2557:
case 2402:
case 812:
case 201:
case 3418:
case 1147:
case 3916:
case 920:
case 744:
case 2650:
case 2116:
case 2900:
case 3672:
case 1347:
case 1697:
case 1115:
case 700:
case 1228:
case 2024:
case 976:
case 562:
case 1182:
case 1816:
case 3257:
case 3538:
case 667:
case 1411:
case 3742:
case 3577:
case 3416:
case 794:
case 2880:
case 3724:
case 3670:
case 3102:
case 2902:
case 2225:
case 3918:
case 3302:
case 3723:
case 674:
case 1531:
case 1592:
case 466:
case 2040:
case 1180:
case 571:
case 371:
case 3592:
case 2415:
case 2734:
case 465:
case 2007:
case 1536:
case 928:
case 2802:
case 1302:
case 4010:
case 784:
case 1221:
case 2662:
case 1102:
case 1670:
case 1724:
case 1918:
case 851:
case 3411:
case 4069:
case 2447:
case 2231:
case 3380:
case 2292:
case 1732:
case 2669:
case 3851:
case 3217:
case 1109:
case 1861:
case 1688:
case 2437:
case 2545:
case 3866:
case 27:
case 1856:
case 1293:
case 1484:
case 2103:
case 732:
case 328:
case 2356:
case 4062:
case 2965:
case 1155:
case 2722:
case 3956:
case 2303:
case 3599:
case 3606:
case 2104:
case 1483:
case 1427:
case 1355:
case 3961:
case 783:
case 2978:
case 2809:
case 1468:
case 205:
case 1309:
case 1546:
case 2489:
case 2517:
case 2476:
case 2744:
case 1294:
case 349:
case 1803:
case 206:
case 3546:
case 2471:
case 1245:
case 2030:
case 149:
case 3294:
case 3966:
case 1654:
case 673:
case 3951:
case 3427:
case 3601:
case 3355:
case 1653:
case 3484:
case 4052:
case 3663:
case 1020:
case 2955:
case 1165:
case 1378:
case 3109:
case 472:
case 1851:
case 2594:
case 2909:
case 3293:
case 2246:
case 1796:
case 3856:
case 3804:
case 320:
case 1456:
case 2091:
case 2032:
case 3983:
case 2837:
case 1404:
case 3466:
case 2127:
case 107:
case 1875:
case 1043:
case 3451:
case 855:
case 808:
case 1608:
case 3171:
case 2971:
case 1189:
case 2049:
case 1337:
case 1389:
case 1022:
case 1827:
case 3975:
case 4050:
case 1376:
case 3686:
case 389:
case 3095:
case 2876:
case 250:
case 2889:
case 3858:
case 1868:
case 3730:
case 2455:
case 1095:
case 575:
case 1984:
case 1686:
case 3681:
case 3868:
case 1858:
case 2465:
case 3044:
case 1975:
case 3022:
case 1371:
case 3389:
case 2358:
case 2673:
case 3376:
case 4:
case 4060:
case 3137:
case 3189:
case 3958:
case 3608:
case 3884:
case 599:
case 219:
case 2976:
case 3404:
case 1466:
case 1983:
case 602:
case 3043:
case 2096:
case 1451:
case 4019:
case 3875:
case 507:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1746698402/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,];
var gg_b = "1746698402/";

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
