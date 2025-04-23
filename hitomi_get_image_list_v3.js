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
case 1696:
case 3317:
case 1800:
case 863:
case 1425:
case 3395:
case 3448:
case 371:
case 468:
case 614:
case 2329:
case 929:
case 3706:
case 242:
case 3536:
case 2170:
case 303:
case 3337:
case 1981:
case 2660:
case 626:
case 2816:
case 373:
case 4074:
case 812:
case 2789:
case 2997:
case 2363:
case 1140:
case 501:
case 226:
case 2487:
case 1906:
case 4056:
case 440:
case 191:
case 680:
case 844:
case 3638:
case 455:
case 47:
case 2841:
case 2564:
case 1768:
case 896:
case 2910:
case 2094:
case 2935:
case 3128:
case 1068:
case 981:
case 1598:
case 2794:
case 1145:
case 1314:
case 214:
case 642:
case 3332:
case 1845:
case 3244:
case 911:
case 412:
case 1162:
case 3022:
case 2277:
case 308:
case 3269:
case 1672:
case 3387:
case 1931:
case 3722:
case 93:
case 3586:
case 2052:
case 2412:
case 1226:
case 3558:
case 913:
case 1242:
case 3746:
case 1911:
case 1724:
case 3046:
case 1378:
case 2261:
case 3149:
case 2116:
case 3031:
case 2272:
case 3223:
case 997:
case 1355:
case 1677:
case 198:
case 2985:
case 2626:
case 2057:
case 210:
case 2459:
case 36:
case 882:
case 2509:
case 2019:
case 2348:
case 2757:
case 1466:
case 578:
case 4038:
case 2870:
case 332:
case 3656:
case 1167:
case 3451:
case 1946:
case 3688:
case 2136:
case 988:
case 1043:
case 2437:
case 840:
case 87:
case 1661:
case 3570:
case 2954:
case 709:
case 1743:
case 2739:
case 2642:
case 4018:
case 1350:
case 1100:
case 834:
case 1113:
case 1957:
case 430:
case 2586:
case 965:
case 12:
case 415:
case 2387:
case 3858:
case 510:
case 1623:
case 208:
case 3277:
case 535:
case 2022:
case 2463:
case 1540:
case 2244:
case 3976:
case 4065:
case 3752:
case 1780:
case 2943:
case 1414:
case 254:
case 4060:
case 2149:
case 3261:
case 3528:
case 720:
case 1198:
case 1545:
case 66:
case 2164:
case 1080:
case 2408:
case 2027:
case 2429:
case 786:
case 2656:
case 1179:
case 3870:
case 232:
case 1973:
case 3253:
case 3801:
case 3348:
case 3417:
case 335:
case 3019:
case 1952:
case 3459:
case 4002:
case 3985:
case 3272:
case 3116:
case 2711:
case 3421:
case 1391:
case 3739:
case 608:
case 3980:
case 3437:
case 2501:
case 2011:
case 2688:
case 3136:
case 3875:
case 342:
case 1499:
case 1097:
case 3992:
case 1567:
case 3329:
case 1715:
case 139:
case 1366:
case 2448:
case 2395:
case 2359:
case 201:
case 250:
case 2109:
case 1238:
case 1730:
case 1183:
case 1505:
case 1450:
case 1994:
case 2204:
case 3660:
case 1879:
case 1218:
case 2390:
case 203:
case 3170:
case 3351:
case 514:
case 2536:
case 3101:
case 3296:
case 94:
case 3186:
case 2638:
case 2864:
case 970:
case 2312:
case 2541:
case 1792:
case 3915:
case 326:
case 3487:
case 1092:
case 1562:
case 452:
case 3363:
case 3789:
case 2849:
case 3602:
case 1898:
case 2332:
case 3549:
case 2081:
case 2618:
case 4042:
case 1478:
case 3935:
case 3094:
case 650:
case 601:
case 3564:
case 580:
case 1604:
case 2126:
case 1476:
case 260:
case 3759:
case 3213:
case 31:
case 1177:
case 881:
case 1241:
case 2029:
case 1605:
case 2262:
case 3156:
case 1667:
case 2729:
case 1912:
case 3795:
case 3059:
case 3017:
case 3934:
case 944:
case 1161:
case 3233:
case 2636:
case 3298:
case 2865:
case 3439:
case 3721:
case 333:
case 3560:
case 3279:
case 248:
case 531:
case 462:
case 2763:
case 912:
case 2389:
case 411:
case 1485:
case 43:
case 2538:
case 120:
case 2966:
case 3712:
case 1995:
case 51:
case 299:
case 1172:
case 3473:
case 2422:
case 660:
case 2200:
case 829:
case 2446:
case 1368:
case 1454:
case 2271:
case 963:
case 2147:
case 3893:
case 1937:
case 1014:
case 2708:
case 1504:
case 1990:
case 1921:
case 3649:
case 2008:
case 1714:
case 72:
case 2802:
case 1236:
case 2394:
case 3174:
case 3955:
case 3087:
case 1982:
case 1640:
case 572:
case 2102:
case 3874:
case 3:
case 1275:
case 2352:
case 888:
case 502:
case 2686:
case 3138:
case 955:
case 192:
case 2847:
case 483:
case 1523:
case 3283:
case 65:
case 3346:
case 675:
case 1078:
case 3984:
case 2658:
case 2920:
case 3118:
case 264:
case 982:
case 1270:
case 2574:
case 1324:
case 1778:
case 1201:
case 3494:
case 2165:
case 1286:
case 25:
case 275:
case 3609:
case 3526:
case 2842:
case 3327:
case 3782:
case 1569:
case 116:
case 1497:
case 1099:
case 302:
case 1755:
case 1430:
case 5:
case 418:
case 664:
case 2240:
case 1415:
case 3082:
case 1799:
case 372:
case 2675:
case 813:
case 205:
case 2319:
case 2748:
case 1544:
case 2670:
case 3856:
case 1784:
case 2588:
case 4064:
case 3311:
case 1084:
case 38:
case 1435:
case 1750:
case 4049:
case 3542:
case 1877:
case 811:
case 2339:
case 2283:
case 2193:
case 793:
case 575:
case 2999:
case 2322:
case 1572:
case 3373:
case 3847:
case 44:
case 3925:
case 2138:
case 68:
case 195:
case 804:
case 451:
case 400:
case 1403:
case 238:
case 505:
case 2087:
case 2955:
case 2494:
case 3574:
case 672:
case 1380:
case 3991:
case 2118:
case 1823:
case 2547:
case 3658:
case 3481:
case 1104:
case 2984:
case 543:
case 1468:
case 985:
case 3357:
case 3748:
case 305:
case 3556:
case 3240:
case 202:
case 2327:
case 2782:
case 1683:
case 3842:
case 2526:
case 1376:
case 3048:
case 2609:
case 375:
case 3165:
case 717:
case 1020:
case 3160:
case 28:
case 2978:
case 3588:
case 1844:
case 3245:
case 766:
case 2856:
case 934:
case 638:
case 865:
case 1561:
case 4086:
case 2419:
case 2017:
case 853:
case 2059:
case 231:
case 3729:
case 179:
case 3262:
case 3431:
case 2306:
case 3029:
case 109:
case 3860:
case 156:
case 1963:
case 599:
case 21:
case 1066:
case 2213:
case 2759:
case 360:
case 2095:
case 749:
case 233:
case 2721:
case 2914:
case 3142:
case 2037:
case 404:
case 851:
case 1335:
case 1310:
case 3807:
case 84:
case 1249:
case 2021:
case 870:
case 1908:
case 2737:
case 2790:
case 3063:
case 633:
case 560:
case 1929:
case 3205:
case 3593:
case 930:
case 3966:
case 915:
case 3538:
case 348:
case 2174:
case 1424:
case 631:
case 3518:
case 2649:
case 2732:
case 3708:
case 2381:
case 3147:
case 4070:
case 3271:
case 1951:
case 61:
case 3446:
case 4001:
case 3200:
case 1446:
case 3951:
case 2014:
case 1708:
case 2504:
case 1147:
case 2714:
case 2480:
case 989:
case 708:
case 2921:
case 3424:
case 1802:
case 947:
case 2662:
case 1763:
case 1267:
case 148:
case 2303:
case 2485:
case 2153:
case 579:
case 556:
case 3613:
case 2995:
case 1538:
case 686:
case 2172:
case 1063:
case 2216:
case 1422:
case 446:
case 1593:
case 3392:
case 3929:
case 1205:
case 3908:
case 3310:
case 76:
case 1751:
case 1411:
case 869:
case 2600:
case 1051:
case 3335:
case 2932:
case 732:
case 3443:
case 1142:
case 3066:
case 2177:
case 1029:
case 379:
case 1729:
case 3315:
case 1431:
case 422:
case 3144:
case 2912:
case 921:
case 3766:
case 3091:
case 3561:
case 1670:
case 3720:
case 701:
case 846:
case 3228:
case 1601:
case 745:
case 2784:
case 1245:
case 3844:
case 1588:
case 2750:
case 2084:
case 2343:
case 1339:
case 1160:
case 2258:
case 692:
case 1048:
case 3376:
case 2196:
case 175:
case 216:
case 2497:
case 2430:
case 3683:
case 2569:
case 2861:
case 2987:
case 2799:
case 1406:
case 267:
case 2055:
case 1240:
case 1556:
case 595:
case 4013:
case 1675:
case 105:
case 1319:
case 3468:
case 3354:
case 616:
case 667:
case 2270:
case 164:
case 2645:
case 1574:
case 2778:
case 2853:
case 928:
case 624:
case 2640:
case 127:
case 395:
case 3403:
case 1686:
case 1847:
case 1373:
case 2020:
case 2869:
case 2791:
case 1542:
case 742:
case 3435:
case 877:
case 3410:
case 3784:
case 2228:
case 695:
case 807:
case 2091:
case 2725:
case 99:
case 3055:
case 172:
case 3799:
case 3861:
case 3569:
case 3430:
case 102:
case 4062:
case 3099:
case 3196:
case 2376:
case 1526:
case 524:
case 3778:
case 1628:
case 1950:
case 3324:
case 2380:
case 726:
case 1118:
case 825:
case 2104:
case 3872:
case 1547:
case 2354:
case 2468:
case 3078:
case 1984:
case 1787:
case 3523:
case 714:
case 1193:
case 3492:
case 2403:
case 2553:
case 3275:
case 1:
case 1955:
case 2698:
case 3236:
case 1649:
case 1732:
case 2633:
case 1032:
case 3454:
case 656:
case 3504:
case 3990:
case 609:
case 1381:
case 1893:
case 2951:
case 3368:
case 1664:
case 2804:
case 2392:
case 407:
case 976:
case 3172:
case 2123:
case 3734:
case 1452:
case 959:
case 1279:
case 1818:
case 3662:
case 1914:
case 1090:
case 3671:
case 386:
case 133:
case 2335:
case 2264:
case 3600:
case 836:
case 735:
case 1298:
case 1188:
case 2908:
case 3161:
case 2249:
case 1457:
case 131:
case 1795:
case 1419:
case 2315:
case 2679:
case 279:
case 1156:
case 2330:
case 520:
case 3605:
case 3241:
case 4040:
case 3177:
case 209:
case 2066:
case 1759:
case 3476:
case 1095:
case 425:
case 2596:
case 11:
case 1158:
case 2260:
case 666:
case 1308:
case 1841:
case 1910:
case 1094:
case 2768:
case 2145:
case 2068:
case 293:
case 1549:
case 617:
case 114:
case 823:
case 2703:
case 1602:
case 4069:
case 428:
case 2140:
case 1930:
case 1363:
case 1915:
case 126:
case 2906:
case 1186:
case 2334:
case 1296:
case 2265:
case 291:
case 2513:
case 3035:
case 1101:
case 3879:
case 2867:
case 1170:
case 2420:
case 2805:
case 1816:
case 847:
case 180:
case 3500:
case 691:
case 3010:
case 3455:
case 3730:
case 3293:
case 3505:
case 1482:
case 3015:
case 1665:
case 2696:
case 990:
case 2202:
case 1836:
case 3366:
case 2425:
case 3097:
case 142:
case 3030:
case 693:
case 2579:
case 3715:
case 3567:
case 71:
case 2946:
case 3320:
case 1437:
case 1421:
case 2247:
case 3391:
case 1642:
case 3883:
case 2677:
case 3669:
case 2583:
case 2105:
case 1116:
case 1272:
case 2355:
case 1509:
case 1417:
case 1019:
case 1626:
case 1459:
case 3776:
case 1719:
case 3325:
case 1253:
case 3644:
case 1348:
case 1495:
case 3076:
case 1801:
case 249:
case 3179:
case 2167:
case 922:
case 2922:
case 2242:
case 3754:
case 1647:
case 2024:
case 2724:
case 1528:
case 2378:
case 2911:
case 2840:
case 3939:
case 3780:
case 1976:
case 557:
case 2845:
case 687:
case 447:
case 1073:
case 3540:
case 184:
case 3256:
case 2672:
case 1773:
case 1141:
case 3957:
case 3113:
case 3085:
case 1412:
case 2226:
case 3434:
case 1052:
case 1924:
case 837:
case 1809:
case 1711:
case 3743:
case 3247:
case 387:
case 1570:
case 3661:
case 3946:
case 1451:
case 1501:
case 1011:
case 3384:
case 132:
case 1731:
case 3922:
case 3399:
case 1429:
case 3167:
case 2644:
case 1575:
case 925:
case 2952:
case 1223:
case 1031:
case 1382:
case 3105:
case 1727:
case 398:
case 3677:
case 1149:
case 657:
case 2780:
case 3840:
case 3378:
case 1674:
case 1164:
case 3024:
case 2754:
case 2080:
case 22:
case 2434:
case 2919:
case 1387:
case 1722:
case 476:
case 2623:
case 1828:
case 549:
case 1244:
case 639:
case 1081:
case 3314:
case 3862:
case 393:
case 2478:
case 1128:
case 3768:
case 1781:
case 2604:
case 727:
case 3260:
case 4061:
case 566:
case 391:
case 3334:
case 1864:
case 764:
case 936:
case 1693:
case 1541:
case 2562:
case 2833:
case 3140:
case 2898:
case 3207:
case 2010:
case 705:
case 2500:
case 2994:
case 2450:
case 2735:
case 741:
case 1204:
case 3420:
case 3867:
case 1337:
case 3981:
case 593:
case 2484:
case 775:
case 1968:
case 3579:
case 2499:
case 3425:
case 171:
case 2366:
case 3202:
case 1109:
case 145:
case 2238:
case 1359:
case 2015:
case 2293:
case 2730:
case 2455:
case 1516:
case 3871:
case 1006:
case 3148:
case 3203:
case 3595:
case 2475:
case 3707:
case 1125:
case 2606:
case 212:
case 644:
case 2837:
case 880:
case 2529:
case 1379:
case 2890:
case 948:
case 1615:
case 1697:
case 2821:
case 3559:
case 3765:
case 3409:
case 1191:
case 1281:
case 3760:
case 3521:
case 842:
case 2401:
case 1866:
case 2895:
case 3537:
case 3904:
case 3341:
case 1692:
case 2793:
case 3808:
case 530:
case 2230:
case 2297:
case 2738:
case 2486:
case 4019:
case 960:
case 814:
case 2996:
case 1965:
case 121:
case 2563:
case 2832:
case 296:
case 3689:
case 661:
case 2210:
case 1398:
case 725:
case 3694:
case 3428:
case 826:
case 3863:
case 612:
case 4039:
case 1514:
case 123:
case 1704:
case 2681:
case 1723:
case 2622:
case 2441:
case 1227:
case 2112:
case 3944:
case 3386:
case 975:
case 95:
case 1685:
case 941:
case 905:
case 3652:
case 1462:
case 3163:
case 682:
case 1231:
case 3969:
case 2328:
case 334:
case 3047:
case 3108:
case 2646:
case 67:
case 2074:
case 655:
case 884:
case 480:
case 3375:
case 1744:
case 2195:
case 3026:
case 3657:
case 1166:
case 119:
case 128:
case 352:
case 1820:
case 2972:
case 1599:
case 1891:
case 2056:
case 1769:
case 1405:
case 2627:
case 2416:
case 1222:
case 4089:
case 255:
case 2117:
case 2309:
case 2953:
case 240:
case 1676:
case 2254:
case 3742:
case 2088:
case 2611:
case 1550:
case 385:
case 1246:
case 2436:
case 3848:
case 534:
case 1825:
case 3151:
case 3370:
case 2190:
case 736:
case 2137:
case 810:
case 964:
case 3042:
case 1340:
case 368:
case 3977:
case 50:
case 972:
case 2163:
case 1072:
case 1753:
case 1878:
case 685:
case 1134:
case 2386:
case 445:
case 450:
case 401:
case 3441:
case 3622:
case 4006:
case 1772:
case 878:
case 1988:
case 3074:
case 98:
case 790:
case 3646:
case 2747:
case 473:
case 3961:
case 3887:
case 2243:
case 2449:
case 403:
case 234:
case 1498:
case 582:
case 3774:
case 1624:
case 3328:
case 3159:
case 2726:
case 3953:
case 3117:
case 355:
case 37:
case 1273:
case 3627:
case 3972:
case 2923:
case 3631:
case 137:
case 252:
case 3756:
case 1077:
case 3548:
case 1884:
case 2657:
case 3195:
case 2026:
case 3285:
case 9:
case 2619:
case 1252:
case 2042:
case 4081:
case 3190:
case 1899:
case 1761:
case 86:
case 1520:
case 2151:
case 3088:
case 2639:
case 3882:
case 3254:
case 1061:
case 1855:
case 3121:
case 2007:
case 1796:
case 215:
case 2559:
case 3292:
case 1483:
case 2316:
case 159:
case 794:
case 312:
case 1199:
case 3606:
case 4022:
case 873:
case 361:
case 2203:
case 1566:
case 845:
case 3470:
case 746:
case 2904:
case 801:
case 850:
case 3895:
case 2336:
case 544:
case 1300:
case 3859:
case 1150:
case 2268:
case 3817:
case 871:
case 1918:
case 2689:
case 3832:
case 1362:
case 1814:
case 3093:
case 3215:
case 931:
case 1603:
case 3038:
case 2512:
case 46:
case 91:
case 3486:
case 3738:
case 3187:
case 4031:
case 3230:
case 2808:
case 3793:
case 2341:
case 615:
case 3235:
case 630:
case 563:
case 3812:
case 3018:
case 3458:
case 344:
case 2863:
case 2532:
case 4011:
case 3210:
case 3456:
case 169:
case 2131:
case 3119:
case 3307:
case 1810:
case 1666:
case 2617:
case 3234:
case 1477:
case 1079:
case 2127:
case 283:
case 2962:
case 926:
case 3036:
case 2111:
case 3998:
case 2621:
case 1830:
case 353:
case 3360:
case 3933:
case 2442:
case 1232:
case 2806:
case 1815:
case 2690:
case 629:
case 464:
case 618:
case 914:
case 475:
case 45:
case 2338:
case 1472:
case 3173:
case 3741:
case 3979:
case 54:
case 2967:
case 2589:
case 3663:
case 1916:
case 551:
case 942:
case 3041:
case 2905:
case 229:
case 218:
case 190:
case 3894:
case 2266:
case 1013:
case 3302:
case 1503:
case 1295:
case 3889:
case 1733:
case 2632:
case 3474:
case 2594:
case 899:
case 1568:
case 2764:
case 980:
case 1936:
case 848:
case 1098:
case 1304:
case 443:
case 1033:
case 1154:
case 683:
case 2447:
case 3786:
case 935:
case 460:
case 864:
case 910:
case 1282:
case 4029:
case 3493:
case 3255:
case 2573:
case 3522:
case 2687:
case 297:
case 358:
case 1880:
case 3983:
case 122:
case 3299:
case 3086:
case 2552:
case 662:
case 2220:
case 3418:
case 611:
case 3284:
case 3852:
case 1524:
case 2374:
case 3250:
case 2028:
case 3546:
case 63:
case 2822:
case 1970:
case 2291:
case 304:
case 3531:
case 448:
case 984:
case 2356:
case 1115:
case 688:
case 3648:
case 211:
case 3775:
case 1986:
case 2407:
case 2811:
case 2465:
case 23:
case 365:
case 1496:
case 146:
case 1197:
case 1130:
case 2940:
case 3839:
case 499:
case 1783:
case 2682:
case 1135:
case 2945:
case 3511:
case 2539:
case 1691:
case 3342:
case 706:
case 759:
case 697:
case 805:
case 213:
case 4008:
case 776:
case 3770:
case 1958:
case 1620:
case 85:
case 3278:
case 574:
case 3857:
case 2388:
case 1110:
case 1248:
case 3402:
case 1824:
case 1353:
case 2086:
case 3552:
case 2299:
case 2189:
case 932:
case 723:
case 397:
case 3687:
case 3573:
case 53:
case 1040:
case 4095:
case 3846:
case 41:
case 2786:
case 4090:
case 3181:
case 3291:
case 1554:
case 2347:
case 2546:
case 721:
case 2250:
case 1678:
case 2284:
case 1745:
case 388:
case 2418:
case 1843:
case 604:
case 3940:
case 1655:
case 789:
case 107:
case 3709:
case 265:
case 3465:
case 2075:
case 3811:
case 597:
case 2326:
case 3009:
case 2775:
case 2648:
case 3557:
case 978:
case 674:
case 177:
case 3106:
case 1684:
case 3388:
case 3831:
case 658:
case 954:
case 313:
case 4032:
case 747:
case 3827:
case 3539:
case 872:
case 3962:
case 1597:
case 383:
case 2716:
case 3127:
case 1705:
case 1469:
case 270:
case 3659:
case 2234:
case 3617:
case 1396:
case 24:
case 2365:
case 2913:
case 2157:
case 251:
case 3695:
case 1444:
case 2119:
case 2307:
case 4:
case 529:
case 1263:
case 1005:
case 438:
case 1515:
case 2456:
case 1000:
case 1510:
case 2488:
case 2736:
case 2214:
case 3690:
case 831:
case 3442:
case 2139:
case 719:
case 253:
case 2360:
case 1700:
case 2998:
case 2036:
case 2152:
case 2302:
case 971:
case 3266:
case 2894:
case 329:
case 1229:
case 3393:
case 2979:
case 2173:
case 402:
case 1868:
case 950:
case 3049:
case 973:
case 64:
case 651:
case 2474:
case 1251:
case 3064:
case 3632:
case 2889:
case 1614:
case 1632:
case 1749:
case 2237:
case 820:
case 3614:
case 2290:
case 1900:
case 1594:
case 2798:
case 4050:
case 1064:
case 3251:
case 4084:
case 2936:
case 2098:
case 1764:
case 2221:
case 1049:
case 2892:
case 2217:
case 3868:
case 0:
case 2259:
case 2713:
case 1612:
case 3592:
case 1967:
case 1881:
case 2472:
case 3062:
case 966:
case 1122:
case 3229:
case 917:
case 3762:
case 2916:
case 2503:
case 2185:
case 2295:
case 3535:
case 4078:
case 1111:
case 3700:
case 1442:
case 752:
case 1621:
case 3949:
case 1690:
case 2815:
case 1637:
case 2461:
case 3510:
case 181:
case 690:
case 1131:
case 269:
case 2941:
case 3005:
case 3444:
case 1695:
case 886:
case 2212:
case 1426:
case 2835:
case 1617:
case 183:
case 492:
case 2477:
case 3469:
case 3067:
case 1127:
case 2876:
case 867:
case 3650:
case 1460:
case 294:
case 1539:
case 4014:
case 2958:
case 2620:
case 622:
case 3361:
case 1831:
case 1388:
case 1356:
case 2115:
case 1106:
case 1519:
case 1407:
case 1557:
case 2344:
case 1465:
case 13:
case 824:
case 1811:
case 2369:
case 3377:
case 3843:
case 1682:
case 525:
case 2197:
case 3655:
case 2130:
case 3580:
case 1220:
case 987:
case 2524:
case 3678:
case 2885:
case 3745:
case 1028:
case 3168:
case 2901:
case 3045:
case 1291:
case 3404:
case 1181:
case 1822:
case 486:
case 3554:
case 2970:
case 507:
case 325:
case 1846:
case 2323:
case 1573:
case 3372:
case 197:
case 998:
case 3740:
case 577:
case 1402:
case 1552:
case 3909:
case 1857:
case 2361:
case 3620:
case 1770:
case 3691:
case 1070:
case 625:
case 2650:
case 1001:
case 3130:
case 3197:
case 207:
case 346:
case 2843:
case 1527:
case 1839:
case 1326:
case 165:
case 1075:
case 522:
case 1648:
case 3344:
case 2699:
case 3115:
case 3083:
case 763:
case 2554:
case 3970:
case 607:
case 1347:
case 1873:
case 895:
case 796:
case 2404:
case 2045:
case 3901:
case 1546:
case 1284:
case 3885:
case 3524:
case 2678:
case 1058:
case 174:
case 2248:
case 2585:
case 479:
case 3880:
case 1299:
case 957:
case 1493:
case 3192:
case 1522:
case 456:
case 744:
case 1255:
case 3975:
case 1786:
case 1438:
case 1581:
case 3304:
case 636:
case 3221:
case 4020:
case 768:
case 2251:
case 3180:
case 4091:
case 3237:
case 3295:
case 1302:
case 3503:
case 3185:
case 3013:
case 1894:
case 390:
case 1152:
case 3453:
case 2762:
case 2229:
case 1173:
case 2062:
case 2423:
case 1741:
case 3713:
case 3259:
case 3217:
case 2000:
case 755:
case 1488:
case 740:
case 1651:
case 2964:
case 1214:
case 2771:
case 3897:
case 1933:
case 2949:
case 153:
case 1139:
case 70:
case 2700:
case 879:
case 1998:
case 1036:
case 782:
case 2705:
case 2469:
case 2597:
case 236:
case 14:
case 495:
case 1307:
case 1913:
case 3666:
case 1157:
case 151:
case 1629:
case 2767:
case 369:
case 2515:
case 1506:
case 590:
case 2263:
case 2398:
case 2445:
case 2004:
case 1718:
case 891:
case 2514:
case 4043:
case 487:
case 2960:
case 1681:
case 1508:
case 758:
case 986:
case 1235:
case 3834:
case 3668:
case 1230:
case 1187:
case 1297:
case 2692:
case 1793:
case 576:
case 1486:
case 2907:
case 221:
case 1038:
case 1563:
case 3362:
case 704:
case 196:
case 1215:
case 689:
case 2440:
case 1093:
case 449:
case 3814:
case 2191:
case 1859:
case 1817:
case 2635:
case 4024:
case 3184:
case 1895:
case 1551:
case 2120:
case 289:
case 3096:
case 2125:
case 3566:
case 3367:
case 1837:
case 1529:
case 2379:
case 2615:
case 1890:
case 306:
case 3199:
case 247:
case 1182:
case 1292:
case 376:
case 3155:
case 1821:
case 2630:
case 623:
case 3796:
case 2902:
case 3591:
case 1882:
case 1121:
case 3855:
case 3061:
case 2471:
case 1254:
case 700:
case 751:
case 2246:
case 1088:
case 849:
case 2400:
case 1436:
case 2584:
case 1280:
case 1137:
case 3761:
case 2744:
case 1285:
case 3884:
case 2166:
case 2820:
case 337:
case 1972:
case 1756:
case 219:
case 3479:
case 3077:
case 228:
case 1416:
case 992:
case 2891:
case 3777:
case 2769:
case 1627:
case 2044:
case 2676:
case 1159:
case 4003:
case 17:
case 1117:
case 887:
case 1953:
case 3345:
case 3498:
case 3624:
case 2578:
case 1328:
case 1774:
case 3433:
case 924:
case 1961:
case 1887:
case 3239:
case 2211:
case 1646:
case 1441:
case 2227:
case 3956:
case 3772:
case 2723:
case 3053:
case 3134:
case 3413:
case 1112:
case 3878:
case 39:
case 3257:
case 2926:
case 2462:
case 417:
case 2761:
case 3947:
case 1042:
case 783:
case 1848:
case 1301:
case 1224:
case 1151:
case 3550:
case 3471:
case 2061:
case 1639:
case 2643:
case 781:
case 1726:
case 1582:
case 3222:
case 4092:
case 2479:
case 2077:
case 3820:
case 1657:
case 1026:
case 1464:
case 1243:
case 1108:
case 1747:
case 1358:
case 1047:
case 1449:
case 637:
case 2433:
case 2624:
case 2345:
case 3231:
case 1163:
case 3462:
case 3023:
case 1969:
case 439:
case 519:
case 1652:
case 2219:
case 2413:
case 2134:
case 1386:
case 1587:
case 2956:
case 4015:
case 2834:
case 2668:
case 323:
case 3704:
case 3333:
case 1532:
case 3514:
case 797:
case 3004:
case 3445:
case 3398:
case 1694:
case 2178:
case 1428:
case 589:
case 2814:
case 3440:
case 979:
case 1689:
case 2362:
case 3965:
case 321:
case 4076:
case 2603:
case 3534:
case 3907:
case 1002:
case 1512:
case 3313:
case 1341:
case 3692:
case 1904:
case 1590:
case 1829:
case 4054:
case 3120:
case 1060:
case 73:
case 3866:
case 2294:
case 3635:
case 711:
case 2300:
case 839:
case 2918:
case 2371:
case 3902:
case 1559:
case 1007:
case 2796:
case 1409:
case 115:
case 1765:
case 42:
case 1517:
case 3630:
case 276:
case 521:
case 347:
case 2199:
case 2289:
case 2367:
case 1595:
case 1148:
case 2566:
case 3125:
case 1065:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1745377201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,];
var gg_b = "1745377201/";

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
