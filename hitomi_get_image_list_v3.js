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
case 857:
case 3932:
case 3716:
case 1666:
case 1580:
case 2666:
case 3098:
case 3190:
case 32:
case 3457:
case 611:
case 3252:
case 711:
case 982:
case 1260:
case 2067:
case 2260:
case 75:
case 3942:
case 1674:
case 3775:
case 3311:
case 1985:
case 1468:
case 2518:
case 3725:
case 3906:
case 336:
case 1687:
case 2985:
case 2781:
case 3921:
case 990:
case 608:
case 3334:
case 3876:
case 306:
case 2750:
case 4083:
case 1162:
case 738:
case 2283:
case 1591:
case 3150:
case 2086:
case 3497:
case 3358:
case 1612:
case 3292:
case 2612:
case 1219:
case 3699:
case 1125:
case 3305:
case 2563:
case 3058:
case 2671:
case 2503:
case 3314:
case 298:
case 3365:
case 1777:
case 1538:
case 3065:
case 2538:
case 3014:
case 1249:
case 1455:
case 381:
case 1554:
case 2554:
case 2455:
case 1433:
case 1102:
case 2239:
case 1632:
case 2959:
case 3835:
case 3420:
case 2632:
case 2408:
case 112:
case 1408:
case 212:
case 447:
case 3072:
case 3041:
case 2999:
case 3893:
case 217:
case 117:
case 713:
case 1999:
case 2307:
case 1594:
case 2594:
case 3372:
case 1007:
case 1200:
case 2495:
case 4000:
case 1817:
case 3861:
case 3228:
case 660:
case 3736:
case 3746:
case 614:
case 2727:
case 1882:
case 1784:
case 0:
case 359:
case 1557:
case 3382:
case 1296:
case 2296:
case 3759:
case 3616:
case 1831:
case 3317:
case 1159:
case 1774:
case 1361:
case 916:
case 2841:
case 3977:
case 1093:
case 1061:
case 676:
case 776:
case 2690:
case 3017:
case 2061:
case 1902:
case 3807:
case 2902:
case 421:
case 180:
case 3589:
case 1353:
case 725:
case 3112:
case 2946:
case 1822:
case 297:
case 2787:
case 197:
case 3625:
case 793:
case 2822:
case 1035:
case 2681:
case 2053:
case 131:
case 1724:
case 231:
case 3418:
case 794:
case 1256:
case 448:
case 1304:
case 3124:
case 2045:
case 1865:
case 1814:
case 3662:
case 2865:
case 1712:
case 2936:
case 2345:
case 3491:
case 2597:
case 1936:
case 1004:
case 2712:
case 133:
case 1273:
case 2064:
case 495:
case 875:
case 2015:
case 3602:
case 3886:
case 524:
case 4073:
case 2315:
case 203:
case 1364:
case 2858:
case 607:
case 1975:
case 2975:
case 3403:
case 1732:
case 104:
case 2916:
case 3508:
case 1916:
case 1376:
case 2834:
case 2520:
case 2376:
case 3448:
case 523:
case 3555:
case 186:
case 2962:
case 963:
case 2026:
case 2001:
case 1001:
case 670:
case 2570:
case 1326:
case 58:
case 1570:
case 3121:
case 858:
case 3240:
case 3785:
case 1627:
case 2627:
case 367:
case 2684:
case 1684:
case 3230:
case 2721:
case 3950:
case 7:
case 4023:
case 1429:
case 964:
case 879:
case 499:
case 2223:
case 3337:
case 732:
case 3926:
case 3705:
case 116:
case 659:
case 1786:
case 216:
case 1604:
case 3460:
case 3362:
case 2134:
case 1947:
case 3842:
case 2645:
case 843:
case 2947:
case 1144:
case 2350:
case 1350:
case 3734:
case 1635:
case 844:
case 2653:
case 2937:
case 778:
case 2596:
case 3832:
case 1937:
case 1653:
case 1050:
case 1257:
case 14:
case 24:
case 918:
case 850:
case 1381:
case 329:
case 3964:
case 1661:
case 3588:
case 3915:
case 1297:
case 2661:
case 41:
case 2767:
case 3375:
case 2492:
case 2390:
case 1390:
case 393:
case 3569:
case 3075:
case 1556:
case 2198:
case 2556:
case 3821:
case 901:
case 3806:
case 51:
case 1885:
case 3316:
case 755:
case 2111:
case 446:
case 451:
case 3976:
case 1111:
case 2478:
case 3233:
case 904:
case 3107:
case 3255:
case 1384:
case 2384:
case 1172:
case 1141:
case 2027:
case 2220:
case 3731:
case 2172:
case 3866:
case 454:
case 3935:
case 2859:
case 3953:
case 3346:
case 4020:
case 3741:
case 3772:
case 188:
case 453:
case 1131:
case 288:
case 3336:
case 3509:
case 3647:
case 3945:
case 2707:
case 903:
case 554:
case 3243:
case 2601:
case 1573:
case 3449:
case 2573:
case 2523:
case 1523:
case 86:
case 2114:
case 1676:
case 264:
case 3530:
case 3887:
case 3722:
case 4070:
case 163:
case 2122:
case 2270:
case 1899:
case 302:
case 2899:
case 1270:
case 1077:
case 3302:
case 3:
case 1615:
case 1664:
case 2664:
case 3295:
case 1917:
case 3002:
case 3765:
case 2377:
case 282:
case 1941:
case 3644:
case 2941:
case 2312:
case 3135:
case 2745:
case 1745:
case 3153:
case 3658:
case 2802:
case 1410:
case 3907:
case 1802:
case 2012:
case 366:
case 3552:
case 2387:
case 2324:
case 3104:
case 171:
case 2931:
case 2087:
case 1931:
case 4080:
case 949:
case 1024:
case 768:
case 2024:
case 2735:
case 636:
case 1263:
case 3456:
case 1074:
case 2793:
case 1182:
case 2469:
case 2519:
case 308:
case 2182:
case 684:
case 784:
case 1836:
case 4091:
case 2836:
case 3717:
case 2761:
case 1291:
case 2965:
case 1667:
case 2914:
case 2488:
case 338:
case 3611:
case 1965:
case 3359:
case 3161:
case 2117:
case 2583:
case 1846:
case 290:
case 2922:
case 1218:
case 1066:
case 783:
case 683:
case 2218:
case 2066:
case 3698:
case 2934:
case 1006:
case 1816:
case 2147:
case 2248:
case 1539:
case 2539:
case 3385:
case 4054:
case 1248:
case 296:
case 3578:
case 4048:
case 912:
case 2607:
case 2549:
case 1726:
case 1238:
case 781:
case 2238:
case 2726:
case 2905:
case 3986:
case 2701:
case 700:
case 3641:
case 1944:
case 2875:
case 2944:
case 730:
case 3747:
case 1137:
case 1958:
case 174:
case 3881:
case 313:
case 2032:
case 1825:
case 1998:
case 3164:
case 1332:
case 49:
case 2776:
case 87:
case 489:
case 3423:
case 3850:
case 360:
case 1764:
case 1371:
case 1342:
case 805:
case 2342:
case 2715:
case 2500:
case 2911:
case 3176:
case 1500:
case 1911:
case 273:
case 314:
case 835:
case 1071:
case 1042:
case 677:
case 173:
case 777:
case 589:
case 59:
case 3012:
case 968:
case 749:
case 1399:
case 1605:
case 3410:
case 2907:
case 2658:
case 1135:
case 2153:
case 1153:
case 3312:
case 2099:
case 1877:
case 3972:
case 2877:
case 2145:
case 3735:
case 3753:
case 2634:
case 2496:
case 3087:
case 1634:
case 1104:
case 371:
case 15:
case 166:
case 1552:
case 840:
case 3291:
case 138:
case 3488:
case 238:
case 983:
case 3914:
case 2717:
case 3374:
case 2592:
case 1592:
case 1717:
case 3182:
case 56:
case 208:
case 108:
case 556:
case 3263:
case 1456:
case 2827:
case 3218:
case 1782:
case 387:
case 3066:
case 2193:
case 1827:
case 906:
case 46:
case 390:
case 1161:
case 528:
case 2161:
case 2359:
case 3846:
case 441:
case 2101:
case 1578:
case 450:
case 930:
case 3321:
case 1101:
case 396:
case 2385:
case 2126:
case 3021:
case 444:
case 3816:
case 798:
case 698:
case 1737:
case 1085:
case 3934:
case 3006:
case 1747:
case 2747:
case 3958:
case 1672:
case 3944:
case 3875:
case 3409:
case 544:
case 2890:
case 1279:
case 2279:
case 972:
case 1890:
case 2986:
case 2473:
case 3726:
case 3238:
case 2850:
case 846:
case 851:
case 1423:
case 2423:
case 1850:
case 3776:
case 977:
case 2229:
case 1115:
case 2164:
case 3825:
case 3998:
case 374:
case 213:
case 113:
case 617:
case 3440:
case 114:
case 3071:
case 214:
case 373:
case 81:
case 2665:
case 3294:
case 1176:
case 3500:
case 2967:
case 1614:
case 2528:
case 3764:
case 3342:
case 1528:
case 2758:
case 1842:
case 618:
case 2871:
case 1362:
case 2744:
case 3134:
case 885:
case 2901:
case 2510:
case 3604:
case 1901:
case 1510:
case 1926:
case 1705:
case 1062:
case 3381:
case 229:
case 361:
case 1325:
case 3257:
case 3105:
case 2325:
case 1186:
case 2832:
case 3158:
case 3081:
case 3653:
case 2025:
case 1075:
case 3556:
case 1213:
case 2075:
case 2419:
case 2569:
case 293:
case 3390:
case 193:
case 955:
case 4013:
case 1419:
case 3492:
case 2711:
case 1711:
case 601:
case 1375:
case 3661:
case 2617:
case 1588:
case 3297:
case 680:
case 780:
case 2588:
case 2964:
case 889:
case 2483:
case 47:
case 2976:
case 1483:
case 1316:
case 2289:
case 1806:
case 1682:
case 4068:
case 2806:
case 2682:
case 1798:
case 194:
case 505:
case 1821:
case 294:
case 1016:
case 1208:
case 2953:
case 3084:
case 2935:
case 1346:
case 207:
case 2731:
case 3141:
case 3220:
case 3027:
case 1731:
case 107:
case 1866:
case 4008:
case 703:
case 3384:
case 2046:
case 4033:
case 137:
case 733:
case 1233:
case 2255:
case 2233:
case 3327:
case 237:
case 3478:
case 527:
case 2904:
case 4043:
case 2449:
case 1036:
case 3626:
case 1336:
case 1509:
case 2874:
case 2647:
case 2509:
case 1772:
case 388:
case 704:
case 2772:
case 3982:
case 1887:
case 2722:
case 1722:
case 2887:
case 364:
case 1530:
case 170:
case 3676:
case 522:
case 2714:
case 132:
case 310:
case 2002:
case 3664:
case 1961:
case 1295:
case 2961:
case 3917:
case 2:
case 2302:
case 2993:
case 102:
case 202:
case 1993:
case 3077:
case 3122:
case 2540:
case 422:
case 2082:
case 847:
case 929:
case 2616:
case 1480:
case 2759:
case 3296:
case 2174:
case 976:
case 1759:
case 1616:
case 3557:
case 2451:
case 1382:
case 716:
case 259:
case 3902:
case 1807:
case 661:
case 3690:
case 64:
case 74:
case 1210:
case 392:
case 1166:
case 2977:
case 278:
case 178:
case 3872:
case 3841:
case 3093:
case 2166:
case 2675:
case 3159:
case 3361:
case 3774:
case 2418:
case 1418:
case 1984:
case 1927:
case 3822:
case 3946:
case 1589:
case 3353:
case 3335:
case 469:
case 3712:
case 3345:
case 1491:
case 3004:
case 2288:
case 3865:
case 993:
case 2662:
case 1662:
case 4088:
case 1269:
case 842:
case 2187:
case 1513:
case 569:
case 2403:
case 162:
case 3858:
case 1132:
case 1209:
case 2209:
case 3742:
case 3771:
case 3364:
case 2132:
case 303:
case 3315:
case 1886:
case 2543:
case 3805:
case 1543:
case 3273:
case 3064:
case 2990:
case 1438:
case 1533:
case 2555:
case 2533:
case 386:
case 907:
case 334:
case 815:
case 3520:
case 991:
case 3834:
case 2142:
case 3732:
case 457:
case 304:
case 1171:
case 937:
case 1142:
case 1240:
case 2121:
case 2047:
case 2240:
case 664:
case 2106:
case 764:
case 1106:
case 4040:
case 2636:
case 2595:
case 2347:
case 1595:
case 1347:
case 1494:
case 2867:
case 3811:
case 819:
case 1646:
case 2646:
case 610:
case 2337:
case 1950:
case 3429:
case 2950:
case 2037:
case 2981:
case 3684:
case 1981:
case 1230:
case 267:
case 4030:
case 1785:
case 3706:
case 1398:
case 2398:
case 2457:
case 1190:
case 4052:
case 1457:
case 3175:
case 3666:
case 824:
case 43:
case 1098:
case 2716:
case 966:
case 1716:
case 782:
case 1775:
case 911:
case 268:
case 1311:
case 2311:
case 2971:
case 2942:
case 1971:
case 3674:
case 3847:
case 2826:
case 2011:
case 1826:
case 53:
case 3790:
case 475:
case 895:
case 3283:
case 558:
case 426:
case 1334:
case 3489:
case 2876:
case 284:
case 2921:
case 3781:
case 184:
case 2034:
case 2906:
case 2725:
case 3518:
case 1725:
case 136:
case 1034:
case 183:
case 2181:
case 283:
case 1058:
case 3413:
case 2699:
case 3386:
case 2044:
case 3125:
case 2864:
case 1292:
case 345:
case 4092:
case 2497:
case 3086:
case 1762:
case 1497:
case 3538:
case 3249:
case 696:
case 1804:
case 1579:
case 2579:
case 1314:
case 1365:
case 272:
case 2365:
case 398:
case 1845:
case 520:
case 2974:
case 3642:
case 2845:
case 1966:
case 130:
case 2022:
case 1022:
case 3408:
case 230:
case 2420:
case 1835:
case 200:
case 2322:
case 4078:
case 3455:
case 3554:
case 181:
case 3433:
case 2228:
case 3146:
case 1912:
case 2861:
case 2912:
case 1228:
case 1736:
case 2341:
case 4028:
case 914:
case 3007:
case 2184:
case 1470:
case 2470:
case 1072:
case 3307:
case 1127:
case 774:
case 3999:
case 848:
case 2072:
case 960:
case 3621:
case 2924:
case 277:
case 2987:
case 3727:
case 1685:
case 1031:
case 1987:
case 673:
case 177:
case 773:
case 2529:
case 1746:
case 3136:
case 2746:
case 1529:
case 821:
case 913:
case 2235:
case 1235:
case 877:
case 2253:
case 497:
case 1780:
case 2459:
case 431:
case 1459:
case 4053:
case 946:
case 121:
case 1878:
case 480:
case 2751:
case 605:
case 705:
case 221:
case 2657:
case 1657:
case 1204:
case 2590:
case 597:
case 3088:
case 3369:
case 77:
case 531:
case 2356:
case 3069:
case 3388:
case 2245:
case 3180:
case 91:
case 4045:
case 3575:
case 3424:
case 2718:
case 830:
case 1581:
case 3668:
case 3163:
case 1096:
case 592:
case 2396:
case 4061:
case 3412:
case 709:
case 609:
case 365:
case 1791:
case 2261:
case 1697:
case 1293:
case 739:
case 639:
case 3613:
case 3118:
case 2293:
case 1763:
case 4093:
case 2763:
case 2703:
case 1703:
case 3040:
case 883:
case 2577:
case 3471:
case 4026:
case 3340:
case 1201:
case 2201:
case 3779:
case 3154:
case 2226:
case 2738:
case 1226:
case 3502:
case 4001:
case 299:
case 1023:
case 2179:
case 28:
case 2754:
case 1754:
case 18:
case 3330:
case 2852:
case 3655:
case 2748:
case 2323:
case 3237:
case 622:
case 836:
case 722:
case 3103:
case 2620:
case 1620:
case 884:
case 3819:
case 2670:
case 727:
case 2373:
case 295:
case 433:
case 1794:
case 195:
case 2892:
case 1129:
case 3309:
case 1073:
case 2129:
case 1215:
case 1276:
case 434:
case 3194:
case 2276:
case 3729:
case 3883:
case 3546:
case 1989:
case 357:
case 404:
case 940:
case 224:
case 1968:
case 3406:
case 2651:
case 379:
case 1651:
case 3948:
case 1757:
case 3559:
case 628:
case 3234:
case 2680:
case 1566:
case 3258:
case 1574:
case 3392:
case 3244:
case 1019:
case 2979:
case 3873:
case 219:
case 641:
case 741:
case 756:
case 76:
case 3157:
case 3205:
case 115:
case 30:
case 449:
case 2113:
case 3298:
case 1587:
case 1618:
case 2587:
case 3768:
case 2524:
case 1524:
case 3713:
case 2168:
case 2840:
case 2663:
case 1060:
case 1267:
case 2512:
case 2462:
case 2189:
case 1189:
case 1797:
case 1462:
case 3028:
case 1402:
case 2402:
case 4007:
case 1810:
case 2133:
case 1000:
case 1207:
case 1155:
case 2638:
case 1638:
case 2155:
case 142:
case 2603:
case 1571:
case 2571:
case 3477:
case 1603:
case 2542:
case 1300:
case 3120:
case 3896:
case 3980:
case 3231:
case 2720:
case 2654:
case 517:
case 3951:
case 3755:
case 3733:
case 3214:
case 1049:
case 2694:
case 2049:
case 1888:
case 3795:
case 2888:
case 3856:
case 1770:
case 2770:
case 744:
case 498:
case 878:
case 985:
case 1506:
case 1339:
case 3585:
case 2339:
case 3484:
case 3918:
case 2521:
case 3427:
case 247:
case 643:
case 1039:
case 2446:
case 1195:
case 3629:
case 2195:
case 1586:
case 1660:
case 679:
case 3404:
case 2586:
case 1843:
case 1091:
case 3505:
case 2363:
case 587:
case 1363:
case 1391:
case 919:
case 328:
case 2391:
case 3558:
case 802:
case 2274:
case 3820:
case 1018:
case 1266:
case 4066:
case 487:
case 1808:
case 2796:
case 658:
case 1796:
case 1833:
case 2855:
case 341:
case 356:
case 2833:
case 2978:
case 1110:
case 1978:
case 1895:
case 60:
case 70:
case 2417:
case 3511:
case 3900:
case 3769:
case 3493:
case 482:
case 3299:
case 2756:
case 1756:
case 571:
case 73:
case 915:
case 1482:
case 1169:
case 2482:
case 1080:
case 2287:
case 582:
case 1051:
case 1683:
case 2380:
case 3857:
case 2952:
case 3029:
case 894:
case 2109:
case 2232:
case 3329:
case 1447:
case 473:
case 3541:
case 4042:
case 1271:
case 3709:
case 1507:
case 2094:
case 1094:
case 2649:
case 3960:
case 3401:
case 2054:
case 1889:
case 3476:
case 2889:
case 2723:
case 1048:
case 2048:
case 2354:
case 4006:
case 1868:
case 1140:
case 2348:
case 1206:
case 3522:
case 4021:
case 3285:
case 1348:
case 2206:
case 596:
case 2003:
case 1338:
case 2813:
case 620:
case 1992:
case 3079:
case 185:
case 3464:
case 2600:
case 2458:
case 335:
case 1458:
case 1444:
case 948:
case 4090:
case 2760:
case 669:
case 1760:
case 2152:
case 3610:
case 11:
case 2097:
case 3752:
case 37:
case 251:
case 3368:
case 921:
case 2535:
case 1553:
case 3068:
case 2434:
case 1434:
case 1535:
case 3669:
case 2940:
case 1940:
case 1593:
case 2656:
case 2719:
case 1719:
case 2593:
case 3467:
case 2561:
case 2411:
case 3792:
case 3183:
case 3688:
case 1561:
case 3894:
case 3262:
case 4050:
case 44:
case 3923:
case 309:
case 665:
case 765:
case 2250:
case 461:
case 1057:
case 516:
case 339:
case 2498:
case 2930:
case 1498:
case 2281:
case 1357:
case 464:
case 3537:
case 752:
case 652:
case 1739:
case 563:
case 3851:
case 3778:
case 2526:
case 3202:
case 2178:
case 3095:
case 838:
case 2673:
case 1673:
case 2910:
case 1178:
case 410:
case 1277:
case 322:
case 2277:
case 1472:
case 808:
case 2441:
case 3609:
case 4027:
case 1284:
case 254:
case 3008:
case 3333:
case 3355:
case 1227:
case 4084:
case 1623:
case 240:
case 3308:
case 866:
case 140:
case 3246:
case 3100:
case 3236:
case 2515:
case 3728:
case 2465:
case 2988:
case 2414:
case 2564:
case 1465:
case 1515:
case 3043:
case 657:
case 757:
case 1969:
case 488:
case 2969:
case 3863:
case 3640:
case 3956:
case 3343:
case 2486:
case 3504:
case 1610:
case 425:
case 3405:
case 3152:
case 1838:
case 205:
case 2313:
case 3760:
case 2838:
case 4075:
case 3545:
case 3397:
case 2803:
case 3909:
case 2275:
case 3458:
case 235:
case 1275:
case 873:
case 493:
case 3553:
case 1068:
case 1216:
case 1389:
case 3434:
case 2068:
case 2389:
case 3535:
case 969:
case 4016:
case 648:
case 17:
case 1854:
case 351:
case 346:
case 2854:
case 1089:
case 1752:
case 2848:
case 1848:
case 2752:
case 1262:
case 2894:
case 1517:
case 1467:
case 2688:
case 1792:
case 4062:
case 3561:
case 576:
case 2669:
case 3357:
case 1225:
case 2225:
case 1119:
case 3281:
case 239:
case 4025:
case 429:
case 3250:
case 3057:
case 896:
case 209:
case 2923:
case 3783:
case 502:
case 2851:
case 1149:
case 2996:
case 3431:
case 2880:
case 1880:
case 402:
case 2395:
case 1395:
case 1547:
case 1609:
case 3277:
case 122:
case 2407:
case 3501:
case 4002:
case 1407:
case 3178:
case 2139:
case 68:
case 78:
case 699:
case 3576:
case 2033:
case 1100:
case 3320:
case 2055:
case 871:
case 3623:
case 1308:
case 2246:
case 340:
case 2308:
case 957:
case 795:
case 695:
case 1818:
case 623:
case 1333:
case 3020:
case 3227:
case 2818:
case 3284:
case 2008:
case 354:
case 407:
case 1008:
case 3422:
case 2630:
case 2343:
case 724:
case 1343:
case 353:
case 2640:
case 2863:
case 3969:
case 1863:
case 882:
case 3700:
case 1043:
case 1891:
case 4036:
case 2891:
case 3414:
case 3564:
case 3988:
case 507:
case 2236:
case 2196:
case 3274:
case 1196:
case 408:
case 2445:
case 2544:
case 128:
case 228:
case 1544:
case 1445:
case 810:
case 958:
case 2710:
case 1949:
case 3586:
case 3660:
case 3843:
case 1505:
case 16:
case 508:
case 2939:
case 3833:
case 719:
case 619:
case 1939:
case 3808:
case 538:
case 926:
case 2453:
case 3266:
case 3018:
case 2435:
case 2820:
case 2534:
case 1299:
case 566:
case 2493:
case 1493:
case 2769:
case 1461:
case 1511:
case 2788:
case 1692:
case 3895:
case 715:
case 3212:
case 45:
case 3380:
case 466:
case 1598:
case 3080:
case 511:
case 1156:
case 3351:
case 3169:
case 1329:
case 3109:
case 1531:
case 2531:
case 413:
case 2173:
case 1029:
case 1678:
case 1173:
case 2029:
case 3952:
case 514:
case 3639:
case 1426:
case 3649:
case 3094:
case 1960:
case 1401:
case 3271:
case 1709:
case 2541:
case 3394:
case 1522:
case 2285:
case 2522:
case 244:
case 1730:
case 4085:
case 3868:
case 920:
case 2730:
case 150:
case 3600:
case 1514:
case 1464:
case 1415:
case 2565:
case 2464:
case 2514:
case 1628:
case 1897:
case 816:
case 1123:
case 2079:
case 2628:
case 3338:
case 143:
case 1379:
case 3130:
case 3003:
case 3680:
case 3566:
case 3416:
case 2234:
case 3383:
case 4034:
case 2948:
case 406:
case 179:
case 1954:
case 2157:
case 2205:
case 2938:
case 3286:
case 3319:
case 1938:
case 1157:
case 1205:
case 584:
case 1092:
case 4005:
case 536:
case 3979:
case 483:
case 3019:
case 4044:
case 2903:
case 3475:
case 2258:
case 23:
case 1768:
case 13:
case 3425:
case 2768:
case 3618:
case 1481:
case 2298:
case 3113:
case 10:
case 2197:
case 2823:
case 3929:
case 568:
case 1789:
case 1197:
case 886:
case 42:
case 315:
case 3797:
case 2994:
case 275:
case 3267:
case 3060:
case 3691:
case 3840:
case 1599:
case 3360:
case 2713:
case 1713:
case 803:
case 2241:
case 2120:
case 2272:
case 1272:
case 3300:
case 2328:
case 3542:
case 1328:
case 3207:
case 79:
case 69:
case 3638:
case 3133:
case 2743:
case 1028:
case 3810:
case 2028:
case 2733:
case 1755:
case 3143:
case 1733:
case 2755:
case 2231:
case 2980:
case 2708:
case 897:
case 477:
case 1708:
case 2896:
case 1963:
case 500:
case 3770:
case 581:
case 3349:
case 530:
case 2795:
case 4065:
case 1214:
case 3049:
case 1265:
case 3436:
case 2265:
case 2214:
case 3195:
case 685:
case 1629:
case 2078:
case 1078:
case 400:
case 2629:
case 944:
case 3446:
case 220:
case 1427:
case 1378:
case 430:
case 2378:
case 2427:
case 818:
case 950:
case 2918:
case 2484:
case 3339:
case 1170:
case 1222:
case 2585:
case 2222:
case 1484:
case 1918:
case 1839:
case 3878:
case 321:
case 269:
case 3751:
case 2920:
case 3459:
case 1516:
case 555:
case 3235:
case 2575:
case 2474:
case 1474:
case 2180:
case 1575:
case 817:
case 348:
case 2388:
case 746:
case 751:
case 646:
case 651:
case 3356:
case 3204:
case 455:
case 2151:
case 1151:
case 1088:
case 2689:
case 578:
case 1689:
case 1191:
case 4082:
case 1163:
case 1487:
case 1424:
case 1525:
case 2282:
case 1282:
case 2525:
case 3718:
case 2310:
case 1310:
case 3293:
case 2118:
case 2613:
case 559:
case 1970:
case 2970:
case 1613:
case 1118:
case 3995:
case 1217:
case 3261:
case 265:
case 1562:
case 2562:
case 165:
case 3791:
case 1643:
case 2502:
case 1148:
case 1502:
case 2643:
case 845:
case 1340:
case 2340:
case 1154:
case 567:
case 2471:
case 152:
case 1471:
case 1442:
case 2247:
case 1040:
case 1432:
case 2608:
case 1608:
case 2030:
case 3748:
case 2957:
case 1655:
case 2655:
case 38:
case 3754:
case 1330:
case 1536:
case 1695:
case 3129:
case 3073:
case 2695:
case 2536:
case 3892:
case 3215:
case 3373:
case 3670:
case 1819:
case 654:
case 2819:
case 3913:
case 3485:
case 3968:
case 324:
case 1406:
case 3527:
case 562:
case 2546:
case 927:
case 3276:
case 2194:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1738555201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,];
var gg_b = "1738555201/";

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
    if (rr["hasavif"] == 1) rr["haswebp"] = 1;
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) subdomainx = "b";
    x = parseInt(postfix[2] + postfix[0] + postfix[1], 16);
    if (!isNaN(x)) {
      subdomainx = String.fromCharCode(97 + gg_m[x]);
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
