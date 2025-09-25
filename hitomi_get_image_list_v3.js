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
case 1744:
case 2017:
case 4026:
case 2478:
case 2642:
case 2215:
case 753:
case 3501:
case 3999:
case 3239:
case 3191:
case 1122:
case 2583:
case 1244:
case 842:
case 1578:
case 2118:
case 1481:
case 1561:
case 3830:
case 2573:
case 1404:
case 996:
case 2986:
case 2194:
case 2504:
case 1473:
case 3193:
case 2581:
case 2568:
case 1966:
case 2026:
case 2693:
case 215:
case 3210:
case 2221:
case 1388:
case 1790:
case 3866:
case 1290:
case 1930:
case 113:
case 294:
case 826:
case 2140:
case 2691:
case 3437:
case 2835:
case 733:
case 3224:
case 2383:
case 1855:
case 1620:
case 3142:
case 64:
case 378:
case 3043:
case 332:
case 1864:
case 3616:
case 937:
case 671:
case 3797:
case 3883:
case 1609:
case 2319:
case 3937:
case 1376:
case 2884:
case 2801:
case 3335:
case 420:
case 3095:
case 3871:
case 3868:
case 220:
case 1726:
case 922:
case 3041:
case 3804:
case 327:
case 1430:
case 516:
case 2366:
case 2803:
case 377:
case 1189:
case 2988:
case 863:
case 2961:
case 2127:
case 1021:
case 1968:
case 2028:
case 3246:
case 714:
case 2169:
case 2566:
case 958:
case 1012:
case 46:
case 892:
case 2476:
case 1023:
case 4090:
case 1971:
case 3406:
case 2857:
case 2116:
case 1576:
case 3499:
case 3535:
case 3964:
case 2978:
case 795:
case 3908:
case 3206:
case 3755:
case 1607:
case 3158:
case 53:
case 3057:
case 3706:
case 2317:
case 3939:
case 759:
case 461:
case 585:
case 1810:
case 2786:
case 512:
case 1154:
case 3667:
case 976:
case 3629:
case 1766:
case 2134:
case 347:
case 2526:
case 4071:
case 1990:
case 2081:
case 942:
case 3634:
case 1088:
case 3910:
case 3003:
case 2633:
case 1426:
case 2250:
case 311:
case 1649:
case 2921:
case 150:
case 2843:
case 3924:
case 1839:
case 1638:
case 62:
case 1417:
case 4081:
case 896:
case 703:
case 348:
case 3084:
case 67:
case 1177:
case 2859:
case 3497:
case 2895:
case 2923:
case 3675:
case 2423:
case 1636:
case 2344:
case 3997:
case 691:
case 3180:
case 3035:
case 2019:
case 907:
case 1315:
case 3737:
case 963:
case 3424:
case 2421:
case 2172:
case 3102:
case 2066:
case 1926:
case 984:
case 2528:
case 992:
case 2100:
case 3592:
case 4019:
case 3341:
case 1428:
case 397:
case 1086:
case 3946:
case 1268:
case 2788:
case 2328:
case 2390:
case 2288:
case 3392:
case 1321:
case 1781:
case 3672:
case 3541:
case 2261:
case 2602:
case 3032:
case 3559:
case 2278:
case 2415:
case 3817:
case 3156:
case 3595:
case 1771:
case 1283:
case 872:
case 2175:
case 1515:
case 1897:
case 3708:
case 3105:
case 188:
case 2778:
case 775:
case 3764:
case 4030:
case 2263:
case 3169:
case 3566:
case 2246:
case 1352:
case 3330:
case 3988:
case 566:
case 2332:
case 2746:
case 800:
case 3127:
case 3961:
case 2535:
case 2964:
case 1024:
case 721:
case 4092:
case 919:
case 252:
case 1599:
case 1901:
case 74:
case 1435:
case 2406:
case 783:
case 3801:
case 549:
case 427:
case 2297:
case 3884:
case 344:
case 1863:
case 3044:
case 2043:
case 1399:
case 232:
case 2883:
case 1039:
case 3803:
case 1888:
case 1048:
case 2873:
case 3450:
case 813:
case 478:
case 4043:
case 432:
case 1861:
case 2452:
case 764:
case 1147:
case 2669:
case 2881:
case 1792:
case 1613:
case 8:
case 3304:
case 1046:
case 1886:
case 2952:
case 2374:
case 3368:
case 315:
case 3373:
case 3950:
case 2303:
case 2866:
case 1932:
case 1292:
case 904:
case 573:
case 1611:
case 1364:
case 382:
case 2142:
case 1622:
case 3371:
case 3140:
case 3691:
case 854:
case 3835:
case 653:
case 2301:
case 2557:
case 3715:
case 1508:
case 3583:
case 2640:
case 184:
case 2739:
case 1564:
case 79:
case 3118:
case 1259:
case 1743:
case 3976:
case 1337:
case 1401:
case 1243:
case 3017:
case 609:
case 3571:
case 2408:
case 834:
case 2955:
case 2501:
case 3478:
case 2464:
case 465:
case 1120:
case 406:
case 3581:
case 3504:
case 1625:
case 265:
case 2248:
case 1403:
case 2574:
case 3488:
case 3573:
case 1241:
case 2748:
case 2830:
case 3194:
case 2145:
case 2392:
case 2448:
case 2672:
case 3288:
case 1203:
case 2032:
case 2600:
case 2946:
case 3185:
case 3788:
case 3328:
case 1703:
case 3390:
case 58:
case 2708:
case 1539:
case 1662:
case 1136:
case 3680:
case 3263:
case 2543:
case 2439:
case 2682:
case 791:
case 2559:
case 2264:
case 3763:
case 3415:
case 2817:
case 1324:
case 3656:
case 1339:
case 900:
case 2424:
case 675:
case 1160:
case 196:
case 2343:
case 1055:
case 2737:
case 3344:
case 3423:
case 2035:
case 1524:
case 1757:
case 390:
case 2592:
case 3412:
case 850:
case 4035:
case 2685:
case 3100:
case 297:
case 2341:
case 3421:
case 1348:
case 402:
case 3590:
case 3528:
case 2102:
case 3250:
case 157:
case 2910:
case 562:
case 3633:
case 3167:
case 3921:
case 1992:
case 3073:
case 2074:
case 247:
case 3526:
case 3841:
case 1732:
case 2634:
case 4084:
case 456:
case 3912:
case 1107:
case 256:
case 4074:
case 593:
case 3923:
case 2844:
case 3071:
case 3517:
case 3658:
case 659:
case 3895:
case 2497:
case 610:
case 1064:
case 2924:
case 411:
case 1815:
case 374:
case 3083:
case 77:
case 3776:
case 1943:
case 236:
case 3915:
case 639:
case 2706:
case 2299:
case 2255:
case 2206:
case 9:
case 2755:
case 1037:
case 1823:
case 1959:
case 2890:
case 954:
case 2828:
case 1941:
case 1687:
case 3286:
case 718:
case 3134:
case 887:
case 3326:
case 1546:
case 1149:
case 436:
case 2667:
case 2897:
case 2323:
case 204:
case 3284:
case 2444:
case 1680:
case 2271:
case 836:
case 1544:
case 2771:
case 1278:
case 4050:
case 3443:
case 3784:
case 2660:
case 2781:
case 2321:
case 3203:
case 2165:
case 1261:
case 3774:
case 2273:
case 2773:
case 2268:
case 1030:
case 380:
case 488:
case 3052:
case 1328:
case 1670:
case 1788:
case 2281:
case 2521:
case 2846:
case 190:
case 1100:
case 2086:
case 811:
case 2428:
case 2490:
case 3665:
case 1421:
case 1590:
case 2926:
case 1066:
case 781:
case 2523:
case 1656:
case 2917:
case 3339:
case 3160:
case 856:
case 3055:
case 2162:
case 4086:
case 1344:
case 3006:
case 59:
case 1423:
case 1019:
case 3524:
case 3757:
case 124:
case 571:
case 3107:
case 1631:
case 2063:
case 1923:
case 1517:
case 1071:
case 2177:
case 4061:
case 346:
case 898:
case 2078:
case 1843:
case 2651:
case 3597:
case 3008:
case 2638:
case 4088:
case 2839:
case 174:
case 1250:
case 2426:
case 1633:
case 1167:
case 2061:
case 1073:
case 2848:
case 2928:
case 1068:
case 2230:
case 2990:
case 3732:
case 1841:
case 1004:
case 2187:
case 616:
case 3153:
case 3941:
case 230:
case 564:
case 928:
case 1786:
case 2810:
case 2154:
case 3151:
case 927:
case 91:
case 1915:
case 322:
case 1317:
case 338:
case 372:
case 430:
case 3677:
case 2944:
case 3823:
case 3397:
case 631:
case 3959:
case 3024:
case 342:
case 1519:
case 2576:
case 1857:
case 1116:
case 4021:
case 2179:
case 947:
case 2983:
case 3506:
case 3109:
case 779:
case 4012:
case 3599:
case 3901:
case 2837:
case 3435:
case 2971:
case 911:
case 1566:
case 1486:
case 1028:
case 2647:
case 1988:
case 3903:
case 2466:
case 2586:
case 956:
case 762:
case 3888:
case 1803:
case 3432:
case 1450:
case 2226:
case 3048:
case 3861:
case 3147:
case 518:
case 2726:
case 120:
case 1874:
case 2430:
case 2696:
case 52:
case 1884:
case 376:
case 3306:
case 1044:
case 3355:
case 3878:
case 2217:
case 541:
case 4:
case 326:
case 2609:
case 3308:
case 1723:
case 3364:
case 2899:
case 2620:
case 591:
case 3537:
case 1691:
case 1371:
case 1140:
case 2363:
case 194:
case 832:
case 413:
case 1835:
case 1223:
case 1721:
case 3792:
case 213:
case 2930:
case 3046:
case 2290:
case 2228:
case 1645:
case 3886:
case 81:
case 1373:
case 1693:
case 1712:
case 2361:
case 2388:
case 2614:
case 3292:
case 1581:
case 3625:
case 1504:
case 1026:
case 3741:
case 1488:
case 3403:
case 1568:
case 3241:
case 2113:
case 902:
case 1573:
case 2561:
case 2481:
case 1194:
case 2468:
case 1986:
case 2852:
case 1583:
case 3508:
case 1715:
case 2122:
case 2471:
case 1118:
case 3259:
case 755:
case 3935:
case 3295:
case 1976:
case 3337:
case 400:
case 2244:
case 743:
case 308:
case 3743:
case 1571:
case 3243:
case 2111:
case 3759:
case 997:
case 3795:
case 2563:
case 852:
case 3120:
case 1478:
case 422:
case 944:
case 3810:
case 1133:
case 1667:
case 1948:
case 3154:
case 2546:
case 2941:
case 1828:
case 3766:
case 269:
case 2153:
case 1446:
case 666:
case 438:
case 970:
case 2037:
case 1131:
case 1799:
case 2235:
case 2959:
case 751:
case 2151:
case 1057:
case 2735:
case 1939:
case 1706:
case 920:
case 2138:
case 3651:
case 258:
case 96:
case 3638:
case 3839:
case 1001:
case 1084:
case 1497:
case 3177:
case 3653:
case 3187:
case 514:
case 1252:
case 1910:
case 3088:
case 111:
case 4064:
case 3649:
case 446:
case 2992:
case 3061:
case 350:
case 458:
case 3512:
case 496:
case 4055:
case 2665:
case 1102:
case 1685:
case 1592:
case 3521:
case 1341:
case 1170:
case 2510:
case 3086:
case 4006:
case 1359:
case 1675:
case 1395:
case 1997:
case 2757:
case 2524:
case 1035:
case 1180:
case 673:
case 3917:
case 699:
case 2339:
case 1737:
case 2055:
case 102:
case 296:
case 1424:
case 1817:
case 1595:
case 1559:
case 1682:
case 1208:
case 3283:
case 2324:
case 3660:
case 2443:
case 3444:
case 2539:
case 533:
case 1708:
case 3897:
case 3323:
case 4052:
case 304:
case 3271:
case 1764:
case 2548:
case 982:
case 861:
case 2052:
case 3204:
case 387:
case 3165:
case 1448:
case 1392:
case 3273:
case 3768:
case 2310:
case 2774:
case 994:
case 300:
case 408:
case 3113:
case 3404:
case 207:
case 1145:
case 484:
case 2474:
case 3468:
case 1503:
case 2850:
case 165:
case 1193:
case 86:
case 2625:
case 492:
case 2741:
case 1574:
case 3966:
case 1248:
case 3483:
case 3111:
case 2198:
case 1584:
case 106:
case 3122:
case 284:
case 1906:
case 2508:
case 2401:
case 3919:
case 2337:
case 2743:
case 3244:
case 635:
case 2484:
case 3578:
case 3363:
case 3806:
case 2876:
case 1557:
case 1618:
case 1724:
case 1384:
case 1437:
case 2611:
case 844:
case 1224:
case 1142:
case 3899:
case 3620:
case 2364:
case 655:
case 3361:
case 1210:
case 3125:
case 820:
case 1866:
case 3388:
case 3614:
case 2046:
case 3290:
case 2613:
case 3228:
case 986:
case 313:
case 2792:
case 1374:
case 1694:
case 2886:
case 1868:
case 2147:
case 662:
case 476:
case 3430:
case 11:
case 2552:
case 2888:
case 2689:
case 2861:
case 3226:
case 1873:
case 2048:
case 559:
case 2957:
case 2679:
case 2355:
case 1616:
case 4048:
case 132:
case 2399:
case 3864:
case 2878:
case 354:
case 3609:
case 2039:
case 1883:
case 3808:
case 1797:
case 3696:
case 276:
case 3376:
case 1297:
case 882:
case 128:
case 679:
case 2863:
case 1059:
case 567:
case 539:
case 3419:
case 2599:
case 2901:
case 503:
case 334:
case 3023:
case 1406:
case 3971:
case 242:
case 1499:
case 3576:
case 1455:
case 1964:
case 1535:
case 2506:
case 2109:
case 3983:
case 4010:
case 3189:
case 3466:
case 3586:
case 2010:
case 2903:
case 442:
case 3350:
case 1092:
case 1246:
case 568:
case 3012:
case 3981:
case 3195:
case 1218:
case 3159:
case 1475:
case 3436:
case 3380:
case 2722:
case 2382:
case 1115:
case 2575:
case 3938:
case 2211:
case 680:
case 1718:
case 2692:
case 2954:
case 3949:
case 3302:
case 1485:
case 1294:
case 3829:
case 3690:
case 3714:
case 3628:
case 3953:
case 3834:
case 2572:
case 1400:
case 788:
case 175:
case 87:
case 1929:
case 299:
case 3502:
case 2128:
case 1853:
case 2190:
case 273:
case 1472:
case 82:
case 2225:
case 817:
case 2833:
case 1740:
case 1639:
case 1482:
case 1562:
case 3580:
case 2016:
case 1851:
case 1079:
case 2643:
case 818:
case 4069:
case 423:
case 3644:
case 2977:
case 2659:
case 1123:
case 2695:
case 787:
case 2858:
case 1240:
case 2831:
case 527:
case 3875:
case 449:
case 983:
case 316:
case 1982:
case 2856:
case 1577:
case 2529:
case 2126:
case 532:
case 3747:
case 1972:
case 2094:
case 249:
case 1429:
case 3045:
case 1900:
case 2334:
case 658:
case 2567:
case 167:
case 4040:
case 2789:
case 139:
case 552:
case 3533:
case 1269:
case 1727:
case 889:
case 2802:
case 3626:
case 331:
case 2965:
case 466:
case 2289:
case 672:
case 3451:
case 3209:
case 3531:
case 1860:
case 3796:
case 750:
case 3882:
case 637:
case 0:
case 3617:
case 3558:
case 3936:
case 3296:
case 3709:
case 3238:
case 7:
case 2842:
case 312:
case 2479:
case 4072:
case 1416:
case 917:
case 3409:
case 2119:
case 1176:
case 1579:
case 3135:
case 2922:
case 941:
case 1589:
case 1186:
case 1652:
case 3070:
case 2527:
case 2754:
case 3749:
case 536:
case 754:
case 2166:
case 4082:
case 2254:
case 3753:
case 2489:
case 2569:
case 1734:
case 2072:
case 1427:
case 1814:
case 3132:
case 279:
case 3666:
case 1389:
case 2893:
case 1150:
case 676:
case 2327:
case 2925:
case 1065:
case 35:
case 195:
case 2845:
case 4075:
case 734:
case 2369:
case 2287:
case 2130:
case 229:
case 547:
case 429:
case 3619:
case 2891:
case 3207:
case 1606:
case 1379:
case 1898:
case 1820:
case 1699:
case 2777:
case 3056:
case 3683:
case 1809:
case 1311:
case 2540:
case 1664:
case 3058:
case 1782:
case 2262:
case 700:
case 3031:
case 3760:
case 4034:
case 2318:
case 597:
case 821:
case 1772:
case 2034:
case 1525:
case 3345:
case 2674:
case 1200:
case 84:
case 3673:
case 1700:
case 153:
case 502:
case 871:
case 1927:
case 608:
case 883:
case 1513:
case 1325:
case 1785:
case 3545:
case 684:
case 301:
case 3414:
case 2104:
case 133:
case 2181:
case 1087:
case 28:
case 1494:
case 109:
case 2029:
case 991:
case 4029:
case 2171:
case 2422:
case 1275:
case 3101:
case 3996:
case 1522:
case 3909:
case 1775:
case 2183:
case 4067:
case 2657:
case 2518:
case 1178:
case 3420:
case 231:
case 1553:
case 1433:
case 3802:
case 758:
case 3367:
case 4042:
case 305:
case 2449:
case 3965:
case 3789:
case 2453:
case 3329:
case 160:
case 2800:
case 1905:
case 1307:
case 3779:
case 1431:
case 2709:
case 1458:
case 366:
case 2796:
case 630:
case 2042:
case 3279:
case 2558:
case 1956:
case 2882:
case 4093:
case 2960:
case 1098:
case 1351:
case 1507:
case 1338:
case 570:
case 3117:
case 118:
case 650:
case 2407:
case 737:
case 2091:
case 769:
case 2875:
case 1353:
case 251:
case 2045:
case 4091:
case 12:
case 825:
case 2885:
case 2247:
case 2333:
case 3529:
case 3126:
case 2093:
case 416:
case 1865:
case 810:
case 3027:
case 3500:
case 582:
case 1402:
case 2570:
case 3225:
case 3572:
case 1470:
case 3128:
case 3190:
case 399:
case 2502:
case 3659:
case 3375:
case 3695:
case 3977:
case 2644:
case 3462:
case 3831:
case 1560:
case 1742:
case 780:
case 1480:
case 2907:
case 1009:
case 909:
case 2460:
case 933:
case 1456:
case 2298:
case 2938:
case 1536:
case 1139:
case 2951:
case 2505:
case 1360:
case 868:
case 3711:
case 1623:
case 1877:
case 1291:
case 945:
case 2720:
case 953:
case 1405:
case 1245:
case 1612:
case 3300:
case 2953:
case 2829:
case 189:
case 2690:
case 2949:
case 2867:
case 3372:
case 3954:
case 2302:
case 867:
case 3765:
case 3104:
case 1445:
case 3029:
case 1514:
case 3168:
case 1493:
case 3173:
case 3265:
case 3594:
case 2103:
case 2545:
case 1108:
case 401:
case 2736:
case 3411:
case 2591:
case 3518:
case 3657:
case 2498:
case 1256:
case 2420:
case 975:
case 3979:
case 3171:
case 925:
case 1491:
case 2101:
case 2184:
case 1598:
case 1520:
case 1663:
case 2058:
case 707:
case 2760:
case 3262:
case 3601:
case 1137:
case 2683:
case 1678:
case 1442:
case 1398:
case 1202:
case 1661:
case 3425:
case 2673:
case 1049:
case 1889:
case 2033:
case 1770:
case 2604:
case 19:
case 4031:
case 2681:
case 3674:
case 3394:
case 784:
case 4058:
case 3369:
case 1686:
case 524:
case 3845:
case 654:
case 1152:
case 853:
case 329:
case 845:
case 4005:
case 3085:
case 2132:
case 2666:
case 968:
case 121:
case 3787:
case 2707:
case 2056:
case 1811:
case 967:
case 1396:
case 3277:
case 1676:
case 2619:
case 3635:
case 3075:
case 1822:
case 3891:
case 2135:
case 3119:
case 3516:
case 2496:
case 4070:
case 2840:
case 164:
case 959:
case 1106:
case 1509:
case 3479:
case 1596:
case 910:
case 2998:
case 2238:
case 1060:
case 2409:
case 3082:
case 4002:
case 2251:
case 3632:
case 2753:
case 726:
case 2002:
case 634:
case 2249:
case 833:
case 1650:
case 285:
case 1233:
case 1733:
case 1347:
case 2070:
case 23:
case 3913:
case 4080:
case 3000:
case 3754:
case 2253:
case 3527:
case 3108:
case 1183:
case 1411:
case 715:
case 1657:
case 580:
case 3491:
case 1422:
case 1171:
case 3007:
case 2418:
case 665:
case 18:
case 2087:
case 606:
case 1104:
case 1765:
case 1413:
case 4077:
case 2969:
case 1029:
case 209:
case 2847:
case 1168:
case 2494:
case 794:
case 2785:
case 1173:
case 2325:
case 83:
case 2513:
case 782:
case 135:
case 2927:
case 1067:
case 1989:
case 253:
case 3661:
case 3202:
case 2700:
case 245:
case 2272:
case 3314:
case 3770:
case 3688:
case 1603:
case 39:
case 155:
case 2313:
case 3270:
case 85:
case 1034:
case 2200:
case 1674:
case 3702:
case 3053:
case 3280:
case 2322:
case 2782:
case 1684:
case 1540:
case 2311:
case 1762:
case 2809:
case 90:
case 2282:
case 3879:
case 3320:
case 3780:
case 495:
case 162:
case 627:
case 3811:
case 1777:
case 3676:
case 1277:
case 2940:
case 3036:
case 677:
case 1891:
case 931:
case 371:
case 414:
case 3152:
case 193:
case 678:
case 2229:
case 129:
case 632:
case 3813:
case 34:
case 1130:
case 546:
case 2267:
case 2814:
case 2065:
case 1925:
case 1327:
case 1787:
case 2150:
case 1893:
case 1569:
case 1489:
case 1632:
case 1072:
case 2427:
case 3825:
case 522:
case 3233:
case 2234:
case 2652:
case 2994:
case 2469:
case 2186:
case 3945:
case 2589:
case 1000:
case 916:
case 1527:
case 569:
case 537:
case 2918:
case 2176:
case 3258:
case 364:
case 2062:
case 720:
case 1922:
case 3199:
case 1842:
case 3060:
case 1911:
case 1082:
case 3905:
case 3551:
case 1880:
case 95:
case 3307:
case 2975:
case 1040:
case 2216:
case 1279:
case 3553:
case 2227:
case 2769:
case 3433:
case 1454:
case 1289:
case 1367:
case 80:
case 105:
case 239:
case 1329:
case 1789:
case 1870:
case 267:
case 2434:
case 2554:
case 360:
case 468:
case 636:
case 3353:
case 3970:
case 1487:
case 2013:
case 1334:
case 4011:
case 341:
case 2467:
case 656:
case 648:
case 2587:
case 3351:
case 3098:
case 3020:
case 2577:
case 761:
case 459:
case 2982:
case 2011:
case 1805:
case 318:
case 1018:
case 3980:
case 1962:
case 1477:
case 2022:
case 3197:
case 1695:
case 2123:
case 901:
case 1659:
case 1977:
case 1462:
case 3480:
case 475:
case 3742:
case 3560:
case 1831:
case 3096:
case 2240:
case 2562:
case 697:
case 2482:
case 3009:
case 2740:
case 3615:
case 1016:
case 3124:
case 1027:
case 2472:
case 2648:
case 2121:
case 698:
case 173:
case 3854:
case 786:
case 2365:
case 851:
case 1833:
case 3402:
case 3110:
case 1225:
case 275:
case 2853:
case 1128:
case 1641:
case 123:
case 2929:
case 3245:
case 2565:
case 584:
case 2485:
case 1465:
case 1585:
case 1372:
case 3933:
case 3293:
case 3745:
case 1575:
case 3456:
case 1382:
case 1722:
case 2718:
case 1211:
case 3958:
case 2362:
case 1711:
case 3877:
case 3623:
case 2218:
case 790:
case 3291:
case 2807:
case 3469:
case 3589:
case 1070:
case 2347:
case 3994:
case 3234:
case 1630:
case 283:
case 1749:
case 835:
case 13:
case 1249:
case 1914:
case 1002:
case 3734:
case 2233:
case 732:
case 778:
case 3427:
case 2060:
case 66:
case 1998:
case 2596:
case 3416:
case 2199:
case 949:
case 1409:
case 3579:
case 1496:
case 2258:
case 727:
case 1751:
case 71:
case 3918:
case 1080:
case 2509:
case 3062:
case 1840:
case 264:
case 530:
case 1738:
case 519:
case 44:
case 905:
case 1619:
case 2396:
case 2822:
case 3606:
case 471:
case 3699:
case 3655:
case 3379:
case 2942:
case 2309:
case 2811:
case 550:
case 1666:
case 3729:
case 3814:
case 644:
case 221:
case 3150:
case 843:
case 15:
case 1894:
case 2686:
case 4036:
case 3767:
case 682:
case 1604:
case 2702:
case 3200:
case 1947:
case 1668:
case 345:
case 1673:
case 4051:
case 1827:
case 829:
case 3054:
case 2314:
case 2688:
case 1033:
case 2889:
case 3809:
case 1260:
case 2038:
case 3311:
case 1157:
case 2442:
case 3664:
case 2678:
case 3282:
case 3440:
case 3322:
case 3782:
case 1671:
case 1058:
case 2280:
case 2663:
case 1031:
case 2137:
case 3163:
case 2205:
case 2491:
case 3077:
case 2520:
case 2598:
case 3418:
case 3637:
case 1101:
case 1591:
case 999:
case 2108:
case 923:
case 3775:
case 3916:
case 1342:
case 3178:
case 2164:
case 1498:
case 2705:
case 3927:
case 3513:
case 1103:
case 1414:
case 4007:
case 3087:
case 333:
case 1174:
case 588:
case 2445:
case 702:
case 2148:
case 1214:
case 1949:
case 3794:
case 3565:
case 686:
case 805:
case 2793:
case 10:
case 3485:
case 2887:
case 2612:
case 798:
case 1714:
case 2047:
case 1141:
case 2877:
case 3475:
case 2623:
case 489:
case 4047:
case 500:
case 2958:
case 797:
case 3362:
case 2405:
case 3807:
case 1380:
case 866:
case 2931:
case 2291:
case 2791:
case 1298:
case 955:
case 2360:
case 1505:
case 2242:
case 1356:
case 3838:
case 3639:
case 1580:
case 1460:
case 98:
case 2124:
case 690:
case 2336:
case 513:
case 3123:
case 1907:
case 2096:
case 1305:
case 1834:
case 3112:
case 2470:
case 3648:
case 3472:
case 1192:
case 849:
case 3089:
case 2402:
case 2902:
case 823:
case 1747:
case 2014:
case 3972:
case 2865:
case 3354:
case 624:
case 674:
case 2970:
case 1247:
case 3900:
case 3646:
case 418:
case 310:
case 1885:
case 2980:
case 1407:
case 42:
case 2197:
case 417:
case 2507:
case 2351:
case 1960:
case 441:
case 3011:
case 4014:
case 2956:
case 3216:
case 711:
case 460:
case 3716:
case 2905:
case 747:
case 661:
case 3377:
case 3975:
case 2862:
case 979:
case 1533:
case 3387:
case 3727:
case 534:
case 756:
case 748:
case 1800:
case 260:
case 3434:
case 2146:
case 2549:
case 2433:
case 2553:
case 3227:
case 131:
case 1872:
case 1449:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1758837602/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,];
var gg_b = "1758837602/";

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
