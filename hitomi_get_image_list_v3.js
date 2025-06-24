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
case 3657:
case 37:
case 2534:
case 587:
case 3837:
case 571:
case 2927:
case 3666:
case 3973:
case 4040:
case 4034:
case 2509:
case 2674:
case 3251:
case 15:
case 412:
case 1211:
case 694:
case 555:
case 3987:
case 316:
case 1242:
case 434:
case 842:
case 2041:
case 2122:
case 2311:
case 1447:
case 1837:
case 2012:
case 287:
case 1543:
case 3264:
case 575:
case 3182:
case 2734:
case 2740:
case 2599:
case 609:
case 914:
case 35:
case 3211:
case 1987:
case 2901:
case 2709:
case 551:
case 3242:
case 480:
case 3100:
case 3329:
case 1245:
case 3766:
case 2058:
case 265:
case 3149:
case 2103:
case 244:
case 1717:
case 2699:
case 673:
case 715:
case 3336:
case 723:
case 2805:
case 1883:
case 826:
case 1248:
case 3496:
case 2156:
case 2410:
case 3517:
case 2774:
case 3933:
case 1100:
case 1329:
case 2018:
case 3406:
case 3877:
case 3245:
case 2128:
case 711:
case 261:
case 1757:
case 667:
case 2345:
case 3566:
case 3643:
case 2609:
case 3453:
case 2962:
case 598:
case 3557:
case 1496:
case 2640:
case 1517:
case 3190:
case 2450:
case 2116:
case 754:
case 965:
case 1519:
case 2265:
case 359:
case 3368:
case 1812:
case 1431:
case 3559:
case 1535:
case 3738:
case 370:
case 3301:
case 3964:
case 0:
case 1391:
case 2663:
case 1370:
case 3719:
case 2546:
case 3365:
case 2422:
case 2201:
case 1092:
case 3660:
case 3879:
case 150:
case 3735:
case 3572:
case 3942:
case 834:
case 1852:
case 3519:
case 801:
case 1002:
case 159:
case 1559:
case 3431:
case 3812:
case 3772:
case 3535:
case 1632:
case 3273:
case 3759:
case 379:
case 3391:
case 1911:
case 624:
case 2697:
case 774:
case 3147:
case 1365:
case 3538:
case 1660:
case 350:
case 2373:
case 1735:
case 3675:
case 889:
case 122:
case 3233:
case 1095:
case 3638:
case 2493:
case 2:
case 3732:
case 1113:
case 1781:
case 1989:
case 1672:
case 4021:
case 3858:
case 303:
case 975:
case 3488:
case 3008:
case 3362:
case 1818:
case 1023:
case 2425:
case 3581:
case 1775:
case 1532:
case 3124:
case 1400:
case 3760:
case 514:
case 1826:
case 3485:
case 3014:
case 1449:
case 1659:
case 951:
case 3344:
case 1804:
case 322:
case 160:
case 3560:
case 4063:
case 2467:
case 3989:
case 3781:
case 2020:
case 1061:
case 338:
case 987:
case 2077:
case 1858:
case 1471:
case 1008:
case 1488:
case 2110:
case 3196:
case 3818:
case 1362:
case 1106:
case 3775:
case 896:
case 228:
case 3532:
case 1635:
case 1760:
case 3080:
case 2721:
case 3054:
case 3826:
case 1619:
case 955:
case 1005:
case 2403:
case 1485:
case 369:
case 788:
case 3815:
case 3659:
case 1330:
case 559:
case 2841:
case 3169:
case 2681:
case 2772:
case 4019:
case 2535:
case 1607:
case 570:
case 2431:
case 634:
case 2519:
case 1265:
case 463:
case 689:
case 2675:
case 1201:
case 2092:
case 3373:
case 250:
case 3697:
case 1546:
case 2147:
case 2951:
case 2391:
case 279:
case 2370:
case 1268:
case 270:
case 2738:
case 1387:
case 1169:
case 1227:
case 992:
case 3607:
case 546:
case 3037:
case 2559:
case 96:
case 2368:
case 1270:
case 680:
case 2852:
case 80:
case 2735:
case 477:
case 2660:
case 1621:
case 3422:
case 2365:
case 3268:
case 3663:
case 3646:
case 1597:
case 2818:
case 782:
case 3110:
case 3456:
case 3886:
case 1150:
case 560:
case 1230:
case 503:
case 1707:
case 2781:
case 2113:
case 1184:
case 2989:
case 2672:
case 2560:
case 314:
case 2815:
case 2804:
case 74:
case 95:
case 1428:
case 2054:
case 3797:
case 4032:
case 3721:
case 332:
case 2400:
case 2839:
case 696:
case 3507:
case 473:
case 328:
case 2008:
case 3597:
case 2488:
case 203:
case 1456:
case 1110:
case 2362:
case 1886:
case 522:
case 3244:
case 3150:
case 3707:
case 1467:
case 2732:
case 3:
case 3184:
case 1020:
case 2575:
case 2061:
case 2894:
case 3521:
case 260:
case 2638:
case 1083:
case 2005:
case 3428:
case 4078:
case 114:
case 2619:
case 2124:
case 2578:
case 128:
case 2635:
case 1507:
case 916:
case 2264:
case 387:
case 1509:
case 881:
case 3342:
case 1927:
case 57:
case 1991:
case 175:
case 1351:
case 371:
case 3311:
case 2242:
case 2743:
case 25:
case 151:
case 969:
case 1674:
case 3968:
case 3740:
case 3734:
case 800:
case 2973:
case 68:
case 3052:
case 1342:
case 3802:
case 2837:
case 960:
case 3799:
case 4043:
case 3991:
case 3351:
case 1041:
case 1965:
case 1122:
case 171:
case 642:
case 216:
case 1364:
case 2987:
case 1901:
case 1709:
case 351:
case 1892:
case 361:
case 1094:
case 3895:
case 165:
case 1103:
case 592:
case 3128:
case 2877:
case 2406:
case 946:
case 756:
case 1058:
case 183:
case 2424:
case 2933:
case 1808:
case 3823:
case 3640:
case 3634:
case 2190:
case 4066:
case 3039:
case 1156:
case 853:
case 3609:
case 2248:
case 3193:
case 1055:
case 198:
case 708:
case 4057:
case 740:
case 1389:
case 950:
case 1167:
case 1814:
case 3484:
case 3015:
case 26:
case 161:
case 749:
case 2336:
case 959:
case 3861:
case 3058:
case 836:
case 3808:
case 2100:
case 1823:
case 292:
case 1116:
case 3410:
case 1125:
case 3236:
case 2496:
case 3055:
case 3805:
case 3814:
case 3167:
case 3389:
case 776:
case 2413:
case 3891:
case 2212:
case 3669:
case 1784:
case 2713:
case 746:
case 4024:
case 69:
case 197:
case 707:
case 3827:
case 895:
case 2937:
case 3902:
case 1992:
case 940:
case 908:
case 425:
case 1352:
case 2553:
case 779:
case 3197:
case 1510:
case 1051:
case 1801:
case 3011:
case 4053:
case 1669:
case 1891:
case 1064:
case 620:
case 770:
case 2252:
case 3865:
case 1474:
case 3750:
case 91:
case 354:
case 1710:
case 3352:
case 2513:
case 1584:
case 421:
case 2160:
case 1121:
case 2724:
case 3868:
case 1197:
case 3051:
case 933:
case 4013:
case 3801:
case 1550:
case 3146:
case 3610:
case 1434:
case 282:
case 1923:
case 510:
case 3339:
case 1650:
case 3908:
case 2172:
case 722:
case 2218:
case 3769:
case 1409:
case 1830:
case 3315:
case 345:
case 364:
case 24:
case 141:
case 3905:
case 1569:
case 1358:
case 1980:
case 1862:
case 2977:
case 2547:
case 1610:
case 2294:
case 1908:
case 193:
case 3684:
case 1326:
case 1769:
case 3409:
case 1045:
case 858:
case 2443:
case 582:
case 1286:
case 1961:
case 2138:
case 3844:
case 1304:
case 2258:
case 210:
case 2036:
case 1499:
case 341:
case 2119:
case 3569:
case 417:
case 1048:
case 966:
case 1318:
case 3862:
case 2255:
case 3980:
case 1593:
case 2952:
case 3073:
case 2392:
case 690:
case 3728:
case 2864:
case 3622:
case 2091:
case 430:
case 982:
case 3556:
case 1767:
case 2811:
case 3087:
case 3876:
case 2432:
case 3292:
case 4049:
case 3793:
case 3725:
case 1756:
case 919:
case 4000:
case 2979:
case 566:
case 1174:
case 604:
case 631:
case 94:
case 1528:
case 2912:
case 2700:
case 3593:
case 4071:
case 910:
case 443:
case 2166:
case 1073:
case 77:
case 127:
case 1728:
case 468:
case 3703:
case 1463:
case 3497:
case 2588:
case 3202:
case 813:
case 439:
case 2481:
case 1876:
case 1087:
case 495:
case 1407:
case 3337:
case 699:
case 3174:
case 1503:
case 2631:
case 3722:
case 2277:
case 311:
case 2419:
case 817:
case 1208:
case 2685:
case 1603:
case 2354:
case 406:
case 2531:
case 51:
case 447:
case 1033:
case 2398:
case 1986:
case 2220:
case 1261:
case 3140:
case 3134:
case 2782:
case 458:
case 2690:
case 2323:
case 1214:
case 2688:
case 3377:
case 1656:
case 1522:
case 533:
case 2143:
case 3320:
case 3693:
case 3280:
case 2955:
case 1836:
case 2314:
case 2889:
case 21:
case 1722:
case 323:
case 2582:
case 249:
case 478:
case 3603:
case 3208:
case 2918:
case 102:
case 792:
case 4082:
case 3986:
case 2308:
case 1254:
case 2939:
case 1134:
case 2062:
case 3205:
case 1109:
case 2915:
case 2904:
case 2926:
case 3667:
case 3157:
case 3237:
case 625:
case 1091:
case 1070:
case 613:
case 2525:
case 1864:
case 1117:
case 4093:
case 3065:
case 2703:
case 1785:
case 2516:
case 3590:
case 3941:
case 429:
case 1952:
case 3475:
case 527:
case 1027:
case 3912:
case 1979:
case 1682:
case 2174:
case 1549:
case 137:
case 941:
case 751:
case 2756:
case 899:
case 835:
case 3478:
case 3001:
case 2767:
case 1432:
case 993:
case 1588:
case 4067:
case 2556:
case 3091:
case 2622:
case 1941:
case 1590:
case 621:
case 1571:
case 1065:
case 787:
case 2073:
case 1912:
case 3027:
case 3460:
case 1700:
case 988:
case 2716:
case 804:
case 2503:
case 3790:
case 3979:
case 1302:
case 964:
case 3788:
case 4003:
case 3500:
case 1851:
case 1478:
case 1001:
case 2292:
case 2876:
case 3811:
case 2407:
case 3600:
case 156:
case 1380:
case 511:
case 783:
case 2208:
case 1685:
case 1354:
case 223:
case 2199:
case 1994:
case 3459:
case 31:
case 502:
case 3889:
case 3314:
case 1419:
case 3044:
case 2667:
case 3926:
case 1955:
case 1395:
case 3915:
case 108:
case 798:
case 140:
case 376:
case 1438:
case 1283:
case 2446:
case 2656:
case 886:
case 472:
case 3308:
case 1782:
case 1671:
case 3958:
case 515:
case 3398:
case 2295:
case 3685:
case 452:
case 2722:
case 11:
case 3419:
case 1030:
case 3955:
case 2280:
case 1926:
case 3395:
case 3143:
case 2109:
case 2693:
case 340:
case 176:
case 974:
case 2254:
case 2134:
case 133:
case 2616:
case 3323:
case 3671:
case 3782:
case 3690:
case 1062:
case 923:
case 2750:
case 1506:
case 2784:
case 3132:
case 1524:
case 3753:
case 1178:
case 1212:
case 3417:
case 2051:
case 2510:
case 1647:
case 574:
case 3160:
case 3706:
case 1466:
case 3796:
case 695:
case 3937:
case 3713:
case 3506:
case 2064:
case 1753:
case 2870:
case 597:
case 3178:
case 274:
case 3457:
case 829:
case 643:
case 668:
case 2121:
case 4050:
case 3175:
case 1513:
case 3920:
case 2089:
case 3443:
case 2409:
case 593:
case 310:
case 3258:
case 3653:
case 7:
case 3138:
case 2995:
case 1218:
case 1613:
case 182:
case 3294:
case 2650:
case 3833:
case 3547:
case 3977:
case 3606:
case 1226:
case 2980:
case 3255:
case 588:
case 1386:
case 3624:
case 2569:
case 564:
case 1215:
case 2358:
case 241:
case 3119:
case 647:
case 3983:
case 119:
case 1239:
case 1159:
case 2769:
case 1920:
case 2286:
case 1138:
case 1653:
case 1258:
case 110:
case 486:
case 872:
case 3613:
case 2326:
case 3172:
case 382:
case 1833:
case 293:
case 3696:
case 1977:
case 2048:
case 2318:
case 1255:
case 3226:
case 728:
case 3215:
case 3747:
case 1983:
case 288:
case 264:
case 3159:
case 3239:
case 1267:
case 4037:
case 996:
case 3680:
case 3792:
case 3293:
case 3698:
case 2433:
case 3834:
case 2148:
case 3225:
case 3059:
case 1136:
case 2683:
case 1605:
case 2288:
case 2537:
case 1019:
case 2271:
case 3216:
case 3385:
case 2843:
case 1899:
case 2393:
case 2953:
case 887:
case 100:
case 3695:
case 3984:
case 381:
case 3390:
case 3950:
case 163:
case 871:
case 1702:
case 3462:
case 2325:
case 2677:
case 3388:
case 1680:
case 1698:
case 3129:
case 3035:
case 3300:
case 1834:
case 735:
case 1225:
case 1502:
case 799:
case 3614:
case 3605:
case 1216:
case 3019:
case 1809:
case 357:
case 3349:
case 1654:
case 2303:
case 394:
case 1072:
case 3038:
case 300:
case 3592:
case 348:
case 2189:
case 2367:
case 2913:
case 1984:
case 1228:
case 363:
case 1950:
case 3203:
case 2249:
case 2356:
case 3910:
case 1388:
case 875:
case 1491:
case 3754:
case 353:
case 2282:
case 2097:
case 3465:
case 3075:
case 3798:
case 989:
case 1060:
case 3780:
case 3692:
case 1427:
case 2142:
case 3222:
case 934:
case 3505:
case 1331:
case 173:
case 1554:
case 3795:
case 136:
case 2817:
case 1754:
case 3523:
case 2231:
case 786:
case 3714:
case 3705:
case 898:
case 1075:
case 3874:
case 226:
case 1692:
case 3595:
case 1222:
case 2866:
case 1514:
case 1505:
case 2583:
case 2637:
case 373:
case 428:
case 905:
case 66:
case 1382:
case 3554:
case 167:
case 883:
case 1078:
case 692:
case 4083:
case 2857:
case 3032:
case 2487:
case 3598:
case 1081:
case 3969:
case 3313:
case 318:
case 475:
case 2552:
case 3043:
case 650:
case 1993:
case 3396:
case 729:
case 1162:
case 1925:
case 3956:
case 1916:
case 4079:
case 3429:
case 1324:
case 3686:
case 2618:
case 762:
case 2213:
case 2579:
case 3903:
case 2949:
case 10:
case 79:
case 201:
case 1928:
case 3210:
case 2872:
case 2296:
case 1967:
case 926:
case 1313:
case 2655:
case 2384:
case 2206:
case 2512:
case 4041:
case 3993:
case 2835:
case 2988:
case 3925:
case 487:
case 124:
case 2541:
case 2990:
case 589:
case 2971:
case 2133:
case 2253:
case 534:
case 2658:
case 501:
case 1686:
case 3324:
case 3284:
case 1846:
case 2752:
case 1903:
case 280:
case 3144:
case 3928:
case 2694:
case 30:
case 512:
case 1436:
case 2099:
case 1210:
case 3821:
case 2931:
case 2594:
case 2875:
case 669:
case 2247:
case 814:
case 2369:
case 1863:
case 296:
case 2715:
case 1101:
case 4094:
case 444:
case 832:
case 3897:
case 1165:
case 3017:
case 1922:
case 2878:
case 3170:
case 2451:
case 1057:
case 498:
case 622:
case 2555:
case 772:
case 1066:
case 3786:
case 638:
case 596:
case 4018:
case 3863:
case 3101:
case 3586:
case 2464:
case 461:
case 942:
case 2518:
case 2755:
case 4026:
case 2832:
case 2411:
case 3165:
case 3807:
case 3922:
case 1017:
case 1170:
case 603:
case 4015:
case 4004:
case 3057:
case 2526:
case 2442:
case 660:
case 1269:
case 4039:
case 8:
case 2515:
case 1786:
case 2504:
case 3066:
case 1639:
case 2916:
case 3990:
case 3541:
case 2162:
case 3835:
case 1310:
case 1040:
case 3512:
case 1604:
case 2353:
case 3224:
case 1626:
case 3819:
case 1552:
case 730:
case 1009:
case 3445:
case 1872:
case 1296:
case 973:
case 305:
case 1741:
case 2144:
case 1579:
case 2130:
case 1949:
case 3694:
case 791:
case 1618:
case 2284:
case 2306:
case 3658:
case 1900:
case 3133:
case 45:
case 112:
case 2324:
case 3448:
case 224:
case 1350:
case 1990:
case 1971:
case 1835:
case 743:
case 3040:
case 3034:
case 3859:
case 47:
case 3615:
case 768:
case 389:
case 1224:
case 3552:
case 1655:
case 1384:
case 3626:
case 3009:
case 3489:
case 2043:
case 784:
case 1206:
case 739:
case 2210:
case 105:
case 795:
case 1838:
case 3579:
case 180:
case 3741:
case 807:
case 3618:
case 846:
case 1752:
case 2429:
case 1133:
case 3900:
case 50:
case 2686:
case 312:
case 3518:
case 1726:
case 3755:
case 1187:
case 2863:
case 2586:
case 1715:
case 1875:
case 994:
case 747:
case 1247:
case 3679:
case 3982:
case 1739:
case 1594:
case 2066:
case 3504:
case 1173:
case 3515:
case 1612:
case 6:
case 758:
case 3758:
case 900:
case 3526:
case 1555:
case 860:
case 1718:
case 3442:
case 1878:
case 3794:
case 1451:
case 803:
case 2057:
case 2807:
case 963:
case 2165:
case 3832:
case 1881:
case 632:
case 3726:
case 778:
case 3558:
case 1464:
case 869:
case 1074:
case 614:
case 2821:
case 909:
case 3594:
case 3931:
case 3739:
case 3612:
case 1515:
case 1504:
case 981:
case 3555:
case 822:
case 2127:
case 3451:
case 1539:
case 3878:
case 2191:
case 3641:
case 2347:
case 3881:
case 651:
case 2019:
case 1328:
case 294:
case 257:
case 2614:
case 1288:
case 446:
case 1924:
case 2035:
case 2129:
case 2300:
case 816:
case 1906:
case 2267:
case 2702:
case 713:
case 1325:
case 3996:
case 1677:
case 581:
case 2910:
case 1316:
case 2203:
case 87:
case 263:
case 2592:
case 200:
case 2038:
case 38:
case 1145:
case 2661:
case 285:
case 3200:
case 1953:
case 3328:
case 2216:
case 3271:
case 2444:
case 3290:
case 2809:
case 655:
case 470:
case 2502:
case 3537:
case 2698:
case 2293:
case 2840:
case 594:
case 142:
case 3906:
case 2680:
case 2792:
case 459:
case 4002:
case 1356:
case 1737:
case 2462:
case 548:
case 1996:
case 2390:
case 3316:
case 2228:
case 3046:
case 2950:
case 585:
case 3285:
case 1249:
case 1367:
case 3145:
case 2072:
case 3393:
case 1200:
case 2060:
case 1021:
case 2427:
case 3473:
case 4023:
case 553:
case 326:
case 2874:
case 1111:
case 1783:
case 2714:
case 4095:
case 1322:
case 3577:
case 2491:
case 438:
case 2523:
case 2470:
case 1282:
case 2598:
case 567:
case 2969:
case 4054:
case 1164:
case 2761:
case 892:
case 2708:
case 86:
case 2554:
case 665:
case 2602:
case 4080:
case 3583:
case 2692:
case 2780:
case 3142:
case 2075:
case 2561:
case 2798:
case 918:
case 3783:
case 3111:
case 1577:
case 924:
case 1947:
case 2754:
case 4061:
case 1231:
case 3097:
case 253:
case 2401:
case 3817:
case 3720:
case 2081:
case 2078:
case 2795:
case 4014:
case 2382:
case 2723:
case 717:
case 1866:
case 2591:
case 1259:
case 2940:
case 2570:
case 3056:
case 129:
case 2768:
case 1016:
case 3219:
case 2662:
case 3806:
case 2701:
case 1104:
case 230:
case 3420:
case 4070:
case 2338:
case 2909:
case 1787:
case 2495:
case 3235:
case 1093:
case 1813:
case 70:
case 2319:
case 2049:
case 3483:
case 654:
case 2765:
case 2454:
case 1272:
case 2480:
case 2000:
case 2498:
case 3633:
case 320:
case 539:
case 3025:
case 530:
case 3259:
case 1824:
case 329:
case 2090:
case 3016:
case 674:
case 724:
case 3115:
case 3787:
case 718:
case 268:
case 3126:
case 1155:
case 2372:
case 1235:
case 3028:
case 917:
case 3813:
case 2085:
case 466:
case 2359:
case 1853:
case 295:
case 2791:
case 4001:
case 2727:
case 2810:
case 3118:
case 120:
case 1158:
case 1587:
case 1238:
case 1633:
case 2501:
case 1275:
case 206:
case 1687:
case 2601:
case 2031:
case 1437:
case 578:
case 93:
case 2263:
case 1112:
case 2360:
case 1673:
case 1321:
case 258:
case 2492:
case 3232:
case 2207:
case 1966:
case 810:
case 3363:
case 1022:
case 1141:
case 2665:
case 1397:
case 1307:
case 449:
case 3533:
case 3687:
case 4030:
case 4044:
case 547:
case 645:
case 819:
case 2402:
case 506:
case 3437:
case 664:
case 2974:
case 84:
case 2544:
case 1179:
case 688:
case 372:
case 3278:
case 1733:
case 2375:
case 2627:
case 433:
case 3022:
case 921:
case 1917:
case 882:
case 3957:
case 476:
case 3397:
case 3399:
case 399:
case 3751:
case 335:
case 3959:
case 947:
case 757:
case 23:
case 2114:
case 1183:
case 131:
case 1871:
case 1458:
case 1648:
case 1243:
case 1742:
case 2856:
case 1935:
case 3511:
case 2946:
case 32:
case 3439:
case 2299:
case 1551:
case 1010:
case 1340:
case 3800:
case 225:
case 2108:
case 785:
case 2053:
case 521:
case 3542:
case 3084:
case 1120:
case 2161:
case 1764:
case 748:
case 700:
case 1885:
case 1309:
case 3849:
case 199:
case 709:
case 1959:
case 2234:
case 2240:
case 2154:
case 331:
case 3183:
case 3711:
case 2776:
case 3919:
case 3458:
case 2816:
case 978:
case 3243:
case 2209:
case 3742:
case 53:
case 627:
case 3177:
case 777:
case 3551:
case 1439:
case 3340:
case 3455:
case 2195:
case 1542:
case 3645:
case 1404:
case 2013:
case 1084:
case 3309:
case 3885:
case 513:
case 390:
case 2366:
case 482:
case 876:
case 3412:
case 2921:
case 1611:
case 2997:
case 2274:
case 386:
case 3441:
case 3978:
case 1664:
case 517:
case 3548:
case 1745:
case 1069:
case 3266:
case 419:
case 1932:
case 1479:
case 81:
case 991:
case 1217:
case 623:
case 3137:
case 2102:
case 3452:
case 1545:
case 808:
case 840:
case 1975:
case 1831:
case 1412:
case 3960:
case 3882:
case 968:
case 2676:
case 410:
case 753:
case 1651:
case 1441:
case 186:
case 2317:
case 1548:
case 3664:
case 1978:
case 1266:
case 4036:
case 856:
case 3745:
case 3932:
case 4029:
case 1374:
case 217:
case 939:
case 767:
case 1257:
case 1137:
case 497:
case 3825:
case 1024:
case 2935:
case 2888:
case 1629:
case 3198:
case 3816:
case 3209:
case 1006:
case 637:
case 204:
case 13:
case 2919:
case 2711:
case 231:
case 3893:
case 3154:
case 3240:
case 4051:
case 290:
case 3343:
case 1803:
case 2309:
case 1053:
case 2455:
case 52:
case 3096:
case 2551:
case 2334:
case 125:
case 1108:
case 1576:
case 827:
case 1946:
case 2177:
case 1825:
case 666:
case 3856:
case 531:
case 3024:
case 3629:
case 3006:
case 3486:
case 3636:
case 3867:
case 1776:
case 3114:
case 299:
case 4064:
case 235:
case 1828:
case 2415:
case 3161:
case 1013:
case 2084:
case 2849:
case 3803:
case 3053:
case 1195:
case 4011:
case 2542:
case 2689:
case 1123:
case 3108:
case 325:
case 590:
case 3946:
case 2050:
case 121:
case 3047:
case 3963:
case 3676:
case 2611:
case 1736:
case 1729:
case 586:
case 1921:
case 1366:
case 2452:
case 2642:
case 2589:
case 3536:
case 811:
case 2479:
case 2217:
case 317:
case 99:
case 656:
case 2745:
case 2069:
case 3822:
case 3907:
case 2932:
case 802:
case 441:
case 2441:
case 1317:
case 1963:
case 3736:
case 2831:
case 3921:
case 3729:
case 493:
case 1192:
case 3366:
case 2975:
case 815:
case 1536:
case 823:
case 3102:
case 2137:
case 2374:
case 4048:
case 117:
case 464:
case 1822:
case 2981:
case 2789:
case 1529:
case 488:
case 2548:
case 2978:
case 3372:
case 2126:
case 368:
case 1701:
case 2104:
case 130:
case 874:
case 2016:
case 3090:
case 1662:
case 2346:
case 2259:
case 2025:
case 1570:
case 2139:
case 343:
case 3408:
case 1850:
case 2773:
case 3186:
case 2118:
case 3810:
case 1000:
case 3568:
case 520:
case 339:
case 2813:
case 1884:
case 29:
case 1319:
case 3246:
case 734:
case 3085:
case 3405:
case 2155:
case 1372:
case 2235:
case 427:
case 2943:
case 2420:
case 184:
case 1461:
case 2573:
case 3662:
case 1071:
case 2806:
case 3570:
case 4073:
case 3591:
case 1408:
case 3768:
case 220:
case 2587:
case 3850:
case 2238:
case 3498:
case 1727:
case 59:
case 3000:
case 3480:
case 1359:
case 2853:
case 195:
case 705:
case 2194:
case 1999:
case 391:
case 3319:
case 3884:
case 2483:
case 3049:
case 931:
case 4033:
case 1263:
case 3974:
case 1668:
case 147:
case 1031:
case 845:
case 864:
case 2437:
case 3082:
case 3221:
case 3378:
case 415:
case 378:
case 2957:
case 682:
case 2397:
case 893:
case 3869:
case 2022:
case 1730:
case 1492:
case 158:
case 3627:
case 272:
case 2321:
case 2673:
case 1544:
case 347:
case 3762:
case 1402:
case 1082:
case 1297:
case 1378:
case 252:
case 3332:
case 2307:
case 178:
case 306:
case 3665:
case 1691:
case 92:
case 1670:
case 3730:
case 3492:
case 3360:
case 2733:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1750795202/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,];
var gg_b = "1750795202/";

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
