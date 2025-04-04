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
case 3228:
case 596:
case 3538:
case 802:
case 971:
case 1949:
case 144:
case 2286:
case 3343:
case 309:
case 2470:
case 472:
case 1511:
case 2913:
case 72:
case 2821:
case 2261:
case 2608:
case 3647:
case 3794:
case 2156:
case 4085:
case 216:
case 2103:
case 1587:
case 3892:
case 1604:
case 2969:
case 2456:
case 246:
case 2280:
case 1241:
case 1859:
case 2476:
case 129:
case 2085:
case 2176:
case 3974:
case 1705:
case 4077:
case 1232:
case 1434:
case 2671:
case 1690:
case 3706:
case 2009:
case 383:
case 468:
case 2337:
case 2077:
case 2651:
case 654:
case 68:
case 3700:
case 401:
case 1399:
case 2138:
case 3570:
case 3695:
case 902:
case 3032:
case 3372:
case 1696:
case 3774:
case 2312:
case 910:
case 1065:
case 3504:
case 3884:
case 1451:
case 305:
case 512:
case 2769:
case 1471:
case 307:
case 2490:
case 863:
case 1433:
case 3081:
case 1989:
case 2634:
case 148:
case 1217:
case 1133:
case 2837:
case 2190:
case 2567:
case 1171:
case 127:
case 292:
case 63:
case 2429:
case 2240:
case 1281:
case 492:
case 3265:
case 3872:
case 3825:
case 3611:
case 4045:
case 1650:
case 3116:
case 1408:
case 3368:
case 464:
case 2097:
case 2914:
case 891:
case 3793:
case 1115:
case 4023:
case 3843:
case 3900:
case 1108:
case 2321:
case 3239:
case 1670:
case 1595:
case 264:
case 3467:
case 4:
case 3590:
case 3973:
case 1379:
case 1039:
case 3931:
case 3953:
case 2104:
case 1359:
case 658:
case 3110:
case 731:
case 2:
case 2735:
case 840:
case 1655:
case 2736:
case 3359:
case 3656:
case 836:
case 3603:
case 2297:
case 2364:
case 1392:
case 1467:
case 2348:
case 1973:
case 2863:
case 2223:
case 6:
case 258:
case 1931:
case 3379:
case 3039:
case 52:
case 2819:
case 1727:
case 4002:
case 2447:
case 1368:
case 2002:
case 796:
case 3415:
case 3115:
case 1793:
case 2730:
case 3899:
case 1060:
case 3826:
case 3266:
case 3749:
case 700:
case 3547:
case 2888:
case 2962:
case 1265:
case 1782:
case 692:
case 23:
case 2515:
case 1017:
case 1852:
case 43:
case 327:
case 3281:
case 2046:
case 107:
case 133:
case 1383:
case 3989:
case 1774:
case 1687:
case 3820:
case 3451:
case 3260:
case 4040:
case 3399:
case 254:
case 2930:
case 1700:
case 1695:
case 1993:
case 1570:
case 776:
case 2388:
case 2257:
case 1372:
case 3696:
case 601:
case 48:
case 454:
case 2411:
case 2209:
case 183:
case 2901:
case 156:
case 668:
case 1556:
case 3555:
case 3232:
case 520:
case 742:
case 3705:
case 3718:
case 3690:
case 953:
case 2936:
case 421:
case 3320:
case 1706:
case 712:
case 922:
case 2122:
case 2175:
case 3241:
case 2667:
case 2086:
case 430:
case 329:
case 3859:
case 4061:
case 2534:
case 646:
case 853:
case 3028:
case 822:
case 2864:
case 2224:
case 3587:
case 2455:
case 2848:
case 3789:
case 70:
case 3879:
case 4080:
case 2319:
case 1844:
case 1794:
case 2285:
case 672:
case 1868:
case 2978:
case 3949:
case 2080:
case 109:
case 3891:
case 379:
case 3960:
case 901:
case 384:
case 765:
case 872:
case 3315:
case 3308:
case 3917:
case 202:
case 3289:
case 767:
case 3479:
case 397:
case 3107:
case 1089:
case 3407:
case 2448:
case 3179:
case 968:
case 3042:
case 1663:
case 846:
case 1965:
case 2464:
case 3159:
case 2785:
case 622:
case 1728:
case 1512:
case 3459:
case 3966:
case 395:
case 2164:
case 816:
case 3637:
case 2559:
case 3053:
case 946:
case 3006:
case 3351:
case 1200:
case 1018:
case 3834:
case 2887:
case 2507:
case 338:
case 2579:
case 3073:
case 143:
case 1483:
case 868:
case 3371:
case 2709:
case 2923:
case 1688:
case 2672:
case 2811:
case 44:
case 2997:
case 570:
case 471:
case 1206:
case 769:
case 3420:
case 3851:
case 2985:
case 1484:
case 2683:
case 3074:
case 3334:
case 732:
case 2387:
case 463:
case 3054:
case 3781:
case 3833:
case 3612:
case 377:
case 2013:
case 3519:
case 16:
case 2745:
case 3717:
case 3126:
case 3082:
case 892:
case 1472:
case 1425:
case 1172:
case 2188:
case 1049:
case 3426:
case 3760:
case 491:
case 1816:
case 864:
case 334:
case 3093:
case 992:
case 3932:
case 3815:
case 1143:
case 3808:
case 3588:
case 2119:
case 2668:
case 291:
case 2723:
case 240:
case 2463:
case 2355:
case 2163:
case 1537:
case 559:
case 2957:
case 541:
case 2230:
case 440:
case 2692:
case 1648:
case 2520:
case 2804:
case 858:
case 880:
case 640:
case 2036:
case 436:
case 2607:
case 3293:
case 3648:
case 236:
case 3739:
case 3664:
case 3227:
case 3867:
case 2659:
case 3537:
case 93:
case 2552:
case 3816:
case 2370:
case 1815:
case 2235:
case 1588:
case 1082:
case 2078:
case 1199:
case 757:
case 1126:
case 3425:
case 3049:
case 1941:
case 2980:
case 1760:
case 199:
case 1519:
case 2746:
case 2269:
case 2896:
case 36:
case 4078:
case 3254:
case 1717:
case 3452:
case 2437:
case 2137:
case 1612:
case 1781:
case 79:
case 2740:
case 1871:
case 177:
case 2890:
case 980:
case 1249:
case 1766:
case 3184:
case 1120:
case 3928:
case 3282:
case 3484:
case 526:
case 1074:
case 1334:
case 671:
case 1218:
case 2568:
case 706:
case 3206:
case 1000:
case 88:
case 3521:
case 64:
case 2329:
case 2396:
case 3231:
case 2626:
case 61:
case 1548:
case 2620:
case 1333:
case 1073:
case 138:
case 1371:
case 343:
case 1053:
case 1637:
case 569:
case 2112:
case 1351:
case 1006:
case 3018:
case 2214:
case 2412:
case 1834:
case 741:
case 1159:
case 1459:
case 422:
case 711:
case 2786:
case 2856:
case 2761:
case 197:
case 286:
case 2583:
case 3192:
case 77:
case 1107:
case 3367:
case 3294:
case 3492:
case 1042:
case 1179:
case 2098:
case 1917:
case 1094:
case 3242:
case 2121:
case 3144:
case 2850:
case 954:
case 2946:
case 3316:
case 1891:
case 179:
case 1741:
case 2780:
case 2062:
case 602:
case 2991:
case 2860:
case 3178:
case 294:
case 2025:
case 1088:
case 4052:
case 2149:
case 3478:
case 2052:
case 3795:
case 529:
case 1113:
case 4072:
case 3600:
case 1796:
case 331:
case 1950:
case 3158:
case 1413:
case 861:
case 1846:
case 2614:
case 494:
case 485:
case 1618:
case 1790:
case 514:
case 1956:
case 196:
case 287:
case 1903:
case 1840:
case 2501:
case 1605:
case 1169:
case 3288:
case 3975:
case 2084:
case 487:
case 2866:
case 1976:
case 2226:
case 285:
case 2536:
case 478:
case 3436:
case 908:
case 1689:
case 2934:
case 893:
case 3987:
case 3401:
case 3823:
case 3911:
case 320:
case 961:
case 3747:
case 2708:
case 262:
case 2578:
case 3897:
case 2715:
case 3324:
case 3694:
case 239:
case 3430:
case 1506:
case 2951:
case 3885:
case 3505:
case 4092:
case 3518:
case 3775:
case 527:
case 1048:
case 2092:
case 2189:
case 525:
case 2489:
case 1703:
case 298:
case 3198:
case 1990:
case 1573:
case 1861:
case 176:
case 1996:
case 1750:
case 2279:
case 112:
case 4068:
case 804:
case 3995:
case 4044:
case 2068:
case 783:
case 3824:
case 1302:
case 2841:
case 3162:
case 1500:
case 3627:
case 2791:
case 518:
case 1770:
case 2259:
case 1114:
case 2613:
case 1212:
case 2915:
case 1414:
case 3947:
case 2908:
case 2562:
case 2317:
case 3711:
case 1346:
case 2083:
case 3589:
case 203:
case 3809:
case 2381:
case 1340:
case 3674:
case 1542:
case 3877:
case 3787:
case 3012:
case 1904:
case 2405:
case 2418:
case 235:
case 3654:
case 1857:
case 1012:
case 12:
case 1654:
case 2453:
case 1589:
case 1674:
case 2473:
case 2967:
case 3542:
case 3594:
case 223:
case 949:
case 2400:
case 951:
case 3114:
case 3212:
case 3414:
case 30:
case 2100:
case 2514:
case 3302:
case 533:
case 1397:
case 3500:
case 3880:
case 1162:
case 3770:
case 2194:
case 819:
case 1323:
case 342:
case 3929:
case 3996:
case 689:
case 312:
case 2630:
case 674:
case 1248:
case 1498:
case 824:
case 2636:
case 3048:
case 3703:
case 2339:
case 3573:
case 2079:
case 1198:
case 4079:
case 3553:
case 2601:
case 2268:
case 1775:
case 1722:
case 3064:
case 1130:
case 556:
case 1747:
case 1324:
case 1897:
case 3380:
case 1694:
case 2716:
case 1430:
case 2662:
case 1263:
case 2127:
case 1911:
case 120:
case 2513:
case 662:
case 639:
case 725:
case 915:
case 3361:
case 1219:
case 300:
case 3135:
case 947:
case 2243:
case 1436:
case 1642:
case 3689:
case 917:
case 2865:
case 678:
case 1975:
case 1922:
case 2272:
case 1288:
case 847:
case 687:
case 2020:
case 1309:
case 3618:
case 3605:
case 3903:
case 2252:
case 1606:
case 694:
case 1795:
case 3237:
case 1600:
case 1845:
case 3729:
case 131:
case 3796:
case 766:
case 3413:
case 3846:
case 3970:
case 2099:
case 2026:
case 3088:
case 828:
case 2284:
case 261:
case 2502:
case 2968:
case 2725:
case 628:
case 3314:
case 1788:
case 2300:
case 3632:
case 939:
case 1145:
case 1096:
case 1029:
case 894:
case 962:
case 2752:
case 3095:
case 3737:
case 2992:
case 2373:
case 2033:
case 3869:
case 4051:
case 2331:
case 3296:
case 2071:
case 4033:
case 617:
case 2306:
case 4071:
case 2051:
case 647:
case 2784:
case 2465:
case 887:
case 3912:
case 3565:
case 1247:
case 493:
case 155:
case 1566:
case 987:
case 2983:
case 1628:
case 2540:
case 293:
case 1581:
case 157:
case 1763:
case 799:
case 2342:
case 839:
case 4015:
case 1517:
case 4008:
case 332:
case 2546:
case 994:
case 2624:
case 1423:
case 862:
case 1830:
case 1560:
case 2893:
case 3102:
case 3402:
case 3047:
case 2008:
case 788:
case 19:
case 56:
case 1639:
case 2428:
case 1185:
case 2128:
case 3270:
case 1336:
case 1076:
case 903:
case 3486:
case 3250:
case 106:
case 1003:
case 1748:
case 3937:
case 2792:
case 1898:
case 1255:
case 2327:
case 2894:
case 649:
case 326:
case 382:
case 3721:
case 619:
case 4091:
case 2697:
case 404:
case 3276:
case 1070:
case 204:
case 2393:
case 1424:
case 1222:
case 2925:
case 1862:
case 1988:
case 738:
case 1532:
case 1378:
case 17:
case 2382:
case 797:
case 3617:
case 2943:
case 2800:
case 2645:
case 2580:
case 1919:
case 141:
case 974:
case 3660:
case 1358:
case 111:
case 795:
case 3666:
case 784:
case 1477:
case 2354:
case 779:
case 1177:
case 1963:
case 2783:
case 190:
case 2831:
case 273:
case 2853:
case 1157:
case 473:
case 998:
case 3238:
case 367:
case 2374:
case 3712:
case 837:
case 3681:
case 3528:
case 2818:
case 1238:
case 1681:
case 1528:
case 2640:
case 2585:
case 1712:
case 1666:
case 1087:
case 3477:
case 3665:
case 1369:
case 3211:
case 3409:
case 3919:
case 311:
case 3378:
case 2524:
case 2432:
case 823:
case 359:
case 3541:
case 3070:
case 2999:
case 3330:
case 2926:
case 3124:
case 2441:
case 1480:
case 743:
case 3424:
case 2141:
case 3862:
case 3275:
case 588:
case 219:
case 419:
case 3050:
case 126:
case 449:
case 1721:
case 1256:
case 251:
case 1461:
case 1250:
case 2779:
case 2889:
case 2509:
case 1161:
case 2577:
case 1186:
case 3485:
case 2557:
case 3076:
case 2920:
case 2759:
case 1486:
case 3830:
case 2016:
case 1102:
case 3197:
case 3560:
case 1204:
case 538:
case 39:
case 1047:
case 1641:
case 2545:
case 2680:
case 3123:
case 169:
case 132:
case 4016:
case 3423:
case 3628:
case 3801:
case 2686:
case 76:
case 2208:
case 2661:
case 1565:
case 3836:
case 2466:
case 2959:
case 245:
case 2166:
case 3964:
case 579:
case 1737:
case 3295:
case 2181:
case 2481:
case 445:
case 1296:
case 3090:
case 247:
case 1813:
case 2117:
case 1446:
case 1632:
case 2233:
case 1290:
case 3858:
case 1146:
case 595:
case 3878:
case 3788:
case 1314:
case 2849:
case 2251:
case 2726:
case 905:
case 3463:
case 340:
case 3909:
case 1001:
case 1659:
case 310:
case 3355:
case 3163:
case 1679:
case 3375:
case 3957:
case 1804:
case 3035:
case 1584:
case 3520:
case 933:
case 1036:
case 3526:
case 3599:
case 234:
case 3236:
case 1572:
case 1525:
case 2815:
case 1702:
case 4027:
case 3797:
case 1235:
case 2932:
case 3119:
case 434:
case 3419:
case 3201:
case 391:
case 1350:
case 499:
case 1829:
case 1896:
case 3013:
case 2519:
case 1746:
case 1058:
case 3745:
case 524:
case 3924:
case 3488:
case 2199:
case 1078:
case 2082:
case 2941:
case 2420:
case 2851:
case 275:
case 477:
case 488:
case 2249:
case 4054:
case 807:
case 3985:
case 2120:
case 805:
case 549:
case 3387:
case 3258:
case 1961:
case 1890:
case 475:
case 2833:
case 519:
case 1137:
case 2612:
case 288:
case 1213:
case 3811:
case 1329:
case 1396:
case 909:
case 3625:
case 1699:
case 1902:
case 2205:
case 1568:
case 3997:
case 2732:
case 34:
case 31:
case 3652:
case 2351:
case 613:
case 4031:
case 438:
case 2053:
case 4073:
case 1112:
case 1214:
case 883:
case 1412:
case 2834:
case 2564:
case 856:
case 3777:
case 3507:
case 1620:
case 704:
case 3887:
case 2371:
case 4006:
case 2031:
case 3709:
case 3684:
case 3579:
case 1583:
case 1803:
case 3148:
case 1940:
case 2479:
case 1761:
case 186:
case 122:
case 495:
case 660:
case 2179:
case 1098:
case 2407:
case 3785:
case 3464:
case 2459:
case 956:
case 1876:
case 295:
case 497:
case 517:
case 2741:
case 284:
case 1780:
case 1870:
case 2891:
case 3347:
case 2308:
case 2315:
case 1121:
case 2094:
case 2917:
case 545:
case 809:
case 484:
case 1946:
case 2289:
case 1850:
case 1421:
case 479:
case 1945:
case 2242:
case 844:
case 1298:
case 679:
case 684:
case 3946:
case 65:
case 3421:
case 3780:
case 2316:
case 2168:
case 2468:
case 2619:
case 508:
case 1724:
case 697:
case 2512:
case 1262:
case 3304:
case 1822:
case 3786:
case 1164:
case 3876:
case 2310:
case 1148:
case 2089:
case 2192:
case 3761:
case 3856:
case 695:
case 3098:
case 2492:
case 1855:
case 1448:
case 3592:
case 1887:
case 2183:
case 3390:
case 243:
case 2483:
case 929:
case 1579:
case 443:
case 3112:
case 1757:
case 638:
case 3412:
case 1014:
case 593:
case 1997:
case 3568:
case 2253:
case 1652:
case 3396:
case 2231:
case 1811:
case 171:
case 2273:
case 1625:
case 2688:
case 3544:
case 966:
case 1387:
case 675:
case 3961:
case 3213:
case 3740:
case 3986:
case 650:
case 2765:
case 688:
case 1278:
case 2928:
case 1683:
case 827:
case 1924:
case 2274:
case 2472:
case 3338:
case 46:
case 2172:
case 2049:
case 3543:
case 3896:
case 26:
case 3829:
case 4049:
case 1895:
case 2452:
case 3058:
case 1119:
case 634:
case 745:
case 715:
case 925:
case 1419:
case 1201:
case 191:
case 717:
case 1526:
case 1236:
case 1644:
case 2816:
case 2443:
case 1847:
case 3525:
case 3572:
case 1797:
case 573:
case 3702:
case 918:
case 1375:
case 3804:
case 1035:
case 1230:
case 2810:
case 1463:
case 866:
case 3303:
case 2664:
case 2739:
case 3001:
case 140:
case 336:
case 110:
case 2537:
case 3659:
case 1977:
case 1163:
case 2867:
case 794:
case 180:
case 1533:
case 2590:
case 2973:
case 1223:
case 2167:
case 1736:
case 988:
case 2906:
case 2410:
case 3104:
case 2953:
case 977:
case 523:
case 3404:
case 1364:
case 552:
case 1002:
case 787:
case 3914:
case 3097:
case 2116:
case 778:
case 2368:
case 1730:
case 1147:
case 2416:
case 1819:
case 3321:
case 999:
case 3023:
case 2529:
case 364:
case 2727:
case 3691:
case 3129:
case 3196:
case 2994:
case 899:
case 2852:
case 1195:
case 1046:
case 934:
case 4060:
case 3516:
case 13:
case 627:
case 2782:
case 1515:
case 2872:
case 2265:
case 2825:
case 1888:
case 2884:
case 877:
case 3312:
case 4081:
case 205:
case 2687:
case 2066:
case 407:
case 3634:
case 3246:
case 2081:
case 762:
case 233:
case 3490:
case 405:
case 2383:
case 4066:
case 1998:
case 739:
case 2754:
case 1111:
case 95:
case 2927:
case 2352:
case 2550:
case 301:
case 2993:
case 154:
case 1930:
case 3138:
case 2700:
case 798:
case 3438:
case 2032:
case 2325:
case 1388:
case 3671:
case 3057:
case 368:
case 456:
case 2753:
case 1936:
case 2773:
case 256:
case 2556:
case 995:
case 2883:
case 1901:
case 774:
case 3337:
case 3077:
case 2892:
case 2954:
case 3156:
case 2742:
case 3969:
case 3456:
case 346:
case 3403:
case 1175:
case 1122:
case 1667:
case 3176:
case 1534:
case 3085:
case 2538:
case 2868:
case 1285:
case 209:
case 3470:
case 1080:
case 2041:
case 372:
case 3821:
case 85:
case 4041:
case 2794:
case 879:
case 735:
case 3150:
case 3319:
case 172:
case 1450:
case 1608:
case 1615:
case 444:
case 585:
case 3616:
case 609:
case 214:
case 3762:
case 1024:
case 3285:
case 3978:
case 1470:
case 2949:
case 1286:
case 244:
case 1476:
case 3086:
case 1280:
case 2241:
case 3475:
case 723:
case 752:
case 2028:
case 1085:
case 1176:
case 3534:
case 3455:
case 3848:
case 2807:
case 1103:
case 3610:
case 594:
case 116:
case 4028:
case 429:
case 1456:
case 2879:
case 3061:
case 2604:
case 3363:
case 3155:
case 1403:
case 562:
case 3187:
case 3901:
case 1009:
case 2555:
case 3487:
case 960:
case 1337:
case 1077:
case 683:
case 1671:
case 2522:
case 1812:
case 2232:
case 1057:
case 168:
case 656:
case 2320:
case 3591:
case 2326:
case 2399:
case 354:
case 2629:
case 2696:
case 38:
case 1714:
case 3257:
case 3111:
case 101:
case 2989:
case 1246:
case 1769:
case 1490:
case 1567:
case 2171:
case 3245:
case 2217:
case 4065:
case 218:
case 589:
case 1837:
case 607:
case 2151:
case 1312:
case 418:
case 2065:
case 448:
case 2451:
case 1516:
case 225:
case 2899:
case 3515:
case 33:
case 3778:
case 3962:
case 3508:
case 2547:
case 1196:
case 1045:
case 1129:
case 3195:
case 3046:
case 1713:
case 2281:
case 227:
case 1429:
case 425:
case 1496:
case 3819:
case 535:
case 164:
case 1691:
case 2415:
case 1097:
case 2650:
case 2108:
case 3147:
case 2115:
case 3736:
case 3551:
case 1104:
case 1404:
case 2905:
case 1735:
case 1:
case 2603:
case 3297:
case 2656:
case 266:
case 2918:
case 2307:
case 2676:
case 380:
case 2379:
case 3701:
case 3533:
case 3863:
case 3354:
case 2666:
case 2087:
case 3831:
case 3783:
case 82:
case 3853:
case 702:
case 2681:
case 1585:
case 1640:
case 1818:
case 2238:
case 1234:
case 1432:
case 2814:
case 3382:
case 1524:
case 3645:
case 4011:
case 2617:
case 659:
case 2660:
case 3744:
case 3894:
case 3327:
case 3952:
case 3697:
case 151:
case 1602:
case 282:
case 2256:
case 2721:
case 304:
case 3393:
case 981:
case 1999:
case 482:
case 149:
case 1926:
case 2276:
case 3091:
case 3768:
case 1141:
case 3925:
case 3428:
case 3984:
case 606:
case 1557:
case 2075:
case 2022:
case 771:
case 2486:
case 124:
case 1291:
case 1759:
case 1920:
case 3128:
case 74:
case 1779:
case 2461:
case 1577:
case 71:
case 4075:
case 269:
case 2641:
case 1680:
case 3394:
case 3267:
case 3827:
case 763:
case 69:
case 2102:
case 3893:
case 931:
case 432:
case 1016:
case 2047:
case 3008:
case 469:
case 820:
case 3015:
case 2402:
case 2204:
case 1208:
case 670:
case 1661:
case 657:
case 2912:
case 1215:
case 1010:
case 3216:
case 1389:
case 3540:
case 3439:
case 3685:
case 3854:
case 1907:
case 2296:
case 3071:
case 1979:
case 2869:
case 147:
case 1481:
case 3373:
case 2440:
case 308:
case 3657:
case 3051:
case 1959:
case 1466:
case 3306:
case 145:
case 3165:
case 3353:
case 3465:
case 115:
case 3609:
case 831:
case 4095:
case 522:
case 740:
case 3725:
case 1160:
case 3882:
case 3502:
case 1799:
case 3300:
case 710:
case 920:
case 2921:
case 1271:
case 2446:
case 1233:
case 1417:
case 2146:
case 3752:
case 3271:
case 2029:
case 328:
case 3117:
case 1752:
case 2445:
case 1944:
case 2858:
case 2788:
case 1772:
case 1502:
case 3597:
case 2878:
case 3160:
case 1968:
case 1300:
case 3799:
case 3466:
case 3959:
case 345:
case 1306:
case 1051:
case 1677:
case 1353:
case 1874:
case 3305:
case 2964:
case 896:
case 3318:
case 1784:
case 315:
case 2948:
case 2295:
case 2090:
case 1331:
case 1071:
case 1657:
case 3481:
case 1033:
case 257:
case 2763:
case 3389:
case 270:
case 1983:
case 2801:
case 1342:
case 3686:
case 3067:
case 3661:
case 2247:
case 3215:
case 2004:
case 255:
case 996:
case 2566:
case 1216:
case 470:
case 2836:
case 669:
case 2830:
case 632:
case 2497:
case 49:
case 2517:
case 1624:
case 2423:
case 1546:
case 2003:
case 3889:
case 3779:
case 3577:
case 2898:
case 2748:
case 3707:
case 2639:
case 2764:
case 324:
case 1128:
case 406:
case 3759:
case 2185:
case 4056:
case 2336:
case 2076:
case 3291:
case 1393:
case 812:
case 3441:
case 349:
case 2330:
case 319:
case 2532:
case 1768:
case 3141:
case 2988:
case 2862:
case 2275:
case 1972:
case 1744:
case 2255:
case 1894:
case 563:
case 1697:
case 80:
case 2358:
case 722:
case 540:
case 3646:
case 912:
case 3234:
case 3432:
case 2038:
case 2378:
case 753:
case 441:
case 2541:
case 942:
case 259:
case 3349:
case 1806:
case 1586:
case 976:
case 2157:
case 591:
case 3805:
case 3640:
case 3585:
case 3818:
case 2477:
case 1354:
case 290:
case 173:
case 1561:
case 2177:
case 1873:
case 2674:
case 3381:
case 867:
case 303:
case 2809:
case 337:
case 42:
case 1131:
case 2787:
case 1967:
case 3669:
case 1106:
case 3418:
case 2857:
case 772:
case 2012:
case 3734:
case 2654:
case 865:
case 3105:
case 3366:
case 926:
case 1916:
case 1400:
case 3360:
case 3562:
case 3908:
case 1100:
case 580:
case 3832:
case 2345:
case 3317:
case 2711:
case 281:
case 123:
case 2682:
case 60:
case 3279:
case 768:
case 1194:
case 2693:
case 2248:
case 1292:
case 1494:
case 2264:
case 2462:
case 3068:
case 1514:
case 4021:
case 612:
case 2627:
case 3841:
case 2775:
case 701:
case 676:
case 1828:
case 1268:
case 2755:
case 967:
case 1007:
case 1244:
case 1636:
case 1442:
case 3971:
case 2198:
case 1079:
case 3933:
case 53:
case 3489:
case 3635:
case 398:
case 2911:
case 220:
case 1513:
case 1662:
case 2823:
case 3558:
case 3578:
case 2897:
case 832:
case 362:
case 2130:
case 2747:
case 2430:
case 339:
case 1493:
case 869:
case 1243:
case 1710:
case 2436:
case 792:
case 3934:
case 2136:
case 2385:
case 1328:
case 2101:
case 2219:
case 3771:
case 1252:
case 2955:
case 1454:
case 2037:
case 2653:
case 3084:
case 2631:
case 1535:
case 1272:
case 2922:
case 1225:
case 2673:
case 4037:
case 3536:
case 3751:
case 3226:
case 764:
case 3299:
case 3860:
case 1099:
case 3220:
case 1026:
case 3991:
case 1284:
case 1482:
case 3149:
case 3072:
case 3332:
case 2600:
case 2845:
case 3052:
case 2158:
case 7:
case 1052:
case 99:
case 2413:
case 2846:
case 1614:
case 2729:
case 2950:
case 1530:
case 516:
case 194:
case 1991:
case 3182:
case 2593:
case 3099:
case 2970:
case 3482:
case 1025:
case 1332:
case 546:
case 3535:
case 1084:
case 572:
case 3474:
case 3174:
case 970:
case 1299:
case 3020:
case 957:
case 1751:
case 1866:
case 185:
case 3154:
case 178:
case 2903:
case 2618:
case 2956:
case 955:
case 1771:
case 2469:
case 2169:
case 3454:
case 3767:
case 855:
case 2361:
case 2063:
case 3569:
case 3243:
case 3710:
case 400:
case 2135:
case 2435:
case 2689:
case 501:
case 1934:
case 2704:
case 857:
case 2582:
case 620:
case 162:
case 2938:
case 3716:
case 1341:
case 2380:
case 3493:
case 2019:
case 3513:
case 3662:
case 1558:
case 2048:
case 1189:
case 3636:
case 3244:
case 3339:
case 2573:
case 3079:
case 2756:
case 2861:
case 2703:
case 2553:
case 3059:
case 2776:
case 990:
case 3828:
case 3601:
case 2302:
case 412:
case 1068:
case 442:
case 1791:
case 2500:
case 242:
case 2929:
case 1279:
case 2750:
case 3194:
case 3494:
case 97:
case 1317:
case 811:
case 3400:
case 3916:
case 3100:
case 20:
case 2738:
case 1613:
case 1832:
case 2212:
case 2414:
case 1418:
case 1669:
case 1734:
case 3153:
case 2904:
case 1405:
case 906:
case 564:
case 135:
case 3473:
case 1381:
case 2340:
case 3431:
case 62:
case 3131:
case 3967:
case 1598:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1743739201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,];
var gg_b = "1743739201/";

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
